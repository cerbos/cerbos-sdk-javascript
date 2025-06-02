/* eslint-disable @typescript-eslint/no-deprecated */

import type {
  AuditTrail as AuditTrailProtobuf,
  DecisionLogEntry as DecisionLogEntryProtobuf,
  DecisionLogEntry_CheckResources,
  DecisionLogEntry_PlanResources,
  MetaValues,
  Peer as PeerProtobuf,
} from "../protobuf/cerbos/audit/v1/audit";
import { Effect as EffectProtobuf } from "../protobuf/cerbos/effect/v1/effect";
import type {
  AuxData as AuxDataProtobuf,
  CheckInput as CheckInputProtobuf,
  CheckOutput as CheckOutputProtobuf,
  CheckOutput_ActionEffect,
  OutputEntry as OutputEntry,
  PlanResourcesFilter_Expression_Operand,
  PlanResourcesInput as PlanResourcesInputProtobuf,
  PlanResourcesInput_Resource,
  PlanResourcesOutput as PlanResourcesOutputProtobuf,
  Principal as PrincipalProtobuf,
  Resource as ResourceProtobuf,
} from "../protobuf/cerbos/engine/v1/engine";
import { PlanResourcesFilter_Kind } from "../protobuf/cerbos/engine/v1/engine";
import type {
  Condition as ConditionProtobuf,
  Constants as ConstantsProtobuf,
  DerivedRoles as DerivedRolesProtobuf,
  ExportConstants as ExportConstantsProtobuf,
  ExportVariables as ExportVariablesProtobuf,
  Match as MatchProtobuf,
  Match_ExprList,
  Metadata,
  Output as OutputProtobuf,
  Policy as PolicyProtobuf,
  PrincipalPolicy as PrincipalPolicyProtobuf,
  PrincipalRule as PrincipalRuleProtobuf,
  PrincipalRule_Action,
  ResourcePolicy as ResourcePolicyProtobuf,
  ResourceRule as ResourceRuleProtobuf,
  RoleDef,
  RolePolicy as RolePolicyProtobuf,
  RoleRule as RoleRuleProtobuf,
  Schemas,
  Schemas_Schema,
  SourceAttributes as SourceAttributesProtobuf,
  Variables as VariablesProtobuf,
} from "../protobuf/cerbos/policy/v1/policy";
import { ScopePermissions as ScopePermissionsProtobuf } from "../protobuf/cerbos/policy/v1/policy";
import type {
  CheckResourcesResponse as CheckResourcesResponseProtobuf,
  CheckResourcesResponse_ResultEntry,
  DeleteSchemaResponse,
  DisablePolicyResponse,
  EnablePolicyResponse,
  GetPolicyResponse,
  GetSchemaResponse,
  InspectPoliciesResponse as InspectPoliciesResponseProtobuf,
  InspectPoliciesResponse_Attribute,
  InspectPoliciesResponse_Constant,
  InspectPoliciesResponse_DerivedRole,
  InspectPoliciesResponse_Result,
  InspectPoliciesResponse_Variable,
  ListAuditLogEntriesResponse,
  ListPoliciesResponse as ListPoliciesResponseProtobuf,
  ListSchemasResponse as ListSchemasResponseProtobuf,
  PlanResourcesResponse as PlanResourcesResponseProtobuf,
  PlanResourcesResponse_Meta,
} from "../protobuf/cerbos/response/v1/response";
import {
  InspectPoliciesResponse_Attribute_Kind,
  InspectPoliciesResponse_Constant_Kind,
  InspectPoliciesResponse_DerivedRole_Kind,
  InspectPoliciesResponse_Variable_Kind,
} from "../protobuf/cerbos/response/v1/response";
import type {
  Schema as SchemaProtobuf,
  ValidationError as ValidationErrorProtobuf,
} from "../protobuf/cerbos/schema/v1/schema";
import { ValidationError_Source } from "../protobuf/cerbos/schema/v1/schema";
import type { HealthCheckResponse as HealthCheckResponseProtobuf } from "../protobuf/grpc/health/v1/health";
import { HealthCheckResponse_ServingStatus } from "../protobuf/grpc/health/v1/health";
import type {
  AccessLogEntry,
  AuditTrail,
  CheckInput,
  CheckOutput,
  CheckOutputActionEffect,
  Condition,
  Constants,
  DecisionLogEntry,
  DecisionLogEntryCheckResources,
  DecisionLogEntryMethod,
  DecisionLogEntryPlanResources,
  DecodedAuxData,
  DeleteSchemasResponse,
  DerivedRoleDefinition,
  DerivedRoles,
  DisablePoliciesResponse,
  EnablePoliciesResponse,
  ExportConstants,
  ExportVariables,
  GetPoliciesResponse,
  GetSchemasResponse,
  HealthCheckResponse,
  InspectPoliciesResponse,
  InspectedAttribute,
  InspectedConstant,
  InspectedDerivedRole,
  InspectedPolicy,
  InspectedVariable,
  ListPoliciesResponse,
  ListSchemasResponse,
  Match,
  Matches,
  Output,
  OutputResult,
  Peer,
  PlanExpressionOperand,
  PlanResourcesInput,
  PlanResourcesMetadata,
  PlanResourcesOutput,
  PlanResourcesOutputBase,
  PlanResourcesResponse,
  PlanResourcesResponseBase,
  Policy,
  PolicyBase,
  PolicyMetadata,
  Principal,
  PrincipalPolicy,
  PrincipalRule,
  PrincipalRuleAction,
  Resource,
  ResourcePolicy,
  ResourceQuery,
  ResourceRule,
  RolePolicy,
  RoleRule,
  Schema,
  SchemaRef,
  SchemaRefs,
  SourceAttributes,
  ValidationError,
  Value,
  Variables,
} from "../types/external";
import {
  CheckResourcesResponse,
  CheckResourcesResult,
  Effect,
  InspectedAttributeKind,
  InspectedConstantKind,
  InspectedDerivedRoleKind,
  InspectedVariableKind,
  PlanExpression,
  PlanExpressionValue,
  PlanExpressionVariable,
  PlanKind,
  SchemaDefinition,
  ScopePermissions,
  ServiceStatus,
  ValidationErrorSource,
} from "../types/external";
import type { OmitFromEach } from "../types/internal";

