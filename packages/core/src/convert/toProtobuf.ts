/* eslint-disable @typescript-eslint/no-deprecated */

import { fromJson } from "@bufbuild/protobuf";
import type { Duration, Value as ValueProtobuf } from "@bufbuild/protobuf/wkt";
import { ValueSchema, timestampFromDate } from "@bufbuild/protobuf/wkt";
import { v4 as uuidv4 } from "uuid";

import type { RequestContextValid } from "@cerbos/api/cerbos/audit/v1/audit_pb";
import { Effect as EffectProtobuf } from "@cerbos/api/cerbos/effect/v1/effect_pb";
import type {
  PlanResourcesInput_ResourceValid,
  PrincipalValid,
  ResourceValid,
} from "@cerbos/api/cerbos/engine/v1/engine_pb";
import type {
  ConditionValid,
  ConstantsValid,
  DerivedRolesValid,
  ExportConstantsValid,
  ExportVariablesValid,
  MatchValid,
  Match_ExprListValid,
  OutputValid,
  Output_WhenValid,
  PolicyValid,
  PrincipalPolicyValid,
  PrincipalRuleValid,
  PrincipalRule_ActionValid,
  ResourcePolicyValid,
  ResourceRuleValid,
  RoleDefValid,
  RolePolicyValid,
  RoleRuleValid,
  SchemasValid,
  Schemas_SchemaValid,
  VariablesValid,
} from "@cerbos/api/cerbos/policy/v1/policy_pb";
import { ScopePermissions as ScopePermissionsProtobuf } from "@cerbos/api/cerbos/policy/v1/policy_pb";
import type {
  AddOrUpdatePolicyRequestValid,
  AddOrUpdateSchemaRequestValid,
  AuxDataValid,
  AuxData_JWTValid,
  CheckResourcesRequestValid,
  CheckResourcesRequest_ResourceEntryValid,
  DeletePolicyRequestValid,
  DeleteSchemaRequestValid,
  DisablePolicyRequestValid,
  EnablePolicyRequestValid,
  GetPolicyRequestValid,
  GetSchemaRequestValid,
  InspectPoliciesRequestValid,
  ListAuditLogEntriesRequestValid,
  ListPoliciesRequestValid,
  PlanResourcesRequestValid,
  ReloadStoreRequestValid,
} from "@cerbos/api/cerbos/request/v1/request_pb";
import { ListAuditLogEntriesRequest_Kind } from "@cerbos/api/cerbos/request/v1/request_pb";
import type { SchemaValid } from "@cerbos/api/cerbos/schema/v1/schema_pb";
import type { HealthCheckRequestValid } from "@cerbos/api/grpc/health/v1/health_pb";

import type {
  AddOrUpdatePoliciesRequest,
  AddOrUpdateSchemasRequest,
  AuditLogFilter,
  AuxData,
  CheckResourcesRequest,
  Condition,
  Constants,
  DeletePoliciesRequest,
  DeleteSchemasRequest,
  DerivedRoleDefinition,
  DerivedRoles,
  DisablePoliciesRequest,
  EnablePoliciesRequest,
  ExportConstants,
  ExportVariables,
  GetPoliciesRequest,
  GetSchemasRequest,
  HealthCheckRequest,
  InspectPoliciesRequest,
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
  ReloadStoreRequest,
  RequestContext,
  Resource,
  ResourceCheck,
  ResourcePolicy,
  ResourceQuery,
  ResourceRule,
  RolePolicy,
  RoleRule,
  SchemaDefinitionInput,
  SchemaInput,
  SchemaRef,
  SchemaRefs,
  Value,
  Variables,
} from "../types/external.js";
import {
  Effect,
  SchemaDefinition,
  ScopePermissions,
  Service,
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
  policyIsRolePolicy,
} from "../types/external.js";

const encoder = new TextEncoder();

export function addOrUpdatePoliciesRequestToProtobuf({
  policies,
}: AddOrUpdatePoliciesRequest): AddOrUpdatePolicyRequestValid {
  return {
    $typeName: "cerbos.request.v1.AddOrUpdatePolicyRequest",
    policies: policies.map(policyToProtobuf),
  };
}

