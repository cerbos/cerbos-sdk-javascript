/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import {
  Principal,
  PlanResourcesInput_Resource,
  Resource,
} from "../../engine/v1/engine";
import { Policy } from "../../policy/v1/policy";
import { Schema } from "../../schema/v1/schema";
import { Duration } from "../../../google/protobuf/duration";

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
  contents: Uint8Array;
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

export function listAuditLogEntriesRequest_KindFromJSON(
  object: any
): ListAuditLogEntriesRequest_Kind {
  switch (object) {
    case 0:
    case "KIND_UNSPECIFIED":
      return ListAuditLogEntriesRequest_Kind.KIND_UNSPECIFIED;
    case 1:
    case "KIND_ACCESS":
      return ListAuditLogEntriesRequest_Kind.KIND_ACCESS;
    case 2:
    case "KIND_DECISION":
      return ListAuditLogEntriesRequest_Kind.KIND_DECISION;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum ListAuditLogEntriesRequest_Kind"
      );
  }
}

export function listAuditLogEntriesRequest_KindToJSON(
  object: ListAuditLogEntriesRequest_Kind
): string {
  switch (object) {
    case ListAuditLogEntriesRequest_Kind.KIND_UNSPECIFIED:
      return "KIND_UNSPECIFIED";
    case ListAuditLogEntriesRequest_Kind.KIND_ACCESS:
      return "KIND_ACCESS";
    case ListAuditLogEntriesRequest_Kind.KIND_DECISION:
      return "KIND_DECISION";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum ListAuditLogEntriesRequest_Kind"
      );
  }
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
  fromJSON(object: any): PlanResourcesRequest {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      action: isSet(object.action) ? String(object.action) : "",
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resource: isSet(object.resource)
        ? PlanResourcesInput_Resource.fromJSON(object.resource)
        : undefined,
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
      includeMeta: isSet(object.includeMeta)
        ? Boolean(object.includeMeta)
        : false,
    };
  },

  toJSON(message: PlanResourcesRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.action !== undefined && (obj.action = message.action);
    message.principal !== undefined &&
      (obj.principal = message.principal
        ? Principal.toJSON(message.principal)
        : undefined);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? PlanResourcesInput_Resource.toJSON(message.resource)
        : undefined);
    message.auxData !== undefined &&
      (obj.auxData = message.auxData
        ? AuxData.toJSON(message.auxData)
        : undefined);
    message.includeMeta !== undefined &&
      (obj.includeMeta = message.includeMeta);
    return obj;
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
  fromJSON(object: any): CheckResourceSetRequest {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => String(e))
        : [],
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resource: isSet(object.resource)
        ? ResourceSet.fromJSON(object.resource)
        : undefined,
      includeMeta: isSet(object.includeMeta)
        ? Boolean(object.includeMeta)
        : false,
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
    };
  },

  toJSON(message: CheckResourceSetRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    message.principal !== undefined &&
      (obj.principal = message.principal
        ? Principal.toJSON(message.principal)
        : undefined);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? ResourceSet.toJSON(message.resource)
        : undefined);
    message.includeMeta !== undefined &&
      (obj.includeMeta = message.includeMeta);
    message.auxData !== undefined &&
      (obj.auxData = message.auxData
        ? AuxData.toJSON(message.auxData)
        : undefined);
    return obj;
  },
};

function createBaseResourceSet(): ResourceSet {
  return { kind: "", policyVersion: "", instances: {}, scope: "" };
}

export const ResourceSet = {
  fromJSON(object: any): ResourceSet {
    return {
      kind: isSet(object.kind) ? String(object.kind) : "",
      policyVersion: isSet(object.policyVersion)
        ? String(object.policyVersion)
        : "",
      instances: isObject(object.instances)
        ? Object.entries(object.instances).reduce<{
            [key: string]: AttributesMap;
          }>((acc, [key, value]) => {
            acc[key] = AttributesMap.fromJSON(value);
            return acc;
          }, {})
        : {},
      scope: isSet(object.scope) ? String(object.scope) : "",
    };
  },

  toJSON(message: ResourceSet): unknown {
    const obj: any = {};
    message.kind !== undefined && (obj.kind = message.kind);
    message.policyVersion !== undefined &&
      (obj.policyVersion = message.policyVersion);
    obj.instances = {};
    if (message.instances) {
      Object.entries(message.instances).forEach(([k, v]) => {
        obj.instances[k] = AttributesMap.toJSON(v);
      });
    }
    message.scope !== undefined && (obj.scope = message.scope);
    return obj;
  },
};

