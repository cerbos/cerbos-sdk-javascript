/* eslint-disable */
import _m0 from "protobufjs/minimal";

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

export const ValidationError = {
  encode(message: ValidationError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidationError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidationError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.source = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSchema(): Schema {
  return { id: "", definition: new Uint8Array() };
}

export const Schema = {
  encode(message: Schema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.definition.length !== 0) {
      writer.uint32(18).bytes(message.definition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.definition = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
