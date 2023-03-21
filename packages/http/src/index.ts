/**
 * Client library for interacting with the Cerbos policy decision point over HTTP from browser-based applications.
 *
 * @packageDocumentation
 */

import type {
  AdminCredentials,
  Options as CoreOptions,
  _RPC,
  _Request,
  _Response,
  _Service,
  _Transport,
} from "@cerbos/core";
import { Client, NotOK } from "@cerbos/core";
import { btoa } from "abab";
import { stringify as queryStringify } from "qs";

import {
  AddOrUpdatePolicyRequest,
  AddOrUpdateSchemaRequest,
  CheckResourcesRequest,
  DeleteSchemaRequest,
  DisablePolicyRequest,
  GetPolicyRequest,
  GetSchemaRequest,
  ListPoliciesRequest,
  ListSchemasRequest,
  PlanResourcesRequest,
  ReloadStoreRequest,
  ServerInfoRequest,
} from "./protobuf/cerbos/request/v1/request";
import {
  AddOrUpdatePolicyResponse,
  AddOrUpdateSchemaResponse,
  CheckResourcesResponse,
  DeleteSchemaResponse,
  DisablePolicyResponse,
  GetPolicyResponse,
  GetSchemaResponse,
  ListPoliciesResponse,
  ListSchemasResponse,
  PlanResourcesResponse,
  ReloadStoreResponse,
  ServerInfoResponse,
} from "./protobuf/cerbos/response/v1/response";

// eslint-disable-next-line @typescript-eslint/no-var-requires -- Can't import package.json because it is outside of the project's rootDir
const { version } = require("../package.json") as { version: string };

/**
 * Options for creating a new {@link HTTP} client.
 *
 * @public
 */
export interface Options extends CoreOptions {
  /**
   * Headers to add to every request.
   *
   * @defaultValue `undefined`
   */
  headers?: HeadersInit | (() => HeadersInit) | undefined;
}

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
    const transport: _Transport = async (
      service,
      rpc,
      request,
      adminCredentials
    ) => {
      const { method, path, requestType, responseType } = services[service][
        rpc
      ] as Endpoint<typeof service, typeof rpc>; // https://github.com/microsoft/TypeScript/issues/30581

      const requestProtobuf = requestType.toJSON(request);

      const query =
        method !== "POST"
          ? `?${queryStringify(requestProtobuf, { indices: false })}`
          : "";

      const response = await fetch(url + path + query, {
        method,
        body: method !== "POST" ? null : JSON.stringify(requestProtobuf),
        headers: headers(options, adminCredentials),
      });

      if (!response.ok) {
        throw NotOK.fromJSON(await response.text());
      }

      return responseType.fromJSON(await response.json());
    };

    super(transport, options);
  }
}

interface Endpoint<Service extends _Service, RPC extends _RPC<Service>> {
  method: "GET" | "POST" | "DELETE";
  path: string;
  requestType: { toJSON: (request: _Request<Service, RPC>) => unknown };
  responseType: { fromJSON: (response: unknown) => _Response<Service, RPC> };
}

type Services = {
  [Service in _Service]: {
    [RPC in _RPC<Service>]: Endpoint<Service, RPC>;
  };
};

const services: Services = {
  admin: {
    addOrUpdatePolicy: {
      method: "POST",
      path: "/admin/policy",
      requestType: AddOrUpdatePolicyRequest,
      responseType: AddOrUpdatePolicyResponse,
    },
    addOrUpdateSchema: {
      method: "POST",
      path: "/admin/schema",
      requestType: AddOrUpdateSchemaRequest,
      responseType: AddOrUpdateSchemaResponse,
    },
    deleteSchema: {
      method: "DELETE",
      path: "/admin/schema",
      requestType: DeleteSchemaRequest,
      responseType: DeleteSchemaResponse,
    },
    disablePolicy: {
      method: "DELETE",
      path: "/admin/policy",
      requestType: DisablePolicyRequest,
      responseType: DisablePolicyResponse,
    },
    getPolicy: {
      method: "GET",
      path: "/admin/policy",
      requestType: GetPolicyRequest,
      responseType: GetPolicyResponse,
    },
    getSchema: {
      method: "GET",
      path: "/admin/schema",
      requestType: GetSchemaRequest,
      responseType: GetSchemaResponse,
    },
    listPolicies: {
      method: "GET",
      path: "/admin/policies",
      requestType: ListPoliciesRequest,
      responseType: ListPoliciesResponse,
    },
    listSchemas: {
      method: "GET",
      path: "/admin/schemas",
      requestType: ListSchemasRequest,
      responseType: ListSchemasResponse,
    },
    reloadStore: {
      method: "GET",
      path: "/admin/store/reload",
      requestType: ReloadStoreRequest,
      responseType: ReloadStoreResponse,
    },
  },
  cerbos: {
    checkResources: {
      method: "POST",
      path: "/api/check/resources",
      requestType: CheckResourcesRequest,
      responseType: CheckResourcesResponse,
    },
    planResources: {
      method: "POST",
      path: "/api/plan/resources",
      requestType: PlanResourcesRequest,
      responseType: PlanResourcesResponse,
    },
    serverInfo: {
      method: "GET",
      path: "/api/server_info",
      requestType: ServerInfoRequest,
      responseType: ServerInfoResponse,
    },
  },
};

const headers = (
  { headers: optionalHeaders, playgroundInstance }: Options,
  adminCredentials: AdminCredentials | undefined
): Headers => {
  const headers = new Headers(
    typeof optionalHeaders === "function" ? optionalHeaders() : optionalHeaders
  );

  headers.append("User-Agent", `cerbos-sdk-javascript-http/${version}`);

  if (adminCredentials) {
    headers.set(
      "Authorization",
      `Basic ${
        btoa(`${adminCredentials.username}:${adminCredentials.password}`) ?? ""
      }`
    );
  }

  if (playgroundInstance) {
    headers.set("Playground-Instance", playgroundInstance);
  }

  return headers;
};
