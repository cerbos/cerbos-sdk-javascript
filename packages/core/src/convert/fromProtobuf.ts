import { Effect as EffectProtobuf } from "../protobuf/cerbos/effect/v1/effect";
import type {
  OutputEntry as OutputEntry,
  PlanResourcesFilter_Expression_Operand,
} from "../protobuf/cerbos/engine/v1/engine";
import { PlanResourcesFilter_Kind } from "../protobuf/cerbos/engine/v1/engine";
import type {
  Condition as ConditionProtobuf,
  DerivedRoles as DerivedRolesProtobuf,
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
  Schemas,
  Schemas_Schema,
  Variables as VariablesProtobuf,
} from "../protobuf/cerbos/policy/v1/policy";
import type {
  CheckResourcesResponse as CheckResourcesResponseProtobuf,
  CheckResourcesResponse_ResultEntry,
  DeleteSchemaResponse,
  DisablePolicyResponse,
  EnablePolicyResponse,
  GetPolicyResponse,
  GetSchemaResponse,
  ListPoliciesResponse as ListPoliciesResponseProtobuf,
  ListSchemasResponse as ListSchemasResponseProtobuf,
  PlanResourcesResponse as PlanResourcesResponseProtobuf,
  PlanResourcesResponse_Meta,
} from "../protobuf/cerbos/response/v1/response";
import type {
  Schema as SchemaProtobuf,
  ValidationError as ValidationErrorProtobuf,
} from "../protobuf/cerbos/schema/v1/schema";
import { ValidationError_Source } from "../protobuf/cerbos/schema/v1/schema";
import type {
  Condition,
  DerivedRoleDefinition,
  DerivedRoles,
  DisablePoliciesResponse,
  EnablePoliciesResponse,
  ExportVariables,
  GetPoliciesResponse,
  ListPoliciesResponse,
  ListSchemasResponse,
  Match,
  Matches,
  Output,
  OutputResult,
  PlanExpressionOperand,
  PlanResourcesMetadata,
  PlanResourcesResponse,
  Policy,
  PolicyBase,
  PolicyMetadata,
  PrincipalPolicy,
  PrincipalRule,
  PrincipalRuleAction,
  ResourcePolicy,
  ResourceRule,
  Schema,
  SchemaRef,
  SchemaRefs,
  ValidationError,
  Value,
  Variables,
} from "../types/external";
import {
  CheckResourcesResponse,
  CheckResourcesResult,
  Effect,
  PlanExpression,
  PlanExpressionValue,
  PlanExpressionVariable,
  PlanKind,
  SchemaDefinition,
  ValidationErrorSource,
} from "../types/external";
import type { DeleteSchemasResponse } from "../types/external/DeleteSchemasResponse";
import type { GetSchemasResponse } from "../types/external/GetSchemasResponse";
import type { OmitFromEach } from "../types/internal";