export function accessLogEntryFromProtobuf({
  entry,
}: ListAuditLogEntriesResponse): AccessLogEntry {
  requireOneOf("ListAuditLogEntriesResponse.entry", entry, "accessLogEntry");

  const { callId, timestamp, peer, metadata, method, statusCode, oversized } =
    entry.accessLogEntry;

  requireField("AccessLogEntry.timestamp", timestamp);
  requireField("AccessLogEntry.peer", peer);

  return {
    callId,
    timestamp,
    peer: peerFromProtobuf(peer),
    metadata: auditLogMetadataFromProtobuf(metadata),
    method,
    statusCode,
    oversized,
  };
}

export function decisionLogEntryFromProtobuf({
  entry,
}: ListAuditLogEntriesResponse): DecisionLogEntry {
  requireOneOf("ListAuditLogEntriesResponse.entry", entry, "decisionLogEntry");

  const { callId, timestamp, peer, metadata, auditTrail, method, oversized } =
    entry.decisionLogEntry;

  requireField("DecisionLogEntry.timestamp", timestamp);
  requireField("DecisionLogEntry.peer", peer);

  return {
    callId,
    timestamp,
    peer: peerFromProtobuf(peer),
    metadata: auditLogMetadataFromProtobuf(metadata),
    auditTrail: auditTrailFromProtobuf(auditTrail),
    method: decisionLogEntryMethodFromProtobuf(method),
    oversized,
  };
}

function peerFromProtobuf({
  address,
  authInfo,
  userAgent,
  forwardedFor,
}: PeerProtobuf): Peer {
  return {
    address,
    authInfo,
    userAgent,
    forwardedFor,
  };
}

function auditLogMetadataFromProtobuf(
  metadata: Record<string, MetaValues>,
): Record<string, string[]> {
  return Object.fromEntries(
    Object.entries(metadata).map(([key, { values }]) => [key, values]),
  );
}

function auditTrailFromProtobuf(
  { effectivePolicies }: AuditTrailProtobuf = { effectivePolicies: {} },
): AuditTrail {
  return {
    effectivePolicies: Object.fromEntries(
      Object.entries(effectivePolicies).map(([policyId, sourceAttributes]) => [
        policyId,
        sourceAttributesFromProtobuf(sourceAttributes),
      ]),
    ),
  };
}

function decisionLogEntryMethodFromProtobuf(
  method: DecisionLogEntryProtobuf["method"],
): DecisionLogEntryMethod {
  return transformOneOf("DecisionLogEntry.method", method, {
    checkResources: ({ checkResources }) =>
      decisionLogEntryCheckResourcesFromProtobuf(checkResources),

    planResources: ({ planResources }) =>
      decisionLogEntryPlanResourcesFromProtobuf(planResources),
  });
}

function decisionLogEntryCheckResourcesFromProtobuf({
  inputs,
  outputs,
  error,
}: DecisionLogEntry_CheckResources): DecisionLogEntryCheckResources {
  return {
    name: "CheckResources",
    inputs: inputs.map(checkInputFromProtobuf),
    outputs: outputs.map(checkOutputFromProtobuf),
    error: error || undefined,
  };
}

