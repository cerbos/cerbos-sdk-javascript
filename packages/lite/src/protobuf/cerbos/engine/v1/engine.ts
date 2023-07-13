/* eslint-disable */
import { Effect, effectFromJSON, effectToJSON } from "../../effect/v1/effect";
import { ValidationError } from "../../schema/v1/schema";

export const protobufPackage = "cerbos.engine.v1";

export interface PlanResourcesInput {
  requestId: string;
  action: string;
  principal: Principal | undefined;
  resource: PlanResourcesInput_Resource | undefined;
  auxData: AuxData | undefined;
  includeMeta: boolean;
}

export interface PlanResourcesInput_Resource {
  kind: string;
  attr: { [key: string]: any | undefined };
  policyVersion: string;
  scope: string;
}

export interface PlanResourcesInput_Resource_AttrEntry {
  key: string;
  value: any | undefined;
}

export interface PlanResourcesFilter {
  kind: PlanResourcesFilter_Kind;
  condition: PlanResourcesFilter_Expression_Operand | undefined;
}

export enum PlanResourcesFilter_Kind {
  KIND_UNSPECIFIED = 0,
  KIND_ALWAYS_ALLOWED = 1,
  KIND_ALWAYS_DENIED = 2,
  KIND_CONDITIONAL = 3,
}

export function planResourcesFilter_KindFromJSON(object: any): PlanResourcesFilter_Kind {
  switch (object) {
    case 0:
    case "KIND_UNSPECIFIED":
      return PlanResourcesFilter_Kind.KIND_UNSPECIFIED;
    case 1:
    case "KIND_ALWAYS_ALLOWED":
      return PlanResourcesFilter_Kind.KIND_ALWAYS_ALLOWED;
    case 2:
    case "KIND_ALWAYS_DENIED":
      return PlanResourcesFilter_Kind.KIND_ALWAYS_DENIED;
    case 3:
    case "KIND_CONDITIONAL":
      return PlanResourcesFilter_Kind.KIND_CONDITIONAL;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum PlanResourcesFilter_Kind");
  }
}

export function planResourcesFilter_KindToJSON(object: PlanResourcesFilter_Kind): string {
  switch (object) {
    case PlanResourcesFilter_Kind.KIND_UNSPECIFIED:
      return "KIND_UNSPECIFIED";
    case PlanResourcesFilter_Kind.KIND_ALWAYS_ALLOWED:
      return "KIND_ALWAYS_ALLOWED";
    case PlanResourcesFilter_Kind.KIND_ALWAYS_DENIED:
      return "KIND_ALWAYS_DENIED";
    case PlanResourcesFilter_Kind.KIND_CONDITIONAL:
      return "KIND_CONDITIONAL";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum PlanResourcesFilter_Kind");
  }
}

export interface PlanResourcesFilter_Expression {
  operator: string;
  operands: PlanResourcesFilter_Expression_Operand[];
}

export interface PlanResourcesFilter_Expression_Operand {
  node?:
    | { $case: "value"; value: any | undefined }
    | { $case: "expression"; expression: PlanResourcesFilter_Expression }
    | { $case: "variable"; variable: string }
    | undefined;
}

export interface PlanResourcesOutput {
  requestId: string;
  action: string;
  kind: string;
  policyVersion: string;
  scope: string;
  filter: PlanResourcesFilter | undefined;
  filterDebug: string;
  validationErrors: ValidationError[];
}

export interface CheckInput {
  requestId: string;
  resource: Resource | undefined;
  principal: Principal | undefined;
  actions: string[];
  auxData: AuxData | undefined;
}

export interface CheckOutput {
  requestId: string;
  resourceId: string;
  actions: { [key: string]: CheckOutput_ActionEffect };
  effectiveDerivedRoles: string[];
  validationErrors: ValidationError[];
  outputs: OutputEntry[];
}

export interface CheckOutput_ActionEffect {
  effect: Effect;
  policy: string;
  scope: string;
}

export interface CheckOutput_ActionsEntry {
  key: string;
  value: CheckOutput_ActionEffect | undefined;
}

