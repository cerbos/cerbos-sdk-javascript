/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Effect, effectFromJSON, effectToJSON } from "../../effect/v1/effect";
import { AuxData, CheckInput, Principal, Resource, Trace } from "../../engine/v1/engine";

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
  hash:
    | number
    | undefined;
  /** @deprecated */
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

export function testResults_ResultFromJSON(object: any): TestResults_Result {
  switch (object) {
    case 0:
    case "RESULT_UNSPECIFIED":
      return TestResults_Result.RESULT_UNSPECIFIED;
    case 1:
    case "RESULT_SKIPPED":
      return TestResults_Result.RESULT_SKIPPED;
    case 2:
    case "RESULT_PASSED":
      return TestResults_Result.RESULT_PASSED;
    case 3:
    case "RESULT_FAILED":
      return TestResults_Result.RESULT_FAILED;
    case 4:
    case "RESULT_ERRORED":
      return TestResults_Result.RESULT_ERRORED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum TestResults_Result");
  }
}

export function testResults_ResultToJSON(object: TestResults_Result): string {
  switch (object) {
    case TestResults_Result.RESULT_UNSPECIFIED:
      return "RESULT_UNSPECIFIED";
    case TestResults_Result.RESULT_SKIPPED:
      return "RESULT_SKIPPED";
    case TestResults_Result.RESULT_PASSED:
      return "RESULT_PASSED";
    case TestResults_Result.RESULT_FAILED:
      return "RESULT_FAILED";
    case TestResults_Result.RESULT_ERRORED:
      return "RESULT_ERRORED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum TestResults_Result");
  }
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

