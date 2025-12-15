// Copyright 2021-2025 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

// @generated from file cerbos/cloud/epdp/v2/epdp.proto (package cerbos.cloud.epdp.v2, syntax proto3)
/* eslint-disable */

import type {
  GenEnum,
  GenFile,
  GenMessage,
  GenService,
} from "@bufbuild/protobuf/codegenv2";
import {
  enumDesc,
  fileDesc,
  messageDesc,
  serviceDesc,
} from "@bufbuild/protobuf/codegenv2";
import { file_buf_validate_validate } from "../../../../buf/validate/validate_pb";
import type {
  AuditTrail,
  AuditTrailJson,
  AuditTrailValid,
} from "../../../audit/v1/audit_pb";
import { file_cerbos_audit_v1_audit } from "../../../audit/v1/audit_pb";
import type {
  CheckResourcesResponse as CheckResourcesResponse$1,
  CheckResourcesResponseJson as CheckResourcesResponseJson$1,
  CheckResourcesResponseValid as CheckResourcesResponseValid$1,
  PlanResourcesResponse as PlanResourcesResponse$1,
  PlanResourcesResponseJson as PlanResourcesResponseJson$1,
  PlanResourcesResponseValid as PlanResourcesResponseValid$1,
} from "../../../response/v1/response_pb";
import { file_cerbos_response_v1_response } from "../../../response/v1/response_pb";
import { file_google_api_visibility } from "../../../../google/api/visibility_pb";
import type {
  Empty,
  EmptyJson,
  Timestamp,
  TimestampJson,
  Value,
  ValueJson,
} from "@bufbuild/protobuf/wkt";
import {
  file_google_protobuf_empty,
  file_google_protobuf_struct,
  file_google_protobuf_timestamp,
} from "@bufbuild/protobuf/wkt";
import type { Code, CodeJson } from "../../../../google/rpc/code_pb";
import { file_google_rpc_code } from "../../../../google/rpc/code_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cerbos/cloud/epdp/v2/epdp.proto.
 */
