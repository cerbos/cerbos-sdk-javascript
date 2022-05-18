// package: cerbos.policy.v1
// file: cerbos/policy/v1/policy.proto

import * as jspb from "google-protobuf";
import * as cerbos_effect_v1_effect_pb from "../../../cerbos/effect/v1/effect_pb";
import * as cerbos_engine_v1_engine_pb from "../../../cerbos/engine/v1/engine_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class Policy extends jspb.Message {
  getApiVersion(): string;
  setApiVersion(value: string): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): void;

  hasResourcePolicy(): boolean;
  clearResourcePolicy(): void;
  getResourcePolicy(): ResourcePolicy | undefined;
  setResourcePolicy(value?: ResourcePolicy): void;

  hasPrincipalPolicy(): boolean;
  clearPrincipalPolicy(): void;
  getPrincipalPolicy(): PrincipalPolicy | undefined;
  setPrincipalPolicy(value?: PrincipalPolicy): void;

  hasDerivedRoles(): boolean;
  clearDerivedRoles(): void;
  getDerivedRoles(): DerivedRoles | undefined;
  setDerivedRoles(value?: DerivedRoles): void;

  getVariablesMap(): jspb.Map<string, string>;
  clearVariablesMap(): void;
  getPolicyTypeCase(): Policy.PolicyTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Policy.AsObject;
  static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Policy;
  static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
}

export namespace Policy {
  export type AsObject = {
    apiVersion: string,
    disabled: boolean,
    description: string,
    metadata?: Metadata.AsObject,
    resourcePolicy?: ResourcePolicy.AsObject,
    principalPolicy?: PrincipalPolicy.AsObject,
    derivedRoles?: DerivedRoles.AsObject,
    variablesMap: Array<[string, string]>,
  }

  export enum PolicyTypeCase {
    POLICY_TYPE_NOT_SET = 0,
    RESOURCE_POLICY = 5,
    PRINCIPAL_POLICY = 6,
    DERIVED_ROLES = 7,
  }
}

export class Metadata extends jspb.Message {
  getSourceFile(): string;
  setSourceFile(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;
  hasHash(): boolean;
  clearHash(): void;
  getHash(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setHash(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  getStoreIdentifer(): string;
  setStoreIdentifer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    sourceFile: string,
    annotationsMap: Array<[string, string]>,
    hash?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    storeIdentifer: string,
  }
}

export class ResourcePolicy extends jspb.Message {
  getResource(): string;
  setResource(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  clearImportDerivedRolesList(): void;
  getImportDerivedRolesList(): Array<string>;
  setImportDerivedRolesList(value: Array<string>): void;
  addImportDerivedRoles(value: string, index?: number): string;

  clearRulesList(): void;
  getRulesList(): Array<ResourceRule>;
  setRulesList(value: Array<ResourceRule>): void;
  addRules(value?: ResourceRule, index?: number): ResourceRule;

  getScope(): string;
  setScope(value: string): void;

  hasSchemas(): boolean;
  clearSchemas(): void;
  getSchemas(): Schemas | undefined;
  setSchemas(value?: Schemas): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourcePolicy.AsObject;
  static toObject(includeInstance: boolean, msg: ResourcePolicy): ResourcePolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourcePolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourcePolicy;
  static deserializeBinaryFromReader(message: ResourcePolicy, reader: jspb.BinaryReader): ResourcePolicy;
}

export namespace ResourcePolicy {
  export type AsObject = {
    resource: string,
    version: string,
    importDerivedRolesList: Array<string>,
    rulesList: Array<ResourceRule.AsObject>,
    scope: string,
    schemas?: Schemas.AsObject,
  }
}

export class ResourceRule extends jspb.Message {
  clearActionsList(): void;
  getActionsList(): Array<string>;
  setActionsList(value: Array<string>): void;
  addActions(value: string, index?: number): string;

  clearDerivedRolesList(): void;
  getDerivedRolesList(): Array<string>;
  setDerivedRolesList(value: Array<string>): void;
  addDerivedRoles(value: string, index?: number): string;

  clearRolesList(): void;
  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): void;
  addRoles(value: string, index?: number): string;

  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): Condition | undefined;
  setCondition(value?: Condition): void;

  getEffect(): cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap];
  setEffect(value: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap]): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceRule.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceRule): ResourceRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceRule;
  static deserializeBinaryFromReader(message: ResourceRule, reader: jspb.BinaryReader): ResourceRule;
}