/** @internal */
export function checkInputFromProtobuf({
  requestId,
  principal,
  resource,
  actions,
  auxData,
}: CheckInputProtobuf): CheckInput {
  requireField("CheckInput.principal", principal);
  requireField("CheckInput.resource", resource);

  return {
    requestId,
    principal: principalFromProtobuf(principal),
    resource: resourceFromProtobuf(resource),
    actions,
    auxData: auxData && decodedAuxDataFromProtobuf(auxData),
  };
}

function principalFromProtobuf({
  id,
  roles,
  attr,
  policyVersion,
  scope,
}: PrincipalProtobuf): Required<Omit<Principal, "attributes">> {
  return {
    id,
    roles,
    attr,
    policyVersion,
    scope,
  };
}

function resourceFromProtobuf({
  kind,
  id,
  attr,
  policyVersion,
  scope,
}: ResourceProtobuf): Required<Omit<Resource, "attributes">> {
  return {
    kind,
    id,
    attr,
    policyVersion,
    scope,
  };
}

function decodedAuxDataFromProtobuf({ jwt }: AuxDataProtobuf): DecodedAuxData {
  return { jwt };
}

/** @internal */
export function checkOutputFromProtobuf({
  requestId,
  resourceId,
  actions,
  effectiveDerivedRoles,
  validationErrors,
  outputs,
}: CheckOutputProtobuf): CheckOutput {
  return {
    requestId,
    resourceId,
    actions: Object.fromEntries(
      Object.entries(actions).map(([action, effect]) => [
        action,
        checkOutputActionEffectFromProtobuf(effect),
      ]),
    ),
    effectiveDerivedRoles,
    validationErrors: validationErrors.map(validationErrorFromProtobuf),
    outputs: outputs.map(outputResultFromProtobuf),
  };
}

function checkOutputActionEffectFromProtobuf({
  effect,
  policy,
  scope,
}: CheckOutput_ActionEffect): CheckOutputActionEffect {
  return {
    effect: effectFromProtobuf(effect),
    policy,
    scope,
  };
}

function decisionLogEntryPlanResourcesFromProtobuf({
  input,
  output,
  error,
}: DecisionLogEntry_PlanResources): DecisionLogEntryPlanResources {
  requireField("DecisionLogEntry.PlanResources.input", input);
  requireField("DecisionLogEntry.PlanResources.output", output);

  return {
    name: "PlanResources",
    input: planResourcesInputFromProtobuf(input),
    output: planResourcesOutputFromProtobuf(output),
    error: error || undefined,
  };
}

function planResourcesInputFromProtobuf({
  requestId,
  principal,
  resource,
  action,
  actions,
  auxData,
}: PlanResourcesInputProtobuf): PlanResourcesInput {
  requireField("PlanResourcesInput.principal", principal);
  requireField("PlanResourcesInput.resource", resource);

  return {
    requestId,
    principal: principalFromProtobuf(principal),
    resource: resourceQueryFromProtobuf(resource),
    ...planResourcesActionsFromProtobuf({ action, actions }),
    auxData: auxData && decodedAuxDataFromProtobuf(auxData),
  };
}

function resourceQueryFromProtobuf({
  kind,
  attr,
  policyVersion,
  scope,
}: PlanResourcesInput_Resource): Required<Omit<ResourceQuery, "attributes">> {
  return {
    kind,
    attr,
    policyVersion,
    scope,
  };
}

function planResourcesOutputFromProtobuf({
  requestId,
  filter,
  filterDebug,
  action,
  actions,
  policyVersion,
  scope,
  validationErrors,
}: PlanResourcesOutputProtobuf): PlanResourcesOutput {
  const base: PlanResourcesOutputBase = {
    requestId,
    ...planResourcesActionsFromProtobuf({ action, actions }),
    policyVersion,
    scope,
    validationErrors: validationErrors.map(validationErrorFromProtobuf),
  };

  requireField("PlanResourcesOutput.filter", filter);

  const kind = planKindFromProtobuf(filter.kind);

  if (kind !== PlanKind.CONDITIONAL) {
    return { ...base, kind };
  }

  requireField("PlanResourcesFilter.condition", filter.condition);

  return {
    ...base,
    kind,
    condition: planOperandFromProtobuf(filter.condition),
    conditionString: filterDebug,
  };
}

interface PlanResourcesActions {
  action: string;
  actions: string[];
}

function planResourcesActionsFromProtobuf({
  action,
  actions,
}: PlanResourcesActions): PlanResourcesActions {
  return {
    action: actions.length === 1 ? actions[0]! : action, // eslint-disable-line @typescript-eslint/no-non-null-assertion
    actions: actions.length ? actions : [action],
  };
}