export const file_cerbos_cloud_epdp_v2_epdp: GenFile =
  /*@__PURE__*/
  fileDesc(
    "Ch9jZXJib3MvY2xvdWQvZXBkcC92Mi9lcGRwLnByb3RvEhRjZXJib3MuY2xvdWQuZXBkcC52MiKqBAoGQ29uZmlnEjkKCWV2YWx1YXRvchgBIAEoCzImLmNlcmJvcy5jbG91ZC5lcGRwLnYyLkNvbmZpZy5FdmFsdWF0b3ISMwoGc2NoZW1hGAIgASgLMiMuY2VyYm9zLmNsb3VkLmVwZHAudjIuQ29uZmlnLlNjaGVtYRruAQoJRXZhbHVhdG9yEkQKB2dsb2JhbHMYASADKAsyMy5jZXJib3MuY2xvdWQuZXBkcC52Mi5Db25maWcuRXZhbHVhdG9yLkdsb2JhbHNFbnRyeRIeChZkZWZhdWx0X3BvbGljeV92ZXJzaW9uGAIgASgJEhwKFGxlbmllbnRfc2NvcGVfc2VhcmNoGAMgASgIEhUKDWRlZmF1bHRfc2NvcGUYBCABKAkaRgoMR2xvYmFsc0VudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAEavgEKBlNjaGVtYRJECgtlbmZvcmNlbWVudBgBIAEoDjIvLmNlcmJvcy5jbG91ZC5lcGRwLnYyLkNvbmZpZy5TY2hlbWEuRW5mb3JjZW1lbnQibgoLRW5mb3JjZW1lbnQSGwoXRU5GT1JDRU1FTlRfVU5TUEVDSUZJRUQQABIUChBFTkZPUkNFTUVOVF9OT05FEAESFAoQRU5GT1JDRU1FTlRfV0FSThACEhYKEkVORk9SQ0VNRU5UX1JFSkVDVBADIkQKBUVycm9yEioKBGNvZGUYASABKA4yEC5nb29nbGUucnBjLkNvZGVCCrpIB4IBBBABIAASDwoHbWVzc2FnZRgCIAEoCSKoAQoITWV0YWRhdGESHwoOY2VyYm9zX3ZlcnNpb24YASABKAlCB7pIBHICEAESJAoSY2VyYm9zX2NvbW1pdF9oYXNoGAIgASgJQgi6SAVyA5gBKBIfCg13YXNtX2NoZWNrc3VtGAMgASgJQgi6SAVyA5gBQBI0CghidWlsdF9hdBgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCBrpIA8gBASKYAQoWQ2hlY2tSZXNvdXJjZXNSZXNwb25zZRJECghyZXNwb25zZRgBIAEoCzIqLmNlcmJvcy5yZXNwb25zZS52MS5DaGVja1Jlc291cmNlc1Jlc3BvbnNlQga6SAPIAQESOAoLYXVkaXRfdHJhaWwYAiABKAsyGy5jZXJib3MuYXVkaXQudjEuQXVkaXRUcmFpbEIGukgDyAEBIpYBChVQbGFuUmVzb3VyY2VzUmVzcG9uc2USQwoIcmVzcG9uc2UYASABKAsyKS5jZXJib3MucmVzcG9uc2UudjEuUGxhblJlc291cmNlc1Jlc3BvbnNlQga6SAPIAQESOAoLYXVkaXRfdHJhaWwYAiABKAsyGy5jZXJib3MuYXVkaXQudjEuQXVkaXRUcmFpbEIGukgDyAEBIqQBCgZCdW5kbGUSPwoIbWV0YWRhdGEYASABKAsyJS5jZXJib3MuY2xvdWQuZXBkcC52Mi5CdW5kbGUuTWV0YWRhdGFCBrpIA8gBARIQCghjb250ZW50cxgCIAEoDBpHCghNZXRhZGF0YRIbCglidW5kbGVfaWQYASABKAlCCLpIBXIDmAEQEh4KDXJ1bGVfcmV2aXNpb24YAiABKANCB7pIBCICIAAirQEKEEdldEJ1bmRsZVJlcXVlc3QSGQoHcnVsZV9pZBgBIAEoCUIIukgFcgOYAQwSIQoGc2NvcGVzGAIgAygJQhG6SA6SAQsQgAEYASIEcgIQARJFChFpZl9tb2RpZmllZF9zaW5jZRgDIAEoCzIlLmNlcmJvcy5jbG91ZC5lcGRwLnYyLkJ1bmRsZS5NZXRhZGF0YUgAiAEBQhQKEl9pZl9tb2RpZmllZF9zaW5jZSKEAQoRR2V0QnVuZGxlUmVzcG9uc2USLgoGYnVuZGxlGAEgASgLMhwuY2VyYm9zLmNsb3VkLmVwZHAudjIuQnVuZGxlSAASLgoMbm90X21vZGlmaWVkGAIgASgLMhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5SABCDwoGcmVzdWx0EgW6SAIIATKIAQoNQnVuZGxlU2VydmljZRJhCglHZXRCdW5kbGUSJi5jZXJib3MuY2xvdWQuZXBkcC52Mi5HZXRCdW5kbGVSZXF1ZXN0GicuY2VyYm9zLmNsb3VkLmVwZHAudjIuR2V0QnVuZGxlUmVzcG9uc2UiA5ACARoU+tLkkwIOEgxFWFBFUklNRU5UQUxCeAocZGV2LmNlcmJvcy5hcGkuY2xvdWQudjIuZXBkcFo9Z2l0aHViLmNvbS9jZXJib3MvY2xvdWQtYXBpL2dlbnBiL2NlcmJvcy9jbG91ZC9lcGRwL3YyO2VwZHB2MqoCGENlcmJvcy5BcGkuQ2xvdWQuVjIuRXBkcGIGcHJvdG8z",
    [
      file_buf_validate_validate,
      file_cerbos_audit_v1_audit,
      file_cerbos_response_v1_response,
      file_google_api_visibility,
      file_google_protobuf_empty,
      file_google_protobuf_struct,
      file_google_protobuf_timestamp,
      file_google_rpc_code,
    ],
  );

