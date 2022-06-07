/**
 * Auxiliary data sources that can be referenced in policy conditions.
 *
 * @public
 */
export interface AuxData {
  /**
   * A JSON Web Token (JWT) to use as an auxiliary data source.
   */
  jwt?: JWT;
}

/**
 * Input to {@link @cerbos/core#Client.checkResource}.
 *
 * @public
 */
export type CheckResourceRequest = Omit<CheckResourcesRequest, "resources"> &
  ResourceCheck;

/**
 * Input to {@link @cerbos/core#Client.checkResources}.
 *
 * @public
 */
export interface CheckResourcesRequest {
  /**
   * The principal to check.
   */
  principal: Principal;

  /**
   * The resources and actions to check.
   */
  resources: ResourceCheck[];

  /**
   * Auxiliary data.
   *
   * @defaultValue `{}`
   */
  auxData?: AuxData;

  /**
   * Include {@link CheckResourcesResultMetadata | additional metadata} in the results?
   *
   * @defaultValue `false`
   */
  includeMetadata?: boolean;

  /**
   * An identifier for tracing the request.
   *
   * @defaultValue A randomly-generated UUID.
   */
  requestId?: string;
}

/**
 * The outcome of checking a principal's permissions on a set of resources.
 *
 * @public
 */
export class CheckResourcesResponse {
  /**
   * The identifier for tracing the request.
   */
  public requestId: string;

  /**
   * The outcomes of the permission checks for each resource.
   */
  public results: CheckResourcesResult[];

  public constructor({
    requestId,
    results,
  }: Pick<CheckResourcesResponse, "requestId" | "results">) {
    this.requestId = requestId;
    this.results = results;
  }

  /**
   * Check if the policy decision was that all input actions should be allowed for a resource.
   *
   * @param resource - the resource search criteria.
   * @returns `undefined` if the resource is not present in the results.
   */
  public allAllowed(resource: ResourceSearch): boolean | undefined {
    return this.findResult(resource)?.allAllowed();
  }

  /**
   * List the actions that should be allowed for a resource.
   *
   * @param resource - the resource search criteria.
   * @returns `undefined` if the resource is not present in the results.
   */
  public allowedActions(resource: ResourceSearch): string[] | undefined {
    return this.findResult(resource)?.allowedActions();
  }

  /**
   * Check if the policy decision was that an action should be allowed for a resource.
   *
   * @param check - the resource search criteria and action to check.
   * @returns `undefined` if the resource or action is not present in the results.
   */
  public isAllowed(check: {
    resource: ResourceSearch;
    action: string;
  }): boolean | undefined {
    return this.findResult(check.resource)?.isAllowed(check.action);
  }

  /**
   * Find an item from {@link CheckResourcesResponse.results | results} by resource.
   *
   * @param resource - the resource search criteria.
   * @returns `undefined` if the resource is not present in the results.
   */
  public findResult(
    resource: ResourceSearch
  ): CheckResourcesResult | undefined {
    const { kind, id, policyVersion, scope } = resource;

    return this.results.find(
      ({ resource }) =>
        resource.kind === kind &&
        resource.id === id &&
        (policyVersion === undefined ||
          resource.policyVersion === policyVersion) &&
        (scope === undefined || resource.scope === scope)
    );
  }
}

/**
 * The outcome of checking a principal's permissions on single resource.
 *
 * @public
 */
export class CheckResourcesResult {
  /**
   * The resource that was checked.
   */
  public resource: CheckResourcesResultResource;

  /**
   * The policy decisions for each action.
   */
  public actions: Record<string, Effect | undefined>;

  /**
   * Any schema validation errors for the principal or resource attributes.
   */
  public validationErrors: ValidationError[];

  /**
   * Additional information about how the policy decisions were reached.
   *
   * @remarks
   * `undefined` if {@link CheckResourcesRequest.includeMetadata | includeMetadata} was `false`.
   */
  public metadata: CheckResourcesResultMetadata | undefined;

  public constructor({
    resource,
    actions,
    validationErrors,
    metadata,
  }: Pick<
    CheckResourcesResult,
    "resource" | "actions" | "validationErrors" | "metadata"
  >) {
    this.resource = resource;
    this.actions = actions;
    this.validationErrors = validationErrors;
    this.metadata = metadata;
  }

  /**
   * Check if the policy decision was that all input actions should be allowed for the resource.
   */
  public allAllowed(): boolean {
    return Object.values(this.actions).every(
      (effect) => effect === Effect.ALLOW
    );
  }

  /**
   * List the actions that should be allowed for the resource.
   */
  public allowedActions(): string[] {
    return Object.keys(this.actions).filter(
      (action) => this.actions[action] === Effect.ALLOW
    );
  }

  /**
   * Check if the policy decision was that a given action should be allowed for the resource.
   *
   * @param action - the action to check.
   * @returns `undefined` if the action is not present in the results.
   */
  public isAllowed(action: string): boolean | undefined {
    switch (this.actions[action]) {
      case Effect.ALLOW:
        return true;

      case Effect.DENY:
        return false;

      default:
        return undefined;
    }
  }
}

