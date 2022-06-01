import {
  Client,
  Options,
  RPCs,
  Request,
  Response,
  Transport,
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

type Service = {
  [RPC in keyof RPCs]: {
    method: "GET" | "POST";
    path: string;
    serializeRequest: (request: Request<RPC>) => string | null;
    deserializeResponse: (response: unknown) => Response<RPC>;
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

export type { Options } from "@cerbos/core";

export class HTTP extends Client {
  public constructor(url: string, options: Options = {}) {
    const transport: Transport = async (rpc, request) => {
      const { method, path, serializeRequest, deserializeResponse } =
        service[rpc];

      const response = await fetch(url + path, {
        method,
        body: serializeRequest(request),
        headers: {
          "User-Agent": `cerbos-sdk-javascript-http/${version}`,
        },
      });

      return deserializeResponse(await response.json());
    };

    super(transport, options);
  }
}
