/* eslint-disable */
import { Effect, effectFromJSON, effectToJSON } from "../../effect/v1/effect";

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

export const Policy = {
  fromJSON(object: any): Policy {
    return {
      apiVersion: isSet(object.apiVersion) ? String(object.apiVersion) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      description: isSet(object.description) ? String(object.description) : "",
      metadata: isSet(object.metadata)
        ? Metadata.fromJSON(object.metadata)
        : undefined,
      policyType: isSet(object.resourcePolicy)
        ? {
            $case: "resourcePolicy",
            resourcePolicy: ResourcePolicy.fromJSON(object.resourcePolicy),
          }
        : isSet(object.principalPolicy)
        ? {
            $case: "principalPolicy",
            principalPolicy: PrincipalPolicy.fromJSON(object.principalPolicy),
          }
        : isSet(object.derivedRoles)
        ? {
            $case: "derivedRoles",
            derivedRoles: DerivedRoles.fromJSON(object.derivedRoles),
          }
        : isSet(object.exportVariables)
        ? {
            $case: "exportVariables",
            exportVariables: ExportVariables.fromJSON(object.exportVariables),
          }
        : undefined,
      variables: isObject(object.variables)
        ? Object.entries(object.variables).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
      jsonSchema: isSet(object.$schema) ? String(object.$schema) : "",
    };
  },

  toJSON(message: Policy): unknown {
    const obj: any = {};
    if (message.apiVersion !== "") {
      obj.apiVersion = message.apiVersion;
    }
    if (message.disabled === true) {
      obj.disabled = message.disabled;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.metadata !== undefined) {
      obj.metadata = Metadata.toJSON(message.metadata);
    }
    if (message.policyType?.$case === "resourcePolicy") {
      obj.resourcePolicy = ResourcePolicy.toJSON(
        message.policyType.resourcePolicy,
      );
    }
    if (message.policyType?.$case === "principalPolicy") {
      obj.principalPolicy = PrincipalPolicy.toJSON(
        message.policyType.principalPolicy,
      );
    }
    if (message.policyType?.$case === "derivedRoles") {
      obj.derivedRoles = DerivedRoles.toJSON(message.policyType.derivedRoles);
    }
    if (message.policyType?.$case === "exportVariables") {
      obj.exportVariables = ExportVariables.toJSON(
        message.policyType.exportVariables,
      );
    }
    if (message.variables) {
      const entries = Object.entries(message.variables);
      if (entries.length > 0) {
        obj.variables = {};
        entries.forEach(([k, v]) => {
          obj.variables[k] = v;
        });
      }
    }
    if (message.jsonSchema !== "") {
      obj.$schema = message.jsonSchema;
    }
    return obj;
  },
};

export const Policy_VariablesEntry = {
  fromJSON(object: any): Policy_VariablesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Policy_VariablesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
};

export const Metadata = {
  fromJSON(object: any): Metadata {
    return {
      sourceFile: isSet(object.sourceFile) ? String(object.sourceFile) : "",
      annotations: isObject(object.annotations)
        ? Object.entries(object.annotations).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
      hash: isSet(object.hash) ? String(object.hash) : undefined,
      storeIdentifer: isSet(object.storeIdentifer)
        ? String(object.storeIdentifer)
        : "",
      storeIdentifier: isSet(object.storeIdentifier)
        ? String(object.storeIdentifier)
        : "",
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    if (message.sourceFile !== "") {
      obj.sourceFile = message.sourceFile;
    }
    if (message.annotations) {
      const entries = Object.entries(message.annotations);
      if (entries.length > 0) {
        obj.annotations = {};
        entries.forEach(([k, v]) => {
          obj.annotations[k] = v;
        });
      }
    }
    if (message.hash !== undefined) {
      obj.hash = message.hash;
    }
    if (message.storeIdentifer !== "") {
      obj.storeIdentifer = message.storeIdentifer;
    }
    if (message.storeIdentifier !== "") {
      obj.storeIdentifier = message.storeIdentifier;
    }
    return obj;
  },
};

export const Metadata_AnnotationsEntry = {
  fromJSON(object: any): Metadata_AnnotationsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Metadata_AnnotationsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
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
      schemas: isSet(object.schemas)
        ? Schemas.fromJSON(object.schemas)
        : undefined,
      variables: isSet(object.variables)
        ? Variables.fromJSON(object.variables)
        : undefined,
    };
  },

  toJSON(message: ResourcePolicy): unknown {
    const obj: any = {};
    if (message.resource !== "") {
      obj.resource = message.resource;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.importDerivedRoles?.length) {
      obj.importDerivedRoles = message.importDerivedRoles;
    }
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => ResourceRule.toJSON(e));
    }
    if (message.scope !== "") {
      obj.scope = message.scope;
    }
    if (message.schemas !== undefined) {
      obj.schemas = Schemas.toJSON(message.schemas);
    }
    if (message.variables !== undefined) {
      obj.variables = Variables.toJSON(message.variables);
    }
    return obj;
  },
};

