/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "opentelemetry.proto.common.v1";

export interface AnyValue {
  value?:
    | { $case: "stringValue"; stringValue: string }
    | { $case: "boolValue"; boolValue: boolean }
    | { $case: "intValue"; intValue: string }
    | { $case: "doubleValue"; doubleValue: number }
    | { $case: "arrayValue"; arrayValue: ArrayValue }
    | { $case: "kvlistValue"; kvlistValue: KeyValueList }
    | { $case: "bytesValue"; bytesValue: Uint8Array }
    | undefined;
}

export interface ArrayValue {
  values: AnyValue[];
}

export interface KeyValueList {
  values: KeyValue[];
}

export interface KeyValue {
  key: string;
  value: AnyValue | undefined;
}

export interface InstrumentationScope {
  name: string;
  version: string;
  attributes: KeyValue[];
  droppedAttributesCount: number;
}

function createBaseAnyValue(): AnyValue {
  return { value: undefined };
}

export const AnyValue = {
  encode(
    message: AnyValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    switch (message.value?.$case) {
      case "stringValue":
        writer.uint32(10).string(message.value.stringValue);
        break;
      case "boolValue":
        writer.uint32(16).bool(message.value.boolValue);
        break;
      case "intValue":
        writer.uint32(24).int64(message.value.intValue);
        break;
      case "doubleValue":
        writer.uint32(33).double(message.value.doubleValue);
        break;
      case "arrayValue":
        ArrayValue.encode(
          message.value.arrayValue,
          writer.uint32(42).fork(),
        ).ldelim();
        break;
      case "kvlistValue":
        KeyValueList.encode(
          message.value.kvlistValue,
          writer.uint32(50).fork(),
        ).ldelim();
        break;
      case "bytesValue":
        writer.uint32(58).bytes(message.value.bytesValue);
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnyValue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = {
            $case: "stringValue",
            stringValue: reader.string(),
          };
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = { $case: "boolValue", boolValue: reader.bool() };
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.value = {
            $case: "intValue",
            intValue: longToString(reader.int64() as Long),
          };
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.value = {
            $case: "doubleValue",
            doubleValue: reader.double(),
          };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = {
            $case: "arrayValue",
            arrayValue: ArrayValue.decode(reader, reader.uint32()),
          };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.value = {
            $case: "kvlistValue",
            kvlistValue: KeyValueList.decode(reader, reader.uint32()),
          };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.value = { $case: "bytesValue", bytesValue: reader.bytes() };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseArrayValue(): ArrayValue {
  return { values: [] };
}

export const ArrayValue = {
  encode(
    message: ArrayValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.values) {
      AnyValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayValue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(AnyValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseKeyValueList(): KeyValueList {
  return { values: [] };
}

export const KeyValueList = {
  encode(
    message: KeyValueList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.values) {
      KeyValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyValueList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyValueList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(KeyValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseKeyValue(): KeyValue {
  return { key: "", value: undefined };
}

export const KeyValue = {
  encode(
    message: KeyValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      AnyValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyValue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = AnyValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseInstrumentationScope(): InstrumentationScope {
  return { name: "", version: "", attributes: [], droppedAttributesCount: 0 };
}

export const InstrumentationScope = {
  encode(
    message: InstrumentationScope,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.droppedAttributesCount !== 0) {
      writer.uint32(32).uint32(message.droppedAttributesCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): InstrumentationScope {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentationScope();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.attributes.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.droppedAttributesCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
