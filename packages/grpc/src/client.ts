import type { SecureContext } from "tls";

import type { ChannelOptions as GrpcChannelOptions } from "@grpc/grpc-js";
import {
  ChannelCredentials,
  Client as GenericClient,
  compressionAlgorithms,
} from "@grpc/grpc-js";

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

  /**
   * Compress messages exchanged between the client and policy decision point server.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.19.
   *
   * @defaultValue `Compression.NONE`
   */
  compression?: Compression | undefined;

  /**
   * Advanced settings to configure the underlying gRPC client.
   *
   * @defaultValue `{}`
   */
  channelOptions?: ChannelOptions | undefined;
}

/**
 * Compression algorithm to apply to messages exchanged between the client and policy decision point server.
 *
 * @public
 */
export enum Compression {
  /**
   * Do not compress messages.
   */
  NONE = "identity",

  /**
   * Compress messages with gzip.
   */
  GZIP = "gzip",
}

/**
 * Advanced settings to configure a gRPC client.
 *
 * @public
 */
export interface ChannelOptions {
  /**
   * Initial window size (in bytes) for HTTP/2 stream-level flow control.
   *
   * @defaultValue `65535`
   */
  "grpc-node.flow_control_window"?: number | undefined;

  /**
   * Maximum number of attempts when retrying requests.
   *
   * @defaultValue `5`
   */
  "grpc-node.retry_max_attempts_limit"?: number | undefined;

  /**
   * Set to `1` to {@link https://nodejs.org/api/tls.html#tlssocketenabletrace | write TLS packet trace information to stderr}.
   *
   * @defaultValue `0` (disabled)
   */
  "grpc-node.tls_enable_trace"?: number | undefined;

  /**
   * Timeout (in milliseconds) after the last RPC finishes on the client channel at which the
   * channel goes back into IDLE state.
   *
   * @remarks
   * Minimum value is 1 second.
   *
   * @defaultValue `1_800_000` (30 minutes)
   */
  "grpc.client_idle_timeout_ms"?: number | undefined;

  /**
   * Default value for the `:authority` HTTP/2 pseudo-header.
   */
  "grpc.default_authority"?: string | undefined;

  /**
   * Minimum amount of time between DNS resolutions (in milliseconds).
   *
   * @defaultValue `30_000` (30 seconds)
   */
  "grpc.dns_min_time_between_resolutions_ms"?: number | undefined;

  /**
   * Set to `0` to disable channel-level debug information.
   *
   * @defaultValue `1` (enabled)
   */
  "grpc.enable_channelz"?: number | undefined;

  /**
   * Set to `0` to disable HTTP proxies.
   *
   * @defaultValue `1` (enabled)
   */
  "grpc.enable_http_proxy"?: number | undefined;

  /**
   * Set to `0` to prevent the client from retrying requests.
   *
   * @defaultValue `1` (enabled)
   */
  "grpc.enable_retries"?: number | undefined;

  /**
   * The time between the first and second connection attempts (in milliseconds).
   *
   * @defaultValue `1_000` (1 second)
   */
  "grpc.initial_reconnect_backoff_ms"?: number | undefined;

  /**
   * Set to `1` to send keepalive pings from the client without any outstanding streams.
   *
   * @defaultValue `0` (disabled)
   */
  "grpc.keepalive_permit_without_calls"?: number | undefined;

  /**
   * Duration (in milliseconds) after which client pings the server to see if the transport is still alive.
   *
   * @defaultValue `-1` (disabled)
   */
  "grpc.keepalive_time_ms"?: number | undefined;

  /**
   * Duration (in milliseconds) after which to close the transport if a keepalive ping has not been acknowleged by the server.
   */
  "grpc.keepalive_timeout_ms"?: number | undefined;

  /**
   * Cap the minimum and maximum ring size values set in the load balander policy config to this value.
   *
   * @defaultValue `4096`
   */
  "grpc.lb.ring_hash.ring_size_cap"?: number | undefined;

  /**
   * Maximum size (in bytes) of messages that can be received on the channel.
   *
   * @defaultValue `4_194_304` (4 MiB)
   */
  "grpc.max_receive_message_length"?: number | undefined;

  /**
   * The maximum time between subsequent connection attempts (in milliseconds).
   *
   * @defaultValue `120_000` (2 minutes)
   */
  "grpc.max_reconnect_backoff_ms"?: number | undefined;

  /**
   * Maximum size (in bytes) of messages that can be sent on the channel.
   *
   * @defaultValue `-1` (unlimited)
   */
  "grpc.max_send_message_length"?: number | undefined;

  /**
   * Per-RPC retry buffer size (in bytes).
   *
   * @defaultValue `1_048_576` (1 MiB)
   */
  "grpc.per_rpc_retry_buffer_size"?: number | undefined;

  /**
   * Total retry buffer size (in bytes).
   *
   * @defaultValue `16_777_216` (16 MiB)
   */
  "grpc.retry_buffer_size"?: number | undefined;

  /**
   * Set to `1` to disable looking up service config via DNS.
   *
   * @defaultValue `0` (enabled)
   */
  "grpc.service_config_disable_resolution"?: number | undefined;

  /**
   * Service config data in JSON form.
   *
   * @remarks
   * This value will be ignored if service config is found via DNS.
   */
  "grpc.service_config"?: string | undefined;

  /**
   * Override the target name used for SSL hostname checking.
   *
   * @remarks
   * This should only be used for testing.
   */
  "grpc.ssl_target_name_override"?: string | undefined;

  /**
   * If set to `0`, this channel uses the global subchannel pool. Otherwise, it uses a local subchannel pool within the channel.
   *
   * @defaultValue `0` (disabled)
   */
  "grpc.use_local_subchannel_pool"?: number | undefined;
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
    const client = new GenericClient(
      target,
      channelCredentials(options),
      channelOptions(options),
    );

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

function channelOptions({
  compression = Compression.NONE,
  userAgent,
  channelOptions: input = {},
}: Options): GrpcChannelOptions {
  const output = Object.fromEntries(
    Object.entries(input).filter(([, value]) => value !== undefined),
  );

  output["grpc.default_compression_algorithm"] =
    compressionAlgorithms[compression];

  output["grpc.primary_user_agent"] = `${
    userAgent ? `${userAgent} ` : ""
  }${defaultUserAgent}`;

  return output;
}