export const ResourceRule = {
  fromJSON(object: any): ResourceRule {
    return {
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => String(e))
        : [],
      derivedRoles: Array.isArray(object?.derivedRoles)
        ? object.derivedRoles.map((e: any) => String(e))
        : [],
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => String(e))
        : [],
      condition: isSet(object.condition)
        ? Condition.fromJSON(object.condition)
        : undefined,
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      output: isSet(object.output) ? Output.fromJSON(object.output) : undefined,
    };
  },

  toJSON(message: ResourceRule): unknown {
    const obj: any = {};
    if (message.actions?.length) {
      obj.actions = message.actions;
    }
    if (message.derivedRoles?.length) {
      obj.derivedRoles = message.derivedRoles;
    }
    if (message.roles?.length) {
      obj.roles = message.roles;
    }
    if (message.condition !== undefined) {
      obj.condition = Condition.toJSON(message.condition);
    }
    if (message.effect !== 0) {
      obj.effect = effectToJSON(message.effect);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.output !== undefined) {
      obj.output = Output.toJSON(message.output);
    }
    return obj;
  },
};

export const PrincipalPolicy = {
  fromJSON(object: any): PrincipalPolicy {
    return {
      principal: isSet(object.principal) ? String(object.principal) : "",
      version: isSet(object.version) ? String(object.version) : "",
      rules: Array.isArray(object?.rules)
        ? object.rules.map((e: any) => PrincipalRule.fromJSON(e))
        : [],
      scope: isSet(object.scope) ? String(object.scope) : "",
      variables: isSet(object.variables)
        ? Variables.fromJSON(object.variables)
        : undefined,
    };
  },

  toJSON(message: PrincipalPolicy): unknown {
    const obj: any = {};
    if (message.principal !== "") {
      obj.principal = message.principal;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => PrincipalRule.toJSON(e));
    }
    if (message.scope !== "") {
      obj.scope = message.scope;
    }
    if (message.variables !== undefined) {
      obj.variables = Variables.toJSON(message.variables);
    }
    return obj;
  },
};

export const PrincipalRule = {
  fromJSON(object: any): PrincipalRule {
    return {
      resource: isSet(object.resource) ? String(object.resource) : "",
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => PrincipalRule_Action.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PrincipalRule): unknown {
    const obj: any = {};
    if (message.resource !== "") {
      obj.resource = message.resource;
    }
    if (message.actions?.length) {
      obj.actions = message.actions.map((e) => PrincipalRule_Action.toJSON(e));
    }
    return obj;
  },
};

export const PrincipalRule_Action = {
  fromJSON(object: any): PrincipalRule_Action {
    return {
      action: isSet(object.action) ? String(object.action) : "",
      condition: isSet(object.condition)
        ? Condition.fromJSON(object.condition)
        : undefined,
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      output: isSet(object.output) ? Output.fromJSON(object.output) : undefined,
    };
  },

  toJSON(message: PrincipalRule_Action): unknown {
    const obj: any = {};
    if (message.action !== "") {
      obj.action = message.action;
    }
    if (message.condition !== undefined) {
      obj.condition = Condition.toJSON(message.condition);
    }
    if (message.effect !== 0) {
      obj.effect = effectToJSON(message.effect);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.output !== undefined) {
      obj.output = Output.toJSON(message.output);
    }
    return obj;
  },
};

export const DerivedRoles = {
  fromJSON(object: any): DerivedRoles {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      definitions: Array.isArray(object?.definitions)
        ? object.definitions.map((e: any) => RoleDef.fromJSON(e))
        : [],
      variables: isSet(object.variables)
        ? Variables.fromJSON(object.variables)
        : undefined,
    };
  },

  toJSON(message: DerivedRoles): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.definitions?.length) {
      obj.definitions = message.definitions.map((e) => RoleDef.toJSON(e));
    }
    if (message.variables !== undefined) {
      obj.variables = Variables.toJSON(message.variables);
    }
    return obj;
  },
};

export const RoleDef = {
  fromJSON(object: any): RoleDef {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parentRoles: Array.isArray(object?.parentRoles)
        ? object.parentRoles.map((e: any) => String(e))
        : [],
      condition: isSet(object.condition)
        ? Condition.fromJSON(object.condition)
        : undefined,
    };
  },

  toJSON(message: RoleDef): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.parentRoles?.length) {
      obj.parentRoles = message.parentRoles;
    }
    if (message.condition !== undefined) {
      obj.condition = Condition.toJSON(message.condition);
    }
    return obj;
  },
};

