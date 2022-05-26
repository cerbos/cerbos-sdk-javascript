/* eslint-disable */
import { Duration } from "../../../google/protobuf/duration";

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
  requestsTotal: number;
}

export interface Event {
  data?: { $case: "apiActivity"; apiActivity: Event_ApiActivity };
}

export interface Event_CountStat {
  key: string;
  count: number;
}

export interface Event_ApiActivity {
  version: string;
  uptime: Duration | undefined;
  methodCalls: Event_CountStat[];
  userAgents: Event_CountStat[];
}

function createBaseServerLaunch(): ServerLaunch {
  return {
    version: "",
    source: undefined,
    features: undefined,
    stats: undefined,
  };
}

export const ServerLaunch = {
  fromJSON(object: any): ServerLaunch {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      source: isSet(object.source)
        ? ServerLaunch_Source.fromJSON(object.source)
        : undefined,
      features: isSet(object.features)
        ? ServerLaunch_Features.fromJSON(object.features)
        : undefined,
      stats: isSet(object.stats)
        ? ServerLaunch_Stats.fromJSON(object.stats)
        : undefined,
    };
  },

  toJSON(message: ServerLaunch): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.source !== undefined &&
      (obj.source = message.source
        ? ServerLaunch_Source.toJSON(message.source)
        : undefined);
    message.features !== undefined &&
      (obj.features = message.features
        ? ServerLaunch_Features.toJSON(message.features)
        : undefined);
    message.stats !== undefined &&
      (obj.stats = message.stats
        ? ServerLaunch_Stats.toJSON(message.stats)
        : undefined);
    return obj;
  },
};

function createBaseServerLaunch_Cerbos(): ServerLaunch_Cerbos {
  return {
    version: "",
    commit: "",
    buildDate: "",
    moduleVersion: "",
    moduleChecksum: "",
  };
}

export const ServerLaunch_Cerbos = {
  fromJSON(object: any): ServerLaunch_Cerbos {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      commit: isSet(object.commit) ? String(object.commit) : "",
      buildDate: isSet(object.buildDate) ? String(object.buildDate) : "",
      moduleVersion: isSet(object.moduleVersion)
        ? String(object.moduleVersion)
        : "",
      moduleChecksum: isSet(object.moduleChecksum)
        ? String(object.moduleChecksum)
        : "",
    };
  },

  toJSON(message: ServerLaunch_Cerbos): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.commit !== undefined && (obj.commit = message.commit);
    message.buildDate !== undefined && (obj.buildDate = message.buildDate);
    message.moduleVersion !== undefined &&
      (obj.moduleVersion = message.moduleVersion);
    message.moduleChecksum !== undefined &&
      (obj.moduleChecksum = message.moduleChecksum);
    return obj;
  },
};

function createBaseServerLaunch_Source(): ServerLaunch_Source {
  return { cerbos: undefined, os: "", arch: "", numCpus: 0 };
}

export const ServerLaunch_Source = {
  fromJSON(object: any): ServerLaunch_Source {
    return {
      cerbos: isSet(object.cerbos)
        ? ServerLaunch_Cerbos.fromJSON(object.cerbos)
        : undefined,
      os: isSet(object.os) ? String(object.os) : "",
      arch: isSet(object.arch) ? String(object.arch) : "",
      numCpus: isSet(object.numCpus) ? Number(object.numCpus) : 0,
    };
  },

  toJSON(message: ServerLaunch_Source): unknown {
    const obj: any = {};
    message.cerbos !== undefined &&
      (obj.cerbos = message.cerbos
        ? ServerLaunch_Cerbos.toJSON(message.cerbos)
        : undefined);
    message.os !== undefined && (obj.os = message.os);
    message.arch !== undefined && (obj.arch = message.arch);
    message.numCpus !== undefined &&
      (obj.numCpus = Math.round(message.numCpus));
    return obj;
  },
};

function createBaseServerLaunch_Features(): ServerLaunch_Features {
  return {
    audit: undefined,
    schema: undefined,
    adminApi: undefined,
    storage: undefined,
  };
}

