// package: cerbos.schema.v1
// file: cerbos/schema/v1/schema.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class ValidationError extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getSource(): ValidationError.SourceMap[keyof ValidationError.SourceMap];
  setSource(value: ValidationError.SourceMap[keyof ValidationError.SourceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationError.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationError): ValidationError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidationError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationError;
  static deserializeBinaryFromReader(message: ValidationError, reader: jspb.BinaryReader): ValidationError;
}

export namespace ValidationError {
  export type AsObject = {
    path: string,
    message: string,
    source: ValidationError.SourceMap[keyof ValidationError.SourceMap],
  }

  export interface SourceMap {
    SOURCE_UNSPECIFIED: 0;
    SOURCE_PRINCIPAL: 1;
    SOURCE_RESOURCE: 2;
  }

  export const Source: SourceMap;
}

export class Schema extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDefinition(): Uint8Array | string;
  getDefinition_asU8(): Uint8Array;
  getDefinition_asB64(): string;
  setDefinition(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schema.AsObject;
  static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schema;
  static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
  export type AsObject = {
    id: string,
    definition: Uint8Array | string,
  }
}