/**
 * @generated from message cerbos.cloud.epdp.v2.Config
 */
export type Config = Message<"cerbos.cloud.epdp.v2.Config"> & {
  /**
   * @generated from field: cerbos.cloud.epdp.v2.Config.Evaluator evaluator = 1;
   */
  evaluator?: Config_Evaluator;

  /**
   * @generated from field: cerbos.cloud.epdp.v2.Config.Schema schema = 2;
   */
  schema?: Config_Schema;
};

/**
 * @generated from message cerbos.cloud.epdp.v2.Config
 */
export type ConfigJson = {
  /**
   * @generated from field: cerbos.cloud.epdp.v2.Config.Evaluator evaluator = 1;
   */
  evaluator?: Config_EvaluatorJson;

  /**
   * @generated from field: cerbos.cloud.epdp.v2.Config.Schema schema = 2;
   */
  schema?: Config_SchemaJson;
};

export type ConfigValid = Config;

/**
 * Describes the message cerbos.cloud.epdp.v2.Config.
 * Use `create(ConfigSchema)` to create a new message.
 */
export const ConfigSchema: GenMessage<
  Config,
  { jsonType: ConfigJson; validType: ConfigValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_epdp_v2_epdp, 0);

/**
 * @generated from message cerbos.cloud.epdp.v2.Config.Evaluator
 */
export type Config_Evaluator =
  Message<"cerbos.cloud.epdp.v2.Config.Evaluator"> & {
    /**
     * @generated from field: map<string, google.protobuf.Value> globals = 1;
     */
    globals: { [key: string]: Value };

    /**
     * @generated from field: string default_policy_version = 2;
     */
    defaultPolicyVersion: string;

    /**
     * @generated from field: bool lenient_scope_search = 3;
     */
    lenientScopeSearch: boolean;

    /**
     * @generated from field: string default_scope = 4;
     */
    defaultScope: string;
  };

/**
 * @generated from message cerbos.cloud.epdp.v2.Config.Evaluator
 */
export type Config_EvaluatorJson = {
  /**
   * @generated from field: map<string, google.protobuf.Value> globals = 1;
   */
  globals?: { [key: string]: ValueJson };

  /**
   * @generated from field: string default_policy_version = 2;
   */
  defaultPolicyVersion?: string;

  /**
   * @generated from field: bool lenient_scope_search = 3;
   */
  lenientScopeSearch?: boolean;

  /**
   * @generated from field: string default_scope = 4;
   */
  defaultScope?: string;
};

export type Config_EvaluatorValid = Config_Evaluator;

/**
 * Describes the message cerbos.cloud.epdp.v2.Config.Evaluator.
 * Use `create(Config_EvaluatorSchema)` to create a new message.
 */
export const Config_EvaluatorSchema: GenMessage<
  Config_Evaluator,
  { jsonType: Config_EvaluatorJson; validType: Config_EvaluatorValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_epdp_v2_epdp, 0, 0);

/**
 * @generated from message cerbos.cloud.epdp.v2.Config.Schema
 */
export type Config_Schema = Message<"cerbos.cloud.epdp.v2.Config.Schema"> & {
  /**
   * @generated from field: cerbos.cloud.epdp.v2.Config.Schema.Enforcement enforcement = 1;
   */
  enforcement: Config_Schema_Enforcement;
};

/**
 * @generated from message cerbos.cloud.epdp.v2.Config.Schema
 */
