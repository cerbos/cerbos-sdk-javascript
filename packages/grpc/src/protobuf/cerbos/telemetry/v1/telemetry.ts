/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
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
  store?: { $case: "disk"; disk: ServerLaunch_Features_Storage_Disk } | {
    $case: "git";
    git: ServerLaunch_Features_Storage_Git;
  } | { $case: "blob"; blob: ServerLaunch_Features_Storage_Blob };
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

function createBaseServerLaunch(): ServerLaunch {
  return { version: "", source: undefined, features: undefined, stats: undefined };
}

export const ServerLaunch = {
  encode(message: ServerLaunch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.source !== undefined) {
      ServerLaunch_Source.encode(message.source, writer.uint32(18).fork()).ldelim();
    }
    if (message.features !== undefined) {
      ServerLaunch_Features.encode(message.features, writer.uint32(26).fork()).ldelim();
    }
    if (message.stats !== undefined) {
      ServerLaunch_Stats.encode(message.stats, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.source = ServerLaunch_Source.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.features = ServerLaunch_Features.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.stats = ServerLaunch_Stats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Cerbos(): ServerLaunch_Cerbos {
  return { version: "", commit: "", buildDate: "", moduleVersion: "", moduleChecksum: "" };
}

export const ServerLaunch_Cerbos = {
  encode(message: ServerLaunch_Cerbos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.commit !== "") {
      writer.uint32(18).string(message.commit);
    }
    if (message.buildDate !== "") {
      writer.uint32(26).string(message.buildDate);
    }
    if (message.moduleVersion !== "") {
      writer.uint32(34).string(message.moduleVersion);
    }
    if (message.moduleChecksum !== "") {
      writer.uint32(42).string(message.moduleChecksum);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Cerbos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Cerbos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.commit = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.buildDate = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.moduleVersion = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.moduleChecksum = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Source(): ServerLaunch_Source {
  return { cerbos: undefined, os: "", arch: "", numCpus: 0 };
}

export const ServerLaunch_Source = {
  encode(message: ServerLaunch_Source, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cerbos !== undefined) {
      ServerLaunch_Cerbos.encode(message.cerbos, writer.uint32(10).fork()).ldelim();
    }
    if (message.os !== "") {
      writer.uint32(18).string(message.os);
    }
    if (message.arch !== "") {
      writer.uint32(26).string(message.arch);
    }
    if (message.numCpus !== 0) {
      writer.uint32(32).uint32(message.numCpus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Source {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Source();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cerbos = ServerLaunch_Cerbos.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.os = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.arch = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.numCpus = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Features(): ServerLaunch_Features {
  return { audit: undefined, schema: undefined, adminApi: undefined, storage: undefined };
}

export const ServerLaunch_Features = {
  encode(message: ServerLaunch_Features, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audit !== undefined) {
      ServerLaunch_Features_Audit.encode(message.audit, writer.uint32(10).fork()).ldelim();
    }
    if (message.schema !== undefined) {
      ServerLaunch_Features_Schema.encode(message.schema, writer.uint32(18).fork()).ldelim();
    }
    if (message.adminApi !== undefined) {
      ServerLaunch_Features_AdminApi.encode(message.adminApi, writer.uint32(26).fork()).ldelim();
    }
    if (message.storage !== undefined) {
      ServerLaunch_Features_Storage.encode(message.storage, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Features {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Features();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.audit = ServerLaunch_Features_Audit.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.schema = ServerLaunch_Features_Schema.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.adminApi = ServerLaunch_Features_AdminApi.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.storage = ServerLaunch_Features_Storage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Features_Audit(): ServerLaunch_Features_Audit {
  return { enabled: false, backend: "" };
}

export const ServerLaunch_Features_Audit = {
  encode(message: ServerLaunch_Features_Audit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.backend !== "") {
      writer.uint32(18).string(message.backend);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Features_Audit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Features_Audit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.backend = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Features_Schema(): ServerLaunch_Features_Schema {
  return { enforcement: "" };
}

export const ServerLaunch_Features_Schema = {
  encode(message: ServerLaunch_Features_Schema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enforcement !== "") {
      writer.uint32(10).string(message.enforcement);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Features_Schema {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Features_Schema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.enforcement = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Features_AdminApi(): ServerLaunch_Features_AdminApi {
  return { enabled: false };
}

export const ServerLaunch_Features_AdminApi = {
  encode(message: ServerLaunch_Features_AdminApi, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Features_AdminApi {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Features_AdminApi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Features_Storage(): ServerLaunch_Features_Storage {
  return { driver: "", store: undefined };
}

export const ServerLaunch_Features_Storage = {
  encode(message: ServerLaunch_Features_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.driver !== "") {
      writer.uint32(10).string(message.driver);
    }
    switch (message.store?.$case) {
      case "disk":
        ServerLaunch_Features_Storage_Disk.encode(message.store.disk, writer.uint32(18).fork()).ldelim();
        break;
      case "git":
        ServerLaunch_Features_Storage_Git.encode(message.store.git, writer.uint32(26).fork()).ldelim();
        break;
      case "blob":
        ServerLaunch_Features_Storage_Blob.encode(message.store.blob, writer.uint32(34).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Features_Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Features_Storage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.driver = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.store = { $case: "disk", disk: ServerLaunch_Features_Storage_Disk.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.store = { $case: "git", git: ServerLaunch_Features_Storage_Git.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.store = { $case: "blob", blob: ServerLaunch_Features_Storage_Blob.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Features_Storage_Disk(): ServerLaunch_Features_Storage_Disk {
  return { watch: false };
}

export const ServerLaunch_Features_Storage_Disk = {
  encode(message: ServerLaunch_Features_Storage_Disk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.watch === true) {
      writer.uint32(8).bool(message.watch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Features_Storage_Disk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Features_Storage_Disk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.watch = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Features_Storage_Git(): ServerLaunch_Features_Storage_Git {
  return { protocol: "", auth: false, pollInterval: undefined };
}

export const ServerLaunch_Features_Storage_Git = {
  encode(message: ServerLaunch_Features_Storage_Git, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol !== "") {
      writer.uint32(10).string(message.protocol);
    }
    if (message.auth === true) {
      writer.uint32(16).bool(message.auth);
    }
    if (message.pollInterval !== undefined) {
      Duration.encode(message.pollInterval, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Features_Storage_Git {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Features_Storage_Git();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.protocol = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.auth = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.pollInterval = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Features_Storage_Blob(): ServerLaunch_Features_Storage_Blob {
  return { provider: "", pollInterval: undefined };
}

export const ServerLaunch_Features_Storage_Blob = {
  encode(message: ServerLaunch_Features_Storage_Blob, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.pollInterval !== undefined) {
      Duration.encode(message.pollInterval, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Features_Storage_Blob {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Features_Storage_Blob();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.pollInterval = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Stats(): ServerLaunch_Stats {
  return { policy: undefined, schema: undefined };
}

export const ServerLaunch_Stats = {
  encode(message: ServerLaunch_Stats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy !== undefined) {
      ServerLaunch_Stats_Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    if (message.schema !== undefined) {
      ServerLaunch_Stats_Schema.encode(message.schema, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Stats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Stats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.policy = ServerLaunch_Stats_Policy.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.schema = ServerLaunch_Stats_Schema.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Stats_Policy(): ServerLaunch_Stats_Policy {
  return { count: {}, avgRuleCount: {}, avgConditionCount: {} };
}

export const ServerLaunch_Stats_Policy = {
  encode(message: ServerLaunch_Stats_Policy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.count).forEach(([key, value]) => {
      ServerLaunch_Stats_Policy_CountEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.avgRuleCount).forEach(([key, value]) => {
      ServerLaunch_Stats_Policy_AvgRuleCountEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.avgConditionCount).forEach(([key, value]) => {
      ServerLaunch_Stats_Policy_AvgConditionCountEntry.encode({ key: key as any, value }, writer.uint32(26).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Stats_Policy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Stats_Policy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          const entry1 = ServerLaunch_Stats_Policy_CountEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.count[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          const entry2 = ServerLaunch_Stats_Policy_AvgRuleCountEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.avgRuleCount[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          const entry3 = ServerLaunch_Stats_Policy_AvgConditionCountEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.avgConditionCount[entry3.key] = entry3.value;
          }
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Stats_Policy_CountEntry(): ServerLaunch_Stats_Policy_CountEntry {
  return { key: "", value: 0 };
}

export const ServerLaunch_Stats_Policy_CountEntry = {
  encode(message: ServerLaunch_Stats_Policy_CountEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Stats_Policy_CountEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Stats_Policy_CountEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.value = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Stats_Policy_AvgRuleCountEntry(): ServerLaunch_Stats_Policy_AvgRuleCountEntry {
  return { key: "", value: 0 };
}

export const ServerLaunch_Stats_Policy_AvgRuleCountEntry = {
  encode(message: ServerLaunch_Stats_Policy_AvgRuleCountEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Stats_Policy_AvgRuleCountEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Stats_Policy_AvgRuleCountEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Stats_Policy_AvgConditionCountEntry(): ServerLaunch_Stats_Policy_AvgConditionCountEntry {
  return { key: "", value: 0 };
}

export const ServerLaunch_Stats_Policy_AvgConditionCountEntry = {
  encode(
    message: ServerLaunch_Stats_Policy_AvgConditionCountEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Stats_Policy_AvgConditionCountEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Stats_Policy_AvgConditionCountEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerLaunch_Stats_Schema(): ServerLaunch_Stats_Schema {
  return { count: 0 };
}

export const ServerLaunch_Stats_Schema = {
  encode(message: ServerLaunch_Stats_Schema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLaunch_Stats_Schema {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLaunch_Stats_Schema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.count = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerStop(): ServerStop {
  return { version: "", uptime: undefined, requestsTotal: "0" };
}

export const ServerStop = {
  encode(message: ServerStop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.uptime !== undefined) {
      Duration.encode(message.uptime, writer.uint32(18).fork()).ldelim();
    }
    if (message.requestsTotal !== "0") {
      writer.uint32(24).uint64(message.requestsTotal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerStop {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerStop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.uptime = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.requestsTotal = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseEvent(): Event {
  return { data: undefined };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.data?.$case) {
      case "apiActivity":
        Event_ApiActivity.encode(message.data.apiActivity, writer.uint32(10).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.data = { $case: "apiActivity", apiActivity: Event_ApiActivity.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseEvent_CountStat(): Event_CountStat {
  return { key: "", count: "0" };
}

export const Event_CountStat = {
  encode(message: Event_CountStat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.count !== "0") {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event_CountStat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_CountStat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.count = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseEvent_ApiActivity(): Event_ApiActivity {
  return { version: "", uptime: undefined, methodCalls: [], userAgents: [] };
}

export const Event_ApiActivity = {
  encode(message: Event_ApiActivity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.uptime !== undefined) {
      Duration.encode(message.uptime, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.methodCalls) {
      Event_CountStat.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.userAgents) {
      Event_CountStat.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event_ApiActivity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_ApiActivity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.uptime = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.methodCalls.push(Event_CountStat.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.userAgents.push(Event_CountStat.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
