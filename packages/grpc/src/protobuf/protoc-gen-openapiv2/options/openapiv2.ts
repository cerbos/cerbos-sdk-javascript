/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Value } from "../../google/protobuf/struct";

export const protobufPackage = "grpc.gateway.protoc_gen_openapiv2.options";

export enum Scheme {
  UNKNOWN = 0,
  HTTP = 1,
  HTTPS = 2,
  WS = 3,
  WSS = 4,
}

export interface Swagger {
  swagger: string;
  info: Info | undefined;
  host: string;
  basePath: string;
  schemes: Scheme[];
  consumes: string[];
  produces: string[];
  responses: { [key: string]: Response };
  securityDefinitions: SecurityDefinitions | undefined;
  security: SecurityRequirement[];
  tags: Tag[];
  externalDocs: ExternalDocumentation | undefined;
  extensions: { [key: string]: any | undefined };
}

export interface Swagger_ResponsesEntry {
  key: string;
  value: Response | undefined;
}

export interface Swagger_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface Operation {
  tags: string[];
  summary: string;
  description: string;
  externalDocs: ExternalDocumentation | undefined;
  operationId: string;
  consumes: string[];
  produces: string[];
  responses: { [key: string]: Response };
  schemes: Scheme[];
  deprecated: boolean;
  security: SecurityRequirement[];
  extensions: { [key: string]: any | undefined };
  parameters: Parameters | undefined;
}

export interface Operation_ResponsesEntry {
  key: string;
  value: Response | undefined;
}

export interface Operation_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface Parameters {
  headers: HeaderParameter[];
}

export interface HeaderParameter {
  name: string;
  description: string;
  type: HeaderParameter_Type;
  format: string;
  required: boolean;
}

export enum HeaderParameter_Type {
  UNKNOWN = 0,
  STRING = 1,
  NUMBER = 2,
  INTEGER = 3,
  BOOLEAN = 4,
}

export interface Header {
  description: string;
  type: string;
  format: string;
  default: string;
  pattern: string;
}

export interface Response {
  description: string;
  schema: Schema | undefined;
  headers: { [key: string]: Header };
  examples: { [key: string]: string };
  extensions: { [key: string]: any | undefined };
}

export interface Response_HeadersEntry {
  key: string;
  value: Header | undefined;
}

export interface Response_ExamplesEntry {
  key: string;
  value: string;
}

export interface Response_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface Info {
  title: string;
  description: string;
  termsOfService: string;
  contact: Contact | undefined;
  license: License | undefined;
  version: string;
  extensions: { [key: string]: any | undefined };
}

export interface Info_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface Contact {
  name: string;
  url: string;
  email: string;
}

export interface License {
  name: string;
  url: string;
}

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

export interface JSONSchema_FieldConfiguration {
  pathParamName: string;
}

export interface JSONSchema_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface Tag {
  name: string;
  description: string;
  externalDocs: ExternalDocumentation | undefined;
  extensions: { [key: string]: any | undefined };
}

export interface Tag_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface SecurityDefinitions {
  security: { [key: string]: SecurityScheme };
}

export interface SecurityDefinitions_SecurityEntry {
  key: string;
  value: SecurityScheme | undefined;
}

export interface SecurityScheme {
  type: SecurityScheme_Type;
  description: string;
  name: string;
  in: SecurityScheme_In;
  flow: SecurityScheme_Flow;
  authorizationUrl: string;
  tokenUrl: string;
  scopes: Scopes | undefined;
  extensions: { [key: string]: any | undefined };
}

export enum SecurityScheme_Type {
  TYPE_INVALID = 0,
  TYPE_BASIC = 1,
  TYPE_API_KEY = 2,
  TYPE_OAUTH2 = 3,
}

export enum SecurityScheme_In {
  IN_INVALID = 0,
  IN_QUERY = 1,
  IN_HEADER = 2,
}

export enum SecurityScheme_Flow {
  FLOW_INVALID = 0,
  FLOW_IMPLICIT = 1,
  FLOW_PASSWORD = 2,
  FLOW_APPLICATION = 3,
  FLOW_ACCESS_CODE = 4,
}

export interface SecurityScheme_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface SecurityRequirement {
  securityRequirement: {
    [key: string]: SecurityRequirement_SecurityRequirementValue;
  };
}

export interface SecurityRequirement_SecurityRequirementValue {
  scope: string[];
}

export interface SecurityRequirement_SecurityRequirementEntry {
  key: string;
  value: SecurityRequirement_SecurityRequirementValue | undefined;
}

export interface Scopes {
  scope: { [key: string]: string };
}

