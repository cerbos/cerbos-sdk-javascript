/* eslint-disable */
import { Effect, effectFromJSON, effectToJSON } from "../../effect/v1/effect";
import { OutputEntry, PlanResourcesFilter } from "../../engine/v1/engine";
import { ValidationError } from "../../schema/v1/schema";

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

export interface ServerInfoResponse {
  version: string;
  commit: string;
  buildDate: string;
}

export const PlanResourcesResponse = {
  fromJSON(object: any): PlanResourcesResponse {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      action: isSet(object.action) ? String(object.action) : "",
      resourceKind: isSet(object.resourceKind)
        ? String(object.resourceKind)
        : "",
      policyVersion: isSet(object.policyVersion)
        ? String(object.policyVersion)
        : "",
      filter: isSet(object.filter)
        ? PlanResourcesFilter.fromJSON(object.filter)
        : undefined,
      meta: isSet(object.meta)
        ? PlanResourcesResponse_Meta.fromJSON(object.meta)
        : undefined,
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlanResourcesResponse): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    if (message.resourceKind !== "") {
      obj.resourceKind = message.resourceKind;
    }
    if (message.policyVersion !== "") {
      obj.policyVersion = message.policyVersion;
    }
    if (message.filter !== undefined) {
      obj.filter = PlanResourcesFilter.toJSON(message.filter);
    }
    if (message.meta !== undefined) {
      obj.meta = PlanResourcesResponse_Meta.toJSON(message.meta);
    }
    if (message.validationErrors?.length) {
      obj.validationErrors = message.validationErrors.map((e) =>
        ValidationError.toJSON(e),
      );
    }
    return obj;
  },
};

export const PlanResourcesResponse_Meta = {
  fromJSON(object: any): PlanResourcesResponse_Meta {
    return {
      filterDebug: isSet(object.filterDebug) ? String(object.filterDebug) : "",
      matchedScope: isSet(object.matchedScope)
        ? String(object.matchedScope)
        : "",
    };
  },

  toJSON(message: PlanResourcesResponse_Meta): unknown {
    const obj: any = {};
    if (message.filterDebug !== "") {
      obj.filterDebug = message.filterDebug;
    }
    if (message.matchedScope !== "") {
      obj.matchedScope = message.matchedScope;
    }
    return obj;
  },
};

export const CheckResourceSetResponse = {
  fromJSON(object: any): CheckResourceSetResponse {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      resourceInstances: isObject(object.resourceInstances)
        ? Object.entries(object.resourceInstances).reduce<{
            [key: string]: CheckResourceSetResponse_ActionEffectMap;
          }>((acc, [key, value]) => {
            acc[key] = CheckResourceSetResponse_ActionEffectMap.fromJSON(value);
            return acc;
          }, {})
        : {},
      meta: isSet(object.meta)
        ? CheckResourceSetResponse_Meta.fromJSON(object.meta)
        : undefined,
    };
  },

  toJSON(message: CheckResourceSetResponse): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.resourceInstances) {
      const entries = Object.entries(message.resourceInstances);
      if (entries.length > 0) {
        obj.resourceInstances = {};
        entries.forEach(([k, v]) => {
          obj.resourceInstances[k] =
            CheckResourceSetResponse_ActionEffectMap.toJSON(v);
        });
      }
    }
    if (message.meta !== undefined) {
      obj.meta = CheckResourceSetResponse_Meta.toJSON(message.meta);
    }
    return obj;
  },
};

