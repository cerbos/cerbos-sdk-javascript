/* eslint-disable */
import type { Effect } from "../../effect/v1/effect";

export const protobufPackage = "cerbos.policy.v1";

export interface Policy {
  apiVersion: string;
  disabled: boolean;
  description: string;
  metadata: Metadata | undefined;
  policyType?:
    | { $case: "resourcePolicy"; resourcePolicy: ResourcePolicy }
    | { $case: "principalPolicy"; principalPolicy: PrincipalPolicy }
    | { $case: "derivedRoles"; derivedRoles: DerivedRoles }
    | { $case: "exportVariables"; exportVariables: ExportVariables }
    | undefined;
  variables: { [key: string]: string };
  jsonSchema: string;
}

export interface Policy_VariablesEntry {
  key: string;
  value: string;
}

export interface Metadata {
  sourceFile: string;
  annotations: { [key: string]: string };
  hash: string | undefined;
  storeIdentifer: string;
  storeIdentifier: string;
}

export interface Metadata_AnnotationsEntry {
  key: string;
  value: string;
}

export interface ResourcePolicy {
  resource: string;
  version: string;
  importDerivedRoles: string[];
  rules: ResourceRule[];
  scope: string;
  schemas: Schemas | undefined;
  variables: Variables | undefined;
}

export interface ResourceRule {
  actions: string[];
  derivedRoles: string[];
  roles: string[];
  condition: Condition | undefined;
  effect: Effect;
  name: string;
  output: Output | undefined;
}

export interface PrincipalPolicy {
  principal: string;
  version: string;
  rules: PrincipalRule[];
  scope: string;
  variables: Variables | undefined;
}

export interface PrincipalRule {
  resource: string;
  actions: PrincipalRule_Action[];
}

export interface PrincipalRule_Action {
  action: string;
  condition: Condition | undefined;
  effect: Effect;
  name: string;
  output: Output | undefined;
}

export interface DerivedRoles {
  name: string;
  definitions: RoleDef[];
  variables: Variables | undefined;
}

export interface RoleDef {
  name: string;
  parentRoles: string[];
  condition: Condition | undefined;
}

export interface ExportVariables {
  name: string;
  definitions: { [key: string]: string };
}

export interface ExportVariables_DefinitionsEntry {
  key: string;
  value: string;
}

export interface Variables {
  import: string[];
  local: { [key: string]: string };
}

export interface Variables_LocalEntry {
  key: string;
  value: string;
}

export interface Condition {
  condition?:
    | { $case: "match"; match: Match }
    | { $case: "script"; script: string }
    | undefined;
}

export interface Match {
  op?:
    | { $case: "all"; all: Match_ExprList }
    | { $case: "any"; any: Match_ExprList }
    | { $case: "none"; none: Match_ExprList }
    | { $case: "expr"; expr: string }
    | undefined;
}

export interface Match_ExprList {
  of: Match[];
}

export interface Output {
  expr: string;
}

export interface Schemas {
  principalSchema: Schemas_Schema | undefined;
  resourceSchema: Schemas_Schema | undefined;
}

export interface Schemas_IgnoreWhen {
  actions: string[];
}

export interface Schemas_Schema {
  ref: string;
  ignoreWhen: Schemas_IgnoreWhen | undefined;
}
