import { JimuMapView, JimuMapViewComponent } from "jimu-arcgis";
import {
  AllWidgetProps,
  DataSource,
  DataSourceComponent,
  DataSourceStatus,
  QueriableDataSource,
  React,
} from "jimu-core";
import throttle from "lodash/throttle";
import "./KadastrIndicator.css";

// cross-iframe event bus so widgets inside builder/preview/iframe can talk
const BUS: Document = window.top?.document ?? document;

const WIDGET_EVENTS = {
  YIL_CHANGED: "yilChanged",
  REGION_CHANGED: "regionChanged",
  VEGETATION_STATUS_CHANGED: "vegetationStatusChanged",
  CROP_TYPE_CHANGED: "cropTypeChanged",
  RESET_ALL: "resetAllWidgets",
};

interface IndicatorConfig {
  useApiDataSource?: boolean;

  attributeField?: string; // numeric field to aggregate (for sum/avg/min/max/first)
  decimalPlaces?: number;
  statOperation?: "count" | "sum" | "avg" | "min" | "max" | "first";

  // grouping
  groupByField?: string; // e.g. 'buzilish'
  includeNullCategory?: boolean;
  categoryMode?: "AUTO" | "ENUM";
  enumCategories?: Array<{ label: string; value: string | number | null }>;
  outStatName?: string; // default 'agg'
  displayGroupValue?: string | number | null;

  // “exclude zeros”
  excludeZeroValues?: boolean;

  // filters
  filterExpression?: string;

  // ✅ CHANGED DEFAULT: turi (not tur)
  yerToifasField?: string; // FeatureLayer field name
  yerToifasParam?: string; // API query param name

  // API
  apiEndpoint?: string;
  apiUrl?: string;
  endpoint?: string;
  url?: string;
  responseField?: string;
  useAuthentication?: boolean;
  apiKey?: string;

  // UI
  label?: string;
  unitLabel?: string;
  showFeatureCount?: boolean;
  showLastUpdate?: boolean;
  showFilterSummary?: boolean;
  iconImage?: any;

  // styling overrides (optional)
  backgroundColor?: string;
  textColor?: string;
  labelColor?: string;
  borderRadius?: number | string;
  iconSize?: number | string;
  iconOpacity?: number | string;

  // auto refresh
  autoRefresh?: boolean;
  refreshInterval?: number; // minutes
}

const FILTER_FIELDS = {
  YIL: "yil",
  VILOYAT: "viloyat",
  TUMAN: "tuman",
  F_INN: "f_inn",
  EKIN: "ekin",
  VH: "vh",
  VEG_M: "veg_m",
  // ✅ CHANGED
  TURI: "turi",
};

interface VegetationStatsWidgetState {
  vegetationArea: number | null;
  loading: boolean;
  error: string | null;

  activeMapView?: JimuMapView;
  dataSource?: QueriableDataSource;
  featureLayer?: __esri.FeatureLayer;
  featureLayers?: __esri.FeatureLayer[];

  featureCount: number;
  lastUpdate: Date | null;

  connectionStatus: "idle" | "connecting" | "connected" | "failed";
  mapConnectionAttempts: number;

  // filters
  selectedYil: string;
  selectedViloyat: string;
  selectedTuman: string;
  selectedYerToifas: string; // kept name, but maps to field "turi"

  selectedVegetationStatus: string;
  selectedCropType: string;
  /** Bar chart's current attribute (e.g. status_2025_06_12); use with barCategoryValue to filter like Graff */
  barCategoryField: string | null;
  barCategoryValue: string | null;

  /** Selected NDVI date (YYYY-MM-DD) coming from AgriFilter/Graff */
  selectedNdviDate?: string;
  /** Polygon NDVI status field name for the selected date (e.g. status_2025_09_18) */
  ndviStatusField?: string | null;

  totalArea: number | null;

  // event tracking
  lastFilterEventTimestamp: number;
  isHandlingExternalEvent: boolean;

  // grouping output
  groupResults?: Array<{
    key: string | number | null;
    label: string;
    value: number;
  }>;

  isDarkTheme: boolean;
  widgetSize: "xs" | "sm" | "md" | "lg";

  /** App UI language (Russian by default — not Uzbek Cyrillic) */
  language: "uz_cyr" | "uz_lat" | "ru";
}

export default class VegetationStatsWidget extends React.PureComponent<
  AllWidgetProps<any>,
  VegetationStatsWidgetState
