import {
  React,
  AllWidgetProps,
  jsx,
  DataSourceComponent,
  QueriableDataSource,
  DataSourceStatus
} from 'jimu-core';
import './AgriFilter.css';
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis';
import FeatureLayer from 'esri/layers/FeatureLayer';
import { DataSourceManager } from 'jimu-core';
import esriRequest from 'esri/request';

const WIDGET_ID = 'AgriFilter-Master';
const FORCED_PORTAL_URL = 'https://sgm.uzspace.uz/portal';
const FAIL_OPEN_IF_NO_MATCH = false;

/** VH category definitions for bar chart (must match AgriBar) */
const VH_CATEGORIES = [
  { value: '1-Juda yaxshi', label: 'Жуда яхши', order: 1, color: '#00ff88' },
  { value: '2-Yaxshi', label: 'Яхши', order: 2, color: '#ffc542' },
  { value: '3-O\'rta', label: 'Ўрта', order: 3, color: '#ff8f42' },
  { value: '4-Past', label: 'Паст', order: 4, color: '#ff6b6b' }
];

/** Map precalculated ndvi_status table values to VH category value */
const NDVI_STATUS_TO_VH: Record<string, string> = {
  juda_yaxshi: '1-Juda yaxshi',
  yaxshi: '2-Yaxshi',
  orta: "3-O'rta",
  past: '4-Past'
};

/** Reverse: VH category value → ndvi_status table value (for table WHERE clause) */
const VH_TO_NDVI_STATUS: Record<string, string> = {
  '1-Juda yaxshi': 'juda_yaxshi',
  '2-Yaxshi': 'yaxshi',
  "3-O'rta": 'orta',
  '4-Past': 'past'
};

export interface VHBarDataItem {
  category: string;
  label: string;
  count: number;
  percentage: number;
  color: string;
  order: number;
}

export interface VHBarData {
  categories: VHBarDataItem[];
  totalCount: number;
}

const GROUP_ID_TO_VIEW: Record<string, { viewItemId: string; viloyat: string }> = {
  // EXAMPLE - replace with your real group ids + viloyat names
  // "99e138d333434fe9a0fd426f6e873af0": { viewItemId: "xxxxxxxxxxxxxxxxxxxx", viloyat: "Andijon viloyati" },
 
};

interface RecordData {
  viloyat?: string;
  tuman?: string;
  yil?: string | number;
  tur?: string;
  vh?: string;
  [key: string]: any;
}

interface FilterState {
  yil: string;
  viloyat: string;
  tuman: string;
  turi: string;
  vh: string;
  /** Selected NDVI date (YYYY-MM-DD or similar) */
  ndviDate?: string;
  /** UI/data language for all linked widgets */
  language: 'uz_cyr' | 'uz_lat' | 'ru';
}

interface GeoWidgetState extends FilterState {
  records: RecordData[];
  loading: boolean;
  error: string | null;
  activeMapView?: JimuMapView;
  userName: string | null;
  userGroupIds: string[];
  lockedViloyat: string | null;
  allowedViloyats: string[];

  yilOptions: string[];
  /** Distinct NDVI dates available for current filter (if table date field is known) */
  ndviDateOptions?: string[];
  /** True when ndviDate was explicitly chosen by the user (e.g. from Graff) */
  ndviDateLocked?: boolean;

  /** True when a specific polygon graph is active (selected in Graff) */
  polygonMode?: boolean;

  featureLayer?: __esri.FeatureLayer;
  /** All resolved feature layers (up to numberOfDataSources) */
  featureLayers: __esri.FeatureLayer[];
  loadingFilters: boolean;
  isDarkTheme: boolean;
  dataSource?: QueriableDataSource;

  mapConnectionAttempts: number;
  connectionStatus: 'idle' | 'connecting' | 'connected' | 'failed';
  initialPreselectionProcessed: boolean;
}

export default class AgriFilter extends React.PureComponent<AllWidgetProps<any>, GeoWidgetState> {
  private _prevDefinitionExpression = '';
  private _mapUpdateScheduled = false;
  private _onReset: () => void;
  private initializationTimer: any;
  private _retryTimeout: any;
  private _isMounted = false;
  private _readyFired = false;
  private _homeExtent: __esri.Extent | null = null;

  /** Cache of NDVI bucket → polygon join IDs (uniqueid) for current yil/viloyat. */
  private _ndviBucketToIds: Record<string, string[]> = {};

  /** Mapping of logical NDVI date (e.g. '2025-06-12') → polygon status field name (e.g. 'status_2025_06_12'). */
  private _ndviDateFieldMap: Record<string, string> = {};

  /** Viloyat name → region number (from layer attribute `region`). Used to filter by code instead of name. */
  private _viloyatToRegion: Record<string, number> = {};
  /** Tuman name → district number (from layer attribute `district`). Used to filter by code instead of name. */
  private _tumanToDistrict: Record<string, number> = {};
  /** Layer identity -> normalized viloyat keys found in that layer. */
  private _layerToViloyatKeys: Record<string, string[]> = {};
  /** Normalized viloyat key -> layer identities that contain that viloyat. */
  private _viloyatKeyToLayerKeys: Record<string, string[]> = {};

  // Canonicalize keys used for viloyat/tuman → region/district dictionaries
  private makeRegionDistrictKey(raw: string | null | undefined): string {
    if (raw == null) return '';
    const s = this.normalizeApos(String(raw)).trim().toLowerCase();
    return s;
  }

  private getLayerKey(layer: __esri.FeatureLayer): string {
    const id = ((layer as any)?.id || '').toString().trim();
    const url = ((layer as any)?.url || '').toString().trim();
    const title = ((layer as any)?.title || '').toString().trim();
    return id || url || title || 'unknown_layer';
  }

  private getEffectiveViloyat(): string {
    return this.normalizeApos((this.state.lockedViloyat || this.state.viloyat || '').toString());
  }

  private getLayerMatchStateForViloyat(
    layer: __esri.FeatureLayer,
    effectiveViloyat: string
  ): 'match' | 'mismatch' | 'unknown' {
    if (!effectiveViloyat) return 'unknown';
    const vKey = this.makeRegionDistrictKey(effectiveViloyat);
    if (!vKey) return 'unknown';
    const matchingLayerKeys = this._viloyatKeyToLayerKeys[vKey] || [];
    if (!matchingLayerKeys.length) return 'unknown';
    const layerKey = this.getLayerKey(layer);
    return matchingLayerKeys.includes(layerKey) ? 'match' : 'mismatch';
  }

  private buildWhereForLayer(
    layer: __esri.FeatureLayer,
    includeVh = false,
    includeTuri = true
  ): string {
    // Build base without viloyat so we can route per layer.
    let where = this.buildWhereClause(includeVh, includeTuri, false);
    if (!where || where === '1=0') return '1=0';

    const effectiveViloyat = this.getEffectiveViloyat();
    if (!effectiveViloyat) return '1=0';

    const layerMatch = this.getLayerMatchStateForViloyat(layer, effectiveViloyat);
    if (layerMatch === 'mismatch') return '1=0';

    // If layer<->viloyat mapping is unknown, keep fallback viloyat predicate for safety.
    if (layerMatch === 'unknown') {
      const vilClause = this.buildViloyatRegionClause();
      if (!vilClause) return '1=0';
      where = `(${where}) AND (${vilClause})`;
    }

    return where;
  }

  private _allowClearOnce = false;
  private _normId = (s?: string) =>
    (s ?? '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');

  private static readonly APOSTROPHE_VARIANTS = ["'", "'", "'", "ʻ", "ʼ", "`"];

