// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: cerbos/policy/v1/policy.proto

/* eslint-disable */
import { Effect, effectFromJSON } from "../../effect/v1/effect";

export const protobufPackage = "cerbos.policy.v1";

export enum ScopePermissions {
  SCOPE_PERMISSIONS_UNSPECIFIED = 0,
  SCOPE_PERMISSIONS_OVERRIDE_PARENT = 1,
  SCOPE_PERMISSIONS_REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS = 2,
}

export function scopePermissionsFromJSON(object: any): ScopePermissions {
  switch (object) {
    case 0:
    case "SCOPE_PERMISSIONS_UNSPECIFIED":
      return ScopePermissions.SCOPE_PERMISSIONS_UNSPECIFIED;
    case 1:
    case "SCOPE_PERMISSIONS_OVERRIDE_PARENT":
      return ScopePermissions.SCOPE_PERMISSIONS_OVERRIDE_PARENT;
    case 2:
    case "SCOPE_PERMISSIONS_REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS":
      return ScopePermissions.SCOPE_PERMISSIONS_REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum ScopePermissions",
      );
  }
}

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
    | { $case: "rolePolicy"; rolePolicy: RolePolicy }
    | { $case: "exportConstants"; exportConstants: ExportConstants }
    | undefined;
  variables: { [key: string]: string };
  jsonSchema: string;
}

export interface Policy_VariablesEntry {
  key: string;
  value: string;
}

export interface SourceAttributes {
  attributes: { [key: string]: any | undefined };
}

export interface SourceAttributes_AttributesEntry {
  key: string;
  value: any | undefined;
}

