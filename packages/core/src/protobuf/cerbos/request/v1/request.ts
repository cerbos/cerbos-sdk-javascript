/* eslint-disable */
import type {
  Principal,
  PlanResourcesInput_Resource,
  Resource,
} from "../../../cerbos/engine/v1/engine";
import type { Policy } from "../../../cerbos/policy/v1/policy";
import type { Schema } from "../../../cerbos/schema/v1/schema";
import type { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "cerbos.request.v1";

export interface PlanResourcesRequest {
  requestId: string;
  action: string;
  principal: Principal | undefined;
  resource: PlanResourcesInput_Resource | undefined;
  auxData: AuxData | undefined;
  includeMeta: boolean;
}

/** Deprecated. See CheckResourcesRequest. */
export interface CheckResourceSetRequest {
  requestId: string;
  actions: string[];
  principal: Principal | undefined;
  resource: ResourceSet | undefined;
  includeMeta: boolean;
  auxData: AuxData | undefined;
}

export interface ResourceSet {
  kind: string;
  policyVersion: string;
  instances: { [key: string]: AttributesMap };
  scope: string;
}

export interface ResourceSet_InstancesEntry {
  key: string;
  value: AttributesMap | undefined;
}

export interface AttributesMap {
  attr: { [key: string]: any | undefined };
}

export interface AttributesMap_AttrEntry {
  key: string;
  value: any | undefined;
}

/** Deprecated. See CheckResourcesRequest. */
export interface CheckResourceBatchRequest {
  requestId: string;
  principal: Principal | undefined;
  resources: CheckResourceBatchRequest_BatchEntry[];
  auxData: AuxData | undefined;
}

export interface CheckResourceBatchRequest_BatchEntry {
  actions: string[];
  resource: Resource | undefined;
}

/** Structure of the request for the check resources API call. */
export interface CheckResourcesRequest {
  requestId: string;
  includeMeta: boolean;
  principal: Principal | undefined;
  resources: CheckResourcesRequest_ResourceEntry[];
  auxData: AuxData | undefined;
}

export interface CheckResourcesRequest_ResourceEntry {
  actions: string[];
  resource: Resource | undefined;
}

export interface AuxData {
  jwt: AuxData_JWT | undefined;
}

export interface AuxData_JWT {
  token: string;
  keySetId: string;
}

export interface File {
  fileName: string;
  contents: Uint8Array;
}

export interface PlaygroundValidateRequest {
  playgroundId: string;
  files: File[];
}

export interface PlaygroundTestRequest {
  playgroundId: string;
  files: File[];
}

export interface PlaygroundEvaluateRequest {
  playgroundId: string;
  files: File[];
  principal: Principal | undefined;
  resource: Resource | undefined;
  actions: string[];
  auxData: AuxData | undefined;
}

export interface PlaygroundProxyRequest {
  playgroundId: string;
  files: File[];
  proxyRequest?:
    | { $case: "checkResourceSet"; checkResourceSet: CheckResourceSetRequest }
    | {
        $case: "checkResourceBatch";
        checkResourceBatch: CheckResourceBatchRequest;
      }
    | { $case: "planResources"; planResources: PlanResourcesRequest }
    | { $case: "checkResources"; checkResources: CheckResourcesRequest };
}

export interface AddOrUpdatePolicyRequest {
  policies: Policy[];
}

export interface ListAuditLogEntriesRequest {
  kind: ListAuditLogEntriesRequest_Kind;
  filter?:
    | { $case: "tail"; tail: number }
    | { $case: "between"; between: ListAuditLogEntriesRequest_TimeRange }
    | { $case: "since"; since: Duration }
    | { $case: "lookup"; lookup: string };
}

export enum ListAuditLogEntriesRequest_Kind {
  KIND_UNSPECIFIED = 0,
  KIND_ACCESS = 1,
  KIND_DECISION = 2,
}

export interface ListAuditLogEntriesRequest_TimeRange {
  start: Date | undefined;
  end: Date | undefined;
}

export interface ServerInfoRequest {}

export interface ListPoliciesRequest {}

export interface GetPolicyRequest {
  id: string[];
}

export interface AddOrUpdateSchemaRequest {
  schemas: Schema[];
}

export interface ListSchemasRequest {}

export interface GetSchemaRequest {
  id: string[];
}

export interface DeleteSchemaRequest {
  id: string[];
}

export interface ReloadStoreRequest {
  wait: boolean;
}