  private normalizeApos = (s: string) =>
    (s ?? '')
      .normalize('NFKC')
      .replace(/['''ʻʼ`]/g, "'")
      .trim();

  MAX_CONNECTION_ATTEMPTS = 3;

  constructor(props: AllWidgetProps<any>) {
    super(props);
    this.state = {
      records: [],
      loading: false,
      error: null,
      allowedViloyats: [],

      yil: '',
      viloyat: '',
      tuman: '',
      turi: '',
      vh: '',
      ndviDate: '',
      language: 'uz_cyr',

      userName: null,
      userGroupIds: [],
      lockedViloyat: null,

      yilOptions: [],
      ndviDateOptions: [],
      ndviDateLocked: false,
      loadingFilters: false,
      isDarkTheme: false,
      featureLayers: [],

      mapConnectionAttempts: 0,
      connectionStatus: 'idle',
      initialPreselectionProcessed: false,
      polygonMode: false
    };
  }

  /* ---------------------- Lifecycle ---------------------- */
componentDidMount() {
  this._isMounted = true;
  this.setState({ connectionStatus: 'connecting' });

  // ✅ define handler BEFORE registering it
  this._onReset = () => {
    if (!this._isMounted) return;

    this.setState(
      {
        yil: '',
        viloyat: '',
        tuman: '',
        turi: '',
        vh: '',
            ndviDate: '',
        yilOptions: [],
        initialPreselectionProcessed: true
      },
      async () => {
        this._allowClearOnce = true;

        if (this.state.connectionStatus === 'connected') {
          try {
            await this.applyMapFiltersOptimized();
            await this.fetchDataWithCurrentState();
            this.broadcastFilterState();
          } catch {
            /* ignore */
          }
        }
      }
    );
  };

  // ONLY listen to widget selection events - no cross-widget events
  document.addEventListener('widgetSelectionChanged', this.handleWidgetSelection as EventListener);
  document.addEventListener('resetAllFilters', this._onReset as any);

  this.initializationTimer = setTimeout(() => this.ensureInitialization(), 3000);
}


  componentWillUnmount() {
    this._isMounted = false;
    document.removeEventListener('widgetSelectionChanged', this.handleWidgetSelection as EventListener);
    document.removeEventListener('resetAllFilters', this._onReset);

    if (this.initializationTimer) clearTimeout(this.initializationTimer);
    if (this._retryTimeout) clearTimeout(this._retryTimeout);

    try {
      this.state.featureLayers?.forEach(fl => { fl.definitionExpression = ''; });
      if (this.state.featureLayer) this.state.featureLayer.definitionExpression = '';
    } catch {}
  }

  componentDidUpdate(prevProps: AllWidgetProps<any>, prevState: GeoWidgetState) {
    const { connectionStatus, mapConnectionAttempts } = this.state;

    const shouldRetry =
      connectionStatus === 'connecting' &&
      this.props.useMapWidgetIds?.length > 0 &&
      !this.state.activeMapView &&
      mapConnectionAttempts !== prevState.mapConnectionAttempts &&
      mapConnectionAttempts < this.MAX_CONNECTION_ATTEMPTS;

    if (shouldRetry) {
      if (this._retryTimeout) clearTimeout(this._retryTimeout);
      this._retryTimeout = setTimeout(() => {
        if (!this._isMounted) return;
        this.setState(s => ({ mapConnectionAttempts: s.mapConnectionAttempts + 1 }));
      }, 2000);
    }
  }

  /* ---------------------- Widget Selection Handler (SINGLE ENTRY POINT) ---------------------- */

private handleWidgetSelection = async (event: Event) => {
  if (!this._isMounted) return;

  const d: any = (event as CustomEvent).detail || {};
  console.log('[AgriFilter] Received selection from widget:', d);

  const updates: Partial<FilterState> = {};

  if (d.yil !== undefined) updates.yil = String(d.yil || '');
  if (d.viloyat !== undefined) updates.viloyat = this.normalizeApos(d.viloyat || '');
  if (d.tuman !== undefined) updates.tuman = this.normalizeApos(d.tuman || '');
  if (d.turi !== undefined) updates.turi = this.normalizeApos(d.turi || '');
  if (d.vh !== undefined) updates.vh = this.normalizeApos(d.vh || '');
  if (d.language !== undefined) updates.language = d.language;
  const ndviDateChanged = d.ndviDate !== undefined;
  if (ndviDateChanged) {
    // When a polygon graph is active, ignore external NDVI date changes from Graff.
    if ((this.state as any).polygonMode && d.source === 'AgriGraffWidget') {
      console.log('[AgriFilter] Ignoring ndviDate from Graff because polygonMode is active');
    } else {
      updates.ndviDate = String(d.ndviDate || '');
      if (updates.ndviDate !== this.state.ndviDate) this._ndviBucketToIds = {};
    }
  }

  // Track whether a polygon chart is currently active in Graff
  if (d.polygonMode !== undefined) {
    (updates as any).polygonMode = Boolean(d.polygonMode);
  }

  // ✅ IMPORTANT: if user is locked, never accept external viloyat overrides
  if (this.state.lockedViloyat) {
    if (updates.viloyat !== undefined && updates.viloyat !== this.state.lockedViloyat) {
      console.log('[AgriFilter] Ignoring viloyat change due to lockedViloyat:', this.state.lockedViloyat);
    }
    delete (updates as any).viloyat;
  }

  // ✅ hierarchy clearing (prevents caching old selections)
  const yearChanged = updates.yil !== undefined && updates.yil !== this.state.yil;
  const viloyatChanged = updates.viloyat !== undefined && updates.viloyat !== this.state.viloyat;
  const tumanChanged = updates.tuman !== undefined && updates.tuman !== this.state.tuman;
  const turiChanged = updates.turi !== undefined && updates.turi !== this.state.turi;

  // ✅ Reset VH only when geographic scope changes (year/viloyat/tuman), not when only crop (turi) changes
  // so that bar selection + crop selection can both apply
  if (yearChanged || viloyatChanged || tumanChanged) {
    updates.vh = '';
  }

  // ✅ If year changes -> clear everything below
  if (yearChanged) {
    updates.viloyat = '';
    updates.tuman = '';
    updates.turi = '';
    updates.vh = '';
  }

  // ✅ If viloyat changes -> clear below
  if (!yearChanged && viloyatChanged) {
    updates.tuman = '';
    updates.turi = '';
    updates.vh = '';
  }

  // ✅ If tuman changes -> clear turi and vh
  if (!yearChanged && !viloyatChanged && tumanChanged) {
    updates.turi = '';
    updates.vh = '';
  }

  // ✅ When only turi (crop) changes: keep vh so bar + crop filters apply together

  const hasChanges = Object.keys(updates).some(
    key => (updates as any)[key] !== (this.state as any)[key]
  );

  if (!hasChanges) {
    console.log('[AgriFilter] No changes detected, skipping update');
    return;
  }

  this.setState(
    {
      ...(updates as any),
      loading: true,
      // Lock NDVI date only when explicitly set AND geography didn't change.
      // If yil/viloyat/tuman changed, return to auto mode for the new area.
      ndviDateLocked:
        ndviDateChanged && !(yearChanged || viloyatChanged || tumanChanged)
          ? Boolean(updates.ndviDate)
          : false
    },
    async () => {
      try {
        // First, ensure we have region/district codes for the newly selected viloyat/tuman
        await this.ensureRegionDistrictForSelection();

        await this.applyMapFiltersOptimized();
        await this.fetchDataWithCurrentState();
        this.broadcastFilterState();
      } catch (e: any) {
        if (this._isMounted) {
          this.setState({ error: e.message, loading: false });
        }
      }
    }
  );
};


  /* ---------------------- Broadcast Current State ---------------------- */

private broadcastFilterState = () => {
  if (!this._isMounted) return;
  if (this.state.connectionStatus !== 'connected') return;

  const {
    yil,
    viloyat,
    tuman,
    turi,
    vh,
    yilOptions,
    ndviDate,
    lockedViloyat,
    records
  } = this.state;

  const primaryLayer = this.state.featureLayer ?? this.state.featureLayers?.[0];

  // Use explicitly selected ndviDate when present and locked; otherwise fall back to latest
  // available NDVI status date so all listeners (Graff, bar, indicator, pie)
  // automatically work with the freshest data for current yil/viloyat/tuman/turi.
  const explicitNdvi = (ndviDate || '').trim();
  const effectiveNdviDate =
    (this.state.ndviDateLocked && explicitNdvi) ||
    (primaryLayer ? this.getLatestNdviDateForBar(primaryLayer) || '' : '');

  const effectiveViloyat = lockedViloyat || viloyat;

  // We now filter polygons directly by status_YYYY_MM_DD on the layer,
  // so we no longer need to broadcast huge uniqueid IN (...) lists.
  const vhUniqueids: string[] | null = null;

  // Bar chart uses status_YYYY_MM_DD field; broadcast that attribute + value so Pie/Indicator filter like Graff
  const cfg = (this.props.config || {}) as any;
  const prefix = (cfg.polygonStatusPrefix || 'status_').toString().trim() || 'status_';
  const ndviDateStr = effectiveNdviDate;
  const barCategoryField = ndviDateStr ? `${prefix}${ndviDateStr.replace(/-/g, '_')}` : null;
  const barCategoryValue = (vh && VH_TO_NDVI_STATUS[vh]) ? VH_TO_NDVI_STATUS[vh] : null;

  const baseDetail = {
    filters: {
      yil,
      viloyat: effectiveViloyat,
      tuman,
      turi,
      vh,
      ndviDate: effectiveNdviDate,
      // expose whether this ndviDate came from an explicit
      // user choice (Graff/date picker) so listeners like
      // AgriIndicator can distinguish it from the auto
      // "latest date" used only for bar charts.
      ndviDateLocked: Boolean(this.state.ndviDateLocked && explicitNdvi),
      barCategoryField: barCategoryField ?? undefined,
      barCategoryValue: barCategoryValue ?? undefined,
      language: this.state.language
    },
    vhUniqueids,
    options: {
      yil: yilOptions
    },
    scope: {
      lockedViloyat,
      locked: Boolean(lockedViloyat)
    },
    meta: {
      recordCount: records?.length ?? 0,
      whereClause: this.buildWhereClause(),
      timestamp: Date.now(),
      language: this.state.language
    },
    source: 'AgriFilter'
  };

  const send = (vhBarData: VHBarData | null) => {
    const detail = { ...baseDetail, vhBarData };
    document.dispatchEvent(
      new CustomEvent('masterFilterChanged', {
        detail,
        bubbles: true
      })
    );
    console.log('[AgriFilter] Broadcasted filter state (+ vhBarData:', !!vhBarData, ')');
  };

  const useDss = this.getEffectiveUseDataSources();
  // Previously we required a separate NDVI table (2nd data source).
  // Now NDVI status is stored directly on the polygon layer as date-based fields.
  const hasNdviSource = !!(this.state.featureLayer || this.state.featureLayers?.[0]);

  if (hasNdviSource) {
    this.computeVhBarData().then(vhBarData => {
      if (!this._isMounted) return;
      send(vhBarData ?? null);
    });
  } else {
    send(null);
  }
};

  /* ---------------------- Map / DataSource ---------------------- */

  private getPortalSelf = async (
    jimuMapView: JimuMapView
  ): Promise<{ username: string | null; groups: Array<{ id: string; title: string }>; portalUrl: string }> => {
    try {
      const portalUrl =
        FORCED_PORTAL_URL ||
        (jimuMapView?.view?.map as any)?.portalItem?.portal?.url ||
        'https://www.arcgis.com';

      const resp = await esriRequest(`${portalUrl}/sharing/rest/community/self`, {
        query: { f: 'json' },
        responseType: 'json',
        withCredentials: true
      });

      const username = resp?.data?.username ?? null;
      const groups =
        Array.isArray(resp?.data?.groups)
          ? resp.data.groups.map((g: any) => ({ id: g.id, title: g.title }))
          : [];
      return { username, groups, portalUrl };
    } catch (e) {
      console.error('AgriFilter: getPortalSelf failed', e);
      return { username: null, groups: [], portalUrl: 'unknown' };
    }
  };

  private resolveGroupScope = (
    groups: Array<{ id: string; title: string }>
  ): { viewItemId: string; viloyat: string } | null => {
    const userIds = groups.map(g => this._normId(g.id)).filter(Boolean);
    const normIdToOriginal: Record<string, string> = {};
    for (const k of Object.keys(GROUP_ID_TO_VIEW)) normIdToOriginal[this._normId(k)] = k;

    for (const gid of userIds) {
      const originalKey = normIdToOriginal[gid];
      if (originalKey) return GROUP_ID_TO_VIEW[originalKey];
    }
    return null;
  };

  private resolveAllowedViloyats = (groups: Array<{ id: string; title: string }>): string[] => {
    const normIdToOriginal: Record<string, string> = {};
    for (const k of Object.keys(GROUP_ID_TO_VIEW)) {
      normIdToOriginal[this._normId(k)] = k;
    }
    const set = new Set<string>();
    for (const g of groups) {
      const origKey = normIdToOriginal[this._normId(g.id)];
      if (origKey) {
        set.add(this.normalizeApos(GROUP_ID_TO_VIEW[origKey].viloyat));
      }
    }
    return Array.from(set);
  };

  /** Effective data sources to use. By default use all selected sources. */
  private getEffectiveUseDataSources(): any[] {
    const raw = (this.props.useDataSources as any)?.asMutable?.() ?? this.props.useDataSources ?? [];
    const arr = Array.isArray(raw) ? raw : [];
    const cfgN = Number((this.props.config as any)?.numberOfDataSources);
    const hasLimit = Number.isFinite(cfgN) && cfgN > 0;
    const n = hasLimit ? Math.min(arr.length, Math.floor(cfgN)) : arr.length;
    return arr.slice(0, n);
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if (!jimuMapView) {
      this.setState({ activeMapView: null, featureLayer: undefined, featureLayers: [] });
      return;
    }
    this.setState({ activeMapView: jimuMapView }, () => {
      if (jimuMapView.view?.ready) {
        try {
          const ex: any = (jimuMapView.view as any)?.extent;
          this._homeExtent = ex?.clone ? ex.clone() : ex || null;
        } catch {
          this._homeExtent = null;
        }
        this.initializeMapConnection(jimuMapView);
      } else {
        const h = jimuMapView.view.watch('ready', isReady => {
          if (isReady) {
            h.remove();
            try {
              const ex: any = (jimuMapView.view as any)?.extent;
              this._homeExtent = ex?.clone ? ex.clone() : ex || null;
            } catch {
              this._homeExtent = null;
            }
            this.initializeMapConnection(jimuMapView);
          }
        });
      }
    });
  };

  private initializeMapConnection = async (jimuMapView: JimuMapView) => {
    if (!this._isMounted) return;

    const featureLayers = await this.resolveFeatureLayersFromUseDataSources(jimuMapView);
    if (!featureLayers?.length) {
      this.setState({
        connectionStatus: 'failed',
        error: 'Could not resolve the map layer(s) for the selected data source(s).'
      });
      return;
    }
    const featureLayer = featureLayers[0];

    const { username, groups } = await this.getPortalSelf(jimuMapView);
    const allowedViloyats = this.resolveAllowedViloyats(groups);

    let lockedViloyat: string | null = null;
    if (allowedViloyats.length === 1) {
      lockedViloyat = allowedViloyats[0];
    } else if (
      allowedViloyats.length === 0 &&
      typeof FAIL_OPEN_IF_NO_MATCH !== 'undefined' &&
      FAIL_OPEN_IF_NO_MATCH
    ) {
      this.setState({ connectionStatus: 'failed', error: 'No matching scoped group.' });
      return;
    }

    this.setState(
      {
        featureLayer,
        featureLayers,
        connectionStatus: 'connected',
        error: null,
        userName: username,
        userGroupIds: groups.map(g => g.id),
        allowedViloyats,
        lockedViloyat
      },
      async () => {
        try {
          // Start with everything hidden until user picks filters.
          featureLayers.forEach(fl => { fl.definitionExpression = '1=0'; });
        } catch {}
        this._allowClearOnce = true;
        // Detect NDVI status date fields from the polygon layer (status_YYYY_MM_DD columns).
        this.detectNdviStatusDateFieldsFromLayer();
        await this.buildLayerViloyatIndex();
        await this.fetchFilterOptions();
        await this.fetchAndStoreRegionDistrictMappings();
        await this.applyMapFiltersOptimized();
        await this.fetchDataWithCurrentState();

        if (!this._readyFired) {
          this._readyFired = true;
          this.broadcastFilterState();
        }
      }
    );
  };

  private resolveFeatureLayerFromOneUseDataSource = async (
    useDs: any,
    jimuMapView: JimuMapView
  ): Promise<__esri.FeatureLayer | null> => {
    if (!jimuMapView?.view?.map || !useDs?.dataSourceId) return null;
    const dsId = useDs.dataSourceId;
    const rootDsId = useDs.rootDataSourceId;

    const jlvList: any[] = jimuMapView.getAllJimuLayerViews?.() || [];
    const matchByDsId = (id: string) => jlvList.find(lv => lv?.layerDataSourceId === id || lv?.dataSourceId === id);

    let jlv = matchByDsId(dsId) || (rootDsId ? matchByDsId(rootDsId) : null);
    if (jlv?.layer?.type === 'feature') return jlv.layer as __esri.FeatureLayer;

    try {
      const ds: any = DataSourceManager.getInstance().getDataSource(dsId);
      if (ds?.getLayer) {
        const lyr = await ds.getLayer();
        if (lyr?.type === 'feature') return lyr as __esri.FeatureLayer;
      }
      const url: string | undefined = ds?.url || ds?.layer?.url;
      if (url) {
        const layers = jimuMapView.view.map.layers.toArray() as any[];
        const cand = layers.find((ly: any) => ly?.url === url);
        if (cand?.type === 'feature') return cand as __esri.FeatureLayer;
      }
    } catch (e) {
      console.warn('[resolveFeatureLayerFromOneUseDataSource] fallback failed:', e);
    }
    return null;
  };

  private resolveFeatureLayersFromUseDataSources = async (jimuMapView: JimuMapView): Promise<__esri.FeatureLayer[]> => {
    const useDss = this.getEffectiveUseDataSources();
    const layers: __esri.FeatureLayer[] = [];
    for (const useDs of useDss) {
      const fl = await this.resolveFeatureLayerFromOneUseDataSource(useDs, jimuMapView);
      if (fl) {
        layers.push(fl);
        console.log('[AgriFilter] Matched data source to layer:', {
          dataSourceId: useDs?.dataSourceId,
          rootDataSourceId: useDs?.rootDataSourceId,
          layerId: (fl as any).id,
          title: (fl as any).title,
          url: (fl as any).url
        });
      } else {
        console.warn('[AgriFilter] Could not resolve layer for data source:', {
          dataSourceId: useDs?.dataSourceId,
          rootDataSourceId: useDs?.rootDataSourceId
        });
      }
    }
    return layers;
  };

  private buildLayerViloyatIndex = async (): Promise<void> => {
    const layers = this.state.featureLayers?.length
      ? this.state.featureLayers
      : (this.state.featureLayer ? [this.state.featureLayer] : []);
    const layerToViloyatKeys: Record<string, string[]> = {};
    const viloyatToLayerSet: Record<string, Set<string>> = {};

    for (const layer of layers) {
      const layerKey = this.getLayerKey(layer);
      const normalizedKeys = new Set<string>();
      try {
        const q = layer.createQuery();
        (q as any).where = '1=1';
        (q as any).outFields = ['viloyat'];
        (q as any).returnGeometry = false;
        (q as any).returnDistinctValues = true;
        (q as any).num = 50000;
        const res = await layer.queryFeatures(q);
        const feats = res?.features ?? [];
        for (const f of feats) {
          const raw = (f.attributes as any)?.viloyat;
          const k = this.makeRegionDistrictKey(raw != null ? String(raw) : '');
          if (!k) continue;
          normalizedKeys.add(k);
          if (!viloyatToLayerSet[k]) viloyatToLayerSet[k] = new Set<string>();
          viloyatToLayerSet[k].add(layerKey);
        }
      } catch (e) {
        console.warn('[AgriFilter] buildLayerViloyatIndex failed for layer:', layerKey, e);
      }
      layerToViloyatKeys[layerKey] = Array.from(normalizedKeys);
    }

    const viloyatKeyToLayerKeys: Record<string, string[]> = {};
    Object.keys(viloyatToLayerSet).forEach(k => {
      viloyatKeyToLayerKeys[k] = Array.from(viloyatToLayerSet[k]);
    });

    this._layerToViloyatKeys = layerToViloyatKeys;
    this._viloyatKeyToLayerKeys = viloyatKeyToLayerKeys;
    console.log('[AgriFilter] Built viloyat->layer index:', {
      layerCount: Object.keys(layerToViloyatKeys).length,
      viloyatCount: Object.keys(viloyatKeyToLayerKeys).length
    });
  };

  /**
   * Inspect the primary polygon layer fields and detect NDVI status fields that follow
   * a `status_YYYY_MM_DD` pattern (or a configurable prefix). Populates:
   *  - this._ndviDateFieldMap: date label → field name
   *  - this.state.ndviDateOptions: sorted list of date labels
   *  - this.state.ndviDate: keeps existing value when possible, otherwise latest date
   */
  private detectNdviStatusDateFieldsFromLayer = (): void => {
    const primaryLayer = this.state.featureLayer ?? this.state.featureLayers?.[0];
    if (!primaryLayer) return;

    try {
      const cfg = (this.props.config || {}) as any;
      const prefix =
        (cfg.polygonStatusPrefix || 'status_').toString().trim() || 'status_';

      const fields: any[] = (primaryLayer as any).fields || [];
      const dateToField: Record<string, string> = {};
      const dateLabels: string[] = [];

      for (const f of fields) {
        const name = (f?.name || '').toString();
        if (!name) continue;
        if (!name.toLowerCase().startsWith(prefix.toLowerCase())) continue;

        const rawSuffix = name.slice(prefix.length); // e.g. "2025_06_12"
        const digitsOnly = rawSuffix.replace(/[^0-9]/g, '');

        let label: string;
        if (digitsOnly.length === 8) {
          const y = digitsOnly.slice(0, 4);
          const m = digitsOnly.slice(4, 6);
          const d = digitsOnly.slice(6, 8);
          label = `${y}-${m}-${d}`; // normalized to YYYY-MM-DD
        } else {
          // Fallback: just replace underscores with dashes.
          label = rawSuffix.replace(/_/g, '-');
        }

        if (!dateToField[label]) {
          dateToField[label] = name;
          dateLabels.push(label);
        }
      }

      if (!dateLabels.length) {
        this._ndviDateFieldMap = {};
        if (this._isMounted) {
          this.setState({ ndviDateOptions: [], ndviDate: '' });
        }
        return;
      }

      dateLabels.sort((a, b) => {
        const ta = Date.parse(a);
        const tb = Date.parse(b);
        if (Number.isNaN(ta) || Number.isNaN(tb)) return a.localeCompare(b);
        return ta - tb;
      });

      this._ndviDateFieldMap = dateToField;

      if (!this._isMounted) return;
      this.setState(prev => {
        const current = (prev.ndviDate || '').trim();
        const locked = !!prev.ndviDateLocked;
        const latest = dateLabels[dateLabels.length - 1];
        const nextSelected =
          locked && current && dateLabels.includes(current)
            ? current
            : (current && dateLabels.includes(current) ? current : latest);
        return {
          ndviDateOptions: dateLabels,
          ndviDate: nextSelected
        };
      });
      console.log('[AgriFilter] Detected NDVI status date fields from polygon layer:', {
        count: dateLabels.length,
        dates: dateLabels
      });
    } catch (e) {
      console.warn('[AgriFilter] detectNdviStatusDateFieldsFromLayer failed:', e);
    }
  };

  onDataSourceCreated = (ds: QueriableDataSource) => {
    if (typeof (ds as any).setListenSelection === 'function') {
      (ds as any).setListenSelection(false);
    }
    this.setState({ dataSource: ds, error: null }, async () => {
      if (this.state.connectionStatus === 'connected') {
        this.setState({ loading: true });
        await this.fetchFilterOptions();
        await this.fetchAndStoreRegionDistrictMappings();

        this._allowClearOnce = true;
        await this.applyMapFiltersOptimized();
        await this.fetchDataWithCurrentState();
        if (!this._readyFired) { this._readyFired = true; this.broadcastFilterState(); }
      }
    });
  };

  onDataSourceInfoChange = (info: any) => {
    if (!this._isMounted) return;
    if (this.state.connectionStatus !== 'connected') return;

    const sawRecords = Array.isArray(info.records);
    if (!sawRecords) return;

    this.fetchDataWithCurrentState();
  };

  retryMapConnection = () => {
    this.setState({ connectionStatus: 'connecting', mapConnectionAttempts: 0, error: null });
  };

  ensureInitialization = async () => {
    if (!this._isMounted) return;
    const { dataSource, connectionStatus } = this.state;

    if (dataSource && connectionStatus === 'connected' && this.state.yilOptions.length === 0) {
      this.setState({ loading: true });
      await this.fetchFilterOptions();
      await this.fetchAndStoreRegionDistrictMappings();

      this._allowClearOnce = true;
      await this.applyMapFiltersOptimized();
      await this.fetchDataWithCurrentState();
      if (!this._readyFired) { this._readyFired = true; this.broadcastFilterState(); }
    } else if (connectionStatus === 'failed') {
      this.retryMapConnection();
    }
  };

  /* ---------------------- Filter Options ---------------------- */

  private getUniqueValues = async (fieldName: string): Promise<string[]> => {
    const layers = this.state.featureLayers?.length
      ? this.state.featureLayers
      : (this.state.featureLayer ? [this.state.featureLayer] : []);
    if (!layers.length) return [];

    const distinct = new Set<string>();
    for (const layer of layers) {
      const values = await this.flDistinctFromLayer(layer, fieldName, '1=1');
      values.forEach(v => distinct.add(v));
    }

    const merged = Array.from(distinct);
    if (fieldName.toLowerCase() === 'yil') {
      return merged.sort((a, b) => Number(a) - Number(b));
    }
    return merged.sort();
  };

  private fetchFilterOptions = async () => {
    if (!this._isMounted) return;
    if (this.state.connectionStatus !== 'connected') return;

    try {
      this.setState({ loadingFilters: true });

      const yilValues = await this.getUniqueValues('yil');

      if (!this._isMounted) return;

      // Sort years so newest is last
      const sorted = yilValues.slice().sort((a, b) => {
        const ay = parseInt(String(a).replace(/[^\d]/g, ''), 10);
        const by = parseInt(String(b).replace(/[^\d]/g, ''), 10);
        if (isNaN(ay) || isNaN(by)) return String(a).localeCompare(String(b));
        return ay - by;
      });
      const latest = sorted.length ? sorted[sorted.length - 1] : '';

      this.setState({
        yilOptions: sorted,
        // default select latest year
        yil: latest || this.state.yil,
        loadingFilters: false,
        loading: false,
        error: null
      });
    } catch (e: any) {
      if (!this._isMounted) return;
      this.setState({ error: `Failed to fetch initial filters: ${e.message}`, loadingFilters: false });
    }
  };

  private async flDistinctFromLayer(
    layer: __esri.FeatureLayer,
    fieldName: string,
    where: string
  ): Promise<string[]> {
    try {
      const q = layer.createQuery();
      q.where = where || '1=1';
      q.outFields = [fieldName];
      q.returnDistinctValues = true;
      q.orderByFields = [`${fieldName} ASC`];
      q.returnGeometry = false;

      const res = await layer.queryFeatures(q);
      const vals = (res.features ?? [])
        .map(f => f.attributes?.[fieldName])
        .filter(v => v !== null && v !== undefined && v !== '')
        .map(v => String(v));

      if (fieldName.toLowerCase() === 'yil') {
        return Array.from(new Set(vals)).sort((a, b) => Number(a) - Number(b));
      }
      return Array.from(new Set(vals)).sort();
    } catch (e) {
      console.error(`[flDistinct] ${fieldName}:`, e);
      return [];
    }
  }

  /**
   * Fetches from the feature layer and stores which viloyat has which region number
   * (attribute `region`) and which tuman has which district number (attribute `district`).
   * Call once when the layer is ready so filters can use numeric codes.
   */
  private fetchAndStoreRegionDistrictMappings = async (): Promise<void> => {
    const layers = this.state.featureLayers?.length
      ? this.state.featureLayers
      : (this.state.featureLayer ? [this.state.featureLayer] : []);
    if (!layers.length) return;

    const viloyatToRegion: Record<string, number> = {};
    const tumanToDistrict: Record<string, number> = {};

    try {
      for (const layer of layers) {
        const q = layer.createQuery();
        q.where = '1=1';
        q.outFields = ['viloyat', 'region', 'tuman', 'district'];
        q.returnGeometry = false;
        q.num = 50000;

        const res = await layer.queryFeatures(q);
        const features = res?.features ?? [];

        for (const f of features) {
          const a = (f.attributes || {}) as Record<string, unknown>;
          const vilKey = this.makeRegionDistrictKey(
            a?.viloyat != null && a.viloyat !== '' ? String(a.viloyat) : null
          );
          const region = a?.region != null && a.region !== '' ? Number(a.region) : NaN;
          const tumanKey = this.makeRegionDistrictKey(
            a?.tuman != null && a.tuman !== '' ? String(a.tuman) : null
          );
          const district = a?.district != null && a.district !== '' ? Number(a.district) : NaN;

          if (vilKey && Number.isFinite(region)) {
            viloyatToRegion[vilKey] = region;
          }
          if (tumanKey && Number.isFinite(district)) {
            tumanToDistrict[tumanKey] = district;
          }
        }
      }

      this._viloyatToRegion = viloyatToRegion;
      this._tumanToDistrict = tumanToDistrict;
      console.log('[AgriFilter] Stored region/district mappings:', {
        viloyatCount: Object.keys(viloyatToRegion).length,
        tumanCount: Object.keys(tumanToDistrict).length
      });
      const viloyatWithRegion = Object.entries(viloyatToRegion)
        .sort(([, a], [, b]) => a - b)
        .map(([name, num]) => `${name} → region ${num}`);
      console.log('[AgriFilter] Viloyat with region numbers:', viloyatWithRegion);
    } catch (e) {
      console.warn('[AgriFilter] fetchAndStoreRegionDistrictMappings failed:', e);
    }
  };

  /**
   * Ensure we have region/district codes for the currently selected viloyat/tuman by
   * querying the polygon layer first. This runs when the user changes viloyat/tuman so
   * converter functions always have up-to-date codes.
   */
  private ensureRegionDistrictForSelection = async (): Promise<void> => {
    const layers = this.state.featureLayers?.length
      ? this.state.featureLayers
      : (this.state.featureLayer ? [this.state.featureLayer] : []);
    if (!layers.length) return;

    const vRaw = (this.state.viloyat || this.state.lockedViloyat || '').toString();
    const tRaw = (this.state.tuman || '').toString();
    const vKey = this.makeRegionDistrictKey(vRaw);
    const tKey = this.makeRegionDistrictKey(tRaw);

    const needsViloyat = !!vKey && this._viloyatToRegion[vKey] == null;
    const needsTuman = !!tKey && this._tumanToDistrict[tKey] == null;
    if (!needsViloyat && !needsTuman) return;

    const vilClause = needsViloyat ? this.eqAposSmart('viloyat', vRaw) : '';
    const tumanClause = needsTuman ? this.eqAposSmart('tuman', tRaw) : '';
    const whereParts: string[] = [];
    if (vilClause) whereParts.push(`(${vilClause})`);
    if (tumanClause) whereParts.push(`(${tumanClause})`);
    if (!whereParts.length) return;

    try {
      const where = whereParts.join(' OR ');
      let featureCount = 0;
      for (const layer of layers) {
        const q = layer.createQuery();
        (q as any).where = where;
        (q as any).outFields = ['viloyat', 'region', 'tuman', 'district'];
        (q as any).returnGeometry = false;
        (q as any).num = 100;

        const res = await layer.queryFeatures(q);
        const features = res?.features ?? [];
        featureCount += features.length;

        for (const f of features) {
          const a = (f.attributes || {}) as Record<string, unknown>;
          const v = this.makeRegionDistrictKey(
            a?.viloyat != null && a.viloyat !== '' ? String(a.viloyat) : null
          );
          const r = a?.region != null && a.region !== '' ? Number(a.region) : NaN;
          const t = this.makeRegionDistrictKey(
            a?.tuman != null && a.tuman !== '' ? String(a.tuman) : null
          );
          const d = a?.district != null && a.district !== '' ? Number(a.district) : NaN;

          if (v && Number.isFinite(r)) {
            this._viloyatToRegion[v] = r;
          }
          if (t && Number.isFinite(d)) {
            this._tumanToDistrict[t] = d;
          }
        }
      }

      console.log('[AgriFilter] ensureRegionDistrictForSelection:', {
        viloyat: vKey || null,
        tuman: tKey || null,
        featureCount,
        regionFromLayer: vKey ? (this._viloyatToRegion[vKey] ?? null) : null,
        districtFromLayer: tKey ? (this._tumanToDistrict[tKey] ?? null) : null
      });
    } catch (e) {
      console.warn('[AgriFilter] ensureRegionDistrictForSelection failed:', e);
    }
  };

  /* ---------------------- UI Handlers ---------------------- */

private handleYilChange = (event: any) => {
  if (!this._isMounted) return;

  const selectedYil = this.normalizeApos(event?.target?.value ?? '');

  // Auto‑select latest NDVI date so bar/Graff use fresh data without manual date pick
  const { ndviDateOptions } = this.state;
  const autoNdviDate =
    Array.isArray(ndviDateOptions) && ndviDateOptions.length
      ? ndviDateOptions[ndviDateOptions.length - 1]
      : '';

  this.setState(
    {
      yil: selectedYil,

      // reset full hierarchy when year changes
      viloyat: '',
      tuman: '',
      turi: '',
      vh: '',
      ndviDate: autoNdviDate,

      loading: true
    },
    async () => {
      try {
        await this.applyMapFiltersOptimized();
        await this.fetchDataWithCurrentState();
        this.broadcastFilterState();
      } catch (e: any) {
        if (this._isMounted) this.setState({ error: e.message, loading: false });
      }
    }
  );
};


private handleLanguageChange = (event: any) => {
  if (!this._isMounted) return;
  const lang = (event?.target?.value || '').toString() as FilterState['language'];
  if (!lang || lang === this.state.language) return;

  this.setState(
    { language: lang },
    () => {
      // Language only affects labels / client-side text, no need to refetch data,
      // but we must notify all dependent widgets so they can re-render.
      this.broadcastFilterState();
    }
  );
};


private handleNdviDateChange = (event: any) => {
  if (!this._isMounted) return;

  const raw = event?.target?.value ?? '';
  const ndviDate = String(raw).trim();

  // When a polygon graph is active in Graff, ignore manual NDVI date changes.
  if ((this.state as any).polygonMode) {
    return;
  }

  this._ndviBucketToIds = {};
  this.setState(
    {
      ndviDate,
      vh: '',
      loading: true
    },
    async () => {
      try {
        await this.applyMapFiltersOptimized();
        await this.fetchDataWithCurrentState();
        this.broadcastFilterState();
      } catch (e: any) {
        if (this._isMounted) this.setState({ error: e.message, loading: false });
      }
    }
  );
};


  /* ---------------------- WHERE Clause Builder ---------------------- */

  private escapeArcGIS = (v: string) => v.replace(/'/g, "''");

  private formatLocalDateYmd = (dt: Date): string => {
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, '0');
    const d = String(dt.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  private eqAposSmart(field: string, raw: string): string {
    if (!raw) return '';
    const s = this.normalizeApos(String(raw).trim());
    if (!/'/.test(s)) return `${field}='${this.escapeArcGIS(s)}'`;
    const base = s.replace(/'/g, '\uFFFF');
    const parts = AgriFilter.APOSTROPHE_VARIANTS.map(ch => {
      const candidate = base.split('\uFFFF').join(ch);
      return `${field}='${this.escapeArcGIS(candidate)}'`;
    });
    return `(${parts.join(' OR ')})`;
  }

  /**
   * Build viloyat filter clause using stored viloyat → region mapping.
   * Supports: viloyat name (looks up region number from _viloyatToRegion) or raw region number.
   */
  private buildViloyatRegionClause(): string {
    const { viloyat, lockedViloyat } = this.state;

    const rawViloyat = (lockedViloyat ?? viloyat ?? '').toString();
    const effectiveViloyat = this.normalizeApos(rawViloyat);
    if (!effectiveViloyat) return '';

    // If value is a numeric code, filter on `region` directly (quoted for string-type fields).
    if (/^\d+$/.test(effectiveViloyat)) {
      return `region = '${Number(effectiveViloyat)}'`;
    }

    // Look up region number from stored mapping (populated by fetchAndStoreRegionDistrictMappings).
    const key = this.makeRegionDistrictKey(rawViloyat);
    const regionNum = key ? this._viloyatToRegion[key] : undefined;
    if (regionNum !== undefined && Number.isFinite(regionNum)) {
      return `region = '${regionNum}'`;
    }

    return this.eqAposSmart('viloyat', effectiveViloyat);
  }

  /**
   * Build tuman filter clause using stored tuman → district mapping.
   * Supports: tuman name (looks up district number from _tumanToDistrict) or raw district number.
   */
  private buildTumanDistrictClause(): string {
    const { tuman } = this.state;
    const rawTuman = (tuman ?? '').toString();
    const effectiveTuman = this.normalizeApos(rawTuman);
    if (!effectiveTuman) return '';

    if (/^\d+$/.test(effectiveTuman)) {
      return `district = '${Number(effectiveTuman)}'`;
    }

    const key = this.makeRegionDistrictKey(rawTuman);
    const districtNum = key ? this._tumanToDistrict[key] : undefined;
    if (districtNum !== undefined && Number.isFinite(districtNum)) {
      return `district = '${districtNum}'`;
    }

    return this.eqAposSmart('tuman', effectiveTuman);
  }

  /**
   * Build spatial WHERE clause (yil + viloyat + tuman [+ optional turi]).
   * When includeTuri is false, bar/chart logic can ignore crop (turi) and
   * show vegetation for the whole region; when true, it is included.
   */
  private buildNdviSpatialWhere(includeTuri = true): string {
    const where = this.buildWhereClause(false, includeTuri);
    console.log('[AgriFilter] NDVI spatial WHERE (includeTuri:', includeTuri, '):', where);
    return where;
  }

  /**
   * Build NDVI status filter clause for the currently selected VH bucket and ndviDate.
   * Example: status_2025_09_01 = 'yaxshi'
   */
  private buildNdviStatusClauseForCurrentVh(): string {
    const ndviDate = (this.state.ndviDate || '').trim();
    const vhCategory = (this.state.vh || '').trim();
    if (!ndviDate || !vhCategory) return '';

    const statusTableValue = VH_TO_NDVI_STATUS[vhCategory];
    if (!statusTableValue) return '';

    const primaryLayer = this.state.featureLayer ?? this.state.featureLayers?.[0];
    if (!primaryLayer) return '';

    const cfg = (this.props.config || {}) as any;
    const prefix =
      (cfg.polygonStatusPrefix || 'status_').toString().trim() || 'status_';

    let statusField = this._ndviDateFieldMap[ndviDate];
    if (!statusField) {
      const suffix = ndviDate.replace(/-/g, '_');
      statusField = `${prefix}${suffix}`;
    }

    const fields: any[] = (primaryLayer as any).fields || [];
    const hasStatusField = fields.some(
      f =>
        (f?.name || '').toString().toLowerCase() ===
        statusField.toLowerCase()
    );
    if (!hasStatusField) return '';

    return `${statusField} = '${this.escapeArcGIS(statusTableValue)}'`;
  }

  /**
   * Build NDVI date-only clause (no VH bucket) for the current ndviDate.
   * Example: status_2025_09_18 IS NOT NULL
   */
  private buildNdviDateClauseWithoutVh(): string {
    const ndviDate = (this.state.ndviDate || '').trim();
    if (!ndviDate) return '';

    const primaryLayer = this.state.featureLayer ?? this.state.featureLayers?.[0];
    if (!primaryLayer) return '';

    const cfg = (this.props.config || {}) as any;
    const prefix =
      (cfg.polygonStatusPrefix || 'status_').toString().trim() || 'status_';

    let statusField = this._ndviDateFieldMap[ndviDate];
    if (!statusField) {
      const suffix = ndviDate.replace(/-/g, '_');
      statusField = `${prefix}${suffix}`;
    }

    const fields: any[] = (primaryLayer as any).fields || [];
    const hasStatusField = fields.some(
      f =>
        (f?.name || '').toString().toLowerCase() ===
        statusField.toLowerCase()
    );
    if (!hasStatusField) return '';

    return `${statusField} IS NOT NULL`;
  }

  private buildWhereClause(includeVh = true, includeTuri = true, includeViloyat = true): string {
    const { yil, viloyat, tuman, turi, lockedViloyat } = this.state;
    const clauses: string[] = [];

    // Require year first
    if (!yil) return '1=0';

    // Year filter
    const yDigits =
      String(yil).match(/\b(18|19|20)\d{2}\b/)?.[0] ??
      String(yil).replace(/[^\d]/g, '');

    clauses.push(
      yDigits
        ? `yil LIKE '${yDigits}%'`
        : `yil LIKE '%${this.escapeArcGIS(String(yil))}%'`
    );

    if (includeViloyat) {
      // Require viloyat (or lockedViloyat) as well before showing any polygons
      const viloyatClause = this.buildViloyatRegionClause();
      if (!viloyatClause) {
        // No effective viloyat/region yet → hide polygons until user selects it
        return '1=0';
      }
      clauses.push(viloyatClause);
    }

    // Tuman → district number from stored mapping
    if (tuman) {
      const tumanClause = this.buildTumanDistrictClause();
      if (tumanClause) clauses.push(tumanClause);
    }

    // Crop (turi): include only when includeTuri true — bar chart does not filter by crop
    if (includeTuri && turi) clauses.push(this.eqAposSmart('turi', turi));

    const result = clauses.length ? clauses.join(' AND ') : '1=0';
    console.log('[AgriFilter] WHERE:', result);
    return result;
  }

  /** Get latest available NDVI date for bar (selected date, or latest from options/map, or from layer fields). */
  private getLatestNdviDateForBar(primaryLayer?: __esri.FeatureLayer): string | null {
    const current = (this.state.ndviDate || '').trim();
    if (current) return current;
    const opts = this.state.ndviDateOptions;
    if (opts?.length) return opts[opts.length - 1];
    const keys = Object.keys(this._ndviDateFieldMap);
    if (keys.length) {
      const sorted = keys.slice().sort((a, b) => {
        const ta = Date.parse(a);
        const tb = Date.parse(b);
        if (Number.isNaN(ta) || Number.isNaN(tb)) return a.localeCompare(b);
        return ta - tb;
      });
      return sorted[sorted.length - 1];
    }
    if (primaryLayer?.fields?.length) {
      const cfg = (this.props.config || {}) as any;
      const prefix = (cfg.polygonStatusPrefix || 'status_').toString().trim() || 'status_';
      const dateLabels: string[] = [];
      for (const f of primaryLayer.fields) {
        const name = (f as any).name || '';
        if (!String(name).toLowerCase().startsWith(prefix.toLowerCase())) continue;
        const rawSuffix = String(name).slice(prefix.length);
        const digitsOnly = rawSuffix.replace(/[^0-9]/g, '');
        const label = digitsOnly.length >= 8
          ? `${digitsOnly.slice(0, 4)}-${digitsOnly.slice(4, 6)}-${digitsOnly.slice(6, 8)}`
          : rawSuffix.replace(/_/g, '-');
        dateLabels.push(label);
      }
      if (dateLabels.length) {
        dateLabels.sort((a, b) => {
          const ta = Date.parse(a);
          const tb = Date.parse(b);
          if (Number.isNaN(ta) || Number.isNaN(tb)) return a.localeCompare(b);
          return ta - tb;
        });
        return dateLabels[dateLabels.length - 1];
      }
    }
    return null;
  }

  /**
   * Compute VH bar data directly from the polygon layer.
   * Tries the latest NDVI status date first; if there is no data for that date
   * (totalCount = 0), it steps backward through earlier dates until it finds
   * one with data, so the bar always shows the freshest available NDVI.
   */
  private computeVhBarData = async (): Promise<VHBarData | null> => {
    const allLayers = this.state.featureLayers?.length
      ? this.state.featureLayers
      : (this.state.featureLayer ? [this.state.featureLayer] : []);
    if (!allLayers.length) return null;

    const cfg = (this.props.config || {}) as any;
    const prefix =
      (cfg.polygonStatusPrefix || 'status_').toString().trim() || 'status_';

    // Build candidate date list:
    // - if user explicitly picked ndviDate, use ONLY that date (no fallback)
    // - otherwise, try all known NDVI dates from newest to oldest until one has data.
    let knownDates = Object.keys(this._ndviDateFieldMap);
    if (!knownDates.length) {
      // Fallback: attempt to detect from layer fields on demand (primary is enough for date keys).
      this.detectNdviStatusDateFieldsFromLayer();
      knownDates = Object.keys(this._ndviDateFieldMap);
      if (!knownDates.length) {
        return {
          categories: VH_CATEGORIES.map(c => ({
            category: c.value,
            label: c.label,
            order: c.order,
            color: c.color,
            count: 0,
            percentage: 0
          })),
          totalCount: 0
        };
      }
    }

    let candidates: string[];
    const forcedNdvi = (this.state.ndviDate || '').trim();
    if (this.state.ndviDateLocked && forcedNdvi && knownDates.includes(forcedNdvi)) {
      candidates = [forcedNdvi];
    } else {
      const sorted = knownDates.slice().sort((a, b) => {
        const ta = Date.parse(a);
        const tb = Date.parse(b);
        if (Number.isNaN(ta) || Number.isNaN(tb)) return a.localeCompare(b);
        return ta - tb;
      });
      candidates = sorted.reverse();
    }

    let bestResult: VHBarData | null = null;
    let usedDate: string | null = null;

    try {
      for (const ndviDate of candidates) {
        const statusFieldGuess = this._ndviDateFieldMap[ndviDate] || `${prefix}${ndviDate.replace(/-/g, '_')}`;
        const categoryMap = new Map<string, number>();

        for (const layer of allLayers) {
          const where = this.buildWhereForLayer(layer, false, true);
          if (!where || where === '1=0') continue;

          const fields: any[] = (layer as any).fields || [];
          const statusField = fields.find(
            f => (f?.name || '').toString().toLowerCase() === statusFieldGuess.toLowerCase()
          )?.name;
          if (!statusField) continue;

          // First try: server-side grouped stats.
          let usedStats = false;
          try {
            const q = layer.createQuery();
            (q as any).where = where;
            (q as any).outFields = [statusField];
            (q as any).returnGeometry = false;
            (q as any).groupByFieldsForStatistics = [statusField];
            (q as any).outStatistics = [
              { statisticType: 'COUNT', onStatisticField: statusField, outStatisticFieldName: 'vh_count' }
            ];
            const statsResult = await layer.queryFeatures(q);
            if (statsResult && (statsResult.features?.length ?? 0) > 0) {
              usedStats = true;
              for (const f of statsResult.features) {
                const a: any = f.attributes || {};
                const rawStatus = a[statusField];
                const rawCount = a.vh_count;
                const statusStr =
                  rawStatus == null || rawStatus === ''
                    ? ''
                    : String(rawStatus).trim().toLowerCase().replace(/\s+/g, '_');
                const vhCategory = NDVI_STATUS_TO_VH[statusStr];
                const count =
                  typeof rawCount === 'number'
                    ? rawCount
                    : typeof rawCount === 'string'
                    ? Number(rawCount)
                    : 0;
                if (vhCategory && count > 0) {
                  categoryMap.set(vhCategory, (categoryMap.get(vhCategory) ?? 0) + count);
                }
              }
            }
          } catch {
            usedStats = false;
          }

          if (!usedStats) {
            // Fallback: paged scan for this layer.
            const rawLayer: any = layer;
            const objectIdField: string =
              rawLayer?.objectIdField ||
              rawLayer?.objectIdFieldName ||
              'OBJECTID';
            const pageSize = 2000;
            let lastOid = -1;
            let safetyCounter = 0;

            while (this._isMounted) {
              const q = layer.createQuery();
              const whereChunk = lastOid < 0 ? where : `${where} AND ${objectIdField} > ${lastOid}`;
              (q as any).where = whereChunk;
              (q as any).outFields = [statusField, objectIdField];
              (q as any).returnGeometry = false;
              (q as any).num = pageSize;

              const res = await layer.queryFeatures(q);
              if (!this._isMounted) return null;

              const features = res?.features ?? [];
              if (!features.length) break;

              let maxOidInPage = lastOid;
              for (const f of features) {
                const attrs: any = f.attributes || {};
                const rawStatus = attrs[statusField];
                const statusStr =
                  rawStatus == null || rawStatus === ''
                    ? ''
                    : String(rawStatus).trim().toLowerCase().replace(/\s+/g, '_');
                const vhCategory = NDVI_STATUS_TO_VH[statusStr];
                if (vhCategory) {
                  categoryMap.set(vhCategory, (categoryMap.get(vhCategory) ?? 0) + 1);
                }
                const oidVal = attrs[objectIdField];
                if (typeof oidVal === 'number' && oidVal > maxOidInPage) maxOidInPage = oidVal;
              }

              if (features.length < pageSize) break;
              if (maxOidInPage <= lastOid) break;
              lastOid = maxOidInPage;
              safetyCounter++;
              if (safetyCounter > 1000) break;
            }
          }
        }

        let totalCount = 0;
        const categories: VHBarDataItem[] = VH_CATEGORIES.map(catDef => {
          const count = categoryMap.get(catDef.value) ?? 0;
          totalCount += count;
          return {
            category: catDef.value,
            label: catDef.label,
            order: catDef.order,
            color: catDef.color,
            count,
            percentage: 0
          };
        });

        categories.forEach(c => {
          c.percentage = totalCount > 0 ? (c.count * 2000) / totalCount : 0;
        });

        // Only accept this date if it actually has data; otherwise
        // continue and let the loop try earlier NDVI dates.
        if (totalCount > 0) {
          bestResult = { categories, totalCount };
          usedDate = ndviDate;
          break;
        }
      }

      if (!bestResult) {
        // No usable status field / data at any date; return empty structure.
        console.log('[AgriFilter] VH bar data: no NDVI date with data found for current filters.');
        return {
          categories: VH_CATEGORIES.map(c => ({
            category: c.value,
            label: c.label,
            order: c.order,
            color: c.color,
            count: 0,
            percentage: 0
          })),
          totalCount: 0
        };
      }

      console.log('[AgriFilter] VH bar data from polygon layer status field:', {
        ndviDate: usedDate,
        totalCount: bestResult.totalCount
      });

      if (
        bestResult &&
        usedDate &&
        this._isMounted &&
        !this.state.ndviDateLocked &&
        this.state.ndviDate !== usedDate
      ) {
        this.setState({ ndviDate: usedDate });
      }
      return bestResult;
    } catch (e) {
      console.warn('[AgriFilter] computeVhBarData (polygon-based) failed:', e);
      return null;
    }
  };

  /** Build table WHERE for date field matching selected ndviDate (YYYY-MM-DD or string). */
  private buildTableDateWhere(dateField: string, ndviDate: string): string | null {
    if (!dateField || !ndviDate) return null;
    const escaped = this.escapeArcGIS(ndviDate);
    return `${dateField} = '${escaped}'`;
  }

  /**
   * Get the set of uniqueids from the polygon layer using the current filter (viloyat, tuman, yil, turi).
   * Used when the NDVI table has no location fields — we filter table rows by this set to get region‑squeezed counts.
   */
  private getPolygonUniqueidsWithCurrentFilter = async (): Promise<Set<string>> => {
    const primaryLayer = this.state.featureLayer ?? this.state.featureLayers?.[0];
    if (!primaryLayer) return new Set();

    const where = this.buildWhereClause(false);
    if (!where || where === '1=0') return new Set();

    const cfg = (this.props.config || {}) as any;
    const polygonJoinField = (cfg.polygonJoinField || 'uniqueid').trim() || 'uniqueid';
    const pageSize = 2000;
    const ids = new Set<string>();
    let offset = 0;
    let lastSize = 0;
    let safetyCounter = 0;

    while (this._isMounted) {
      const q = primaryLayer.createQuery();
      (q as any).where = where;
      (q as any).outFields = [polygonJoinField];
      (q as any).returnGeometry = false;
      (q as any).resultOffset = offset;
      (q as any).resultRecordCount = pageSize;

      const res = await primaryLayer.queryFeatures(q);
      const features = res?.features ?? [];
      for (const f of features) {
        const v = (f.attributes as any)?.[polygonJoinField];
        if (v != null && v !== '') ids.add(String(v));
      }
      const newSize = ids.size;
      if (features.length < pageSize) break;

      // Guard against services that ignore resultOffset and keep
      // returning the same page, which would otherwise cause an
      // infinite loop when maxRecordCount is hit.
      if (newSize === lastSize) {
        console.warn('[AgriFilter] getPolygonUniqueidsWithCurrentFilter: no new IDs returned; breaking to avoid infinite paging loop.');
        break;
      }
      lastSize = newSize;

      safetyCounter++;
      if (safetyCounter > 100) {
        console.warn('[AgriFilter] getPolygonUniqueidsWithCurrentFilter: safety page limit reached; breaking paging loop.');
        break;
      }
      offset += pageSize;
    }
    return ids;
  };

  /**
   * Build NDVI table WHERE: selected date + yil + region (from viloyat) + district (from tuman) + turi.
   * User selects yil → viloyat, tuman; we use their region/district data for the server query.
   * Prefers numeric region/district when the table has those fields (same mapping as polygon layer).
   */
  private buildTableWhereWithRegion(
    dateField: string,
    ndviDate: string,
    tableFieldNames: string[]
  ): string | null {
    const dateWhere = this.buildTableDateWhere(dateField, ndviDate);
    if (!dateWhere) return null;
    const parts: string[] = [dateWhere];

    const { yil, viloyat, tuman, turi, lockedViloyat } = this.state;
    const hasField = (name: string) => tableFieldNames.some(f => f.toLowerCase() === name.toLowerCase());

    if (yil && hasField('yil')) {
      const yDigits = String(yil).match(/\b(18|19|20)\d{2}\b/)?.[0] ?? String(yil).replace(/[^\d]/g, '');
      if (yDigits) parts.push(`yil LIKE '${this.escapeArcGIS(yDigits)}%'`);
    }

    const effectiveViloyat = this.normalizeApos((viloyat || lockedViloyat || '').toString());
    if (effectiveViloyat) {
      if (hasField('region')) {
        const regionNum = /^\d+$/.test(effectiveViloyat)
          ? Number(effectiveViloyat)
          : this._viloyatToRegion[effectiveViloyat];
        if (regionNum !== undefined && Number.isFinite(regionNum)) {
          parts.push(`region = '${regionNum}'`);
        } else if (hasField('viloyat')) {
          parts.push(`viloyat = '${this.escapeArcGIS(effectiveViloyat)}'`);
        }
      } else if (hasField('viloyat')) {
        parts.push(`viloyat = '${this.escapeArcGIS(effectiveViloyat)}'`);
      }
    }

    if (tuman) {
      const effectiveTuman = this.normalizeApos(tuman.toString());
      if (effectiveTuman) {
        if (hasField('district')) {
          const districtNum = /^\d+$/.test(effectiveTuman)
            ? Number(effectiveTuman)
            : this._tumanToDistrict[effectiveTuman];
          if (districtNum !== undefined && Number.isFinite(districtNum)) {
            parts.push(`district = '${districtNum}'`);
          } else if (hasField('tuman')) {
            parts.push(`tuman = '${this.escapeArcGIS(effectiveTuman)}'`);
          }
        } else if (hasField('tuman')) {
          parts.push(`tuman = '${this.escapeArcGIS(effectiveTuman)}'`);
        }
      }
    }

    if (turi && hasField('turi')) {
      parts.push(this.eqAposSmart('turi', turi));
    }
    return parts.join(' AND ');
  }

  /**
   * Load uniqueids from the polygon layer for the given VH category (e.g. '4-Past') and current ndviDate.
   * Used when user selects a category in the bar: search the polygon status field for that value,
   * then filter polygons by those IDs via _ndviBucketToIds.
   */
  private loadNdviBucketIds = async (vhCategory: string): Promise<void> => {
    const ndviDate = (this.state.ndviDate || '').trim();
    if (!ndviDate) return;

    const cfg = (this.props.config || {}) as any;
    const polygonJoinField =
      (cfg.polygonJoinField || 'uniqueid').toString().trim() || 'uniqueid';

    const primaryLayer = this.state.featureLayer ?? this.state.featureLayers?.[0];
    if (!primaryLayer) return;

    const statusTableValue = VH_TO_NDVI_STATUS[vhCategory];
    if (!statusTableValue) return;

    const ids = new Set<string>();

    const prefix =
      (cfg.polygonStatusPrefix || 'status_').toString().trim() || 'status_';

    let statusField = this._ndviDateFieldMap[ndviDate];
    if (!statusField) {
      const suffix = ndviDate.replace(/-/g, '_');
      statusField = `${prefix}${suffix}`;
    }

    const fields: any[] = (primaryLayer as any).fields || [];
    const hasStatusField = fields.some(
      f => (f?.name || '').toString().toLowerCase() === statusField.toLowerCase()
    );
    if (!hasStatusField) {
      console.warn('[AgriFilter] loadNdviBucketIds: status field not found on polygon layer for date:', {
        ndviDate,
        statusField
      });
      return;
    }

    // Same rule as VH bar: spatial filters only, no yil restriction.
    const baseWhere = this.buildNdviSpatialWhere();
    const whereParts: string[] = [];
    if (baseWhere && baseWhere !== '1=0') whereParts.push(`(${baseWhere})`);
    whereParts.push(
      `${statusField} = '${this.escapeArcGIS(statusTableValue)}'`
    );
    const where = whereParts.join(' AND ');

    // Page through polygons to collect join IDs.
    const pageSize = 2000;
    let offset = 0;
    let lastSize = 0;
    let safetyCounter = 0;

    while (this._isMounted) {
      const q = primaryLayer.createQuery();
      (q as any).where = where;
      (q as any).outFields = [polygonJoinField];
      (q as any).returnGeometry = false;
      (q as any).resultOffset = offset;
      (q as any).resultRecordCount = pageSize;

      const res = await primaryLayer.queryFeatures(q);
      const features = res?.features ?? [];
      for (const f of features) {
        const v = (f.attributes as any)?.[polygonJoinField];
        if (v != null && v !== '') ids.add(String(v));
      }

      const newSize = ids.size;
      if (features.length < pageSize) break;

      if (newSize === lastSize) {
        console.warn(
          '[AgriFilter] loadNdviBucketIds: no new polygon IDs returned; breaking to avoid infinite paging loop.'
        );
        break;
      }
      lastSize = newSize;

      safetyCounter++;
      if (safetyCounter > 100) {
        console.warn(
          '[AgriFilter] loadNdviBucketIds: safety page limit reached; breaking paging loop.'
        );
        break;
      }
      offset += pageSize;
    }

    console.log(
      '[AgriFilter] Loaded ndvi_status bucket IDs from polygon layer for',
      vhCategory,
      ':',
      ids.size
    );
    this._ndviBucketToIds[vhCategory] = Array.from(ids);
  };


  /* ---------------------- Map Filter Application ---------------------- */

  private async applyFiltersPersistent(): Promise<void> {
    if (!this._isMounted || this.state.connectionStatus !== 'connected') return;

    const { featureLayers } = this.state;

    if (featureLayers?.length) {
      featureLayers.forEach(fl => {
        let where = this.buildWhereForLayer(fl, false);
        const statusClause = this.buildNdviStatusClauseForCurrentVh();
        if (statusClause && where && where !== '1=0') {
          where =
            `(${where}) AND (${statusClause})`;
        } else if (this.state.ndviDateLocked && where && where !== '1=0') {
          const dateClause = this.buildNdviDateClauseWithoutVh();
          if (dateClause) {
            where =
              `(${where}) AND (${dateClause})`;
          }
        }
        if (fl.definitionExpression !== where) fl.definitionExpression = where;
      });

      const effectiveViloyat = this.getEffectiveViloyat();
      const layerDebug = featureLayers.map(fl => {
        const key = this.getLayerKey(fl);
        const title = ((fl as any)?.title || (fl as any)?.id || key).toString();
        const matchState = this.getLayerMatchStateForViloyat(fl, effectiveViloyat);
        return {
          title,
          matchState,
          definitionExpression: fl.definitionExpression || '1=0',
          visible: (fl as any)?.visible,
          minScale: (fl as any)?.minScale,
          maxScale: (fl as any)?.maxScale,
          effectiveScale: (this.state.activeMapView?.view as any)?.scale
        };
      });
      const activeLayerTitles = layerDebug
        .filter(l => l.definitionExpression !== '1=0')
        .map(l => l.title);
      console.log(
        `[AgriFilter] Active layer count: ${activeLayerTitles.length}/${featureLayers.length}; selectedViloyat=${effectiveViloyat || 'none'}; activeLayers=${activeLayerTitles.join(', ') || 'none'}`
      );
      console.log('[AgriFilter] Layer filter state:', {
        selectedViloyat: effectiveViloyat || null,
        layerCount: featureLayers.length,
        layers: layerDebug
      });
    }
    this._prevDefinitionExpression = (featureLayers || [])
      .map(fl => fl.definitionExpression || '1=0')
      .join(' || ');
  }

  private applyMapFiltersOptimized = async (): Promise<void> => {
    if (!this._isMounted || this.state.connectionStatus !== 'connected') return;

    const { featureLayer, featureLayers, activeMapView } = this.state;
    const primaryLayer = featureLayer ?? featureLayers?.[0];
    if (!primaryLayer) return;

    const prevExpr = this._prevDefinitionExpression;

    await this.applyFiltersPersistent();

    const expressionDigest: string = (featureLayers || [])
      .map(fl => fl.definitionExpression || '1=0')
      .join(' || ');
    const changed = expressionDigest !== prevExpr;

    if (!changed) return;

    const shouldZoom = this.props.config?.settings?.zoomToSelection !== false;
    if (!shouldZoom || !activeMapView) {
      this._prevDefinitionExpression = expressionDigest;
      this._allowClearOnce = false;
      return;
    }

    // Do not auto-zoom when nothing is selected yet.
    const effectiveViloyat = this.getEffectiveViloyat();
    if (!effectiveViloyat) {
      this._prevDefinitionExpression = expressionDigest;
      this._allowClearOnce = false;
      return;
    }

    try {
      // Zoom to the currently active filtered layer(s), not only the first layer.
      const activeLayers = (featureLayers || []).filter(fl => {
        const w = fl.definitionExpression || '1=0';
        return w !== '1=0';
      });

      if (activeLayers.length) {
        let mergedExtent: __esri.Extent | null = null;
        const isEmptyExtent = (e: any): boolean =>
          !e || (typeof e.isEmpty === 'function' ? e.isEmpty() : (!e.width && !e.height));
        for (const fl of activeLayers) {
          const where = fl.definitionExpression || '1=0';
          if (!where || where === '1=0') continue;
          const q = fl.createQuery();
          q.where = where;
          const res = await fl.queryExtent(q);
          const ex = res?.extent;
          if (isEmptyExtent(ex)) continue;
          mergedExtent = mergedExtent ? mergedExtent.union(ex) : ex.clone();
        }
        if (!isEmptyExtent(mergedExtent)) {
          await activeMapView.view.goTo(mergedExtent.expand(1.2));
        }
      } else if (this._allowClearOnce) {
        const home =
          this._homeExtent ||
          primaryLayer.fullExtent ||
          (await primaryLayer.queryExtent(primaryLayer.createQuery())).extent;

        if (home && !home.empty) {
          await activeMapView.view.goTo(home.expand(1.2));
        }
      }
    } catch (e) {
      console.warn('applyMapFiltersOptimized extent error:', e);
    } finally {
      this._allowClearOnce = false;
      this._prevDefinitionExpression = expressionDigest;
    }
  };

  private fetchDataWithCurrentState = async () => {
    if (!this._isMounted || this.state.connectionStatus !== 'connected') return;
    try {
      this.setState({ loading: true, error: null });

      const { featureLayers } = this.state;
      const layers = featureLayers?.length ? featureLayers : (this.state.featureLayer ? [this.state.featureLayer] : []);
      if (!layers.length) {
        this.setState({ loading: false, error: 'No feature layer available' });
        return;
      }

      const allRecords: RecordData[] = [];

      // Also ask the service for the true total count with this WHERE, independent of page limits.
      let totalCountFromService = 0;

      for (const featureLayer of layers) {
        let whereClause = this.buildWhereForLayer(featureLayer, false);
        const statusClause = this.buildNdviStatusClauseForCurrentVh();
        if (statusClause && whereClause && whereClause !== '1=0') {
          whereClause =
            `(${whereClause}) AND (${statusClause})`;
        }
        if (!whereClause || whereClause === '1=0') continue;

        try {
          if ((featureLayer as any)?.queryFeatureCount) {
            totalCountFromService += await (featureLayer as any).queryFeatureCount({ where: whereClause });
          } else {
            const countResult = await featureLayer.queryFeatures({
              where: whereClause,
              returnGeometry: false,
              outFields: ['objectid'],
              returnCountOnly: true
            } as any);
            const oneCount = typeof (countResult as any)?.count === 'number'
              ? (countResult as any).count
              : (countResult as any)?.totalCount ?? 0;
            totalCountFromService += Number(oneCount || 0);
          }
        } catch {
          // keep going with remaining layers
        }

        const q = featureLayer.createQuery();
        q.where = whereClause;
        q.outFields = ['*'];
        q.returnGeometry = false;
        const result = await featureLayer.queryFeatures(q);
        if (!this._isMounted) return;
        const attrs = (result.features ?? []).map(f => f.attributes).filter(Boolean);
        allRecords.push(...(attrs as RecordData[]));
      }

      if (!this._isMounted) return;

      // DEBUG: log polygon counts for current yil / viloyat / tuman / turi selection
      const { yil, viloyat, tuman, turi } = this.state;
      const activeLayers = layers
        .filter(fl => (fl.definitionExpression || '1=0') !== '1=0')
        .map(fl => ((fl as any)?.title || (fl as any)?.id || 'layer').toString());
      console.log(
        `[AgriFilter] Selection summary: selectedViloyat=${viloyat || 'none'}; activeLayers=${activeLayers.join(', ') || 'none'}; totalPolygonsLoaded=${allRecords.length}; totalPolygonsFromService=${totalCountFromService ?? 'n/a'}`
      );
      console.log('[AgriFilter] Polygon count after selection:', {
        yil,
        viloyat,
        tuman,
        turi,
        whereClause: layers.map(fl => `${(fl as any)?.id || (fl as any)?.title || 'layer'}: ${fl.definitionExpression || '1=0'}`),
        totalPolygonsLoaded: allRecords.length,
        totalPolygonsFromService: totalCountFromService
      });

      this.setState({ records: allRecords, loading: false, error: null });
    } catch (e: any) {
      if (!this._isMounted) return;
      this.setState({ error: e?.message || 'Unexpected error', loading: false });
    }
  };

  /* ---------------------- Render ---------------------- */

  render() {
    const {
      loading, error,
      yilOptions,
      yil,
      viloyat,
      lockedViloyat,
      loadingFilters,
      connectionStatus,
      ndviDate,
      ndviDateOptions
    } = this.state;

    const { language } = this.state as any;

    const yilLabel =
      language === 'ru'
        ? 'Год'
        : language === 'uz_lat'
        ? 'Yil'
        : 'Йил';

    const langLabel =
      language === 'ru'
        ? 'Язык'
        : language === 'uz_lat'
        ? 'Til'
        : 'Тил';

    return (
      <div className="evapo-region-card light-theme">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', opacity: 0 }}>
          {this.getEffectiveUseDataSources().length > 0 &&
            this.getEffectiveUseDataSources().map((uds: any) => (
              <DataSourceComponent
                key={uds?.dataSourceId ?? uds?.id ?? Math.random()}
                useDataSource={uds}
                onDataSourceCreated={this.onDataSourceCreated}
                onDataSourceInfoChange={this.onDataSourceInfoChange}
              />
            ))}
          {this.props.useMapWidgetIds?.length > 0 && (
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds[0]}
              onActiveViewChange={this.onActiveViewChange}
            />
          )}
        </div>

        <div className="evapo-region-content">
          {connectionStatus === 'connecting' && (
            <div className="evapo-region-loading-container" style={{ minHeight: 80 }}>
              <div className="evapo-region-loader">
                <div className="evapo-region-loader-bar"></div>
                <div className="evapo-region-loader-bar"></div>
                <div className="evapo-region-loader-bar"></div>
              </div>
              <p>Master filter initializing...</p>
            </div>
          )}

          {connectionStatus === 'failed' && (
            <div className="evapo-region-error">
              <p>{error || 'Failed to connect. Please retry.'}</p>
              <button onClick={this.retryMapConnection} className="evapo-region-retry-button">Retry</button>
            </div>
          )}

          {connectionStatus === 'connected' && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                {loading && (
                  <div className="evapo-region-loader" style={{ margin: 0 }}>
                    <div className="evapo-region-loader-bar"></div>
                    <div className="evapo-region-loader-bar"></div>
                    <div className="evapo-region-loader-bar"></div>
                  </div>
                )}
                {error && !loading && (
                  <div className="evapo-region-error" style={{ height: 'auto', padding: 0 }}>
                    <p style={{ margin: 0 }}>{error}</p>
                  </div>
                )}
              </div>

              <div className="evapo-region-filter-controls">
                <div className="evapo-region-filter-container">
                  <div className="evapo-region-filter-row">
                    <div className="evapo-region-filter-item">
                      <select
                        id="yil-filter"
                        className="evapo-region-filter-select"
                        autoComplete="off"
                        value={yil}
                        onChange={this.handleYilChange}
                        disabled={loadingFilters || connectionStatus !== 'connected'}
                      >
                        <option value="">{yilLabel}</option>
                        {yilOptions.map(opt => (
                          <option key={String(opt)} value={String(opt)}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="evapo-region-filter-item">
                      <select
                        id="language-filter"
                        className="evapo-region-filter-select"
                        autoComplete="off"
                        value={language}
                        onChange={this.handleLanguageChange}
                        disabled={connectionStatus !== 'connected'}
                      >
                        <option value="uz_cyr">{langLabel}: Ўзбек (Кирилл)</option>
                        <option value="uz_lat">{langLabel}: O‘zbek (Lotin)</option>
                        <option value="ru">{langLabel}: Русский</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}