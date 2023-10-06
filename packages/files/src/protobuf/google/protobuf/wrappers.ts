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
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