export const Policy = {
  fromJSON(object: any): Policy {
    return {
      apiVersion: isSet(object.apiVersion) ? String(object.apiVersion) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      description: isSet(object.description) ? String(object.description) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
      policyType: isSet(object.resourcePolicy)
        ? { $case: "resourcePolicy", resourcePolicy: ResourcePolicy.fromJSON(object.resourcePolicy) }
        : isSet(object.principalPolicy)
        ? { $case: "principalPolicy", principalPolicy: PrincipalPolicy.fromJSON(object.principalPolicy) }
        : isSet(object.derivedRoles)
        ? { $case: "derivedRoles", derivedRoles: DerivedRoles.fromJSON(object.derivedRoles) }
        : undefined,
      variables: isObject(object.variables)
        ? Object.entries(object.variables).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Policy): unknown {
    const obj: any = {};
    message.apiVersion !== undefined && (obj.apiVersion = message.apiVersion);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    message.description !== undefined && (obj.description = message.description);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    message.policyType?.$case === "resourcePolicy" && (obj.resourcePolicy = message.policyType?.resourcePolicy
      ? ResourcePolicy.toJSON(message.policyType?.resourcePolicy)
      : undefined);
    message.policyType?.$case === "principalPolicy" && (obj.principalPolicy = message.policyType?.principalPolicy
      ? PrincipalPolicy.toJSON(message.policyType?.principalPolicy)
      : undefined);
    message.policyType?.$case === "derivedRoles" && (obj.derivedRoles = message.policyType?.derivedRoles
      ? DerivedRoles.toJSON(message.policyType?.derivedRoles)
      : undefined);
    obj.variables = {};
    if (message.variables) {
      Object.entries(message.variables).forEach(([k, v]) => {
        obj.variables[k] = v;
      });
    }
    return obj;
  },
};

export const Policy_VariablesEntry = {
  fromJSON(object: any): Policy_VariablesEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Policy_VariablesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

export const Metadata = {
  fromJSON(object: any): Metadata {
    return {
      sourceFile: isSet(object.sourceFile) ? String(object.sourceFile) : "",
      annotations: isObject(object.annotations)
        ? Object.entries(object.annotations).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      hash: isSet(object.hash) ? Number(object.hash) : undefined,
      storeIdentifer: isSet(object.storeIdentifer) ? String(object.storeIdentifer) : "",
      storeIdentifier: isSet(object.storeIdentifier) ? String(object.storeIdentifier) : "",
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.sourceFile !== undefined && (obj.sourceFile = message.sourceFile);
    obj.annotations = {};
    if (message.annotations) {
      Object.entries(message.annotations).forEach(([k, v]) => {
        obj.annotations[k] = v;
      });
    }
    message.hash !== undefined && (obj.hash = message.hash);
    message.storeIdentifer !== undefined && (obj.storeIdentifer = message.storeIdentifer);
    message.storeIdentifier !== undefined && (obj.storeIdentifier = message.storeIdentifier);
    return obj;
  },
};

export const Metadata_AnnotationsEntry = {
  fromJSON(object: any): Metadata_AnnotationsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Metadata_AnnotationsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

export const ResourcePolicy = {
  fromJSON(object: any): ResourcePolicy {
    return {
      resource: isSet(object.resource) ? String(object.resource) : "",
      version: isSet(object.version) ? String(object.version) : "",
      importDerivedRoles: Array.isArray(object?.importDerivedRoles)
        ? object.importDerivedRoles.map((e: any) => String(e))
        : [],
      rules: Array.isArray(object?.rules)
        ? object.rules.map((e: any) => ResourceRule.fromJSON(e))
        : [],
      scope: isSet(object.scope) ? String(object.scope) : "",
      schemas: isSet(object.schemas) ? Schemas.fromJSON(object.schemas) : undefined,
    };
  },

  toJSON(message: ResourcePolicy): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource);
    message.version !== undefined && (obj.version = message.version);
    if (message.importDerivedRoles) {
      obj.importDerivedRoles = message.importDerivedRoles.map((e) => e);
    } else {
      obj.importDerivedRoles = [];
    }
    if (message.rules) {
      obj.rules = message.rules.map((e) => e ? ResourceRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    message.scope !== undefined && (obj.scope = message.scope);
    message.schemas !== undefined && (obj.schemas = message.schemas ? Schemas.toJSON(message.schemas) : undefined);
    return obj;
  },
};

export const ResourceRule = {
  fromJSON(object: any): ResourceRule {
    return {
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => String(e)) : [],
      derivedRoles: Array.isArray(object?.derivedRoles) ? object.derivedRoles.map((e: any) => String(e)) : [],
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => String(e)) : [],
      condition: isSet(object.condition) ? Condition.fromJSON(object.condition) : undefined,
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ResourceRule): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    if (message.derivedRoles) {
      obj.derivedRoles = message.derivedRoles.map((e) => e);
    } else {
      obj.derivedRoles = [];
    }
    if (message.roles) {
      obj.roles = message.roles.map((e) => e);
    } else {
      obj.roles = [];
    }
    message.condition !== undefined &&
      (obj.condition = message.condition ? Condition.toJSON(message.condition) : undefined);
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
};

export const PrincipalPolicy = {
  fromJSON(object: any): PrincipalPolicy {
    return {
      principal: isSet(object.principal) ? String(object.principal) : "",
      version: isSet(object.version) ? String(object.version) : "",
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => PrincipalRule.fromJSON(e)) : [],
      scope: isSet(object.scope) ? String(object.scope) : "",
    };
  },

  toJSON(message: PrincipalPolicy): unknown {
    const obj: any = {};
    message.principal !== undefined && (obj.principal = message.principal);
    message.version !== undefined && (obj.version = message.version);
    if (message.rules) {
      obj.rules = message.rules.map((e) => e ? PrincipalRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    message.scope !== undefined && (obj.scope = message.scope);
    return obj;
  },
};

export const PrincipalRule = {
  fromJSON(object: any): PrincipalRule {
    return {
      resource: isSet(object.resource) ? String(object.resource) : "",
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => PrincipalRule_Action.fromJSON(e)) : [],
    };
  },

  toJSON(message: PrincipalRule): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? PrincipalRule_Action.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    return obj;
  },
};

export const PrincipalRule_Action = {
  fromJSON(object: any): PrincipalRule_Action {
    return {
      action: isSet(object.action) ? String(object.action) : "",
      condition: isSet(object.condition) ? Condition.fromJSON(object.condition) : undefined,
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: PrincipalRule_Action): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    message.condition !== undefined &&
      (obj.condition = message.condition ? Condition.toJSON(message.condition) : undefined);
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
};

export const DerivedRoles = {
  fromJSON(object: any): DerivedRoles {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      definitions: Array.isArray(object?.definitions) ? object.definitions.map((e: any) => RoleDef.fromJSON(e)) : [],
    };
  },

  toJSON(message: DerivedRoles): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.definitions) {
      obj.definitions = message.definitions.map((e) => e ? RoleDef.toJSON(e) : undefined);
    } else {
      obj.definitions = [];
    }
    return obj;
  },
};

