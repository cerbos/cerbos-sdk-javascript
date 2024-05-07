import type { JWT, Value } from "@cerbos/core";
import { _setErrorNameAndStack } from "@cerbos/core";

import { Bundle, download } from "./bundle";
import { constrainAutoUpdateInterval } from "./interval";
import { Transport } from "./transport";

type LoadResult =
  | {
      bundle: Bundle;
      error?: undefined;
    }
  | {
      bundle?: undefined;
      error: LoadError;
    };

async function resolve(
  result: LoadResult | Promise<LoadResult>,
): Promise<Bundle> {
  const { bundle, error } = await result;

  if (error) {
    throw error;
  }

  return bundle;
}

/**
 * Error thrown when a {@link Loader} fails to load an embedded policy decision point bundle.
 *
 * @public
 */
export class LoadError extends Error {
  public constructor(
    /**
     * The error that caused loading the embedded policy decision point bundle to fail.
     */
    public override readonly cause: unknown,
  ) {
    const message = "Failed to load embedded policy decision point bundle";

    super(cause instanceof Error ? `${message}: ${cause.message}` : message, {
      cause,
    });

    _setErrorNameAndStack(this);
  }
}

/**
 * WebAssembly binary code of an embedded policy decision point bundle, or a URL or HTTP response from which to stream it.
 *
 * @public
 */
export type Source =
  | string
  | URL
  | ArrayBufferView
  | ArrayBuffer
  | Response
  | Promise<ArrayBufferView | ArrayBuffer | Response>;

/**
 * Options for creating a new {@link Embedded} client or {@link Loader}.
 *
 * @public
 */
export interface Options {
  /**
   * A function to verify and decode JWTs passed as auxiliary data, returning the JWT payload.
   *
   * @defaultValue (throw an error when a JWT is passed)
   */
  decodeJWTPayload?: DecodeJWTPayload | undefined;

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/configuration/engine#globals | Global variables} to pass environment-specific information to policy conditions.
   *
   * @defaultValue `{}`
   */
  globals?: Record<string, Value> | undefined;

  /**
   * A function returning the current time, to be used when evaluating policy conditions.
   *
   * @remarks
   * The function can either return a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date | Date} or a number of milliseconds elapsed since the Unix epoch.
   *
   * @defaultValue `Date.now`
   */
  now?: (() => Date | number) | undefined;

  /**
   * A callback to invoke when the embedded policy decision point bundle has been loaded.
   *
   * @defaultValue (no-op)
   */
  onLoad?: ((metadata: BundleMetadata) => void) | undefined;

  /**
   * A callback to invoke when the embedded policy decision point bundle has failed to load.
   *
   * @defaultValue (no-op)
   */
  onError?: ((error: LoadError) => void) | undefined;
}

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

/**
 * Metadata describing an embedded policy decision point bundle.
 *
 * @public
 */
export interface BundleMetadata {
  /**
   * The commit SHA from which the bundle was built.
   */
  commit: string;

  /**
   * The time at which the bundle was built.
   */
  builtAt: Date;

  /**
   * The IDs of the policies included in the bundle.
   */
  policies: string[];
}

/**
 * Loads an embedded policy decision point bundle from a given source.
 *
 * @public
 */
export class Loader {
  /** @internal */
  public _active: LoadResult | Promise<LoadResult>;

  /**
   * Load an embedded policy decision point (PDP) bundle from a given source.
   *
   * @param source - WebAssembly binary code of an embedded PDP bundle, or a URL or HTTP response from which to stream it.
   * @param options - additional settings.
   *
   * @remarks
   * Bundle download URLs are available in the "Embedded" section of the "Decision points" page of your Cerbos Hub workspace.
   *
   * The bundle will be loaded in the background when the loader is created.
   * If loading fails, then the first request from the client using the loader will throw an error.
   * To detect failure to load the bundle before making any requests, provide an {@link Options.onError} callback or await the {@link Loader.active} method.
   *
   * @example
   * Fetch an embedded PDP bundle via HTTP in a {@link https://caniuse.com/wasm | supported browser} or Node.js 18.1+:
   *
   * ```typescript
   * const cerbos = new Loader("https://lite.cerbos.cloud/bundle?workspace=...&label=...");
   * ```
   *
   * @example
   * Read an embedded PDP bundle from disk in Node.js:
   *
   * ```typescript
   * import { readFile } from "fs/promises";
   *
   * const cerbos = new Loader(readFile("policies.wasm"));
   * ```
   */
  public constructor(
    source: Source,
    private readonly options: Options = {},
  ) {
    this._active = this._load(source, true);
  }

  /**
   * Resolves to the metadata of the loaded bundle, or rejects with the error that was encountered when loading the bundle.
   */
  public async active(): Promise<BundleMetadata> {
    return (await resolve(this._active)).metadata;
  }

  /** @internal */
  public readonly _transport = new Transport(
    async () => await resolve(this._active),
  );

  /** @internal */
  protected async _load(source: Source, initial = false): Promise<LoadResult> {
    try {
      const bundle = await Bundle.from(source, this.options);
      this._onLoad(bundle, initial);
      return { bundle };
    } catch (cause) {
      const error = new LoadError(cause);
      this._onError(error);
      return { error };
    }
  }

