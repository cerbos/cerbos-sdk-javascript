// Copyright 2021-2025 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

// @generated from file cerbos/cloud/store/v1/store.proto (package cerbos.cloud.store.v1, syntax proto3)
/* eslint-disable */

import type {
  GenFile,
  GenMessage,
  GenService,
} from "@bufbuild/protobuf/codegenv2";
import {
  fileDesc,
  messageDesc,
  serviceDesc,
} from "@bufbuild/protobuf/codegenv2";
import { file_buf_validate_validate } from "../../../../buf/validate/validate_pb";
import { file_google_api_visibility } from "../../../../google/api/visibility_pb";
import type { Timestamp, Value } from "@bufbuild/protobuf/wkt";
import {
  file_google_protobuf_struct,
  file_google_protobuf_timestamp,
} from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cerbos/cloud/store/v1/store.proto.
 */
export const file_cerbos_cloud_store_v1_store: GenFile =
  /*@__PURE__*/
  fileDesc(
    "CiFjZXJib3MvY2xvdWQvc3RvcmUvdjEvc3RvcmUucHJvdG8SFWNlcmJvcy5jbG91ZC5zdG9yZS52MSKmAQoLU3RyaW5nTWF0Y2gSEAoGZXF1YWxzGAEgASgJSAASEgoIY29udGFpbnMYAiABKAlIABI3CgJpbhgDIAEoCzIpLmNlcmJvcy5jbG91ZC5zdG9yZS52MS5TdHJpbmdNYXRjaC5Jbkxpc3RIABooCgZJbkxpc3QSHgoGdmFsdWVzGAEgAygJQg66SAuSAQgQCiIEcgIQAUIOCgVtYXRjaBIFukgCCAEiTAoKRmlsZUZpbHRlchI1CgRwYXRoGAEgASgLMiIuY2VyYm9zLmNsb3VkLnN0b3JlLnYxLlN0cmluZ01hdGNoSACIAQFCBwoFX3BhdGgicQoQTGlzdEZpbGVzUmVxdWVzdBIaCghzdG9yZV9pZBgBIAEoCUIIukgFcgOYAQwSNgoGZmlsdGVyGAIgASgLMiEuY2VyYm9zLmNsb3VkLnN0b3JlLnYxLkZpbGVGaWx0ZXJIAIgBAUIJCgdfZmlsdGVyIjkKEUxpc3RGaWxlc1Jlc3BvbnNlEhUKDXN0b3JlX3ZlcnNpb24YASABKAMSDQoFZmlsZXMYAiADKAkiUAoPR2V0RmlsZXNSZXF1ZXN0EhoKCHN0b3JlX2lkGAEgASgJQgi6SAVyA5gBDBIhCgVmaWxlcxgCIAMoCUISukgPkgEMCAEQChgBIgRyAhABIkAKBEZpbGUSGAoEcGF0aBgBIAEoCUIKukgHcgUQARiACBIeCghjb250ZW50cxgCIAEoDEIMukgJegcQARiAgMACIlUKEEdldEZpbGVzUmVzcG9uc2USFQoNc3RvcmVfdmVyc2lvbhgBIAEoAxIqCgVmaWxlcxgCIAMoCzIbLmNlcmJvcy5jbG91ZC5zdG9yZS52MS5GaWxlIpoGCg1DaGFuZ2VEZXRhaWxzEhMKC2Rlc2NyaXB0aW9uGAEgASgJEj8KCHVwbG9hZGVyGAIgASgLMi0uY2VyYm9zLmNsb3VkLnN0b3JlLnYxLkNoYW5nZURldGFpbHMuVXBsb2FkZXISNwoDZ2l0GAMgASgLMiguY2VyYm9zLmNsb3VkLnN0b3JlLnYxLkNoYW5nZURldGFpbHMuR2l0SAASQQoIaW50ZXJuYWwYBCABKAsyLS5jZXJib3MuY2xvdWQuc3RvcmUudjEuQ2hhbmdlRGV0YWlscy5JbnRlcm5hbEgAGsQBCgNHaXQSDAoEcmVwbxgBIAEoCRILCgNyZWYYAiABKAkSDAoEaGFzaBgDIAEoCRIPCgdtZXNzYWdlGAQgASgJEhEKCWNvbW1pdHRlchgFIAEoCRIvCgtjb21taXRfZGF0ZRgGIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASDgoGYXV0aG9yGAcgASgJEi8KC2F1dGhvcl9kYXRlGAggASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBqyAQoISW50ZXJuYWwSDgoGc291cmNlGAEgASgJEk0KCG1ldGFkYXRhGAIgAygLMjsuY2VyYm9zLmNsb3VkLnN0b3JlLnYxLkNoYW5nZURldGFpbHMuSW50ZXJuYWwuTWV0YWRhdGFFbnRyeRpHCg1NZXRhZGF0YUVudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAEasAEKCFVwbG9hZGVyEgwKBG5hbWUYASABKAkSTQoIbWV0YWRhdGEYAiADKAsyOy5jZXJib3MuY2xvdWQuc3RvcmUudjEuQ2hhbmdlRGV0YWlscy5VcGxvYWRlci5NZXRhZGF0YUVudHJ5GkcKDU1ldGFkYXRhRW50cnkSCwoDa2V5GAEgASgJEiUKBXZhbHVlGAIgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlOgI4AUIICgZvcmlnaW4iXQoGRmlsZU9wEjQKDWFkZF9vcl91cGRhdGUYASABKAsyGy5jZXJib3MuY2xvdWQuc3RvcmUudjEuRmlsZUgAEhAKBmRlbGV0ZRgCIAEoCUgAQgsKAm9wEgW6SAIIASLYAgoSTW9kaWZ5RmlsZXNSZXF1ZXN0EhoKCHN0b3JlX2lkGAEgASgJQgi6SAVyA5gBDBJLCgljb25kaXRpb24YAiABKAsyMy5jZXJib3MuY2xvdWQuc3RvcmUudjEuTW9kaWZ5RmlsZXNSZXF1ZXN0LkNvbmRpdGlvbkgAiAEBEj0KCm9wZXJhdGlvbnMYAyADKAsyHS5jZXJib3MuY2xvdWQuc3RvcmUudjEuRmlsZU9wQgq6SAeSAQQIARAZEkEKDmNoYW5nZV9kZXRhaWxzGAQgASgLMiQuY2VyYm9zLmNsb3VkLnN0b3JlLnYxLkNoYW5nZURldGFpbHNIAYgBARo2CglDb25kaXRpb24SKQoYc3RvcmVfdmVyc2lvbl9tdXN0X2VxdWFsGAEgASgDQge6SAQiAigAQgwKCl9jb25kaXRpb25CEQoPX2NoYW5nZV9kZXRhaWxzIjAKE01vZGlmeUZpbGVzUmVzcG9uc2USGQoRbmV3X3N0b3JlX3ZlcnNpb24YASABKAMiqwQKE1JlcGxhY2VGaWxlc1JlcXVlc3QSGgoIc3RvcmVfaWQYASABKAlCCLpIBXIDmAEMEkwKCWNvbmRpdGlvbhgCIAEoCzI0LmNlcmJvcy5jbG91ZC5zdG9yZS52MS5SZXBsYWNlRmlsZXNSZXF1ZXN0LkNvbmRpdGlvbkgBiAEBEicKD3ppcHBlZF9jb250ZW50cxgDIAEoDEIMukgJegcQFhiAgMAHSAASQQoFZmlsZXMYBSABKAsyMC5jZXJib3MuY2xvdWQuc3RvcmUudjEuUmVwbGFjZUZpbGVzUmVxdWVzdC5GaWxlc0gAEkEKDmNoYW5nZV9kZXRhaWxzGAQgASgLMiQuY2VyYm9zLmNsb3VkLnN0b3JlLnYxLkNoYW5nZURldGFpbHNIAogBARo2CglDb25kaXRpb24SKQoYc3RvcmVfdmVyc2lvbl9tdXN0X2VxdWFsGAEgASgDQge6SAQiAigAGo4BCgVGaWxlcxKEAQoFZmlsZXMYASADKAsyGy5jZXJib3MuY2xvdWQuc3RvcmUudjEuRmlsZUJYukhVugFNChJmaWxlcy51bmlxdWVfcGF0aHMSGUZpbGUgcGF0aHMgbXVzdCBiZSB1bmlxdWUaHHRoaXMubWFwKGYsIGYucGF0aCkudW5pcXVlKCmSAQIIAUIRCghjb250ZW50cxIFukgCCAFCDAoKX2NvbmRpdGlvbkIRCg9fY2hhbmdlX2RldGFpbHMiSAoUUmVwbGFjZUZpbGVzUmVzcG9uc2USGQoRbmV3X3N0b3JlX3ZlcnNpb24YASABKAMSFQoNaWdub3JlZF9maWxlcxgCIAMoCTLAAwoSQ2VyYm9zU3RvcmVTZXJ2aWNlEmMKCUxpc3RGaWxlcxInLmNlcmJvcy5jbG91ZC5zdG9yZS52MS5MaXN0RmlsZXNSZXF1ZXN0GiguY2VyYm9zLmNsb3VkLnN0b3JlLnYxLkxpc3RGaWxlc1Jlc3BvbnNlIgOQAgESYAoIR2V0RmlsZXMSJi5jZXJib3MuY2xvdWQuc3RvcmUudjEuR2V0RmlsZXNSZXF1ZXN0GicuY2VyYm9zLmNsb3VkLnN0b3JlLnYxLkdldEZpbGVzUmVzcG9uc2UiA5ACARJkCgtNb2RpZnlGaWxlcxIpLmNlcmJvcy5jbG91ZC5zdG9yZS52MS5Nb2RpZnlGaWxlc1JlcXVlc3QaKi5jZXJib3MuY2xvdWQuc3RvcmUudjEuTW9kaWZ5RmlsZXNSZXNwb25zZRJnCgxSZXBsYWNlRmlsZXMSKi5jZXJib3MuY2xvdWQuc3RvcmUudjEuUmVwbGFjZUZpbGVzUmVxdWVzdBorLmNlcmJvcy5jbG91ZC5zdG9yZS52MS5SZXBsYWNlRmlsZXNSZXNwb25zZRoU+tLkkwIOEgxFWFBFUklNRU5UQUxCfAodZGV2LmNlcmJvcy5hcGkuY2xvdWQudjEuc3RvcmVaP2dpdGh1Yi5jb20vY2VyYm9zL2Nsb3VkLWFwaS9nZW5wYi9jZXJib3MvY2xvdWQvc3RvcmUvdjE7c3RvcmV2MaoCGUNlcmJvcy5BcGkuQ2xvdWQuVjEuU3RvcmViBnByb3RvMw",
    [
      file_buf_validate_validate,
      file_google_api_visibility,
      file_google_protobuf_struct,
      file_google_protobuf_timestamp,
    ],
  );