export const RoleDef = {
  fromJSON(object: any): RoleDef {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parentRoles: Array.isArray(object?.parentRoles) ? object.parentRoles.map((e: any) => String(e)) : [],
      condition: isSet(object.condition) ? Condition.fromJSON(object.condition) : undefined,
    };
  },

  toJSON(message: RoleDef): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.parentRoles) {
      obj.parentRoles = message.parentRoles.map((e) => e);
    } else {
      obj.parentRoles = [];
    }
    message.condition !== undefined &&
      (obj.condition = message.condition ? Condition.toJSON(message.condition) : undefined);
    return obj;
  },
};

export const Condition = {
  fromJSON(object: any): Condition {
    return {
      condition: isSet(object.match)
        ? { $case: "match", match: Match.fromJSON(object.match) }
        : isSet(object.script)
        ? { $case: "script", script: String(object.script) }
        : undefined,
    };
  },

  toJSON(message: Condition): unknown {
    const obj: any = {};
    message.condition?.$case === "match" &&
      (obj.match = message.condition?.match ? Match.toJSON(message.condition?.match) : undefined);
    message.condition?.$case === "script" && (obj.script = message.condition?.script);
    return obj;
  },
};

export const Match = {
  fromJSON(object: any): Match {
    return {
      op: isSet(object.all)
        ? { $case: "all", all: Match_ExprList.fromJSON(object.all) }
        : isSet(object.any)
        ? { $case: "any", any: Match_ExprList.fromJSON(object.any) }
        : isSet(object.none)
        ? { $case: "none", none: Match_ExprList.fromJSON(object.none) }
        : isSet(object.expr)
        ? { $case: "expr", expr: String(object.expr) }
        : undefined,
    };
  },

  toJSON(message: Match): unknown {
    const obj: any = {};
    message.op?.$case === "all" && (obj.all = message.op?.all ? Match_ExprList.toJSON(message.op?.all) : undefined);
    message.op?.$case === "any" && (obj.any = message.op?.any ? Match_ExprList.toJSON(message.op?.any) : undefined);
    message.op?.$case === "none" && (obj.none = message.op?.none ? Match_ExprList.toJSON(message.op?.none) : undefined);
    message.op?.$case === "expr" && (obj.expr = message.op?.expr);
    return obj;
  },
};

export const Match_ExprList = {
  fromJSON(object: any): Match_ExprList {
    return { of: Array.isArray(object?.of) ? object.of.map((e: any) => Match.fromJSON(e)) : [] };
  },

  toJSON(message: Match_ExprList): unknown {
    const obj: any = {};
    if (message.of) {
      obj.of = message.of.map((e) => e ? Match.toJSON(e) : undefined);
    } else {
      obj.of = [];
    }
    return obj;
  },
};

export const Schemas = {
  fromJSON(object: any): Schemas {
    return {
      principalSchema: isSet(object.principalSchema) ? Schemas_Schema.fromJSON(object.principalSchema) : undefined,
      resourceSchema: isSet(object.resourceSchema) ? Schemas_Schema.fromJSON(object.resourceSchema) : undefined,
    };
  },

  toJSON(message: Schemas): unknown {
    const obj: any = {};
    message.principalSchema !== undefined &&
      (obj.principalSchema = message.principalSchema ? Schemas_Schema.toJSON(message.principalSchema) : undefined);
    message.resourceSchema !== undefined &&
      (obj.resourceSchema = message.resourceSchema ? Schemas_Schema.toJSON(message.resourceSchema) : undefined);
    return obj;
  },
};

export const Schemas_IgnoreWhen = {
  fromJSON(object: any): Schemas_IgnoreWhen {
    return { actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => String(e)) : [] };
  },

  toJSON(message: Schemas_IgnoreWhen): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    return obj;
  },
};

