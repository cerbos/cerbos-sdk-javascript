import type {
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
import type {
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

/** @internal */
export interface _Services {
  admin: {
    addOrUpdatePolicy: [AddOrUpdatePolicyRequest, AddOrUpdatePolicyResponse];
    addOrUpdateSchema: [AddOrUpdateSchemaRequest, AddOrUpdateSchemaResponse];
    deleteSchema: [DeleteSchemaRequest, DeleteSchemaResponse];
    disablePolicy: [DisablePolicyRequest, DisablePolicyResponse];
    enablePolicy: [EnablePolicyRequest, EnablePolicyResponse];
    getPolicy: [GetPolicyRequest, GetPolicyResponse];
    getSchema: [GetSchemaRequest, GetSchemaResponse];
    listPolicies: [ListPoliciesRequest, ListPoliciesResponse];
    listSchemas: [ListSchemasRequest, ListSchemasResponse];
    reloadStore: [ReloadStoreRequest, ReloadStoreResponse];
  };
  cerbos: {
    checkResources: [CheckResourcesRequest, CheckResourcesResponse];
    planResources: [PlanResourcesRequest, PlanResourcesResponse];
    serverInfo: [ServerInfoRequest, ServerInfoResponse];
  };
}

/** @internal */
export type _Service = keyof _Services;

/** @internal */
export type _RPC<Service> = Service extends _Service
  ? keyof _Services[Service]
  : never;

/** @internal */
export type _Request<
  Service extends _Service,
  RPC extends _RPC<Service>,
> = _Services[Service][RPC] extends unknown[]
  ? _Services[Service][RPC][0]
  : never;

/** @internal */
export type _Response<
  Service extends _Service,
  RPC extends _RPC<Service>,
> = _Services[Service][RPC] extends unknown[]
  ? _Services[Service][RPC][1]
  : never;