export const CheckResourceSetResponse_ActionEffectMap = {
  fromJSON(object: any): CheckResourceSetResponse_ActionEffectMap {
    return {
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{ [key: string]: Effect }>(
            (acc, [key, value]) => {
              acc[key] = effectFromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CheckResourceSetResponse_ActionEffectMap): unknown {
    const obj: any = {};
    if (message.actions) {
      const entries = Object.entries(message.actions);
      if (entries.length > 0) {
        obj.actions = {};
        entries.forEach(([k, v]) => {
          obj.actions[k] = effectToJSON(v);
        });
      }
    }
    if (message.validationErrors?.length) {
      obj.validationErrors = message.validationErrors.map((e) =>
        ValidationError.toJSON(e),
      );
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

  toJSON(
    message: CheckResourceSetResponse_ActionEffectMap_ActionsEntry,
  ): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = effectToJSON(message.value);
    }
    return obj;
  },
};

export const CheckResourceSetResponse_Meta = {
  fromJSON(object: any): CheckResourceSetResponse_Meta {
    return {
      resourceInstances: isObject(object.resourceInstances)
        ? Object.entries(object.resourceInstances).reduce<{
            [key: string]: CheckResourceSetResponse_Meta_ActionMeta;
          }>((acc, [key, value]) => {
            acc[key] = CheckResourceSetResponse_Meta_ActionMeta.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: CheckResourceSetResponse_Meta): unknown {
    const obj: any = {};
    if (message.resourceInstances) {
      const entries = Object.entries(message.resourceInstances);
      if (entries.length > 0) {
        obj.resourceInstances = {};
        entries.forEach(([k, v]) => {
          obj.resourceInstances[k] =
            CheckResourceSetResponse_Meta_ActionMeta.toJSON(v);
        });
      }
    }
    return obj;
  },
};

export const CheckResourceSetResponse_Meta_EffectMeta = {
  fromJSON(object: any): CheckResourceSetResponse_Meta_EffectMeta {
    return {
      matchedPolicy: isSet(object.matchedPolicy)
        ? String(object.matchedPolicy)
        : "",
      matchedScope: isSet(object.matchedScope)
        ? String(object.matchedScope)
        : "",
    };
  },

  toJSON(message: CheckResourceSetResponse_Meta_EffectMeta): unknown {
    const obj: any = {};
    if (message.matchedPolicy !== "") {
      obj.matchedPolicy = message.matchedPolicy;
    }
    if (message.matchedScope !== "") {
      obj.matchedScope = message.matchedScope;
    }
    return obj;
  },
};

export const CheckResourceSetResponse_Meta_ActionMeta = {
  fromJSON(object: any): CheckResourceSetResponse_Meta_ActionMeta {
    return {
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{
            [key: string]: CheckResourceSetResponse_Meta_EffectMeta;
          }>((acc, [key, value]) => {
            acc[key] = CheckResourceSetResponse_Meta_EffectMeta.fromJSON(value);
            return acc;
          }, {})
        : {},
      effectiveDerivedRoles: Array.isArray(object?.effectiveDerivedRoles)
        ? object.effectiveDerivedRoles.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CheckResourceSetResponse_Meta_ActionMeta): unknown {
    const obj: any = {};
    if (message.actions) {
      const entries = Object.entries(message.actions);
      if (entries.length > 0) {
        obj.actions = {};
        entries.forEach(([k, v]) => {
          obj.actions[k] = CheckResourceSetResponse_Meta_EffectMeta.toJSON(v);
        });
      }
    }
    if (message.effectiveDerivedRoles?.length) {
      obj.effectiveDerivedRoles = message.effectiveDerivedRoles;
    }
    return obj;
  },
};

export const CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry = {
  fromJSON(object: any): CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? CheckResourceSetResponse_Meta_EffectMeta.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(
    message: CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry,
  ): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = CheckResourceSetResponse_Meta_EffectMeta.toJSON(
        message.value,
      );
    }
    return obj;
  },
};

export const CheckResourceSetResponse_Meta_ResourceInstancesEntry = {
  fromJSON(object: any): CheckResourceSetResponse_Meta_ResourceInstancesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? CheckResourceSetResponse_Meta_ActionMeta.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(
    message: CheckResourceSetResponse_Meta_ResourceInstancesEntry,
  ): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = CheckResourceSetResponse_Meta_ActionMeta.toJSON(
        message.value,
      );
    }
    return obj;
  },
};

export const CheckResourceSetResponse_ResourceInstancesEntry = {
  fromJSON(object: any): CheckResourceSetResponse_ResourceInstancesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? CheckResourceSetResponse_ActionEffectMap.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: CheckResourceSetResponse_ResourceInstancesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = CheckResourceSetResponse_ActionEffectMap.toJSON(
        message.value,
      );
    }
    return obj;
  },
};

export const CheckResourceBatchResponse = {
  fromJSON(object: any): CheckResourceBatchResponse {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) =>
            CheckResourceBatchResponse_ActionEffectMap.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: CheckResourceBatchResponse): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) =>
        CheckResourceBatchResponse_ActionEffectMap.toJSON(e),
      );
    }
    return obj;
  },
};

export const CheckResourceBatchResponse_ActionEffectMap = {
  fromJSON(object: any): CheckResourceBatchResponse_ActionEffectMap {
    return {
      resourceId: isSet(object.resourceId) ? String(object.resourceId) : "",
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{ [key: string]: Effect }>(
            (acc, [key, value]) => {
              acc[key] = effectFromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CheckResourceBatchResponse_ActionEffectMap): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.actions) {
      const entries = Object.entries(message.actions);
      if (entries.length > 0) {
        obj.actions = {};
        entries.forEach(([k, v]) => {
          obj.actions[k] = effectToJSON(v);
        });
      }
    }
    if (message.validationErrors?.length) {
      obj.validationErrors = message.validationErrors.map((e) =>
        ValidationError.toJSON(e),
      );
    }
    return obj;
  },
};

export const CheckResourceBatchResponse_ActionEffectMap_ActionsEntry = {
  fromJSON(
    object: any,
  ): CheckResourceBatchResponse_ActionEffectMap_ActionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? effectFromJSON(object.value) : 0,
    };
  },

  toJSON(
    message: CheckResourceBatchResponse_ActionEffectMap_ActionsEntry,
  ): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = effectToJSON(message.value);
    }
    return obj;
  },
};

