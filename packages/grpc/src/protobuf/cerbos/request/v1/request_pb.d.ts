// package: cerbos.request.v1
// file: cerbos/request/v1/request.proto

import * as jspb from "google-protobuf";
import * as cerbos_engine_v1_engine_pb from "../../../cerbos/engine/v1/engine_pb";
import * as cerbos_policy_v1_policy_pb from "../../../cerbos/policy/v1/policy_pb";
import * as cerbos_schema_v1_schema_pb from "../../../cerbos/schema/v1/schema_pb";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class PlanResourcesRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  hasPrincipal(): boolean;
  clearPrincipal(): void;
  getPrincipal(): cerbos_engine_v1_engine_pb.Principal | undefined;
  setPrincipal(value?: cerbos_engine_v1_engine_pb.Principal): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): cerbos_engine_v1_engine_pb.PlanResourcesRequest.Resource | undefined;
  setResource(value?: cerbos_engine_v1_engine_pb.PlanResourcesRequest.Resource): void;

  hasAuxData(): boolean;
  clearAuxData(): void;
  getAuxData(): AuxData | undefined;
  setAuxData(value?: AuxData): void;

  getIncludeMeta(): boolean;
  setIncludeMeta(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanResourcesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlanResourcesRequest): PlanResourcesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanResourcesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanResourcesRequest;
  static deserializeBinaryFromReader(message: PlanResourcesRequest, reader: jspb.BinaryReader): PlanResourcesRequest;
}

export namespace PlanResourcesRequest {
  export type AsObject = {
    requestId: string,
    action: string,
    principal?: cerbos_engine_v1_engine_pb.Principal.AsObject,
    resource?: cerbos_engine_v1_engine_pb.PlanResourcesRequest.Resource.AsObject,
    auxData?: AuxData.AsObject,
    includeMeta: boolean,
  }
}

export class CheckResourceSetRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  clearActionsList(): void;
  getActionsList(): Array<string>;
  setActionsList(value: Array<string>): void;
  addActions(value: string, index?: number): string;

  hasPrincipal(): boolean;
  clearPrincipal(): void;
  getPrincipal(): cerbos_engine_v1_engine_pb.Principal | undefined;
  setPrincipal(value?: cerbos_engine_v1_engine_pb.Principal): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): ResourceSet | undefined;
  setResource(value?: ResourceSet): void;

  getIncludeMeta(): boolean;
  setIncludeMeta(value: boolean): void;

  hasAuxData(): boolean;
  clearAuxData(): void;
  getAuxData(): AuxData | undefined;
  setAuxData(value?: AuxData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResourceSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResourceSetRequest): CheckResourceSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckResourceSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResourceSetRequest;
  static deserializeBinaryFromReader(message: CheckResourceSetRequest, reader: jspb.BinaryReader): CheckResourceSetRequest;
}

export namespace CheckResourceSetRequest {
  export type AsObject = {
    requestId: string,
    actionsList: Array<string>,
    principal?: cerbos_engine_v1_engine_pb.Principal.AsObject,
    resource?: ResourceSet.AsObject,
    includeMeta: boolean,
    auxData?: AuxData.AsObject,
  }
}

export class ResourceSet extends jspb.Message {
  getKind(): string;
  setKind(value: string): void;

  getPolicyVersion(): string;
  setPolicyVersion(value: string): void;

  getInstancesMap(): jspb.Map<string, AttributesMap>;
  clearInstancesMap(): void;
  getScope(): string;
  setScope(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceSet.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceSet): ResourceSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceSet;
  static deserializeBinaryFromReader(message: ResourceSet, reader: jspb.BinaryReader): ResourceSet;
}

export namespace ResourceSet {
  export type AsObject = {
    kind: string,
    policyVersion: string,
    instancesMap: Array<[string, AttributesMap.AsObject]>,
    scope: string,
  }
}

export class AttributesMap extends jspb.Message {
  getAttrMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearAttrMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributesMap.AsObject;
  static toObject(includeInstance: boolean, msg: AttributesMap): AttributesMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttributesMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributesMap;
  static deserializeBinaryFromReader(message: AttributesMap, reader: jspb.BinaryReader): AttributesMap;
}

