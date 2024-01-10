/**
 * Client library for interacting with the Cerbos policy decision point service over gRPC from server-side Node.js applications.
 *
 * @packageDocumentation
 */

import type { SecureContext } from "tls";

import type {
  Options as CoreOptions,
  _RPC,
  _Request,
  _Response,
  _Service,
} from "@cerbos/core";
import { Client, NotOK, Status } from "@cerbos/core";
import type { CallOptions, MethodDefinition } from "@grpc/grpc-js";
import {
  ChannelCredentials,
  Client as GenericClient,
  Metadata,
} from "@grpc/grpc-js";

import {
  CerbosAdminServiceService as adminService,
  CerbosServiceService as cerbosService,
} from "./protobuf/cerbos/svc/v1/svc";

// eslint-disable-next-line @typescript-eslint/no-var-requires -- Can't import package.json because it is outside of the project's rootDir
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
    });

    super(async (service, rpc, request, headers) => {
      const { path, requestSerialize, responseDeserialize } = services[service][
        rpc
      ] as Endpoint<typeof service, typeof rpc>; // https://github.com/microsoft/TypeScript/issues/30581

      const callOptions: CallOptions = {};

      const metadata = new Metadata();
      for (const [hame, value] of headers) {
        metadata.set(hame, value);
      }

      return await new Promise((resolve, reject) => {
        client.makeUnaryRequest(
          path,
          requestSerialize,
          responseDeserialize,
          request,
          metadata,
          callOptions,
          (error, response) => {
            if (error) {
              reject(
                new NotOK(
                  (error.code || Status.UNKNOWN) as Status,
                  error.details,
                ),
              );
            } else if (!response) {
              reject(new NotOK(Status.UNKNOWN, "No response received"));
            } else {
              resolve(response);
            }
          },
        );
      });
    }, options);

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

type Endpoint<
  Service extends _Service,
  RPC extends _RPC<Service>,
> = MethodDefinition<_Request<Service, RPC>, _Response<Service, RPC>>;

type Services = {
  [Service in _Service]: {
    [RPC in _RPC<Service>]: Endpoint<Service, RPC>;
  };
};

const services: Services = {
  admin: adminService,
  cerbos: cerbosService,
};

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
