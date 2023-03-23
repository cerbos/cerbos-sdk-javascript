/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { UInt64Value } from "../../../google/protobuf/wrappers";
import { Effect } from "../../effect/v1/effect";
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
    | string
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
  /** @deprecated */
  principals: TestResults_Principal[];
  summary: TestResults_Summary | undefined;
  error: string;
  testCases: TestResults_TestCase[];
}

export interface TestResults_TestCase {
  name: string;
  principals: TestResults_Principal[];
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

function createBasePolicy(): Policy {
  return {
    apiVersion: "",
    disabled: false,
    description: "",
    metadata: undefined,
    policyType: undefined,
    variables: {},
  };
}

export const Policy = {
  encode(message: Policy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiVersion !== "") {
      writer.uint32(10).string(message.apiVersion);
    }
    if (message.disabled === true) {
      writer.uint32(16).bool(message.disabled);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }
    switch (message.policyType?.$case) {
      case "resourcePolicy":
        ResourcePolicy.encode(message.policyType.resourcePolicy, writer.uint32(42).fork()).ldelim();
        break;
      case "principalPolicy":
        PrincipalPolicy.encode(message.policyType.principalPolicy, writer.uint32(50).fork()).ldelim();
        break;
      case "derivedRoles":
        DerivedRoles.encode(message.policyType.derivedRoles, writer.uint32(58).fork()).ldelim();
        break;
    }
    Object.entries(message.variables).forEach(([key, value]) => {
      Policy_VariablesEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Policy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.apiVersion = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.disabled = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.policyType = {
            $case: "resourcePolicy",
            resourcePolicy: ResourcePolicy.decode(reader, reader.uint32()),
          };
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.policyType = {
            $case: "principalPolicy",
            principalPolicy: PrincipalPolicy.decode(reader, reader.uint32()),
          };
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.policyType = { $case: "derivedRoles", derivedRoles: DerivedRoles.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          const entry8 = Policy_VariablesEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.variables[entry8.key] = entry8.value;
          }
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBasePolicy_VariablesEntry(): Policy_VariablesEntry {
  return { key: "", value: "" };
}

export const Policy_VariablesEntry = {
  encode(message: Policy_VariablesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Policy_VariablesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy_VariablesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseMetadata(): Metadata {
  return { sourceFile: "", annotations: {}, hash: undefined, storeIdentifer: "", storeIdentifier: "" };
}

export const Metadata = {
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceFile !== "") {
      writer.uint32(10).string(message.sourceFile);
    }
    Object.entries(message.annotations).forEach(([key, value]) => {
      Metadata_AnnotationsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.hash !== undefined) {
      UInt64Value.encode({ value: message.hash! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.storeIdentifer !== "") {
      writer.uint32(34).string(message.storeIdentifer);
    }
    if (message.storeIdentifier !== "") {
      writer.uint32(42).string(message.storeIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.sourceFile = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          const entry2 = Metadata_AnnotationsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.annotations[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.hash = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.storeIdentifer = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.storeIdentifier = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseMetadata_AnnotationsEntry(): Metadata_AnnotationsEntry {
  return { key: "", value: "" };
}

export const Metadata_AnnotationsEntry = {
  encode(message: Metadata_AnnotationsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata_AnnotationsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata_AnnotationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseResourcePolicy(): ResourcePolicy {
  return { resource: "", version: "", importDerivedRoles: [], rules: [], scope: "", schemas: undefined };
}

export const ResourcePolicy = {
  encode(message: ResourcePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== "") {
      writer.uint32(10).string(message.resource);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    for (const v of message.importDerivedRoles) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.rules) {
      ResourceRule.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.scope !== "") {
      writer.uint32(42).string(message.scope);
    }
    if (message.schemas !== undefined) {
      Schemas.encode(message.schemas, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourcePolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourcePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.resource = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.version = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.importDerivedRoles.push(reader.string());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.rules.push(ResourceRule.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.scope = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.schemas = Schemas.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseResourceRule(): ResourceRule {
  return { actions: [], derivedRoles: [], roles: [], condition: undefined, effect: 0, name: "" };
}

export const ResourceRule = {
  encode(message: ResourceRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actions) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.derivedRoles) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.roles) {
      writer.uint32(26).string(v!);
    }
    if (message.condition !== undefined) {
      Condition.encode(message.condition, writer.uint32(34).fork()).ldelim();
    }
    if (message.effect !== 0) {
      writer.uint32(40).int32(message.effect);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.actions.push(reader.string());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.derivedRoles.push(reader.string());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.roles.push(reader.string());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.condition = Condition.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.effect = reader.int32() as any;
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBasePrincipalPolicy(): PrincipalPolicy {
  return { principal: "", version: "", rules: [], scope: "" };
}

export const PrincipalPolicy = {
  encode(message: PrincipalPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.principal !== "") {
      writer.uint32(10).string(message.principal);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    for (const v of message.rules) {
      PrincipalRule.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.scope !== "") {
      writer.uint32(34).string(message.scope);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrincipalPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.principal = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.version = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.rules.push(PrincipalRule.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.scope = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBasePrincipalRule(): PrincipalRule {
  return { resource: "", actions: [] };
}

export const PrincipalRule = {
  encode(message: PrincipalRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== "") {
      writer.uint32(10).string(message.resource);
    }
    for (const v of message.actions) {
      PrincipalRule_Action.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrincipalRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.resource = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.actions.push(PrincipalRule_Action.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBasePrincipalRule_Action(): PrincipalRule_Action {
  return { action: "", condition: undefined, effect: 0, name: "" };
}

export const PrincipalRule_Action = {
  encode(message: PrincipalRule_Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== "") {
      writer.uint32(10).string(message.action);
    }
    if (message.condition !== undefined) {
      Condition.encode(message.condition, writer.uint32(18).fork()).ldelim();
    }
    if (message.effect !== 0) {
      writer.uint32(24).int32(message.effect);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrincipalRule_Action {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalRule_Action();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.action = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.condition = Condition.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.effect = reader.int32() as any;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseDerivedRoles(): DerivedRoles {
  return { name: "", definitions: [] };
}

export const DerivedRoles = {
  encode(message: DerivedRoles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.definitions) {
      RoleDef.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DerivedRoles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivedRoles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.definitions.push(RoleDef.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseRoleDef(): RoleDef {
  return { name: "", parentRoles: [], condition: undefined };
}

export const RoleDef = {
  encode(message: RoleDef, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.parentRoles) {
      writer.uint32(18).string(v!);
    }
    if (message.condition !== undefined) {
      Condition.encode(message.condition, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleDef {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleDef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.parentRoles.push(reader.string());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.condition = Condition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCondition(): Condition {
  return { condition: undefined };
}

export const Condition = {
  encode(message: Condition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.condition?.$case) {
      case "match":
        Match.encode(message.condition.match, writer.uint32(10).fork()).ldelim();
        break;
      case "script":
        writer.uint32(18).string(message.condition.script);
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Condition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.condition = { $case: "match", match: Match.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.condition = { $case: "script", script: reader.string() };
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseMatch(): Match {
  return { op: undefined };
}

export const Match = {
  encode(message: Match, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.op?.$case) {
      case "all":
        Match_ExprList.encode(message.op.all, writer.uint32(10).fork()).ldelim();
        break;
      case "any":
        Match_ExprList.encode(message.op.any, writer.uint32(18).fork()).ldelim();
        break;
      case "none":
        Match_ExprList.encode(message.op.none, writer.uint32(26).fork()).ldelim();
        break;
      case "expr":
        writer.uint32(34).string(message.op.expr);
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Match {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.op = { $case: "all", all: Match_ExprList.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.op = { $case: "any", any: Match_ExprList.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.op = { $case: "none", none: Match_ExprList.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.op = { $case: "expr", expr: reader.string() };
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseMatch_ExprList(): Match_ExprList {
  return { of: [] };
}

export const Match_ExprList = {
  encode(message: Match_ExprList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.of) {
      Match.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Match_ExprList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatch_ExprList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.of.push(Match.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseSchemas(): Schemas {
  return { principalSchema: undefined, resourceSchema: undefined };
}

export const Schemas = {
  encode(message: Schemas, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.principalSchema !== undefined) {
      Schemas_Schema.encode(message.principalSchema, writer.uint32(10).fork()).ldelim();
    }
    if (message.resourceSchema !== undefined) {
      Schemas_Schema.encode(message.resourceSchema, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schemas {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.principalSchema = Schemas_Schema.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.resourceSchema = Schemas_Schema.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseSchemas_IgnoreWhen(): Schemas_IgnoreWhen {
  return { actions: [] };
}

export const Schemas_IgnoreWhen = {
  encode(message: Schemas_IgnoreWhen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actions) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schemas_IgnoreWhen {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemas_IgnoreWhen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.actions.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseSchemas_Schema(): Schemas_Schema {
  return { ref: "", ignoreWhen: undefined };
}

export const Schemas_Schema = {
  encode(message: Schemas_Schema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ref !== "") {
      writer.uint32(10).string(message.ref);
    }
    if (message.ignoreWhen !== undefined) {
      Schemas_IgnoreWhen.encode(message.ignoreWhen, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schemas_Schema {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemas_Schema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ref = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ignoreWhen = Schemas_IgnoreWhen.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestFixture(): TestFixture {
  return {};
}

export const TestFixture = {
  encode(_: TestFixture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestFixture {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestFixture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestFixture_Principals(): TestFixture_Principals {
  return { principals: {} };
}

export const TestFixture_Principals = {
  encode(message: TestFixture_Principals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.principals).forEach(([key, value]) => {
      TestFixture_Principals_PrincipalsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestFixture_Principals {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestFixture_Principals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          const entry1 = TestFixture_Principals_PrincipalsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.principals[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestFixture_Principals_PrincipalsEntry(): TestFixture_Principals_PrincipalsEntry {
  return { key: "", value: undefined };
}

export const TestFixture_Principals_PrincipalsEntry = {
  encode(message: TestFixture_Principals_PrincipalsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Principal.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestFixture_Principals_PrincipalsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestFixture_Principals_PrincipalsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = Principal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestFixture_Resources(): TestFixture_Resources {
  return { resources: {} };
}

export const TestFixture_Resources = {
  encode(message: TestFixture_Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.resources).forEach(([key, value]) => {
      TestFixture_Resources_ResourcesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestFixture_Resources {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestFixture_Resources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          const entry1 = TestFixture_Resources_ResourcesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.resources[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestFixture_Resources_ResourcesEntry(): TestFixture_Resources_ResourcesEntry {
  return { key: "", value: undefined };
}

export const TestFixture_Resources_ResourcesEntry = {
  encode(message: TestFixture_Resources_ResourcesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Resource.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestFixture_Resources_ResourcesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestFixture_Resources_ResourcesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = Resource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestFixture_AuxData(): TestFixture_AuxData {
  return { auxData: {} };
}

export const TestFixture_AuxData = {
  encode(message: TestFixture_AuxData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.auxData).forEach(([key, value]) => {
      TestFixture_AuxData_AuxDataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestFixture_AuxData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestFixture_AuxData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          const entry1 = TestFixture_AuxData_AuxDataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.auxData[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestFixture_AuxData_AuxDataEntry(): TestFixture_AuxData_AuxDataEntry {
  return { key: "", value: undefined };
}

export const TestFixture_AuxData_AuxDataEntry = {
  encode(message: TestFixture_AuxData_AuxDataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      AuxData.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestFixture_AuxData_AuxDataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestFixture_AuxData_AuxDataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = AuxData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestOptions(): TestOptions {
  return { now: undefined };
}

export const TestOptions = {
  encode(message: TestOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.now !== undefined) {
      Timestamp.encode(toTimestamp(message.now), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.now = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestSuite(): TestSuite {
  return {
    name: "",
    description: "",
    skip: false,
    skipReason: "",
    tests: [],
    principals: {},
    resources: {},
    auxData: {},
    options: undefined,
  };
}

export const TestSuite = {
  encode(message: TestSuite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.skip === true) {
      writer.uint32(24).bool(message.skip);
    }
    if (message.skipReason !== "") {
      writer.uint32(34).string(message.skipReason);
    }
    for (const v of message.tests) {
      TestTable.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    Object.entries(message.principals).forEach(([key, value]) => {
      TestSuite_PrincipalsEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    Object.entries(message.resources).forEach(([key, value]) => {
      TestSuite_ResourcesEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    Object.entries(message.auxData).forEach(([key, value]) => {
      TestSuite_AuxDataEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
    if (message.options !== undefined) {
      TestOptions.encode(message.options, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestSuite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestSuite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.skip = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.skipReason = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.tests.push(TestTable.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          const entry6 = TestSuite_PrincipalsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.principals[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          const entry7 = TestSuite_ResourcesEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.resources[entry7.key] = entry7.value;
          }
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          const entry8 = TestSuite_AuxDataEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.auxData[entry8.key] = entry8.value;
          }
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.options = TestOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestSuite_PrincipalsEntry(): TestSuite_PrincipalsEntry {
  return { key: "", value: undefined };
}

export const TestSuite_PrincipalsEntry = {
  encode(message: TestSuite_PrincipalsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Principal.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestSuite_PrincipalsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestSuite_PrincipalsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = Principal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestSuite_ResourcesEntry(): TestSuite_ResourcesEntry {
  return { key: "", value: undefined };
}

export const TestSuite_ResourcesEntry = {
  encode(message: TestSuite_ResourcesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Resource.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestSuite_ResourcesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestSuite_ResourcesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = Resource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestSuite_AuxDataEntry(): TestSuite_AuxDataEntry {
  return { key: "", value: undefined };
}

export const TestSuite_AuxDataEntry = {
  encode(message: TestSuite_AuxDataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      AuxData.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestSuite_AuxDataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestSuite_AuxDataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = AuxData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestTable(): TestTable {
  return { name: "", description: "", skip: false, skipReason: "", input: undefined, expected: [], options: undefined };
}

export const TestTable = {
  encode(message: TestTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.skip === true) {
      writer.uint32(24).bool(message.skip);
    }
    if (message.skipReason !== "") {
      writer.uint32(34).string(message.skipReason);
    }
    if (message.input !== undefined) {
      TestTable_Input.encode(message.input, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.expected) {
      TestTable_Expectation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.options !== undefined) {
      TestOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.skip = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.skipReason = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.input = TestTable_Input.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.expected.push(TestTable_Expectation.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.options = TestOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestTable_Input(): TestTable_Input {
  return { principals: [], resources: [], actions: [], auxData: "" };
}

export const TestTable_Input = {
  encode(message: TestTable_Input, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.principals) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.resources) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.actions) {
      writer.uint32(26).string(v!);
    }
    if (message.auxData !== "") {
      writer.uint32(34).string(message.auxData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestTable_Input {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestTable_Input();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.principals.push(reader.string());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.resources.push(reader.string());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.actions.push(reader.string());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.auxData = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestTable_Expectation(): TestTable_Expectation {
  return { principal: "", resource: "", actions: {} };
}

export const TestTable_Expectation = {
  encode(message: TestTable_Expectation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.principal !== "") {
      writer.uint32(10).string(message.principal);
    }
    if (message.resource !== "") {
      writer.uint32(18).string(message.resource);
    }
    Object.entries(message.actions).forEach(([key, value]) => {
      TestTable_Expectation_ActionsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestTable_Expectation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestTable_Expectation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.principal = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.resource = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          const entry3 = TestTable_Expectation_ActionsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.actions[entry3.key] = entry3.value;
          }
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestTable_Expectation_ActionsEntry(): TestTable_Expectation_ActionsEntry {
  return { key: "", value: 0 };
}

export const TestTable_Expectation_ActionsEntry = {
  encode(message: TestTable_Expectation_ActionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestTable_Expectation_ActionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestTable_Expectation_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTest(): Test {
  return {
    name: undefined,
    description: "",
    skip: false,
    skipReason: "",
    input: undefined,
    expected: {},
    options: undefined,
  };
}

export const Test = {
  encode(message: Test, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      Test_TestName.encode(message.name, writer.uint32(10).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.skip === true) {
      writer.uint32(24).bool(message.skip);
    }
    if (message.skipReason !== "") {
      writer.uint32(34).string(message.skipReason);
    }
    if (message.input !== undefined) {
      CheckInput.encode(message.input, writer.uint32(42).fork()).ldelim();
    }
    Object.entries(message.expected).forEach(([key, value]) => {
      Test_ExpectedEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.options !== undefined) {
      TestOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Test {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = Test_TestName.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.skip = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.skipReason = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.input = CheckInput.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          const entry6 = Test_ExpectedEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.expected[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.options = TestOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTest_TestName(): Test_TestName {
  return { testTableName: "", principalKey: "", resourceKey: "" };
}

export const Test_TestName = {
  encode(message: Test_TestName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.testTableName !== "") {
      writer.uint32(10).string(message.testTableName);
    }
    if (message.principalKey !== "") {
      writer.uint32(18).string(message.principalKey);
    }
    if (message.resourceKey !== "") {
      writer.uint32(26).string(message.resourceKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Test_TestName {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTest_TestName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.testTableName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.principalKey = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.resourceKey = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTest_ExpectedEntry(): Test_ExpectedEntry {
  return { key: "", value: 0 };
}

export const Test_ExpectedEntry = {
  encode(message: Test_ExpectedEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Test_ExpectedEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTest_ExpectedEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestResults(): TestResults {
  return { suites: [], summary: undefined };
}

export const TestResults = {
  encode(message: TestResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.suites) {
      TestResults_Suite.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.summary !== undefined) {
      TestResults_Summary.encode(message.summary, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestResults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.suites.push(TestResults_Suite.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.summary = TestResults_Summary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestResults_Tally(): TestResults_Tally {
  return { result: 0, count: 0 };
}

export const TestResults_Tally = {
  encode(message: TestResults_Tally, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestResults_Tally {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestResults_Tally();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.count = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestResults_Summary(): TestResults_Summary {
  return { overallResult: 0, testsCount: 0, resultCounts: [] };
}

export const TestResults_Summary = {
  encode(message: TestResults_Summary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.overallResult !== 0) {
      writer.uint32(8).int32(message.overallResult);
    }
    if (message.testsCount !== 0) {
      writer.uint32(16).uint32(message.testsCount);
    }
    for (const v of message.resultCounts) {
      TestResults_Tally.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestResults_Summary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestResults_Summary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.overallResult = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.testsCount = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.resultCounts.push(TestResults_Tally.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestResults_Suite(): TestResults_Suite {
  return { file: "", name: "", principals: [], summary: undefined, error: "", testCases: [] };
}

export const TestResults_Suite = {
  encode(message: TestResults_Suite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.principals) {
      TestResults_Principal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.summary !== undefined) {
      TestResults_Summary.encode(message.summary, writer.uint32(34).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    for (const v of message.testCases) {
      TestResults_TestCase.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestResults_Suite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestResults_Suite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.file = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.principals.push(TestResults_Principal.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.summary = TestResults_Summary.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.error = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.testCases.push(TestResults_TestCase.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestResults_TestCase(): TestResults_TestCase {
  return { name: "", principals: [] };
}

export const TestResults_TestCase = {
  encode(message: TestResults_TestCase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.principals) {
      TestResults_Principal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestResults_TestCase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestResults_TestCase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.principals.push(TestResults_Principal.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestResults_Principal(): TestResults_Principal {
  return { name: "", resources: [] };
}

export const TestResults_Principal = {
  encode(message: TestResults_Principal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.resources) {
      TestResults_Resource.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestResults_Principal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestResults_Principal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.resources.push(TestResults_Resource.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestResults_Resource(): TestResults_Resource {
  return { name: "", actions: [] };
}

export const TestResults_Resource = {
  encode(message: TestResults_Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.actions) {
      TestResults_Action.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestResults_Resource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestResults_Resource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.actions.push(TestResults_Action.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestResults_Action(): TestResults_Action {
  return { name: "", details: undefined };
}

export const TestResults_Action = {
  encode(message: TestResults_Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.details !== undefined) {
      TestResults_Details.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestResults_Action {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestResults_Action();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.details = TestResults_Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestResults_Details(): TestResults_Details {
  return { result: 0, outcome: undefined, engineTrace: [] };
}

export const TestResults_Details = {
  encode(message: TestResults_Details, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    switch (message.outcome?.$case) {
      case "failure":
        TestResults_Failure.encode(message.outcome.failure, writer.uint32(18).fork()).ldelim();
        break;
      case "error":
        writer.uint32(26).string(message.outcome.error);
        break;
    }
    for (const v of message.engineTrace) {
      Trace.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestResults_Details {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestResults_Details();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.outcome = { $case: "failure", failure: TestResults_Failure.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.outcome = { $case: "error", error: reader.string() };
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.engineTrace.push(Trace.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTestResults_Failure(): TestResults_Failure {
  return { expected: 0, actual: 0 };
}

export const TestResults_Failure = {
  encode(message: TestResults_Failure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expected !== 0) {
      writer.uint32(8).int32(message.expected);
    }
    if (message.actual !== 0) {
      writer.uint32(16).int32(message.actual);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestResults_Failure {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestResults_Failure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.expected = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.actual = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = Number(t.seconds) * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}