function createBaseResourceSet_InstancesEntry(): ResourceSet_InstancesEntry {
  return { key: "", value: undefined };
}

export const ResourceSet_InstancesEntry = {
  fromJSON(object: any): ResourceSet_InstancesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? AttributesMap.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: ResourceSet_InstancesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? AttributesMap.toJSON(message.value)
        : undefined);
    return obj;
  },
};

function createBaseAttributesMap(): AttributesMap {
  return { attr: {} };
}

export const AttributesMap = {
  fromJSON(object: any): AttributesMap {
    return {
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: AttributesMap): unknown {
    const obj: any = {};
    obj.attr = {};
    if (message.attr) {
      Object.entries(message.attr).forEach(([k, v]) => {
        obj.attr[k] = v;
      });
    }
    return obj;
  },
};

function createBaseAttributesMap_AttrEntry(): AttributesMap_AttrEntry {
  return { key: "", value: undefined };
}

export const AttributesMap_AttrEntry = {
  fromJSON(object: any): AttributesMap_AttrEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: AttributesMap_AttrEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
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
  fromJSON(object: any): CheckResourceBatchRequest {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resources: Array.isArray(object?.resources)
        ? object.resources.map((e: any) =>
            CheckResourceBatchRequest_BatchEntry.fromJSON(e)
          )
        : [],
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
    };
  },

  toJSON(message: CheckResourceBatchRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.principal !== undefined &&
      (obj.principal = message.principal
        ? Principal.toJSON(message.principal)
        : undefined);
    if (message.resources) {
      obj.resources = message.resources.map((e) =>
        e ? CheckResourceBatchRequest_BatchEntry.toJSON(e) : undefined
      );
    } else {
      obj.resources = [];
    }
    message.auxData !== undefined &&
      (obj.auxData = message.auxData
        ? AuxData.toJSON(message.auxData)
        : undefined);
    return obj;
  },
};

function createBaseCheckResourceBatchRequest_BatchEntry(): CheckResourceBatchRequest_BatchEntry {
  return { actions: [], resource: undefined };
}

export const CheckResourceBatchRequest_BatchEntry = {
  fromJSON(object: any): CheckResourceBatchRequest_BatchEntry {
    return {
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => String(e))
        : [],
      resource: isSet(object.resource)
        ? Resource.fromJSON(object.resource)
        : undefined,
    };
  },

  toJSON(message: CheckResourceBatchRequest_BatchEntry): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    return obj;
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
  fromJSON(object: any): CheckResourcesRequest {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      includeMeta: isSet(object.includeMeta)
        ? Boolean(object.includeMeta)
        : false,
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resources: Array.isArray(object?.resources)
        ? object.resources.map((e: any) =>
            CheckResourcesRequest_ResourceEntry.fromJSON(e)
          )
        : [],
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
    };
  },

  toJSON(message: CheckResourcesRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.includeMeta !== undefined &&
      (obj.includeMeta = message.includeMeta);
    message.principal !== undefined &&
      (obj.principal = message.principal
        ? Principal.toJSON(message.principal)
        : undefined);
    if (message.resources) {
      obj.resources = message.resources.map((e) =>
        e ? CheckResourcesRequest_ResourceEntry.toJSON(e) : undefined
      );
    } else {
      obj.resources = [];
    }
    message.auxData !== undefined &&
      (obj.auxData = message.auxData
        ? AuxData.toJSON(message.auxData)
        : undefined);
    return obj;
  },
};

function createBaseCheckResourcesRequest_ResourceEntry(): CheckResourcesRequest_ResourceEntry {
  return { actions: [], resource: undefined };
}

export const CheckResourcesRequest_ResourceEntry = {
  fromJSON(object: any): CheckResourcesRequest_ResourceEntry {
    return {
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => String(e))
        : [],
      resource: isSet(object.resource)
        ? Resource.fromJSON(object.resource)
        : undefined,
    };
  },

  toJSON(message: CheckResourcesRequest_ResourceEntry): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    return obj;
  },
};

