// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: cerbos/audit/v1/audit.proto

/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import {
  CheckInput,
  CheckOutput,
  PlanResourcesInput,
  PlanResourcesOutput,
} from "../../engine/v1/engine";
import { SourceAttributes } from "../../policy/v1/policy";

export const protobufPackage = "cerbos.audit.v1";

export interface AccessLogEntry {
  callId: string;
  timestamp: Date | undefined;
  peer: Peer | undefined;
  metadata: { [key: string]: MetaValues };
  method: string;
  statusCode: number;
  oversized: boolean;
  policySource: PolicySource | undefined;
}

export interface AccessLogEntry_MetadataEntry {
  key: string;
  value: MetaValues | undefined;
}

export interface DecisionLogEntry {
  callId: string;
  timestamp: Date | undefined;
  peer: Peer | undefined;
  inputs: CheckInput[];
  outputs: CheckOutput[];
  error: string;
  method?:
    | {
        $case: "checkResources";
        checkResources: DecisionLogEntry_CheckResources;
      }
    | {
        $case: "planResources";
        planResources: DecisionLogEntry_PlanResources;
      }
    | undefined;
  metadata: { [key: string]: MetaValues };
  auditTrail: AuditTrail | undefined;
  oversized: boolean;
  policySource: PolicySource | undefined;
}

export interface DecisionLogEntry_CheckResources {
  inputs: CheckInput[];
  outputs: CheckOutput[];
  error: string;
}

export interface DecisionLogEntry_PlanResources {
  input: PlanResourcesInput | undefined;
  output: PlanResourcesOutput | undefined;
  error: string;
}

export interface DecisionLogEntry_MetadataEntry {
  key: string;
  value: MetaValues | undefined;
}

export interface MetaValues {
  values: string[];
}

export interface Peer {
  address: string;
  authInfo: string;
  userAgent: string;
  forwardedFor: string;
}

export interface AuditTrail {
  effectivePolicies: { [key: string]: SourceAttributes };
}

export interface AuditTrail_EffectivePoliciesEntry {
  key: string;
  value: SourceAttributes | undefined;
}

export interface PolicySource {
  source?:
    | { $case: "blob"; blob: PolicySource_Blob }
    | { $case: "database"; database: PolicySource_Database }
    | { $case: "disk"; disk: PolicySource_Disk }
    | { $case: "git"; git: PolicySource_Git }
    | { $case: "hub"; hub: PolicySource_Hub }
    | { $case: "embeddedPdp"; embeddedPdp: PolicySource_EmbeddedPDP }
    | undefined;
}

export interface PolicySource_Blob {
  bucketUrl: string;
  prefix: string;
}

export interface PolicySource_Database {
  driver: PolicySource_Database_Driver;
}

export enum PolicySource_Database_Driver {
  DRIVER_UNSPECIFIED = 0,
  DRIVER_MYSQL = 1,
  DRIVER_POSTGRES = 2,
  DRIVER_SQLITE3 = 3,
}

export function policySource_Database_DriverFromJSON(
  object: any,
): PolicySource_Database_Driver {
  switch (object) {
    case 0:
    case "DRIVER_UNSPECIFIED":
      return PolicySource_Database_Driver.DRIVER_UNSPECIFIED;
    case 1:
    case "DRIVER_MYSQL":
      return PolicySource_Database_Driver.DRIVER_MYSQL;
    case 2:
    case "DRIVER_POSTGRES":
      return PolicySource_Database_Driver.DRIVER_POSTGRES;
    case 3:
    case "DRIVER_SQLITE3":
      return PolicySource_Database_Driver.DRIVER_SQLITE3;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum PolicySource_Database_Driver",
      );
  }
}

export function policySource_Database_DriverToJSON(
  object: PolicySource_Database_Driver,
): string {
  switch (object) {
    case PolicySource_Database_Driver.DRIVER_UNSPECIFIED:
      return "DRIVER_UNSPECIFIED";
    case PolicySource_Database_Driver.DRIVER_MYSQL:
      return "DRIVER_MYSQL";
    case PolicySource_Database_Driver.DRIVER_POSTGRES:
      return "DRIVER_POSTGRES";
    case PolicySource_Database_Driver.DRIVER_SQLITE3:
      return "DRIVER_SQLITE3";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum PolicySource_Database_Driver",
      );
  }
}

export interface PolicySource_Disk {
  directory: string;
}