/**
 * A resource that was checked.
 *
 * @public
 */
export interface CheckResourcesResultResource {
  /**
   * The type of resource.
   */
  kind: string;

  /**
   * The unique identifier of the resource.
   */
  id: string;

  /**
   * The policy version against which the check was performed.
   */
  policyVersion: string;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies.html | policy scope} against which the check was performed.
   */
  scope: string;
}

/**
 * Additional information about how policy decisions were reached.
 *
 * @public
 */
export interface CheckResourcesResultMetadata {
  /**
   * Additional information about how the policy decision was reached for each action.
   */
  actions: Record<string, CheckResourcesResultMetadataEffect | undefined>;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/derived_roles.html | derived roles} that were applied to the principal for the resource.
   */
  effectiveDerivedRoles: string[];
}

/**
 * Additional information about how a policy decision was reached.
 *
 * @public
 */
export interface CheckResourcesResultMetadataEffect {
  /**
   * The policy that was used to make the decision.
   */
  matchedPolicy: string;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies.html | policy scope} that was used to make the decision.
   */
  matchedScope: string;
}

/**
 * Outcomes of policy decisions.
 *
 * @public
 */
export enum Effect {
  /**
   * The action should be allowed.
   */
  ALLOW = "EFFECT_ALLOW",

  /**
   * The action should be denied.
   */
  DENY = "EFFECT_DENY",
}

/**
 * Input to {@link @cerbos/core#Client.isAllowed}.
 *
 * @public
 */
export type IsAllowedRequest = Omit<CheckResourceRequest, "actions"> & {
  action: string;
};

/**
 * A JSON Web Token to use as an auxiliary data source, which will be verified against the Cerbos policy decision point (PDP) server's {@link https://docs.cerbos.dev/cerbos/latest/configuration/auxdata.html#_jwt | configured JSON Web Key Sets (JWKS)} unless verification is disabled on the server.
 *
 * @public
 */
export interface JWT {
  /**
   * The encoded JWT.
   */
  token: string;

  /**
   * The ID of the JWKS to be used by the PDP server to verify the JWT.
   *
   * @remarks
   * Optional if the PDP server only has one JWKS configured or verification disabled
   */
  keySetId?: string;
}

/**
 * An abstract syntax tree node representing an expression to evaluate.
 *
 * @public
 */
export class PlanExpression {
  public constructor(
    /**
     * The operator to invoke.
     */
    public operator: string,

    /**
     * The operands on which to invoke the operator.
     */
    public operands: PlanExpressionOperand[]
  ) {}
}

/**
 * An abstract syntax tree node representing an operand to an expression.
 *
 * @public
 */
export type PlanExpressionOperand =
  | PlanExpression
  | PlanExpressionValue
  | PlanExpressionVariable;

/**
 * An abstract syntax tree node representing a constant value.
 *
 * @public
 */
export class PlanExpressionValue {
  public constructor(
    /**
     * The constant value.
     */
    public value: Value
  ) {}
}

/**
 * An abstract syntax tree node representing a variable whose value was unknown when producing the query plan.
 *
 * @public
 */
export class PlanExpressionVariable {
  public constructor(
    /**
     * The name of the variable.
     */
    public name: string
  ) {}
}

/**
 * Types of query plans.
 *
 * @public
 */
export enum PlanKind {
  /**
   * The specified action is always allowed for the principal on resources matching the input.
   */
  ALWAYS_ALLOWED = "KIND_ALWAYS_ALLOWED",

  /**
   * The specified action is always denied for the principal on resources matching the input.
   */
  ALWAYS_DENIED = "KIND_ALWAYS_DENIED",

  /**
   * The specified action is conditionally allowed for the principal on resources matching the input.
   */
  CONDITIONAL = "KIND_CONDITIONAL",
}

/**
 * Additional information about the query plan.
 *
 * @public
 */
export interface PlanResourcesMetadata {
  /**
   * The query condition abstract syntax tree rendered as a human-readable string, to help with debugging.
   */
  conditionString: string;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies.html | policy scope} that was used to plan the query.
   */
  matchedScope: string;
}

/**
 * Input to {@link @cerbos/core#Client.planResources}.
 *
 * @public
 */
export interface PlanResourcesRequest {
  /**
   * The principal for whom to plan.
   */
  principal: Principal;

  /**
   * Partial details of the resources for which to plan.
   */
  resource: ResourceQuery;

  /**
   * The action for which to plan.
   */
  action: string;

  /**
   * Auxiliary data.
   *
   * @defaultValue `{}`
   */
  auxData?: AuxData;

  /**
   * Include {@link PlanResourcesMetadata | additional metadata} in the plan?
   *
   * @defaultValue `false`
   */
  includeMetadata?: boolean;

  /**
   * @defaultValue A randomly-generated UUID.
   */
  requestId?: string;
}