export type Config_SchemaJson = {
  /**
   * @generated from field: cerbos.cloud.epdp.v2.Config.Schema.Enforcement enforcement = 1;
   */
  enforcement?: Config_Schema_EnforcementJson;
};

export type Config_SchemaValid = Config_Schema;

/**
 * Describes the message cerbos.cloud.epdp.v2.Config.Schema.
 * Use `create(Config_SchemaSchema)` to create a new message.
 */
export const Config_SchemaSchema: GenMessage<
  Config_Schema,
  { jsonType: Config_SchemaJson; validType: Config_SchemaValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_epdp_v2_epdp, 0, 1);

/**
 * @generated from enum cerbos.cloud.epdp.v2.Config.Schema.Enforcement
 */
export enum Config_Schema_Enforcement {
  /**
   * @generated from enum value: ENFORCEMENT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ENFORCEMENT_NONE = 1;
   */
  NONE = 1,

  /**
   * @generated from enum value: ENFORCEMENT_WARN = 2;
   */
  WARN = 2,

  /**
   * @generated from enum value: ENFORCEMENT_REJECT = 3;
   */
  REJECT = 3,
}

/**
 * @generated from enum cerbos.cloud.epdp.v2.Config.Schema.Enforcement
 */
export type Config_Schema_EnforcementJson =
  | "ENFORCEMENT_UNSPECIFIED"
  | "ENFORCEMENT_NONE"
  | "ENFORCEMENT_WARN"
  | "ENFORCEMENT_REJECT";

/**
 * Describes the enum cerbos.cloud.epdp.v2.Config.Schema.Enforcement.
 */
export const Config_Schema_EnforcementSchema: GenEnum<
  Config_Schema_Enforcement,
  Config_Schema_EnforcementJson
> = /*@__PURE__*/ enumDesc(file_cerbos_cloud_epdp_v2_epdp, 0, 1, 0);

/**
 * @generated from message cerbos.cloud.epdp.v2.Error
 */
export type Error = Message<"cerbos.cloud.epdp.v2.Error"> & {
  /**
   * @generated from field: google.rpc.Code code = 1;
   */
  code: Code;

  /**
   * @generated from field: string message = 2;
   */
  message: string;
};

/**
 * @generated from message cerbos.cloud.epdp.v2.Error
 */
export type ErrorJson = {
  /**
   * @generated from field: google.rpc.Code code = 1;
   */
  code?: CodeJson;

  /**
   * @generated from field: string message = 2;
   */
  message?: string;
};

export type ErrorValid = Error;

/**
 * Describes the message cerbos.cloud.epdp.v2.Error.
 * Use `create(ErrorSchema)` to create a new message.
 */
export const ErrorSchema: GenMessage<
  Error,
  { jsonType: ErrorJson; validType: ErrorValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_epdp_v2_epdp, 1);

/**
 * @generated from message cerbos.cloud.epdp.v2.Metadata
 */
export type Metadata = Message<"cerbos.cloud.epdp.v2.Metadata"> & {
  /**
   * @generated from field: string cerbos_version = 1;
   */
  cerbosVersion: string;

  /**
   * @generated from field: string cerbos_commit_hash = 2;
   */
  cerbosCommitHash: string;

  /**
   * @generated from field: string wasm_checksum = 3;
   */
  wasmChecksum: string;

  /**
   * @generated from field: google.protobuf.Timestamp built_at = 4;
   */
  builtAt?: Timestamp;
};

/**
 * @generated from message cerbos.cloud.epdp.v2.Metadata
 */
export type MetadataJson = {
  /**
   * @generated from field: string cerbos_version = 1;
   */
  cerbosVersion?: string;

  /**
   * @generated from field: string cerbos_commit_hash = 2;
   */
  cerbosCommitHash?: string;

  /**
   * @generated from field: string wasm_checksum = 3;
   */
  wasmChecksum?: string;

  /**
   * @generated from field: google.protobuf.Timestamp built_at = 4;
   */
  builtAt?: TimestampJson;
};

