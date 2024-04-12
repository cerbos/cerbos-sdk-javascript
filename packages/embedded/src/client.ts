import { Client } from "@cerbos/core";

import type { Options, Source } from "./loader";
import { Loader } from "./loader";

/**
 * A client for interacting with an embedded Cerbos policy decision point (PDP).
 *
 * @remarks
 * Embedded PDP bundles are WebAssembly modules downloaded from {@link https://www.cerbos.dev/product-cerbos-hub | Cerbos Hub}.
 * Bundle download URLs are available in the "Embedded" section of the "Decision points" page of your Cerbos Hub workspace.
 *
 * See {@link @cerbos/core#Client | the parent class} for available methods.
 *
 * @public
 */
export class Embedded extends Client {
  /**
   * The {@link Loader} used to load the embedded policy decision point bundle.
   */
  public readonly loader: Loader;

  /**
   * Create a client for interacting with an embedded Cerbos policy decision point (PDP), using a specified {@link Loader} to load the embedded PDP bundle.
   *
   * @remarks
   * Bundle download URLs are available in the "Embedded" section of the "Decision points" page of your Cerbos Hub workspace.
   *
   * @example
   * Fetch an embedded PDP bundle via HTTP in a {@link https://caniuse.com/wasm | supported browser} or Node.js 18.1+,
   * and {@link AutoUpdatingLoader | automatically update} the bundle when newer versions become available:
   *
   * ```typescript
   * const loader = new AutoUpdatingLoader("https://lite.cerbos.cloud/bundle?workspace=...&label=...");
   * const cerbos = new Embedded(loader);
   * ```
   */
  public constructor(loader: Loader);

  /**
   * Create a client for interacting with an embedded Cerbos policy decision point (PDP), using the default {@link Loader} to load the embedded PDP bundle.
   *
   * @param source - WebAssembly binary code of an embedded PDP bundle, or a URL or HTTP response from which to stream it.
   * @param options - additional settings.
   *
   * @remarks
   * This is equivalent to `new Embedded(new Loader(source, options))`.
   *
   * Bundle download URLs are available in the "Embedded" section of the "Decision points" page of your Cerbos Hub workspace.
   *
   * @example
   * Fetch an embedded PDP bundle via HTTP in a {@link https://caniuse.com/wasm | supported browser} or Node.js 18.1+:
   *
   * ```typescript
   * const cerbos = new Embedded("https://lite.cerbos.cloud/bundle?workspace=...&label=...");
   * ```
   */
  public constructor(source: Source, options?: Options);

  public constructor(loaderOrSource: Loader | Source, options?: Options) {
    const loader =
      loaderOrSource instanceof Loader
        ? loaderOrSource
        : new Loader(loaderOrSource, options);

    super(loader._transport, {});
    this.loader = loader;
  }
}
