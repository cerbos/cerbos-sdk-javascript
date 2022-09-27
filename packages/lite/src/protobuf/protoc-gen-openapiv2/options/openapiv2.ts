/* eslint-disable */

export const protobufPackage = "grpc.gateway.protoc_gen_openapiv2.options";

/**
 * Scheme describes the schemes supported by the OpenAPI Swagger
 * and Operation objects.
 */
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
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum Scheme");
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
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum Scheme");
  }
}

/**
 * `Swagger` is a representation of OpenAPI v2 specification's Swagger object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#swaggerObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      title: "Echo API";
 *      version: "1.0";
 *      description: "";
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/master/LICENSE.txt";
 *      };
 *    };
 *    schemes: HTTPS;
 *    consumes: "application/json";
 *    produces: "application/json";
 *  };
 */
export interface Swagger {
  /**
   * Specifies the OpenAPI Specification version being used. It can be
   * used by the OpenAPI UI and other clients to interpret the API listing. The
   * value MUST be "2.0".
   */
  swagger: string;
  /**
   * Provides metadata about the API. The metadata can be used by the
   * clients if needed.
   */
  info:
    | Info
    | undefined;
  /**
   * The host (name or ip) serving the API. This MUST be the host only and does
   * not include the scheme nor sub-paths. It MAY include a port. If the host is
   * not included, the host serving the documentation is to be used (including
   * the port). The host does not support path templating.
   */
  host: string;
  /**
   * The base path on which the API is served, which is relative to the host. If
   * it is not included, the API is served directly under the host. The value
   * MUST start with a leading slash (/). The basePath does not support path
   * templating.
   * Note that using `base_path` does not change the endpoint paths that are
   * generated in the resulting OpenAPI file. If you wish to use `base_path`
   * with relatively generated OpenAPI paths, the `base_path` prefix must be
   * manually removed from your `google.api.http` paths and your code changed to
   * serve the API from the `base_path`.
   */
  basePath: string;
  /**
   * The transfer protocol of the API. Values MUST be from the list: "http",
   * "https", "ws", "wss". If the schemes is not included, the default scheme to
   * be used is the one used to access the OpenAPI definition itself.
   */
  schemes: Scheme[];
  /**
   * A list of MIME types the APIs can consume. This is global to all APIs but
   * can be overridden on specific API calls. Value MUST be as described under
   * Mime Types.
   */
  consumes: string[];
  /**
   * A list of MIME types the APIs can produce. This is global to all APIs but
   * can be overridden on specific API calls. Value MUST be as described under
   * Mime Types.
   */
  produces: string[];
  /**
   * An object to hold responses that can be used across operations. This
   * property does not define global responses for all operations.
   */
  responses: { [key: string]: Response };
  /** Security scheme definitions that can be used across the specification. */
  securityDefinitions:
    | SecurityDefinitions
    | undefined;
  /**
   * A declaration of which security schemes are applied for the API as a whole.
   * The list of values describes alternative security schemes that can be used
   * (that is, there is a logical OR between the security requirements).
   * Individual operations can override this definition.
   */
  security: SecurityRequirement[];
  /** Additional external documentation. */
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

/**
 * `Operation` is a representation of OpenAPI v2 specification's Operation object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#operationObject
 *
 * Example:
 *
 *  service EchoService {
 *    rpc Echo(SimpleMessage) returns (SimpleMessage) {
 *      option (google.api.http) = {
 *        get: "/v1/example/echo/{id}"
 *      };
 *
 *      option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_operation) = {
 *        summary: "Get a message.";
 *        operation_id: "getMessage";
 *        tags: "echo";
 *        responses: {
 *          key: "200"
 *            value: {
 *            description: "OK";
 *          }
 *        }
 *      };
 *    }
 *  }
 */
export interface Operation {
  /**
   * A list of tags for API documentation control. Tags can be used for logical
   * grouping of operations by resources or any other qualifier.
   */
  tags: string[];
  /**
   * A short summary of what the operation does. For maximum readability in the
   * swagger-ui, this field SHOULD be less than 120 characters.
   */
  summary: string;
  /**
   * A verbose explanation of the operation behavior. GFM syntax can be used for
   * rich text representation.
   */
  description: string;
  /** Additional external documentation for this operation. */
  externalDocs:
    | ExternalDocumentation
    | undefined;
  /**
   * Unique string used to identify the operation. The id MUST be unique among
   * all operations described in the API. Tools and libraries MAY use the
   * operationId to uniquely identify an operation, therefore, it is recommended
   * to follow common programming naming conventions.
   */
  operationId: string;
  /**
   * A list of MIME types the operation can consume. This overrides the consumes
   * definition at the OpenAPI Object. An empty value MAY be used to clear the
   * global definition. Value MUST be as described under Mime Types.
   */
  consumes: string[];
  /**
   * A list of MIME types the operation can produce. This overrides the produces
   * definition at the OpenAPI Object. An empty value MAY be used to clear the
   * global definition. Value MUST be as described under Mime Types.
   */
  produces: string[];
  /**
   * The list of possible responses as they are returned from executing this
   * operation.
   */
  responses: { [key: string]: Response };
  /**
   * The transfer protocol for the operation. Values MUST be from the list:
   * "http", "https", "ws", "wss". The value overrides the OpenAPI Object
   * schemes definition.
   */
  schemes: Scheme[];
  /**
   * Declares this operation to be deprecated. Usage of the declared operation
   * should be refrained. Default value is false.
   */
  deprecated: boolean;
  /**
   * A declaration of which security schemes are applied for this operation. The
   * list of values describes alternative security schemes that can be used
   * (that is, there is a logical OR between the security requirements). This
   * definition overrides any declared top-level security. To remove a top-level
   * security declaration, an empty array can be used.
   */
  security: SecurityRequirement[];
  extensions: { [key: string]: any | undefined };
}

export interface Operation_ResponsesEntry {
  key: string;
  value: Response | undefined;
}

export interface Operation_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

/**
 * `Header` is a representation of OpenAPI v2 specification's Header object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#headerObject
 */
export interface Header {
  /** `Description` is a short description of the header. */
  description: string;
  /** The type of the object. The value MUST be one of "string", "number", "integer", or "boolean". The "array" type is not supported. */
  type: string;
  /** `Format` The extending format for the previously mentioned type. */
  format: string;
  /**
   * `Default` Declares the value of the header that the server will use if none is provided.
   * See: https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2.
   * Unlike JSON Schema this value MUST conform to the defined type for the header.
   */
  default: string;
  /** 'Pattern' See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3. */
  pattern: string;
}

/**
 * `Response` is a representation of OpenAPI v2 specification's Response object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#responseObject
 */
export interface Response {
  /**
   * `Description` is a short description of the response.
   * GFM syntax can be used for rich text representation.
   */
  description: string;
  /**
   * `Schema` optionally defines the structure of the response.
   * If `Schema` is not provided, it means there is no content to the response.
   */
  schema:
    | Schema
    | undefined;
  /**
   * `Headers` A list of headers that are sent with the response.
   * `Header` name is expected to be a string in the canonical format of the MIME header key
   * See: https://golang.org/pkg/net/textproto/#CanonicalMIMEHeaderKey
   */
  headers: { [key: string]: Header };
  /**
   * `Examples` gives per-mimetype response examples.
   * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#example-object
   */
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

/**
 * `Info` is a representation of OpenAPI v2 specification's Info object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#infoObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      title: "Echo API";
 *      version: "1.0";
 *      description: "";
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/master/LICENSE.txt";
 *      };
 *    };
 *    ...
 *  };
 */
export interface Info {
  /** The title of the application. */
  title: string;
  /**
   * A short description of the application. GFM syntax can be used for rich
   * text representation.
   */
  description: string;
  /** The Terms of Service for the API. */
  termsOfService: string;
  /** The contact information for the exposed API. */
  contact:
    | Contact
    | undefined;
  /** The license information for the exposed API. */
  license:
    | License
    | undefined;
  /**
   * Provides the version of the application API (not to be confused
   * with the specification version).
   */
  version: string;
  extensions: { [key: string]: any | undefined };
}

export interface Info_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

/**
 * `Contact` is a representation of OpenAPI v2 specification's Contact object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#contactObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      ...
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      ...
 *    };
 *    ...
 *  };
 */
export interface Contact {
  /** The identifying name of the contact person/organization. */
  name: string;
  /**
   * The URL pointing to the contact information. MUST be in the format of a
   * URL.
   */
  url: string;
  /**
   * The email address of the contact person/organization. MUST be in the format
   * of an email address.
   */
  email: string;
}

/**
 * `License` is a representation of OpenAPI v2 specification's License object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#licenseObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      ...
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/master/LICENSE.txt";
 *      };
 *      ...
 *    };
 *    ...
 *  };
 */
export interface License {
  /** The license name used for the API. */
  name: string;
  /** A URL to the license used for the API. MUST be in the format of a URL. */
  url: string;
}

/**
 * `ExternalDocumentation` is a representation of OpenAPI v2 specification's
 * ExternalDocumentation object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#externalDocumentationObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    ...
 *    external_docs: {
 *      description: "More about gRPC-Gateway";
 *      url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *    }
 *    ...
 *  };
 */
export interface ExternalDocumentation {
  /**
   * A short description of the target documentation. GFM syntax can be used for
   * rich text representation.
   */
  description: string;
  /**
   * The URL for the target documentation. Value MUST be in the format
   * of a URL.
   */
  url: string;
}

/**
 * `Schema` is a representation of OpenAPI v2 specification's Schema object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
 */
export interface Schema {
  jsonSchema:
    | JSONSchema
    | undefined;
  /**
   * Adds support for polymorphism. The discriminator is the schema property
   * name that is used to differentiate between other schema that inherit this
   * schema. The property name used MUST be defined at this schema and it MUST
   * be in the required property list. When used, the value MUST be the name of
   * this schema or any schema that inherits it.
   */
  discriminator: string;
  /**
   * Relevant only for Schema "properties" definitions. Declares the property as
   * "read only". This means that it MAY be sent as part of a response but MUST
   * NOT be sent as part of the request. Properties marked as readOnly being
   * true SHOULD NOT be in the required list of the defined schema. Default
   * value is false.
   */
  readOnly: boolean;
  /** Additional external documentation for this schema. */
  externalDocs:
    | ExternalDocumentation
    | undefined;
  /**
   * A free-form property to include an example of an instance for this schema in JSON.
   * This is copied verbatim to the output.
   */
  example: string;
}

/**
 * `JSONSchema` represents properties from JSON Schema taken, and as used, in
 * the OpenAPI v2 spec.
 *
 * This includes changes made by OpenAPI v2.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
 *
 * See also: https://cswr.github.io/JsonSchema/spec/basic_types/,
 * https://github.com/json-schema-org/json-schema-spec/blob/master/schema.json
 *
 * Example:
 *
 *  message SimpleMessage {
 *    option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_schema) = {
 *      json_schema: {
 *        title: "SimpleMessage"
 *        description: "A simple message."
 *        required: ["id"]
 *      }
 *    };
 *
 *    // Id represents the message identifier.
 *    string id = 1; [
 *        (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = {
 *          description: "The unique identifier of the simple message."
 *        }];
 *  }
 */
export interface JSONSchema {
  /**
   * Ref is used to define an external reference to include in the message.
   * This could be a fully qualified proto message reference, and that type must
   * be imported into the protofile. If no message is identified, the Ref will
   * be used verbatim in the output.
   * For example:
   *  `ref: ".google.protobuf.Timestamp"`.
   */
  ref: string;
  /** The title of the schema. */
  title: string;
  /** A short description of the schema. */
  description: string;
  default: string;
  readOnly: boolean;
  /**
   * A free-form property to include a JSON example of this field. This is copied
   * verbatim to the output swagger.json. Quotes must be escaped.
   * This property is the same for 2.0 and 3.0.0 https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/3.0.0.md#schemaObject  https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
   */
  example: string;
  multipleOf: number;
  /**
   * Maximum represents an inclusive upper limit for a numeric instance. The
   * value of MUST be a number,
   */
  maximum: number;
  exclusiveMaximum: boolean;
  /**
   * minimum represents an inclusive lower limit for a numeric instance. The
   * value of MUST be a number,
   */
  minimum: number;
  exclusiveMinimum: boolean;
  maxLength: number;
  minLength: number;
  pattern: string;
  maxItems: number;
  minItems: number;
  uniqueItems: boolean;
  maxProperties: number;
  minProperties: number;
  required: string[];
  /** Items in 'array' must be unique. */
  array: string[];
  type: JSONSchema_JSONSchemaSimpleTypes[];
  /** `Format` */
  format: string;
  /** Items in `enum` must be unique https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1 */
  enum: string[];
  /** Additional field level properties used when generating the OpenAPI v2 file. */
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

export function jSONSchema_JSONSchemaSimpleTypesFromJSON(object: any): JSONSchema_JSONSchemaSimpleTypes {
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
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum JSONSchema_JSONSchemaSimpleTypes");
  }
}

export function jSONSchema_JSONSchemaSimpleTypesToJSON(object: JSONSchema_JSONSchemaSimpleTypes): string {
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
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum JSONSchema_JSONSchemaSimpleTypes");
  }
}

/**
 * 'FieldConfiguration' provides additional field level properties used when generating the OpenAPI v2 file.
 * These properties are not defined by OpenAPIv2, but they are used to control the generation.
 */
export interface JSONSchema_FieldConfiguration {
  /**
   * Alternative parameter name when used as path parameter. If set, this will
   * be used as the complete parameter name when this field is used as a path
   * parameter. Use this to avoid having auto generated path parameter names
   * for overlapping paths.
   */
  pathParamName: string;
}

export interface JSONSchema_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

/**
 * `Tag` is a representation of OpenAPI v2 specification's Tag object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#tagObject
 */
export interface Tag {
  /**
   * A short description for the tag. GFM syntax can be used for rich text
   * representation.
   */
  description: string;
  /** Additional external documentation for this tag. */
  externalDocs: ExternalDocumentation | undefined;
}

/**
 * `SecurityDefinitions` is a representation of OpenAPI v2 specification's
 * Security Definitions object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securityDefinitionsObject
 *
 * A declaration of the security schemes available to be used in the
 * specification. This does not enforce the security schemes on the operations
 * and only serves to provide the relevant details for each scheme.
 */
export interface SecurityDefinitions {
  /**
   * A single security scheme definition, mapping a "name" to the scheme it
   * defines.
   */
  security: { [key: string]: SecurityScheme };
}

export interface SecurityDefinitions_SecurityEntry {
  key: string;
  value: SecurityScheme | undefined;
}

/**
 * `SecurityScheme` is a representation of OpenAPI v2 specification's
 * Security Scheme object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securitySchemeObject
 *
 * Allows the definition of a security scheme that can be used by the
 * operations. Supported schemes are basic authentication, an API key (either as
 * a header or as a query parameter) and OAuth2's common flows (implicit,
 * password, application and access code).
 */
export interface SecurityScheme {
  /**
   * The type of the security scheme. Valid values are "basic",
   * "apiKey" or "oauth2".
   */
  type: SecurityScheme_Type;
  /** A short description for security scheme. */
  description: string;
  /**
   * The name of the header or query parameter to be used.
   * Valid for apiKey.
   */
  name: string;
  /**
   * The location of the API key. Valid values are "query" or
   * "header".
   * Valid for apiKey.
   */
  in: SecurityScheme_In;
  /**
   * The flow used by the OAuth2 security scheme. Valid values are
   * "implicit", "password", "application" or "accessCode".
   * Valid for oauth2.
   */
  flow: SecurityScheme_Flow;
  /**
   * The authorization URL to be used for this flow. This SHOULD be in
   * the form of a URL.
   * Valid for oauth2/implicit and oauth2/accessCode.
   */
  authorizationUrl: string;
  /**
   * The token URL to be used for this flow. This SHOULD be in the
   * form of a URL.
   * Valid for oauth2/password, oauth2/application and oauth2/accessCode.
   */
  tokenUrl: string;
  /**
   * The available scopes for the OAuth2 security scheme.
   * Valid for oauth2.
   */
  scopes: Scopes | undefined;
  extensions: { [key: string]: any | undefined };
}

/**
 * The type of the security scheme. Valid values are "basic",
 * "apiKey" or "oauth2".
 */
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
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum SecurityScheme_Type");
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
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum SecurityScheme_Type");
  }
}

