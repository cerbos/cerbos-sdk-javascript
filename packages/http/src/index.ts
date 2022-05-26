import { Client, RPCs, Request, Response, Transport } from "@cerbos/core";

import { CheckResourcesRequest } from "./protobuf/cerbos/request/v1/request";
import {
  CheckResourcesResponse,
  ServerInfoResponse,
} from "./protobuf/cerbos/response/v1/response";

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
  serverInfo: {
    method: "GET",
    path: "/api/server_info",
    serializeRequest: () => null,
    deserializeResponse: (response) => ServerInfoResponse.fromJSON(response),
  },
};

export class HTTP extends Client {
  public constructor(url: string) {
    const transport: Transport = async (rpc, request) => {
      const { method, path, serializeRequest, deserializeResponse } =
        service[rpc];

      const response = await fetch(url + path, {
        method,
        body: serializeRequest(request),
      });

      return deserializeResponse(await response.json());
    };

    super(transport);
  }
}
