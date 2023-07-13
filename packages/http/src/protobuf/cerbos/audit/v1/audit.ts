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
      callId: isSet(object.callId) ? String(object.callId) : "",
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
      method: isSet(object.method) ? String(object.method) : "",
      statusCode: isSet(object.statusCode) ? Number(object.statusCode) : 0,
    };
  },

  toJSON(message: AccessLogEntry): unknown {
    const obj: any = {};
    message.callId !== undefined && (obj.callId = message.callId);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.peer !== undefined &&
      (obj.peer = message.peer ? Peer.toJSON(message.peer) : undefined);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = MetaValues.toJSON(v);
      });
    }
    message.method !== undefined && (obj.method = message.method);
    message.statusCode !== undefined &&
      (obj.statusCode = Math.round(message.statusCode));
    return obj;
  },
};

export const AccessLogEntry_MetadataEntry = {
  fromJSON(object: any): AccessLogEntry_MetadataEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? MetaValues.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: AccessLogEntry_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? MetaValues.toJSON(message.value)
        : undefined);
    return obj;
  },
};

export const DecisionLogEntry = {
  fromJSON(object: any): DecisionLogEntry {
    return {
      callId: isSet(object.callId) ? String(object.callId) : "",
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
      peer: isSet(object.peer) ? Peer.fromJSON(object.peer) : undefined,
      inputs: Array.isArray(object?.inputs)
        ? object.inputs.map((e: any) => CheckInput.fromJSON(e))
        : [],
      outputs: Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) => CheckOutput.fromJSON(e))
        : [],
      error: isSet(object.error) ? String(object.error) : "",
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
    message.callId !== undefined && (obj.callId = message.callId);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.peer !== undefined &&
      (obj.peer = message.peer ? Peer.toJSON(message.peer) : undefined);
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) =>
        e ? CheckInput.toJSON(e) : undefined,
      );
    } else {
      obj.inputs = [];
    }
    if (message.outputs) {
      obj.outputs = message.outputs.map((e) =>
        e ? CheckOutput.toJSON(e) : undefined,
      );
    } else {
      obj.outputs = [];
    }
    message.error !== undefined && (obj.error = message.error);
    message.method?.$case === "checkResources" &&
      (obj.checkResources = message.method?.checkResources
        ? DecisionLogEntry_CheckResources.toJSON(message.method?.checkResources)
        : undefined);
    message.method?.$case === "planResources" &&
      (obj.planResources = message.method?.planResources
        ? DecisionLogEntry_PlanResources.toJSON(message.method?.planResources)
        : undefined);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = MetaValues.toJSON(v);
      });
    }
    return obj;
  },
};

export const DecisionLogEntry_CheckResources = {
  fromJSON(object: any): DecisionLogEntry_CheckResources {
    return {
      inputs: Array.isArray(object?.inputs)
        ? object.inputs.map((e: any) => CheckInput.fromJSON(e))
        : [],
      outputs: Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) => CheckOutput.fromJSON(e))
        : [],
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: DecisionLogEntry_CheckResources): unknown {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) =>
        e ? CheckInput.toJSON(e) : undefined,
      );
    } else {
      obj.inputs = [];
    }
    if (message.outputs) {
      obj.outputs = message.outputs.map((e) =>
        e ? CheckOutput.toJSON(e) : undefined,
      );
    } else {
      obj.outputs = [];
    }
    message.error !== undefined && (obj.error = message.error);
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
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: DecisionLogEntry_PlanResources): unknown {
    const obj: any = {};
    message.input !== undefined &&
      (obj.input = message.input
        ? PlanResourcesInput.toJSON(message.input)
        : undefined);
    message.output !== undefined &&
      (obj.output = message.output
        ? PlanResourcesOutput.toJSON(message.output)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
};

export const DecisionLogEntry_MetadataEntry = {
  fromJSON(object: any): DecisionLogEntry_MetadataEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? MetaValues.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: DecisionLogEntry_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? MetaValues.toJSON(message.value)
        : undefined);
    return obj;
  },
};

export const MetaValues = {
  fromJSON(object: any): MetaValues {
    return {
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MetaValues): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },
};

export const Peer = {
  fromJSON(object: any): Peer {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      authInfo: isSet(object.authInfo) ? String(object.authInfo) : "",
      userAgent: isSet(object.userAgent) ? String(object.userAgent) : "",
      forwardedFor: isSet(object.forwardedFor)
        ? String(object.forwardedFor)
        : "",
    };
  },

  toJSON(message: Peer): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.authInfo !== undefined && (obj.authInfo = message.authInfo);
    message.userAgent !== undefined && (obj.userAgent = message.userAgent);
    message.forwardedFor !== undefined &&
      (obj.forwardedFor = message.forwardedFor);
    return obj;
  },
};

function fromTimestamp(t: Timestamp): Date {
  let millis = (Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
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