export namespace ResourceRule {
  export type AsObject = {
    actionsList: Array<string>,
    derivedRolesList: Array<string>,
    rolesList: Array<string>,
    condition?: Condition.AsObject,
    effect: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap],
    name: string,
  }
}

export class PrincipalPolicy extends jspb.Message {
  getPrincipal(): string;
  setPrincipal(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  clearRulesList(): void;
  getRulesList(): Array<PrincipalRule>;
  setRulesList(value: Array<PrincipalRule>): void;
  addRules(value?: PrincipalRule, index?: number): PrincipalRule;

  getScope(): string;
  setScope(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrincipalPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: PrincipalPolicy): PrincipalPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrincipalPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrincipalPolicy;
  static deserializeBinaryFromReader(message: PrincipalPolicy, reader: jspb.BinaryReader): PrincipalPolicy;
}

export namespace PrincipalPolicy {
  export type AsObject = {
    principal: string,
    version: string,
    rulesList: Array<PrincipalRule.AsObject>,
    scope: string,
  }
}

export class PrincipalRule extends jspb.Message {
  getResource(): string;
  setResource(value: string): void;

  clearActionsList(): void;
  getActionsList(): Array<PrincipalRule.Action>;
  setActionsList(value: Array<PrincipalRule.Action>): void;
  addActions(value?: PrincipalRule.Action, index?: number): PrincipalRule.Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrincipalRule.AsObject;
  static toObject(includeInstance: boolean, msg: PrincipalRule): PrincipalRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrincipalRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrincipalRule;
  static deserializeBinaryFromReader(message: PrincipalRule, reader: jspb.BinaryReader): PrincipalRule;
}

export namespace PrincipalRule {
  export type AsObject = {
    resource: string,
    actionsList: Array<PrincipalRule.Action.AsObject>,
  }

  export class Action extends jspb.Message {
    getAction(): string;
    setAction(value: string): void;

    hasCondition(): boolean;
    clearCondition(): void;
    getCondition(): Condition | undefined;
    setCondition(value?: Condition): void;

    getEffect(): cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap];
    setEffect(value: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap]): void;

    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Action.AsObject;
    static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Action;
    static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
  }

  export namespace Action {
    export type AsObject = {
      action: string,
      condition?: Condition.AsObject,
      effect: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap],
      name: string,
    }
  }
}

export class DerivedRoles extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearDefinitionsList(): void;
  getDefinitionsList(): Array<RoleDef>;
  setDefinitionsList(value: Array<RoleDef>): void;
  addDefinitions(value?: RoleDef, index?: number): RoleDef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivedRoles.AsObject;
  static toObject(includeInstance: boolean, msg: DerivedRoles): DerivedRoles.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivedRoles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivedRoles;
  static deserializeBinaryFromReader(message: DerivedRoles, reader: jspb.BinaryReader): DerivedRoles;
}

export namespace DerivedRoles {
  export type AsObject = {
    name: string,
    definitionsList: Array<RoleDef.AsObject>,
  }
}

export class RoleDef extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearParentRolesList(): void;
  getParentRolesList(): Array<string>;
  setParentRolesList(value: Array<string>): void;
  addParentRoles(value: string, index?: number): string;

  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): Condition | undefined;
  setCondition(value?: Condition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleDef.AsObject;
  static toObject(includeInstance: boolean, msg: RoleDef): RoleDef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoleDef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleDef;
  static deserializeBinaryFromReader(message: RoleDef, reader: jspb.BinaryReader): RoleDef;
}