export namespace AttributesMap {
  export type AsObject = {
    attrMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

export class CheckResourceBatchRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  hasPrincipal(): boolean;
  clearPrincipal(): void;
  getPrincipal(): cerbos_engine_v1_engine_pb.Principal | undefined;
  setPrincipal(value?: cerbos_engine_v1_engine_pb.Principal): void;

  clearResourcesList(): void;
  getResourcesList(): Array<CheckResourceBatchRequest.BatchEntry>;
  setResourcesList(value: Array<CheckResourceBatchRequest.BatchEntry>): void;
  addResources(value?: CheckResourceBatchRequest.BatchEntry, index?: number): CheckResourceBatchRequest.BatchEntry;

  hasAuxData(): boolean;
  clearAuxData(): void;
  getAuxData(): AuxData | undefined;
  setAuxData(value?: AuxData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResourceBatchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResourceBatchRequest): CheckResourceBatchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckResourceBatchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResourceBatchRequest;
  static deserializeBinaryFromReader(message: CheckResourceBatchRequest, reader: jspb.BinaryReader): CheckResourceBatchRequest;
}

export namespace CheckResourceBatchRequest {
  export type AsObject = {
    requestId: string,
    principal?: cerbos_engine_v1_engine_pb.Principal.AsObject,
    resourcesList: Array<CheckResourceBatchRequest.BatchEntry.AsObject>,
    auxData?: AuxData.AsObject,
  }

  export class BatchEntry extends jspb.Message {
    clearActionsList(): void;
    getActionsList(): Array<string>;
    setActionsList(value: Array<string>): void;
    addActions(value: string, index?: number): string;

    hasResource(): boolean;
    clearResource(): void;
    getResource(): cerbos_engine_v1_engine_pb.Resource | undefined;
    setResource(value?: cerbos_engine_v1_engine_pb.Resource): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchEntry.AsObject;
    static toObject(includeInstance: boolean, msg: BatchEntry): BatchEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchEntry;
    static deserializeBinaryFromReader(message: BatchEntry, reader: jspb.BinaryReader): BatchEntry;
  }

  export namespace BatchEntry {
    export type AsObject = {
      actionsList: Array<string>,
      resource?: cerbos_engine_v1_engine_pb.Resource.AsObject,
    }
  }
}

export class CheckResourcesRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getIncludeMeta(): boolean;
  setIncludeMeta(value: boolean): void;

  hasPrincipal(): boolean;
  clearPrincipal(): void;
  getPrincipal(): cerbos_engine_v1_engine_pb.Principal | undefined;
  setPrincipal(value?: cerbos_engine_v1_engine_pb.Principal): void;

  clearResourcesList(): void;
  getResourcesList(): Array<CheckResourcesRequest.ResourceEntry>;
  setResourcesList(value: Array<CheckResourcesRequest.ResourceEntry>): void;
  addResources(value?: CheckResourcesRequest.ResourceEntry, index?: number): CheckResourcesRequest.ResourceEntry;

  hasAuxData(): boolean;
  clearAuxData(): void;
  getAuxData(): AuxData | undefined;
  setAuxData(value?: AuxData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResourcesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResourcesRequest): CheckResourcesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckResourcesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResourcesRequest;
  static deserializeBinaryFromReader(message: CheckResourcesRequest, reader: jspb.BinaryReader): CheckResourcesRequest;
}

export namespace CheckResourcesRequest {
  export type AsObject = {
    requestId: string,
    includeMeta: boolean,
    principal?: cerbos_engine_v1_engine_pb.Principal.AsObject,
    resourcesList: Array<CheckResourcesRequest.ResourceEntry.AsObject>,
    auxData?: AuxData.AsObject,
  }

  export class ResourceEntry extends jspb.Message {
    clearActionsList(): void;
    getActionsList(): Array<string>;
    setActionsList(value: Array<string>): void;
    addActions(value: string, index?: number): string;

    hasResource(): boolean;
    clearResource(): void;
    getResource(): cerbos_engine_v1_engine_pb.Resource | undefined;
    setResource(value?: cerbos_engine_v1_engine_pb.Resource): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourceEntry.AsObject;
    static toObject(includeInstance: boolean, msg: ResourceEntry): ResourceEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourceEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourceEntry;
    static deserializeBinaryFromReader(message: ResourceEntry, reader: jspb.BinaryReader): ResourceEntry;
  }

  export namespace ResourceEntry {
    export type AsObject = {
      actionsList: Array<string>,
      resource?: cerbos_engine_v1_engine_pb.Resource.AsObject,
    }
  }
}

export class AuxData extends jspb.Message {
  hasJwt(): boolean;
  clearJwt(): void;
  getJwt(): AuxData.JWT | undefined;
  setJwt(value?: AuxData.JWT): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuxData.AsObject;
  static toObject(includeInstance: boolean, msg: AuxData): AuxData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuxData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuxData;
  static deserializeBinaryFromReader(message: AuxData, reader: jspb.BinaryReader): AuxData;
}

