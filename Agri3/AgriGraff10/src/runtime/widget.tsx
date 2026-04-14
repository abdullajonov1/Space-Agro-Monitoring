// Enhanced Kadastr Status Widget - Fixed Regional Filtering + Graph View

import Color from "esri/Color";
import SimpleFillSymbol from "esri/symbols/SimpleFillSymbol";
import SimpleLineSymbol from "esri/symbols/SimpleLineSymbol";
import SimpleMarkerSymbol from "esri/symbols/SimpleMarkerSymbol";
import { JimuMapView, JimuMapViewComponent } from "jimu-arcgis";
import {
  AllWidgetProps,
  DataSourceComponent,
  DataSourceManager,
  QueriableDataSource,
  React,
} from "jimu-core";
import ReactDOM from "react-dom";
import debounce from "lodash/debounce";
import throttle from "lodash/throttle";
import "./AgriGraff.css";

const WIDGET_ID = "AgriGraffWidget";

// Required fields for the widget to function
const REQUIRED_FIELDS = [
  "uniqueid",
  "tuman",
  "f_name",
  "f_inn",
  "maydon",
  "turi",
  "vh",
  "viloyat",
  "yil",
];

interface ConfiguredFilters {
  [fieldName: string]: string;
}

interface RecordData {
  uniqueid?: string;
  tuman?: string;
  f_name?: string;
  f_inn?: string;
  maydon?: string | number;
  turi?: string;
  vh?: string;
  status?: string;
  objectid?: number;
  [key: string]: any;
}

interface VegetationIndex {
  uniqueid: string;
  raster_date: string;
  objectid: number;
  ndvi: number;
  ndvi_min: number;
  ndvi_max: number;
  savi: number;
  savi_min: number;
  savi_max: number;
  rvi: number;
  rvi_min: number;
  rvi_max: number;
  ci: number;
  ci_min: number;
  ci_max: number;
  evi: number;
  pixel_count: number;
  mean_red: number;
  mean_nir: number;
  mean_green: number;
  id: number;
  raster_id: number;
  processed_at: string;
}

/** Regional timeseries API response item (GET /api/v1/vegetation/regional/timeseries) */
interface RegionalTimeseriesRow {
  date: string;
  ndvi: number;
  ndvi_min: number;
  ndvi_max: number;
  savi: number;
  savi_min: number;
  savi_max: number;
  rvi: number;
  rvi_min: number;
  rvi_max: number;
  ci: number;
  ci_min: number;
  ci_max: number;
  evi: number;
  polygon_count: number;
}

/** Chart accepts polygon data (raster_date) or regional data normalized to same shape */
type ChartVegetationRow =
  | VegetationIndex
  | (RegionalTimeseriesRow & { raster_date: string });

/** Map precalculated ndvi_status values on the polygon layer to VH category labels (must match AgriFilter/AgriBar). */
const NDVI_STATUS_TO_VH: Record<string, string> = {
  juda_yaxshi: "1-Juda yaxshi",
  yaxshi: "2-Yaxshi",
  orta: "3-O'rta",
  past: "4-Past",
};

/** Reverse mapping: VH category label → ndvi_status table value (for WHERE clause). */
const VH_TO_NDVI_STATUS: Record<string, string> = {
  "1-Juda yaxshi": "juda_yaxshi",
  "2-Yaxshi": "yaxshi",
  "3-O'rta": "orta",
  "4-Past": "past",
};

type AgriGraffDisplayLanguage = "uz_cyr" | "uz_lat" | "ru";

function resolveInitialAgri3Language(): AgriGraffDisplayLanguage {
  try {
    const raw =
      localStorage.getItem("evapo_app_lang") ||
      localStorage.getItem("app_lang") ||
      localStorage.getItem("agro_lang") ||
      (typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("lang")
        : null) ||
      "";
    const v = String(raw).trim().toLowerCase();
    if (v === "ru" || v === "rus" || v === "russian") return "ru";
    if (
      v === "uz_lat" ||
      v === "uz-lat" ||
      v === "uz_latin" ||
      v === "uz-latin" ||
      v === "uz"
    ) {
      return "uz_lat";
    }
    if (
      v === "uz_cyr" ||
      v === "uz-cyr" ||
      v === "uz_cyrl" ||
      v === "uz-cyrl" ||
      v === "uz_cyrillic" ||
      v === "uz-cyrillic" ||
      v === "cyrillic"
    ) {
      return "uz_cyr";
    }
    return "ru";
  } catch {
    return "ru";
  }
}

const UZ_CYRILLIC_TO_LATIN: Record<string, string> = {
  А: "A",
  а: "a",
  Б: "B",
  б: "b",
  В: "V",
  в: "v",
  Г: "G",
  г: "g",
  Д: "D",
  д: "d",
  Е: "E",
  е: "e",
  Ё: "Yo",
  ё: "yo",
  Ж: "J",
  ж: "j",
  З: "Z",
  з: "z",
  И: "I",
  и: "i",
  Й: "Y",
  й: "y",
  К: "K",
  к: "k",
  Л: "L",
  л: "l",
  М: "M",
  м: "m",
  Н: "N",
  н: "n",
  О: "O",
  о: "o",
  П: "P",
  п: "p",
  Р: "R",
  р: "r",
  С: "S",
  с: "s",
  Т: "T",
  т: "t",
  У: "U",
  у: "u",
  Ф: "F",
  ф: "f",
  Х: "X",
  х: "x",
  Ц: "Ts",
  ц: "ts",
  Ч: "Ch",
  ч: "ch",
  Ш: "Sh",
  ш: "sh",
  Щ: "Shch",
  щ: "shch",
  Ъ: "'",
  ъ: "'",
  Ы: "I",
  ы: "i",
  Ь: "'",
  ь: "'",
  Э: "E",
  э: "e",
  Ю: "Yu",
  ю: "yu",
  Я: "Ya",
  я: "ya",
  Ғ: "Gʻ",
  ғ: "gʻ",
  Қ: "Q",
  қ: "q",
  Ў: "Oʻ",
  ў: "oʻ",
  Ҳ: "H",
  ҳ: "h",
  Ң: "Ng",
  ң: "ng",
};

const UZ_LATIN_TO_CYRILLIC: Record<string, string> = {
  A: "А",
  a: "а",
  B: "Б",
  b: "б",
  C: "Ц",
  c: "ц",
  D: "Д",
  d: "д",
  E: "Е",
  e: "е",
  F: "Ф",
  f: "ф",
  G: "Г",
  g: "г",
  H: "Ҳ",
  h: "ҳ",
  I: "И",
  i: "и",
  J: "Ж",
  j: "ж",
  K: "К",
  k: "к",
  L: "Л",
  l: "л",
  M: "М",
  m: "м",
  N: "Н",
  n: "н",
  O: "О",
  o: "о",
  P: "П",
  p: "п",
  Q: "Қ",
  q: "қ",
  R: "Р",
  r: "р",
  S: "С",
  s: "с",
  T: "Т",
  t: "т",
  U: "У",
  u: "у",
  V: "В",
  v: "в",
  X: "Х",
  x: "х",
  Y: "Й",
  y: "й",
  Z: "З",
  z: "з",
  Gʻ: "Ғ",
  gʻ: "ғ",
  "G'": "Ғ",
  "g'": "ғ",
  Oʻ: "Ў",
  oʻ: "ў",
  "O'": "Ў",
  "o'": "ў",
  Sh: "Ш",
  sh: "ш",
  Ch: "Ч",
  ch: "ч",
  Ng: "Ң",
  ng: "ң",
  Yo: "Ё",
  yo: "ё",
  Yu: "Ю",
  yu: "ю",
  Ya: "Я",
  ya: "я",
  Ts: "Ц",
  ts: "ц",
  Shch: "Щ",
  shch: "щ",
};

function isPredominantlyCyrillic(str: string): boolean {
  if (!str || typeof str !== "string") return false;
  const cyrillic = (str.match(/[\u0400-\u04FF]/g) || []).length;
  const latin = (str.match(/[a-zA-Z]/g) || []).length;
  return cyrillic >= latin;
}

function uzCyrillicToLatin(text: string): string {
  if (!text || typeof text !== "string") return text;
  let out = "";
  for (let i = 0; i < text.length; i++) {
    out += UZ_CYRILLIC_TO_LATIN[text[i]] ?? text[i];
  }
  return out;
}

function uzLatinToCyrillic(text: string): string {
  if (!text || typeof text !== "string") return text;
  const lower = text.toLowerCase();
  let out = "";
  let i = 0;
  while (i < text.length) {
    const two = text.slice(i, i + 2);
    const twoLower = lower.slice(i, i + 2);
    const mappedTwo =
      UZ_LATIN_TO_CYRILLIC[two] ?? UZ_LATIN_TO_CYRILLIC[twoLower];
    if (two.length === 2 && mappedTwo) {
      out += mappedTwo;
      i += 2;
      continue;
    }
    const c = text[i];
    const cLower = lower[i];
    out += UZ_LATIN_TO_CYRILLIC[c] ?? UZ_LATIN_TO_CYRILLIC[cLower] ?? c;
    i++;
  }
  return out;
}

function translateForDisplay(text: string, language: AgriGraffDisplayLanguage) {
  const str = String(text ?? "").trim();
  if (!str) return str;

  if (language === "uz_lat") {
    // Convert any Cyrillic chars to Latin chars (works even for mixed-script strings).
    return uzCyrillicToLatin(str);
  }
  if (language === "uz_cyr") {
    // Convert any Latin chars to Cyrillic chars (works even for mixed-script strings).
    return uzLatinToCyrillic(str);
  }

  // For `ru` we also show Uzbek place names in Cyrillic for readability.
  return uzLatinToCyrillic(str);
}

const getLocalizedVhCategoryLabel = (
  category: string,
  language: AgriGraffDisplayLanguage,
): string => {
  const base = category.trim();
  if (base === "1-Juda yaxshi") {
    if (language === "ru") return "Очень хороший";
    if (language === "uz_lat") return "Juda yaxshi";
    return "Жуда яхши";
  }
  if (base === "2-Yaxshi") {
    if (language === "ru") return "Хороший";
    if (language === "uz_lat") return "Yaxshi";
    return "Яхши";
  }
  if (base === "3-O'rta") {
    if (language === "ru") return "Средний";
    if (language === "uz_lat") return "O'rta";
    return "Ўрта";
  }
  if (base === "4-Past") {
    if (language === "ru") return "Низкий";
    if (language === "uz_lat") return "Past";
    return "Паст";
  }
  return category;
};

interface AgriGraffWidgetState {
  records: RecordData[];
  loading: boolean;
  error: string | null;
  activeMapView?: JimuMapView;

  // View mode: 'table' or 'graph'
  viewMode: "table" | "graph";

  // 🔎 search UI state
  searchText?: string;
  searchLoading?: boolean;
  searchError?: string | null;
  searchResultCount?: number | null;
  isSearchActive?: boolean;  // Track if search suggestion was selected (applies WHERE filter)

  // Only configured fields from settings
  configuredFields: string[];
  externalFilters: ConfiguredFilters;
  localFilters: ConfiguredFilters;

  // ✅ Regional filters - include VH + category (uzspace bucket)
  regionalFilters: {
    viloyat: string;
    tuman: string;
    yil: string;
    uzspace: string; // category (turi)
    vh: string; // selected vh
  };

  /** Numeric region code resolved from AgriFilter WHERE clause (e.g. 1733 for Xorazm viloyati). */
  regionalRegionCode: number | null;

  /** When set: filter polygons by these uniqueids (from NDVI table ndvi_status), not by polygon layer vh attribute */
  vhUniqueids: string[] | null;

  filterOptions: {
    [key: string]: string[];
  };

  featureLayer?: __esri.FeatureLayer;
  featureLayers: __esri.FeatureLayer[];
  loadingFilters: boolean;
  isDarkTheme: boolean;

  dataSource?: QueriableDataSource;

  mapConnectionAttempts: number;
  connectionStatus: "idle" | "connecting" | "connected" | "failed";

  initialDataLoaded: boolean;
  selecteduniqueid?: string;

  // Pagination states
  currentPage: number;
  hasMoreRecords: boolean;
  totalRecordCount: number;
  loadingMore: boolean;

  lastUpdateTimestamp: number;
  isProcessingExternalUpdate: boolean;

  // Graph view states (chart can show polygon data or regional timeseries when no polygon selected)
  vegetationData: ChartVegetationRow[];
  loadingVegetation: boolean;
  vegetationError: string | null;
  selectedIndices: Array<"ndvi" | "savi" | "rvi" | "ci" | "evi">;
  chartTooltip: {
    indexKey: "ndvi" | "savi" | "rvi" | "ci" | "evi";
    point: {
      date: Date;
      value: number;
      min?: number;
      max?: number;
      /** Must match xScale(date, sourceIndex) so crosshair aligns with rendered dots */
      sourceIndex?: number;
    };
  } | null;
  selectedNdviDate?: string | null;
  selectedChartIndexKey?: "ndvi" | "savi" | "rvi" | "ci" | "evi" | null;
  selectedMonth: number | null;
  isMonthPickerOpen: boolean;
  monthPickerPlacement: "up" | "down";
  graphViewportWidth: number;
  graphViewportHeight: number;
  language: "uz_cyr" | "uz_lat" | "ru";
}

export default class AgriGraffWidget extends React.PureComponent<
  AllWidgetProps<any>,
  AgriGraffWidgetState