export namespace RoleDef {
  export type AsObject = {
    name: string,
    parentRolesList: Array<string>,
    condition?: Condition.AsObject,
  }
}

export class Condition extends jspb.Message {
  hasMatch(): boolean;
  clearMatch(): void;
  getMatch(): Match | undefined;
  setMatch(value?: Match): void;

  hasScript(): boolean;
  clearScript(): void;
  getScript(): string;
  setScript(value: string): void;

  getConditionCase(): Condition.ConditionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Condition.AsObject;
  static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Condition;
  static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
  export type AsObject = {
    match?: Match.AsObject,
    script: string,
  }

  export enum ConditionCase {
    CONDITION_NOT_SET = 0,
    MATCH = 1,
    SCRIPT = 2,
  }
}

export class Match extends jspb.Message {
  hasAll(): boolean;
  clearAll(): void;
  getAll(): Match.ExprList | undefined;
  setAll(value?: Match.ExprList): void;

  hasAny(): boolean;
  clearAny(): void;
  getAny(): Match.ExprList | undefined;
  setAny(value?: Match.ExprList): void;

  hasNone(): boolean;
  clearNone(): void;
  getNone(): Match.ExprList | undefined;
  setNone(value?: Match.ExprList): void;

  hasExpr(): boolean;
  clearExpr(): void;
  getExpr(): string;
  setExpr(value: string): void;

  getOpCase(): Match.OpCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Match.AsObject;
  static toObject(includeInstance: boolean, msg: Match): Match.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Match, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Match;
  static deserializeBinaryFromReader(message: Match, reader: jspb.BinaryReader): Match;
}

export namespace Match {
  export type AsObject = {
    all?: Match.ExprList.AsObject,
    any?: Match.ExprList.AsObject,
    none?: Match.ExprList.AsObject,
    expr: string,
  }

  export class ExprList extends jspb.Message {
    clearOfList(): void;
    getOfList(): Array<Match>;
    setOfList(value: Array<Match>): void;
    addOf(value?: Match, index?: number): Match;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExprList.AsObject;
    static toObject(includeInstance: boolean, msg: ExprList): ExprList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExprList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExprList;
    static deserializeBinaryFromReader(message: ExprList, reader: jspb.BinaryReader): ExprList;
  }

  export namespace ExprList {
    export type AsObject = {
      ofList: Array<Match.AsObject>,
    }
  }

  export enum OpCase {
    OP_NOT_SET = 0,
    ALL = 1,
    ANY = 2,
    NONE = 3,
    EXPR = 4,
  }
}

export class Schemas extends jspb.Message {
  hasPrincipalSchema(): boolean;
  clearPrincipalSchema(): void;
  getPrincipalSchema(): Schemas.Schema | undefined;
  setPrincipalSchema(value?: Schemas.Schema): void;

  hasResourceSchema(): boolean;
  clearResourceSchema(): void;
  getResourceSchema(): Schemas.Schema | undefined;
  setResourceSchema(value?: Schemas.Schema): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schemas.AsObject;
  static toObject(includeInstance: boolean, msg: Schemas): Schemas.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Schemas, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schemas;
  static deserializeBinaryFromReader(message: Schemas, reader: jspb.BinaryReader): Schemas;
}

export namespace Schemas {
  export type AsObject = {
    principalSchema?: Schemas.Schema.AsObject,
    resourceSchema?: Schemas.Schema.AsObject,
  }

  export class IgnoreWhen extends jspb.Message {
    clearActionsList(): void;
    getActionsList(): Array<string>;
    setActionsList(value: Array<string>): void;
    addActions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IgnoreWhen.AsObject;
    static toObject(includeInstance: boolean, msg: IgnoreWhen): IgnoreWhen.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IgnoreWhen, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IgnoreWhen;
    static deserializeBinaryFromReader(message: IgnoreWhen, reader: jspb.BinaryReader): IgnoreWhen;
  }

