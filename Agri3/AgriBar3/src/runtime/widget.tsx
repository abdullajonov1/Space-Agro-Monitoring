// VH Categories Widget - Display only. All filtering and data from AgriFilter via masterFilterChanged.
// Listens for masterFilterChanged (with vhBarData) and renders the bar chart; no data sources or map.

import { AllWidgetProps, React } from "jimu-core";
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import "./AgriBar.css";

// VH category definitions with colors
const VH_CATEGORIES = [
  { value: "1-Juda yaxshi", label: "Жуда яхши", order: 1, color: "#00ff88" },
  { value: "2-Yaxshi", label: "Яхши", order: 2, color: "#ffc542" },
  { value: "3-O'rta", label: "Ўрта", order: 3, color: "#ff8f42" },
  { value: "4-Past", label: "Паст", order: 4, color: "#ff6b6b" },
];

interface VHDataItem {
  category: string;
  label: string;
  count: number;
  percentage: number;
  color: string;
  order: number;
}

interface AgriBarProps extends AllWidgetProps<any> {
  externalFilters?: {
    tuman?: string;
    viloyat?: string;
    yil?: string;
    tur?: string;
  };
}

interface AgriBarState {
  loading: boolean;
  error: string | null;
  vhData: {
    categories: VHDataItem[];
    totalCount: number;
  };
  selectedViloyat: string;
  selectedYear: string;
  selectedtur: string;
  selectedTuman: string;
  selectedVHCategory: string | null;
  displayCount: number;
  sortOrder: "asc" | "desc";
  isDarkTheme: boolean;
  language: "uz_cyr" | "uz_lat" | "ru";
  lockedViloyat: string | null;
  widgetSize: "xs" | "sm" | "md" | "lg";
  compactHeight: boolean;
}

export default class AgriBar extends React.PureComponent<
  AgriBarProps,
  AgriBarState
