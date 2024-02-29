/* eslint-disable */

export const protobufPackage = "google.protobuf";

export enum NullValue {
  NULL_VALUE = 0,
}

export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case 0:
    case "NULL_VALUE":
      return NullValue.NULL_VALUE;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum NullValue",
      );
  }
}

export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return "NULL_VALUE";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum NullValue",
      );
  }
}

export interface Struct {
  fields: { [key: string]: any | undefined };
}

export interface Struct_FieldsEntry {
  key: string;
  value: any | undefined;
}

export interface Value {
  kind?:
    | { $case: "nullValue"; nullValue: NullValue }
    | { $case: "numberValue"; numberValue: number }
    | { $case: "stringValue"; stringValue: string }
    | { $case: "boolValue"; boolValue: boolean }
    | { $case: "structValue"; structValue: { [key: string]: any } | undefined }
    | { $case: "listValue"; listValue: Array<any> | undefined }
    | undefined;
}

export interface ListValue {
  values: any[];
}

function createBaseStruct(): Struct {
  return { fields: {} };
}

export const Struct = {
  fromJSON(object: any): Struct {
    return {
      fields: isObject(object.fields)
        ? Object.entries(object.fields).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: Struct): unknown {
    const obj: any = {};
    if (message.fields) {
      const entries = Object.entries(message.fields);
      if (entries.length > 0) {
        obj.fields = {};
        entries.forEach(([k, v]) => {
          obj.fields[k] = v;
        });
      }
    }
    return obj;
  },

  wrap(object: { [key: string]: any } | undefined): Struct {
    const struct = createBaseStruct();

    if (object !== undefined) {
      for (const key of Object.keys(object)) {
        struct.fields[key] = object[key];
      }
    }
    return struct;
  },

  unwrap(message: Struct): { [key: string]: any } {
    const object: { [key: string]: any } = {};
    if (message.fields) {
      for (const key of Object.keys(message.fields)) {
        object[key] = message.fields[key];
      }
    }
    return object;
  },
};

export const Struct_FieldsEntry = {
  fromJSON(object: any): Struct_FieldsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: Struct_FieldsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },
};

function createBaseValue(): Value {
  return { kind: undefined };
}

export const Value = {
  fromJSON(object: any): Value {
    return {
      kind: isSet(object.nullValue)
        ? { $case: "nullValue", nullValue: nullValueFromJSON(object.nullValue) }
        : isSet(object.numberValue)
          ? {
              $case: "numberValue",
              numberValue: globalThis.Number(object.numberValue),
            }
          : isSet(object.stringValue)
            ? {
                $case: "stringValue",
                stringValue: globalThis.String(object.stringValue),
              }
            : isSet(object.boolValue)
              ? {
                  $case: "boolValue",
                  boolValue: globalThis.Boolean(object.boolValue),
                }
              : isSet(object.structValue)
                ? { $case: "structValue", structValue: object.structValue }
                : isSet(object.listValue)
                  ? { $case: "listValue", listValue: [...object.listValue] }
                  : undefined,
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    if (message.kind?.$case === "nullValue") {
      obj.nullValue = nullValueToJSON(message.kind.nullValue);
    }
    if (message.kind?.$case === "numberValue") {
      obj.numberValue = message.kind.numberValue;
    }
    if (message.kind?.$case === "stringValue") {
      obj.stringValue = message.kind.stringValue;
    }
    if (message.kind?.$case === "boolValue") {
      obj.boolValue = message.kind.boolValue;
    }
    if (message.kind?.$case === "structValue") {
      obj.structValue = message.kind.structValue;
    }
    if (message.kind?.$case === "listValue") {
      obj.listValue = message.kind.listValue;
    }
    return obj;
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
    } else if (globalThis.Array.isArray(value)) {
      result.kind = { $case: "listValue", listValue: value };
    } else if (typeof value === "object") {
      result.kind = { $case: "structValue", structValue: value };
    } else if (typeof value !== "undefined") {
      throw new globalThis.Error("Unsupported any value type: " + typeof value);
    }
    return result;
  },

  unwrap(
    message: Value,
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
  fromJSON(object: any): ListValue {
    return {
      values: globalThis.Array.isArray(object?.values)
        ? [...object.values]
        : [],
    };
  },

  toJSON(message: ListValue): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  wrap(array: Array<any> | undefined): ListValue {
    const result = createBaseListValue();
    result.values = array ?? [];
    return result;
  },

  unwrap(message: ListValue): Array<any> {
    if (
      message?.hasOwnProperty("values") &&
      globalThis.Array.isArray(message.values)
    ) {
      return message.values;
    } else {
      return message as any;
    }
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
