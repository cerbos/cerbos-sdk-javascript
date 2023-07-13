/* eslint-disable */
import type { Effect } from "../../effect/v1/effect";
import type { ValidationError } from "../../schema/v1/schema";

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
