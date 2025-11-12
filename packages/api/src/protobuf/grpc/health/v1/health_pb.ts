// Copyright 2015 The gRPC Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// The canonical version of this proto can be found at
// https://github.com/grpc/grpc-proto/blob/master/grpc/health/v1/health.proto

// @generated from file grpc/health/v1/health.proto (package grpc.health.v1, syntax proto3)
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
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file grpc/health/v1/health.proto.
 */
export const file_grpc_health_v1_health: GenFile =
  /*@__PURE__*/
  fileDesc(
    "ChtncnBjL2hlYWx0aC92MS9oZWFsdGgucHJvdG8SDmdycGMuaGVhbHRoLnYxIiUKEkhlYWx0aENoZWNrUmVxdWVzdBIPCgdzZXJ2aWNlGAEgASgJIqkBChNIZWFsdGhDaGVja1Jlc3BvbnNlEkEKBnN0YXR1cxgBIAEoDjIxLmdycGMuaGVhbHRoLnYxLkhlYWx0aENoZWNrUmVzcG9uc2UuU2VydmluZ1N0YXR1cyJPCg1TZXJ2aW5nU3RhdHVzEgsKB1VOS05PV04QABILCgdTRVJWSU5HEAESDwoLTk9UX1NFUlZJTkcQAhITCg9TRVJWSUNFX1VOS05PV04QAyITChFIZWFsdGhMaXN0UmVxdWVzdCKuAQoSSGVhbHRoTGlzdFJlc3BvbnNlEkIKCHN0YXR1c2VzGAEgAygLMjAuZ3JwYy5oZWFsdGgudjEuSGVhbHRoTGlzdFJlc3BvbnNlLlN0YXR1c2VzRW50cnkaVAoNU3RhdHVzZXNFbnRyeRILCgNrZXkYASABKAkSMgoFdmFsdWUYAiABKAsyIy5ncnBjLmhlYWx0aC52MS5IZWFsdGhDaGVja1Jlc3BvbnNlOgI4ATL9AQoGSGVhbHRoElAKBUNoZWNrEiIuZ3JwYy5oZWFsdGgudjEuSGVhbHRoQ2hlY2tSZXF1ZXN0GiMuZ3JwYy5oZWFsdGgudjEuSGVhbHRoQ2hlY2tSZXNwb25zZRJNCgRMaXN0EiEuZ3JwYy5oZWFsdGgudjEuSGVhbHRoTGlzdFJlcXVlc3QaIi5ncnBjLmhlYWx0aC52MS5IZWFsdGhMaXN0UmVzcG9uc2USUgoFV2F0Y2gSIi5ncnBjLmhlYWx0aC52MS5IZWFsdGhDaGVja1JlcXVlc3QaIy5ncnBjLmhlYWx0aC52MS5IZWFsdGhDaGVja1Jlc3BvbnNlMAFCcAoRaW8uZ3JwYy5oZWFsdGgudjFCC0hlYWx0aFByb3RvUAFaLGdvb2dsZS5nb2xhbmcub3JnL2dycGMvaGVhbHRoL2dycGNfaGVhbHRoX3YxogIMR3JwY0hlYWx0aFYxqgIOR3JwYy5IZWFsdGguVjFiBnByb3RvMw",
  );

/**
 * @generated from message grpc.health.v1.HealthCheckRequest
 */
export type HealthCheckRequest =
  Message<"grpc.health.v1.HealthCheckRequest"> & {
    /**
     * @generated from field: string service = 1;
     */
    service: string;
  };

/**
 * @generated from message grpc.health.v1.HealthCheckRequest
 */
export type HealthCheckRequestJson = {
  /**
   * @generated from field: string service = 1;
   */
  service?: string;
};

export type HealthCheckRequestValid = HealthCheckRequest;

/**
 * Describes the message grpc.health.v1.HealthCheckRequest.
 * Use `create(HealthCheckRequestSchema)` to create a new message.
 */
export const HealthCheckRequestSchema: GenMessage<
  HealthCheckRequest,
  { jsonType: HealthCheckRequestJson; validType: HealthCheckRequestValid }
> = /*@__PURE__*/ messageDesc(file_grpc_health_v1_health, 0);

/**
 * @generated from message grpc.health.v1.HealthCheckResponse
 */
export type HealthCheckResponse =
  Message<"grpc.health.v1.HealthCheckResponse"> & {
    /**
     * @generated from field: grpc.health.v1.HealthCheckResponse.ServingStatus status = 1;
     */
    status: HealthCheckResponse_ServingStatus;
  };

/**
 * @generated from message grpc.health.v1.HealthCheckResponse
 */
export type HealthCheckResponseJson = {
  /**
   * @generated from field: grpc.health.v1.HealthCheckResponse.ServingStatus status = 1;
   */
  status?: HealthCheckResponse_ServingStatusJson;
};

export type HealthCheckResponseValid = HealthCheckResponse;

/**
 * Describes the message grpc.health.v1.HealthCheckResponse.
 * Use `create(HealthCheckResponseSchema)` to create a new message.
 */
export const HealthCheckResponseSchema: GenMessage<
  HealthCheckResponse,
  { jsonType: HealthCheckResponseJson; validType: HealthCheckResponseValid }
> = /*@__PURE__*/ messageDesc(file_grpc_health_v1_health, 1);

/**
 * @generated from enum grpc.health.v1.HealthCheckResponse.ServingStatus
 */
