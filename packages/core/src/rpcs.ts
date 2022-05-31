import {
  CheckResourcesRequest,
  PlanResourcesRequest,
  ServerInfoRequest,
} from "./protobuf/cerbos/request/v1/request";
import {
  CheckResourcesResponse,
  PlanResourcesResponse,
  ServerInfoResponse,
} from "./protobuf/cerbos/response/v1/response";

export interface RPCs {
  checkResources: [CheckResourcesRequest, CheckResourcesResponse];
  planResources: [PlanResourcesRequest, PlanResourcesResponse];
  serverInfo: [ServerInfoRequest, ServerInfoResponse];
}

export type Request<RPC extends keyof RPCs> = RPCs[RPC][0];
export type Response<RPC extends keyof RPCs> = RPCs[RPC][1];