  export namespace IgnoreWhen {
    export type AsObject = {
      actionsList: Array<string>,
    }
  }

  export class Schema extends jspb.Message {
    getRef(): string;
    setRef(value: string): void;

    hasIgnoreWhen(): boolean;
    clearIgnoreWhen(): void;
    getIgnoreWhen(): Schemas.IgnoreWhen | undefined;
    setIgnoreWhen(value?: Schemas.IgnoreWhen): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Schema.AsObject;
    static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Schema;
    static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
  }

  export namespace Schema {
    export type AsObject = {
      ref: string,
      ignoreWhen?: Schemas.IgnoreWhen.AsObject,
    }
  }
}

export class TestFixture extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestFixture.AsObject;
  static toObject(includeInstance: boolean, msg: TestFixture): TestFixture.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestFixture, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestFixture;
  static deserializeBinaryFromReader(message: TestFixture, reader: jspb.BinaryReader): TestFixture;
}

export namespace TestFixture {
  export type AsObject = {
  }

  export class Principals extends jspb.Message {
    getPrincipalsMap(): jspb.Map<string, cerbos_engine_v1_engine_pb.Principal>;
    clearPrincipalsMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Principals.AsObject;
    static toObject(includeInstance: boolean, msg: Principals): Principals.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Principals, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Principals;
    static deserializeBinaryFromReader(message: Principals, reader: jspb.BinaryReader): Principals;
  }

  export namespace Principals {
    export type AsObject = {
      principalsMap: Array<[string, cerbos_engine_v1_engine_pb.Principal.AsObject]>,
    }
  }

  export class Resources extends jspb.Message {
    getResourcesMap(): jspb.Map<string, cerbos_engine_v1_engine_pb.Resource>;
    clearResourcesMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resources.AsObject;
    static toObject(includeInstance: boolean, msg: Resources): Resources.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resources, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resources;
    static deserializeBinaryFromReader(message: Resources, reader: jspb.BinaryReader): Resources;
  }

  export namespace Resources {
    export type AsObject = {
      resourcesMap: Array<[string, cerbos_engine_v1_engine_pb.Resource.AsObject]>,
    }
  }

  export class AuxData extends jspb.Message {
    getAuxDataMap(): jspb.Map<string, cerbos_engine_v1_engine_pb.AuxData>;
    clearAuxDataMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuxData.AsObject;
    static toObject(includeInstance: boolean, msg: AuxData): AuxData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuxData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuxData;
    static deserializeBinaryFromReader(message: AuxData, reader: jspb.BinaryReader): AuxData;
  }

  export namespace AuxData {
    export type AsObject = {
      auxDataMap: Array<[string, cerbos_engine_v1_engine_pb.AuxData.AsObject]>,
    }
  }
}

export class TestSuite extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSkip(): boolean;
  setSkip(value: boolean): void;

  getSkipReason(): string;
  setSkipReason(value: string): void;

  clearTestsList(): void;
  getTestsList(): Array<TestTable>;
  setTestsList(value: Array<TestTable>): void;
  addTests(value?: TestTable, index?: number): TestTable;

  getPrincipalsMap(): jspb.Map<string, cerbos_engine_v1_engine_pb.Principal>;
  clearPrincipalsMap(): void;
  getResourcesMap(): jspb.Map<string, cerbos_engine_v1_engine_pb.Resource>;
  clearResourcesMap(): void;
  getAuxDataMap(): jspb.Map<string, cerbos_engine_v1_engine_pb.AuxData>;
  clearAuxDataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestSuite.AsObject;
  static toObject(includeInstance: boolean, msg: TestSuite): TestSuite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestSuite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestSuite;
  static deserializeBinaryFromReader(message: TestSuite, reader: jspb.BinaryReader): TestSuite;
}