export interface OutputEntry {
  src: string;
  val: any | undefined;
}

export interface Resource {
  kind: string;
  policyVersion: string;
  id: string;
  attr: { [key: string]: any | undefined };
  scope: string;
}

export interface Resource_AttrEntry {
  key: string;
  value: any | undefined;
}

export interface Principal {
  id: string;
  policyVersion: string;
  roles: string[];
  attr: { [key: string]: any | undefined };
  scope: string;
}

export interface Principal_AttrEntry {
  key: string;
  value: any | undefined;
}

export interface AuxData {
  jwt: { [key: string]: any | undefined };
}

export interface AuxData_JwtEntry {
  key: string;
  value: any | undefined;
}

export const PlanResourcesInput = {
  fromJSON(object: any): PlanResourcesInput {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      action: isSet(object.action) ? String(object.action) : "",
      principal: isSet(object.principal) ? Principal.fromJSON(object.principal) : undefined,
      resource: isSet(object.resource) ? PlanResourcesInput_Resource.fromJSON(object.resource) : undefined,
      auxData: isSet(object.auxData) ? AuxData.fromJSON(object.auxData) : undefined,
      includeMeta: isSet(object.includeMeta) ? Boolean(object.includeMeta) : false,
    };
  },

  toJSON(message: PlanResourcesInput): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.action !== undefined && (obj.action = message.action);
    message.principal !== undefined &&
      (obj.principal = message.principal ? Principal.toJSON(message.principal) : undefined);
    message.resource !== undefined &&
      (obj.resource = message.resource ? PlanResourcesInput_Resource.toJSON(message.resource) : undefined);
    message.auxData !== undefined && (obj.auxData = message.auxData ? AuxData.toJSON(message.auxData) : undefined);
    message.includeMeta !== undefined && (obj.includeMeta = message.includeMeta);
    return obj;
  },
};

export const PlanResourcesInput_Resource = {
  fromJSON(object: any): PlanResourcesInput_Resource {
    return {
      kind: isSet(object.kind) ? String(object.kind) : "",
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{ [key: string]: any | undefined }>((acc, [key, value]) => {
          acc[key] = value as any | undefined;
          return acc;
        }, {})
        : {},
      policyVersion: isSet(object.policyVersion) ? String(object.policyVersion) : "",
      scope: isSet(object.scope) ? String(object.scope) : "",
    };
  },

  toJSON(message: PlanResourcesInput_Resource): unknown {
    const obj: any = {};
    message.kind !== undefined && (obj.kind = message.kind);
    obj.attr = {};
    if (message.attr) {
      Object.entries(message.attr).forEach(([k, v]) => {
        obj.attr[k] = v;
      });
    }
    message.policyVersion !== undefined && (obj.policyVersion = message.policyVersion);
    message.scope !== undefined && (obj.scope = message.scope);
    return obj;
  },
};

