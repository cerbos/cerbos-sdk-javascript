/* eslint-disable */
import {
  Effect,
  effectFromJSON,
  effectToJSON,
} from "../../../cerbos/effect/v1/effect";
import { ValidationError } from "../../../cerbos/schema/v1/schema";
import { CheckedExpr } from "../../../google/api/expr/v1alpha1/checked";

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

export interface PlanResourcesAst {
  filterAst: PlanResourcesAst_Node | undefined;
}

export interface PlanResourcesAst_Node {
  node?:
    | {
        $case: "logicalOperation";
        logicalOperation: PlanResourcesAst_LogicalOperation;
      }
    | { $case: "expression"; expression: CheckedExpr };
}

export interface PlanResourcesAst_LogicalOperation {
  operator: PlanResourcesAst_LogicalOperation_Operator;
  nodes: PlanResourcesAst_Node[];
}

export enum PlanResourcesAst_LogicalOperation_Operator {
  OPERATOR_UNSPECIFIED = 0,
  OPERATOR_AND = 1,
  OPERATOR_OR = 2,
  OPERATOR_NOT = 3,
}

export function planResourcesAst_LogicalOperation_OperatorFromJSON(
  object: any
): PlanResourcesAst_LogicalOperation_Operator {
  switch (object) {
    case 0:
    case "OPERATOR_UNSPECIFIED":
      return PlanResourcesAst_LogicalOperation_Operator.OPERATOR_UNSPECIFIED;
    case 1:
    case "OPERATOR_AND":
      return PlanResourcesAst_LogicalOperation_Operator.OPERATOR_AND;
    case 2:
    case "OPERATOR_OR":
      return PlanResourcesAst_LogicalOperation_Operator.OPERATOR_OR;
    case 3:
    case "OPERATOR_NOT":
      return PlanResourcesAst_LogicalOperation_Operator.OPERATOR_NOT;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum PlanResourcesAst_LogicalOperation_Operator"
      );
  }
}

export function planResourcesAst_LogicalOperation_OperatorToJSON(
  object: PlanResourcesAst_LogicalOperation_Operator
): string {
  switch (object) {
    case PlanResourcesAst_LogicalOperation_Operator.OPERATOR_UNSPECIFIED:
      return "OPERATOR_UNSPECIFIED";
    case PlanResourcesAst_LogicalOperation_Operator.OPERATOR_AND:
      return "OPERATOR_AND";
    case PlanResourcesAst_LogicalOperation_Operator.OPERATOR_OR:
      return "OPERATOR_OR";
    case PlanResourcesAst_LogicalOperation_Operator.OPERATOR_NOT:
      return "OPERATOR_NOT";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum PlanResourcesAst_LogicalOperation_Operator"
      );
  }
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

export function planResourcesFilter_KindFromJSON(
  object: any
): PlanResourcesFilter_Kind {
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
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum PlanResourcesFilter_Kind"
      );
  }
}

export function planResourcesFilter_KindToJSON(
  object: PlanResourcesFilter_Kind
): string {
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
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum PlanResourcesFilter_Kind"
      );
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
    | { $case: "variable"; variable: string };
}