/**
 * @generated from message cerbos.cloud.store.v1.StringMatch
 */
export type StringMatch = Message<"cerbos.cloud.store.v1.StringMatch"> & {
  /**
   * @generated from oneof cerbos.cloud.store.v1.StringMatch.match
   */
  match:
    | {
        /**
         * @generated from field: string equals = 1;
         */
        value: string;
        case: "equals";
      }
    | {
        /**
         * @generated from field: string contains = 2;
         */
        value: string;
        case: "contains";
      }
    | {
        /**
         * @generated from field: cerbos.cloud.store.v1.StringMatch.InList in = 3;
         */
        value: StringMatch_InList;
        case: "in";
      }
    | { case: undefined; value?: undefined };
};

export type StringMatchValid = StringMatch;

/**
 * Describes the message cerbos.cloud.store.v1.StringMatch.
 * Use `create(StringMatchSchema)` to create a new message.
 */
export const StringMatchSchema: GenMessage<
  StringMatch,
  { validType: StringMatchValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 0);

/**
 * @generated from message cerbos.cloud.store.v1.StringMatch.InList
 */
export type StringMatch_InList =
  Message<"cerbos.cloud.store.v1.StringMatch.InList"> & {
    /**
     * @generated from field: repeated string values = 1;
     */
    values: string[];
  };