function createBaseAuxData(): AuxData {
  return { jwt: undefined };
}

export const AuxData = {
  fromJSON(object: any): AuxData {
    return {
      jwt: isSet(object.jwt) ? AuxData_JWT.fromJSON(object.jwt) : undefined,
    };
  },

  toJSON(message: AuxData): unknown {
    const obj: any = {};
    message.jwt !== undefined &&
      (obj.jwt = message.jwt ? AuxData_JWT.toJSON(message.jwt) : undefined);
    return obj;
  },
};

function createBaseAuxData_JWT(): AuxData_JWT {
  return { token: "", keySetId: "" };
}

export const AuxData_JWT = {
  fromJSON(object: any): AuxData_JWT {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      keySetId: isSet(object.keySetId) ? String(object.keySetId) : "",
    };
  },

  toJSON(message: AuxData_JWT): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.keySetId !== undefined && (obj.keySetId = message.keySetId);
    return obj;
  },
};

function createBaseFile(): File {
  return { fileName: "", contents: new Uint8Array() };
}

export const File = {
  fromJSON(object: any): File {
    return {
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
      contents: isSet(object.contents)
        ? bytesFromBase64(object.contents)
        : new Uint8Array(),
    };
  },

  toJSON(message: File): unknown {
    const obj: any = {};
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.contents !== undefined &&
      (obj.contents = base64FromBytes(
        message.contents !== undefined ? message.contents : new Uint8Array()
      ));
    return obj;
  },
};

function createBasePlaygroundValidateRequest(): PlaygroundValidateRequest {
  return { playgroundId: "", files: [] };
}

export const PlaygroundValidateRequest = {
  fromJSON(object: any): PlaygroundValidateRequest {
    return {
      playgroundId: isSet(object.playgroundId)
        ? String(object.playgroundId)
        : "",
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => File.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlaygroundValidateRequest): unknown {
    const obj: any = {};
    message.playgroundId !== undefined &&
      (obj.playgroundId = message.playgroundId);
    if (message.files) {
      obj.files = message.files.map((e) => (e ? File.toJSON(e) : undefined));
    } else {
      obj.files = [];
    }
    return obj;
  },
};

function createBasePlaygroundTestRequest(): PlaygroundTestRequest {
  return { playgroundId: "", files: [] };
}

export const PlaygroundTestRequest = {
  fromJSON(object: any): PlaygroundTestRequest {
    return {
      playgroundId: isSet(object.playgroundId)
        ? String(object.playgroundId)
        : "",
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => File.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlaygroundTestRequest): unknown {
    const obj: any = {};
    message.playgroundId !== undefined &&
      (obj.playgroundId = message.playgroundId);
    if (message.files) {
      obj.files = message.files.map((e) => (e ? File.toJSON(e) : undefined));
    } else {
      obj.files = [];
    }
    return obj;
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
  fromJSON(object: any): PlaygroundEvaluateRequest {
    return {
      playgroundId: isSet(object.playgroundId)
        ? String(object.playgroundId)
        : "",
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => File.fromJSON(e))
        : [],
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resource: isSet(object.resource)
        ? Resource.fromJSON(object.resource)
        : undefined,
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => String(e))
        : [],
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
    };
  },

  toJSON(message: PlaygroundEvaluateRequest): unknown {
    const obj: any = {};
    message.playgroundId !== undefined &&
      (obj.playgroundId = message.playgroundId);
    if (message.files) {
      obj.files = message.files.map((e) => (e ? File.toJSON(e) : undefined));
    } else {
      obj.files = [];
    }
    message.principal !== undefined &&
      (obj.principal = message.principal
        ? Principal.toJSON(message.principal)
        : undefined);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    message.auxData !== undefined &&
      (obj.auxData = message.auxData
        ? AuxData.toJSON(message.auxData)
        : undefined);
    return obj;
  },
};

function createBasePlaygroundProxyRequest(): PlaygroundProxyRequest {
  return { playgroundId: "", files: [], proxyRequest: undefined };
}

export const PlaygroundProxyRequest = {
  fromJSON(object: any): PlaygroundProxyRequest {
    return {
      playgroundId: isSet(object.playgroundId)
        ? String(object.playgroundId)
        : "",
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => File.fromJSON(e))
        : [],
      proxyRequest: isSet(object.checkResourceSet)
        ? {
            $case: "checkResourceSet",
            checkResourceSet: CheckResourceSetRequest.fromJSON(
              object.checkResourceSet
            ),
          }
        : isSet(object.checkResourceBatch)
        ? {
            $case: "checkResourceBatch",
            checkResourceBatch: CheckResourceBatchRequest.fromJSON(
              object.checkResourceBatch
            ),
          }
        : isSet(object.planResources)
        ? {
            $case: "planResources",
            planResources: PlanResourcesRequest.fromJSON(object.planResources),
          }
        : isSet(object.checkResources)
        ? {
            $case: "checkResources",
            checkResources: CheckResourcesRequest.fromJSON(
              object.checkResources
            ),
          }
        : undefined,
    };
  },

  toJSON(message: PlaygroundProxyRequest): unknown {
    const obj: any = {};
    message.playgroundId !== undefined &&
      (obj.playgroundId = message.playgroundId);
    if (message.files) {
      obj.files = message.files.map((e) => (e ? File.toJSON(e) : undefined));
    } else {
      obj.files = [];
    }
    message.proxyRequest?.$case === "checkResourceSet" &&
      (obj.checkResourceSet = message.proxyRequest?.checkResourceSet
        ? CheckResourceSetRequest.toJSON(message.proxyRequest?.checkResourceSet)
        : undefined);
    message.proxyRequest?.$case === "checkResourceBatch" &&
      (obj.checkResourceBatch = message.proxyRequest?.checkResourceBatch
        ? CheckResourceBatchRequest.toJSON(
            message.proxyRequest?.checkResourceBatch
          )
        : undefined);
    message.proxyRequest?.$case === "planResources" &&
      (obj.planResources = message.proxyRequest?.planResources
        ? PlanResourcesRequest.toJSON(message.proxyRequest?.planResources)
        : undefined);
    message.proxyRequest?.$case === "checkResources" &&
      (obj.checkResources = message.proxyRequest?.checkResources
        ? CheckResourcesRequest.toJSON(message.proxyRequest?.checkResources)
        : undefined);
    return obj;
  },
};

