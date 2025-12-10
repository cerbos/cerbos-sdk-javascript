import { Client } from "@cerbos/core";

import type { Options } from "./options";
import { Server } from "./server";
import { Transport } from "./transport";

/**
 * A client for interacting with an embedded Cerbos policy decision point.
 *
 * @remarks
 * See {@link @cerbos/core#Client | the parent class} for available methods.
 *
 * @public
 */
export class Embedded extends Client {
  /**
   * Create a client for interacting with an embedded Cerbos policy decision point (PDP).
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
   *     fileURLToPath(import.meta.resolve("@cerbos/embedded-server/wasm")),
   *   ),
   * });
   * ```
   */
  public constructor(options: Options) {
    const server = new Server(options);
    super(new Transport(server), options);
  }
}
