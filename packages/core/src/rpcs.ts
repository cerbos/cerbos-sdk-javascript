import type {
  CheckResourcesRequest,
  PlanResourcesRequest,
  ServerInfoRequest,
} from "./protobuf/cerbos/request/v1/request";
import type {
  CheckResourcesResponse,
  PlanResourcesResponse,
  ServerInfoResponse,
} from "./protobuf/cerbos/response/v1/response";

/** @internal */
export interface _RPCs {
  checkResources: [CheckResourcesRequest, CheckResourcesResponse];
  planResources: [PlanResourcesRequest, PlanResourcesResponse];
  serverInfo: [ServerInfoRequest, ServerInfoResponse];
}

/** @internal */
export type _Request<RPC extends keyof _RPCs> = _RPCs[RPC][0];

/** @internal */
export type _Response<RPC extends keyof _RPCs> = _RPCs[RPC][1];
