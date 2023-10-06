/* eslint-disable */

export const protobufPackage = "google.protobuf";

export interface UInt64Value {
  value: string;
}

export const UInt64Value = {
  fromJSON(object: any): UInt64Value {
    return {
      value: isSet(object.value) ? globalThis.String(object.value) : "0",
    };
  },

  toJSON(message: UInt64Value): unknown {
    const obj: any = {};
    if (message.value !== "0") {
      obj.value = message.value;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