> {
  _isMounted = false;
  private _containerRef = React.createRef<HTMLDivElement>();
  private _resizeObserver: ResizeObserver | null = null;

  constructor(props: AgriBarProps) {
    super(props);
    this._isMounted = false;
    this.state = {
      loading: false,
      error: null,
      vhData: { categories: [], totalCount: 0 },
      selectedViloyat: "",
      selectedYear: "",
      selectedtur: "",
      selectedTuman: "",
      selectedVHCategory: null,
      displayCount: -1,
      sortOrder: "desc",
      isDarkTheme: false,
      language: "uz_cyr",
      lockedViloyat: null,
      widgetSize: "lg",
      compactHeight: false,
    };
    this.handleVHSelectionClick = this.handleVHSelectionClick.bind(this);
    this.handleDisplayCountChange = this.handleDisplayCountChange.bind(this);
    this.toggleSortOrder = this.toggleSortOrder.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.formatNumber = this.formatNumber.bind(this);
  }

  private initializeTheme = () => {
    const savedTheme = localStorage.getItem("app_theme");
    const isDarkTheme = savedTheme === "dark";
    this.setState({ isDarkTheme });
  };

  private getLocalizedCategoryLabel = (
    category: string,
    language: "uz_cyr" | "uz_lat" | "ru",
  ): string => {
    const base = category.trim();
    if (base === "1-Juda yaxshi") {
      if (language === "ru") return "Очень хороший";
      if (language === "uz_lat") return "A'lo";
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

  private handleMasterFilterChange = (event: Event) => {
    const d: any = (event as CustomEvent).detail || {};
    if (!d.filters) return;

    const nextYear = d.filters.yil || "";
    const nextLockedVil = d?.scope?.lockedViloyat
      ? String(d.scope.lockedViloyat)
      : null;
    const nextVil = nextLockedVil || d.filters.viloyat || "";
    const nextTum = d.filters.tuman || "";
    const nextTur = d.filters.turi || "";
    const nextVh = d.filters.vh || "";
    const nextLanguage: "uz_cyr" | "uz_lat" | "ru" =
      (d.filters.language as any) || this.state.language || "uz_cyr";

    const vhBarData = d.vhBarData ?? null;
    const nextVhData = {
      categories: (vhBarData?.categories || []).map((c) => ({
        ...c,
        label: this.getLocalizedCategoryLabel(
          c.category || c.label,
          nextLanguage,
        ),
      })),
      totalCount: vhBarData?.totalCount ?? 0,
    };

    this.setState({
      selectedYear: nextYear,
      selectedViloyat: nextVil,
      selectedTuman: nextTum,
      selectedtur: nextTur,
      // Keep VH selection in sync with master filter; clear when filter sends empty.
      selectedVHCategory: nextVh ? nextVh : null,
      vhData: nextVhData,
      loading: false,
      error: null,
      language: nextLanguage,
      lockedViloyat: nextLockedVil,
    });
  };

  componentDidMount() {
    this._isMounted = true;
    this.initializeTheme();
    document.addEventListener(
      "masterFilterChanged",
      this.handleMasterFilterChange as EventListener,
    );
    document.addEventListener(
      "themeToggled",
      this.handleThemeChange as EventListener,
    );
    document.addEventListener("resetAllFilters", this._onReset as any);

    // responsive sizing (deferred to ensure DOM is ready)
    setTimeout(() => {
      if (
        this._isMounted &&
        this._containerRef.current &&
        typeof ResizeObserver !== "undefined"
      ) {
        this._resizeObserver = new ResizeObserver((entries) => {
          const w = entries[0]?.contentRect?.width ?? 0;
          const h = entries[0]?.contentRect?.height ?? 0;
          const next: "xs" | "sm" | "md" | "lg" =
            w < 220 ? "xs" : w < 340 ? "sm" : w < 500 ? "md" : "lg";
          const compactHeight = h > 0 && h < 260;
          if (
            next !== this.state.widgetSize ||
            compactHeight !== this.state.compactHeight
          ) {
            this.setState({ widgetSize: next, compactHeight });
          }
        });
        this._resizeObserver.observe(this._containerRef.current);
      }
    }, 0);
    if (this.props.externalFilters) {
      this.setState({
        selectedViloyat: this.props.externalFilters.viloyat || "",
        selectedTuman: this.props.externalFilters.tuman || "",
        selectedYear: this.props.externalFilters.yil || "",
        selectedtur: this.props.externalFilters.tur || "",
        lockedViloyat: null,
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    document.removeEventListener(
      "masterFilterChanged",
      this.handleMasterFilterChange as EventListener,
    );
    document.removeEventListener(
      "themeToggled",
      this.handleThemeChange as EventListener,
    );
    document.removeEventListener("resetAllFilters", this._onReset as any);
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
  }

  private _onReset = (): void => {
    if (!this._isMounted) return;
    this.setState({
      selectedYear: "",
      selectedViloyat: "",
      selectedTuman: "",
      selectedtur: "",
      selectedVHCategory: null,
      vhData: { categories: [], totalCount: 0 },
      error: null,
      lockedViloyat: null,
    });
  };

  componentDidUpdate(prevProps: AgriBarProps) {
    if (
      this.props.externalFilters !== prevProps.externalFilters &&
      this.props.externalFilters
    ) {
      this.updateFiltersFromProps(this.props.externalFilters);
    }
  }

  handleThemeChange(event): void {
    if (event && event.detail) {
      const { isDarkTheme } = event.detail;
      this.setState({ isDarkTheme });
    }
  }

  private updateFiltersFromProps(filters: any): void {
    try {
      this.setState({
        selectedViloyat: (filters.viloyat || "").trim(),
        selectedTuman: (filters.tuman || "").trim(),
        selectedYear: filters.yil ? String(filters.yil) : "",
        selectedtur: (filters.tur || "").trim(),
        error: null,
        lockedViloyat: null,
      });
    } catch (_) {}
  }

  handleDisplayCountChange(count: number) {
    console.log("[VHWidget] Changing display count to:", count);
    this.setState({ displayCount: isNaN(count) ? -1 : count });
  }

  toggleSortOrder() {
    const newOrder = this.state.sortOrder === "asc" ? "desc" : "asc";
    console.log("[VHWidget] Changing sort order to:", newOrder);
    this.setState({ sortOrder: newOrder });
  }

  handleVHSelectionClick = (arg: any) => {
    const vhValue = arg?.category ?? arg?.payload?.category ?? null;
    if (vhValue == null) return;

    const newSelection =
      vhValue === this.state.selectedVHCategory ? null : vhValue;

    // Update local highlight
    this.setState({ selectedVHCategory: newSelection });

    // Notify master filter so polygons (and other widgets) filter by VH.
    const detail = {
      source: "AgriBar",
      yil: this.state.selectedYear,
      viloyat: this.state.selectedViloyat,
      tuman: this.state.selectedTuman,
      turi: this.state.selectedtur,
      vh: newSelection || "",
      language: this.state.language,
    };

    document.dispatchEvent(
      new CustomEvent("widgetSelectionChanged", {
        detail,
        bubbles: true,
      }),
    );
  };

  /** Display-only: VH data comes from AgriFilter via masterFilterChanged.vhBarData */

  formatNumber = (value, decimals = 0) => {
    if (value === null || value === undefined) return "-";
    return Number(value).toFixed(decimals);
  };

  renderCustomTooltip = (props) => {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
        <div className="year-tooltip">
          <div className="year-tooltip-title">{data.label}</div>
          <div className="year-tooltip-content">
            <div className="year-tooltip-row">
              <span className="year-tooltip-label">Сони:</span>
              <span className="year-tooltip-value">
                {this.formatNumber(data.count)}
              </span>
            </div>
            <div className="year-tooltip-row">
              <span className="year-tooltip-label">Фоиз:</span>
              <span className="year-tooltip-value">
                {data.percentage.toFixed(1)}%
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
      error,
      vhData,
      selectedVHCategory,
      displayCount,
      sortOrder,
      isDarkTheme,
      selectedYear,
      selectedViloyat,
      lockedViloyat,
      language,
      widgetSize,
      compactHeight,
    } = this.state;
    const effectiveViloyat = (lockedViloyat || selectedViloyat || "").trim();

    const titleText =
      language === "ru"
        ? "Состояние вегетации"
        : language === "uz_lat"
          ? "Vegetatsiya holati"
          : "Вегетация ҳолати";

    const selectYearTitle =
      language === "ru"
        ? "📅 Выберите год"
        : language === "uz_lat"
          ? "📅 Yilni tanlang"
          : "📅 Йилни танланг";

    const selectYearBody =
      language === "ru"
        ? "Чтобы увидеть состояние вегетации, сначала выберите год"
        : language === "uz_lat"
          ? "Vegetatsiya holatini ko‘rish uchun avval yilni tanlang"
          : "Вегетация ҳолатини кўриш учун аввал йилни танланг";

    const selectRegionTitle =
      language === "ru"
        ? "🗺️ Выберите регион"
        : language === "uz_lat"
          ? "🗺️ Viloyatni tanlang"
          : "🗺️ Вилоятни танланг";

    const selectRegionBody =
      language === "ru"
        ? "Чтобы увидеть состояние вегетации, сначала выберите регион"
        : language === "uz_lat"
          ? "Vegetatsiya holatini ko‘rish uchun avval viloyatni tanlang"
          : "Вегетация ҳолатини кўриш учун аввал вилоятни танланг";

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

    const sortedCategories = [...vhData.categories].sort(
      (a, b) => b.order - a.order,
    );
    const limitedCategories =
      displayCount === -1
        ? sortedCategories
        : sortedCategories.slice(0, displayCount);
    const greenScale = ["#2a5f45", "#347955", "#4f9a66", "#82c78a"];
    const chartData = limitedCategories.map((catItem, index) => {
      const color = greenScale[Math.min(index, greenScale.length - 1)];
      const glowColor =
        index === 0
          ? "rgba(42, 95, 69, 0.28)"
          : index === 1
            ? "rgba(52, 121, 85, 0.3)"
            : index === 2
              ? "rgba(79, 154, 102, 0.32)"
              : "rgba(130, 199, 138, 0.34)";
      return {
        ...catItem,
        index: index + 1,
        color,
        glowColor,
      };
    });
    const baseChartConfig =
      widgetSize === "xs"
        ? {
            margin: { top: 10, right: 0, left: 0, bottom: 4 },
            barSize: 26,
            xAxisHeight: 17,
            xTickOffsetY: 1,
            xTickFont: 10,
            valueFont: 10,
            valueOffset: 6,
            valuePrefix: "",
          }
        : widgetSize === "sm"
          ? {
              margin: { top: 14, right: 0, left: 0, bottom: 6 },
              barSize: 38,
              xAxisHeight: 18,
              xTickOffsetY: 1,
              xTickFont: 10,
              valueFont: 10,
              valueOffset: 7,
              valuePrefix: "",
            }
          : widgetSize === "md"
            ? {
                margin: { top: 18, right: 0, left: 0, bottom: 8 },
                barSize: 50,
                xAxisHeight: 20,
                xTickOffsetY: 1,
                xTickFont: 10,
                valueFont: 10,
                valueOffset: 8,
                valuePrefix: "",
              }
            : {
                margin: { top: 20, right: 0, left: 0, bottom: 8 },
                barSize: 64,
                xAxisHeight: 20,
                xTickOffsetY: 1,
                xTickFont: 10,
                valueFont: 10,
                valueOffset: 9,
                valuePrefix: "",
              };
    const chartConfig = compactHeight
      ? {
          ...baseChartConfig,
          margin: {
            ...baseChartConfig.margin,
            top: Math.max(baseChartConfig.margin.top, 18),
          },
          barSize:
            widgetSize === "xs"
              ? 20
              : widgetSize === "sm"
                ? 30
                : widgetSize === "md"
                  ? 40
                  : 52,
          valueOffset: baseChartConfig.valueOffset,
        }
      : baseChartConfig;
    const themeClass = isDarkTheme ? "dark-theme" : "light-theme";

    return (
      <div
        ref={this._containerRef}
        className={`construction-years-card ${themeClass}`}
        data-bar-size={this.state.widgetSize}
        data-compact-height={compactHeight ? "true" : "false"}
      >
        <div className="construction-years-content">
          <div className="construction-years-header">
            <div
              className="construction-years-header-title"
              style={{ fontSize: 12, lineHeight: "12px" }}
            >
              {titleText}
            </div>
          </div>

          {!selectedYear ? (
            <div
              className="construction-years-no-data"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div className="regional-modern-loader" aria-hidden="true">
                <span className="regional-modern-loader-dot" />
                <span className="regional-modern-loader-dot" />
                <span className="regional-modern-loader-dot" />
              </div>
            </div>
          ) : error ? (
            <div className="construction-years-error">
              <p>{error}</p>
            </div>
          ) : vhData.categories.length === 0 ? (
            <div className="construction-years-no-data">
              <h3>{noDataTitle}</h3>
              <p>{noDataBody}</p>
            </div>
          ) : (
            <div
              className={`construction-years-chart-container ${selectedVHCategory ? "has-selection" : ""}`}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  layout="horizontal"
                  margin={chartConfig.margin}
                  barCategoryGap="-46%"
                  barGap={-14}
                >
                  <XAxis
                    dataKey="label"
                    type="category"
                    axisLine={false}
                    tickLine={false}
                    height={chartConfig.xAxisHeight}
                    tick={({ x, y, payload, index }) => {
                      const tickItem = chartData[index];
                      const isSelected =
                        !!tickItem && selectedVHCategory === tickItem.category;
                      const label = String(payload.value || "");
                      const approxCharWidth = chartConfig.xTickFont * 0.7;
                      const pillWidth = Math.max(
                        widgetSize === "xs"
                          ? 52
                          : widgetSize === "sm"
                            ? 62
                            : 72,
                        label.length * approxCharWidth + 18,
                      );

                      return (
                        <g
                          transform={`translate(${x}, ${y + chartConfig.xTickOffsetY - 4})`}
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            tickItem && this.handleVHSelectionClick(tickItem)
                          }
                        >
                          <text
                            className={
                              isSelected
                                ? "tick-text-selected"
                                : "tick-text-default"
                            }
                            x={0}
                            y={14}
                            textAnchor="middle"
                            fill={isDarkTheme ? "#e9f8ff" : "#111827"}
                            fontSize={chartConfig.xTickFont}
                            fontWeight={isSelected ? "700" : "400"}
                          >
                            {label}
                          </text>
                        </g>
                      );
                    }}
                  />
                  <YAxis hide={true} />
                  <Bar
                    dataKey="count"
                    barSize={chartConfig.barSize}
                    radius={[8, 8, 8, 8]}
                    minPointSize={8}
                    animationDuration={300}
                    cursor="pointer"
                  >
                    <LabelList
                      dataKey="count"
                      position="top"
                      offset={chartConfig.valueOffset}
                      formatter={(value) =>
                        `${chartConfig.valuePrefix}${Math.ceil(Number(value) || 0)}\u00A0ga`
                      }
                      style={{
                        fill: isDarkTheme ? "#e9f8ff" : "#000000",
                        fontSize: chartConfig.valueFont,
                        fontWeight: "300",
                      }}
                    />
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        opacity={
                          selectedVHCategory
                            ? selectedVHCategory === entry.category
                              ? 1
                              : 0.25
                            : 1
                        }
                        cursor="pointer"
                        stroke={
                          selectedVHCategory
                            ? "transparent"
                            : "rgba(230, 255, 241, 0.5)"
                        }
                        strokeWidth={selectedVHCategory ? 0 : 0.7}
                        style={{
                          filter: selectedVHCategory
                            ? selectedVHCategory === entry.category
                              ? `drop-shadow(0 0 3px ${entry.glowColor}) drop-shadow(0 0 6px ${entry.glowColor})`
                              : "none"
                            : `drop-shadow(0 0 3px ${entry.glowColor}) drop-shadow(0 0 6px ${entry.glowColor})`,
                        }}
                        onClick={() => this.handleVHSelectionClick(entry)}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    );
  }
}