export const ExportVariables = {
  fromJSON(object: any): ExportVariables {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      definitions: isObject(object.definitions)
        ? Object.entries(object.definitions).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
    };
  },

  toJSON(message: ExportVariables): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.definitions) {
      const entries = Object.entries(message.definitions);
      if (entries.length > 0) {
        obj.definitions = {};
        entries.forEach(([k, v]) => {
          obj.definitions[k] = v;
        });
      }
    }
    return obj;
  },
};

export const ExportVariables_DefinitionsEntry = {
  fromJSON(object: any): ExportVariables_DefinitionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: ExportVariables_DefinitionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
};

export const Variables = {
  fromJSON(object: any): Variables {
    return {
      import: Array.isArray(object?.import)
        ? object.import.map((e: any) => String(e))
        : [],
      local: isObject(object.local)
        ? Object.entries(object.local).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
    };
  },

  toJSON(message: Variables): unknown {
    const obj: any = {};
    if (message.import?.length > 0) {
      obj.import = message.import;
    }
    if (message.local) {
      const entries = Object.entries(message.local);
      if (entries.length > 0) {
        obj.local = {};
        entries.forEach(([k, v]) => {
          obj.local[k] = v;
        });
      }
    }
    return obj;
  },
};

export const Variables_LocalEntry = {
  fromJSON(object: any): Variables_LocalEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Variables_LocalEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
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
    if (message.condition?.$case === "match") {
      obj.match = Match.toJSON(message.condition.match);
    }
    if (message.condition?.$case === "script") {
      obj.script = message.condition.script;
    }
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
    if (message.op?.$case === "all") {
      obj.all = Match_ExprList.toJSON(message.op.all);
    }
    if (message.op?.$case === "any") {
      obj.any = Match_ExprList.toJSON(message.op.any);
    }
    if (message.op?.$case === "none") {
      obj.none = Match_ExprList.toJSON(message.op.none);
    }
    if (message.op?.$case === "expr") {
      obj.expr = message.op.expr;
    }
    return obj;
  },
};

export const Match_ExprList = {
  fromJSON(object: any): Match_ExprList {
    return {
      of: Array.isArray(object?.of)
        ? object.of.map((e: any) => Match.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Match_ExprList): unknown {
    const obj: any = {};
    if (message.of?.length) {
      obj.of = message.of.map((e) => Match.toJSON(e));
    }
    return obj;
  },
};

export const Output = {
  fromJSON(object: any): Output {
    return { expr: isSet(object.expr) ? String(object.expr) : "" };
  },

  toJSON(message: Output): unknown {
    const obj: any = {};
    if (message.expr !== "") {
      obj.expr = message.expr;
    }
    return obj;
  },
};

export const Schemas = {
  fromJSON(object: any): Schemas {
    return {
      principalSchema: isSet(object.principalSchema)
        ? Schemas_Schema.fromJSON(object.principalSchema)
        : undefined,
      resourceSchema: isSet(object.resourceSchema)
        ? Schemas_Schema.fromJSON(object.resourceSchema)
        : undefined,
    };
  },

  toJSON(message: Schemas): unknown {
    const obj: any = {};
    if (message.principalSchema !== undefined) {
      obj.principalSchema = Schemas_Schema.toJSON(message.principalSchema);
    }
    if (message.resourceSchema !== undefined) {
      obj.resourceSchema = Schemas_Schema.toJSON(message.resourceSchema);
    }
    return obj;
  },
};

export const Schemas_IgnoreWhen = {
  fromJSON(object: any): Schemas_IgnoreWhen {
    return {
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Schemas_IgnoreWhen): unknown {
    const obj: any = {};
    if (message.actions?.length) {
      obj.actions = message.actions;
    }
    return obj;
  },
};

export const Schemas_Schema = {
  fromJSON(object: any): Schemas_Schema {
    return {
      ref: isSet(object.ref) ? String(object.ref) : "",
      ignoreWhen: isSet(object.ignoreWhen)
        ? Schemas_IgnoreWhen.fromJSON(object.ignoreWhen)
        : undefined,
    };
  },

  toJSON(message: Schemas_Schema): unknown {
    const obj: any = {};
    if (message.ref !== "") {
      obj.ref = message.ref;
    }
    if (message.ignoreWhen !== undefined) {
      obj.ignoreWhen = Schemas_IgnoreWhen.toJSON(message.ignoreWhen);
    }
    return obj;
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
