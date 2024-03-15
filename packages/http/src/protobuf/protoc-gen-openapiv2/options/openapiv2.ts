/* eslint-disable */

export const protobufPackage = "grpc.gateway.protoc_gen_openapiv2.options";

export enum Scheme {
  UNKNOWN = 0,
  HTTP = 1,
  HTTPS = 2,
  WS = 3,
  WSS = 4,
}

export function schemeFromJSON(object: any): Scheme {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return Scheme.UNKNOWN;
    case 1:
    case "HTTP":
      return Scheme.HTTP;
    case 2:
    case "HTTPS":
      return Scheme.HTTPS;
    case 3:
    case "WS":
      return Scheme.WS;
    case 4:
    case "WSS":
      return Scheme.WSS;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Scheme",
      );
  }
}

export function schemeToJSON(object: Scheme): string {
  switch (object) {
    case Scheme.UNKNOWN:
      return "UNKNOWN";
    case Scheme.HTTP:
      return "HTTP";
    case Scheme.HTTPS:
      return "HTTPS";
    case Scheme.WS:
      return "WS";
    case Scheme.WSS:
      return "WSS";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Scheme",
      );
  }
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

export function headerParameter_TypeFromJSON(
  object: any,
): HeaderParameter_Type {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return HeaderParameter_Type.UNKNOWN;
    case 1:
    case "STRING":
      return HeaderParameter_Type.STRING;
    case 2:
    case "NUMBER":
      return HeaderParameter_Type.NUMBER;
    case 3:
    case "INTEGER":
      return HeaderParameter_Type.INTEGER;
    case 4:
    case "BOOLEAN":
      return HeaderParameter_Type.BOOLEAN;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum HeaderParameter_Type",
      );
  }
}

export function headerParameter_TypeToJSON(
  object: HeaderParameter_Type,
): string {
  switch (object) {
    case HeaderParameter_Type.UNKNOWN:
      return "UNKNOWN";
    case HeaderParameter_Type.STRING:
      return "STRING";
    case HeaderParameter_Type.NUMBER:
      return "NUMBER";
    case HeaderParameter_Type.INTEGER:
      return "INTEGER";
    case HeaderParameter_Type.BOOLEAN:
      return "BOOLEAN";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum HeaderParameter_Type",
      );
  }
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

export function jSONSchema_JSONSchemaSimpleTypesToJSON(
  object: JSONSchema_JSONSchemaSimpleTypes,
): string {
  switch (object) {
    case JSONSchema_JSONSchemaSimpleTypes.UNKNOWN:
      return "UNKNOWN";
    case JSONSchema_JSONSchemaSimpleTypes.ARRAY:
      return "ARRAY";
    case JSONSchema_JSONSchemaSimpleTypes.BOOLEAN:
      return "BOOLEAN";
    case JSONSchema_JSONSchemaSimpleTypes.INTEGER:
      return "INTEGER";
    case JSONSchema_JSONSchemaSimpleTypes.NULL:
      return "NULL";
    case JSONSchema_JSONSchemaSimpleTypes.NUMBER:
      return "NUMBER";
    case JSONSchema_JSONSchemaSimpleTypes.OBJECT:
      return "OBJECT";
    case JSONSchema_JSONSchemaSimpleTypes.STRING:
      return "STRING";
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

export function securityScheme_TypeFromJSON(object: any): SecurityScheme_Type {
  switch (object) {
    case 0:
    case "TYPE_INVALID":
      return SecurityScheme_Type.TYPE_INVALID;
    case 1:
    case "TYPE_BASIC":
      return SecurityScheme_Type.TYPE_BASIC;
    case 2:
    case "TYPE_API_KEY":
      return SecurityScheme_Type.TYPE_API_KEY;
    case 3:
    case "TYPE_OAUTH2":
      return SecurityScheme_Type.TYPE_OAUTH2;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum SecurityScheme_Type",
      );
  }
}

export function securityScheme_TypeToJSON(object: SecurityScheme_Type): string {
  switch (object) {
    case SecurityScheme_Type.TYPE_INVALID:
      return "TYPE_INVALID";
    case SecurityScheme_Type.TYPE_BASIC:
      return "TYPE_BASIC";
    case SecurityScheme_Type.TYPE_API_KEY:
      return "TYPE_API_KEY";
    case SecurityScheme_Type.TYPE_OAUTH2:
      return "TYPE_OAUTH2";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum SecurityScheme_Type",
      );
  }
}