/** @internal */
export function policyToProtobuf(policy: Policy): PolicyValid {
  const {
    apiVersion = "api.cerbos.dev/v1",
    description = "",
    disabled = false,
    variables = {},
  } = policy;

  return {
    $typeName: "cerbos.policy.v1.Policy",
    apiVersion,
    description,
    disabled,
    jsonSchema: "",
    policyType: policyTypeToProtobuf(policy),
    variables,
  };
}

function policyTypeToProtobuf(
  policy: Policy,
): Exclude<PolicyValid["policyType"], undefined> {
  if (policyIsDerivedRoles(policy)) {
    return {
      case: "derivedRoles",
      value: derivedRolesToProtobuf(policy),
    };
  }

  if (policyIsExportConstants(policy)) {
    return {
      case: "exportConstants",
      value: exportConstantsToProtobuf(policy),
    };
  }

  if (policyIsExportVariables(policy)) {
    return {
      case: "exportVariables",
      value: exportVariablesToProtobuf(policy),
    };
  }

  if (policyIsPrincipalPolicy(policy)) {
    return {
      case: "principalPolicy",
      value: principalPolicyToProtobuf(policy),
    };
  }

  if (policyIsResourcePolicy(policy)) {
    return {
      case: "resourcePolicy",
      value: resourcePolicyToProtobuf(policy),
    };
  }

  if (policyIsRolePolicy(policy)) {
    return {
      case: "rolePolicy",
      value: rolePolicyToProtobuf(policy),
    };
  }

  throw new Error(`Unknown policy type: ${JSON.stringify(policy, null, 2)}`);
}

function derivedRolesToProtobuf({
  derivedRoles: { name, definitions, constants, variables },
}: DerivedRoles): DerivedRolesValid {
  return {
    $typeName: "cerbos.policy.v1.DerivedRoles",
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
}: DerivedRoleDefinition): RoleDefValid {
  return {
    $typeName: "cerbos.policy.v1.RoleDef",
    name,
    parentRoles,
    condition: condition && conditionToProtobuf(condition),
  };
}

function conditionToProtobuf({ match }: Condition): ConditionValid {
  return {
    $typeName: "cerbos.policy.v1.Condition",
    condition: {
      case: "match",
      value: matchToProtobuf(match),
    },
  };
}

function matchToProtobuf(match: Match): MatchValid {
  if (matchIsMatchAll(match)) {
    return {
      $typeName: "cerbos.policy.v1.Match",
      op: {
        case: "all",
        value: matchesToProtobuf(match.all),
      },
    };
  }

  if (matchIsMatchAny(match)) {
    return {
      $typeName: "cerbos.policy.v1.Match",
      op: {
        case: "any",
        value: matchesToProtobuf(match.any),
      },
    };
  }

  if (matchIsMatchNone(match)) {
    return {
      $typeName: "cerbos.policy.v1.Match",
      op: {
        case: "none",
        value: matchesToProtobuf(match.none),
      },
    };
  }

  if (matchIsMatchExpr(match)) {
    return {
      $typeName: "cerbos.policy.v1.Match",
      op: {
        case: "expr",
        value: match.expr,
      },
    };
  }

  throw new Error(`Unknown match type: ${JSON.stringify(match, null, 2)}`);
}

function matchesToProtobuf({ of }: Matches): Match_ExprListValid {
  return {
    $typeName: "cerbos.policy.v1.Match.ExprList",
    of: of.map(matchToProtobuf),
  };
}

function constantsToProtobuf({
  import: imports = [],
  local = {},
}: Constants): ConstantsValid {
  return {
    $typeName: "cerbos.policy.v1.Constants",
    import: imports,
    local: valuesToProtobuf(local),
  };
}

function exportConstantsToProtobuf({
  exportConstants: { name, definitions },
}: ExportConstants): ExportConstantsValid {
  return {
    $typeName: "cerbos.policy.v1.ExportConstants",
    name,
    definitions: valuesToProtobuf(definitions),
  };
}

function variablesToProtobuf({
  import: imports = [],
  local = {},
}: Variables): VariablesValid {
  return {
    $typeName: "cerbos.policy.v1.Variables",
    import: imports,
    local,
  };
}

