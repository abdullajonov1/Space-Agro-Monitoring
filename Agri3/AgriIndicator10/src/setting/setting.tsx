// src/setting/setting.tsx
import {
  React,
  Immutable,
  ImmutableArray,
  UseDataSource,
  IMFieldSchema,
  DataSourceTypes
} from 'jimu-core';
import { AllWidgetSettingProps } from 'jimu-for-builder';
import { DataSourceSelector, FieldSelector } from 'jimu-ui/advanced/data-source-selector';
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components';
import { Label, Select, TextInput, Switch } from 'jimu-ui';

/** Normalize UseDataSource list between plain and immutable */
const toPlainArray = (
  uds: UseDataSource[] | ImmutableArray<UseDataSource> | undefined
): UseDataSource[] => {
  if (!uds) return [];
  const anyUds: any = uds as any;
  return Array.isArray(anyUds)
    ? (anyUds as UseDataSource[])
    : (anyUds.asMutable ? anyUds.asMutable({ deep: true }) : []);
};
const toImmutableArray = (uds: UseDataSource[]): ImmutableArray<UseDataSource> =>
  Immutable(uds) as ImmutableArray<UseDataSource>;

export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>> {
  /** Merge a small patch into immutable config */
  updateConfig = (patch: Record<string, any>) => {
    const next = this.props.config ? this.props.config.merge(patch) : Immutable(patch as any);
    this.props.onSettingChange({ id: this.props.id, config: next });
  };

  /** Map picker */
  onMapWidgetSelected = (ids: string[]) => {
    this.props.onSettingChange({ id: this.props.id, useMapWidgetIds: ids });
  };

  /** Data source picker */
  onDataSourceChange = (useDataSources: UseDataSource[]) => {
    this.props.onSettingChange({ id: this.props.id, useDataSources });
    // reset attribute when DS changes
    this.updateConfig({ attributeField: '' });
  };

  /** Attribute field (used for sum/avg/min/max/first; ignored for count) */
  onAttributeFieldChange = (selected: IMFieldSchema[]) => {
    const name = selected?.[0]?.jimuName || '';
    this.updateConfig({ attributeField: name });
  };

  /** Aggregation method */
  onStatOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stat = e.target.value as 'count' | 'sum' | 'avg' | 'min' | 'max' | 'first';
    // keep runtime path in sync (some code reads aggregationMethod)
    this.updateConfig({ statOperation: stat, aggregationMethod: stat });
  };

  render() {
    const udsPlain = toPlainArray(this.props.useDataSources);
    const udsImm = toImmutableArray(udsPlain);

    const cfg = this.props.config || {};
    const statOperation: string = cfg.statOperation || 'count';
    const attributeSelected = cfg.attributeField ? Immutable([cfg.attributeField]) : Immutable([]);

    const labelText: string = cfg.label ?? '';
    const unitText: string = cfg.unitLabel ?? '';
    const excludeZeroValues: boolean = !!cfg.excludeZeroValues;

    return (
      <div className="p-2">
        {/* Map */}
        <div className="mb-3">
          <Label className="d-block mb-1">Харита виджетини танланг:</Label>
          <MapWidgetSelector
            useMapWidgetIds={this.props.useMapWidgetIds}
            onSelect={this.onMapWidgetSelected}
          />
        </div>

        {/* Data source */}
        <div className="mb-3">
          <Label className="d-block mb-1">Маълумот манбаини танланг:</Label>
          <DataSourceSelector
            mustUseDataSource
            widgetId={this.props.id}
            types={Immutable([DataSourceTypes.FeatureLayer])}
            hideDataView
            useDataSources={udsImm}
            onChange={this.onDataSourceChange}
          />
        </div>

        {/* Aggregation */}
        <div className="mb-3">
          <Label className="d-block mb-1">Ҳисоб тури (Aggregation):</Label>
          <Select value={statOperation} onChange={this.onStatOperationChange}>
            <option value="count">count</option>
            <option value="sum">sum</option>
            <option value="avg">avg</option>
            <option value="min">min</option>
            <option value="max">max</option>
            <option value="first">first</option>
          </Select>
          <div className="text-muted mt-1" style={{ fontSize: 12 }}>
            <i>Эслатма:</i> <code>count</code> атрибутни инкор этади — барча объектлар сонини қайтарaди.
          </div>
        </div>

        {/* Attribute (count ignores this; others require it) */}
        {udsPlain.length > 0 && (
          <div className="mb-3">
            <Label className="d-block mb-1">Атрибут майдон (sum/avg/min/max/first учун):</Label>
            <FieldSelector
              useDataSources={udsImm}
              selectedFields={attributeSelected}
              isMultiple={false}
              isDataSourceDropDownHidden={udsPlain.length === 1}
              onChange={this.onAttributeFieldChange}
            />
          </div>
        )}

        {/* Text before (label/title) */}
        <div className="mb-3">
          <Label className="d-block mb-1">Матн (қийматдан олдин):</Label>
          <TextInput
            value={labelText}
            onChange={(e) => this.updateConfig({ label: (e.target as HTMLInputElement).value })}
            placeholder="Масалан: Buzilish"
          />
        </div>

        {/* Text after (unit) */}
        <div className="mb-3">
          <Label className="d-block mb-1">Матн (қийматдан кейин, бирлик):</Label>
          <TextInput
            value={unitText}
            onChange={(e) => this.updateConfig({ unitLabel: (e.target as HTMLInputElement).value })}
            placeholder="та / га / so'm ..."
          />
        </div>

        {/* Exclude zeros */}
        <div className="mb-2 d-flex align-items-center">
          <Switch
            checked={excludeZeroValues}
            onChange={(e) =>
              this.updateConfig({ excludeZeroValues: (e.target as HTMLInputElement).checked })
            }
          />
          <span className="ml-2">Қиймати 0 бўлган ёзувларни ҳисобдан чиқариш</span>
        </div>
      </div>
    );
  }
}
