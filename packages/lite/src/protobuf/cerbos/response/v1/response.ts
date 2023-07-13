/* eslint-disable */
import { Empty } from "../../../google/protobuf/empty";
import { AccessLogEntry, DecisionLogEntry } from "../../audit/v1/audit";
import { Effect, effectFromJSON, effectToJSON } from "../../effect/v1/effect";
import { OutputEntry, PlanResourcesFilter } from "../../engine/v1/engine";
import { Policy } from "../../policy/v1/policy";
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

export interface AddOrUpdatePolicyResponse {
  success: Empty | undefined;
}

export interface ListAuditLogEntriesResponse {
  entry?: { $case: "accessLogEntry"; accessLogEntry: AccessLogEntry } | {
    $case: "decisionLogEntry";
    decisionLogEntry: DecisionLogEntry;
  } | undefined;
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

export interface AddOrUpdateSchemaResponse {
}

export interface ListSchemasResponse {
  schemaIds: string[];
}

export interface GetSchemaResponse {
  schemas: Schema[];
}

export interface DeleteSchemaResponse {
  deletedSchemas: number;
}

export interface ReloadStoreResponse {
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
      outputs: Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) => OutputEntry.fromJSON(e))
        : [],
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
    if (message.outputs) {
      obj.outputs = message.outputs.map((e) => e ? OutputEntry.toJSON(e) : undefined);
    } else {
      obj.outputs = [];
    }
    return obj;
  },
};

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

export const DisablePolicyResponse = {
  fromJSON(object: any): DisablePolicyResponse {
    return { disabledPolicies: isSet(object.disabledPolicies) ? Number(object.disabledPolicies) : 0 };
  },

  toJSON(message: DisablePolicyResponse): unknown {
    const obj: any = {};
    message.disabledPolicies !== undefined && (obj.disabledPolicies = Math.round(message.disabledPolicies));
    return obj;
  },
};

export const EnablePolicyResponse = {
  fromJSON(object: any): EnablePolicyResponse {
    return { enabledPolicies: isSet(object.enabledPolicies) ? Number(object.enabledPolicies) : 0 };
  },

  toJSON(message: EnablePolicyResponse): unknown {
    const obj: any = {};
    message.enabledPolicies !== undefined && (obj.enabledPolicies = Math.round(message.enabledPolicies));
    return obj;
  },
};

export const AddOrUpdateSchemaResponse = {
  fromJSON(_: any): AddOrUpdateSchemaResponse {
    return {};
  },

  toJSON(_: AddOrUpdateSchemaResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

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

export const DeleteSchemaResponse = {
  fromJSON(object: any): DeleteSchemaResponse {
    return { deletedSchemas: isSet(object.deletedSchemas) ? Number(object.deletedSchemas) : 0 };
  },

  toJSON(message: DeleteSchemaResponse): unknown {
    const obj: any = {};
    message.deletedSchemas !== undefined && (obj.deletedSchemas = Math.round(message.deletedSchemas));
    return obj;
  },
};

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
