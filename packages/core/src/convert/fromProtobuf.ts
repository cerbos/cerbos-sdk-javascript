/* eslint-disable @typescript-eslint/no-deprecated */

import { toJson } from "@bufbuild/protobuf";
import type { Value as ValueProtobuf } from "@bufbuild/protobuf/wkt";
import { ValueSchema, timestampDate } from "@bufbuild/protobuf/wkt";

import type {
  AuditTrail as AuditTrailProtobuf,
  DecisionLogEntry as DecisionLogEntryProtobuf,
  DecisionLogEntry_CheckResources,
  DecisionLogEntry_PlanResources,
  MetaValues,
  Peer as PeerProtobuf,
  PolicySource as PolicySourceProtobuf,
  PolicySource_Blob,
  PolicySource_Database,
  PolicySource_Disk,
  PolicySource_EmbeddedPDP,
  PolicySource_Git,
  PolicySource_Hub,
  PolicySource_Hub_EmbeddedBundle,
  PolicySource_Hub_LocalBundle,
} from "@cerbos/api/cerbos/audit/v1/audit_pb";
import { PolicySource_Database_Driver } from "@cerbos/api/cerbos/audit/v1/audit_pb";
import { Effect as EffectProtobuf } from "@cerbos/api/cerbos/effect/v1/effect_pb";
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
} from "@cerbos/api/cerbos/engine/v1/engine_pb";
import { PlanResourcesFilter_Kind } from "@cerbos/api/cerbos/engine/v1/engine_pb";
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
} from "@cerbos/api/cerbos/policy/v1/policy_pb";
import { ScopePermissions as ScopePermissionsProtobuf } from "@cerbos/api/cerbos/policy/v1/policy_pb";
import type {
  CheckResourcesResponse as CheckResourcesResponseProtobuf,
  CheckResourcesResponse_ResultEntry,
  CheckResourcesResponse_ResultEntry_Meta,
  CheckResourcesResponse_ResultEntry_Meta_EffectMeta,
  CheckResourcesResponse_ResultEntry_Resource,
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
  ServerInfoResponse,
} from "@cerbos/api/cerbos/response/v1/response_pb";
import {
  InspectPoliciesResponse_Attribute_Kind,
  InspectPoliciesResponse_Constant_Kind,
  InspectPoliciesResponse_DerivedRole_Kind,
  InspectPoliciesResponse_Variable_Kind,
} from "@cerbos/api/cerbos/response/v1/response_pb";
import type {
  Schema as SchemaProtobuf,
  ValidationError as ValidationErrorProtobuf,
} from "@cerbos/api/cerbos/schema/v1/schema_pb";
import { ValidationError_Source } from "@cerbos/api/cerbos/schema/v1/schema_pb";
import type { HealthCheckResponse as HealthCheckResponseProtobuf } from "@cerbos/api/grpc/health/v1/health_pb";
import { HealthCheckResponse_ServingStatus } from "@cerbos/api/grpc/health/v1/health_pb";

import type {
  AccessLogEntry,
  AuditTrail,
  CheckInput,
  CheckOutput,
  CheckOutputActionEffect,
  CheckResourcesResultMetadata,
  CheckResourcesResultMetadataEffect,
  CheckResourcesResultResource,
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
  EmbeddedBundle,
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
  LocalBundle,
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
  PolicySource,
  PolicySourceBlob,
  PolicySourceDatabase,
  PolicySourceDisk,
  PolicySourceEmbeddedPDP,
  PolicySourceGit,
  PolicySourceHub,
  PolicySourceHubBase,
  PolicySourceHubDeployment,
  PolicySourceHubEmbeddedBundle,
  PolicySourceHubLabel,
  PolicySourceHubLocalBundle,
  PolicySourceHubPlayground,
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
  ServerInfo,
  SourceAttributes,
  ValidationError,
  Value,
  Variables,
} from "../types/external.js";
import {
  CheckResourcesResponse,
  CheckResourcesResult,
  DatabaseDriver,
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
} from "../types/external.js";
import type { OmitFromEach } from "../types/internal.js";

export function accessLogEntryFromProtobuf({
  entry,
}: ListAuditLogEntriesResponse): AccessLogEntry {
  requireOneOf("ListAuditLogEntriesResponse.entry", entry, "accessLogEntry");

  const {
    callId,
    timestamp,
    peer,
    metadata,
    method,
    statusCode,
    oversized,
    policySource,
  } = entry.value;

  requireField("AccessLogEntry.timestamp", timestamp);
  requireField("AccessLogEntry.peer", peer);

  return {
    callId,
    timestamp: timestampDate(timestamp),
    peer: peerFromProtobuf(peer),
    metadata: auditLogMetadataFromProtobuf(metadata),
    method,
    statusCode,
    oversized,
    policySource: policySource && policySourceFromProtobuf(policySource),
  };
}