export interface PlanResourcesOutput {
  requestId: string;
  action: string;
  kind: string;
  policyVersion: string;
  scope: string;
  filter: PlanResourcesFilter | undefined;
  filterDebug: string;
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

export interface Trace {
  components: Trace_Component[];
  event: Trace_Event | undefined;
}

export interface Trace_Component {
  kind: Trace_Component_Kind;
  details?:
    | { $case: "action"; action: string }
    | { $case: "derivedRole"; derivedRole: string }
    | { $case: "expr"; expr: string }
    | { $case: "index"; index: number }
    | { $case: "policy"; policy: string }
    | { $case: "resource"; resource: string }
    | { $case: "rule"; rule: string }
    | { $case: "scope"; scope: string }
    | { $case: "variable"; variable: Trace_Component_Variable };
}

export enum Trace_Component_Kind {
  KIND_UNSPECIFIED = 0,
  KIND_ACTION = 1,
  KIND_CONDITION_ALL = 2,
  KIND_CONDITION_ANY = 3,
  KIND_CONDITION_NONE = 4,
  KIND_CONDITION = 5,
  KIND_DERIVED_ROLE = 6,
  KIND_EXPR = 7,
  KIND_POLICY = 8,
  KIND_RESOURCE = 9,
  KIND_RULE = 10,
  KIND_SCOPE = 11,
  KIND_VARIABLE = 12,
  KIND_VARIABLES = 13,
}

export function trace_Component_KindFromJSON(
  object: any
): Trace_Component_Kind {
  switch (object) {
    case 0:
    case "KIND_UNSPECIFIED":
      return Trace_Component_Kind.KIND_UNSPECIFIED;
    case 1:
    case "KIND_ACTION":
      return Trace_Component_Kind.KIND_ACTION;
    case 2:
    case "KIND_CONDITION_ALL":
      return Trace_Component_Kind.KIND_CONDITION_ALL;
    case 3:
    case "KIND_CONDITION_ANY":
      return Trace_Component_Kind.KIND_CONDITION_ANY;
    case 4:
    case "KIND_CONDITION_NONE":
      return Trace_Component_Kind.KIND_CONDITION_NONE;
    case 5:
    case "KIND_CONDITION":
      return Trace_Component_Kind.KIND_CONDITION;
    case 6:
    case "KIND_DERIVED_ROLE":
      return Trace_Component_Kind.KIND_DERIVED_ROLE;
    case 7:
    case "KIND_EXPR":
      return Trace_Component_Kind.KIND_EXPR;
    case 8:
    case "KIND_POLICY":
      return Trace_Component_Kind.KIND_POLICY;
    case 9:
    case "KIND_RESOURCE":
      return Trace_Component_Kind.KIND_RESOURCE;
    case 10:
    case "KIND_RULE":
      return Trace_Component_Kind.KIND_RULE;
    case 11:
    case "KIND_SCOPE":
      return Trace_Component_Kind.KIND_SCOPE;
    case 12:
    case "KIND_VARIABLE":
      return Trace_Component_Kind.KIND_VARIABLE;
    case 13:
    case "KIND_VARIABLES":
      return Trace_Component_Kind.KIND_VARIABLES;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Trace_Component_Kind"
      );
  }
}

export function trace_Component_KindToJSON(
  object: Trace_Component_Kind
): string {
  switch (object) {
    case Trace_Component_Kind.KIND_UNSPECIFIED:
      return "KIND_UNSPECIFIED";
    case Trace_Component_Kind.KIND_ACTION:
      return "KIND_ACTION";
    case Trace_Component_Kind.KIND_CONDITION_ALL:
      return "KIND_CONDITION_ALL";
    case Trace_Component_Kind.KIND_CONDITION_ANY:
      return "KIND_CONDITION_ANY";
    case Trace_Component_Kind.KIND_CONDITION_NONE:
      return "KIND_CONDITION_NONE";
    case Trace_Component_Kind.KIND_CONDITION:
      return "KIND_CONDITION";
    case Trace_Component_Kind.KIND_DERIVED_ROLE:
      return "KIND_DERIVED_ROLE";
    case Trace_Component_Kind.KIND_EXPR:
      return "KIND_EXPR";
    case Trace_Component_Kind.KIND_POLICY:
      return "KIND_POLICY";
    case Trace_Component_Kind.KIND_RESOURCE:
      return "KIND_RESOURCE";
    case Trace_Component_Kind.KIND_RULE:
      return "KIND_RULE";
    case Trace_Component_Kind.KIND_SCOPE:
      return "KIND_SCOPE";
    case Trace_Component_Kind.KIND_VARIABLE:
      return "KIND_VARIABLE";
    case Trace_Component_Kind.KIND_VARIABLES:
      return "KIND_VARIABLES";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Trace_Component_Kind"
      );
  }
}

export interface Trace_Component_Variable {
  name: string;
  expr: string;
}

export interface Trace_Event {
  status: Trace_Event_Status;
  effect: Effect;
  error: string;
  message: string;
  result: any | undefined;
}

export enum Trace_Event_Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_ACTIVATED = 1,
  STATUS_SKIPPED = 2,
}

export function trace_Event_StatusFromJSON(object: any): Trace_Event_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Trace_Event_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_ACTIVATED":
      return Trace_Event_Status.STATUS_ACTIVATED;
    case 2:
    case "STATUS_SKIPPED":
      return Trace_Event_Status.STATUS_SKIPPED;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Trace_Event_Status"
      );
  }
}

