// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: cerbos/audit/v1/audit.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
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

function createBaseAccessLogEntry(): AccessLogEntry {
  return {
    callId: "",
    timestamp: undefined,
    peer: undefined,
    metadata: {},
    method: "",
    statusCode: 0,
    oversized: false,
  };
}

export const AccessLogEntry: MessageFns<AccessLogEntry> = {
  encode(
    message: AccessLogEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.callId !== "") {
      writer.uint32(10).string(message.callId);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork(),
      ).join();
    }
    if (message.peer !== undefined) {
      Peer.encode(message.peer, writer.uint32(26).fork()).join();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      AccessLogEntry_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork(),
      ).join();
    });
    if (message.method !== "") {
      writer.uint32(42).string(message.method);
    }
    if (message.statusCode !== 0) {
      writer.uint32(48).uint32(message.statusCode);
    }
    if (message.oversized !== false) {
      writer.uint32(56).bool(message.oversized);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AccessLogEntry {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.callId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.peer = Peer.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = AccessLogEntry_MetadataEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry4.value !== undefined) {
            message.metadata[entry4.key] = entry4.value;
          }
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.method = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.statusCode = reader.uint32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.oversized = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

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
    return obj;
  },
};

function createBaseAccessLogEntry_MetadataEntry(): AccessLogEntry_MetadataEntry {
  return { key: "", value: undefined };
}

export const AccessLogEntry_MetadataEntry: MessageFns<AccessLogEntry_MetadataEntry> =
  {
    encode(
      message: AccessLogEntry_MetadataEntry,
      writer: BinaryWriter = new BinaryWriter(),
    ): BinaryWriter {
      if (message.key !== "") {
        writer.uint32(10).string(message.key);
      }
      if (message.value !== undefined) {
        MetaValues.encode(message.value, writer.uint32(18).fork()).join();
      }
      return writer;
    },

    decode(
      input: BinaryReader | Uint8Array,
      length?: number,
    ): AccessLogEntry_MetadataEntry {
      const reader =
        input instanceof BinaryReader ? input : new BinaryReader(input);
      const end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseAccessLogEntry_MetadataEntry();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            if (tag !== 10) {
              break;
            }

            message.key = reader.string();
            continue;
          }
          case 2: {
            if (tag !== 18) {
              break;
            }

            message.value = MetaValues.decode(reader, reader.uint32());
            continue;
          }
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skip(tag & 7);
      }
      return message;
    },

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

function createBaseDecisionLogEntry(): DecisionLogEntry {
  return {
    callId: "",
    timestamp: undefined,
    peer: undefined,
    inputs: [],
    outputs: [],
    error: "",
    method: undefined,
    metadata: {},
    auditTrail: undefined,
    oversized: false,
  };
}

export const DecisionLogEntry: MessageFns<DecisionLogEntry> = {
  encode(
    message: DecisionLogEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.callId !== "") {
      writer.uint32(10).string(message.callId);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork(),
      ).join();
    }
    if (message.peer !== undefined) {
      Peer.encode(message.peer, writer.uint32(26).fork()).join();
    }
    for (const v of message.inputs) {
      CheckInput.encode(v!, writer.uint32(34).fork()).join();
    }
    for (const v of message.outputs) {
      CheckOutput.encode(v!, writer.uint32(42).fork()).join();
    }
    if (message.error !== "") {
      writer.uint32(50).string(message.error);
    }
    switch (message.method?.$case) {
      case "checkResources":
        DecisionLogEntry_CheckResources.encode(
          message.method.checkResources,
          writer.uint32(58).fork(),
        ).join();
        break;
      case "planResources":
        DecisionLogEntry_PlanResources.encode(
          message.method.planResources,
          writer.uint32(66).fork(),
        ).join();
        break;
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      DecisionLogEntry_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(122).fork(),
      ).join();
    });
    if (message.auditTrail !== undefined) {
      AuditTrail.encode(message.auditTrail, writer.uint32(130).fork()).join();
    }
    if (message.oversized !== false) {
      writer.uint32(136).bool(message.oversized);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DecisionLogEntry {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecisionLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.callId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.peer = Peer.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.inputs.push(CheckInput.decode(reader, reader.uint32()));
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.outputs.push(CheckOutput.decode(reader, reader.uint32()));
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.error = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.method = {
            $case: "checkResources",
            checkResources: DecisionLogEntry_CheckResources.decode(
              reader,
              reader.uint32(),
            ),
          };
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.method = {
            $case: "planResources",
            planResources: DecisionLogEntry_PlanResources.decode(
              reader,
              reader.uint32(),
            ),
          };
          continue;
        }
        case 15: {
          if (tag !== 122) {
            break;
          }

          const entry15 = DecisionLogEntry_MetadataEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry15.value !== undefined) {
            message.metadata[entry15.key] = entry15.value;
          }
          continue;
        }
        case 16: {
          if (tag !== 130) {
            break;
          }

          message.auditTrail = AuditTrail.decode(reader, reader.uint32());
          continue;
        }
        case 17: {
          if (tag !== 136) {
            break;
          }

          message.oversized = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

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
    return obj;
  },
};

