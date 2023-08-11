/* eslint-disable */

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

export const AnyValue = {
  fromJSON(object: any): AnyValue {
    return {
      value: isSet(object.stringValue)
        ? { $case: "stringValue", stringValue: String(object.stringValue) }
        : isSet(object.boolValue)
        ? { $case: "boolValue", boolValue: Boolean(object.boolValue) }
        : isSet(object.intValue)
        ? { $case: "intValue", intValue: String(object.intValue) }
        : isSet(object.doubleValue)
        ? { $case: "doubleValue", doubleValue: Number(object.doubleValue) }
        : isSet(object.arrayValue)
        ? {
            $case: "arrayValue",
            arrayValue: ArrayValue.fromJSON(object.arrayValue),
          }
        : isSet(object.kvlistValue)
        ? {
            $case: "kvlistValue",
            kvlistValue: KeyValueList.fromJSON(object.kvlistValue),
          }
        : isSet(object.bytesValue)
        ? {
            $case: "bytesValue",
            bytesValue: bytesFromBase64(object.bytesValue),
          }
        : undefined,
    };
  },
};

export const ArrayValue = {
  fromJSON(object: any): ArrayValue {
    return {
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => AnyValue.fromJSON(e))
        : [],
    };
  },
};

export const KeyValueList = {
  fromJSON(object: any): KeyValueList {
    return {
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => KeyValue.fromJSON(e))
        : [],
    };
  },
};

export const KeyValue = {
  fromJSON(object: any): KeyValue {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? AnyValue.fromJSON(object.value) : undefined,
    };
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
