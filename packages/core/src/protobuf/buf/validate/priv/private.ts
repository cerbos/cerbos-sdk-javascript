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
