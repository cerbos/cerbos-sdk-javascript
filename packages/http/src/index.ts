import {
  Client,
  NotOK,
  Options,
  RPCs,
  Request,
  Response,
  Status,
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

      if (!response.ok) {
        throw notOK(await response.text());
      }

      return deserializeResponse(await response.json());
    };

    super(transport, options);
  }
}

const notOK = (text: string): NotOK => {
  try {
    const error: unknown = JSON.parse(text);
    return new NotOK(code(error), details(error));
  } catch (_) {
    return new NotOK(Status.UNKNOWN, text);
  }
};

const code = (error: unknown): Exclude<Status, Status.OK> => {
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
