import { Effect as EffectProtobuf } from "../protobuf/cerbos/effect/v1/effect";
import {
  PlanResourcesFilter_Expression_Operand,
  PlanResourcesFilter_Kind,
} from "../protobuf/cerbos/engine/v1/engine";
import type {
  Condition as ConditionProtobuf,
  DerivedRoles as DerivedRolesProtobuf,
  Match as MatchProtobuf,
  Match_ExprList,
  Policy as PolicyProtobuf,
  PrincipalPolicy as PrincipalPolicyProtobuf,
  PrincipalRule as PrincipalRuleProtobuf,
  PrincipalRule_Action,
  ResourcePolicy as ResourcePolicyProtobuf,
  ResourceRule as ResourceRuleProtobuf,
  RoleDef,
  Schemas,
  Schemas_Schema,
} from "../protobuf/cerbos/policy/v1/policy";
import type {
  CheckResourcesResponse as CheckResourcesResponseProtobuf,
  CheckResourcesResponse_ResultEntry,
  GetPolicyResponse,
  GetSchemaResponse,
  ListPoliciesResponse as ListPoliciesResponseProtobuf,
  ListSchemasResponse as ListSchemasResponseProtobuf,
  PlanResourcesResponse as PlanResourcesResponseProtobuf,
  PlanResourcesResponse_Meta,
} from "../protobuf/cerbos/response/v1/response";
import {
  Schema as SchemaProtobuf,
  ValidationError as ValidationErrorProtobuf,
  ValidationError_Source,
} from "../protobuf/cerbos/schema/v1/schema";
import {
  CheckResourcesResponse,
  CheckResourcesResult,
  Condition,
  DerivedRoleDefinition,
  DerivedRoles,
  Effect,
  GetPoliciesResponse,
  ListPoliciesResponse,
  ListSchemasResponse,
  Match,
  Matches,
  PlanExpression,
  PlanExpressionOperand,
  PlanExpressionValue,
  PlanExpressionVariable,
  PlanKind,
  PlanResourcesMetadata,
  PlanResourcesResponse,
  Policy,
  PolicyBase,
  PrincipalPolicy,
  PrincipalRule,
  PrincipalRuleAction,
  ResourcePolicy,
  ResourceRule,
  Schema,
  SchemaDefinition,
  SchemaRef,
  SchemaRefs,
  ValidationError,
  ValidationErrorSource,
  Value,
} from "../types/external";
import type { GetSchemasResponse } from "../types/external/GetSchemasResponse";
import type { OmitFromEach } from "../types/internal";

export const checkResourcesResponseFromProtobuf = ({
  requestId,
  results,
}: CheckResourcesResponseProtobuf): CheckResourcesResponse =>
  new CheckResourcesResponse({
    requestId,
    results: results.map(checkResourcesResultFromProtobuf),
  });

const checkResourcesResultFromProtobuf = ({
  resource,
  actions,
  validationErrors,
  meta,
}: CheckResourcesResponse_ResultEntry): CheckResourcesResult => {
  if (!resource) {
    throw new Error("Missing resource on CheckResources result");
  }

  return new CheckResourcesResult({
    resource,
    actions: actionsFromProtobuf(actions),
    validationErrors: validationErrors.map(validationErrorFromProtobuf),
    metadata: meta,
  });
};

const actionsFromProtobuf = (
  actions: Record<string, EffectProtobuf>
): Record<string, Effect | undefined> =>
  Object.fromEntries(
    Object.entries(actions).map(([action, effect]) => [
      action,
      effectFromProtobuf(effect),
    ])
  );

const effectFromProtobuf = (effect: EffectProtobuf): Effect =>
  effect === EffectProtobuf.EFFECT_ALLOW ? Effect.ALLOW : Effect.DENY;

const validationErrorFromProtobuf = ({
  path,
  message,
  source,
}: ValidationErrorProtobuf): ValidationError => ({
  path,
  message,
  source: validationErrorSourceFromProtobuf(source),
});

const validationErrorSourceFromProtobuf = (
  source: ValidationError_Source
): ValidationErrorSource => {
  switch (source) {
    case ValidationError_Source.SOURCE_PRINCIPAL:
      return ValidationErrorSource.PRINCIPAL;

    case ValidationError_Source.SOURCE_RESOURCE:
      return ValidationErrorSource.RESOURCE;

    default:
      throw new Error(
        `Unexpected validation error source ${source} (${
          ValidationError_Source[source] ?? "unrecognized"
        })`
      );
  }
};

export const getPoliciesResponseFromProtobuf = ({
  policies,
}: GetPolicyResponse): GetPoliciesResponse => ({
  policies: policies.map(policyFromProtobuf),
});

const policyFromProtobuf = ({
  apiVersion,
  description,
  disabled,
  metadata,
  variables,
  policyType,
}: PolicyProtobuf): Policy => ({
  apiVersion,
  description,
  disabled,
  metadata,
  variables,
  ...policyTypeFromProtobuf(policyType),
});

type OmitPolicyBase<T extends Policy> = OmitFromEach<T, keyof PolicyBase>;

const policyTypeFromProtobuf = (
  policyType: PolicyProtobuf["policyType"]
): OmitPolicyBase<Policy> => {
  if (!policyType) {
    throw new Error("Unknown policy type: undefined");
  }

  switch (policyType.$case) {
    case "derivedRoles":
      return derivedRolesFromProtobuf(policyType.derivedRoles);

    case "principalPolicy":
      return principalPolicyFromProtobuf(policyType.principalPolicy);

    case "resourcePolicy":
      return resourcePolicyFromProtobuf(policyType.resourcePolicy);

    default:
      throw new Error(
        `Unknown policy type: ${JSON.stringify(policyType, null, 2)}`
      );
  }
};

