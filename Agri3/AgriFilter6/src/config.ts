import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  exampleConfigProperty: string
  /** Join field on polygon layer (e.g. uniqueid). */
  polygonJoinField?: string
  /** Join field on table layer (e.g. uniqueid). */
  tableJoinField?: string
  /** Field on table that holds precalculated NDVI status (e.g. ndvi_status). Values: juda_yaxshi, yaxshi, orta, past. */
  tableVhField?: string
}

export type IMConfig = ImmutableObject<Config>