export interface PolicySource_EmbeddedPDP {
  url: string;
  commitHash: string;
  builtAt: Date | undefined;
}

export interface PolicySource_Git {
  repositoryUrl: string;
  branch: string;
  subdirectory: string;
}

export interface PolicySource_Hub {
  source?:
    | { $case: "label"; label: string }
    | { $case: "deploymentId"; deploymentId: string }
    | { $case: "playgroundId"; playgroundId: string }
    | { $case: "localBundle"; localBundle: PolicySource_Hub_LocalBundle }
    | undefined;
}

export interface PolicySource_Hub_LocalBundle {
  path: string;
}

export const AccessLogEntry: MessageFns<AccessLogEntry> = {
  fromJSON(object: any): AccessLogEntry {
    return {
      callId: isSet(object.callId) ? globalThis.String(object.callId) : "",
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
      peer: isSet(object.peer) ? Peer.fromJSON(object.peer) : undefined,
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: MetaValues }>(
            (acc, [key, value]) => {
              acc[key] = MetaValues.fromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      method: isSet(object.method) ? globalThis.String(object.method) : "",
      statusCode: isSet(object.statusCode)
        ? globalThis.Number(object.statusCode)
        : 0,
      oversized: isSet(object.oversized)
        ? globalThis.Boolean(object.oversized)
        : false,
      policySource: isSet(object.policySource)
        ? PolicySource.fromJSON(object.policySource)
        : undefined,
    };
  },

  toJSON(message: AccessLogEntry): unknown {
    const obj: any = {};
    if (message.callId !== "") {
      obj.callId = message.callId;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.peer !== undefined) {
      obj.peer = Peer.toJSON(message.peer);
    }
    if (message.metadata) {
      const entries = Object.entries(message.metadata);
      if (entries.length > 0) {
        obj.metadata = {};
        entries.forEach(([k, v]) => {
          obj.metadata[k] = MetaValues.toJSON(v);
        });
      }
    }
    if (message.method !== "") {
      obj.method = message.method;
    }
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.oversized !== false) {
      obj.oversized = message.oversized;
    }
    if (message.policySource !== undefined) {
      obj.policySource = PolicySource.toJSON(message.policySource);
    }
    return obj;
  },
};

export const AccessLogEntry_MetadataEntry: MessageFns<AccessLogEntry_MetadataEntry> =
  {
    fromJSON(object: any): AccessLogEntry_MetadataEntry {
      return {
        key: isSet(object.key) ? globalThis.String(object.key) : "",
        value: isSet(object.value)
          ? MetaValues.fromJSON(object.value)
          : undefined,
      };
    },

    toJSON(message: AccessLogEntry_MetadataEntry): unknown {
      const obj: any = {};
      if (message.key !== "") {
        obj.key = message.key;
      }
      if (message.value !== undefined) {
        obj.value = MetaValues.toJSON(message.value);
      }
      return obj;
    },
  };

export const DecisionLogEntry: MessageFns<DecisionLogEntry> = {
  fromJSON(object: any): DecisionLogEntry {
    return {
      callId: isSet(object.callId) ? globalThis.String(object.callId) : "",
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
      peer: isSet(object.peer) ? Peer.fromJSON(object.peer) : undefined,
      inputs: globalThis.Array.isArray(object?.inputs)
        ? object.inputs.map((e: any) => CheckInput.fromJSON(e))
        : [],
      outputs: globalThis.Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) => CheckOutput.fromJSON(e))
        : [],
      error: isSet(object.error) ? globalThis.String(object.error) : "",
      method: isSet(object.checkResources)
        ? {
            $case: "checkResources",
            checkResources: DecisionLogEntry_CheckResources.fromJSON(
              object.checkResources,
            ),
          }
        : isSet(object.planResources)
          ? {
              $case: "planResources",
              planResources: DecisionLogEntry_PlanResources.fromJSON(
                object.planResources,
              ),
            }
          : undefined,
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: MetaValues }>(
            (acc, [key, value]) => {
              acc[key] = MetaValues.fromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      auditTrail: isSet(object.auditTrail)
        ? AuditTrail.fromJSON(object.auditTrail)
        : undefined,
      oversized: isSet(object.oversized)
        ? globalThis.Boolean(object.oversized)
        : false,
      policySource: isSet(object.policySource)
        ? PolicySource.fromJSON(object.policySource)
        : undefined,
    };
  },

  toJSON(message: DecisionLogEntry): unknown {
    const obj: any = {};
    if (message.callId !== "") {
      obj.callId = message.callId;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.peer !== undefined) {
      obj.peer = Peer.toJSON(message.peer);
    }
    if (message.inputs?.length) {
      obj.inputs = message.inputs.map((e) => CheckInput.toJSON(e));
    }
    if (message.outputs?.length) {
      obj.outputs = message.outputs.map((e) => CheckOutput.toJSON(e));
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    if (message.method?.$case === "checkResources") {
      obj.checkResources = DecisionLogEntry_CheckResources.toJSON(
        message.method.checkResources,
      );
    } else if (message.method?.$case === "planResources") {
      obj.planResources = DecisionLogEntry_PlanResources.toJSON(
        message.method.planResources,
      );
    }
    if (message.metadata) {
      const entries = Object.entries(message.metadata);
      if (entries.length > 0) {
        obj.metadata = {};
        entries.forEach(([k, v]) => {
          obj.metadata[k] = MetaValues.toJSON(v);
        });
      }
    }
    if (message.auditTrail !== undefined) {
      obj.auditTrail = AuditTrail.toJSON(message.auditTrail);
    }
    if (message.oversized !== false) {
      obj.oversized = message.oversized;
    }
    if (message.policySource !== undefined) {
      obj.policySource = PolicySource.toJSON(message.policySource);
    }
    return obj;
  },
};

