import { Client } from "@cerbos/core";

import type { Options } from "./options";
import { Server } from "./server";
import { Transport } from "./transport";

/**
 * A client for interacting with an embedded Cerbos policy decision point (PDP).
 *
 * @remarks
 * TODO
 *
 * See {@link @cerbos/core#Client | the parent class} for available methods.
 *
 * @public
 */
export class Embedded extends Client {
  /**
   * TODO
   */
  public constructor(options: Options) {
    const server = new Server(options);
    super(new Transport(server), options);
  }
}
