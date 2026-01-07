// Copyright 2021-2025 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

// @generated from file cerbos/cloud/epdp/v1/epdp.proto (package cerbos.cloud.epdp.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import type {
  SourceAttributes,
  SourceAttributesJson,
} from "../../../policy/v1/policy_pb.js";
import { file_cerbos_policy_v1_policy } from "../../../policy/v1/policy_pb.js";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cerbos/cloud/epdp/v1/epdp.proto.
 */
export const file_cerbos_cloud_epdp_v1_epdp: GenFile =
  /*@__PURE__*/
  fileDesc(
    "Ch9jZXJib3MvY2xvdWQvZXBkcC92MS9lcGRwLnByb3RvEhRjZXJib3MuY2xvdWQuZXBkcC52MSKNAgoITWV0YWRhdGESDwoHdmVyc2lvbhgBIAEoCRIUCghwb2xpY2llcxgCIAMoCUICGAESFwoPYnVpbGRfdGltZXN0YW1wGAMgASgDEhMKC2NvbW1pdF9oYXNoGAQgASgJEk8KEXNvdXJjZV9hdHRyaWJ1dGVzGAUgAygLMjQuY2VyYm9zLmNsb3VkLmVwZHAudjEuTWV0YWRhdGEuU291cmNlQXR0cmlidXRlc0VudHJ5GlsKFVNvdXJjZUF0dHJpYnV0ZXNFbnRyeRILCgNrZXkYASABKAkSMQoFdmFsdWUYAiABKAsyIi5jZXJib3MucG9saWN5LnYxLlNvdXJjZUF0dHJpYnV0ZXM6AjgBQngKHGRldi5jZXJib3MuYXBpLmNsb3VkLnYxLmVwZHBaPWdpdGh1Yi5jb20vY2VyYm9zL2Nsb3VkLWFwaS9nZW5wYi9jZXJib3MvY2xvdWQvZXBkcC92MTtlcGRwdjGqAhhDZXJib3MuQXBpLkNsb3VkLlYxLkVwZHBiBnByb3RvMw",
    [file_cerbos_policy_v1_policy],
  );

/**
 * @generated from message cerbos.cloud.epdp.v1.Metadata
 */
export type Metadata = Message<"cerbos.cloud.epdp.v1.Metadata"> & {
  /**
   * @generated from field: string version = 1;
   */
  version: string;

  /**
   * @generated from field: repeated string policies = 2 [deprecated = true];
   * @deprecated
   */
  policies: string[];

  /**
   * @generated from field: int64 build_timestamp = 3;
   */
  buildTimestamp: bigint;

  /**
   * @generated from field: string commit_hash = 4;
   */
  commitHash: string;

  /**
   * @generated from field: map<string, cerbos.policy.v1.SourceAttributes> source_attributes = 5;
   */
  sourceAttributes: { [key: string]: SourceAttributes };
};

/**
 * @generated from message cerbos.cloud.epdp.v1.Metadata
 */
export type MetadataJson = {
  /**
   * @generated from field: string version = 1;
   */
  version?: string;

  /**
   * @generated from field: repeated string policies = 2 [deprecated = true];
   * @deprecated
   */
  policies?: string[];

  /**
   * @generated from field: int64 build_timestamp = 3;
   */
  buildTimestamp?: string;

  /**
   * @generated from field: string commit_hash = 4;
   */
  commitHash?: string;

  /**
   * @generated from field: map<string, cerbos.policy.v1.SourceAttributes> source_attributes = 5;
   */
  sourceAttributes?: { [key: string]: SourceAttributesJson };
};

export type MetadataValid = Metadata;

/**
 * Describes the message cerbos.cloud.epdp.v1.Metadata.
 * Use `create(MetadataSchema)` to create a new message.
 */
export const MetadataSchema: GenMessage<
  Metadata,
  { jsonType: MetadataJson; validType: MetadataValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_epdp_v1_epdp, 0);
