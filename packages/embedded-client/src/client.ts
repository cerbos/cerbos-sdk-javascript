import { Client } from "@cerbos/core";

import type { Options } from "./options.js";
import { Server } from "./server.js";
import { Transport } from "./transport.js";

/**
 * A client for interacting with an embedded Cerbos policy decision point.
 *
 * @remarks
 * See {@link @cerbos/core#Client | the parent class} for available methods.
 *
 * @public
 */
export class Embedded extends Client {
  private readonly server: Server;

  /**
   * Create a client for interacting with an embedded Cerbos policy decision point (PDP).
   *
   * @example
   * Read the PDP's WebAssembly module from the server using {@link https://vite.dev/guide/features#webassembly | Vite}:
   *
   * ```typescript
   * import wasm from "@cerbos/embedded-server/server.wasm?init";
   *
   * const cerbos = new Embedded({
   *   policies: { ruleId: "B5LU9EVYN1MD" },
   *   wasm,
   * });
   * ```
   *
   * @example
   * Read the PDP's WebAssembly module from the local filesystem in Node.js:
   *
   * ```typescript
   * import { readFile } from "node:fs/promises";
   * import { fileURLToPath } from "node:url";
   *
   * const cerbos = new Embedded({
   *   policies: { ruleId: "B5LU9EVYN1MD" },
   *   wasm: readFile(
   *     fileURLToPath(import.meta.resolve("@cerbos/embedded-server/server.wasm")),
   *   ),
   * });
   * ```
   */
  public constructor(options: Options) {
    const server = new Server(options);
    super(new Transport(server), options);
    this.server = server;
  }

  /** @internal */
  public override get ["~updateSignal"](): unknown {
    return this.server.loader?.["~updateSignal"];
  }
}