export const Schemas_Schema = {
  fromJSON(object: any): Schemas_Schema {
    return {
      ref: isSet(object.ref) ? String(object.ref) : "",
      ignoreWhen: isSet(object.ignoreWhen) ? Schemas_IgnoreWhen.fromJSON(object.ignoreWhen) : undefined,
    };
  },

  toJSON(message: Schemas_Schema): unknown {
    const obj: any = {};
    message.ref !== undefined && (obj.ref = message.ref);
    message.ignoreWhen !== undefined &&
      (obj.ignoreWhen = message.ignoreWhen ? Schemas_IgnoreWhen.toJSON(message.ignoreWhen) : undefined);
    return obj;
  },
};

export const TestFixture = {
  fromJSON(_: any): TestFixture {
    return {};
  },

  toJSON(_: TestFixture): unknown {
    const obj: any = {};
    return obj;
  },
};

export const TestFixture_Principals = {
  fromJSON(object: any): TestFixture_Principals {
    return {
      principals: isObject(object.principals)
        ? Object.entries(object.principals).reduce<{ [key: string]: Principal }>((acc, [key, value]) => {
          acc[key] = Principal.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TestFixture_Principals): unknown {
    const obj: any = {};
    obj.principals = {};
    if (message.principals) {
      Object.entries(message.principals).forEach(([k, v]) => {
        obj.principals[k] = Principal.toJSON(v);
      });
    }
    return obj;
  },
};

export const TestFixture_Principals_PrincipalsEntry = {
  fromJSON(object: any): TestFixture_Principals_PrincipalsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Principal.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TestFixture_Principals_PrincipalsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Principal.toJSON(message.value) : undefined);
    return obj;
  },
};

export const TestFixture_Resources = {
  fromJSON(object: any): TestFixture_Resources {
    return {
      resources: isObject(object.resources)
        ? Object.entries(object.resources).reduce<{ [key: string]: Resource }>((acc, [key, value]) => {
          acc[key] = Resource.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TestFixture_Resources): unknown {
    const obj: any = {};
    obj.resources = {};
    if (message.resources) {
      Object.entries(message.resources).forEach(([k, v]) => {
        obj.resources[k] = Resource.toJSON(v);
      });
    }
    return obj;
  },
};

export const TestFixture_Resources_ResourcesEntry = {
  fromJSON(object: any): TestFixture_Resources_ResourcesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Resource.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TestFixture_Resources_ResourcesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Resource.toJSON(message.value) : undefined);
    return obj;
  },
};

export const TestFixture_AuxData = {
  fromJSON(object: any): TestFixture_AuxData {
    return {
      auxData: isObject(object.auxData)
        ? Object.entries(object.auxData).reduce<{ [key: string]: AuxData }>((acc, [key, value]) => {
          acc[key] = AuxData.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TestFixture_AuxData): unknown {
    const obj: any = {};
    obj.auxData = {};
    if (message.auxData) {
      Object.entries(message.auxData).forEach(([k, v]) => {
        obj.auxData[k] = AuxData.toJSON(v);
      });
    }
    return obj;
  },
};

export const TestFixture_AuxData_AuxDataEntry = {
  fromJSON(object: any): TestFixture_AuxData_AuxDataEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? AuxData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TestFixture_AuxData_AuxDataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? AuxData.toJSON(message.value) : undefined);
    return obj;
  },
};

export const TestOptions = {
  fromJSON(object: any): TestOptions {
    return { now: isSet(object.now) ? fromJsonTimestamp(object.now) : undefined };
  },

  toJSON(message: TestOptions): unknown {
    const obj: any = {};
    message.now !== undefined && (obj.now = message.now.toISOString());
    return obj;
  },
};

export const TestSuite = {
  fromJSON(object: any): TestSuite {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      skip: isSet(object.skip) ? Boolean(object.skip) : false,
      skipReason: isSet(object.skipReason) ? String(object.skipReason) : "",
      tests: Array.isArray(object?.tests) ? object.tests.map((e: any) => TestTable.fromJSON(e)) : [],
      principals: isObject(object.principals)
        ? Object.entries(object.principals).reduce<{ [key: string]: Principal }>((acc, [key, value]) => {
          acc[key] = Principal.fromJSON(value);
          return acc;
        }, {})
        : {},
      resources: isObject(object.resources)
        ? Object.entries(object.resources).reduce<{ [key: string]: Resource }>((acc, [key, value]) => {
          acc[key] = Resource.fromJSON(value);
          return acc;
        }, {})
        : {},
      auxData: isObject(object.auxData)
        ? Object.entries(object.auxData).reduce<{ [key: string]: AuxData }>((acc, [key, value]) => {
          acc[key] = AuxData.fromJSON(value);
          return acc;
        }, {})
        : {},
      options: isSet(object.options) ? TestOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: TestSuite): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.skip !== undefined && (obj.skip = message.skip);
    message.skipReason !== undefined && (obj.skipReason = message.skipReason);
    if (message.tests) {
      obj.tests = message.tests.map((e) => e ? TestTable.toJSON(e) : undefined);
    } else {
      obj.tests = [];
    }
    obj.principals = {};
    if (message.principals) {
      Object.entries(message.principals).forEach(([k, v]) => {
        obj.principals[k] = Principal.toJSON(v);
      });
    }
    obj.resources = {};
    if (message.resources) {
      Object.entries(message.resources).forEach(([k, v]) => {
        obj.resources[k] = Resource.toJSON(v);
      });
    }
    obj.auxData = {};
    if (message.auxData) {
      Object.entries(message.auxData).forEach(([k, v]) => {
        obj.auxData[k] = AuxData.toJSON(v);
      });
    }
    message.options !== undefined && (obj.options = message.options ? TestOptions.toJSON(message.options) : undefined);
    return obj;
  },
};

export const TestSuite_PrincipalsEntry = {
  fromJSON(object: any): TestSuite_PrincipalsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Principal.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TestSuite_PrincipalsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Principal.toJSON(message.value) : undefined);
    return obj;
  },
};