export const DecisionLogEntry_CheckResources: MessageFns<DecisionLogEntry_CheckResources> =
  {
    fromJSON(object: any): DecisionLogEntry_CheckResources {
      return {
        inputs: globalThis.Array.isArray(object?.inputs)
          ? object.inputs.map((e: any) => CheckInput.fromJSON(e))
          : [],
        outputs: globalThis.Array.isArray(object?.outputs)
          ? object.outputs.map((e: any) => CheckOutput.fromJSON(e))
          : [],
        error: isSet(object.error) ? globalThis.String(object.error) : "",
      };
    },

    toJSON(message: DecisionLogEntry_CheckResources): unknown {
      const obj: any = {};
      if (message.inputs?.length) {
        obj.inputs = message.inputs.map((e) => CheckInput.toJSON(e));
      }
      if (message.outputs?.length) {
        obj.outputs = message.outputs.map((e) => CheckOutput.toJSON(e));
      }
      if (message.error !== "") {
        obj.error = message.error;
      }
      return obj;
    },
  };

export const DecisionLogEntry_PlanResources: MessageFns<DecisionLogEntry_PlanResources> =
  {
    fromJSON(object: any): DecisionLogEntry_PlanResources {
      return {
        input: isSet(object.input)
          ? PlanResourcesInput.fromJSON(object.input)
          : undefined,
        output: isSet(object.output)
          ? PlanResourcesOutput.fromJSON(object.output)
          : undefined,
        error: isSet(object.error) ? globalThis.String(object.error) : "",
      };
    },

    toJSON(message: DecisionLogEntry_PlanResources): unknown {
      const obj: any = {};
      if (message.input !== undefined) {
        obj.input = PlanResourcesInput.toJSON(message.input);
      }
      if (message.output !== undefined) {
        obj.output = PlanResourcesOutput.toJSON(message.output);
      }
      if (message.error !== "") {
        obj.error = message.error;
      }
      return obj;
    },
  };

export const DecisionLogEntry_MetadataEntry: MessageFns<DecisionLogEntry_MetadataEntry> =
  {
    fromJSON(object: any): DecisionLogEntry_MetadataEntry {
      return {
        key: isSet(object.key) ? globalThis.String(object.key) : "",
        value: isSet(object.value)
          ? MetaValues.fromJSON(object.value)
          : undefined,
      };
    },

    toJSON(message: DecisionLogEntry_MetadataEntry): unknown {
      const obj: any = {};
      if (message.key !== "") {
        obj.key = message.key;
      }
      if (message.value !== undefined) {
        obj.value = MetaValues.toJSON(message.value);
      }
      return obj;
    },
  };

export const MetaValues: MessageFns<MetaValues> = {
  fromJSON(object: any): MetaValues {
    return {
      values: globalThis.Array.isArray(object?.values)
        ? object.values.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: MetaValues): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },
};

