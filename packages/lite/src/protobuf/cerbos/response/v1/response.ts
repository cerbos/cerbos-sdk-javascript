/* eslint-disable */
import { Empty } from "../../../google/protobuf/empty";
import { AccessLogEntry, DecisionLogEntry } from "../../audit/v1/audit";
import { Effect, effectFromJSON, effectToJSON } from "../../effect/v1/effect";
import { PlanResourcesFilter } from "../../engine/v1/engine";
import { Policy, TestResults } from "../../policy/v1/policy";
import { Schema, ValidationError } from "../../schema/v1/schema";

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

/** Deprecated. See CheckResourcesResponse. */
export interface CheckResourceSetResponse {
  requestId: string;
  resourceInstances: { [key: string]: CheckResourceSetResponse_ActionEffectMap };
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
  resourceInstances: { [key: string]: CheckResourceSetResponse_Meta_ActionMeta };
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

/** Deprecated. See CheckResourcesResponse. */
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
}

export interface CheckResourcesResponse_ResultEntry_Resource {
  id: string;
  kind: string;
  policyVersion: string;
  scope: string;
}

export interface CheckResourcesResponse_ResultEntry_Meta {
  actions: { [key: string]: CheckResourcesResponse_ResultEntry_Meta_EffectMeta };
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

export interface PlaygroundFailure {
  errors: PlaygroundFailure_Error[];
}

export interface PlaygroundFailure_Error {
  file: string;
  error: string;
}

export interface PlaygroundValidateResponse {
  playgroundId: string;
  outcome?: { $case: "failure"; failure: PlaygroundFailure } | { $case: "success"; success: Empty };
}

export interface PlaygroundTestResponse {
  playgroundId: string;
  outcome?: { $case: "failure"; failure: PlaygroundFailure } | {
    $case: "success";
    success: PlaygroundTestResponse_TestResults;
  };
}

export interface PlaygroundTestResponse_TestResults {
  results: TestResults | undefined;
}

export interface PlaygroundEvaluateResponse {
  playgroundId: string;
  outcome?: { $case: "failure"; failure: PlaygroundFailure } | {
    $case: "success";
    success: PlaygroundEvaluateResponse_EvalResultList;
  };
}

export interface PlaygroundEvaluateResponse_EvalResult {
  action: string;
  effect: Effect;
  policy: string;
  effectiveDerivedRoles: string[];
  validationErrors: ValidationError[];
}

export interface PlaygroundEvaluateResponse_EvalResultList {
  results: PlaygroundEvaluateResponse_EvalResult[];
}

export interface PlaygroundProxyResponse {
  playgroundId: string;
  outcome?:
    | { $case: "failure"; failure: PlaygroundFailure }
    | { $case: "checkResourceSet"; checkResourceSet: CheckResourceSetResponse }
    | { $case: "checkResourceBatch"; checkResourceBatch: CheckResourceBatchResponse }
    | { $case: "planResources"; planResources: PlanResourcesResponse }
    | { $case: "checkResources"; checkResources: CheckResourcesResponse };
}

export interface AddOrUpdatePolicyResponse {
  success: Empty | undefined;
}

export interface ListAuditLogEntriesResponse {
  entry?: { $case: "accessLogEntry"; accessLogEntry: AccessLogEntry } | {
    $case: "decisionLogEntry";
    decisionLogEntry: DecisionLogEntry;
  };
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

export interface AddOrUpdateSchemaResponse {
}

export interface ListSchemasResponse {
  schemaIds: string[];
}

export interface GetSchemaResponse {
  schemas: Schema[];
}

export interface DeleteSchemaResponse {
}

export interface ReloadStoreResponse {
}

function createBasePlanResourcesResponse(): PlanResourcesResponse {
  return {
    requestId: "",
    action: "",
    resourceKind: "",
    policyVersion: "",
    filter: undefined,
    meta: undefined,
    validationErrors: [],
  };
}

export const PlanResourcesResponse = {
  fromJSON(object: any): PlanResourcesResponse {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      action: isSet(object.action) ? String(object.action) : "",
      resourceKind: isSet(object.resourceKind) ? String(object.resourceKind) : "",
      policyVersion: isSet(object.policyVersion) ? String(object.policyVersion) : "",
      filter: isSet(object.filter) ? PlanResourcesFilter.fromJSON(object.filter) : undefined,
      meta: isSet(object.meta) ? PlanResourcesResponse_Meta.fromJSON(object.meta) : undefined,
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlanResourcesResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.action !== undefined && (obj.action = message.action);
    message.resourceKind !== undefined && (obj.resourceKind = message.resourceKind);
    message.policyVersion !== undefined && (obj.policyVersion = message.policyVersion);
    message.filter !== undefined &&
      (obj.filter = message.filter ? PlanResourcesFilter.toJSON(message.filter) : undefined);
    message.meta !== undefined &&
      (obj.meta = message.meta ? PlanResourcesResponse_Meta.toJSON(message.meta) : undefined);
    if (message.validationErrors) {
      obj.validationErrors = message.validationErrors.map((e) => e ? ValidationError.toJSON(e) : undefined);
    } else {
      obj.validationErrors = [];
    }
    return obj;
  },
};

function createBasePlanResourcesResponse_Meta(): PlanResourcesResponse_Meta {
  return { filterDebug: "", matchedScope: "" };
}

export const PlanResourcesResponse_Meta = {
  fromJSON(object: any): PlanResourcesResponse_Meta {
    return {
      filterDebug: isSet(object.filterDebug) ? String(object.filterDebug) : "",
      matchedScope: isSet(object.matchedScope) ? String(object.matchedScope) : "",
    };
  },

  toJSON(message: PlanResourcesResponse_Meta): unknown {
    const obj: any = {};
    message.filterDebug !== undefined && (obj.filterDebug = message.filterDebug);
    message.matchedScope !== undefined && (obj.matchedScope = message.matchedScope);
    return obj;
  },
};

function createBaseCheckResourceSetResponse(): CheckResourceSetResponse {
  return { requestId: "", resourceInstances: {}, meta: undefined };
}

export const CheckResourceSetResponse = {
  fromJSON(object: any): CheckResourceSetResponse {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      resourceInstances: isObject(object.resourceInstances)
        ? Object.entries(object.resourceInstances).reduce<{ [key: string]: CheckResourceSetResponse_ActionEffectMap }>(
          (acc, [key, value]) => {
            acc[key] = CheckResourceSetResponse_ActionEffectMap.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      meta: isSet(object.meta) ? CheckResourceSetResponse_Meta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: CheckResourceSetResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    obj.resourceInstances = {};
    if (message.resourceInstances) {
      Object.entries(message.resourceInstances).forEach(([k, v]) => {
        obj.resourceInstances[k] = CheckResourceSetResponse_ActionEffectMap.toJSON(v);
      });
    }
    message.meta !== undefined &&
      (obj.meta = message.meta ? CheckResourceSetResponse_Meta.toJSON(message.meta) : undefined);
    return obj;
  },
};

function createBaseCheckResourceSetResponse_ActionEffectMap(): CheckResourceSetResponse_ActionEffectMap {
  return { actions: {}, validationErrors: [] };
}

export const CheckResourceSetResponse_ActionEffectMap = {
  fromJSON(object: any): CheckResourceSetResponse_ActionEffectMap {
    return {
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{ [key: string]: Effect }>((acc, [key, value]) => {
          acc[key] = effectFromJSON(value);
          return acc;
        }, {})
        : {},
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CheckResourceSetResponse_ActionEffectMap): unknown {
    const obj: any = {};
    obj.actions = {};
    if (message.actions) {
      Object.entries(message.actions).forEach(([k, v]) => {
        obj.actions[k] = effectToJSON(v);
      });
    }
    if (message.validationErrors) {
      obj.validationErrors = message.validationErrors.map((e) => e ? ValidationError.toJSON(e) : undefined);
    } else {
      obj.validationErrors = [];
    }
    return obj;
  },
};

function createBaseCheckResourceSetResponse_ActionEffectMap_ActionsEntry(): CheckResourceSetResponse_ActionEffectMap_ActionsEntry {
  return { key: "", value: 0 };
}

export const CheckResourceSetResponse_ActionEffectMap_ActionsEntry = {
  fromJSON(object: any): CheckResourceSetResponse_ActionEffectMap_ActionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? effectFromJSON(object.value) : 0,
    };
  },

  toJSON(message: CheckResourceSetResponse_ActionEffectMap_ActionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = effectToJSON(message.value));
    return obj;
  },
};

function createBaseCheckResourceSetResponse_Meta(): CheckResourceSetResponse_Meta {
  return { resourceInstances: {} };
}

export const CheckResourceSetResponse_Meta = {
  fromJSON(object: any): CheckResourceSetResponse_Meta {
    return {
      resourceInstances: isObject(object.resourceInstances)
        ? Object.entries(object.resourceInstances).reduce<{ [key: string]: CheckResourceSetResponse_Meta_ActionMeta }>(
          (acc, [key, value]) => {
            acc[key] = CheckResourceSetResponse_Meta_ActionMeta.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: CheckResourceSetResponse_Meta): unknown {
    const obj: any = {};
    obj.resourceInstances = {};
    if (message.resourceInstances) {
      Object.entries(message.resourceInstances).forEach(([k, v]) => {
        obj.resourceInstances[k] = CheckResourceSetResponse_Meta_ActionMeta.toJSON(v);
      });
    }
    return obj;
  },
};

function createBaseCheckResourceSetResponse_Meta_EffectMeta(): CheckResourceSetResponse_Meta_EffectMeta {
  return { matchedPolicy: "", matchedScope: "" };
}

export const CheckResourceSetResponse_Meta_EffectMeta = {
  fromJSON(object: any): CheckResourceSetResponse_Meta_EffectMeta {
    return {
      matchedPolicy: isSet(object.matchedPolicy) ? String(object.matchedPolicy) : "",
      matchedScope: isSet(object.matchedScope) ? String(object.matchedScope) : "",
    };
  },

  toJSON(message: CheckResourceSetResponse_Meta_EffectMeta): unknown {
    const obj: any = {};
    message.matchedPolicy !== undefined && (obj.matchedPolicy = message.matchedPolicy);
    message.matchedScope !== undefined && (obj.matchedScope = message.matchedScope);
    return obj;
  },
};

function createBaseCheckResourceSetResponse_Meta_ActionMeta(): CheckResourceSetResponse_Meta_ActionMeta {
  return { actions: {}, effectiveDerivedRoles: [] };
}

export const CheckResourceSetResponse_Meta_ActionMeta = {
  fromJSON(object: any): CheckResourceSetResponse_Meta_ActionMeta {
    return {
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{ [key: string]: CheckResourceSetResponse_Meta_EffectMeta }>(
          (acc, [key, value]) => {
            acc[key] = CheckResourceSetResponse_Meta_EffectMeta.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      effectiveDerivedRoles: Array.isArray(object?.effectiveDerivedRoles)
        ? object.effectiveDerivedRoles.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CheckResourceSetResponse_Meta_ActionMeta): unknown {
    const obj: any = {};
    obj.actions = {};
    if (message.actions) {
      Object.entries(message.actions).forEach(([k, v]) => {
        obj.actions[k] = CheckResourceSetResponse_Meta_EffectMeta.toJSON(v);
      });
    }
    if (message.effectiveDerivedRoles) {
      obj.effectiveDerivedRoles = message.effectiveDerivedRoles.map((e) => e);
    } else {
      obj.effectiveDerivedRoles = [];
    }
    return obj;
  },
};

function createBaseCheckResourceSetResponse_Meta_ActionMeta_ActionsEntry(): CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry {
  return { key: "", value: undefined };
}

export const CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry = {
  fromJSON(object: any): CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? CheckResourceSetResponse_Meta_EffectMeta.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? CheckResourceSetResponse_Meta_EffectMeta.toJSON(message.value) : undefined);
    return obj;
  },
};

function createBaseCheckResourceSetResponse_Meta_ResourceInstancesEntry(): CheckResourceSetResponse_Meta_ResourceInstancesEntry {
  return { key: "", value: undefined };
}

export const CheckResourceSetResponse_Meta_ResourceInstancesEntry = {
  fromJSON(object: any): CheckResourceSetResponse_Meta_ResourceInstancesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? CheckResourceSetResponse_Meta_ActionMeta.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CheckResourceSetResponse_Meta_ResourceInstancesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? CheckResourceSetResponse_Meta_ActionMeta.toJSON(message.value) : undefined);
    return obj;
  },
};

function createBaseCheckResourceSetResponse_ResourceInstancesEntry(): CheckResourceSetResponse_ResourceInstancesEntry {
  return { key: "", value: undefined };
}

export const CheckResourceSetResponse_ResourceInstancesEntry = {
  fromJSON(object: any): CheckResourceSetResponse_ResourceInstancesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? CheckResourceSetResponse_ActionEffectMap.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CheckResourceSetResponse_ResourceInstancesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? CheckResourceSetResponse_ActionEffectMap.toJSON(message.value) : undefined);
    return obj;
  },
};

function createBaseCheckResourceBatchResponse(): CheckResourceBatchResponse {
  return { requestId: "", results: [] };
}

export const CheckResourceBatchResponse = {
  fromJSON(object: any): CheckResourceBatchResponse {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => CheckResourceBatchResponse_ActionEffectMap.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CheckResourceBatchResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    if (message.results) {
      obj.results = message.results.map((e) => e ? CheckResourceBatchResponse_ActionEffectMap.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },
};

function createBaseCheckResourceBatchResponse_ActionEffectMap(): CheckResourceBatchResponse_ActionEffectMap {
  return { resourceId: "", actions: {}, validationErrors: [] };
}

export const CheckResourceBatchResponse_ActionEffectMap = {
  fromJSON(object: any): CheckResourceBatchResponse_ActionEffectMap {
    return {
      resourceId: isSet(object.resourceId) ? String(object.resourceId) : "",
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{ [key: string]: Effect }>((acc, [key, value]) => {
          acc[key] = effectFromJSON(value);
          return acc;
        }, {})
        : {},
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CheckResourceBatchResponse_ActionEffectMap): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    obj.actions = {};
    if (message.actions) {
      Object.entries(message.actions).forEach(([k, v]) => {
        obj.actions[k] = effectToJSON(v);
      });
    }
    if (message.validationErrors) {
      obj.validationErrors = message.validationErrors.map((e) => e ? ValidationError.toJSON(e) : undefined);
    } else {
      obj.validationErrors = [];
    }
    return obj;
  },
};

function createBaseCheckResourceBatchResponse_ActionEffectMap_ActionsEntry(): CheckResourceBatchResponse_ActionEffectMap_ActionsEntry {
  return { key: "", value: 0 };
}

export const CheckResourceBatchResponse_ActionEffectMap_ActionsEntry = {
  fromJSON(object: any): CheckResourceBatchResponse_ActionEffectMap_ActionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? effectFromJSON(object.value) : 0,
    };
  },

  toJSON(message: CheckResourceBatchResponse_ActionEffectMap_ActionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = effectToJSON(message.value));
    return obj;
  },
};

function createBaseCheckResourcesResponse(): CheckResourcesResponse {
  return { requestId: "", results: [] };
}

export const CheckResourcesResponse = {
  fromJSON(object: any): CheckResourcesResponse {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => CheckResourcesResponse_ResultEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CheckResourcesResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    if (message.results) {
      obj.results = message.results.map((e) => e ? CheckResourcesResponse_ResultEntry.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },
};

function createBaseCheckResourcesResponse_ResultEntry(): CheckResourcesResponse_ResultEntry {
  return { resource: undefined, actions: {}, validationErrors: [], meta: undefined };
}

export const CheckResourcesResponse_ResultEntry = {
  fromJSON(object: any): CheckResourcesResponse_ResultEntry {
    return {
      resource: isSet(object.resource)
        ? CheckResourcesResponse_ResultEntry_Resource.fromJSON(object.resource)
        : undefined,
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{ [key: string]: Effect }>((acc, [key, value]) => {
          acc[key] = effectFromJSON(value);
          return acc;
        }, {})
        : {},
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
      meta: isSet(object.meta) ? CheckResourcesResponse_ResultEntry_Meta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: CheckResourcesResponse_ResultEntry): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource
      ? CheckResourcesResponse_ResultEntry_Resource.toJSON(message.resource)
      : undefined);
    obj.actions = {};
    if (message.actions) {
      Object.entries(message.actions).forEach(([k, v]) => {
        obj.actions[k] = effectToJSON(v);
      });
    }
    if (message.validationErrors) {
      obj.validationErrors = message.validationErrors.map((e) => e ? ValidationError.toJSON(e) : undefined);
    } else {
      obj.validationErrors = [];
    }
    message.meta !== undefined &&
      (obj.meta = message.meta ? CheckResourcesResponse_ResultEntry_Meta.toJSON(message.meta) : undefined);
    return obj;
  },
};

function createBaseCheckResourcesResponse_ResultEntry_Resource(): CheckResourcesResponse_ResultEntry_Resource {
  return { id: "", kind: "", policyVersion: "", scope: "" };
}

export const CheckResourcesResponse_ResultEntry_Resource = {
  fromJSON(object: any): CheckResourcesResponse_ResultEntry_Resource {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      kind: isSet(object.kind) ? String(object.kind) : "",
      policyVersion: isSet(object.policyVersion) ? String(object.policyVersion) : "",
      scope: isSet(object.scope) ? String(object.scope) : "",
    };
  },

  toJSON(message: CheckResourcesResponse_ResultEntry_Resource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.kind !== undefined && (obj.kind = message.kind);
    message.policyVersion !== undefined && (obj.policyVersion = message.policyVersion);
    message.scope !== undefined && (obj.scope = message.scope);
    return obj;
  },
};

function createBaseCheckResourcesResponse_ResultEntry_Meta(): CheckResourcesResponse_ResultEntry_Meta {
  return { actions: {}, effectiveDerivedRoles: [] };
}

export const CheckResourcesResponse_ResultEntry_Meta = {
  fromJSON(object: any): CheckResourcesResponse_ResultEntry_Meta {
    return {
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{ [key: string]: CheckResourcesResponse_ResultEntry_Meta_EffectMeta }>(
          (acc, [key, value]) => {
            acc[key] = CheckResourcesResponse_ResultEntry_Meta_EffectMeta.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      effectiveDerivedRoles: Array.isArray(object?.effectiveDerivedRoles)
        ? object.effectiveDerivedRoles.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CheckResourcesResponse_ResultEntry_Meta): unknown {
    const obj: any = {};
    obj.actions = {};
    if (message.actions) {
      Object.entries(message.actions).forEach(([k, v]) => {
        obj.actions[k] = CheckResourcesResponse_ResultEntry_Meta_EffectMeta.toJSON(v);
      });
    }
    if (message.effectiveDerivedRoles) {
      obj.effectiveDerivedRoles = message.effectiveDerivedRoles.map((e) => e);
    } else {
      obj.effectiveDerivedRoles = [];
    }
    return obj;
  },
};

function createBaseCheckResourcesResponse_ResultEntry_Meta_EffectMeta(): CheckResourcesResponse_ResultEntry_Meta_EffectMeta {
  return { matchedPolicy: "", matchedScope: "" };
}

export const CheckResourcesResponse_ResultEntry_Meta_EffectMeta = {
  fromJSON(object: any): CheckResourcesResponse_ResultEntry_Meta_EffectMeta {
    return {
      matchedPolicy: isSet(object.matchedPolicy) ? String(object.matchedPolicy) : "",
      matchedScope: isSet(object.matchedScope) ? String(object.matchedScope) : "",
    };
  },

  toJSON(message: CheckResourcesResponse_ResultEntry_Meta_EffectMeta): unknown {
    const obj: any = {};
    message.matchedPolicy !== undefined && (obj.matchedPolicy = message.matchedPolicy);
    message.matchedScope !== undefined && (obj.matchedScope = message.matchedScope);
    return obj;
  },
};

function createBaseCheckResourcesResponse_ResultEntry_Meta_ActionsEntry(): CheckResourcesResponse_ResultEntry_Meta_ActionsEntry {
  return { key: "", value: undefined };
}

export const CheckResourcesResponse_ResultEntry_Meta_ActionsEntry = {
  fromJSON(object: any): CheckResourcesResponse_ResultEntry_Meta_ActionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? CheckResourcesResponse_ResultEntry_Meta_EffectMeta.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: CheckResourcesResponse_ResultEntry_Meta_ActionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? CheckResourcesResponse_ResultEntry_Meta_EffectMeta.toJSON(message.value)
        : undefined);
    return obj;
  },
};

function createBaseCheckResourcesResponse_ResultEntry_ActionsEntry(): CheckResourcesResponse_ResultEntry_ActionsEntry {
  return { key: "", value: 0 };
}

export const CheckResourcesResponse_ResultEntry_ActionsEntry = {
  fromJSON(object: any): CheckResourcesResponse_ResultEntry_ActionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? effectFromJSON(object.value) : 0,
    };
  },