export const CheckResourcesResponse = {
  fromJSON(object: any): CheckResourcesResponse {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) =>
            CheckResourcesResponse_ResultEntry.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: CheckResourcesResponse): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) =>
        CheckResourcesResponse_ResultEntry.toJSON(e),
      );
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
        ? Object.entries(object.actions).reduce<{ [key: string]: Effect }>(
            (acc, [key, value]) => {
              acc[key] = effectFromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
      meta: isSet(object.meta)
        ? CheckResourcesResponse_ResultEntry_Meta.fromJSON(object.meta)
        : undefined,
      outputs: Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) => OutputEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CheckResourcesResponse_ResultEntry): unknown {
    const obj: any = {};
    if (message.resource !== undefined) {
      obj.resource = CheckResourcesResponse_ResultEntry_Resource.toJSON(
        message.resource,
      );
    }
    if (message.actions) {
      const entries = Object.entries(message.actions);
      if (entries.length > 0) {
        obj.actions = {};
        entries.forEach(([k, v]) => {
          obj.actions[k] = effectToJSON(v);
        });
      }
    }
    if (message.validationErrors?.length) {
      obj.validationErrors = message.validationErrors.map((e) =>
        ValidationError.toJSON(e),
      );
    }
    if (message.meta !== undefined) {
      obj.meta = CheckResourcesResponse_ResultEntry_Meta.toJSON(message.meta);
    }
    if (message.outputs?.length) {
      obj.outputs = message.outputs.map((e) => OutputEntry.toJSON(e));
    }
    return obj;
  },
};

export const CheckResourcesResponse_ResultEntry_Resource = {
  fromJSON(object: any): CheckResourcesResponse_ResultEntry_Resource {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      kind: isSet(object.kind) ? String(object.kind) : "",
      policyVersion: isSet(object.policyVersion)
        ? String(object.policyVersion)
        : "",
      scope: isSet(object.scope) ? String(object.scope) : "",
    };
  },

  toJSON(message: CheckResourcesResponse_ResultEntry_Resource): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.kind !== "") {
      obj.kind = message.kind;
    }
    if (message.policyVersion !== "") {
      obj.policyVersion = message.policyVersion;
    }
    if (message.scope !== "") {
      obj.scope = message.scope;
    }
    return obj;
  },
};

export const CheckResourcesResponse_ResultEntry_Meta = {
  fromJSON(object: any): CheckResourcesResponse_ResultEntry_Meta {
    return {
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{
            [key: string]: CheckResourcesResponse_ResultEntry_Meta_EffectMeta;
          }>((acc, [key, value]) => {
            acc[key] =
              CheckResourcesResponse_ResultEntry_Meta_EffectMeta.fromJSON(
                value,
              );
            return acc;
          }, {})
        : {},
      effectiveDerivedRoles: Array.isArray(object?.effectiveDerivedRoles)
        ? object.effectiveDerivedRoles.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CheckResourcesResponse_ResultEntry_Meta): unknown {
    const obj: any = {};
    if (message.actions) {
      const entries = Object.entries(message.actions);
      if (entries.length > 0) {
        obj.actions = {};
        entries.forEach(([k, v]) => {
          obj.actions[k] =
            CheckResourcesResponse_ResultEntry_Meta_EffectMeta.toJSON(v);
        });
      }
    }
    if (message.effectiveDerivedRoles?.length) {
      obj.effectiveDerivedRoles = message.effectiveDerivedRoles;
    }
    return obj;
  },
};

export const CheckResourcesResponse_ResultEntry_Meta_EffectMeta = {
  fromJSON(object: any): CheckResourcesResponse_ResultEntry_Meta_EffectMeta {
    return {
      matchedPolicy: isSet(object.matchedPolicy)
        ? String(object.matchedPolicy)
        : "",
      matchedScope: isSet(object.matchedScope)
        ? String(object.matchedScope)
        : "",
    };
  },

  toJSON(message: CheckResourcesResponse_ResultEntry_Meta_EffectMeta): unknown {
    const obj: any = {};
    if (message.matchedPolicy !== "") {
      obj.matchedPolicy = message.matchedPolicy;
    }
    if (message.matchedScope !== "") {
      obj.matchedScope = message.matchedScope;
    }
    return obj;
  },
};

export const CheckResourcesResponse_ResultEntry_Meta_ActionsEntry = {
  fromJSON(object: any): CheckResourcesResponse_ResultEntry_Meta_ActionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? CheckResourcesResponse_ResultEntry_Meta_EffectMeta.fromJSON(
            object.value,
          )
        : undefined,
    };
  },

  toJSON(
    message: CheckResourcesResponse_ResultEntry_Meta_ActionsEntry,
  ): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = CheckResourcesResponse_ResultEntry_Meta_EffectMeta.toJSON(
        message.value,
      );
    }
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
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = effectToJSON(message.value);
    }
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
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.commit !== "") {
      obj.commit = message.commit;
    }
    if (message.buildDate !== "") {
      obj.buildDate = message.buildDate;
    }
    return obj;
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
