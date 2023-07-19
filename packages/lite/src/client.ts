import { Client } from "@cerbos/core";

import { Server } from "./server";
import type { DecodeJWTPayload } from "./types/external";

/**
 * WebAssembly binary code of a policy bundle (or an HTTP response from which to stream it).
 *
 * @public
 */
export type Source =
  | ArrayBufferView
  | ArrayBuffer
  | Response
  | Promise<Response>;

/**
 * Options for creating a new {@link Lite} client.
 *
 * @public
 */
export interface Options {
  /**
   * Function to verify and decode JWTs passed as auxiliary data, returning the JWT payload.
   *
   * @defaultValue (throw an error if a JWT is passed)
   */
  decodeJWTPayload?: DecodeJWTPayload;

  /**
   * Function returning the current time, to be used when evaluating policy conditions.
   *
   * @remarks
   * Numeric values correspond to milliseconds elapsed since the Unix epoch.
   *
   * @defaultValue `Date.now`
   */
  now?: () => Date | number;
}

/**
 * A client for interacting with a WebAssembly Cerbos policy bundle.
 *
 * @remarks
 * See {@link @cerbos/core#Client | the parent class} for available methods.
 *
 * @public
 */
export class Lite extends Client {
  private readonly server: Promise<Server>;

  /**
   * Create a client for interacting with a WebAssembly Cerbos policy bundle.
   *
   * @param source - WebAssembly binary code of a policy bundle (or an HTTP response from which to stream it).
   * @param options - additional client settings.
   *
   * @example
   * Fetch a policy bundle via HTTP in a {@link https://caniuse.com/wasm | supported browser} or Node.js 18.1+:
   *
   * ```typescript
   * const cerbos = new Lite(fetch("/policies.wasm"));
   * ```
   *
   * @example
   * Read a policy bundle from disk in Node.js:
   *
   * ```typescript
   * const cerbos = new Lite(fs.readFileSync("policies.wasm"));
   * ```
   */
  public constructor(source: Source, options: Options = {}) {
    super(
      async (service, rpc, request) =>
        await (await this.server).perform(service, rpc, request),
      {},
    );

    this.server = server(
      instantiate(source, options),
      options.decodeJWTPayload ?? cannotDecodeJWTPayload,
    );
  }
}

function cannotDecodeJWTPayload(): never {
  throw new Error(
    "Received a JWT in auxiliary data, but a `decodeJWTPayload` function was not provided to the Lite client constructor",
  );
}

async function server(
  instantiatedSource: Promise<WebAssembly.WebAssemblyInstantiatedSource>,
  decodeJWTPayload: DecodeJWTPayload,
): Promise<Server> {
  return new Server(await instantiatedSource, decodeJWTPayload);
}

async function instantiate(
  source: Source,
  { now = Date.now }: Options,
): Promise<WebAssembly.WebAssemblyInstantiatedSource> {
  const imports = {
    env: {
      now: () => secondsSinceUnixEpoch(now()),
    },
  };

  const resolvedSource = await source;

  if (resolvedSource instanceof Response) {
    return await WebAssembly.instantiateStreaming(resolvedSource, imports);
  }

  return await WebAssembly.instantiate(resolvedSource, imports);
}

function secondsSinceUnixEpoch(date: Date | number): bigint {
  const millisecondsSinceUnixEpoch =
    date instanceof Date ? date.getTime() : date;

  return BigInt(Math.floor(millisecondsSinceUnixEpoch / 1000));
}