export function decisionLogEntryFromProtobuf({
  entry,
}: ListAuditLogEntriesResponse): DecisionLogEntry {
  requireOneOf("ListAuditLogEntriesResponse.entry", entry, "decisionLogEntry");

  const {
    callId,
    timestamp,
    peer,
    metadata,
    auditTrail,
    method,
    oversized,
    policySource,
  } = entry.value;

  requireField("DecisionLogEntry.timestamp", timestamp);
  requireField("DecisionLogEntry.peer", peer);

  return {
    callId,
    timestamp: timestampDate(timestamp),
    peer: peerFromProtobuf(peer),
    metadata: auditLogMetadataFromProtobuf(metadata),
    auditTrail: auditTrailFromProtobuf(auditTrail),
    method: decisionLogEntryMethodFromProtobuf(method),
    oversized,
    policySource: policySource && policySourceFromProtobuf(policySource),
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

/** @internal */
export function auditTrailFromProtobuf(
  auditTrail: AuditTrailProtobuf | undefined,
): AuditTrail {
  const { effectivePolicies = {} } = auditTrail ?? {};
  return {
    effectivePolicies: Object.fromEntries(
      Object.entries(effectivePolicies).map(([policyId, sourceAttributes]) => [
        policyId,
        sourceAttributesFromProtobuf(sourceAttributes),
      ]),
    ),
  };
}

function policySourceFromProtobuf({
  source,
}: PolicySourceProtobuf): PolicySource {
  return transformOneOf("PolicySource.source", source, {
    blob: policySourceBlobFromProtobuf,
    database: policySourceDatabaseFromProtobuf,
    disk: policySourceDiskFromProtobuf,
    embeddedPdp: policySourceEmbeddedPDPFromProtobuf,
    git: policySourceGitFromProtobuf,
    hub: policySourceHubFromProtobuf,
  });
}

function policySourceBlobFromProtobuf({
  bucketUrl,
  prefix,
}: PolicySource_Blob): PolicySourceBlob {
  return {
    kind: "blob",
    bucketUrl,
    prefix,
  };
}

function policySourceDatabaseFromProtobuf({
  driver,
}: PolicySource_Database): PolicySourceDatabase {
  return {
    kind: "database",
    driver: translateEnum(
      "PolicySource.Database.Driver",
      PolicySource_Database_Driver,
      driver,
      {
        [PolicySource_Database_Driver.UNSPECIFIED]: unexpected,
        [PolicySource_Database_Driver.MYSQL]: DatabaseDriver.MYSQL,
        [PolicySource_Database_Driver.POSTGRES]: DatabaseDriver.POSTGRES,
        [PolicySource_Database_Driver.SQLITE3]: DatabaseDriver.SQLITE3,
      },
    ),
  };
}

function policySourceDiskFromProtobuf({
  directory,
}: PolicySource_Disk): PolicySourceDisk {
  return {
    kind: "disk",
    directory,
  };
}

function policySourceEmbeddedPDPFromProtobuf({
  url,
  commitHash,
  builtAt,
}: PolicySource_EmbeddedPDP): PolicySourceEmbeddedPDP {
  return {
    kind: "embeddedPDP",
    url,
    commit: commitHash,
    builtAt: builtAt && timestampDate(builtAt),
  };
}

function policySourceGitFromProtobuf({
  repositoryUrl,
  branch,
  subdirectory,
}: PolicySource_Git): PolicySourceGit {
  return {
    kind: "git",
    repositoryUrl,
    branch,
    subdirectory,
  };
}

function policySourceHubFromProtobuf({
  source,
}: PolicySource_Hub): PolicySourceHub {
  return {
    kind: "hub",
    ...policySourceHubSourceFromProtobuf(source),
  };
}

type OmitPolicySourceHubBase<T extends PolicySourceHub> = OmitFromEach<
  T,
  keyof PolicySourceHubBase
>;

function policySourceHubSourceFromProtobuf(
  source: PolicySource_Hub["source"],
): OmitPolicySourceHubBase<PolicySourceHub> {
  return transformOneOf("PolicySource.Hub.source", source, {
    deploymentId: policySourceHubDeploymentFromProtobuf,
    embeddedBundle: policySourceHubEmbeddedBundleFromProtobuf,
    label: policySourceHubLabelFromProtobuf,
    localBundle: policySourceHubLocalBundleFromProtobuf,
    playgroundId: policySourceHubPlaygroundFromProtobuf,
  });
}

function policySourceHubDeploymentFromProtobuf(
  deploymentId: string,
): OmitPolicySourceHubBase<PolicySourceHubDeployment> {
  return { deploymentId };
}

function policySourceHubEmbeddedBundleFromProtobuf(
  embeddedBundle: PolicySource_Hub_EmbeddedBundle,
): OmitPolicySourceHubBase<PolicySourceHubEmbeddedBundle> {
  return { embeddedBundle: embeddedBundleFromProtobuf(embeddedBundle) };
}

function policySourceHubLabelFromProtobuf(
  label: string,
): OmitPolicySourceHubBase<PolicySourceHubLabel> {
  return { label };
}

function policySourceHubLocalBundleFromProtobuf(
  localBundle: PolicySource_Hub_LocalBundle,
): OmitPolicySourceHubBase<PolicySourceHubLocalBundle> {
  return { localBundle: localBundleFromProtobuf(localBundle) };
}

function policySourceHubPlaygroundFromProtobuf(
  playgroundId: string,
): OmitPolicySourceHubBase<PolicySourceHubPlayground> {
  return { playgroundId };
}

function embeddedBundleFromProtobuf({
  ruleId,
  scopes,
}: PolicySource_Hub_EmbeddedBundle): EmbeddedBundle {
  return {
    ruleId,
    scopes,
  };
}

function localBundleFromProtobuf({
  path,
}: PolicySource_Hub_LocalBundle): LocalBundle {
  return { path };
}

function decisionLogEntryMethodFromProtobuf(
  method: DecisionLogEntryProtobuf["method"],
): DecisionLogEntryMethod {
  return transformOneOf("DecisionLogEntry.method", method, {
    checkResources: decisionLogEntryCheckResourcesFromProtobuf,
    planResources: decisionLogEntryPlanResourcesFromProtobuf,
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
    attr: valuesFromProtobuf(attr),
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
    attr: valuesFromProtobuf(attr),
    policyVersion,
    scope,
  };
}

function decodedAuxDataFromProtobuf({ jwt }: AuxDataProtobuf): DecodedAuxData {
  return {
    jwt: valuesFromProtobuf(jwt),
  };
}

/** @internal */
export function valuesFromProtobuf(
  values: Record<string, ValueProtobuf>,
): Record<string, Value> {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [
      key,
      valueFromProtobuf(value),
    ]),
  );
}

function valueFromProtobuf(value: ValueProtobuf): Value {
  return toJson(ValueSchema, value);
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

  return {
    name: "PlanResources",
    input: planResourcesInputFromProtobuf(input),
    output: output && planResourcesOutputFromProtobuf(output),
    error: error || undefined,
  };
}

/** @internal */
export function planResourcesInputFromProtobuf({
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
    attr: valuesFromProtobuf(attr),
    policyVersion,
    scope,
  };
}

/** @internal */
export function planResourcesOutputFromProtobuf({
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
    resource: checkResourcesResultResourceFromProtobuf(resource),
    actions: actionsFromProtobuf(actions),
    validationErrors: validationErrors.map(validationErrorFromProtobuf),
    metadata: meta && checkResourcesResultMetadataFromProtobuf(meta),
    outputs: outputs.map(outputResultFromProtobuf),
  });
}