/** The location of the API key. Valid values are "query" or "header". */
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
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum SecurityScheme_In");
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
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum SecurityScheme_In");
  }
}

/**
 * The flow used by the OAuth2 security scheme. Valid values are
 * "implicit", "password", "application" or "accessCode".
 */
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
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum SecurityScheme_Flow");
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
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum SecurityScheme_Flow");
  }
}

export interface SecurityScheme_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

/**
 * `SecurityRequirement` is a representation of OpenAPI v2 specification's
 * Security Requirement object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securityRequirementObject
 *
 * Lists the required security schemes to execute this operation. The object can
 * have multiple security schemes declared in it which are all required (that
 * is, there is a logical AND between the schemes).
 *
 * The name used for each property MUST correspond to a security scheme
 * declared in the Security Definitions.
 */
export interface SecurityRequirement {
  /**
   * Each name must correspond to a security scheme which is declared in
   * the Security Definitions. If the security scheme is of type "oauth2",
   * then the value is a list of scope names required for the execution.
   * For other security scheme types, the array MUST be empty.
   */
  securityRequirement: { [key: string]: SecurityRequirement_SecurityRequirementValue };
}

/**
 * If the security scheme is of type "oauth2", then the value is a list of
 * scope names required for the execution. For other security scheme types,
 * the array MUST be empty.
 */
