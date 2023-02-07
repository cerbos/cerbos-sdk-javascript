/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { CheckedExpr } from "../../../google/api/expr/v1alpha1/checked";
import { Value } from "../../../google/protobuf/struct";
import { Effect } from "../../effect/v1/effect";
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

export interface PlanResourcesAst {
  filterAst: PlanResourcesAst_Node | undefined;
}

export interface PlanResourcesAst_Node {
  node?: { $case: "logicalOperation"; logicalOperation: PlanResourcesAst_LogicalOperation } | {
    $case: "expression";
    expression: CheckedExpr;
  };
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

export interface PlanResourcesFilter_Expression {
  operator: string;
  operands: PlanResourcesFilter_Expression_Operand[];
}

export interface PlanResourcesFilter_Expression_Operand {
  node?: { $case: "value"; value: any | undefined } | {
    $case: "expression";
    expression: PlanResourcesFilter_Expression;
  } | { $case: "variable"; variable: string };
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
  encode(message: PlanResourcesInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    if (message.resource !== undefined) {
      PlanResourcesInput_Resource.encode(message.resource, writer.uint32(34).fork()).ldelim();
    }
    if (message.auxData !== undefined) {
      AuxData.encode(message.auxData, writer.uint32(42).fork()).ldelim();
    }
    if (message.includeMeta === true) {
      writer.uint32(48).bool(message.includeMeta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanResourcesInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.action = reader.string();
          break;
        case 3:
          message.principal = Principal.decode(reader, reader.uint32());
          break;
        case 4:
          message.resource = PlanResourcesInput_Resource.decode(reader, reader.uint32());
          break;
        case 5:
          message.auxData = AuxData.decode(reader, reader.uint32());
          break;
        case 6:
          message.includeMeta = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlanResourcesInput_Resource(): PlanResourcesInput_Resource {
  return { kind: "", attr: {}, policyVersion: "", scope: "" };
}

export const PlanResourcesInput_Resource = {
  encode(message: PlanResourcesInput_Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    Object.entries(message.attr).forEach(([key, value]) => {
      if (value !== undefined) {
        PlanResourcesInput_Resource_AttrEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
      }
    });
    if (message.policyVersion !== "") {
      writer.uint32(26).string(message.policyVersion);
    }
    if (message.scope !== "") {
      writer.uint32(34).string(message.scope);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanResourcesInput_Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesInput_Resource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.string();
          break;
        case 2:
          const entry2 = PlanResourcesInput_Resource_AttrEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.attr[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.policyVersion = reader.string();
          break;
        case 4:
          message.scope = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlanResourcesInput_Resource_AttrEntry(): PlanResourcesInput_Resource_AttrEntry {
  return { key: "", value: undefined };
}

export const PlanResourcesInput_Resource_AttrEntry = {
  encode(message: PlanResourcesInput_Resource_AttrEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanResourcesInput_Resource_AttrEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesInput_Resource_AttrEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlanResourcesAst(): PlanResourcesAst {
  return { filterAst: undefined };
}

export const PlanResourcesAst = {
  encode(message: PlanResourcesAst, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filterAst !== undefined) {
      PlanResourcesAst_Node.encode(message.filterAst, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanResourcesAst {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesAst();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filterAst = PlanResourcesAst_Node.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlanResourcesAst_Node(): PlanResourcesAst_Node {
  return { node: undefined };
}

export const PlanResourcesAst_Node = {
  encode(message: PlanResourcesAst_Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.node?.$case) {
      case "logicalOperation":
        PlanResourcesAst_LogicalOperation.encode(message.node.logicalOperation, writer.uint32(10).fork()).ldelim();
        break;
      case "expression":
        CheckedExpr.encode(message.node.expression, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanResourcesAst_Node {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesAst_Node();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.node = {
            $case: "logicalOperation",
            logicalOperation: PlanResourcesAst_LogicalOperation.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.node = { $case: "expression", expression: CheckedExpr.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlanResourcesAst_LogicalOperation(): PlanResourcesAst_LogicalOperation {
  return { operator: 0, nodes: [] };
}

export const PlanResourcesAst_LogicalOperation = {
  encode(message: PlanResourcesAst_LogicalOperation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== 0) {
      writer.uint32(8).int32(message.operator);
    }
    for (const v of message.nodes) {
      PlanResourcesAst_Node.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanResourcesAst_LogicalOperation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesAst_LogicalOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.int32() as any;
          break;
        case 2:
          message.nodes.push(PlanResourcesAst_Node.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlanResourcesFilter(): PlanResourcesFilter {
  return { kind: 0, condition: undefined };
}

export const PlanResourcesFilter = {
  encode(message: PlanResourcesFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.condition !== undefined) {
      PlanResourcesFilter_Expression_Operand.encode(message.condition, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanResourcesFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.int32() as any;
          break;
        case 2:
          message.condition = PlanResourcesFilter_Expression_Operand.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlanResourcesFilter_Expression(): PlanResourcesFilter_Expression {
  return { operator: "", operands: [] };
}

export const PlanResourcesFilter_Expression = {
  encode(message: PlanResourcesFilter_Expression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    for (const v of message.operands) {
      PlanResourcesFilter_Expression_Operand.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanResourcesFilter_Expression {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesFilter_Expression();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.operands.push(PlanResourcesFilter_Expression_Operand.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlanResourcesFilter_Expression_Operand(): PlanResourcesFilter_Expression_Operand {
  return { node: undefined };
}

export const PlanResourcesFilter_Expression_Operand = {
  encode(message: PlanResourcesFilter_Expression_Operand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.node?.$case) {
      case "value":
        Value.encode(Value.wrap(message.node.value), writer.uint32(10).fork()).ldelim();
        break;
      case "expression":
        PlanResourcesFilter_Expression.encode(message.node.expression, writer.uint32(18).fork()).ldelim();
        break;
      case "variable":
        writer.uint32(26).string(message.node.variable);
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanResourcesFilter_Expression_Operand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesFilter_Expression_Operand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.node = { $case: "value", value: Value.unwrap(Value.decode(reader, reader.uint32())) };
          break;
        case 2:
          message.node = {
            $case: "expression",
            expression: PlanResourcesFilter_Expression.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.node = { $case: "variable", variable: reader.string() };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
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
    validationErrors: [],
  };
}

export const PlanResourcesOutput = {
  encode(message: PlanResourcesOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    if (message.kind !== "") {
      writer.uint32(26).string(message.kind);
    }
    if (message.policyVersion !== "") {
      writer.uint32(34).string(message.policyVersion);
    }
    if (message.scope !== "") {
      writer.uint32(42).string(message.scope);
    }
    if (message.filter !== undefined) {
      PlanResourcesFilter.encode(message.filter, writer.uint32(50).fork()).ldelim();
    }
    if (message.filterDebug !== "") {
      writer.uint32(58).string(message.filterDebug);
    }
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanResourcesOutput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.action = reader.string();
          break;
        case 3:
          message.kind = reader.string();
          break;
        case 4:
          message.policyVersion = reader.string();
          break;
        case 5:
          message.scope = reader.string();
          break;
        case 6:
          message.filter = PlanResourcesFilter.decode(reader, reader.uint32());
          break;
        case 7:
          message.filterDebug = reader.string();
          break;
        case 8:
          message.validationErrors.push(ValidationError.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseCheckInput(): CheckInput {
  return { requestId: "", resource: undefined, principal: undefined, actions: [], auxData: undefined };
}

export const CheckInput = {
  encode(message: CheckInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.actions) {
      writer.uint32(34).string(v!);
    }
    if (message.auxData !== undefined) {
      AuxData.encode(message.auxData, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        case 3:
          message.principal = Principal.decode(reader, reader.uint32());
          break;
        case 4:
          message.actions.push(reader.string());
          break;
        case 5:
          message.auxData = AuxData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseCheckOutput(): CheckOutput {
  return { requestId: "", resourceId: "", actions: {}, effectiveDerivedRoles: [], validationErrors: [] };
}

export const CheckOutput = {
  encode(message: CheckOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckOutput_ActionsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    for (const v of message.effectiveDerivedRoles) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckOutput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.resourceId = reader.string();
          break;
        case 3:
          const entry3 = CheckOutput_ActionsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.actions[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.effectiveDerivedRoles.push(reader.string());
          break;
        case 5:
          message.validationErrors.push(ValidationError.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseCheckOutput_ActionEffect(): CheckOutput_ActionEffect {
  return { effect: 0, policy: "", scope: "" };
}

export const CheckOutput_ActionEffect = {
  encode(message: CheckOutput_ActionEffect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effect !== 0) {
      writer.uint32(8).int32(message.effect);
    }
    if (message.policy !== "") {
      writer.uint32(18).string(message.policy);
    }
    if (message.scope !== "") {
      writer.uint32(26).string(message.scope);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckOutput_ActionEffect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckOutput_ActionEffect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effect = reader.int32() as any;
          break;
        case 2:
          message.policy = reader.string();
          break;
        case 3:
          message.scope = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseCheckOutput_ActionsEntry(): CheckOutput_ActionsEntry {
  return { key: "", value: undefined };
}

export const CheckOutput_ActionsEntry = {
  encode(message: CheckOutput_ActionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckOutput_ActionEffect.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckOutput_ActionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckOutput_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = CheckOutput_ActionEffect.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseResource(): Resource {
  return { kind: "", policyVersion: "", id: "", attr: {}, scope: "" };
}

export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.policyVersion !== "") {
      writer.uint32(18).string(message.policyVersion);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    Object.entries(message.attr).forEach(([key, value]) => {
      if (value !== undefined) {
        Resource_AttrEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
      }
    });
    if (message.scope !== "") {
      writer.uint32(42).string(message.scope);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.string();
          break;
        case 2:
          message.policyVersion = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          const entry4 = Resource_AttrEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.attr[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.scope = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseResource_AttrEntry(): Resource_AttrEntry {
  return { key: "", value: undefined };
}

export const Resource_AttrEntry = {
  encode(message: Resource_AttrEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource_AttrEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource_AttrEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePrincipal(): Principal {
  return { id: "", policyVersion: "", roles: [], attr: {}, scope: "" };
}

export const Principal = {
  encode(message: Principal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.policyVersion !== "") {
      writer.uint32(18).string(message.policyVersion);
    }
    for (const v of message.roles) {
      writer.uint32(26).string(v!);
    }
    Object.entries(message.attr).forEach(([key, value]) => {
      if (value !== undefined) {
        Principal_AttrEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
      }
    });
    if (message.scope !== "") {
      writer.uint32(42).string(message.scope);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Principal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.policyVersion = reader.string();
          break;
        case 3:
          message.roles.push(reader.string());
          break;
        case 4:
          const entry4 = Principal_AttrEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.attr[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.scope = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePrincipal_AttrEntry(): Principal_AttrEntry {
  return { key: "", value: undefined };
}

export const Principal_AttrEntry = {
  encode(message: Principal_AttrEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Principal_AttrEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipal_AttrEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseAuxData(): AuxData {
  return { jwt: {} };
}

export const AuxData = {
  encode(message: AuxData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.jwt).forEach(([key, value]) => {
      if (value !== undefined) {
        AuxData_JwtEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuxData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuxData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = AuxData_JwtEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.jwt[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseAuxData_JwtEntry(): AuxData_JwtEntry {
  return { key: "", value: undefined };
}

export const AuxData_JwtEntry = {
  encode(message: AuxData_JwtEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuxData_JwtEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuxData_JwtEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseTrace(): Trace {
  return { components: [], event: undefined };
}

export const Trace = {
  encode(message: Trace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.components) {
      Trace_Component.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.event !== undefined) {
      Trace_Event.encode(message.event, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.components.push(Trace_Component.decode(reader, reader.uint32()));
          break;
        case 2:
          message.event = Trace_Event.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseTrace_Component(): Trace_Component {
  return { kind: 0, details: undefined };
}

export const Trace_Component = {
  encode(message: Trace_Component, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    switch (message.details?.$case) {
      case "action":
        writer.uint32(18).string(message.details.action);
        break;
      case "derivedRole":
        writer.uint32(26).string(message.details.derivedRole);
        break;
      case "expr":
        writer.uint32(34).string(message.details.expr);
        break;
      case "index":
        writer.uint32(40).uint32(message.details.index);
        break;
      case "policy":
        writer.uint32(50).string(message.details.policy);
        break;
      case "resource":
        writer.uint32(58).string(message.details.resource);
        break;
      case "rule":
        writer.uint32(66).string(message.details.rule);
        break;
      case "scope":
        writer.uint32(74).string(message.details.scope);
        break;
      case "variable":
        Trace_Component_Variable.encode(message.details.variable, writer.uint32(82).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trace_Component {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrace_Component();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.int32() as any;
          break;
        case 2:
          message.details = { $case: "action", action: reader.string() };
          break;
        case 3:
          message.details = { $case: "derivedRole", derivedRole: reader.string() };
          break;
        case 4:
          message.details = { $case: "expr", expr: reader.string() };
          break;
        case 5:
          message.details = { $case: "index", index: reader.uint32() };
          break;
        case 6:
          message.details = { $case: "policy", policy: reader.string() };
          break;
        case 7:
          message.details = { $case: "resource", resource: reader.string() };
          break;
        case 8:
          message.details = { $case: "rule", rule: reader.string() };
          break;
        case 9:
          message.details = { $case: "scope", scope: reader.string() };
          break;
        case 10:
          message.details = { $case: "variable", variable: Trace_Component_Variable.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseTrace_Component_Variable(): Trace_Component_Variable {
  return { name: "", expr: "" };
}

export const Trace_Component_Variable = {
  encode(message: Trace_Component_Variable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.expr !== "") {
      writer.uint32(18).string(message.expr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trace_Component_Variable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrace_Component_Variable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.expr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseTrace_Event(): Trace_Event {
  return { status: 0, effect: 0, error: "", message: "", result: undefined };
}

export const Trace_Event = {
  encode(message: Trace_Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.effect !== 0) {
      writer.uint32(16).int32(message.effect);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }
    if (message.result !== undefined) {
      Value.encode(Value.wrap(message.result), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trace_Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrace_Event();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.effect = reader.int32() as any;
          break;
        case 3:
          message.error = reader.string();
          break;
        case 4:
          message.message = reader.string();
          break;
        case 5:
          message.result = Value.unwrap(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
