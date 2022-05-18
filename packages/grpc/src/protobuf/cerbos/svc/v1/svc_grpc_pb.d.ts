// GENERATED CODE -- DO NOT EDIT!

// package: cerbos.svc.v1
// file: cerbos/svc/v1/svc.proto

import * as cerbos_svc_v1_svc_pb from "../../../cerbos/svc/v1/svc_pb";
import * as cerbos_request_v1_request_pb from "../../../cerbos/request/v1/request_pb";
import * as cerbos_response_v1_response_pb from "../../../cerbos/response/v1/response_pb";
import * as grpc from "@grpc/grpc-js";

interface ICerbosServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  checkResourceSet: grpc.MethodDefinition<cerbos_request_v1_request_pb.CheckResourceSetRequest, cerbos_response_v1_response_pb.CheckResourceSetResponse>;
  checkResourceBatch: grpc.MethodDefinition<cerbos_request_v1_request_pb.CheckResourceBatchRequest, cerbos_response_v1_response_pb.CheckResourceBatchResponse>;
  checkResources: grpc.MethodDefinition<cerbos_request_v1_request_pb.CheckResourcesRequest, cerbos_response_v1_response_pb.CheckResourcesResponse>;
  serverInfo: grpc.MethodDefinition<cerbos_request_v1_request_pb.ServerInfoRequest, cerbos_response_v1_response_pb.ServerInfoResponse>;
  planResources: grpc.MethodDefinition<cerbos_request_v1_request_pb.PlanResourcesRequest, cerbos_response_v1_response_pb.PlanResourcesResponse>;
}

export const CerbosServiceService: ICerbosServiceService;

export interface ICerbosServiceServer extends grpc.UntypedServiceImplementation {
  checkResourceSet: grpc.handleUnaryCall<cerbos_request_v1_request_pb.CheckResourceSetRequest, cerbos_response_v1_response_pb.CheckResourceSetResponse>;
  checkResourceBatch: grpc.handleUnaryCall<cerbos_request_v1_request_pb.CheckResourceBatchRequest, cerbos_response_v1_response_pb.CheckResourceBatchResponse>;
  checkResources: grpc.handleUnaryCall<cerbos_request_v1_request_pb.CheckResourcesRequest, cerbos_response_v1_response_pb.CheckResourcesResponse>;
  serverInfo: grpc.handleUnaryCall<cerbos_request_v1_request_pb.ServerInfoRequest, cerbos_response_v1_response_pb.ServerInfoResponse>;
  planResources: grpc.handleUnaryCall<cerbos_request_v1_request_pb.PlanResourcesRequest, cerbos_response_v1_response_pb.PlanResourcesResponse>;
}

export class CerbosServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  checkResourceSet(argument: cerbos_request_v1_request_pb.CheckResourceSetRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.CheckResourceSetResponse>): grpc.ClientUnaryCall;
  checkResourceSet(argument: cerbos_request_v1_request_pb.CheckResourceSetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.CheckResourceSetResponse>): grpc.ClientUnaryCall;
  checkResourceSet(argument: cerbos_request_v1_request_pb.CheckResourceSetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.CheckResourceSetResponse>): grpc.ClientUnaryCall;
  checkResourceBatch(argument: cerbos_request_v1_request_pb.CheckResourceBatchRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.CheckResourceBatchResponse>): grpc.ClientUnaryCall;
  checkResourceBatch(argument: cerbos_request_v1_request_pb.CheckResourceBatchRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.CheckResourceBatchResponse>): grpc.ClientUnaryCall;
  checkResourceBatch(argument: cerbos_request_v1_request_pb.CheckResourceBatchRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.CheckResourceBatchResponse>): grpc.ClientUnaryCall;
  checkResources(argument: cerbos_request_v1_request_pb.CheckResourcesRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.CheckResourcesResponse>): grpc.ClientUnaryCall;
  checkResources(argument: cerbos_request_v1_request_pb.CheckResourcesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.CheckResourcesResponse>): grpc.ClientUnaryCall;
  checkResources(argument: cerbos_request_v1_request_pb.CheckResourcesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.CheckResourcesResponse>): grpc.ClientUnaryCall;
  serverInfo(argument: cerbos_request_v1_request_pb.ServerInfoRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.ServerInfoResponse>): grpc.ClientUnaryCall;
  serverInfo(argument: cerbos_request_v1_request_pb.ServerInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.ServerInfoResponse>): grpc.ClientUnaryCall;
  serverInfo(argument: cerbos_request_v1_request_pb.ServerInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.ServerInfoResponse>): grpc.ClientUnaryCall;
  planResources(argument: cerbos_request_v1_request_pb.PlanResourcesRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlanResourcesResponse>): grpc.ClientUnaryCall;
  planResources(argument: cerbos_request_v1_request_pb.PlanResourcesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlanResourcesResponse>): grpc.ClientUnaryCall;
  planResources(argument: cerbos_request_v1_request_pb.PlanResourcesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlanResourcesResponse>): grpc.ClientUnaryCall;
}