export interface SecurityRequirement_SecurityRequirementValue {
  scope: string[];
}

export interface SecurityRequirement_SecurityRequirementEntry {
  key: string;
  value: SecurityRequirement_SecurityRequirementValue | undefined;
}

/**
 * `Scopes` is a representation of OpenAPI v2 specification's Scopes object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#scopesObject
 *
 * Lists the available scopes for an OAuth2 security scheme.
 */
export interface Scopes {
  /**
   * Maps between a name of a scope to a short description of it (as the value
   * of the property).
   */
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
    externalDocs: undefined,
    extensions: {},
  };
}

export const Swagger = {
  fromJSON(object: any): Swagger {
    return {
      swagger: isSet(object.swagger) ? String(object.swagger) : "",
      info: isSet(object.info) ? Info.fromJSON(object.info) : undefined,
      host: isSet(object.host) ? String(object.host) : "",
      basePath: isSet(object.basePath) ? String(object.basePath) : "",
      schemes: Array.isArray(object?.schemes) ? object.schemes.map((e: any) => schemeFromJSON(e)) : [],
      consumes: Array.isArray(object?.consumes) ? object.consumes.map((e: any) => String(e)) : [],
      produces: Array.isArray(object?.produces) ? object.produces.map((e: any) => String(e)) : [],
      responses: isObject(object.responses)
        ? Object.entries(object.responses).reduce<{ [key: string]: Response }>((acc, [key, value]) => {
          acc[key] = Response.fromJSON(value);
          return acc;
        }, {})
        : {},
      securityDefinitions: isSet(object.securityDefinitions)
        ? SecurityDefinitions.fromJSON(object.securityDefinitions)
        : undefined,
      security: Array.isArray(object?.security)
        ? object.security.map((e: any) => SecurityRequirement.fromJSON(e))
        : [],
      externalDocs: isSet(object.externalDocs) ? ExternalDocumentation.fromJSON(object.externalDocs) : undefined,
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{ [key: string]: any | undefined }>((acc, [key, value]) => {
          acc[key] = value as any | undefined;
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Swagger): unknown {
    const obj: any = {};
    message.swagger !== undefined && (obj.swagger = message.swagger);
    message.info !== undefined && (obj.info = message.info ? Info.toJSON(message.info) : undefined);
    message.host !== undefined && (obj.host = message.host);
    message.basePath !== undefined && (obj.basePath = message.basePath);
    if (message.schemes) {
      obj.schemes = message.schemes.map((e) => schemeToJSON(e));
    } else {
      obj.schemes = [];
    }
    if (message.consumes) {
      obj.consumes = message.consumes.map((e) => e);
    } else {
      obj.consumes = [];
    }
    if (message.produces) {
      obj.produces = message.produces.map((e) => e);
    } else {
      obj.produces = [];
    }
    obj.responses = {};
    if (message.responses) {
      Object.entries(message.responses).forEach(([k, v]) => {
        obj.responses[k] = Response.toJSON(v);
      });
    }
    message.securityDefinitions !== undefined && (obj.securityDefinitions = message.securityDefinitions
      ? SecurityDefinitions.toJSON(message.securityDefinitions)
      : undefined);
    if (message.security) {
      obj.security = message.security.map((e) => e ? SecurityRequirement.toJSON(e) : undefined);
    } else {
      obj.security = [];
    }
    message.externalDocs !== undefined &&
      (obj.externalDocs = message.externalDocs ? ExternalDocumentation.toJSON(message.externalDocs) : undefined);
    obj.extensions = {};
    if (message.extensions) {
      Object.entries(message.extensions).forEach(([k, v]) => {
        obj.extensions[k] = v;
      });
    }
    return obj;
  },
};

function createBaseSwagger_ResponsesEntry(): Swagger_ResponsesEntry {
  return { key: "", value: undefined };
}

export const Swagger_ResponsesEntry = {
  fromJSON(object: any): Swagger_ResponsesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Response.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Swagger_ResponsesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Response.toJSON(message.value) : undefined);
    return obj;
  },
};

function createBaseSwagger_ExtensionsEntry(): Swagger_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Swagger_ExtensionsEntry = {
  fromJSON(object: any): Swagger_ExtensionsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: Swagger_ExtensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
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
  };
}