export function checkResourcesResponseFromProtobuf({
  cerbosCallId,
  requestId,
  results,
}: CheckResourcesResponseProtobuf): CheckResourcesResponse {
  return new CheckResourcesResponse({
    cerbosCallId,
    requestId,
    results: results.map(checkResourcesResultFromProtobuf),
  });
}

function checkResourcesResultFromProtobuf({
  resource,
  actions,
  validationErrors,
  meta,
  outputs,
}: CheckResourcesResponse_ResultEntry): CheckResourcesResult {
  requireField("CheckResourcesResponse.ResultEntry.resource", resource);

  return new CheckResourcesResult({
    resource,
    actions: actionsFromProtobuf(actions),
    validationErrors: validationErrors.map(validationErrorFromProtobuf),
    metadata: meta,
    outputs: outputs.map(outputResultFromProtobuf),
  });
}

function actionsFromProtobuf(
  actions: Record<string, EffectProtobuf>,
): Record<string, Effect> {
  return Object.fromEntries(
    Object.entries(actions).map(([action, effect]) => [
      action,
      effectFromProtobuf(effect),
    ]),
  );
}

function effectFromProtobuf(effect: EffectProtobuf): Effect {
  return effect === EffectProtobuf.EFFECT_ALLOW ? Effect.ALLOW : Effect.DENY;
}

function validationErrorFromProtobuf({
  path,
  message,
  source,
}: ValidationErrorProtobuf): ValidationError {
  return {
    path,
    message,
    source: validationErrorSourceFromProtobuf(source),
  };
}

function validationErrorSourceFromProtobuf(
  source: ValidationError_Source,
): ValidationErrorSource {
  return translateEnum(
    "ValidationError.Source",
    ValidationError_Source,
    source,
    {
      [ValidationError_Source.SOURCE_UNSPECIFIED]: unexpected,
      [ValidationError_Source.SOURCE_PRINCIPAL]:
        ValidationErrorSource.PRINCIPAL,
      [ValidationError_Source.SOURCE_RESOURCE]: ValidationErrorSource.RESOURCE,
    },
  );
}

function outputResultFromProtobuf({ src, val }: OutputEntry): OutputResult {
  return {
    source: src,
    value: val as Value | undefined,
  };
}

export function deleteSchemasResponseFromProtobuf({
  deletedSchemas,
}: DeleteSchemaResponse): DeleteSchemasResponse {
  return { deletedSchemas };
}

export function disablePoliciesResponseFromProtobuf({
  disabledPolicies,
}: DisablePolicyResponse): DisablePoliciesResponse {
  return { disabledPolicies };
}

export function enablePoliciesResponseFromProtobuf({
  enabledPolicies,
}: EnablePolicyResponse): EnablePoliciesResponse {
  return { enabledPolicies };
}

export function getPoliciesResponseFromProtobuf({
  policies,
}: GetPolicyResponse): GetPoliciesResponse {
  return { policies: policies.map(policyFromProtobuf) };
}

export function healthCheckResponseFromProtobuf({
  status,
}: HealthCheckResponseProtobuf): HealthCheckResponse {
  return {
    status:
      status === HealthCheckResponse_ServingStatus.SERVING
        ? ServiceStatus.SERVING
        : ServiceStatus.NOT_SERVING,
  };
}

/** @internal */
export function policyFromProtobuf({
  apiVersion,
  description,
  disabled,
  metadata,
  variables,
  policyType,
}: PolicyProtobuf): Policy {
  return {
    apiVersion,
    description,
    disabled,
    metadata: metadata && policyMetadataFromProtobuf(metadata),
    variables,
    ...policyTypeFromProtobuf(policyType),
  };
}

function policyMetadataFromProtobuf({
  annotations,
  hash,
  sourceAttributes,
  sourceFile,
  storeIdentifer,
  storeIdentifier,
}: Metadata): PolicyMetadata {
  return {
    annotations,
    hash,
    sourceAttributes: sourceAttributesFromProtobuf(sourceAttributes),
    sourceFile,
    storeIdentifer: storeIdentifier || storeIdentifer,
    storeIdentifier: storeIdentifier || storeIdentifer,
  };
}

function sourceAttributesFromProtobuf(
  { attributes }: SourceAttributesProtobuf = { attributes: {} },
): SourceAttributes {
  return attributes;
}

type OmitPolicyBase<T extends Policy> = OmitFromEach<T, keyof PolicyBase>;