  /** @internal */
  protected _onLoad(bundle: Bundle, _initial: boolean): void {
    this.options.onLoad?.(bundle.metadata);
  }

  /** @internal */
  protected _onError(error: LoadError): void {
    this.options.onError?.(error);
  }
}

const notModified = new Error("HTTP 304");

/**
 * Options for creating a new {@link AutoUpdatingLoader}.
 *
 * @public
 */
export interface AutoUpdateOptions extends Options {
  /**
   * Whether to activate updated embedded policy decision point bundles as soon as they are downloaded.
   *
   * @remarks
   * If `false`, new bundles will be downloaded automatically but not used to evaluate policy decisions until you call {@link AutoUpdatingLoader.activate}.
   * This might be useful if you want to activate updates only on page transitions to avoid layout shifts in your application.
   *
   * To detect whether an update is available to activate, provide an {@link Options.onLoad} callback or check the {@link AutoUpdatingLoader.pending} property.
   *
   * @defaultValue `true`
   */
  activateOnLoad?: boolean;

  /**
   * The delay (in milliseconds) between successive requests to check for new embedded policy decision point bundles.
   *
   * @remarks
   * The interval will be increased to the minimum of 10 seconds if a smaller value is specified.
   *
   * @defaultValue `60000` (1 minute)
   */
  interval?: number;
}

/**
 * Loads an embedded policy decision point bundle from a given URL, and polls for updates.
 *
 * @public
 */
export class AutoUpdatingLoader extends Loader {
  private readonly activateOnLoad: boolean;
  private readonly interval: number;
  private _pending: Bundle | undefined;
  private etag: string | undefined;
  private running = true;
  private abortController?: AbortController;
  private timeout?: NodeJS.Timeout;

  /**
   * Load an embedded policy decision point bundle from a given URL.
   *
   * @param url - URL from which to stream bundles.
   * @param options - additional settings.
   *
   * @remarks
   * Bundle download URLs are available in the "Embedded" section of the "Decision points" page of your Cerbos Hub workspace.
   *
   * The bundle will be loaded in the background when the loader is created.
   * If initial loading fails, then the first request from the client using the loader will throw an error.
   * To detect failure to load the bundle before making any requests, provide an {@link Options.onError} callback or await the {@link Loader.active} method.
   *
   * Failure to load updates after the initial load will not cause requests from the client to throw errors,
   * but errors will be passed to the {@link Options.onError} callback.
   */
  public constructor(
    private readonly url: string | URL,
    { activateOnLoad = true, interval, ...options }: AutoUpdateOptions = {},
  ) {
    super(url, options);
    this.activateOnLoad = activateOnLoad;
    this.interval = constrainAutoUpdateInterval(interval);
    this.scheduleUpdate();
  }

  /**
   * The metadata of a new embedded policy decision point bundle that has been downloaded but is not yet being used to evaluate policy decisions.
   *
   * @remarks
   * Only set if {@link AutoUpdateOptions.activateOnLoad} is `false` and an update has been downloaded.
   *
   * Use {@link AutoUpdatingLoader.activate} to start using the pending bundle to evaluate policy decisions.
   */
  public get pending(): BundleMetadata | undefined {
    return this._pending?.metadata;
  }

  /**
   * Promote the {@link AutoUpdatingLoader.pending | pending} embedded policy decision point bundle (if any) to active, so that it is used to evaluate policy decisions.
   *
   * @remarks
   * This method is a no-op if an update has not been downloaded, or if {@link AutoUpdateOptions.activateOnLoad} is `true` (the default).
   */
  public activate(): void {
    if (this._pending) {
      this._active = { bundle: this._pending };
      this._pending = undefined;
    }
  }

  /**
   * Stops polling for new embedded policy decision point bundles, and aborts any in-flight updates.
   */
  public stop(): void {
    this.running = false;
    this.abortController?.abort();

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  /** @internal */
  protected override _onLoad(bundle: Bundle, initial: boolean): void {
    this.etag = bundle.etag;

    if (!initial) {
      this._pending = bundle;

      if (this.activateOnLoad) {
        this.activate();
      }
    }

    super._onLoad(bundle, initial);
  }

  /** @internal */
  protected override _onError(error: LoadError): void {
    if (!this.suppressError(error.cause)) {
      super._onError(error);
    }
  }

  private scheduleUpdate(): void {
    if (!this.running) {
      return;
    }

    if (this.timeout?.refresh) {
      this.timeout.refresh();
    } else {
      this.timeout = setTimeout(() => {
        void this.update();
      }, this.interval);
    }
  }

  private async update(): Promise<void> {
    this.abortController?.abort();
    this.abortController = new AbortController();
    await this._load(this.download(this.abortController.signal));
    this.scheduleUpdate();
  }

  private async download(signal: AbortSignal): Promise<Response> {
    const request: RequestInit = { signal };

    if (this.etag) {
      request.headers = { "If-None-Match": this.etag };
    }

    const response = await download(this.url, request);

    if (response.status === 304) {
      throw notModified;
    }

    return response;
  }

  private suppressError(cause: unknown): boolean {
    return cause === notModified || (isAbortError(cause) && !this.running);
  }
}

function isAbortError(error: unknown): error is DOMException {
  return error instanceof DOMException && error.name === "AbortError";
}