interface ICerbosAdminServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  addOrUpdatePolicy: grpc.MethodDefinition<cerbos_request_v1_request_pb.AddOrUpdatePolicyRequest, cerbos_response_v1_response_pb.AddOrUpdatePolicyResponse>;
  listPolicies: grpc.MethodDefinition<cerbos_request_v1_request_pb.ListPoliciesRequest, cerbos_response_v1_response_pb.ListPoliciesResponse>;
  getPolicy: grpc.MethodDefinition<cerbos_request_v1_request_pb.GetPolicyRequest, cerbos_response_v1_response_pb.GetPolicyResponse>;
  listAuditLogEntries: grpc.MethodDefinition<cerbos_request_v1_request_pb.ListAuditLogEntriesRequest, cerbos_response_v1_response_pb.ListAuditLogEntriesResponse>;
  addOrUpdateSchema: grpc.MethodDefinition<cerbos_request_v1_request_pb.AddOrUpdateSchemaRequest, cerbos_response_v1_response_pb.AddOrUpdateSchemaResponse>;
  listSchemas: grpc.MethodDefinition<cerbos_request_v1_request_pb.ListSchemasRequest, cerbos_response_v1_response_pb.ListSchemasResponse>;
  getSchema: grpc.MethodDefinition<cerbos_request_v1_request_pb.GetSchemaRequest, cerbos_response_v1_response_pb.GetSchemaResponse>;
  deleteSchema: grpc.MethodDefinition<cerbos_request_v1_request_pb.DeleteSchemaRequest, cerbos_response_v1_response_pb.DeleteSchemaResponse>;
  reloadStore: grpc.MethodDefinition<cerbos_request_v1_request_pb.ReloadStoreRequest, cerbos_response_v1_response_pb.ReloadStoreResponse>;
}

export const CerbosAdminServiceService: ICerbosAdminServiceService;

export interface ICerbosAdminServiceServer extends grpc.UntypedServiceImplementation {
  addOrUpdatePolicy: grpc.handleUnaryCall<cerbos_request_v1_request_pb.AddOrUpdatePolicyRequest, cerbos_response_v1_response_pb.AddOrUpdatePolicyResponse>;
  listPolicies: grpc.handleUnaryCall<cerbos_request_v1_request_pb.ListPoliciesRequest, cerbos_response_v1_response_pb.ListPoliciesResponse>;
  getPolicy: grpc.handleUnaryCall<cerbos_request_v1_request_pb.GetPolicyRequest, cerbos_response_v1_response_pb.GetPolicyResponse>;
  listAuditLogEntries: grpc.handleServerStreamingCall<cerbos_request_v1_request_pb.ListAuditLogEntriesRequest, cerbos_response_v1_response_pb.ListAuditLogEntriesResponse>;
  addOrUpdateSchema: grpc.handleUnaryCall<cerbos_request_v1_request_pb.AddOrUpdateSchemaRequest, cerbos_response_v1_response_pb.AddOrUpdateSchemaResponse>;
  listSchemas: grpc.handleUnaryCall<cerbos_request_v1_request_pb.ListSchemasRequest, cerbos_response_v1_response_pb.ListSchemasResponse>;
  getSchema: grpc.handleUnaryCall<cerbos_request_v1_request_pb.GetSchemaRequest, cerbos_response_v1_response_pb.GetSchemaResponse>;
  deleteSchema: grpc.handleUnaryCall<cerbos_request_v1_request_pb.DeleteSchemaRequest, cerbos_response_v1_response_pb.DeleteSchemaResponse>;
  reloadStore: grpc.handleUnaryCall<cerbos_request_v1_request_pb.ReloadStoreRequest, cerbos_response_v1_response_pb.ReloadStoreResponse>;
}

