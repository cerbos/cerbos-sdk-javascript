// Copyright 2021-2025 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

// @generated from file cerbos/cloud/apikey/v1/apikey.proto (package cerbos.cloud.apikey.v1, syntax proto3)
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
import type { Duration } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cerbos/cloud/apikey/v1/apikey.proto.
 */
export const file_cerbos_cloud_apikey_v1_apikey: GenFile =
  /*@__PURE__*/
  fileDesc(
    "CiNjZXJib3MvY2xvdWQvYXBpa2V5L3YxL2FwaWtleS5wcm90bxIWY2VyYm9zLmNsb3VkLmFwaWtleS52MSJWChdJc3N1ZUFjY2Vzc1Rva2VuUmVxdWVzdBIbCgljbGllbnRfaWQYASABKAlCCLpIBXIDmAEMEh4KDWNsaWVudF9zZWNyZXQYAiABKAlCB7pIBHICEAEicAoYSXNzdWVBY2Nlc3NUb2tlblJlc3BvbnNlEh0KDGFjY2Vzc190b2tlbhgBIAEoCUIHukgEcgIQARI1CgpleHBpcmVzX2luGAIgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uQga6SAPIAQEyngEKDUFwaUtleVNlcnZpY2USdwoQSXNzdWVBY2Nlc3NUb2tlbhIvLmNlcmJvcy5jbG91ZC5hcGlrZXkudjEuSXNzdWVBY2Nlc3NUb2tlblJlcXVlc3QaMC5jZXJib3MuY2xvdWQuYXBpa2V5LnYxLklzc3VlQWNjZXNzVG9rZW5SZXNwb25zZSIAGhT60uSTAg4SDEVYUEVSSU1FTlRBTEKAAQoeZGV2LmNlcmJvcy5hcGkuY2xvdWQudjEuYXBpa2V5WkFnaXRodWIuY29tL2NlcmJvcy9jbG91ZC1hcGkvZ2VucGIvY2VyYm9zL2Nsb3VkL2FwaWtleS92MTthcGlrZXl2MaoCGkNlcmJvcy5BcGkuQ2xvdWQuVjEuQXBpS2V5YgZwcm90bzM",
    [
      file_buf_validate_validate,
      file_google_api_visibility,
      file_google_protobuf_duration,
    ],
  );

/**
 * @generated from message cerbos.cloud.apikey.v1.IssueAccessTokenRequest
 */
export type IssueAccessTokenRequest =
  Message<"cerbos.cloud.apikey.v1.IssueAccessTokenRequest"> & {
    /**
     * @generated from field: string client_id = 1;
     */
    clientId: string;

    /**
     * @generated from field: string client_secret = 2;
     */
    clientSecret: string;
  };

export type IssueAccessTokenRequestValid = IssueAccessTokenRequest;

/**
 * Describes the message cerbos.cloud.apikey.v1.IssueAccessTokenRequest.
 * Use `create(IssueAccessTokenRequestSchema)` to create a new message.
 */
export const IssueAccessTokenRequestSchema: GenMessage<
  IssueAccessTokenRequest,
  { validType: IssueAccessTokenRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_apikey_v1_apikey, 0);

/**
 * @generated from message cerbos.cloud.apikey.v1.IssueAccessTokenResponse
 */
export type IssueAccessTokenResponse =
  Message<"cerbos.cloud.apikey.v1.IssueAccessTokenResponse"> & {
    /**
     * @generated from field: string access_token = 1;
     */
    accessToken: string;

    /**
     * @generated from field: google.protobuf.Duration expires_in = 2;
     */
    expiresIn?: Duration;
  };

/**
 * @generated from message cerbos.cloud.apikey.v1.IssueAccessTokenResponse
 */
export type IssueAccessTokenResponseValid =
  Message<"cerbos.cloud.apikey.v1.IssueAccessTokenResponse"> & {
    /**
     * @generated from field: string access_token = 1;
     */
    accessToken: string;

    /**
     * @generated from field: google.protobuf.Duration expires_in = 2;
     */
    expiresIn: Duration;
  };

/**
 * Describes the message cerbos.cloud.apikey.v1.IssueAccessTokenResponse.
 * Use `create(IssueAccessTokenResponseSchema)` to create a new message.
 */
export const IssueAccessTokenResponseSchema: GenMessage<
  IssueAccessTokenResponse,
  { validType: IssueAccessTokenResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_cloud_apikey_v1_apikey, 1);

/**
 * @generated from service cerbos.cloud.apikey.v1.ApiKeyService
 */
export const ApiKeyService: GenService<{
  /**
   * @generated from rpc cerbos.cloud.apikey.v1.ApiKeyService.IssueAccessToken
   */
  issueAccessToken: {
    methodKind: "unary";
    input: typeof IssueAccessTokenRequestSchema;
    output: typeof IssueAccessTokenResponseSchema;
  };
}> = /*@__PURE__*/ serviceDesc(file_cerbos_cloud_apikey_v1_apikey, 0);
