import * as echarts from "echarts";
import esriRequest from "esri/request";
import { JimuMapView, JimuMapViewComponent } from "jimu-arcgis";
import {
  AllWidgetProps,
  DataSource,
  DataSourceComponent,
  DataSourceManager,
  ImmutableArray,
  QueriableDataSource,
  React,
} from "jimu-core";
import { Button } from "jimu-ui";
import "./AgriPie.css";

/* ---------- Types ---------- */

interface CategoryData {
  key: string;
  value: number;
  percentage?: number;
}

interface AgriPieProps extends AllWidgetProps<any> {
  externalFilters?: {
    viloyat?: string;
    tuman?: string;
    yil?: string;
    turi?: string;
  };
  useMapWidgetIds?: ImmutableArray<string>;
}

interface AgriPieState {
  loading: boolean;
  error: string | null;

  categoryData: {
    categories: CategoryData[];
    totalValue: number;
  };
  vh: string;
  /** Bar chart's current attribute (e.g. status_2025_06_12); use with barCategoryValue to filter like Graff */
  barCategoryField: string | null;
  barCategoryValue: string | null;

  // Filter hierarchy (incoming from other widgets)
  yil: string;
  viloyat: string;
  /** AgriFilter scope: viloyat qulflash (filters.viloyat bo‘sh bo‘lishi mumkin) */
  lockedViloyat: string;
  tuman: string;
  turi: string;

  // UI state
  activeSlice: number | null;
  selectedCategory: string | null;
  showTopN: number;
  hoveredSlice: number | null;

  // Map-related
  activeMapView?: JimuMapView;

  // Event tracking
  lastFilterEventTimestamp: number;
  isHandlingExternalEvent: boolean;

  // Connection status
  mapConnectionAttempts: number;
  mapLoadingStatus: "idle" | "loading" | "loaded" | "failed";
  connectionStatus: "idle" | "connecting" | "connected" | "failed";

  // Data source
  dataSource?: QueriableDataSource;

  // Resolved FeatureLayers for multi-DS routing by viloyat
  featureLayers?: __esri.FeatureLayer[];
  activeFeatureLayer?: __esri.FeatureLayer;

  // Debug
  debugInfo: string;
  language: "uz_cyr" | "uz_lat" | "ru";
  isDarkTheme: boolean;
}

/* ---------- Component ---------- */

export default class AgriPie extends React.PureComponent<
  AgriPieProps,
  AgriPieState
