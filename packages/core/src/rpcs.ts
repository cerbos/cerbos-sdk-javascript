import {
  CheckResourcesRequest,
  ServerInfoRequest,
} from "./protobuf/cerbos/request/v1/request";
import {
  CheckResourcesResponse,
  ServerInfoResponse,
} from "./protobuf/cerbos/response/v1/response";

export interface RPCs {
  checkResources: [CheckResourcesRequest, CheckResourcesResponse];
  serverInfo: [ServerInfoRequest, ServerInfoResponse];
}

export type Request<RPC extends keyof RPCs> = RPCs[RPC][0];
export type Response<RPC extends keyof RPCs> = RPCs[RPC][1];