export const Operation = {
  fromJSON(object: any): Operation {
    return {
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      summary: isSet(object.summary) ? String(object.summary) : "",
      description: isSet(object.description) ? String(object.description) : "",
      externalDocs: isSet(object.externalDocs) ? ExternalDocumentation.fromJSON(object.externalDocs) : undefined,
      operationId: isSet(object.operationId) ? String(object.operationId) : "",
      consumes: Array.isArray(object?.consumes) ? object.consumes.map((e: any) => String(e)) : [],
      produces: Array.isArray(object?.produces) ? object.produces.map((e: any) => String(e)) : [],
      responses: isObject(object.responses)
        ? Object.entries(object.responses).reduce<{ [key: string]: Response }>((acc, [key, value]) => {
          acc[key] = Response.fromJSON(value);
          return acc;
        }, {})
        : {},
      schemes: Array.isArray(object?.schemes)
        ? object.schemes.map((e: any) => schemeFromJSON(e))
        : [],
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      security: Array.isArray(object?.security) ? object.security.map((e: any) => SecurityRequirement.fromJSON(e)) : [],
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{ [key: string]: any | undefined }>((acc, [key, value]) => {
          acc[key] = value as any | undefined;
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.summary !== undefined && (obj.summary = message.summary);
    message.description !== undefined && (obj.description = message.description);
    message.externalDocs !== undefined &&
      (obj.externalDocs = message.externalDocs ? ExternalDocumentation.toJSON(message.externalDocs) : undefined);
    message.operationId !== undefined && (obj.operationId = message.operationId);
    if (message.consumes) {
      obj.consumes = message.consumes.map((e) => e);
    } else {
      obj.consumes = [];
    }
    if (message.produces) {
      obj.produces = message.produces.map((e) => e);
    } else {
      obj.produces = [];
    }
    obj.responses = {};
    if (message.responses) {
      Object.entries(message.responses).forEach(([k, v]) => {
        obj.responses[k] = Response.toJSON(v);
      });
    }
    if (message.schemes) {
      obj.schemes = message.schemes.map((e) => schemeToJSON(e));
    } else {
      obj.schemes = [];
    }
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.security) {
      obj.security = message.security.map((e) => e ? SecurityRequirement.toJSON(e) : undefined);
    } else {
      obj.security = [];
    }
    obj.extensions = {};
    if (message.extensions) {
      Object.entries(message.extensions).forEach(([k, v]) => {
        obj.extensions[k] = v;
      });
    }
    return obj;
  },
};

function createBaseOperation_ResponsesEntry(): Operation_ResponsesEntry {
  return { key: "", value: undefined };
}

export const Operation_ResponsesEntry = {
  fromJSON(object: any): Operation_ResponsesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Response.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Operation_ResponsesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Response.toJSON(message.value) : undefined);
    return obj;
  },
};