export namespace AuxData {
  export type AsObject = {
    jwt?: AuxData.JWT.AsObject,
  }

  export class JWT extends jspb.Message {
    getToken(): string;
    setToken(value: string): void;

    getKeySetId(): string;
    setKeySetId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JWT.AsObject;
    static toObject(includeInstance: boolean, msg: JWT): JWT.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JWT, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JWT;
    static deserializeBinaryFromReader(message: JWT, reader: jspb.BinaryReader): JWT;
  }

  export namespace JWT {
    export type AsObject = {
      token: string,
      keySetId: string,
    }
  }
}

export class File extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): void;

  getContents(): Uint8Array | string;
  getContents_asU8(): Uint8Array;
  getContents_asB64(): string;
  setContents(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): File.AsObject;
  static toObject(includeInstance: boolean, msg: File): File.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): File;
  static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
  export type AsObject = {
    fileName: string,
    contents: Uint8Array | string,
  }
}

export class PlaygroundValidateRequest extends jspb.Message {
  getPlaygroundId(): string;
  setPlaygroundId(value: string): void;

  clearFilesList(): void;
  getFilesList(): Array<File>;
  setFilesList(value: Array<File>): void;
  addFiles(value?: File, index?: number): File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaygroundValidateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlaygroundValidateRequest): PlaygroundValidateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaygroundValidateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaygroundValidateRequest;
  static deserializeBinaryFromReader(message: PlaygroundValidateRequest, reader: jspb.BinaryReader): PlaygroundValidateRequest;
}

export namespace PlaygroundValidateRequest {
  export type AsObject = {
    playgroundId: string,
    filesList: Array<File.AsObject>,
  }
}

export class PlaygroundTestRequest extends jspb.Message {
  getPlaygroundId(): string;
  setPlaygroundId(value: string): void;

  clearFilesList(): void;
  getFilesList(): Array<File>;
  setFilesList(value: Array<File>): void;
  addFiles(value?: File, index?: number): File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaygroundTestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlaygroundTestRequest): PlaygroundTestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaygroundTestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaygroundTestRequest;
  static deserializeBinaryFromReader(message: PlaygroundTestRequest, reader: jspb.BinaryReader): PlaygroundTestRequest;
}

export namespace PlaygroundTestRequest {
  export type AsObject = {
    playgroundId: string,
    filesList: Array<File.AsObject>,
  }
}

export class PlaygroundEvaluateRequest extends jspb.Message {
  getPlaygroundId(): string;
  setPlaygroundId(value: string): void;

  clearFilesList(): void;
  getFilesList(): Array<File>;
  setFilesList(value: Array<File>): void;
  addFiles(value?: File, index?: number): File;

  hasPrincipal(): boolean;
  clearPrincipal(): void;
  getPrincipal(): cerbos_engine_v1_engine_pb.Principal | undefined;
  setPrincipal(value?: cerbos_engine_v1_engine_pb.Principal): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): cerbos_engine_v1_engine_pb.Resource | undefined;
  setResource(value?: cerbos_engine_v1_engine_pb.Resource): void;

  clearActionsList(): void;
  getActionsList(): Array<string>;
  setActionsList(value: Array<string>): void;
  addActions(value: string, index?: number): string;

  hasAuxData(): boolean;
  clearAuxData(): void;
  getAuxData(): AuxData | undefined;
  setAuxData(value?: AuxData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaygroundEvaluateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlaygroundEvaluateRequest): PlaygroundEvaluateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaygroundEvaluateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaygroundEvaluateRequest;
  static deserializeBinaryFromReader(message: PlaygroundEvaluateRequest, reader: jspb.BinaryReader): PlaygroundEvaluateRequest;
}

export namespace PlaygroundEvaluateRequest {
  export type AsObject = {
    playgroundId: string,
    filesList: Array<File.AsObject>,
    principal?: cerbos_engine_v1_engine_pb.Principal.AsObject,
    resource?: cerbos_engine_v1_engine_pb.Resource.AsObject,
    actionsList: Array<string>,
    auxData?: AuxData.AsObject,
  }
}

export class PlaygroundProxyRequest extends jspb.Message {
  getPlaygroundId(): string;
  setPlaygroundId(value: string): void;

  clearFilesList(): void;
  getFilesList(): Array<File>;
  setFilesList(value: Array<File>): void;
  addFiles(value?: File, index?: number): File;