export const Peer: MessageFns<Peer> = {
  fromJSON(object: any): Peer {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      authInfo: isSet(object.authInfo)
        ? globalThis.String(object.authInfo)
        : "",
      userAgent: isSet(object.userAgent)
        ? globalThis.String(object.userAgent)
        : "",
      forwardedFor: isSet(object.forwardedFor)
        ? globalThis.String(object.forwardedFor)
        : "",
    };
  },

  toJSON(message: Peer): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.authInfo !== "") {
      obj.authInfo = message.authInfo;
    }
    if (message.userAgent !== "") {
      obj.userAgent = message.userAgent;
    }
    if (message.forwardedFor !== "") {
      obj.forwardedFor = message.forwardedFor;
    }
    return obj;
  },
};

export const AuditTrail: MessageFns<AuditTrail> = {
  fromJSON(object: any): AuditTrail {
    return {
      effectivePolicies: isObject(object.effectivePolicies)
        ? Object.entries(object.effectivePolicies).reduce<{
            [key: string]: SourceAttributes;
          }>((acc, [key, value]) => {
            acc[key] = SourceAttributes.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: AuditTrail): unknown {
    const obj: any = {};
    if (message.effectivePolicies) {
      const entries = Object.entries(message.effectivePolicies);
      if (entries.length > 0) {
        obj.effectivePolicies = {};
        entries.forEach(([k, v]) => {
          obj.effectivePolicies[k] = SourceAttributes.toJSON(v);
        });
      }
    }
    return obj;
  },
};

export const AuditTrail_EffectivePoliciesEntry: MessageFns<AuditTrail_EffectivePoliciesEntry> =
  {
    fromJSON(object: any): AuditTrail_EffectivePoliciesEntry {
      return {
        key: isSet(object.key) ? globalThis.String(object.key) : "",
        value: isSet(object.value)
          ? SourceAttributes.fromJSON(object.value)
          : undefined,
      };
    },

    toJSON(message: AuditTrail_EffectivePoliciesEntry): unknown {
      const obj: any = {};
      if (message.key !== "") {
        obj.key = message.key;
      }
      if (message.value !== undefined) {
        obj.value = SourceAttributes.toJSON(message.value);
      }
      return obj;
    },
  };

export const PolicySource: MessageFns<PolicySource> = {
  fromJSON(object: any): PolicySource {
    return {
      source: isSet(object.blob)
        ? { $case: "blob", blob: PolicySource_Blob.fromJSON(object.blob) }
        : isSet(object.database)
          ? {
              $case: "database",
              database: PolicySource_Database.fromJSON(object.database),
            }
          : isSet(object.disk)
            ? { $case: "disk", disk: PolicySource_Disk.fromJSON(object.disk) }
            : isSet(object.git)
              ? { $case: "git", git: PolicySource_Git.fromJSON(object.git) }
              : isSet(object.hub)
                ? { $case: "hub", hub: PolicySource_Hub.fromJSON(object.hub) }
                : isSet(object.embeddedPdp)
                  ? {
                      $case: "embeddedPdp",
                      embeddedPdp: PolicySource_EmbeddedPDP.fromJSON(
                        object.embeddedPdp,
                      ),
                    }
                  : undefined,
    };
  },

  toJSON(message: PolicySource): unknown {
    const obj: any = {};
    if (message.source?.$case === "blob") {
      obj.blob = PolicySource_Blob.toJSON(message.source.blob);
    } else if (message.source?.$case === "database") {
      obj.database = PolicySource_Database.toJSON(message.source.database);
    } else if (message.source?.$case === "disk") {
      obj.disk = PolicySource_Disk.toJSON(message.source.disk);
    } else if (message.source?.$case === "git") {
      obj.git = PolicySource_Git.toJSON(message.source.git);
    } else if (message.source?.$case === "hub") {
      obj.hub = PolicySource_Hub.toJSON(message.source.hub);
    } else if (message.source?.$case === "embeddedPdp") {
      obj.embeddedPdp = PolicySource_EmbeddedPDP.toJSON(
        message.source.embeddedPdp,
      );
    }
    return obj;
  },
};

export const PolicySource_Blob: MessageFns<PolicySource_Blob> = {
  fromJSON(object: any): PolicySource_Blob {
    return {
      bucketUrl: isSet(object.bucketUrl)
        ? globalThis.String(object.bucketUrl)
        : "",
      prefix: isSet(object.prefix) ? globalThis.String(object.prefix) : "",
    };
  },

  toJSON(message: PolicySource_Blob): unknown {
    const obj: any = {};
    if (message.bucketUrl !== "") {
      obj.bucketUrl = message.bucketUrl;
    }
    if (message.prefix !== "") {
      obj.prefix = message.prefix;
    }
    return obj;
  },
};

export const PolicySource_Database: MessageFns<PolicySource_Database> = {
  fromJSON(object: any): PolicySource_Database {
    return {
      driver: isSet(object.driver)
        ? policySource_Database_DriverFromJSON(object.driver)
        : 0,
    };
  },

  toJSON(message: PolicySource_Database): unknown {
    const obj: any = {};
    if (message.driver !== 0) {
      obj.driver = policySource_Database_DriverToJSON(message.driver);
    }
    return obj;
  },
};

export const PolicySource_Disk: MessageFns<PolicySource_Disk> = {
  fromJSON(object: any): PolicySource_Disk {
    return {
      directory: isSet(object.directory)
        ? globalThis.String(object.directory)
        : "",
    };
  },

  toJSON(message: PolicySource_Disk): unknown {
    const obj: any = {};
    if (message.directory !== "") {
      obj.directory = message.directory;
    }
    return obj;
  },
};

export const PolicySource_EmbeddedPDP: MessageFns<PolicySource_EmbeddedPDP> = {
  fromJSON(object: any): PolicySource_EmbeddedPDP {
    return {
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      commitHash: isSet(object.commitHash)
        ? globalThis.String(object.commitHash)
        : "",
      builtAt: isSet(object.builtAt)
        ? fromJsonTimestamp(object.builtAt)
        : undefined,
    };
  },

  toJSON(message: PolicySource_EmbeddedPDP): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.commitHash !== "") {
      obj.commitHash = message.commitHash;
    }
    if (message.builtAt !== undefined) {
      obj.builtAt = message.builtAt.toISOString();
    }
    return obj;
  },
};

export const PolicySource_Git: MessageFns<PolicySource_Git> = {
  fromJSON(object: any): PolicySource_Git {
    return {
      repositoryUrl: isSet(object.repositoryUrl)
        ? globalThis.String(object.repositoryUrl)
        : "",
      branch: isSet(object.branch) ? globalThis.String(object.branch) : "",
      subdirectory: isSet(object.subdirectory)
        ? globalThis.String(object.subdirectory)
        : "",
    };
  },

  toJSON(message: PolicySource_Git): unknown {
    const obj: any = {};
    if (message.repositoryUrl !== "") {
      obj.repositoryUrl = message.repositoryUrl;
    }
    if (message.branch !== "") {
      obj.branch = message.branch;
    }
    if (message.subdirectory !== "") {
      obj.subdirectory = message.subdirectory;
    }
    return obj;
  },
};

export const PolicySource_Hub: MessageFns<PolicySource_Hub> = {
  fromJSON(object: any): PolicySource_Hub {
    return {
      source: isSet(object.label)
        ? { $case: "label", label: globalThis.String(object.label) }
        : isSet(object.deploymentId)
          ? {
              $case: "deploymentId",
              deploymentId: globalThis.String(object.deploymentId),
            }
          : isSet(object.playgroundId)
            ? {
                $case: "playgroundId",
                playgroundId: globalThis.String(object.playgroundId),
              }
            : isSet(object.localBundle)
              ? {
                  $case: "localBundle",
                  localBundle: PolicySource_Hub_LocalBundle.fromJSON(
                    object.localBundle,
                  ),
                }
              : undefined,
    };
  },

  toJSON(message: PolicySource_Hub): unknown {
    const obj: any = {};
    if (message.source?.$case === "label") {
      obj.label = message.source.label;
    } else if (message.source?.$case === "deploymentId") {
      obj.deploymentId = message.source.deploymentId;
    } else if (message.source?.$case === "playgroundId") {
      obj.playgroundId = message.source.playgroundId;
    } else if (message.source?.$case === "localBundle") {
      obj.localBundle = PolicySource_Hub_LocalBundle.toJSON(
        message.source.localBundle,
      );
    }
    return obj;
  },
};

export const PolicySource_Hub_LocalBundle: MessageFns<PolicySource_Hub_LocalBundle> =
  {
    fromJSON(object: any): PolicySource_Hub_LocalBundle {
      return { path: isSet(object.path) ? globalThis.String(object.path) : "" };
    },

    toJSON(message: PolicySource_Hub_LocalBundle): unknown {
      const obj: any = {};
      if (message.path !== "") {
        obj.path = message.path;
      }
      return obj;
    },
  };

function fromTimestamp(t: Timestamp): Date {
  let millis = (globalThis.Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
}
