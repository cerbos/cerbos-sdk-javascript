/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { CheckInput, CheckOutput, PlanResourcesInput, PlanResourcesOutput } from "../../engine/v1/engine";

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
  peer:
    | Peer
    | undefined;
  /** Deprecated. Use method.check_resources.inputs instead. */
  inputs: CheckInput[];
  /** Deprecated. Use method.check_resources.outputs instead. */
  outputs: CheckOutput[];
  /** Deprecated. Use method.check_resources.error instead. */
  error: string;
  method?: { $case: "checkResources"; checkResources: DecisionLogEntry_CheckResources } | {
    $case: "planResources";
    planResources: DecisionLogEntry_PlanResources;
  };
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

function createBaseAccessLogEntry(): AccessLogEntry {
  return { callId: "", timestamp: undefined, peer: undefined, metadata: {}, method: "", statusCode: 0 };
}

export const AccessLogEntry = {
  encode(message: AccessLogEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callId !== "") {
      writer.uint32(10).string(message.callId);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    if (message.peer !== undefined) {
      Peer.encode(message.peer, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      AccessLogEntry_MetadataEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    if (message.method !== "") {
      writer.uint32(42).string(message.method);
    }
    if (message.statusCode !== 0) {
      writer.uint32(48).uint32(message.statusCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessLogEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callId = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.peer = Peer.decode(reader, reader.uint32());
          break;
        case 4:
          const entry4 = AccessLogEntry_MetadataEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.metadata[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.method = reader.string();
          break;
        case 6:
          message.statusCode = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseAccessLogEntry_MetadataEntry(): AccessLogEntry_MetadataEntry {
  return { key: "", value: undefined };
}

export const AccessLogEntry_MetadataEntry = {
  encode(message: AccessLogEntry_MetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      MetaValues.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessLogEntry_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessLogEntry_MetadataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = MetaValues.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
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
  };
}

export const DecisionLogEntry = {
  encode(message: DecisionLogEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callId !== "") {
      writer.uint32(10).string(message.callId);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    if (message.peer !== undefined) {
      Peer.encode(message.peer, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.inputs) {
      CheckInput.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.outputs) {
      CheckOutput.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(50).string(message.error);
    }
    if (message.method?.$case === "checkResources") {
      DecisionLogEntry_CheckResources.encode(message.method.checkResources, writer.uint32(58).fork()).ldelim();
    }
    if (message.method?.$case === "planResources") {
      DecisionLogEntry_PlanResources.encode(message.method.planResources, writer.uint32(66).fork()).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      DecisionLogEntry_MetadataEntry.encode({ key: key as any, value }, writer.uint32(122).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecisionLogEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecisionLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callId = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.peer = Peer.decode(reader, reader.uint32());
          break;
        case 4:
          message.inputs.push(CheckInput.decode(reader, reader.uint32()));
          break;
        case 5:
          message.outputs.push(CheckOutput.decode(reader, reader.uint32()));
          break;
        case 6:
          message.error = reader.string();
          break;
        case 7:
          message.method = {
            $case: "checkResources",
            checkResources: DecisionLogEntry_CheckResources.decode(reader, reader.uint32()),
          };
          break;
        case 8:
          message.method = {
            $case: "planResources",
            planResources: DecisionLogEntry_PlanResources.decode(reader, reader.uint32()),
          };
          break;
        case 15:
          const entry15 = DecisionLogEntry_MetadataEntry.decode(reader, reader.uint32());
          if (entry15.value !== undefined) {
            message.metadata[entry15.key] = entry15.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseDecisionLogEntry_CheckResources(): DecisionLogEntry_CheckResources {
  return { inputs: [], outputs: [], error: "" };
}

export const DecisionLogEntry_CheckResources = {
  encode(message: DecisionLogEntry_CheckResources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inputs) {
      CheckInput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      CheckOutput.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecisionLogEntry_CheckResources {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecisionLogEntry_CheckResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(CheckInput.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outputs.push(CheckOutput.decode(reader, reader.uint32()));
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseDecisionLogEntry_PlanResources(): DecisionLogEntry_PlanResources {
  return { input: undefined, output: undefined, error: "" };
}

export const DecisionLogEntry_PlanResources = {
  encode(message: DecisionLogEntry_PlanResources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      PlanResourcesInput.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.output !== undefined) {
      PlanResourcesOutput.encode(message.output, writer.uint32(18).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecisionLogEntry_PlanResources {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecisionLogEntry_PlanResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.input = PlanResourcesInput.decode(reader, reader.uint32());
          break;
        case 2:
          message.output = PlanResourcesOutput.decode(reader, reader.uint32());
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseDecisionLogEntry_MetadataEntry(): DecisionLogEntry_MetadataEntry {
  return { key: "", value: undefined };
}

export const DecisionLogEntry_MetadataEntry = {
  encode(message: DecisionLogEntry_MetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      MetaValues.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecisionLogEntry_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecisionLogEntry_MetadataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = MetaValues.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseMetaValues(): MetaValues {
  return { values: [] };
}

export const MetaValues = {
  encode(message: MetaValues, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetaValues {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetaValues();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePeer(): Peer {
  return { address: "", authInfo: "", userAgent: "", forwardedFor: "" };
}

export const Peer = {
  encode(message: Peer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Peer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.authInfo = reader.string();
          break;
        case 3:
          message.userAgent = reader.string();
          break;
        case 4:
          message.forwardedFor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = Number(t.seconds) * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}