export type StringMatch_InListValid = StringMatch_InList;

/**
 * Describes the message cerbos.cloud.store.v1.StringMatch.InList.
 * Use `create(StringMatch_InListSchema)` to create a new message.
 */
export const StringMatch_InListSchema: GenMessage<
  StringMatch_InList,
  { validType: StringMatch_InListValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 0, 0);

/**
 * @generated from message cerbos.cloud.store.v1.FileFilter
 */
export type FileFilter = Message<"cerbos.cloud.store.v1.FileFilter"> & {
  /**
   * @generated from field: optional cerbos.cloud.store.v1.StringMatch path = 1;
   */
  path?: StringMatch;
};

export type FileFilterValid = FileFilter;

/**
 * Describes the message cerbos.cloud.store.v1.FileFilter.
 * Use `create(FileFilterSchema)` to create a new message.
 */
export const FileFilterSchema: GenMessage<
  FileFilter,
  { validType: FileFilterValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 1);

/**
 * @generated from message cerbos.cloud.store.v1.ListFilesRequest
 */
export type ListFilesRequest =
  Message<"cerbos.cloud.store.v1.ListFilesRequest"> & {
    /**
     * @generated from field: string store_id = 1;
     */
    storeId: string;

    /**
     * @generated from field: optional cerbos.cloud.store.v1.FileFilter filter = 2;
     */
    filter?: FileFilter;
  };