  toJSON(message: CheckResourcesResponse_ResultEntry_ActionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = effectToJSON(message.value));
    return obj;
  },
};

function createBasePlaygroundFailure(): PlaygroundFailure {
  return { errors: [] };
}

export const PlaygroundFailure = {
  fromJSON(object: any): PlaygroundFailure {
    return {
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => PlaygroundFailure_Error.fromJSON(e)) : [],
    };
  },

  toJSON(message: PlaygroundFailure): unknown {
    const obj: any = {};
    if (message.errors) {
      obj.errors = message.errors.map((e) => e ? PlaygroundFailure_Error.toJSON(e) : undefined);
    } else {
      obj.errors = [];
    }
    return obj;
  },
};

function createBasePlaygroundFailure_Error(): PlaygroundFailure_Error {
  return { file: "", error: "" };
}

export const PlaygroundFailure_Error = {
  fromJSON(object: any): PlaygroundFailure_Error {
    return {
      file: isSet(object.file) ? String(object.file) : "",
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: PlaygroundFailure_Error): unknown {
    const obj: any = {};
    message.file !== undefined && (obj.file = message.file);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
};

function createBasePlaygroundValidateResponse(): PlaygroundValidateResponse {
  return { playgroundId: "", outcome: undefined };
}

export const PlaygroundValidateResponse = {
  fromJSON(object: any): PlaygroundValidateResponse {
    return {
      playgroundId: isSet(object.playgroundId) ? String(object.playgroundId) : "",
      outcome: isSet(object.failure)
        ? { $case: "failure", failure: PlaygroundFailure.fromJSON(object.failure) }
        : isSet(object.success)
        ? { $case: "success", success: Empty.fromJSON(object.success) }
        : undefined,
    };
  },

  toJSON(message: PlaygroundValidateResponse): unknown {
    const obj: any = {};
    message.playgroundId !== undefined && (obj.playgroundId = message.playgroundId);
    message.outcome?.$case === "failure" &&
      (obj.failure = message.outcome?.failure ? PlaygroundFailure.toJSON(message.outcome?.failure) : undefined);
    message.outcome?.$case === "success" &&
      (obj.success = message.outcome?.success ? Empty.toJSON(message.outcome?.success) : undefined);
    return obj;
  },
};

function createBasePlaygroundTestResponse(): PlaygroundTestResponse {
  return { playgroundId: "", outcome: undefined };
}

export const PlaygroundTestResponse = {
  fromJSON(object: any): PlaygroundTestResponse {
    return {
      playgroundId: isSet(object.playgroundId) ? String(object.playgroundId) : "",
      outcome: isSet(object.failure)
        ? { $case: "failure", failure: PlaygroundFailure.fromJSON(object.failure) }
        : isSet(object.success)
        ? { $case: "success", success: PlaygroundTestResponse_TestResults.fromJSON(object.success) }
        : undefined,
    };
  },

  toJSON(message: PlaygroundTestResponse): unknown {
    const obj: any = {};
    message.playgroundId !== undefined && (obj.playgroundId = message.playgroundId);
    message.outcome?.$case === "failure" &&
      (obj.failure = message.outcome?.failure ? PlaygroundFailure.toJSON(message.outcome?.failure) : undefined);
    message.outcome?.$case === "success" && (obj.success = message.outcome?.success
      ? PlaygroundTestResponse_TestResults.toJSON(message.outcome?.success)
      : undefined);
    return obj;
  },
};

function createBasePlaygroundTestResponse_TestResults(): PlaygroundTestResponse_TestResults {
  return { results: undefined };
}

export const PlaygroundTestResponse_TestResults = {
  fromJSON(object: any): PlaygroundTestResponse_TestResults {
    return { results: isSet(object.results) ? TestResults.fromJSON(object.results) : undefined };
  },

  toJSON(message: PlaygroundTestResponse_TestResults): unknown {
    const obj: any = {};
    message.results !== undefined && (obj.results = message.results ? TestResults.toJSON(message.results) : undefined);
    return obj;
  },
};

function createBasePlaygroundEvaluateResponse(): PlaygroundEvaluateResponse {
  return { playgroundId: "", outcome: undefined };
}

export const PlaygroundEvaluateResponse = {
  fromJSON(object: any): PlaygroundEvaluateResponse {
    return {
      playgroundId: isSet(object.playgroundId) ? String(object.playgroundId) : "",
      outcome: isSet(object.failure)
        ? { $case: "failure", failure: PlaygroundFailure.fromJSON(object.failure) }
        : isSet(object.success)
        ? { $case: "success", success: PlaygroundEvaluateResponse_EvalResultList.fromJSON(object.success) }
        : undefined,
    };
  },

  toJSON(message: PlaygroundEvaluateResponse): unknown {
    const obj: any = {};
    message.playgroundId !== undefined && (obj.playgroundId = message.playgroundId);
    message.outcome?.$case === "failure" &&
      (obj.failure = message.outcome?.failure ? PlaygroundFailure.toJSON(message.outcome?.failure) : undefined);
    message.outcome?.$case === "success" && (obj.success = message.outcome?.success
      ? PlaygroundEvaluateResponse_EvalResultList.toJSON(message.outcome?.success)
      : undefined);
    return obj;
  },
};

function createBasePlaygroundEvaluateResponse_EvalResult(): PlaygroundEvaluateResponse_EvalResult {
  return { action: "", effect: 0, policy: "", effectiveDerivedRoles: [], validationErrors: [] };
}

export const PlaygroundEvaluateResponse_EvalResult = {
  fromJSON(object: any): PlaygroundEvaluateResponse_EvalResult {
    return {
      action: isSet(object.action) ? String(object.action) : "",
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0,
      policy: isSet(object.policy) ? String(object.policy) : "",
      effectiveDerivedRoles: Array.isArray(object?.effectiveDerivedRoles)
        ? object.effectiveDerivedRoles.map((e: any) => String(e))
        : [],
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlaygroundEvaluateResponse_EvalResult): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.policy !== undefined && (obj.policy = message.policy);
    if (message.effectiveDerivedRoles) {
      obj.effectiveDerivedRoles = message.effectiveDerivedRoles.map((e) => e);
    } else {
      obj.effectiveDerivedRoles = [];
    }
    if (message.validationErrors) {
      obj.validationErrors = message.validationErrors.map((e) => e ? ValidationError.toJSON(e) : undefined);
    } else {
      obj.validationErrors = [];
    }
    return obj;
  },
};

function createBasePlaygroundEvaluateResponse_EvalResultList(): PlaygroundEvaluateResponse_EvalResultList {
  return { results: [] };
}

export const PlaygroundEvaluateResponse_EvalResultList = {
  fromJSON(object: any): PlaygroundEvaluateResponse_EvalResultList {
    return {
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => PlaygroundEvaluateResponse_EvalResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlaygroundEvaluateResponse_EvalResultList): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => e ? PlaygroundEvaluateResponse_EvalResult.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },
};

function createBasePlaygroundProxyResponse(): PlaygroundProxyResponse {
  return { playgroundId: "", outcome: undefined };
}

export const PlaygroundProxyResponse = {
  fromJSON(object: any): PlaygroundProxyResponse {
    return {
      playgroundId: isSet(object.playgroundId) ? String(object.playgroundId) : "",
      outcome: isSet(object.failure)
        ? { $case: "failure", failure: PlaygroundFailure.fromJSON(object.failure) }
        : isSet(object.checkResourceSet)
        ? { $case: "checkResourceSet", checkResourceSet: CheckResourceSetResponse.fromJSON(object.checkResourceSet) }
        : isSet(object.checkResourceBatch)
        ? {
          $case: "checkResourceBatch",
          checkResourceBatch: CheckResourceBatchResponse.fromJSON(object.checkResourceBatch),
        }
        : isSet(object.planResources)
        ? { $case: "planResources", planResources: PlanResourcesResponse.fromJSON(object.planResources) }
        : isSet(object.checkResources)
        ? { $case: "checkResources", checkResources: CheckResourcesResponse.fromJSON(object.checkResources) }
        : undefined,
    };
  },

  toJSON(message: PlaygroundProxyResponse): unknown {
    const obj: any = {};
    message.playgroundId !== undefined && (obj.playgroundId = message.playgroundId);
    message.outcome?.$case === "failure" &&
      (obj.failure = message.outcome?.failure ? PlaygroundFailure.toJSON(message.outcome?.failure) : undefined);
    message.outcome?.$case === "checkResourceSet" && (obj.checkResourceSet = message.outcome?.checkResourceSet
      ? CheckResourceSetResponse.toJSON(message.outcome?.checkResourceSet)
      : undefined);
    message.outcome?.$case === "checkResourceBatch" && (obj.checkResourceBatch = message.outcome?.checkResourceBatch
      ? CheckResourceBatchResponse.toJSON(message.outcome?.checkResourceBatch)
      : undefined);
    message.outcome?.$case === "planResources" && (obj.planResources = message.outcome?.planResources
      ? PlanResourcesResponse.toJSON(message.outcome?.planResources)
      : undefined);
    message.outcome?.$case === "checkResources" && (obj.checkResources = message.outcome?.checkResources
      ? CheckResourcesResponse.toJSON(message.outcome?.checkResources)
      : undefined);
    return obj;
  },
};

function createBaseAddOrUpdatePolicyResponse(): AddOrUpdatePolicyResponse {
  return { success: undefined };
}

export const AddOrUpdatePolicyResponse = {
  fromJSON(object: any): AddOrUpdatePolicyResponse {
    return { success: isSet(object.success) ? Empty.fromJSON(object.success) : undefined };
  },

  toJSON(message: AddOrUpdatePolicyResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success ? Empty.toJSON(message.success) : undefined);
    return obj;
  },
};

function createBaseListAuditLogEntriesResponse(): ListAuditLogEntriesResponse {
  return { entry: undefined };
}

export const ListAuditLogEntriesResponse = {
  fromJSON(object: any): ListAuditLogEntriesResponse {
    return {
      entry: isSet(object.accessLogEntry)
        ? { $case: "accessLogEntry", accessLogEntry: AccessLogEntry.fromJSON(object.accessLogEntry) }
        : isSet(object.decisionLogEntry)
        ? { $case: "decisionLogEntry", decisionLogEntry: DecisionLogEntry.fromJSON(object.decisionLogEntry) }
        : undefined,
    };
  },

  toJSON(message: ListAuditLogEntriesResponse): unknown {
    const obj: any = {};
    message.entry?.$case === "accessLogEntry" && (obj.accessLogEntry = message.entry?.accessLogEntry
      ? AccessLogEntry.toJSON(message.entry?.accessLogEntry)
      : undefined);
    message.entry?.$case === "decisionLogEntry" && (obj.decisionLogEntry = message.entry?.decisionLogEntry
      ? DecisionLogEntry.toJSON(message.entry?.decisionLogEntry)
      : undefined);
    return obj;
  },
};

function createBaseServerInfoResponse(): ServerInfoResponse {
  return { version: "", commit: "", buildDate: "" };
}

export const ServerInfoResponse = {
  fromJSON(object: any): ServerInfoResponse {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      commit: isSet(object.commit) ? String(object.commit) : "",
      buildDate: isSet(object.buildDate) ? String(object.buildDate) : "",
    };
  },

  toJSON(message: ServerInfoResponse): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.commit !== undefined && (obj.commit = message.commit);
    message.buildDate !== undefined && (obj.buildDate = message.buildDate);
    return obj;
  },
};

