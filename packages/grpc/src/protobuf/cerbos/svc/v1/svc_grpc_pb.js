// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2021-2022 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0
//
'use strict';
var grpc = require('@grpc/grpc-js');
var cerbos_request_v1_request_pb = require('../../../cerbos/request/v1/request_pb.js');
var cerbos_response_v1_response_pb = require('../../../cerbos/response/v1/response_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');

function serialize_cerbos_request_v1_AddOrUpdatePolicyRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.AddOrUpdatePolicyRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.AddOrUpdatePolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_AddOrUpdatePolicyRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.AddOrUpdatePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_AddOrUpdateSchemaRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.AddOrUpdateSchemaRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.AddOrUpdateSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_AddOrUpdateSchemaRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.AddOrUpdateSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_CheckResourceBatchRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.CheckResourceBatchRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.CheckResourceBatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_CheckResourceBatchRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.CheckResourceBatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_CheckResourceSetRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.CheckResourceSetRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.CheckResourceSetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_CheckResourceSetRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.CheckResourceSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_CheckResourcesRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.CheckResourcesRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.CheckResourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_CheckResourcesRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.CheckResourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_DeleteSchemaRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.DeleteSchemaRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.DeleteSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_DeleteSchemaRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.DeleteSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_GetPolicyRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.GetPolicyRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.GetPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_GetPolicyRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.GetPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_GetSchemaRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.GetSchemaRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.GetSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_GetSchemaRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.GetSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_ListAuditLogEntriesRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.ListAuditLogEntriesRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.ListAuditLogEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_ListAuditLogEntriesRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.ListAuditLogEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_ListPoliciesRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.ListPoliciesRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.ListPoliciesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_ListPoliciesRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.ListPoliciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_ListSchemasRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.ListSchemasRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.ListSchemasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_ListSchemasRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.ListSchemasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_PlanResourcesRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.PlanResourcesRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.PlanResourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_PlanResourcesRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.PlanResourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_PlaygroundEvaluateRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.PlaygroundEvaluateRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.PlaygroundEvaluateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_PlaygroundEvaluateRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.PlaygroundEvaluateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_PlaygroundProxyRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.PlaygroundProxyRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.PlaygroundProxyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_PlaygroundProxyRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.PlaygroundProxyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_PlaygroundTestRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.PlaygroundTestRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.PlaygroundTestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_PlaygroundTestRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.PlaygroundTestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_PlaygroundValidateRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.PlaygroundValidateRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.PlaygroundValidateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_PlaygroundValidateRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.PlaygroundValidateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_ReloadStoreRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.ReloadStoreRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.ReloadStoreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_ReloadStoreRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.ReloadStoreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_request_v1_ServerInfoRequest(arg) {
  if (!(arg instanceof cerbos_request_v1_request_pb.ServerInfoRequest)) {
    throw new Error('Expected argument of type cerbos.request.v1.ServerInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_request_v1_ServerInfoRequest(buffer_arg) {
  return cerbos_request_v1_request_pb.ServerInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_AddOrUpdatePolicyResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.AddOrUpdatePolicyResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.AddOrUpdatePolicyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_AddOrUpdatePolicyResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.AddOrUpdatePolicyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_AddOrUpdateSchemaResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.AddOrUpdateSchemaResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.AddOrUpdateSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_AddOrUpdateSchemaResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.AddOrUpdateSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_CheckResourceBatchResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.CheckResourceBatchResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.CheckResourceBatchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_CheckResourceBatchResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.CheckResourceBatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_CheckResourceSetResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.CheckResourceSetResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.CheckResourceSetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_CheckResourceSetResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.CheckResourceSetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_CheckResourcesResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.CheckResourcesResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.CheckResourcesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_CheckResourcesResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.CheckResourcesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_DeleteSchemaResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.DeleteSchemaResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.DeleteSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_DeleteSchemaResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.DeleteSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_GetPolicyResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.GetPolicyResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.GetPolicyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_GetPolicyResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.GetPolicyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_GetSchemaResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.GetSchemaResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.GetSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_GetSchemaResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.GetSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_ListAuditLogEntriesResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.ListAuditLogEntriesResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.ListAuditLogEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_ListAuditLogEntriesResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.ListAuditLogEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_ListPoliciesResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.ListPoliciesResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.ListPoliciesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_ListPoliciesResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.ListPoliciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_ListSchemasResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.ListSchemasResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.ListSchemasResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_ListSchemasResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.ListSchemasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_PlanResourcesResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.PlanResourcesResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.PlanResourcesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_PlanResourcesResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.PlanResourcesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_PlaygroundEvaluateResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.PlaygroundEvaluateResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.PlaygroundEvaluateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_PlaygroundEvaluateResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.PlaygroundEvaluateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_PlaygroundProxyResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.PlaygroundProxyResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.PlaygroundProxyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_PlaygroundProxyResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.PlaygroundProxyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_PlaygroundTestResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.PlaygroundTestResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.PlaygroundTestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_PlaygroundTestResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.PlaygroundTestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_PlaygroundValidateResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.PlaygroundValidateResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.PlaygroundValidateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_PlaygroundValidateResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.PlaygroundValidateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_ReloadStoreResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.ReloadStoreResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.ReloadStoreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_ReloadStoreResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.ReloadStoreResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cerbos_response_v1_ServerInfoResponse(arg) {
  if (!(arg instanceof cerbos_response_v1_response_pb.ServerInfoResponse)) {
    throw new Error('Expected argument of type cerbos.response.v1.ServerInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cerbos_response_v1_ServerInfoResponse(buffer_arg) {
  return cerbos_response_v1_response_pb.ServerInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CerbosServiceService = exports.CerbosServiceService = {
  checkResourceSet: {
    path: '/cerbos.svc.v1.CerbosService/CheckResourceSet',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.CheckResourceSetRequest,
    responseType: cerbos_response_v1_response_pb.CheckResourceSetResponse,
    requestSerialize: serialize_cerbos_request_v1_CheckResourceSetRequest,
    requestDeserialize: deserialize_cerbos_request_v1_CheckResourceSetRequest,
    responseSerialize: serialize_cerbos_response_v1_CheckResourceSetResponse,
    responseDeserialize: deserialize_cerbos_response_v1_CheckResourceSetResponse,
  },
  checkResourceBatch: {
    path: '/cerbos.svc.v1.CerbosService/CheckResourceBatch',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.CheckResourceBatchRequest,
    responseType: cerbos_response_v1_response_pb.CheckResourceBatchResponse,
    requestSerialize: serialize_cerbos_request_v1_CheckResourceBatchRequest,
    requestDeserialize: deserialize_cerbos_request_v1_CheckResourceBatchRequest,
    responseSerialize: serialize_cerbos_response_v1_CheckResourceBatchResponse,
    responseDeserialize: deserialize_cerbos_response_v1_CheckResourceBatchResponse,
  },
  checkResources: {
    path: '/cerbos.svc.v1.CerbosService/CheckResources',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.CheckResourcesRequest,
    responseType: cerbos_response_v1_response_pb.CheckResourcesResponse,
    requestSerialize: serialize_cerbos_request_v1_CheckResourcesRequest,
    requestDeserialize: deserialize_cerbos_request_v1_CheckResourcesRequest,
    responseSerialize: serialize_cerbos_response_v1_CheckResourcesResponse,
    responseDeserialize: deserialize_cerbos_response_v1_CheckResourcesResponse,
  },
  serverInfo: {
    path: '/cerbos.svc.v1.CerbosService/ServerInfo',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.ServerInfoRequest,
    responseType: cerbos_response_v1_response_pb.ServerInfoResponse,
    requestSerialize: serialize_cerbos_request_v1_ServerInfoRequest,
    requestDeserialize: deserialize_cerbos_request_v1_ServerInfoRequest,
    responseSerialize: serialize_cerbos_response_v1_ServerInfoResponse,
    responseDeserialize: deserialize_cerbos_response_v1_ServerInfoResponse,
  },
  planResources: {
    path: '/cerbos.svc.v1.CerbosService/PlanResources',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.PlanResourcesRequest,
    responseType: cerbos_response_v1_response_pb.PlanResourcesResponse,
    requestSerialize: serialize_cerbos_request_v1_PlanResourcesRequest,
    requestDeserialize: deserialize_cerbos_request_v1_PlanResourcesRequest,
    responseSerialize: serialize_cerbos_response_v1_PlanResourcesResponse,
    responseDeserialize: deserialize_cerbos_response_v1_PlanResourcesResponse,
  },
};

exports.CerbosServiceClient = grpc.makeGenericClientConstructor(CerbosServiceService);
var CerbosAdminServiceService = exports.CerbosAdminServiceService = {
  addOrUpdatePolicy: {
    path: '/cerbos.svc.v1.CerbosAdminService/AddOrUpdatePolicy',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.AddOrUpdatePolicyRequest,
    responseType: cerbos_response_v1_response_pb.AddOrUpdatePolicyResponse,
    requestSerialize: serialize_cerbos_request_v1_AddOrUpdatePolicyRequest,
    requestDeserialize: deserialize_cerbos_request_v1_AddOrUpdatePolicyRequest,
    responseSerialize: serialize_cerbos_response_v1_AddOrUpdatePolicyResponse,
    responseDeserialize: deserialize_cerbos_response_v1_AddOrUpdatePolicyResponse,
  },
  listPolicies: {
    path: '/cerbos.svc.v1.CerbosAdminService/ListPolicies',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.ListPoliciesRequest,
    responseType: cerbos_response_v1_response_pb.ListPoliciesResponse,
    requestSerialize: serialize_cerbos_request_v1_ListPoliciesRequest,
    requestDeserialize: deserialize_cerbos_request_v1_ListPoliciesRequest,
    responseSerialize: serialize_cerbos_response_v1_ListPoliciesResponse,
    responseDeserialize: deserialize_cerbos_response_v1_ListPoliciesResponse,
  },
  getPolicy: {
    path: '/cerbos.svc.v1.CerbosAdminService/GetPolicy',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.GetPolicyRequest,
    responseType: cerbos_response_v1_response_pb.GetPolicyResponse,
    requestSerialize: serialize_cerbos_request_v1_GetPolicyRequest,
    requestDeserialize: deserialize_cerbos_request_v1_GetPolicyRequest,
    responseSerialize: serialize_cerbos_response_v1_GetPolicyResponse,
    responseDeserialize: deserialize_cerbos_response_v1_GetPolicyResponse,
  },
  listAuditLogEntries: {
    path: '/cerbos.svc.v1.CerbosAdminService/ListAuditLogEntries',
    requestStream: false,
    responseStream: true,
    requestType: cerbos_request_v1_request_pb.ListAuditLogEntriesRequest,
    responseType: cerbos_response_v1_response_pb.ListAuditLogEntriesResponse,
    requestSerialize: serialize_cerbos_request_v1_ListAuditLogEntriesRequest,
    requestDeserialize: deserialize_cerbos_request_v1_ListAuditLogEntriesRequest,
    responseSerialize: serialize_cerbos_response_v1_ListAuditLogEntriesResponse,
    responseDeserialize: deserialize_cerbos_response_v1_ListAuditLogEntriesResponse,
  },
  addOrUpdateSchema: {
    path: '/cerbos.svc.v1.CerbosAdminService/AddOrUpdateSchema',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.AddOrUpdateSchemaRequest,
    responseType: cerbos_response_v1_response_pb.AddOrUpdateSchemaResponse,
    requestSerialize: serialize_cerbos_request_v1_AddOrUpdateSchemaRequest,
    requestDeserialize: deserialize_cerbos_request_v1_AddOrUpdateSchemaRequest,
    responseSerialize: serialize_cerbos_response_v1_AddOrUpdateSchemaResponse,
    responseDeserialize: deserialize_cerbos_response_v1_AddOrUpdateSchemaResponse,
  },
  listSchemas: {
    path: '/cerbos.svc.v1.CerbosAdminService/ListSchemas',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.ListSchemasRequest,
    responseType: cerbos_response_v1_response_pb.ListSchemasResponse,
    requestSerialize: serialize_cerbos_request_v1_ListSchemasRequest,
    requestDeserialize: deserialize_cerbos_request_v1_ListSchemasRequest,
    responseSerialize: serialize_cerbos_response_v1_ListSchemasResponse,
    responseDeserialize: deserialize_cerbos_response_v1_ListSchemasResponse,
  },
  getSchema: {
    path: '/cerbos.svc.v1.CerbosAdminService/GetSchema',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.GetSchemaRequest,
    responseType: cerbos_response_v1_response_pb.GetSchemaResponse,
    requestSerialize: serialize_cerbos_request_v1_GetSchemaRequest,
    requestDeserialize: deserialize_cerbos_request_v1_GetSchemaRequest,
    responseSerialize: serialize_cerbos_response_v1_GetSchemaResponse,
    responseDeserialize: deserialize_cerbos_response_v1_GetSchemaResponse,
  },
  deleteSchema: {
    path: '/cerbos.svc.v1.CerbosAdminService/DeleteSchema',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.DeleteSchemaRequest,
    responseType: cerbos_response_v1_response_pb.DeleteSchemaResponse,
    requestSerialize: serialize_cerbos_request_v1_DeleteSchemaRequest,
    requestDeserialize: deserialize_cerbos_request_v1_DeleteSchemaRequest,
    responseSerialize: serialize_cerbos_response_v1_DeleteSchemaResponse,
    responseDeserialize: deserialize_cerbos_response_v1_DeleteSchemaResponse,
  },
  reloadStore: {
    path: '/cerbos.svc.v1.CerbosAdminService/ReloadStore',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.ReloadStoreRequest,
    responseType: cerbos_response_v1_response_pb.ReloadStoreResponse,
    requestSerialize: serialize_cerbos_request_v1_ReloadStoreRequest,
    requestDeserialize: deserialize_cerbos_request_v1_ReloadStoreRequest,
    responseSerialize: serialize_cerbos_response_v1_ReloadStoreResponse,
    responseDeserialize: deserialize_cerbos_response_v1_ReloadStoreResponse,
  },
};

exports.CerbosAdminServiceClient = grpc.makeGenericClientConstructor(CerbosAdminServiceService);
var CerbosPlaygroundServiceService = exports.CerbosPlaygroundServiceService = {
  playgroundValidate: {
    path: '/cerbos.svc.v1.CerbosPlaygroundService/PlaygroundValidate',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.PlaygroundValidateRequest,
    responseType: cerbos_response_v1_response_pb.PlaygroundValidateResponse,
    requestSerialize: serialize_cerbos_request_v1_PlaygroundValidateRequest,
    requestDeserialize: deserialize_cerbos_request_v1_PlaygroundValidateRequest,
    responseSerialize: serialize_cerbos_response_v1_PlaygroundValidateResponse,
    responseDeserialize: deserialize_cerbos_response_v1_PlaygroundValidateResponse,
  },
  playgroundTest: {
    path: '/cerbos.svc.v1.CerbosPlaygroundService/PlaygroundTest',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.PlaygroundTestRequest,
    responseType: cerbos_response_v1_response_pb.PlaygroundTestResponse,
    requestSerialize: serialize_cerbos_request_v1_PlaygroundTestRequest,
    requestDeserialize: deserialize_cerbos_request_v1_PlaygroundTestRequest,
    responseSerialize: serialize_cerbos_response_v1_PlaygroundTestResponse,
    responseDeserialize: deserialize_cerbos_response_v1_PlaygroundTestResponse,
  },
  playgroundEvaluate: {
    path: '/cerbos.svc.v1.CerbosPlaygroundService/PlaygroundEvaluate',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.PlaygroundEvaluateRequest,
    responseType: cerbos_response_v1_response_pb.PlaygroundEvaluateResponse,
    requestSerialize: serialize_cerbos_request_v1_PlaygroundEvaluateRequest,
    requestDeserialize: deserialize_cerbos_request_v1_PlaygroundEvaluateRequest,
    responseSerialize: serialize_cerbos_response_v1_PlaygroundEvaluateResponse,
    responseDeserialize: deserialize_cerbos_response_v1_PlaygroundEvaluateResponse,
  },
  playgroundProxy: {
    path: '/cerbos.svc.v1.CerbosPlaygroundService/PlaygroundProxy',
    requestStream: false,
    responseStream: false,
    requestType: cerbos_request_v1_request_pb.PlaygroundProxyRequest,
    responseType: cerbos_response_v1_response_pb.PlaygroundProxyResponse,
    requestSerialize: serialize_cerbos_request_v1_PlaygroundProxyRequest,
    requestDeserialize: deserialize_cerbos_request_v1_PlaygroundProxyRequest,
    responseSerialize: serialize_cerbos_response_v1_PlaygroundProxyResponse,
    responseDeserialize: deserialize_cerbos_response_v1_PlaygroundProxyResponse,
  },
};

exports.CerbosPlaygroundServiceClient = grpc.makeGenericClientConstructor(CerbosPlaygroundServiceService);
