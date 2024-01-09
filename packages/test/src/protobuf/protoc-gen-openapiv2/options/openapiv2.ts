/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Value } from "../../google/protobuf/struct";

export const protobufPackage = "grpc.gateway.protoc_gen_openapiv2.options";

export interface ExternalDocumentation {
  description: string;
  url: string;
}

export interface Schema {
  jsonSchema: JSONSchema | undefined;
  discriminator: string;
  readOnly: boolean;
  externalDocs: ExternalDocumentation | undefined;
  example: string;
}

export interface JSONSchema {
  ref: string;
  title: string;
  description: string;
  default: string;
  readOnly: boolean;
  example: string;
  multipleOf: number;
  maximum: number;
  exclusiveMaximum: boolean;
  minimum: number;
  exclusiveMinimum: boolean;
  maxLength: string;
  minLength: string;
  pattern: string;
  maxItems: string;
  minItems: string;
  uniqueItems: boolean;
  maxProperties: string;
  minProperties: string;
  required: string[];
  array: string[];
  type: JSONSchema_JSONSchemaSimpleTypes[];
  format: string;
  enum: string[];
  fieldConfiguration: JSONSchema_FieldConfiguration | undefined;
  extensions: { [key: string]: any | undefined };
}

export enum JSONSchema_JSONSchemaSimpleTypes {
  UNKNOWN = 0,
  ARRAY = 1,
  BOOLEAN = 2,
  INTEGER = 3,
  NULL = 4,
  NUMBER = 5,
  OBJECT = 6,
  STRING = 7,
}

export function jSONSchema_JSONSchemaSimpleTypesFromJSON(
  object: any,
): JSONSchema_JSONSchemaSimpleTypes {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return JSONSchema_JSONSchemaSimpleTypes.UNKNOWN;
    case 1:
    case "ARRAY":
      return JSONSchema_JSONSchemaSimpleTypes.ARRAY;
    case 2:
    case "BOOLEAN":
      return JSONSchema_JSONSchemaSimpleTypes.BOOLEAN;
    case 3:
    case "INTEGER":
      return JSONSchema_JSONSchemaSimpleTypes.INTEGER;
    case 4:
    case "NULL":
      return JSONSchema_JSONSchemaSimpleTypes.NULL;
    case 5:
    case "NUMBER":
      return JSONSchema_JSONSchemaSimpleTypes.NUMBER;
    case 6:
    case "OBJECT":
      return JSONSchema_JSONSchemaSimpleTypes.OBJECT;
    case 7:
    case "STRING":
      return JSONSchema_JSONSchemaSimpleTypes.STRING;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum JSONSchema_JSONSchemaSimpleTypes",
      );
  }
}

export interface JSONSchema_FieldConfiguration {
  pathParamName: string;
}

export interface JSONSchema_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

function createBaseExternalDocumentation(): ExternalDocumentation {
  return { description: "", url: "" };
}

