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

export interface CheckResourcesResponse {
  requestId: string;
  results: CheckResourcesResult[];
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
