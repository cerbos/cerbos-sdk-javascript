/* eslint-disable */

export const protobufPackage = "google.protobuf";

export interface UInt64Value {
  value: number;
}

export const UInt64Value = {
  fromJSON(object: any): UInt64Value {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: UInt64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