function createBaseOperation_ExtensionsEntry(): Operation_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Operation_ExtensionsEntry = {
  fromJSON(object: any): Operation_ExtensionsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: Operation_ExtensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseHeader(): Header {
  return { description: "", type: "", format: "", default: "", pattern: "" };
}

export const Header = {
  fromJSON(object: any): Header {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      type: isSet(object.type) ? String(object.type) : "",
      format: isSet(object.format) ? String(object.format) : "",
      default: isSet(object.default) ? String(object.default) : "",
      pattern: isSet(object.pattern) ? String(object.pattern) : "",
    };
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.type !== undefined && (obj.type = message.type);
    message.format !== undefined && (obj.format = message.format);
    message.default !== undefined && (obj.default = message.default);
    message.pattern !== undefined && (obj.pattern = message.pattern);
    return obj;
  },
};

function createBaseResponse(): Response {
  return { description: "", schema: undefined, headers: {}, examples: {}, extensions: {} };
}

export const Response = {
  fromJSON(object: any): Response {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      schema: isSet(object.schema) ? Schema.fromJSON(object.schema) : undefined,
      headers: isObject(object.headers)
        ? Object.entries(object.headers).reduce<{ [key: string]: Header }>((acc, [key, value]) => {
          acc[key] = Header.fromJSON(value);
          return acc;
        }, {})
        : {},
      examples: isObject(object.examples)
        ? Object.entries(object.examples).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{ [key: string]: any | undefined }>((acc, [key, value]) => {
          acc[key] = value as any | undefined;
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.schema !== undefined && (obj.schema = message.schema ? Schema.toJSON(message.schema) : undefined);
    obj.headers = {};
    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = Header.toJSON(v);
      });
    }
    obj.examples = {};
    if (message.examples) {
      Object.entries(message.examples).forEach(([k, v]) => {
        obj.examples[k] = v;
      });
    }
    obj.extensions = {};
    if (message.extensions) {
      Object.entries(message.extensions).forEach(([k, v]) => {
        obj.extensions[k] = v;
      });
    }
    return obj;
  },
};