export class CerbosAdminServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  addOrUpdatePolicy(argument: cerbos_request_v1_request_pb.AddOrUpdatePolicyRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.AddOrUpdatePolicyResponse>): grpc.ClientUnaryCall;
  addOrUpdatePolicy(argument: cerbos_request_v1_request_pb.AddOrUpdatePolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.AddOrUpdatePolicyResponse>): grpc.ClientUnaryCall;
  addOrUpdatePolicy(argument: cerbos_request_v1_request_pb.AddOrUpdatePolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.AddOrUpdatePolicyResponse>): grpc.ClientUnaryCall;
  listPolicies(argument: cerbos_request_v1_request_pb.ListPoliciesRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.ListPoliciesResponse>): grpc.ClientUnaryCall;
  listPolicies(argument: cerbos_request_v1_request_pb.ListPoliciesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.ListPoliciesResponse>): grpc.ClientUnaryCall;
  listPolicies(argument: cerbos_request_v1_request_pb.ListPoliciesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.ListPoliciesResponse>): grpc.ClientUnaryCall;
  getPolicy(argument: cerbos_request_v1_request_pb.GetPolicyRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.GetPolicyResponse>): grpc.ClientUnaryCall;
  getPolicy(argument: cerbos_request_v1_request_pb.GetPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.GetPolicyResponse>): grpc.ClientUnaryCall;
  getPolicy(argument: cerbos_request_v1_request_pb.GetPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.GetPolicyResponse>): grpc.ClientUnaryCall;
  listAuditLogEntries(argument: cerbos_request_v1_request_pb.ListAuditLogEntriesRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<cerbos_response_v1_response_pb.ListAuditLogEntriesResponse>;
  listAuditLogEntries(argument: cerbos_request_v1_request_pb.ListAuditLogEntriesRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<cerbos_response_v1_response_pb.ListAuditLogEntriesResponse>;
  addOrUpdateSchema(argument: cerbos_request_v1_request_pb.AddOrUpdateSchemaRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.AddOrUpdateSchemaResponse>): grpc.ClientUnaryCall;
  addOrUpdateSchema(argument: cerbos_request_v1_request_pb.AddOrUpdateSchemaRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.AddOrUpdateSchemaResponse>): grpc.ClientUnaryCall;
  addOrUpdateSchema(argument: cerbos_request_v1_request_pb.AddOrUpdateSchemaRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.AddOrUpdateSchemaResponse>): grpc.ClientUnaryCall;
  listSchemas(argument: cerbos_request_v1_request_pb.ListSchemasRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.ListSchemasResponse>): grpc.ClientUnaryCall;
  listSchemas(argument: cerbos_request_v1_request_pb.ListSchemasRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.ListSchemasResponse>): grpc.ClientUnaryCall;
  listSchemas(argument: cerbos_request_v1_request_pb.ListSchemasRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.ListSchemasResponse>): grpc.ClientUnaryCall;
  getSchema(argument: cerbos_request_v1_request_pb.GetSchemaRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.GetSchemaResponse>): grpc.ClientUnaryCall;
  getSchema(argument: cerbos_request_v1_request_pb.GetSchemaRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.GetSchemaResponse>): grpc.ClientUnaryCall;
  getSchema(argument: cerbos_request_v1_request_pb.GetSchemaRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.GetSchemaResponse>): grpc.ClientUnaryCall;
  deleteSchema(argument: cerbos_request_v1_request_pb.DeleteSchemaRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.DeleteSchemaResponse>): grpc.ClientUnaryCall;
  deleteSchema(argument: cerbos_request_v1_request_pb.DeleteSchemaRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.DeleteSchemaResponse>): grpc.ClientUnaryCall;
  deleteSchema(argument: cerbos_request_v1_request_pb.DeleteSchemaRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.DeleteSchemaResponse>): grpc.ClientUnaryCall;
  reloadStore(argument: cerbos_request_v1_request_pb.ReloadStoreRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.ReloadStoreResponse>): grpc.ClientUnaryCall;
  reloadStore(argument: cerbos_request_v1_request_pb.ReloadStoreRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.ReloadStoreResponse>): grpc.ClientUnaryCall;
  reloadStore(argument: cerbos_request_v1_request_pb.ReloadStoreRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.ReloadStoreResponse>): grpc.ClientUnaryCall;
}

interface ICerbosPlaygroundServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  playgroundValidate: grpc.MethodDefinition<cerbos_request_v1_request_pb.PlaygroundValidateRequest, cerbos_response_v1_response_pb.PlaygroundValidateResponse>;
  playgroundTest: grpc.MethodDefinition<cerbos_request_v1_request_pb.PlaygroundTestRequest, cerbos_response_v1_response_pb.PlaygroundTestResponse>;
  playgroundEvaluate: grpc.MethodDefinition<cerbos_request_v1_request_pb.PlaygroundEvaluateRequest, cerbos_response_v1_response_pb.PlaygroundEvaluateResponse>;
  playgroundProxy: grpc.MethodDefinition<cerbos_request_v1_request_pb.PlaygroundProxyRequest, cerbos_response_v1_response_pb.PlaygroundProxyResponse>;
}

