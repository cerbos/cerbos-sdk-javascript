export interface AuxData {
  jwt?: JWT;
}

export type CheckResourceRequest = Omit<CheckResourcesRequest, "resources"> &
  ResourceCheck;

export interface CheckResourcesRequest {
  principal: Principal;
  resources: ResourceCheck[];
  auxData?: AuxData;
  includeMetadata?: boolean;
  requestId?: string;
}

export interface CheckResourcesResponseData {
  requestId: string;
  results: CheckResourcesResult[];
}

export class CheckResourcesResponse implements CheckResourcesResponseData {
  public requestId: string;
  public results: CheckResourcesResult[];

  public constructor({ requestId, results }: CheckResourcesResponseData) {
    this.requestId = requestId;
    this.results = results;
  }

  public allAllowed(resource: ResourceSearch): boolean | undefined {
    return this.findResult(resource)?.allAllowed();
  }

  public allowedActions(resource: ResourceSearch): string[] | undefined {
    return this.findResult(resource)?.allowedActions();
  }

  public isAllowed({
    resource,
    action,
  }: {
    resource: ResourceSearch;
    action: string;
  }): boolean | undefined {
    return this.findResult(resource)?.isAllowed(action);
  }

  public findResult({
    kind,
    id,
    policyVersion,
    scope,
  }: ResourceSearch): CheckResourcesResult | undefined {
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

export interface CheckResourcesResultData {
  resource: CheckResourcesResultResource;
  actions: Record<string, Effect | undefined>;
  validationErrors: ValidationError[];
  metadata: CheckResourcesResultMetadata | undefined;
}

export class CheckResourcesResult implements CheckResourcesResultData {
  public resource: CheckResourcesResultResource;
  public actions: Record<string, Effect | undefined>;
  public validationErrors: ValidationError[];
  public metadata: CheckResourcesResultMetadata | undefined;

  public constructor({
    resource,
    actions,
    validationErrors,
    metadata,
  }: CheckResourcesResultData) {
    this.resource = resource;
    this.actions = actions;
    this.validationErrors = validationErrors;
    this.metadata = metadata;
  }

  public allAllowed(): boolean {
    return Object.values(this.actions).every(
      (effect) => effect === Effect.ALLOW
    );
  }

  public allowedActions(): string[] {
    return Object.keys(this.actions).filter(
      (action) => this.actions[action] === Effect.ALLOW
    );
  }

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

export interface CheckResourcesResultResource {
  kind: string;
  id: string;
  policyVersion: string;
  scope: string;
}

export interface CheckResourcesResultMetadata {
  actions: Record<string, CheckResourcesResultMetadataEffect | undefined>;
  effectiveDerivedRoles: string[];
}

export interface CheckResourcesResultMetadataEffect {
  matchedPolicy: string;
  matchedScope: string;
}

export enum Effect {
  ALLOW = "EFFECT_ALLOW",
  DENY = "EFFECT_DENY",
}

export type IsAllowedRequest = Omit<CheckResourceRequest, "actions"> & {
  action: string;
};

export interface JWT {
  token: string;
  keySetId?: string;
}

export class PlanExpression {
  public constructor(
    public operator: string,
    public operands: PlanExpressionOperand[]
  ) {}
}

export type PlanExpressionOperand =
  | PlanExpression
  | PlanExpressionValue
  | PlanExpressionVariable;

export class PlanExpressionValue {
  public constructor(public value: Value) {}
}

export class PlanExpressionVariable {
  public constructor(public name: string) {}
}

export enum PlanKind {
  ALWAYS_ALLOWED = "KIND_ALWAYS_ALLOWED",
  ALWAYS_DENIED = "KIND_ALWAYS_DENIED",
  CONDITIONAL = "KIND_CONDITIONAL",
}

export interface PlanResourcesMetadata {
  conditionString: string;
  matchedScope: string;
}

export interface PlanResourcesRequest {
  principal: Principal;
  resource: ResourceQuery;
  action: string;
  auxData?: AuxData;
  includeMetadata?: boolean;
  requestId?: string;
}

export type PlanResourcesResponse = {
  requestId: string;
  metadata: PlanResourcesMetadata | undefined;
} & (
  | { kind: PlanKind.ALWAYS_ALLOWED | PlanKind.ALWAYS_DENIED }
  | { kind: PlanKind.CONDITIONAL; condition: PlanExpressionOperand }
);

export interface Principal {
  id: string;
  roles: string[];
  attributes?: Record<string, Value>;
  policyVersion?: string;
  scope?: string;
}

export interface Resource {
  kind: string;
  id: string;
  attributes?: Record<string, Value>;
  policyVersion?: string;
  scope?: string;
}

export interface ResourceCheck {
  resource: Resource;
  actions: string[];
}

export type ResourceQuery = Omit<Resource, "id">;

export type ResourceSearch = Omit<Resource, "attributes">;

export interface ServerInfo {
  buildDate: string;
  commit: string;
  version: string;
}

export interface ValidationError {
  path: string;
  message: string;
  source: ValidationErrorSource;
}

export enum ValidationErrorSource {
  PRINCIPAL = "SOURCE_PRINCIPAL",
  RESOURCE = "SOURCE_RESOURCE",
}

export class ValidationFailed extends Error {
  public constructor(public readonly validationErrors: ValidationError[]) {
    super("Input failed schema validation");
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export type ValidationFailedCallback = (
  validationErrors: ValidationError[]
) => void;

export type Value =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Value }
  | Value[];