export enum SecurityScheme_In {
  IN_INVALID = 0,
  IN_QUERY = 1,
  IN_HEADER = 2,
}

export function securityScheme_InFromJSON(object: any): SecurityScheme_In {
  switch (object) {
    case 0:
    case "IN_INVALID":
      return SecurityScheme_In.IN_INVALID;
    case 1:
    case "IN_QUERY":
      return SecurityScheme_In.IN_QUERY;
    case 2:
    case "IN_HEADER":
      return SecurityScheme_In.IN_HEADER;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum SecurityScheme_In",
      );
  }
}

export function securityScheme_InToJSON(object: SecurityScheme_In): string {
  switch (object) {
    case SecurityScheme_In.IN_INVALID:
      return "IN_INVALID";
    case SecurityScheme_In.IN_QUERY:
      return "IN_QUERY";
    case SecurityScheme_In.IN_HEADER:
      return "IN_HEADER";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum SecurityScheme_In",
      );
  }
}

export enum SecurityScheme_Flow {
  FLOW_INVALID = 0,
  FLOW_IMPLICIT = 1,
  FLOW_PASSWORD = 2,
  FLOW_APPLICATION = 3,
  FLOW_ACCESS_CODE = 4,
}

export function securityScheme_FlowFromJSON(object: any): SecurityScheme_Flow {
  switch (object) {
    case 0:
    case "FLOW_INVALID":
      return SecurityScheme_Flow.FLOW_INVALID;
    case 1:
    case "FLOW_IMPLICIT":
      return SecurityScheme_Flow.FLOW_IMPLICIT;
    case 2:
    case "FLOW_PASSWORD":
      return SecurityScheme_Flow.FLOW_PASSWORD;
    case 3:
    case "FLOW_APPLICATION":
      return SecurityScheme_Flow.FLOW_APPLICATION;
    case 4:
    case "FLOW_ACCESS_CODE":
      return SecurityScheme_Flow.FLOW_ACCESS_CODE;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum SecurityScheme_Flow",
      );
  }
}

export function securityScheme_FlowToJSON(object: SecurityScheme_Flow): string {
  switch (object) {
    case SecurityScheme_Flow.FLOW_INVALID:
      return "FLOW_INVALID";
    case SecurityScheme_Flow.FLOW_IMPLICIT:
      return "FLOW_IMPLICIT";
    case SecurityScheme_Flow.FLOW_PASSWORD:
      return "FLOW_PASSWORD";
    case SecurityScheme_Flow.FLOW_APPLICATION:
      return "FLOW_APPLICATION";
    case SecurityScheme_Flow.FLOW_ACCESS_CODE:
      return "FLOW_ACCESS_CODE";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum SecurityScheme_Flow",
      );
  }
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