export function checkResourcesResponseFromProtobuf({
  requestId,
  results,
}: CheckResourcesResponseProtobuf): CheckResourcesResponse {
  return new CheckResourcesResponse({
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
  if (!resource) {
    throw new Error("Missing resource on CheckResources result");
  }

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
): Record<string, Effect | undefined> {
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
  switch (source) {
    case ValidationError_Source.SOURCE_PRINCIPAL:
      return ValidationErrorSource.PRINCIPAL;

    case ValidationError_Source.SOURCE_RESOURCE:
      return ValidationErrorSource.RESOURCE;

    default:
      throw new Error(
        `Unexpected validation error source ${source} (${
          ValidationError_Source[source as number] ?? "unrecognized"
        })`,
      );
  }
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
  return {
    deletedSchemas,
  };
}

export function disablePoliciesResponseFromProtobuf({
  disabledPolicies,
}: DisablePolicyResponse): DisablePoliciesResponse {
  return {
    disabledPolicies,
  };
}

export function enablePoliciesResponseFromProtobuf({
  enabledPolicies,
}: EnablePolicyResponse): EnablePoliciesResponse {
  return {
    enabledPolicies,
  };
}

export function getPoliciesResponseFromProtobuf({
  policies,
}: GetPolicyResponse): GetPoliciesResponse {
  return {
    policies: policies.map(_policyFromProtobuf),
  };
}

/** @internal */
export function _policyFromProtobuf({
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
  sourceFile,
  storeIdentifer,
  storeIdentifier,
}: Metadata): PolicyMetadata {
  return {
    annotations,
    hash,
    sourceFile,
    storeIdentifer: storeIdentifier || storeIdentifer,
    storeIdentifier: storeIdentifier || storeIdentifer,
  };
}

type OmitPolicyBase<T extends Policy> = OmitFromEach<T, keyof PolicyBase>;

function policyTypeFromProtobuf(
  policyType: PolicyProtobuf["policyType"],
): OmitPolicyBase<Policy> {
  if (!policyType) {
    throw new Error("Unknown policy type: undefined");
  }

  switch (policyType.$case) {
    case "derivedRoles":
      return derivedRolesFromProtobuf(policyType.derivedRoles);

    case "exportVariables":
      return exportVariablesFromProtobuf(policyType.exportVariables);

    case "principalPolicy":
      return principalPolicyFromProtobuf(policyType.principalPolicy);

    case "resourcePolicy":
      return resourcePolicyFromProtobuf(policyType.resourcePolicy);

    default:
      throw new Error(
        `Unknown policy type: ${JSON.stringify(policyType, null, 2)}`,
      );
  }
}

function derivedRolesFromProtobuf({
  name,
  definitions,
  variables,
}: DerivedRolesProtobuf): OmitPolicyBase<DerivedRoles> {
  return {
    derivedRoles: {
      name,
      definitions: definitions.map(derivedRoleDefinitionFromProtobuf),
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
  switch (condition?.$case) {
    case "match":
      return {
        match: matchFromProtobuf(condition.match),
      };

    default:
      throw new Error(
        `Unknown condition type: ${JSON.stringify(condition, null, 2)}`,
      );
  }
}

function matchFromProtobuf({ op }: MatchProtobuf): Match {
  switch (op?.$case) {
    case "all":
      return {
        all: matchesFromProtobuf(op.all),
      };

    case "any":
      return {
        any: matchesFromProtobuf(op.any),
      };

    case "none":
      return {
        none: matchesFromProtobuf(op.none),
      };

    case "expr":
      return {
        expr: op.expr,
      };

    default:
      throw new Error(`Unknown match type: ${JSON.stringify(op, null, 2)}`);
  }
}

function matchesFromProtobuf({ of }: Match_ExprList): Matches {
  return {
    of: of.map(matchFromProtobuf),
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
  variables,
}: PrincipalPolicyProtobuf): OmitPolicyBase<PrincipalPolicy> {
  return {
    principalPolicy: {
      principal,
      version,
      rules: rules.map(principalRuleFromProtobuf),
      scope,
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

function outputFromProtobuf({ expr }: OutputProtobuf): Output {
  return { expr };
}

function resourcePolicyFromProtobuf({
  resource,
  version,
  importDerivedRoles,
  rules,
  schemas,
  scope,
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
    ignoreWhen: ignoreWhen && {
      actions: ignoreWhen.actions,
    },
  };
}

export function getSchemasResponseFromProtobuf({
  schemas,
}: GetSchemaResponse): GetSchemasResponse {
  return {
    schemas: schemas.map(schemaFromProtobuf),
  };
}

function schemaFromProtobuf({ id, definition }: SchemaProtobuf): Schema {
  return {
    id,
    definition: new SchemaDefinition(definition),
  };
}

export function listPoliciesResponseFromProtobuf({
  policyIds,
}: ListPoliciesResponseProtobuf): ListPoliciesResponse {
  return {
    ids: policyIds,
  };
}

export function listSchemasResponseFromProtobuf({
  schemaIds,
}: ListSchemasResponseProtobuf): ListSchemasResponse {
  return {
    ids: schemaIds,
  };
}

export function planResourcesResponseFromProtobuf({
  requestId,
  filter,
  validationErrors,
  meta,
}: PlanResourcesResponseProtobuf): PlanResourcesResponse {
  if (!filter) {
    throw new Error("Missing filter on PlanResources response");
  }

  const kind = planKindFromProtobuf(filter.kind);
  const metadata = meta && planResourcesMetadataFromProtobuf(meta);

  if (kind === PlanKind.CONDITIONAL) {
    if (!filter.condition) {
      throw new Error("Missing filter condition on PlanResources response");
    }

    return {
      requestId,
      kind,
      condition: planOperandFromProtobuf(filter.condition),
      validationErrors: validationErrors.map(validationErrorFromProtobuf),
      metadata,
    };
  }

  return {
    requestId,
    kind,
    validationErrors: validationErrors.map(validationErrorFromProtobuf),
    metadata,
  };
}

function planKindFromProtobuf(kind: PlanResourcesFilter_Kind): PlanKind {
  switch (kind) {
    case PlanResourcesFilter_Kind.KIND_ALWAYS_ALLOWED:
      return PlanKind.ALWAYS_ALLOWED;

    case PlanResourcesFilter_Kind.KIND_ALWAYS_DENIED:
      return PlanKind.ALWAYS_DENIED;

    case PlanResourcesFilter_Kind.KIND_CONDITIONAL:
      return PlanKind.CONDITIONAL;

    default:
      throw new Error(
        `Unexpected PlanResources filter kind ${kind} (${
          PlanResourcesFilter_Kind[kind as number] ?? "unrecognized"
        })`,
      );
  }
}

function planOperandFromProtobuf({
  node,
}: PlanResourcesFilter_Expression_Operand): PlanExpressionOperand {
  if (!node) {
    throw new Error("Missing node on PlanResources expression operand");
  }

  switch (node.$case) {
    case "expression":
      return new PlanExpression(
        node.expression.operator,
        node.expression.operands.map(planOperandFromProtobuf),
      );

    case "value":
      return new PlanExpressionValue((node.value ?? null) as Value);

    case "variable":
      return new PlanExpressionVariable(node.variable);
  }
}

function planResourcesMetadataFromProtobuf({
  filterDebug,
  matchedScope,
}: PlanResourcesResponse_Meta): PlanResourcesMetadata {
  return {
    conditionString: filterDebug,
    matchedScope,
  };
}