export const PlanResourcesInput_Resource_AttrEntry = {
  fromJSON(object: any): PlanResourcesInput_Resource_AttrEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: PlanResourcesInput_Resource_AttrEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

export const PlanResourcesFilter = {
  fromJSON(object: any): PlanResourcesFilter {
    return {
      kind: isSet(object.kind) ? planResourcesFilter_KindFromJSON(object.kind) : 0,
      condition: isSet(object.condition)
        ? PlanResourcesFilter_Expression_Operand.fromJSON(object.condition)
        : undefined,
    };
  },

  toJSON(message: PlanResourcesFilter): unknown {
    const obj: any = {};
    message.kind !== undefined && (obj.kind = planResourcesFilter_KindToJSON(message.kind));
    message.condition !== undefined &&
      (obj.condition = message.condition
        ? PlanResourcesFilter_Expression_Operand.toJSON(message.condition)
        : undefined);
    return obj;
  },
};

export const PlanResourcesFilter_Expression = {
  fromJSON(object: any): PlanResourcesFilter_Expression {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      operands: Array.isArray(object?.operands)
        ? object.operands.map((e: any) => PlanResourcesFilter_Expression_Operand.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlanResourcesFilter_Expression): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    if (message.operands) {
      obj.operands = message.operands.map((e) => e ? PlanResourcesFilter_Expression_Operand.toJSON(e) : undefined);
    } else {
      obj.operands = [];
    }
    return obj;
  },
};

export const PlanResourcesFilter_Expression_Operand = {
  fromJSON(object: any): PlanResourcesFilter_Expression_Operand {
    return {
      node: isSet(object.value)
        ? { $case: "value", value: object.value }
        : isSet(object.expression)
        ? { $case: "expression", expression: PlanResourcesFilter_Expression.fromJSON(object.expression) }
        : isSet(object.variable)
        ? { $case: "variable", variable: String(object.variable) }
        : undefined,
    };
  },

  toJSON(message: PlanResourcesFilter_Expression_Operand): unknown {
    const obj: any = {};
    message.node?.$case === "value" && (obj.value = message.node?.value);
    message.node?.$case === "expression" && (obj.expression = message.node?.expression
      ? PlanResourcesFilter_Expression.toJSON(message.node?.expression)
      : undefined);
    message.node?.$case === "variable" && (obj.variable = message.node?.variable);
    return obj;
  },
};

export const PlanResourcesOutput = {
  fromJSON(object: any): PlanResourcesOutput {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      action: isSet(object.action) ? String(object.action) : "",
      kind: isSet(object.kind) ? String(object.kind) : "",
      policyVersion: isSet(object.policyVersion) ? String(object.policyVersion) : "",
      scope: isSet(object.scope) ? String(object.scope) : "",
      filter: isSet(object.filter) ? PlanResourcesFilter.fromJSON(object.filter) : undefined,
      filterDebug: isSet(object.filterDebug) ? String(object.filterDebug) : "",
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlanResourcesOutput): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.action !== undefined && (obj.action = message.action);
    message.kind !== undefined && (obj.kind = message.kind);
    message.policyVersion !== undefined && (obj.policyVersion = message.policyVersion);
    message.scope !== undefined && (obj.scope = message.scope);
    message.filter !== undefined &&
      (obj.filter = message.filter ? PlanResourcesFilter.toJSON(message.filter) : undefined);
    message.filterDebug !== undefined && (obj.filterDebug = message.filterDebug);
    if (message.validationErrors) {
      obj.validationErrors = message.validationErrors.map((e) => e ? ValidationError.toJSON(e) : undefined);
    } else {
      obj.validationErrors = [];
    }
    return obj;
  },
};

export const CheckInput = {
  fromJSON(object: any): CheckInput {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined,
      principal: isSet(object.principal) ? Principal.fromJSON(object.principal) : undefined,
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => String(e)) : [],
      auxData: isSet(object.auxData) ? AuxData.fromJSON(object.auxData) : undefined,
    };
  },

  toJSON(message: CheckInput): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.resource !== undefined && (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
    message.principal !== undefined &&
      (obj.principal = message.principal ? Principal.toJSON(message.principal) : undefined);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    message.auxData !== undefined && (obj.auxData = message.auxData ? AuxData.toJSON(message.auxData) : undefined);
    return obj;
  },
};

export const CheckOutput = {
  fromJSON(object: any): CheckOutput {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      resourceId: isSet(object.resourceId) ? String(object.resourceId) : "",
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{ [key: string]: CheckOutput_ActionEffect }>((acc, [key, value]) => {
          acc[key] = CheckOutput_ActionEffect.fromJSON(value);
          return acc;
        }, {})
        : {},
      effectiveDerivedRoles: Array.isArray(object?.effectiveDerivedRoles)
        ? object.effectiveDerivedRoles.map((e: any) => String(e))
        : [],
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
      outputs: Array.isArray(object?.outputs) ? object.outputs.map((e: any) => OutputEntry.fromJSON(e)) : [],
    };
  },

  toJSON(message: CheckOutput): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    obj.actions = {};
    if (message.actions) {
      Object.entries(message.actions).forEach(([k, v]) => {
        obj.actions[k] = CheckOutput_ActionEffect.toJSON(v);
      });
    }
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
    if (message.outputs) {
      obj.outputs = message.outputs.map((e) => e ? OutputEntry.toJSON(e) : undefined);
    } else {
      obj.outputs = [];
    }
    return obj;
  },
};

