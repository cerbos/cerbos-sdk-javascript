/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  ChannelOptions,
  Client,
  ClientReadableStream,
  ClientUnaryCall,
  handleServerStreamingCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import {
  AddOrUpdatePolicyRequest,
  AddOrUpdateSchemaRequest,
  CheckResourceBatchRequest,
  CheckResourceSetRequest,
  CheckResourcesRequest,
  DeleteSchemaRequest,
  GetPolicyRequest,
  GetSchemaRequest,
  ListAuditLogEntriesRequest,
  ListPoliciesRequest,
  ListSchemasRequest,
  PlanResourcesRequest,
  PlaygroundEvaluateRequest,
  PlaygroundProxyRequest,
  PlaygroundTestRequest,
  PlaygroundValidateRequest,
  ReloadStoreRequest,
  ServerInfoRequest,
} from "../../request/v1/request";
import {
  AddOrUpdatePolicyResponse,
  AddOrUpdateSchemaResponse,
  CheckResourceBatchResponse,
  CheckResourceSetResponse,
  CheckResourcesResponse,
  DeleteSchemaResponse,
  GetPolicyResponse,
  GetSchemaResponse,
  ListAuditLogEntriesResponse,
  ListPoliciesResponse,
  ListSchemasResponse,
  PlanResourcesResponse,
  PlaygroundEvaluateResponse,
  PlaygroundProxyResponse,
  PlaygroundTestResponse,
  PlaygroundValidateResponse,
  ReloadStoreResponse,
  ServerInfoResponse,
} from "../../response/v1/response";

export const protobufPackage = "cerbos.svc.v1";

export type CerbosServiceService = typeof CerbosServiceService;
export const CerbosServiceService = {
  checkResourceSet: {
    path: "/cerbos.svc.v1.CerbosService/CheckResourceSet",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CheckResourceSetRequest) => Buffer.from(CheckResourceSetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CheckResourceSetRequest.decode(value),
    responseSerialize: (value: CheckResourceSetResponse) =>
      Buffer.from(CheckResourceSetResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CheckResourceSetResponse.decode(value),
  },
  checkResourceBatch: {
    path: "/cerbos.svc.v1.CerbosService/CheckResourceBatch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CheckResourceBatchRequest) =>
      Buffer.from(CheckResourceBatchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CheckResourceBatchRequest.decode(value),
    responseSerialize: (value: CheckResourceBatchResponse) =>
      Buffer.from(CheckResourceBatchResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CheckResourceBatchResponse.decode(value),
  },
  checkResources: {
    path: "/cerbos.svc.v1.CerbosService/CheckResources",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CheckResourcesRequest) => Buffer.from(CheckResourcesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CheckResourcesRequest.decode(value),
    responseSerialize: (value: CheckResourcesResponse) => Buffer.from(CheckResourcesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CheckResourcesResponse.decode(value),
  },
  serverInfo: {
    path: "/cerbos.svc.v1.CerbosService/ServerInfo",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ServerInfoRequest) => Buffer.from(ServerInfoRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ServerInfoRequest.decode(value),
    responseSerialize: (value: ServerInfoResponse) => Buffer.from(ServerInfoResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ServerInfoResponse.decode(value),
  },
  planResources: {
    path: "/cerbos.svc.v1.CerbosService/PlanResources",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PlanResourcesRequest) => Buffer.from(PlanResourcesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PlanResourcesRequest.decode(value),
    responseSerialize: (value: PlanResourcesResponse) => Buffer.from(PlanResourcesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PlanResourcesResponse.decode(value),
  },
} as const;

export interface CerbosServiceServer extends UntypedServiceImplementation {
  checkResourceSet: handleUnaryCall<CheckResourceSetRequest, CheckResourceSetResponse>;
  checkResourceBatch: handleUnaryCall<CheckResourceBatchRequest, CheckResourceBatchResponse>;
  checkResources: handleUnaryCall<CheckResourcesRequest, CheckResourcesResponse>;
  serverInfo: handleUnaryCall<ServerInfoRequest, ServerInfoResponse>;
  planResources: handleUnaryCall<PlanResourcesRequest, PlanResourcesResponse>;
}

export interface CerbosServiceClient extends Client {
  checkResourceSet(
    request: CheckResourceSetRequest,
    callback: (error: ServiceError | null, response: CheckResourceSetResponse) => void,
  ): ClientUnaryCall;
  checkResourceSet(
    request: CheckResourceSetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CheckResourceSetResponse) => void,
  ): ClientUnaryCall;
  checkResourceSet(
    request: CheckResourceSetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CheckResourceSetResponse) => void,
  ): ClientUnaryCall;
  checkResourceBatch(
    request: CheckResourceBatchRequest,
    callback: (error: ServiceError | null, response: CheckResourceBatchResponse) => void,
  ): ClientUnaryCall;
  checkResourceBatch(
    request: CheckResourceBatchRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CheckResourceBatchResponse) => void,
  ): ClientUnaryCall;
  checkResourceBatch(
    request: CheckResourceBatchRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CheckResourceBatchResponse) => void,
  ): ClientUnaryCall;
  checkResources(
    request: CheckResourcesRequest,
    callback: (error: ServiceError | null, response: CheckResourcesResponse) => void,
  ): ClientUnaryCall;
  checkResources(
    request: CheckResourcesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CheckResourcesResponse) => void,
  ): ClientUnaryCall;
  checkResources(
    request: CheckResourcesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CheckResourcesResponse) => void,
  ): ClientUnaryCall;
  serverInfo(
    request: ServerInfoRequest,
    callback: (error: ServiceError | null, response: ServerInfoResponse) => void,
  ): ClientUnaryCall;
  serverInfo(
    request: ServerInfoRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ServerInfoResponse) => void,
  ): ClientUnaryCall;
  serverInfo(
    request: ServerInfoRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ServerInfoResponse) => void,
  ): ClientUnaryCall;
  planResources(
    request: PlanResourcesRequest,
    callback: (error: ServiceError | null, response: PlanResourcesResponse) => void,
  ): ClientUnaryCall;
  planResources(
    request: PlanResourcesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PlanResourcesResponse) => void,
  ): ClientUnaryCall;
  planResources(
    request: PlanResourcesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PlanResourcesResponse) => void,
  ): ClientUnaryCall;
}

