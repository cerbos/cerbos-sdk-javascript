// Copyright 2021-2025 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

// @generated from file cerbos/cloud/epdp/v2/epdp.proto (package cerbos.cloud.epdp.v2, syntax proto3)
/* eslint-disable */

import type {
  GenEnum,
  GenFile,
  GenMessage,
} from "@bufbuild/protobuf/codegenv2";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_buf_validate_validate } from "../../../../buf/validate/validate_pb";
import type { Timestamp, Value } from "@bufbuild/protobuf/wkt";
import {
  file_google_protobuf_struct,
  file_google_protobuf_timestamp,
} from "@bufbuild/protobuf/wkt";
import type { Code } from "../../../../google/rpc/code_pb";
import { file_google_rpc_code } from "../../../../google/rpc/code_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cerbos/cloud/epdp/v2/epdp.proto.
 */
export const file_cerbos_cloud_epdp_v2_epdp: GenFile =
  /*@__PURE__*/
  fileDesc(
    "Ch9jZXJib3MvY2xvdWQvZXBkcC92Mi9lcGRwLnByb3RvEhRjZXJib3MuY2xvdWQuZXBkcC52MiKTBAoGQ29uZmlnEjkKCWV2YWx1YXRvchgBIAEoCzImLmNlcmJvcy5jbG91ZC5lcGRwLnYyLkNvbmZpZy5FdmFsdWF0b3ISMwoGc2NoZW1hGAIgASgLMiMuY2VyYm9zLmNsb3VkLmVwZHAudjIuQ29uZmlnLlNjaGVtYRrXAQoJRXZhbHVhdG9yEkQKB2dsb2JhbHMYASADKAsyMy5jZXJib3MuY2xvdWQuZXBkcC52Mi5Db25maWcuRXZhbHVhdG9yLkdsb2JhbHNFbnRyeRIeChZkZWZhdWx0X3BvbGljeV92ZXJzaW9uGAIgASgJEhwKFGxlbmllbnRfc2NvcGVfc2VhcmNoGAMgASgIGkYKDEdsb2JhbHNFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBGr4BCgZTY2hlbWESRAoLZW5mb3JjZW1lbnQYASABKA4yLy5jZXJib3MuY2xvdWQuZXBkcC52Mi5Db25maWcuU2NoZW1hLkVuZm9yY2VtZW50Im4KC0VuZm9yY2VtZW50EhsKF0VORk9SQ0VNRU5UX1VOU1BFQ0lGSUVEEAASFAoQRU5GT1JDRU1FTlRfTk9ORRABEhQKEEVORk9SQ0VNRU5UX1dBUk4QAhIWChJFTkZPUkNFTUVOVF9SRUpFQ1QQAyJECgVFcnJvchIqCgRjb2RlGAEgASgOMhAuZ29vZ2xlLnJwYy5Db2RlQgq6SAeCAQQQASAAEg8KB21lc3NhZ2UYAiABKAkiqAEKCE1ldGFkYXRhEh8KDmNlcmJvc192ZXJzaW9uGAEgASgJQge6SARyAhABEiQKEmNlcmJvc19jb21taXRfaGFzaBgCIAEoCUIIukgFcgOYASgSHwoNd2FzbV9jaGVja3N1bRgDIAEoCUIIukgFcgOYAUASNAoIYnVpbHRfYXQYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQga6SAPIAQFCeAocZGV2LmNlcmJvcy5hcGkuY2xvdWQudjIuZXBkcFo9Z2l0aHViLmNvbS9jZXJib3MvY2xvdWQtYXBpL2dlbnBiL2NlcmJvcy9jbG91ZC9lcGRwL3YyO2VwZHB2MqoCGENlcmJvcy5BcGkuQ2xvdWQuVjIuRXBkcGIGcHJvdG8z",
    [
      file_buf_validate_validate,
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

export type ConfigValid = Config;

/**
 * Describes the message cerbos.cloud.epdp.v2.Config.
 * Use `create(ConfigSchema)` to create a new message.
 */
export const ConfigSchema: GenMessage<Config, { validType: ConfigValid }> =
  /*@__PURE__*/
  messageDesc(file_cerbos_cloud_epdp_v2_epdp, 0);

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
  };

export type Config_EvaluatorValid = Config_Evaluator;

/**
 * Describes the message cerbos.cloud.epdp.v2.Config.Evaluator.
 * Use `create(Config_EvaluatorSchema)` to create a new message.
 */
export const Config_EvaluatorSchema: GenMessage<
  Config_Evaluator,
  { validType: Config_EvaluatorValid }
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

export type Config_SchemaValid = Config_Schema;

/**
 * Describes the message cerbos.cloud.epdp.v2.Config.Schema.
 * Use `create(Config_SchemaSchema)` to create a new message.
 */
export const Config_SchemaSchema: GenMessage<
  Config_Schema,
  { validType: Config_SchemaValid }
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
 * Describes the enum cerbos.cloud.epdp.v2.Config.Schema.Enforcement.
 */
export const Config_Schema_EnforcementSchema: GenEnum<Config_Schema_Enforcement> =
  /*@__PURE__*/
  enumDesc(file_cerbos_cloud_epdp_v2_epdp, 0, 1, 0);

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

export type ErrorValid = Error;

/**
 * Describes the message cerbos.cloud.epdp.v2.Error.
 * Use `create(ErrorSchema)` to create a new message.
 */
export const ErrorSchema: GenMessage<Error, { validType: ErrorValid }> =
  /*@__PURE__*/
  messageDesc(file_cerbos_cloud_epdp_v2_epdp, 1);

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
  { validType: MetadataValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_epdp_v2_epdp, 2);