function createBaseAddOrUpdatePolicyRequest(): AddOrUpdatePolicyRequest {
  return { policies: [] };
}

export const AddOrUpdatePolicyRequest = {
  fromJSON(object: any): AddOrUpdatePolicyRequest {
    return {
      policies: Array.isArray(object?.policies)
        ? object.policies.map((e: any) => Policy.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddOrUpdatePolicyRequest): unknown {
    const obj: any = {};
    if (message.policies) {
      obj.policies = message.policies.map((e) =>
        e ? Policy.toJSON(e) : undefined
      );
    } else {
      obj.policies = [];
    }
    return obj;
  },
};

function createBaseListAuditLogEntriesRequest(): ListAuditLogEntriesRequest {
  return { kind: 0, filter: undefined };
}

export const ListAuditLogEntriesRequest = {
  fromJSON(object: any): ListAuditLogEntriesRequest {
    return {
      kind: isSet(object.kind)
        ? listAuditLogEntriesRequest_KindFromJSON(object.kind)
        : 0,
      filter: isSet(object.tail)
        ? { $case: "tail", tail: Number(object.tail) }
        : isSet(object.between)
        ? {
            $case: "between",
            between: ListAuditLogEntriesRequest_TimeRange.fromJSON(
              object.between
            ),
          }
        : isSet(object.since)
        ? { $case: "since", since: Duration.fromJSON(object.since) }
        : isSet(object.lookup)
        ? { $case: "lookup", lookup: String(object.lookup) }
        : undefined,
    };
  },

  toJSON(message: ListAuditLogEntriesRequest): unknown {
    const obj: any = {};
    message.kind !== undefined &&
      (obj.kind = listAuditLogEntriesRequest_KindToJSON(message.kind));
    message.filter?.$case === "tail" &&
      (obj.tail = Math.round(message.filter?.tail));
    message.filter?.$case === "between" &&
      (obj.between = message.filter?.between
        ? ListAuditLogEntriesRequest_TimeRange.toJSON(message.filter?.between)
        : undefined);
    message.filter?.$case === "since" &&
      (obj.since = message.filter?.since
        ? Duration.toJSON(message.filter?.since)
        : undefined);
    message.filter?.$case === "lookup" && (obj.lookup = message.filter?.lookup);
    return obj;
  },
};

function createBaseListAuditLogEntriesRequest_TimeRange(): ListAuditLogEntriesRequest_TimeRange {
  return { start: undefined, end: undefined };
}

export const ListAuditLogEntriesRequest_TimeRange = {
  fromJSON(object: any): ListAuditLogEntriesRequest_TimeRange {
    return {
      start: isSet(object.start) ? fromJsonTimestamp(object.start) : undefined,
      end: isSet(object.end) ? fromJsonTimestamp(object.end) : undefined,
    };
  },

  toJSON(message: ListAuditLogEntriesRequest_TimeRange): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start.toISOString());
    message.end !== undefined && (obj.end = message.end.toISOString());
    return obj;
  },
};

