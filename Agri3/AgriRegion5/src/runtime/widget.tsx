// AgriRegion - Pure UI widget that informs AgriFilter of region selections
// Does NOT filter map directly, only displays data and notifies AgriFilter

import FeatureLayer from "esri/layers/FeatureLayer";
import { JimuMapView, JimuMapViewComponent } from "jimu-arcgis";
import {
  AllWidgetProps,
  DataSourceComponent,
  DataSourceManager,
  QueriableDataSource,
  React,
} from "jimu-core";
import { Button } from "jimu-ui";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./AgriRegion.css";

// --- Uzbek/Russian transliteration helpers (display-only) ---
type AgriDisplayLanguage = "uz_cyr" | "uz_lat" | "ru";
type WidgetSize = "xs" | "sm" | "md" | "lg";

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

function translateForDisplay(
  text: string,
  language: AgriDisplayLanguage,
): string {
  if (!text) return text;
  const str = String(text).trim();
  if (!str) return str;

  switch (language) {
    case "uz_lat":
      // Always convert Cyrillic -> Latin (works for mixed-script strings too).
      return uzCyrillicToLatin(str);
    case "uz_cyr":
      // Always convert Latin -> Cyrillic (works for mixed-script strings too).
      return uzLatinToCyrillic(str);
    case "ru":
      // For Russian UI we keep place names readable in Cyrillic; ensure Latin parts convert too.
      return uzLatinToCyrillic(str);
    default:
      return str;
  }
}

const BackIcon = () => (
  <svg viewBox="0 0 24 24" className="regional-control-icon" aria-hidden="true">
    <path
      d="M15 6L9 12l6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface RegionalDataItem {
  name: string;
  maydon: number;
  percentage?: number;
}

interface RegionTickPayload {
  value?: string;
}

interface AgriRegionState {
  regionalLoading: boolean;
  regionalError: string | null;
  regionalData: {
    viloyatlar: RegionalDataItem[];
    tumanlar: RegionalDataItem[];
    totalArea: number;
  };
  // Scope from master (lock)
  lockedViloyat: string | null;
  isLocked: boolean;

  // Current filters from AgriFilter
  currentFilters: {
    yil: string;
    viloyat: string;
    tuman: string;
    turi: string;
    vh: string;
  };

  // Navigation
  currentView: "viloyat" | "tuman";
  selectedViloyatForDrillDown: string | null;
  selectedRegion: string | null;

  // UI
  displayCount: number;
  sortOrder: "asc" | "desc";
  isDarkTheme: boolean;
  widgetSize: WidgetSize;

  // Map/DS
  activeMapView?: JimuMapView;
  featureLayer?: __esri.FeatureLayer;
  featureLayers: __esri.FeatureLayer[];
  dataSource?: QueriableDataSource;

  areaField: string | null;
  statMode: "sum" | "count";

  connectionStatus: "idle" | "connecting" | "connected" | "failed";
  language: "uz_cyr" | "uz_lat" | "ru";
}

export default class AgriRegion extends React.PureComponent<
  AllWidgetProps<any>,
  AgriRegionState
