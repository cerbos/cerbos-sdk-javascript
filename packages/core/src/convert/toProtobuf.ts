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
} from "../types/external";
import {
  Effect,
  SchemaDefinition,
  matchIsMatchAll,
  matchIsMatchAny,
  matchIsMatchExpr,
  matchIsMatchNone,
  policyIsDerivedRoles,
  policyIsPrincipalPolicy,
  policyIsResourcePolicy,
} from "../types/external";
import type { DisablePoliciesRequest } from "../types/external/DisablePoliciesRequest";
import type { GetSchemasRequest } from "../types/external/GetSchemasRequest";

const encoder = new TextEncoder();

export const addOrUpdatePoliciesRequestToProtobuf = ({
  policies,
}: AddOrUpdatePoliciesRequest): AddOrUpdatePolicyRequest => ({
  policies: policies.map(policyToProtobuf),
});

const policyToProtobuf = (policy: Policy): PolicyProtobuf => {
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
    metadata: undefined,
    policyType: policyTypeToProtobuf(policy),
    variables,
  };
};

const policyTypeToProtobuf = (
  policy: Policy
): Exclude<PolicyProtobuf["policyType"], undefined> => {
  if (policyIsDerivedRoles(policy)) {
    return {
      $case: "derivedRoles",
      derivedRoles: derivedRolesToProtobuf(policy),
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
};

const derivedRolesToProtobuf = ({
  derivedRoles: { name, definitions },
}: DerivedRoles): DerivedRolesProtobuf => ({
  name,
  definitions: definitions.map(derivedRoleDefinitionToProtobuf),
});

const derivedRoleDefinitionToProtobuf = ({
  name,
  parentRoles,
  condition,
}: DerivedRoleDefinition): RoleDef => ({
  name,
  parentRoles,
  condition: condition && conditionToProtobuf(condition),
});

const conditionToProtobuf = ({ match }: Condition): ConditionProtobuf => ({
  condition: {
    $case: "match",
    match: matchToProtobuf(match),
  },
});

const matchToProtobuf = (match: Match): MatchProtobuf => {
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
};

const matchesToProtobuf = ({ of }: Matches): Match_ExprList => ({
  of: of.map(matchToProtobuf),
});

const principalPolicyToProtobuf = ({
  principalPolicy: { principal, version, rules, scope = "" },
}: PrincipalPolicy): PrincipalPolicyProtobuf => ({
  principal,
  version,
  rules: rules.map(principalRuleToProtobuf),
  scope,
});

const principalRuleToProtobuf = ({
  resource,
  actions,
}: PrincipalRule): PrincipalRuleProtobuf => ({
  resource,
  actions: actions.map(principalRuleActionToProtobuf),
});

const principalRuleActionToProtobuf = ({
  action,
  effect,
  condition,
  name = "",
  output,
}: PrincipalRuleAction): PrincipalRule_Action => ({
  action,
  effect: effectToProtobuf(effect),
  condition: condition && conditionToProtobuf(condition),
  name,
  output: output && outputToProtobuf(output),
});

const effectToProtobuf = (effect: Effect): EffectProtobuf =>
  effect === Effect.ALLOW
    ? EffectProtobuf.EFFECT_ALLOW
    : EffectProtobuf.EFFECT_DENY;

const outputToProtobuf = ({ expr }: Output): OutputProtobuf => ({ expr });

const resourcePolicyToProtobuf = ({
  resourcePolicy: {
    resource,
    version,
    importDerivedRoles = [],
    rules,
    scope = "",
    schemas,
  },
}: ResourcePolicy): ResourcePolicyProtobuf => ({
  resource,
  version,
  importDerivedRoles,
  rules: rules.map(resourceRuleToProtobuf),
  scope,
  schemas: schemas && policySchemasToProtobuf(schemas),
});

const resourceRuleToProtobuf = ({
  actions,
  effect,
  derivedRoles = [],
  roles = [],
  condition,
  name = "",
  output,
}: ResourceRule): ResourceRuleProtobuf => ({
  actions,
  effect: effectToProtobuf(effect),
  derivedRoles,
  roles,
  condition: condition && conditionToProtobuf(condition),
  name,
  output: output && outputToProtobuf(output),
});

const policySchemasToProtobuf = ({
  principalSchema,
  resourceSchema,
}: SchemaRefs): Schemas => ({
  principalSchema: principalSchema && policySchemaToProtobuf(principalSchema),
  resourceSchema: resourceSchema && policySchemaToProtobuf(resourceSchema),
});

const policySchemaToProtobuf = ({
  ref,
  ignoreWhen,
}: SchemaRef): Schemas_Schema => ({
  ref,
  ignoreWhen,
});

export const addOrUpdateSchemasRequestToProtobuf = ({
  schemas,
}: AddOrUpdateSchemasRequest): AddOrUpdateSchemaRequest => ({
  schemas: schemas.map(schemaToProtobuf),
});

const schemaToProtobuf = ({ id, definition }: SchemaInput): Schema => ({
  id,
  definition: schemaDefinitionToProtobuf(definition),
});

const schemaDefinitionToProtobuf = (
  definition: SchemaDefinitionInput
): Uint8Array => {
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
};

export const checkResourcesRequestToProtobuf = ({
  principal,
  resources,
  auxData,
  includeMetadata = false,
  requestId = uuidv4(),
}: CheckResourcesRequest): CheckResourcesRequestProtobuf => ({
  principal: principalToProtobuf(principal),
  resources: resources.map(resourceCheckToProtobuf),
  auxData: auxData && auxDataToProtobuf(auxData),
  includeMeta: includeMetadata,
  requestId,
});

const principalToProtobuf = ({
  id,
  roles,
  attributes = {},
  policyVersion = "",
  scope = "",
}: Principal): PrincipalProtobuf => ({
  id,
  roles,
  attr: attributes,
  policyVersion,
  scope,
});

const resourceCheckToProtobuf = ({
  resource,
  actions,
}: ResourceCheck): CheckResourcesRequest_ResourceEntry => ({
  resource: resourceToProtobuf(resource),
  actions,
});

const resourceToProtobuf = ({
  kind,
  id,
  attributes = {},
  policyVersion = "",
  scope = "",
}: Resource): ResourceProtobuf => ({
  kind,
  id,
  attr: attributes,
  policyVersion,
  scope,
});

const auxDataToProtobuf = ({ jwt }: AuxData): AuxDataProtobuf => ({
  jwt: jwt && jwtToProtobuf(jwt),
});

const jwtToProtobuf = ({ token, keySetId = "" }: JWT): AuxData_JWT => ({
  token,
  keySetId,
});

export const deleteSchemasRequestToProtobuf = ({
  ids,
}: DeleteSchemasRequest): DeleteSchemaRequest => ({
  id: ids,
});

export const disablePoliciesRequestToProtobuf = ({
  ids,
}: DisablePoliciesRequest): DisablePolicyRequest => ({
  id: ids,
});

export const enablePoliciesRequestToProtobuf = ({
  ids,
}: EnablePoliciesRequest): EnablePolicyRequest => ({
  id: ids,
});

export const getPoliciesRequestToProtobuf = ({
  ids,
}: GetPoliciesRequest): GetPolicyRequest => ({
  id: ids,
});

export const getSchemasRequestToProtobuf = ({
  ids,
}: GetSchemasRequest): GetSchemaRequest => ({
  id: ids,
});

export const listPoliciesRequestToProtobuf = ({
  includeDisabled = false,
  nameRegexp = "",
  scopeRegexp = "",
  versionRegexp = "",
}: ListPoliciesRequest): ListPoliciesRequestProtobuf => ({
  includeDisabled,
  nameRegexp,
  scopeRegexp,
  versionRegexp,
});

export const planResourcesRequestToProtobuf = ({
  principal,
  resource,
  action,
  auxData,
  includeMetadata = false,
  requestId = uuidv4(),
}: PlanResourcesRequest): PlanResourcesRequestProtobuf => ({
  principal: principalToProtobuf(principal),
  resource: resourceQueryToProtobuf(resource),
  action,
  auxData: auxData && auxDataToProtobuf(auxData),
  includeMeta: includeMetadata,
  requestId,
});

const resourceQueryToProtobuf = ({
  kind,
  attributes = {},
  policyVersion = "",
  scope = "",
}: ResourceQuery): PlanResourcesInput_Resource => ({
  kind,
  attr: attributes,
  policyVersion,
  scope,
});