function exportVariablesToProtobuf({
  exportVariables: { name, definitions },
}: ExportVariables): ExportVariablesValid {
  return {
    $typeName: "cerbos.policy.v1.ExportVariables",
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
}: PrincipalPolicy): PrincipalPolicyValid {
  return {
    $typeName: "cerbos.policy.v1.PrincipalPolicy",
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
}: PrincipalRule): PrincipalRuleValid {
  return {
    $typeName: "cerbos.policy.v1.PrincipalRule",
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
}: PrincipalRuleAction): PrincipalRule_ActionValid {
  return {
    $typeName: "cerbos.policy.v1.PrincipalRule.Action",
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
      return ScopePermissionsProtobuf.OVERRIDE_PARENT;

    case ScopePermissions.REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS:
      return ScopePermissionsProtobuf.REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS;

    default:
      return ScopePermissionsProtobuf.UNSPECIFIED;
  }
}

function effectToProtobuf(effect: Effect): EffectProtobuf {
  return effect === Effect.ALLOW ? EffectProtobuf.ALLOW : EffectProtobuf.DENY;
}

function outputToProtobuf({ expr = "", when }: Output): OutputValid {
  return {
    $typeName: "cerbos.policy.v1.Output",
    expr,
    when: when && outputExpressionsToProtobuf(when),
  };
}

function outputExpressionsToProtobuf({
  ruleActivated = "",
  conditionNotMet = "",
}: OutputExpressions): Output_WhenValid {
  return {
    $typeName: "cerbos.policy.v1.Output.When",
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
}: ResourcePolicy): ResourcePolicyValid {
  return {
    $typeName: "cerbos.policy.v1.ResourcePolicy",
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
}: ResourceRule): ResourceRuleValid {
  return {
    $typeName: "cerbos.policy.v1.ResourceRule",
    actions,
    effect: effectToProtobuf(effect),
    derivedRoles,
    roles,
    condition: condition && conditionToProtobuf(condition),
    name,
    output: output && outputToProtobuf(output),
  };
}

function rolePolicyToProtobuf({
  rolePolicy: { role, version = "", parentRoles = [], scope = "", rules },
}: RolePolicy): RolePolicyValid {
  return {
    $typeName: "cerbos.policy.v1.RolePolicy",
    policyType: { case: "role", value: role },
    version,
    parentRoles,
    scope,
    scopePermissions: ScopePermissionsProtobuf.UNSPECIFIED,
    rules: rules.map(roleRuleToProtobuf),
  };
}

function roleRuleToProtobuf({
  resource,
  allowActions,
  condition,
}: RoleRule): RoleRuleValid {
  return {
    $typeName: "cerbos.policy.v1.RoleRule",
    resource,
    allowActions,
    condition: condition && conditionToProtobuf(condition),
  };
}

function policySchemasToProtobuf({
  principalSchema,
  resourceSchema,
}: SchemaRefs): SchemasValid {
  return {
    $typeName: "cerbos.policy.v1.Schemas",
    principalSchema: principalSchema && policySchemaToProtobuf(principalSchema),
    resourceSchema: resourceSchema && policySchemaToProtobuf(resourceSchema),
  };
}

function policySchemaToProtobuf({
  ref,
  ignoreWhen,
}: SchemaRef): Schemas_SchemaValid {
  return {
    $typeName: "cerbos.policy.v1.Schemas.Schema",
    ref,
    ignoreWhen: ignoreWhen && {
      $typeName: "cerbos.policy.v1.Schemas.IgnoreWhen",
      actions: ignoreWhen.actions,
    },
  };
}

export function addOrUpdateSchemasRequestToProtobuf({
  schemas,
}: AddOrUpdateSchemasRequest): AddOrUpdateSchemaRequestValid {
  return {
    $typeName: "cerbos.request.v1.AddOrUpdateSchemaRequest",
    schemas: schemas.map(schemaToProtobuf),
  };
}