function policyTypeFromProtobuf(
  policyType: PolicyProtobuf["policyType"],
): OmitPolicyBase<Policy> {
  return transformOneOf("Policy.policyType", policyType, {
    derivedRoles: ({ derivedRoles }) => derivedRolesFromProtobuf(derivedRoles),

    exportConstants: ({ exportConstants }) =>
      exportConstantsFromProtobuf(exportConstants),

    exportVariables: ({ exportVariables }) =>
      exportVariablesFromProtobuf(exportVariables),

    principalPolicy: ({ principalPolicy }) =>
      principalPolicyFromProtobuf(principalPolicy),

    resourcePolicy: ({ resourcePolicy }) =>
      resourcePolicyFromProtobuf(resourcePolicy),

    rolePolicy: ({ rolePolicy }) => rolePolicyFromProtobuf(rolePolicy),
  });
}

function derivedRolesFromProtobuf({
  name,
  definitions,
  constants,
  variables,
}: DerivedRolesProtobuf): OmitPolicyBase<DerivedRoles> {
  return {
    derivedRoles: {
      name,
      definitions: definitions.map(derivedRoleDefinitionFromProtobuf),
      constants: constants && constantsFromProtobuf(constants),
      variables: variables && variablesFromProtobuf(variables),
    },
  };
}

function derivedRoleDefinitionFromProtobuf({
  name,
  parentRoles,
  condition,
}: RoleDef): DerivedRoleDefinition {
  return {
    name,
    parentRoles,
    condition: condition && conditionFromProtobuf(condition),
  };
}

function conditionFromProtobuf({ condition }: ConditionProtobuf): Condition {
  requireOneOf("Condition.condition", condition, "match");
  return { match: matchFromProtobuf(condition.match) };
}

function matchFromProtobuf({ op }: MatchProtobuf): Match {
  return transformOneOf("Match.op", op, {
    all: ({ all }) => ({ all: matchesFromProtobuf(all) }),
    any: ({ any }) => ({ any: matchesFromProtobuf(any) }),
    none: ({ none }) => ({ none: matchesFromProtobuf(none) }),
    expr: ({ expr }) => ({ expr }),
  });
}

function matchesFromProtobuf({ of }: Match_ExprList): Matches {
  return { of: of.map(matchFromProtobuf) };
}

function constantsFromProtobuf({
  import: imports,
  local,
}: ConstantsProtobuf): Constants {
  return {
    import: imports,
    local,
  };
}

function exportConstantsFromProtobuf({
  name,
  definitions,
}: ExportConstantsProtobuf): OmitPolicyBase<ExportConstants> {
  return {
    exportConstants: {
      name,
      definitions,
    },
  };
}

function variablesFromProtobuf({
  import: imports,
  local,
}: VariablesProtobuf): Variables {
  return {
    import: imports,
    local,
  };
}

function exportVariablesFromProtobuf({
  name,
  definitions,
}: ExportVariablesProtobuf): OmitPolicyBase<ExportVariables> {
  return {
    exportVariables: {
      name,
      definitions,
    },
  };
}

function principalPolicyFromProtobuf({
  principal,
  version,
  rules,
  scope,
  constants,
  variables,
}: PrincipalPolicyProtobuf): OmitPolicyBase<PrincipalPolicy> {
  return {
    principalPolicy: {
      principal,
      version,
      rules: rules.map(principalRuleFromProtobuf),
      scope,
      constants: constants && constantsFromProtobuf(constants),
      variables: variables && variablesFromProtobuf(variables),
    },
  };
}

function principalRuleFromProtobuf({
  resource,
  actions,
}: PrincipalRuleProtobuf): PrincipalRule {
  return {
    resource,
    actions: actions.map(principalRuleActionFromProtobuf),
  };
}

function principalRuleActionFromProtobuf({
  action,
  effect,
  condition,
  name,
  output,
}: PrincipalRule_Action): PrincipalRuleAction {
  return {
    action,
    effect: effectFromProtobuf(effect),
    condition: condition && conditionFromProtobuf(condition),
    name,
    output: output && outputFromProtobuf(output),
  };
}

function outputFromProtobuf({ expr, when }: OutputProtobuf): Output {
  const output: Output = {};

  if (expr) {
    output.expr = expr;
  }

  if (when) {
    output.when = when;
  }

  return output;
}

function resourcePolicyFromProtobuf({
  resource,
  version,
  importDerivedRoles,
  rules,
  schemas,
  scope,
  constants,
  variables,
}: ResourcePolicyProtobuf): OmitPolicyBase<ResourcePolicy> {
  return {
    resourcePolicy: {
      resource,
      version,
      importDerivedRoles,
      rules: rules.map(resourceRuleFromProtobuf),
      schemas: schemas && schemaRefsFromProtobuf(schemas),
      scope,
      constants: constants && constantsFromProtobuf(constants),
      variables: variables && variablesFromProtobuf(variables),
    },
  };
}

