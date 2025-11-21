import type {
  Options as CoreOptions,
  DecisionLogEntry,
  JWT,
  Value,
} from "@cerbos/core";

/**
 * Options for creating a new {@link Embedded} client.
 *
 * @public
 */
export interface Options
  extends Pick<CoreOptions, "headers" | "onValidationError" | "userAgent"> {
  /**
   * Source of the policy bundle.
   */
  policies: PolicySource;

  /**
   * Source of the embedded policy decision point server's WebAssembly module (imported from `@cerbos/embedded-server/wasm`).
   * The most appropriate source to use will depend on the target runtime of your application.
   */
  wasm: WasmSource;

  /**
   * A function to verify and decode JWTs passed as auxiliary data, returning the JWT payload.
   *
   * @defaultValue (throw an error when a JWT is passed)
   */
  decodeJWTPayload?: DecodeJWTPayload | undefined;

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/configuration/engine#default_policy_version | Default policy version} to apply to requests that do not specify one.
   *
   * @defaultValue `"default"`
   */
  defaultPolicyVersion?: string | undefined;

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/configuration/engine#globals | Global variables} to pass environment-specific information to policy conditions.
   *
   * @defaultValue `{}`
   */
  globals?: Record<string, Value> | undefined;

  /**
   * Enable {@link https://docs.cerbos.dev/cerbos/latest/configuration/engine#lenient_scopes | lenient scope search}?
   *
   * By default, when a request specifies a scope of `a.b.c` then a policy must exist with that exact scope.
   * If lenient scope search is enabled, then the policy decision point will fall back to trying scopes `a.b`, `a`, and `""`
   * if a policy with scope `a.b.c` does not exist.
   *
   * @defaultValue `false`
   */
  lenientScopeSearch?: boolean | undefined;

  /**
   * A callback to invoke when a decision is made by the embedded policy decision point server.
   *
   * @defaultValue (no-op)
   */
  onDecision?: ((entry: DecisionLogEntry) => void | Promise<void>) | undefined;

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/configuration/schema#_enforcement | Schema enforcement level} for the embedded policy decision point server.
   *
   * @defaultValue `SchemaEnforcement.WARN`
   */
  schemaEnforcement?: SchemaEnforcement;
}

/**
 * {@link https://docs.cerbos.dev/cerbos/latest/configuration/schema#_enforcement | Schema enforcement levels} for the embedded policy decision point (PDP) server.
 */
export enum SchemaEnforcement {
  /**
   * The embedded PDP server will not check whether inputs match JSON schemas.
   */
  NONE = "none",

  /**
   * The embedded PDP server will check whether inputs match JSON schemas and include any validation errors in the response.
   */
  WARN = "warn",

  /**
   * The embedded PDP server will check whether inputs match JSON schemas and deny actions if there are validation errors.
   */
  REJECT = "reject",
}

/**
 * A value, or a promise of a value.
 */
export type Awaitable<T> = T | PromiseLike<T>;

/**
 *
 */
export type PolicySource = Awaitable<ArrayBufferView>;

/**
 * The source may be
 *
 * - a `string` or `URL`, to {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch | `fetch`} the binary code from a remote location and compile it using {@link https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static | `WebAssembly.instantiateStreaming`};
 * - an HTTP {@link https://developer.mozilla.org/en-US/docs/Web/API/Response | `Response`} (or a promise resolving to one), to stream the binary code from the response body and compile it using {@link https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static | `WebAssembly.instantiateStreaming`};
 * - the binary code itself as an {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer | `ArrayBuffer`}, {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array | `Uint8Array`}, or Node.js {@link https://nodejs.org/api/buffer.html#class-buffer | `Buffer`} (or a promise resolving to one of these), to compile it using {@link https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static | `WebAssembly.instantiate`}; or
 * - a precompiled {@link https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module | `WebAssembly.Module`} (or a promise resolving to one).
 */
export type WasmSource =
  | string
  | URL
  | Awaitable<ArrayBufferView>
  | Awaitable<ArrayBuffer>
  | Awaitable<Response>
  | Awaitable<WebAssembly.Module>;

/**
 * A function to verify and decode a JWT, returning its payload.
 *
 * @example
 * Using {@link https://www.npmjs.com/package/jose | jose}:
 *
 * ```typescript
 * import type { DecodeJWTPayload, DecodedJWTPayload } from "@cerbos/embedded";
 * import { JWTVerifyGetKey, createRemoteJWKSet, jwtVerify } from "jose";
 *
 * interface KeySet {
 *   issuer: string;
 *   jwks: JWTVerifyGetKey;
 * }
 *
 * const keySets: Record<string, KeySet> = {
 *   auth0: {
 *     issuer: "https://example.auth0.com/",
 *     jwks: createRemoteJWKSet(
 *       new URL("https://example.auth0.com/.well-known/jwks.json")
 *     ),
 *   },
 *   okta: {
 *     issuer: "https://example.okta.com/oauth2/default",
 *     jwks: createRemoteJWKSet(
 *       new URL("https://example.okta.com/oauth2/default/v1/keys")
 *     ),
 *   },
 * };
 *
 * const decodeJWTPayload: DecodeJWTPayload = async ({ token, keySetId }) => {
 *   if (!keySetId) {
 *     throw new Error("Missing key set ID");
 *   }
 *
 *   const keySet = keySets[keySetId];
 *
 *   if (!keySet) {
 *     throw new Error(`Unknown key set ID "${keySetId}"`);
 *   }
 *
 *   const { issuer, jwks } = keySet;
 *
 *   const { payload } = await jwtVerify(token, jwks, {
 *     issuer,
 *     audience: "https://example.com/",
 *   });
 *
 *   return payload as DecodedJWTPayload;
 * };
 * ```
 *
 * @public
 */
export type DecodeJWTPayload = (
  jwt: JWT,
) => DecodedJWTPayload | Promise<DecodedJWTPayload>;

/**
 * The decoded payload of a JWT, containing the claims.
 *
 * @public
 */
export type DecodedJWTPayload = Record<string, Value>;
