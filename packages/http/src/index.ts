/**
 * Client library for interacting with the Cerbos policy decision point service over HTTP from browser-based applications.
 *
 * @packageDocumentation
 */

import type {
  Options as CoreOptions,
  _RPC,
  _Request,
  _Response,
  _Service,
} from "@cerbos/core";
import { Client, NotOK, Status } from "@cerbos/core";
import { stringify as queryStringify } from "qs";

import {
  AddOrUpdatePolicyRequest,
  AddOrUpdateSchemaRequest,
  CheckResourcesRequest,
  DeleteSchemaRequest,
  DisablePolicyRequest,
  EnablePolicyRequest,
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
  EnablePolicyResponse,
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

const defaultUserAgent = `cerbos-sdk-javascript-http/${version}`;

/**
 * Options for creating a new {@link HTTP} client.
 *
 * @public
 */
export type Options = CoreOptions;

/**
 * A client for interacting with the Cerbos policy decision point server over HTTP.
 *
 * @remarks
 * This is primarily intended for use in browsers, and requires `fetch` to be available globally.
 * If you're targeting {@link https://caniuse.com/fetch | old browsers}, you'll need to apply {@link https://www.npmjs.com/package/whatwg-fetch | a polyfill}.
 *
 * You can use it in server-side Node.js applications, but the {@link @cerbos/grpc#GRPC | gRPC client} might be more appropriate.
 *
 * See {@link @cerbos/core#Client | the parent class} for available methods.
 *
 * @public
 */
export class HTTP extends Client {
  /**
   * Create a client for interacting with the Cerbos policy decision point (PDP) server over HTTP.
   *
   * @param baseUrl - base Cerbos PDP server URL (the Cerbos REST API must be available at `${baseUrl}/api/`).
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
  public constructor(baseUrl: string, options: Options = {}) {
    const userAgent = `${
      options.userAgent ? `${options.userAgent} ` : ""
    }${defaultUserAgent}`;

    super(async (service, rpc, request, headers, abortHandler) => {
      const { method, path, requestType, responseType, serializeRequest } =
        services[service][rpc] as Endpoint<typeof service, typeof rpc>; // https://github.com/microsoft/TypeScript/issues/30581

      headers.set("User-Agent", userAgent);

      let url = baseUrl + path;
      const init: RequestInit = { method, headers };

      const requestProtobuf = requestType.toJSON(request);
      switch (serializeRequest) {
        case "body":
          init.body = JSON.stringify(requestProtobuf);
          break;

        case "query":
          url += `?${queryStringify(requestProtobuf, { indices: false })}`;
          break;
      }

      if (abortHandler.signal) {
        init.signal = abortHandler.signal;
      }

      let response: Response;
      try {
        response = await fetch(url, init);
      } catch (error) {
        abortHandler.throwIfAborted();

        throw new NotOK(
          Status.UNKNOWN,
          error instanceof Error
            ? `Request failed: ${error.message}`
            : "Request failed",
          { cause: error },
        );
      }

      if (!response.ok) {
        throw NotOK.fromJSON(await response.text());
      }

      return responseType.fromJSON(await response.json());
    }, options);
  }
}

interface Endpoint<Service extends _Service, RPC extends _RPC<Service>> {
  method: "GET" | "POST" | "DELETE";
  path: string;
  requestType: { toJSON: (request: _Request<Service, RPC>) => unknown };
  responseType: { fromJSON: (response: unknown) => _Response<Service, RPC> };
  serializeRequest: "body" | "query";
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
      serializeRequest: "body",
    },
    addOrUpdateSchema: {
      method: "POST",
      path: "/admin/schema",
      requestType: AddOrUpdateSchemaRequest,
      responseType: AddOrUpdateSchemaResponse,
      serializeRequest: "body",
    },
    deleteSchema: {
      method: "DELETE",
      path: "/admin/schema",
      requestType: DeleteSchemaRequest,
      responseType: DeleteSchemaResponse,
      serializeRequest: "query",
    },
    disablePolicy: {
      method: "DELETE",
      path: "/admin/policy",
      requestType: DisablePolicyRequest,
      responseType: DisablePolicyResponse,
      serializeRequest: "query",
    },
    enablePolicy: {
      method: "POST",
      path: "/admin/policy/enable",
      requestType: EnablePolicyRequest,
      responseType: EnablePolicyResponse,
      serializeRequest: "query",
    },
    getPolicy: {
      method: "GET",
      path: "/admin/policy",
      requestType: GetPolicyRequest,
      responseType: GetPolicyResponse,
      serializeRequest: "query",
    },
    getSchema: {
      method: "GET",
      path: "/admin/schema",
      requestType: GetSchemaRequest,
      responseType: GetSchemaResponse,
      serializeRequest: "query",
    },
    listPolicies: {
      method: "GET",
      path: "/admin/policies",
      requestType: ListPoliciesRequest,
      responseType: ListPoliciesResponse,
      serializeRequest: "query",
    },
    listSchemas: {
      method: "GET",
      path: "/admin/schemas",
      requestType: ListSchemasRequest,
      responseType: ListSchemasResponse,
      serializeRequest: "query",
    },
    reloadStore: {
      method: "GET",
      path: "/admin/store/reload",
      requestType: ReloadStoreRequest,
      responseType: ReloadStoreResponse,
      serializeRequest: "query",
    },
  },
  cerbos: {
    checkResources: {
      method: "POST",
      path: "/api/check/resources",
      requestType: CheckResourcesRequest,
      responseType: CheckResourcesResponse,
      serializeRequest: "body",
    },
    planResources: {
      method: "POST",
      path: "/api/plan/resources",
      requestType: PlanResourcesRequest,
      responseType: PlanResourcesResponse,
      serializeRequest: "body",
    },
    serverInfo: {
      method: "GET",
      path: "/api/server_info",
      requestType: ServerInfoRequest,
      responseType: ServerInfoResponse,
      serializeRequest: "query",
    },
  },
};
