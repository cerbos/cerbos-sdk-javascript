// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: cerbos/schema/v1/schema.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "cerbos.schema.v1";

export interface ValidationError {
  path: string;
  message: string;
  source: ValidationError_Source;
}

export enum ValidationError_Source {
  SOURCE_UNSPECIFIED = 0,
  SOURCE_PRINCIPAL = 1,
  SOURCE_RESOURCE = 2,
}

export interface Schema {
  id: string;
  definition: Uint8Array;
}

function createBaseValidationError(): ValidationError {
  return { path: "", message: "", source: 0 };
}

export const ValidationError: MessageFns<ValidationError> = {
  encode(
    message: ValidationError,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.source !== 0) {
      writer.uint32(24).int32(message.source);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ValidationError {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidationError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseSchema(): Schema {
  return { id: "", definition: new Uint8Array(0) };
}

export const Schema: MessageFns<Schema> = {
  encode(
    message: Schema,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.definition.length !== 0) {
      writer.uint32(18).bytes(message.definition);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Schema {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.definition = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