/**
 * A query plan that can be used to obtain a list of resources on which a principal is allowed to perform a particular action.
 *
 * @public
 */
export type PlanResourcesResponse =
  | PlanResourcesConditionalResponse
  | PlanResourcesUnconditionalResponse;

/**
 * Common fields between different {@link PlanResourcesResponse} types.
 *
 * @public
 */
export interface PlanResourcesResponseBase {
  /**
   * The identifier for tracing the request.
   */
  requestId: string;

  /**
   * Additional information about the query plan.
   *
   * @remarks
   * `undefined` if {@link PlanResourcesRequest.includeMetadata | includeMetadata} was `false`.
   */
  metadata: PlanResourcesMetadata | undefined;
}

/**
 * A query plan for when the specified action is conditionally allowed for the principal on resources matching the input.
 *
 * @public
 */
export interface PlanResourcesConditionalResponse
  extends PlanResourcesResponseBase {
  /**
   * The type of plan.
   */
  kind: PlanKind.CONDITIONAL;

  /**
   * The root node of the query condition abstract syntax tree.
   */
  condition: PlanExpressionOperand;
}

/**
 * A query plan for when the specified action is always allowed or denied for the principal on resources matching the input.
 *
 * @public
 */
export interface PlanResourcesUnconditionalResponse
  extends PlanResourcesResponseBase {
  /**
   * The type of plan.
   */
  kind: PlanKind.ALWAYS_ALLOWED | PlanKind.ALWAYS_DENIED;
}

/**
 * A principal (often a user, but potentially another actor like a service account) to authorize.
 *
 * @public
 */
export interface Principal {
  /**
   * A unique identifier for the principal.
   */
  id: string;

  /**
   * The roles held by the principal.
   */
  roles: string[];

  /**
   * Application-specific attributes describing the principal.
   *
   * @defaultValue `{}`
   */
  attributes?: Record<string, Value>;

  /**
   * The policy version to use when authorizing the principal.
   *
   * @defaultValue The Cerbos policy decision point server's configured default version.
   */
  policyVersion?: string;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies.html | policy scope} to use when authorizing the principal.
   *
   * @defaultValue `""`
   */
  scope?: string;
}

/**
 * A resource on which to check a principal's permissions.
 *
 * @public
 */
export interface Resource {
  /**
   * The type of resource.
   */
  kind: string;

  /**
   * A unique identifier for the resource.
   */
  id: string;

  /**
   * Application-specific attributes describing the resource.
   *
   * @defaultValue `{}`
   */
  attributes?: Record<string, Value>;

  /**
   * The policy version to use when checking the principal's permissions on the resource.
   *
   * @defaultValue The Cerbos policy decision point server's configured default version.
   */
  policyVersion?: string;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies.html | policy scope} to use when checking the principal's permissions on the resource.
   *
   * @defaultValue `""`
   */
  scope?: string;
}

/**
 * A {@link Resource} and list of actions on which to check a principal's permissions.
 *
 * @public
 */
export interface ResourceCheck {
  /**
   * The resource to check.
   */
  resource: Resource;

  /**
   * The actions to check.
   */
  actions: string[];
}

/**
 * Partial details of resources to be queried.
 *
 * @public
 */
export type ResourceQuery = Omit<Resource, "id">;

/**
 * Search criteria to match a resource in results.
 *
 * @remarks
 * `kind` and `id` are required; `policy_version` and `scope` may also be provided if needed to distinguish between multiple results for the same `kind` and `id`.
 *
 * @public
 */
export type ResourceSearch = Omit<Resource, "attributes">;

/**
 * Information about the Cerbos policy decision point (PDP) server.
 *
 * @public
 */
export interface ServerInfo {
  /**
   * The time at which the PDP server binary was built.
   */
  buildDate: string;

  /**
   * The commit SHA from which the PDP server binary was built.
   */
  commit: string;

  /**
   * The version of the PDP server.
   */
  version: string;
}

/**
 * An error that occurred while validating the principal or resource attributes against a schema.
 *
 * @public
 */
export interface ValidationError {
  /**
   * The path to the attribute that failed validation.
   */
  path: string;

  /**
   * The error message.
   */
  message: string;

  /**
   * The source of the invalid attributes.
   */
  source: ValidationErrorSource;
}

/**
 * Sources of invalid attributes.
 *
 * @public
 */
export enum ValidationErrorSource {
  /**
   * The principal's attributes failed schema validation.
   */
  PRINCIPAL = "SOURCE_PRINCIPAL",

  /**
   * The resource's attributes failed schema validation.
   */
  RESOURCE = "SOURCE_RESOURCE",
}

/**
 * A callback function to be invoked when input fails schema validation.
 *
 * @public
 */
export type ValidationFailedCallback = (
  validationErrors: ValidationError[]
) => void;

/**
 * Any JSON-serializable value.
 *
 * @public
 */
export type Value =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Value }
  | Value[];