export const Swagger = {
  fromJSON(object: any): Swagger {
    return {
      swagger: isSet(object.swagger) ? globalThis.String(object.swagger) : "",
      info: isSet(object.info) ? Info.fromJSON(object.info) : undefined,
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      basePath: isSet(object.basePath)
        ? globalThis.String(object.basePath)
        : "",
      schemes: globalThis.Array.isArray(object?.schemes)
        ? object.schemes.map((e: any) => schemeFromJSON(e))
        : [],
      consumes: globalThis.Array.isArray(object?.consumes)
        ? object.consumes.map((e: any) => globalThis.String(e))
        : [],
      produces: globalThis.Array.isArray(object?.produces)
        ? object.produces.map((e: any) => globalThis.String(e))
        : [],
      responses: isObject(object.responses)
        ? Object.entries(object.responses).reduce<{ [key: string]: Response }>(
            (acc, [key, value]) => {
              acc[key] = Response.fromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      securityDefinitions: isSet(object.securityDefinitions)
        ? SecurityDefinitions.fromJSON(object.securityDefinitions)
        : undefined,
      security: globalThis.Array.isArray(object?.security)
        ? object.security.map((e: any) => SecurityRequirement.fromJSON(e))
        : [],
      tags: globalThis.Array.isArray(object?.tags)
        ? object.tags.map((e: any) => Tag.fromJSON(e))
        : [],
      externalDocs: isSet(object.externalDocs)
        ? ExternalDocumentation.fromJSON(object.externalDocs)
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

  toJSON(message: Swagger): unknown {
    const obj: any = {};
    if (message.swagger !== "") {
      obj.swagger = message.swagger;
    }
    if (message.info !== undefined) {
      obj.info = Info.toJSON(message.info);
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.basePath !== "") {
      obj.basePath = message.basePath;
    }
    if (message.schemes?.length) {
      obj.schemes = message.schemes.map((e) => schemeToJSON(e));
    }
    if (message.consumes?.length) {
      obj.consumes = message.consumes;
    }
    if (message.produces?.length) {
      obj.produces = message.produces;
    }
    if (message.responses) {
      const entries = Object.entries(message.responses);
      if (entries.length > 0) {
        obj.responses = {};
        entries.forEach(([k, v]) => {
          obj.responses[k] = Response.toJSON(v);
        });
      }
    }
    if (message.securityDefinitions !== undefined) {
      obj.securityDefinitions = SecurityDefinitions.toJSON(
        message.securityDefinitions,
      );
    }
    if (message.security?.length) {
      obj.security = message.security.map((e) => SecurityRequirement.toJSON(e));
    }
    if (message.tags?.length) {
      obj.tags = message.tags.map((e) => Tag.toJSON(e));
    }
    if (message.externalDocs !== undefined) {
      obj.externalDocs = ExternalDocumentation.toJSON(message.externalDocs);
    }
    if (message.extensions) {
      const entries = Object.entries(message.extensions);
      if (entries.length > 0) {
        obj.extensions = {};
        entries.forEach(([k, v]) => {
          obj.extensions[k] = v;
        });
      }
    }
    return obj;
  },
};

export const Swagger_ResponsesEntry = {
  fromJSON(object: any): Swagger_ResponsesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Response.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Swagger_ResponsesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Response.toJSON(message.value);
    }
    return obj;
  },
};

export const Swagger_ExtensionsEntry = {
  fromJSON(object: any): Swagger_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: Swagger_ExtensionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },
};

export const Operation = {
  fromJSON(object: any): Operation {
    return {
      tags: globalThis.Array.isArray(object?.tags)
        ? object.tags.map((e: any) => globalThis.String(e))
        : [],
      summary: isSet(object.summary) ? globalThis.String(object.summary) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      externalDocs: isSet(object.externalDocs)
        ? ExternalDocumentation.fromJSON(object.externalDocs)
        : undefined,
      operationId: isSet(object.operationId)
        ? globalThis.String(object.operationId)
        : "",
      consumes: globalThis.Array.isArray(object?.consumes)
        ? object.consumes.map((e: any) => globalThis.String(e))
        : [],
      produces: globalThis.Array.isArray(object?.produces)
        ? object.produces.map((e: any) => globalThis.String(e))
        : [],
      responses: isObject(object.responses)
        ? Object.entries(object.responses).reduce<{ [key: string]: Response }>(
            (acc, [key, value]) => {
              acc[key] = Response.fromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      schemes: globalThis.Array.isArray(object?.schemes)
        ? object.schemes.map((e: any) => schemeFromJSON(e))
        : [],
      deprecated: isSet(object.deprecated)
        ? globalThis.Boolean(object.deprecated)
        : false,
      security: globalThis.Array.isArray(object?.security)
        ? object.security.map((e: any) => SecurityRequirement.fromJSON(e))
        : [],
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
      parameters: isSet(object.parameters)
        ? Parameters.fromJSON(object.parameters)
        : undefined,
    };
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    if (message.summary !== "") {
      obj.summary = message.summary;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.externalDocs !== undefined) {
      obj.externalDocs = ExternalDocumentation.toJSON(message.externalDocs);
    }
    if (message.operationId !== "") {
      obj.operationId = message.operationId;
    }
    if (message.consumes?.length) {
      obj.consumes = message.consumes;
    }
    if (message.produces?.length) {
      obj.produces = message.produces;
    }
    if (message.responses) {
      const entries = Object.entries(message.responses);
      if (entries.length > 0) {
        obj.responses = {};
        entries.forEach(([k, v]) => {
          obj.responses[k] = Response.toJSON(v);
        });
      }
    }
    if (message.schemes?.length) {
      obj.schemes = message.schemes.map((e) => schemeToJSON(e));
    }
    if (message.deprecated !== false) {
      obj.deprecated = message.deprecated;
    }
    if (message.security?.length) {
      obj.security = message.security.map((e) => SecurityRequirement.toJSON(e));
    }
    if (message.extensions) {
      const entries = Object.entries(message.extensions);
      if (entries.length > 0) {
        obj.extensions = {};
        entries.forEach(([k, v]) => {
          obj.extensions[k] = v;
        });
      }
    }
    if (message.parameters !== undefined) {
      obj.parameters = Parameters.toJSON(message.parameters);
    }
    return obj;
  },
};

export const Operation_ResponsesEntry = {
  fromJSON(object: any): Operation_ResponsesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Response.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Operation_ResponsesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Response.toJSON(message.value);
    }
    return obj;
  },
};

export const Operation_ExtensionsEntry = {
  fromJSON(object: any): Operation_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: Operation_ExtensionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },
};

