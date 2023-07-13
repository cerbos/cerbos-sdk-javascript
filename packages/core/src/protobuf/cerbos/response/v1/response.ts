/* eslint-disable */
import type { Empty } from "../../../google/protobuf/empty";
import type { AccessLogEntry, DecisionLogEntry } from "../../audit/v1/audit";
import type { Effect } from "../../effect/v1/effect";
import type { OutputEntry, PlanResourcesFilter } from "../../engine/v1/engine";
import type { Policy } from "../../policy/v1/policy";
import type { Schema, ValidationError } from "../../schema/v1/schema";

export const protobufPackage = "cerbos.response.v1";

export interface PlanResourcesResponse {
  requestId: string;
  action: string;
  resourceKind: string;
  policyVersion: string;
  filter: PlanResourcesFilter | undefined;
  meta: PlanResourcesResponse_Meta | undefined;
  validationErrors: ValidationError[];
}

export interface PlanResourcesResponse_Meta {
  filterDebug: string;
  matchedScope: string;
}

export interface CheckResourceSetResponse {
  requestId: string;
  resourceInstances: {
    [key: string]: CheckResourceSetResponse_ActionEffectMap;
  };
  meta: CheckResourceSetResponse_Meta | undefined;
}

export interface CheckResourceSetResponse_ActionEffectMap {
  actions: { [key: string]: Effect };
  validationErrors: ValidationError[];
}

export interface CheckResourceSetResponse_ActionEffectMap_ActionsEntry {
  key: string;
  value: Effect;
}

export interface CheckResourceSetResponse_Meta {
  resourceInstances: {
    [key: string]: CheckResourceSetResponse_Meta_ActionMeta;
  };
}

export interface CheckResourceSetResponse_Meta_EffectMeta {
  matchedPolicy: string;
  matchedScope: string;
}

export interface CheckResourceSetResponse_Meta_ActionMeta {
  actions: { [key: string]: CheckResourceSetResponse_Meta_EffectMeta };
  effectiveDerivedRoles: string[];
}

export interface CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry {
  key: string;
  value: CheckResourceSetResponse_Meta_EffectMeta | undefined;
}

export interface CheckResourceSetResponse_Meta_ResourceInstancesEntry {
  key: string;
  value: CheckResourceSetResponse_Meta_ActionMeta | undefined;
}

export interface CheckResourceSetResponse_ResourceInstancesEntry {
  key: string;
  value: CheckResourceSetResponse_ActionEffectMap | undefined;
}

export interface CheckResourceBatchResponse {
  requestId: string;
  results: CheckResourceBatchResponse_ActionEffectMap[];
}

export interface CheckResourceBatchResponse_ActionEffectMap {
  resourceId: string;
  actions: { [key: string]: Effect };
  validationErrors: ValidationError[];
}

export interface CheckResourceBatchResponse_ActionEffectMap_ActionsEntry {
  key: string;
  value: Effect;
}

export interface CheckResourcesResponse {
  requestId: string;
  results: CheckResourcesResponse_ResultEntry[];
}

export interface CheckResourcesResponse_ResultEntry {
  resource: CheckResourcesResponse_ResultEntry_Resource | undefined;
  actions: { [key: string]: Effect };
  validationErrors: ValidationError[];
  meta: CheckResourcesResponse_ResultEntry_Meta | undefined;
  outputs: OutputEntry[];
}

export interface CheckResourcesResponse_ResultEntry_Resource {
  id: string;
  kind: string;
  policyVersion: string;
  scope: string;
}

export interface CheckResourcesResponse_ResultEntry_Meta {
  actions: {
    [key: string]: CheckResourcesResponse_ResultEntry_Meta_EffectMeta;
  };
  effectiveDerivedRoles: string[];
}

export interface CheckResourcesResponse_ResultEntry_Meta_EffectMeta {
  matchedPolicy: string;
  matchedScope: string;
}

export interface CheckResourcesResponse_ResultEntry_Meta_ActionsEntry {
  key: string;
  value: CheckResourcesResponse_ResultEntry_Meta_EffectMeta | undefined;
}

export interface CheckResourcesResponse_ResultEntry_ActionsEntry {
  key: string;
  value: Effect;
}

export interface AddOrUpdatePolicyResponse {
  success: Empty | undefined;
}

export interface ListAuditLogEntriesResponse {
  entry?:
    | { $case: "accessLogEntry"; accessLogEntry: AccessLogEntry }
    | {
        $case: "decisionLogEntry";
        decisionLogEntry: DecisionLogEntry;
      }
    | undefined;
}

export interface ServerInfoResponse {
  version: string;
  commit: string;
  buildDate: string;
}

export interface ListPoliciesResponse {
  policyIds: string[];
}

export interface GetPolicyResponse {
  policies: Policy[];
}

export interface DisablePolicyResponse {
  disabledPolicies: number;
}

export interface EnablePolicyResponse {
  enabledPolicies: number;
}

export interface AddOrUpdateSchemaResponse {}

export interface ListSchemasResponse {
  schemaIds: string[];
}

export interface GetSchemaResponse {
  schemas: Schema[];
}

export interface DeleteSchemaResponse {
  deletedSchemas: number;
}

export interface ReloadStoreResponse {}