export const ServerLaunch_Features = {
  fromJSON(object: any): ServerLaunch_Features {
    return {
      audit: isSet(object.audit)
        ? ServerLaunch_Features_Audit.fromJSON(object.audit)
        : undefined,
      schema: isSet(object.schema)
        ? ServerLaunch_Features_Schema.fromJSON(object.schema)
        : undefined,
      adminApi: isSet(object.adminApi)
        ? ServerLaunch_Features_AdminApi.fromJSON(object.adminApi)
        : undefined,
      storage: isSet(object.storage)
        ? ServerLaunch_Features_Storage.fromJSON(object.storage)
        : undefined,
    };
  },

  toJSON(message: ServerLaunch_Features): unknown {
    const obj: any = {};
    message.audit !== undefined &&
      (obj.audit = message.audit
        ? ServerLaunch_Features_Audit.toJSON(message.audit)
        : undefined);
    message.schema !== undefined &&
      (obj.schema = message.schema
        ? ServerLaunch_Features_Schema.toJSON(message.schema)
        : undefined);
    message.adminApi !== undefined &&
      (obj.adminApi = message.adminApi
        ? ServerLaunch_Features_AdminApi.toJSON(message.adminApi)
        : undefined);
    message.storage !== undefined &&
      (obj.storage = message.storage
        ? ServerLaunch_Features_Storage.toJSON(message.storage)
        : undefined);
    return obj;
  },
};

function createBaseServerLaunch_Features_Audit(): ServerLaunch_Features_Audit {
  return { enabled: false, backend: "" };
}

export const ServerLaunch_Features_Audit = {
  fromJSON(object: any): ServerLaunch_Features_Audit {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      backend: isSet(object.backend) ? String(object.backend) : "",
    };
  },

  toJSON(message: ServerLaunch_Features_Audit): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.backend !== undefined && (obj.backend = message.backend);
    return obj;
  },
};

function createBaseServerLaunch_Features_Schema(): ServerLaunch_Features_Schema {
  return { enforcement: "" };
}

export const ServerLaunch_Features_Schema = {
  fromJSON(object: any): ServerLaunch_Features_Schema {
    return {
      enforcement: isSet(object.enforcement) ? String(object.enforcement) : "",
    };
  },

  toJSON(message: ServerLaunch_Features_Schema): unknown {
    const obj: any = {};
    message.enforcement !== undefined &&
      (obj.enforcement = message.enforcement);
    return obj;
  },
};

function createBaseServerLaunch_Features_AdminApi(): ServerLaunch_Features_AdminApi {
  return { enabled: false };
}

export const ServerLaunch_Features_AdminApi = {
  fromJSON(object: any): ServerLaunch_Features_AdminApi {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
    };
  },

  toJSON(message: ServerLaunch_Features_AdminApi): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
};

function createBaseServerLaunch_Features_Storage(): ServerLaunch_Features_Storage {
  return { driver: "", store: undefined };
}

export const ServerLaunch_Features_Storage = {
  fromJSON(object: any): ServerLaunch_Features_Storage {
    return {
      driver: isSet(object.driver) ? String(object.driver) : "",
      store: isSet(object.disk)
        ? {
            $case: "disk",
            disk: ServerLaunch_Features_Storage_Disk.fromJSON(object.disk),
          }
        : isSet(object.git)
        ? {
            $case: "git",
            git: ServerLaunch_Features_Storage_Git.fromJSON(object.git),
          }
        : isSet(object.blob)
        ? {
            $case: "blob",
            blob: ServerLaunch_Features_Storage_Blob.fromJSON(object.blob),
          }
        : undefined,
    };
  },

  toJSON(message: ServerLaunch_Features_Storage): unknown {
    const obj: any = {};
    message.driver !== undefined && (obj.driver = message.driver);
    message.store?.$case === "disk" &&
      (obj.disk = message.store?.disk
        ? ServerLaunch_Features_Storage_Disk.toJSON(message.store?.disk)
        : undefined);
    message.store?.$case === "git" &&
      (obj.git = message.store?.git
        ? ServerLaunch_Features_Storage_Git.toJSON(message.store?.git)
        : undefined);
    message.store?.$case === "blob" &&
      (obj.blob = message.store?.blob
        ? ServerLaunch_Features_Storage_Blob.toJSON(message.store?.blob)
        : undefined);
    return obj;
  },
};

function createBaseServerLaunch_Features_Storage_Disk(): ServerLaunch_Features_Storage_Disk {
  return { watch: false };
}

