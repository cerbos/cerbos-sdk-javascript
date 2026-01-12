// Copyright 2021-2026 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

// @generated from file cerbos/svc/v1/svc.proto (package cerbos.svc.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv2";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv2";
import type {
  AddOrUpdatePolicyRequestSchema,
  AddOrUpdateSchemaRequestSchema,
  CheckResourceBatchRequestSchema,
  CheckResourceSetRequestSchema,
  CheckResourcesRequestSchema,
  DeleteSchemaRequestSchema,
  DisablePolicyRequestSchema,
  EnablePolicyRequestSchema,
  GetPolicyRequestSchema,
  GetSchemaRequestSchema,
  InspectPoliciesRequestSchema,
  ListAuditLogEntriesRequestSchema,
  ListPoliciesRequestSchema,
  ListSchemasRequestSchema,
  PlanResourcesRequestSchema,
  ReloadStoreRequestSchema,
  ServerInfoRequestSchema,
} from "../../request/v1/request_pb.js";
import { file_cerbos_request_v1_request } from "../../request/v1/request_pb.js";
import type {
  AddOrUpdatePolicyResponseSchema,
  AddOrUpdateSchemaResponseSchema,
  CheckResourceBatchResponseSchema,
  CheckResourceSetResponseSchema,
  CheckResourcesResponseSchema,
  DeleteSchemaResponseSchema,
  DisablePolicyResponseSchema,
  EnablePolicyResponseSchema,
  GetPolicyResponseSchema,
  GetSchemaResponseSchema,
  InspectPoliciesResponseSchema,
  ListAuditLogEntriesResponseSchema,
  ListPoliciesResponseSchema,
  ListSchemasResponseSchema,
  PlanResourcesResponseSchema,
  ReloadStoreResponseSchema,
  ServerInfoResponseSchema,
} from "../../response/v1/response_pb.js";
import { file_cerbos_response_v1_response } from "../../response/v1/response_pb.js";
import { file_google_api_annotations } from "../../../google/api/annotations_pb.js";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb.js";

/**
 * Describes the file cerbos/svc/v1/svc.proto.
 */