export type ListFilesRequestValid = ListFilesRequest;

/**
 * Describes the message cerbos.cloud.store.v1.ListFilesRequest.
 * Use `create(ListFilesRequestSchema)` to create a new message.
 */
export const ListFilesRequestSchema: GenMessage<
  ListFilesRequest,
  { validType: ListFilesRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 2);

/**
 * @generated from message cerbos.cloud.store.v1.ListFilesResponse
 */
export type ListFilesResponse =
  Message<"cerbos.cloud.store.v1.ListFilesResponse"> & {
    /**
     * @generated from field: int64 store_version = 1;
     */
    storeVersion: bigint;

    /**
     * @generated from field: repeated string files = 2;
     */
    files: string[];
  };

export type ListFilesResponseValid = ListFilesResponse;

/**
 * Describes the message cerbos.cloud.store.v1.ListFilesResponse.
 * Use `create(ListFilesResponseSchema)` to create a new message.
 */
export const ListFilesResponseSchema: GenMessage<
  ListFilesResponse,
  { validType: ListFilesResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 3);

/**
 * @generated from message cerbos.cloud.store.v1.GetFilesRequest
 */
export type GetFilesRequest =
  Message<"cerbos.cloud.store.v1.GetFilesRequest"> & {
    /**
     * @generated from field: string store_id = 1;
     */
    storeId: string;

    /**
     * @generated from field: repeated string files = 2;
     */
    files: string[];
  };

export type GetFilesRequestValid = GetFilesRequest;

/**
 * Describes the message cerbos.cloud.store.v1.GetFilesRequest.
 * Use `create(GetFilesRequestSchema)` to create a new message.
 */
export const GetFilesRequestSchema: GenMessage<
  GetFilesRequest,
  { validType: GetFilesRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 4);

/**
 * @generated from message cerbos.cloud.store.v1.File
 */
export type File = Message<"cerbos.cloud.store.v1.File"> & {
  /**
   * @generated from field: string path = 1;
   */
  path: string;

  /**
   * @generated from field: bytes contents = 2;
   */
  contents: Uint8Array;
};

export type FileValid = File;

/**
 * Describes the message cerbos.cloud.store.v1.File.
 * Use `create(FileSchema)` to create a new message.
 */
export const FileSchema: GenMessage<File, { validType: FileValid }> =
  /*@__PURE__*/
  messageDesc(file_cerbos_cloud_store_v1_store, 5);

/**
 * @generated from message cerbos.cloud.store.v1.GetFilesResponse
 */
export type GetFilesResponse =
  Message<"cerbos.cloud.store.v1.GetFilesResponse"> & {
    /**
     * @generated from field: int64 store_version = 1;
     */
    storeVersion: bigint;

    /**
     * @generated from field: repeated cerbos.cloud.store.v1.File files = 2;
     */
    files: File[];
  };

export type GetFilesResponseValid = GetFilesResponse;

/**
 * Describes the message cerbos.cloud.store.v1.GetFilesResponse.
 * Use `create(GetFilesResponseSchema)` to create a new message.
 */
export const GetFilesResponseSchema: GenMessage<
  GetFilesResponse,
  { validType: GetFilesResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 6);

/**
 * @generated from message cerbos.cloud.store.v1.ChangeDetails
 */