export function trace_Event_StatusToJSON(object: Trace_Event_Status): string {
  switch (object) {
    case Trace_Event_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Trace_Event_Status.STATUS_ACTIVATED:
      return "STATUS_ACTIVATED";
    case Trace_Event_Status.STATUS_SKIPPED:
      return "STATUS_SKIPPED";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Trace_Event_Status"
      );
  }
}

function createBasePlanResourcesInput(): PlanResourcesInput {
  return {
    requestId: "",
    action: "",
    principal: undefined,
    resource: undefined,
    auxData: undefined,
    includeMeta: false,
  };
}

export const PlanResourcesInput = {
  fromJSON(object: any): PlanResourcesInput {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      action: isSet(object.action) ? String(object.action) : "",
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resource: isSet(object.resource)
        ? PlanResourcesInput_Resource.fromJSON(object.resource)
        : undefined,
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
      includeMeta: isSet(object.includeMeta)
        ? Boolean(object.includeMeta)
        : false,
    };
  },

  toJSON(message: PlanResourcesInput): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.action !== undefined && (obj.action = message.action);
    message.principal !== undefined &&
      (obj.principal = message.principal
        ? Principal.toJSON(message.principal)
        : undefined);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? PlanResourcesInput_Resource.toJSON(message.resource)
        : undefined);
    message.auxData !== undefined &&
      (obj.auxData = message.auxData
        ? AuxData.toJSON(message.auxData)
        : undefined);
    message.includeMeta !== undefined &&
      (obj.includeMeta = message.includeMeta);
    return obj;
  },
};

function createBasePlanResourcesInput_Resource(): PlanResourcesInput_Resource {
  return { kind: "", attr: {}, policyVersion: "", scope: "" };
}

