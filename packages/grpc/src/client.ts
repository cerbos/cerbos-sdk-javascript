import type { SecureContext } from "tls";

import { ChannelCredentials, Client as GenericClient } from "@grpc/grpc-js";

import type { Options as CoreOptions } from "@cerbos/core";
import { Client } from "@cerbos/core";

import { Transport } from "./transport";

const { version } = require("../package.json") as { version: string };

const defaultUserAgent = `cerbos-sdk-javascript-grpc/${version}`;

/**
 * Options for creating a new {@link GRPC} client.
 *
 * @public
 */
export interface Options extends CoreOptions {
  /**
   * Encrypt the gRPC connection with TLS.
   *
   * @remarks
   * Possible values are
   *
   * - `false` - communicate via plaintext;
   *
   * - `true` - encrypt the connection with TLS, verifying the server identity with the default set of well-known root certificate authorities; or
   *
   * - the result of calling {@link https://nodejs.org/api/tls.html#tlscreatesecurecontextoptions | tls.createSecureContext }, to configure custom root certificate authorities or client certificates for mutual TLS.
   */
  tls: boolean | SecureContext;
}

/**
 * A client for interacting with the Cerbos policy decision point server over gRPC.
 *
 * @remarks
 * Not supported in browsers.
 *
 * See {@link @cerbos/core#Client | the parent class} for available methods.
 *
 * @public
 */
export class GRPC extends Client {
  private readonly client: GenericClient;

  /**
   * Create a client for interacting with the Cerbos policy decision point (PDP) server over gRPC.
   *
   * @param target - Cerbos PDP server address (`"host"`, `"host:port"`, or `"unix:/path/to/socket"`).
   * @param options - additional client settings.
   *
   * @example
   * Connect via TCP with no encryption:
   *
   * ```typescript
   * const cerbos = new GRPC("localhost:3593", { tls: false });
   * ```
   *
   * @example
   * Connect via a Unix socket with no encryption:
   *
   * ```typescript
   * const cerbos = new GRPC("unix:/var/run/cerbos.grpc.sock", { tls: false });
   * ```
   *
   * @example
   * Connect to the hosted demo PDP to experiment {@link https://play.cerbos.dev | in the playground}:
   *
   * ```typescript
   * const cerbos = new GRPC("demo-pdp.cerbos.cloud", { tls: true, playgroundInstance: "gE623b0180QlsG5a4QIN6UOZ6f3iSFW2" });
   * ```
   */
  public constructor(target: string, options: Options) {
    const credentials = channelCredentials(options);

    const client = new GenericClient(target, credentials, {
      "grpc.primary_user_agent": `${
        options.userAgent ? `${options.userAgent} ` : ""
      }${defaultUserAgent}`,
      "grpc.default_compression_algorithm": `${
        options.compressionAlgorithm ? `${options.compressionAlgorithm} ` : "0"
      }`,
      // GZIP compression
      // 0 - No compression
      // 1 - Compress with DEFLATE algorithm
      // 2 - Compress with GZIP algorithm
      // 3 - Stream compression with GZIP algorithm
      "grpc.default_compression_level": `${
        options.compressionLevel ? `${options.compressionLevel} ` : "0"
      }`,
      // 0 - None
      // 1 - Low level
      // 2 - Medium level
      // 3 - High level
    });

    super(new Transport(client), options);
    this.client = client;
  }

  /**
   * Disconnect from the Cerbos policy decision point server and clean up resources.
   *
   * @remarks
   * It is safe to call `close` more than once.
   *
   * Any interactions with the server after calling `close` will throw an error.
   */
  public close(): void {
    this.client.close();
  }
}

function channelCredentials({
  playgroundInstance,
  tls,
}: Options): ChannelCredentials {
  if (!tls) {
    if (playgroundInstance) {
      throw new Error(
        "TLS is required when connecting to a playground instance",
      );
    }

    return ChannelCredentials.createInsecure();
  }

  if (tls === true) {
    return ChannelCredentials.createSsl();
  }

  return ChannelCredentials.createFromSecureContext(tls);
}
