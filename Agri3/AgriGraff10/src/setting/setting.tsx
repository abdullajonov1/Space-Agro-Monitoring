import {
  React,
  Immutable,
  ImmutableArray,
  UseDataSource,
  IMUseDataSource,
  DataSourceTypes,
  IMFieldSchema
} from 'jimu-core';
import { AllWidgetSettingProps } from 'jimu-for-builder';
import { DataSourceSelector, FieldSelector } from 'jimu-ui/advanced/data-source-selector';
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components';
import { Label } from 'jimu-ui';

/**
 * Helpers to normalize between plain array and ImmutableArray
 */
const toPlainArray = (uds: UseDataSource[] | ImmutableArray<UseDataSource> | undefined): UseDataSource[] => {
  if (!uds) return [];
  const anyUds: any = uds as any;
  return Array.isArray(anyUds) ? (anyUds as UseDataSource[]) : (anyUds.asMutable ? anyUds.asMutable({ deep: true }) : []);
};

const toImmutableArray = (uds: UseDataSource[]): ImmutableArray<UseDataSource> =>
  Immutable(uds) as ImmutableArray<UseDataSource>;

export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>> {

  /** Map picker → write IDs into config */
  onMapWidgetSelected = (ids: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: ids
    });
  };

  /** DataSourceSelector -> always writes a PLAIN array into config */
  onDataSourceChange = (useDataSources: UseDataSource[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources
    });
  };

  /**
   * FieldSelector -> selected fields for filtering (not display)
   */
  onFieldChange = (selected: IMFieldSchema[], ds: any) => {
    const currentPlain = toPlainArray(this.props.useDataSources);
    const nextPlain = currentPlain.map((uds) => {
      if (uds.dataSourceId !== ds.id) return uds;
      const fieldNames = (selected || []).map(f => f.jimuName);
      return {
        ...uds,
        fields: fieldNames
      } as UseDataSource;
    });

    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: nextPlain
    });
  };

  /**
   * FieldSelector -> selected fields for DISPLAY in table
   */
  onDisplayFieldChange = (selected: IMFieldSchema[], ds: any) => {
    const fieldNames = (selected || []).map(f => f.jimuName);
    const cfg: any = this.props.config;
    const nextCfg = (cfg && typeof (cfg as any).set === 'function')
      ? cfg.set('displayFields', fieldNames)
      : { ...(cfg || {}), displayFields: fieldNames };

    this.props.onSettingChange({
      id: this.props.id,
      config: nextCfg
    });
  };

  /** Save search field into widget config ('uniqueid' | 'gidv') */
  onSearchFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value === 'gidv' ? 'gidv' : 'uniqueid';
    const cfg: any = this.props.config;
    const nextCfg = (cfg && typeof (cfg as any).set === 'function')
      ? cfg.set('searchField', val)
      : { ...(cfg || {}), searchField: val };

    this.props.onSettingChange({
      id: this.props.id,
      config: nextCfg
    });
  };

  render() {
    const udsPlain = toPlainArray(this.props.useDataSources);
    const udsImm = toImmutableArray(udsPlain);
    const cfg: any = this.props.config;
    const searchField = cfg?.get ? cfg.get('searchField') : cfg?.searchField || 'uniqueid';
    const filterFields = (udsPlain[0]?.fields as any) || Immutable([]);
    
    // Get display fields from config
    const displayFieldsFromConfig = cfg?.get ? cfg.get('displayFields') : cfg?.displayFields;
    const displayFields = displayFieldsFromConfig ? Immutable(displayFieldsFromConfig) : Immutable([]);

    return (
      <div className="p-2">
        {/* Map widget */}
        <div className="mb-3">
          <Label>Select map widget:</Label>
          <MapWidgetSelector
            useMapWidgetIds={this.props.useMapWidgetIds}
            onSelect={this.onMapWidgetSelected}
          />
        </div>

        {/* Data source selector */}
        <div className="mb-3">
          <Label>Select data source:</Label>
          <DataSourceSelector
            mustUseDataSource
            widgetId={this.props.id}
            types={Immutable([DataSourceTypes.FeatureLayer])}
            hideDataView
            useDataSources={udsImm}
            onChange={this.onDataSourceChange}
            isMultiple
          />
        </div>

        {/* Search field selector */}
        <div className="mb-3">
          <Label>Search field:</Label>
          <select 
            value={searchField} 
            onChange={this.onSearchFieldChange} 
            style={{ width: '100%', padding: 6, borderRadius: 6 }}
          >
            <option value="uniqueid">UniqueID</option>
            <option value="gidv">GIDV</option>
          </select>
          <div style={{ marginTop: 6, fontSize: 12, opacity: .75 }}>
            * This affects the search bar only. Table & filters are unchanged.
          </div>
        </div>

        {/* Filter fields selector */}
        {udsPlain.length > 0 && (
          <div className="mb-3">
            <Label>Filter fields:</Label>
            <div style={{ fontSize: 12, marginBottom: 8, opacity: 0.75 }}>
              Select fields to use for filtering the data:
            </div>
            <FieldSelector
              useDataSources={udsImm}
              selectedFields={filterFields}
              isMultiple
              isDataSourceDropDownHidden={udsPlain.length === 1}
              onChange={this.onFieldChange}
            />
          </div>
        )}

        {/* Display fields selector */}
        {udsPlain.length > 0 && (
          <div className="mb-3">
            <Label>
              <strong>Display columns:</strong>
            </Label>
            <div style={{ fontSize: 12, marginBottom: 8, opacity: 0.75 }}>
              Select which fields to display in the table (order matters):
            </div>
            <FieldSelector
              useDataSources={udsImm}
              selectedFields={displayFields}
              isMultiple
              isDataSourceDropDownHidden={udsPlain.length === 1}
              onChange={this.onDisplayFieldChange}
            />
            <div style={{ 
              marginTop: 8, 
              padding: 8, 
              backgroundColor: '#f0f7ff', 
              borderRadius: 4,
              fontSize: 11,
              color: '#0066cc'
            }}>
              <strong>Note:</strong> The order you select fields here will be the order they appear in the table. 
              Select fields in the order you want them displayed (left to right).
            </div>
          </div>
        )}
      </div>
    );
  }
}