export const PlanResourcesInput_Resource = {
  fromJSON(object: any): PlanResourcesInput_Resource {
    return {
      kind: isSet(object.kind) ? String(object.kind) : "",
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
      policyVersion: isSet(object.policyVersion)
        ? String(object.policyVersion)
        : "",
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
    message.policyVersion !== undefined &&
      (obj.policyVersion = message.policyVersion);
    message.scope !== undefined && (obj.scope = message.scope);
    return obj;
  },
};

function createBasePlanResourcesInput_Resource_AttrEntry(): PlanResourcesInput_Resource_AttrEntry {
  return { key: "", value: undefined };
}

export const PlanResourcesInput_Resource_AttrEntry = {
  fromJSON(object: any): PlanResourcesInput_Resource_AttrEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: PlanResourcesInput_Resource_AttrEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBasePlanResourcesAst(): PlanResourcesAst {
  return { filterAst: undefined };
}

export const PlanResourcesAst = {
  fromJSON(object: any): PlanResourcesAst {
    return {
      filterAst: isSet(object.filterAst)
        ? PlanResourcesAst_Node.fromJSON(object.filterAst)
        : undefined,
    };
  },

  toJSON(message: PlanResourcesAst): unknown {
    const obj: any = {};
    message.filterAst !== undefined &&
      (obj.filterAst = message.filterAst
        ? PlanResourcesAst_Node.toJSON(message.filterAst)
        : undefined);
    return obj;
  },
};

function createBasePlanResourcesAst_Node(): PlanResourcesAst_Node {
  return { node: undefined };
}

export const PlanResourcesAst_Node = {
  fromJSON(object: any): PlanResourcesAst_Node {
    return {
      node: isSet(object.logicalOperation)
        ? {
            $case: "logicalOperation",
            logicalOperation: PlanResourcesAst_LogicalOperation.fromJSON(
              object.logicalOperation
            ),
          }
        : isSet(object.expression)
        ? {
            $case: "expression",
            expression: CheckedExpr.fromJSON(object.expression),
          }
        : undefined,
    };
  },

  toJSON(message: PlanResourcesAst_Node): unknown {
    const obj: any = {};
    message.node?.$case === "logicalOperation" &&
      (obj.logicalOperation = message.node?.logicalOperation
        ? PlanResourcesAst_LogicalOperation.toJSON(
            message.node?.logicalOperation
          )
        : undefined);
    message.node?.$case === "expression" &&
      (obj.expression = message.node?.expression
        ? CheckedExpr.toJSON(message.node?.expression)
        : undefined);
    return obj;
  },
};

function createBasePlanResourcesAst_LogicalOperation(): PlanResourcesAst_LogicalOperation {
  return { operator: 0, nodes: [] };
}

export const PlanResourcesAst_LogicalOperation = {
  fromJSON(object: any): PlanResourcesAst_LogicalOperation {
    return {
      operator: isSet(object.operator)
        ? planResourcesAst_LogicalOperation_OperatorFromJSON(object.operator)
        : 0,
      nodes: Array.isArray(object?.nodes)
        ? object.nodes.map((e: any) => PlanResourcesAst_Node.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlanResourcesAst_LogicalOperation): unknown {
    const obj: any = {};
    message.operator !== undefined &&
      (obj.operator = planResourcesAst_LogicalOperation_OperatorToJSON(
        message.operator
      ));
    if (message.nodes) {
      obj.nodes = message.nodes.map((e) =>
        e ? PlanResourcesAst_Node.toJSON(e) : undefined
      );
    } else {
      obj.nodes = [];
    }
    return obj;
  },
};

function createBasePlanResourcesFilter(): PlanResourcesFilter {
  return { kind: 0, condition: undefined };
}

export const PlanResourcesFilter = {
  fromJSON(object: any): PlanResourcesFilter {
    return {
      kind: isSet(object.kind)
        ? planResourcesFilter_KindFromJSON(object.kind)
        : 0,
      condition: isSet(object.condition)
        ? PlanResourcesFilter_Expression_Operand.fromJSON(object.condition)
        : undefined,
    };
  },

  toJSON(message: PlanResourcesFilter): unknown {
    const obj: any = {};
    message.kind !== undefined &&
      (obj.kind = planResourcesFilter_KindToJSON(message.kind));
    message.condition !== undefined &&
      (obj.condition = message.condition
        ? PlanResourcesFilter_Expression_Operand.toJSON(message.condition)
        : undefined);
    return obj;
  },
};

function createBasePlanResourcesFilter_Expression(): PlanResourcesFilter_Expression {
  return { operator: "", operands: [] };
}

export const PlanResourcesFilter_Expression = {
  fromJSON(object: any): PlanResourcesFilter_Expression {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      operands: Array.isArray(object?.operands)
        ? object.operands.map((e: any) =>
            PlanResourcesFilter_Expression_Operand.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: PlanResourcesFilter_Expression): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    if (message.operands) {
      obj.operands = message.operands.map((e) =>
        e ? PlanResourcesFilter_Expression_Operand.toJSON(e) : undefined
      );
    } else {
      obj.operands = [];
    }
    return obj;
  },
};

function createBasePlanResourcesFilter_Expression_Operand(): PlanResourcesFilter_Expression_Operand {
  return { node: undefined };
}

export const PlanResourcesFilter_Expression_Operand = {
  fromJSON(object: any): PlanResourcesFilter_Expression_Operand {
    return {
      node: isSet(object.value)
        ? { $case: "value", value: object.value }
        : isSet(object.expression)
        ? {
            $case: "expression",
            expression: PlanResourcesFilter_Expression.fromJSON(
              object.expression
            ),
          }
        : isSet(object.variable)
        ? { $case: "variable", variable: String(object.variable) }
        : undefined,
    };
  },

  toJSON(message: PlanResourcesFilter_Expression_Operand): unknown {
    const obj: any = {};
    message.node?.$case === "value" && (obj.value = message.node?.value);
    message.node?.$case === "expression" &&
      (obj.expression = message.node?.expression
        ? PlanResourcesFilter_Expression.toJSON(message.node?.expression)
        : undefined);
    message.node?.$case === "variable" &&
      (obj.variable = message.node?.variable);
    return obj;
  },
};

function createBasePlanResourcesOutput(): PlanResourcesOutput {
  return {
    requestId: "",
    action: "",
    kind: "",
    policyVersion: "",
    scope: "",
    filter: undefined,
    filterDebug: "",
  };
}

export const PlanResourcesOutput = {
  fromJSON(object: any): PlanResourcesOutput {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      action: isSet(object.action) ? String(object.action) : "",
      kind: isSet(object.kind) ? String(object.kind) : "",
      policyVersion: isSet(object.policyVersion)
        ? String(object.policyVersion)
        : "",
      scope: isSet(object.scope) ? String(object.scope) : "",
      filter: isSet(object.filter)
        ? PlanResourcesFilter.fromJSON(object.filter)
        : undefined,
      filterDebug: isSet(object.filterDebug) ? String(object.filterDebug) : "",
    };
  },

  toJSON(message: PlanResourcesOutput): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.action !== undefined && (obj.action = message.action);
    message.kind !== undefined && (obj.kind = message.kind);
    message.policyVersion !== undefined &&
      (obj.policyVersion = message.policyVersion);
    message.scope !== undefined && (obj.scope = message.scope);
    message.filter !== undefined &&
      (obj.filter = message.filter
        ? PlanResourcesFilter.toJSON(message.filter)
        : undefined);
    message.filterDebug !== undefined &&
      (obj.filterDebug = message.filterDebug);
    return obj;
  },
};

function createBaseCheckInput(): CheckInput {
  return {
    requestId: "",
    resource: undefined,
    principal: undefined,
    actions: [],
    auxData: undefined,
  };
}

export const CheckInput = {
  fromJSON(object: any): CheckInput {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      resource: isSet(object.resource)
        ? Resource.fromJSON(object.resource)
        : undefined,
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => String(e))
        : [],
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
    };
  },

  toJSON(message: CheckInput): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    message.principal !== undefined &&
      (obj.principal = message.principal
        ? Principal.toJSON(message.principal)
        : undefined);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    message.auxData !== undefined &&
      (obj.auxData = message.auxData
        ? AuxData.toJSON(message.auxData)
        : undefined);
    return obj;
  },
};