export interface Metadata {
  sourceFile: string;
  annotations: { [key: string]: string };
  hash: string | undefined;
  storeIdentifer: string;
  storeIdentifier: string;
  sourceAttributes: SourceAttributes | undefined;
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
  scopePermissions: ScopePermissions;
  constants: Constants | undefined;
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

export interface RolePolicy {
  policyType?: { $case: "role"; role: string } | undefined;
  parentRoles: string[];
  scope: string;
  rules: RoleRule[];
  scopePermissions: ScopePermissions;
}

export interface RoleRule {
  resource: string;
  allowActions: string[];
  condition: Condition | undefined;
}

export interface PrincipalPolicy {
  principal: string;
  version: string;
  rules: PrincipalRule[];
  scope: string;
  variables: Variables | undefined;
  scopePermissions: ScopePermissions;
  constants: Constants | undefined;
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
  constants: Constants | undefined;
}

export interface RoleDef {
  name: string;
  parentRoles: string[];
  condition: Condition | undefined;
}

export interface ExportConstants {
  name: string;
  definitions: { [key: string]: any | undefined };
}

export interface ExportConstants_DefinitionsEntry {
  key: string;
  value: any | undefined;
}

export interface Constants {
  import: string[];
  local: { [key: string]: any | undefined };
}

export interface Constants_LocalEntry {
  key: string;
  value: any | undefined;
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
  when: Output_When | undefined;
}

export interface Output_When {
  ruleActivated: string;
  conditionNotMet: string;
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

export const Policy: MessageFns<Policy> = {
  fromJSON(object: any): Policy {
    return {
      apiVersion: isSet(object.apiVersion)
        ? globalThis.String(object.apiVersion)
        : "",
      disabled: isSet(object.disabled)
        ? globalThis.Boolean(object.disabled)
        : false,
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
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
                  exportVariables: ExportVariables.fromJSON(
                    object.exportVariables,
                  ),
                }
              : isSet(object.rolePolicy)
                ? {
                    $case: "rolePolicy",
                    rolePolicy: RolePolicy.fromJSON(object.rolePolicy),
                  }
                : isSet(object.exportConstants)
                  ? {
                      $case: "exportConstants",
                      exportConstants: ExportConstants.fromJSON(
                        object.exportConstants,
                      ),
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
      jsonSchema: isSet(object.$schema)
        ? globalThis.String(object.$schema)
        : "",
    };
  },
};

export const Policy_VariablesEntry: MessageFns<Policy_VariablesEntry> = {
  fromJSON(object: any): Policy_VariablesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },
};

export const SourceAttributes: MessageFns<SourceAttributes> = {
  fromJSON(object: any): SourceAttributes {
    return {
      attributes: isObject(object.attributes)
        ? Object.entries(object.attributes).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },
};

export const SourceAttributes_AttributesEntry: MessageFns<SourceAttributes_AttributesEntry> =
  {
    fromJSON(object: any): SourceAttributes_AttributesEntry {
      return {
        key: isSet(object.key) ? globalThis.String(object.key) : "",
        value: isSet(object?.value) ? object.value : undefined,
      };
    },
  };

export const Metadata: MessageFns<Metadata> = {
  fromJSON(object: any): Metadata {
    return {
      sourceFile: isSet(object.sourceFile)
        ? globalThis.String(object.sourceFile)
        : "",
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
        ? globalThis.String(object.storeIdentifer)
        : "",
      storeIdentifier: isSet(object.storeIdentifier)
        ? globalThis.String(object.storeIdentifier)
        : "",
      sourceAttributes: isSet(object.sourceAttributes)
        ? SourceAttributes.fromJSON(object.sourceAttributes)
        : undefined,
    };
  },
};

export const Metadata_AnnotationsEntry: MessageFns<Metadata_AnnotationsEntry> =
  {
    fromJSON(object: any): Metadata_AnnotationsEntry {
      return {
        key: isSet(object.key) ? globalThis.String(object.key) : "",
        value: isSet(object.value) ? globalThis.String(object.value) : "",
      };
    },
  };

export const ResourcePolicy: MessageFns<ResourcePolicy> = {
  fromJSON(object: any): ResourcePolicy {
    return {
      resource: isSet(object.resource)
        ? globalThis.String(object.resource)
        : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      importDerivedRoles: globalThis.Array.isArray(object?.importDerivedRoles)
        ? object.importDerivedRoles.map((e: any) => globalThis.String(e))
        : [],
      rules: globalThis.Array.isArray(object?.rules)
        ? object.rules.map((e: any) => ResourceRule.fromJSON(e))
        : [],
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
      schemas: isSet(object.schemas)
        ? Schemas.fromJSON(object.schemas)
        : undefined,
      variables: isSet(object.variables)
        ? Variables.fromJSON(object.variables)
        : undefined,
      scopePermissions: isSet(object.scopePermissions)
        ? scopePermissionsFromJSON(object.scopePermissions)
        : 0,
      constants: isSet(object.constants)
        ? Constants.fromJSON(object.constants)
        : undefined,
    };
  },
};

export const ResourceRule: MessageFns<ResourceRule> = {
  fromJSON(object: any): ResourceRule {
    return {
      actions: globalThis.Array.isArray(object?.actions)
        ? object.actions.map((e: any) => globalThis.String(e))
        : [],
      derivedRoles: globalThis.Array.isArray(object?.derivedRoles)
        ? object.derivedRoles.map((e: any) => globalThis.String(e))
        : [],
      roles: globalThis.Array.isArray(object?.roles)
        ? object.roles.map((e: any) => globalThis.String(e))
        : [],
      condition: isSet(object.condition)
        ? Condition.fromJSON(object.condition)
        : undefined,
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      output: isSet(object.output) ? Output.fromJSON(object.output) : undefined,
    };
  },
};

export const RolePolicy: MessageFns<RolePolicy> = {
  fromJSON(object: any): RolePolicy {
    return {
      policyType: isSet(object.role)
        ? { $case: "role", role: globalThis.String(object.role) }
        : undefined,
      parentRoles: globalThis.Array.isArray(object?.parentRoles)
        ? object.parentRoles.map((e: any) => globalThis.String(e))
        : [],
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
      rules: globalThis.Array.isArray(object?.rules)
        ? object.rules.map((e: any) => RoleRule.fromJSON(e))
        : [],
      scopePermissions: isSet(object.scopePermissions)
        ? scopePermissionsFromJSON(object.scopePermissions)
        : 0,
    };
  },
};

export const RoleRule: MessageFns<RoleRule> = {
  fromJSON(object: any): RoleRule {
    return {
      resource: isSet(object.resource)
        ? globalThis.String(object.resource)
        : "",
      allowActions: globalThis.Array.isArray(object?.allowActions)
        ? object.allowActions.map((e: any) => globalThis.String(e))
        : [],
      condition: isSet(object.condition)
        ? Condition.fromJSON(object.condition)
        : undefined,
    };
  },
};

export const PrincipalPolicy: MessageFns<PrincipalPolicy> = {
  fromJSON(object: any): PrincipalPolicy {
    return {
      principal: isSet(object.principal)
        ? globalThis.String(object.principal)
        : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      rules: globalThis.Array.isArray(object?.rules)
        ? object.rules.map((e: any) => PrincipalRule.fromJSON(e))
        : [],
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
      variables: isSet(object.variables)
        ? Variables.fromJSON(object.variables)
        : undefined,
      scopePermissions: isSet(object.scopePermissions)
        ? scopePermissionsFromJSON(object.scopePermissions)
        : 0,
      constants: isSet(object.constants)
        ? Constants.fromJSON(object.constants)
        : undefined,
    };
  },
};

export const PrincipalRule: MessageFns<PrincipalRule> = {
  fromJSON(object: any): PrincipalRule {
    return {
      resource: isSet(object.resource)
        ? globalThis.String(object.resource)
        : "",
      actions: globalThis.Array.isArray(object?.actions)
        ? object.actions.map((e: any) => PrincipalRule_Action.fromJSON(e))
        : [],
    };
  },
};

export const PrincipalRule_Action: MessageFns<PrincipalRule_Action> = {
  fromJSON(object: any): PrincipalRule_Action {
    return {
      action: isSet(object.action) ? globalThis.String(object.action) : "",
      condition: isSet(object.condition)
        ? Condition.fromJSON(object.condition)
        : undefined,
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      output: isSet(object.output) ? Output.fromJSON(object.output) : undefined,
    };
  },
};

export const DerivedRoles: MessageFns<DerivedRoles> = {
  fromJSON(object: any): DerivedRoles {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      definitions: globalThis.Array.isArray(object?.definitions)
        ? object.definitions.map((e: any) => RoleDef.fromJSON(e))
        : [],
      variables: isSet(object.variables)
        ? Variables.fromJSON(object.variables)
        : undefined,
      constants: isSet(object.constants)
        ? Constants.fromJSON(object.constants)
        : undefined,
    };
  },
};

export const RoleDef: MessageFns<RoleDef> = {
  fromJSON(object: any): RoleDef {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      parentRoles: globalThis.Array.isArray(object?.parentRoles)
        ? object.parentRoles.map((e: any) => globalThis.String(e))
        : [],
      condition: isSet(object.condition)
        ? Condition.fromJSON(object.condition)
        : undefined,
    };
  },
};