function checkResourcesResultResourceFromProtobuf({
  kind,
  id,
  policyVersion,
  scope,
}: CheckResourcesResponse_ResultEntry_Resource): CheckResourcesResultResource {
  return {
    kind,
    id,
    policyVersion,
    scope,
  };
}

function checkResourcesResultMetadataFromProtobuf({
  actions,
  effectiveDerivedRoles,
}: CheckResourcesResponse_ResultEntry_Meta): CheckResourcesResultMetadata {
  return {
    actions: checkResourcesResultMetadataActionsFromProtobuf(actions),
    effectiveDerivedRoles,
  };
}

function checkResourcesResultMetadataActionsFromProtobuf(
  actions: Record<string, CheckResourcesResponse_ResultEntry_Meta_EffectMeta>,
): Record<string, CheckResourcesResultMetadataEffect> {
  return Object.fromEntries(
    Object.entries(actions).map(([action, effect]) => [
      action,
      checkResourcesResultMetadataEffectFromProtobuf(effect),
    ]),
  );
}

function checkResourcesResultMetadataEffectFromProtobuf({
  matchedPolicy,
  matchedScope,
}: CheckResourcesResponse_ResultEntry_Meta_EffectMeta): CheckResourcesResultMetadataEffect {
  return {
    matchedPolicy,
    matchedScope,
  };
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
  return effect === EffectProtobuf.ALLOW ? Effect.ALLOW : Effect.DENY;
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
      [ValidationError_Source.UNSPECIFIED]: unexpected,
      [ValidationError_Source.PRINCIPAL]: ValidationErrorSource.PRINCIPAL,
      [ValidationError_Source.RESOURCE]: ValidationErrorSource.RESOURCE,
    },
  );
}