function createBaseListPoliciesResponse(): ListPoliciesResponse {
  return { policyIds: [] };
}

export const ListPoliciesResponse = {
  fromJSON(object: any): ListPoliciesResponse {
    return { policyIds: Array.isArray(object?.policyIds) ? object.policyIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: ListPoliciesResponse): unknown {
    const obj: any = {};
    if (message.policyIds) {
      obj.policyIds = message.policyIds.map((e) => e);
    } else {
      obj.policyIds = [];
    }
    return obj;
  },
};

function createBaseGetPolicyResponse(): GetPolicyResponse {
  return { policies: [] };
}

export const GetPolicyResponse = {
  fromJSON(object: any): GetPolicyResponse {
    return { policies: Array.isArray(object?.policies) ? object.policies.map((e: any) => Policy.fromJSON(e)) : [] };
  },

  toJSON(message: GetPolicyResponse): unknown {
    const obj: any = {};
    if (message.policies) {
      obj.policies = message.policies.map((e) => e ? Policy.toJSON(e) : undefined);
    } else {
      obj.policies = [];
    }
    return obj;
  },
};

function createBaseAddOrUpdateSchemaResponse(): AddOrUpdateSchemaResponse {
  return {};
}

export const AddOrUpdateSchemaResponse = {
  fromJSON(_: any): AddOrUpdateSchemaResponse {
    return {};
  },

  toJSON(_: AddOrUpdateSchemaResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseListSchemasResponse(): ListSchemasResponse {
  return { schemaIds: [] };
}

export const ListSchemasResponse = {
  fromJSON(object: any): ListSchemasResponse {
    return { schemaIds: Array.isArray(object?.schemaIds) ? object.schemaIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: ListSchemasResponse): unknown {
    const obj: any = {};
    if (message.schemaIds) {
      obj.schemaIds = message.schemaIds.map((e) => e);
    } else {
      obj.schemaIds = [];
    }
    return obj;
  },
};

function createBaseGetSchemaResponse(): GetSchemaResponse {
  return { schemas: [] };
}

export const GetSchemaResponse = {
  fromJSON(object: any): GetSchemaResponse {
    return { schemas: Array.isArray(object?.schemas) ? object.schemas.map((e: any) => Schema.fromJSON(e)) : [] };
  },

  toJSON(message: GetSchemaResponse): unknown {
    const obj: any = {};
    if (message.schemas) {
      obj.schemas = message.schemas.map((e) => e ? Schema.toJSON(e) : undefined);
    } else {
      obj.schemas = [];
    }
    return obj;
  },
};

function createBaseDeleteSchemaResponse(): DeleteSchemaResponse {
  return {};
}

export const DeleteSchemaResponse = {
  fromJSON(_: any): DeleteSchemaResponse {
    return {};
  },

  toJSON(_: DeleteSchemaResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseReloadStoreResponse(): ReloadStoreResponse {
  return {};
}

export const ReloadStoreResponse = {
  fromJSON(_: any): ReloadStoreResponse {
    return {};
  },

  toJSON(_: ReloadStoreResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