export const TestSuite_ResourcesEntry = {
  fromJSON(object: any): TestSuite_ResourcesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Resource.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TestSuite_ResourcesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Resource.toJSON(message.value) : undefined);
    return obj;
  },
};

export const TestSuite_AuxDataEntry = {
  fromJSON(object: any): TestSuite_AuxDataEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? AuxData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TestSuite_AuxDataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? AuxData.toJSON(message.value) : undefined);
    return obj;
  },
};

export const TestTable = {
  fromJSON(object: any): TestTable {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      skip: isSet(object.skip) ? Boolean(object.skip) : false,
      skipReason: isSet(object.skipReason) ? String(object.skipReason) : "",
      input: isSet(object.input) ? TestTable_Input.fromJSON(object.input) : undefined,
      expected: Array.isArray(object?.expected)
        ? object.expected.map((e: any) => TestTable_Expectation.fromJSON(e))
        : [],
      options: isSet(object.options) ? TestOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: TestTable): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.skip !== undefined && (obj.skip = message.skip);
    message.skipReason !== undefined && (obj.skipReason = message.skipReason);
    message.input !== undefined && (obj.input = message.input ? TestTable_Input.toJSON(message.input) : undefined);
    if (message.expected) {
      obj.expected = message.expected.map((e) => e ? TestTable_Expectation.toJSON(e) : undefined);
    } else {
      obj.expected = [];
    }
    message.options !== undefined && (obj.options = message.options ? TestOptions.toJSON(message.options) : undefined);
    return obj;
  },
};

export const TestTable_Input = {
  fromJSON(object: any): TestTable_Input {
    return {
      principals: Array.isArray(object?.principals) ? object.principals.map((e: any) => String(e)) : [],
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => String(e)) : [],
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => String(e)) : [],
      auxData: isSet(object.auxData) ? String(object.auxData) : "",
    };
  },

  toJSON(message: TestTable_Input): unknown {
    const obj: any = {};
    if (message.principals) {
      obj.principals = message.principals.map((e) => e);
    } else {
      obj.principals = [];
    }
    if (message.resources) {
      obj.resources = message.resources.map((e) => e);
    } else {
      obj.resources = [];
    }
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    message.auxData !== undefined && (obj.auxData = message.auxData);
    return obj;
  },
};

