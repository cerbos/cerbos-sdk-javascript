/* eslint-disable @typescript-eslint/no-deprecated */

import { v4 as uuidv4 } from "uuid";

import { Effect as EffectProtobuf } from "../protobuf/cerbos/effect/v1/effect";
import type {
  PlanResourcesInput_Resource,
  Principal as PrincipalProtobuf,
  Resource as ResourceProtobuf,
} from "../protobuf/cerbos/engine/v1/engine";
import type {
  Condition as ConditionProtobuf,
  Constants as ConstantsProtobuf,
  DerivedRoles as DerivedRolesProtobuf,
  ExportConstants as ExportConstantsProtobuf,
  ExportVariables as ExportVariablesProtobuf,
  Match as MatchProtobuf,
  Match_ExprList,
  Output as OutputProtobuf,
  Output_When,
  Policy as PolicyProtobuf,
  PrincipalPolicy as PrincipalPolicyProtobuf,
  PrincipalRule as PrincipalRuleProtobuf,
  PrincipalRule_Action,
  ResourcePolicy as ResourcePolicyProtobuf,
  ResourceRule as ResourceRuleProtobuf,
  RoleDef,
  Schemas,
  Schemas_Schema,
  Variables as VariablesProtobuf,
} from "../protobuf/cerbos/policy/v1/policy";
import { ScopePermissions as ScopePermissionsProtobuf } from "../protobuf/cerbos/policy/v1/policy";
import type {
  AddOrUpdatePolicyRequest,
  AddOrUpdateSchemaRequest,
  AuxData as AuxDataProtobuf,
  AuxData_JWT,
  CheckResourcesRequest as CheckResourcesRequestProtobuf,
  CheckResourcesRequest_ResourceEntry,
  DeleteSchemaRequest,
  DisablePolicyRequest,
  EnablePolicyRequest,
  GetPolicyRequest,
  GetSchemaRequest,
  ListAuditLogEntriesRequest,
  ListPoliciesRequest as ListPoliciesRequestProtobuf,
  PlanResourcesRequest as PlanResourcesRequestProtobuf,
} from "../protobuf/cerbos/request/v1/request";
import { ListAuditLogEntriesRequest_Kind } from "../protobuf/cerbos/request/v1/request";
import type { Schema } from "../protobuf/cerbos/schema/v1/schema";
import type { Duration } from "../protobuf/google/protobuf/duration";
import type {
  AddOrUpdatePoliciesRequest,
  AddOrUpdateSchemasRequest,
  AuditLogFilter,
  AuxData,
  CheckResourcesRequest,
  Condition,
  Constants,
  DeleteSchemasRequest,
  DerivedRoleDefinition,
  DerivedRoles,
  DisablePoliciesRequest,
  EnablePoliciesRequest,
  ExportConstants,
  ExportVariables,
  GetPoliciesRequest,
  GetSchemasRequest,
  JWT,
  ListAccessLogEntriesRequest,
  ListDecisionLogEntriesRequest,
  ListPoliciesRequest,
  Match,
  Matches,
  Output,
  OutputExpressions,
  PlanResourcesRequest,
  Policy,
  Principal,
  PrincipalPolicy,
  PrincipalRule,
  PrincipalRuleAction,
  Resource,
  ResourceCheck,
  ResourcePolicy,
  ResourceQuery,
  ResourceRule,
  SchemaDefinitionInput,
  SchemaInput,
  SchemaRef,
  SchemaRefs,
  Variables,
} from "../types/external";
import {
  Effect,
  SchemaDefinition,
  ScopePermissions,
  auditLogFilterIsBetween,
  auditLogFilterIsSince,
  auditLogFilterIsTail,
  matchIsMatchAll,
  matchIsMatchAny,
  matchIsMatchExpr,
  matchIsMatchNone,
  policyIsDerivedRoles,
  policyIsExportConstants,
  policyIsExportVariables,
  policyIsPrincipalPolicy,
  policyIsResourcePolicy,
} from "../types/external";

const encoder = new TextEncoder();

export function addOrUpdatePoliciesRequestToProtobuf({
  policies,
}: AddOrUpdatePoliciesRequest): AddOrUpdatePolicyRequest {
  return {
    policies: policies.map(policyToProtobuf),
  };
}

function policyToProtobuf(policy: Policy): PolicyProtobuf {
  const {
    apiVersion = "api.cerbos.dev/v1",
    description = "",
    disabled = false,
    variables = {},
  } = policy;

  return {
    apiVersion,
    description,
    disabled,
    jsonSchema: "",
    metadata: undefined,
    policyType: policyTypeToProtobuf(policy),
    variables,
  };
}