/**
 * @generated from message cerbos.cloud.epdp.v2.Metadata
 */
export type MetadataValid = Message<"cerbos.cloud.epdp.v2.Metadata"> & {
  /**
   * @generated from field: string cerbos_version = 1;
   */
  cerbosVersion: string;

  /**
   * @generated from field: string cerbos_commit_hash = 2;
   */
  cerbosCommitHash: string;

  /**
   * @generated from field: string wasm_checksum = 3;
   */
  wasmChecksum: string;

  /**
   * @generated from field: google.protobuf.Timestamp built_at = 4;
   */
  builtAt: Timestamp;
};

/**
 * Describes the message cerbos.cloud.epdp.v2.Metadata.
 * Use `create(MetadataSchema)` to create a new message.
 */
export const MetadataSchema: GenMessage<
  Metadata,
  { jsonType: MetadataJson; validType: MetadataValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_epdp_v2_epdp, 2);

/**
 * @generated from message cerbos.cloud.epdp.v2.CheckResourcesResponse
 */
export type CheckResourcesResponse =
  Message<"cerbos.cloud.epdp.v2.CheckResourcesResponse"> & {
    /**
     * @generated from field: cerbos.response.v1.CheckResourcesResponse response = 1;
     */
    response?: CheckResourcesResponse$1;

    /**
     * @generated from field: cerbos.audit.v1.AuditTrail audit_trail = 2;
     */
    auditTrail?: AuditTrail;
  };

/**
 * @generated from message cerbos.cloud.epdp.v2.CheckResourcesResponse
 */
export type CheckResourcesResponseJson = {
  /**
   * @generated from field: cerbos.response.v1.CheckResourcesResponse response = 1;
   */
  response?: CheckResourcesResponseJson$1;

  /**
   * @generated from field: cerbos.audit.v1.AuditTrail audit_trail = 2;
   */
  auditTrail?: AuditTrailJson;
};

/**
 * @generated from message cerbos.cloud.epdp.v2.CheckResourcesResponse
 */
export type CheckResourcesResponseValid =
  Message<"cerbos.cloud.epdp.v2.CheckResourcesResponse"> & {
    /**
     * @generated from field: cerbos.response.v1.CheckResourcesResponse response = 1;
     */
    response: CheckResourcesResponseValid$1;

    /**
     * @generated from field: cerbos.audit.v1.AuditTrail audit_trail = 2;
     */
    auditTrail: AuditTrailValid;
  };

/**
 * Describes the message cerbos.cloud.epdp.v2.CheckResourcesResponse.
 * Use `create(CheckResourcesResponseSchema)` to create a new message.
 */
export const CheckResourcesResponseSchema: GenMessage<
  CheckResourcesResponse,
  {
    jsonType: CheckResourcesResponseJson;
    validType: CheckResourcesResponseValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_epdp_v2_epdp, 3);

/**
 * @generated from message cerbos.cloud.epdp.v2.PlanResourcesResponse
 */
export type PlanResourcesResponse =
  Message<"cerbos.cloud.epdp.v2.PlanResourcesResponse"> & {
    /**
     * @generated from field: cerbos.response.v1.PlanResourcesResponse response = 1;
     */
    response?: PlanResourcesResponse$1;

    /**
     * @generated from field: cerbos.audit.v1.AuditTrail audit_trail = 2;
     */
    auditTrail?: AuditTrail;
  };

/**
 * @generated from message cerbos.cloud.epdp.v2.PlanResourcesResponse
 */
export type PlanResourcesResponseJson = {
  /**
   * @generated from field: cerbos.response.v1.PlanResourcesResponse response = 1;
   */
  response?: PlanResourcesResponseJson$1;

  /**
   * @generated from field: cerbos.audit.v1.AuditTrail audit_trail = 2;
   */
  auditTrail?: AuditTrailJson;
};

/**
 * @generated from message cerbos.cloud.epdp.v2.PlanResourcesResponse
 */
