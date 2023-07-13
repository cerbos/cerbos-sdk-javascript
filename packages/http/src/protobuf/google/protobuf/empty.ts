/* eslint-disable */

export const protobufPackage = "google.protobuf";

export interface Empty {}

export const Empty = {
  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },
};