export namespace TestSuite {
  export type AsObject = {
    name: string,
    description: string,
    skip: boolean,
    skipReason: string,
    testsList: Array<TestTable.AsObject>,
    principalsMap: Array<[string, cerbos_engine_v1_engine_pb.Principal.AsObject]>,
    resourcesMap: Array<[string, cerbos_engine_v1_engine_pb.Resource.AsObject]>,
    auxDataMap: Array<[string, cerbos_engine_v1_engine_pb.AuxData.AsObject]>,
  }
}

export class TestTable extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSkip(): boolean;
  setSkip(value: boolean): void;

  getSkipReason(): string;
  setSkipReason(value: string): void;

  hasInput(): boolean;
  clearInput(): void;
  getInput(): TestTable.Input | undefined;
  setInput(value?: TestTable.Input): void;

  clearExpectedList(): void;
  getExpectedList(): Array<TestTable.Expectation>;
  setExpectedList(value: Array<TestTable.Expectation>): void;
  addExpected(value?: TestTable.Expectation, index?: number): TestTable.Expectation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestTable.AsObject;
  static toObject(includeInstance: boolean, msg: TestTable): TestTable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestTable;
  static deserializeBinaryFromReader(message: TestTable, reader: jspb.BinaryReader): TestTable;
}

export namespace TestTable {
  export type AsObject = {
    name: string,
    description: string,
    skip: boolean,
    skipReason: string,
    input?: TestTable.Input.AsObject,
    expectedList: Array<TestTable.Expectation.AsObject>,
  }

  export class Input extends jspb.Message {
    clearPrincipalsList(): void;
    getPrincipalsList(): Array<string>;
    setPrincipalsList(value: Array<string>): void;
    addPrincipals(value: string, index?: number): string;

    clearResourcesList(): void;
    getResourcesList(): Array<string>;
    setResourcesList(value: Array<string>): void;
    addResources(value: string, index?: number): string;

    clearActionsList(): void;
    getActionsList(): Array<string>;
    setActionsList(value: Array<string>): void;
    addActions(value: string, index?: number): string;

    getAuxData(): string;
    setAuxData(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Input.AsObject;
    static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Input;
    static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
  }

  export namespace Input {
    export type AsObject = {
      principalsList: Array<string>,
      resourcesList: Array<string>,
      actionsList: Array<string>,
      auxData: string,
    }
  }

  export class Expectation extends jspb.Message {
    getPrincipal(): string;
    setPrincipal(value: string): void;

    getResource(): string;
    setResource(value: string): void;

    getActionsMap(): jspb.Map<string, cerbos_effect_v1_effect_pb.Effect[keyof cerbos_effect_v1_effect_pb.Effect]>;
    clearActionsMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Expectation.AsObject;
    static toObject(includeInstance: boolean, msg: Expectation): Expectation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Expectation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Expectation;
    static deserializeBinaryFromReader(message: Expectation, reader: jspb.BinaryReader): Expectation;
  }

  export namespace Expectation {
    export type AsObject = {
      principal: string,
      resource: string,
      actionsMap: Array<[string, cerbos_effect_v1_effect_pb.Effect[keyof cerbos_effect_v1_effect_pb.Effect]]>,
    }
  }
}

export class Test extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): Test.TestName | undefined;
  setName(value?: Test.TestName): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSkip(): boolean;
  setSkip(value: boolean): void;

  getSkipReason(): string;
  setSkipReason(value: string): void;

  hasInput(): boolean;
  clearInput(): void;
  getInput(): cerbos_engine_v1_engine_pb.CheckInput | undefined;
  setInput(value?: cerbos_engine_v1_engine_pb.CheckInput): void;

  getExpectedMap(): jspb.Map<string, cerbos_effect_v1_effect_pb.Effect[keyof cerbos_effect_v1_effect_pb.Effect]>;
  clearExpectedMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Test.AsObject;
  static toObject(includeInstance: boolean, msg: Test): Test.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Test, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Test;
  static deserializeBinaryFromReader(message: Test, reader: jspb.BinaryReader): Test;
}