export const Parameters = {
  fromJSON(object: any): Parameters {
    return {
      headers: globalThis.Array.isArray(object?.headers)
        ? object.headers.map((e: any) => HeaderParameter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Parameters): unknown {
    const obj: any = {};
    if (message.headers?.length) {
      obj.headers = message.headers.map((e) => HeaderParameter.toJSON(e));
    }
    return obj;
  },
};

export const HeaderParameter = {
  fromJSON(object: any): HeaderParameter {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      type: isSet(object.type) ? headerParameter_TypeFromJSON(object.type) : 0,
      format: isSet(object.format) ? globalThis.String(object.format) : "",
      required: isSet(object.required)
        ? globalThis.Boolean(object.required)
        : false,
    };
  },

  toJSON(message: HeaderParameter): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.type !== 0) {
      obj.type = headerParameter_TypeToJSON(message.type);
    }
    if (message.format !== "") {
      obj.format = message.format;
    }
    if (message.required !== false) {
      obj.required = message.required;
    }
    return obj;
  },
};

export const Header = {
  fromJSON(object: any): Header {
    return {
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      format: isSet(object.format) ? globalThis.String(object.format) : "",
      default: isSet(object.default) ? globalThis.String(object.default) : "",
      pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : "",
    };
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.format !== "") {
      obj.format = message.format;
    }
    if (message.default !== "") {
      obj.default = message.default;
    }
    if (message.pattern !== "") {
      obj.pattern = message.pattern;
    }
    return obj;
  },
};