> {
  _isMounted = false;

  // Crop palette (matches AgriLocalization renderer)
  private static readonly CROP_COLOR_MAP: Record<string, string> = {
    "bug'doy": "#ffaa00",
    bugdoy: "#ffaa00",
    paxta: "#ffffff",
    makka: "#09b01f",
    sholi: "#3d7491",
    mosh: "#8200fc",
    beda: "#fad08c",
    ozuqa: "#895a8c",
    loviya: "#9dff00",
    poliz: "#cc4400",
    tariq: "#ffff00",
    "bog'": "#047a12",
    bog: "#047a12",
    "yeryong'oq": "#997128",
    yeryongoq: "#997128",
    sabzi: "#ff0000",
    kungaboqar: "#55ff00",
  };

  // Fallback palette (for unknown categories)
  /** Thin grey edge so light/white slices (e.g. paxta) stay visible on light UI */
  private static readonly PIE_SLICE_EDGE = {
    borderColor: "rgba(100, 116, 139, 0.55)",
    borderWidth: 1,
  };

  private static readonly FALLBACK_COLORS = [
    "#1E7AE6",
    "#202124",
    "#6C6FD5",
    "#56AEDA",
    "#F6A11A",
    "#FF4E46",
    "#8B95A7",
    "#7B61FF",
    "#2AA1FF",
    "#00C389",
    "#D97706",
    "#EF4444",
    "#0EA5E9",
    "#4F46E5",
    "#334155",
  ];

  // Timing/connection
  MAX_CONNECTION_ATTEMPTS = 3;
  CONNECTION_TIMEOUT_MS = 15000;

  private static readonly APOSTROPHE_VARIANTS = ["'", "'", "'", "ʻ", "ʼ", "`"];
  private _latestKey = "";
  private _didInitOnce = false;

  // Viloyat normalized key -> index into `state.featureLayers`
  private _viloyatKeyToLayerIndex: Record<string, number> = {};
  private _featureLayersInitPromise: Promise<void> | null = null;

  // ✅ NEW: De-duplication for fetch
  private _fetchCounter = 0;
  private _lastFetchKey = "";
  private _fetchDebounceTimer: any = null;
  private _pieChartRef = React.createRef<HTMLDivElement>();
  private _pieChart: echarts.ECharts | null = null;
  private _pieChartHostEl: HTMLDivElement | null = null;

  constructor(props: AgriPieProps) {
    super(props);

    this.state = {
      loading: false,
      error: null,
      categoryData: { categories: [], totalValue: 0 },

      yil: "",
      viloyat: "",
      lockedViloyat: "",
      tuman: "",
      turi: "",
      vh: "",
      barCategoryField: null,
      barCategoryValue: null,

      activeSlice: null,
      selectedCategory: null,
      showTopN: 6,
      hoveredSlice: null,

      activeMapView: undefined,

      lastFilterEventTimestamp: 0,
      isHandlingExternalEvent: false,

      mapConnectionAttempts: 0,
      mapLoadingStatus: "idle",
      connectionStatus: "idle",

      dataSource: undefined,

      featureLayers: [],
      activeFeatureLayer: undefined,

      debugInfo: "Widget initializing",
      language: "uz_cyr",
      isDarkTheme: false,
    };
  }

  private initializeTheme = () => {
    const savedTheme = localStorage.getItem("app_theme");
    const isDarkTheme = savedTheme === "dark";
    this.setState({ isDarkTheme });
  };

  private handleThemeToggled = (event: Event) => {
    const d: any = (event as CustomEvent)?.detail || {};
    if (typeof d.isDarkTheme === "boolean") {
      this.setState({ isDarkTheme: d.isDarkTheme });
      return;
    }

    if (d.theme === "dark" || d.theme === "light") {
      this.setState({ isDarkTheme: d.theme === "dark" });
      return;
    }

    const savedTheme = localStorage.getItem("app_theme");
    this.setState({ isDarkTheme: savedTheme === "dark" });
  };

  /* ---------- DS helpers ---------- */

  onDataSourceCreated = (ds: DataSource) => {
    const queriableDs = ds as QueriableDataSource;

    if (typeof (queriableDs as any).setListenSelection === "function") {
      (queriableDs as any).setListenSelection(false);
    }
    this.setState({ dataSource: queriableDs, error: null }, async () => {
      if (this.state.connectionStatus === "connected") {
        await this.fetchCategoryData();
      }
    });
  };

  onDataSourceInfoChange = (info: any) => {
    if (!this._isMounted) return;
    if (this.state.connectionStatus !== "connected") return;

    const sawRecords = Array.isArray(info.records);
    if (!sawRecords) return;

    this.fetchCategoryData();
  };

  findFieldByPossibleNames(possibleNames: string[]): string | null {
    const { dataSource } = this.state;
    if (!dataSource) return null;

    const schema = dataSource.getSchema();
    if (!schema || !schema.fields) return null;

    const fieldNames = Object.keys(schema.fields).map((f) => f.toLowerCase());

    for (const name of possibleNames) {
      const exact = fieldNames.findIndex((f) => f === name.toLowerCase());
      if (exact !== -1) return Object.keys(schema.fields)[exact];
    }
    for (const name of possibleNames) {
      const partial = fieldNames.findIndex((f) =>
        f.includes(name.toLowerCase()),
      );
      if (partial !== -1) return Object.keys(schema.fields)[partial];
    }
    return null;
  }

  findCategoryField(flOverride?: __esri.FeatureLayer | null): string | null {
    const possible = [
      // ✅ enforce turi first
      "turi",

      // legacy fallback (keep if some layer still has this)
      "tur",

      // other possible naming
      "toifa",
      "yer_toifa",
      "yertoifa",
      "land_category",
      "land_type",
      "category",
      "type",
      "class",
    ];

    // 1) Prefer DS schema (fast)
    const fromDS = this.findFieldByPossibleNames(possible);
    if (fromDS) return fromDS;

    // 2) Fallback to active feature layer fields
    const fl = flOverride ?? this.state.activeFeatureLayer;
    const fields = fl?.fields ?? [];
    if (!fields.length) return null;

    const byLower = new Map(
      fields.map((f: any) => [String(f.name).toLowerCase(), f.name]),
    );

    // exact match first
    for (const p of possible) {
      const exact = byLower.get(p.toLowerCase());
      if (exact) return exact;
    }

    // partial match
    const lowerNames = Array.from(byLower.keys());
    for (const p of possible) {
      const partialIdx = lowerNames.findIndex((n) =>
        n.includes(p.toLowerCase()),
      );
      if (partialIdx !== -1) return byLower.get(lowerNames[partialIdx]) ?? null;
    }

    return null;
  }

  private buildWhereClauseForDS(
    opts: { includeCategory?: boolean; includeViloyat?: boolean } = {},
  ): string {
    const includeCategory = opts.includeCategory !== false;
    const includeViloyat = opts.includeViloyat !== false;
    const {
      yil,
      viloyat,
      tuman,
      turi,
      vh,
      barCategoryField,
      barCategoryValue,
    } = this.state;
    const clauses: string[] = [];

    if (includeViloyat && viloyat)
      clauses.push(this.eqAposSmart("viloyat", viloyat));
    // In default republic mode (no viloyat), ignore stale tuman filter.
    if (tuman && (includeViloyat || !!viloyat))
      clauses.push(this.eqAposSmart("tuman", tuman));

    if (yil) {
      const yDigits =
        String(yil).match(/\b(18|19|20)\d{2}\b/)?.[0] ??
        String(yil).replace(/[^\d]/g, "");

      clauses.push(
        yDigits
          ? `yil LIKE '${yDigits}%'`
          : `yil LIKE '%${this.escapeArcGIS(String(yil))}%'`,
      );
    }

    // ✅ FIX: always use "turi"
    if (includeCategory && turi) {
      clauses.push(this.eqAposSmart("turi", turi));
    }

    // Bar selection: use current bar attribute + value (like Graff), not literal vh field
    if (barCategoryField && barCategoryValue) {
      clauses.push(
        `${barCategoryField} = '${this.escapeArcGIS(barCategoryValue)}'`,
      );
    } else if (vh) {
      clauses.push(this.eqAposSmart("vh", vh));
    }

    return clauses.length ? clauses.join(" AND ") : "1=1";
  }

  /* ---------- Normalize / Escape ---------- */

  private normalizeName(s: string): string {
    if (!s) return "";
    return s
      .normalize("NFKC")
      .replace(/\u00A0/g, " ")
      .replace(/['''ʻʼ`]/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  private getCropColor(rawKey: string, index: number): string {
    const k = this.normalizeName(rawKey).toLowerCase();
    const hit = AgriPie.CROP_COLOR_MAP[k];
    if (hit) return hit;
    return (
      AgriPie.FALLBACK_COLORS[index % AgriPie.FALLBACK_COLORS.length] ??
      "#1E7AE6"
    );
  }

  private getCategoryDisplayName(
    rawKey: string,
    language: "uz_cyr" | "uz_lat" | "ru",
  ): string {
    const key = this.normalizeName(rawKey).toLowerCase();

    const labels: Record<
      string,
      { uz_cyr: string; uz_lat: string; ru: string }
    > = {
      sholi: { uz_cyr: "Шоли", uz_lat: "Sholi", ru: "Рис" },
      paxta: { uz_cyr: "Пахта", uz_lat: "Paxta", ru: "Хлопок" },
      makka: { uz_cyr: "Макка", uz_lat: "Makka", ru: "Кукуруза" },
      "bug'doy": { uz_cyr: "Буғдой", uz_lat: "Bug'doy", ru: "Пшеница" },
      bugdoy: { uz_cyr: "Буғдой", uz_lat: "Bug'doy", ru: "Пшеница" },
      beda: { uz_cyr: "Беда", uz_lat: "Beda", ru: "Люцерна" },
      ozuqa: { uz_cyr: "Озуқа", uz_lat: "Ozuqa", ru: "Кормовые" },
      sabzi: { uz_cyr: "Сабзи", uz_lat: "Sabzi", ru: "Морковь" },
    };

    const hit = labels[key];
    if (!hit) return rawKey;
    return hit[language] || rawKey;
  }

  private makeAposVariants(s: string): string[] {
    const base = this.normalizeName(s);
    if (!base) return [""];
    if (!base.includes("'")) return [base];

    const mask = base.replace(/'/g, "\uFFFF");
    const variants = AgriPie.APOSTROPHE_VARIANTS.map((ch) =>
      mask.split("\uFFFF").join(ch),
    );
    return Array.from(new Set(variants));
  }

  private eqAposSmart(field: string, raw: string): string {
    const variants = this.makeAposVariants(raw);
    const clauses = variants
      .filter((v) => v)
      .map((v) => `${field}='${this.escapeArcGIS(v)}'`);
    if (!clauses.length) return "";
    return clauses.length === 1 ? clauses[0] : `(${clauses.join(" OR ")})`;
  }

  private escapeArcGIS(value: string): string {
    return value ? value.replace(/'/g, "''") : "";
  }

  private makeViloyatKey(raw: string | null | undefined): string {
    if (raw == null) return "";
    return this.normalizeName(String(raw))
      .replace(/['ʻʼ`´]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

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
    if (!layers.length) return this.state.activeFeatureLayer;

    const republic = layers.find((l) => this.isRepublicLayer(l));
    if (republic) return republic;

    return layers[0] || this.state.activeFeatureLayer;
  };

  private getFeatureLayerForViloyat = (
    viloyat: string,
  ): __esri.FeatureLayer | undefined => {
    const layers = this.state.featureLayers ?? [];
    if (!layers.length) return undefined;
    const key = this.makeViloyatKey(viloyat);
    if (!key) return undefined;
    const idx = this._viloyatKeyToLayerIndex[key];
    if (typeof idx === "number" && layers[idx]) return layers[idx];
    return this.state.activeFeatureLayer || layers[0];
  };

  private resolveFeatureLayersFromUseDataSources = async (): Promise<
    __esri.FeatureLayer[]
  > => {
    const udsRaw: any = (this.props as any).useDataSources;
    const useDss: any[] = Array.isArray(udsRaw)
      ? udsRaw
      : udsRaw?.asMutable
        ? udsRaw.asMutable({ deep: true })
        : [];

    const dsManager = DataSourceManager.getInstance();
    const layers: __esri.FeatureLayer[] = [];
    const seen = new Set<string>();

    for (const uds of useDss) {
      const dsId = uds?.dataSourceId;
      if (!dsId) continue;
      try {
        const ds: any = dsManager.getDataSource(dsId);
        const layer: any =
          ds?.layer ?? (ds?.getLayer ? await ds.getLayer() : null);
        if (!layer) continue;

        const key = String(layer.id || layer.url || dsId);
        if (seen.has(key)) continue;
        seen.add(key);
        layers.push(layer as __esri.FeatureLayer);
      } catch (e) {}
    }

    return layers;
  };

  private buildViloyatKeyToLayerIndex = async (
    layers: __esri.FeatureLayer[],
  ): Promise<void> => {
    this._viloyatKeyToLayerIndex = {};

    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      if (!layer) continue;
      try {
        if (!layer.loaded && (layer as any).load) {
          await layer.load();
        }

        const q = layer.createQuery();
        (q as any).where = "1=1";
        (q as any).outFields = ["viloyat"];
        (q as any).returnGeometry = false;
        (q as any).returnDistinctValues = true;
        (q as any).num = 50000;

        const res: any = await layer.queryFeatures(q);
        const feats: any[] = res?.features ?? [];
        for (const f of feats) {
          const v = f?.attributes?.viloyat;
          const key = this.makeViloyatKey(v);
          if (key && this._viloyatKeyToLayerIndex[key] === undefined) {
            this._viloyatKeyToLayerIndex[key] = i;
          }
        }
      } catch (e) {}
    }
  };

  private ensureFeatureLayersResolved = async (): Promise<
    __esri.FeatureLayer | undefined
  > => {
    // Already resolved: still need to re-route to the correct layer for current viloyat
    if ((this.state.featureLayers?.length ?? 0) > 0) {
      const nextActive = this.state.viloyat
        ? this.getFeatureLayerForViloyat(this.state.viloyat)
        : this.getDefaultFeatureLayer(this.state.featureLayers);

      if (nextActive && this.state.activeFeatureLayer?.id !== nextActive.id) {
        this.setState({ activeFeatureLayer: nextActive });
      }

      return nextActive;
    }

    if (!this._featureLayersInitPromise) {
      this._featureLayersInitPromise = (async () => {
        const layers = await this.resolveFeatureLayersFromUseDataSources();
        this.setState({ featureLayers: layers });

        await this.buildViloyatKeyToLayerIndex(layers);
      })();
    }

    await this._featureLayersInitPromise;

    const nextActive = this.state.viloyat
      ? this.getFeatureLayerForViloyat(this.state.viloyat)
      : this.getDefaultFeatureLayer(this.state.featureLayers);

    this.setState({ activeFeatureLayer: nextActive });
    return nextActive;
  };

  /* ---------- Map connection ---------- */

  waitForMapToLoad = (jimuMapView: JimuMapView): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!jimuMapView || !jimuMapView.view) {
        reject(new Error("Invalid map view provided"));
        return;
      }
      if (jimuMapView.view.ready) {
        resolve();
        return;
      }

      const timeout = setTimeout(
        () => reject(new Error("Map load timeout")),
        this.CONNECTION_TIMEOUT_MS,
      );
      const watchHandle = jimuMapView.view.watch("ready", (isReady) => {
        if (isReady) {
          clearTimeout(timeout);
          watchHandle.remove();
          resolve();
        }
      });
    });
  };

  // Minimal connection: we just store the view and mark as connected
  connectToMap = async (jimuMapView: JimuMapView): Promise<void> => {
    if (!jimuMapView?.view?.map)
      throw new Error("Map view has no map property");
    return new Promise((resolve) => {
      this.setState(
        {
          activeMapView: jimuMapView,
          connectionStatus: "connected",
          error: null,
          debugInfo: "Connected to map",
        },
        resolve,
      );
    });
  };

  private initializeAfterConnection = (): void => {
    if (this._didInitOnce) return;
    this._didInitOnce = true;

    if (
      !this.state.activeMapView ||
      this.state.connectionStatus !== "connected"
    )
      return;

    if (this.props.externalFilters) {
      const f = this.props.externalFilters;
      this.setState(
        {
          yil: f.yil || "",
          viloyat: f.viloyat || "",
          tuman: f.tuman || "",
          turi: f.turi || "",
          debugInfo: "External filters applied from props",
        },
        () => this.fetchCategoryData(),
      );
    } else {
      this.fetchCategoryData();
    }
  };

  onActiveViewChange = async (jimuMapView: JimuMapView) => {
    if (!jimuMapView) {
      // Treat as fallback: still allow data load (no map interaction needed)
      if (this.state.mapConnectionAttempts === 0) {
        this.setState({
          mapLoadingStatus: "failed",
          mapConnectionAttempts: 1,
          debugInfo: "No map view provided",
        });
      }
      this.setState(
        { connectionStatus: "connected", debugInfo: "Proceeding without map" },
        () => {
          this.fetchCategoryData();
        },
      );
      return;
    }

    this.setState({ mapLoadingStatus: "loading", error: null });

    try {
      const loadingTimeout = setTimeout(() => {
        if (this._isMounted && this.state.mapLoadingStatus === "loading") {
          this.setState(
            {
              connectionStatus: "connected",
              mapLoadingStatus: "loaded",
              debugInfo: "Timeout, proceeding",
            },
            () => {
              this.fetchCategoryData();
            },
          );
        }
      }, this.CONNECTION_TIMEOUT_MS);

      await this.waitForMapToLoad(jimuMapView);
      clearTimeout(loadingTimeout);

      this.setState({
        mapLoadingStatus: "loaded",
        connectionStatus: "connecting",
        debugInfo: "Map loaded, connecting",
      });

      await this.connectToMap(jimuMapView);
      this.initializeAfterConnection();
    } catch (err) {
      this.setState(
        {
          error: `Map initialization issue: ${(err as Error).message}`,
          mapLoadingStatus: (err as Error).message.includes("timeout")
            ? "failed"
            : this.state.mapLoadingStatus,
          connectionStatus: "connected",
          debugInfo: `Error: ${(err as Error).message}, continuing`,
        },
        () => this.fetchCategoryData(),
      );
    }
  };

  retryMapConnection() {
    this.setState({
      connectionStatus: "idle",
      mapLoadingStatus: "idle",
      mapConnectionAttempts: 0,
      error: null,
      debugInfo: "Manual retry initiated",
    });
  }

  /* ---------- Lifecycle ---------- */
  private handleMasterFilterChange = (event: Event) => {
    const d: any = (event as CustomEvent).detail || {};
    if (!d.filters) return;

    const incoming = d.filters || {};
    const scopeLockedRaw =
      d.scope && Object.prototype.hasOwnProperty.call(d.scope, "lockedViloyat")
        ? d.scope.lockedViloyat
        : undefined;
    const nextLockedViloyat =
      scopeLockedRaw !== undefined
        ? scopeLockedRaw
          ? this.normalizeName(String(scopeLockedRaw))
          : ""
        : this.state.lockedViloyat;
    const hasField = (k: string) =>
      Object.prototype.hasOwnProperty.call(incoming, k);
    // Keep current values when upstream event doesn't include that field.
    const nextYil = hasField("yil") ? incoming.yil || "" : this.state.yil;
    const nextViloyatRaw = hasField("viloyat")
      ? incoming.viloyat || ""
      : this.state.viloyat;
    const nextTumanRaw = hasField("tuman")
      ? incoming.tuman || ""
      : this.state.tuman;
    let nextTuriRaw = hasField("turi") ? incoming.turi || "" : this.state.turi;
    const nextVh = hasField("vh") ? incoming.vh || "" : this.state.vh;

    const nextBarField = hasField("barCategoryField")
      ? (incoming.barCategoryField ?? null)
      : this.state.barCategoryField;
    let nextBarValue = hasField("barCategoryValue")
      ? (incoming.barCategoryValue ?? null)
      : this.state.barCategoryValue;

    // If explicit vh filter comes but no bar value field is present, clear stale bar value.
    if (nextVh && !hasField("barCategoryValue")) nextBarValue = null;

    const nextLanguage: "uz_cyr" | "uz_lat" | "ru" = hasField("language")
      ? (incoming.language as any) || this.state.language || "uz_cyr"
      : this.state.language;

    const effectiveViloyat = this.normalizeName(nextViloyatRaw || "");
    const nextTuman = this.normalizeName(nextTumanRaw || "");
    let nextTuri = this.normalizeName(nextTuriRaw || "");

    // Parent = year/region/tuman. Turi is local selection and should be preserved on partial payloads.
    const parentChanged =
      nextYil !== this.state.yil ||
      effectiveViloyat !== this.state.viloyat ||
      nextTuman !== this.state.tuman ||
      nextLockedViloyat !== this.state.lockedViloyat;

    const barSelectionChanged =
      nextBarField !== this.state.barCategoryField ||
      nextBarValue !== this.state.barCategoryValue ||
      nextVh !== this.state.vh;

    const languageChanged = nextLanguage !== this.state.language;

    if (
      !parentChanged &&
      !barSelectionChanged &&
      !languageChanged &&
      nextTuri === this.state.turi
    ) {
      return;
    }

    const matchIdx = this.state.categoryData.categories.findIndex(
      (c) => this.normalizeName(c.key) === nextTuri,
    );
    const nextSelectedCategory = parentChanged
      ? null
      : nextTuri || this.state.selectedCategory || null;
    const nextActiveSlice = parentChanged
      ? null
      : matchIdx >= 0
        ? matchIdx
        : nextTuri
          ? null
          : this.state.activeSlice;

    this.setState(
      {
        yil: nextYil,
        viloyat: effectiveViloyat,
        lockedViloyat: nextLockedViloyat,
        tuman: nextTuman,
        turi: nextTuri,
        vh: nextVh,
        barCategoryField: nextBarField,
        barCategoryValue: nextBarValue,
        selectedCategory: nextSelectedCategory,
        activeSlice: nextActiveSlice,
        language: nextLanguage,
        activeFeatureLayer: effectiveViloyat
          ? this.getFeatureLayerForViloyat(effectiveViloyat)
          : this.getDefaultFeatureLayer(this.state.featureLayers),
      },
      () => {
        if (parentChanged || barSelectionChanged || languageChanged) {
          this.fetchCategoryData();
        }
      },
    );
  };

  componentDidMount() {
    this._isMounted = true;
    this.initializeTheme();

    this.setState({
      mapLoadingStatus: "idle",
      connectionStatus: "idle",
      debugInfo: "Widget mounted",
    });

    // ✅ MUST LISTEN to real app events
    document.addEventListener(
      "masterFilterChanged",
      this.handleMasterFilterChange as EventListener,
    );
    document.addEventListener(
      "yilChanged",
      this.handleYilChanged as EventListener,
    );
    document.addEventListener(
      "regionChanged",
      this.handleRegionChange as EventListener,
    );
    document.addEventListener(
      "kadastrFilterChanged",
      this.handleKadastrFilterChanged as EventListener,
    );
    document.addEventListener(
      "themeToggled",
      this.handleThemeToggled as EventListener,
    );

    window.addEventListener("resize", this.handleResize);

    // Force proceed if connection stalls
    setTimeout(() => {
      if (
        this._isMounted &&
        (this.state.mapLoadingStatus === "loading" ||
          this.state.connectionStatus === "connecting")
      ) {
        this.setState(
          {
            connectionStatus: "connected",
            mapLoadingStatus: "loaded",
            debugInfo: "Timeout reached, proceeding",
          },
          () => this.fetchCategoryData(),
        );
      }
    }, this.CONNECTION_TIMEOUT_MS);

    this.updatePieChart();
  }

  updateFiltersFromProps = (filters: {
    yil?: string;
    viloyat?: string;
    tuman?: string;
    turi?: string;
  }): void => {
    const next = {
      yil: filters?.yil ?? "",
      viloyat: filters?.viloyat ?? "",
      tuman: filters?.tuman ?? "",
      turi: filters?.turi ?? "",
    };

    const changed =
      this.state.yil !== next.yil ||
      this.state.viloyat !== next.viloyat ||
      this.state.tuman !== next.tuman ||
      this.state.turi !== next.turi;

    if (!changed) return;

    this.setState(
      {
        ...next,
        isHandlingExternalEvent: true,
        error: null,
        activeFeatureLayer: next.viloyat
          ? this.getFeatureLayerForViloyat(next.viloyat)
          : this.state.activeFeatureLayer,
        debugInfo: `Filters from props: y=${next.yil}, v=${next.viloyat}, t=${next.tuman}, turi=${next.turi}`,
      },
      () => {
        this.fetchCategoryData();
        setTimeout(
          () =>
            this._isMounted &&
            this.setState({ isHandlingExternalEvent: false }),
          300,
        );
      },
    );
  };
  private async queryCategoryStatsJSON(
    fl: __esri.FeatureLayer,
    where: string,
    categoryField: string,
  ): Promise<Array<{ key: string; value: number }>> {
    const queryUrl = this.getLayerQueryUrl(fl);

    // ✅ always use correct OID field name
    const oidField = (fl as any)?.objectIdField || "OBJECTID";

    const outStats = [
      {
        statisticType: "count",
        onStatisticField: oidField,
        outStatisticFieldName: "cnt",
      },
    ];

    const resp = await esriRequest(queryUrl, {
      query: {
        f: "json",
        where: where || "1=1",
        groupByFieldsForStatistics: categoryField,
        outStatistics: JSON.stringify(outStats),
        outFields: categoryField,
        returnGeometry: false,
      },
      responseType: "json",
      withCredentials: true,
    });

    const feats = resp?.data?.features ?? [];

    return feats
      .map((f: any) => ({
        key: f?.attributes?.[categoryField],
        value: Number(f?.attributes?.cnt ?? 0),
      }))
      .filter((r: { key: string; value: number }) => r.key && r.value > 0);
  }

  componentDidUpdate(prevProps: AgriPieProps, prevState: AgriPieState) {
    if (
      this.props.externalFilters !== prevProps.externalFilters &&
      this.props.externalFilters
    ) {
      this.updateFiltersFromProps(this.props.externalFilters);
    }

    if (
      prevState.connectionStatus !== "connected" &&
      this.state.connectionStatus === "connected"
    ) {
      setTimeout(
        () => this._isMounted && this.initializeAfterConnection(),
        100,
      );
    }

    const { mapLoadingStatus, mapConnectionAttempts } = this.state;
    const { useMapWidgetIds } = this.props;

    if (
      (mapLoadingStatus === "failed" || mapLoadingStatus === "idle") &&
      useMapWidgetIds &&
      useMapWidgetIds.length > 0 &&
      !this.state.activeMapView &&
      mapConnectionAttempts !== prevState.mapConnectionAttempts
    ) {
      if (mapConnectionAttempts < this.MAX_CONNECTION_ATTEMPTS) {
        setTimeout(() => {
          if (this._isMounted) {
            this.setState((prev) => ({
              mapConnectionAttempts: prev.mapConnectionAttempts + 1,
              mapLoadingStatus: "idle",
              debugInfo: `Retry attempt ${prev.mapConnectionAttempts + 1}`,
            }));
          }
        }, 2000);
      } else {
        this.setState(
          {
            mapLoadingStatus: "failed",
            connectionStatus: "connected",
            error: null,
            debugInfo: "Proceeding after multiple failed attempts",
          },
          () => this.fetchCategoryData(),
        );
      }
    }

    const shouldRefreshPieChart =
      prevState.categoryData !== this.state.categoryData ||
      prevState.activeSlice !== this.state.activeSlice ||
      prevState.hoveredSlice !== this.state.hoveredSlice ||
      prevState.showTopN !== this.state.showTopN ||
      prevState.language !== this.state.language ||
      prevState.isDarkTheme !== this.state.isDarkTheme;

    if (shouldRefreshPieChart) {
      this.updatePieChart();
    }
  }
  private handleYilChanged = (event: Event) => {
    if (!this._isMounted) return;

    const d: any = (event as CustomEvent)?.detail || {};
    if (!d || d.source === "AgriPie") return;

    const raw = d.yil ?? d.year ?? d.constructionYear;
    if (raw == null) return;

    const yil = String(raw);
    if (yil === this.state.yil) return;

    this.setState(
      {
        yil,
        error: null,
        debugInfo: `Yil changed to ${yil}`,
      },
      () => this.fetchCategoryData(),
    );
  };

  componentWillUnmount() {
    this._isMounted = false;

    if (this._fetchDebounceTimer) {
      clearTimeout(this._fetchDebounceTimer);
    }

    document.removeEventListener(
      "yilChanged",
      this.handleYilChanged as EventListener,
    ); // ✅ FIX
    document.removeEventListener(
      "regionChanged",
      this.handleRegionChange as EventListener,
    );
    document.removeEventListener(
      "themeToggled",
      this.handleThemeToggled as EventListener,
    );

    // ✅ FIX: now it actually exists
    document.removeEventListener(
      "kadastrFilterChanged",
      this.handleKadastrFilterChanged as EventListener,
    );

    // Optional legacy support
    document.removeEventListener(
      "constructionYearChanged",
      this.handleConstructionYearChanged as EventListener,
    );

    window.removeEventListener("resize", this.handleResize);

    if (this._pieChart) {
      this._pieChart.dispose();
      this._pieChart = null;
      this._pieChartHostEl = null;
    }
  }

  /* ---------- External event handlers ---------- */

  private handleExternalCategory = (event: CustomEvent) => {
    if (!event?.detail) return;
    const { source } = event.detail || {};
    if (source === "AgriPie") return;

    const nextTuri = this.normalizeName(
      event.detail.turi || event.detail.category || "",
    );
    this.selectCategoryByName(nextTuri || null);

    this.setState(
      { turi: nextTuri, selectedCategory: nextTuri || null },
      () => {
        this.fetchCategoryData();
      },
    );
  };
  private handleKadastrFilterChanged = (event: CustomEvent) => {
    const d = event?.detail || {};
    if (d.source === "AgriPie") return;

    // ✅ Check what data is in the event
    const hasViloyat = d.viloyat || d.massivNom;
    const hasTuman = d.tuman || d.tumanNomi;
    const hasYear = d.yil != null || d.year != null;
    const hasTuri = d.turi || d.category;

    // Build next state - only update fields that are present in the event
    const nextState: Partial<AgriPieState> = {};

    if (hasViloyat) {
      nextState.viloyat = this.normalizeName(hasViloyat);
    }

    if (hasTuman) {
      nextState.tuman = this.normalizeName(hasTuman);
    }

    if (hasYear) {
      nextState.yil = String(d.yil ?? d.year);
    }

    if (hasTuri) {
      nextState.turi = this.normalizeName(hasTuri);
    }

    // If nothing changed, skip
    if (Object.keys(nextState).length === 0) {
      return;
    }

    this.setState(nextState as AgriPieState, () => this.fetchCategoryData());
  };

  private handleConstructionYearChanged = (event: Event) => {
    const d: any = (event as CustomEvent)?.detail || {};
    if (!d || d.source === "AgriPie") return;

    // support BOTH shapes
    const raw = d.year ?? d.yil;
    if (raw == null) return;

    const yil = String(raw);
    if (yil === this.state.yil) return;

    this.setState(
      {
        yil,
        error: null,
        debugInfo: `Year changed to ${yil}`,
      },
      () => this.fetchCategoryData(),
    );
  };

  private handleRegionChange = (event: CustomEvent) => {
    const d = event?.detail || {};
    if (!d || d.source === "AgriPie") return;

    const vil = this.normalizeName(d.viloyat || "");
    const tum = this.normalizeName(d.tuman || "");

    this.setState(
      {
        viloyat: vil || this.state.viloyat,
        tuman: tum || "",
        yil: this.state.yil,
        turi: "",
        selectedCategory: null,
        activeSlice: null,
        error: null,
      },
      () => {
        this.fetchCategoryData();
      },
    );
  };

  /* ---------- Local UI helpers ---------- */

  private selectCategoryByName = (name: string | null) => {
    if (!name) {
      this.setState({ selectedCategory: null, activeSlice: null });
      return;
    }
    const idx = this.state.categoryData.categories.findIndex(
      (c) => this.normalizeName(c.key) === this.normalizeName(name),
    );
    this.setState({
      selectedCategory: name,
      activeSlice: idx >= 0 ? idx : null,
    });
  };

  private handleResize = () => {
    this._pieChart?.resize();
    this.forceUpdate();
  };

  private getChartDataForPie = () => {
    const { categoryData, showTopN, language } = this.state;
    const sortedCategories = [...(categoryData?.categories ?? [])].sort(
      (a, b) => b.value - a.value,
    );

    return sortedCategories.slice(0, showTopN).map((category) => ({
      name: this.getCategoryDisplayName(category.key, language),
      rawKey: category.key,
      value: category.value,
      percentage: category.percentage,
    }));
  };

  private ensurePieChart = () => {
    const host = this._pieChartRef.current;
    if (!host) return null;

    if (
      this._pieChart &&
      this._pieChartHostEl &&
      this._pieChartHostEl !== host
    ) {
      this._pieChart.dispose();
      this._pieChart = null;
      this._pieChartHostEl = null;
    }

    if (!this._pieChart) {
      this._pieChart = echarts.init(host);
      this._pieChartHostEl = host;
      this._pieChart.on("click", (params: any) => {
        if (typeof params?.dataIndex !== "number") return;
        this.handleSliceClick(params.data || {}, params.dataIndex);
      });
      this._pieChart.on("mouseover", (params: any) => {
        if (typeof params?.dataIndex !== "number") return;
        if (this.state.hoveredSlice !== params.dataIndex) {
          this.setState({ hoveredSlice: params.dataIndex });
        }
      });
      this._pieChart.on("mouseout", () => {
        if (this.state.hoveredSlice !== null) {
          this.setState({ hoveredSlice: null });
        }
      });
    }

    return this._pieChart;
  };

  private updatePieChart = () => {
    const chart = this.ensurePieChart();
    if (!chart) return;

    const { activeSlice, viloyat, lockedViloyat } = this.state;
    const pieInteractive = !!(lockedViloyat || viloyat || "").trim();
    const chartData = this.getChartDataForPie();

    const option: echarts.EChartsOption = {
      color: AgriPie.FALLBACK_COLORS,
      tooltip: {
        trigger: "item",
        show: false,
      },
      legend: {
        top: "5%",
        left: "center",
        show: false,
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          silent: !pieInteractive,
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          padAngle: 1,
          stateAnimation: {
            duration: 550,
            easing: "cubicOut",
          },
          itemStyle: {
            borderRadius: 6,
            ...AgriPie.PIE_SLICE_EDGE,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            scale: true,
            scaleSize: 6,
            itemStyle: {
              ...AgriPie.PIE_SLICE_EDGE,
            },
            label: {
              show: false,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: chartData.map((item, index) => ({
            value: item.value,
            name: item.name,
            rawKey: item.rawKey,
            percentage: item.percentage,
            itemStyle: {
              color: this.getCropColor(item.rawKey || item.name, index),
              ...AgriPie.PIE_SLICE_EDGE,
            },
          })),
        },
      ],
    };

    chart.setOption(option, true);
    chart.dispatchAction({ type: "downplay", seriesIndex: 0 });
    if (typeof activeSlice === "number") {
      chart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: activeSlice,
      });
    }
    chart.resize();
  };

  /* ---------- Interactions ---------- */

  handleSliceClick = (
    data: { rawKey?: string; name?: string },
    index: number,
  ): void => {
    const canSlice =
      !!(this.state.lockedViloyat || this.state.viloyat || "").trim();
    if (!canSlice) return;

    console.log("[AgriPie] 🖱️ SEGMENT CLICKED:", { index, data });

    const selectedCategoryName = data.rawKey || data.name;
    const newSelection =
      index === this.state.activeSlice ? null : selectedCategoryName;

    console.log("[AgriPie] ➡️ Setting state:", {
      activeSlice: index === this.state.activeSlice ? null : index,
      selectedCategory: newSelection,
      categoriesCount: this.state.categoryData?.categories.length,
    });

    this.setState(
      {
        activeSlice: index === this.state.activeSlice ? null : index,
        selectedCategory: newSelection,
      },
      () => {
        console.log("[AgriPie] ✅ STATE UPDATED:", {
          activeSlice: this.state.activeSlice,
          selectedCategory: this.state.selectedCategory,
          categoriesCount: this.state.categoryData?.categories.length,
          loading: this.state.loading,
          error: this.state.error,
        });

        const { yil, viloyat, tuman } = this.state;
        // Notify AgriFilter (so it can broadcast masterFilterChanged)
        document.dispatchEvent(
          new CustomEvent("widgetSelectionChanged", {
            detail: {
              turi: newSelection || "",
              polygonMode: false,
              source: "AgriPie",
              timestamp: Date.now(),
            },
            bubbles: true,
          }),
        );
      },
    );
  };
  applyCategoryFilter = async (): Promise<void> => {
    const { selectedCategory, yil, viloyat, tuman } = this.state;

    document.dispatchEvent(
      new CustomEvent("categoryFilterChanged", {
        detail: {
          yil,
          viloyat,
          tuman,
          category: selectedCategory || "",
          turi: selectedCategory || "",
          source: "AgriPie",
          timestamp: Date.now(),
        },
        bubbles: true,
      }),
    );
  };

  /* ---------- Data fetch ---------- */
  private makeQueryKey(
    yil: string,
    viloyat: string,
    tuman: string,
    vh: string,
    barField?: string | null,
    barValue?: string | null,
  ) {
    return [
      yil || "",
      viloyat || "",
      tuman || "",
      vh || "",
      barField ?? "",
      barValue ?? "",
    ].join("|");
  }

  // ✅ NEW: Debounced fetch with de-duplication
  private fetchCategoryData = (): void => {
    // Clear any pending fetch
    if (this._fetchDebounceTimer) {
      clearTimeout(this._fetchDebounceTimer);
    }

    // Debounce by 50ms to let state settle
    this._fetchDebounceTimer = setTimeout(() => {
      this._doFetchCategoryData();
    }, 50);
  };
  private getLayerQueryUrl(fl: __esri.FeatureLayer): string {
    let url = (fl as any)?.url || "";

    // remove trailing slash
    url = url.replace(/\/+$/, "");

    // If already ".../FeatureServer/0/query"
    if (/\/(FeatureServer|MapServer)\/\d+\/query$/i.test(url)) {
      return url;
    }

    // If already ".../FeatureServer/0"
    if (/\/(FeatureServer|MapServer)\/\d+$/i.test(url)) {
      return `${url}/query`;
    }

    // If it's root ".../FeatureServer"
    if (/\/(FeatureServer|MapServer)$/i.test(url)) {
      const layerId = (fl as any)?.layerId ?? 0; // ✅ use actual layerId if known
      return `${url}/${layerId}/query`;
    }

    // If some weird ".../FeatureServer/query"
    if (/\/(FeatureServer|MapServer)\/query$/i.test(url)) {
      const base = url.replace(/\/query$/i, "");
      const layerId = (fl as any)?.layerId ?? 0;
      return `${base}/${layerId}/query`;
    }

    // fallback
    return `${url}/query`;
  }
  private async _doFetchCategoryData(): Promise<void> {
    const key = this.makeQueryKey(
      this.state.yil,
      this.state.viloyat,
      this.state.tuman,
      this.state.vh,
      this.state.barCategoryField,
      this.state.barCategoryValue,
    );

    if (key === this._lastFetchKey) {
      return;
    }

    this._lastFetchKey = key;
    this._fetchCounter++;
    const fetchId = this._fetchCounter;

    // Requires at least yil; viloyat optional (empty = republic-wide)
    if (!this.state.yil) {
      this.setState({
        categoryData: { categories: [], totalValue: 0 },
        loading: false,
        error: null,
      });
      return;
    }

    if (this.state.connectionStatus !== "connected") {
      return;
    }

    try {
      this.setState({ loading: true, error: null });

      const activeFl = await this.ensureFeatureLayersResolved();

      // Find category field on the active layer (fallback to DS schema if available)
      const categoryField = this.findCategoryField(activeFl ?? null);
      if (!categoryField) {
        this.setState({
          loading: false,
          error: "No category field found. Please check your layer fields.",
        });
        return;
      }

      const whereClause = this.buildWhereClauseForDS({
        includeCategory: false,
        includeViloyat: false,
      });

      const allLayers = (this.state.featureLayers || []).filter(Boolean);
      const selectedViloyat = (this.state.viloyat || "").trim();
      let layersForQuery: __esri.FeatureLayer[] = [];

      if (selectedViloyat) {
        const routed = this.getFeatureLayerForViloyat(selectedViloyat);
        if (routed) layersForQuery = [routed];
      }

      if (!layersForQuery.length) {
        // Default (no viloyat) must show republic-wide totals, so use only the
        // canonical/republic layer instead of summing regional layers.
        const defaultLayer = this.getDefaultFeatureLayer(allLayers);
        layersForQuery = defaultLayer ? [defaultLayer] : activeFl ? [activeFl] : [];
      }

      if (!layersForQuery.length) {
        const dsAny = this.state.dataSource as any;
        const dsLayer: __esri.FeatureLayer | undefined =
          dsAny?.layer ?? dsAny?.getLayer?.();
        if (dsLayer) layersForQuery = [dsLayer];
      }

      if (!layersForQuery.length) {
        this.setState({
          loading: false,
          error: "FeatureLayer not available for this data source.",
        });
        return;
      }

      const merged = new Map<string, { key: string; value: number }>();

      for (const layer of layersForQuery) {
        const layerCategoryField = this.findCategoryField(layer);
        if (!layerCategoryField) continue;

        const part = await this.queryCategoryStatsJSON(
          layer,
          whereClause || "1=1",
          layerCategoryField,
        );

        for (const r of part) {
          const norm = this.normalizeName(r.key || "").toLowerCase();
          if (!norm) continue;
          const prev = merged.get(norm);
          if (prev) {
            prev.value += Number(r.value || 0);
          } else {
            merged.set(norm, {
              key: r.key,
              value: Number(r.value || 0),
            });
          }
        }
      }

      const rows = Array.from(merged.values());

      if (!this._isMounted) return;

      const totalValue = rows.reduce((sum, r) => sum + r.value, 0);
      const categories = rows
        .sort((a, b) => b.value - a.value)
        .map((r) => ({
          key: r.key,
          value: r.value,
          percentage: totalValue ? (r.value / totalValue) * 100 : 0,
        }));

      let newActiveSlice: number | null = null;
      let clearSelection = false;

      if (this.state.selectedCategory) {
        const idx = categories.findIndex(
          (c) =>
            this.normalizeName(c.key) ===
            this.normalizeName(this.state.selectedCategory!),
        );
        if (idx !== -1) newActiveSlice = idx;
        else clearSelection = true;
      }

      this.setState({
        categoryData: { categories, totalValue },
        loading: false,
        error: null,
        activeSlice: newActiveSlice,
        selectedCategory: clearSelection ? null : this.state.selectedCategory,
        debugInfo: `Loaded ${categories.length} categories (WHERE: ${whereClause})`,
      });
    } catch (error: any) {
      if (!this._isMounted) return;

      this.setState({
        loading: false,
        error: error?.message || "Failed to load data from layer.",
      });
    }
  }

  /* ---------- Chart ---------- */

  private renderRadarPieChart = (
    chartData: any[],
    containerWidth: number = 300,
    containerHeight: number = 300,
  ): JSX.Element => {
    return (
      <div
        ref={this._pieChartRef}
        className="land-category-echart"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 0,
        }}
      />
    );
  };

  /* ---------- Render ---------- */

  render() {
    const {
      loading,
      error,
      categoryData,
      activeSlice,
      showTopN,
      mapLoadingStatus,
      connectionStatus,
      debugInfo,
      yil,
      viloyat,
      lockedViloyat,
      language,
      isDarkTheme,
    } = this.state;

    const { categories } = categoryData;

    const sortedCategories = [...categories].sort((a, b) => b.value - a.value);
    const topCategories = sortedCategories.slice(0, showTopN);

    const themeClass = isDarkTheme ? "dark-theme" : "light-theme";

    const titleText = "Ekin turi";

    const noDataTitle =
      language === "ru"
        ? "Нет данных по категориям"
        : language === "uz_lat"
          ? "Yer toifasi ma’lumotlari mavjud emas"
          : "Ер тоифаси маълумотлари мавжуд эмас";

    const noDataBody =
      language === "ru"
        ? "Настройте фильтры или попробуйте позже."
        : language === "uz_lat"
          ? "Filtrlarni sozlang yoki keyinroq qayta urinib ko‘ring."
          : "Филтрларни созланг ёки кейинроқ қайта уриниб кўринг.";

    const chartData = topCategories.map((category) => ({
      name: this.getCategoryDisplayName(category.key, language),
      rawKey: category.key,
      value: category.value,
      percentage: category.percentage,
    }));

    let statusIndicator:
      | "idle"
      | "loading"
      | "connecting"
      | "connected"
      | "failed" = "idle";
    if (mapLoadingStatus === "loading") statusIndicator = "loading";
    else if (mapLoadingStatus === "loaded" && connectionStatus === "connecting")
      statusIndicator = "connecting";
    else if (connectionStatus === "connected") statusIndicator = "connected";
    else if (mapLoadingStatus === "failed" || connectionStatus === "failed")
      statusIndicator = "failed";

    const showDebugInfo = false; // ✅ Disabled debug panel

    const formatAreaValue = (value: number) => {
      const safe = Number.isFinite(value) ? value : 0;
      return safe.toLocaleString("ru-RU");
    };

    const isMobile = window.innerWidth <= 480;
    const isLandscape =
      window.innerWidth > window.innerHeight && window.innerHeight < 500;
    const sliceInteractive = !!(lockedViloyat || viloyat || "").trim();

    const showBlockingLoader =
      !yil ||
      mapLoadingStatus === "loading" ||
      connectionStatus === "idle" ||
      connectionStatus === "connecting" ||
      (connectionStatus === "connected" && loading);

    return (
      <div className={`land-category-card ${themeClass}`}>
        {showDebugInfo && (
          <div
            className="debug-info"
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              fontSize: "10px",
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "#fff",
              padding: "2px 5px",
              borderRadius: "3px",
              maxWidth: "200px",
              zIndex: 1000,
            }}
          >
            <div>Status: {statusIndicator}</div>
            <div>Map: {mapLoadingStatus}</div>
            <div>Connection: {connectionStatus}</div>
            <div>Categories: {categories.length}</div>
            <div>Debug: {debugInfo}</div>
          </div>
        )}

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          {this.props.useDataSources?.length > 0 && (
            <DataSourceComponent
              useDataSource={this.props.useDataSources[0]}
              onDataSourceCreated={this.onDataSourceCreated}
              onDataSourceInfoChange={this.onDataSourceInfoChange}
            />
          )}
          {this.props.useMapWidgetIds?.length > 0 && (
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds[0]}
              onActiveViewChange={this.onActiveViewChange}
            />
          )}
        </div>

        <div className="land-category-content">
          <div className="land-category-header">
            <div className="land-category-title-wrap">
              <div className="land-category-title">{titleText}</div>
            </div>
          </div>

          {mapLoadingStatus === "failed" && connectionStatus !== "connected" ? (
            <div className="land-category-error">
              <p>
                {error || "Харитага уланишда хатолик. Қайта уриниб кўринг."}
              </p>
              <Button
                onClick={this.retryMapConnection}
                type="primary"
                size="sm"
              >
                Қайта уланиш
              </Button>
            </div>
          ) : error ? (
            <div className="land-category-error">
              <p>{error}</p>
              <Button
                onClick={() => this.fetchCategoryData()}
                type="primary"
                size="sm"
              >
                Қайта уриниш
              </Button>
            </div>
          ) : showBlockingLoader ? (
            <div className="land-category-loading-container">
              <div className="regional-modern-loader" aria-hidden="true">
                <span className="regional-modern-loader-dot" />
                <span className="regional-modern-loader-dot" />
                <span className="regional-modern-loader-dot" />
              </div>
            </div>
          ) : categories.length === 0 ? (
            <div className="land-category-no-data">
              <h3>{noDataTitle}</h3>
              <p>{noDataBody}</p>
              <Button
                onClick={() => this.fetchCategoryData()}
                type="secondary"
                size="sm"
              >
                {language === "ru"
                  ? "Обновить"
                  : language === "uz_lat"
                    ? "Yangilash"
                    : "Янгилаш"}
              </Button>
            </div>
          ) : (
            <div className="land-category-main-content">
              <div className="land-category-chart-container">
                {this.renderRadarPieChart(chartData, 400, 400)}
              </div>

              <div
                className="category-legend"
                style={{
                  pointerEvents: sliceInteractive ? "auto" : "none",
                  opacity: sliceInteractive ? 1 : 0.92,
                }}
                aria-disabled={!sliceInteractive}
              >
                {chartData.map((entry, index) => (
                  <div
                    key={entry.rawKey || entry.name}
                    className={`legend-item ${activeSlice === index ? "legend-item-selected" : ""}`}
                    onClick={() =>
                      sliceInteractive &&
                      this.handleSliceClick(entry, index)
                    }
                    style={{
                      cursor: sliceInteractive ? "pointer" : "default",
                    }}
                  >
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor:
                          this.getCropColor(entry.rawKey || entry.name, index),
                      }}
                    />
                    <span className="legend-label">{entry.name}</span>
                    <span className="legend-value">
                      <span className="legend-area-value">
                        {`${formatAreaValue(Number(entry.value) || 0)} ga`}
                      </span>
                      <span className="legend-percent-value">
                        {`(${entry.percentage?.toFixed(1) ?? "0.0"}%)`}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
