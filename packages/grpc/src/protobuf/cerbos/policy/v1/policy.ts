/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { UInt64Value } from "../../../google/protobuf/wrappers";
import { Effect } from "../../effect/v1/effect";

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

function createBasePolicy(): Policy {
  return {
    apiVersion: "",
    disabled: false,
    description: "",
    metadata: undefined,
    policyType: undefined,
    variables: {},
    jsonSchema: "",
  };
}

export const Policy = {
  encode(
    message: Policy,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
        ResourcePolicy.encode(
          message.policyType.resourcePolicy,
          writer.uint32(42).fork(),
        ).ldelim();
        break;
      case "principalPolicy":
        PrincipalPolicy.encode(
          message.policyType.principalPolicy,
          writer.uint32(50).fork(),
        ).ldelim();
        break;
      case "derivedRoles":
        DerivedRoles.encode(
          message.policyType.derivedRoles,
          writer.uint32(58).fork(),
        ).ldelim();
        break;
      case "exportVariables":
        ExportVariables.encode(
          message.policyType.exportVariables,
          writer.uint32(82).fork(),
        ).ldelim();
        break;
    }
    Object.entries(message.variables).forEach(([key, value]) => {
      Policy_VariablesEntry.encode(
        { key: key as any, value },
        writer.uint32(66).fork(),
      ).ldelim();
    });
    if (message.jsonSchema !== "") {
      writer.uint32(74).string(message.jsonSchema);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Policy {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiVersion = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.disabled = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.policyType = {
            $case: "resourcePolicy",
            resourcePolicy: ResourcePolicy.decode(reader, reader.uint32()),
          };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.policyType = {
            $case: "principalPolicy",
            principalPolicy: PrincipalPolicy.decode(reader, reader.uint32()),
          };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.policyType = {
            $case: "derivedRoles",
            derivedRoles: DerivedRoles.decode(reader, reader.uint32()),
          };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.policyType = {
            $case: "exportVariables",
            exportVariables: ExportVariables.decode(reader, reader.uint32()),
          };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = Policy_VariablesEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.variables[entry8.key] = entry8.value;
          }
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.jsonSchema = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
  encode(
    message: Policy_VariablesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Policy_VariablesEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy_VariablesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseMetadata(): Metadata {
  return {
    sourceFile: "",
    annotations: {},
    hash: undefined,
    storeIdentifer: "",
    storeIdentifier: "",
  };
}

export const Metadata = {
  encode(
    message: Metadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sourceFile !== "") {
      writer.uint32(10).string(message.sourceFile);
    }
    Object.entries(message.annotations).forEach(([key, value]) => {
      Metadata_AnnotationsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork(),
      ).ldelim();
    });
    if (message.hash !== undefined) {
      UInt64Value.encode(
        { value: message.hash! },
        writer.uint32(26).fork(),
      ).ldelim();
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
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourceFile = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = Metadata_AnnotationsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry2.value !== undefined) {
            message.annotations[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hash = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.storeIdentifer = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.storeIdentifier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
  encode(
    message: Metadata_AnnotationsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Metadata_AnnotationsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata_AnnotationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseResourcePolicy(): ResourcePolicy {
  return {
    resource: "",
    version: "",
    importDerivedRoles: [],
    rules: [],
    scope: "",
    schemas: undefined,
    variables: undefined,
  };
}

export const ResourcePolicy = {
  encode(
    message: ResourcePolicy,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    if (message.variables !== undefined) {
      Variables.encode(message.variables, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourcePolicy {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourcePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resource = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.importDerivedRoles.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.rules.push(ResourceRule.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.scope = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.schemas = Schemas.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.variables = Variables.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseResourceRule(): ResourceRule {
  return {
    actions: [],
    derivedRoles: [],
    roles: [],
    condition: undefined,
    effect: 0,
    name: "",
    output: undefined,
  };
}

export const ResourceRule = {
  encode(
    message: ResourceRule,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    if (message.output !== undefined) {
      Output.encode(message.output, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceRule {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.actions.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.derivedRoles.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.roles.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.condition = Condition.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.effect = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.name = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.output = Output.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBasePrincipalPolicy(): PrincipalPolicy {
  return {
    principal: "",
    version: "",
    rules: [],
    scope: "",
    variables: undefined,
  };
}

export const PrincipalPolicy = {
  encode(
    message: PrincipalPolicy,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    if (message.variables !== undefined) {
      Variables.encode(message.variables, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrincipalPolicy {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.principal = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rules.push(PrincipalRule.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.scope = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.variables = Variables.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
  encode(
    message: PrincipalRule,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.resource !== "") {
      writer.uint32(10).string(message.resource);
    }
    for (const v of message.actions) {
      PrincipalRule_Action.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrincipalRule {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resource = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.actions.push(
            PrincipalRule_Action.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBasePrincipalRule_Action(): PrincipalRule_Action {
  return {
    action: "",
    condition: undefined,
    effect: 0,
    name: "",
    output: undefined,
  };
}

export const PrincipalRule_Action = {
  encode(
    message: PrincipalRule_Action,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    if (message.output !== undefined) {
      Output.encode(message.output, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PrincipalRule_Action {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipalRule_Action();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.action = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.condition = Condition.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.effect = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.output = Output.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseDerivedRoles(): DerivedRoles {
  return { name: "", definitions: [], variables: undefined };
}

export const DerivedRoles = {
  encode(
    message: DerivedRoles,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.definitions) {
      RoleDef.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.variables !== undefined) {
      Variables.encode(message.variables, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DerivedRoles {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivedRoles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.definitions.push(RoleDef.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.variables = Variables.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
  encode(
    message: RoleDef,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleDef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.parentRoles.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.condition = Condition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseExportVariables(): ExportVariables {
  return { name: "", definitions: {} };
}

export const ExportVariables = {
  encode(
    message: ExportVariables,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    Object.entries(message.definitions).forEach(([key, value]) => {
      ExportVariables_DefinitionsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportVariables {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportVariables();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = ExportVariables_DefinitionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry2.value !== undefined) {
            message.definitions[entry2.key] = entry2.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseExportVariables_DefinitionsEntry(): ExportVariables_DefinitionsEntry {
  return { key: "", value: "" };
}

export const ExportVariables_DefinitionsEntry = {
  encode(
    message: ExportVariables_DefinitionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ExportVariables_DefinitionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportVariables_DefinitionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseVariables(): Variables {
  return { import: [], local: {} };
}

export const Variables = {
  encode(
    message: Variables,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.import) {
      writer.uint32(10).string(v!);
    }
    Object.entries(message.local).forEach(([key, value]) => {
      Variables_LocalEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Variables {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVariables();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.import.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = Variables_LocalEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.local[entry2.key] = entry2.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseVariables_LocalEntry(): Variables_LocalEntry {
  return { key: "", value: "" };
}

export const Variables_LocalEntry = {
  encode(
    message: Variables_LocalEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Variables_LocalEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVariables_LocalEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
  encode(
    message: Condition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    switch (message.condition?.$case) {
      case "match":
        Match.encode(
          message.condition.match,
          writer.uint32(10).fork(),
        ).ldelim();
        break;
      case "script":
        writer.uint32(18).string(message.condition.script);
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Condition {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.condition = {
            $case: "match",
            match: Match.decode(reader, reader.uint32()),
          };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.condition = { $case: "script", script: reader.string() };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
        Match_ExprList.encode(
          message.op.all,
          writer.uint32(10).fork(),
        ).ldelim();
        break;
      case "any":
        Match_ExprList.encode(
          message.op.any,
          writer.uint32(18).fork(),
        ).ldelim();
        break;
      case "none":
        Match_ExprList.encode(
          message.op.none,
          writer.uint32(26).fork(),
        ).ldelim();
        break;
      case "expr":
        writer.uint32(34).string(message.op.expr);
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Match {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.op = {
            $case: "all",
            all: Match_ExprList.decode(reader, reader.uint32()),
          };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.op = {
            $case: "any",
            any: Match_ExprList.decode(reader, reader.uint32()),
          };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.op = {
            $case: "none",
            none: Match_ExprList.decode(reader, reader.uint32()),
          };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.op = { $case: "expr", expr: reader.string() };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
  encode(
    message: Match_ExprList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.of) {
      Match.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Match_ExprList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatch_ExprList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.of.push(Match.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseOutput(): Output {
  return { expr: "" };
}

export const Output = {
  encode(
    message: Output,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.expr !== "") {
      writer.uint32(10).string(message.expr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Output {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.expr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
  encode(
    message: Schemas,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.principalSchema !== undefined) {
      Schemas_Schema.encode(
        message.principalSchema,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.resourceSchema !== undefined) {
      Schemas_Schema.encode(
        message.resourceSchema,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schemas {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.principalSchema = Schemas_Schema.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourceSchema = Schemas_Schema.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
  encode(
    message: Schemas_IgnoreWhen,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.actions) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schemas_IgnoreWhen {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemas_IgnoreWhen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.actions.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
  encode(
    message: Schemas_Schema,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ref !== "") {
      writer.uint32(10).string(message.ref);
    }
    if (message.ignoreWhen !== undefined) {
      Schemas_IgnoreWhen.encode(
        message.ignoreWhen,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schemas_Schema {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemas_Schema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ref = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ignoreWhen = Schemas_IgnoreWhen.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};
