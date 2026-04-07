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
  // Seamless-immutable arrays have asMutable()
  const anyUds: any = uds as any;
  return Array.isArray(anyUds) ? (anyUds as UseDataSource[]) : (anyUds.asMutable ? anyUds.asMutable({ deep: true }) : []);
};

const toImmutableArray = (uds: UseDataSource[]): ImmutableArray<UseDataSource> =>
  Immutable(uds) as ImmutableArray<UseDataSource>;

export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>> {

  /** Map picker → write IDs into config (no conversions needed) */
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
      useDataSources // plain array expected by WidgetJson
    });
  };

  /**
   * FieldSelector -> selected fields go back into the same plain array,
   * but `fields` itself should remain ImmutableArray<string> (EB convention)
   */
  onFieldChange = (selected: IMFieldSchema[], ds: any) => {
    const currentPlain = toPlainArray(this.props.useDataSources);
    const nextPlain = currentPlain.map((uds) => {
      if (uds.dataSourceId !== ds.id) return uds;
      const fieldNames = (selected || []).map(f => f.jimuName);
      return {
        ...uds,
        // keep fields as regular string array for UseDataSource compatibility
        fields: fieldNames
      } as UseDataSource;
    });

    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: nextPlain
    });
  };

  render() {
    // Normalize once
    const udsPlain = toPlainArray(this.props.useDataSources);
    const udsImm = toImmutableArray(udsPlain);

    // For single-DS flows you can surface its fields; keep as ImmutableArray<string>
    const selectedFields = (udsPlain[0]?.fields as any) || Immutable([]);

    return (
      <div className="p-2">
        {/* Map widget */}
        <div className="mb-3">
          <Label>Харита виджетини танланг:</Label>
          <MapWidgetSelector
            useMapWidgetIds={this.props.useMapWidgetIds}
            onSelect={this.onMapWidgetSelected}
          />
        </div>

        {/* Data source selector (expects ImmutableArray) */}
        <div className="mb-3">
          <Label>Маълумот манбаини танланг:</Label>
          <DataSourceSelector
            mustUseDataSource
            widgetId={this.props.id}
            types={Immutable([DataSourceTypes.FeatureLayer])}
            hideDataView
            useDataSources={udsImm}              // ← ImmutableArray<UseDataSource>
            onChange={this.onDataSourceChange}   // ← returns plain array
            isMultiple
          />
        </div>

        {/* Field selector (expects IMMUTABLE array of UseDataSource) */}
        {udsPlain.length > 0 && (
          <div className="mb-3">
            <Label>Фильтр майдонларини танланг:</Label>
            <FieldSelector
              useDataSources={udsImm}             // ← ImmutableArray<UseDataSource>
              selectedFields={selectedFields}     // ← ImmutableArray<string> for DS[0]
              isMultiple
              isDataSourceDropDownHidden={udsPlain.length === 1}
              onChange={this.onFieldChange}
            />
          </div>
        )}
      </div>
    );
  }
}