function resourceRuleFromProtobuf({
  actions,
  effect,
  derivedRoles,
  roles,
  condition,
  name,
  output,
}: ResourceRuleProtobuf): ResourceRule {
  return {
    actions,
    effect: effectFromProtobuf(effect),
    derivedRoles,
    roles,
    condition: condition && conditionFromProtobuf(condition),
    name,
    output: output && outputFromProtobuf(output),
  };
}

function rolePolicyFromProtobuf({
  policyType,
  parentRoles,
  scope,
  scopePermissions,
  rules,
}: RolePolicyProtobuf): RolePolicy {
  requireOneOf("RolePolicy.policyType", policyType, "role");

  return {
    rolePolicy: {
      role: policyType.role,
      parentRoles: parentRoles,
      scope,
      scopePermissions: scopePermissionsFromProtobuf(scopePermissions, true),
      rules: rules.map(roleRuleFromProtobuf),
    },
  };
}

function roleRuleFromProtobuf({
  resource,
  allowActions,
}: RoleRuleProtobuf): RoleRule {
  return {
    resource,
    allowActions,
  };
}

function scopePermissionsFromProtobuf(
  scopePermissions: ScopePermissionsProtobuf,
  required: true,
): ScopePermissions;

function scopePermissionsFromProtobuf(
  scopePermissions: ScopePermissionsProtobuf,
  required: false,
): ScopePermissions | undefined;

function scopePermissionsFromProtobuf(
  scopePermissions: ScopePermissionsProtobuf,
  required: boolean,
): ScopePermissions | undefined {
  return translateEnum(
    "ScopePermissions",
    ScopePermissionsProtobuf,
    scopePermissions,
    {
      [ScopePermissionsProtobuf.SCOPE_PERMISSIONS_UNSPECIFIED]: required
        ? unexpected
        : undefined,
      [ScopePermissionsProtobuf.SCOPE_PERMISSIONS_OVERRIDE_PARENT]:
        ScopePermissions.OVERRIDE_PARENT,
      [ScopePermissionsProtobuf.SCOPE_PERMISSIONS_REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS]:
        ScopePermissions.REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS,
    },
  );
}

function schemaRefsFromProtobuf({
  principalSchema,
  resourceSchema,
}: Schemas): SchemaRefs {
  return {
    principalSchema: principalSchema && schemaRefFromProtobuf(principalSchema),
    resourceSchema: resourceSchema && schemaRefFromProtobuf(resourceSchema),
  };
}

function schemaRefFromProtobuf({ ref, ignoreWhen }: Schemas_Schema): SchemaRef {
  return {
    ref,
    ignoreWhen: ignoreWhen && { actions: ignoreWhen.actions },
  };
}

export function getSchemasResponseFromProtobuf({
  schemas,
}: GetSchemaResponse): GetSchemasResponse {
  return { schemas: schemas.map(schemaFromProtobuf) };
}

function schemaFromProtobuf({ id, definition }: SchemaProtobuf): Schema {
  return {
    id,
    definition: new SchemaDefinition(definition),
  };
}

export function inspectPoliciesResponseFromProtobuf({
  results,
}: InspectPoliciesResponseProtobuf): InspectPoliciesResponse {
  return {
    policies: Object.fromEntries(
      Object.entries(results).map(([id, result]) => [
        id,
        inspectedPolicyFromProtobuf(result),
      ]),
    ),
  };
}

function inspectedPolicyFromProtobuf({
  policyId,
  actions,
  attributes,
  constants,
  derivedRoles,
  variables,
}: InspectPoliciesResponse_Result): InspectedPolicy {
  return {
    id: policyId,
    actions,
    attributes: attributes.map(inspectedAttributeFromProtobuf),
    constants: constants.map(inspectedConstantFromProtobuf),
    derivedRoles: derivedRoles.map(inspectedDerivedRoleFromProtobuf),
    variables: variables.map(inspectedVariableFromProtobuf),
  };
}

function inspectedAttributeFromProtobuf({
  kind,
  name,
}: InspectPoliciesResponse_Attribute): InspectedAttribute {
  return {
    kind: inspectedAttributeKindFromProtobuf(kind),
    name,
  };
}

function inspectedAttributeKindFromProtobuf(
  kind: InspectPoliciesResponse_Attribute_Kind,
): InspectedAttributeKind {
  return translateEnum(
    "InspectPoliciesResponse.Attribute.Kind",
    InspectPoliciesResponse_Attribute_Kind,
    kind,
    {
      [InspectPoliciesResponse_Attribute_Kind.KIND_UNSPECIFIED]: unexpected,
      [InspectPoliciesResponse_Attribute_Kind.KIND_PRINCIPAL_ATTRIBUTE]:
        InspectedAttributeKind.PRINCIPAL,
      [InspectPoliciesResponse_Attribute_Kind.KIND_RESOURCE_ATTRIBUTE]:
        InspectedAttributeKind.RESOURCE,
    },
  );
}