  hasCheckResourceSet(): boolean;
  clearCheckResourceSet(): void;
  getCheckResourceSet(): CheckResourceSetRequest | undefined;
  setCheckResourceSet(value?: CheckResourceSetRequest): void;

  hasCheckResourceBatch(): boolean;
  clearCheckResourceBatch(): void;
  getCheckResourceBatch(): CheckResourceBatchRequest | undefined;
  setCheckResourceBatch(value?: CheckResourceBatchRequest): void;

  hasPlanResources(): boolean;
  clearPlanResources(): void;
  getPlanResources(): PlanResourcesRequest | undefined;
  setPlanResources(value?: PlanResourcesRequest): void;

  hasCheckResources(): boolean;
  clearCheckResources(): void;
  getCheckResources(): CheckResourcesRequest | undefined;
  setCheckResources(value?: CheckResourcesRequest): void;

  getProxyRequestCase(): PlaygroundProxyRequest.ProxyRequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaygroundProxyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlaygroundProxyRequest): PlaygroundProxyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaygroundProxyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaygroundProxyRequest;
  static deserializeBinaryFromReader(message: PlaygroundProxyRequest, reader: jspb.BinaryReader): PlaygroundProxyRequest;
}

export namespace PlaygroundProxyRequest {
  export type AsObject = {
    playgroundId: string,
    filesList: Array<File.AsObject>,
    checkResourceSet?: CheckResourceSetRequest.AsObject,
    checkResourceBatch?: CheckResourceBatchRequest.AsObject,
    planResources?: PlanResourcesRequest.AsObject,
    checkResources?: CheckResourcesRequest.AsObject,
  }

  export enum ProxyRequestCase {
    PROXY_REQUEST_NOT_SET = 0,
    CHECK_RESOURCE_SET = 3,
    CHECK_RESOURCE_BATCH = 4,
    PLAN_RESOURCES = 5,
    CHECK_RESOURCES = 6,
  }
}

export class AddOrUpdatePolicyRequest extends jspb.Message {
  clearPoliciesList(): void;
  getPoliciesList(): Array<cerbos_policy_v1_policy_pb.Policy>;
  setPoliciesList(value: Array<cerbos_policy_v1_policy_pb.Policy>): void;
  addPolicies(value?: cerbos_policy_v1_policy_pb.Policy, index?: number): cerbos_policy_v1_policy_pb.Policy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOrUpdatePolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddOrUpdatePolicyRequest): AddOrUpdatePolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddOrUpdatePolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOrUpdatePolicyRequest;
  static deserializeBinaryFromReader(message: AddOrUpdatePolicyRequest, reader: jspb.BinaryReader): AddOrUpdatePolicyRequest;
}

export namespace AddOrUpdatePolicyRequest {
  export type AsObject = {
    policiesList: Array<cerbos_policy_v1_policy_pb.Policy.AsObject>,
  }
}

export class ListAuditLogEntriesRequest extends jspb.Message {
  getKind(): ListAuditLogEntriesRequest.KindMap[keyof ListAuditLogEntriesRequest.KindMap];
  setKind(value: ListAuditLogEntriesRequest.KindMap[keyof ListAuditLogEntriesRequest.KindMap]): void;

  hasTail(): boolean;
  clearTail(): void;
  getTail(): number;
  setTail(value: number): void;

  hasBetween(): boolean;
  clearBetween(): void;
  getBetween(): ListAuditLogEntriesRequest.TimeRange | undefined;
  setBetween(value?: ListAuditLogEntriesRequest.TimeRange): void;

  hasSince(): boolean;
  clearSince(): void;
  getSince(): google_protobuf_duration_pb.Duration | undefined;
  setSince(value?: google_protobuf_duration_pb.Duration): void;

  hasLookup(): boolean;
  clearLookup(): void;
  getLookup(): string;
  setLookup(value: string): void;

  getFilterCase(): ListAuditLogEntriesRequest.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuditLogEntriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuditLogEntriesRequest): ListAuditLogEntriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAuditLogEntriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuditLogEntriesRequest;
  static deserializeBinaryFromReader(message: ListAuditLogEntriesRequest, reader: jspb.BinaryReader): ListAuditLogEntriesRequest;
}

export namespace ListAuditLogEntriesRequest {
  export type AsObject = {
    kind: ListAuditLogEntriesRequest.KindMap[keyof ListAuditLogEntriesRequest.KindMap],
    tail: number,
    between?: ListAuditLogEntriesRequest.TimeRange.AsObject,
    since?: google_protobuf_duration_pb.Duration.AsObject,
    lookup: string,
  }

