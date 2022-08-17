/* eslint-disable */
import type { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "cerbos.telemetry.v1";

export interface ServerLaunch {
  version: string;
  source: ServerLaunch_Source | undefined;
  features: ServerLaunch_Features | undefined;
  stats: ServerLaunch_Stats | undefined;
}

export interface ServerLaunch_Cerbos {
  version: string;
  commit: string;
  buildDate: string;
  moduleVersion: string;
  moduleChecksum: string;
}

export interface ServerLaunch_Source {
  cerbos: ServerLaunch_Cerbos | undefined;
  os: string;
  arch: string;
  numCpus: number;
}

export interface ServerLaunch_Features {
  audit: ServerLaunch_Features_Audit | undefined;
  schema: ServerLaunch_Features_Schema | undefined;
  adminApi: ServerLaunch_Features_AdminApi | undefined;
  storage: ServerLaunch_Features_Storage | undefined;
}

export interface ServerLaunch_Features_Audit {
  enabled: boolean;
  backend: string;
}

export interface ServerLaunch_Features_Schema {
  enforcement: string;
}

export interface ServerLaunch_Features_AdminApi {
  enabled: boolean;
}

export interface ServerLaunch_Features_Storage {
  driver: string;
  store?:
    | { $case: "disk"; disk: ServerLaunch_Features_Storage_Disk }
    | { $case: "git"; git: ServerLaunch_Features_Storage_Git }
    | { $case: "blob"; blob: ServerLaunch_Features_Storage_Blob };
}

export interface ServerLaunch_Features_Storage_Disk {
  watch: boolean;
}

export interface ServerLaunch_Features_Storage_Git {
  protocol: string;
  auth: boolean;
  pollInterval: Duration | undefined;
}

export interface ServerLaunch_Features_Storage_Blob {
  provider: string;
  pollInterval: Duration | undefined;
}

export interface ServerLaunch_Stats {
  policy: ServerLaunch_Stats_Policy | undefined;
  schema: ServerLaunch_Stats_Schema | undefined;
}

export interface ServerLaunch_Stats_Policy {
  count: { [key: string]: number };
  avgRuleCount: { [key: string]: number };
  avgConditionCount: { [key: string]: number };
}

export interface ServerLaunch_Stats_Policy_CountEntry {
  key: string;
  value: number;
}

export interface ServerLaunch_Stats_Policy_AvgRuleCountEntry {
  key: string;
  value: number;
}

export interface ServerLaunch_Stats_Policy_AvgConditionCountEntry {
  key: string;
  value: number;
}

export interface ServerLaunch_Stats_Schema {
  count: number;
}

export interface ServerStop {
  version: string;
  uptime: Duration | undefined;
  requestsTotal: string;
}

export interface Event {
  data?: { $case: "apiActivity"; apiActivity: Event_ApiActivity };
}

export interface Event_CountStat {
  key: string;
  count: string;
}

export interface Event_ApiActivity {
  version: string;
  uptime: Duration | undefined;
  methodCalls: Event_CountStat[];
  userAgents: Event_CountStat[];
}
