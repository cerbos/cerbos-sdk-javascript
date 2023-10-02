import { v4 as uuidv4 } from "uuid";

import { Effect as EffectProtobuf } from "../protobuf/cerbos/effect/v1/effect";
import type {
  PlanResourcesInput_Resource,
  Principal as PrincipalProtobuf,
  Resource as ResourceProtobuf,
} from "../protobuf/cerbos/engine/v1/engine";
import type {
  Condition as ConditionProtobuf,
  DerivedRoles as DerivedRolesProtobuf,
  ExportVariables as ExportVariablesProtobuf,
  Match as MatchProtobuf,
  Match_ExprList,
  Output as OutputProtobuf,
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
  ListPoliciesRequest as ListPoliciesRequestProtobuf,
  PlanResourcesRequest as PlanResourcesRequestProtobuf,
} from "../protobuf/cerbos/request/v1/request";
import type { Schema } from "../protobuf/cerbos/schema/v1/schema";
import type {
  AddOrUpdatePoliciesRequest,
  AddOrUpdateSchemasRequest,
  AuxData,
  CheckResourcesRequest,
  Condition,
  DeleteSchemasRequest,
  DerivedRoleDefinition,
  DerivedRoles,
  EnablePoliciesRequest,
  ExportVariables,
  GetPoliciesRequest,
  JWT,
  ListPoliciesRequest,
  Match,
  Matches,
  Output,
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
  matchIsMatchAll,
  matchIsMatchAny,
  matchIsMatchExpr,
  matchIsMatchNone,
  policyIsDerivedRoles,
  policyIsExportVariables,
  policyIsPrincipalPolicy,
  policyIsResourcePolicy,
} from "../types/external";
import type { DisablePoliciesRequest } from "../types/external/DisablePoliciesRequest";
import type { GetSchemasRequest } from "../types/external/GetSchemasRequest";

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
  derivedRoles: { name, definitions, variables },
}: DerivedRoles): DerivedRolesProtobuf {
  return {
    name,
    definitions: definitions.map(derivedRoleDefinitionToProtobuf),
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
  principalPolicy: { principal, version, rules, scope = "", variables },
}: PrincipalPolicy): PrincipalPolicyProtobuf {
  return {
    principal,
    version,
    rules: rules.map(principalRuleToProtobuf),
    scope,
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

function effectToProtobuf(effect: Effect): EffectProtobuf {
  return effect === Effect.ALLOW
    ? EffectProtobuf.EFFECT_ALLOW
    : EffectProtobuf.EFFECT_DENY;
}

function outputToProtobuf({ expr }: Output): OutputProtobuf {
  return { expr };
}

function resourcePolicyToProtobuf({
  resourcePolicy: {
    resource,
    version,
    importDerivedRoles = [],
    rules,
    scope = "",
    schemas,
    variables,
  },
}: ResourcePolicy): ResourcePolicyProtobuf {
  return {
    resource,
    version,
    importDerivedRoles,
    rules: rules.map(resourceRuleToProtobuf),
    scope,
    schemas: schemas && policySchemasToProtobuf(schemas),
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

function auxDataToProtobuf({ jwt }: AuxData): AuxDataProtobuf {
  return {
    jwt: jwt && jwtToProtobuf(jwt),
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

export function listPoliciesRequestToProtobuf({
  includeDisabled = false,
  nameRegexp = "",
  scopeRegexp = "",
  versionRegexp = "",
}: ListPoliciesRequest): ListPoliciesRequestProtobuf {
  return {
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
