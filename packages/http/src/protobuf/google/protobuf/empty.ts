// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: google/protobuf/empty.proto

/* eslint-disable */

export const protobufPackage = "google.protobuf";

export interface Empty {}

export const Empty: MessageFns<Empty> = {
  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },
};

export interface MessageFns<T> {
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
}
