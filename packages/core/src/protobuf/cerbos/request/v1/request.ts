/* eslint-disable */
import type { Duration } from "../../../google/protobuf/duration";
import type {
  PlanResourcesInput_Resource,
  Principal,
  Resource,
} from "../../engine/v1/engine";
import type { Policy } from "../../policy/v1/policy";
import type { Schema } from "../../schema/v1/schema";

export const protobufPackage = "cerbos.request.v1";

export interface PlanResourcesRequest {
  requestId: string;
  action: string;
  principal: Principal | undefined;
  resource: PlanResourcesInput_Resource | undefined;
  auxData: AuxData | undefined;
  includeMeta: boolean;
}

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

export interface AddOrUpdatePolicyRequest {
  policies: Policy[];
}

export interface ListAuditLogEntriesRequest {
  kind: ListAuditLogEntriesRequest_Kind;
  filter?:
    | { $case: "tail"; tail: number }
    | { $case: "between"; between: ListAuditLogEntriesRequest_TimeRange }
    | { $case: "since"; since: Duration }
    | { $case: "lookup"; lookup: string }
    | undefined;
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

export interface ListPoliciesRequest {
  includeDisabled: boolean;
  nameRegexp: string;
  scopeRegexp: string;
  versionRegexp: string;
}

export interface GetPolicyRequest {
  id: string[];
}

export interface DisablePolicyRequest {
  id: string[];
}

export interface EnablePolicyRequest {
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