function createBaseServerInfoRequest(): ServerInfoRequest {
  return {};
}

export const ServerInfoRequest = {
  fromJSON(_: any): ServerInfoRequest {
    return {};
  },

  toJSON(_: ServerInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseListPoliciesRequest(): ListPoliciesRequest {
  return {};
}

export const ListPoliciesRequest = {
  fromJSON(_: any): ListPoliciesRequest {
    return {};
  },

  toJSON(_: ListPoliciesRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseGetPolicyRequest(): GetPolicyRequest {
  return { id: [] };
}

export const GetPolicyRequest = {
  fromJSON(object: any): GetPolicyRequest {
    return {
      id: Array.isArray(object?.id) ? object.id.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: GetPolicyRequest): unknown {
    const obj: any = {};
    if (message.id) {
      obj.id = message.id.map((e) => e);
    } else {
      obj.id = [];
    }
    return obj;
  },
};

function createBaseAddOrUpdateSchemaRequest(): AddOrUpdateSchemaRequest {
  return { schemas: [] };
}

export const AddOrUpdateSchemaRequest = {
  fromJSON(object: any): AddOrUpdateSchemaRequest {
    return {
      schemas: Array.isArray(object?.schemas)
        ? object.schemas.map((e: any) => Schema.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddOrUpdateSchemaRequest): unknown {
    const obj: any = {};
    if (message.schemas) {
      obj.schemas = message.schemas.map((e) =>
        e ? Schema.toJSON(e) : undefined
      );
    } else {
      obj.schemas = [];
    }
    return obj;
  },
};

function createBaseListSchemasRequest(): ListSchemasRequest {
  return {};
}

export const ListSchemasRequest = {
  fromJSON(_: any): ListSchemasRequest {
    return {};
  },

  toJSON(_: ListSchemasRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseGetSchemaRequest(): GetSchemaRequest {
  return { id: [] };
}

export const GetSchemaRequest = {
  fromJSON(object: any): GetSchemaRequest {
    return {
      id: Array.isArray(object?.id) ? object.id.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: GetSchemaRequest): unknown {
    const obj: any = {};
    if (message.id) {
      obj.id = message.id.map((e) => e);
    } else {
      obj.id = [];
    }
    return obj;
  },
};

function createBaseDeleteSchemaRequest(): DeleteSchemaRequest {
  return { id: [] };
}

export const DeleteSchemaRequest = {
  fromJSON(object: any): DeleteSchemaRequest {
    return {
      id: Array.isArray(object?.id) ? object.id.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: DeleteSchemaRequest): unknown {
    const obj: any = {};
    if (message.id) {
      obj.id = message.id.map((e) => e);
    } else {
      obj.id = [];
    }
    return obj;
  },
};

function createBaseReloadStoreRequest(): ReloadStoreRequest {
  return { wait: false };
}

export const ReloadStoreRequest = {
  fromJSON(object: any): ReloadStoreRequest {
    return {
      wait: isSet(object.wait) ? Boolean(object.wait) : false,
    };
  },

  toJSON(message: ReloadStoreRequest): unknown {
    const obj: any = {};
    message.wait !== undefined && (obj.wait = message.wait);
    return obj;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = Number(t.seconds) * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
