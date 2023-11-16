/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import {
  CheckInput,
  CheckOutput,
  PlanResourcesInput,
  PlanResourcesOutput,
} from "../../engine/v1/engine";

export const protobufPackage = "cerbos.audit.v1";

export interface AccessLogEntry {
  callId: string;
  timestamp: Date | undefined;
  peer: Peer | undefined;
  metadata: { [key: string]: MetaValues };
  method: string;
  statusCode: number;
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

export const AccessLogEntry = {
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
    return obj;
  },
};

export const AccessLogEntry_MetadataEntry = {
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

export const DecisionLogEntry = {
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
    }
    if (message.method?.$case === "planResources") {
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
    return obj;
  },
};

export const DecisionLogEntry_CheckResources = {
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

export const DecisionLogEntry_PlanResources = {
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

export const DecisionLogEntry_MetadataEntry = {
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

export const MetaValues = {
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

export const Peer = {
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
