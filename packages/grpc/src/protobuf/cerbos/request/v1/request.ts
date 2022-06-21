/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import {
  Principal,
  PlanResourcesInput_Resource,
  Resource,
} from "../../../cerbos/engine/v1/engine";
import { Policy } from "../../../cerbos/policy/v1/policy";
import { Schema } from "../../../cerbos/schema/v1/schema";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Value } from "../../../google/protobuf/struct";

export const protobufPackage = "cerbos.request.v1";

export interface PlanResourcesRequest {
  requestId: string;
  action: string;
  principal: Principal | undefined;
  resource: PlanResourcesInput_Resource | undefined;
  auxData: AuxData | undefined;
  includeMeta: boolean;
}

/** Deprecated. See CheckResourcesRequest. */
export interface CheckResourceSetRequest {
  requestId: string;
  actions: string[];
  principal: Principal | undefined;
  resource: ResourceSet | undefined;
  includeMeta: boolean;
  auxData: AuxData | undefined;
}

export interface ResourceSet {
  kind: string;
  policyVersion: string;
  instances: { [key: string]: AttributesMap };
  scope: string;
}

export interface ResourceSet_InstancesEntry {
  key: string;
  value: AttributesMap | undefined;
}

export interface AttributesMap {
  attr: { [key: string]: any | undefined };
}

export interface AttributesMap_AttrEntry {
  key: string;
  value: any | undefined;
}

/** Deprecated. See CheckResourcesRequest. */
export interface CheckResourceBatchRequest {
  requestId: string;
  principal: Principal | undefined;
  resources: CheckResourceBatchRequest_BatchEntry[];
  auxData: AuxData | undefined;
}

export interface CheckResourceBatchRequest_BatchEntry {
  actions: string[];
  resource: Resource | undefined;
}

/** Structure of the request for the check resources API call. */
export interface CheckResourcesRequest {
  requestId: string;
  includeMeta: boolean;
  principal: Principal | undefined;
  resources: CheckResourcesRequest_ResourceEntry[];
  auxData: AuxData | undefined;
}

export interface CheckResourcesRequest_ResourceEntry {
  actions: string[];
  resource: Resource | undefined;
}

export interface AuxData {
  jwt: AuxData_JWT | undefined;
}

export interface AuxData_JWT {
  token: string;
  keySetId: string;
}

export interface File {
  fileName: string;
  contents: Buffer;
}

export interface PlaygroundValidateRequest {
  playgroundId: string;
  files: File[];
}

export interface PlaygroundTestRequest {
  playgroundId: string;
  files: File[];
}

export interface PlaygroundEvaluateRequest {
  playgroundId: string;
  files: File[];
  principal: Principal | undefined;
  resource: Resource | undefined;
  actions: string[];
  auxData: AuxData | undefined;
}

export interface PlaygroundProxyRequest {
  playgroundId: string;
  files: File[];
  proxyRequest?:
    | { $case: "checkResourceSet"; checkResourceSet: CheckResourceSetRequest }
    | {
        $case: "checkResourceBatch";
        checkResourceBatch: CheckResourceBatchRequest;
      }
    | { $case: "planResources"; planResources: PlanResourcesRequest }
    | { $case: "checkResources"; checkResources: CheckResourcesRequest };
}

export interface AddOrUpdatePolicyRequest {
  policies: Policy[];
}

export interface ListAuditLogEntriesRequest {
  kind: ListAuditLogEntriesRequest_Kind;
  filter?:
    | { $case: "tail"; tail: number }
    | { $case: "between"; between: ListAuditLogEntriesRequest_TimeRange }
    | { $case: "since"; since: Duration }
    | { $case: "lookup"; lookup: string };
}

export enum ListAuditLogEntriesRequest_Kind {
  KIND_UNSPECIFIED = 0,
  KIND_ACCESS = 1,
  KIND_DECISION = 2,
}

export interface ListAuditLogEntriesRequest_TimeRange {
  start: Date | undefined;
  end: Date | undefined;
}

export interface ServerInfoRequest {}

export interface ListPoliciesRequest {}

export interface GetPolicyRequest {
  id: string[];
}

export interface AddOrUpdateSchemaRequest {
  schemas: Schema[];
}

export interface ListSchemasRequest {}

export interface GetSchemaRequest {
  id: string[];
}

export interface DeleteSchemaRequest {
  id: string[];
}

export interface ReloadStoreRequest {
  wait: boolean;
}

function createBasePlanResourcesRequest(): PlanResourcesRequest {
  return {
    requestId: "",
    action: "",
    principal: undefined,
    resource: undefined,
    auxData: undefined,
    includeMeta: false,
  };
}