function outputResultFromProtobuf({ src, val }: OutputEntry): OutputResult {
  return {
    source: src,
    value: val && valueFromProtobuf(val),
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
  sourceAttributes: SourceAttributesProtobuf | undefined,
): SourceAttributes {
  if (!sourceAttributes) {
    return {};
  }

  return valuesFromProtobuf(sourceAttributes.attributes);
}

type OmitPolicyBase<T extends Policy> = OmitFromEach<T, keyof PolicyBase>;

function policyTypeFromProtobuf(
  policyType: PolicyProtobuf["policyType"],
): OmitPolicyBase<Policy> {
  return transformOneOf("Policy.policyType", policyType, {
    derivedRoles: derivedRolesFromProtobuf,
    exportConstants: exportConstantsFromProtobuf,
    exportVariables: exportVariablesFromProtobuf,
    principalPolicy: principalPolicyFromProtobuf,
    resourcePolicy: resourcePolicyFromProtobuf,
    rolePolicy: rolePolicyFromProtobuf,
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
  return { match: matchFromProtobuf(condition.value) };
}

function matchFromProtobuf({ op }: MatchProtobuf): Match {
  return transformOneOf("Match.op", op, {
    all: (all) => ({ all: matchesFromProtobuf(all) }),
    any: (any) => ({ any: matchesFromProtobuf(any) }),
    none: (none) => ({ none: matchesFromProtobuf(none) }),
    expr: (expr) => ({ expr }),
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
    local: valuesFromProtobuf(local),
  };
}

function exportConstantsFromProtobuf({
  name,
  definitions,
}: ExportConstantsProtobuf): OmitPolicyBase<ExportConstants> {
  return {
    exportConstants: {
      name,
      definitions: valuesFromProtobuf(definitions),
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
  scopePermissions,
  constants,
  variables,
}: PrincipalPolicyProtobuf): OmitPolicyBase<PrincipalPolicy> {
  return {
    principalPolicy: {
      principal,
      version,
      rules: rules.map(principalRuleFromProtobuf),
      scope,
      scopePermissions: scopePermissionsFromProtobuf(scopePermissions),
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
  scopePermissions,
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
      scopePermissions: scopePermissionsFromProtobuf(scopePermissions),
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
  rules,
}: RolePolicyProtobuf): RolePolicy {
  requireOneOf("RolePolicy.policyType", policyType, "role");

  return {
    rolePolicy: {
      role: policyType.value,
      parentRoles: parentRoles,
      scope,
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
): ScopePermissions | undefined {
  return translateEnum(
    "ScopePermissions",
    ScopePermissionsProtobuf,
    scopePermissions,
    {
      [ScopePermissionsProtobuf.UNSPECIFIED]: undefined,
      [ScopePermissionsProtobuf.OVERRIDE_PARENT]:
        ScopePermissions.OVERRIDE_PARENT,
      [ScopePermissionsProtobuf.REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS]:
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
      [InspectPoliciesResponse_Attribute_Kind.UNSPECIFIED]: unexpected,
      [InspectPoliciesResponse_Attribute_Kind.PRINCIPAL_ATTRIBUTE]:
        InspectedAttributeKind.PRINCIPAL,
      [InspectPoliciesResponse_Attribute_Kind.RESOURCE_ATTRIBUTE]:
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
    value: value && valueFromProtobuf(value),
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
      [InspectPoliciesResponse_Constant_Kind.UNSPECIFIED]: unexpected,
      [InspectPoliciesResponse_Constant_Kind.EXPORTED]:
        InspectedConstantKind.EXPORTED,
      [InspectPoliciesResponse_Constant_Kind.IMPORTED]:
        InspectedConstantKind.IMPORTED,
      [InspectPoliciesResponse_Constant_Kind.LOCAL]:
        InspectedConstantKind.LOCAL,
      [InspectPoliciesResponse_Constant_Kind.UNDEFINED]:
        InspectedConstantKind.UNDEFINED,
      [InspectPoliciesResponse_Constant_Kind.UNKNOWN]:
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
      [InspectPoliciesResponse_DerivedRole_Kind.UNSPECIFIED]: unexpected,
      [InspectPoliciesResponse_DerivedRole_Kind.EXPORTED]:
        InspectedDerivedRoleKind.EXPORTED,
      [InspectPoliciesResponse_DerivedRole_Kind.IMPORTED]:
        InspectedDerivedRoleKind.IMPORTED,
      [InspectPoliciesResponse_DerivedRole_Kind.UNDEFINED]:
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
      [InspectPoliciesResponse_Variable_Kind.UNSPECIFIED]: unexpected,
      [InspectPoliciesResponse_Variable_Kind.EXPORTED]:
        InspectedVariableKind.EXPORTED,
      [InspectPoliciesResponse_Variable_Kind.IMPORTED]:
        InspectedVariableKind.IMPORTED,
      [InspectPoliciesResponse_Variable_Kind.LOCAL]:
        InspectedVariableKind.LOCAL,
      [InspectPoliciesResponse_Variable_Kind.UNDEFINED]:
        InspectedVariableKind.UNDEFINED,
      [InspectPoliciesResponse_Variable_Kind.UNKNOWN]:
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
      [PlanResourcesFilter_Kind.UNSPECIFIED]: unexpected,
      [PlanResourcesFilter_Kind.ALWAYS_ALLOWED]: PlanKind.ALWAYS_ALLOWED,
      [PlanResourcesFilter_Kind.ALWAYS_DENIED]: PlanKind.ALWAYS_DENIED,
      [PlanResourcesFilter_Kind.CONDITIONAL]: PlanKind.CONDITIONAL,
    },
  );
}

function planOperandFromProtobuf({
  node,
}: PlanResourcesFilter_Expression_Operand): PlanExpressionOperand {
  return transformOneOf("PlanResourcesFilter.Expression.Operand.node", node, {
    expression: (expression) =>
      new PlanExpression(
        expression.operator,
        expression.operands.map(planOperandFromProtobuf),
      ),
    value: (value) => new PlanExpressionValue(valueFromProtobuf(value)),
    variable: (variable) => new PlanExpressionVariable(variable),
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

export function serverInfoFromProtobuf({
  buildDate,
  commit,
  version,
}: ServerInfoResponse): ServerInfo {
  return {
    buildDate,
    commit,
    version,
  };
}

/** @internal */
export const unexpected = Symbol("unexpected");

type Unexpected = typeof unexpected;

function isUnexpected(value: unknown): value is Unexpected {
  return value === unexpected;
}

/** @internal */
export function translateEnum<
  Enum extends Record<string | number, number | string>,
  Result,
>(
  descriptor: string,
  source: Enum,
  value: Enum[keyof Enum],
  translate: Record<Enum[keyof Enum], Result | Unexpected>,
): Result {
  if (value in translate) {
    const result = translate[value] as Result | Unexpected;

    if (!isUnexpected(result)) {
      return result;
    }
  }

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

function transformOneOf<
  OneOf extends { case: string | undefined; value?: unknown },
  Result,
>(
  descriptor: string,
  oneOf: OneOf,
  transforms: {
    [Case in Exclude<OneOf["case"], undefined>]:
      | ((oneOf: Extract<OneOf, { case: Case }>["value"]) => Result)
      | Unexpected;
  },
): Result {
  requireField(descriptor, oneOf);

  const transform = transforms[oneOf.case as OneOf["case"]] as
    | ((value: OneOf["value"]) => Result)
    | Unexpected
    | undefined;

  if (!transform || isUnexpected(transform)) {
    throw new Error(
      `Unexpected ${descriptor}: wanted ${Object.keys(transforms).join("|")}, got ${oneOf.case}`,
    );
  }

  return transform(oneOf.value);
}

function requireOneOf<
  OneOf extends { case: string | undefined },
  Case extends OneOf["case"],
>(
  descriptor: string,
  oneOf: OneOf,
  $case: Case,
): asserts oneOf is Extract<OneOf, { case: Case }> {
  requireField(descriptor, oneOf);

  if (oneOf.case !== $case) {
    throw new Error(
      `Unexpected ${descriptor}: wanted ${$case}, got ${oneOf.case}`,
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