export namespace Test {
  export type AsObject = {
    name?: Test.TestName.AsObject,
    description: string,
    skip: boolean,
    skipReason: string,
    input?: cerbos_engine_v1_engine_pb.CheckInput.AsObject,
    expectedMap: Array<[string, cerbos_effect_v1_effect_pb.Effect[keyof cerbos_effect_v1_effect_pb.Effect]]>,
  }

  export class TestName extends jspb.Message {
    getTestTableName(): string;
    setTestTableName(value: string): void;

    getPrincipalKey(): string;
    setPrincipalKey(value: string): void;

    getResourceKey(): string;
    setResourceKey(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestName.AsObject;
    static toObject(includeInstance: boolean, msg: TestName): TestName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestName;
    static deserializeBinaryFromReader(message: TestName, reader: jspb.BinaryReader): TestName;
  }

  export namespace TestName {
    export type AsObject = {
      testTableName: string,
      principalKey: string,
      resourceKey: string,
    }
  }
}

export class TestResults extends jspb.Message {
  clearSuitesList(): void;
  getSuitesList(): Array<TestResults.Suite>;
  setSuitesList(value: Array<TestResults.Suite>): void;
  addSuites(value?: TestResults.Suite, index?: number): TestResults.Suite;

  hasSummary(): boolean;
  clearSummary(): void;
  getSummary(): TestResults.Summary | undefined;
  setSummary(value?: TestResults.Summary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestResults.AsObject;
  static toObject(includeInstance: boolean, msg: TestResults): TestResults.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestResults;
  static deserializeBinaryFromReader(message: TestResults, reader: jspb.BinaryReader): TestResults;
}

export namespace TestResults {
  export type AsObject = {
    suitesList: Array<TestResults.Suite.AsObject>,
    summary?: TestResults.Summary.AsObject,
  }

  export class Tally extends jspb.Message {
    getResult(): TestResults.ResultMap[keyof TestResults.ResultMap];
    setResult(value: TestResults.ResultMap[keyof TestResults.ResultMap]): void;

    getCount(): number;
    setCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tally.AsObject;
    static toObject(includeInstance: boolean, msg: Tally): Tally.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tally, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tally;
    static deserializeBinaryFromReader(message: Tally, reader: jspb.BinaryReader): Tally;
  }

  export namespace Tally {
    export type AsObject = {
      result: TestResults.ResultMap[keyof TestResults.ResultMap],
      count: number,
    }
  }

  export class Summary extends jspb.Message {
    getOverallResult(): TestResults.ResultMap[keyof TestResults.ResultMap];
    setOverallResult(value: TestResults.ResultMap[keyof TestResults.ResultMap]): void;

    getTestsCount(): number;
    setTestsCount(value: number): void;

    clearResultCountsList(): void;
    getResultCountsList(): Array<TestResults.Tally>;
    setResultCountsList(value: Array<TestResults.Tally>): void;
    addResultCounts(value?: TestResults.Tally, index?: number): TestResults.Tally;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Summary.AsObject;
    static toObject(includeInstance: boolean, msg: Summary): Summary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Summary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Summary;
    static deserializeBinaryFromReader(message: Summary, reader: jspb.BinaryReader): Summary;
  }

  export namespace Summary {
    export type AsObject = {
      overallResult: TestResults.ResultMap[keyof TestResults.ResultMap],
      testsCount: number,
      resultCountsList: Array<TestResults.Tally.AsObject>,
    }
  }

  export class Suite extends jspb.Message {
    getFile(): string;
    setFile(value: string): void;

    getName(): string;
    setName(value: string): void;

    clearPrincipalsList(): void;
    getPrincipalsList(): Array<TestResults.Principal>;
    setPrincipalsList(value: Array<TestResults.Principal>): void;
    addPrincipals(value?: TestResults.Principal, index?: number): TestResults.Principal;

    hasSummary(): boolean;
    clearSummary(): void;
    getSummary(): TestResults.Summary | undefined;
    setSummary(value?: TestResults.Summary): void;