export const PlanResourcesRequest = {
  encode(
    message: PlanResourcesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    if (message.resource !== undefined) {
      PlanResourcesInput_Resource.encode(
        message.resource,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.auxData !== undefined) {
      AuxData.encode(message.auxData, writer.uint32(42).fork()).ldelim();
    }
    if (message.includeMeta === true) {
      writer.uint32(48).bool(message.includeMeta);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlanResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.action = reader.string();
          break;
        case 3:
          message.principal = Principal.decode(reader, reader.uint32());
          break;
        case 4:
          message.resource = PlanResourcesInput_Resource.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.auxData = AuxData.decode(reader, reader.uint32());
          break;
        case 6:
          message.includeMeta = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseCheckResourceSetRequest(): CheckResourceSetRequest {
  return {
    requestId: "",
    actions: [],
    principal: undefined,
    resource: undefined,
    includeMeta: false,
    auxData: undefined,
  };
}

export const CheckResourceSetRequest = {
  encode(
    message: CheckResourceSetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    for (const v of message.actions) {
      writer.uint32(18).string(v!);
    }
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    if (message.resource !== undefined) {
      ResourceSet.encode(message.resource, writer.uint32(34).fork()).ldelim();
    }
    if (message.includeMeta === true) {
      writer.uint32(40).bool(message.includeMeta);
    }
    if (message.auxData !== undefined) {
      AuxData.encode(message.auxData, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourceSetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.actions.push(reader.string());
          break;
        case 3:
          message.principal = Principal.decode(reader, reader.uint32());
          break;
        case 4:
          message.resource = ResourceSet.decode(reader, reader.uint32());
          break;
        case 5:
          message.includeMeta = reader.bool();
          break;
        case 6:
          message.auxData = AuxData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseResourceSet(): ResourceSet {
  return { kind: "", policyVersion: "", instances: {}, scope: "" };
}

export const ResourceSet = {
  encode(
    message: ResourceSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.policyVersion !== "") {
      writer.uint32(18).string(message.policyVersion);
    }
    Object.entries(message.instances).forEach(([key, value]) => {
      ResourceSet_InstancesEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    if (message.scope !== "") {
      writer.uint32(34).string(message.scope);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.string();
          break;
        case 2:
          message.policyVersion = reader.string();
          break;
        case 3:
          const entry3 = ResourceSet_InstancesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.instances[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.scope = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseResourceSet_InstancesEntry(): ResourceSet_InstancesEntry {
  return { key: "", value: undefined };
}

export const ResourceSet_InstancesEntry = {
  encode(
    message: ResourceSet_InstancesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      AttributesMap.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResourceSet_InstancesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceSet_InstancesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = AttributesMap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseAttributesMap(): AttributesMap {
  return { attr: {} };
}

export const AttributesMap = {
  encode(
    message: AttributesMap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.attr).forEach(([key, value]) => {
      if (value !== undefined) {
        AttributesMap_AttrEntry.encode(
          { key: key as any, value },
          writer.uint32(10).fork()
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributesMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributesMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = AttributesMap_AttrEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.attr[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseAttributesMap_AttrEntry(): AttributesMap_AttrEntry {
  return { key: "", value: undefined };
}

export const AttributesMap_AttrEntry = {
  encode(
    message: AttributesMap_AttrEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AttributesMap_AttrEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributesMap_AttrEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseCheckResourceBatchRequest(): CheckResourceBatchRequest {
  return {
    requestId: "",
    principal: undefined,
    resources: [],
    auxData: undefined,
  };
}

export const CheckResourceBatchRequest = {
  encode(
    message: CheckResourceBatchRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.resources) {
      CheckResourceBatchRequest_BatchEntry.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.auxData !== undefined) {
      AuxData.encode(message.auxData, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourceBatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceBatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.principal = Principal.decode(reader, reader.uint32());
          break;
        case 3:
          message.resources.push(
            CheckResourceBatchRequest_BatchEntry.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.auxData = AuxData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseCheckResourceBatchRequest_BatchEntry(): CheckResourceBatchRequest_BatchEntry {
  return { actions: [], resource: undefined };
}

export const CheckResourceBatchRequest_BatchEntry = {
  encode(
    message: CheckResourceBatchRequest_BatchEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.actions) {
      writer.uint32(10).string(v!);
    }
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourceBatchRequest_BatchEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceBatchRequest_BatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actions.push(reader.string());
          break;
        case 2:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseCheckResourcesRequest(): CheckResourcesRequest {
  return {
    requestId: "",
    includeMeta: false,
    principal: undefined,
    resources: [],
    auxData: undefined,
  };
}

export const CheckResourcesRequest = {
  encode(
    message: CheckResourcesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.includeMeta === true) {
      writer.uint32(16).bool(message.includeMeta);
    }
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.resources) {
      CheckResourcesRequest_ResourceEntry.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.auxData !== undefined) {
      AuxData.encode(message.auxData, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.includeMeta = reader.bool();
          break;
        case 3:
          message.principal = Principal.decode(reader, reader.uint32());
          break;
        case 4:
          message.resources.push(
            CheckResourcesRequest_ResourceEntry.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.auxData = AuxData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseCheckResourcesRequest_ResourceEntry(): CheckResourcesRequest_ResourceEntry {
  return { actions: [], resource: undefined };
}

export const CheckResourcesRequest_ResourceEntry = {
  encode(
    message: CheckResourcesRequest_ResourceEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.actions) {
      writer.uint32(10).string(v!);
    }
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourcesRequest_ResourceEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesRequest_ResourceEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actions.push(reader.string());
          break;
        case 2:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseAuxData(): AuxData {
  return { jwt: undefined };
}

export const AuxData = {
  encode(
    message: AuxData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jwt !== undefined) {
      AuxData_JWT.encode(message.jwt, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuxData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuxData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jwt = AuxData_JWT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseAuxData_JWT(): AuxData_JWT {
  return { token: "", keySetId: "" };
}

export const AuxData_JWT = {
  encode(
    message: AuxData_JWT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.keySetId !== "") {
      writer.uint32(18).string(message.keySetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuxData_JWT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuxData_JWT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.keySetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseFile(): File {
  return { fileName: "", contents: Buffer.alloc(0) };
}

export const File = {
  encode(message: File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileName !== "") {
      writer.uint32(10).string(message.fileName);
    }
    if (message.contents.length !== 0) {
      writer.uint32(18).bytes(message.contents);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): File {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileName = reader.string();
          break;
        case 2:
          message.contents = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlaygroundValidateRequest(): PlaygroundValidateRequest {
  return { playgroundId: "", files: [] };
}

export const PlaygroundValidateRequest = {
  encode(
    message: PlaygroundValidateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.playgroundId !== "") {
      writer.uint32(10).string(message.playgroundId);
    }
    for (const v of message.files) {
      File.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlaygroundValidateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaygroundValidateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playgroundId = reader.string();
          break;
        case 2:
          message.files.push(File.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlaygroundTestRequest(): PlaygroundTestRequest {
  return { playgroundId: "", files: [] };
}

export const PlaygroundTestRequest = {
  encode(
    message: PlaygroundTestRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.playgroundId !== "") {
      writer.uint32(10).string(message.playgroundId);
    }
    for (const v of message.files) {
      File.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlaygroundTestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaygroundTestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playgroundId = reader.string();
          break;
        case 2:
          message.files.push(File.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlaygroundEvaluateRequest(): PlaygroundEvaluateRequest {
  return {
    playgroundId: "",
    files: [],
    principal: undefined,
    resource: undefined,
    actions: [],
    auxData: undefined,
  };
}

export const PlaygroundEvaluateRequest = {
  encode(
    message: PlaygroundEvaluateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.playgroundId !== "") {
      writer.uint32(10).string(message.playgroundId);
    }
    for (const v of message.files) {
      File.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.actions) {
      writer.uint32(42).string(v!);
    }
    if (message.auxData !== undefined) {
      AuxData.encode(message.auxData, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlaygroundEvaluateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaygroundEvaluateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playgroundId = reader.string();
          break;
        case 2:
          message.files.push(File.decode(reader, reader.uint32()));
          break;
        case 3:
          message.principal = Principal.decode(reader, reader.uint32());
          break;
        case 4:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        case 5:
          message.actions.push(reader.string());
          break;
        case 6:
          message.auxData = AuxData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlaygroundProxyRequest(): PlaygroundProxyRequest {
  return { playgroundId: "", files: [], proxyRequest: undefined };
}

export const PlaygroundProxyRequest = {
  encode(
    message: PlaygroundProxyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.playgroundId !== "") {
      writer.uint32(10).string(message.playgroundId);
    }
    for (const v of message.files) {
      File.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.proxyRequest?.$case === "checkResourceSet") {
      CheckResourceSetRequest.encode(
        message.proxyRequest.checkResourceSet,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.proxyRequest?.$case === "checkResourceBatch") {
      CheckResourceBatchRequest.encode(
        message.proxyRequest.checkResourceBatch,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.proxyRequest?.$case === "planResources") {
      PlanResourcesRequest.encode(
        message.proxyRequest.planResources,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.proxyRequest?.$case === "checkResources") {
      CheckResourcesRequest.encode(
        message.proxyRequest.checkResources,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlaygroundProxyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaygroundProxyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playgroundId = reader.string();
          break;
        case 2:
          message.files.push(File.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proxyRequest = {
            $case: "checkResourceSet",
            checkResourceSet: CheckResourceSetRequest.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 4:
          message.proxyRequest = {
            $case: "checkResourceBatch",
            checkResourceBatch: CheckResourceBatchRequest.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 5:
          message.proxyRequest = {
            $case: "planResources",
            planResources: PlanResourcesRequest.decode(reader, reader.uint32()),
          };
          break;
        case 6:
          message.proxyRequest = {
            $case: "checkResources",
            checkResources: CheckResourcesRequest.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseAddOrUpdatePolicyRequest(): AddOrUpdatePolicyRequest {
  return { policies: [] };
}

export const AddOrUpdatePolicyRequest = {
  encode(
    message: AddOrUpdatePolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.policies) {
      Policy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddOrUpdatePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddOrUpdatePolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policies.push(Policy.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseListAuditLogEntriesRequest(): ListAuditLogEntriesRequest {
  return { kind: 0, filter: undefined };
}

export const ListAuditLogEntriesRequest = {
  encode(
    message: ListAuditLogEntriesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.filter?.$case === "tail") {
      writer.uint32(16).uint32(message.filter.tail);
    }
    if (message.filter?.$case === "between") {
      ListAuditLogEntriesRequest_TimeRange.encode(
        message.filter.between,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.filter?.$case === "since") {
      Duration.encode(message.filter.since, writer.uint32(34).fork()).ldelim();
    }
    if (message.filter?.$case === "lookup") {
      writer.uint32(42).string(message.filter.lookup);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListAuditLogEntriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAuditLogEntriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.int32() as any;
          break;
        case 2:
          message.filter = { $case: "tail", tail: reader.uint32() };
          break;
        case 3:
          message.filter = {
            $case: "between",
            between: ListAuditLogEntriesRequest_TimeRange.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 4:
          message.filter = {
            $case: "since",
            since: Duration.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.filter = { $case: "lookup", lookup: reader.string() };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseListAuditLogEntriesRequest_TimeRange(): ListAuditLogEntriesRequest_TimeRange {
  return { start: undefined, end: undefined };
}

export const ListAuditLogEntriesRequest_TimeRange = {
  encode(
    message: ListAuditLogEntriesRequest_TimeRange,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.start !== undefined) {
      Timestamp.encode(
        toTimestamp(message.start),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.end !== undefined) {
      Timestamp.encode(
        toTimestamp(message.end),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListAuditLogEntriesRequest_TimeRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAuditLogEntriesRequest_TimeRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.end = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseServerInfoRequest(): ServerInfoRequest {
  return {};
}

export const ServerInfoRequest = {
  encode(
    _: ServerInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseListPoliciesRequest(): ListPoliciesRequest {
  return {};
}

export const ListPoliciesRequest = {
  encode(
    _: ListPoliciesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPoliciesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPoliciesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseGetPolicyRequest(): GetPolicyRequest {
  return { id: [] };
}

export const GetPolicyRequest = {
  encode(
    message: GetPolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.id) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseAddOrUpdateSchemaRequest(): AddOrUpdateSchemaRequest {
  return { schemas: [] };
}

export const AddOrUpdateSchemaRequest = {
  encode(
    message: AddOrUpdateSchemaRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.schemas) {
      Schema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddOrUpdateSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddOrUpdateSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemas.push(Schema.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseListSchemasRequest(): ListSchemasRequest {
  return {};
}

export const ListSchemasRequest = {
  encode(
    _: ListSchemasRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSchemasRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSchemasRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseGetSchemaRequest(): GetSchemaRequest {
  return { id: [] };
}

export const GetSchemaRequest = {
  encode(
    message: GetSchemaRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.id) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseDeleteSchemaRequest(): DeleteSchemaRequest {
  return { id: [] };
}

export const DeleteSchemaRequest = {
  encode(
    message: DeleteSchemaRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.id) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseReloadStoreRequest(): ReloadStoreRequest {
  return { wait: false };
}

export const ReloadStoreRequest = {
  encode(
    message: ReloadStoreRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.wait === true) {
      writer.uint32(8).bool(message.wait);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReloadStoreRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReloadStoreRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wait = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}