export const ServerLaunch_Features_Storage_Disk = {
  fromJSON(object: any): ServerLaunch_Features_Storage_Disk {
    return {
      watch: isSet(object.watch) ? Boolean(object.watch) : false,
    };
  },

  toJSON(message: ServerLaunch_Features_Storage_Disk): unknown {
    const obj: any = {};
    message.watch !== undefined && (obj.watch = message.watch);
    return obj;
  },
};

function createBaseServerLaunch_Features_Storage_Git(): ServerLaunch_Features_Storage_Git {
  return { protocol: "", auth: false, pollInterval: undefined };
}

export const ServerLaunch_Features_Storage_Git = {
  fromJSON(object: any): ServerLaunch_Features_Storage_Git {
    return {
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
      auth: isSet(object.auth) ? Boolean(object.auth) : false,
      pollInterval: isSet(object.pollInterval)
        ? Duration.fromJSON(object.pollInterval)
        : undefined,
    };
  },

  toJSON(message: ServerLaunch_Features_Storage_Git): unknown {
    const obj: any = {};
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.auth !== undefined && (obj.auth = message.auth);
    message.pollInterval !== undefined &&
      (obj.pollInterval = message.pollInterval
        ? Duration.toJSON(message.pollInterval)
        : undefined);
    return obj;
  },
};

function createBaseServerLaunch_Features_Storage_Blob(): ServerLaunch_Features_Storage_Blob {
  return { provider: "", pollInterval: undefined };
}

export const ServerLaunch_Features_Storage_Blob = {
  fromJSON(object: any): ServerLaunch_Features_Storage_Blob {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      pollInterval: isSet(object.pollInterval)
        ? Duration.fromJSON(object.pollInterval)
        : undefined,
    };
  },

  toJSON(message: ServerLaunch_Features_Storage_Blob): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.pollInterval !== undefined &&
      (obj.pollInterval = message.pollInterval
        ? Duration.toJSON(message.pollInterval)
        : undefined);
    return obj;
  },
};

function createBaseServerLaunch_Stats(): ServerLaunch_Stats {
  return { policy: undefined, schema: undefined };
}

export const ServerLaunch_Stats = {
  fromJSON(object: any): ServerLaunch_Stats {
    return {
      policy: isSet(object.policy)
        ? ServerLaunch_Stats_Policy.fromJSON(object.policy)
        : undefined,
      schema: isSet(object.schema)
        ? ServerLaunch_Stats_Schema.fromJSON(object.schema)
        : undefined,
    };
  },

  toJSON(message: ServerLaunch_Stats): unknown {
    const obj: any = {};
    message.policy !== undefined &&
      (obj.policy = message.policy
        ? ServerLaunch_Stats_Policy.toJSON(message.policy)
        : undefined);
    message.schema !== undefined &&
      (obj.schema = message.schema
        ? ServerLaunch_Stats_Schema.toJSON(message.schema)
        : undefined);
    return obj;
  },
};

function createBaseServerLaunch_Stats_Policy(): ServerLaunch_Stats_Policy {
  return { count: {}, avgRuleCount: {}, avgConditionCount: {} };
}