  export class TimeRange extends jspb.Message {
    hasStart(): boolean;
    clearStart(): void;
    getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeRange.AsObject;
    static toObject(includeInstance: boolean, msg: TimeRange): TimeRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeRange;
    static deserializeBinaryFromReader(message: TimeRange, reader: jspb.BinaryReader): TimeRange;
  }

  export namespace TimeRange {
    export type AsObject = {
      start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export interface KindMap {
    KIND_UNSPECIFIED: 0;
    KIND_ACCESS: 1;
    KIND_DECISION: 2;
  }

  export const Kind: KindMap;

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    TAIL = 2,
    BETWEEN = 3,
    SINCE = 4,
    LOOKUP = 5,
  }
}

export class ServerInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerInfoRequest): ServerInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerInfoRequest;
  static deserializeBinaryFromReader(message: ServerInfoRequest, reader: jspb.BinaryReader): ServerInfoRequest;
}

export namespace ServerInfoRequest {
  export type AsObject = {
  }
}

export class ListPoliciesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPoliciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPoliciesRequest): ListPoliciesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPoliciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPoliciesRequest;
  static deserializeBinaryFromReader(message: ListPoliciesRequest, reader: jspb.BinaryReader): ListPoliciesRequest;
}

export namespace ListPoliciesRequest {
  export type AsObject = {
  }
}

export class GetPolicyRequest extends jspb.Message {
  clearIdList(): void;
  getIdList(): Array<string>;
  setIdList(value: Array<string>): void;
  addId(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPolicyRequest): GetPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPolicyRequest;
  static deserializeBinaryFromReader(message: GetPolicyRequest, reader: jspb.BinaryReader): GetPolicyRequest;
}

export namespace GetPolicyRequest {
  export type AsObject = {
    idList: Array<string>,
  }
}

export class AddOrUpdateSchemaRequest extends jspb.Message {
  clearSchemasList(): void;
  getSchemasList(): Array<cerbos_schema_v1_schema_pb.Schema>;
  setSchemasList(value: Array<cerbos_schema_v1_schema_pb.Schema>): void;
  addSchemas(value?: cerbos_schema_v1_schema_pb.Schema, index?: number): cerbos_schema_v1_schema_pb.Schema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOrUpdateSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddOrUpdateSchemaRequest): AddOrUpdateSchemaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddOrUpdateSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOrUpdateSchemaRequest;
  static deserializeBinaryFromReader(message: AddOrUpdateSchemaRequest, reader: jspb.BinaryReader): AddOrUpdateSchemaRequest;
}

export namespace AddOrUpdateSchemaRequest {
  export type AsObject = {
    schemasList: Array<cerbos_schema_v1_schema_pb.Schema.AsObject>,
  }
}

export class ListSchemasRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSchemasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSchemasRequest): ListSchemasRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSchemasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSchemasRequest;
  static deserializeBinaryFromReader(message: ListSchemasRequest, reader: jspb.BinaryReader): ListSchemasRequest;
}

export namespace ListSchemasRequest {
  export type AsObject = {
  }
}

export class GetSchemaRequest extends jspb.Message {
  clearIdList(): void;
  getIdList(): Array<string>;
  setIdList(value: Array<string>): void;
  addId(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchemaRequest): GetSchemaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchemaRequest;
  static deserializeBinaryFromReader(message: GetSchemaRequest, reader: jspb.BinaryReader): GetSchemaRequest;
}

export namespace GetSchemaRequest {
  export type AsObject = {
    idList: Array<string>,
  }
}

export class DeleteSchemaRequest extends jspb.Message {
  clearIdList(): void;
  getIdList(): Array<string>;
  setIdList(value: Array<string>): void;
  addId(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSchemaRequest): DeleteSchemaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSchemaRequest;
  static deserializeBinaryFromReader(message: DeleteSchemaRequest, reader: jspb.BinaryReader): DeleteSchemaRequest;
}

export namespace DeleteSchemaRequest {
  export type AsObject = {
    idList: Array<string>,
  }
}

export class ReloadStoreRequest extends jspb.Message {
  getWait(): boolean;
  setWait(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReloadStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReloadStoreRequest): ReloadStoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReloadStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReloadStoreRequest;
  static deserializeBinaryFromReader(message: ReloadStoreRequest, reader: jspb.BinaryReader): ReloadStoreRequest;
}

export namespace ReloadStoreRequest {
  export type AsObject = {
    wait: boolean,
  }
}