> {
  private throttledFetchData: any;
  private MAX_CONNECTION_ATTEMPTS = 3;
  private initializationTimer: any;
  private refreshTimer: any;
  private _abortController: AbortController | null = null;
  private _isMounted = false;
  private _onReset: () => void;
  private _isResetting = false;
  private _canonicalFeatureLayer?: __esri.FeatureLayer;

  // Viloyat routing cache (viloyat normalized key -> index in `this.state.featureLayers`)
  private _viloyatKeyToLayerIndex: Record<string, number> = {};
  private _containerRef = React.createRef<HTMLDivElement>();
  private _resizeObserver: ResizeObserver | null = null;

  private normalizeLanguage = (raw?: string | null): VegetationStatsWidgetState["language"] => {
    const v = String(raw ?? "")
      .trim()
      .toLowerCase();

    if (v === "ru" || v === "rus" || v === "russian") return "ru";
    if (
      v === "uz_cyr" ||
      v === "uz-cyr" ||
      v === "uz_cyrl" ||
      v === "uz-cyrl" ||
      v === "uz_cyrillic" ||
      v === "uz-cyrillic"
    ) {
      return "uz_cyr";
    }
    if (
      v === "uz_lat" ||
      v === "uz-lat" ||
      v === "uz_latin" ||
      v === "uz-latin" ||
      v === "uz"
    ) {
      return "uz_lat";
    }

    return "ru";
  };

  private resolveInitialLanguage = (): VegetationStatsWidgetState["language"] => {
    try {
      const fromUrl = new URLSearchParams(window.location.search).get("lang");
      const fromStorage =
        localStorage.getItem("app_lang") ||
        localStorage.getItem("evapo_app_lang") ||
        localStorage.getItem("agro_lang");
      return this.normalizeLanguage(fromUrl || fromStorage);
    } catch {
      return "ru";
    }
  };

  private labelNoValue = (): string => {
    const L = this.state.language;
    if (L === "ru") return "Нет значения";
    if (L === "uz_lat") return "Qiymat yo‘q";
    return "Қиймат йўқ";
  };

  private translateKnownError = (msg: string): string => {
    const L = this.state.language;
    const pick = (ru: string, uzLat: string, uzCyr: string) =>
      L === "ru" ? ru : L === "uz_lat" ? uzLat : uzCyr;

    const table: Record<string, [string, string, string]> = {
      "Map view has no map": [
        "У карты нет вида карты",
        "Xarita ko‘rinishi yo‘q",
        "Харита кўриниши йўқ",
      ],
      "No suitable feature layers found in the map.": [
        "На карте нет подходящих векторных слоёв",
        "Xaritada mos feature layer topilmadi",
        "Харитада мос feature layer топилмади",
      ],
      "No feature layer available": [
        "Нет доступного векторного слоя",
        "Feature layer mavjud emas",
        "Feature layer мавжуд эмас",
      ],
      "Select attribute field for this aggregation": [
        "Выберите поле атрибутов для агрегации",
        "Agregatsiya uchun attribut maydonini tanlang",
        "Агрегация учун атрибут майдонини танланг",
      ],
      "Failed to fetch data from API": [
        "Не удалось получить данные по API",
        "API dan ma’lumot olinmadi",
        "API дан маълумот олинмади",
      ],
      "Query failed": [
        "Ошибка запроса",
        "So‘rov xatosi",
        "Сўров хатоси",
      ],
    };

    const row = table[msg];
    if (row) return pick(row[0], row[1], row[2]);
    return msg;
  };

  private handleLanguageChange = (event: Event) => {
    if (!this._isMounted || this._isResetting) return;
    const d: any = (event as CustomEvent)?.detail || {};
    const raw = d.lang ?? d.language ?? d.code;
    const next = this.normalizeLanguage(raw);
    if (next === this.state.language) return;
    this.setState({ language: next });
  };

  constructor(props: AllWidgetProps<any>) {
    super(props);

    const initialLanguage = this.resolveInitialLanguage();

    let initialIsDarkTheme = true;
    try {
      const saved = window.localStorage?.getItem("app_theme");
      const dom = document.documentElement.getAttribute("data-theme");
      if (saved !== null && saved !== undefined) {
        initialIsDarkTheme = saved === "dark";
      } else if (dom === "light" || dom === "dark") {
        initialIsDarkTheme = dom === "dark";
      }
    } catch {
      initialIsDarkTheme = true;
    }

    this.state = {
      vegetationArea: null,
      loading: true,
      error: null,

      featureCount: 0,
      lastUpdate: null,

      connectionStatus: "idle",
      mapConnectionAttempts: 0,
      featureLayers: [],

      selectedYil: "",
      selectedViloyat: "",
      selectedTuman: "",
      selectedYerToifas: "",

      totalArea: null,

      selectedVegetationStatus: "",
      selectedCropType: "",
      barCategoryField: null,
      barCategoryValue: null,

      selectedNdviDate: "",
      ndviStatusField: null,

      lastFilterEventTimestamp: 0,
      isHandlingExternalEvent: false,

      isDarkTheme: initialIsDarkTheme,
      widgetSize: "lg",
      language: initialLanguage,
    };

    this.throttledFetchData = throttle(this.fetchData, 300, {
      leading: false,
      trailing: true,
    });

    // Bind
    this.fetchData = this.fetchData.bind(this);
    this.fetchApiData = this.fetchApiData.bind(this);
    this.onDataSourceCreated = this.onDataSourceCreated.bind(this);
    this.onDataSourceInfoChange = this.onDataSourceInfoChange.bind(this);
    this.onActiveViewChange = this.onActiveViewChange.bind(this);
    this.retryMapConnection = this.retryMapConnection.bind(this);
    this.initializeMapConnection = this.initializeMapConnection.bind(this);
    this.readFiltersFromUrl = this.readFiltersFromUrl.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.setupAutoRefresh = this.setupAutoRefresh.bind(this);

    // External handlers
    this.handleYilChange = this.handleYilChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleConstructionYearChanged =
      this.handleConstructionYearChanged.bind(this);
    this.handleWaterSupplyFilterChange =
      this.handleWaterSupplyFilterChange.bind(this);
    this.handleCategorySelection = this.handleCategorySelection.bind(this);
    this.handleKadastrFiltersChanged =
      this.handleKadastrFiltersChanged.bind(this);
    this.handleKadastrFiltersReset = this.handleKadastrFiltersReset.bind(this);
    this.handleVegetationStatusChange =
      this.handleVegetationStatusChange.bind(this);
    this.handleCropTypeChange = this.handleCropTypeChange.bind(this);

    this._onReset = () => {
      console.log("[VegetationStatsWidget] Resetting widget");
      this._isResetting = true;

      if (this._abortController) {
        this._abortController.abort();
        this._abortController = null;
      }

      this.setState(
        {
          selectedYil: "",
          selectedViloyat: "",
          selectedTuman: "",
          selectedYerToifas: "",
          selectedVegetationStatus: "",
          selectedCropType: "",
          barCategoryField: null,
          barCategoryValue: null,
          vegetationArea: null,
          totalArea: null,
          loading: true,
          error: null,
          groupResults: undefined,
        },
        () => {
          if (this.props.config?.useApiDataSource) this.fetchApiData();
          else if (this.state.connectionStatus === "connected")
            this.fetchData(true);

          setTimeout(() => (this._isResetting = false), 500);
        },
      );
    };
  }

  // ── API-side canonicalization (ASCII apostrophe; normalize o'/g')
  private normalizeUzbekForApi = (s: string): string => {
    if (!s) return "";
    let out = s.trim();

    // unify apostrophe-like marks to ASCII '
    out = out.replace(/[\u02BB\u02BC\u2019\u2018\u2032\u2035`´ˊˋ]/g, "'");

    // normalize o'/g' combos no matter which apostrophe variant was used
    out = out
      .replace(/o['\u02BB\u02BC\u2019\u2018`´ˊˋ]/gi, "o'")
      .replace(/g['\u02BB\u02BC\u2019\u2018`´ˊˋ]/gi, "g'");

    return out.replace(/\s+/g, " ");
  };

  // Find field type on the active feature layer (if available)
  private getFieldType = (name: string): string | null => {
    const fl = this.state.featureLayer;
    if (!fl?.fields) return null;
    const f = fl.fields.find(
      (ff) => ff.name.toLowerCase() === (name || "").toLowerCase(),
    );
    return f?.type || null;
  };

  // Zero-like filter that works for numeric *and* string fields
  private nz = (field: string) => {
    const f = (field || "").trim();
    if (!f) return "(1=1)";

    const t = (this.getFieldType(f) || "").toLowerCase();
    if (/(smallinteger|integer|double|single|float)/.test(t)) {
      return `(${f} > 0)`;
    }
    return `(${f} IS NOT NULL AND ${f} <> '' AND ${f} NOT IN ('0','00','0.0','0,0','-'))`;
  };

  // Variants generator for retries (API **only**)
  private makeApostropheVariants = (s: string): string[] => {
    if (!s) return [""];
    const baseAscii = this.normalizeUzbekForApi(s);
    const variants = ["'", "\u02BB", "\u02BC", "\u2019", "`"]; // ' ʻ ʼ ’ `
    const set = new Set<string>();

    for (const a of variants) {
      let v = s
        .replace(/[\u02BB\u02BC\u2019\u2018\u2032\u2035`´ˊˋ]/g, a)
        .replace(/o['\u02BB\u02BC\u2019\u2018`´ˊˋ]/gi, "o" + a)
        .replace(/g['\u02BB\u02BC\u2019\u2018`´ˊˋ]/gi, "g" + a)
        .replace(/\s+/g, " ")
        .trim();
      set.add(v);
    }

    set.delete(baseAscii);
    return [baseAscii, ...Array.from(set)];
  };

  // District/city suffix variants for API tries
  private makeDistrictSuffixVariants = (raw: string): string[] => {
    if (!raw) return [""];
    const s = raw.trim();
    const hasTumani = /\btumani$/i.test(s);
    const hasShahar = /\bshahar$|\bshahri$/i.test(s);

    const bases = this.makeApostropheVariants(s);
    const out = new Set<string>();

    for (const b of bases) {
      const n = this.normalizeUzbekForApi(b);
      out.add(n);
      if (!hasTumani && !hasShahar) {
        out.add(`${n} tumani`);
        out.add(`${n} shahar`);
        out.add(`${n} shahri`);
      }
    }
    return Array.from(out);
  };

  // Region suffix variants for API tries (viloyat vs shahar)
  private makeRegionSuffixVariants = (raw: string): string[] => {
    if (!raw) return [""];
    const s = raw.trim();
    const bases = this.makeApostropheVariants(s);

    const looksVil = /\bviloyati$/i.test(s);
    const looksSh = /\bshahar$/i.test(s);

    const out = new Set<string>();
    for (const b of bases) {
      const n = this.normalizeUzbekForApi(b);
      out.add(n);
      if (!looksVil && !looksSh) {
        out.add(`${n} viloyati`);
        out.add(`${n} shahar`);
      }
    }
    return Array.from(out);
  };

  private static readonly APOSTROPHE_VARIANTS = ["'", "'", "'", "ʻ", "ʼ", "`"];

  private normalizeApos(s: string): string {
    return (s ?? "").replace(/['''ʻʼ`]/g, "'");
  }

  private escapeArcGIS(value: string): string {
    return value ? value.replace(/'/g, "''") : "";
  }

  private eqAposSmart(field: string, raw: string): string {
    if (!raw) return "";
    const s = this.normalizeApos(String(raw).trim());
    if (!/'/.test(s)) return `${field}='${this.escapeArcGIS(s)}'`;
    const base = s.replace(/'/g, "\uFFFF");
    const parts = VegetationStatsWidget.APOSTROPHE_VARIANTS.map((ch) => {
      const candidate = base.split("\uFFFF").join(ch);
      return `${field}='${this.escapeArcGIS(candidate)}'`;
    });
    return `(${parts.join(" OR ")})`;
  }
  componentDidMount() {
    this._isMounted = true;

    // connection mode
    if (!this.props.config?.useApiDataSource)
      this.setState({ connectionStatus: "connecting" });
    else
      this.setState({ connectionStatus: "connected" }, () =>
        this.fetchApiData(),
      );

    // ✅ Listen to master filter (AgriFilter) and to category/crop selection (e.g. from Pie) so Indicator filters by crop
    document.addEventListener(
      "masterFilterChanged",
      this.handleMasterFilterChanged as EventListener,
    );
    document.addEventListener(
      "categoryFilterChanged",
      this.handleExternalCategory as EventListener,
    );

    // keep reset support
    BUS.addEventListener("resetAllFilters", this._onReset as EventListener);
    BUS.addEventListener("resetAllWidgets", this._onReset as EventListener);

    // optional: url hydration if you still want it
    window.addEventListener("popstate", this.readFiltersFromUrl);

    // initial hydration (if url has values)
    this.readFiltersFromUrl();

    this.setupAutoRefresh();

    // theme
    this.initializeTheme();
    BUS.addEventListener(
      "themeToggled",
      this.handleThemeChange as EventListener,
    );
    document.addEventListener(
      "languageChanged",
      this.handleLanguageChange as EventListener,
    );

    // responsive sizing (deferred to ensure DOM is ready)
    setTimeout(() => {
      if (
        this._isMounted &&
        this._containerRef.current &&
        typeof ResizeObserver !== "undefined"
      ) {
        this._resizeObserver = new ResizeObserver((entries) => {
          const w = entries[0]?.contentRect?.width ?? 0;
          const next: "xs" | "sm" | "md" | "lg" =
            w < 180 ? "xs" : w < 260 ? "sm" : w < 340 ? "md" : "lg";
          if (next !== this.state.widgetSize)
            this.setState({ widgetSize: next });
        });
        this._resizeObserver.observe(this._containerRef.current);
      }
    }, 0);

    // init guard
    this.initializationTimer = setTimeout(
      () => this.ensureInitialization(),
      3000,
    );
  }

  private shouldFetchForViloyat(): boolean {
    // Allow republic-wide fetch when year is set; viloyat not required.
    return !!(this.state.selectedYil || "").trim();
  }

  private handleMasterFilterChanged = (event: Event) => {
    if (!this._isMounted) return;
    if (this._isResetting) return;

    const d: any = (event as CustomEvent)?.detail || {};
    if (!d?.filters) return;

    // ignore self if ever dispatched (defensive)
    if (d?.source === "VegetationStatsWidget") return;

    const filters = d.filters || {};
    const scope = d.scope || {};

    const hasField = (k: string) =>
      Object.prototype.hasOwnProperty.call(filters, k);
    const nextLanguage = hasField("language")
      ? this.normalizeLanguage(
          (filters.language as string | null | undefined) ??
            this.state.language,
        )
      : this.state.language;

    // ✅ IMPORTANT: if AgriFilter locked viloyat, we must use it
    const effectiveViloyat = this.normalizeApos(
      scope.lockedViloyat || filters.viloyat || "",
    );

    const nextYil = (filters.yil ?? "").toString();
    const nextVil = effectiveViloyat;
    const nextTum = this.normalizeApos(filters.tuman || "");
    const nextTuri = this.normalizeApos(filters.turi || filters.tur || ""); // tolerate older payloads
    const nextVh = this.normalizeApos(filters.vh || "");
    const nextBarField = filters.barCategoryField ?? null;
    const nextBarValue = filters.barCategoryValue ?? null;

    // NDVI date → for Indicator we only start filtering by NDVI when
    // there is a manual NDVI-related choice:
    // - explicit date selection (filters.ndviDateLocked from AgriFilter/Graff), or
    // - a VH bucket (filters.vh), or
    // - a bar category value (filters.barCategoryValue, from AgriBar/Graff).
    // Auto-chosen latest NDVI date used for the bar alone should NOT
    // constrain the indicator.
    const rawNdviDate = (filters.ndviDate ?? "").toString().trim();
    const ndviLocked = Boolean((filters as any).ndviDateLocked);
    const hasManualNdviOrVhSelection =
      ndviLocked || !!filters.vh || !!filters.barCategoryValue;

    let nextNdviDate: string | undefined = undefined;
    let nextNdviStatusField: string | null = null;

    if (hasManualNdviOrVhSelection && rawNdviDate) {
      nextNdviDate = rawNdviDate;
      const cfg: any = this.props.config || {};
      const prefix =
        (cfg.polygonStatusPrefix || "status_").toString().trim() || "status_";
      const suffix = nextNdviDate.replace(/-/g, "_");
      nextNdviStatusField = `${prefix}${suffix}`;
    }

    const filterChanged =
      nextYil !== this.state.selectedYil ||
      nextVil !== this.state.selectedViloyat ||
      nextTum !== this.state.selectedTuman ||
      nextTuri !== this.state.selectedYerToifas ||
      nextVh !== this.state.selectedVegetationStatus ||
      nextBarField !== this.state.barCategoryField ||
      nextBarValue !== this.state.barCategoryValue ||
      nextNdviDate !== this.state.selectedNdviDate ||
      nextNdviStatusField !== this.state.ndviStatusField;

    const languageChanged = nextLanguage !== this.state.language;

    if (!filterChanged && !languageChanged) return;

    if (!filterChanged && languageChanged) {
      this.setState({ language: nextLanguage });
      return;
    }

    console.log(
      `[AgriIndicator3] Filter sync yil=${nextYil || ""} viloyat=${nextVil || ""} tuman=${nextTum || ""} turi=${nextTuri || ""} vh=${nextVh || ""}`,
    );

    this.setState(
      {
        language: nextLanguage,
        selectedYil: nextYil,
        selectedViloyat: nextVil,
        selectedTuman: nextTum,
        selectedYerToifas: nextTuri,
        selectedVegetationStatus: nextVh,
        barCategoryField: nextBarField,
        barCategoryValue: nextBarValue,
        selectedNdviDate: nextNdviDate,
        ndviStatusField: nextNdviStatusField,
        // Keep a single canonical layer for all scopes.
        // Only WHERE changes when viloyat/tuman changes.
        featureLayer:
          this._canonicalFeatureLayer ||
          this.getDefaultFeatureLayer(this.state.featureLayers),

        loading: true,
        lastFilterEventTimestamp: Date.now(),
        isHandlingExternalEvent: true,
      },
      () => {
        this.refreshData();
        setTimeout(() => {
          if (this._isMounted)
            this.setState({ isHandlingExternalEvent: false });
        }, 150);
      },
    );
  };

  componentWillUnmount() {
    this._isMounted = false;

    document.removeEventListener(
      "masterFilterChanged",
      this.handleMasterFilterChanged as EventListener,
    );
    document.removeEventListener(
      "categoryFilterChanged",
      this.handleExternalCategory as EventListener,
    );

    BUS.removeEventListener("resetAllFilters", this._onReset as EventListener);
    BUS.removeEventListener("resetAllWidgets", this._onReset as EventListener);

    window.removeEventListener("popstate", this.readFiltersFromUrl);
    BUS.removeEventListener(
      "themeToggled",
      this.handleThemeChange as EventListener,
    );
    document.removeEventListener(
      "languageChanged",
      this.handleLanguageChange as EventListener,
    );

    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }

    if (this.throttledFetchData?.cancel) this.throttledFetchData.cancel();
    if (this.initializationTimer) clearTimeout(this.initializationTimer);
    if (this.refreshTimer) clearInterval(this.refreshTimer);

    if (this._abortController) {
      this._abortController.abort();
      this._abortController = null;
    }
  }

  componentDidUpdate(
    prevProps: AllWidgetProps<any>,
    prevState: VegetationStatsWidgetState,
  ) {
    const { connectionStatus, mapConnectionAttempts } = this.state;
    const { useMapWidgetIds, config } = this.props;

    if (prevProps.config !== config) {
      if (prevProps.config?.useApiDataSource !== config?.useApiDataSource) {
        if (config?.useApiDataSource) {
          this.setState({ connectionStatus: "connected" }, () =>
            this.fetchApiData(),
          );
        } else {
          this.setState({ connectionStatus: "connecting" });
        }
      }
      this.setupAutoRefresh();
    }

    if (
      !config?.useApiDataSource &&
      connectionStatus === "connecting" &&
      useMapWidgetIds &&
      useMapWidgetIds.length > 0 &&
      !this.state.activeMapView &&
      mapConnectionAttempts !== prevState.mapConnectionAttempts
    ) {
      if (mapConnectionAttempts < this.MAX_CONNECTION_ATTEMPTS) {
        setTimeout(() => {
          console.log(
            `[VegStats] Retry attempt ${mapConnectionAttempts + 1} of ${this.MAX_CONNECTION_ATTEMPTS}`,
          );
          this.setState((ps) => ({
            mapConnectionAttempts: ps.mapConnectionAttempts + 1,
          }));
        }, 2000);
      } else {
        this.setState({ connectionStatus: "failed" });
      }
    }
  }

  // =========================
  // External event handlers
  // =========================

  private handleExternalCategory = async (event: CustomEvent) => {
    if (!this._isMounted) return;
    const d = event?.detail || {};
    if (d.source === "VegetationStatsWidget") return;

    const nextTuri = this.normalizeApos(
      d.turi || d.tur || d.category || d.yerToifas || "",
    );
    const nextYil = (d.yil ?? this.state.selectedYil ?? "").toString();
    const nextVil = this.normalizeApos(
      d.viloyat ?? this.state.selectedViloyat ?? "",
    );
    const nextTum = this.normalizeApos(
      d.tuman ?? this.state.selectedTuman ?? "",
    );

    this.setState(
      {
        selectedYil: nextYil,
        selectedViloyat: nextVil,
        selectedTuman: nextTum,
        selectedYerToifas: nextTuri,
        loading: true,
        lastFilterEventTimestamp: Date.now(),
        isHandlingExternalEvent: true,
      },
      () => {
        this.refreshData();
        setTimeout(
          () =>
            this._isMounted &&
            this.setState({ isHandlingExternalEvent: false }),
          200,
        );
      },
    );
  };

  handleConstructionYearChanged = (event: any) => {
    if (this._isResetting) return;
    const { detail } = event || {};
    if (detail?.source === "VegetationStatsWidget") return;

    this.setState(
      {
        selectedYil: detail?.year ? detail.year.toString() : "",
        loading: true,
        lastFilterEventTimestamp: Date.now(),
        isHandlingExternalEvent: true,
      },
      () => {
        this.refreshData();
        setTimeout(
          () =>
            this._isMounted &&
            this.setState({ isHandlingExternalEvent: false }),
          200,
        );
      },
    );
  };

  handleRegionChange = (event: any): void => {
    if (this._isResetting) return;
    if (!event?.detail) return;

    const { viloyat, tuman, source } = event.detail;
    if (source === "VegetationStatsWidget") return;

    this.setState(
      {
        selectedViloyat: this.normalizeApos(viloyat || ""),
        selectedTuman: this.normalizeApos(tuman || ""),
        loading: true,
        lastFilterEventTimestamp: Date.now(),
        isHandlingExternalEvent: true,
      },
      () => {
        this.refreshData();
        setTimeout(
          () =>
            this._isMounted &&
            this.setState({ isHandlingExternalEvent: false }),
          200,
        );
      },
    );
  };

  handleYilChange = (event: any): void => {
    if (this._isResetting) return;
    if (!event?.detail) return;

    const { yil, source } = event.detail;
    if (source === "VegetationStatsWidget") return;

    this.setState(
      {
        selectedYil: yil ? yil.toString() : "",
        loading: true,
        lastFilterEventTimestamp: Date.now(),
        isHandlingExternalEvent: true,
      },
      () => {
        this.refreshData();
        setTimeout(
          () =>
            this._isMounted &&
            this.setState({ isHandlingExternalEvent: false }),
          200,
        );
      },
    );
  };

  handleWaterSupplyFilterChange = (event: CustomEvent) => {
    if (this._isResetting) return;

    const d = event?.detail || {};
    if (d.source === "VegetationStatsWidget") return;

    const now = Date.now();
    if (now - this.state.lastFilterEventTimestamp < 200) return;

    // ✅ CHANGED: support turi + old tur
    const turi = d.turi || d.tur || d.yerToifas || "";

    this.setState(
      {
        selectedViloyat: this.normalizeApos(d.massivNom || d.viloyat || ""),
        selectedTuman: this.normalizeApos(d.tumanNomi || d.tuman || ""),
        selectedYil: d.yil || "",
        selectedYerToifas: this.normalizeApos(turi),
        loading: true,
        lastFilterEventTimestamp: now,
        isHandlingExternalEvent: true,
      },
      () => {
        this.refreshData();
        setTimeout(
          () =>
            this._isMounted &&
            this.setState({ isHandlingExternalEvent: false }),
          200,
        );
      },
    );
  };

  handleCategorySelection = (event: CustomEvent) => {
    if (this._isResetting) return;

    const d = event?.detail || {};
    if (d.source === "VegetationStatsWidget") return;

    // ✅ CHANGED: support turi + old tur
    const turi = d.turi || d.tur || d.category || "";

    this.setState(
      {
        selectedYerToifas: this.normalizeApos(turi),
        selectedYil: d.yil || this.state.selectedYil,
        selectedViloyat: this.normalizeApos(
          d.viloyat || this.state.selectedViloyat,
        ),
        selectedTuman: this.normalizeApos(d.tuman || this.state.selectedTuman),
        loading: true,
        lastFilterEventTimestamp: Date.now(),
        isHandlingExternalEvent: true,
      },
      () => {
        this.refreshData();
        setTimeout(
          () =>
            this._isMounted &&
            this.setState({ isHandlingExternalEvent: false }),
          200,
        );
      },
    );
  };

  handleKadastrFiltersChanged = (event: any) => {
    if (this._isResetting) return;

    const d = event?.detail || {};
    if (d.source === "VegetationStatsWidget") return;

    // ✅ CHANGED: support turi + old tur
    const turi = d.turi || d.tur || "";

    this.setState(
      {
        selectedViloyat: this.normalizeApos(d.viloyat || ""),
        selectedTuman: this.normalizeApos(d.tuman || ""),
        selectedYil: d.yil || "",
        selectedYerToifas: this.normalizeApos(turi),
        loading: true,
        lastFilterEventTimestamp: Date.now(),
        isHandlingExternalEvent: true,
      },
      () => {
        this.refreshData();
        setTimeout(
          () =>
            this._isMounted &&
            this.setState({ isHandlingExternalEvent: false }),
          200,
        );
      },
    );
  };

  handleKadastrFiltersReset = () => this._onReset();

  handleVegetationStatusChange = (event: CustomEvent) => {
    if (this._isResetting) return;

    const d = event?.detail || {};
    if (d.source === "VegetationStatsWidget") return;

    this.setState(
      {
        selectedVegetationStatus: d.status || d.vh || "",
        loading: true,
        lastFilterEventTimestamp: Date.now(),
        isHandlingExternalEvent: true,
      },
      () => {
        this.refreshData();
        setTimeout(
          () =>
            this._isMounted &&
            this.setState({ isHandlingExternalEvent: false }),
          200,
        );
      },
    );
  };

  handleCropTypeChange = (event: CustomEvent) => {
    if (this._isResetting) return;

    const d = event?.detail || {};
    if (d.source === "VegetationStatsWidget") return;

    this.setState(
      {
        selectedCropType: this.normalizeApos(d.cropType || d.ekin_turi || ""),
        loading: true,
        lastFilterEventTimestamp: Date.now(),
        isHandlingExternalEvent: true,
      },
      () => {
        this.refreshData();
        setTimeout(
          () =>
            this._isMounted &&
            this.setState({ isHandlingExternalEvent: false }),
          200,
        );
      },
    );
  };

  refreshData = () => {
    if (this.props.config?.useApiDataSource) {
      if (!this.shouldFetchForViloyat()) {
        this.setState({
          loading: false,
          error: null,
          vegetationArea: null,
          totalArea: null,
          featureCount: 0,
        });
        return;
      }
      this.fetchApiData();
    } else {
      if (this.state.connectionStatus === "connected") {
        if (!this.shouldFetchForViloyat()) {
          this.setState({
            loading: false,
            error: null,
            vegetationArea: null,
            totalArea: null,
            featureCount: 0,
          });
          return;
        }
        this.throttledFetchData();
      } else {
        this.setState({ loading: true });
        setTimeout(() => {
          if (
            this._isMounted &&
            this.state.connectionStatus === "connected" &&
            this.shouldFetchForViloyat()
          )
            this.throttledFetchData();
        }, 1000);
      }
    }
  };

  // =========================
  // URL sync
  // =========================

  readFiltersFromUrl(): void {
    try {
      const urlParams = new URLSearchParams(window.location.search);

      const yil = urlParams.get("yil") || "";
      const viloyat = urlParams.get("viloyat") || "";
      const tuman = urlParams.get("tuman") || "";
      const turi = urlParams.get("turi") || urlParams.get("tur") || "";
      const vh = urlParams.get("vh") || "";
      const ekin = urlParams.get("ekin_turi") || "";

      const nextVil = this.normalizeApos(viloyat);
      const nextTum = this.normalizeApos(tuman);
      const nextTuri = this.normalizeApos(turi);

      const changed =
        yil !== this.state.selectedYil ||
        nextVil !== this.state.selectedViloyat ||
        nextTum !== this.state.selectedTuman ||
        nextTuri !== this.state.selectedYerToifas ||
        this.normalizeApos(vh) !== this.state.selectedVegetationStatus ||
        this.normalizeApos(ekin) !== this.state.selectedCropType;

      if (!changed) return;

      this.setState(
        {
          selectedYil: yil,
          selectedViloyat: nextVil,
          selectedTuman: nextTum,
          selectedYerToifas: nextTuri,
          selectedVegetationStatus: this.normalizeApos(vh),
          selectedCropType: this.normalizeApos(ekin),
        },
        () => {
          // if something is already connected, refresh immediately
          if (this.props.config?.useApiDataSource) this.fetchApiData();
          else if (this.state.connectionStatus === "connected")
            this.throttledFetchData();
        },
      );
    } catch (error) {
      console.error("[VegStats] Error reading URL parameters:", error);
    }
  }

  // =========================
  // Map + DataSource
  // =========================

  ensureInitialization = () => {
    const { dataSource, connectionStatus } = this.state;
    const { config } = this.props;

    if (config?.useApiDataSource) {
      if (!this.shouldFetchForViloyat()) {
        this.setState({
          loading: false,
          error: null,
          vegetationArea: null,
          totalArea: null,
          featureCount: 0,
        });
        return;
      }
      this.fetchApiData();
    } else if (dataSource && connectionStatus === "connected") {
      if (!this.shouldFetchForViloyat()) {
        this.setState({
          loading: false,
          error: null,
          vegetationArea: null,
          totalArea: null,
          featureCount: 0,
        });
        return;
      }
      this.fetchData();
    } else if (
      connectionStatus === "failed" ||
      connectionStatus === "connecting"
    ) {
      this.retryMapConnection();
    }
  };

  retryMapConnection() {
    this.setState({
      connectionStatus: "connecting",
      mapConnectionAttempts: 0,
      error: null,
    });
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if (!jimuMapView) {
      this.setState({ activeMapView: null, featureLayer: null });
      return;
    }

    this.setState({ activeMapView: jimuMapView }, () => {
      if (jimuMapView.view && jimuMapView.view.ready) {
        this.initializeMapConnection(jimuMapView);
      } else {
        const readyWatch = jimuMapView.view.watch("ready", (isReady) => {
          if (isReady) {
            readyWatch.remove();
            this.initializeMapConnection(jimuMapView);
          }
        });
      }
    });
  };

  private makeViloyatKeyForRouting = (viloyat: string): string => {
    return this.normalizeApos(viloyat || "")
      .replace(/['ʻʼ`´]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  };

  private getFeatureLayerForViloyat = (
    viloyat: string,
    layersOverride?: __esri.FeatureLayer[],
  ): __esri.FeatureLayer | undefined => {
    const key = this.makeViloyatKeyForRouting(viloyat);
    const idx = this._viloyatKeyToLayerIndex[key];
    const layers = layersOverride ?? this.state.featureLayers ?? [];
    if (typeof idx === "number" && layers[idx]) return layers[idx];
    return this.state.featureLayer || layers[0];
  };

  private isRepublicLayer = (layer?: __esri.FeatureLayer): boolean => {
    if (!layer) return false;
    const text =
      `${(layer as any)?.title || ""} ${(layer as any)?.id || ""} ${(layer as any)?.url || ""}`.toLowerCase();
    return /\brepublic\b|respublika/.test(text);
  };

  private getDefaultFeatureLayer = (
    layersOverride?: __esri.FeatureLayer[],
  ): __esri.FeatureLayer | undefined => {
    const layers =
      (layersOverride && layersOverride.length
        ? layersOverride
        : this.state.featureLayers) || [];
    if (!layers.length) return this.state.featureLayer;

    const republic = layers.find((l) => this.isRepublicLayer(l));
    if (republic) return republic;

    return layers[0] || this.state.featureLayer;
  };

  private buildViloyatLayerIndex = async (
    layers: __esri.FeatureLayer[],
  ): Promise<void> => {
    this._viloyatKeyToLayerIndex = {};

    const vilField = FILTER_FIELDS.VILOYAT;
    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      if (!layer) continue;
      try {
        if (!layer.loaded && (layer as any).load) await layer.load();

        const q = layer.createQuery();
        (q as any).where = "1=1";
        (q as any).outFields = [vilField];
        (q as any).returnGeometry = false;
        (q as any).returnDistinctValues = true;
        (q as any).num = 5000;

        const res = await layer.queryFeatures(q);
        const feats = res?.features ?? [];
        for (const f of feats) {
          const v = (f.attributes as any)?.[vilField];
          const key = this.makeViloyatKeyForRouting(String(v ?? ""));
          if (key && this._viloyatKeyToLayerIndex[key] === undefined) {
            this._viloyatKeyToLayerIndex[key] = i;
          }
        }
      } catch (e) {
        console.warn("[AgriIndicator3] buildViloyatLayerIndex failed:", i, e);
      }
    }
    console.log("[AgriIndicator3] Viloyat->layer index built:", {
      layerCount: layers.length,
      viloyatCount: Object.keys(this._viloyatKeyToLayerIndex).length,
    });
  };

  initializeMapConnection = async (jimuMapView: JimuMapView) => {
    const map = jimuMapView?.view?.map;
    if (!map) {
      this.setState({
        connectionStatus: "failed",
        error: "Map view has no map",
      });
      return;
    }

    // Use JimuLayerViews to also catch nested feature layers.
    const jlvList: any[] = (jimuMapView as any)?.getAllJimuLayerViews?.() ?? [];

    const fromLayerViews: __esri.FeatureLayer[] = (jlvList || [])
      .map((lv) => lv?.layer)
      .filter((l) => l && (l as any).type === "feature");

    const fromMapTopLevel: __esri.FeatureLayer[] = map.layers
      .toArray()
      .filter((l) => (l as any)?.type === "feature") as __esri.FeatureLayer[];

    const allLayers: __esri.FeatureLayer[] = [];
    const seen = new Set<string>();
    for (const l of [...fromLayerViews, ...fromMapTopLevel]) {
      const key = String((l as any)?.id || (l as any)?.url || "");
      if (!key) continue;
      if (seen.has(key)) continue;
      seen.add(key);
      allLayers.push(l);
    }

    const layers = allLayers;
    const attributeField =
      this.props.config?.attributeField || FILTER_FIELDS.VEG_M;

    // Prefer layers that contain the aggregation field (e.g. veg_m) and viloyat for routing
    const candidates = layers.filter((fl) => {
      const names = (fl.fields || []).map((f) => f.name.toLowerCase());
      return (
        names.includes(attributeField.toLowerCase()) &&
        names.includes(FILTER_FIELDS.VILOYAT.toLowerCase())
      );
    });

    const featureLayers = candidates.length ? candidates : layers;

    if (!featureLayers.length) {
      this.setState({
        connectionStatus: "failed",
        error: "No suitable feature layers found in the map.",
      });
      return;
    }

    await this.buildViloyatLayerIndex(featureLayers);

    const routed = this.getDefaultFeatureLayer(featureLayers);
    this._canonicalFeatureLayer = routed;

    console.log(
      `[AgriIndicator3] Canonical layer selected id=${(routed as any)?.id || ""} title=${(routed as any)?.title || ""} url=${(routed as any)?.url || ""}`,
    );

    this.setState(
      {
        featureLayers,
        featureLayer: routed,
        connectionStatus: "connected",
        error: null,
      },
      () => {
        if (!this.state.dataSource) return;
        if (this.shouldFetchForViloyat()) this.fetchData();
        else {
          this.setState({
            loading: false,
            error: null,
            vegetationArea: null,
            totalArea: null,
            featureCount: 0,
          });
        }
      },
    );
  };

  onDataSourceCreated = (dataSource: DataSource) => {
    this.setState(
      {
        dataSource: dataSource as QueriableDataSource,
        error: null,
      },
      () => {
        if (
          !this.props.config?.useApiDataSource &&
          this.state.connectionStatus === "connected"
        ) {
          if (this.shouldFetchForViloyat()) this.fetchData();
          else
            this.setState({
              loading: false,
              error: null,
              vegetationArea: null,
              totalArea: null,
              featureCount: 0,
            });
        }
      },
    );
  };

  onDataSourceInfoChange = (info: any) => {
    if (this.props.config?.useApiDataSource) return;
    if (this.state.connectionStatus !== "connected") return;

    if (info && info.status === DataSourceStatus.Loaded) {
      const isSelectionChange = info.selectIds && info.selectIds.length > 0;
      if (!isSelectionChange) this.throttledFetchData();
    }
  };

  // =========================
  // WHERE builder (FeatureLayer)
  // =========================

  buildWhereClause(includeViloyat = true): string {
    const {
      selectedYil,
      selectedViloyat,
      selectedTuman,
      selectedVegetationStatus,
      selectedCropType,
      selectedYerToifas,
    } = this.state;

    const clauses: string[] = [];

    // We only want NDVI/date + VH/bar filters to kick in
    // after there is at least some geographic or crop scope,
    // otherwise with just a year selected we'd be filtering
    // the entire country by the latest NDVI date.
    const hasGeoOrCrop =
      !!selectedViloyat || !!selectedTuman || !!selectedYerToifas;

    // Year (robust)
    if (selectedYil) {
      const yDigits =
        String(selectedYil).match(/\b(18|19|20)\d{2}\b/)?.[0] ??
        String(selectedYil).replace(/[^\d]/g, "");
      if (yDigits) clauses.push(`${FILTER_FIELDS.YIL} LIKE '${yDigits}%'`);
      else
        clauses.push(
          `${FILTER_FIELDS.YIL} LIKE '%${this.escapeArcGIS(String(selectedYil))}%'`,
        );
    }

    // Region hierarchy
    if (selectedTuman)
      clauses.push(this.eqAposSmart(FILTER_FIELDS.TUMAN, selectedTuman));
    else if (includeViloyat && selectedViloyat)
      clauses.push(this.eqAposSmart(FILTER_FIELDS.VILOYAT, selectedViloyat));

    // ✅ Crop (turi): always apply when selected so Indicator filters by crop (layer may not have .fields loaded yet)
    const yerToifasField = (
      this.props.config?.yerToifasField || FILTER_FIELDS.TURI
    ).trim();
    if (selectedYerToifas) {
      clauses.push(this.eqAposSmart(yerToifasField, selectedYerToifas));
    }

    // NDVI date-only filter: only require non-null status once we
    // have at least some geographic/crop scope (viloyat/tuman/turi).
    // If only yil is selected, skip NDVI so the indicator shows
    // a pure year-based aggregate.
    if (hasGeoOrCrop && this.state.ndviStatusField) {
      clauses.push(`${this.state.ndviStatusField} IS NOT NULL`);
    }

    // Bar selection: use current bar attribute + value (like Graff), not literal vh field.
    // Again, only after we have some geographic/crop filter to avoid
    // a nationwide NDVI slice with just a year selected.
    if (
      hasGeoOrCrop &&
      this.state.barCategoryField &&
      this.state.barCategoryValue
    ) {
      clauses.push(
        `${this.state.barCategoryField} = '${this.escapeArcGIS(this.state.barCategoryValue)}'`,
      );
    } else if (hasGeoOrCrop && selectedVegetationStatus) {
      clauses.push(
        this.eqAposSmart(FILTER_FIELDS.VH, selectedVegetationStatus),
      );
    }
    if (selectedCropType)
      clauses.push(this.eqAposSmart(FILTER_FIELDS.EKIN, selectedCropType));

    const configFilterExpression = this.props.config?.filterExpression;
    if (
      configFilterExpression &&
      configFilterExpression.trim() !== "" &&
      configFilterExpression !== "1=1" &&
      !clauses.some((c) => c.includes(configFilterExpression))
    ) {
      clauses.push(`(${configFilterExpression})`);
    }

    const result = clauses.length > 0 ? clauses.join(" AND ") : "1=1";
    console.log("[VegetationStatsWidget] Built WHERE clause:", result);
    return result;
  }

  // =========================
  // API url builder
  // =========================

  private buildApiUrl(): string {
    const cfg = (this.props.config || {}) as IndicatorConfig;

    let endpoint: string = (
      cfg.apiEndpoint ??
      cfg.apiUrl ??
      cfg.endpoint ??
      cfg.url ??
      ""
    )
      .toString()
      .trim();

    if (!endpoint)
      throw new Error(
        "Missing API endpoint: set config.apiEndpoint (or apiUrl/endpoint/url).",
      );

    endpoint = endpoint.split("?")[0].replace(/[?&]$/, "");

    const {
      selectedYil,
      selectedViloyat,
      selectedTuman,
      selectedYerToifas,
      selectedVegetationStatus,
      selectedCropType,
    } = this.state;

    const enc = (v: string) =>
      encodeURIComponent(this.normalizeUzbekForApi(v || ""));

    const replacements: Record<string, string> = {
      "{yil}": enc(selectedYil),
      "{viloyat}": enc(selectedViloyat),
      "{tuman}": enc(selectedTuman),

      // ✅ CHANGED: support {turi} and old {tur}
      "{turi}": enc(selectedYerToifas),
      "{tur}": enc(selectedYerToifas),

      "{vh}": enc(selectedVegetationStatus),
      "{ekin_turi}": enc(selectedCropType),
    };

    endpoint = endpoint.replace(
      /\{(yil|viloyat|tuman|turi|tur|vh|ekin_turi)\}/g,
      (m) => replacements[m] ?? "",
    );

    return endpoint;
  }

  // =========================
  // Grouped stats
  // =========================

  private async fetchGroupedStats(): Promise<void> {
    const { featureLayer, connectionStatus } = this.state;
    const cfg = (this.props.config || {}) as IndicatorConfig;

    const groupField = (cfg.groupByField || "").trim();
    const statOp = (cfg.statOperation ||
      "count") as IndicatorConfig["statOperation"];
    const valueField = cfg.attributeField || "*";
    const outName = cfg.outStatName || "agg";

    if (!featureLayer || connectionStatus !== "connected" || !groupField) {
      return this.fetchData();
    }

    if (statOp === "first") {
      return this.fetchGroupedFirst(
        featureLayer,
        groupField,
        valueField,
        outName,
      );
    }

    this.setState({ loading: true, error: null });

    const baseWhere = this.buildWhereClause();

    const oidField = featureLayer.objectIdField || "objectid";
    const onField = statOp === "count" ? oidField : valueField;
    const outStatistics = [
      {
        onStatisticField: onField,
        statisticType: (
          {
            count: "count",
            sum: "sum",
            avg: "avg",
            min: "min",
            max: "max",
          } as any
        )[statOp],
        outStatisticFieldName: outName,
      },
    ] as any;

    let nonNullWhere = `${baseWhere} AND ${groupField} IS NOT NULL`;

    if (cfg.excludeZeroValues) {
      if (statOp === "count" && (cfg.attributeField || "").trim()) {
        nonNullWhere += ` AND ${this.nz((cfg.attributeField as string).trim())}`;
      }
      if (statOp !== "count" && valueField && valueField !== "*") {
        nonNullWhere += ` AND ${this.nz(valueField)}`;
      }
      nonNullWhere += ` AND ${groupField} <> 0 AND ${groupField} <> '0'`;
    }

    const qGrouped = featureLayer.createQuery();
    qGrouped.where = nonNullWhere;
    (qGrouped as any).groupByFieldsForStatistics = [groupField];
    qGrouped.outStatistics = outStatistics as any;
    qGrouped.returnGeometry = false;
    (qGrouped as any).num = 2000;

    const grouped = await featureLayer.queryFeatures(qGrouped);
    const rows: Array<{ key: string | number; value: number }> = (
      grouped?.features || []
    ).map((f: any) => {
      const d = f?.attributes as Record<string, any>;
      return { key: d[groupField], value: Number(d[outName] ?? 0) };
    });

    if (cfg.includeNullCategory) {
      let whereNull = `${baseWhere} AND ${groupField} IS NULL`;
      if (cfg.excludeZeroValues) {
        if (statOp === "count" && (cfg.attributeField || "").trim()) {
          whereNull += ` AND ${this.nz((cfg.attributeField as string).trim())}`;
        }
        if (statOp !== "count" && valueField && valueField !== "*") {
          whereNull += ` AND ${this.nz(valueField)}`;
        }
      }

      const qNull = featureLayer.createQuery();
      qNull.where = whereNull;
      qNull.outStatistics = outStatistics as any;
      qNull.returnGeometry = false;
      (qNull as any).num = 1;

      const nullRes = await featureLayer.queryFeatures(qNull);
      const nullVal = Number(
        nullRes?.features?.[0]?.attributes?.[outName] ?? 0,
      );
      rows.push({ key: null as any, value: nullVal });
    }

    let final: Array<{ key: any; label: string; value: number }>;

    if (
      (cfg.categoryMode || "AUTO") === "ENUM" &&
      Array.isArray(cfg.enumCategories) &&
      cfg.enumCategories.length
    ) {
      const asMap = new Map<any, number>();
      rows.forEach((r) => {
        const k = r.key == null ? null : String(r.key);
        asMap.set(k, (asMap.get(k) || 0) + r.value);
      });

      final = cfg.enumCategories.map((c) => {
        const k = c.value == null ? null : String(c.value);
        return {
          key: c.value,
          label: c.label,
          value: Number(asMap.get(k) || 0),
        };
      });
    } else {
      final = rows
        .sort((a, b) => {
          if (a.key == null && b.key == null) return 0;
          if (a.key == null) return -1;
          if (b.key == null) return 1;
          return String(a.key).localeCompare(String(b.key), undefined, {
            numeric: true,
          });
        })
        .map((r) => ({
          key: r.key,
          label: r.key == null ? this.labelNoValue() : String(r.key),
          value: r.value,
        }));
    }

    const dp = Number(cfg.decimalPlaces || 0);
    const rounded = final.map((x) => ({
      ...x,
      value: dp > 0 ? parseFloat(x.value.toFixed(dp)) : Math.round(x.value),
    }));

    const total = rounded.reduce(
      (s, r) => s + (isNaN(r.value) ? 0 : r.value),
      0,
    );

    const displayKey = cfg.displayGroupValue as any;
    const displayVal =
      displayKey !== undefined
        ? (rounded.find(
            (r) =>
              (r.key == null && displayKey == null) ||
              String(r.key) === String(displayKey),
          )?.value ?? 0)
        : total;

    this.setState({
      groupResults: rounded,
      vegetationArea: displayVal,
      totalArea: total,
      loading: false,
      lastUpdate: new Date(),
      error: null,
    });
  }

  private async fetchGroupedFirst(
    featureLayer: __esri.FeatureLayer,
    groupField: string,
    valueField: string,
    _outName: string,
  ): Promise<void> {
    const cfg = (this.props.config || {}) as IndicatorConfig;

    this.setState({ loading: true, error: null });

    const baseWhere = this.buildWhereClause();

    let where1 = `${baseWhere} AND ${groupField} IS NOT NULL`;
    if (cfg.excludeZeroValues && valueField)
      where1 += ` AND ${this.nz(valueField)}`;

    const q = featureLayer.createQuery();
    q.where = where1;
    q.outFields = [groupField, valueField];
    q.orderByFields = [`${groupField} ASC`];
    q.returnGeometry = false;
    (q as any).num = 3000;

    const res = await featureLayer.queryFeatures(q);

    const firstMap = new Map<any, number>();
    for (const f of res?.features || []) {
      const d = f?.attributes as any;
      const k = d[groupField];
      if (!firstMap.has(k)) firstMap.set(k, Number(d[valueField]));
    }

    const rows: Array<{ key: any; value: number }> = Array.from(
      firstMap.entries(),
    ).map(([key, v]) => ({
      key,
      value: Number.isFinite(Number(v)) ? Number(v) : 0,
    }));

    if (cfg.includeNullCategory) {
      let whereNull = `${baseWhere} AND ${groupField} IS NULL`;
      if (cfg.excludeZeroValues && valueField)
        whereNull += ` AND ${this.nz(valueField)}`;

      const qNull = featureLayer.createQuery();
      qNull.where = whereNull;
      qNull.outFields = [valueField];
      qNull.returnGeometry = false;
      (qNull as any).num = 1;

      const resNull = await featureLayer.queryFeatures(qNull);

      const v = Number(resNull?.features?.[0]?.attributes?.[valueField] ?? 0);
      rows.push({ key: null as any, value: Number.isFinite(v) ? v : 0 });
    }

    const dp = Number(cfg.decimalPlaces || 0);
    const final = rows
      .sort((a, b) => {
        if (a.key == null && b.key == null) return 0;
        if (a.key == null) return -1;
        if (b.key == null) return 1;
        return String(a.key).localeCompare(String(b.key), undefined, {
          numeric: true,
        });
      })
      .map((r) => ({
        key: r.key,
        label: r.key == null ? this.labelNoValue() : String(r.key),
        value: dp > 0 ? parseFloat(r.value.toFixed(dp)) : Math.round(r.value),
      }));

    const total = final.reduce((s, r) => s + (isNaN(r.value) ? 0 : r.value), 0);
    const displayKey = cfg.displayGroupValue as any;
    const displayVal =
      displayKey !== undefined
        ? (final.find(
            (r) =>
              (r.key == null && displayKey == null) ||
              String(r.key) === String(displayKey),
          )?.value ?? 0)
        : total;

    this.setState({
      groupResults: final,
      vegetationArea: displayVal,
      totalArea: total,
      loading: false,
      lastUpdate: new Date(),
      error: null,
    });
  }

  // =========================
  // API fetch
  // =========================

  fetchApiData = async () => {
    if (!this._isMounted) return;
    if (!this.shouldFetchForViloyat()) {
      this.setState({
        loading: false,
        error: null,
        vegetationArea: null,
        totalArea: null,
        featureCount: 0,
      });
      return;
    }

    try {
      if (this._abortController) this._abortController.abort();
      this._abortController = new AbortController();
      const signal = this._abortController.signal;

      this.setState({ loading: true, error: null });

      const {
        selectedYil,
        selectedViloyat,
        selectedTuman,
        selectedYerToifas,
        selectedVegetationStatus,
        selectedCropType,
      } = this.state;

      const endpoint = this.buildApiUrl();

      const baseParams = new URLSearchParams();
      if (selectedYil) baseParams.set("yil", selectedYil);
      if (selectedCropType)
        baseParams.set(
          "ekin_turi",
          this.normalizeUzbekForApi(selectedCropType),
        );
      if (selectedVegetationStatus)
        baseParams.set(
          "vh",
          this.normalizeUzbekForApi(selectedVegetationStatus),
        );

      // ✅ CHANGED: API param default now 'turi'
      const ytfParamName = (
        this.props.config?.yerToifasParam || FILTER_FIELDS.TURI
      ).trim();
      if (selectedYerToifas)
        baseParams.set(
          ytfParamName,
          this.normalizeUzbekForApi(selectedYerToifas),
        );

      const tumList = selectedTuman
        ? this.makeDistrictSuffixVariants(selectedTuman)
        : [""];
      const vilList = selectedViloyat
        ? this.makeRegionSuffixVariants(selectedViloyat)
        : [""];

      let finalValue = 0;
      let matched = false;

      outer: for (const tum of tumList) {
        for (const vil of vilList) {
          const qp = new URLSearchParams(baseParams.toString());
          if (tum) qp.set("tuman", tum);
          if (vil) qp.set("viloyat", vil);

          const url = `${endpoint}?${qp.toString()}`;
          console.log(`[VegStats] Fetching data from API: ${url}`);

          const opts: RequestInit = {
            method: "GET",
            headers: { Accept: "application/json" },
            signal,
          };

          if (
            this.props.config?.useAuthentication &&
            this.props.config?.apiKey
          ) {
            (opts.headers as any)["Authorization"] =
              `Bearer ${this.props.config.apiKey}`;
          }

          const resp = await fetch(url, opts);
          if (signal.aborted) {
            this.setState({ loading: false });
            return;
          }
          if (!resp.ok)
            throw new Error(`API request failed with status ${resp.status}`);

          const data = await resp.json();

          const cfgField = (this.props.config?.responseField || "").trim();
          const candidates = [
            cfgField,
            "total",
            "value",
            "count",
            "maydon",
          ].filter(Boolean) as string[];

          let value: number | null = null;
          for (const key of candidates) {
            if (key && data && typeof data === "object" && key in data) {
              const v = Number(data[key]);
              if (!Number.isNaN(v)) {
                value = v;
                break;
              }
            }
            if (
              key &&
              data?.result &&
              typeof data.result === "object" &&
              key in data.result
            ) {
              const v = Number(data.result[key]);
              if (!Number.isNaN(v)) {
                value = v;
                break;
              }
            }
          }
          if (value == null && typeof data === "number") value = Number(data);

          if (value != null && !Number.isNaN(value)) {
            finalValue = value;
            matched = true;
            break outer;
          }
        }
      }

      const decimals = this.props.config?.decimalPlaces || 0;
      const rounded =
        decimals > 0
          ? parseFloat(finalValue.toFixed(decimals))
          : Math.round(finalValue);

      this.setState({
        vegetationArea: rounded,
        totalArea: rounded,
        loading: false,
        lastUpdate: new Date(),
        error: null,
      });
    } catch (err: any) {
      if (err?.name === "AbortError") return;
      console.error("[VegStats] Error fetching API data:", err);
      this.setState({
        error: err?.message || "Failed to fetch data from API",
        loading: false,
      });
    } finally {
      this._abortController = null;
    }
  };

  // =========================
  // FeatureLayer stats fetch
  // =========================

  fetchData = async (_forceRefresh?: boolean) => {
    if (this.props.config?.useApiDataSource) return this.fetchApiData();

    if (!this.shouldFetchForViloyat()) {
      // Keep it blank when viloyat isn't chosen (also covers groupBy mode).
      this.setState({
        loading: false,
        error: null,
        vegetationArea: null,
        totalArea: null,
        featureCount: 0,
      });
      return;
    }

    if (this.props.config?.groupByField) return this.fetchGroupedStats();

    if (this.state.connectionStatus !== "connected") return;

    try {
      if (this._abortController) this._abortController.abort();
      this._abortController = new AbortController();

      this.setState({ loading: true, error: null });

      const fl = this._canonicalFeatureLayer || this.state.featureLayer;
      if (!fl) {
        this.setState({ loading: false, error: "No feature layer available" });
        return;
      }
      const oidField = fl.objectIdField || "objectid";

      const op = (this.props.config?.statOperation || "count") as
        | "count"
        | "sum"
        | "avg"
        | "min"
        | "max"
        | "first";
      const field = (this.props.config?.attributeField || "").trim();

      let where = this.buildWhereClause();

      if (this.props.config?.excludeZeroValues && field) {
        where += ` AND ${this.nz(field)}`;
      }

      if (op === "first") {
        const q = fl.createQuery();
        q.where = where;
        q.outFields = [field];
        q.orderByFields = [`${field} ASC`];
        q.returnGeometry = false;
        q.num = 1;

        const res = await fl.queryFeatures(q);
        const v = Number(res?.features?.[0]?.attributes?.[field] ?? 0);
        const dp = Number(this.props.config?.decimalPlaces || 0);
        const val = dp > 0 ? parseFloat(v.toFixed(dp)) : Math.round(v);

        this.setState({
          vegetationArea: val,
          totalArea: val,
          featureCount: res?.features?.length || 0,
          loading: false,
          lastUpdate: new Date(),
          error: null,
        });
        return;
      }

      const statMap: Record<
        "count" | "sum" | "avg" | "min" | "max",
        __esri.StatisticDefinition["statisticType"]
      > = {
        count: "count",
        sum: "sum",
        avg: "avg",
        min: "min",
        max: "max",
      };

      if (op !== "count" && !field) {
        this.setState({
          loading: false,
          error: "Select attribute field for this aggregation",
        });
        return;
      }

      const onField = op === "count" ? oidField : field;

      // In Agri3, overall "sum" should reflect totals across regional layers.
      // If regional layers exist, use them (excluding republic layer to avoid overlap).
      if (op === "sum") {
        const allLayers = (this.state.featureLayers || []).filter(Boolean);
        const selectedVil = (this.state.selectedViloyat || "").trim();
        const selectedTum = (this.state.selectedTuman || "").trim();

        let layersForSum: __esri.FeatureLayer[] = [];
        let whereForSum = where;

        if (selectedVil) {
          // Use the routed regional layer and avoid fragile viloyat text predicate.
          const routed =
            this.getFeatureLayerForViloyat(selectedVil, allLayers) || fl;
          layersForSum = [routed];
          whereForSum = this.buildWhereClause(false);
          if (this.props.config?.excludeZeroValues && field) {
            whereForSum += ` AND ${this.nz(field)}`;
          }
        } else {
          const nonRepublicLayers = allLayers.filter(
            (l) => !this.isRepublicLayer(l),
          );
          layersForSum = nonRepublicLayers.length ? nonRepublicLayers : [fl];
        }

        let totalRaw = 0;
        let usedLayerCount = 0;

        for (const layer of layersForSum) {
          const layerFields = (layer.fields || []).map((f) =>
            (f?.name || "").toLowerCase(),
          );
          if (!layerFields.includes(onField.toLowerCase())) continue;

          const qLayer = layer.createQuery();
          qLayer.where = whereForSum;
          qLayer.outStatistics = [
            {
              onStatisticField: onField,
              statisticType: "sum",
              outStatisticFieldName: "agg",
            },
          ] as any;
          qLayer.returnGeometry = false;

          const statsLayer = await layer.queryFeatures(qLayer);
          const rawLayer = Number(
            statsLayer?.features?.[0]?.attributes?.agg ?? 0,
          );
          totalRaw += rawLayer;
          usedLayerCount++;
        }

        console.log(
          `[AgriIndicator3] Multi-layer sum where=${whereForSum} layers=${usedLayerCount} selectedViloyat=${selectedVil || ""} selectedTuman=${selectedTum || ""} raw=${totalRaw}`,
        );

        const dp = Number(this.props.config?.decimalPlaces || 0);
        const totalVal =
          dp > 0 ? parseFloat(totalRaw.toFixed(dp)) : Math.round(totalRaw);

        this.setState({
          vegetationArea: totalVal,
          totalArea: totalVal,
          loading: false,
          lastUpdate: new Date(),
          error: null,
        });
        return;
      }

      console.log(
        `[AgriIndicator3] Stats query layerId=${(fl as any)?.id || ""} layerTitle=${(fl as any)?.title || ""} op=${op} field=${onField} where=${where}`,
      );

      const q = fl.createQuery();
      q.where = where;
      q.outStatistics = [
        {
          onStatisticField: onField,
          statisticType: statMap[op],
          outStatisticFieldName: "agg",
        },
      ] as any;
      q.returnGeometry = false;

      const stats = await fl.queryFeatures(q);
      const raw = Number(stats?.features?.[0]?.attributes?.agg ?? 0);
      console.log(`[AgriIndicator3] Stats result raw=${raw}`);
      const dp = Number(this.props.config?.decimalPlaces || 0);
      const val = dp > 0 ? parseFloat(raw.toFixed(dp)) : Math.round(raw);

      this.setState({
        vegetationArea: val,
        totalArea: val,
        loading: false,
        lastUpdate: new Date(),
        error: null,
      });
    } catch (e: any) {
      if (e?.name === "AbortError") {
        this.setState({ loading: false });
        return;
      }
      console.error(e);
      this.setState({ loading: false, error: e?.message || "Query failed" });
    } finally {
      this._abortController = null;
    }
  };

  // =========================
  // Formatting + theme
  // =========================

  formatNumber = (num: number) => {
    if (num === null || num === undefined) return "-";

    const decimalPlaces = this.props.config?.decimalPlaces || 0;
    const formattedNum =
      decimalPlaces > 0
        ? num.toFixed(decimalPlaces)
        : Math.round(num).toString();
    return formattedNum.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  formatUpdateTime = (date: Date) => {
    if (!date) return "";
    const h = date.getHours().toString().padStart(2, "0");
    const m = date.getMinutes().toString().padStart(2, "0");
    return `${h}:${m}`;
  };

  setupAutoRefresh() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = null;
    }

    const { autoRefresh, refreshInterval } = (this.props.config ||
      {}) as IndicatorConfig;
    if (autoRefresh !== false && refreshInterval) {
      const intervalMs = (refreshInterval || 5) * 60 * 1000;
      this.refreshTimer = setInterval(() => {
        if (this._isMounted) this.refreshData();
      }, intervalMs);
    }
  }

  private initializeTheme = (): void => {
    const saved = window.localStorage?.getItem("app_theme");
    const dom = document.documentElement.getAttribute("data-theme");
    let isDarkTheme = true;
    if (saved !== null && saved !== undefined) {
      isDarkTheme = saved === "dark";
    } else if (dom === "light" || dom === "dark") {
      isDarkTheme = dom === "dark";
    }
    this.setState({ isDarkTheme });
  };

  handleThemeChange = (event: any): void => {
    const detail = (event as CustomEvent)?.detail;
    if (detail?.theme) {
      this.setState({ isDarkTheme: detail.theme === "dark" });
    } else {
      this.initializeTheme();
    }
  };

  // =========================
  // ✅ KEY FIX: do not override CSS theme unless user explicitly sets values
  // =========================

  getCustomStyles = () => {
    const cfg = (this.props.config || {}) as IndicatorConfig;

    const backgroundColorRaw = (cfg.backgroundColor ?? "").toString().trim();
    const hasBgOverride = backgroundColorRaw.length > 0;

    const textColorRaw = (cfg.textColor ?? "").toString().trim();
    const labelColorRaw = (cfg.labelColor ?? "").toString().trim();

    const borderRadiusCfg =
      typeof cfg.borderRadius === "number"
        ? cfg.borderRadius
        : typeof cfg.borderRadius === "string" && cfg.borderRadius.trim() !== ""
          ? Number(cfg.borderRadius)
          : null;

    const iconSizeCfg =
      typeof cfg.iconSize === "number"
        ? cfg.iconSize
        : typeof cfg.iconSize === "string" && cfg.iconSize.trim() !== ""
          ? Number(cfg.iconSize)
          : null;

    const iconOpacityCfg =
      typeof cfg.iconOpacity === "number"
        ? cfg.iconOpacity
        : typeof cfg.iconOpacity === "string" && cfg.iconOpacity.trim() !== ""
          ? Number(cfg.iconOpacity)
          : null;

    const containerStyles: any = {};

    if (borderRadiusCfg != null && Number.isFinite(borderRadiusCfg))
      containerStyles.borderRadius = `${borderRadiusCfg}px`;
    if (textColorRaw) containerStyles.color = textColorRaw;

    if (hasBgOverride) {
      const isGradient = /gradient/i.test(backgroundColorRaw);
      if (isGradient) containerStyles.background = backgroundColorRaw;
      else containerStyles.backgroundColor = backgroundColorRaw;
    }

    const statLabel: any = {};
    if (labelColorRaw) statLabel.color = labelColorRaw;

    const statValue: any = {};
    if (textColorRaw) statValue.color = textColorRaw;

    const iconContainer: any = {};
    if (iconSizeCfg != null && Number.isFinite(iconSizeCfg)) {
      iconContainer.width = `${iconSizeCfg}px`;
      iconContainer.height = `${iconSizeCfg}px`;
    }

    const icon: any = {};
    if (iconOpacityCfg != null && Number.isFinite(iconOpacityCfg)) {
      icon.opacity = Math.max(0, Math.min(1, iconOpacityCfg / 100));
    }

    return {
      container: containerStyles,
      statLabel,
      statValue,
      iconContainer,
      icon,
      hasBgOverride,
    };
  };

  // =========================
  // UI
  // =========================

  render() {
    const {
      vegetationArea,
      loading,
      error,
      connectionStatus,
      lastUpdate,
      selectedYil,
      selectedViloyat,
      selectedTuman,
      selectedYerToifas,
      groupResults,
      language,
    } = this.state;

    const { config, useDataSources, useMapWidgetIds } = this.props;
    const useApiDataSource = !!config?.useApiDataSource;

    const defaultStatLabel =
      language === "ru"
        ? "Площадь посевов"
        : language === "uz_lat"
          ? "Ekin maydonlari"
          : "Экин майдонлари";

    const label =
      config?.label && String(config.label).trim()
        ? config.label
        : defaultStatLabel;

    const defaultUnit = language === "uz_lat" ? "ga" : "га";
    const unitLabel =
      config?.unitLabel != null && String(config.unitLabel).trim() !== ""
        ? config.unitLabel
        : defaultUnit;

    const groupByField = (config?.groupByField || "").trim();
    const isGrouped = !!groupByField;
    const statOp = (config?.statOperation || (isGrouped ? "count" : "sum")) as
      | "count"
      | "sum"
      | "avg"
      | "min"
      | "max"
      | "first";
    const isCountMode = isGrouped && statOp === "count";
    const effectiveUnit = isCountMode ? "" : unitLabel || "";

    const resolveCategoryLabel = (
      v: string | number | null | undefined,
    ): string => {
      if (v == null) return this.labelNoValue();
      if (
        (config?.categoryMode || "AUTO") === "ENUM" &&
        Array.isArray(config?.enumCategories)
      ) {
        const hit = config.enumCategories.find(
          (c) =>
            (c.value == null && v == null) || String(c.value) === String(v),
        );
        if (hit?.label) return hit.label;
      }
      return String(v);
    };

    const dVal = config?.displayGroupValue as any;
    const bucketCaption = isGrouped
      ? dVal === undefined
        ? language === "ru"
          ? `Итого по полю ${groupByField}`
          : language === "uz_lat"
            ? `Jami (${groupByField})`
            : `Жами (${groupByField})`
        : `${groupByField} = ${resolveCategoryLabel(dVal)}`
      : null;

    const isInitializing =
      !useApiDataSource &&
      (connectionStatus === "connecting" || connectionStatus === "idle");

    const customStyles = this.getCustomStyles();

    const themeClass = this.state.isDarkTheme ? "dark-theme" : "light-theme";

    const { widgetSize } = this.state;

    // Show republic-wide data when no viloyat is selected (removed hideUntilViloyat gate).
    // The indicator now renders its aggregate value for the whole country when only yil is set.

    return (
      <div
        ref={this._containerRef}
        className={`vegetation-stats-widget ${themeClass}`}
        data-ind-size={widgetSize}
        style={customStyles.container}
      >
        {!useApiDataSource && useDataSources && useDataSources.length > 0 && (
          <DataSourceComponent
            useDataSource={useDataSources[0]}
            onDataSourceCreated={this.onDataSourceCreated}
            onDataSourceInfoChange={this.onDataSourceInfoChange}
          />
        )}

        {!useApiDataSource && useMapWidgetIds?.length > 0 && (
          <JimuMapViewComponent
            useMapWidgetId={useMapWidgetIds[0]}
            onActiveViewChange={this.onActiveViewChange}
          />
        )}

        {/* Body */}
        {isInitializing || loading ? (
          <div className="loading-indicator">
            <div className="loading-spinner">
              <div className="loading-dot" />
              <div className="loading-dot" />
              <div className="loading-dot" />
            </div>
          </div>
        ) : error ? (
          <div className="error-container">
            <div className="error-icon">⚠️</div>
            <p>{this.translateKnownError(String(error || ""))}</p>
            {!useApiDataSource && connectionStatus === "failed" && (
              <button
                className="retry-button"
                onClick={this.retryMapConnection}
              >
                {language === "ru"
                  ? "Повторить подключение"
                  : language === "uz_lat"
                    ? "Qayta ulanish"
                    : "Қайта уланиш"}
              </button>
            )}
          </div>
        ) : (
          <div className="widget-content">
            <div className="stat-main">
              <div
                className="stat-label"
                style={
                  Object.keys(customStyles.statLabel).length
                    ? customStyles.statLabel
                    : undefined
                }
              >
                {label}
              </div>

              <div
                className="stat-value"
                style={
                  Object.keys(customStyles.statValue).length
                    ? customStyles.statValue
                    : undefined
                }
              >
                {this.formatNumber(vegetationArea)}
                {effectiveUnit && <span className="unit">{effectiveUnit}</span>}
              </div>

              {isGrouped && (
                <div className="group-caption" title={bucketCaption || ""}>
                  <small>{bucketCaption}</small>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