function createBaseCheckOutput(): CheckOutput {
  return {
    requestId: "",
    resourceId: "",
    actions: {},
    effectiveDerivedRoles: [],
    validationErrors: [],
  };
}

export const CheckOutput = {
  fromJSON(object: any): CheckOutput {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      resourceId: isSet(object.resourceId) ? String(object.resourceId) : "",
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{
            [key: string]: CheckOutput_ActionEffect;
          }>((acc, [key, value]) => {
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
      obj.validationErrors = message.validationErrors.map((e) =>
        e ? ValidationError.toJSON(e) : undefined
      );
    } else {
      obj.validationErrors = [];
    }
    return obj;
  },
};

function createBaseCheckOutput_ActionEffect(): CheckOutput_ActionEffect {
  return { effect: 0, policy: "", scope: "" };
}

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

function createBaseCheckOutput_ActionsEntry(): CheckOutput_ActionsEntry {
  return { key: "", value: undefined };
}

export const CheckOutput_ActionsEntry = {
  fromJSON(object: any): CheckOutput_ActionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? CheckOutput_ActionEffect.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: CheckOutput_ActionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? CheckOutput_ActionEffect.toJSON(message.value)
        : undefined);
    return obj;
  },
};

function createBaseResource(): Resource {
  return { kind: "", policyVersion: "", id: "", attr: {}, scope: "" };
}