export const Response = {
  fromJSON(object: any): Response {
    return {
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      schema: isSet(object.schema) ? Schema.fromJSON(object.schema) : undefined,
      headers: isObject(object.headers)
        ? Object.entries(object.headers).reduce<{ [key: string]: Header }>(
            (acc, [key, value]) => {
              acc[key] = Header.fromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      examples: isObject(object.examples)
        ? Object.entries(object.examples).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
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

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.schema !== undefined) {
      obj.schema = Schema.toJSON(message.schema);
    }
    if (message.headers) {
      const entries = Object.entries(message.headers);
      if (entries.length > 0) {
        obj.headers = {};
        entries.forEach(([k, v]) => {
          obj.headers[k] = Header.toJSON(v);
        });
      }
    }
    if (message.examples) {
      const entries = Object.entries(message.examples);
      if (entries.length > 0) {
        obj.examples = {};
        entries.forEach(([k, v]) => {
          obj.examples[k] = v;
        });
      }
    }
    if (message.extensions) {
      const entries = Object.entries(message.extensions);
      if (entries.length > 0) {
        obj.extensions = {};
        entries.forEach(([k, v]) => {
          obj.extensions[k] = v;
        });
      }
    }
    return obj;
  },
};

export const Response_HeadersEntry = {
  fromJSON(object: any): Response_HeadersEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Header.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Response_HeadersEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Header.toJSON(message.value);
    }
    return obj;
  },
};

export const Response_ExamplesEntry = {
  fromJSON(object: any): Response_ExamplesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Response_ExamplesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
};

export const Response_ExtensionsEntry = {
  fromJSON(object: any): Response_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: Response_ExtensionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },
};

export const Info = {
  fromJSON(object: any): Info {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      termsOfService: isSet(object.termsOfService)
        ? globalThis.String(object.termsOfService)
        : "",
      contact: isSet(object.contact)
        ? Contact.fromJSON(object.contact)
        : undefined,
      license: isSet(object.license)
        ? License.fromJSON(object.license)
        : undefined,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
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

  toJSON(message: Info): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.termsOfService !== "") {
      obj.termsOfService = message.termsOfService;
    }
    if (message.contact !== undefined) {
      obj.contact = Contact.toJSON(message.contact);
    }
    if (message.license !== undefined) {
      obj.license = License.toJSON(message.license);
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.extensions) {
      const entries = Object.entries(message.extensions);
      if (entries.length > 0) {
        obj.extensions = {};
        entries.forEach(([k, v]) => {
          obj.extensions[k] = v;
        });
      }
    }
    return obj;
  },
};

export const Info_ExtensionsEntry = {
  fromJSON(object: any): Info_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: Info_ExtensionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },
};

export const Contact = {
  fromJSON(object: any): Contact {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
    };
  },

  toJSON(message: Contact): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    return obj;
  },
};

export const License = {
  fromJSON(object: any): License {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
    };
  },

  toJSON(message: License): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    return obj;
  },
};

export const ExternalDocumentation = {
  fromJSON(object: any): ExternalDocumentation {
    return {
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
    };
  },

  toJSON(message: ExternalDocumentation): unknown {
    const obj: any = {};
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    return obj;
  },
};

export const Schema = {
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

  toJSON(message: Schema): unknown {
    const obj: any = {};
    if (message.jsonSchema !== undefined) {
      obj.jsonSchema = JSONSchema.toJSON(message.jsonSchema);
    }
    if (message.discriminator !== "") {
      obj.discriminator = message.discriminator;
    }
    if (message.readOnly !== false) {
      obj.readOnly = message.readOnly;
    }
    if (message.externalDocs !== undefined) {
      obj.externalDocs = ExternalDocumentation.toJSON(message.externalDocs);
    }
    if (message.example !== "") {
      obj.example = message.example;
    }
    return obj;
  },
};

