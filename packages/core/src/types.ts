export interface AuxData {
  jwt?: JWT;
}

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

  public findResult({
    kind,
    id,
    policyVersion,
    scope,
  }: ResourceQuery): CheckResourcesResult | undefined {
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

export interface CheckResourcesResult {
  resource: CheckResourcesResultResource;
  actions: Record<string, Effect | undefined>;
  validationErrors: ValidationError[];
  metadata: CheckResourcesResultMetadata | undefined;
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

export interface JWT {
  token: string;
  keySetId?: string;
}

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

export type ResourceQuery = Omit<Resource, "attributes">;

export interface ResourceCheck {
  resource: Resource;
  actions: string[];
}

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

export type Value =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Value }
  | Value[];
