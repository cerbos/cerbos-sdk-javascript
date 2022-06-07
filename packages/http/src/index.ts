/**
 * Client library for interacting with the Cerbos policy decision point over HTTP from browser-based applications.
 *
 * @packageDocumentation
 */

import {
  Client,
  NotOK,
  Options,
  Status,
  _RPCs,
  _Request,
  _Response,
  _Transport,
} from "@cerbos/core";

import {
  CheckResourcesRequest,
  PlanResourcesRequest,
} from "./protobuf/cerbos/request/v1/request";
import {
  CheckResourcesResponse,
  PlanResourcesResponse,
  ServerInfoResponse,
} from "./protobuf/cerbos/response/v1/response";

// eslint-disable-next-line @typescript-eslint/no-var-requires -- Can't import package.json because it is outside of the project's rootDir
const { version } = require("../package.json") as { version: string };

export type { Options } from "@cerbos/core";

/**
 * A client for interacting with the Cerbos policy decision point server over HTTP.
 *
 * @remarks
 * This is primarily intended for use in browsers, and requires `fetch` to be available globally.
 * If you're targeting {@link https://caniuse.com/fetch | old browsers}, you'll need to apply {@link https://www.npmjs.com/package/whatwg-fetch | a polyfill}.
 *
 * You can use it in server-side Node.js applications, but the {@link @cerbos/grpc#GRPC | gRPC client} might be more appropriate.
 *
 * - For Node.js up to 17.4, you'll need {@link https://www.npmjs.com/package/cross-fetch | a polyfill} to make `fetch` happen.
 *
 * - From Node.js 17.5, you can instead enable the {@link https://nodejs.org/dist/latest-v17.x/docs/api/cli.html#--experimental-fetch | --experimental-fetch} option at the command line or via `NODE_OPTIONS`.
 *
 * - From Node.js 18 onwards `fetch` is available without any additional configuration.
 *
 * See {@link @cerbos/core#Client | the parent class} for available methods.
 *
 * @public
 */
export class HTTP extends Client {
  /**
   * Create a client for interacting with the Cerbos policy decision point (PDP) server over HTTP.
   *
   * @param url - base Cerbos PDP server URL (the Cerbos REST API must be available at `${url}/api/`).
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
  public constructor(url: string, options: Options = {}) {
    const { playgroundInstance } = options;

    const headers: HeadersInit = {
      "User-Agent": `cerbos-sdk-javascript-http/${version}`,
    };

    if (playgroundInstance) {
      headers["Playground-Instance"] = playgroundInstance;
    }

    const transport: _Transport = async (rpc, request) => {
      const { method, path, serializeRequest, deserializeResponse } =
        service[rpc];

      const response = await fetch(url + path, {
        method,
        body: serializeRequest(request),
        headers,
      });

      if (!response.ok) {
        throw notOK(await response.text());
      }

      return deserializeResponse(await response.json());
    };

    super(transport, options);
  }
}

type Service = {
  [RPC in keyof _RPCs]: {
    method: "GET" | "POST";
    path: string;
    serializeRequest: (request: _Request<RPC>) => string | null;
    deserializeResponse: (response: unknown) => _Response<RPC>;
  };
};

const service: Service = {
  checkResources: {
    method: "POST",
    path: "/api/check/resources",
    serializeRequest: (request) =>
      JSON.stringify(CheckResourcesRequest.toJSON(request)),
    deserializeResponse: (response) =>
      CheckResourcesResponse.fromJSON(response),
  },
  planResources: {
    method: "POST",
    path: "/api/plan/resources",
    serializeRequest: (request) =>
      JSON.stringify(PlanResourcesRequest.toJSON(request)),
    deserializeResponse: (response) => PlanResourcesResponse.fromJSON(response),
  },
  serverInfo: {
    method: "GET",
    path: "/api/server_info",
    serializeRequest: () => null,
    deserializeResponse: (response) => ServerInfoResponse.fromJSON(response),
  },
};

const notOK = (text: string): NotOK => {
  try {
    const error: unknown = JSON.parse(text);
    return new NotOK(code(error), details(error));
  } catch (_) {
    return new NotOK(Status.UNKNOWN, text);
  }
};

const code = (error: unknown): Status => {
  if (
    has(error, "code") &&
    typeof error.code === "number" &&
    error.code in Status
  ) {
    return error.code || Status.UNKNOWN;
  }

  throw new Error("Error does not include expected code");
};

const details = (error: unknown): string => {
  if (has(error, "message") && typeof error.message === "string") {
    return error.message;
  }

  throw new Error("Error does not include expected details");
};

const has = <K extends string>(
  object: unknown,
  property: K
): object is Record<K, unknown> =>
  !!object && Object.prototype.hasOwnProperty.call(object, property);