export interface Scopes_ScopeEntry {
  key: string;
  value: string;
}

function createBaseSwagger(): Swagger {
  return {
    swagger: "",
    info: undefined,
    host: "",
    basePath: "",
    schemes: [],
    consumes: [],
    produces: [],
    responses: {},
    securityDefinitions: undefined,
    security: [],
    tags: [],
    externalDocs: undefined,
    extensions: {},
  };
}

export const Swagger = {
  encode(
    message: Swagger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.swagger !== "") {
      writer.uint32(10).string(message.swagger);
    }
    if (message.info !== undefined) {
      Info.encode(message.info, writer.uint32(18).fork()).ldelim();
    }
    if (message.host !== "") {
      writer.uint32(26).string(message.host);
    }
    if (message.basePath !== "") {
      writer.uint32(34).string(message.basePath);
    }
    writer.uint32(42).fork();
    for (const v of message.schemes) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.consumes) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.produces) {
      writer.uint32(58).string(v!);
    }
    Object.entries(message.responses).forEach(([key, value]) => {
      Swagger_ResponsesEntry.encode(
        { key: key as any, value },
        writer.uint32(82).fork(),
      ).ldelim();
    });
    if (message.securityDefinitions !== undefined) {
      SecurityDefinitions.encode(
        message.securityDefinitions,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    for (const v of message.security) {
      SecurityRequirement.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.tags) {
      Tag.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.externalDocs !== undefined) {
      ExternalDocumentation.encode(
        message.externalDocs,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        Swagger_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(122).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Swagger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwagger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.swagger = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.info = Info.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.host = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.basePath = reader.string();
          continue;
        case 5:
          if (tag === 40) {
            message.schemes.push(reader.int32() as any);

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.schemes.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.consumes.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.produces.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          const entry10 = Swagger_ResponsesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry10.value !== undefined) {
            message.responses[entry10.key] = entry10.value;
          }
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.securityDefinitions = SecurityDefinitions.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.security.push(
            SecurityRequirement.decode(reader, reader.uint32()),
          );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.tags.push(Tag.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.externalDocs = ExternalDocumentation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          const entry15 = Swagger_ExtensionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry15.value !== undefined) {
            message.extensions[entry15.key] = entry15.value;
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
};

function createBaseSwagger_ResponsesEntry(): Swagger_ResponsesEntry {
  return { key: "", value: undefined };
}

export const Swagger_ResponsesEntry = {
  encode(
    message: Swagger_ResponsesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Response.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Swagger_ResponsesEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwagger_ResponsesEntry();
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

          message.value = Response.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseSwagger_ExtensionsEntry(): Swagger_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Swagger_ExtensionsEntry = {
  encode(
    message: Swagger_ExtensionsEntry,
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
  ): Swagger_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwagger_ExtensionsEntry();
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
};

function createBaseOperation(): Operation {
  return {
    tags: [],
    summary: "",
    description: "",
    externalDocs: undefined,
    operationId: "",
    consumes: [],
    produces: [],
    responses: {},
    schemes: [],
    deprecated: false,
    security: [],
    extensions: {},
    parameters: undefined,
  };
}

export const Operation = {
  encode(
    message: Operation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.tags) {
      writer.uint32(10).string(v!);
    }
    if (message.summary !== "") {
      writer.uint32(18).string(message.summary);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.externalDocs !== undefined) {
      ExternalDocumentation.encode(
        message.externalDocs,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.operationId !== "") {
      writer.uint32(42).string(message.operationId);
    }
    for (const v of message.consumes) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.produces) {
      writer.uint32(58).string(v!);
    }
    Object.entries(message.responses).forEach(([key, value]) => {
      Operation_ResponsesEntry.encode(
        { key: key as any, value },
        writer.uint32(74).fork(),
      ).ldelim();
    });
    writer.uint32(82).fork();
    for (const v of message.schemes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.deprecated === true) {
      writer.uint32(88).bool(message.deprecated);
    }
    for (const v of message.security) {
      SecurityRequirement.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        Operation_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(106).fork(),
        ).ldelim();
      }
    });
    if (message.parameters !== undefined) {
      Parameters.encode(message.parameters, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.summary = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.externalDocs = ExternalDocumentation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.operationId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.consumes.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.produces.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          const entry9 = Operation_ResponsesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry9.value !== undefined) {
            message.responses[entry9.key] = entry9.value;
          }
          continue;
        case 10:
          if (tag === 80) {
            message.schemes.push(reader.int32() as any);

            continue;
          }

          if (tag === 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.schemes.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.security.push(
            SecurityRequirement.decode(reader, reader.uint32()),
          );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          const entry13 = Operation_ExtensionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry13.value !== undefined) {
            message.extensions[entry13.key] = entry13.value;
          }
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.parameters = Parameters.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseOperation_ResponsesEntry(): Operation_ResponsesEntry {
  return { key: "", value: undefined };
}

export const Operation_ResponsesEntry = {
  encode(
    message: Operation_ResponsesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Response.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Operation_ResponsesEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation_ResponsesEntry();
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

          message.value = Response.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseOperation_ExtensionsEntry(): Operation_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Operation_ExtensionsEntry = {
  encode(
    message: Operation_ExtensionsEntry,
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
  ): Operation_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation_ExtensionsEntry();
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
};

function createBaseParameters(): Parameters {
  return { headers: [] };
}

export const Parameters = {
  encode(
    message: Parameters,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.headers) {
      HeaderParameter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parameters {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.headers.push(HeaderParameter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseHeaderParameter(): HeaderParameter {
  return { name: "", description: "", type: 0, format: "", required: false };
}

export const HeaderParameter = {
  encode(
    message: HeaderParameter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.format !== "") {
      writer.uint32(34).string(message.format);
    }
    if (message.required === true) {
      writer.uint32(40).bool(message.required);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderParameter {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.format = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.required = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseHeader(): Header {
  return { description: "", type: "", format: "", default: "", pattern: "" };
}

export const Header = {
  encode(
    message: Header,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.format !== "") {
      writer.uint32(26).string(message.format);
    }
    if (message.default !== "") {
      writer.uint32(50).string(message.default);
    }
    if (message.pattern !== "") {
      writer.uint32(106).string(message.pattern);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
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

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.format = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.default = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.pattern = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseResponse(): Response {
  return {
    description: "",
    schema: undefined,
    headers: {},
    examples: {},
    extensions: {},
  };
}

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.schema !== undefined) {
      Schema.encode(message.schema, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.headers).forEach(([key, value]) => {
      Response_HeadersEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork(),
      ).ldelim();
    });
    Object.entries(message.examples).forEach(([key, value]) => {
      Response_ExamplesEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork(),
      ).ldelim();
    });
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        Response_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(42).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
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

          message.schema = Schema.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = Response_HeadersEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.headers[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = Response_ExamplesEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.examples[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = Response_ExtensionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry5.value !== undefined) {
            message.extensions[entry5.key] = entry5.value;
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
};

function createBaseResponse_HeadersEntry(): Response_HeadersEntry {
  return { key: "", value: undefined };
}

export const Response_HeadersEntry = {
  encode(
    message: Response_HeadersEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Header.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Response_HeadersEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_HeadersEntry();
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

          message.value = Header.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseResponse_ExamplesEntry(): Response_ExamplesEntry {
  return { key: "", value: "" };
}

export const Response_ExamplesEntry = {
  encode(
    message: Response_ExamplesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Response_ExamplesEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_ExamplesEntry();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseResponse_ExtensionsEntry(): Response_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Response_ExtensionsEntry = {
  encode(
    message: Response_ExtensionsEntry,
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
  ): Response_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_ExtensionsEntry();
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
};

function createBaseInfo(): Info {
  return {
    title: "",
    description: "",
    termsOfService: "",
    contact: undefined,
    license: undefined,
    version: "",
    extensions: {},
  };
}

export const Info = {
  encode(message: Info, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.termsOfService !== "") {
      writer.uint32(26).string(message.termsOfService);
    }
    if (message.contact !== undefined) {
      Contact.encode(message.contact, writer.uint32(34).fork()).ldelim();
    }
    if (message.license !== undefined) {
      License.encode(message.license, writer.uint32(42).fork()).ldelim();
    }
    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        Info_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(58).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Info {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.termsOfService = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.contact = Contact.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.license = License.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.version = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          const entry7 = Info_ExtensionsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.extensions[entry7.key] = entry7.value;
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
};

function createBaseInfo_ExtensionsEntry(): Info_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Info_ExtensionsEntry = {
  encode(
    message: Info_ExtensionsEntry,
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
  ): Info_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfo_ExtensionsEntry();
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
};

function createBaseContact(): Contact {
  return { name: "", url: "", email: "" };
}

export const Contact = {
  encode(
    message: Contact,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contact {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseLicense(): License {
  return { name: "", url: "" };
}

export const License = {
  encode(
    message: License,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): License {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLicense();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
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
};

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
};

function createBaseTag(): Tag {
  return { name: "", description: "", externalDocs: undefined, extensions: {} };
}

export const Tag = {
  encode(message: Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.externalDocs !== undefined) {
      ExternalDocumentation.encode(
        message.externalDocs,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        Tag_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(34).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tag {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalDocs = ExternalDocumentation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = Tag_ExtensionsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.extensions[entry4.key] = entry4.value;
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
};

function createBaseTag_ExtensionsEntry(): Tag_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Tag_ExtensionsEntry = {
  encode(
    message: Tag_ExtensionsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Tag_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTag_ExtensionsEntry();
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
};

function createBaseSecurityDefinitions(): SecurityDefinitions {
  return { security: {} };
}

export const SecurityDefinitions = {
  encode(
    message: SecurityDefinitions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.security).forEach(([key, value]) => {
      SecurityDefinitions_SecurityEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityDefinitions {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityDefinitions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = SecurityDefinitions_SecurityEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.security[entry1.key] = entry1.value;
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
};

function createBaseSecurityDefinitions_SecurityEntry(): SecurityDefinitions_SecurityEntry {
  return { key: "", value: undefined };
}

export const SecurityDefinitions_SecurityEntry = {
  encode(
    message: SecurityDefinitions_SecurityEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SecurityScheme.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SecurityDefinitions_SecurityEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityDefinitions_SecurityEntry();
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

          message.value = SecurityScheme.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseSecurityScheme(): SecurityScheme {
  return {
    type: 0,
    description: "",
    name: "",
    in: 0,
    flow: 0,
    authorizationUrl: "",
    tokenUrl: "",
    scopes: undefined,
    extensions: {},
  };
}

export const SecurityScheme = {
  encode(
    message: SecurityScheme,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.in !== 0) {
      writer.uint32(32).int32(message.in);
    }
    if (message.flow !== 0) {
      writer.uint32(40).int32(message.flow);
    }
    if (message.authorizationUrl !== "") {
      writer.uint32(50).string(message.authorizationUrl);
    }
    if (message.tokenUrl !== "") {
      writer.uint32(58).string(message.tokenUrl);
    }
    if (message.scopes !== undefined) {
      Scopes.encode(message.scopes, writer.uint32(66).fork()).ldelim();
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        SecurityScheme_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(74).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityScheme {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityScheme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.in = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.flow = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.authorizationUrl = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tokenUrl = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.scopes = Scopes.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          const entry9 = SecurityScheme_ExtensionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry9.value !== undefined) {
            message.extensions[entry9.key] = entry9.value;
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
};

function createBaseSecurityScheme_ExtensionsEntry(): SecurityScheme_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const SecurityScheme_ExtensionsEntry = {
  encode(
    message: SecurityScheme_ExtensionsEntry,
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
  ): SecurityScheme_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityScheme_ExtensionsEntry();
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
};

function createBaseSecurityRequirement(): SecurityRequirement {
  return { securityRequirement: {} };
}

export const SecurityRequirement = {
  encode(
    message: SecurityRequirement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.securityRequirement).forEach(([key, value]) => {
      SecurityRequirement_SecurityRequirementEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityRequirement {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = SecurityRequirement_SecurityRequirementEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.securityRequirement[entry1.key] = entry1.value;
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
};

function createBaseSecurityRequirement_SecurityRequirementValue(): SecurityRequirement_SecurityRequirementValue {
  return { scope: [] };
}

export const SecurityRequirement_SecurityRequirementValue = {
  encode(
    message: SecurityRequirement_SecurityRequirementValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.scope) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SecurityRequirement_SecurityRequirementValue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityRequirement_SecurityRequirementValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scope.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseSecurityRequirement_SecurityRequirementEntry(): SecurityRequirement_SecurityRequirementEntry {
  return { key: "", value: undefined };
}

export const SecurityRequirement_SecurityRequirementEntry = {
  encode(
    message: SecurityRequirement_SecurityRequirementEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SecurityRequirement_SecurityRequirementValue.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SecurityRequirement_SecurityRequirementEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityRequirement_SecurityRequirementEntry();
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

          message.value = SecurityRequirement_SecurityRequirementValue.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseScopes(): Scopes {
  return { scope: {} };
}

export const Scopes = {
  encode(
    message: Scopes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.scope).forEach(([key, value]) => {
      Scopes_ScopeEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Scopes {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScopes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = Scopes_ScopeEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.scope[entry1.key] = entry1.value;
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
};

function createBaseScopes_ScopeEntry(): Scopes_ScopeEntry {
  return { key: "", value: "" };
}

export const Scopes_ScopeEntry = {
  encode(
    message: Scopes_ScopeEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Scopes_ScopeEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScopes_ScopeEntry();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