export const file_cerbos_svc_v1_svc: GenFile =
  /*@__PURE__*/
  fileDesc(
    "ChdjZXJib3Mvc3ZjL3YxL3N2Yy5wcm90bxINY2VyYm9zLnN2Yy52MTLWCgoNQ2VyYm9zU2VydmljZRKnAgoQQ2hlY2tSZXNvdXJjZVNldBIqLmNlcmJvcy5yZXF1ZXN0LnYxLkNoZWNrUmVzb3VyY2VTZXRSZXF1ZXN0GiwuY2VyYm9zLnJlc3BvbnNlLnYxLkNoZWNrUmVzb3VyY2VTZXRSZXNwb25zZSK4AZJBnwESBUNoZWNrGpMBW0RlcHJlY2F0ZWQ6IFVzZSBDaGVja1Jlc291cmNlcyBBUEkgaW5zdGVhZF0gQ2hlY2sgd2hldGhlciBhIHByaW5jaXBhbCBoYXMgcGVybWlzc2lvbnMgdG8gcGVyZm9ybSB0aGUgZ2l2ZW4gYWN0aW9ucyBvbiBhIHNldCBvZiByZXNvdXJjZSBpbnN0YW5jZXMuWAGC0+STAg86ASoiCi9hcGkvY2hlY2sStgIKEkNoZWNrUmVzb3VyY2VCYXRjaBIsLmNlcmJvcy5yZXF1ZXN0LnYxLkNoZWNrUmVzb3VyY2VCYXRjaFJlcXVlc3QaLi5jZXJib3MucmVzcG9uc2UudjEuQ2hlY2tSZXNvdXJjZUJhdGNoUmVzcG9uc2UiwQGSQZkBEhRDaGVjayByZXNvdXJjZSBiYXRjaBp/W0RlcHJlY2F0ZWQ6IFVzZSBDaGVja1Jlc291cmNlcyBBUEkgaW5zdGVhZF0gQ2hlY2sgYSBwcmluY2lwYWwncyBwZXJtaXNzaW9ucyB0byBhIGJhdGNoIG9mIGhldGVyb2dlbmVvdXMgcmVzb3VyY2VzIGFuZCBhY3Rpb25zLlgBgtPkkwIeOgEqIhkvYXBpL2NoZWNrX3Jlc291cmNlX2JhdGNoEvABCg5DaGVja1Jlc291cmNlcxIoLmNlcmJvcy5yZXF1ZXN0LnYxLkNoZWNrUmVzb3VyY2VzUmVxdWVzdBoqLmNlcmJvcy5yZXNwb25zZS52MS5DaGVja1Jlc291cmNlc1Jlc3BvbnNlIocBkkFlEg9DaGVjayByZXNvdXJjZXMaUkNoZWNrIGEgcHJpbmNpcGFsJ3MgcGVybWlzc2lvbnMgdG8gYSBiYXRjaCBvZiBoZXRlcm9nZW5lb3VzIHJlc291cmNlcyBhbmQgYWN0aW9ucy6C0+STAhk6ASoiFC9hcGkvY2hlY2svcmVzb3VyY2VzEsUBCgpTZXJ2ZXJJbmZvEiQuY2VyYm9zLnJlcXVlc3QudjEuU2VydmVySW5mb1JlcXVlc3QaJi5jZXJib3MucmVzcG9uc2UudjEuU2VydmVySW5mb1Jlc3BvbnNlImmSQU4SFkdldCBzZXJ2ZXIgaW5mb3JtYXRpb24aNEdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmVyIGUuZy4gc2VydmVyIHZlcnNpb26C0+STAhISEC9hcGkvc2VydmVyX2luZm8SgwIKDVBsYW5SZXNvdXJjZXMSJy5jZXJib3MucmVxdWVzdC52MS5QbGFuUmVzb3VyY2VzUmVxdWVzdBopLmNlcmJvcy5yZXNwb25zZS52MS5QbGFuUmVzb3VyY2VzUmVzcG9uc2UinQGSQXwSDlBsYW4gcmVzb3VyY2VzGmpQcm9kdWNlIGEgcXVlcnkgcGxhbiB3aXRoIGNvbmRpdGlvbnMgdGhhdCBtdXN0IGJlIHNhdGlzZmllZCBmb3IgYWNjZXNzaW5nIGEgc2V0IG9mIGluc3RhbmNlcyBvZiBhIHJlc291cmNlgtPkkwIYOgEqIhMvYXBpL3BsYW4vcmVzb3VyY2VzGiGSQR4SHENlcmJvcyBQb2xpY3kgRGVjaXNpb24gUG9pbnQy+BAKEkNlcmJvc0FkbWluU2VydmljZRLJAQoRQWRkT3JVcGRhdGVQb2xpY3kSKy5jZXJib3MucmVxdWVzdC52MS5BZGRPclVwZGF0ZVBvbGljeVJlcXVlc3QaLS5jZXJib3MucmVzcG9uc2UudjEuQWRkT3JVcGRhdGVQb2xpY3lSZXNwb25zZSJYkkEpEhZBZGQgb3IgdXBkYXRlIHBvbGljaWVzYg8KDQoJQmFzaWNBdXRoEgCC0+STAiY6ASpaEjoBKhoNL2FkbWluL3BvbGljeSINL2FkbWluL3BvbGljeRKwAQoPSW5zcGVjdFBvbGljaWVzEikuY2VyYm9zLnJlcXVlc3QudjEuSW5zcGVjdFBvbGljaWVzUmVxdWVzdBorLmNlcmJvcy5yZXNwb25zZS52MS5JbnNwZWN0UG9saWNpZXNSZXNwb25zZSJFkkEjEhBJbnNwZWN0IHBvbGljaWVzYg8KDQoJQmFzaWNBdXRoEgCC0+STAhkSFy9hZG1pbi9wb2xpY2llcy9pbnNwZWN0EpwBCgxMaXN0UG9saWNpZXMSJi5jZXJib3MucmVxdWVzdC52MS5MaXN0UG9saWNpZXNSZXF1ZXN0GiguY2VyYm9zLnJlc3BvbnNlLnYxLkxpc3RQb2xpY2llc1Jlc3BvbnNlIjqSQSASDUxpc3QgcG9saWNpZXNiDwoNCglCYXNpY0F1dGgSAILT5JMCERIPL2FkbWluL3BvbGljaWVzEo4BCglHZXRQb2xpY3kSIy5jZXJib3MucmVxdWVzdC52MS5HZXRQb2xpY3lSZXF1ZXN0GiUuY2VyYm9zLnJlc3BvbnNlLnYxLkdldFBvbGljeVJlc3BvbnNlIjWSQR0SCkdldCBwb2xpY3liDwoNCglCYXNpY0F1dGgSAILT5JMCDxINL2FkbWluL3BvbGljeRLTAQoNRGlzYWJsZVBvbGljeRInLmNlcmJvcy5yZXF1ZXN0LnYxLkRpc2FibGVQb2xpY3lSZXF1ZXN0GikuY2VyYm9zLnJlc3BvbnNlLnYxLkRpc2FibGVQb2xpY3lSZXNwb25zZSJukkEhEg5EaXNhYmxlIHBvbGljeWIPCg0KCUJhc2ljQXV0aBIAgtPkkwJEWho6ASoaFS9hZG1pbi9wb2xpY3kvZGlzYWJsZVoPKg0vYWRtaW4vcG9saWN5IhUvYWRtaW4vcG9saWN5L2Rpc2FibGUSvAEKDEVuYWJsZVBvbGljeRImLmNlcmJvcy5yZXF1ZXN0LnYxLkVuYWJsZVBvbGljeVJlcXVlc3QaKC5jZXJib3MucmVzcG9uc2UudjEuRW5hYmxlUG9saWN5UmVzcG9uc2UiWpJBIBINRW5hYmxlIHBvbGljeWIPCg0KCUJhc2ljQXV0aBIAgtPkkwIxWhk6ASoaFC9hZG1pbi9wb2xpY3kvZW5hYmxlIhQvYWRtaW4vcG9saWN5L2VuYWJsZRLIAQoTTGlzdEF1ZGl0TG9nRW50cmllcxItLmNlcmJvcy5yZXF1ZXN0LnYxLkxpc3RBdWRpdExvZ0VudHJpZXNSZXF1ZXN0Gi8uY2VyYm9zLnJlc3BvbnNlLnYxLkxpc3RBdWRpdExvZ0VudHJpZXNSZXNwb25zZSJPkkEpEhZMaXN0IGF1ZGl0IGxvZyBlbnRyaWVzYg8KDQoJQmFzaWNBdXRoEgCC0+STAh0SGy9hZG1pbi9hdWRpdGxvZy9saXN0L3traW5kfTABEscBChFBZGRPclVwZGF0ZVNjaGVtYRIrLmNlcmJvcy5yZXF1ZXN0LnYxLkFkZE9yVXBkYXRlU2NoZW1hUmVxdWVzdBotLmNlcmJvcy5yZXNwb25zZS52MS5BZGRPclVwZGF0ZVNjaGVtYVJlc3BvbnNlIlaSQScSFEFkZCBvciB1cGRhdGUgc2NoZW1hYg8KDQoJQmFzaWNBdXRoEgCC0+STAiY6ASpaEjoBKhoNL2FkbWluL3NjaGVtYSINL2FkbWluL3NjaGVtYRKXAQoLTGlzdFNjaGVtYXMSJS5jZXJib3MucmVxdWVzdC52MS5MaXN0U2NoZW1hc1JlcXVlc3QaJy5jZXJib3MucmVzcG9uc2UudjEuTGlzdFNjaGVtYXNSZXNwb25zZSI4kkEfEgxMaXN0IHNjaGVtYXNiDwoNCglCYXNpY0F1dGgSAILT5JMCEBIOL2FkbWluL3NjaGVtYXMSjgEKCUdldFNjaGVtYRIjLmNlcmJvcy5yZXF1ZXN0LnYxLkdldFNjaGVtYVJlcXVlc3QaJS5jZXJib3MucmVzcG9uc2UudjEuR2V0U2NoZW1hUmVzcG9uc2UiNZJBHRIKR2V0IHNjaGVtYWIPCg0KCUJhc2ljQXV0aBIAgtPkkwIPEg0vYWRtaW4vc2NoZW1hEpoBCgxEZWxldGVTY2hlbWESJi5jZXJib3MucmVxdWVzdC52MS5EZWxldGVTY2hlbWFSZXF1ZXN0GiguY2VyYm9zLnJlc3BvbnNlLnYxLkRlbGV0ZVNjaGVtYVJlc3BvbnNlIjiSQSASDURlbGV0ZSBzY2hlbWFiDwoNCglCYXNpY0F1dGgSAILT5JMCDyoNL2FkbWluL3NjaGVtYRKcAQoLUmVsb2FkU3RvcmUSJS5jZXJib3MucmVxdWVzdC52MS5SZWxvYWRTdG9yZVJlcXVlc3QaJy5jZXJib3MucmVzcG9uc2UudjEuUmVsb2FkU3RvcmVSZXNwb25zZSI9kkEfEgxSZWxvYWQgc3RvcmViDwoNCglCYXNpY0F1dGgSAILT5JMCFRITL2FkbWluL3N0b3JlL3JlbG9hZBoikkEfEh1DZXJib3MgYWRtaW5pc3RyYXRpb24gc2VydmljZULhAQoVZGV2LmNlcmJvcy5hcGkudjEuc3ZjWjZnaXRodWIuY29tL2NlcmJvcy9jZXJib3MvYXBpL2dlbnBiL2NlcmJvcy9zdmMvdjE7c3ZjdjGqAhFDZXJib3MuQXBpLlYxLlN2Y5JBexI/CgZDZXJib3MiLQoGQ2VyYm9zEhJodHRwczovL2NlcmJvcy5kZXYaD2luZm9AY2VyYm9zLmRldjIGbGF0ZXN0KgECMhBhcHBsaWNhdGlvbi9qc29uOhBhcHBsaWNhdGlvbi9qc29uWhEKDwoJQmFzaWNBdXRoEgIIAWIGcHJvdG8z",
    [
      file_cerbos_request_v1_request,
      file_cerbos_response_v1_response,
      file_google_api_annotations,
      file_protoc_gen_openapiv2_options_annotations,
    ],
  );