function createBaseDecisionLogEntry_CheckResources(): DecisionLogEntry_CheckResources {
  return { inputs: [], outputs: [], error: "" };
}

export const DecisionLogEntry_CheckResources: MessageFns<DecisionLogEntry_CheckResources> =
  {
    encode(
      message: DecisionLogEntry_CheckResources,
      writer: BinaryWriter = new BinaryWriter(),
    ): BinaryWriter {
      for (const v of message.inputs) {
        CheckInput.encode(v!, writer.uint32(10).fork()).join();
      }
      for (const v of message.outputs) {
        CheckOutput.encode(v!, writer.uint32(18).fork()).join();
      }
      if (message.error !== "") {
        writer.uint32(26).string(message.error);
      }
      return writer;
    },

    decode(
      input: BinaryReader | Uint8Array,
      length?: number,
    ): DecisionLogEntry_CheckResources {
      const reader =
        input instanceof BinaryReader ? input : new BinaryReader(input);
      const end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseDecisionLogEntry_CheckResources();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            if (tag !== 10) {
              break;
            }

            message.inputs.push(CheckInput.decode(reader, reader.uint32()));
            continue;
          }
          case 2: {
            if (tag !== 18) {
              break;
            }

            message.outputs.push(CheckOutput.decode(reader, reader.uint32()));
            continue;
          }
          case 3: {
            if (tag !== 26) {
              break;
            }

            message.error = reader.string();
            continue;
          }
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skip(tag & 7);
      }
      return message;
    },

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

function createBaseDecisionLogEntry_PlanResources(): DecisionLogEntry_PlanResources {
  return { input: undefined, output: undefined, error: "" };
}

export const DecisionLogEntry_PlanResources: MessageFns<DecisionLogEntry_PlanResources> =
  {
    encode(
      message: DecisionLogEntry_PlanResources,
      writer: BinaryWriter = new BinaryWriter(),
    ): BinaryWriter {
      if (message.input !== undefined) {
        PlanResourcesInput.encode(
          message.input,
          writer.uint32(10).fork(),
        ).join();
      }
      if (message.output !== undefined) {
        PlanResourcesOutput.encode(
          message.output,
          writer.uint32(18).fork(),
        ).join();
      }
      if (message.error !== "") {
        writer.uint32(26).string(message.error);
      }
      return writer;
    },

    decode(
      input: BinaryReader | Uint8Array,
      length?: number,
    ): DecisionLogEntry_PlanResources {
      const reader =
        input instanceof BinaryReader ? input : new BinaryReader(input);
      const end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseDecisionLogEntry_PlanResources();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            if (tag !== 10) {
              break;
            }

            message.input = PlanResourcesInput.decode(reader, reader.uint32());
            continue;
          }
          case 2: {
            if (tag !== 18) {
              break;
            }

            message.output = PlanResourcesOutput.decode(
              reader,
              reader.uint32(),
            );
            continue;
          }
          case 3: {
            if (tag !== 26) {
              break;
            }

            message.error = reader.string();
            continue;
          }
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skip(tag & 7);
      }
      return message;
    },

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