function policyTypeToProtobuf(
  policy: Policy,
): Exclude<PolicyProtobuf["policyType"], undefined> {
  if (policyIsDerivedRoles(policy)) {
    return {
      $case: "derivedRoles",
      derivedRoles: derivedRolesToProtobuf(policy),
    };
  }

  if (policyIsExportConstants(policy)) {
    return {
      $case: "exportConstants",
      exportConstants: exportConstantsToProtobuf(policy),
    };
  }

  if (policyIsExportVariables(policy)) {
    return {
      $case: "exportVariables",
      exportVariables: exportVariablesToProtobuf(policy),
    };
  }

  if (policyIsPrincipalPolicy(policy)) {
    return {
      $case: "principalPolicy",
      principalPolicy: principalPolicyToProtobuf(policy),
    };
  }

  if (policyIsResourcePolicy(policy)) {
    return {
      $case: "resourcePolicy",
      resourcePolicy: resourcePolicyToProtobuf(policy),
    };
  }

  throw new Error(`Unknown policy type: ${JSON.stringify(policy, null, 2)}`);
}

function derivedRolesToProtobuf({
  derivedRoles: { name, definitions, constants, variables },
}: DerivedRoles): DerivedRolesProtobuf {
  return {
    name,
    definitions: definitions.map(derivedRoleDefinitionToProtobuf),
    constants: constants && constantsToProtobuf(constants),
    variables: variables && variablesToProtobuf(variables),
  };
}

function derivedRoleDefinitionToProtobuf({
  name,
  parentRoles,
  condition,
}: DerivedRoleDefinition): RoleDef {
  return {
    name,
    parentRoles,
    condition: condition && conditionToProtobuf(condition),
  };
}

function conditionToProtobuf({ match }: Condition): ConditionProtobuf {
  return {
    condition: {
      $case: "match",
      match: matchToProtobuf(match),
    },
  };
}

function matchToProtobuf(match: Match): MatchProtobuf {
  if (matchIsMatchAll(match)) {
    return {
      op: {
        $case: "all",
        all: matchesToProtobuf(match.all),
      },
    };
  }

  if (matchIsMatchAny(match)) {
    return {
      op: {
        $case: "any",
        any: matchesToProtobuf(match.any),
      },
    };
  }

  if (matchIsMatchNone(match)) {
    return {
      op: {
        $case: "none",
        none: matchesToProtobuf(match.none),
      },
    };
  }

  if (matchIsMatchExpr(match)) {
    return {
      op: {
        $case: "expr",
        expr: match.expr,
      },
    };
  }

  throw new Error(`Unknown match type: ${JSON.stringify(match, null, 2)}`);
}

function matchesToProtobuf({ of }: Matches): Match_ExprList {
  return {
    of: of.map(matchToProtobuf),
  };
}

function constantsToProtobuf({
  import: imports = [],
  local = {},
}: Constants): ConstantsProtobuf {
  return {
    import: imports,
    local,
  };
}

function exportConstantsToProtobuf({
  exportConstants: { name, definitions },
}: ExportConstants): ExportConstantsProtobuf {
  return {
    name,
    definitions,
  };
}

function variablesToProtobuf({
  import: imports = [],
  local = {},
}: Variables): VariablesProtobuf {
  return {
    import: imports,
    local,
  };
}

function exportVariablesToProtobuf({
  exportVariables: { name, definitions },
}: ExportVariables): ExportVariablesProtobuf {
  return {
    name,
    definitions,
  };
}

function principalPolicyToProtobuf({
  principalPolicy: {
    principal,
    version,
    rules,
    scope = "",
    scopePermissions,
    constants,
    variables,
  },
}: PrincipalPolicy): PrincipalPolicyProtobuf {
  return {
    principal,
    version,
    rules: rules.map(principalRuleToProtobuf),
    scope,
    scopePermissions: scopePermissionsToProtobuf(scopePermissions),
    constants: constants && constantsToProtobuf(constants),
    variables: variables && variablesToProtobuf(variables),
  };
}

function principalRuleToProtobuf({
  resource,
  actions,
}: PrincipalRule): PrincipalRuleProtobuf {
  return {
    resource,
    actions: actions.map(principalRuleActionToProtobuf),
  };
}