export const ExternalDocumentation = {
  encode(
    message: ExternalDocumentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ExternalDocumentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalDocumentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.description = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalDocumentation {
    return {
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
    };
  },
};

function createBaseSchema(): Schema {
  return {
    jsonSchema: undefined,
    discriminator: "",
    readOnly: false,
    externalDocs: undefined,
    example: "",
  };
}

export const Schema = {
  encode(
    message: Schema,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.jsonSchema !== undefined) {
      JSONSchema.encode(message.jsonSchema, writer.uint32(10).fork()).ldelim();
    }
    if (message.discriminator !== "") {
      writer.uint32(18).string(message.discriminator);
    }
    if (message.readOnly === true) {
      writer.uint32(24).bool(message.readOnly);
    }
    if (message.externalDocs !== undefined) {
      ExternalDocumentation.encode(
        message.externalDocs,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.example !== "") {
      writer.uint32(50).string(message.example);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schema {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jsonSchema = JSONSchema.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.discriminator = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.readOnly = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.externalDocs = ExternalDocumentation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.example = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Schema {
    return {
      jsonSchema: isSet(object.jsonSchema)
        ? JSONSchema.fromJSON(object.jsonSchema)
        : undefined,
      discriminator: isSet(object.discriminator)
        ? globalThis.String(object.discriminator)
        : "",
      readOnly: isSet(object.readOnly)
        ? globalThis.Boolean(object.readOnly)
        : false,
      externalDocs: isSet(object.externalDocs)
        ? ExternalDocumentation.fromJSON(object.externalDocs)
        : undefined,
      example: isSet(object.example) ? globalThis.String(object.example) : "",
    };
  },
};

function createBaseJSONSchema(): JSONSchema {
  return {
    ref: "",
    title: "",
    description: "",
    default: "",
    readOnly: false,
    example: "",
    multipleOf: 0,
    maximum: 0,
    exclusiveMaximum: false,
    minimum: 0,
    exclusiveMinimum: false,
    maxLength: "0",
    minLength: "0",
    pattern: "",
    maxItems: "0",
    minItems: "0",
    uniqueItems: false,
    maxProperties: "0",
    minProperties: "0",
    required: [],
    array: [],
    type: [],
    format: "",
    enum: [],
    fieldConfiguration: undefined,
    extensions: {},
  };
}

export const JSONSchema = {
  encode(
    message: JSONSchema,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ref !== "") {
      writer.uint32(26).string(message.ref);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.default !== "") {
      writer.uint32(58).string(message.default);
    }
    if (message.readOnly === true) {
      writer.uint32(64).bool(message.readOnly);
    }
    if (message.example !== "") {
      writer.uint32(74).string(message.example);
    }
    if (message.multipleOf !== 0) {
      writer.uint32(81).double(message.multipleOf);
    }
    if (message.maximum !== 0) {
      writer.uint32(89).double(message.maximum);
    }
    if (message.exclusiveMaximum === true) {
      writer.uint32(96).bool(message.exclusiveMaximum);
    }
    if (message.minimum !== 0) {
      writer.uint32(105).double(message.minimum);
    }
    if (message.exclusiveMinimum === true) {
      writer.uint32(112).bool(message.exclusiveMinimum);
    }
    if (message.maxLength !== "0") {
      writer.uint32(120).uint64(message.maxLength);
    }
    if (message.minLength !== "0") {
      writer.uint32(128).uint64(message.minLength);
    }
    if (message.pattern !== "") {
      writer.uint32(138).string(message.pattern);
    }
    if (message.maxItems !== "0") {
      writer.uint32(160).uint64(message.maxItems);
    }
    if (message.minItems !== "0") {
      writer.uint32(168).uint64(message.minItems);
    }
    if (message.uniqueItems === true) {
      writer.uint32(176).bool(message.uniqueItems);
    }
    if (message.maxProperties !== "0") {
      writer.uint32(192).uint64(message.maxProperties);
    }
    if (message.minProperties !== "0") {
      writer.uint32(200).uint64(message.minProperties);
    }
    for (const v of message.required) {
      writer.uint32(210).string(v!);
    }
    for (const v of message.array) {
      writer.uint32(274).string(v!);
    }
    writer.uint32(282).fork();
    for (const v of message.type) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.format !== "") {
      writer.uint32(290).string(message.format);
    }
    for (const v of message.enum) {
      writer.uint32(370).string(v!);
    }
    if (message.fieldConfiguration !== undefined) {
      JSONSchema_FieldConfiguration.encode(
        message.fieldConfiguration,
        writer.uint32(8010).fork(),
      ).ldelim();
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        JSONSchema_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(386).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JSONSchema {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJSONSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ref = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.title = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.default = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.readOnly = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.example = reader.string();
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.multipleOf = reader.double();
          continue;
        case 11:
          if (tag !== 89) {
            break;
          }

          message.maximum = reader.double();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.exclusiveMaximum = reader.bool();
          continue;
        case 13:
          if (tag !== 105) {
            break;
          }

          message.minimum = reader.double();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.exclusiveMinimum = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.maxLength = longToString(reader.uint64() as Long);
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.minLength = longToString(reader.uint64() as Long);
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.pattern = reader.string();
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.maxItems = longToString(reader.uint64() as Long);
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.minItems = longToString(reader.uint64() as Long);
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.uniqueItems = reader.bool();
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.maxProperties = longToString(reader.uint64() as Long);
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.minProperties = longToString(reader.uint64() as Long);
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.required.push(reader.string());
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.array.push(reader.string());
          continue;
        case 35:
          if (tag === 280) {
            message.type.push(reader.int32() as any);

            continue;
          }

          if (tag === 282) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.type.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.format = reader.string();
          continue;
        case 46:
          if (tag !== 370) {
            break;
          }

          message.enum.push(reader.string());
          continue;
        case 1001:
          if (tag !== 8010) {
            break;
          }

          message.fieldConfiguration = JSONSchema_FieldConfiguration.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 48:
          if (tag !== 386) {
            break;
          }

          const entry48 = JSONSchema_ExtensionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry48.value !== undefined) {
            message.extensions[entry48.key] = entry48.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JSONSchema {
    return {
      ref: isSet(object.ref) ? globalThis.String(object.ref) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      default: isSet(object.default) ? globalThis.String(object.default) : "",
      readOnly: isSet(object.readOnly)
        ? globalThis.Boolean(object.readOnly)
        : false,
      example: isSet(object.example) ? globalThis.String(object.example) : "",
      multipleOf: isSet(object.multipleOf)
        ? globalThis.Number(object.multipleOf)
        : 0,
      maximum: isSet(object.maximum) ? globalThis.Number(object.maximum) : 0,
      exclusiveMaximum: isSet(object.exclusiveMaximum)
        ? globalThis.Boolean(object.exclusiveMaximum)
        : false,
      minimum: isSet(object.minimum) ? globalThis.Number(object.minimum) : 0,
      exclusiveMinimum: isSet(object.exclusiveMinimum)
        ? globalThis.Boolean(object.exclusiveMinimum)
        : false,
      maxLength: isSet(object.maxLength)
        ? globalThis.String(object.maxLength)
        : "0",
      minLength: isSet(object.minLength)
        ? globalThis.String(object.minLength)
        : "0",
      pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : "",
      maxItems: isSet(object.maxItems)
        ? globalThis.String(object.maxItems)
        : "0",
      minItems: isSet(object.minItems)
        ? globalThis.String(object.minItems)
        : "0",
      uniqueItems: isSet(object.uniqueItems)
        ? globalThis.Boolean(object.uniqueItems)
        : false,
      maxProperties: isSet(object.maxProperties)
        ? globalThis.String(object.maxProperties)
        : "0",
      minProperties: isSet(object.minProperties)
        ? globalThis.String(object.minProperties)
        : "0",
      required: globalThis.Array.isArray(object?.required)
        ? object.required.map((e: any) => globalThis.String(e))
        : [],
      array: globalThis.Array.isArray(object?.array)
        ? object.array.map((e: any) => globalThis.String(e))
        : [],
      type: globalThis.Array.isArray(object?.type)
        ? object.type.map((e: any) =>
            jSONSchema_JSONSchemaSimpleTypesFromJSON(e),
          )
        : [],
      format: isSet(object.format) ? globalThis.String(object.format) : "",
      enum: globalThis.Array.isArray(object?.enum)
        ? object.enum.map((e: any) => globalThis.String(e))
        : [],
      fieldConfiguration: isSet(object.fieldConfiguration)
        ? JSONSchema_FieldConfiguration.fromJSON(object.fieldConfiguration)
        : undefined,
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },
};

function createBaseJSONSchema_FieldConfiguration(): JSONSchema_FieldConfiguration {
  return { pathParamName: "" };
}

export const JSONSchema_FieldConfiguration = {
  encode(
    message: JSONSchema_FieldConfiguration,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pathParamName !== "") {
      writer.uint32(378).string(message.pathParamName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): JSONSchema_FieldConfiguration {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJSONSchema_FieldConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 47:
          if (tag !== 378) {
            break;
          }

          message.pathParamName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JSONSchema_FieldConfiguration {
    return {
      pathParamName: isSet(object.pathParamName)
        ? globalThis.String(object.pathParamName)
        : "",
    };
  },
};

function createBaseJSONSchema_ExtensionsEntry(): JSONSchema_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const JSONSchema_ExtensionsEntry = {
  encode(
    message: JSONSchema_ExtensionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): JSONSchema_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJSONSchema_ExtensionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JSONSchema_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