export const CerbosServiceClient = makeGenericClientConstructor(
  CerbosServiceService,
  "cerbos.svc.v1.CerbosService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): CerbosServiceClient;
  service: typeof CerbosServiceService;
};

export type CerbosAdminServiceService = typeof CerbosAdminServiceService;
export const CerbosAdminServiceService = {
  addOrUpdatePolicy: {
    path: "/cerbos.svc.v1.CerbosAdminService/AddOrUpdatePolicy",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddOrUpdatePolicyRequest) => Buffer.from(AddOrUpdatePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddOrUpdatePolicyRequest.decode(value),
    responseSerialize: (value: AddOrUpdatePolicyResponse) =>
      Buffer.from(AddOrUpdatePolicyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AddOrUpdatePolicyResponse.decode(value),
  },
  listPolicies: {
    path: "/cerbos.svc.v1.CerbosAdminService/ListPolicies",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListPoliciesRequest) => Buffer.from(ListPoliciesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListPoliciesRequest.decode(value),
    responseSerialize: (value: ListPoliciesResponse) => Buffer.from(ListPoliciesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListPoliciesResponse.decode(value),
  },
  getPolicy: {
    path: "/cerbos.svc.v1.CerbosAdminService/GetPolicy",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPolicyRequest) => Buffer.from(GetPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetPolicyRequest.decode(value),
    responseSerialize: (value: GetPolicyResponse) => Buffer.from(GetPolicyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetPolicyResponse.decode(value),
  },
  listAuditLogEntries: {
    path: "/cerbos.svc.v1.CerbosAdminService/ListAuditLogEntries",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: ListAuditLogEntriesRequest) =>
      Buffer.from(ListAuditLogEntriesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAuditLogEntriesRequest.decode(value),
    responseSerialize: (value: ListAuditLogEntriesResponse) =>
      Buffer.from(ListAuditLogEntriesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAuditLogEntriesResponse.decode(value),
  },
  addOrUpdateSchema: {
    path: "/cerbos.svc.v1.CerbosAdminService/AddOrUpdateSchema",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddOrUpdateSchemaRequest) => Buffer.from(AddOrUpdateSchemaRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddOrUpdateSchemaRequest.decode(value),
    responseSerialize: (value: AddOrUpdateSchemaResponse) =>
      Buffer.from(AddOrUpdateSchemaResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AddOrUpdateSchemaResponse.decode(value),
  },
  listSchemas: {
    path: "/cerbos.svc.v1.CerbosAdminService/ListSchemas",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSchemasRequest) => Buffer.from(ListSchemasRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSchemasRequest.decode(value),
    responseSerialize: (value: ListSchemasResponse) => Buffer.from(ListSchemasResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSchemasResponse.decode(value),
  },
  getSchema: {
    path: "/cerbos.svc.v1.CerbosAdminService/GetSchema",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSchemaRequest) => Buffer.from(GetSchemaRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSchemaRequest.decode(value),
    responseSerialize: (value: GetSchemaResponse) => Buffer.from(GetSchemaResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetSchemaResponse.decode(value),
  },
  deleteSchema: {
    path: "/cerbos.svc.v1.CerbosAdminService/DeleteSchema",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSchemaRequest) => Buffer.from(DeleteSchemaRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteSchemaRequest.decode(value),
    responseSerialize: (value: DeleteSchemaResponse) => Buffer.from(DeleteSchemaResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteSchemaResponse.decode(value),
  },
  reloadStore: {
    path: "/cerbos.svc.v1.CerbosAdminService/ReloadStore",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ReloadStoreRequest) => Buffer.from(ReloadStoreRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ReloadStoreRequest.decode(value),
    responseSerialize: (value: ReloadStoreResponse) => Buffer.from(ReloadStoreResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ReloadStoreResponse.decode(value),
  },
} as const;

export interface CerbosAdminServiceServer extends UntypedServiceImplementation {
  addOrUpdatePolicy: handleUnaryCall<AddOrUpdatePolicyRequest, AddOrUpdatePolicyResponse>;
  listPolicies: handleUnaryCall<ListPoliciesRequest, ListPoliciesResponse>;
  getPolicy: handleUnaryCall<GetPolicyRequest, GetPolicyResponse>;
  listAuditLogEntries: handleServerStreamingCall<ListAuditLogEntriesRequest, ListAuditLogEntriesResponse>;
  addOrUpdateSchema: handleUnaryCall<AddOrUpdateSchemaRequest, AddOrUpdateSchemaResponse>;
  listSchemas: handleUnaryCall<ListSchemasRequest, ListSchemasResponse>;
  getSchema: handleUnaryCall<GetSchemaRequest, GetSchemaResponse>;
  deleteSchema: handleUnaryCall<DeleteSchemaRequest, DeleteSchemaResponse>;
  reloadStore: handleUnaryCall<ReloadStoreRequest, ReloadStoreResponse>;
}

export interface CerbosAdminServiceClient extends Client {
  addOrUpdatePolicy(
    request: AddOrUpdatePolicyRequest,
    callback: (error: ServiceError | null, response: AddOrUpdatePolicyResponse) => void,
  ): ClientUnaryCall;
  addOrUpdatePolicy(
    request: AddOrUpdatePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AddOrUpdatePolicyResponse) => void,
  ): ClientUnaryCall;
  addOrUpdatePolicy(
    request: AddOrUpdatePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AddOrUpdatePolicyResponse) => void,
  ): ClientUnaryCall;
  listPolicies(
    request: ListPoliciesRequest,
    callback: (error: ServiceError | null, response: ListPoliciesResponse) => void,
  ): ClientUnaryCall;
  listPolicies(
    request: ListPoliciesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListPoliciesResponse) => void,
  ): ClientUnaryCall;
  listPolicies(
    request: ListPoliciesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListPoliciesResponse) => void,
  ): ClientUnaryCall;
  getPolicy(
    request: GetPolicyRequest,
    callback: (error: ServiceError | null, response: GetPolicyResponse) => void,
  ): ClientUnaryCall;
  getPolicy(
    request: GetPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetPolicyResponse) => void,
  ): ClientUnaryCall;
  getPolicy(
    request: GetPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetPolicyResponse) => void,
  ): ClientUnaryCall;
  listAuditLogEntries(
    request: ListAuditLogEntriesRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<ListAuditLogEntriesResponse>;
  listAuditLogEntries(
    request: ListAuditLogEntriesRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<ListAuditLogEntriesResponse>;
  addOrUpdateSchema(
    request: AddOrUpdateSchemaRequest,
    callback: (error: ServiceError | null, response: AddOrUpdateSchemaResponse) => void,
  ): ClientUnaryCall;
  addOrUpdateSchema(
    request: AddOrUpdateSchemaRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AddOrUpdateSchemaResponse) => void,
  ): ClientUnaryCall;
  addOrUpdateSchema(
    request: AddOrUpdateSchemaRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AddOrUpdateSchemaResponse) => void,
  ): ClientUnaryCall;
  listSchemas(
    request: ListSchemasRequest,
    callback: (error: ServiceError | null, response: ListSchemasResponse) => void,
  ): ClientUnaryCall;
  listSchemas(
    request: ListSchemasRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSchemasResponse) => void,
  ): ClientUnaryCall;
  listSchemas(
    request: ListSchemasRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSchemasResponse) => void,
  ): ClientUnaryCall;
  getSchema(
    request: GetSchemaRequest,
    callback: (error: ServiceError | null, response: GetSchemaResponse) => void,
  ): ClientUnaryCall;
  getSchema(
    request: GetSchemaRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetSchemaResponse) => void,
  ): ClientUnaryCall;
  getSchema(
    request: GetSchemaRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetSchemaResponse) => void,
  ): ClientUnaryCall;
  deleteSchema(
    request: DeleteSchemaRequest,
    callback: (error: ServiceError | null, response: DeleteSchemaResponse) => void,
  ): ClientUnaryCall;
  deleteSchema(
    request: DeleteSchemaRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeleteSchemaResponse) => void,
  ): ClientUnaryCall;
  deleteSchema(
    request: DeleteSchemaRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeleteSchemaResponse) => void,
  ): ClientUnaryCall;
  reloadStore(
    request: ReloadStoreRequest,
    callback: (error: ServiceError | null, response: ReloadStoreResponse) => void,
  ): ClientUnaryCall;
  reloadStore(
    request: ReloadStoreRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ReloadStoreResponse) => void,
  ): ClientUnaryCall;
  reloadStore(
    request: ReloadStoreRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ReloadStoreResponse) => void,
  ): ClientUnaryCall;
}