function principalRuleActionToProtobuf({
  action,
  effect,
  condition,
  name = "",
  output,
}: PrincipalRuleAction): PrincipalRule_Action {
  return {
    action,
    effect: effectToProtobuf(effect),
    condition: condition && conditionToProtobuf(condition),
    name,
    output: output && outputToProtobuf(output),
  };
}

function scopePermissionsToProtobuf(
  scopePermissions: ScopePermissions | undefined,
): ScopePermissionsProtobuf {
  switch (scopePermissions) {
    case ScopePermissions.OVERRIDE_PARENT:
      return ScopePermissionsProtobuf.SCOPE_PERMISSIONS_OVERRIDE_PARENT;

    case ScopePermissions.REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS:
      return ScopePermissionsProtobuf.SCOPE_PERMISSIONS_REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS;

    default:
      return ScopePermissionsProtobuf.SCOPE_PERMISSIONS_UNSPECIFIED;
  }
}

function effectToProtobuf(effect: Effect): EffectProtobuf {
  return effect === Effect.ALLOW
    ? EffectProtobuf.EFFECT_ALLOW
    : EffectProtobuf.EFFECT_DENY;
}

function outputToProtobuf({ expr = "", when }: Output): OutputProtobuf {
  return {
    expr,
    when: when && outputExpressionsToProtobuf(when),
  };
}

function outputExpressionsToProtobuf({
  ruleActivated = "",
  conditionNotMet = "",
}: OutputExpressions): Output_When {
  return {
    ruleActivated,
    conditionNotMet,
  };
}

function resourcePolicyToProtobuf({
  resourcePolicy: {
    resource,
    version,
    importDerivedRoles = [],
    rules,
    scope = "",
    scopePermissions,
    schemas,
    constants,
    variables,
  },
}: ResourcePolicy): ResourcePolicyProtobuf {
  return {
    resource,
    version,
    importDerivedRoles,
    rules: rules.map(resourceRuleToProtobuf),
    scope,
    scopePermissions: scopePermissionsToProtobuf(scopePermissions),
    schemas: schemas && policySchemasToProtobuf(schemas),
    constants: constants && constantsToProtobuf(constants),
    variables: variables && variablesToProtobuf(variables),
  };
}

function resourceRuleToProtobuf({
  actions,
  effect,
  derivedRoles = [],
  roles = [],
  condition,
  name = "",
  output,
}: ResourceRule): ResourceRuleProtobuf {
  return {
    actions,
    effect: effectToProtobuf(effect),
    derivedRoles,
    roles,
    condition: condition && conditionToProtobuf(condition),
    name,
    output: output && outputToProtobuf(output),
  };
}

function policySchemasToProtobuf({
  principalSchema,
  resourceSchema,
}: SchemaRefs): Schemas {
  return {
    principalSchema: principalSchema && policySchemaToProtobuf(principalSchema),
    resourceSchema: resourceSchema && policySchemaToProtobuf(resourceSchema),
  };
}

function policySchemaToProtobuf({
  ref,
  ignoreWhen,
}: SchemaRef): Schemas_Schema {
  return {
    ref,
    ignoreWhen,
  };
}

export function addOrUpdateSchemasRequestToProtobuf({
  schemas,
}: AddOrUpdateSchemasRequest): AddOrUpdateSchemaRequest {
  return {
    schemas: schemas.map(schemaToProtobuf),
  };
}

function schemaToProtobuf({ id, definition }: SchemaInput): Schema {
  return {
    id,
    definition: schemaDefinitionToProtobuf(definition),
  };
}

function schemaDefinitionToProtobuf(
  definition: SchemaDefinitionInput,
): Uint8Array {
  if (definition instanceof Uint8Array) {
    return definition;
  }

  if (definition instanceof SchemaDefinition) {
    return definition.bytes;
  }

  if (typeof definition === "string") {
    return encoder.encode(definition);
  }

  return encoder.encode(JSON.stringify(definition));
}

export function checkResourcesRequestToProtobuf({
  principal,
  resources,
  auxData,
  includeMetadata = false,
  requestId = uuidv4(),
}: CheckResourcesRequest): CheckResourcesRequestProtobuf {
  return {
    principal: principalToProtobuf(principal),
    resources: resources.map(resourceCheckToProtobuf),
    auxData: auxData && auxDataToProtobuf(auxData),
    includeMeta: includeMetadata,
    requestId,
  };
}

function principalToProtobuf({
  id,
  roles,
  attr = {},
  attributes = {},
  policyVersion = "",
  scope = "",
}: Principal): PrincipalProtobuf {
  return {
    id,
    roles,
    attr: {
      ...attributes,
      ...attr,
    },
    policyVersion,
    scope,
  };
}