export const ServerLaunch_Stats_Policy = {
  fromJSON(object: any): ServerLaunch_Stats_Policy {
    return {
      count: isObject(object.count)
        ? Object.entries(object.count).reduce<{ [key: string]: number }>(
            (acc, [key, value]) => {
              acc[key] = Number(value);
              return acc;
            },
            {}
          )
        : {},
      avgRuleCount: isObject(object.avgRuleCount)
        ? Object.entries(object.avgRuleCount).reduce<{ [key: string]: number }>(
            (acc, [key, value]) => {
              acc[key] = Number(value);
              return acc;
            },
            {}
          )
        : {},
      avgConditionCount: isObject(object.avgConditionCount)
        ? Object.entries(object.avgConditionCount).reduce<{
            [key: string]: number;
          }>((acc, [key, value]) => {
            acc[key] = Number(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: ServerLaunch_Stats_Policy): unknown {
    const obj: any = {};
    obj.count = {};
    if (message.count) {
      Object.entries(message.count).forEach(([k, v]) => {
        obj.count[k] = Math.round(v);
      });
    }
    obj.avgRuleCount = {};
    if (message.avgRuleCount) {
      Object.entries(message.avgRuleCount).forEach(([k, v]) => {
        obj.avgRuleCount[k] = v;
      });
    }
    obj.avgConditionCount = {};
    if (message.avgConditionCount) {
      Object.entries(message.avgConditionCount).forEach(([k, v]) => {
        obj.avgConditionCount[k] = v;
      });
    }
    return obj;
  },
};

function createBaseServerLaunch_Stats_Policy_CountEntry(): ServerLaunch_Stats_Policy_CountEntry {
  return { key: "", value: 0 };
}

export const ServerLaunch_Stats_Policy_CountEntry = {
  fromJSON(object: any): ServerLaunch_Stats_Policy_CountEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: ServerLaunch_Stats_Policy_CountEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
};

function createBaseServerLaunch_Stats_Policy_AvgRuleCountEntry(): ServerLaunch_Stats_Policy_AvgRuleCountEntry {
  return { key: "", value: 0 };
}

export const ServerLaunch_Stats_Policy_AvgRuleCountEntry = {
  fromJSON(object: any): ServerLaunch_Stats_Policy_AvgRuleCountEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: ServerLaunch_Stats_Policy_AvgRuleCountEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseServerLaunch_Stats_Policy_AvgConditionCountEntry(): ServerLaunch_Stats_Policy_AvgConditionCountEntry {
  return { key: "", value: 0 };
}

export const ServerLaunch_Stats_Policy_AvgConditionCountEntry = {
  fromJSON(object: any): ServerLaunch_Stats_Policy_AvgConditionCountEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: ServerLaunch_Stats_Policy_AvgConditionCountEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseServerLaunch_Stats_Schema(): ServerLaunch_Stats_Schema {
  return { count: 0 };
}

export const ServerLaunch_Stats_Schema = {
  fromJSON(object: any): ServerLaunch_Stats_Schema {
    return {
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: ServerLaunch_Stats_Schema): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },
};

function createBaseServerStop(): ServerStop {
  return { version: "", uptime: undefined, requestsTotal: 0 };
}

export const ServerStop = {
  fromJSON(object: any): ServerStop {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      uptime: isSet(object.uptime)
        ? Duration.fromJSON(object.uptime)
        : undefined,
      requestsTotal: isSet(object.requestsTotal)
        ? Number(object.requestsTotal)
        : 0,
    };
  },

  toJSON(message: ServerStop): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.uptime !== undefined &&
      (obj.uptime = message.uptime
        ? Duration.toJSON(message.uptime)
        : undefined);
    message.requestsTotal !== undefined &&
      (obj.requestsTotal = Math.round(message.requestsTotal));
    return obj;
  },
};

function createBaseEvent(): Event {
  return { data: undefined };
}

export const Event = {
  fromJSON(object: any): Event {
    return {
      data: isSet(object.apiActivity)
        ? {
            $case: "apiActivity",
            apiActivity: Event_ApiActivity.fromJSON(object.apiActivity),
          }
        : undefined,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.data?.$case === "apiActivity" &&
      (obj.apiActivity = message.data?.apiActivity
        ? Event_ApiActivity.toJSON(message.data?.apiActivity)
        : undefined);
    return obj;
  },
};

function createBaseEvent_CountStat(): Event_CountStat {
  return { key: "", count: 0 };
}

export const Event_CountStat = {
  fromJSON(object: any): Event_CountStat {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: Event_CountStat): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },
};

function createBaseEvent_ApiActivity(): Event_ApiActivity {
  return { version: "", uptime: undefined, methodCalls: [], userAgents: [] };
}

export const Event_ApiActivity = {
  fromJSON(object: any): Event_ApiActivity {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      uptime: isSet(object.uptime)
        ? Duration.fromJSON(object.uptime)
        : undefined,
      methodCalls: Array.isArray(object?.methodCalls)
        ? object.methodCalls.map((e: any) => Event_CountStat.fromJSON(e))
        : [],
      userAgents: Array.isArray(object?.userAgents)
        ? object.userAgents.map((e: any) => Event_CountStat.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Event_ApiActivity): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.uptime !== undefined &&
      (obj.uptime = message.uptime
        ? Duration.toJSON(message.uptime)
        : undefined);
    if (message.methodCalls) {
      obj.methodCalls = message.methodCalls.map((e) =>
        e ? Event_CountStat.toJSON(e) : undefined
      );
    } else {
      obj.methodCalls = [];
    }
    if (message.userAgents) {
      obj.userAgents = message.userAgents.map((e) =>
        e ? Event_CountStat.toJSON(e) : undefined
      );
    } else {
      obj.userAgents = [];
    }
    return obj;
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