export const JSONSchema = {
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

  toJSON(message: JSONSchema): unknown {
    const obj: any = {};
    if (message.ref !== "") {
      obj.ref = message.ref;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.default !== "") {
      obj.default = message.default;
    }
    if (message.readOnly !== false) {
      obj.readOnly = message.readOnly;
    }
    if (message.example !== "") {
      obj.example = message.example;
    }
    if (message.multipleOf !== 0) {
      obj.multipleOf = message.multipleOf;
    }
    if (message.maximum !== 0) {
      obj.maximum = message.maximum;
    }
    if (message.exclusiveMaximum !== false) {
      obj.exclusiveMaximum = message.exclusiveMaximum;
    }
    if (message.minimum !== 0) {
      obj.minimum = message.minimum;
    }
    if (message.exclusiveMinimum !== false) {
      obj.exclusiveMinimum = message.exclusiveMinimum;
    }
    if (message.maxLength !== "0") {
      obj.maxLength = message.maxLength;
    }
    if (message.minLength !== "0") {
      obj.minLength = message.minLength;
    }
    if (message.pattern !== "") {
      obj.pattern = message.pattern;
    }
    if (message.maxItems !== "0") {
      obj.maxItems = message.maxItems;
    }
    if (message.minItems !== "0") {
      obj.minItems = message.minItems;
    }
    if (message.uniqueItems !== false) {
      obj.uniqueItems = message.uniqueItems;
    }
    if (message.maxProperties !== "0") {
      obj.maxProperties = message.maxProperties;
    }
    if (message.minProperties !== "0") {
      obj.minProperties = message.minProperties;
    }
    if (message.required?.length) {
      obj.required = message.required;
    }
    if (message.array?.length) {
      obj.array = message.array;
    }
    if (message.type?.length) {
      obj.type = message.type.map((e) =>
        jSONSchema_JSONSchemaSimpleTypesToJSON(e),
      );
    }
    if (message.format !== "") {
      obj.format = message.format;
    }
    if (message.enum?.length) {
      obj.enum = message.enum;
    }
    if (message.fieldConfiguration !== undefined) {
      obj.fieldConfiguration = JSONSchema_FieldConfiguration.toJSON(
        message.fieldConfiguration,
      );
    }
    if (message.extensions) {
      const entries = Object.entries(message.extensions);
      if (entries.length > 0) {
        obj.extensions = {};
        entries.forEach(([k, v]) => {
          obj.extensions[k] = v;
        });
      }
    }
    return obj;
  },
};

export const JSONSchema_FieldConfiguration = {
  fromJSON(object: any): JSONSchema_FieldConfiguration {
    return {
      pathParamName: isSet(object.pathParamName)
        ? globalThis.String(object.pathParamName)
        : "",
    };
  },

  toJSON(message: JSONSchema_FieldConfiguration): unknown {
    const obj: any = {};
    if (message.pathParamName !== "") {
      obj.pathParamName = message.pathParamName;
    }
    return obj;
  },
};

export const JSONSchema_ExtensionsEntry = {
  fromJSON(object: any): JSONSchema_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: JSONSchema_ExtensionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },
};

export const Tag = {
  fromJSON(object: any): Tag {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      externalDocs: isSet(object.externalDocs)
        ? ExternalDocumentation.fromJSON(object.externalDocs)
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

  toJSON(message: Tag): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.externalDocs !== undefined) {
      obj.externalDocs = ExternalDocumentation.toJSON(message.externalDocs);
    }
    if (message.extensions) {
      const entries = Object.entries(message.extensions);
      if (entries.length > 0) {
        obj.extensions = {};
        entries.forEach(([k, v]) => {
          obj.extensions[k] = v;
        });
      }
    }
    return obj;
  },
};

export const Tag_ExtensionsEntry = {
  fromJSON(object: any): Tag_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: Tag_ExtensionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },
};

export const SecurityDefinitions = {
  fromJSON(object: any): SecurityDefinitions {
    return {
      security: isObject(object.security)
        ? Object.entries(object.security).reduce<{
            [key: string]: SecurityScheme;
          }>((acc, [key, value]) => {
            acc[key] = SecurityScheme.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: SecurityDefinitions): unknown {
    const obj: any = {};
    if (message.security) {
      const entries = Object.entries(message.security);
      if (entries.length > 0) {
        obj.security = {};
        entries.forEach(([k, v]) => {
          obj.security[k] = SecurityScheme.toJSON(v);
        });
      }
    }
    return obj;
  },
};

export const SecurityDefinitions_SecurityEntry = {
  fromJSON(object: any): SecurityDefinitions_SecurityEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value)
        ? SecurityScheme.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: SecurityDefinitions_SecurityEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = SecurityScheme.toJSON(message.value);
    }
    return obj;
  },
};

