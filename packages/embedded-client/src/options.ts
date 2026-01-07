import type {
  Awaitable,
  Options as CoreOptions,
  DecisionLogEntry,
  JWT,
  NotOK,
  Value,
} from "@cerbos/core";
import type { ClientOptions as HubClientOptions } from "@cerbos/hub";

import type { PolicyLoader } from "./loader.js";

/**
 * Options for creating a new {@link Embedded} client.
 *
 * @public
 */
export interface Options extends Pick<
  CoreOptions,
  "headers" | "onValidationError" | "userAgent"
> {
  /**
   * Source of the policy bundle.
   */
  policies: PolicySource;

  /**
   * Source of the embedded policy decision point server's WebAssembly module (imported from `@cerbos/embedded-server/server.wasm`).
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
  onDecision?: ((entry: DecisionLogEntry) => Awaitable<void>) | undefined;

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/configuration/schema#_enforcement | Schema enforcement level} for the embedded policy decision point server.
   *
   * @defaultValue `SchemaEnforcement.WARN`
   */
  schemaEnforcement?: SchemaEnforcement;
}

/**
 * {@link https://docs.cerbos.dev/cerbos/latest/configuration/schema#_enforcement | Schema enforcement levels} for the embedded policy decision point (PDP) server.
 *
 * @public
 */
export enum SchemaEnforcement {
  /**
   * The embedded PDP server will not check whether inputs match the JSON schemas specified in the policies.
   */
  NONE = "none",

  /**
   * The embedded PDP server will check whether inputs match the JSON schemas specified in the policies, and include any validation errors in the response.
   */
  WARN = "warn",

  /**
   * The embedded PDP server will check whether inputs match the JSON schemas specified in the policies, and deny actions if there are validation errors.
   */
  REJECT = "reject",
}

/**
 * Source of the embedded policy decision point server's policies.
 *
 * @remarks
 *
 * The source may be
 *
 * - a {@link PolicyLoader} (or the {@link PolicyLoaderOptions} to create one) to download policy bundles from Cerbos Hub; or
 *
 * - the contents of a previously-downloaded policy bundle (or a promise resolving to one).
 *
 * @public
 */
export type PolicySource =
  | PolicyLoader
  | PolicyLoaderOptions
  | Awaitable<ArrayBufferView>;

/**
 * Options for creating a {@link PolicyLoader}.
 *
 * @public
 */
export interface PolicyLoaderOptions extends Partial<HubClientOptions> {
  /**
   * ID of the policy bundling rule.
   */
  ruleId: string;

  /**
   * Scopes to include in the policy bundle.
   *
   * @defaultValue (all scopes)
   */
  scopes?: string[];

  /**
   * Whether to activate updated policy bundles as soon as they are downloaded.
   *
   * @remarks
   * If `false`, new bundles will be downloaded automatically but not used to evaluate policy decisions until you call {@link PolicyLoader.activate}.
   * This might be useful if you want to activate updates only on page transitions to avoid layout shifts in your application.
   *
   * @defaultValue `true`
   */
  activateOnLoad?: boolean;

  /**
   * The delay (in seconds) between successive requests to check for policy bundle updates.
   *
   * @remarks
   * Set to `0` to disable policy bundle update checks.
   *
   * The interval will be increased to the minimum of 10 seconds if a smaller value is specified.
   *
   * @defaultValue `60` (1 minute)
   */
  interval?: number;

  /**
   * A callback to invoke when a policy bundle update has finished.
   *
   * @remarks
   * The callback receives an error if the update failed to load.
   * These failures are silently ignored by default.
   *
   * @defaultValue (no-op)
   */
  onUpdate?: ((error: NotOK | undefined) => Awaitable<void>) | undefined;
}

/**
 * Source of the embedded policy decision point server's WebAssembly module (imported from `@cerbos/embedded-server/server.wasm`).
 * The most appropriate source to use will depend on the target runtime of your application.
 *
 * @remarks
 *
 * The source may be
 *
 * - a `string` or `URL`, to {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch | `fetch`} the binary code from a remote location and compile it using {@link https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static | `WebAssembly.instantiateStreaming`};
 *
 * - an HTTP {@link https://developer.mozilla.org/en-US/docs/Web/API/Response | `Response`} (or a promise resolving to one), to stream the binary code from the response body and compile it using {@link https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static | `WebAssembly.instantiateStreaming`};
 *
 * - the binary code itself as an {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer | `ArrayBuffer`}, {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array | `Uint8Array`}, or Node.js {@link https://nodejs.org/api/buffer.html#class-buffer | `Buffer`} (or a promise resolving to one of these), to compile it using {@link https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static | `WebAssembly.instantiate`};
 *
 * - a precompiled {@link https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module | `WebAssembly.Module`} (or a promise resolving to one); or
 *
 * - a function that instantiates a WebAssembly module.
 *
 * @public
 */
export type WasmSource =
  | string
  | URL
  | Awaitable<ArrayBufferView<ArrayBuffer>>
  | Awaitable<ArrayBuffer>
  | Awaitable<Response>
  | Awaitable<WebAssembly.Module>
  | WasmInstantiate;

/**
 * A function that instantiates a WebAssembly module.
 *
 * @public
 */
export type WasmInstantiate = (
  imports: WebAssembly.Imports,
) => Awaitable<
  WebAssembly.Instance | WebAssembly.WebAssemblyInstantiatedSource
>;

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
export type DecodeJWTPayload = (jwt: JWT) => Awaitable<DecodedJWTPayload>;

/**
 * The decoded payload of a JWT, containing the claims.
 *
 * @public
 */
export type DecodedJWTPayload = Record<string, Value>;