export type ChangeDetails = Message<"cerbos.cloud.store.v1.ChangeDetails"> & {
  /**
   * @generated from field: string description = 1;
   */
  description: string;

  /**
   * @generated from field: cerbos.cloud.store.v1.ChangeDetails.Uploader uploader = 2;
   */
  uploader?: ChangeDetails_Uploader;

  /**
   * @generated from oneof cerbos.cloud.store.v1.ChangeDetails.origin
   */
  origin:
    | {
        /**
         * @generated from field: cerbos.cloud.store.v1.ChangeDetails.Git git = 3;
         */
        value: ChangeDetails_Git;
        case: "git";
      }
    | {
        /**
         * @generated from field: cerbos.cloud.store.v1.ChangeDetails.Internal internal = 4;
         */
        value: ChangeDetails_Internal;
        case: "internal";
      }
    | { case: undefined; value?: undefined };
};

export type ChangeDetailsValid = ChangeDetails;

/**
 * Describes the message cerbos.cloud.store.v1.ChangeDetails.
 * Use `create(ChangeDetailsSchema)` to create a new message.
 */
export const ChangeDetailsSchema: GenMessage<
  ChangeDetails,
  { validType: ChangeDetailsValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 7);

/**
 * @generated from message cerbos.cloud.store.v1.ChangeDetails.Git
 */
export type ChangeDetails_Git =
  Message<"cerbos.cloud.store.v1.ChangeDetails.Git"> & {
    /**
     * @generated from field: string repo = 1;
     */
    repo: string;

    /**
     * @generated from field: string ref = 2;
     */
    ref: string;

    /**
     * @generated from field: string hash = 3;
     */
    hash: string;

    /**
     * @generated from field: string message = 4;
     */
    message: string;

    /**
     * @generated from field: string committer = 5;
     */
    committer: string;

    /**
     * @generated from field: google.protobuf.Timestamp commit_date = 6;
     */
    commitDate?: Timestamp;

    /**
     * @generated from field: string author = 7;
     */
    author: string;

    /**
     * @generated from field: google.protobuf.Timestamp author_date = 8;
     */
    authorDate?: Timestamp;
  };

export type ChangeDetails_GitValid = ChangeDetails_Git;

/**
 * Describes the message cerbos.cloud.store.v1.ChangeDetails.Git.
 * Use `create(ChangeDetails_GitSchema)` to create a new message.
 */
export const ChangeDetails_GitSchema: GenMessage<
  ChangeDetails_Git,
  { validType: ChangeDetails_GitValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 7, 0);

/**
 * @generated from message cerbos.cloud.store.v1.ChangeDetails.Internal
 */
export type ChangeDetails_Internal =
  Message<"cerbos.cloud.store.v1.ChangeDetails.Internal"> & {
    /**
     * @generated from field: string source = 1;
     */
    source: string;

    /**
     * @generated from field: map<string, google.protobuf.Value> metadata = 2;
     */
    metadata: { [key: string]: Value };
  };

export type ChangeDetails_InternalValid = ChangeDetails_Internal;

/**
 * Describes the message cerbos.cloud.store.v1.ChangeDetails.Internal.
 * Use `create(ChangeDetails_InternalSchema)` to create a new message.
 */
export const ChangeDetails_InternalSchema: GenMessage<
  ChangeDetails_Internal,
  { validType: ChangeDetails_InternalValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 7, 1);

/**
 * @generated from message cerbos.cloud.store.v1.ChangeDetails.Uploader
 */
export type ChangeDetails_Uploader =
  Message<"cerbos.cloud.store.v1.ChangeDetails.Uploader"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;

    /**
     * @generated from field: map<string, google.protobuf.Value> metadata = 2;
     */
    metadata: { [key: string]: Value };
  };

export type ChangeDetails_UploaderValid = ChangeDetails_Uploader;

/**
 * Describes the message cerbos.cloud.store.v1.ChangeDetails.Uploader.
 * Use `create(ChangeDetails_UploaderSchema)` to create a new message.
 */
export const ChangeDetails_UploaderSchema: GenMessage<
  ChangeDetails_Uploader,
  { validType: ChangeDetails_UploaderValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 7, 2);

/**
 * @generated from message cerbos.cloud.store.v1.FileOp
 */
export type FileOp = Message<"cerbos.cloud.store.v1.FileOp"> & {
  /**
   * @generated from oneof cerbos.cloud.store.v1.FileOp.op
   */
  op:
    | {
        /**
         * @generated from field: cerbos.cloud.store.v1.File add_or_update = 1;
         */
        value: File;
        case: "addOrUpdate";
      }
    | {
        /**
         * @generated from field: string delete = 2;
         */
        value: string;
        case: "delete";
      }
    | { case: undefined; value?: undefined };
};