export type PlanResourcesResponseValid =
  Message<"cerbos.cloud.epdp.v2.PlanResourcesResponse"> & {
    /**
     * @generated from field: cerbos.response.v1.PlanResourcesResponse response = 1;
     */
    response: PlanResourcesResponseValid$1;

    /**
     * @generated from field: cerbos.audit.v1.AuditTrail audit_trail = 2;
     */
    auditTrail: AuditTrailValid;
  };

/**
 * Describes the message cerbos.cloud.epdp.v2.PlanResourcesResponse.
 * Use `create(PlanResourcesResponseSchema)` to create a new message.
 */
export const PlanResourcesResponseSchema: GenMessage<
  PlanResourcesResponse,
  { jsonType: PlanResourcesResponseJson; validType: PlanResourcesResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_epdp_v2_epdp, 4);

/**
 * @generated from message cerbos.cloud.epdp.v2.Bundle
 */
export type Bundle = Message<"cerbos.cloud.epdp.v2.Bundle"> & {
  /**
   * @generated from field: cerbos.cloud.epdp.v2.Bundle.Metadata metadata = 1;
   */
  metadata?: Bundle_Metadata;

  /**
   * @generated from field: bytes contents = 2;
   */
  contents: Uint8Array;
};

/**
 * @generated from message cerbos.cloud.epdp.v2.Bundle
 */
export type BundleJson = {
  /**
   * @generated from field: cerbos.cloud.epdp.v2.Bundle.Metadata metadata = 1;
   */
  metadata?: Bundle_MetadataJson;

  /**
   * @generated from field: bytes contents = 2;
   */
  contents?: string;
};

/**
 * @generated from message cerbos.cloud.epdp.v2.Bundle
 */
export type BundleValid = Message<"cerbos.cloud.epdp.v2.Bundle"> & {
  /**
   * @generated from field: cerbos.cloud.epdp.v2.Bundle.Metadata metadata = 1;
   */
  metadata: Bundle_MetadataValid;

  /**
   * @generated from field: bytes contents = 2;
   */
  contents: Uint8Array;
};

/**
 * Describes the message cerbos.cloud.epdp.v2.Bundle.
 * Use `create(BundleSchema)` to create a new message.
 */
export const BundleSchema: GenMessage<
  Bundle,
  { jsonType: BundleJson; validType: BundleValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_epdp_v2_epdp, 5);

/**
 * @generated from message cerbos.cloud.epdp.v2.Bundle.Metadata
 */
export type Bundle_Metadata =
  Message<"cerbos.cloud.epdp.v2.Bundle.Metadata"> & {
    /**
     * @generated from field: string bundle_id = 1;
     */
    bundleId: string;

    /**
     * @generated from field: int64 rule_revision = 2;
     */
    ruleRevision: bigint;
  };

/**
 * @generated from message cerbos.cloud.epdp.v2.Bundle.Metadata
 */
export type Bundle_MetadataJson = {
  /**
   * @generated from field: string bundle_id = 1;
   */
  bundleId?: string;

  /**
   * @generated from field: int64 rule_revision = 2;
   */
  ruleRevision?: string;
};

export type Bundle_MetadataValid = Bundle_Metadata;

/**
 * Describes the message cerbos.cloud.epdp.v2.Bundle.Metadata.
 * Use `create(Bundle_MetadataSchema)` to create a new message.
 */
export const Bundle_MetadataSchema: GenMessage<
  Bundle_Metadata,
  { jsonType: Bundle_MetadataJson; validType: Bundle_MetadataValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_epdp_v2_epdp, 5, 0);

/**
 * @generated from message cerbos.cloud.epdp.v2.GetBundleRequest
 */