export const CerbosAdminServiceClient = makeGenericClientConstructor(
  CerbosAdminServiceService,
  "cerbos.svc.v1.CerbosAdminService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): CerbosAdminServiceClient;
  service: typeof CerbosAdminServiceService;
};

export type CerbosPlaygroundServiceService = typeof CerbosPlaygroundServiceService;
export const CerbosPlaygroundServiceService = {
  playgroundValidate: {
    path: "/cerbos.svc.v1.CerbosPlaygroundService/PlaygroundValidate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PlaygroundValidateRequest) =>
      Buffer.from(PlaygroundValidateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PlaygroundValidateRequest.decode(value),
    responseSerialize: (value: PlaygroundValidateResponse) =>
      Buffer.from(PlaygroundValidateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PlaygroundValidateResponse.decode(value),
  },
  playgroundTest: {
    path: "/cerbos.svc.v1.CerbosPlaygroundService/PlaygroundTest",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PlaygroundTestRequest) => Buffer.from(PlaygroundTestRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PlaygroundTestRequest.decode(value),
    responseSerialize: (value: PlaygroundTestResponse) => Buffer.from(PlaygroundTestResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PlaygroundTestResponse.decode(value),
  },
  playgroundEvaluate: {
    path: "/cerbos.svc.v1.CerbosPlaygroundService/PlaygroundEvaluate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PlaygroundEvaluateRequest) =>
      Buffer.from(PlaygroundEvaluateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PlaygroundEvaluateRequest.decode(value),
    responseSerialize: (value: PlaygroundEvaluateResponse) =>
      Buffer.from(PlaygroundEvaluateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PlaygroundEvaluateResponse.decode(value),
  },
  playgroundProxy: {
    path: "/cerbos.svc.v1.CerbosPlaygroundService/PlaygroundProxy",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PlaygroundProxyRequest) => Buffer.from(PlaygroundProxyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PlaygroundProxyRequest.decode(value),
    responseSerialize: (value: PlaygroundProxyResponse) => Buffer.from(PlaygroundProxyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PlaygroundProxyResponse.decode(value),
  },
} as const;

export interface CerbosPlaygroundServiceServer extends UntypedServiceImplementation {
  playgroundValidate: handleUnaryCall<PlaygroundValidateRequest, PlaygroundValidateResponse>;
  playgroundTest: handleUnaryCall<PlaygroundTestRequest, PlaygroundTestResponse>;
  playgroundEvaluate: handleUnaryCall<PlaygroundEvaluateRequest, PlaygroundEvaluateResponse>;
  playgroundProxy: handleUnaryCall<PlaygroundProxyRequest, PlaygroundProxyResponse>;
}

export interface CerbosPlaygroundServiceClient extends Client {
  playgroundValidate(
    request: PlaygroundValidateRequest,
    callback: (error: ServiceError | null, response: PlaygroundValidateResponse) => void,
  ): ClientUnaryCall;
  playgroundValidate(
    request: PlaygroundValidateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PlaygroundValidateResponse) => void,
  ): ClientUnaryCall;
  playgroundValidate(
    request: PlaygroundValidateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PlaygroundValidateResponse) => void,
  ): ClientUnaryCall;
  playgroundTest(
    request: PlaygroundTestRequest,
    callback: (error: ServiceError | null, response: PlaygroundTestResponse) => void,
  ): ClientUnaryCall;
  playgroundTest(
    request: PlaygroundTestRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PlaygroundTestResponse) => void,
  ): ClientUnaryCall;
  playgroundTest(
    request: PlaygroundTestRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PlaygroundTestResponse) => void,
  ): ClientUnaryCall;
  playgroundEvaluate(
    request: PlaygroundEvaluateRequest,
    callback: (error: ServiceError | null, response: PlaygroundEvaluateResponse) => void,
  ): ClientUnaryCall;
  playgroundEvaluate(
    request: PlaygroundEvaluateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PlaygroundEvaluateResponse) => void,
  ): ClientUnaryCall;
  playgroundEvaluate(
    request: PlaygroundEvaluateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PlaygroundEvaluateResponse) => void,
  ): ClientUnaryCall;
  playgroundProxy(
    request: PlaygroundProxyRequest,
    callback: (error: ServiceError | null, response: PlaygroundProxyResponse) => void,
  ): ClientUnaryCall;
  playgroundProxy(
    request: PlaygroundProxyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PlaygroundProxyResponse) => void,
  ): ClientUnaryCall;
  playgroundProxy(
    request: PlaygroundProxyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PlaygroundProxyResponse) => void,
  ): ClientUnaryCall;
}

export const CerbosPlaygroundServiceClient = makeGenericClientConstructor(
  CerbosPlaygroundServiceService,
  "cerbos.svc.v1.CerbosPlaygroundService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>,
  ): CerbosPlaygroundServiceClient;
  service: typeof CerbosPlaygroundServiceService;
};
