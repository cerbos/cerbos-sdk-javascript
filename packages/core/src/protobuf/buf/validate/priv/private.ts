// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: buf/validate/priv/private.proto

/* eslint-disable */

export const protobufPackage = "buf.validate.priv";

export interface FieldConstraints {
  cel: Constraint[];
}

export interface Constraint {
  id: string;
  message: string;
  expression: string;
}