export const TestTable_Expectation = {
  fromJSON(object: any): TestTable_Expectation {
    return {
      principal: isSet(object.principal) ? String(object.principal) : "",
      resource: isSet(object.resource) ? String(object.resource) : "",
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{ [key: string]: Effect }>((acc, [key, value]) => {
          acc[key] = effectFromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TestTable_Expectation): unknown {
    const obj: any = {};
    message.principal !== undefined && (obj.principal = message.principal);
    message.resource !== undefined && (obj.resource = message.resource);
    obj.actions = {};
    if (message.actions) {
      Object.entries(message.actions).forEach(([k, v]) => {
        obj.actions[k] = effectToJSON(v);
      });
    }
    return obj;
  },
};

export const TestTable_Expectation_ActionsEntry = {
  fromJSON(object: any): TestTable_Expectation_ActionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? effectFromJSON(object.value) : 0,
    };
  },

  toJSON(message: TestTable_Expectation_ActionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = effectToJSON(message.value));
    return obj;
  },
};

export const Test = {
  fromJSON(object: any): Test {
    return {
      name: isSet(object.name) ? Test_TestName.fromJSON(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : "",
      skip: isSet(object.skip) ? Boolean(object.skip) : false,
      skipReason: isSet(object.skipReason) ? String(object.skipReason) : "",
      input: isSet(object.input) ? CheckInput.fromJSON(object.input) : undefined,
      expected: isObject(object.expected)
        ? Object.entries(object.expected).reduce<{ [key: string]: Effect }>((acc, [key, value]) => {
          acc[key] = effectFromJSON(value);
          return acc;
        }, {})
        : {},
      options: isSet(object.options) ? TestOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: Test): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name ? Test_TestName.toJSON(message.name) : undefined);
    message.description !== undefined && (obj.description = message.description);
    message.skip !== undefined && (obj.skip = message.skip);
    message.skipReason !== undefined && (obj.skipReason = message.skipReason);
    message.input !== undefined && (obj.input = message.input ? CheckInput.toJSON(message.input) : undefined);
    obj.expected = {};
    if (message.expected) {
      Object.entries(message.expected).forEach(([k, v]) => {
        obj.expected[k] = effectToJSON(v);
      });
    }
    message.options !== undefined && (obj.options = message.options ? TestOptions.toJSON(message.options) : undefined);
    return obj;
  },
};

export const Test_TestName = {
  fromJSON(object: any): Test_TestName {
    return {
      testTableName: isSet(object.testTableName) ? String(object.testTableName) : "",
      principalKey: isSet(object.principalKey) ? String(object.principalKey) : "",
      resourceKey: isSet(object.resourceKey) ? String(object.resourceKey) : "",
    };
  },

  toJSON(message: Test_TestName): unknown {
    const obj: any = {};
    message.testTableName !== undefined && (obj.testTableName = message.testTableName);
    message.principalKey !== undefined && (obj.principalKey = message.principalKey);
    message.resourceKey !== undefined && (obj.resourceKey = message.resourceKey);
    return obj;
  },
};

export const Test_ExpectedEntry = {
  fromJSON(object: any): Test_ExpectedEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? effectFromJSON(object.value) : 0,
    };
  },

  toJSON(message: Test_ExpectedEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = effectToJSON(message.value));
    return obj;
  },
};

export const TestResults = {
  fromJSON(object: any): TestResults {
    return {
      suites: Array.isArray(object?.suites) ? object.suites.map((e: any) => TestResults_Suite.fromJSON(e)) : [],
      summary: isSet(object.summary) ? TestResults_Summary.fromJSON(object.summary) : undefined,
    };
  },

  toJSON(message: TestResults): unknown {
    const obj: any = {};
    if (message.suites) {
      obj.suites = message.suites.map((e) => e ? TestResults_Suite.toJSON(e) : undefined);
    } else {
      obj.suites = [];
    }
    message.summary !== undefined &&
      (obj.summary = message.summary ? TestResults_Summary.toJSON(message.summary) : undefined);
    return obj;
  },
};

export const TestResults_Tally = {
  fromJSON(object: any): TestResults_Tally {
    return {
      result: isSet(object.result) ? testResults_ResultFromJSON(object.result) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: TestResults_Tally): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = testResults_ResultToJSON(message.result));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },
};