function inspectedConstantFromProtobuf({
  kind,
  name,
  value,
  source,
  used,
}: InspectPoliciesResponse_Constant): InspectedConstant {
  return {
    kind: inspectedConstantKindFromProtobuf(kind),
    name,
    value: value as Value,
    source: source || undefined,
    used,
  };
}

function inspectedConstantKindFromProtobuf(
  kind: InspectPoliciesResponse_Constant_Kind,
): InspectedConstantKind {
  return translateEnum(
    "InspectPoliciesResponse.Constant.Kind",
    InspectPoliciesResponse_Constant_Kind,
    kind,
    {
      [InspectPoliciesResponse_Constant_Kind.KIND_UNSPECIFIED]: unexpected,
      [InspectPoliciesResponse_Constant_Kind.KIND_EXPORTED]:
        InspectedConstantKind.EXPORTED,
      [InspectPoliciesResponse_Constant_Kind.KIND_IMPORTED]:
        InspectedConstantKind.IMPORTED,
      [InspectPoliciesResponse_Constant_Kind.KIND_LOCAL]:
        InspectedConstantKind.LOCAL,
      [InspectPoliciesResponse_Constant_Kind.KIND_UNDEFINED]:
        InspectedConstantKind.UNDEFINED,
      [InspectPoliciesResponse_Constant_Kind.KIND_UNKNOWN]:
        InspectedConstantKind.UNKNOWN,
    },
  );
}

function inspectedDerivedRoleFromProtobuf({
  kind,
  name,
  source,
}: InspectPoliciesResponse_DerivedRole): InspectedDerivedRole {
  return {
    kind: inspectedDerivedRoleKindFromProtobuf(kind),
    name,
    source: source || undefined,
  };
}

function inspectedDerivedRoleKindFromProtobuf(
  kind: InspectPoliciesResponse_DerivedRole_Kind,
): InspectedDerivedRoleKind {
  return translateEnum(
    "InspectPoliciesResponse.DerivedRole.Kind",
    InspectPoliciesResponse_DerivedRole_Kind,
    kind,
    {
      [InspectPoliciesResponse_DerivedRole_Kind.KIND_UNSPECIFIED]: unexpected,
      [InspectPoliciesResponse_DerivedRole_Kind.KIND_EXPORTED]:
        InspectedDerivedRoleKind.EXPORTED,
      [InspectPoliciesResponse_DerivedRole_Kind.KIND_IMPORTED]:
        InspectedDerivedRoleKind.IMPORTED,
      [InspectPoliciesResponse_DerivedRole_Kind.KIND_UNDEFINED]:
        InspectedDerivedRoleKind.UNDEFINED,
    },
  );
}

function inspectedVariableFromProtobuf({
  kind,
  name,
  value,
  source,
  used,
}: InspectPoliciesResponse_Variable): InspectedVariable {
  return {
    kind: inspectedVariableKindFromProtobuf(kind),
    name,
    definition: value || undefined,
    source: source || undefined,
    used,
  };
}

function inspectedVariableKindFromProtobuf(
  kind: InspectPoliciesResponse_Variable_Kind,
): InspectedVariableKind {
  return translateEnum(
    "InspectPoliciesResponse.Variable.Kind",
    InspectPoliciesResponse_Variable_Kind,
    kind,
    {
      [InspectPoliciesResponse_Variable_Kind.KIND_UNSPECIFIED]: unexpected,
      [InspectPoliciesResponse_Variable_Kind.KIND_EXPORTED]:
        InspectedVariableKind.EXPORTED,
      [InspectPoliciesResponse_Variable_Kind.KIND_IMPORTED]:
        InspectedVariableKind.IMPORTED,
      [InspectPoliciesResponse_Variable_Kind.KIND_LOCAL]:
        InspectedVariableKind.LOCAL,
      [InspectPoliciesResponse_Variable_Kind.KIND_UNDEFINED]:
        InspectedVariableKind.UNDEFINED,
      [InspectPoliciesResponse_Variable_Kind.KIND_UNKNOWN]:
        InspectedVariableKind.UNKNOWN,
    },
  );
}

export function listPoliciesResponseFromProtobuf({
  policyIds,
}: ListPoliciesResponseProtobuf): ListPoliciesResponse {
  return { ids: policyIds };
}

export function listSchemasResponseFromProtobuf({
  schemaIds,
}: ListSchemasResponseProtobuf): ListSchemasResponse {
  return { ids: schemaIds };
}