export const Resource = {
  fromJSON(object: any): Resource {
    return {
      kind: isSet(object.kind) ? String(object.kind) : "",
      policyVersion: isSet(object.policyVersion)
        ? String(object.policyVersion)
        : "",
      id: isSet(object.id) ? String(object.id) : "",
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
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
    message.policyVersion !== undefined &&
      (obj.policyVersion = message.policyVersion);
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

function createBaseResource_AttrEntry(): Resource_AttrEntry {
  return { key: "", value: undefined };
}

export const Resource_AttrEntry = {
  fromJSON(object: any): Resource_AttrEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: Resource_AttrEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBasePrincipal(): Principal {
  return { id: "", policyVersion: "", roles: [], attr: {}, scope: "" };
}

export const Principal = {
  fromJSON(object: any): Principal {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      policyVersion: isSet(object.policyVersion)
        ? String(object.policyVersion)
        : "",
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => String(e))
        : [],
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
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
    message.policyVersion !== undefined &&
      (obj.policyVersion = message.policyVersion);
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

function createBasePrincipal_AttrEntry(): Principal_AttrEntry {
  return { key: "", value: undefined };
}

export const Principal_AttrEntry = {
  fromJSON(object: any): Principal_AttrEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: Principal_AttrEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseAuxData(): AuxData {
  return { jwt: {} };
}

export const AuxData = {
  fromJSON(object: any): AuxData {
    return {
      jwt: isObject(object.jwt)
        ? Object.entries(object.jwt).reduce<{ [key: string]: any | undefined }>(
            (acc, [key, value]) => {
              acc[key] = value as any | undefined;
              return acc;
            },
            {}
          )
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

function createBaseAuxData_JwtEntry(): AuxData_JwtEntry {
  return { key: "", value: undefined };
}

export const AuxData_JwtEntry = {
  fromJSON(object: any): AuxData_JwtEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: AuxData_JwtEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseTrace(): Trace {
  return { components: [], event: undefined };
}

export const Trace = {
  fromJSON(object: any): Trace {
    return {
      components: Array.isArray(object?.components)
        ? object.components.map((e: any) => Trace_Component.fromJSON(e))
        : [],
      event: isSet(object.event)
        ? Trace_Event.fromJSON(object.event)
        : undefined,
    };
  },

  toJSON(message: Trace): unknown {
    const obj: any = {};
    if (message.components) {
      obj.components = message.components.map((e) =>
        e ? Trace_Component.toJSON(e) : undefined
      );
    } else {
      obj.components = [];
    }
    message.event !== undefined &&
      (obj.event = message.event
        ? Trace_Event.toJSON(message.event)
        : undefined);
    return obj;
  },
};

function createBaseTrace_Component(): Trace_Component {
  return { kind: 0, details: undefined };
}

export const Trace_Component = {
  fromJSON(object: any): Trace_Component {
    return {
      kind: isSet(object.kind) ? trace_Component_KindFromJSON(object.kind) : 0,
      details: isSet(object.action)
        ? { $case: "action", action: String(object.action) }
        : isSet(object.derivedRole)
        ? { $case: "derivedRole", derivedRole: String(object.derivedRole) }
        : isSet(object.expr)
        ? { $case: "expr", expr: String(object.expr) }
        : isSet(object.index)
        ? { $case: "index", index: Number(object.index) }
        : isSet(object.policy)
        ? { $case: "policy", policy: String(object.policy) }
        : isSet(object.resource)
        ? { $case: "resource", resource: String(object.resource) }
        : isSet(object.rule)
        ? { $case: "rule", rule: String(object.rule) }
        : isSet(object.scope)
        ? { $case: "scope", scope: String(object.scope) }
        : isSet(object.variable)
        ? {
            $case: "variable",
            variable: Trace_Component_Variable.fromJSON(object.variable),
          }
        : undefined,
    };
  },

  toJSON(message: Trace_Component): unknown {
    const obj: any = {};
    message.kind !== undefined &&
      (obj.kind = trace_Component_KindToJSON(message.kind));
    message.details?.$case === "action" &&
      (obj.action = message.details?.action);
    message.details?.$case === "derivedRole" &&
      (obj.derivedRole = message.details?.derivedRole);
    message.details?.$case === "expr" && (obj.expr = message.details?.expr);
    message.details?.$case === "index" &&
      (obj.index = Math.round(message.details?.index));
    message.details?.$case === "policy" &&
      (obj.policy = message.details?.policy);
    message.details?.$case === "resource" &&
      (obj.resource = message.details?.resource);
    message.details?.$case === "rule" && (obj.rule = message.details?.rule);
    message.details?.$case === "scope" && (obj.scope = message.details?.scope);
    message.details?.$case === "variable" &&
      (obj.variable = message.details?.variable
        ? Trace_Component_Variable.toJSON(message.details?.variable)
        : undefined);
    return obj;
  },
};

function createBaseTrace_Component_Variable(): Trace_Component_Variable {
  return { name: "", expr: "" };
}

export const Trace_Component_Variable = {
  fromJSON(object: any): Trace_Component_Variable {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      expr: isSet(object.expr) ? String(object.expr) : "",
    };
  },

  toJSON(message: Trace_Component_Variable): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.expr !== undefined && (obj.expr = message.expr);
    return obj;
  },
};

function createBaseTrace_Event(): Trace_Event {
  return { status: 0, effect: 0, error: "", message: "", result: undefined };
}

export const Trace_Event = {
  fromJSON(object: any): Trace_Event {
    return {
      status: isSet(object.status)
        ? trace_Event_StatusFromJSON(object.status)
        : 0,
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0,
      error: isSet(object.error) ? String(object.error) : "",
      message: isSet(object.message) ? String(object.message) : "",
      result: isSet(object?.result) ? object.result : undefined,
    };
  },

  toJSON(message: Trace_Event): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = trace_Event_StatusToJSON(message.status));
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.error !== undefined && (obj.error = message.error);
    message.message !== undefined && (obj.message = message.message);
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