export const TestResults_Summary = {
  fromJSON(object: any): TestResults_Summary {
    return {
      overallResult: isSet(object.overallResult) ? testResults_ResultFromJSON(object.overallResult) : 0,
      testsCount: isSet(object.testsCount) ? Number(object.testsCount) : 0,
      resultCounts: Array.isArray(object?.resultCounts)
        ? object.resultCounts.map((e: any) => TestResults_Tally.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TestResults_Summary): unknown {
    const obj: any = {};
    message.overallResult !== undefined && (obj.overallResult = testResults_ResultToJSON(message.overallResult));
    message.testsCount !== undefined && (obj.testsCount = Math.round(message.testsCount));
    if (message.resultCounts) {
      obj.resultCounts = message.resultCounts.map((e) => e ? TestResults_Tally.toJSON(e) : undefined);
    } else {
      obj.resultCounts = [];
    }
    return obj;
  },
};

export const TestResults_Suite = {
  fromJSON(object: any): TestResults_Suite {
    return {
      file: isSet(object.file) ? String(object.file) : "",
      name: isSet(object.name) ? String(object.name) : "",
      principals: Array.isArray(object?.principals)
        ? object.principals.map((e: any) => TestResults_Principal.fromJSON(e))
        : [],
      summary: isSet(object.summary) ? TestResults_Summary.fromJSON(object.summary) : undefined,
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: TestResults_Suite): unknown {
    const obj: any = {};
    message.file !== undefined && (obj.file = message.file);
    message.name !== undefined && (obj.name = message.name);
    if (message.principals) {
      obj.principals = message.principals.map((e) => e ? TestResults_Principal.toJSON(e) : undefined);
    } else {
      obj.principals = [];
    }
    message.summary !== undefined &&
      (obj.summary = message.summary ? TestResults_Summary.toJSON(message.summary) : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
};

export const TestResults_Principal = {
  fromJSON(object: any): TestResults_Principal {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      resources: Array.isArray(object?.resources)
        ? object.resources.map((e: any) => TestResults_Resource.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TestResults_Principal): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.resources) {
      obj.resources = message.resources.map((e) => e ? TestResults_Resource.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }
    return obj;
  },
};

export const TestResults_Resource = {
  fromJSON(object: any): TestResults_Resource {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => TestResults_Action.fromJSON(e)) : [],
    };
  },

  toJSON(message: TestResults_Resource): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? TestResults_Action.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    return obj;
  },
};

export const TestResults_Action = {
  fromJSON(object: any): TestResults_Action {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      details: isSet(object.details) ? TestResults_Details.fromJSON(object.details) : undefined,
    };
  },

  toJSON(message: TestResults_Action): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.details !== undefined &&
      (obj.details = message.details ? TestResults_Details.toJSON(message.details) : undefined);
    return obj;
  },
};

export const TestResults_Details = {
  fromJSON(object: any): TestResults_Details {
    return {
      result: isSet(object.result) ? testResults_ResultFromJSON(object.result) : 0,
      outcome: isSet(object.failure)
        ? { $case: "failure", failure: TestResults_Failure.fromJSON(object.failure) }
        : isSet(object.error)
        ? { $case: "error", error: String(object.error) }
        : undefined,
      engineTrace: Array.isArray(object?.engineTrace)
        ? object.engineTrace.map((e: any) => Trace.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TestResults_Details): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = testResults_ResultToJSON(message.result));
    message.outcome?.$case === "failure" &&
      (obj.failure = message.outcome?.failure ? TestResults_Failure.toJSON(message.outcome?.failure) : undefined);
    message.outcome?.$case === "error" && (obj.error = message.outcome?.error);
    if (message.engineTrace) {
      obj.engineTrace = message.engineTrace.map((e) => e ? Trace.toJSON(e) : undefined);
    } else {
      obj.engineTrace = [];
    }
    return obj;
  },
};

export const TestResults_Failure = {
  fromJSON(object: any): TestResults_Failure {
    return {
      expected: isSet(object.expected) ? effectFromJSON(object.expected) : 0,
      actual: isSet(object.actual) ? effectFromJSON(object.actual) : 0,
    };
  },

  toJSON(message: TestResults_Failure): unknown {
    const obj: any = {};
    message.expected !== undefined && (obj.expected = effectToJSON(message.expected));
    message.actual !== undefined && (obj.actual = effectToJSON(message.actual));
    return obj;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
