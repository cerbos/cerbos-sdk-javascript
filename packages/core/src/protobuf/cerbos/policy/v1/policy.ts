/* eslint-disable */
import type { Effect } from "../../effect/v1/effect";
import type { AuxData, CheckInput, Principal, Resource, Trace } from "../../engine/v1/engine";

export const protobufPackage = "cerbos.policy.v1";

export interface Policy {
  apiVersion: string;
  disabled: boolean;
  description: string;
  metadata: Metadata | undefined;
  policyType?: { $case: "resourcePolicy"; resourcePolicy: ResourcePolicy } | {
    $case: "principalPolicy";
    principalPolicy: PrincipalPolicy;
  } | { $case: "derivedRoles"; derivedRoles: DerivedRoles };
  variables: { [key: string]: string };
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
}

export interface ResourceRule {
  actions: string[];
  derivedRoles: string[];
  roles: string[];
  condition: Condition | undefined;
  effect: Effect;
  name: string;
}

export interface PrincipalPolicy {
  principal: string;
  version: string;
  rules: PrincipalRule[];
  scope: string;
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
}

export interface DerivedRoles {
  name: string;
  definitions: RoleDef[];
}

export interface RoleDef {
  name: string;
  parentRoles: string[];
  condition: Condition | undefined;
}

export interface Condition {
  condition?: { $case: "match"; match: Match } | { $case: "script"; script: string };
}

export interface Match {
  op?: { $case: "all"; all: Match_ExprList } | { $case: "any"; any: Match_ExprList } | {
    $case: "none";
    none: Match_ExprList;
  } | { $case: "expr"; expr: string };
}

export interface Match_ExprList {
  of: Match[];
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

export interface TestFixture {
}

export interface TestFixture_Principals {
  principals: { [key: string]: Principal };
}

export interface TestFixture_Principals_PrincipalsEntry {
  key: string;
  value: Principal | undefined;
}

export interface TestFixture_Resources {
  resources: { [key: string]: Resource };
}

export interface TestFixture_Resources_ResourcesEntry {
  key: string;
  value: Resource | undefined;
}

export interface TestFixture_AuxData {
  auxData: { [key: string]: AuxData };
}

export interface TestFixture_AuxData_AuxDataEntry {
  key: string;
  value: AuxData | undefined;
}

export interface TestOptions {
  now: Date | undefined;
}

export interface TestSuite {
  name: string;
  description: string;
  skip: boolean;
  skipReason: string;
  tests: TestTable[];
  principals: { [key: string]: Principal };
  resources: { [key: string]: Resource };
  auxData: { [key: string]: AuxData };
  options: TestOptions | undefined;
}

export interface TestSuite_PrincipalsEntry {
  key: string;
  value: Principal | undefined;
}

export interface TestSuite_ResourcesEntry {
  key: string;
  value: Resource | undefined;
}

export interface TestSuite_AuxDataEntry {
  key: string;
  value: AuxData | undefined;
}

export interface TestTable {
  name: string;
  description: string;
  skip: boolean;
  skipReason: string;
  input: TestTable_Input | undefined;
  expected: TestTable_Expectation[];
  options: TestOptions | undefined;
}

export interface TestTable_Input {
  principals: string[];
  resources: string[];
  actions: string[];
  auxData: string;
}

export interface TestTable_Expectation {
  principal: string;
  resource: string;
  actions: { [key: string]: Effect };
}

export interface TestTable_Expectation_ActionsEntry {
  key: string;
  value: Effect;
}

export interface Test {
  name: Test_TestName | undefined;
  description: string;
  skip: boolean;
  skipReason: string;
  input: CheckInput | undefined;
  expected: { [key: string]: Effect };
  options: TestOptions | undefined;
}

export interface Test_TestName {
  testTableName: string;
  principalKey: string;
  resourceKey: string;
}

export interface Test_ExpectedEntry {
  key: string;
  value: Effect;
}

export interface TestResults {
  suites: TestResults_Suite[];
  summary: TestResults_Summary | undefined;
}

export enum TestResults_Result {
  RESULT_UNSPECIFIED = 0,
  RESULT_SKIPPED = 1,
  RESULT_PASSED = 2,
  RESULT_FAILED = 3,
  RESULT_ERRORED = 4,
}

export interface TestResults_Tally {
  result: TestResults_Result;
  count: number;
}

export interface TestResults_Summary {
  overallResult: TestResults_Result;
  testsCount: number;
  resultCounts: TestResults_Tally[];
}

export interface TestResults_Suite {
  file: string;
  name: string;
  principals: TestResults_Principal[];
  summary: TestResults_Summary | undefined;
  error: string;
}

export interface TestResults_Principal {
  name: string;
  resources: TestResults_Resource[];
}

export interface TestResults_Resource {
  name: string;
  actions: TestResults_Action[];
}

export interface TestResults_Action {
  name: string;
  details: TestResults_Details | undefined;
}

export interface TestResults_Details {
  result: TestResults_Result;
  outcome?: { $case: "failure"; failure: TestResults_Failure } | { $case: "error"; error: string };
  engineTrace: Trace[];
}

export interface TestResults_Failure {
  expected: Effect;
  actual: Effect;
}
