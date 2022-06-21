/* eslint-disable */
import type { Effect } from "../../../cerbos/effect/v1/effect";
import type { ValidationError } from "../../../cerbos/schema/v1/schema";
import type { CheckedExpr } from "../../../google/api/expr/v1alpha1/checked";

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