export const CheckOutput_ActionEffect = {
  fromJSON(object: any): CheckOutput_ActionEffect {
    return {
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0,
      policy: isSet(object.policy) ? String(object.policy) : "",
      scope: isSet(object.scope) ? String(object.scope) : "",
    };
  },

  toJSON(message: CheckOutput_ActionEffect): unknown {
    const obj: any = {};
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.policy !== undefined && (obj.policy = message.policy);
    message.scope !== undefined && (obj.scope = message.scope);
    return obj;
  },
};

export const CheckOutput_ActionsEntry = {
  fromJSON(object: any): CheckOutput_ActionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? CheckOutput_ActionEffect.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CheckOutput_ActionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? CheckOutput_ActionEffect.toJSON(message.value) : undefined);
    return obj;
  },
};

export const OutputEntry = {
  fromJSON(object: any): OutputEntry {
    return { src: isSet(object.src) ? String(object.src) : "", val: isSet(object?.val) ? object.val : undefined };
  },

  toJSON(message: OutputEntry): unknown {
    const obj: any = {};
    message.src !== undefined && (obj.src = message.src);
    message.val !== undefined && (obj.val = message.val);
    return obj;
  },
};

export const Resource = {
  fromJSON(object: any): Resource {
    return {
      kind: isSet(object.kind) ? String(object.kind) : "",
      policyVersion: isSet(object.policyVersion) ? String(object.policyVersion) : "",
      id: isSet(object.id) ? String(object.id) : "",
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{ [key: string]: any | undefined }>((acc, [key, value]) => {
          acc[key] = value as any | undefined;
          return acc;
        }, {})
        : {},
      scope: isSet(object.scope) ? String(object.scope) : "",
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.kind !== undefined && (obj.kind = message.kind);
    message.policyVersion !== undefined && (obj.policyVersion = message.policyVersion);
    message.id !== undefined && (obj.id = message.id);
    obj.attr = {};
    if (message.attr) {
      Object.entries(message.attr).forEach(([k, v]) => {
        obj.attr[k] = v;
      });
    }
    message.scope !== undefined && (obj.scope = message.scope);
    return obj;
  },
};

export const Resource_AttrEntry = {
  fromJSON(object: any): Resource_AttrEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: Resource_AttrEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

export const Principal = {
  fromJSON(object: any): Principal {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      policyVersion: isSet(object.policyVersion) ? String(object.policyVersion) : "",
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => String(e)) : [],
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{ [key: string]: any | undefined }>((acc, [key, value]) => {
          acc[key] = value as any | undefined;
          return acc;
        }, {})
        : {},
      scope: isSet(object.scope) ? String(object.scope) : "",
    };
  },

  toJSON(message: Principal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.policyVersion !== undefined && (obj.policyVersion = message.policyVersion);
    if (message.roles) {
      obj.roles = message.roles.map((e) => e);
    } else {
      obj.roles = [];
    }
    obj.attr = {};
    if (message.attr) {
      Object.entries(message.attr).forEach(([k, v]) => {
        obj.attr[k] = v;
      });
    }
    message.scope !== undefined && (obj.scope = message.scope);
    return obj;
  },
};

export const Principal_AttrEntry = {
  fromJSON(object: any): Principal_AttrEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: Principal_AttrEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

export const AuxData = {
  fromJSON(object: any): AuxData {
    return {
      jwt: isObject(object.jwt)
        ? Object.entries(object.jwt).reduce<{ [key: string]: any | undefined }>((acc, [key, value]) => {
          acc[key] = value as any | undefined;
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: AuxData): unknown {
    const obj: any = {};
    obj.jwt = {};
    if (message.jwt) {
      Object.entries(message.jwt).forEach(([k, v]) => {
        obj.jwt[k] = v;
      });
    }
    return obj;
  },
};

export const AuxData_JwtEntry = {
  fromJSON(object: any): AuxData_JwtEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: AuxData_JwtEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