const derivedRolesFromProtobuf = ({
  name,
  definitions,
}: DerivedRolesProtobuf): OmitPolicyBase<DerivedRoles> => ({
  derivedRoles: {
    name,
    definitions: definitions.map(derivedRoleDefinitionFromProtobuf),
  },
});

const derivedRoleDefinitionFromProtobuf = ({
  name,
  parentRoles,
  condition,
}: RoleDef): DerivedRoleDefinition => ({
  name,
  parentRoles,
  condition: condition && conditionFromProtobuf(condition),
});

const conditionFromProtobuf = ({ condition }: ConditionProtobuf): Condition => {
  switch (condition?.$case) {
    case "match":
      return {
        match: matchFromProtobuf(condition.match),
      };

    default:
      throw new Error(
        `Unknown condition type: ${JSON.stringify(condition, null, 2)}`
      );
  }
};

const matchFromProtobuf = ({ op }: MatchProtobuf): Match => {
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
};

const matchesFromProtobuf = ({ of }: Match_ExprList): Matches => ({
  of: of.map(matchFromProtobuf),
});

const principalPolicyFromProtobuf = ({
  principal,
  version,
  rules,
  scope,
}: PrincipalPolicyProtobuf): OmitPolicyBase<PrincipalPolicy> => ({
  principalPolicy: {
    principal,
    version,
    rules: rules.map(principalRuleFromProtobuf),
    scope,
  },
});

const principalRuleFromProtobuf = ({
  resource,
  actions,
}: PrincipalRuleProtobuf): PrincipalRule => ({
  resource,
  actions: actions.map(principalRuleActionFromProtobuf),
});

const principalRuleActionFromProtobuf = ({
  action,
  effect,
  condition,
  name,
}: PrincipalRule_Action): PrincipalRuleAction => ({
  action,
  effect: effectFromProtobuf(effect),
  condition: condition && conditionFromProtobuf(condition),
  name,
});

const resourcePolicyFromProtobuf = ({
  resource,
  version,
  importDerivedRoles,
  rules,
  schemas,
  scope,
}: ResourcePolicyProtobuf): OmitPolicyBase<ResourcePolicy> => ({
  resourcePolicy: {
    resource,
    version,
    importDerivedRoles,
    rules: rules.map(resourceRuleFromProtobuf),
    schemas: schemas && schemaRefsFromProtobuf(schemas),
    scope,
  },
});

const resourceRuleFromProtobuf = ({
  actions,
  effect,
  derivedRoles,
  roles,
  condition,
  name,
}: ResourceRuleProtobuf): ResourceRule => ({
  actions,
  effect: effectFromProtobuf(effect),
  derivedRoles,
  roles,
  condition: condition && conditionFromProtobuf(condition),
  name,
});

const schemaRefsFromProtobuf = ({
  principalSchema,
  resourceSchema,
}: Schemas): SchemaRefs => ({
  principalSchema: principalSchema && schemaRefFromProtobuf(principalSchema),
  resourceSchema: resourceSchema && schemaRefFromProtobuf(resourceSchema),
});

const schemaRefFromProtobuf = ({
  ref,
  ignoreWhen,
}: Schemas_Schema): SchemaRef => ({
  ref,
  ignoreWhen: ignoreWhen && {
    actions: ignoreWhen.actions,
  },
});

export const getSchemasResponseFromProtobuf = ({
  schemas,
}: GetSchemaResponse): GetSchemasResponse => ({
  schemas: schemas.map(schemaFromProtobuf),
});

const schemaFromProtobuf = ({ id, definition }: SchemaProtobuf): Schema => ({
  id,
  definition: new SchemaDefinition(definition),
});

export const listPoliciesResponseFromProtobuf = ({
  policyIds,
}: ListPoliciesResponseProtobuf): ListPoliciesResponse => ({
  ids: policyIds,
});

export const listSchemasResponseFromProtobuf = ({
  schemaIds,
}: ListSchemasResponseProtobuf): ListSchemasResponse => ({
  ids: schemaIds,
});

export const planResourcesResponseFromProtobuf = ({
  requestId,
  filter,
  validationErrors,
  meta,
}: PlanResourcesResponseProtobuf): PlanResourcesResponse => {
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
};

const planKindFromProtobuf = (kind: PlanResourcesFilter_Kind): PlanKind => {
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
          PlanResourcesFilter_Kind[kind] ?? "unrecognized"
        })`
      );
  }
};

const planOperandFromProtobuf = ({
  node,
}: PlanResourcesFilter_Expression_Operand): PlanExpressionOperand => {
  if (!node) {
    throw new Error("Missing node on PlanResources expression operand");
  }

  switch (node.$case) {
    case "expression":
      return new PlanExpression(
        node.expression.operator,
        node.expression.operands.map(planOperandFromProtobuf)
      );

    case "value":
      return new PlanExpressionValue((node.value ?? null) as Value);

    case "variable":
      return new PlanExpressionVariable(node.variable);
  }
};

const planResourcesMetadataFromProtobuf = ({
  filterDebug,
  matchedScope,
}: PlanResourcesResponse_Meta): PlanResourcesMetadata => ({
  conditionString: filterDebug,
  matchedScope,
});