export type FileOpValid = FileOp;

/**
 * Describes the message cerbos.cloud.store.v1.FileOp.
 * Use `create(FileOpSchema)` to create a new message.
 */
export const FileOpSchema: GenMessage<FileOp, { validType: FileOpValid }> =
  /*@__PURE__*/
  messageDesc(file_cerbos_cloud_store_v1_store, 8);

/**
 * @generated from message cerbos.cloud.store.v1.ModifyFilesRequest
 */
export type ModifyFilesRequest =
  Message<"cerbos.cloud.store.v1.ModifyFilesRequest"> & {
    /**
     * @generated from field: string store_id = 1;
     */
    storeId: string;

    /**
     * @generated from field: optional cerbos.cloud.store.v1.ModifyFilesRequest.Condition condition = 2;
     */
    condition?: ModifyFilesRequest_Condition;

    /**
     * @generated from field: repeated cerbos.cloud.store.v1.FileOp operations = 3;
     */
    operations: FileOp[];

    /**
     * @generated from field: optional cerbos.cloud.store.v1.ChangeDetails change_details = 4;
     */
    changeDetails?: ChangeDetails;
  };

export type ModifyFilesRequestValid = ModifyFilesRequest;

/**
 * Describes the message cerbos.cloud.store.v1.ModifyFilesRequest.
 * Use `create(ModifyFilesRequestSchema)` to create a new message.
 */
export const ModifyFilesRequestSchema: GenMessage<
  ModifyFilesRequest,
  { validType: ModifyFilesRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 9);

/**
 * @generated from message cerbos.cloud.store.v1.ModifyFilesRequest.Condition
 */
export type ModifyFilesRequest_Condition =
  Message<"cerbos.cloud.store.v1.ModifyFilesRequest.Condition"> & {
    /**
     * @generated from field: int64 store_version_must_equal = 1;
     */
    storeVersionMustEqual: bigint;
  };

export type ModifyFilesRequest_ConditionValid = ModifyFilesRequest_Condition;

/**
 * Describes the message cerbos.cloud.store.v1.ModifyFilesRequest.Condition.
 * Use `create(ModifyFilesRequest_ConditionSchema)` to create a new message.
 */
export const ModifyFilesRequest_ConditionSchema: GenMessage<
  ModifyFilesRequest_Condition,
  { validType: ModifyFilesRequest_ConditionValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 9, 0);

/**
 * @generated from message cerbos.cloud.store.v1.ModifyFilesResponse
 */
export type ModifyFilesResponse =
  Message<"cerbos.cloud.store.v1.ModifyFilesResponse"> & {
    /**
     * @generated from field: int64 new_store_version = 1;
     */
    newStoreVersion: bigint;
  };

export type ModifyFilesResponseValid = ModifyFilesResponse;

/**
 * Describes the message cerbos.cloud.store.v1.ModifyFilesResponse.
 * Use `create(ModifyFilesResponseSchema)` to create a new message.
 */
export const ModifyFilesResponseSchema: GenMessage<
  ModifyFilesResponse,
  { validType: ModifyFilesResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 10);

/**
 * @generated from message cerbos.cloud.store.v1.ReplaceFilesRequest
 */
export type ReplaceFilesRequest =
  Message<"cerbos.cloud.store.v1.ReplaceFilesRequest"> & {
    /**
     * @generated from field: string store_id = 1;
     */
    storeId: string;

    /**
     * @generated from field: optional cerbos.cloud.store.v1.ReplaceFilesRequest.Condition condition = 2;
     */
    condition?: ReplaceFilesRequest_Condition;

    /**
     * @generated from oneof cerbos.cloud.store.v1.ReplaceFilesRequest.contents
     */
    contents:
      | {
          /**
           * @generated from field: bytes zipped_contents = 3;
           */
          value: Uint8Array;
          case: "zippedContents";
        }
      | {
          /**
           * @generated from field: cerbos.cloud.store.v1.ReplaceFilesRequest.Files files = 5;
           */
          value: ReplaceFilesRequest_Files;
          case: "files";
        }
      | { case: undefined; value?: undefined };

    /**
     * @generated from field: optional cerbos.cloud.store.v1.ChangeDetails change_details = 4;
     */
    changeDetails?: ChangeDetails;
  };

