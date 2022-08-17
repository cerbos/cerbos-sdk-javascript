/* eslint-disable */
export const protobufPackage = "google.protobuf";

/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
  /** The double value. */
  value: number;
}

/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValue {
  /** The float value. */
  value: number;
}

/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64Value {
  /** The int64 value. */
  value: string;
}

/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
  /** The uint64 value. */
  value: string;
}

/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32Value {
  /** The int32 value. */
  value: number;
}

/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32Value {
  /** The uint32 value. */
  value: number;
}

/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValue {
  /** The bool value. */
  value: boolean;
}

/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValue {
  /** The string value. */
  value: string;
}

/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValue {
  /** The bytes value. */
  value: Uint8Array;
}

function createBaseDoubleValue(): DoubleValue {
  return { value: 0 };
}

export const DoubleValue = {
  fromJSON(object: any): DoubleValue {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: DoubleValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseFloatValue(): FloatValue {
  return { value: 0 };
}

export const FloatValue = {
  fromJSON(object: any): FloatValue {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: FloatValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseInt64Value(): Int64Value {
  return { value: "0" };
}

export const Int64Value = {
  fromJSON(object: any): Int64Value {
    return {
      value: isSet(object.value) ? String(object.value) : "0",
    };
  },

  toJSON(message: Int64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseUInt64Value(): UInt64Value {
  return { value: "0" };
}

export const UInt64Value = {
  fromJSON(object: any): UInt64Value {
    return {
      value: isSet(object.value) ? String(object.value) : "0",
    };
  },

  toJSON(message: UInt64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseInt32Value(): Int32Value {
  return { value: 0 };
}

export const Int32Value = {
  fromJSON(object: any): Int32Value {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: Int32Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
};

function createBaseUInt32Value(): UInt32Value {
  return { value: 0 };
}

export const UInt32Value = {
  fromJSON(object: any): UInt32Value {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: UInt32Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
};

function createBaseBoolValue(): BoolValue {
  return { value: false };
}

export const BoolValue = {
  fromJSON(object: any): BoolValue {
    return {
      value: isSet(object.value) ? Boolean(object.value) : false,
    };
  },

  toJSON(message: BoolValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseStringValue(): StringValue {
  return { value: "" };
}

export const StringValue = {
  fromJSON(object: any): StringValue {
    return {
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: StringValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseBytesValue(): BytesValue {
  return { value: new Uint8Array() };
}

export const BytesValue = {
  fromJSON(object: any): BytesValue {
    return {
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
    };
  },

  toJSON(message: BytesValue): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