function createBaseResponse_HeadersEntry(): Response_HeadersEntry {
  return { key: "", value: undefined };
}

export const Response_HeadersEntry = {
  fromJSON(object: any): Response_HeadersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Header.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Response_HeadersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Header.toJSON(message.value) : undefined);
    return obj;
  },
};

function createBaseResponse_ExamplesEntry(): Response_ExamplesEntry {
  return { key: "", value: "" };
}

export const Response_ExamplesEntry = {
  fromJSON(object: any): Response_ExamplesEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Response_ExamplesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseResponse_ExtensionsEntry(): Response_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Response_ExtensionsEntry = {
  fromJSON(object: any): Response_ExtensionsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: Response_ExtensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
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
  fromJSON(object: any): Info {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      termsOfService: isSet(object.termsOfService) ? String(object.termsOfService) : "",
      contact: isSet(object.contact) ? Contact.fromJSON(object.contact) : undefined,
      license: isSet(object.license) ? License.fromJSON(object.license) : undefined,
      version: isSet(object.version) ? String(object.version) : "",
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{ [key: string]: any | undefined }>((acc, [key, value]) => {
          acc[key] = value as any | undefined;
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Info): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.termsOfService !== undefined && (obj.termsOfService = message.termsOfService);
    message.contact !== undefined && (obj.contact = message.contact ? Contact.toJSON(message.contact) : undefined);
    message.license !== undefined && (obj.license = message.license ? License.toJSON(message.license) : undefined);
    message.version !== undefined && (obj.version = message.version);
    obj.extensions = {};
    if (message.extensions) {
      Object.entries(message.extensions).forEach(([k, v]) => {
        obj.extensions[k] = v;
      });
    }
    return obj;
  },
};

function createBaseInfo_ExtensionsEntry(): Info_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Info_ExtensionsEntry = {
  fromJSON(object: any): Info_ExtensionsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: Info_ExtensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseContact(): Contact {
  return { name: "", url: "", email: "" };
}

export const Contact = {
  fromJSON(object: any): Contact {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      url: isSet(object.url) ? String(object.url) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: Contact): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.url !== undefined && (obj.url = message.url);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },
};

function createBaseLicense(): License {
  return { name: "", url: "" };
}

export const License = {
  fromJSON(object: any): License {
    return { name: isSet(object.name) ? String(object.name) : "", url: isSet(object.url) ? String(object.url) : "" };
  },

  toJSON(message: License): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },
};

function createBaseExternalDocumentation(): ExternalDocumentation {
  return { description: "", url: "" };
}

export const ExternalDocumentation = {
  fromJSON(object: any): ExternalDocumentation {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: ExternalDocumentation): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },
};

function createBaseSchema(): Schema {
  return { jsonSchema: undefined, discriminator: "", readOnly: false, externalDocs: undefined, example: "" };
}

