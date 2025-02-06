import type {
  AddOrUpdatePolicyRequest,
  AddOrUpdateSchemaRequest,
  CheckResourcesRequest,
  DeleteSchemaRequest,
  DisablePolicyRequest,
  EnablePolicyRequest,
  GetPolicyRequest,
  GetSchemaRequest,
  InspectPoliciesRequest,
  ListAuditLogEntriesRequest,
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
  InspectPoliciesResponse,
  ListAuditLogEntriesResponse,
  ListPoliciesResponse,
  ListSchemasResponse,
  PlanResourcesResponse,
  ReloadStoreResponse,
  ServerInfoResponse,
} from "./protobuf/cerbos/response/v1/response";
import type {
  HealthCheckRequest,
  HealthCheckResponse,
} from "./protobuf/grpc/health/v1/health";

/** @internal */
export interface _Services {
  admin: {
    unary: {
      addOrUpdatePolicy: [AddOrUpdatePolicyRequest, AddOrUpdatePolicyResponse];
      addOrUpdateSchema: [AddOrUpdateSchemaRequest, AddOrUpdateSchemaResponse];
      deleteSchema: [DeleteSchemaRequest, DeleteSchemaResponse];
      disablePolicy: [DisablePolicyRequest, DisablePolicyResponse];
      enablePolicy: [EnablePolicyRequest, EnablePolicyResponse];
      getPolicy: [GetPolicyRequest, GetPolicyResponse];
      getSchema: [GetSchemaRequest, GetSchemaResponse];
      inspectPolicies: [InspectPoliciesRequest, InspectPoliciesResponse];
      listPolicies: [ListPoliciesRequest, ListPoliciesResponse];
      listSchemas: [ListSchemasRequest, ListSchemasResponse];
      reloadStore: [ReloadStoreRequest, ReloadStoreResponse];
    };
    serverStream: {
      listAuditLogEntries: [
        ListAuditLogEntriesRequest,
        ListAuditLogEntriesResponse,
      ];
    };
  };
  cerbos: {
    unary: {
      checkResources: [CheckResourcesRequest, CheckResourcesResponse];
      planResources: [PlanResourcesRequest, PlanResourcesResponse];
      serverInfo: [ServerInfoRequest, ServerInfoResponse];
    };
    serverStream: Record<string, never>;
  };
  health: {
    unary: {
      check: [HealthCheckRequest, HealthCheckResponse];
    };
    serverStream: Record<string, never>;
  };
}

/** @internal */
export type _Service = keyof _Services;

/** @internal */
export type _MethodKind = "unary" | "serverStream";

/** @internal */
export type _Method<
  Service extends _Service,
  MethodKind extends _MethodKind,
> = Exclude<keyof _Services[Service][MethodKind], number | symbol>;

/** @internal */
export type _Request<
  Service extends _Service,
  MethodKind extends _MethodKind,
  Method extends _Method<Service, MethodKind>,
> = _Services[Service][MethodKind][Method] extends unknown[]
  ? _Services[Service][MethodKind][Method][0]
  : never;

/** @internal */
export type _Response<
  Service extends _Service,
  MethodKind extends _MethodKind,
  Method extends _Method<Service, MethodKind>,
> = _Services[Service][MethodKind][Method] extends unknown[]
  ? _Services[Service][MethodKind][Method][1]
  : never;