> {
  private _prevDefinitionExpression = "";
  private _mapUpdateScheduled = false;
  private _onReset: () => void;
  private initializationTimer: any;
  private _retryTimeout: any;
  private _isMounted: boolean = false;
  private tableContainerRef: React.RefObject<HTMLDivElement>;
  private graphContainerRef: React.RefObject<HTMLDivElement>;
  private graphSvgWrapRef: React.RefObject<HTMLDivElement>;
  private monthPickerRef: React.RefObject<HTMLDivElement>;
  private graphResizeObserver: ResizeObserver | null = null;
  private _graphViewportRaf: number | null = null;
  private _clickHandle: any = null;

  // Single coalesced refresh: push WHERE to DS/layer, then fetch
  private scheduleRefresh = debounce(async () => {
    if (!this._isMounted || this.state.connectionStatus !== "connected") return;
    await this.applyMapFilters();
    await this.fetchData();
  }, 250);

  private _allowClearOnce = false;

  /** Viloyat name → region number (from layer attribute `region`). Used in WHERE and API as region/district. */
  private _viloyatToRegion: Record<string, number> = {};
  /** Tuman name → district number (from layer attribute `district`). */
  private _tumanToDistrict: Record<string, number> = {};

  /** Viloyat normalized key → resolved feature layer index. */
  private _viloyatKeyToLayerIndex: Record<string, number> = {};

  // Debounce timer for external updates
  private _updateDebounceTimer: any = null;
  private _debounceTimer: any = null;
  private _searchDebounceTimer: any = null;
  private _activeController: AbortController | null = null;

  // Handle apostrophe variants for consistent text filtering
  private static readonly APOSTROPHE_VARIANTS = ["'", "'", "'", "ʻ", "ʼ", "`"];
  private normalizeApos(s: string): string {
    return (s ?? "").normalize("NFKC").replace(/['''ʻʼ`]/g, "'");
  }

  // Canonicalize keys used for viloyat/tuman → region/district dictionaries
  private makeRegionDistrictKey(raw: string | null | undefined): string {
    if (raw == null) return "";
    const s = this.normalizeApos(String(raw)).trim().toLowerCase();
    return s;
  }

  private eqAposSmart(field: string, raw: string): string {
    if (!raw) return "";
    const s = this.normalizeApos(String(raw).trim());
    if (!/'/.test(s)) return `${field}='${this.escapeArcGIS(s)}'`;

    const base = s.replace(/'/g, "\uFFFF");
    const parts = AgriGraffWidget.APOSTROPHE_VARIANTS.map((ch) => {
      const candidate = base.split("\uFFFF").join(ch);
      return `${field}='${this.escapeArcGIS(candidate)}'`;
    });
    return `(${parts.join(" OR ")})`;
  }

  private formatLocalDateYmd = (dt: Date): string => {
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, "0");
    const d = String(dt.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  MAX_CONNECTION_ATTEMPTS = 3;
  RECORDS_PER_PAGE = 100;

  private throttledFetchData: any;

  constructor(props) {
    super(props);

    let initialIsDarkTheme = true;
    try {
      const saved =
        typeof window !== "undefined"
          ? window.localStorage?.getItem("app_theme")
          : null;
      const domTheme =
        typeof document !== "undefined"
          ? document.documentElement.getAttribute("data-theme")
          : null;
      if (saved !== null && saved !== undefined) {
        initialIsDarkTheme = saved === "dark";
      } else if (domTheme === "light" || domTheme === "dark") {
        initialIsDarkTheme = domTheme === "dark";
      }
    } catch {
      initialIsDarkTheme = true;
    }

    this.state = {
      records: [],
      loading: false,
      error: null,

      viewMode: "graph",

      searchText: "",
      searchLoading: false,
      searchError: null,
      searchResultCount: null,
      isSearchActive: false,

      configuredFields: [],
      externalFilters: {},
      localFilters: {},

      // ✅ include vh here
      // Default to graph; when no polygon is selected the graph uses
      // regional/republic timeseries API data.
      regionalFilters: {
        viloyat: "",
        tuman: "",
        yil: "",
        uzspace: "",
        vh: "",
      },

      regionalRegionCode: null,

      vhUniqueids: null,

      filterOptions: {},

      featureLayers: [],

      loadingFilters: false,
      isDarkTheme: initialIsDarkTheme,

      mapConnectionAttempts: 0,
      connectionStatus: "idle",

      initialDataLoaded: false,

      currentPage: 0,
      hasMoreRecords: true,
      totalRecordCount: 0,
      loadingMore: false,

      lastUpdateTimestamp: 0,
      isProcessingExternalUpdate: false,

      vegetationData: [],
      loadingVegetation: false,
      vegetationError: null,
      selectedIndices: ["ndvi"],
      chartTooltip: null,
      selectedNdviDate: null,
      selectedChartIndexKey: null,
      selectedMonth: null,
      isMonthPickerOpen: false,
      monthPickerPlacement: "down",
      graphViewportWidth: 860,
      graphViewportHeight: 360,
      language: resolveInitialAgri3Language(),
    };

    this.tableContainerRef = React.createRef();
    this.graphContainerRef = React.createRef();
    this.graphSvgWrapRef = React.createRef();
    this.monthPickerRef = React.createRef();

    this.throttledFetchData = throttle(this.fetchData, 500, {
      leading: false,
      trailing: true,
    });

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleResetFilters = this.handleResetFilters.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.fetchFilterOptions = this.fetchFilterOptions.bind(this);
    this.onDataSourceCreated = this.onDataSourceCreated.bind(this);
    this.onDataSourceInfoChange = this.onDataSourceInfoChange.bind(this);
    this.retryMapConnection = this.retryMapConnection.bind(this);
    this.onActiveViewChange = this.onActiveViewChange.bind(this);
    this.initializeMapConnection = this.initializeMapConnection.bind(this);
    this.ensureInitialization = this.ensureInitialization.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.loadMoreRecords = this.loadMoreRecords.bind(this);

    // Enhanced external filter handlers
    this.handleConstructionYearChange =
      this.handleConstructionYearChange.bind(this);
    this.handleLandCategoryChange = this.handleLandCategoryChange.bind(this);
    this.handleRegionalChange = this.handleRegionalChange.bind(this);
    this.handleGeneralFilterChange = this.handleGeneralFilterChange.bind(this);
    this.processExternalFilterUpdate =
      this.processExternalFilterUpdate.bind(this);
    this.applyExternalFilterUpdate = this.applyExternalFilterUpdate.bind(this);

    // Graph functions
    this.switchToGraph = this.switchToGraph.bind(this);
    this.switchToTable = this.switchToTable.bind(this);
    this.fetchVegetationData = this.fetchVegetationData.bind(this);
    this.toggleMonthPicker = this.toggleMonthPicker.bind(this);
    this.handleMonthOptionClick = this.handleMonthOptionClick.bind(this);
  }

  private updateGraphViewportSize = () => {
    const wrap = this.graphSvgWrapRef.current;
    if (!wrap) return;

    const rect = wrap.getBoundingClientRect();
    const nextWidth = Math.max(120, Math.floor(rect.width));
    const nextHeight = Math.max(120, Math.floor(rect.height));

    this.setState((prev) => {
      if (
        Math.abs(prev.graphViewportWidth - nextWidth) < 2 &&
        Math.abs(prev.graphViewportHeight - nextHeight) < 2
      ) {
        return null;
      }
      return {
        graphViewportWidth: nextWidth,
        graphViewportHeight: nextHeight,
      };
    });
  };

  private scheduleGraphViewportRefresh = () => {
    if (typeof window === "undefined") return;

    if (this._graphViewportRaf != null) {
      window.cancelAnimationFrame(this._graphViewportRaf);
      this._graphViewportRaf = null;
    }

    this._graphViewportRaf = window.requestAnimationFrame(() => {
      this._graphViewportRaf = window.requestAnimationFrame(() => {
        this._graphViewportRaf = null;
        this.updateGraphViewportSize();
      });
    });
  };

  private observeGraphViewport = () => {
    this.graphResizeObserver?.disconnect();
    this.graphResizeObserver = null;

    const wrap = this.graphSvgWrapRef.current;
    if (!wrap) return;
    const container = this.graphContainerRef.current;

    if (typeof ResizeObserver !== "undefined") {
      this.graphResizeObserver = new ResizeObserver(() => {
        this.scheduleGraphViewportRefresh();
      });
      this.graphResizeObserver.observe(wrap);
      if (container && container !== wrap) {
        this.graphResizeObserver.observe(container);
      }
    }

    this.scheduleGraphViewportRefresh();
  };

  private handleDocumentMouseDown = (event: MouseEvent) => {
    if (!this.state.isMonthPickerOpen) return;

    const pickerRoot = this.monthPickerRef.current;
    const targetNode = event.target as Node | null;

    if (!pickerRoot || !targetNode) return;
    if (pickerRoot.contains(targetNode)) return;

    this.setState({ isMonthPickerOpen: false });
  };

  // Keep braces/no-braces variants and normalize case safely
  private builduniqueidWhere = (raw: string, field: string = "uniqueid") => {
    const escapeArcGIS = (v: string) => v.replace(/'/g, "''");
    const term = (raw || "").trim();
    if (!term) return "1=0";

    const hasBraces = /^[{].*[}]$/.test(term);
    const core = term.replace(/[{}]/g, "");
    const withBraces = `{${core}}`;
    const noBraces = core;

    const variants = Array.from(new Set([term, withBraces, noBraces]));
    const pieces = variants.map(
      (v) => `UPPER(${field})=UPPER('${escapeArcGIS(v)}')`,
    );
    return `(${pieces.join(" OR ")})`;
  };

  /** Resolve actual cased field name on the layer or null if missing */
  private resolveFieldCaseInsensitive = (name: string): string | null => {
    const fl = this.state.featureLayer;
    if (!fl?.fields) return null;
    const lower = name.toLowerCase();
    const f = fl.fields.find((ff) => ff.name.toLowerCase() === lower);
    return f?.name ?? null;
  };

  /** Viloyat (yoki qulflash) tanlanguncha jadval/grafik faqat ko‘rinadi — bosishlar ishlamaydi. */
  private isRegionalInteractionEnabled = (): boolean =>
    !!String(this.state.regionalFilters?.viloyat || "").trim();

  /**
   * ✅ MAIN INPUT: Master filter state from AgriFilter
   * - reacts to yil + viloyat + tuman + turi + vh
   */
  private handleMasterFilterChanged = (event: Event) => {
    if (!this._isMounted) return;

    const d: any = (event as CustomEvent).detail || {};
    if (!d?.filters) return;

    if (d.source === "AgriGraffWidget") return;

    const f = d.filters || {};
    const nextLanguage: "uz_cyr" | "uz_lat" | "ru" =
      (f.language as any) || this.state.language || "ru";

    // AgriFilter may provide the active "locked viloyat" via scope.
    // In that case, f.viloyat can be empty, so we still need to route queries to the locked layer.
    const lockedViloyat = d?.scope?.lockedViloyat
      ? this.normalizeApos(String(d.scope.lockedViloyat))
      : "";

    // Try to capture numeric region code from AgriFilter WHERE clause, if available
    let regionalRegionCode: number | null =
      this.state.regionalRegionCode ?? null;
    const whereClause: string | undefined = d?.meta?.whereClause;
    if (typeof whereClause === "string") {
      const match = whereClause.match(/region\s*=\s*'?(\d+)'?/i);
      if (match && match[1]) {
        const parsed = Number(match[1]);
        if (Number.isFinite(parsed)) regionalRegionCode = parsed;
      }
    }

    const effectiveViloyat =
      lockedViloyat || (f.viloyat ? this.normalizeApos(String(f.viloyat)) : "");

    // When parent returns to default (no viloyat selected), clear cached region code.
    // Otherwise graph API requests may keep sending stale `region=...` and hide republic-wide data.
    if (!effectiveViloyat) {
      regionalRegionCode = null;
    }

    const next = {
      viloyat: effectiveViloyat,
      tuman: f.tuman ? this.normalizeApos(String(f.tuman)) : "",
      yil: f.yil ? String(f.yil) : "",
      uzspace: f.turi ? this.normalizeApos(String(f.turi)) : "", // ✅ turi
      vh: f.vh ? this.normalizeApos(String(f.vh)) : "", // ✅ vh
    };

    // We now filter directly on layer fields (including per-date status fields)
    // instead of receiving giant uniqueid IN (...) lists from AgriFilter.
    const vhUniqueids = null;

    // ✅ Defensive: if parent changed and vh not included properly, clear it
    const parentChanged =
      next.yil !== this.state.regionalFilters.yil ||
      next.viloyat !== this.state.regionalFilters.viloyat ||
      next.tuman !== this.state.regionalFilters.tuman ||
      next.uzspace !== this.state.regionalFilters.uzspace;

    if (parentChanged && next.vh && next.vh === this.state.regionalFilters.vh) {
      // keep
    } else if (parentChanged && !f.vh) {
      next.vh = "";
    }

    const ndviDate = f.ndviDate ? String(f.ndviDate) : "";

    if (
      !this.filtersChanged(this.state.regionalFilters, next) &&
      ndviDate === (this.state.selectedNdviDate || "")
    ) {
      // Language-only change: update UI state, but don't refetch data.
      if (nextLanguage !== this.state.language) {
        this.setState({ language: nextLanguage });
      }
      return;
    }

    console.log(
      "[AgriGraffWidget] ✅ masterFilterChanged → regionalFilters:",
      next,
      "ndviDate:",
      ndviDate,
    );

    const targetLayer = effectiveViloyat
      ? this.getFeatureLayerForViloyat(effectiveViloyat) ||
        this.state.featureLayer
      : this.state.featureLayer;

    // If parent geography/time changed, polygon selection becomes stale.
    const shouldClearPolygonSelection =
      !!this.state.selecteduniqueid &&
      (next.viloyat !== this.state.regionalFilters.viloyat ||
        next.tuman !== this.state.regionalFilters.tuman ||
        next.yil !== this.state.regionalFilters.yil);

    this.setState(
      {
        regionalFilters: next,
        featureLayer: targetLayer,
        regionalRegionCode,
        vhUniqueids,
        selectedNdviDate: ndviDate || null,
        selectedChartIndexKey: null,
        selectedMonth: parentChanged ? null : this.state.selectedMonth,
        isMonthPickerOpen: false,
        chartTooltip: parentChanged ? null : this.state.chartTooltip,
        selecteduniqueid: shouldClearPolygonSelection
          ? ""
          : this.state.selecteduniqueid,
        vegetationData: shouldClearPolygonSelection
          ? []
          : this.state.vegetationData,
        vegetationError: shouldClearPolygonSelection
          ? null
          : this.state.vegetationError,
        records: [],
        currentPage: 0,
        hasMoreRecords: true,
        loading: true,
        language: nextLanguage,
      },
      () => {
        if (shouldClearPolygonSelection) {
          try {
            this.state.activeMapView?.view?.graphics?.removeAll?.();
          } catch {}
          try {
            document.dispatchEvent(
              new CustomEvent("widgetSelectionChanged", {
                detail: {
                  source: "AgriGraffWidget",
                  polygonMode: false,
                  uniqueid: "",
                  timestamp: Date.now(),
                },
                bubbles: true,
              }),
            );
          } catch {}
        }
        this.scheduleRefresh();
      },
    );
  };

  /** Read setting: 'uniqueid' | 'gidv' (defaults to 'uniqueid') */
  private getSearchField = (): "uniqueid" | "gidv" => {
    const cfg: any = this.props?.config;
    const val = cfg?.get ? cfg.get("searchField") : cfg?.searchField;
    return val === "gidv" ? "gidv" : "uniqueid";
  };

  /** Build WHERE for GIDV smart search (accepts plain GUID, {GUID}, or the SU{GUID} style) */
  private buildGidvWhere = (raw: string, field: string = "gidv") => {
    const escapeArcGIS = (v: string) => v.replace(/'/g, "''");
    const term = (raw || "").trim();
    if (!term) return "1=0";

    const core = term.replace(/[{}]/g, "");
    const GUID =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    const pieces = new Set<string>();

    pieces.add(`UPPER(${field})=UPPER('${escapeArcGIS(term)}')`);
    if (core.length >= 8)
      pieces.add(`UPPER(${field}) LIKE UPPER('%${escapeArcGIS(core)}%')`);

    if (GUID.test(core)) {
      pieces.add(`UPPER(${field})=UPPER('{${escapeArcGIS(core)}}')`);
      ["SU", "NV", "FR", "BH", "GZ", "TV", "HR"].forEach((p) =>
        pieces.add(`UPPER(${field})=UPPER('${p}{${escapeArcGIS(core)}}')`),
      );
    }

    const m = term.match(/^[A-Za-z]{2}\{(.+)\}$/);
    if (m && m[1]) {
      pieces.add(`UPPER(${field})=UPPER('{${escapeArcGIS(m[1])}}')`);
    }

    return `(${Array.from(pieces).join(" OR ")})`;
  };

  /** Build smart WHERE for search text: uniqueid exact/like OR farmer name like */
  private buildSearchWhere = (raw: string): string => {
    const term = (raw || "").trim();
    if (!term) return "1=0";

    const escapeArcGIS = (v: string) => v.replace(/'/g, "''");
    const uidField = this.resolveFieldCaseInsensitive("uniqueid") || "uniqueid";
    const farmerField = this.resolveFieldCaseInsensitive("f_name") || "f_name";
    const escaped = escapeArcGIS(term);

    const uniqueidClause = this.builduniqueidWhere(term, uidField);
    const uidLikeClause = `UPPER(${uidField}) LIKE UPPER('%${escaped}%')`;
    const farmerLikeClause = `UPPER(${farmerField}) LIKE UPPER('%${escaped}%')`;

    return `((${uniqueidClause}) OR ${uidLikeClause} OR ${farmerLikeClause})`;
  };

  private runAutoSearch = async (termRaw: string) => {
    if (!this._isMounted) return;
    const { featureLayer, activeMapView } = this.state;

    const term = (termRaw || "").trim();
    
    console.log("[SEARCH] Executing search:", { term, hasLayer: !!featureLayer, hasMapView: !!activeMapView });
    
    if (!term) {
      this.setState({ searchLoading: false, searchError: null, searchResultCount: null });
      return;
    }

    if (!featureLayer || !activeMapView) {
      this.setState({ searchError: "Харита ёки қатлам ҳали уланмаган." });
      return;
    }

    try {
      this.setState({ searchLoading: true, searchError: null, searchResultCount: null });

      const q = featureLayer.createQuery();
      q.outFields = ["*"];
      q.returnGeometry = true;
      
      // ✅ Combine search WHERE with regional filters (viloyat/tuman/yil/uzspace)
      const searchWhere = this.buildSearchWhere(term);
      const { viloyat, tuman, yil, uzspace } = this.state.regionalFilters;
      const clauses: string[] = [searchWhere];
      
      const layerFields =
        featureLayer?.fields?.map((f) => f.name.toLowerCase()) ?? [];
      const hasRegion = layerFields.includes("region");
      const hasDistrict = layerFields.includes("district");
      const regionField = featureLayer?.fields?.find(
        (ff) => ff?.name?.toLowerCase() === "region",
      );
      const districtField = featureLayer?.fields?.find(
        (ff) => ff?.name?.toLowerCase() === "district",
      );
      const isRegionString = (regionField?.type || "")
        .toLowerCase()
        .includes("string");
      const isDistrictString = (districtField?.type || "")
        .toLowerCase()
        .includes("string");
      
      // Add viloyat regional filter
      if (viloyat) {
        const effectiveViloyat = this.normalizeApos(viloyat);
        const vilKey = this.makeRegionDistrictKey(effectiveViloyat);
        if (hasRegion && /^\d+$/.test(effectiveViloyat)) {
          clauses.push(
            isRegionString
              ? `region = '${this.escapeArcGIS(effectiveViloyat)}'`
              : `region = ${Number(effectiveViloyat)}`,
          );
        } else if (hasRegion && vilKey && this._viloyatToRegion[vilKey] !== undefined) {
          const regionNum = this._viloyatToRegion[vilKey];
          clauses.push(
            isRegionString
              ? `region = '${this.escapeArcGIS(String(regionNum))}'`
              : `region = ${regionNum}`,
          );
        } else {
          clauses.push(this.eqAposSmart("viloyat", viloyat));
        }
      }
      
      // Add tuman district filter
      if (tuman) {
        const effectiveTuman = this.normalizeApos(tuman);
        const tumanKey = this.makeRegionDistrictKey(effectiveTuman);
        if (hasDistrict && /^\d+$/.test(effectiveTuman)) {
          clauses.push(
            isDistrictString
              ? `district = '${this.escapeArcGIS(effectiveTuman)}'`
              : `district = ${Number(effectiveTuman)}`,
          );
        } else if (hasDistrict && tumanKey && this._tumanToDistrict[tumanKey] !== undefined) {
          const districtNum = this._tumanToDistrict[tumanKey];
          clauses.push(
            isDistrictString
              ? `district = '${this.escapeArcGIS(String(districtNum))}'`
              : `district = ${districtNum}`,
          );
        } else {
          clauses.push(this.eqAposSmart("tuman", tuman));
        }
      }
      
      // Add year filter
      if (yil) {
        const four = String(yil).match(/\b(18|19|20)\d{2}\b/)?.[0];
        clauses.push(
          four
            ? `yil LIKE '${four}%'`
            : `yil LIKE '%${this.escapeArcGIS(String(yil))}%'`,
        );
      }
      
      // Add category filter
      if (uzspace) {
        const catField = this.getCategoryFieldName();
        if (catField) clauses.push(this.eqAposSmart(catField, uzspace));
      }
      
      q.where = clauses.join(" AND ");
      console.log("[SEARCH] Combined WHERE:", { searchWhere, filters: { viloyat, tuman, yil, uzspace }, where: q.where });

      const fs = await featureLayer.queryFeatures(q);
      const found = fs?.features?.length ?? 0;
      this.setState({ searchResultCount: found });

      if (!found) {
        this.setState({ searchError: "Излаш бўйича объект топилмади." });
        return;
      }

      const feat = fs.features[0];

      try {
        const g = feat.clone() as any;
        if (feat.geometry.type === "polygon") {
          g.symbol = new SimpleFillSymbol({
            color: new Color([0, 100, 255, 0.3]),
            outline: new SimpleLineSymbol({ color: new Color([0, 100, 255, 1]), width: 3 }),
          });
        } else if (feat.geometry.type === "polyline") {
          g.symbol = new SimpleLineSymbol({ color: new Color([0, 100, 255, 1]), width: 4 });
        } else {
          g.symbol = new SimpleMarkerSymbol({
            color: new Color([0, 100, 255, 0.8]),
            size: 15,
            outline: new SimpleLineSymbol({ color: new Color([255, 255, 255, 1]), width: 2 }),
          });
        }
        activeMapView.view.graphics.removeAll();
        activeMapView.view.graphics.add(g);
      } catch {}

      try {
        await activeMapView.view.goTo(
          {
            target: feat.geometry,
            extent: feat.geometry?.extent?.expand(2) || feat.geometry,
          },
          { duration: 1200, easing: "linear" },
        );
      } catch {}

      const gid = (feat.attributes?.uniqueid || "").toString();
      if (gid) {
        console.log("[SEARCH] Setting selecteduniqueid and updating table:", { uniqueid: gid });
        this.setState({ 
          selecteduniqueid: gid,
          searchText: term,
          isSearchActive: true,  // Enable search WHERE filter
          records: [],
          currentPage: 0,
        }, () => {
          // Fetch table data filtered by search term
          this.fetchData();
        });
      }
    } catch (err: any) {
      this.setState({ searchError: err?.message || "Излаш амалга ошмади." });
    } finally {
      this.setState({ searchLoading: false });
    }
  };

  private handleExternalTableSearchChanged = (event: Event) => {
    if (!this._isMounted) return;

    const detail: any = (event as CustomEvent).detail || {};
    const nextQuery = String(detail?.query ?? "").trim();
    const isFullSelection = Boolean(detail?.isFullSelection);

    console.log("[SEARCH] AgriGraff4 received event:", { source: detail?.source, query: nextQuery, isFullSelection });

    // If search is cleared, disable search filter
    if (!nextQuery) {
      this.setState({
        searchText: "",
        searchError: null,
        searchResultCount: null,
        isSearchActive: false,
        records: [],
        currentPage: 0,
      }, () => {
        this.fetchData();  // Clear table with empty search
      });
      return;
    }

    // ✅ For typing (isFullSelection: false): just filter table
    if (!isFullSelection) {
      this.setState(
        {
          searchText: nextQuery,
          searchError: null,
          searchResultCount: null,
          isSearchActive: true,  // Enable search filtering on table
          records: [],
          currentPage: 0,
        },
        () => {
          // Fetch table data immediately with search filter (no map search)
          this.fetchData();
        },
      );
      return;
    }

    // ✅ For full selection (isFullSelection: true): filter table AND search map
    this.setState(
      {
        searchText: nextQuery,
        searchError: null,
        searchResultCount: null,
        isSearchActive: true,
        records: [],
        currentPage: 0,
      },
      () => {
        // Fetch table data with search filter
        this.fetchData();
        
        // Also search map and highlight selected record
        this.runAutoSearch(nextQuery);
      },
    );
  };

  /**
   * ✅ WHERE builder: viloyat/tuman become region/district (numeric) when layer has those fields.
   * Includes: region (or viloyat), district (or tuman), yil, turi (uzspace), vh.
   */
  private buildWhereClause(): string {
    const { viloyat, tuman, yil, uzspace } = this.state.regionalFilters;
    const { searchText, isSearchActive } = this.state;

    // Default mode: require only yil. Empty viloyat means republic-wide.
    if (!yil) {
      return "1=0";
    }

    const clauses: string[] = [];
    const layerFields =
      this.state.featureLayer?.fields?.map((f) => f.name.toLowerCase()) ?? [];
    const hasRegion = layerFields.includes("region");
    const hasDistrict = layerFields.includes("district");
    const regionField = this.state.featureLayer?.fields?.find(
      (ff) => ff?.name?.toLowerCase() === "region",
    );
    const districtField = this.state.featureLayer?.fields?.find(
      (ff) => ff?.name?.toLowerCase() === "district",
    );
    const isRegionString = (regionField?.type || "")
      .toLowerCase()
      .includes("string");
    const isDistrictString = (districtField?.type || "")
      .toLowerCase()
      .includes("string");

    if (viloyat) {
      const effectiveViloyat = this.normalizeApos(viloyat);
      const vilKey = this.makeRegionDistrictKey(effectiveViloyat);
      if (hasRegion && /^\d+$/.test(effectiveViloyat)) {
        clauses.push(
          isRegionString
            ? `region = '${this.escapeArcGIS(effectiveViloyat)}'`
            : `region = ${Number(effectiveViloyat)}`,
        );
      } else if (
        hasRegion &&
        vilKey &&
        this._viloyatToRegion[vilKey] !== undefined &&
        Number.isFinite(this._viloyatToRegion[vilKey])
      ) {
        const regionNum = this._viloyatToRegion[vilKey];
        clauses.push(
          isRegionString
            ? `region = '${this.escapeArcGIS(String(regionNum))}'`
            : `region = ${regionNum}`,
        );
      } else {
        clauses.push(this.eqAposSmart("viloyat", viloyat));
      }
    }
    if (tuman) {
      const effectiveTuman = this.normalizeApos(tuman);
      const tumanKey = this.makeRegionDistrictKey(effectiveTuman);
      if (hasDistrict && /^\d+$/.test(effectiveTuman)) {
        clauses.push(
          isDistrictString
            ? `district = '${this.escapeArcGIS(effectiveTuman)}'`
            : `district = ${Number(effectiveTuman)}`,
        );
      } else if (
        hasDistrict &&
        tumanKey &&
        this._tumanToDistrict[tumanKey] !== undefined &&
        Number.isFinite(this._tumanToDistrict[tumanKey])
      ) {
        const districtNum = this._tumanToDistrict[tumanKey];
        clauses.push(
          isDistrictString
            ? `district = '${this.escapeArcGIS(String(districtNum))}'`
            : `district = ${districtNum}`,
        );
      } else {
        clauses.push(this.eqAposSmart("tuman", tuman));
      }
    }

    if (yil) {
      const four = String(yil).match(/\b(18|19|20)\d{2}\b/)?.[0];
      clauses.push(
        four
          ? `yil LIKE '${four}%'`
          : `yil LIKE '%${this.escapeArcGIS(String(yil))}%'`,
      );
    }

    // ✅ Category (turi) stored in uzspace bucket
    if (uzspace) {
      const catField = this.getCategoryFieldName();
      if (catField) clauses.push(this.eqAposSmart(catField, uzspace));
    }

    // ✅ NDVI status filter for selected VH bucket + date (matches AgriFilter logic)
    const statusClause = this.buildNdviStatusClauseForCurrentVh();
    if (statusClause) {
      clauses.push(statusClause);
    }

    // ✅ Search term filter - include ONLY if search suggestion was selected
    if (isSearchActive && searchText?.trim()) {
      const searchClause = this.buildSearchWhere(searchText);
      if (searchClause && searchClause !== "1=0") {
        console.log("[SEARCH] Adding search WHERE clause (isSearchActive):", { searchText, searchClause });
        clauses.push(`(${searchClause})`);
      }
    }

    const result = clauses.length ? clauses.join(" AND ") : "1=1";
    console.log("[AgriGraffWidget] WHERE:", result);
    return result;
  }

  /**
   * Fetches from the feature layer and stores viloyat→region and tuman→district mappings.
   * Queries use region/district (numeric) so filters match the layer and API expectations.
   */
  private fetchAndStoreRegionDistrictMappings = async (): Promise<void> => {
    const layers = this.state.featureLayers?.length
      ? this.state.featureLayers
      : this.state.featureLayer
        ? [this.state.featureLayer]
        : [];

    if (!layers.length) return;

    const viloyatToRegion: Record<string, number> = {};
    const tumanToDistrict: Record<string, number> = {};

    try {
      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        if (!layer) continue;

        if (!layer?.fields || layer.fields.length === 0) {
          await layer.load();
        }

        const q = layer.createQuery();
        (q as any).where = "1=1";
        (q as any).outFields = ["viloyat", "region", "tuman", "district"];
        (q as any).returnGeometry = false;
        (q as any).num = 50000;

        const res = await layer.queryFeatures(q);
        const features = res?.features ?? [];

        for (const f of features) {
          const a = (f.attributes || {}) as Record<string, unknown>;
          const viloyatKey = this.makeRegionDistrictKey(
            a?.viloyat != null && a.viloyat !== "" ? String(a.viloyat) : null,
          );
          const region =
            a?.region != null && a.region !== "" ? Number(a.region) : NaN;
          const tumanKey = this.makeRegionDistrictKey(
            a?.tuman != null && a.tuman !== "" ? String(a.tuman) : null,
          );
          const district =
            a?.district != null && a.district !== "" ? Number(a.district) : NaN;

          if (viloyatKey && Number.isFinite(region))
            viloyatToRegion[viloyatKey] = region;
          if (tumanKey && Number.isFinite(district))
            tumanToDistrict[tumanKey] = district;
        }
      }

      this._viloyatToRegion = viloyatToRegion;
      this._tumanToDistrict = tumanToDistrict;
      console.log("[AgriGraffWidget] Stored region/district mappings:", {
        viloyatCount: Object.keys(viloyatToRegion).length,
        tumanCount: Object.keys(tumanToDistrict).length,
      });
    } catch (e) {
      console.warn(
        "[AgriGraffWidget] fetchAndStoreRegionDistrictMappings failed:",
        e,
      );
    }
  };

  /* ---------------------- ENHANCED EVENT HANDLERS FOR ALL 4 WIDGETS ---------------------- */

  // 🗓️ Year change: map to regional.yil + reset vh
  private handleConstructionYearChange = (event: CustomEvent) => {
    if (!this._isMounted) return;
    const { detail } = event || {};
    if (!detail || detail.source === "AgriGraffWidget") return;

    const yil = detail.year || detail.yil || detail.constructionYear || "";
    const next = {
      ...this.state.regionalFilters,
      yil: yil ? String(yil) : "",
      vh: "",
    };

    if (!this.filtersChanged(this.state.regionalFilters, next)) return;

    this.setState(
      {
        regionalFilters: next,
        vhUniqueids: null,
        loading: true,
        records: [],
        currentPage: 0,
        hasMoreRecords: true,
      },
      () => {
        this.scheduleRefresh();

        // Broadcast updated filters so AgriFilter/AgriBar react automatically
        document.dispatchEvent(
          new CustomEvent("widgetSelectionChanged", {
            detail: {
              source: "AgriGraffWidget",
              yil: next.yil,
              viloyat: next.viloyat,
              tuman: next.tuman,
              turi: next.uzspace,
              vh: next.vh,
              timestamp: Date.now(),
            },
            bubbles: true,
          }),
        );
      },
    );
  };

  /** Get configured display fields from settings */
  private getDisplayFields(): string[] {
    const cfg: any = this.props?.config;
    const displayFields = cfg?.get
      ? cfg.get("displayFields")
      : cfg?.displayFields;

    if (!displayFields || displayFields.length === 0) {
      return ["uniqueid", "tuman", "f_name", "f_inn", "maydon", "turi", "vh"];
    }

    return displayFields;
  }

  /** Resolve polygon NDVI status field for the currently selected NDVI date (e.g. status_2025_06_12). */
  private getStatusFieldNameForCurrentDate(): string | null {
    const fl = this.state.featureLayer;
    const ndviDate = (this.state.selectedNdviDate || "").trim();
    if (!fl || !fl.fields || !ndviDate) return null;

    const cfg = (this.props.config || {}) as any;
    const prefix =
      (cfg.polygonStatusPrefix || "status_").toString().trim() || "status_";
    const suffix = ndviDate.replace(/-/g, "_");
    const desired = `${prefix}${suffix}`.toLowerCase();

    const match = fl.fields.find(
      (f) => (f.name || "").toString().toLowerCase() === desired,
    );
    return match ? match.name : null;
  }

  /** Build NDVI status WHERE clause for the current VH selection and NDVI date. */
  private buildNdviStatusClauseForCurrentVh(): string {
    const ndviDate = (this.state.selectedNdviDate || "").trim();
    const vhCategory = (this.state.regionalFilters?.vh || "").trim();
    if (!ndviDate || !vhCategory) return "";

    const statusTableValue = VH_TO_NDVI_STATUS[vhCategory];
    if (!statusTableValue) return "";

    const statusField = this.getStatusFieldNameForCurrentDate();
    if (!statusField) return "";

    return `${statusField} = '${this.escapeArcGIS(statusTableValue)}'`;
  }

  /** Get display name for a field (alias or field name) */
  private getFieldDisplayName(fieldName: string): string {
    const { featureLayer } = this.state;

    if (!featureLayer?.fields) return fieldName;

    const field = featureLayer.fields.find(
      (f) => f.name.toLowerCase() === fieldName.toLowerCase(),
    );
    return field?.alias || fieldName;
  }

  // 🔗 Handles categoryFilterChanged from GeoPie
  private handleLandCategoryChange = (event: CustomEvent) => {
    if (!this._isMounted) return;
    const { detail } = event || {};
    if (!detail || detail.source === "AgriGraffWidget") return;

    const selected = (
      detail.category ??
      detail.turi ??
      detail.tur ??
      detail.uzspace ??
      ""
    )
      .toString()
      .trim();

    const v = detail.viloyat
      ? this.normalizeApos(detail.viloyat)
      : this.state.regionalFilters.viloyat;
    const t = detail.tuman
      ? this.normalizeApos(detail.tuman)
      : this.state.regionalFilters.tuman;
    const y =
      detail.yil != null
        ? String(detail.yil)
        : detail.year != null
          ? String(detail.year)
          : this.state.regionalFilters.yil;

    // ✅ Keep current bar selection (vh) when only category changes so bar + crop filters apply together
    const nextRegional = {
      viloyat: v || "",
      tuman: t || "",
      yil: y || "",
      uzspace: selected ? this.normalizeApos(selected) : "",
      vh: this.state.regionalFilters.vh || "",
    };

    if (!this.filtersChanged(this.state.regionalFilters, nextRegional)) return;

    this.setState(
      {
        regionalFilters: nextRegional,
        vhUniqueids: null,
        selecteduniqueid: "",
        vegetationData: [],
        vegetationError: null,
        records: [],
        currentPage: 0,
        hasMoreRecords: true,
        loading: true,
      },
      () => {
        try {
          this.state.activeMapView?.view?.graphics?.removeAll?.();
        } catch {}

        this.applyMapFilters();
        this.throttledFetchData();

        // Keep graph view alive when crop changes without polygon selection.
        // Otherwise vegetationData stays empty and UI shows "Viloyat ma'lumoti yo'q".
        if (this.state.viewMode === "graph" && !this.state.selecteduniqueid) {
          this.fetchRegionalTimeseries();
        }

        try {
          document.dispatchEvent(
            new CustomEvent("widgetSelectionChanged", {
              detail: {
                source: "AgriGraffWidget",
                polygonMode: false,
                timestamp: Date.now(),
              },
              bubbles: true,
            }),
          );
        } catch {}
      },
    );
  };

  // 🌍 Region change: update + reset vh
  private handleRegionalChange = (event: CustomEvent) => {
    if (!this._isMounted) return;
    const { detail } = event || {};
    if (!detail || detail.source === "AgriGraffWidget") return;

    const next = {
      viloyat: detail.viloyat ? this.normalizeApos(detail.viloyat) : "",
      tuman: detail.tuman ? this.normalizeApos(detail.tuman) : "",
      yil: detail.yil ? String(detail.yil) : "",
      uzspace: detail.uzspace ? this.normalizeApos(detail.uzspace) : "",
      vh: "", // ✅ reset vh when region changes
    };

    if (!this.filtersChanged(this.state.regionalFilters, next)) return;

    this.setState(
      {
        regionalFilters: next,
        vhUniqueids: null,
        loading: true,
        records: [],
        currentPage: 0,
        hasMoreRecords: true,
      },
      () => {
        this.scheduleRefresh();

        document.dispatchEvent(
          new CustomEvent("widgetSelectionChanged", {
            detail: {
              source: "AgriGraffWidget",
              yil: next.yil,
              viloyat: next.viloyat,
              tuman: next.tuman,
              turi: next.uzspace,
              vh: next.vh,
              timestamp: Date.now(),
            },
            bubbles: true,
          }),
        );
      },
    );
  };

  // 🧩 General filter: supports vh + turi
  private handleGeneralFilterChange = (event: CustomEvent) => {
    if (!this._isMounted) return;
    const { detail } = event || {};
    if (!detail || detail.source === "AgriGraffWidget") return;

    const next = { ...this.state.regionalFilters };
    let parentChanged = false;

    if (detail.viloyat || detail.massivNom || detail.region) {
      const v = this.normalizeApos(
        detail.viloyat || detail.massivNom || detail.region,
      );
      if (v !== next.viloyat) parentChanged = true;
      next.viloyat = v;
    }
    if (detail.tuman || detail.tumanNomi || detail.district) {
      const t = this.normalizeApos(
        detail.tuman || detail.tumanNomi || detail.district,
      );
      if (t !== next.tuman) parentChanged = true;
      next.tuman = t;
    }
    if (detail.yil || detail.year || detail.constructionYear) {
      const y = String(detail.yil || detail.year || detail.constructionYear);
      if (y !== next.yil) parentChanged = true;
      next.yil = y;
    }

    // ✅ Category (turi)
    if (
      detail.turi ||
      detail.tur ||
      detail.uzspace ||
      detail.yerToifas ||
      detail.category
    ) {
      const cat = this.normalizeApos(
        detail.turi ||
          detail.tur ||
          detail.uzspace ||
          detail.yerToifas ||
          detail.category,
      );
      if (cat !== next.uzspace) parentChanged = true;
      next.uzspace = cat;
    }

    // ✅ VH
    if (detail.vh !== undefined) {
      next.vh = this.normalizeApos(detail.vh || "");
    }

    // ✅ parent changed => clear vh unless explicitly set
    if (parentChanged && detail.vh === undefined) {
      next.vh = "";
    }

    if (!this.filtersChanged(this.state.regionalFilters, next)) return;

    this.setState(
      {
        regionalFilters: next,
        loading: true,
        records: [],
        currentPage: 0,
        hasMoreRecords: true,
      },
      () => {
        this.scheduleRefresh();

        document.dispatchEvent(
          new CustomEvent("widgetSelectionChanged", {
            detail: {
              source: "AgriGraffWidget",
              yil: next.yil,
              viloyat: next.viloyat,
              tuman: next.tuman,
              turi: next.uzspace,
              vh: next.vh,
              timestamp: Date.now(),
            },
            bubbles: true,
          }),
        );
      },
    );
  };

  // Central external filter update processor
  private processExternalFilterUpdate = (
    sourceWidget: string,
    updates: ConfiguredFilters,
  ) => {
    const now = Date.now();

    if (
      this.state.isProcessingExternalUpdate ||
      now - this.state.lastUpdateTimestamp < 300
    )
      return;
    if (Object.keys(updates).length === 0) return;

    const changed = Object.entries(updates).some(
      ([k, v]) => this.state.externalFilters[k] !== v,
    );
    if (!changed) return;

    clearTimeout(this._updateDebounceTimer);
    this._updateDebounceTimer = setTimeout(() => {
      this.applyExternalFilterUpdate(sourceWidget, updates);
    }, 200);
  };

  private applyExternalFilterUpdate = async (
    sourceWidget: string,
    updates: ConfiguredFilters,
  ) => {
    if (!this._isMounted) return;

    console.log(
      `[AgriGraffWidget] Applying external update from ${sourceWidget}:`,
      updates,
    );

    if (this.state.connectionStatus !== "connected") {
      this.setState({
        externalFilters: { ...this.state.externalFilters, ...updates },
        lastUpdateTimestamp: Date.now(),
      });
      return;
    }

    this.setState(
      {
        isProcessingExternalUpdate: true,
        lastUpdateTimestamp: Date.now(),
        externalFilters: { ...this.state.externalFilters, ...updates },
        records: [],
        currentPage: 0,
        hasMoreRecords: true,
        loading: true,
      },
      () => {
        console.log(`[AgriGraffWidget] Scheduled refresh from ${sourceWidget}`);
        this.scheduleRefresh();
      },
    );

    setTimeout(() => {
      if (this._isMounted) this.setState({ isProcessingExternalUpdate: false });
    }, 100);
  };

  /* ---------------------- Infinite scroll + pagination ---------------------- */

  handleScroll = () => {
    const container = this.tableContainerRef.current;
    if (!container || this.state.loadingMore || !this.state.hasMoreRecords)
      return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      this.loadMoreRecords();
    }
  };

  loadMoreRecords = async () => {
    if (
      !this._isMounted ||
      this.state.connectionStatus !== "connected" ||
      this.state.loadingMore ||
      !this.state.hasMoreRecords
    )
      return;

    const { yil } = this.state.regionalFilters;
    if (!yil) return;

    try {
      this.setState({ loadingMore: true });

      const { featureLayer, currentPage, configuredFields } = this.state;
      if (!featureLayer) return;

      const whereClause = this.buildWhereClause();

      const displayFields = this.getDisplayFields();
      const statusField = this.getStatusFieldNameForCurrentDate();
      const oidField = featureLayer.objectIdField || "objectid";
      const outFields = Array.from(
        new Set([
          ...configuredFields,
          ...displayFields,
          oidField,
          ...(statusField ? [statusField] : []),
        ]),
      );

      const q = featureLayer.createQuery();
      q.where = whereClause;
      q.outFields = outFields;
      q.returnGeometry = false;
      q.orderByFields = [oidField];
      q.num = this.RECORDS_PER_PAGE;
      q.start = (currentPage + 1) * this.RECORDS_PER_PAGE;

      console.log("[AgriGraffWidget] Load more on layer:", {
        layerTitle: featureLayer.title,
        layerId: featureLayer.id,
        where: whereClause,
        oidField,
        start: q.start,
      });

      const queryResult = await featureLayer.queryFeatures(q);
      if (!this._isMounted) return;

      const features = queryResult?.features ?? [];
      if (features.length) {
        const newRecords: RecordData[] = features.map((ft) => {
          const a: any = ft.attributes || {};
          return { ...a, objectid: a?.[oidField] ?? a?.objectid };
        });

        this.setState((prevState) => ({
          records: [...prevState.records, ...newRecords],
          currentPage: prevState.currentPage + 1,
          hasMoreRecords: newRecords.length === this.RECORDS_PER_PAGE,
          loadingMore: false,
        }));

        console.log(
          `Loaded ${newRecords.length} more records. Total: ${this.state.records.length + newRecords.length}`,
        );
      } else {
        this.setState({
          hasMoreRecords: false,
          loadingMore: false,
        });
      }
    } catch (error) {
      if (!this._isMounted) return;
      console.error("Error loading more records:", error);
      this.setState({
        loadingMore: false,
        hasMoreRecords: false,
      });
    }
  };

  retryMapConnection() {
    console.log("[retryMapConnection] Manually retrying map connection");
    this.setState({
      connectionStatus: "connecting",
      mapConnectionAttempts: 0,
      error: null,
    });
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    console.log("[onActiveViewChange] Active map view changed");

    if (!jimuMapView) {
      console.log(
        "[onActiveViewChange] Map view is null, waiting for valid map",
      );
      this.setState({
        activeMapView: null,
        featureLayer: null,
      });
      return;
    }

    this.setState(
      {
        activeMapView: jimuMapView,
      },
      () => {
        if (jimuMapView.view && jimuMapView.view.ready) {
          console.log(
            "[onActiveViewChange] Map view is ready, initializing connection",
          );
          this.initializeMapConnection(jimuMapView);
        } else {
          console.log(
            "[onActiveViewChange] Map view not ready, setting up watch",
          );
          const readyWatch = jimuMapView.view.watch("ready", (isReady) => {
            if (isReady) {
              console.log("[onActiveViewChange] Map view became ready");
              readyWatch.remove();
              this.initializeMapConnection(jimuMapView);
            }
          });
        }
      },
    );
  };

  /** Format a field value for display */
  private formatFieldValue(fieldName: string, value: any): string {
    if (value === null || value === undefined || value === "") {
      return "N/A";
    }

    const lowerFieldName = fieldName.toLowerCase();

    if (lowerFieldName.includes("maydon") || lowerFieldName.includes("area")) {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        return num.toLocaleString("en-US", { maximumFractionDigits: 2 });
      }
    }

    if (lowerFieldName.includes("date") || lowerFieldName.includes("sana")) {
      try {
        const date = new Date(value);
        if (!isNaN(date.getTime())) {
          return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });
        }
      } catch {}
    }

    // Translate display-only region/district names; selection notifications must use original values.
    if (lowerFieldName.includes("viloyat")) {
      return translateForDisplay(String(value), this.state.language);
    }
    if (lowerFieldName.includes("tuman")) {
      return translateForDisplay(String(value), this.state.language);
    }

    return String(value);
  }

  /** Get CSS class for field column */
  private getColumnClass(fieldName: string): string {
    const lowerFieldName = fieldName.toLowerCase();

    if (lowerFieldName.includes("inn") || lowerFieldName.includes("id")) {
      return "number-column";
    }
    if (lowerFieldName.includes("name") || lowerFieldName.includes("nom")) {
      return "name-column wide-column";
    }
    if (lowerFieldName.includes("maydon") || lowerFieldName.includes("area")) {
      return "number-column";
    }

    return "default-column";
  }

  /** Get human-friendly NDVI status label for the record at the currently selected NDVI date. */
  private getStatusValueForRecord(record: RecordData): string {
    const statusField = this.getStatusFieldNameForCurrentDate();
    if (!statusField) return "N/A";

    const raw = (record as any)[statusField];
    if (raw === null || raw === undefined || raw === "") return "N/A";

    const key = String(raw).trim().toLowerCase().replace(/\s+/g, "_");
    const vhCategory = NDVI_STATUS_TO_VH[key];
    if (vhCategory)
      return getLocalizedVhCategoryLabel(vhCategory, this.state.language);

    return this.formatFieldValue(statusField, raw);
  }

  // AgriGraffWidget
  private initializeMapConnection = async (jimuMapView: JimuMapView) => {
    if (!this._isMounted) return;

    console.log(
      "[initializeMapConnection] ==================== START ====================",
    );
    console.log("[initializeMapConnection] JimuMapView:", jimuMapView);
    console.log("[initializeMapConnection] View:", jimuMapView?.view);
    console.log("[initializeMapConnection] Map:", jimuMapView?.view?.map);

    const featureLayers =
      await this.resolveFeatureLayersFromUseDataSources(jimuMapView);
    const featureLayer = featureLayers?.[0] ?? null;

    if (!featureLayer) {
      console.error(
        "[initializeMapConnection] ❌ Could not resolve the configured feature layer",
      );

      // Log all available layers for debugging
      const allLayers = jimuMapView?.view?.map?.layers?.toArray() || [];
      console.log(
        "[initializeMapConnection] Available layers in map:",
        allLayers.length,
      );
      allLayers.forEach((layer: any, idx: number) => {
        console.log(`  [${idx}] Layer:`, {
          id: layer.id,
          title: layer.title,
          type: layer.type,
          url: layer.url,
          visible: layer.visible,
          loaded: layer.loaded,
        });
      });

      this.setState({
        connectionStatus: "failed",
        error:
          "Танланган қатламга улана олмади. Харитада қатлам мавжудлиги ва созламаларни текшеринг.",
      });
      return;
    }

    console.log("[initializeMapConnection] ✅ Connected to configured layer:");
    console.log("  - ID:", featureLayer.id);
    console.log("  - Title:", featureLayer.title);
    console.log("  - Type:", featureLayer.type);
    console.log("  - URL:", featureLayer.url);
    console.log("  - Loaded:", featureLayer.loaded);
    console.log("  - Fields count:", featureLayer.fields?.length || 0);

    if (
      !featureLayer.loaded ||
      !featureLayer.fields ||
      featureLayer.fields.length === 0
    ) {
      console.log(
        "[initializeMapConnection] Feature layer not fully loaded, loading now...",
      );
      try {
        await featureLayer.load();
        console.log("[initializeMapConnection] ✅ Feature layer loaded");
        console.log(
          "  - Fields count after load:",
          featureLayer.fields?.length || 0,
        );
        console.log(
          "  - Fields:",
          featureLayer.fields?.map((f) => f.name).join(", "),
        );
      } catch (err: any) {
        console.error(
          "[initializeMapConnection] ❌ Error loading feature layer:",
          err,
        );
        this.setState({
          connectionStatus: "failed",
          error: `Error loading the configured feature layer: ${err.message || err}`,
        });
        return;
      }
    }

    if (!featureLayer.fields || featureLayer.fields.length === 0) {
      console.error(
        "[initializeMapConnection] ❌ Feature layer still has no fields after loading",
      );
      this.setState({
        connectionStatus: "failed",
        error:
          "Созланган қатламда ишлатиладиган майдонлар йўқ. Қатлам созламасини текшеринг.",
      });
      return;
    }

    console.log(
      "[initializeMapConnection] Layer fields:",
      featureLayer.fields
        .map((f) => `${f.name} (${f.type}, alias: ${f.alias})`)
        .join(", "),
    );

    const configuredFields = this.getConfiguredFilterFields();
    console.log(
      "[initializeMapConnection] Configured fields from settings:",
      configuredFields,
    );

    if (configuredFields.length === 0) {
      console.error(
        "[initializeMapConnection] ❌ No fields configured in settings",
      );
      this.setState({
        connectionStatus: "failed",
        error:
          "Майдонлар танланмаган. Виджет созламаларида майдонларни танланг.",
      });
      return;
    }

    const layerFields = featureLayer.fields.map((f) => f.name.toLowerCase());
    const missingFields = REQUIRED_FIELDS.filter(
      (field) => !layerFields.includes(field.toLowerCase()),
    );

    if (missingFields.length > 0) {
      console.error(
        "[initializeMapConnection] ❌ Missing required fields in layer:",
        featureLayer.title,
      );
      console.error(
        "[initializeMapConnection] Layer has fields:",
        featureLayer.fields.map((f) => f.name),
      );
      console.error("[initializeMapConnection] Missing fields:", missingFields);
      this.setState({
        connectionStatus: "failed",
        error: `The layer "${featureLayer.title}" is missing required fields: ${missingFields.join(", ")}. Please select a different layer that contains these fields: ${REQUIRED_FIELDS.join(", ")}`,
      });
      return;
    }

    console.log("[initializeMapConnection] ✅ All required fields present");
    console.log(
      "[initializeMapConnection] ==================== SUCCESS ====================",
    );

    this.setState(
      {
        featureLayers,
        featureLayer,
        configuredFields,
        connectionStatus: "connected",
        error: null,
        activeMapView: jimuMapView,
      },
      async () => {
        console.log(
          "[initializeMapConnection] State updated, attaching map click handler",
        );
        this.attachMapClick(jimuMapView);
        await this.fetchAndStoreRegionDistrictMappings();
        await this.buildViloyatKeyToLayerIndex();

        if (this.state.dataSource) {
          this.setState({ loading: true });
          this.fetchFilterOptions();
        }
      },
    );
  };
  // Attach map click handler
  private attachMapClick = (jimuMapView: JimuMapView) => {
    this.detachMapClick();
    if (jimuMapView?.view) {
      this._clickHandle = jimuMapView.view.on("click", this.handleMapClick);
    }
  };

  // Detach map click handler
  private detachMapClick = () => {
    if (this._clickHandle?.remove) {
      this._clickHandle.remove();
      this._clickHandle = null;
    }
  };
  private handleMapClick = async (event: any) => {
    const { featureLayer, activeMapView } = this.state;

    if (!activeMapView?.view || !featureLayer) return;

    try {
      const response = await activeMapView.view.hitTest(event);
      const results = (response?.results as any[] | undefined) || [];

      if (!results.length) {
        console.log("[AgriGraff] No hit results");
        return;
      }

      const graphicHits = results.filter(
        (r) =>
          r && typeof r === "object" && "graphic" in r && (r as any).graphic,
      );

      if (!graphicHits.length) return;

      // Find matching layer
      const flUrl = (featureLayer as any).url;
      const flId = featureLayer.id;

      const match = graphicHits.find((h) => {
        const lyr: any = (h as any).graphic?.layer;
        return (
          lyr === featureLayer ||
          (flUrl && lyr?.url === flUrl) ||
          (flId && lyr?.id === flId)
        );
      });

      const hitGraphic = match
        ? (match as any).graphic
        : graphicHits[0].graphic;

      if (!hitGraphic?.attributes) {
        console.log("[AgriGraff] No attributes on hit graphic");
        return;
      }

      // ✅✅✅ KEY: hitTest only gives us objectid & turi
      // We MUST query the full feature to get uniqueid
      const oidField = featureLayer.objectIdField || "objectid";
      const oid = hitGraphic.attributes[oidField];

      if (oid == null) {
        console.log("[AgriGraff] No objectid found");
        return;
      }

      console.log(
        "[AgriGraff] Clicked polygon OID:",
        oid,
        "- Querying full feature...",
      );

      // Query full feature with ALL fields
      const query = featureLayer.createQuery();
      query.where = `${oidField} = ${oid}`;
      query.outFields = ["*"];
      query.returnGeometry = true;

      const queryResult = await featureLayer.queryFeatures(query);

      if (!queryResult?.features?.length) {
        console.log("[AgriGraff] Query returned no features for OID:", oid);
        return;
      }

      const fullFeature = queryResult.features[0];
      console.log(
        "[AgriGraff] Full feature attributes:",
        Object.keys(fullFeature.attributes),
      );

      // Now get uniqueid from the FULL feature
      const uniqueid =
        fullFeature.attributes.uniqueid ||
        fullFeature.attributes.UniqueID ||
        fullFeature.attributes.UNIQUEID;

      if (!uniqueid) {
        console.log("[AgriGraff] ❌ No uniqueid even in full feature!");
        console.log("[AgriGraff] Available fields:", fullFeature.attributes);
        return;
      }

      console.log("[AgriGraff] ✅ Found uniqueid:", uniqueid);

      // Highlight
      try {
        activeMapView.view.graphics.removeAll();
        const g = fullFeature.clone() as any;

        g.symbol = new SimpleFillSymbol({
          color: new Color([0, 174, 239, 0.3]),
          outline: new SimpleLineSymbol({
            color: new Color([0, 174, 239, 1]),
            width: 3,
          }),
        });

        activeMapView.view.graphics.add(g);

        await activeMapView.view.goTo(
          { target: g.geometry, extent: g.geometry?.extent?.expand(2) },
          { duration: 900 },
        );
      } catch (e) {
        console.warn("[AgriGraff] Highlight/zoom failed:", e);
      }

      // Set state
      this.setState(
        {
          selecteduniqueid: String(uniqueid),
          error: null,
          vegetationError: null,
        },
        () => {
          console.log(
            "[AgriGraff] selecteduniqueid set to:",
            this.state.selecteduniqueid,
          );
          if (this.state.viewMode === "graph") {
            console.log("[AgriGraff] ✅ Calling fetchVegetationData");
            this.fetchVegetationData();
          }
        },
      );
    } catch (error) {
      console.error("[AgriGraff] handleMapClick error:", error);
    }
  };

  // ✅ Helper method to highlight feature (extract this logic)
  private highlightFeature = async (
    feature: __esri.Graphic,
    activeMapView: JimuMapView,
  ) => {
    try {
      activeMapView.view.graphics.removeAll();

      const g = feature.clone() as any;
      const geomType = g?.geometry?.type;

      console.log("[highlightFeature] Highlighting geometry type:", geomType);

      if (geomType === "polygon") {
        g.symbol = new SimpleFillSymbol({
          color: new Color([0, 174, 239, 0.3]),
          outline: new SimpleLineSymbol({
            color: new Color([0, 174, 239, 1]),
            width: 3,
          }),
        });
      } else if (geomType === "polyline") {
        g.symbol = new SimpleLineSymbol({
          color: new Color([0, 174, 239, 1]),
          width: 4,
        });
      } else {
        g.symbol = new SimpleMarkerSymbol({
          color: new Color([0, 174, 239, 0.85]),
          size: 14,
          outline: new SimpleLineSymbol({
            color: new Color([255, 255, 255, 1]),
            width: 2,
          }),
        });
      }

      activeMapView.view.graphics.add(g);

      try {
        await activeMapView.view.goTo(
          {
            target: g.geometry,
            extent: g.geometry?.extent?.expand(2) || g.geometry,
          },
          { duration: 900, easing: "linear" },
        );
        console.log("[highlightFeature] ✅ Zoomed to feature");
      } catch (goToErr) {
        console.warn("[highlightFeature] goTo failed:", goToErr);
      }
    } catch (hErr) {
      console.warn("[highlightFeature] Highlight failed:", hErr);
    }
  };

  // SIMPLIFIED: Only return fields explicitly configured in settings
  private getConfiguredFilterFields(): string[] {
    const cfg = this.props?.config?.filterFields;
    if (!cfg) {
      console.log(
        "[getConfiguredFilterFields] No filter fields configured, using all required fields",
      );
      return REQUIRED_FIELDS;
    }

    const dsId =
      (this.state.dataSource as any)?.id ||
      this.props.useDataSources?.[0]?.dataSourceId;

    let filterMap: Record<string, string[]>;
    if (typeof (cfg as any).asMutable === "function") {
      filterMap = (cfg as any).asMutable({ deep: true });
    } else {
      filterMap = cfg as any;
    }

    const configuredFields = dsId && filterMap[dsId] ? filterMap[dsId] : [];

    console.log(
      "[getConfiguredFilterFields] Configured fields for",
      dsId,
      ":",
      configuredFields,
    );
    return configuredFields;
  }

  private refreshFiltersFromConfig() {
    const fields = this.getConfiguredFilterFields();

    if (fields.length === 0) {
      console.log(
        "[refreshFiltersFromConfig] No fields configured, clearing state",
      );
      this.setState({
        configuredFields: [],
        filterOptions: {},
        localFilters: {},
      });
      return;
    }

    const makeMap = (def: any) =>
      fields.reduce(
        (acc, f) => {
          acc[f] = def;
          return acc;
        },
        {} as Record<string, any>,
      );

    this.setState({
      configuredFields: fields,
      filterOptions: makeMap([]),
      localFilters: makeMap(""),
    });

    console.log(
      "[refreshFiltersFromConfig] Updated state with fields:",
      fields,
    );
  }

  private normalizeUrl(u?: string): string {
    if (!u) return "";
    try {
      const url = new URL(u);
      url.search = "";
      url.hash = "";
      return url.toString().replace(/\/+$/, "");
    } catch {
      return u.replace(/\/+$/, "");
    }
  }

  private resolveFeatureLayerFromDataSource = async (
    jimuMapView: JimuMapView,
    useDsOverride?: any,
  ): Promise<__esri.FeatureLayer | null> => {
    console.log(
      "[resolveFeatureLayerFromDataSource] ==================== START ====================",
    );

    if (!jimuMapView?.view?.map) {
      console.error(
        "[resolveFeatureLayerFromDataSource] ❌ No jimuMapView or map",
      );
      return null;
    }

    const useDs = useDsOverride ?? this.props.useDataSources?.[0];
    console.log(
      "[resolveFeatureLayerFromDataSource] useDataSources:",
      this.props.useDataSources,
    );
    console.log(
      "[resolveFeatureLayerFromDataSource] First useDataSource:",
      useDs,
    );

    if (!useDs?.dataSourceId) {
      console.error(
        "[resolveFeatureLayerFromDataSource] ❌ No data source configured",
      );
      return null;
    }

    const dsId = useDs.dataSourceId;
    const rootDsId = (useDs as any).rootDataSourceId;

    console.log("[resolveFeatureLayerFromDataSource] Looking for:");
    console.log("  - dataSourceId:", dsId);
    console.log("  - rootDataSourceId:", rootDsId);

    const jlvList: any[] = jimuMapView.getAllJimuLayerViews?.() || [];
    console.log(
      "[resolveFeatureLayerFromDataSource] JimuLayerViews count:",
      jlvList.length,
    );

    jlvList.forEach((lv, idx) => {
      console.log(`  [${idx}] JimuLayerView:`, {
        layerDataSourceId: lv?.layerDataSourceId,
        dataSourceId: lv?.dataSourceId,
        layerId: lv?.layer?.id,
        layerTitle: lv?.layer?.title,
        layerType: lv?.layer?.type,
      });
    });

    const matchByDsId = (id: string) =>
      jlvList.find(
        (lv) =>
          lv?.layerDataSourceId === id ||
          lv?.dataSourceId === id ||
          lv?.layer?.dataSourceId === id,
      );

    let jlv = matchByDsId(dsId) || (rootDsId ? matchByDsId(rootDsId) : null);

    if (jlv?.layer?.type === "feature") {
      console.log(
        "[resolveFeatureLayerFromDataSource] ✅ Found layer via JimuLayerView:",
        {
          id: jlv.layer.id,
          title: jlv.layer.title,
          url: jlv.layer.url,
        },
      );
      return jlv.layer as __esri.FeatureLayer;
    }

    console.log(
      "[resolveFeatureLayerFromDataSource] Trying DataSourceManager...",
    );

    try {
      const dsManager = DataSourceManager.getInstance();
      const ds: any = dsManager.getDataSource(dsId);

      console.log(
        "[resolveFeatureLayerFromDataSource] DataSource from manager:",
        {
          id: ds?.id,
          type: ds?.type,
          url: ds?.url,
          hasLayer: !!ds?.layer,
          hasGetLayer: typeof ds?.getLayer === "function",
        },
      );

      if (ds?.getLayer) {
        const layer = await ds.getLayer();
        console.log(
          "[resolveFeatureLayerFromDataSource] Layer from ds.getLayer():",
          {
            id: layer?.id,
            title: layer?.title,
            type: layer?.type,
            url: layer?.url,
          },
        );

        if (layer?.type === "feature") {
          console.log(
            "[resolveFeatureLayerFromDataSource] ✅ Found layer via DataSource.getLayer()",
          );
          return layer as __esri.FeatureLayer;
        }
      }

      if (ds?.layer?.type === "feature") {
        console.log(
          "[resolveFeatureLayerFromDataSource] ✅ Found layer via DataSource.layer:",
          {
            id: ds.layer.id,
            title: ds.layer.title,
            url: ds.layer.url,
          },
        );
        return ds.layer as __esri.FeatureLayer;
      }

      const url: string | undefined = ds?.url || ds?.layer?.url;
      console.log(
        "[resolveFeatureLayerFromDataSource] Looking for URL match:",
        url,
      );

      if (url) {
        const layers = jimuMapView.view.map.layers.toArray() as any[];
        console.log(
          "[resolveFeatureLayerFromDataSource] Map layers count:",
          layers.length,
        );

        layers.forEach((ly, idx) => {
          console.log(`  [${idx}] Map layer:`, {
            id: ly.id,
            title: ly.title,
            type: ly.type,
            url: ly.url,
            matches: ly.url === url,
          });
        });

        const matchedLayer = layers.find(
          (ly: any) => ly?.url === url && ly?.type === "feature",
        );
        if (matchedLayer) {
          console.log(
            "[resolveFeatureLayerFromDataSource] ✅ Found layer via URL match:",
            {
              id: matchedLayer.id,
              title: matchedLayer.title,
              url: matchedLayer.url,
            },
          );
          return matchedLayer as __esri.FeatureLayer;
        }
      }
    } catch (e) {
      console.error(
        "[resolveFeatureLayerFromDataSource] ❌ Error resolving layer from data source:",
        e,
      );
    }

    console.error(
      "[resolveFeatureLayerFromDataSource] ❌ Could not resolve layer for data source:",
      dsId,
    );
    console.log(
      "[resolveFeatureLayerFromDataSource] ==================== END (FAILED) ====================",
    );
    return null;
  };

  private resolveFeatureLayersFromUseDataSources = async (
    jimuMapView: JimuMapView,
  ): Promise<__esri.FeatureLayer[]> => {
    const raw =
      (this.props.useDataSources as any)?.asMutable?.() ??
      this.props.useDataSources ??
      [];
    const useDss = Array.isArray(raw) ? raw : [];

    const resolved: __esri.FeatureLayer[] = [];
    for (const useDs of useDss) {
      const fl = await this.resolveFeatureLayerFromDataSource(
        jimuMapView,
        useDs,
      );
      if (fl) resolved.push(fl);
    }
    return resolved;
  };

  private buildViloyatKeyToLayerIndex = async (): Promise<void> => {
    const layers = this.state.featureLayers?.length
      ? this.state.featureLayers
      : this.state.featureLayer
        ? [this.state.featureLayer]
        : [];

    const idx: Record<string, number> = {};

    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      try {
        if (!layer?.fields || layer.fields.length === 0) {
          await layer.load();
        }
        const q = layer.createQuery();
        (q as any).where = "1=1";
        (q as any).outFields = ["viloyat"];
        (q as any).returnGeometry = false;
        (q as any).returnDistinctValues = true;
        (q as any).num = 50000;

        const res = await layer.queryFeatures(q);
        const features = res?.features ?? [];
        for (const f of features) {
          const a: any = f.attributes || {};
          const v = a?.viloyat;
          const key = this.makeRegionDistrictKey(v != null ? String(v) : null);
          if (key && idx[key] === undefined) idx[key] = i;
        }
      } catch (e) {
        console.warn(
          "[AgriGraffWidget] buildViloyatKeyToLayerIndex failed for layer:",
          i,
          e,
        );
      }
    }

    this._viloyatKeyToLayerIndex = idx;
    console.log("[AgriGraffWidget] Viloyat->layer index built:", {
      layerCount: layers.length,
      viloyatCount: Object.keys(idx).length,
    });
  };

  private getFeatureLayerForViloyat = (
    viloyat: string,
  ): __esri.FeatureLayer | undefined => {
    const layers = this.state.featureLayers?.length
      ? this.state.featureLayers
      : this.state.featureLayer
        ? [this.state.featureLayer]
        : [];
    if (!layers.length) return undefined;
    const key = this.makeRegionDistrictKey(viloyat);
    const idx = key ? this._viloyatKeyToLayerIndex[key] : undefined;
    return typeof idx === "number" ? layers[idx] : this.state.featureLayer;
  };

  ensureInitialization = () => {
    if (!this._isMounted) {
      console.log("[ensureInitialization] Component not mounted, aborting");
      return;
    }

    const { dataSource, connectionStatus, mapConnectionAttempts } = this.state;

    console.log("[ensureInitialization] Checking initialization status:", {
      hasDataSource: !!dataSource,
      connectionStatus,
      mapConnectionAttempts,
    });

    if (
      dataSource &&
      connectionStatus === "connected" &&
      !this.state.initialDataLoaded
    ) {
      console.log(
        "[ensureInitialization] Both dependencies ready, fetching initial data",
      );
      this.setState({ loading: true });
      this.fetchFilterOptions();
    } else if (
      connectionStatus === "failed" &&
      mapConnectionAttempts === this.MAX_CONNECTION_ATTEMPTS
    ) {
      console.log(
        "[ensureInitialization] Connection failed, attempting one final recovery",
      );
      this.retryMapConnection();
    }
  };

  componentDidMount() {
    this._isMounted = true;
    this.setState({ connectionStatus: "connecting" });
    this.initializeTheme();
    this.refreshFiltersFromConfig();

    document.addEventListener(
      "themeToggled",
      this.handleThemeChange as EventListener,
    );
    document.addEventListener(
      "languageChanged",
      this.handleAppLanguageChanged as EventListener,
    );

    if (this.tableContainerRef.current) {
      this.tableContainerRef.current.addEventListener(
        "scroll",
        this.handleScroll,
      );
    }

    // ✅ Listen to AgriFilter state
    document.addEventListener(
      "masterFilterChanged",
      this.handleMasterFilterChanged as EventListener,
    );
    document.addEventListener(
      "agriGraff4TableSearchChanged",
      this.handleExternalTableSearchChanged as EventListener,
    );

    // Existing listeners
    document.addEventListener(
      "categoryFilterChanged",
      this.handleLandCategoryChange as EventListener,
    );
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
    document.addEventListener(
      "kadastrFilterChanged",
      this.handleGeoFilterChanged as EventListener,
    );
    document.addEventListener(
      "resetAllFilters",
      this.handleResetAll as EventListener,
    );

    this._onReset = () => {
      if (!this._isMounted) return;

      console.log("[AgriGraffWidget] Resetting all filters");

      const fields = this.getConfiguredFilterFields();
      const blankLocal = fields.reduce(
        (acc, f) => {
          acc[f] = "";
          return acc;
        },
        {} as Record<string, string>,
      );
      const blankExternal = fields.reduce(
        (acc, f) => {
          acc[f] = "";
          return acc;
        },
        {} as Record<string, string>,
      );

      // ✅ include vh
      const blankRegional = {
        viloyat: "",
        tuman: "",
        yil: "",
        uzspace: "",
        vh: "",
      };

      this._allowClearOnce = true;

      this.setState(
        {
          localFilters: blankLocal,
          externalFilters: blankExternal,
          regionalFilters: blankRegional,
          vhUniqueids: null,
          records: [],
          currentPage: 0,
          hasMoreRecords: true,
          loading: true,
          lastUpdateTimestamp: Date.now(),
          isProcessingExternalUpdate: false,
        },
        () => {
          if (this.state.connectionStatus === "connected") {
            this.applyMapFilters();
            this.fetchData();
          }
        },
      );
    };

    if (this.state.featureLayer) {
      this.state.featureLayer.definitionExpression = "";
    }
    if (this.state.dataSource) {
      (this.state.dataSource as any).setDefinitionExpression?.("");
    }

    this.initializationTimer = setTimeout(() => {
      this.ensureInitialization();
    }, 3000);

    window.addEventListener("resize", this.updateGraphViewportSize);
    if (this.state.viewMode === "graph") {
      this.observeGraphViewport();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { connectionStatus, mapConnectionAttempts } = this.state;
    const { useMapWidgetIds } = this.props;

    if (
      this.tableContainerRef.current &&
      !prevState.records.length &&
      this.state.records.length
    ) {
      this.tableContainerRef.current.addEventListener(
        "scroll",
        this.handleScroll,
      );
    }

    const shouldRetryConnection =
      connectionStatus === "connecting" &&
      useMapWidgetIds &&
      useMapWidgetIds.length > 0 &&
      !this.state.activeMapView &&
      mapConnectionAttempts !== prevState.mapConnectionAttempts &&
      mapConnectionAttempts < this.MAX_CONNECTION_ATTEMPTS;

    if (shouldRetryConnection) {
      if (this._retryTimeout) {
        clearTimeout(this._retryTimeout);
      }

      this._retryTimeout = setTimeout(() => {
        if (!this._isMounted) return;

        console.log(
          `[Map Connection] Retry attempt ${mapConnectionAttempts + 1} of ${this.MAX_CONNECTION_ATTEMPTS}`,
        );
        this.setState((prevState) => ({
          mapConnectionAttempts: prevState.mapConnectionAttempts + 1,
        }));
      }, 2000);
    } else if (
      connectionStatus === "connecting" &&
      mapConnectionAttempts >= this.MAX_CONNECTION_ATTEMPTS &&
      prevState.mapConnectionAttempts !== mapConnectionAttempts
    ) {
      console.log("[Map Connection] Max attempts reached, marking as failed");
      this.setState({
        connectionStatus: "failed",
      });
    }

    if (this.props.config !== prevProps.config) {
      this.refreshFiltersFromConfig();
    }

    if (this.state.viewMode === "graph" && prevState.viewMode !== "graph") {
      this.observeGraphViewport();
    }

    const graphLayoutChanged =
      this.state.viewMode === "graph" &&
      (prevState.selectedIndices !== this.state.selectedIndices ||
        prevState.language !== this.state.language ||
        prevState.loadingVegetation !== this.state.loadingVegetation ||
        prevState.vegetationData !== this.state.vegetationData);

    if (
      this.state.viewMode === "graph" &&
      this.state.selectedMonth != null &&
      prevState.vegetationData !== this.state.vegetationData
    ) {
      const hasSelectedMonthData = (this.state.vegetationData || []).some(
        (row) =>
          new Date((row as any).raster_date).getMonth() ===
          this.state.selectedMonth,
      );
      if (!hasSelectedMonthData) {
        this.setState({
          selectedMonth: null,
          isMonthPickerOpen: false,
          chartTooltip: null,
          selectedNdviDate: null,
        });
      }
    }

    if (graphLayoutChanged) {
      this.scheduleGraphViewportRefresh();
    }

    if (
      this.state.viewMode === "graph" &&
      (prevState.graphViewportWidth !== this.state.graphViewportWidth ||
        prevState.graphViewportHeight !== this.state.graphViewportHeight)
    ) {
      this.scheduleGraphViewportRefresh();
    }

    if (
      prevState.viewMode !== "table" &&
      this.state.viewMode === "table" &&
      (this.state.searchText || "").trim()
    ) {
      this.runAutoSearch((this.state.searchText || "").trim());
    }

    // When in graph view with no polygon selected, refetch regional timeseries if viloyat/tuman/yil changed
    const { viewMode, selecteduniqueid, regionalFilters } = this.state;
    const prevR = prevState.regionalFilters;
    const regionalChanged =
      viewMode === "graph" &&
      !selecteduniqueid &&
      (regionalFilters?.viloyat !== prevR?.viloyat ||
        regionalFilters?.tuman !== prevR?.tuman ||
        regionalFilters?.yil !== prevR?.yil ||
        regionalFilters?.uzspace !== prevR?.uzspace ||
        regionalFilters?.vh !== prevR?.vh);
    if (regionalChanged) {
      this.fetchRegionalTimeseries();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;

    // Detach map click handler
    this.detachMapClick();

    document.removeEventListener(
      "themeToggled",
      this.handleThemeChange as EventListener,
    );
    document.removeEventListener(
      "languageChanged",
      this.handleAppLanguageChanged as EventListener,
    );

    document.removeEventListener(
      "masterFilterChanged",
      this.handleMasterFilterChanged as EventListener,
    );
    document.removeEventListener(
      "agriGraff4TableSearchChanged",
      this.handleExternalTableSearchChanged as EventListener,
    );

    if (this._updateDebounceTimer) {
      clearTimeout(this._updateDebounceTimer);
      this._updateDebounceTimer = null;
    }

    document.removeEventListener(
      "kadastrFilterChanged",
      this.handleGeoFilterChanged as EventListener,
    );
    document.removeEventListener(
      "resetAllFilters",
      this.handleResetAll as EventListener,
    );
    document.removeEventListener(
      "categoryFilterChanged",
      this.handleLandCategoryChange as EventListener,
    );
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);

    try {
      this._activeController?.abort();
    } catch {}
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    if (this._searchDebounceTimer) clearTimeout(this._searchDebounceTimer);

    if (this.tableContainerRef.current) {
      this.tableContainerRef.current.removeEventListener(
        "scroll",
        this.handleScroll,
      );
    }

    if (this.throttledFetchData && this.throttledFetchData.cancel) {
      this.throttledFetchData.cancel();
    }

    if (this.initializationTimer) {
      clearTimeout(this.initializationTimer);
      this.initializationTimer = null;
    }

    if (this._retryTimeout) {
      clearTimeout(this._retryTimeout);
      this._retryTimeout = null;
    }

    window.removeEventListener("resize", this.updateGraphViewportSize);
    this.graphResizeObserver?.disconnect();
    this.graphResizeObserver = null;
    if (this._graphViewportRaf != null) {
      window.cancelAnimationFrame(this._graphViewportRaf);
      this._graphViewportRaf = null;
    }

    if (this.state.featureLayer) {
      try {
        this.state.featureLayer.definitionExpression = "";
      } catch {}
    }
  }

  private initializeTheme = (): void => {
    const savedTheme =
      typeof window !== "undefined"
        ? window.localStorage?.getItem("app_theme")
        : null;
    const domTheme =
      typeof document !== "undefined"
        ? document.documentElement.getAttribute("data-theme")
        : null;

    let isDarkTheme = true;
    if (savedTheme !== null && savedTheme !== undefined) {
      isDarkTheme = savedTheme === "dark";
    } else if (domTheme === "light" || domTheme === "dark") {
      isDarkTheme = domTheme === "dark";
    }

    this.setState({ isDarkTheme });
  };

  private handleAppLanguageChanged = (event: Event): void => {
    if (!this._isMounted) return;
    const d: any = (event as CustomEvent)?.detail || {};
    const raw = d.lang ?? d.language ?? d.code;
    const v = String(raw ?? "")
      .trim()
      .toLowerCase();
    if (!v) return;

    let next: AgriGraffDisplayLanguage = "ru";
    if (v === "ru" || v === "rus" || v === "russian") next = "ru";
    else if (
      v === "uz_lat" ||
      v === "uz-lat" ||
      v === "uz_latin" ||
      v === "uz-latin" ||
      v === "uz"
    )
      next = "uz_lat";
    else if (
      v === "uz_cyr" ||
      v === "uz-cyr" ||
      v === "uz_cyrl" ||
      v === "uz-cyrl" ||
      v === "uz_cyrillic" ||
      v === "uz-cyrillic" ||
      v === "cyrillic"
    )
      next = "uz_cyr";
    else return;

    if (next === this.state.language) return;
    this.setState({ language: next });
  };

  handleThemeChange = (event): void => {
    if (!this._isMounted) return;

    if (event && event.detail && typeof event.detail.isDarkTheme === "boolean") {
      const { isDarkTheme } = event.detail;
      this.setState({ isDarkTheme });
      return;
    }

    // Fallback when event detail is absent/incomplete.
    this.initializeTheme();
  };

  onDataSourceCreated = (ds: QueriableDataSource) => {
    if (typeof ds.setListenSelection === "function") {
      ds.setListenSelection(false);
      console.log(
        "[onDataSourceCreated] disabled selection listening on data source",
      );
    }

    this.setState({ dataSource: ds, error: null }, () => {
      this.refreshFiltersFromConfig();
      if (this.state.connectionStatus === "connected") {
        this.setState({ loading: true });
        this.fetchFilterOptions();
      }
    });
  };

  // 📥 Centralized: DS change => single fetch
  onDataSourceInfoChange = (info: any) => {
    if (!this._isMounted) return;
    if (this.state.connectionStatus !== "connected") return;

    if (!Array.isArray(info.records)) return;

    console.log(
      "[onDataSourceInfoChange] dataRecordSet changed → fetch first page",
    );
    this.setState(
      {
        records: [],
        currentPage: 0,
        hasMoreRecords: true,
      },
      () => {
        this.fetchData();
      },
    );
  };

  fetchFilterOptions = async () => {
    if (!this._isMounted) return;
    if (this.state.connectionStatus !== "connected") {
      console.log("[fetchFilterOptions] Map not connected yet, skipping");
      return;
    }

    const configuredFields = this.getConfiguredFilterFields();
    if (configuredFields.length === 0) {
      this.setState({
        error:
          "Майдонлар танланмаган. Виджет созламаларида майдонларни танланг.",
        loading: false,
      });
      return;
    }

    try {
      this.setState({ loadingFilters: true });

      const { dataSource } = this.state;
      if (!dataSource) {
        this.setState({
          loadingFilters: false,
          error: "Маълумот манбаи мавжуд эмас",
        });
        return;
      }

      const results = await Promise.all(
        configuredFields.map((f) => this.getUniqueValues(f)),
      );

      if (!this._isMounted) return;

      const filterOptions = configuredFields.reduce(
        (acc, f, i) => {
          acc[f] = results[i] || [];
          return acc;
        },
        {} as Record<string, string[]>,
      );

      this.setState({
        filterOptions,
        loadingFilters: false,
        loading: false,
        error: null,
        initialDataLoaded: true,
      });

      this.fetchData();
      if (this.state.viewMode === "graph" && !this.state.selecteduniqueid) {
        this.fetchRegionalTimeseries();
      }
    } catch (error: any) {
      if (!this._isMounted) return;
      console.error("Error fetching initial data:", error);
      this.setState({
        error: `Бошланғич маълумот юклана олмади: ${error.message || error}`,
        loadingFilters: false,
      });
    }
  };

  getUniqueValues = async (fieldName: string): Promise<string[]> => {
    const { dataSource } = this.state;

    if (!dataSource) return [];

    try {
      const q = {
        where: "1=1",
        outFields: [fieldName],
        pageSize: 1000,
        returnDistinctValues: true,
      };

      const queryResult = await dataSource.query(q);

      if (!queryResult || !queryResult.records) {
        return [];
      }

      const values = queryResult.records
        .map((record) => record.getData()?.[fieldName])
        .filter((value) => value != null && value !== "");

      return [...new Set(values)].sort();
    } catch (error) {
      console.error(`Error getting unique values for ${fieldName}:`, error);
      return [];
    }
  };

  fetchData = async () => {
    if (!this._isMounted || this.state.connectionStatus !== "connected") return;

    const configuredFields = this.getConfiguredFilterFields();
    if (configuredFields.length === 0) {
      this.setState({
        error:
          "Майдонлар танланмаган. Виджет созламаларида майдонларни танланг.",
        loading: false,
      });
      return;
    }

    // Default mode: do not fetch only when yil is missing.
    const { yil } = this.state.regionalFilters;
    if (!yil) {
      await this.applyMapFilters();

      this.setState({
        loading: false,
        error: null,
        records: [],
        currentPage: 0,
        hasMoreRecords: false,
        totalRecordCount: 0,
      });

      return;
    }

    try {
      this.setState({
        loading: true,
        error: null,
        records: [],
        currentPage: 0,
        hasMoreRecords: true,
      });

      const { featureLayer } = this.state;
      if (!featureLayer) {
        this.setState({
          loading: false,
          error: "Қатлам мавжуд эмас (AgriGraff4 featureLayer).",
        });
        return;
      }

      const whereClause = this.buildWhereClause();

      const displayFields = this.getDisplayFields();
      const statusField = this.getStatusFieldNameForCurrentDate();
      const oidField = featureLayer.objectIdField || "objectid";
      const outFields = Array.from(
        new Set([
          ...configuredFields,
          ...displayFields,
          oidField,
          ...(statusField ? [statusField] : []),
        ]),
      );

      const q = featureLayer.createQuery();
      q.where = whereClause;
      q.outFields = outFields;
      q.returnGeometry = false;
      q.orderByFields = [oidField];
      q.num = this.RECORDS_PER_PAGE;
      q.start = 0;

      console.log("[AgriGraffWidget] Fetch first page on layer:", {
        layerTitle: featureLayer.title,
        layerId: featureLayer.id,
        where: whereClause,
        oidField,
      });

      const queryResult = await featureLayer.queryFeatures(q);
      const features = queryResult?.features ?? [];
      const records: RecordData[] = features.map((ft) => {
        const a: any = ft.attributes || {};
        // Keep compatibility with existing code expecting `record.objectid`.
        return { ...a, objectid: a?.[oidField] ?? a?.objectid };
      });
      const hasMore = records.length === this.RECORDS_PER_PAGE;

      this.setState({
        records,
        loading: false,
        error: null,
        currentPage: 0,
        hasMoreRecords: hasMore,
        totalRecordCount: records.length,
      });
    } catch (error: any) {
      if (!this._isMounted) return;
      console.error("Error fetching data:", error);
      this.setState({
        error: error.message || "Күтүлмаган хатолик юз берди",
        loading: false,
      });
    }
  };

  private escapeArcGIS(value: string): string {
    return value.replace(/'/g, "''");
  }

  // ✅ Apply WHERE to both FeatureLayer and DataSource
  private async applyMapFilters(): Promise<void> {
    const { featureLayer, dataSource } = this.state;
    if (!featureLayer && !dataSource) return;

    const where = this.buildWhereClause();

    try {
      // Keep layer definitionExpression consistent with the resolved (selected) viloyat layer.
      (featureLayer as any).definitionExpression = where;

      (dataSource as any)?.setDefinitionExpression?.(where);
    } catch (e) {
      // non-fatal
    }
  }

  handleFilterChange = async (field: string, value: string) => {
    if (!this._isMounted || this.state.connectionStatus !== "connected") return;

    this.setState(
      (prevState) => ({
        localFilters: {
          ...prevState.localFilters,
          [field]: value,
        },
        loading: true,
      }),
      () => {
        this.throttledFetchData();
      },
    );
  };

  handleResetFilters = async () => {
    if (!this._isMounted || this.state.connectionStatus !== "connected") return;

    const fields = this.getConfiguredFilterFields();
    const blank = fields.reduce(
      (acc, f) => {
        acc[f] = "";
        return acc;
      },
      {} as Record<string, string>,
    );

    // ✅ include vh
    const blankRegional = {
      viloyat: "",
      tuman: "",
      yil: "",
      uzspace: "",
      vh: "",
    };

    this._allowClearOnce = true;

    this.setState(
      {
        localFilters: blank,
        externalFilters: blank,
        regionalFilters: blankRegional,
        vhUniqueids: null,
        loading: true,
        records: [],
        currentPage: 0,
        hasMoreRecords: true,
        isProcessingExternalUpdate: false,
      },
      () => {
        this.applyMapFilters();
        this.throttledFetchData();
      },
    );
  };

  private handleRowClick = async (record: RecordData) => {
    if (!this.isRegionalInteractionEnabled()) return;

    console.log("Row clicked:", record);
    const { featureLayer, activeMapView, selecteduniqueid } = this.state;

    if (!record || !featureLayer || !activeMapView) {
      console.error("Missing record/layer/view");
      return;
    }

    // Extract uniqueid first
    const uniqueid = record.uniqueid || record.objectid?.toString();
    console.log(
      "[AgriGraff] Row clicked - setting selecteduniqueid:",
      uniqueid,
    );

    // 🔁 Toggle behavior: if the same polygon is already selected, clear selection instead.
    const currentClean = (selecteduniqueid || "").replace(/[{}]/g, "");
    const nextClean = (uniqueid || "").toString().replace(/[{}]/g, "");
    if (currentClean && nextClean && currentClean === nextClean) {
      console.log(
        "[AgriGraff] Row clicked again, clearing selection but keeping filters and zooming back",
      );

      // Clear highlight graphics only
      try {
        activeMapView.view.graphics.removeAll();
      } catch {}

      // Zoom back to the current filtered extent (or full layer if filters are too narrow)
      try {
        const where = this.buildWhereClause();
        const qBack = featureLayer.createQuery();
        qBack.returnGeometry = true;
        const oidField = featureLayer.objectIdField || "objectid";
        qBack.outFields = [oidField];
        qBack.where = where && where !== "1=0" ? where : "1=1";

        const extentResult = await (featureLayer as any).queryExtent(qBack);
        if (extentResult?.extent) {
          await activeMapView.view.goTo(extentResult.extent.expand(1.2), {
            duration: 1200,
            easing: "linear",
          });
        } else if (featureLayer.fullExtent) {
          await activeMapView.view.goTo(featureLayer.fullExtent, {
            duration: 1200,
            easing: "linear",
          });
        }
      } catch (zoomErr) {
        console.error(
          "[AgriGraff] Error while zooming back after clearing selection:",
          zoomErr,
        );
      }

      // Only clear the row selection / graph data – keep regional filters intact
      this.setState(
        {
          selecteduniqueid: "",
          vegetationData: [],
          vegetationError: null,
        },
        () => {
          // Restore normal regional filter when row selection is cleared.
          try {
            const baseWhere = this.buildWhereClause();
            (featureLayer as any).definitionExpression = baseWhere || "1=0";
            (this.state.dataSource as any)?.setDefinitionExpression?.(
              baseWhere || "1=0",
            );
          } catch {}
          try {
            document.dispatchEvent(
              new CustomEvent("widgetSelectionChanged", {
                detail: {
                  source: "AgriGraffWidget",
                  polygonMode: false,
                  timestamp: Date.now(),
                },
                bubbles: true,
              }),
            );
          } catch {}
        },
      );
      return;
    }

    try {
      this.setState({ loading: true }); // ❌ DON'T set selecteduniqueid here yet

      const q = featureLayer.createQuery();
      q.outFields = ["*"];
      q.returnGeometry = true;

      let results: __esri.FeatureSet | null = null;

      if (record.uniqueid) {
        const variants = [
          record.uniqueid,
          record.uniqueid.replace(/[{}]/g, ""),
          `{${record.uniqueid.replace(/[{}]/g, "")}}`,
        ];
        for (const v of variants) {
          q.where = `uniqueid='${this.escapeArcGIS(v)}'`;
          try {
            results = await featureLayer.queryFeatures(q);
            if (results?.features?.length) break;
          } catch {}
        }
      }

      if (!results?.features?.length && record.objectid != null) {
        const oidField = featureLayer.objectIdField || "objectid";
        q.where = `${oidField}=${record.objectid}`;
        results = await featureLayer.queryFeatures(q);
      }

      if (results?.features?.length) {
        const feature = results.features[0];
        activeMapView.view.graphics.removeAll();
        const highlightGraphic = feature.clone();

        try {
          if (feature.geometry.type === "polygon") {
            highlightGraphic.symbol = new SimpleFillSymbol({
              color: new Color([0, 100, 255, 0.3]),
              outline: new SimpleLineSymbol({
                color: new Color([0, 100, 255, 1]),
                width: 3,
              }),
            });
          } else if (feature.geometry.type === "polyline") {
            highlightGraphic.symbol = new SimpleLineSymbol({
              color: new Color([0, 100, 255, 1]),
              width: 4,
            });
          } else if (feature.geometry.type === "point") {
            highlightGraphic.symbol = new SimpleMarkerSymbol({
              color: new Color([0, 100, 255, 0.8]),
              size: 15,
              outline: new SimpleLineSymbol({
                color: new Color([255, 255, 255, 1]),
                width: 2,
              }),
            });
          }
        } catch {}

        try {
          activeMapView.view.graphics.add(highlightGraphic);
          await activeMapView.view.goTo(
            {
              target: feature.geometry,
              extent: feature.geometry.extent?.expand(2) || feature.geometry,
            },
            { duration: 1500, easing: "linear" },
          );
        } catch (viewErr) {
          console.error("goTo error:", viewErr);
        }
      } else {
        console.log("No features found for selection", { record });
      }

      // ✅✅✅ KEY FIX: Set selecteduniqueid AFTER successful query
      console.log(
        "[AgriGraff] Row selection complete, setting selecteduniqueid:",
        uniqueid,
      );
      this.setState(
        {
          loading: false,
          selecteduniqueid: uniqueid,
          error: null,
          vegetationError: null,
        },
        () => {
          console.log(
            "[AgriGraff] selecteduniqueid set to:",
            this.state.selecteduniqueid,
          );

          // Keep only the selected row polygon visible on the map layer.
          try {
            const baseWhere = this.buildWhereClause();
            const uniqueClause = this.builduniqueidWhere(
              String(uniqueid || ""),
              "uniqueid",
            );
            const selectedWhere =
              baseWhere && baseWhere !== "1=0"
                ? `(${baseWhere}) AND ${uniqueClause}`
                : uniqueClause;
            (featureLayer as any).definitionExpression = selectedWhere || "1=0";
            (this.state.dataSource as any)?.setDefinitionExpression?.(
              selectedWhere || "1=0",
            );
          } catch {}

          try {
            document.dispatchEvent(
              new CustomEvent("widgetSelectionChanged", {
                detail: {
                  source: "AgriGraffWidget",
                  polygonMode: true,
                  uniqueid: uniqueid || "",
                  timestamp: Date.now(),
                },
                bubbles: true,
              }),
            );
          } catch {}

          if (this.state.viewMode === "graph") {
            console.log(
              "[AgriGraff] ✅ Triggering fetchVegetationData from row click",
            );
            this.fetchVegetationData();
          }
        },
      );
    } catch (err) {
      console.error("Error in handleRowClick:", err);
      this.setState({
        loading: false,
        error: "Объектни танлаш амалга ошмади",
      });
    }
  };
  private filtersChanged(
    a: typeof this.state.regionalFilters,
    b: typeof this.state.regionalFilters,
  ) {
    return (
      a.viloyat !== b.viloyat ||
      a.tuman !== b.tuman ||
      a.yil !== b.yil ||
      a.uzspace !== b.uzspace ||
      a.vh !== b.vh
    ); // ✅ include vh
  }

  private handleGeoFilterChanged = (event: CustomEvent) => {
    if (!this._isMounted) return;
    const d = event?.detail || {};
    if (d.source !== "GeoFilter") return;

    const next = {
      viloyat: this.normalizeApos(d.viloyat ?? d.massivNom ?? ""),
      tuman: this.normalizeApos(d.tuman ?? d.tumanNomi ?? ""),
      yil: d.yil != null ? String(d.yil) : d.year != null ? String(d.year) : "",
      uzspace: this.normalizeApos(d.uzspace ?? d.category ?? ""),
      vh: this.normalizeApos(d.vh ?? ""), // ✅ accept vh if provided
    };

    if (this.filtersChanged(this.state.regionalFilters, next)) {
      this.setState(
        {
          regionalFilters: next,
          vhUniqueids: null, // GeoFilter does not send ndvi-status uniqueids; fallback to vh field in WHERE
          records: [],
          currentPage: 0,
          hasMoreRecords: true,
          loading: true,
        },
        () => {
          this.throttledFetchData();
        },
      );
    }
  };

  private handleResetAll = () => {
    const cleared = { viloyat: "", tuman: "", yil: "", uzspace: "", vh: "" };
    if (this.filtersChanged(this.state.regionalFilters, cleared)) {
      this.setState(
        { regionalFilters: cleared, vhUniqueids: null },
        this.refetchDebounced,
      );
    }
  };

  private refetchDebounced = () => {
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    this._debounceTimer = setTimeout(() => this.refetchNow(), 150);
  };

  private refetchNow = () => {
    if (!this._isMounted || this.state.connectionStatus !== "connected") return;
    this.setState({ loading: true }, () => {
      this.fetchData();
    });
  };

  private buildApiUrlWithFilters(baseUrl: string): string {
    const p = new URLSearchParams();
    const { regionalFilters } = this.state;

    if (regionalFilters.viloyat) p.set("viloyat", regionalFilters.viloyat);
    if (regionalFilters.tuman) p.set("tuman", regionalFilters.tuman);
    if (regionalFilters.yil) p.set("yil", regionalFilters.yil);
    if (regionalFilters.uzspace) p.set("uzspace", regionalFilters.uzspace);
    if (regionalFilters.vh) p.set("vh", regionalFilters.vh); // ✅

    const qs = p.toString();
    return qs ? `${baseUrl}?${qs}` : baseUrl;
  }

  /** ✅ Category field resolver (prefer "turi" first) */
  private getCategoryFieldName(): string | null {
    const fl = this.state.featureLayer;
    if (!fl || !fl.fields) return null;

    const candidates = [
      "turi", // ✅ prefer this
      "tur",
      "toifa",
      "yer_toifa",
      "yertoifa",
      "uzspace",
      "land_category",
      "land_type",
      "category",
      "type",
      "class",
    ];

    const lower = fl.fields.map((f) => f.name.toLowerCase());
    for (const c of candidates) {
      const i = lower.indexOf(c.toLowerCase());
      if (i !== -1) return fl.fields[i].name;
    }
    return null;
  }

  /** ✅ VH field resolver */
  private getVhFieldName(): string | null {
    const fl = this.state.featureLayer;
    if (!fl || !fl.fields) return null;

    const candidates = ["vh", "VH", "Vh"];

    const lower = fl.fields.map((f) => f.name.toLowerCase());
    for (const c of candidates) {
      const i = lower.indexOf(c.toLowerCase());
      if (i !== -1) return fl.fields[i].name;
    }
    return null;
  }

  /** Polygon join field for VH uniqueid IN (...) clause (e.g. uniqueid); must match AgriFilter polygonJoinField */
  private getPolygonJoinFieldName(): string {
    const fl = this.state.featureLayer;
    if (!fl?.fields?.length) return "uniqueid";
    const lower = fl.fields.map((f) => f.name.toLowerCase());
    const idx = lower.indexOf("uniqueid");
    return idx !== -1 ? fl.fields[idx].name : "uniqueid";
  }

  /* ==================== GRAPH VIEW FUNCTIONS ==================== */

  /** Fetch regional timeseries when no polygon is selected (uses viloyat, optional tuman, optional yil for date range). */
  private fetchRegionalTimeseries = async () => {
    const { regionalFilters } = this.state;
    const { viloyat, tuman, yil } = regionalFilters;
    try {
      this.setState({ loadingVegetation: true, vegetationError: null });
      const params = new URLSearchParams();
      const effectiveViloyat = this.normalizeApos(viloyat);
      const vilKey = this.makeRegionDistrictKey(effectiveViloyat);
      const effectiveTuman = tuman ? this.normalizeApos(tuman) : "";
      const tumanKey = this.makeRegionDistrictKey(effectiveTuman);
      const storedRegionCode =
        this.state.regionalRegionCode != null &&
        Number.isFinite(this.state.regionalRegionCode)
          ? this.state.regionalRegionCode
          : null;

      const regionNum =
        storedRegionCode ??
        (/^\d+$/.test(effectiveViloyat) && effectiveViloyat
          ? Number(effectiveViloyat)
          : vilKey
            ? this._viloyatToRegion[vilKey]
            : undefined);
      const districtNum =
        effectiveTuman &&
        ((/^\d+$/.test(effectiveTuman) && effectiveTuman
          ? Number(effectiveTuman)
          : tumanKey
            ? this._tumanToDistrict[tumanKey]
            : undefined) as number | undefined);

      if (regionNum !== undefined && Number.isFinite(regionNum)) {
        params.set("region", String(regionNum));
      }

      if (tuman) {
        if (districtNum !== undefined && Number.isFinite(districtNum)) {
          params.set("district", String(districtNum));
        } else {
          // Safe fallback: omit district if we can't resolve a numeric code.
          // Keep request valid so API can still return regionless aggregate data.
          console.warn(
            "[AgriGraffWidget] Missing district code for tuman:",
            tuman,
          );
        }
      }
      if (yil) {
        const year = String(yil).match(/\b(18|19|20)\d{2}\b/)?.[0];
        if (year) {
          params.set("start_date", `${year}-01-01`);
          params.set("end_date", `${year}-12-31`);
        }
      }
      const url = `https://apisoil.sgm.uzspace.uz/api/v1/vegetation/regional/timeseries?${params.toString()}`;
      const response = await fetch(url, {
        method: "GET",
        headers: { accept: "application/json" },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json: {
        district?: string | null;
        region?: string | null;
        data: RegionalTimeseriesRow[];
      } = await response.json();
      const data = json?.data ?? [];
      if (!this._isMounted) return;
      const sorted = data
        .slice()
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );
      const chartRows: ChartVegetationRow[] = sorted.map((row) => ({
        ...row,
        raster_date: row.date,
      }));
      this.setState({
        vegetationData: chartRows,
        loadingVegetation: false,
        vegetationError:
          chartRows.length === 0
            ? "Танланган фильтрлар бўйича вилоят вегетация маълумоти йўқ."
            : null,
      });
    } catch (err: any) {
      if (!this._isMounted) return;
      this.setState({
        vegetationData: [],
        loadingVegetation: false,
        vegetationError: err?.message || "Вилоят вақт қатори юклана олмади.",
      });
    }
  };

  private switchToGraph = () => {
    this.setState(
      {
        viewMode: "graph",
        error: null,
        vegetationError: null,
        isMonthPickerOpen: false,
      },
      () => {
        if (this.state.selecteduniqueid) {
          this.fetchVegetationData();
        } else {
          this.fetchRegionalTimeseries();
        }
      },
    );
  };

  private switchToTable = () => {
    this.setState({
      viewMode: "table",
      vegetationData: [],
      vegetationError: null,
      isMonthPickerOpen: false,
    });
  };

  private toggleMonthPicker = () => {
    if (!this.isRegionalInteractionEnabled()) return;

    this.setState((prev) => {
      if (prev.isMonthPickerOpen) {
        return { isMonthPickerOpen: false };
      }
      return {
        isMonthPickerOpen: true,
        monthPickerPlacement: this.resolveMonthPickerPlacement(),
      };
    });
  };

  private resolveMonthPickerPlacement = (): "up" | "down" => {
    const pickerRoot = this.monthPickerRef.current;
    if (!pickerRoot || typeof window === "undefined") return "down";

    const button = pickerRoot.querySelector(
      ".graff-month-button",
    ) as HTMLElement | null;
    const anchorRect = (button || pickerRoot).getBoundingClientRect();

    // 4 visible rows (including "all months") + panel padding/border.
    const estimatedPanelHeight = 132;
    const gap = 6;
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Dropdown is clipped by the widget card (overflow hidden), so place it
    // based on room inside that container first, then viewport as fallback.
    const card = pickerRoot.closest(".kadastr-status-card") as
      | HTMLElement
      | null;
    const cardRect = card?.getBoundingClientRect();
    const lowerBound = cardRect
      ? Math.min(cardRect.bottom, viewportHeight)
      : viewportHeight;
    const upperBound = cardRect ? Math.max(cardRect.top, 0) : 0;

    const spaceBelow = lowerBound - anchorRect.bottom;
    const spaceAbove = anchorRect.top - upperBound;

    if (spaceBelow < estimatedPanelHeight + gap && spaceAbove > spaceBelow) {
      return "up";
    }
    return "down";
  };

  private handleMonthOptionClick = (month: number | null) => {
    if (!this.isRegionalInteractionEnabled()) return;

    this.setState(
      {
        selectedMonth: month,
        isMonthPickerOpen: false,
        chartTooltip: null,
        selectedNdviDate: null,
      },
      this.scheduleGraphViewportRefresh,
    );
  };

  private fetchVegetationData = async () => {
    const { selecteduniqueid } = this.state;
    console.log("[fetchVegetationData] ========== STARTING ==========");
    console.log("[fetchVegetationData] selecteduniqueid:", selecteduniqueid);
    console.log("[fetchVegetationData] State:", {
      selecteduniqueid: this.state.selecteduniqueid,
      viewMode: this.state.viewMode,
      loadingVegetation: this.state.loadingVegetation,
    });

    console.log(
      "[fetchVegetationData] Called with selecteduniqueid:",
      selecteduniqueid,
    );

    if (!selecteduniqueid) {
      console.log("[fetchVegetationData] No selecteduniqueid, setting error");
      this.setState({
        vegetationError:
          "Полигон танланмаган. Аввал жадвалдаги қатор ёки харитадаги полигонни босинг.",
        loadingVegetation: false,
      });
      return;
    }

    try {
      this.setState({ loadingVegetation: true, vegetationError: null });

      const cleanId = selecteduniqueid.replace(/[{}]/g, "");
      const url = `https://apisoil.sgm.uzspace.uz/api/v1/vegetation/uniqueid/${cleanId}?limit=100`;

      console.log("[fetchVegetationData] Fetching from:", url);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: VegetationIndex[] = await response.json();

      console.log(
        "[fetchVegetationData] Received data:",
        data?.length || 0,
        "records",
      );

      if (!this._isMounted) return;

      if (!data || data.length === 0) {
        this.setState({
          vegetationData: [],
          loadingVegetation: false,
          vegetationError: "Ушбу полигон учун вегетация маълумоти йўқ.",
        });
        return;
      }

      // Sort by date ascending
      const sorted = data.sort(
        (a, b) =>
          new Date(a.raster_date).getTime() - new Date(b.raster_date).getTime(),
      );

      this.setState({
        vegetationData: sorted,
        loadingVegetation: false,
        vegetationError: null,
      });

      console.log(
        "[fetchVegetationData] Successfully loaded",
        sorted.length,
        "records",
      );
    } catch (error: any) {
      if (!this._isMounted) return;
      console.error("[fetchVegetationData] Error:", error);
      this.setState({
        vegetationData: [],
        loadingVegetation: false,
        vegetationError: error.message || "Вегетация маълумоти юклана олмади",
      });
    }
  };

  private handleIndexChange = (
    index: "ndvi" | "savi" | "rvi" | "ci" | "evi",
  ) => {
    if (!this.isRegionalInteractionEnabled()) return;

    this.setState((prevState) => {
      const exists = prevState.selectedIndices.includes(index);
      if (exists) {
        const next = prevState.selectedIndices.filter((k) => k !== index);
        // Keep at least NDVI so chart is never empty
        return { selectedIndices: next.length > 0 ? next : ["ndvi"] };
      }
      return { selectedIndices: [...prevState.selectedIndices, index] };
    });
  };

  private renderGraphIndexControls = () => {
    const { selectedIndices } = this.state;

    const indexButtons: Array<{
      key: "ndvi" | "savi" | "rvi" | "ci" | "evi";
      label: string;
      color: string;
    }> = [
      { key: "ndvi", label: "NDVI", color: "#00d084" },
      { key: "savi", label: "SAVI", color: "#7aa5ff" },
      { key: "rvi", label: "RVI", color: "#ffb347" },
      { key: "ci", label: "CI", color: "#c78bff" },
      { key: "evi", label: "EVI", color: "#ff4d8d" },
    ];

    const indexOrder: Array<"ndvi" | "savi" | "rvi" | "ci" | "evi"> = [
      "ndvi",
      "savi",
      "rvi",
      "ci",
      "evi",
    ];
    const activeIndices = indexOrder.filter((idx) =>
      selectedIndices.includes(idx),
    );
    const finalIndices = activeIndices.length > 0 ? activeIndices : ["ndvi"];
    const regionalIx = this.isRegionalInteractionEnabled();

    return (
      <div className="graff-index-top">
        <div className="graff-index-top-label">ĞšÑÑ€ÑĞ°Ñ‚ĞºĞ¸Ñ‡</div>
        <div className="index-buttons-horizontal">
          {indexButtons.map((btn) => {
            const isActive = finalIndices.includes(btn.key);
            return (
              <button
                key={btn.key}
                type="button"
                className={`index-btn-h ${isActive ? "active" : ""}`}
                disabled={!regionalIx}
                onClick={() => this.handleIndexChange(btn.key)}
                style={
                  {
                    "--btn-color": btn.color,
                    "--btn-bg": isActive ? btn.color : "transparent",
                    "--btn-text": isActive ? "#fff" : btn.color,
                  } as React.CSSProperties
                }
              >
                <span
                  className="index-btn-h-dot"
                  style={{ background: btn.color }}
                />
                <span className="index-btn-h-label">{btn.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  private renderGraph = () => {
    const {
      vegetationData,
      loadingVegetation,
      vegetationError,
      selectedIndices,
      selecteduniqueid,
      chartTooltip,
      selectedNdviDate,
      selectedMonth,
      isMonthPickerOpen,
      monthPickerPlacement,
      language,
    } = this.state;

    const regionalInteraction = this.isRegionalInteractionEnabled();

    const viewTableLabel =
      language === "ru"
        ? "Таблица"
        : language === "uz_lat"
          ? "Jadval"
          : "Жадвал";
    const viewGraphLabel =
      language === "ru"
        ? "График"
        : language === "uz_lat"
          ? "Grafik"
          : "График";
    const indicatorLabel =
      language === "ru"
        ? "Индекс показателей"
        : language === "uz_lat"
          ? "Index ko'rsatkichlari"
          : "Индекс кўрсаткичлари";
    const monthPickerLabel =
      language === "ru" ? "Месяц" : language === "uz_lat" ? "Oy" : "Ой";
    const allMonthsLabel =
      language === "ru"
        ? "Все месяцы"
        : language === "uz_lat"
          ? "Barcha oylar"
          : "Барча ойлар";
    if (loadingVegetation) {
      return (
        <div className="kadastr-status-loading-container">
          <div className="regional-modern-loader" aria-hidden="true">
            <span className="regional-modern-loader-dot" />
            <span className="regional-modern-loader-dot" />
            <span className="regional-modern-loader-dot" />
          </div>
        </div>
      );
    }

    if (vegetationError) {
      const onRetry = selecteduniqueid
        ? this.fetchVegetationData
        : this.fetchRegionalTimeseries;
      return (
        <div className="kadastr-status-error">
          <h3>
            {language === "ru"
              ? "Не удалось загрузить данные"
              : language === "uz_lat"
                ? "Maʼlumot yuklanmadi"
                : "Маълумот юклана олмади"}
          </h3>
          <p>{vegetationError}</p>
          <button onClick={onRetry} className="kadastr-status-retry-button">
            {language === "ru"
              ? "Повторить"
              : language === "uz_lat"
                ? "Qayta urinib ko‘rish"
                : "Qayta urinish"}
          </button>
        </div>
      );
    }

    if (!vegetationData || vegetationData.length === 0) {
      if (!selecteduniqueid) {
        const { regionalFilters } = this.state;
        const hasRegion = !!regionalFilters?.viloyat;

        if (!hasRegion) {
          return (
            <div className="kadastr-status-loading-container">
              <div className="regional-modern-loader" aria-hidden="true">
                <span className="regional-modern-loader-dot" />
                <span className="regional-modern-loader-dot" />
                <span className="regional-modern-loader-dot" />
              </div>
            </div>
          );
        }

        return (
          <div className="kadastr-status-no-data">
            <h3>
              {hasRegion
                ? language === "ru"
                  ? "Нет данных по области"
                  : language === "uz_lat"
                    ? "Viloyat bo‘yicha maʼlumot yo‘q"
                    : "Вилоят маълумоти йўқ"
                : language === "ru"
                  ? "Полигон не выбран"
                  : language === "uz_lat"
                    ? "Poligon tanlanmagan"
                    : "Полигон танланмаган"}
            </h3>
            <p>
              {hasRegion
                ? language === "ru"
                  ? "Для выбранных область/район/год не найдена временная серия вегетации. Выберите другой год или область."
                  : language === "uz_lat"
                    ? "Tanlangan viloyat/tuman/yil uchun vegetatsiya vaqt qatori topilmadi. Boshqa yil yoki viloyatni tanlang."
                    : "Танланган вилоят/туман/йил учун вегетация вақт қатори топилмади. Бошқа йил ёки вилоятни танланг."
                : language === "ru"
                  ? "Выберите область — чтобы посмотреть временной ряд вегетации по области или выберите строку в таблице либо полигон на карте."
                  : language === "uz_lat"
                    ? "Viloyatni tanlang — viloyat bo‘yicha vegetatsiya vaqt qatorini ko‘rish uchun yoki jadvaldagi qatorni yoki xaritadagi poligonni tanlang."
                    : "Вилоятни танланг — вилоят бўйича вегетация вақт қаторини кўриш ёки жадвалдаги қатор ёки харитадаги полигонни танланг."}
            </p>
            {!hasRegion && (
              <>
                <p className="graff-hint-text">
                  {language === "ru"
                    ? "Полигон можно выбрать так:"
                    : language === "uz_lat"
                      ? "Poligonni shunday tanlashingiz mumkin:"
                      : "Полигонни шундай танлашингиз мумкин:"}
                </p>
                <ul className="graff-hint-list">
                  <li>
                    {language === "ru"
                      ? "Нажмите на полигон на карте"
                      : language === "uz_lat"
                        ? "Xaritadagi poligonni bosing"
                        : "Харитадаги полигонни босинг"}
                  </li>
                  <li>
                    {language === "ru"
                      ? "Нажмите строку в режиме таблицы"
                      : language === "uz_lat"
                        ? "Jadval ko‘rinishidagi qatorni bosing"
                        : "Жадвал кўринишидаги қаторни босинг"}
                  </li>
                </ul>
              </>
            )}
            <button
              type="button"
              onClick={
                hasRegion ? this.fetchRegionalTimeseries : this.switchToTable
              }
              className="kadastr-status-retry-button graff-back-button"
            >
              {hasRegion
                ? language === "ru"
                  ? "Повторить"
                  : language === "uz_lat"
                    ? "Qayta urinish"
                    : "Qayta urinish"
                : language === "ru"
                  ? "Назад к таблице"
                  : language === "uz_lat"
                    ? "Jadvalga qaytish"
                    : "Жадвалга қайтиш"}
            </button>
          </div>
        );
      }

      return (
        <div className="kadastr-status-no-data">
          <h3>
            {language === "ru"
              ? "Нет данных по вегетации"
              : language === "uz_lat"
                ? "Vegetatsiya maʼlumotlari yo‘q"
                : "Вегетация маълумоти йўқ"}
          </h3>
          <p>
            {language === "ru"
              ? "Для выбранного полигона нет показателей вегетации."
              : language === "uz_lat"
                ? "Tanlangan poligon uchun vegetatsiya ko‘rsatkichlari mavjud emas."
                : "Танланган полигон учун вегетация кўрсаткичлари мавжуд эмас."}
          </p>
          <p className="graff-selected-id-hint">
            {language === "ru"
              ? "Выбранный UniqueID:"
              : language === "uz_lat"
                ? "Tanlangan UniqueID:"
                : "Танланган UniqueID:"}{" "}
            {selecteduniqueid}
          </p>
          <button
            type="button"
            onClick={this.fetchVegetationData}
            className="kadastr-status-retry-button"
          >
            {language === "ru"
              ? "Повторить"
              : language === "uz_lat"
                ? "Qayta urinib ko‘rish"
                : "Qayta urinish"}
          </button>
        </div>
      );
    }

    const indexButtons: Array<{
      key: "ndvi" | "savi" | "rvi" | "ci" | "evi";
      label: string;
      color: string;
    }> = [
      { key: "ndvi", label: "NDVI", color: "#00d084" },
      { key: "savi", label: "SAVI", color: "#7aa5ff" },
      { key: "rvi", label: "RVI", color: "#ffb347" },
      { key: "ci", label: "CI", color: "#c78bff" },
      { key: "evi", label: "EVI", color: "#ff4d8d" },
    ];

    const indexOrder: Array<"ndvi" | "savi" | "rvi" | "ci" | "evi"> = [
      "ndvi",
      "savi",
      "rvi",
      "ci",
      "evi",
    ];
    const activeIndices = indexOrder.filter((idx) =>
      selectedIndices.includes(idx),
    );
    const finalIndices = activeIndices.length > 0 ? activeIndices : ["ndvi"];
    const primaryIndex = finalIndices[0];
    const isMultiIndexMode = finalIndices.length > 1;
    const indexColorMap = indexButtons.reduce(
      (acc, item) => {
        acc[item.key] = item.color;
        return acc;
      },
      {} as Record<"ndvi" | "savi" | "rvi" | "ci" | "evi", string>,
    );

    // Calculate SVG dimensions from live container size
    const graphWidth = Math.max(this.state.graphViewportWidth, 120);
    const graphHeight = Math.max(this.state.graphViewportHeight, 120);
    const isNarrow = graphWidth < 640;
    const compactChart = graphWidth < 720;
    const axisTickFont = 10;
    const axisTitleFont = 10;
    const monthTickFont = 10;
    const tooltipFont = 10;
    const padding = {
      top: compactChart ? 8 : 12,
      right: compactChart ? 6 : 8,
      bottom: compactChart ? 32 : 36,
      left: compactChart ? 50 : 56,
    };
    const chartWidth = graphWidth - padding.left - padding.right;
    const chartHeight = graphHeight - padding.top - padding.bottom;
    const yAxisTitleX = Math.max(12, padding.left - 46);
    const yAxisTitleFont = 10;
    const monthTickY = padding.top + chartHeight + (isNarrow ? 16 : 17);
    const xAxisTitleY = monthTickY + 12;

    const monthNamesFull =
      language === "ru"
        ? [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
          ]
        : language === "uz_lat"
          ? [
              "Yanvar",
              "Fevral",
              "Mart",
              "Aprel",
              "May",
              "Iyun",
              "Iyul",
              "Avgust",
              "Sentabr",
              "Oktabr",
              "Noyabr",
              "Dekabr",
            ]
          : [
              "Январ",
              "Феврал",
              "Март",
              "Апрел",
              "Май",
              "Июн",
              "Июл",
              "Август",
              "Сентябр",
              "Октябр",
              "Ноябр",
              "Декабр",
            ];

    const sortedRowsBase = [...vegetationData].sort(
      (a, b) =>
        new Date(a.raster_date).getTime() - new Date(b.raster_date).getTime(),
    );
    const availableMonthIndices = Array.from(
      new Set(sortedRowsBase.map((row) => new Date(row.raster_date).getMonth())),
    ).sort((a, b) => a - b);

    const sortedRows =
      selectedMonth == null
        ? sortedRowsBase
        : sortedRowsBase.filter(
            (row) => new Date(row.raster_date).getMonth() === selectedMonth,
          );

    const seriesByIndex = finalIndices.reduce(
      (acc, idx) => {
        acc[idx] = sortedRows.map((row, rowIndex) => {
          const raw = row as any;
          const value = Number(raw[idx] ?? 0);
          const minRaw = raw[`${idx}_min`];
          const maxRaw = raw[`${idx}_max`];
          return {
            date: new Date(row.raster_date),
            value,
            sourceIndex: rowIndex,
            min:
              minRaw == null || Number.isNaN(Number(minRaw))
                ? undefined
                : Number(minRaw),
            max:
              maxRaw == null || Number.isNaN(Number(maxRaw))
                ? undefined
                : Number(maxRaw),
          };
        });
        return acc;
      },
      {} as Record<
        "ndvi" | "savi" | "rvi" | "ci" | "evi",
        Array<{
          date: Date;
          value: number;
          sourceIndex: number;
          min?: number;
          max?: number;
        }>
      >,
    );

    const dataPoints = seriesByIndex[primaryIndex] || [];

    // Find min/max values across selected indicators for comparison scale
    const allSeriesPoints = finalIndices.flatMap((idx) => seriesByIndex[idx]);
    const values = allSeriesPoints
      .map((d) => d.value)
      .filter((v) => Number.isFinite(v));
    const allMins = allSeriesPoints
      .map((d) => d.min)
      .filter((v): v is number => v != null && Number.isFinite(v));
    const allMaxs = allSeriesPoints
      .map((d) => d.max)
      .filter((v): v is number => v != null && Number.isFinite(v));

    if (values.length === 0 || dataPoints.length === 0) {
      return (
        <div className="kadastr-status-no-data">
          <h3>
            {language === "ru"
              ? "Нет данных по вегетации"
              : language === "uz_lat"
                ? "Vegetatsiya maʼlumotlari yo‘q"
                : "Вегетация маълумоти йўқ"}
          </h3>
          {selectedMonth != null && (
            <p>
              {language === "ru"
                ? `Для месяца ${monthNamesFull[selectedMonth]} данные не найдены.`
                : language === "uz_lat"
                  ? `${monthNamesFull[selectedMonth]} oyi uchun maʼlumot topilmadi.`
                  : `${monthNamesFull[selectedMonth]} ойи учун маълумот топилмади.`}
            </p>
          )}
          {selectedMonth != null && (
            <button
              type="button"
              onClick={() =>
                this.setState(
                  { selectedMonth: null },
                  this.scheduleGraphViewportRefresh,
                )
              }
              className="kadastr-status-retry-button"
            >
              {allMonthsLabel}
            </button>
          )}
        </div>
      );
    }

    const rawMinValue = Math.min(...values, ...allMins);
    const rawMaxValue = Math.max(...values, ...allMaxs);
    const valuePadding = Math.max((rawMaxValue - rawMinValue) * 0.08, 0.02);
    const minValue = rawMinValue - valuePadding;
    const maxValue = rawMaxValue + valuePadding;
    const isNdviScale = primaryIndex === "ndvi";
    const axisMinValue = isNdviScale ? rawMinValue : minValue;
    const axisMaxValue = isNdviScale ? rawMaxValue : maxValue;
    const axisRange = Math.max(axisMaxValue - axisMinValue, 0.001);

    // Scale functions
    const minDate = dataPoints[0].date.getTime();
    const maxDate = dataPoints[dataPoints.length - 1].date.getTime();
    const dateRange = Math.max(maxDate - minDate, 1);
    const innerPaddingX = 8;
    const rawXScale = (date: Date) => {
      return (
        padding.left +
        innerPaddingX +
        ((date.getTime() - minDate) / dateRange) * (chartWidth - innerPaddingX * 2)
      );
    };
    const xScale = (date: Date, sourceIndex?: number) => {
      if (
        sourceIndex == null ||
        dataPoints.length < 3 ||
        sourceIndex < 0 ||
        sourceIndex >= dataPoints.length
      ) {
        return rawXScale(date);
      }

      const uniformX =
        padding.left +
        innerPaddingX +
        (sourceIndex / Math.max(dataPoints.length - 1, 1)) *
          (chartWidth - innerPaddingX * 2);
      const rawX = rawXScale(date);

      // Blend date-based spacing with uniform spacing so dense points spread out visually.
      return rawX * 0.25 + uniformX * 0.75;
    };

    const yScale = (value: number) => {
      return (
        padding.top +
        chartHeight -
        ((value - axisMinValue) / axisRange) * chartHeight
      );
    };

    const yAxisTickValues = [1, 0.5, 0, -0.5, -1];

    // Clean min/max band path
    const minMaxAreaPath = (() => {
      if (dataPoints.length === 0) return "";

      const valid = dataPoints.filter((d) => d.min != null && d.max != null);
      if (valid.length < 2) return "";

      const top = valid
        .map((d, index) => {
          const x = xScale(d.date, d.sourceIndex);
          const y = yScale(d.max as number);
          return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
        })
        .join(" ");

      const bottom = valid
        .slice()
        .reverse()
        .map((d) => {
          const x = xScale(d.date, d.sourceIndex);
          const y = yScale(d.min as number);
          return `L ${x} ${y}`;
        })
        .join(" ");

      return `${top} ${bottom} Z`;
    })();

    const buildSmoothPath = (points: Array<{ x: number; y: number }>) => {
      if (points.length === 0) return "";
      if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

      const tension = 0.9;
      let d = `M ${points[0].x} ${points[0].y}`;

      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i - 1] || points[i];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = points[i + 2] || p2;

        const cp1x = p1.x + ((p2.x - p0.x) / 6) * tension;
        const cp1y = p1.y + ((p2.y - p0.y) / 6) * tension;
        const cp2x = p2.x - ((p3.x - p1.x) / 6) * tension;
        const cp2y = p2.y - ((p3.y - p1.y) / 6) * tension;

        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
      }

      return d;
    };

    const lineSeries = finalIndices.map((idx) => {
      const points = (seriesByIndex[idx] || []).map((d) => ({
        x: xScale(d.date, d.sourceIndex),
        y: yScale(d.value),
        value: d.value,
        date: d.date,
        min: d.min,
        max: d.max,
        sourceIndex: d.sourceIndex,
      }));

      const baselineY = padding.top + chartHeight;
      const areaPath =
        points.length < 2
          ? ""
          : `${buildSmoothPath(points)} L ${points[points.length - 1].x} ${baselineY} L ${points[0].x} ${baselineY} Z`;

      return {
        key: idx,
        color: indexColorMap[idx],
        points,
        path: buildSmoothPath(points),
        areaPath,
      };
    });

    // Month labels for x-axis
    const monthLabels =
      language === "ru"
        ? [
            "Янв",
            "Фев",
            "Мар",
            "Апр",
            "Май",
            "Июн",
            "Июл",
            "Авг",
            "Сен",
            "Окт",
            "Ноя",
            "Дек",
          ]
        : language === "uz_lat"
          ? [
              "Yan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Iyun",
              "Iyul",
              "Avg",
              "Sen",
              "Okt",
              "Noy",
              "Dek",
            ]
          : [
              "Янв",
              "Фев",
              "Мар",
              "Апр",
              "Май",
              "Июн",
              "Июл",
              "Авг",
              "Сен",
              "Окт",
              "Ноя",
              "Дек",
            ];

    // Build unique month ticks so each calendar month appears only once on the x-axis
    const monthTickPoints = (() => {
      if (dataPoints.length === 0) return [];
      const seen = new Set<string>();
      const ticks: { x: number; label: string }[] = [];
      for (const d of dataPoints) {
        const key = `${d.date.getFullYear()}-${d.date.getMonth()}`;
        if (!seen.has(key)) {
          seen.add(key);
          ticks.push({
            x: xScale(d.date, d.sourceIndex),
            label: monthLabels[d.date.getMonth()],
          });
        }
      }
      if (graphWidth < 560 && ticks.length > 5) {
        return ticks.filter((_, index) => index % 2 === 0);
      }
      return ticks;
    })();

    const themeText = this.state.isDarkTheme ? "#e9f8ff" : "#111827";
    const themeGrid = this.state.isDarkTheme
      ? "rgba(233, 248, 255, 0.28)"
      : "rgba(15, 23, 42, 0.12)";
    const tooltipBg = this.state.isDarkTheme
      ? "rgba(7, 26, 43, 0.96)"
      : "rgba(250,250,249,0.98)";
    const tooltipHeaderBg = this.state.isDarkTheme
      ? "rgba(233,248,255,0.1)"
      : "rgba(15,23,42,0.06)";
    const tooltipBorder = this.state.isDarkTheme
      ? "rgba(126, 214, 255, 0.28)"
      : "rgba(15,23,42,0.12)";

    const findNearestPoint = (svgX: number) => {
      if (dataPoints.length === 0) return null;
      let nearest = 0;
      let minDist = Math.abs(
        xScale(dataPoints[0].date, dataPoints[0].sourceIndex) - svgX,
      );
      for (let i = 1; i < dataPoints.length; i++) {
        const d = Math.abs(
          xScale(dataPoints[i].date, dataPoints[i].sourceIndex) - svgX,
        );
        if (d < minDist) {
          minDist = d;
          nearest = i;
        }
      }
      return dataPoints[nearest];
    };

    const findNearestSeriesPoint = (
      svgX: number,
      indexKey: "ndvi" | "savi" | "rvi" | "ci" | "evi",
    ) => {
      const series = seriesByIndex[indexKey] || [];
      if (series.length === 0) return null;
      let nearest = 0;
      let minDist = Math.abs(
        xScale(series[0].date, series[0].sourceIndex) - svgX,
      );
      for (let i = 1; i < series.length; i++) {
        const distance = Math.abs(
          xScale(series[i].date, series[i].sourceIndex) - svgX,
        );
        if (distance < minDist) {
          minDist = distance;
          nearest = i;
        }
      }
      return series[nearest];
    };

    const findNearestPointAcrossSeries = (svgX: number, svgY: number) => {
      let best:
        | {
            distance: number;
            indexKey: "ndvi" | "savi" | "rvi" | "ci" | "evi";
            point: {
              date: Date;
              value: number;
              min?: number;
              max?: number;
              sourceIndex?: number;
            };
          }
        | null = null;

      for (const series of lineSeries) {
        for (const p of series.points) {
          const dx = p.x - svgX;
          const dy = p.y - svgY;
          const distance = Math.hypot(dx, dy);
          if (!best || distance < best.distance) {
            best = {
              distance,
              indexKey: series.key,
              point: {
                date: p.date,
                value: p.value,
                min: p.min,
                max: p.max,
                sourceIndex: p.sourceIndex,
              },
            };
          }
        }
      }

      return best;
    };

    const setChartTooltipForIndex = (
      indexKey: "ndvi" | "savi" | "rvi" | "ci" | "evi",
      point: {
        date: Date;
        value: number;
        min?: number;
        max?: number;
        sourceIndex?: number;
      },
    ) => {
      this.setState({
        chartTooltip: {
          indexKey,
          point: {
            date: point.date,
            value: point.value,
            min: point.min,
            max: point.max,
            ...(point.sourceIndex != null && point.sourceIndex >= 0
              ? { sourceIndex: point.sourceIndex }
              : {}),
          },
        },
      });
    };

    const handleChartMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
      if (isMultiIndexMode) {
        this.setState({ chartTooltip: null });
        return;
      }
      const svg = e.currentTarget;
      const rect = svg.getBoundingClientRect();
      const svgX = ((e.clientX - rect.left) / rect.width) * graphWidth;
      const point = findNearestPoint(svgX);
      if (point) {
        setChartTooltipForIndex(primaryIndex, point);
      }
    };

    const handleChartMouseLeave = () => {
      this.setState({ chartTooltip: null });
    };

    const handlePointSelection = (
      indexKey: "ndvi" | "savi" | "rvi" | "ci" | "evi",
      point: {
        date: Date;
        value: number;
        min?: number;
        max?: number;
        sourceIndex?: number;
      },
    ) => {
      if (!regionalInteraction) return;

      const selectedDateStr = this.formatLocalDateYmd(point.date);
      const isSameDateClick =
        (this.state.selectedNdviDate || "") === selectedDateStr;

      if (isSameDateClick) {
        this.setState({
          selectedNdviDate: null,
          selectedChartIndexKey: null,
          chartTooltip: null,
        });

        if (!this.state.selecteduniqueid) {
          document.dispatchEvent(
            new CustomEvent("widgetSelectionChanged", {
              detail: {
                ndviDate: "",
                source: "AgriGraffWidget",
                timestamp: Date.now(),
              },
              bubbles: true,
            }),
          );
        }
        return;
      }

      this.setState({
        selectedNdviDate: selectedDateStr,
        selectedChartIndexKey: indexKey,
        chartTooltip: {
          indexKey,
          point: {
            date: point.date,
            value: point.value,
            min: point.min,
            max: point.max,
            ...(point.sourceIndex != null && point.sourceIndex >= 0
              ? { sourceIndex: point.sourceIndex }
              : {}),
          },
        },
      });

      if (!this.state.selecteduniqueid) {
        document.dispatchEvent(
          new CustomEvent("widgetSelectionChanged", {
            detail: {
              ndviDate: selectedDateStr,
              source: "AgriGraffWidget",
              timestamp: Date.now(),
            },
            bubbles: true,
          }),
        );
      }
    };

    const handleChartClick = (e: React.MouseEvent<SVGSVGElement>) => {
      if (!regionalInteraction) return;

      const svg = e.currentTarget;
      const rect = svg.getBoundingClientRect();
      const svgX = ((e.clientX - rect.left) / rect.width) * graphWidth;
      const svgY = ((e.clientY - rect.top) / rect.height) * graphHeight;

      if (isMultiIndexMode) {
        const nearest = findNearestPointAcrossSeries(svgX, svgY);
        // Only treat click as point-selection when cursor is actually close to a dot.
        if (!nearest || nearest.distance > 10) return;
        handlePointSelection(nearest.indexKey, nearest.point);
        return;
      }

      const point = findNearestPoint(svgX);
      if (!point) return;
      handlePointSelection(primaryIndex, point);
    };

    const floatingTooltip = chartTooltip
      ? (() => {
          const pt = chartTooltip.point;
          const lineX = xScale(pt.date, pt.sourceIndex);
          const boxW = 188;
          const pad = 12;
          const lineH = 16;
          const headerH = 22;
          const boxH = headerH + 4 + lineH * 3 + pad;
          const wrapRect = this.graphSvgWrapRef.current?.getBoundingClientRect();
          if (!wrapRect) return null;

          let left = wrapRect.left + lineX - boxW / 2;
          left = Math.max(8, Math.min(left, window.innerWidth - boxW - 8));
          const top = Math.max(8, wrapRect.top - boxH - 10);

          const minStr = pt.min != null ? pt.min.toFixed(4) : "—";
          const maxStr = pt.max != null ? pt.max.toFixed(4) : "—";
          const valStr = pt.value.toFixed(4);
          const dateLocale = language === "ru" ? "ru-RU" : "en-GB";
          const dateStr = pt.date.toLocaleDateString(dateLocale, {
            day: "numeric",
            month: "short",
            year: "numeric",
          });
          const indicatorColor = indexColorMap[chartTooltip.indexKey] || "#fbbf24";

          return {
            left,
            top,
            minStr,
            maxStr,
            valStr,
            dateStr,
            indicatorColor,
            key: chartTooltip.indexKey,
          };
        })()
      : null;

    return (
      <div
        className={`vegetation-graph-container ${isNarrow ? "is-narrow" : ""} ${compactChart ? "is-compact" : ""}`}
        ref={this.graphContainerRef}
      >
        {/* Top index buttons (moved from right sidebar) */}
        <div className="graff-index-top">
          <div className="graff-index-top-label">
            <span>{indicatorLabel}</span>
          </div>
          <div className="graff-index-top-right">
            <div className="index-buttons-horizontal">
              {indexButtons.map((btn) => {
                const isActive = finalIndices.includes(btn.key);
                return (
                  <button
                    key={btn.key}
                    type="button"
                    className={`index-btn-h ${isActive ? "active" : ""}`}
                    disabled={!regionalInteraction}
                    onClick={() => this.handleIndexChange(btn.key)}
                    style={
                      {
                        "--btn-color": btn.color,
                        "--btn-bg": isActive ? btn.color : "transparent",
                        "--btn-text": isActive ? "#fff" : btn.color,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className="index-btn-h-dot"
                      style={{ background: btn.color }}
                    />
                    <span className="index-btn-h-label">{btn.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="graff-month-picker" ref={this.monthPickerRef}>
              <button
                type="button"
                className={`view-button compact graff-month-button ${isMonthPickerOpen ? "active" : ""}`}
                disabled={!regionalInteraction}
                onClick={this.toggleMonthPicker}
                title={monthPickerLabel}
                aria-label={monthPickerLabel}
              >
                <span className="view-button-icon" aria-hidden="true">
                  <svg
                    className="view-button-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="4" y="6" width="16" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M4 10H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M8 3.8V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M16 3.8V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {isMonthPickerOpen && (
                <div
                  className={`graff-month-picker-panel ${monthPickerPlacement === "up" ? "open-up" : "open-down"}`}
                >
                  <div className="graff-month-options" role="listbox" aria-label={monthPickerLabel}>
                    <button
                      type="button"
                      className={`graff-month-option ${selectedMonth == null ? "active" : ""}`}
                      disabled={!regionalInteraction}
                      onClick={() => this.handleMonthOptionClick(null)}
                    >
                      {allMonthsLabel}
                    </button>
                    {availableMonthIndices.map((idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`graff-month-option ${selectedMonth === idx ? "active" : ""}`}
                        disabled={!regionalInteraction}
                        onClick={() => this.handleMonthOptionClick(idx)}
                      >
                        {monthNamesFull[idx]}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="view-mode-toggle compact-toggle graff-inline-toggle">
              <button
                className={`view-button compact`}
                onClick={this.switchToTable}
                title={viewTableLabel}
                aria-label={viewTableLabel}
              >
                <span className="view-button-icon" aria-hidden="true">
                  <svg
                    className="view-button-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="6" y="4" width="12" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M9 9H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M9 13H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M9 17H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <rect x="9" y="2.2" width="6" height="3" rx="1.2" fill="currentColor" opacity="0.22" />
                  </svg>
                </span>
              </button>
              <button
                className={`view-button compact active`}
                onClick={this.switchToGraph}
                title={viewGraphLabel}
                aria-label={viewGraphLabel}
              >
                <span className="view-button-icon" aria-hidden="true">
                  <svg
                    className="view-button-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 19.2H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M6.2 15.8L10.1 11.9L13.2 14.5L18 9.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="6.2" cy="15.8" r="1.3" fill="currentColor" opacity="0.24" />
                    <circle cx="10.1" cy="11.9" r="1.3" fill="currentColor" opacity="0.24" />
                    <circle cx="13.2" cy="14.5" r="1.3" fill="currentColor" opacity="0.24" />
                    <circle cx="18" cy="9.8" r="1.3" fill="currentColor" opacity="0.24" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Chart area - center */}
        <div className="graff-chart-area">
          <div className="graph-svg-wrap" ref={this.graphSvgWrapRef}>
            <svg
              viewBox={`0 0 ${graphWidth} ${graphHeight}`}
              preserveAspectRatio="xMidYMid meet"
              width="100%"
              height="100%"
              className="graph-svg"
              onMouseMove={handleChartMouseMove}
              onMouseLeave={handleChartMouseLeave}
              onClick={handleChartClick}
            >
              <defs>
                <filter
                  id="toolinfoShadow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="4"
                    stdDeviation="8"
                    floodColor="rgba(96, 165, 250, 0.28)"
                    floodOpacity="1"
                  />
                </filter>
                <linearGradient
                  id="minMaxFill"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#94a3b8", stopOpacity: 0.16 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#94a3b8", stopOpacity: 0.02 }}
                  />
                </linearGradient>
                {lineSeries.map((series) => (
                  <linearGradient
                    key={`area-gradient-${series.key}`}
                    id={`areaFill-${series.key}`}
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: series.color, stopOpacity: 0.26 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: series.color, stopOpacity: 0.03 }}
                    />
                  </linearGradient>
                ))}
                <filter id="dotGlow">
                  <feGaussianBlur stdDeviation="2.4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="lineGlow">
                  <feGaussianBlur stdDeviation="2.2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Subtle background fill for chart area */}
              <rect
                x={padding.left}
                y={padding.top}
                width={chartWidth}
                height={chartHeight}
                fill="transparent"
                stroke="none"
                rx="0"
              />

              {/* Chart content */}
              <g>
                {/* Grid lines */}
                <g className="grid">
                  {yAxisTickValues.map((value) => {
                    const y = yScale(value);
                    return (
                      <g key={value}>
                        <text
                          x={padding.left - 12}
                          y={y + 4}
                          textAnchor="end"
                          fontSize={axisTickFont}
                          fill={themeText}
                          fontWeight="400"
                          fontFamily="'Manrope', sans-serif"
                        >
                          {value.toFixed(2)}
                        </text>
                      </g>
                    );
                  })}

                  <line
                    x1={padding.left}
                    y1={padding.top}
                    x2={padding.left}
                    y2={padding.top + chartHeight}
                    stroke={themeGrid}
                    strokeWidth="1.2"
                  />
                  <line
                    x1={padding.left}
                    y1={padding.top + chartHeight}
                    x2={padding.left + chartWidth}
                    y2={padding.top + chartHeight}
                    stroke={themeGrid}
                    strokeWidth="1.2"
                  />
                </g>

                {false && minMaxAreaPath && (
                  <path
                    d={minMaxAreaPath}
                    fill="url(#minMaxFill)"
                    fillOpacity={1}
                  />
                )}
                {lineSeries.map((series, seriesIdx) => (
                  <g key={series.key}>
                    {series.areaPath && finalIndices.length <= 2 && (
                      <path
                        d={series.areaPath}
                        fill={`url(#areaFill-${series.key})`}
                        opacity={0.92}
                      />
                    )}
                    {series.path && (
                      <path
                        className="graff-line-path"
                        d={series.path}
                        pathLength={100}
                        strokeDasharray={100}
                        strokeDashoffset={100}
                        fill="none"
                        stroke={series.color}
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          filter: "url(#lineGlow)",
                          opacity: 0.95,
                          animationDelay: `${70 + seriesIdx * 130}ms`,
                        }}
                        onMouseMove={(e) => {
                          if (!isMultiIndexMode) return;
                          e.stopPropagation();
                          const svg = e.currentTarget.ownerSVGElement;
                          if (!svg) return;
                          const rect = svg.getBoundingClientRect();
                          const svgX =
                            ((e.clientX - rect.left) / rect.width) * graphWidth;
                          const point = findNearestSeriesPoint(
                            svgX,
                            series.key,
                          );
                          if (point) {
                            setChartTooltipForIndex(series.key, point);
                          }
                        }}
                      />
                    )}
                    {series.points.map((d, i) => {
                      const localDateStr = this.formatLocalDateYmd(d.date);
                      const isActive =
                        !!selectedNdviDate &&
                        localDateStr === selectedNdviDate &&
                        (!isMultiIndexMode ||
                          this.state.selectedChartIndexKey === series.key);
                      const radius = isActive ? 6.4 : 4.2;
                      const strokeWidth = isActive ? 2.4 : 1.6;
                      return (
                        <circle
                          className="graff-line-dot"
                          key={`${series.key}-${i}`}
                          cx={d.x}
                          cy={d.y}
                          r={radius}
                          fill={series.color}
                          stroke="#f8fafc"
                          strokeWidth={strokeWidth}
                          filter={isActive ? "url(#dotGlow)" : undefined}
                          style={{
                            transition: "r 0.2s ease, filter 0.2s ease",
                            animationDelay: `${160 + seriesIdx * 120 + i * 28}ms`,
                          }}
                          onMouseMove={(e) => {
                            if (!isMultiIndexMode) return;
                            e.stopPropagation();
                            setChartTooltipForIndex(series.key, {
                              date: d.date,
                              value: d.value,
                              min: d.min,
                              max: d.max,
                              sourceIndex: d.sourceIndex,
                            });
                          }}
                        >
                          <title>
                            {`${series.key.toUpperCase()}: ${d.value.toFixed(4)}`}
                            {"\n"}
                            {d.date.toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                            })}
                          </title>
                        </circle>
                      );
                    })}
                  </g>
                ))}

                {monthTickPoints.map((tick, i) => (
                  <text
                    key={i}
                    x={tick.x}
                    y={monthTickY}
                    textAnchor="middle"
                    fontSize={monthTickFont}
                    fill={themeText}
                    fontWeight="400"
                    fontFamily="'Manrope', sans-serif"
                  >
                    {tick.label}
                  </text>
                ))}

                <text
                  x={yAxisTitleX}
                  y={padding.top + chartHeight / 2}
                  textAnchor="middle"
                  fontSize={yAxisTitleFont}
                  fill={themeText}
                  fontWeight="400"
                  fontFamily="'Manrope', sans-serif"
                  letterSpacing="0.5"
                  transform={`rotate(-90, ${yAxisTitleX}, ${padding.top + chartHeight / 2})`}
                >
                  INDEX
                </text>
                {/* X-axis title removed by request */}
              </g>

              {/* Vertical crosshair + min/max/index toolinfo */}
              {chartTooltip &&
                (() => {
                  const tooltipIndexKey = chartTooltip.indexKey;
                  const pt = chartTooltip.point;
                  const lineX = xScale(pt.date, pt.sourceIndex);
                  const yVal = yScale(pt.value);
                  const yMin = pt.min != null ? yScale(pt.min) : null;
                  const yMax = pt.max != null ? yScale(pt.max) : null;
                  const pad = 12;
                  const lineH = 16;
                  const boxW = 188;
                  const headerH = 22;
                  const boxH = headerH + 4 + lineH * 3 + pad;
                  // Center tooltip on the hovered point’s X; clamp inside plot area
                  let boxX = lineX - boxW / 2;
                  const minBoxX = padding.left + 4;
                  const maxBoxX = padding.left + chartWidth - boxW - 4;
                  boxX = Math.max(minBoxX, Math.min(boxX, maxBoxX));
                  // Inline SVG tooltip hidden; using fixed floating tooltip above widget.
                  const boxY = -10000;
                  const lineHt = 12;
                  const minStr = pt.min != null ? pt.min.toFixed(4) : "—";
                  const maxStr = pt.max != null ? pt.max.toFixed(4) : "—";
                  const valStr = pt.value.toFixed(4);
                  const indicatorColor = indexColorMap[tooltipIndexKey] || "#fbbf24";
                  const dateLocale = language === "ru" ? "ru-RU" : "en-GB";
                  const dateStr = pt.date.toLocaleDateString(dateLocale, {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  });
                  return (
                    <g className="graph-crosshair" pointerEvents="none">
                      <line
                        x1={lineX}
                        y1={padding.top}
                        x2={lineX}
                        y2={padding.top + chartHeight}
                        stroke="rgba(16, 185, 129, 0.4)"
                        strokeWidth={1.5}
                        strokeDasharray="6,4"
                      />
                      {yMin != null && (
                        <line
                          x1={lineX - lineHt / 2}
                          y1={yMin}
                          x2={lineX + lineHt / 2}
                          y2={yMin}
                          stroke="#f87171"
                          strokeWidth={2}
                        />
                      )}
                      {yMax != null && (
                        <line
                          x1={lineX - lineHt / 2}
                          y1={yMax}
                          x2={lineX + lineHt / 2}
                          y2={yMax}
                          stroke="#34d399"
                          strokeWidth={2}
                        />
                      )}
                      <line
                        x1={lineX - lineHt / 2}
                        y1={yVal}
                        x2={lineX + lineHt / 2}
                        y2={yVal}
                        stroke="#fbbf24"
                        strokeWidth={2}
                      />
                      <rect
                        x={boxX}
                        y={boxY}
                        width={boxW}
                        height={boxH}
                        rx={10}
                        ry={10}
                        fill={tooltipBg}
                        stroke={tooltipBorder}
                        strokeWidth={1.5}
                        filter="url(#toolinfoShadow)"
                      />
                      <rect
                        x={boxX}
                        y={boxY}
                        width={boxW}
                        height={headerH}
                        rx={10}
                        ry={0}
                        fill={tooltipHeaderBg}
                      />
                      <rect
                        x={boxX}
                        y={boxY + headerH}
                        width={boxW}
                        height={1}
                        fill={tooltipBorder}
                      />
                      <text
                        x={boxX + pad}
                        y={boxY + 15}
                        fontSize={tooltipFont}
                        fill={themeText}
                        fontWeight="400"
                      >
                        {language === "ru"
                          ? "Дата"
                          : language === "uz_lat"
                            ? "Sana"
                            : "Сана"}
                      </text>
                      <text
                        x={boxX + boxW - pad}
                        y={boxY + 15}
                        fontSize={tooltipFont}
                        fill={themeText}
                        fontWeight="400"
                        textAnchor="end"
                      >
                        {dateStr}
                      </text>
                      <text
                        x={boxX + pad}
                        y={boxY + headerH + 4 + lineH}
                        fontSize={tooltipFont}
                        fill={themeText}
                        fontWeight="400"
                      >
                        {language === "ru"
                          ? "Макс"
                          : language === "uz_lat"
                            ? "Max"
                            : "Макс"}
                      </text>
                      <text
                        x={boxX + boxW - pad}
                        y={boxY + headerH + 4 + lineH}
                        fontSize={tooltipFont}
                        fill="#059669"
                        fontWeight="400"
                        textAnchor="end"
                      >
                        {maxStr}
                      </text>
                      <text
                        x={boxX + pad}
                        y={boxY + headerH + 4 + lineH * 2}
                        fontSize={tooltipFont}
                        fill={themeText}
                        fontWeight="400"
                      >
                        {tooltipIndexKey.toUpperCase()}
                      </text>
                      <circle
                        cx={boxX + pad + 42}
                        cy={boxY + headerH + 4 + lineH * 2 - 4}
                        r={4}
                        fill={indicatorColor}
                      />
                      <text
                        x={boxX + boxW - pad}
                        y={boxY + headerH + 4 + lineH * 2}
                        fontSize={tooltipFont}
                        fill={indicatorColor}
                        fontWeight="400"
                        textAnchor="end"
                      >
                        {valStr}
                      </text>
                      <text
                        x={boxX + pad}
                        y={boxY + headerH + 4 + lineH * 3}
                        fontSize={tooltipFont}
                        fill={themeText}
                        fontWeight="400"
                      >
                        {language === "ru"
                          ? "Мин"
                          : language === "uz_lat"
                            ? "Min"
                            : "Мин"}
                      </text>
                      <text
                        x={boxX + boxW - pad}
                        y={boxY + headerH + 4 + lineH * 3}
                        fontSize={tooltipFont}
                        fill="#dc2626"
                        fontWeight="400"
                        textAnchor="end"
                      >
                        {minStr}
                      </text>
                    </g>
                  );
                })()}
            </svg>
            {floatingTooltip &&
              ReactDOM.createPortal(
                <div
                  style={{
                    position: "fixed",
                    left: `${floatingTooltip.left}px`,
                    top: `${floatingTooltip.top}px`,
                    width: "188px",
                    zIndex: 2147483000,
                    pointerEvents: "none",
                    borderRadius: "10px",
                    background: tooltipBg,
                    border: `1.5px solid ${tooltipBorder}`,
                    boxShadow: "0 14px 32px rgba(15, 23, 42, 0.25)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "22px",
                      background: tooltipHeaderBg,
                      borderBottom: `1px solid ${tooltipBorder}`,
                      padding: "4px 12px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "10px",
                      color: themeText,
                    }}
                  >
                    <span>{language === "ru" ? "Дата" : language === "uz_lat" ? "Sana" : "Сана"}</span>
                    <span>{floatingTooltip.dateStr}</span>
                  </div>
                  <div style={{ padding: "6px 12px 8px", fontSize: "10px", lineHeight: "16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", color: themeText }}>
                      <span>{language === "ru" ? "Макс" : language === "uz_lat" ? "Max" : "Макс"}</span>
                      <span style={{ color: "#059669" }}>{floatingTooltip.maxStr}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: themeText }}>
                      <span>
                        {floatingTooltip.key.toUpperCase()}{" "}
                        <span
                          style={{
                            display: "inline-block",
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: floatingTooltip.indicatorColor,
                            marginLeft: 4,
                          }}
                        />
                      </span>
                      <span style={{ color: floatingTooltip.indicatorColor }}>
                        {floatingTooltip.valStr}
                      </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: themeText }}>
                      <span>{language === "ru" ? "Мин" : language === "uz_lat" ? "Min" : "Мин"}</span>
                      <span style={{ color: "#dc2626" }}>{floatingTooltip.minStr}</span>
                    </div>
                  </div>
                </div>,
                document.body,
              )}
          </div>
        </div>
      </div>
    );
  };
  render() {
    const {
      loading,
      error,
      records,
      isDarkTheme,
      connectionStatus,
      selecteduniqueid,
      loadingMore,
      hasMoreRecords,
      configuredFields,
      regionalFilters,
      language,
      searchText = "",
      searchError = null,
      viewMode,
    } = this.state;

    const viewTableLabel =
      language === "ru"
        ? "Таблица"
        : language === "uz_lat"
          ? "Jadval"
          : "Жадвал";
    const viewGraphLabel =
      language === "ru"
        ? "График"
        : language === "uz_lat"
          ? "Grafik"
          : "График";

    const uniqueIdHeader =
      language === "ru"
        ? "Uniqueid"
        : language === "uz_lat"
          ? "Uniqueid"
          : "Uniqueid";
    const vhHeaderLabel =
      language === "ru"
        ? "Состояние (ВХ)"
        : language === "uz_lat"
          ? "Holat (ВХ)"
          : "Ҳолат (ВХ)";

    const activeFiltersLabel =
      language === "ru"
        ? "Активные фильтры"
        : language === "uz_lat"
          ? "Faol filtrlar"
          : "Фаол фильтрлар";

    const viloyatLabel =
      language === "ru"
        ? "Область"
        : language === "uz_lat"
          ? "Viloyat"
          : "Вилоят";
    const tumanLabel =
      language === "ru" ? "Район" : language === "uz_lat" ? "Tuman" : "Туман";
    const regionLabel =
      language === "ru"
        ? "Регион"
        : language === "uz_lat"
          ? "Region"
          : "Регион";
    const districtLabel =
      language === "ru" ? "Район" : language === "uz_lat" ? "Tuman" : "Туман";
    const yilLabel =
      language === "ru" ? "Год" : language === "uz_lat" ? "Yil" : "Йил";
    const turiLabel =
      language === "ru"
        ? "Тип посева"
        : language === "uz_lat"
          ? "Ekin turi"
          : "Экин тури";
    const vhLabel = language === "uz_lat" ? "VH" : "ВХ";
    const maydonLabel =
      language === "ru"
        ? "Площадь"
        : language === "uz_lat"
          ? "Maydon"
          : "Майдон";
    const nameLabel =
      language === "ru" ? "Имя" : language === "uz_lat" ? "Nom" : "Ном";
    const shapeLengLabel =
      language === "ru"
        ? "Длина границы"
        : language === "uz_lat"
          ? "Chegara uzunligi"
          : "Чегара узунлиғи";
    const globalIdLabel =
      language === "ru"
        ? "Глобальный ID"
        : language === "uz_lat"
          ? "Global ID"
          : "Глобал ID";
    const fNameLabel =
      language === "ru"
        ? "Название фермера"
        : language === "uz_lat"
          ? "Fermer nomi"
          : "Фермер номи";
    const fInnLabel =
      language === "ru" ? "ИНН" : language === "uz_lat" ? "STIR" : "СТИР";
    const fCadLabel =
      language === "ru"
        ? "Кадастровый номер"
        : language === "uz_lat"
          ? "Kadastr raqami"
          : "Кадастр рақами";
    const yldLabel =
      language === "ru"
        ? "Урожайность"
        : language === "uz_lat"
          ? "Hosildorlik"
          : "Ҳосилдорлик";
    const numericIdLabel =
      language === "ru"
        ? "Числовой ID"
        : language === "uz_lat"
          ? "Raqamli ID"
          : "Рақамли ID";
    const tableTitle =
      language === "ru"
        ? "Jadval"
        : language === "uz_lat"
          ? "Jadval"
          : "Жадвал";

    const themeClass = isDarkTheme ? "dark-theme" : "light-theme";
    const regionalInteraction = this.isRegionalInteractionEnabled();
    const isInitializing =
      connectionStatus === "connecting" || connectionStatus === "idle";

    // 🔎 Filter records by search text if provided
    const getFilteredRecords = (): RecordData[] => {
      const term = (searchText || "").trim().toLowerCase();
      if (!term) return records;

      return records.filter((record) => {
        const uid = String(record.uniqueid || "").toLowerCase();
        const fname = String(record.f_name || "").toLowerCase();
        return uid.includes(term) || fname.includes(term);
      });
    };

    const filteredRecords = getFilteredRecords();

    const needYear = connectionStatus === "connected" && !regionalFilters?.yil;
    const needViloyat = false; // republic-wide by default

    const activeFilterCount =
      Object.values(this.state.externalFilters || {}).filter(Boolean).length +
      Object.values(this.state.localFilters || {}).filter(Boolean).length +
      Object.values(regionalFilters || {}).filter(Boolean).length;

    const displayFields = this.getDisplayFields();

    return (
      <div className={`kadastr-status-card ${themeClass}`}>
        {/* Hidden mounts for DS/Map */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
            opacity: 0,
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

        <div className="kadastr-status-content">
          {/* Conditional Rendering based on viewMode */}
          {viewMode === "table" ? (
            <>
              <div className="kadastr-table-topbar">
                <div className="kadastr-table-top-label">{tableTitle}</div>
                <div className="view-mode-toggle compact-toggle">
                  <button
                    className={`view-button compact ${viewMode === "table" ? "active" : ""}`}
                    onClick={this.switchToTable}
                    title={viewTableLabel}
                    aria-label={viewTableLabel}
                  >
                    <span className="view-button-icon" aria-hidden="true">
                      <svg
                        className="view-button-svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="6" y="4" width="12" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M9 9H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M9 13H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M9 17H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <rect x="9" y="2.2" width="6" height="3" rx="1.2" fill="currentColor" opacity="0.22" />
                      </svg>
                    </span>
                  </button>
                  <button
                    className={`view-button compact ${viewMode === "graph" ? "active" : ""}`}
                    onClick={this.switchToGraph}
                    title={viewGraphLabel}
                    aria-label={viewGraphLabel}
                  >
                    <span className="view-button-icon" aria-hidden="true">
                      <svg
                        className="view-button-svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 19.2H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M6.2 15.8L10.1 11.9L13.2 14.5L18 9.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="6.2" cy="15.8" r="1.3" fill="currentColor" opacity="0.24" />
                        <circle cx="10.1" cy="11.9" r="1.3" fill="currentColor" opacity="0.24" />
                        <circle cx="13.2" cy="14.5" r="1.3" fill="currentColor" opacity="0.24" />
                        <circle cx="18" cy="9.8" r="1.3" fill="currentColor" opacity="0.24" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              {/* Search actions removed by request */}

              {searchError && (
                <div className="kadastr-status-error" style={{ padding: 8 }}>
                  <p>{String(searchError)}</p>
                </div>
              )}

              {/* ===================== MAIN STATE RENDER ===================== */}
              {configuredFields.length === 0 && !isInitializing ? (
                <div className="kadastr-status-error">
                  <h3>Виджет соҳибалари талаб қилинади</h3>
                  <p>Виджет майдонларини созламаларда танланг.</p>
                </div>
              ) : isInitializing ? (
                <div className="kadastr-status-loading-container">
                  <div className="regional-modern-loader" aria-hidden="true">
                    <span className="regional-modern-loader-dot" />
                    <span className="regional-modern-loader-dot" />
                    <span className="regional-modern-loader-dot" />
                  </div>
                  <p>Виджет ишга туширилмоқда...</p>
                </div>
              ) : connectionStatus === "failed" ? (
                <div className="kadastr-status-error">
                  <p>
                    {error || "Харитага улана олмади. Qayta urinib ko'ring."}
                  </p>
                  <button
                    onClick={this.retryMapConnection}
                    className="kadastr-status-retry-button"
                  >
                    Уланишни қайта уриниш
                  </button>
                </div>
              ) : error ? (
                <div className="kadastr-status-error">
                  <p>{error}</p>
                  <button
                    onClick={this.fetchData}
                    className="kadastr-status-retry-button"
                  >
                    Qayta urinish
                  </button>
                </div>
              ) : needYear ? (
                <div className="kadastr-status-loading-container">
                  <div className="regional-modern-loader" aria-hidden="true">
                    <span className="regional-modern-loader-dot" />
                    <span className="regional-modern-loader-dot" />
                    <span className="regional-modern-loader-dot" />
                  </div>
                </div>
              ) : connectionStatus === "connected" && loading ? (
                <div className="kadastr-status-loading-container">
                  <div className="regional-modern-loader" aria-hidden="true">
                    <span className="regional-modern-loader-dot" />
                    <span className="regional-modern-loader-dot" />
                    <span className="regional-modern-loader-dot" />
                  </div>
                  <p>Маълумот юкланмоқда...</p>
                </div>
              ) : connectionStatus === "connected" && filteredRecords.length === 0 ? (
                <div className="kadastr-status-no-data">
                  <h3>Маълумот мавжуд эмас</h3>
                  <p>
                    Фильтрларингизни ўзгартириб кўринг ёки кейинроқ қайта
                    тексеринг.
                  </p>

                  <div className="filter-summary">
                    <small>
                      {activeFiltersLabel}: {activeFilterCount}
                    </small>
                    <br />
                    <small>
                      {viloyatLabel}:{" "}
                      {regionalFilters.viloyat
                        ? translateForDisplay(regionalFilters.viloyat, language)
                        : "—"}
                      , {tumanLabel}:{" "}
                      {regionalFilters.tuman
                        ? translateForDisplay(regionalFilters.tuman, language)
                        : "—"}
                      , {yilLabel}: {regionalFilters.yil || "—"}, {turiLabel}:{" "}
                      {regionalFilters.uzspace || "—"}, {vhLabel}:{" "}
                      {regionalFilters.vh
                        ? getLocalizedVhCategoryLabel(
                            regionalFilters.vh,
                            language,
                          )
                        : "—"}
                    </small>
                  </div>

                  <button
                    onClick={this.fetchData}
                    className="kadastr-status-retry-button"
                  >
                    Янгилаш
                  </button>
                </div>
              ) : (
                <div
                  className="kadastr-status-table-container"
                  ref={this.tableContainerRef}
                >
                  <table className="kadastr-status-table">
                    <thead>
                      <tr>
                        {displayFields.map((fieldName) => {
                          const isVh = fieldName.toLowerCase() === "vh";
                          const lower = fieldName.toLowerCase();
                          let label: string;
                          if (isVh) label = vhHeaderLabel;
                          else if (lower === "tuman") label = tumanLabel;
                          else if (lower === "viloyat") label = viloyatLabel;
                          else if (lower === "region") label = regionLabel;
                          else if (lower === "district") label = districtLabel;
                          else if (lower === "yil") label = yilLabel;
                          else if (lower === "turi" || lower === "uzspace")
                            label = turiLabel;
                          else if (
                            lower === "shape_leng" ||
                            lower === "shape_length"
                          )
                            label = shapeLengLabel;
                          else if (
                            lower === "globalid_1" ||
                            lower === "globalid" ||
                            lower.startsWith("globalid")
                          )
                            label = globalIdLabel;
                          else if (lower === "f_name") label = fNameLabel;
                          else if (lower === "f_inn") label = fInnLabel;
                          else if (lower === "f_cad") label = fCadLabel;
                          else if (lower === "yld") label = yldLabel;
                          else if (lower === "numeric_id")
                            label = numericIdLabel;
                          else if (lower === "uniqueid") label = uniqueIdHeader;
                          else if (lower === "maydon") label = maydonLabel;
                          else if (
                            lower.includes("maydon") ||
                            lower.includes("area")
                          )
                            label = maydonLabel;
                          else if (
                            lower.includes("name") ||
                            lower.includes("nom")
                          )
                            label = nameLabel;
                          else label = this.getFieldDisplayName(fieldName);
                          return <th key={fieldName}>{label}</th>;
                        })}
                      </tr>
                    </thead>

                    <tbody>
                      {filteredRecords.map((record, index) => {
                        const recordId =
                          record.uniqueid || record.objectid?.toString();
                        const isSelected =
                          selecteduniqueid &&
                          recordId &&
                          (recordId === selecteduniqueid ||
                            recordId.replace(/[{}]/g, "") ===
                              selecteduniqueid.replace(/[{}]/g, ""));

                        return (
                          <tr
                            key={`${record.uniqueid || record.objectid}-${index}`}
                            onClick={() =>
                              regionalInteraction &&
                              this.handleRowClick(record)
                            }
                            className={isSelected ? "selected-row" : ""}
                            title={
                              regionalInteraction
                                ? "Харитада кўрсатиш ва график учун танлаш"
                                : ""
                            }
                            style={{
                              cursor: regionalInteraction
                                ? "pointer"
                                : "default",
                            }}
                          >
                            {displayFields.map((fieldName) => {
                              const isVh = fieldName.toLowerCase() === "vh";
                              const rawValue = isVh
                                ? this.getStatusValueForRecord(record)
                                : record[fieldName];
                              return (
                                <td
                                  key={fieldName}
                                  title={this.formatFieldValue(
                                    fieldName,
                                    rawValue,
                                  )}
                                >
                                  {this.formatFieldValue(fieldName, rawValue)}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  {loadingMore && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 16,
                        color: "rgba(15, 23, 42, 0.75)",
                      }}
                    >
                      <div className="regional-modern-loader" aria-hidden="true">
                        <span className="regional-modern-loader-dot" />
                        <span className="regional-modern-loader-dot" />
                        <span className="regional-modern-loader-dot" />
                      </div>
                      <span style={{ marginLeft: 12 }}>Яна юкланмоқда...</span>
                    </div>
                  )}

                  {!hasMoreRecords && records.length > 0 && (
                    <div
                      style={{
                        textAlign: "center",
                        padding: 16,
                        color: "rgba(15, 23, 42, 0.65)",
                        fontSize: 14,
                      }}
                    >
                      {searchText\n                        ? `${filteredRecords.length} та ёзув топилди`\n                        : `${records.length} та ёзув юкланди • Натижа тугади`}
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            /* Graph View */
            <>
              {this.renderGraph()}
            </>
          )}
        </div>
      </div>
    );
  }
}
