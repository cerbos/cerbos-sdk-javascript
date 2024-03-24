/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Value } from "../../../google/protobuf/struct";
import {
  PlanResourcesInput_Resource,
  Principal,
  Resource,
} from "../../engine/v1/engine";

export const protobufPackage = "cerbos.request.v1";

export interface PlanResourcesRequest {
  requestId: string;
  action: string;
  principal: Principal | undefined;
  resource: PlanResourcesInput_Resource | undefined;
  auxData: AuxData | undefined;
  includeMeta: boolean;
}

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

export interface ServerInfoRequest {}

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
    writer: _m0.Writer = _m0.Writer.create(),
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
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.auxData !== undefined) {
      AuxData.encode(message.auxData, writer.uint32(42).fork()).ldelim();
    }
    if (message.includeMeta !== false) {
      writer.uint32(48).bool(message.includeMeta);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlanResourcesRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.action = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.principal = Principal.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resource = PlanResourcesInput_Resource.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.auxData = AuxData.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.includeMeta = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanResourcesRequest {
    return {
      requestId: isSet(object.requestId)
        ? globalThis.String(object.requestId)
        : "",
      action: isSet(object.action) ? globalThis.String(object.action) : "",
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
        ? globalThis.Boolean(object.includeMeta)
        : false,
    };
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
    writer: _m0.Writer = _m0.Writer.create(),
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
    if (message.includeMeta !== false) {
      writer.uint32(40).bool(message.includeMeta);
    }
    if (message.auxData !== undefined) {
      AuxData.encode(message.auxData, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.actions.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.principal = Principal.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resource = ResourceSet.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.includeMeta = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.auxData = AuxData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceSetRequest {
    return {
      requestId: isSet(object.requestId)
        ? globalThis.String(object.requestId)
        : "",
      actions: globalThis.Array.isArray(object?.actions)
        ? object.actions.map((e: any) => globalThis.String(e))
        : [],
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resource: isSet(object.resource)
        ? ResourceSet.fromJSON(object.resource)
        : undefined,
      includeMeta: isSet(object.includeMeta)
        ? globalThis.Boolean(object.includeMeta)
        : false,
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
    };
  },
};

function createBaseResourceSet(): ResourceSet {
  return { kind: "", policyVersion: "", instances: {}, scope: "" };
}

export const ResourceSet = {
  encode(
    message: ResourceSet,
    writer: _m0.Writer = _m0.Writer.create(),
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
        writer.uint32(26).fork(),
      ).ldelim();
    });
    if (message.scope !== "") {
      writer.uint32(34).string(message.scope);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceSet {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.policyVersion = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = ResourceSet_InstancesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry3.value !== undefined) {
            message.instances[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.scope = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceSet {
    return {
      kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
      policyVersion: isSet(object.policyVersion)
        ? globalThis.String(object.policyVersion)
        : "",
      instances: isObject(object.instances)
        ? Object.entries(object.instances).reduce<{
            [key: string]: AttributesMap;
          }>((acc, [key, value]) => {
            acc[key] = AttributesMap.fromJSON(value);
            return acc;
          }, {})
        : {},
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
    };
  },
};

function createBaseResourceSet_InstancesEntry(): ResourceSet_InstancesEntry {
  return { key: "", value: undefined };
}

export const ResourceSet_InstancesEntry = {
  encode(
    message: ResourceSet_InstancesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
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
    length?: number,
  ): ResourceSet_InstancesEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceSet_InstancesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = AttributesMap.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceSet_InstancesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value)
        ? AttributesMap.fromJSON(object.value)
        : undefined,
    };
  },
};

function createBaseAttributesMap(): AttributesMap {
  return { attr: {} };
}

export const AttributesMap = {
  encode(
    message: AttributesMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.attr).forEach(([key, value]) => {
      if (value !== undefined) {
        AttributesMap_AttrEntry.encode(
          { key: key as any, value },
          writer.uint32(10).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributesMap {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributesMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = AttributesMap_AttrEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.attr[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

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
};

function createBaseAttributesMap_AttrEntry(): AttributesMap_AttrEntry {
  return { key: "", value: undefined };
}

export const AttributesMap_AttrEntry = {
  encode(
    message: AttributesMap_AttrEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AttributesMap_AttrEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributesMap_AttrEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributesMap_AttrEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
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
    writer: _m0.Writer = _m0.Writer.create(),
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
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.auxData !== undefined) {
      AuxData.encode(message.auxData, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceBatchRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceBatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.principal = Principal.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resources.push(
            CheckResourceBatchRequest_BatchEntry.decode(
              reader,
              reader.uint32(),
            ),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.auxData = AuxData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceBatchRequest {
    return {
      requestId: isSet(object.requestId)
        ? globalThis.String(object.requestId)
        : "",
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) =>
            CheckResourceBatchRequest_BatchEntry.fromJSON(e),
          )
        : [],
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
    };
  },
};

function createBaseCheckResourceBatchRequest_BatchEntry(): CheckResourceBatchRequest_BatchEntry {
  return { actions: [], resource: undefined };
}

export const CheckResourceBatchRequest_BatchEntry = {
  encode(
    message: CheckResourceBatchRequest_BatchEntry,
    writer: _m0.Writer = _m0.Writer.create(),
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
    length?: number,
  ): CheckResourceBatchRequest_BatchEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceBatchRequest_BatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.actions.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resource = Resource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceBatchRequest_BatchEntry {
    return {
      actions: globalThis.Array.isArray(object?.actions)
        ? object.actions.map((e: any) => globalThis.String(e))
        : [],
      resource: isSet(object.resource)
        ? Resource.fromJSON(object.resource)
        : undefined,
    };
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
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.includeMeta !== false) {
      writer.uint32(16).bool(message.includeMeta);
    }
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.resources) {
      CheckResourcesRequest_ResourceEntry.encode(
        v!,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.auxData !== undefined) {
      AuxData.encode(message.auxData, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.includeMeta = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.principal = Principal.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resources.push(
            CheckResourcesRequest_ResourceEntry.decode(reader, reader.uint32()),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.auxData = AuxData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourcesRequest {
    return {
      requestId: isSet(object.requestId)
        ? globalThis.String(object.requestId)
        : "",
      includeMeta: isSet(object.includeMeta)
        ? globalThis.Boolean(object.includeMeta)
        : false,
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) =>
            CheckResourcesRequest_ResourceEntry.fromJSON(e),
          )
        : [],
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
    };
  },
};

function createBaseCheckResourcesRequest_ResourceEntry(): CheckResourcesRequest_ResourceEntry {
  return { actions: [], resource: undefined };
}

export const CheckResourcesRequest_ResourceEntry = {
  encode(
    message: CheckResourcesRequest_ResourceEntry,
    writer: _m0.Writer = _m0.Writer.create(),
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
    length?: number,
  ): CheckResourcesRequest_ResourceEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesRequest_ResourceEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.actions.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resource = Resource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourcesRequest_ResourceEntry {
    return {
      actions: globalThis.Array.isArray(object?.actions)
        ? object.actions.map((e: any) => globalThis.String(e))
        : [],
      resource: isSet(object.resource)
        ? Resource.fromJSON(object.resource)
        : undefined,
    };
  },
};

function createBaseAuxData(): AuxData {
  return { jwt: undefined };
}

export const AuxData = {
  encode(
    message: AuxData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.jwt !== undefined) {
      AuxData_JWT.encode(message.jwt, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuxData {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuxData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jwt = AuxData_JWT.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuxData {
    return {
      jwt: isSet(object.jwt) ? AuxData_JWT.fromJSON(object.jwt) : undefined,
    };
  },
};

function createBaseAuxData_JWT(): AuxData_JWT {
  return { token: "", keySetId: "" };
}

export const AuxData_JWT = {
  encode(
    message: AuxData_JWT,
    writer: _m0.Writer = _m0.Writer.create(),
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
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuxData_JWT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.keySetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuxData_JWT {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      keySetId: isSet(object.keySetId)
        ? globalThis.String(object.keySetId)
        : "",
    };
  },
};

function createBaseServerInfoRequest(): ServerInfoRequest {
  return {};
}

export const ServerInfoRequest = {
  encode(
    _: ServerInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerInfoRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ServerInfoRequest {
    return {};
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