export const Schema = {
  fromJSON(object: any): Schema {
    return {
      jsonSchema: isSet(object.jsonSchema) ? JSONSchema.fromJSON(object.jsonSchema) : undefined,
      discriminator: isSet(object.discriminator) ? String(object.discriminator) : "",
      readOnly: isSet(object.readOnly) ? Boolean(object.readOnly) : false,
      externalDocs: isSet(object.externalDocs) ? ExternalDocumentation.fromJSON(object.externalDocs) : undefined,
      example: isSet(object.example) ? String(object.example) : "",
    };
  },

  toJSON(message: Schema): unknown {
    const obj: any = {};
    message.jsonSchema !== undefined &&
      (obj.jsonSchema = message.jsonSchema ? JSONSchema.toJSON(message.jsonSchema) : undefined);
    message.discriminator !== undefined && (obj.discriminator = message.discriminator);
    message.readOnly !== undefined && (obj.readOnly = message.readOnly);
    message.externalDocs !== undefined &&
      (obj.externalDocs = message.externalDocs ? ExternalDocumentation.toJSON(message.externalDocs) : undefined);
    message.example !== undefined && (obj.example = message.example);
    return obj;
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
    maxLength: 0,
    minLength: 0,
    pattern: "",
    maxItems: 0,
    minItems: 0,
    uniqueItems: false,
    maxProperties: 0,
    minProperties: 0,
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
  fromJSON(object: any): JSONSchema {
    return {
      ref: isSet(object.ref) ? String(object.ref) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      default: isSet(object.default) ? String(object.default) : "",
      readOnly: isSet(object.readOnly) ? Boolean(object.readOnly) : false,
      example: isSet(object.example) ? String(object.example) : "",
      multipleOf: isSet(object.multipleOf) ? Number(object.multipleOf) : 0,
      maximum: isSet(object.maximum) ? Number(object.maximum) : 0,
      exclusiveMaximum: isSet(object.exclusiveMaximum) ? Boolean(object.exclusiveMaximum) : false,
      minimum: isSet(object.minimum) ? Number(object.minimum) : 0,
      exclusiveMinimum: isSet(object.exclusiveMinimum) ? Boolean(object.exclusiveMinimum) : false,
      maxLength: isSet(object.maxLength) ? Number(object.maxLength) : 0,
      minLength: isSet(object.minLength) ? Number(object.minLength) : 0,
      pattern: isSet(object.pattern) ? String(object.pattern) : "",
      maxItems: isSet(object.maxItems) ? Number(object.maxItems) : 0,
      minItems: isSet(object.minItems) ? Number(object.minItems) : 0,
      uniqueItems: isSet(object.uniqueItems) ? Boolean(object.uniqueItems) : false,
      maxProperties: isSet(object.maxProperties) ? Number(object.maxProperties) : 0,
      minProperties: isSet(object.minProperties) ? Number(object.minProperties) : 0,
      required: Array.isArray(object?.required)
        ? object.required.map((e: any) => String(e))
        : [],
      array: Array.isArray(object?.array) ? object.array.map((e: any) => String(e)) : [],
      type: Array.isArray(object?.type) ? object.type.map((e: any) => jSONSchema_JSONSchemaSimpleTypesFromJSON(e)) : [],
      format: isSet(object.format) ? String(object.format) : "",
      enum: Array.isArray(object?.enum) ? object.enum.map((e: any) => String(e)) : [],
      fieldConfiguration: isSet(object.fieldConfiguration)
        ? JSONSchema_FieldConfiguration.fromJSON(object.fieldConfiguration)
        : undefined,
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{ [key: string]: any | undefined }>((acc, [key, value]) => {
          acc[key] = value as any | undefined;
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: JSONSchema): unknown {
    const obj: any = {};
    message.ref !== undefined && (obj.ref = message.ref);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.default !== undefined && (obj.default = message.default);
    message.readOnly !== undefined && (obj.readOnly = message.readOnly);
    message.example !== undefined && (obj.example = message.example);
    message.multipleOf !== undefined && (obj.multipleOf = message.multipleOf);
    message.maximum !== undefined && (obj.maximum = message.maximum);
    message.exclusiveMaximum !== undefined && (obj.exclusiveMaximum = message.exclusiveMaximum);
    message.minimum !== undefined && (obj.minimum = message.minimum);
    message.exclusiveMinimum !== undefined && (obj.exclusiveMinimum = message.exclusiveMinimum);
    message.maxLength !== undefined && (obj.maxLength = Math.round(message.maxLength));
    message.minLength !== undefined && (obj.minLength = Math.round(message.minLength));
    message.pattern !== undefined && (obj.pattern = message.pattern);
    message.maxItems !== undefined && (obj.maxItems = Math.round(message.maxItems));
    message.minItems !== undefined && (obj.minItems = Math.round(message.minItems));
    message.uniqueItems !== undefined && (obj.uniqueItems = message.uniqueItems);
    message.maxProperties !== undefined && (obj.maxProperties = Math.round(message.maxProperties));
    message.minProperties !== undefined && (obj.minProperties = Math.round(message.minProperties));
    if (message.required) {
      obj.required = message.required.map((e) => e);
    } else {
      obj.required = [];
    }
    if (message.array) {
      obj.array = message.array.map((e) => e);
    } else {
      obj.array = [];
    }
    if (message.type) {
      obj.type = message.type.map((e) => jSONSchema_JSONSchemaSimpleTypesToJSON(e));
    } else {
      obj.type = [];
    }
    message.format !== undefined && (obj.format = message.format);
    if (message.enum) {
      obj.enum = message.enum.map((e) => e);
    } else {
      obj.enum = [];
    }
    message.fieldConfiguration !== undefined && (obj.fieldConfiguration = message.fieldConfiguration
      ? JSONSchema_FieldConfiguration.toJSON(message.fieldConfiguration)
      : undefined);
    obj.extensions = {};
    if (message.extensions) {
      Object.entries(message.extensions).forEach(([k, v]) => {
        obj.extensions[k] = v;
      });
    }
    return obj;
  },
};

function createBaseJSONSchema_FieldConfiguration(): JSONSchema_FieldConfiguration {
  return { pathParamName: "" };
}

export const JSONSchema_FieldConfiguration = {
  fromJSON(object: any): JSONSchema_FieldConfiguration {
    return { pathParamName: isSet(object.pathParamName) ? String(object.pathParamName) : "" };
  },

  toJSON(message: JSONSchema_FieldConfiguration): unknown {
    const obj: any = {};
    message.pathParamName !== undefined && (obj.pathParamName = message.pathParamName);
    return obj;
  },
};

function createBaseJSONSchema_ExtensionsEntry(): JSONSchema_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const JSONSchema_ExtensionsEntry = {
  fromJSON(object: any): JSONSchema_ExtensionsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: JSONSchema_ExtensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseTag(): Tag {
  return { description: "", externalDocs: undefined };
}

export const Tag = {
  fromJSON(object: any): Tag {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      externalDocs: isSet(object.externalDocs) ? ExternalDocumentation.fromJSON(object.externalDocs) : undefined,
    };
  },

  toJSON(message: Tag): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.externalDocs !== undefined &&
      (obj.externalDocs = message.externalDocs ? ExternalDocumentation.toJSON(message.externalDocs) : undefined);
    return obj;
  },
};

function createBaseSecurityDefinitions(): SecurityDefinitions {
  return { security: {} };
}

export const SecurityDefinitions = {
  fromJSON(object: any): SecurityDefinitions {
    return {
      security: isObject(object.security)
        ? Object.entries(object.security).reduce<{ [key: string]: SecurityScheme }>((acc, [key, value]) => {
          acc[key] = SecurityScheme.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SecurityDefinitions): unknown {
    const obj: any = {};
    obj.security = {};
    if (message.security) {
      Object.entries(message.security).forEach(([k, v]) => {
        obj.security[k] = SecurityScheme.toJSON(v);
      });
    }
    return obj;
  },
};

function createBaseSecurityDefinitions_SecurityEntry(): SecurityDefinitions_SecurityEntry {
  return { key: "", value: undefined };
}

export const SecurityDefinitions_SecurityEntry = {
  fromJSON(object: any): SecurityDefinitions_SecurityEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? SecurityScheme.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SecurityDefinitions_SecurityEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? SecurityScheme.toJSON(message.value) : undefined);
    return obj;
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
  fromJSON(object: any): SecurityScheme {
    return {
      type: isSet(object.type) ? securityScheme_TypeFromJSON(object.type) : 0,
      description: isSet(object.description) ? String(object.description) : "",
      name: isSet(object.name) ? String(object.name) : "",
      in: isSet(object.in) ? securityScheme_InFromJSON(object.in) : 0,
      flow: isSet(object.flow) ? securityScheme_FlowFromJSON(object.flow) : 0,
      authorizationUrl: isSet(object.authorizationUrl) ? String(object.authorizationUrl) : "",
      tokenUrl: isSet(object.tokenUrl) ? String(object.tokenUrl) : "",
      scopes: isSet(object.scopes) ? Scopes.fromJSON(object.scopes) : undefined,
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{ [key: string]: any | undefined }>((acc, [key, value]) => {
          acc[key] = value as any | undefined;
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SecurityScheme): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = securityScheme_TypeToJSON(message.type));
    message.description !== undefined && (obj.description = message.description);
    message.name !== undefined && (obj.name = message.name);
    message.in !== undefined && (obj.in = securityScheme_InToJSON(message.in));
    message.flow !== undefined && (obj.flow = securityScheme_FlowToJSON(message.flow));
    message.authorizationUrl !== undefined && (obj.authorizationUrl = message.authorizationUrl);
    message.tokenUrl !== undefined && (obj.tokenUrl = message.tokenUrl);
    message.scopes !== undefined && (obj.scopes = message.scopes ? Scopes.toJSON(message.scopes) : undefined);
    obj.extensions = {};
    if (message.extensions) {
      Object.entries(message.extensions).forEach(([k, v]) => {
        obj.extensions[k] = v;
      });
    }
    return obj;
  },
};

function createBaseSecurityScheme_ExtensionsEntry(): SecurityScheme_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const SecurityScheme_ExtensionsEntry = {
  fromJSON(object: any): SecurityScheme_ExtensionsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: SecurityScheme_ExtensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseSecurityRequirement(): SecurityRequirement {
  return { securityRequirement: {} };
}

export const SecurityRequirement = {
  fromJSON(object: any): SecurityRequirement {
    return {
      securityRequirement: isObject(object.securityRequirement)
        ? Object.entries(object.securityRequirement).reduce<
          { [key: string]: SecurityRequirement_SecurityRequirementValue }
        >((acc, [key, value]) => {
          acc[key] = SecurityRequirement_SecurityRequirementValue.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SecurityRequirement): unknown {
    const obj: any = {};
    obj.securityRequirement = {};
    if (message.securityRequirement) {
      Object.entries(message.securityRequirement).forEach(([k, v]) => {
        obj.securityRequirement[k] = SecurityRequirement_SecurityRequirementValue.toJSON(v);
      });
    }
    return obj;
  },
};

function createBaseSecurityRequirement_SecurityRequirementValue(): SecurityRequirement_SecurityRequirementValue {
  return { scope: [] };
}

export const SecurityRequirement_SecurityRequirementValue = {
  fromJSON(object: any): SecurityRequirement_SecurityRequirementValue {
    return { scope: Array.isArray(object?.scope) ? object.scope.map((e: any) => String(e)) : [] };
  },

  toJSON(message: SecurityRequirement_SecurityRequirementValue): unknown {
    const obj: any = {};
    if (message.scope) {
      obj.scope = message.scope.map((e) => e);
    } else {
      obj.scope = [];
    }
    return obj;
  },
};

function createBaseSecurityRequirement_SecurityRequirementEntry(): SecurityRequirement_SecurityRequirementEntry {
  return { key: "", value: undefined };
}

export const SecurityRequirement_SecurityRequirementEntry = {
  fromJSON(object: any): SecurityRequirement_SecurityRequirementEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? SecurityRequirement_SecurityRequirementValue.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SecurityRequirement_SecurityRequirementEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? SecurityRequirement_SecurityRequirementValue.toJSON(message.value) : undefined);
    return obj;
  },
};

function createBaseScopes(): Scopes {
  return { scope: {} };
}

export const Scopes = {
  fromJSON(object: any): Scopes {
    return {
      scope: isObject(object.scope)
        ? Object.entries(object.scope).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Scopes): unknown {
    const obj: any = {};
    obj.scope = {};
    if (message.scope) {
      Object.entries(message.scope).forEach(([k, v]) => {
        obj.scope[k] = v;
      });
    }
    return obj;
  },
};

function createBaseScopes_ScopeEntry(): Scopes_ScopeEntry {
  return { key: "", value: "" };
}

export const Scopes_ScopeEntry = {
  fromJSON(object: any): Scopes_ScopeEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Scopes_ScopeEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