export type GetBundleRequest =
  Message<"cerbos.cloud.epdp.v2.GetBundleRequest"> & {
    /**
     * @generated from field: string rule_id = 1;
     */
    ruleId: string;

    /**
     * @generated from field: repeated string scopes = 2;
     */
    scopes: string[];

    /**
     * @generated from field: optional cerbos.cloud.epdp.v2.Bundle.Metadata if_modified_since = 3;
     */
    ifModifiedSince?: Bundle_Metadata;
  };

/**
 * @generated from message cerbos.cloud.epdp.v2.GetBundleRequest
 */
export type GetBundleRequestJson = {
  /**
   * @generated from field: string rule_id = 1;
   */
  ruleId?: string;

  /**
   * @generated from field: repeated string scopes = 2;
   */
  scopes?: string[];

  /**
   * @generated from field: optional cerbos.cloud.epdp.v2.Bundle.Metadata if_modified_since = 3;
   */
  ifModifiedSince?: Bundle_MetadataJson;
};

export type GetBundleRequestValid = GetBundleRequest;

/**
 * Describes the message cerbos.cloud.epdp.v2.GetBundleRequest.
 * Use `create(GetBundleRequestSchema)` to create a new message.
 */
export const GetBundleRequestSchema: GenMessage<
  GetBundleRequest,
  { jsonType: GetBundleRequestJson; validType: GetBundleRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_epdp_v2_epdp, 6);

/**
 * @generated from message cerbos.cloud.epdp.v2.GetBundleResponse
 */
export type GetBundleResponse =
  Message<"cerbos.cloud.epdp.v2.GetBundleResponse"> & {
    /**
     * @generated from oneof cerbos.cloud.epdp.v2.GetBundleResponse.result
     */
    result:
      | {
          /**
           * @generated from field: cerbos.cloud.epdp.v2.Bundle bundle = 1;
           */
          value: Bundle;
          case: "bundle";
        }
      | {
          /**
           * @generated from field: google.protobuf.Empty not_modified = 2;
           */
          value: Empty;
          case: "notModified";
        }
      | { case: undefined; value?: undefined };
  };

/**
 * @generated from message cerbos.cloud.epdp.v2.GetBundleResponse
 */
export type GetBundleResponseJson = {
  /**
   * @generated from field: cerbos.cloud.epdp.v2.Bundle bundle = 1;
   */
  bundle?: BundleJson;

  /**
   * @generated from field: google.protobuf.Empty not_modified = 2;
   */
  notModified?: EmptyJson;
};

/**
 * @generated from message cerbos.cloud.epdp.v2.GetBundleResponse
 */
export type GetBundleResponseValid =
  Message<"cerbos.cloud.epdp.v2.GetBundleResponse"> & {
    /**
     * @generated from oneof cerbos.cloud.epdp.v2.GetBundleResponse.result
     */
    result:
      | {
          /**
           * @generated from field: cerbos.cloud.epdp.v2.Bundle bundle = 1;
           */
          value: BundleValid;
          case: "bundle";
        }
      | {
          /**
           * @generated from field: google.protobuf.Empty not_modified = 2;
           */
          value: Empty;
          case: "notModified";
        }
      | { case: undefined; value?: undefined };
  };

/**
 * Describes the message cerbos.cloud.epdp.v2.GetBundleResponse.
 * Use `create(GetBundleResponseSchema)` to create a new message.
 */
export const GetBundleResponseSchema: GenMessage<
  GetBundleResponse,
  { jsonType: GetBundleResponseJson; validType: GetBundleResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_epdp_v2_epdp, 7);

/**
 * @generated from service cerbos.cloud.epdp.v2.BundleService
 */
export const BundleService: GenService<{
  /**
   * @generated from rpc cerbos.cloud.epdp.v2.BundleService.GetBundle
   */
  getBundle: {
    methodKind: "unary";
    input: typeof GetBundleRequestSchema;
    output: typeof GetBundleResponseSchema;
  };
}> = /*@__PURE__*/ serviceDesc(file_cerbos_cloud_epdp_v2_epdp, 0);