> {
  _isMounted = false;
  private _rootRef = React.createRef<HTMLDivElement>();
  private _resizeObserver: ResizeObserver | null = null;
  private _themeObserver: MutationObserver | null = null;

  REGIONAL_COLOR = "#00D2FF";

  constructor(props) {
    super(props);

    this.state = {
      regionalLoading: false,
      regionalError: null,
      regionalData: { viloyatlar: [], tumanlar: [], totalArea: 0 },
      lockedViloyat: null,
      isLocked: false,

      currentFilters: {
        yil: "",
        viloyat: "",
        tuman: "",
        turi: "",
        vh: "",
      },

      currentView: "viloyat",
      selectedViloyatForDrillDown: null,
      selectedRegion: null,

      displayCount: 10,
      sortOrder: "desc",
      isDarkTheme: this.detectIsDarkTheme(),
      widgetSize: "lg",

      activeMapView: undefined,
      featureLayer: undefined,
      featureLayers: [],
      dataSource: undefined,

      areaField: this.props.config?.areaField || null,
      statMode: this.props.config?.areaField ? "sum" : "count",

      connectionStatus: "idle",
      language: "uz_cyr",
    };
  }

  componentDidMount() {
    this._isMounted = true;

    // ONLY listen to master filter
    document.addEventListener(
      "masterFilterChanged",
      this.handleMasterFilterChange as EventListener,
    );

    this.setupResizeObserver();
    this.setupThemeObserver();
    this.syncThemeState();

    this.setState({ connectionStatus: "connecting" });
  }

  componentWillUnmount() {
    this._isMounted = false;
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
    if (this._themeObserver) {
      this._themeObserver.disconnect();
      this._themeObserver = null;
    }
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", this.syncThemeState);
    }
    document.removeEventListener(
      "masterFilterChanged",
      this.handleMasterFilterChange as EventListener,
    );
  }

  private detectIsDarkTheme = (): boolean => {
    if (typeof document === "undefined") return false;
    const themeAttr = document.documentElement.getAttribute("data-theme");
    const className = document.documentElement.className || "";
    const fromClass = /dark-theme|theme-dark|\bdark\b/i.test(className);

    if (typeof window !== "undefined") {
      const storedTheme = window.localStorage?.getItem("app_theme");
      if (storedTheme === "dark") return true;
      if (storedTheme === "light") return false;
    }

    if (themeAttr === "dark") return true;
    if (themeAttr === "light") return false;
    return fromClass;
  };

  private syncThemeState = () => {
    if (!this._isMounted) return;
    const nextIsDark = this.detectIsDarkTheme();
    if (nextIsDark !== this.state.isDarkTheme) {
      this.setState({ isDarkTheme: nextIsDark });
    }
  };

  private setupThemeObserver = () => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const root = document.documentElement;
    if (typeof MutationObserver !== "undefined") {
      this._themeObserver = new MutationObserver(() => this.syncThemeState());
      this._themeObserver.observe(root, {
        attributes: true,
        attributeFilter: ["data-theme", "class"],
      });
    }

    window.addEventListener("storage", this.syncThemeState);
  };

  private resolveWidgetSize = (width: number): WidgetSize => {
    if (width < 360) return "xs";
    if (width < 520) return "sm";
    if (width < 760) return "md";
    return "lg";
  };

  private setupResizeObserver = () => {
    if (
      typeof window === "undefined" ||
      typeof ResizeObserver === "undefined"
    ) {
      return;
    }

    const updateSize = () => {
      const host = this._rootRef.current;
      if (!host || !this._isMounted) return;
      const nextSize = this.resolveWidgetSize(host.clientWidth || 0);
      if (nextSize !== this.state.widgetSize) {
        this.setState({ widgetSize: nextSize });
      }
    };

    updateSize();
    this._resizeObserver = new ResizeObserver(() => updateSize());
    if (this._rootRef.current) {
      this._resizeObserver.observe(this._rootRef.current);
    }
  };

  /* ---------------------- Master Filter Listener ---------------------- */

  private handleMasterFilterChange = (event: Event) => {
    if (!this._isMounted) return;

    const d: any = (event as CustomEvent).detail || {};
    if (!d.filters) return;

    const f = d.filters;

    const next = {
      yil: f.yil || "",
      viloyat: f.viloyat || "",
      tuman: f.tuman || "",
      turi: f.turi || "",
      // ✅ DO NOT care about vh here
    };

    const lockedViloyat = d?.scope?.lockedViloyat
      ? String(d.scope.lockedViloyat)
      : null;
    const isLocked = Boolean(d?.scope?.locked);
    const language: "uz_cyr" | "uz_lat" | "ru" =
      (f.language as any) || this.state.language || "uz_cyr";

    const prev = this.state.currentFilters;

    // ✅ IGNORE VH-only changes (and ignore noise)
    const languageChanged = language !== this.state.language;
    const meaningfulChanged =
      next.yil !== prev.yil ||
      next.viloyat !== prev.viloyat ||
      next.tuman !== prev.tuman ||
      next.turi !== prev.turi ||
      lockedViloyat !== this.state.lockedViloyat ||
      isLocked !== this.state.isLocked;

    // If only language changed, update UI strings without re-fetching data.
    if (!meaningfulChanged && languageChanged) {
      this.setState({ language, regionalError: null }, () => {
        // UI re-renders automatically; no data refetch needed.
      });
      return;
    }

    if (!meaningfulChanged) return;

    console.log("[AgriRegion] Received master filter update (meaningful):", {
      ...next,
      lockedViloyat,
      isLocked,
    });

    this.setState(
      {
        currentFilters: {
          ...this.state.currentFilters,
          yil: next.yil,
          viloyat: next.viloyat,
          tuman: next.tuman,
          turi: next.turi,
        },
        lockedViloyat,
        isLocked,
        language,
        regionalError: null,
      },
      () => {
        // ✅ If user is locked, "top" view should effectively be tumans of locked viloyat
        const effectiveViloyat = lockedViloyat || next.viloyat || "";

        if (next.tuman) {
          this.setState(
            {
              currentView: "tuman",
              selectedViloyatForDrillDown: effectiveViloyat,
              selectedRegion: next.tuman,
            },
            this.fetchRegionalDataDeduped,
          );
        } else if (effectiveViloyat) {
          this.setState(
            {
              currentView: "tuman",
              selectedViloyatForDrillDown: effectiveViloyat,
              selectedRegion: null,
            },
            this.fetchRegionalDataDeduped,
          );
        } else {
          this.setState(
            {
              currentView: "viloyat",
              selectedViloyatForDrillDown: null,
              selectedRegion: null,
            },
            this.fetchRegionalDataDeduped,
          );
        }
      },
    );
  };

  /* ---------------------- Notify AgriFilter ---------------------- */

  private notifyAgriFilter = (
    updates: Partial<AgriRegionState["currentFilters"]>,
  ) => {
    const detail = {
      ...updates,
      source: "AgriRegion",
      timestamp: Date.now(),
    };

    console.log("[AgriRegion] Notifying AgriFilter:", detail);

    document.dispatchEvent(
      new CustomEvent("widgetSelectionChanged", {
        detail,
        bubbles: true,
      }),
    );
  };

  /* ---------------------- Map Connection ---------------------- */

  onActiveViewChange = async (jimuMapView: JimuMapView) => {
    if (!jimuMapView) return;

    try {
      const featureLayers =
        await this.resolveFeatureLayersFromUseDataSources(jimuMapView);
      const featureLayer = featureLayers[0];
      if (!featureLayer) throw new Error("No feature layer found");

      const area = this.detectAreaField(featureLayer);
      const statMode: "sum" | "count" = area ? "sum" : "count";

      this.setState({
        activeMapView: jimuMapView,
        featureLayer,
        featureLayers,
        connectionStatus: "connected",
        regionalError: null,
        areaField: area,
        statMode,
      });
    } catch (err: any) {
      this.setState({
        regionalError: `Connection error: ${err?.message || err}`,
        connectionStatus: "failed",
      });
    }
  };

  private resolveFeatureLayerFromUseDataSource = async (
    jimuMapView: JimuMapView,
  ): Promise<__esri.FeatureLayer | null> => {
    if (!jimuMapView?.view?.map) return null;

    const useDs = this.props.useDataSources?.[0];
    if (!useDs?.dataSourceId) return null;

    return this.resolveFeatureLayerFromOneUseDataSource(useDs, jimuMapView);
  };

  private resolveFeatureLayerFromOneUseDataSource = async (
    useDs: any,
    jimuMapView: JimuMapView,
  ): Promise<__esri.FeatureLayer | null> => {
    if (!jimuMapView?.view?.map || !useDs?.dataSourceId) return null;

    const dsId = useDs.dataSourceId;
    const rootId = (useDs as any).rootDataSourceId;

    const jlvList: any[] = jimuMapView.getAllJimuLayerViews?.() || [];
    const matchByDsId = (id: string) =>
      jlvList.find(
        (lv) => lv?.layerDataSourceId === id || lv?.dataSourceId === id,
      );
    let jlv = matchByDsId(dsId) || (rootId ? matchByDsId(rootId) : null);
    if (jlv?.layer?.type === "feature") return jlv.layer as __esri.FeatureLayer;

    try {
      const ds: any = DataSourceManager.getInstance().getDataSource(dsId);
      if (ds?.getLayer) {
        const lyr = await ds.getLayer();
        if (lyr?.type === "feature") return lyr as __esri.FeatureLayer;
      }
      const url: string | undefined = ds?.url || ds?.layer?.url;
      if (url) {
        const layers = jimuMapView.view.map.layers.toArray() as any[];
        const cand = layers.find((ly: any) => ly?.url === url);
        if (cand?.type === "feature") return cand as __esri.FeatureLayer;
      }
    } catch {
      /* ignore */
    }

    return null;
  };

  private splitLabelTwoLines = (label: string): [string, string?] => {
    const safe = String(label || "").trim();
    if (!safe) return [""];
    if (safe.length <= 16) return [safe];

    const parts = safe.split(/\s+/).filter(Boolean);
    if (parts.length < 2) return [safe];

    const pivot = Math.ceil(parts.length / 2);
    const first = parts.slice(0, pivot).join(" ");
    const second = parts.slice(pivot).join(" ");
    return second ? [first, second] : [first];
  };

  private renderYAxisTick = ({
    x,
    y,
    payload,
  }: {
    x: number;
    y: number;
    payload: RegionTickPayload;
  }) => {
    const raw = String(payload?.value || "");
    const [line1, line2] = this.splitLabelTwoLines(raw);
    return (
      <text
        x={x - 5}
        y={y}
        style={{
          fill: "var(--region-text)",
          fontSize: "10px",
          textAnchor: "end",
          alignmentBaseline: "middle",
          cursor: "default",
          fontWeight: 400,
        }}
      >
        <tspan x={x - 5} dy={line2 ? -7 : 0}>
          {line1}
        </tspan>
        {line2 ? (
          <tspan x={x - 5} dy={14}>
            {line2}
          </tspan>
        ) : null}
      </text>
    );
  };

  private resolveFeatureLayersFromUseDataSources = async (
    jimuMapView: JimuMapView,
  ): Promise<__esri.FeatureLayer[]> => {
    const raw =
      (this.props.useDataSources as any)?.asMutable?.() ??
      this.props.useDataSources ??
      [];
    const useDss = Array.isArray(raw) ? raw : [];
    const layers: __esri.FeatureLayer[] = [];
    for (const useDs of useDss) {
      const layer = await this.resolveFeatureLayerFromOneUseDataSource(
        useDs,
        jimuMapView,
      );
      if (layer) layers.push(layer);
    }
    return layers;
  };

  private detectAreaField = (layer: FeatureLayer): string | null => {
    if (!layer?.fields) return null;
    const candidates = [
      "maydon",
      "maydon_ga",
      "maydon_ha",
      "area",
      "area_ga",
      "area_ha",
      "shape__area",
      "shape_area",
    ];
    const numericTypes = new Set([
      "double",
      "single",
      "integer",
      "small-integer",
      "long",
      "short",
      "float",
    ]);
    const fields = layer.fields;

    const cfg = (this.props.config?.areaField || "").toLowerCase();
    if (cfg) {
      const hit = fields.find(
        (f) => f.name.toLowerCase() === cfg && numericTypes.has(f.type as any),
      );
      if (hit) return hit.name;
    }

    for (const guess of candidates) {
      const f = fields.find((ff) => ff.name.toLowerCase() === guess);
      if (f && numericTypes.has(f.type as any)) return f.name;
    }

    const fallback = fields.find(
      (f) =>
        numericTypes.has(f.type as any) &&
        /maydon|area|ha|ga|shape/.test(f.name.toLowerCase()),
    );
    return fallback ? fallback.name : null;
  };

  onDataSourceCreated = (ds: QueriableDataSource) => {
    this.setState({ dataSource: ds });
  };

  /* ---------------------- Data Fetch ---------------------- */

  private escapeArcGIS(v: string): string {
    return v ? v.replace(/'/g, "''") : "";
  }
  private buildWhereForAggregates(
    viewOverride?: "viloyat" | "tuman",
    drillViloyatOverride?: string,
  ): string {
    const { currentFilters, lockedViloyat } = this.state;
    const view = viewOverride || this.state.currentView;

    // ✅ Effective viloyat for scoping
    const effectiveLock = lockedViloyat || "";
    const drillViloyat =
      drillViloyatOverride ||
      this.state.selectedViloyatForDrillDown ||
      effectiveLock ||
      currentFilters.viloyat ||
      "";

    const c: string[] = [];

    // ✅ Require YEAR only
    if (!currentFilters.yil) return "1=0";

    const yDigits =
      String(currentFilters.yil).match(/\b(18|19|20)\d{2}\b/)?.[0] ??
      String(currentFilters.yil).replace(/[^\d]/g, "");

    c.push(
      yDigits
        ? `yil LIKE '${yDigits}%'`
        : `yil LIKE '%${this.escapeArcGIS(currentFilters.yil)}%'`,
    );

    // ✅ HARD RULE: if locked, ALWAYS restrict to that viloyat (even in viloyat view)
    if (effectiveLock) {
      c.push(`viloyat='${this.escapeArcGIS(effectiveLock)}'`);
    } else {
      // ✅ Only narrow to viloyat when we are in tuman view
      if (view === "tuman" && drillViloyat) {
        c.push(`viloyat='${this.escapeArcGIS(drillViloyat)}'`);
      }
    }

    // ❌ DO NOT include currentFilters.turi here (per your architecture)
    // Optional: keep VH if you want VH to affect region bars
    if (currentFilters.vh) {
      c.push(`vh='${this.escapeArcGIS(currentFilters.vh)}'`);
    }

    return c.length ? c.join(" AND ") : "1=1";
  }

  private queryAggregates = async (
    groupField: string,
    whereOverride?: string,
  ): Promise<RegionalDataItem[]> => {
    const { featureLayers, featureLayer, areaField, statMode } = this.state;
    const layers = featureLayers?.length
      ? featureLayers
      : featureLayer
        ? [featureLayer]
        : [];
    if (!layers.length) return [];

    const sumByName: Record<string, number> = {};
    const where = whereOverride || this.buildWhereForAggregates();
    const outName = statMode === "sum" ? "sum_m" : "cnt_m";

    for (const fl of layers) {
      const layerForQuery = new FeatureLayer({ url: (fl as any).url });
      await layerForQuery.load();

      const q = layerForQuery.createQuery();
      q.where = where;
      q.groupByFieldsForStatistics = [groupField];
      q.returnGeometry = false;
      q.outStatistics = [
        {
          statisticType: statMode === "sum" ? "sum" : "count",
          onStatisticField:
            statMode === "sum"
              ? areaField || "1"
              : layerForQuery.objectIdField || "*",
          outStatisticFieldName: outName,
        } as any,
      ];
      q.orderByFields = [`${outName} DESC`];

      const res = await layerForQuery.queryFeatures(q);
      const feats = res?.features ?? [];
      for (const f of feats) {
        const attrs: any = f.attributes || {};
        const name = attrs[groupField];
        const val = Number(attrs[outName] ?? 0);
        if (!name || !(val > 0)) continue;
        const key = String(name);
        sumByName[key] = (sumByName[key] || 0) + val;
      }
    }

    return Object.entries(sumByName)
      .map(([name, maydon]) => ({ name, maydon }) as RegionalDataItem)
      .sort((a, b) => b.maydon - a.maydon);
  };

  private fetchRegionalData = async () => {
    if (!this._isMounted || this.state.connectionStatus !== "connected") return;

    const { currentFilters, lockedViloyat } = this.state;

    // ✅ Only require YEAR
    if (!currentFilters.yil) {
      this.setState({
        regionalData: { viloyatlar: [], tumanlar: [], totalArea: 0 },
        regionalLoading: false,
        regionalError: null,
        currentView: "viloyat",
        selectedViloyatForDrillDown: null,
        selectedRegion: null,
      });
      return;
    }

    this.setState({ regionalLoading: true, regionalError: null });

    try {
      const effectiveViloyat =
        lockedViloyat ||
        this.state.selectedViloyatForDrillDown ||
        currentFilters.viloyat ||
        "";

      // ✅ If locked OR we have a viloyat, show tuman view. Otherwise show viloyat view.
      const effectiveView: "viloyat" | "tuman" = effectiveViloyat
        ? "tuman"
        : "viloyat";

      const groupField = effectiveView === "viloyat" ? "viloyat" : "tuman";

      const where = this.buildWhereForAggregates(
        effectiveView,
        effectiveViloyat,
      );
      const rows = await this.queryAggregates(groupField, where);

      const totalArea = rows.reduce((s, r) => s + (r.maydon || 0), 0);
      const withPct = rows.map((r) => ({
        ...r,
        percentage: totalArea ? (r.maydon / totalArea) * 100 : 0,
      }));

      if (!this._isMounted) return;

      // ✅ Sync view state so UI matches the real effective view
      if (effectiveView === "tuman") {
        if (
          this.state.currentView !== "tuman" ||
          this.state.selectedViloyatForDrillDown !== effectiveViloyat
        ) {
          this.setState({
            currentView: "tuman",
            selectedViloyatForDrillDown: effectiveViloyat,
            selectedRegion: this.state.selectedRegion, // keep
          });
        }

        this.setState({
          regionalData: { viloyatlar: [], tumanlar: withPct, totalArea },
          regionalLoading: false,
          regionalError: null,
        });
      } else {
        if (this.state.currentView !== "viloyat") {
          this.setState({
            currentView: "viloyat",
            selectedViloyatForDrillDown: null,
            selectedRegion: null,
          });
        }

        this.setState({
          regionalData: { viloyatlar: withPct, tumanlar: [], totalArea },
          regionalLoading: false,
          regionalError: null,
        });
      }
    } catch (e: any) {
      if (!this._isMounted) return;
      this.setState({
        regionalError: `Failed to load data: ${e?.message || e}`,
        regionalLoading: false,
      });
    }
  };

  private _lastRegionalFetchKey = "";

  private fetchRegionalDataDeduped = async () => {
    const {
      currentFilters,
      currentView,
      selectedViloyatForDrillDown,
      lockedViloyat,
    } = this.state;

    const key = JSON.stringify({
      yil: currentFilters.yil || "",
      view: currentView,
      drillViloyat: selectedViloyatForDrillDown || "",
      lockedViloyat: lockedViloyat || "",
      vh: currentFilters.vh || "",
    });

    if (key === this._lastRegionalFetchKey) {
      console.log(
        "[AgriRegion] fetchRegionalData skipped (duplicate key):",
        key,
      );
      return;
    }

    this._lastRegionalFetchKey = key;
    await this.fetchRegionalData();
  };

  /* ---------------------- User Interactions ---------------------- */

  private handleRegionSelectionClick = (data) => {
    if (this.state.connectionStatus !== "connected" || !data?.name) return;

    const regionName = data.name;

    if (regionName === this.state.selectedRegion) {
      // Deselect
      this.setState({ selectedRegion: null }, () => {
        if (this.state.currentView === "tuman") {
          this.notifyAgriFilter({
            tuman: "",
            viloyat: this.state.selectedViloyatForDrillDown || "",
          });
        } else {
          this.notifyAgriFilter({ viloyat: "", tuman: "" });
        }
        // ❌ no fetch here needed, master will trigger it (and dedupe protects anyway)
      });
      return;
    }

    if (this.state.currentView === "viloyat") {
      // Drill down to tuman
      this.setState(
        {
          currentView: "tuman",
          selectedViloyatForDrillDown: regionName,
          selectedRegion: null,
        },
        async () => {
          // ✅ Optional immediate UI fetch (FAST), but protected from double fetch
          await this.fetchRegionalDataDeduped();

          this.notifyAgriFilter({ viloyat: regionName, tuman: "" });
        },
      );
      return;
    }

    // Select tuman
    this.setState({ selectedRegion: regionName }, () => {
      this.notifyAgriFilter({
        viloyat: this.state.selectedViloyatForDrillDown || "",
        tuman: regionName,
      });
    });
  };

  private navigateBack = () => {
    if (this.state.connectionStatus !== "connected") return;

    // ✅ If user is locked, "Back" should go to TUMAN list of locked viloyat
    if (this.state.lockedViloyat) {
      const lock = this.state.lockedViloyat;

      this.setState(
        {
          currentView: "tuman",
          selectedViloyatForDrillDown: lock,
          selectedRegion: null,
        },
        async () => {
          await this.fetchRegionalDataDeduped();
          // ✅ Only clear tuman; DO NOT attempt to clear viloyat (master is locked anyway)
          this.notifyAgriFilter({ tuman: "" });
        },
      );
      return;
    }

    // ✅ Normal (unlocked) behavior: clear viloyat/tuman in filters so fetchRegionalData loads viloyatlar
    this.setState(
      {
        currentView: "viloyat",
        selectedViloyatForDrillDown: null,
        selectedRegion: null,
        currentFilters: {
          ...this.state.currentFilters,
          viloyat: "",
          tuman: "",
          turi: "",
          vh: "",
        },
      },
      () => {
        // Broadcast reset immediately so dependent widgets switch to default scope
        // without waiting for this widget's internal aggregate query round-trip.
        this.notifyAgriFilter({ viloyat: "", tuman: "", turi: "", vh: "" });

        // Refresh this widget's own bars after the reset broadcast.
        this.fetchRegionalDataDeduped();
      },
    );
  };

  /* ---------------------- Render ---------------------- */

  private formatNumber = (value, decimals = 0) =>
    value == null ? "-" : Number(value).toFixed(decimals);

  private renderCustomTooltip = (props) => {
    const { active, payload } = props;
    if (active && payload && payload.length) {
      const d = payload[0].payload as RegionalDataItem;
      const language = this.state.language;
      const tooltipValueLabel =
        language === "ru"
          ? "Значение:"
          : language === "uz_lat"
            ? "Qiymat:"
            : "Қиймат:";
      const tooltipPercentLabel =
        language === "ru"
          ? "Процент:"
          : language === "uz_lat"
            ? "Foiz:"
            : "Фоиз:";
      const areaUnit = language === "uz_lat" ? "ga" : "га";
      const tooltipTitle =
        (d as any)?.displayName ??
        (d as any)?.displayNameTranslated ??
        (d as any)?.name ??
        "";
      return (
        <div className="regional-tooltip">
          <div className="regional-tooltip-title">{tooltipTitle}</div>
          <div className="regional-tooltip-content">
            <div className="regional-tooltip-row">
              <span className="regional-tooltip-label">
                {tooltipValueLabel}
              </span>
              <span className="regional-tooltip-value">
                {this.formatNumber(d.maydon)} {areaUnit}
              </span>
            </div>
            <div className="regional-tooltip-row">
              <span className="regional-tooltip-label">
                {tooltipPercentLabel}
              </span>
              <span className="regional-tooltip-value">
                {(d.percentage ?? 0).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  render() {
    const {
      regionalLoading,
      regionalError,
      regionalData,
      selectedRegion,
      displayCount,
      sortOrder,
      connectionStatus,
      currentView,
      selectedViloyatForDrillDown,
      currentFilters,
      language,
      isDarkTheme,
      widgetSize,
    } = this.state;

    const chartMargin =
      widgetSize === "xs"
        ? { top: 0, right: 8, left: 0, bottom: 8 }
        : widgetSize === "sm"
          ? { top: 1, right: 12, left: 0, bottom: 8 }
          : widgetSize === "md"
            ? { top: 1, right: 16, left: 2, bottom: 10 }
            : { top: 2, right: 28, left: 4, bottom: 12 };

    const yAxisWidth =
      widgetSize === "xs"
        ? 84
        : widgetSize === "sm"
          ? 92
          : widgetSize === "md"
            ? 102
            : 114;
    const chartBarSlot =
      widgetSize === "xs"
        ? 32
        : widgetSize === "sm"
          ? 36
          : widgetSize === "md"
            ? 40
            : 44;
    const chartBarSize =
      widgetSize === "xs"
        ? 24
        : widgetSize === "sm"
          ? 26
          : widgetSize === "md"
            ? 28
            : 30;

    const currentData =
      currentView === "viloyat"
        ? regionalData.viloyatlar
        : regionalData.tumanlar;
    const sorted = [...currentData].sort((a, b) =>
      sortOrder === "asc" ? a.maydon - b.maydon : b.maydon - a.maydon,
    );
    const limited = sorted.slice(0, displayCount);

    const chartData = limited.map((r, i) => {
      const displayBase = r.name.replace(
        currentView === "viloyat" ? /\s*viloyat(?:i)?$/i : /\s*tumani$/i,
        "",
      );
      const displayName = translateForDisplay(displayBase, language);

      return {
        ...r, // keep original `name` for selection notifications
        index: i + 1,
        displayName,
      };
    });

    const chartScrollableHeight = Math.max(
      widgetSize === "xs" ? 220 : 260,
      chartData.length * chartBarSlot + 28,
    );

    const breadcrumb =
      currentView === "viloyat"
        ? language === "ru"
          ? "Статистика по областям"
          : language === "uz_lat"
            ? "Viloyatlar kesimidagi statistika"
            : "Вилоят кесимида статистика"
        : `${translateForDisplay(
            (selectedViloyatForDrillDown ?? "").replace(
              /\s*viloyat(?:i)?$/i,
              "",
            ),
            language,
          )} - ${
            language === "ru"
              ? "статистика по туманам"
              : language === "uz_lat"
                ? "tumanlar kesimidagi statistika"
                : "туман кесимида статистика"
          }`;

    const unitLabel = language === "uz_lat" ? "ga" : "га";

    const selectYearTitle =
      language === "ru"
        ? "📅 Выберите год"
        : language === "uz_lat"
          ? "📅 Yilni tanlang"
          : "📅 Йилни танланг";

    const selectYearBody =
      language === "ru"
        ? "Чтобы просматривать статистику, сначала выберите год"
        : language === "uz_lat"
          ? "Statistikani ko‘rish uchun avval yilni tanlang"
          : "Статистикани кўриш учун аввал йилни танланг";

    const noDataTitle =
      language === "ru"
        ? "Данные не найдены"
        : language === "uz_lat"
          ? "Ma’lumot topilmadi"
          : "Маълумот топилмади";

    const noDataBody =
      language === "ru"
        ? "Попробуйте изменить фильтры."
        : language === "uz_lat"
          ? "Filtrlarni o‘zgartirib ko‘ring."
          : "Фильтрларни ўзгартириб кўринг.";

    const backButtonText =
      language === "ru" ? "Назад" : language === "uz_lat" ? "Orqaga" : "Орқага";

    const retryButtonText =
      language === "ru"
        ? "Перезагрузить"
        : language === "uz_lat"
          ? "Qayta yuklash"
          : "Қайта юкла";

    const mapLoadingText =
      language === "ru"
        ? "Загрузка карты..."
        : language === "uz_lat"
          ? "Xarita yuklanmoqda..."
          : "Харита юкланмоқда...";

    const mapErrorFallback =
      language === "ru"
        ? "Не удалось подключиться к карте."
        : language === "uz_lat"
          ? "Xaritaga ulana olmadik."
          : "Харитага улана олмадик.";

    const dataLoadingText =
      language === "ru"
        ? "Загрузка данных..."
        : language === "uz_lat"
          ? "Maʼlumotlar yuklanmoqda..."
          : "Маълумотлар юкланмоқда...";

    return (
      <div
        className={`regional-stats-card ${isDarkTheme ? "dark-theme" : "light-theme"}`}
        data-region-size={widgetSize}
        ref={this._rootRef}
      >
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
          {this.props.useDataSources?.length > 0 &&
            this.props.useDataSources.map((uds: any, idx: number) => (
              <DataSourceComponent
                key={`${uds?.dataSourceId || "ds"}-${idx}`}
                useDataSource={uds}
                onDataSourceCreated={
                  idx === 0 ? this.onDataSourceCreated : undefined
                }
              />
            ))}
          <JimuMapViewComponent
            useMapWidgetId={this.props.useMapWidgetIds?.[0]}
            onActiveViewChange={this.onActiveViewChange}
          />
        </div>

        <div className="regional-stats-content">
          <div className="regional-stats-header">
            <div className="regional-stats-header-left">
              <div className="regional-stats-navigation">
                {currentView === "tuman" && (
                  <button
                    className="regional-stats-back-button"
                    onClick={this.navigateBack}
                    title={backButtonText}
                    aria-label={backButtonText}
                  >
                    <BackIcon />
                  </button>
                )}
              </div>
              <div className="regional-stats-header-title">{breadcrumb}</div>
            </div>
            <div className="regional-stats-header-controls">
              <div className="regional-stats-sort-buttons">
                <button
                  className={`regional-stats-sort-button ${sortOrder === "desc" ? "active" : ""}`}
                  onClick={() => this.setState({ sortOrder: "desc" })}
                >
                  ↓
                </button>
                <button
                  className={`regional-stats-sort-button ${sortOrder === "asc" ? "active" : ""}`}
                  onClick={() => this.setState({ sortOrder: "asc" })}
                >
                  ↑
                </button>
              </div>
              <select
                className="regional-stats-display-count"
                value={displayCount}
                onChange={(e) =>
                  this.setState({ displayCount: parseInt(e.target.value, 10) })
                }
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>

          {connectionStatus === "connecting" ? (
            <div className="regional-stats-loading-container">
              <div className="regional-modern-loader" aria-hidden="true">
                <span className="regional-modern-loader-dot" />
                <span className="regional-modern-loader-dot" />
                <span className="regional-modern-loader-dot" />
              </div>
              <p>{mapLoadingText}</p>
            </div>
          ) : connectionStatus === "failed" ? (
            <div className="regional-stats-error">
              <p>{regionalError || mapErrorFallback}</p>
            </div>
          ) : !currentFilters.yil ? (
            <div className="regional-stats-loading-container">
              <div className="regional-modern-loader" aria-hidden="true">
                <span className="regional-modern-loader-dot" />
                <span className="regional-modern-loader-dot" />
                <span className="regional-modern-loader-dot" />
              </div>
              <p>{dataLoadingText}</p>
            </div>
          ) : regionalLoading ? (
            <div className="regional-stats-loading-container">
              <div className="regional-modern-loader" aria-hidden="true">
                <span className="regional-modern-loader-dot" />
                <span className="regional-modern-loader-dot" />
                <span className="regional-modern-loader-dot" />
              </div>
              <p>{dataLoadingText}</p>
            </div>
          ) : regionalError ? (
            <div className="regional-stats-error">
              <p>{regionalError}</p>
              <Button onClick={this.fetchRegionalData} type="primary" size="sm">
                {retryButtonText}
              </Button>
            </div>
          ) : currentData.length === 0 ? (
            <div className="regional-stats-no-data">
              <h3>{noDataTitle}</h3>
              <p>{noDataBody}</p>
            </div>
          ) : (
            <div className="regional-stats-chart-container">
              <div
                className="regional-stats-chart-scroll"
                style={{ height: chartScrollableHeight }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={chartMargin}
                    barSize={chartBarSlot}
                    barCategoryGap="28%"
                  >
                    <defs>
                      <linearGradient
                        id="regionalBarGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#5b73ff" />
                        <stop offset="50%" stopColor="#00d4ff" />
                        <stop offset="100%" stopColor="#ff6b9d" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid horizontal={false} vertical={false} />
                    <XAxis
                      type="number"
                      domain={[0, (max: number) => max * 1.34]}
                      hide
                    />
                    <YAxis
                      dataKey="displayName"
                      type="category"
                      axisLine={false}
                      tickLine={false}
                      width={yAxisWidth}
                      tick={this.renderYAxisTick}
                    />
                    <Tooltip
                      content={this.renderCustomTooltip}
                      offset={14}
                      reverseDirection={{ x: false, y: true }}
                      allowEscapeViewBox={{ x: true, y: false }}
                      wrapperStyle={{
                        zIndex: 80,
                        pointerEvents: "none",
                        maxWidth: "calc(100% - 12px)",
                      }}
                    />
                    <Bar
                      dataKey="maydon"
                      barSize={chartBarSize}
                      radius={[12, 12, 12, 12]}
                      background={{
                        fill: "rgba(15, 23, 42, 0.16)",
                        radius: 12,
                      }}
                      onClick={this.handleRegionSelectionClick}
                      animationDuration={300}
                      fill="url(#regionalBarGradient)"
                    >
                      <LabelList
                        dataKey="maydon"
                        position="right"
                        offset={8}
                        formatter={(value: number) =>
                          `${this.formatNumber(value)} ${unitLabel}`
                        }
                        style={{
                          fill: "var(--region-text)",
                          fontSize: "10px",
                          fontWeight: 400,
                        }}
                      />
                      {chartData.map((entry, i) => (
                        <Cell
                          key={i}
                          fill="url(#regionalBarGradient)"
                          opacity={
                            selectedRegion
                              ? selectedRegion === entry.name
                                ? 1
                                : 0.4
                              : 0.9
                          }
                          cursor="pointer"
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