/**
 * @generated from service cerbos.svc.v1.CerbosService
 */
export const CerbosService: GenService<{
  /**
   * @generated from rpc cerbos.svc.v1.CerbosService.CheckResourceSet
   */
  checkResourceSet: {
    methodKind: "unary";
    input: typeof CheckResourceSetRequestSchema;
    output: typeof CheckResourceSetResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosService.CheckResourceBatch
   */
  checkResourceBatch: {
    methodKind: "unary";
    input: typeof CheckResourceBatchRequestSchema;
    output: typeof CheckResourceBatchResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosService.CheckResources
   */
  checkResources: {
    methodKind: "unary";
    input: typeof CheckResourcesRequestSchema;
    output: typeof CheckResourcesResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosService.ServerInfo
   */
  serverInfo: {
    methodKind: "unary";
    input: typeof ServerInfoRequestSchema;
    output: typeof ServerInfoResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosService.PlanResources
   */
  planResources: {
    methodKind: "unary";
    input: typeof PlanResourcesRequestSchema;
    output: typeof PlanResourcesResponseSchema;
  };
}> = /*@__PURE__*/ serviceDesc(file_cerbos_svc_v1_svc, 0);

/**
 * @generated from service cerbos.svc.v1.CerbosAdminService
 */
export const CerbosAdminService: GenService<{
  /**
   * @generated from rpc cerbos.svc.v1.CerbosAdminService.AddOrUpdatePolicy
   */
  addOrUpdatePolicy: {
    methodKind: "unary";
    input: typeof AddOrUpdatePolicyRequestSchema;
    output: typeof AddOrUpdatePolicyResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosAdminService.InspectPolicies
   */
  inspectPolicies: {
    methodKind: "unary";
    input: typeof InspectPoliciesRequestSchema;
    output: typeof InspectPoliciesResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosAdminService.ListPolicies
   */
  listPolicies: {
    methodKind: "unary";
    input: typeof ListPoliciesRequestSchema;
    output: typeof ListPoliciesResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosAdminService.GetPolicy
   */
  getPolicy: {
    methodKind: "unary";
    input: typeof GetPolicyRequestSchema;
    output: typeof GetPolicyResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosAdminService.DisablePolicy
   */
  disablePolicy: {
    methodKind: "unary";
    input: typeof DisablePolicyRequestSchema;
    output: typeof DisablePolicyResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosAdminService.EnablePolicy
   */
  enablePolicy: {
    methodKind: "unary";
    input: typeof EnablePolicyRequestSchema;
    output: typeof EnablePolicyResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosAdminService.ListAuditLogEntries
   */
  listAuditLogEntries: {
    methodKind: "server_streaming";
    input: typeof ListAuditLogEntriesRequestSchema;
    output: typeof ListAuditLogEntriesResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosAdminService.AddOrUpdateSchema
   */
  addOrUpdateSchema: {
    methodKind: "unary";
    input: typeof AddOrUpdateSchemaRequestSchema;
    output: typeof AddOrUpdateSchemaResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosAdminService.ListSchemas
   */
  listSchemas: {
    methodKind: "unary";
    input: typeof ListSchemasRequestSchema;
    output: typeof ListSchemasResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosAdminService.GetSchema
   */
  getSchema: {
    methodKind: "unary";
    input: typeof GetSchemaRequestSchema;
    output: typeof GetSchemaResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosAdminService.DeleteSchema
   */
  deleteSchema: {
    methodKind: "unary";
    input: typeof DeleteSchemaRequestSchema;
    output: typeof DeleteSchemaResponseSchema;
  };
  /**
   * @generated from rpc cerbos.svc.v1.CerbosAdminService.ReloadStore
   */
  reloadStore: {
    methodKind: "unary";
    input: typeof ReloadStoreRequestSchema;
    output: typeof ReloadStoreResponseSchema;
  };
}> = /*@__PURE__*/ serviceDesc(file_cerbos_svc_v1_svc, 1);