export const ExportConstants: MessageFns<ExportConstants> = {
  fromJSON(object: any): ExportConstants {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      definitions: isObject(object.definitions)
        ? Object.entries(object.definitions).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },
};

export const ExportConstants_DefinitionsEntry: MessageFns<ExportConstants_DefinitionsEntry> =
  {
    fromJSON(object: any): ExportConstants_DefinitionsEntry {
      return {
        key: isSet(object.key) ? globalThis.String(object.key) : "",
        value: isSet(object?.value) ? object.value : undefined,
      };
    },
  };

export const Constants: MessageFns<Constants> = {
  fromJSON(object: any): Constants {
    return {
      import: globalThis.Array.isArray(object?.import)
        ? object.import.map((e: any) => globalThis.String(e))
        : [],
      local: isObject(object.local)
        ? Object.entries(object.local).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },
};

export const Constants_LocalEntry: MessageFns<Constants_LocalEntry> = {
  fromJSON(object: any): Constants_LocalEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },
};

export const ExportVariables: MessageFns<ExportVariables> = {
  fromJSON(object: any): ExportVariables {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
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
};

export const ExportVariables_DefinitionsEntry: MessageFns<ExportVariables_DefinitionsEntry> =
  {
    fromJSON(object: any): ExportVariables_DefinitionsEntry {
      return {
        key: isSet(object.key) ? globalThis.String(object.key) : "",
        value: isSet(object.value) ? globalThis.String(object.value) : "",
      };
    },
  };

export const Variables: MessageFns<Variables> = {
  fromJSON(object: any): Variables {
    return {
      import: globalThis.Array.isArray(object?.import)
        ? object.import.map((e: any) => globalThis.String(e))
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
};

export const Variables_LocalEntry: MessageFns<Variables_LocalEntry> = {
  fromJSON(object: any): Variables_LocalEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },
};

export const Condition: MessageFns<Condition> = {
  fromJSON(object: any): Condition {
    return {
      condition: isSet(object.match)
        ? { $case: "match", match: Match.fromJSON(object.match) }
        : isSet(object.script)
          ? { $case: "script", script: globalThis.String(object.script) }
          : undefined,
    };
  },
};

export const Match: MessageFns<Match> = {
  fromJSON(object: any): Match {
    return {
      op: isSet(object.all)
        ? { $case: "all", all: Match_ExprList.fromJSON(object.all) }
        : isSet(object.any)
          ? { $case: "any", any: Match_ExprList.fromJSON(object.any) }
          : isSet(object.none)
            ? { $case: "none", none: Match_ExprList.fromJSON(object.none) }
            : isSet(object.expr)
              ? { $case: "expr", expr: globalThis.String(object.expr) }
              : undefined,
    };
  },
};

export const Match_ExprList: MessageFns<Match_ExprList> = {
  fromJSON(object: any): Match_ExprList {
    return {
      of: globalThis.Array.isArray(object?.of)
        ? object.of.map((e: any) => Match.fromJSON(e))
        : [],
    };
  },
};

export const Output: MessageFns<Output> = {
  fromJSON(object: any): Output {
    return {
      expr: isSet(object.expr) ? globalThis.String(object.expr) : "",
      when: isSet(object.when) ? Output_When.fromJSON(object.when) : undefined,
    };
  },
};

export const Output_When: MessageFns<Output_When> = {
  fromJSON(object: any): Output_When {
    return {
      ruleActivated: isSet(object.ruleActivated)
        ? globalThis.String(object.ruleActivated)
        : "",
      conditionNotMet: isSet(object.conditionNotMet)
        ? globalThis.String(object.conditionNotMet)
        : "",
    };
  },
};

export const Schemas: MessageFns<Schemas> = {
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
};

export const Schemas_IgnoreWhen: MessageFns<Schemas_IgnoreWhen> = {
  fromJSON(object: any): Schemas_IgnoreWhen {
    return {
      actions: globalThis.Array.isArray(object?.actions)
        ? object.actions.map((e: any) => globalThis.String(e))
        : [],
    };
  },
};

export const Schemas_Schema: MessageFns<Schemas_Schema> = {
  fromJSON(object: any): Schemas_Schema {
    return {
      ref: isSet(object.ref) ? globalThis.String(object.ref) : "",
      ignoreWhen: isSet(object.ignoreWhen)
        ? Schemas_IgnoreWhen.fromJSON(object.ignoreWhen)
        : undefined,
    };
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  fromJSON(object: any): T;
}