export const SecurityScheme = {
  fromJSON(object: any): SecurityScheme {
    return {
      type: isSet(object.type) ? securityScheme_TypeFromJSON(object.type) : 0,
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      in: isSet(object.in) ? securityScheme_InFromJSON(object.in) : 0,
      flow: isSet(object.flow) ? securityScheme_FlowFromJSON(object.flow) : 0,
      authorizationUrl: isSet(object.authorizationUrl)
        ? globalThis.String(object.authorizationUrl)
        : "",
      tokenUrl: isSet(object.tokenUrl)
        ? globalThis.String(object.tokenUrl)
        : "",
      scopes: isSet(object.scopes) ? Scopes.fromJSON(object.scopes) : undefined,
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

  toJSON(message: SecurityScheme): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = securityScheme_TypeToJSON(message.type);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.in !== 0) {
      obj.in = securityScheme_InToJSON(message.in);
    }
    if (message.flow !== 0) {
      obj.flow = securityScheme_FlowToJSON(message.flow);
    }
    if (message.authorizationUrl !== "") {
      obj.authorizationUrl = message.authorizationUrl;
    }
    if (message.tokenUrl !== "") {
      obj.tokenUrl = message.tokenUrl;
    }
    if (message.scopes !== undefined) {
      obj.scopes = Scopes.toJSON(message.scopes);
    }
    if (message.extensions) {
      const entries = Object.entries(message.extensions);
      if (entries.length > 0) {
        obj.extensions = {};
        entries.forEach(([k, v]) => {
          obj.extensions[k] = v;
        });
      }
    }
    return obj;
  },
};

export const SecurityScheme_ExtensionsEntry = {
  fromJSON(object: any): SecurityScheme_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: SecurityScheme_ExtensionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },
};

export const SecurityRequirement = {
  fromJSON(object: any): SecurityRequirement {
    return {
      securityRequirement: isObject(object.securityRequirement)
        ? Object.entries(object.securityRequirement).reduce<{
            [key: string]: SecurityRequirement_SecurityRequirementValue;
          }>((acc, [key, value]) => {
            acc[key] =
              SecurityRequirement_SecurityRequirementValue.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: SecurityRequirement): unknown {
    const obj: any = {};
    if (message.securityRequirement) {
      const entries = Object.entries(message.securityRequirement);
      if (entries.length > 0) {
        obj.securityRequirement = {};
        entries.forEach(([k, v]) => {
          obj.securityRequirement[k] =
            SecurityRequirement_SecurityRequirementValue.toJSON(v);
        });
      }
    }
    return obj;
  },
};

export const SecurityRequirement_SecurityRequirementValue = {
  fromJSON(object: any): SecurityRequirement_SecurityRequirementValue {
    return {
      scope: globalThis.Array.isArray(object?.scope)
        ? object.scope.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: SecurityRequirement_SecurityRequirementValue): unknown {
    const obj: any = {};
    if (message.scope?.length) {
      obj.scope = message.scope;
    }
    return obj;
  },
};

export const SecurityRequirement_SecurityRequirementEntry = {
  fromJSON(object: any): SecurityRequirement_SecurityRequirementEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value)
        ? SecurityRequirement_SecurityRequirementValue.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: SecurityRequirement_SecurityRequirementEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = SecurityRequirement_SecurityRequirementValue.toJSON(
        message.value,
      );
    }
    return obj;
  },
};

export const Scopes = {
  fromJSON(object: any): Scopes {
    return {
      scope: isObject(object.scope)
        ? Object.entries(object.scope).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
    };
  },

  toJSON(message: Scopes): unknown {
    const obj: any = {};
    if (message.scope) {
      const entries = Object.entries(message.scope);
      if (entries.length > 0) {
        obj.scope = {};
        entries.forEach(([k, v]) => {
          obj.scope[k] = v;
        });
      }
    }
    return obj;
  },
};

export const Scopes_ScopeEntry = {
  fromJSON(object: any): Scopes_ScopeEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Scopes_ScopeEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
