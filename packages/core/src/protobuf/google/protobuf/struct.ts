/* eslint-disable */

export const protobufPackage = "google.protobuf";

export enum NullValue {
  NULL_VALUE = 0,
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