export const CerbosPlaygroundServiceService: ICerbosPlaygroundServiceService;

export interface ICerbosPlaygroundServiceServer extends grpc.UntypedServiceImplementation {
  playgroundValidate: grpc.handleUnaryCall<cerbos_request_v1_request_pb.PlaygroundValidateRequest, cerbos_response_v1_response_pb.PlaygroundValidateResponse>;
  playgroundTest: grpc.handleUnaryCall<cerbos_request_v1_request_pb.PlaygroundTestRequest, cerbos_response_v1_response_pb.PlaygroundTestResponse>;
  playgroundEvaluate: grpc.handleUnaryCall<cerbos_request_v1_request_pb.PlaygroundEvaluateRequest, cerbos_response_v1_response_pb.PlaygroundEvaluateResponse>;
  playgroundProxy: grpc.handleUnaryCall<cerbos_request_v1_request_pb.PlaygroundProxyRequest, cerbos_response_v1_response_pb.PlaygroundProxyResponse>;
}

export class CerbosPlaygroundServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  playgroundValidate(argument: cerbos_request_v1_request_pb.PlaygroundValidateRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlaygroundValidateResponse>): grpc.ClientUnaryCall;
  playgroundValidate(argument: cerbos_request_v1_request_pb.PlaygroundValidateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlaygroundValidateResponse>): grpc.ClientUnaryCall;
  playgroundValidate(argument: cerbos_request_v1_request_pb.PlaygroundValidateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlaygroundValidateResponse>): grpc.ClientUnaryCall;
  playgroundTest(argument: cerbos_request_v1_request_pb.PlaygroundTestRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlaygroundTestResponse>): grpc.ClientUnaryCall;
  playgroundTest(argument: cerbos_request_v1_request_pb.PlaygroundTestRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlaygroundTestResponse>): grpc.ClientUnaryCall;
  playgroundTest(argument: cerbos_request_v1_request_pb.PlaygroundTestRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlaygroundTestResponse>): grpc.ClientUnaryCall;
  playgroundEvaluate(argument: cerbos_request_v1_request_pb.PlaygroundEvaluateRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlaygroundEvaluateResponse>): grpc.ClientUnaryCall;
  playgroundEvaluate(argument: cerbos_request_v1_request_pb.PlaygroundEvaluateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlaygroundEvaluateResponse>): grpc.ClientUnaryCall;
  playgroundEvaluate(argument: cerbos_request_v1_request_pb.PlaygroundEvaluateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlaygroundEvaluateResponse>): grpc.ClientUnaryCall;
  playgroundProxy(argument: cerbos_request_v1_request_pb.PlaygroundProxyRequest, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlaygroundProxyResponse>): grpc.ClientUnaryCall;
  playgroundProxy(argument: cerbos_request_v1_request_pb.PlaygroundProxyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlaygroundProxyResponse>): grpc.ClientUnaryCall;
  playgroundProxy(argument: cerbos_request_v1_request_pb.PlaygroundProxyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cerbos_response_v1_response_pb.PlaygroundProxyResponse>): grpc.ClientUnaryCall;
}