function schemaToProtobuf({ id, definition }: SchemaInput): SchemaValid {
  return {
    $typeName: "cerbos.schema.v1.Schema",
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
  requestContext,
}: CheckResourcesRequest): CheckResourcesRequestValid {
  return {
    $typeName: "cerbos.request.v1.CheckResourcesRequest",
    principal: principalToProtobuf(principal),
    resources: resources.map(resourceCheckToProtobuf),
    auxData: auxData && auxDataToProtobuf(auxData),
    includeMeta: includeMetadata,
    requestId,
    requestContext: requestContext && requestContextToProtobuf(requestContext),
  };
}

function principalToProtobuf({
  id,
  roles,
  attr = {},
  attributes = {},
  policyVersion = "",
  scope = "",
}: Principal): PrincipalValid {
  return {
    $typeName: "cerbos.engine.v1.Principal",
    id,
    roles,
    attr: valuesToProtobuf({
      ...attributes,
      ...attr,
    }),
    policyVersion,
    scope,
  };
}

function resourceCheckToProtobuf({
  resource,
  actions,
}: ResourceCheck): CheckResourcesRequest_ResourceEntryValid {
  return {
    $typeName: "cerbos.request.v1.CheckResourcesRequest.ResourceEntry",
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
}: Resource): ResourceValid {
  return {
    $typeName: "cerbos.engine.v1.Resource",
    kind,
    id,
    attr: valuesToProtobuf({
      ...attributes,
      ...attr,
    }),
    policyVersion,
    scope,
  };
}

function auxDataToProtobuf({ jwt }: AuxData): AuxDataValid | undefined {
  if (!jwt) {
    return undefined;
  }

  return {
    $typeName: "cerbos.request.v1.AuxData",
    jwt: jwtToProtobuf(jwt),
  };
}

function jwtToProtobuf({ token, keySetId = "" }: JWT): AuxData_JWTValid {
  return {
    $typeName: "cerbos.request.v1.AuxData.JWT",
    token,
    keySetId,
  };
}

function requestContextToProtobuf({
  annotations,
}: RequestContext): RequestContextValid {
  return {
    $typeName: "cerbos.audit.v1.RequestContext",
    annotations: valuesToProtobuf(annotations),
  };
}

export function deletePoliciesRequestToProtobuf({
  ids,
}: DeletePoliciesRequest): DeletePolicyRequestValid {
  return {
    $typeName: "cerbos.request.v1.DeletePolicyRequest",
    id: ids,
  };
}

export function deleteSchemasRequestToProtobuf({
  ids,
}: DeleteSchemasRequest): DeleteSchemaRequestValid {
  return {
    $typeName: "cerbos.request.v1.DeleteSchemaRequest",
    id: ids,
  };
}

export function disablePoliciesRequestToProtobuf({
  ids,
}: DisablePoliciesRequest): DisablePolicyRequestValid {
  return {
    $typeName: "cerbos.request.v1.DisablePolicyRequest",
    id: ids,
  };
}

export function enablePoliciesRequestToProtobuf({
  ids,
}: EnablePoliciesRequest): EnablePolicyRequestValid {
  return {
    $typeName: "cerbos.request.v1.EnablePolicyRequest",
    id: ids,
  };
}

export function getPoliciesRequestToProtobuf({
  ids,
}: GetPoliciesRequest): GetPolicyRequestValid {
  return {
    $typeName: "cerbos.request.v1.GetPolicyRequest",
    id: ids,
  };
}

export function getSchemasRequestToProtobuf({
  ids,
}: GetSchemasRequest): GetSchemaRequestValid {
  return {
    $typeName: "cerbos.request.v1.GetSchemaRequest",
    id: ids,
  };
}

export function healthCheckRequestToProtobuf({
  service = Service.CERBOS,
}: HealthCheckRequest): HealthCheckRequestValid {
  return {
    $typeName: "grpc.health.v1.HealthCheckRequest",
    service,
  };
}

export function listAccessLogEntriesRequestToProtobuf({
  filter,
}: ListAccessLogEntriesRequest): ListAuditLogEntriesRequestValid {
  return {
    $typeName: "cerbos.request.v1.ListAuditLogEntriesRequest",
    kind: ListAuditLogEntriesRequest_Kind.ACCESS,
    filter: auditLogFilterToProtobuf(filter),
  };
}

