import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  exampleConfigProperty: string
  /** NDVI field name on polygon layer (default ndvi) */
  ndviFieldName?: string
  /** Thresholds layer: viloyat field (default viloyat) */
  thresholdsViloyatField?: string
  /** Thresholds layer: year field (default Yil) */
  thresholdsYilField?: string
  /** Thresholds layer: past upper bound (default past) */
  thresholdsPastField?: string
  /** Thresholds layer: orta upper bound (default orta) */
  thresholdsOrtaField?: string
  /** Thresholds layer: yaxshi upper bound (default yaxshi) */
  thresholdsYaxshiField?: string
}

export type IMConfig = ImmutableObject<Config>
