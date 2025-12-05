import type { Options as CoreOptions } from "@cerbos/core";
import { Client } from "@cerbos/core";
import { userAgent } from "@cerbos/core/~internal";

import { Transport } from "./transport";

const { version } = require("../package.json") as { version: string };

const defaultUserAgent = `cerbos-sdk-javascript-http/${version}`;

/**
 * Options for creating a new {@link HTTP} client.
 *
 * @public
 */
export type Options = CoreOptions;

/**
 * A client for interacting with the Cerbos policy decision point server over HTTP.
 *
 * @remarks
 * This is primarily intended for use in browsers, and requires `fetch` to be available globally.
 * If you're targeting {@link https://caniuse.com/fetch | old browsers}, you'll need to apply {@link https://www.npmjs.com/package/whatwg-fetch | a polyfill}.
 *
 * You can use it in server-side Node.js applications, but the {@link @cerbos/grpc#GRPC | gRPC client} might be more appropriate.
 *
 * See {@link @cerbos/core#Client | the parent class} for available methods.
 *
 * @public
 */
export class HTTP extends Client {
  /**
   * Create a client for interacting with the Cerbos policy decision point (PDP) server over HTTP.
   *
   * @param baseUrl - base Cerbos PDP server URL (the Cerbos REST API must be available at `${baseUrl}/api/`).
   * @param options - additional client settings.
   *
   * @example
   * Connect via HTTP:
   *
   * ```typescript
   * const cerbos = new HTTP("http://localhost:3592");
   * ```
   *
   * @example
   * Connect to the hosted demo PDP to experiment {@link https://play.cerbos.dev | in the playground}:
   *
   * ```typescript
   * const cerbos = new HTTP("https://demo-pdp.cerbos.cloud", { playgroundInstance: "gE623b0180QlsG5a4QIN6UOZ6f3iSFW2" });
   * ```
   */
  public constructor(baseUrl: string, options: Options = {}) {
    super(
      new Transport(baseUrl, userAgent(options.userAgent, defaultUserAgent)),
      options,
    );
  }
}