export type ReplaceFilesRequestValid = ReplaceFilesRequest;

/**
 * Describes the message cerbos.cloud.store.v1.ReplaceFilesRequest.
 * Use `create(ReplaceFilesRequestSchema)` to create a new message.
 */
export const ReplaceFilesRequestSchema: GenMessage<
  ReplaceFilesRequest,
  { validType: ReplaceFilesRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 11);

/**
 * @generated from message cerbos.cloud.store.v1.ReplaceFilesRequest.Condition
 */
export type ReplaceFilesRequest_Condition =
  Message<"cerbos.cloud.store.v1.ReplaceFilesRequest.Condition"> & {
    /**
     * @generated from field: int64 store_version_must_equal = 1;
     */
    storeVersionMustEqual: bigint;
  };

export type ReplaceFilesRequest_ConditionValid = ReplaceFilesRequest_Condition;

/**
 * Describes the message cerbos.cloud.store.v1.ReplaceFilesRequest.Condition.
 * Use `create(ReplaceFilesRequest_ConditionSchema)` to create a new message.
 */
export const ReplaceFilesRequest_ConditionSchema: GenMessage<
  ReplaceFilesRequest_Condition,
  { validType: ReplaceFilesRequest_ConditionValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 11, 0);

/**
 * @generated from message cerbos.cloud.store.v1.ReplaceFilesRequest.Files
 */
export type ReplaceFilesRequest_Files =
  Message<"cerbos.cloud.store.v1.ReplaceFilesRequest.Files"> & {
    /**
     * @generated from field: repeated cerbos.cloud.store.v1.File files = 1;
     */
    files: File[];
  };

export type ReplaceFilesRequest_FilesValid = ReplaceFilesRequest_Files;

/**
 * Describes the message cerbos.cloud.store.v1.ReplaceFilesRequest.Files.
 * Use `create(ReplaceFilesRequest_FilesSchema)` to create a new message.
 */
export const ReplaceFilesRequest_FilesSchema: GenMessage<
  ReplaceFilesRequest_Files,
  { validType: ReplaceFilesRequest_FilesValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 11, 1);

/**
 * @generated from message cerbos.cloud.store.v1.ReplaceFilesResponse
 */
export type ReplaceFilesResponse =
  Message<"cerbos.cloud.store.v1.ReplaceFilesResponse"> & {
    /**
     * @generated from field: int64 new_store_version = 1;
     */
    newStoreVersion: bigint;

    /**
     * @generated from field: repeated string ignored_files = 2;
     */
    ignoredFiles: string[];
  };

export type ReplaceFilesResponseValid = ReplaceFilesResponse;

/**
 * Describes the message cerbos.cloud.store.v1.ReplaceFilesResponse.
 * Use `create(ReplaceFilesResponseSchema)` to create a new message.
 */
export const ReplaceFilesResponseSchema: GenMessage<
  ReplaceFilesResponse,
  { validType: ReplaceFilesResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_store_v1_store, 12);

/**
 * @generated from service cerbos.cloud.store.v1.CerbosStoreService
 */
export const CerbosStoreService: GenService<{
  /**
   * @generated from rpc cerbos.cloud.store.v1.CerbosStoreService.ListFiles
   */
  listFiles: {
    methodKind: "unary";
    input: typeof ListFilesRequestSchema;
    output: typeof ListFilesResponseSchema;
  };
  /**
   * @generated from rpc cerbos.cloud.store.v1.CerbosStoreService.GetFiles
   */
  getFiles: {
    methodKind: "unary";
    input: typeof GetFilesRequestSchema;
    output: typeof GetFilesResponseSchema;
  };
  /**
   * @generated from rpc cerbos.cloud.store.v1.CerbosStoreService.ModifyFiles
   */
  modifyFiles: {
    methodKind: "unary";
    input: typeof ModifyFilesRequestSchema;
    output: typeof ModifyFilesResponseSchema;
  };
  /**
   * @generated from rpc cerbos.cloud.store.v1.CerbosStoreService.ReplaceFiles
   */
  replaceFiles: {
    methodKind: "unary";
    input: typeof ReplaceFilesRequestSchema;
    output: typeof ReplaceFilesResponseSchema;
  };
}> = /*@__PURE__*/ serviceDesc(file_cerbos_cloud_store_v1_store, 0);