export function planResourcesResponseFromProtobuf({
  cerbosCallId,
  requestId,
  filter,
  validationErrors,
  meta,
}: PlanResourcesResponseProtobuf): PlanResourcesResponse {
  const base: PlanResourcesResponseBase = {
    cerbosCallId,
    requestId,
    validationErrors: validationErrors.map(validationErrorFromProtobuf),
    metadata: meta && planResourcesMetadataFromProtobuf(meta),
  };

  requireField("PlanResourcesResponse.filter", filter);

  const kind = planKindFromProtobuf(filter.kind);

  if (kind !== PlanKind.CONDITIONAL) {
    return { ...base, kind };
  }

  requireField("PlanResourcesFilter.condition", filter.condition);

  return {
    ...base,
    kind,
    condition: planOperandFromProtobuf(filter.condition),
  };
}

function planKindFromProtobuf(kind: PlanResourcesFilter_Kind): PlanKind {
  return translateEnum(
    "PlanResourcesFilter.Kind",
    PlanResourcesFilter_Kind,
    kind,
    {
      [PlanResourcesFilter_Kind.KIND_UNSPECIFIED]: unexpected,
      [PlanResourcesFilter_Kind.KIND_ALWAYS_ALLOWED]: PlanKind.ALWAYS_ALLOWED,
      [PlanResourcesFilter_Kind.KIND_ALWAYS_DENIED]: PlanKind.ALWAYS_DENIED,
      [PlanResourcesFilter_Kind.KIND_CONDITIONAL]: PlanKind.CONDITIONAL,
    },
  );
}

function planOperandFromProtobuf({
  node,
}: PlanResourcesFilter_Expression_Operand): PlanExpressionOperand {
  return transformOneOf("PlanResourcesFilter.Expression.Operand.node", node, {
    expression: ({ expression }) =>
      new PlanExpression(
        expression.operator,
        expression.operands.map(planOperandFromProtobuf),
      ),
    value: ({ value }) => new PlanExpressionValue((value ?? null) as Value),
    variable: ({ variable }) => new PlanExpressionVariable(variable),
  });
}

function planResourcesMetadataFromProtobuf({
  filterDebug,
  matchedScope,
  matchedScopes,
}: PlanResourcesResponse_Meta): PlanResourcesMetadata {
  return {
    conditionString: filterDebug,
    matchedScope,
    matchedScopes,
  };
}

const unexpected = Symbol("unexpected");
type Unexpected = typeof unexpected;

function isUnexpected(value: unknown): value is Unexpected | undefined {
  return value === unexpected || value === undefined;
}

function translateEnum<
  Enum extends Record<string | number, number | string>,
  Result,
>(
  descriptor: string,
  source: Enum,
  value: Enum[keyof Enum],
  translate: Record<Enum[keyof Enum], Result | Unexpected>,
): Result {
  const result = translate[value] as Result | Unexpected | undefined;

  if (isUnexpected(result)) {
    const wanted = Object.entries(source)
      .filter(
        ([, value]) =>
          typeof value === "number" &&
          !isUnexpected(translate[value as Enum[keyof Enum]]),
      )
      .map(([key, value]) => `${key}:${value}`)
      .join("|");

    const got = source[value] ? `${source[value]}:${value}` : value;

    throw new Error(`Unexpected ${descriptor}: wanted ${wanted}, got ${got}`);
  }

  return result;
}

function transformOneOf<OneOf extends { $case: string }, Result>(
  descriptor: string,
  oneOf: OneOf | undefined,
  transforms: {
    [Case in OneOf["$case"]]:
      | ((oneOf: Extract<OneOf, { $case: Case }>) => Result)
      | Unexpected;
  },
): Result {
  requireField(descriptor, oneOf);

  const transform = transforms[oneOf.$case as OneOf["$case"]] as
    | ((oneOf: OneOf) => Result)
    | Unexpected
    | undefined;

  if (isUnexpected(transform)) {
    throw new Error(
      `Unexpected ${descriptor}: wanted ${Object.keys(transforms).join("|")}, got ${oneOf.$case}`,
    );
  }

  return transform(oneOf);
}

function requireOneOf<
  OneOf extends { $case: string },
  Case extends OneOf["$case"],
>(
  descriptor: string,
  oneOf: OneOf | undefined,
  $case: Case,
): asserts oneOf is Extract<OneOf, { $case: Case }> {
  requireField(descriptor, oneOf);

  if (oneOf.$case !== $case) {
    throw new Error(
      `Unexpected ${descriptor}: wanted ${$case}, got ${oneOf.$case}`,
    );
  }
}

/** @internal */
export function requireField<T>(
  descriptor: string,
  value: T | undefined,
): asserts value is T {
  if (value === undefined) {
    throw new Error(`Missing ${descriptor}`);
  }
}