function createBaseDecisionLogEntry_MetadataEntry(): DecisionLogEntry_MetadataEntry {
  return { key: "", value: undefined };
}

export const DecisionLogEntry_MetadataEntry: MessageFns<DecisionLogEntry_MetadataEntry> =
  {
    encode(
      message: DecisionLogEntry_MetadataEntry,
      writer: BinaryWriter = new BinaryWriter(),
    ): BinaryWriter {
      if (message.key !== "") {
        writer.uint32(10).string(message.key);
      }
      if (message.value !== undefined) {
        MetaValues.encode(message.value, writer.uint32(18).fork()).join();
      }
      return writer;
    },

    decode(
      input: BinaryReader | Uint8Array,
      length?: number,
    ): DecisionLogEntry_MetadataEntry {
      const reader =
        input instanceof BinaryReader ? input : new BinaryReader(input);
      const end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseDecisionLogEntry_MetadataEntry();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            if (tag !== 10) {
              break;
            }

            message.key = reader.string();
            continue;
          }
          case 2: {
            if (tag !== 18) {
              break;
            }

            message.value = MetaValues.decode(reader, reader.uint32());
            continue;
          }
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skip(tag & 7);
      }
      return message;
    },

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

function createBaseMetaValues(): MetaValues {
  return { values: [] };
}

export const MetaValues: MessageFns<MetaValues> = {
  encode(
    message: MetaValues,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MetaValues {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetaValues();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.values.push(reader.string());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

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

function createBasePeer(): Peer {
  return { address: "", authInfo: "", userAgent: "", forwardedFor: "" };
}

export const Peer: MessageFns<Peer> = {
  encode(
    message: Peer,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.authInfo !== "") {
      writer.uint32(18).string(message.authInfo);
    }
    if (message.userAgent !== "") {
      writer.uint32(26).string(message.userAgent);
    }
    if (message.forwardedFor !== "") {
      writer.uint32(34).string(message.forwardedFor);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Peer {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.authInfo = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.userAgent = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.forwardedFor = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

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

function createBaseAuditTrail(): AuditTrail {
  return { effectivePolicies: {} };
}

export const AuditTrail: MessageFns<AuditTrail> = {
  encode(
    message: AuditTrail,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    Object.entries(message.effectivePolicies).forEach(([key, value]) => {
      AuditTrail_EffectivePoliciesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AuditTrail {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditTrail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = AuditTrail_EffectivePoliciesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.effectivePolicies[entry1.key] = entry1.value;
          }
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

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

function createBaseAuditTrail_EffectivePoliciesEntry(): AuditTrail_EffectivePoliciesEntry {
  return { key: "", value: undefined };
}

export const AuditTrail_EffectivePoliciesEntry: MessageFns<AuditTrail_EffectivePoliciesEntry> =
  {
    encode(
      message: AuditTrail_EffectivePoliciesEntry,
      writer: BinaryWriter = new BinaryWriter(),
    ): BinaryWriter {
      if (message.key !== "") {
        writer.uint32(10).string(message.key);
      }
      if (message.value !== undefined) {
        SourceAttributes.encode(message.value, writer.uint32(18).fork()).join();
      }
      return writer;
    },

    decode(
      input: BinaryReader | Uint8Array,
      length?: number,
    ): AuditTrail_EffectivePoliciesEntry {
      const reader =
        input instanceof BinaryReader ? input : new BinaryReader(input);
      const end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseAuditTrail_EffectivePoliciesEntry();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            if (tag !== 10) {
              break;
            }

            message.key = reader.string();
            continue;
          }
          case 2: {
            if (tag !== 18) {
              break;
            }

            message.value = SourceAttributes.decode(reader, reader.uint32());
            continue;
          }
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skip(tag & 7);
      }
      return message;
    },

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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

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
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
}
