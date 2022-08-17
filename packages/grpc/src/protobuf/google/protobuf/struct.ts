/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "google.protobuf";

/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
export enum NullValue {
  /** NULL_VALUE - Null value. */
  NULL_VALUE = 0,
}

/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
  /** Unordered map of dynamically typed values. */
  fields: { [key: string]: any | undefined };
}

export interface Struct_FieldsEntry {
  key: string;
  value: any | undefined;
}

/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of these
 * variants. Absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 */
export interface Value {
  kind?:
    | { $case: "nullValue"; nullValue: NullValue }
    | { $case: "numberValue"; numberValue: number }
    | { $case: "stringValue"; stringValue: string }
    | { $case: "boolValue"; boolValue: boolean }
    | { $case: "structValue"; structValue: { [key: string]: any } | undefined }
    | { $case: "listValue"; listValue: Array<any> | undefined };
}

/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
  /** Repeated field of dynamically typed values. */
  values: any[];
}

function createBaseStruct(): Struct {
  return { fields: {} };
}

export const Struct = {
  encode(
    message: Struct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      if (value !== undefined) {
        Struct_FieldsEntry.encode(
          { key: key as any, value },
          writer.uint32(10).fork()
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  wrap(object: { [key: string]: any } | undefined): Struct {
    const struct = createBaseStruct();
    if (object !== undefined) {
      Object.keys(object).forEach((key) => {
        struct.fields[key] = object[key];
      });
    }
    return struct;
  },

  unwrap(message: Struct): { [key: string]: any } {
    const object: { [key: string]: any } = {};
    Object.keys(message.fields).forEach((key) => {
      object[key] = message.fields[key];
    });
    return object;
  },
};

function createBaseStruct_FieldsEntry(): Struct_FieldsEntry {
  return { key: "", value: undefined };
}

export const Struct_FieldsEntry = {
  encode(
    message: Struct_FieldsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct_FieldsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseValue(): Value {
  return { kind: undefined };
}

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind?.$case === "nullValue") {
      writer.uint32(8).int32(message.kind.nullValue);
    }
    if (message.kind?.$case === "numberValue") {
      writer.uint32(17).double(message.kind.numberValue);
    }
    if (message.kind?.$case === "stringValue") {
      writer.uint32(26).string(message.kind.stringValue);
    }
    if (message.kind?.$case === "boolValue") {
      writer.uint32(32).bool(message.kind.boolValue);
    }
    if (message.kind?.$case === "structValue") {
      Struct.encode(
        Struct.wrap(message.kind.structValue),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.kind?.$case === "listValue") {
      ListValue.encode(
        ListValue.wrap(message.kind.listValue),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = {
            $case: "nullValue",
            nullValue: reader.int32() as any,
          };
          break;
        case 2:
          message.kind = { $case: "numberValue", numberValue: reader.double() };
          break;
        case 3:
          message.kind = { $case: "stringValue", stringValue: reader.string() };
          break;
        case 4:
          message.kind = { $case: "boolValue", boolValue: reader.bool() };
          break;
        case 5:
          message.kind = {
            $case: "structValue",
            structValue: Struct.unwrap(Struct.decode(reader, reader.uint32())),
          };
          break;
        case 6:
          message.kind = {
            $case: "listValue",
            listValue: ListValue.unwrap(
              ListValue.decode(reader, reader.uint32())
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  wrap(value: any): Value {
    const result = createBaseValue();

    if (value === null) {
      result.kind = { $case: "nullValue", nullValue: NullValue.NULL_VALUE };
    } else if (typeof value === "boolean") {
      result.kind = { $case: "boolValue", boolValue: value };
    } else if (typeof value === "number") {
      result.kind = { $case: "numberValue", numberValue: value };
    } else if (typeof value === "string") {
      result.kind = { $case: "stringValue", stringValue: value };
    } else if (Array.isArray(value)) {
      result.kind = { $case: "listValue", listValue: value };
    } else if (typeof value === "object") {
      result.kind = { $case: "structValue", structValue: value };
    } else if (typeof value !== "undefined") {
      throw new Error("Unsupported any value type: " + typeof value);
    }

    return result;
  },

  unwrap(
    message: Value
  ): string | number | boolean | Object | null | Array<any> | undefined {
    if (message.kind?.$case === "nullValue") {
      return null;
    } else if (message.kind?.$case === "numberValue") {
      return message.kind?.numberValue;
    } else if (message.kind?.$case === "stringValue") {
      return message.kind?.stringValue;
    } else if (message.kind?.$case === "boolValue") {
      return message.kind?.boolValue;
    } else if (message.kind?.$case === "structValue") {
      return message.kind?.structValue;
    } else if (message.kind?.$case === "listValue") {
      return message.kind?.listValue;
    } else {
      return undefined;
    }
  },
};

function createBaseListValue(): ListValue {
  return { values: [] };
}

export const ListValue = {
  encode(
    message: ListValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.values) {
      Value.encode(Value.wrap(v!), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(
            Value.unwrap(Value.decode(reader, reader.uint32()))
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  wrap(value: Array<any> | undefined): ListValue {
    const result = createBaseListValue();

    result.values = value ?? [];

    return result;
  },

  unwrap(message: ListValue): Array<any> {
    return message.values;
  },
};