function resourceCheckToProtobuf({
  resource,
  actions,
}: ResourceCheck): CheckResourcesRequest_ResourceEntry {
  return {
    resource: resourceToProtobuf(resource),
    actions,
  };
}

function resourceToProtobuf({
  kind,
  id,
  attr = {},
  attributes = {},
  policyVersion = "",
  scope = "",
}: Resource): ResourceProtobuf {
  return {
    kind,
    id,
    attr: {
      ...attributes,
      ...attr,
    },
    policyVersion,
    scope,
  };
}

function auxDataToProtobuf({ jwt }: AuxData): AuxDataProtobuf | undefined {
  if (!jwt) {
    return undefined;
  }

  return {
    jwt: jwtToProtobuf(jwt),
  };
}

function jwtToProtobuf({ token, keySetId = "" }: JWT): AuxData_JWT {
  return {
    token,
    keySetId,
  };
}

export function deleteSchemasRequestToProtobuf({
  ids,
}: DeleteSchemasRequest): DeleteSchemaRequest {
  return {
    id: ids,
  };
}

export function disablePoliciesRequestToProtobuf({
  ids,
}: DisablePoliciesRequest): DisablePolicyRequest {
  return {
    id: ids,
  };
}

export function enablePoliciesRequestToProtobuf({
  ids,
}: EnablePoliciesRequest): EnablePolicyRequest {
  return {
    id: ids,
  };
}

export function getPoliciesRequestToProtobuf({
  ids,
}: GetPoliciesRequest): GetPolicyRequest {
  return {
    id: ids,
  };
}

export function getSchemasRequestToProtobuf({
  ids,
}: GetSchemasRequest): GetSchemaRequest {
  return {
    id: ids,
  };
}

export function listAccessLogEntriesRequestToProtobuf({
  filter,
}: ListAccessLogEntriesRequest): ListAuditLogEntriesRequest {
  return {
    kind: ListAuditLogEntriesRequest_Kind.KIND_ACCESS,
    filter: auditLogFilterToProtobuf(filter),
  };
}

export function listDecisionLogEntriesRequestToProtobuf({
  filter,
}: ListDecisionLogEntriesRequest): ListAuditLogEntriesRequest {
  return {
    kind: ListAuditLogEntriesRequest_Kind.KIND_DECISION,
    filter: auditLogFilterToProtobuf(filter),
  };
}

function auditLogFilterToProtobuf(
  filter: AuditLogFilter,
): ListAuditLogEntriesRequest["filter"] {
  if (auditLogFilterIsBetween(filter)) {
    return {
      $case: "between",
      between: { start: filter.start, end: filter.end },
    };
  }

  if (auditLogFilterIsSince(filter)) {
    return {
      $case: "since",
      since: durationToProtobuf(filter.since),
    };
  }

  if (auditLogFilterIsTail(filter)) {
    return {
      $case: "tail",
      tail: filter.tail,
    };
  }

  return undefined;
}

function durationToProtobuf(duration: number): Duration {
  const [seconds, nanos] = duration.toFixed(9).split(".", 2) as [
    string,
    string,
  ];

  return {
    seconds,
    nanos: parseInt(nanos, 10),
  };
}

export function listPoliciesRequestToProtobuf({
  includeDisabled = false,
  ids = [],
  nameRegexp = "",
  scopeRegexp = "",
  versionRegexp = "",
}: ListPoliciesRequest): ListPoliciesRequestProtobuf {
  return {
    policyId: ids,
    includeDisabled,
    nameRegexp,
    scopeRegexp,
    versionRegexp,
  };
}

export function planResourcesRequestToProtobuf({
  principal,
  resource,
  action,
  auxData,
  includeMetadata = false,
  requestId = uuidv4(),
}: PlanResourcesRequest): PlanResourcesRequestProtobuf {
  return {
    principal: principalToProtobuf(principal),
    resource: resourceQueryToProtobuf(resource),
    action,
    auxData: auxData && auxDataToProtobuf(auxData),
    includeMeta: includeMetadata,
    requestId,
  };
}

function resourceQueryToProtobuf({
  kind,
  attr = {},
  attributes = {},
  policyVersion = "",
  scope = "",
}: ResourceQuery): PlanResourcesInput_Resource {
  return {
    kind,
    attr: {
      ...attributes,
      ...attr,
    },
    policyVersion,
    scope,
  };
}
