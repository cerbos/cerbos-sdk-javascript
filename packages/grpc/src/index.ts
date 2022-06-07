/**
 * Client library for interacting with the Cerbos policy decision point over gRPC from server-side Node.js applications.
 *
 * @packageDocumentation
 */

import type { SecureContext } from "tls";

import {
  Client,
  Options as CoreOptions,
  NotOK,
  Status,
  _Response,
  _Transport,
} from "@cerbos/core";
import {
  CallCredentials,
  ChannelCredentials,
  Client as GenericClient,
  Metadata,
  MethodDefinition,
} from "@grpc/grpc-js";

import { CerbosServiceService as cerbosService } from "./protobuf/cerbos/svc/v1/svc";

// eslint-disable-next-line @typescript-eslint/no-var-requires -- Can't import package.json because it is outside of the project's rootDir
const { version } = require("../package.json") as { version: string };

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
    const client = new GenericClient(target, credentials(options), {
      "grpc.primary_user_agent": `cerbos-sdk-javascript-grpc/${version}`,
    });

    const transport: _Transport = (rpc, request) => {
      const { path, requestSerialize, responseDeserialize } = cerbosService[
        rpc
      ] as MethodDefinition<typeof request, _Response<typeof rpc>>; // https://github.com/microsoft/TypeScript/issues/30581

      return new Promise((resolve, reject) => {
        client.makeUnaryRequest(
          path,
          requestSerialize,
          responseDeserialize,
          request,
          (error, response) => {
            if (error) {
              reject(
                new NotOK(
                  (error.code || Status.UNKNOWN) as Status,
                  error.details
                )
              );
            } else if (!response) {
              reject(new NotOK(Status.UNKNOWN, "No response received"));
            } else {
              resolve(response);
            }
          }
        );
      });
    };

    super(transport, options);

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

const credentials = ({
  playgroundInstance,
  tls,
}: Options): ChannelCredentials => {
  if (!tls) {
    if (playgroundInstance) {
      throw new Error(
        "TLS is required when connecting to a playground instance"
      );
    }

    return ChannelCredentials.createInsecure();
  }

  let channelCredentials: ChannelCredentials;

  if (tls === true) {
    channelCredentials = ChannelCredentials.createSsl();
  } else {
    channelCredentials = ChannelCredentials.createFromSecureContext(tls);
  }

  if (playgroundInstance) {
    return channelCredentials.compose(callCredentials(playgroundInstance));
  }

  return channelCredentials;
};

const callCredentials = (playgroundInstance: string): CallCredentials =>
  CallCredentials.createFromMetadataGenerator((_, callback) => {
    const metadata = new Metadata();
    metadata.set("playground-instance", playgroundInstance);
    callback(null, metadata);
  });