export enum HealthCheckResponse_ServingStatus {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: SERVING = 1;
   */
  SERVING = 1,

  /**
   * @generated from enum value: NOT_SERVING = 2;
   */
  NOT_SERVING = 2,

  /**
   * Used only by the Watch method.
   *
   * @generated from enum value: SERVICE_UNKNOWN = 3;
   */
  SERVICE_UNKNOWN = 3,
}

/**
 * @generated from enum grpc.health.v1.HealthCheckResponse.ServingStatus
 */
export type HealthCheckResponse_ServingStatusJson =
  | "UNKNOWN"
  | "SERVING"
  | "NOT_SERVING"
  | "SERVICE_UNKNOWN";

/**
 * Describes the enum grpc.health.v1.HealthCheckResponse.ServingStatus.
 */
export const HealthCheckResponse_ServingStatusSchema: GenEnum<
  HealthCheckResponse_ServingStatus,
  HealthCheckResponse_ServingStatusJson
> = /*@__PURE__*/ enumDesc(file_grpc_health_v1_health, 1, 0);

/**
 * @generated from message grpc.health.v1.HealthListRequest
 */
export type HealthListRequest =
  Message<"grpc.health.v1.HealthListRequest"> & {};

/**
 * @generated from message grpc.health.v1.HealthListRequest
 */
export type HealthListRequestJson = {};

export type HealthListRequestValid = HealthListRequest;

/**
 * Describes the message grpc.health.v1.HealthListRequest.
 * Use `create(HealthListRequestSchema)` to create a new message.
 */
export const HealthListRequestSchema: GenMessage<
  HealthListRequest,
  { jsonType: HealthListRequestJson; validType: HealthListRequestValid }
> = /*@__PURE__*/ messageDesc(file_grpc_health_v1_health, 2);

/**
 * @generated from message grpc.health.v1.HealthListResponse
 */
export type HealthListResponse =
  Message<"grpc.health.v1.HealthListResponse"> & {
    /**
     * statuses contains all the services and their respective status.
     *
     * @generated from field: map<string, grpc.health.v1.HealthCheckResponse> statuses = 1;
     */
    statuses: { [key: string]: HealthCheckResponse };
  };

/**
 * @generated from message grpc.health.v1.HealthListResponse
 */
export type HealthListResponseJson = {
  /**
   * statuses contains all the services and their respective status.
   *
   * @generated from field: map<string, grpc.health.v1.HealthCheckResponse> statuses = 1;
   */
  statuses?: { [key: string]: HealthCheckResponseJson };
};

export type HealthListResponseValid = HealthListResponse;

/**
 * Describes the message grpc.health.v1.HealthListResponse.
 * Use `create(HealthListResponseSchema)` to create a new message.
 */
export const HealthListResponseSchema: GenMessage<
  HealthListResponse,
  { jsonType: HealthListResponseJson; validType: HealthListResponseValid }
> = /*@__PURE__*/ messageDesc(file_grpc_health_v1_health, 3);

/**
 * Health is gRPC's mechanism for checking whether a server is able to handle
 * RPCs. Its semantics are documented in
 * https://github.com/grpc/grpc/blob/master/doc/health-checking.md.
 *
 * @generated from service grpc.health.v1.Health
 */
export const Health: GenService<{
  /**
   * Check gets the health of the specified service. If the requested service
   * is unknown, the call will fail with status NOT_FOUND. If the caller does
   * not specify a service name, the server should respond with its overall
   * health status.
   *
   * Clients should set a deadline when calling Check, and can declare the
   * server unhealthy if they do not receive a timely response.
   *
   * @generated from rpc grpc.health.v1.Health.Check
   */
  check: {
    methodKind: "unary";
    input: typeof HealthCheckRequestSchema;
    output: typeof HealthCheckResponseSchema;
  };
  /**
   * List provides a non-atomic snapshot of the health of all the available
   * services.
   *
   * The server may respond with a RESOURCE_EXHAUSTED error if too many services
   * exist.
   *
   * Clients should set a deadline when calling List, and can declare the server
   * unhealthy if they do not receive a timely response.
   *
   * Clients should keep in mind that the list of health services exposed by an
   * application can change over the lifetime of the process.
   *
   * @generated from rpc grpc.health.v1.Health.List
   */
  list: {
    methodKind: "unary";
    input: typeof HealthListRequestSchema;
    output: typeof HealthListResponseSchema;
  };
  /**
   * Performs a watch for the serving status of the requested service.
   * The server will immediately send back a message indicating the current
   * serving status.  It will then subsequently send a new message whenever
   * the service's serving status changes.
   *
   * If the requested service is unknown when the call is received, the
   * server will send a message setting the serving status to
   * SERVICE_UNKNOWN but will *not* terminate the call.  If at some
   * future point, the serving status of the service becomes known, the
   * server will send a new message with the service's serving status.
   *
   * If the call terminates with status UNIMPLEMENTED, then clients
   * should assume this method is not supported and should not retry the
   * call.  If the call terminates with any other status (including OK),
   * clients should retry the call with appropriate exponential backoff.
   *
   * @generated from rpc grpc.health.v1.Health.Watch
   */
  watch: {
    methodKind: "server_streaming";
    input: typeof HealthCheckRequestSchema;
    output: typeof HealthCheckResponseSchema;
  };
}> = /*@__PURE__*/ serviceDesc(file_grpc_health_v1_health, 0);