    getError(): string;
    setError(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Suite.AsObject;
    static toObject(includeInstance: boolean, msg: Suite): Suite.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Suite, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Suite;
    static deserializeBinaryFromReader(message: Suite, reader: jspb.BinaryReader): Suite;
  }

  export namespace Suite {
    export type AsObject = {
      file: string,
      name: string,
      principalsList: Array<TestResults.Principal.AsObject>,
      summary?: TestResults.Summary.AsObject,
      error: string,
    }
  }

  export class Principal extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    clearResourcesList(): void;
    getResourcesList(): Array<TestResults.Resource>;
    setResourcesList(value: Array<TestResults.Resource>): void;
    addResources(value?: TestResults.Resource, index?: number): TestResults.Resource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Principal.AsObject;
    static toObject(includeInstance: boolean, msg: Principal): Principal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Principal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Principal;
    static deserializeBinaryFromReader(message: Principal, reader: jspb.BinaryReader): Principal;
  }

  export namespace Principal {
    export type AsObject = {
      name: string,
      resourcesList: Array<TestResults.Resource.AsObject>,
    }
  }

  export class Resource extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    clearActionsList(): void;
    getActionsList(): Array<TestResults.Action>;
    setActionsList(value: Array<TestResults.Action>): void;
    addActions(value?: TestResults.Action, index?: number): TestResults.Action;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resource.AsObject;
    static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resource;
    static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
  }

  export namespace Resource {
    export type AsObject = {
      name: string,
      actionsList: Array<TestResults.Action.AsObject>,
    }
  }

  export class Action extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): TestResults.Details | undefined;
    setDetails(value?: TestResults.Details): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Action.AsObject;
    static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Action;
    static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
  }

  export namespace Action {
    export type AsObject = {
      name: string,
      details?: TestResults.Details.AsObject,
    }
  }

  export class Details extends jspb.Message {
    getResult(): TestResults.ResultMap[keyof TestResults.ResultMap];
    setResult(value: TestResults.ResultMap[keyof TestResults.ResultMap]): void;

    hasFailure(): boolean;
    clearFailure(): void;
    getFailure(): TestResults.Failure | undefined;
    setFailure(value?: TestResults.Failure): void;

    hasError(): boolean;
    clearError(): void;
    getError(): string;
    setError(value: string): void;

    clearEngineTraceList(): void;
    getEngineTraceList(): Array<cerbos_engine_v1_engine_pb.Trace>;
    setEngineTraceList(value: Array<cerbos_engine_v1_engine_pb.Trace>): void;
    addEngineTrace(value?: cerbos_engine_v1_engine_pb.Trace, index?: number): cerbos_engine_v1_engine_pb.Trace;

    getOutcomeCase(): Details.OutcomeCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Details.AsObject;
    static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Details;
    static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
  }

  export namespace Details {
    export type AsObject = {
      result: TestResults.ResultMap[keyof TestResults.ResultMap],
      failure?: TestResults.Failure.AsObject,
      error: string,
      engineTraceList: Array<cerbos_engine_v1_engine_pb.Trace.AsObject>,
    }

    export enum OutcomeCase {
      OUTCOME_NOT_SET = 0,
      FAILURE = 2,
      ERROR = 3,
    }
  }

  export class Failure extends jspb.Message {
    getExpected(): cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap];
    setExpected(value: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap]): void;

    getActual(): cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap];
    setActual(value: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Failure.AsObject;
    static toObject(includeInstance: boolean, msg: Failure): Failure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Failure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Failure;
    static deserializeBinaryFromReader(message: Failure, reader: jspb.BinaryReader): Failure;
  }

  export namespace Failure {
    export type AsObject = {
      expected: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap],
      actual: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap],
    }
  }

  export interface ResultMap {
    RESULT_UNSPECIFIED: 0;
    RESULT_SKIPPED: 1;
    RESULT_PASSED: 2;
    RESULT_FAILED: 3;
    RESULT_ERRORED: 4;
  }

  export const Result: ResultMap;
}