export function listDecisionLogEntriesRequestToProtobuf({
  filter,
}: ListDecisionLogEntriesRequest): ListAuditLogEntriesRequestValid {
  return {
    $typeName: "cerbos.request.v1.ListAuditLogEntriesRequest",
    kind: ListAuditLogEntriesRequest_Kind.DECISION,
    filter: auditLogFilterToProtobuf(filter),
  };
}

function auditLogFilterToProtobuf(
  filter: AuditLogFilter,
): ListAuditLogEntriesRequestValid["filter"] {
  if (auditLogFilterIsBetween(filter)) {
    return {
      case: "between",
      value: {
        $typeName: "cerbos.request.v1.ListAuditLogEntriesRequest.TimeRange",
        start: timestampFromDate(filter.start),
        end: timestampFromDate(filter.end),
      },
    };
  }

  if (auditLogFilterIsSince(filter)) {
    return {
      case: "since",
      value: durationToProtobuf(filter.since),
    };
  }

  if (auditLogFilterIsTail(filter)) {
    return {
      case: "tail",
      value: filter.tail,
    };
  }

  return { case: undefined };
}

function durationToProtobuf(duration: number): Duration {
  const [seconds, nanos] = duration.toFixed(9).split(".", 2) as [
    string,
    string,
  ];

  return {
    $typeName: "google.protobuf.Duration",
    seconds: BigInt(seconds),
    nanos: parseInt(nanos, 10),
  };
}

export function inspectPoliciesRequestToProtobuf({
  includeDisabled = false,
  ids = [],
  nameRegexp = "",
  scopeRegexp = "",
  versionRegexp = "",
}: InspectPoliciesRequest): InspectPoliciesRequestValid {
  return {
    $typeName: "cerbos.request.v1.InspectPoliciesRequest",
    policyId: ids,
    includeDisabled,
    nameRegexp,
    scopeRegexp,
    versionRegexp,
  };
}

export function listPoliciesRequestToProtobuf({
  includeDisabled = false,
  ids = [],
  nameRegexp = "",
  scopeRegexp = "",
  versionRegexp = "",
}: ListPoliciesRequest): ListPoliciesRequestValid {
  return {
    $typeName: "cerbos.request.v1.ListPoliciesRequest",
    policyId: ids,
    includeDisabled,
    nameRegexp,
    scopeRegexp,
    versionRegexp,
  };
}

export function planResourcesRequestToProtobuf(
  request: PlanResourcesRequest,
): PlanResourcesRequestValid {
  const {
    principal,
    resource,
    auxData,
    includeMetadata = false,
    requestId = uuidv4(),
    requestContext,
  } = request;

  return {
    $typeName: "cerbos.request.v1.PlanResourcesRequest",
    principal: principalToProtobuf(principal),
    resource: resourceQueryToProtobuf(resource),
    ...planResourcesActionsToProtobuf(request),
    auxData: auxData && auxDataToProtobuf(auxData),
    includeMeta: includeMetadata,
    requestId,
    requestContext: requestContext && requestContextToProtobuf(requestContext),
  };
}

function planResourcesActionsToProtobuf(request: PlanResourcesRequest): {
  action: string;
  actions: string[];
} {
  if ("actions" in request) {
    return {
      action: "",
      actions: request.actions,
    };
  }

  return {
    action: request.action,
    actions: [],
  };
}

function resourceQueryToProtobuf({
  kind,
  attr = {},
  attributes = {},
  policyVersion = "",
  scope = "",
}: ResourceQuery): PlanResourcesInput_ResourceValid {
  return {
    $typeName: "cerbos.engine.v1.PlanResourcesInput.Resource",
    kind,
    attr: valuesToProtobuf({
      ...attributes,
      ...attr,
    }),
    policyVersion,
    scope,
  };
}

export function reloadStoreRequestToProtobuf({
  wait,
}: ReloadStoreRequest): ReloadStoreRequestValid {
  return {
    $typeName: "cerbos.request.v1.ReloadStoreRequest",
    wait,
  };
}

/** @internal */
export function valuesToProtobuf(
  values: Record<string, Value>,
): Record<string, ValueProtobuf> {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, valueToProtobuf(value)]),
  );
}

function valueToProtobuf(value: Value): ValueProtobuf {
  return fromJson(ValueSchema, value);
}
