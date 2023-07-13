/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { AccessLogEntry, DecisionLogEntry } from "../../audit/v1/audit";
import { Effect } from "../../effect/v1/effect";
import { OutputEntry, PlanResourcesFilter } from "../../engine/v1/engine";
import { Policy } from "../../policy/v1/policy";
import { Schema, ValidationError } from "../../schema/v1/schema";

export const protobufPackage = "cerbos.response.v1";

export interface PlanResourcesResponse {
  requestId: string;
  action: string;
  resourceKind: string;
  policyVersion: string;
  filter: PlanResourcesFilter | undefined;
  meta: PlanResourcesResponse_Meta | undefined;
  validationErrors: ValidationError[];
}

export interface PlanResourcesResponse_Meta {
  filterDebug: string;
  matchedScope: string;
}

export interface CheckResourceSetResponse {
  requestId: string;
  resourceInstances: {
    [key: string]: CheckResourceSetResponse_ActionEffectMap;
  };
  meta: CheckResourceSetResponse_Meta | undefined;
}

export interface CheckResourceSetResponse_ActionEffectMap {
  actions: { [key: string]: Effect };
  validationErrors: ValidationError[];
}

export interface CheckResourceSetResponse_ActionEffectMap_ActionsEntry {
  key: string;
  value: Effect;
}

export interface CheckResourceSetResponse_Meta {
  resourceInstances: {
    [key: string]: CheckResourceSetResponse_Meta_ActionMeta;
  };
}

export interface CheckResourceSetResponse_Meta_EffectMeta {
  matchedPolicy: string;
  matchedScope: string;
}

export interface CheckResourceSetResponse_Meta_ActionMeta {
  actions: { [key: string]: CheckResourceSetResponse_Meta_EffectMeta };
  effectiveDerivedRoles: string[];
}

export interface CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry {
  key: string;
  value: CheckResourceSetResponse_Meta_EffectMeta | undefined;
}

export interface CheckResourceSetResponse_Meta_ResourceInstancesEntry {
  key: string;
  value: CheckResourceSetResponse_Meta_ActionMeta | undefined;
}

export interface CheckResourceSetResponse_ResourceInstancesEntry {
  key: string;
  value: CheckResourceSetResponse_ActionEffectMap | undefined;
}

export interface CheckResourceBatchResponse {
  requestId: string;
  results: CheckResourceBatchResponse_ActionEffectMap[];
}

export interface CheckResourceBatchResponse_ActionEffectMap {
  resourceId: string;
  actions: { [key: string]: Effect };
  validationErrors: ValidationError[];
}

export interface CheckResourceBatchResponse_ActionEffectMap_ActionsEntry {
  key: string;
  value: Effect;
}

export interface CheckResourcesResponse {
  requestId: string;
  results: CheckResourcesResponse_ResultEntry[];
}

export interface CheckResourcesResponse_ResultEntry {
  resource: CheckResourcesResponse_ResultEntry_Resource | undefined;
  actions: { [key: string]: Effect };
  validationErrors: ValidationError[];
  meta: CheckResourcesResponse_ResultEntry_Meta | undefined;
  outputs: OutputEntry[];
}

export interface CheckResourcesResponse_ResultEntry_Resource {
  id: string;
  kind: string;
  policyVersion: string;
  scope: string;
}

export interface CheckResourcesResponse_ResultEntry_Meta {
  actions: {
    [key: string]: CheckResourcesResponse_ResultEntry_Meta_EffectMeta;
  };
  effectiveDerivedRoles: string[];
}

export interface CheckResourcesResponse_ResultEntry_Meta_EffectMeta {
  matchedPolicy: string;
  matchedScope: string;
}

export interface CheckResourcesResponse_ResultEntry_Meta_ActionsEntry {
  key: string;
  value: CheckResourcesResponse_ResultEntry_Meta_EffectMeta | undefined;
}

export interface CheckResourcesResponse_ResultEntry_ActionsEntry {
  key: string;
  value: Effect;
}

export interface AddOrUpdatePolicyResponse {
  success: Empty | undefined;
}

export interface ListAuditLogEntriesResponse {
  entry?:
    | { $case: "accessLogEntry"; accessLogEntry: AccessLogEntry }
    | {
        $case: "decisionLogEntry";
        decisionLogEntry: DecisionLogEntry;
      }
    | undefined;
}

export interface ServerInfoResponse {
  version: string;
  commit: string;
  buildDate: string;
}

export interface ListPoliciesResponse {
  policyIds: string[];
}

export interface GetPolicyResponse {
  policies: Policy[];
}

export interface DisablePolicyResponse {
  disabledPolicies: number;
}

export interface EnablePolicyResponse {
  enabledPolicies: number;
}

export interface AddOrUpdateSchemaResponse {}

export interface ListSchemasResponse {
  schemaIds: string[];
}

export interface GetSchemaResponse {
  schemas: Schema[];
}

export interface DeleteSchemaResponse {
  deletedSchemas: number;
}

export interface ReloadStoreResponse {}

function createBasePlanResourcesResponse(): PlanResourcesResponse {
  return {
    requestId: "",
    action: "",
    resourceKind: "",
    policyVersion: "",
    filter: undefined,
    meta: undefined,
    validationErrors: [],
  };
}

export const PlanResourcesResponse = {
  encode(
    message: PlanResourcesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    if (message.resourceKind !== "") {
      writer.uint32(26).string(message.resourceKind);
    }
    if (message.policyVersion !== "") {
      writer.uint32(34).string(message.policyVersion);
    }
    if (message.filter !== undefined) {
      PlanResourcesFilter.encode(
        message.filter,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.meta !== undefined) {
      PlanResourcesResponse_Meta.encode(
        message.meta,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlanResourcesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesResponse();
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

          message.resourceKind = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.policyVersion = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.filter = PlanResourcesFilter.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.meta = PlanResourcesResponse_Meta.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBasePlanResourcesResponse_Meta(): PlanResourcesResponse_Meta {
  return { filterDebug: "", matchedScope: "" };
}

export const PlanResourcesResponse_Meta = {
  encode(
    message: PlanResourcesResponse_Meta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.filterDebug !== "") {
      writer.uint32(10).string(message.filterDebug);
    }
    if (message.matchedScope !== "") {
      writer.uint32(18).string(message.matchedScope);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlanResourcesResponse_Meta {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesResponse_Meta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filterDebug = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchedScope = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourceSetResponse(): CheckResourceSetResponse {
  return { requestId: "", resourceInstances: {}, meta: undefined };
}

export const CheckResourceSetResponse = {
  encode(
    message: CheckResourceSetResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    Object.entries(message.resourceInstances).forEach(([key, value]) => {
      CheckResourceSetResponse_ResourceInstancesEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork(),
      ).ldelim();
    });
    if (message.meta !== undefined) {
      CheckResourceSetResponse_Meta.encode(
        message.meta,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse();
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

          const entry2 = CheckResourceSetResponse_ResourceInstancesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry2.value !== undefined) {
            message.resourceInstances[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.meta = CheckResourceSetResponse_Meta.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourceSetResponse_ActionEffectMap(): CheckResourceSetResponse_ActionEffectMap {
  return { actions: {}, validationErrors: [] };
}

export const CheckResourceSetResponse_ActionEffectMap = {
  encode(
    message: CheckResourceSetResponse_ActionEffectMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourceSetResponse_ActionEffectMap_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_ActionEffectMap {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_ActionEffectMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 =
            CheckResourceSetResponse_ActionEffectMap_ActionsEntry.decode(
              reader,
              reader.uint32(),
            );
          if (entry1.value !== undefined) {
            message.actions[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourceSetResponse_ActionEffectMap_ActionsEntry(): CheckResourceSetResponse_ActionEffectMap_ActionsEntry {
  return { key: "", value: 0 };
}

export const CheckResourceSetResponse_ActionEffectMap_ActionsEntry = {
  encode(
    message: CheckResourceSetResponse_ActionEffectMap_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_ActionEffectMap_ActionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourceSetResponse_ActionEffectMap_ActionsEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourceSetResponse_Meta(): CheckResourceSetResponse_Meta {
  return { resourceInstances: {} };
}

export const CheckResourceSetResponse_Meta = {
  encode(
    message: CheckResourceSetResponse_Meta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.resourceInstances).forEach(([key, value]) => {
      CheckResourceSetResponse_Meta_ResourceInstancesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_Meta {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_Meta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 =
            CheckResourceSetResponse_Meta_ResourceInstancesEntry.decode(
              reader,
              reader.uint32(),
            );
          if (entry1.value !== undefined) {
            message.resourceInstances[entry1.key] = entry1.value;
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
};

function createBaseCheckResourceSetResponse_Meta_EffectMeta(): CheckResourceSetResponse_Meta_EffectMeta {
  return { matchedPolicy: "", matchedScope: "" };
}

export const CheckResourceSetResponse_Meta_EffectMeta = {
  encode(
    message: CheckResourceSetResponse_Meta_EffectMeta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.matchedPolicy !== "") {
      writer.uint32(10).string(message.matchedPolicy);
    }
    if (message.matchedScope !== "") {
      writer.uint32(18).string(message.matchedScope);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_Meta_EffectMeta {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_Meta_EffectMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchedPolicy = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchedScope = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourceSetResponse_Meta_ActionMeta(): CheckResourceSetResponse_Meta_ActionMeta {
  return { actions: {}, effectiveDerivedRoles: [] };
}

export const CheckResourceSetResponse_Meta_ActionMeta = {
  encode(
    message: CheckResourceSetResponse_Meta_ActionMeta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    for (const v of message.effectiveDerivedRoles) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_Meta_ActionMeta {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_Meta_ActionMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 =
            CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry.decode(
              reader,
              reader.uint32(),
            );
          if (entry1.value !== undefined) {
            message.actions[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.effectiveDerivedRoles.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourceSetResponse_Meta_ActionMeta_ActionsEntry(): CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry {
  return { key: "", value: undefined };
}

export const CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry = {
  encode(
    message: CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckResourceSetResponse_Meta_EffectMeta.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourceSetResponse_Meta_ActionMeta_ActionsEntry();
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

          message.value = CheckResourceSetResponse_Meta_EffectMeta.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourceSetResponse_Meta_ResourceInstancesEntry(): CheckResourceSetResponse_Meta_ResourceInstancesEntry {
  return { key: "", value: undefined };
}

export const CheckResourceSetResponse_Meta_ResourceInstancesEntry = {
  encode(
    message: CheckResourceSetResponse_Meta_ResourceInstancesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckResourceSetResponse_Meta_ActionMeta.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_Meta_ResourceInstancesEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourceSetResponse_Meta_ResourceInstancesEntry();
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

          message.value = CheckResourceSetResponse_Meta_ActionMeta.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourceSetResponse_ResourceInstancesEntry(): CheckResourceSetResponse_ResourceInstancesEntry {
  return { key: "", value: undefined };
}

export const CheckResourceSetResponse_ResourceInstancesEntry = {
  encode(
    message: CheckResourceSetResponse_ResourceInstancesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckResourceSetResponse_ActionEffectMap.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_ResourceInstancesEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_ResourceInstancesEntry();
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

          message.value = CheckResourceSetResponse_ActionEffectMap.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourceBatchResponse(): CheckResourceBatchResponse {
  return { requestId: "", results: [] };
}

export const CheckResourceBatchResponse = {
  encode(
    message: CheckResourceBatchResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    for (const v of message.results) {
      CheckResourceBatchResponse_ActionEffectMap.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceBatchResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceBatchResponse();
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

          message.results.push(
            CheckResourceBatchResponse_ActionEffectMap.decode(
              reader,
              reader.uint32(),
            ),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourceBatchResponse_ActionEffectMap(): CheckResourceBatchResponse_ActionEffectMap {
  return { resourceId: "", actions: {}, validationErrors: [] };
}

export const CheckResourceBatchResponse_ActionEffectMap = {
  encode(
    message: CheckResourceBatchResponse_ActionEffectMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourceBatchResponse_ActionEffectMap_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork(),
      ).ldelim();
    });
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceBatchResponse_ActionEffectMap {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceBatchResponse_ActionEffectMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 =
            CheckResourceBatchResponse_ActionEffectMap_ActionsEntry.decode(
              reader,
              reader.uint32(),
            );
          if (entry2.value !== undefined) {
            message.actions[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourceBatchResponse_ActionEffectMap_ActionsEntry(): CheckResourceBatchResponse_ActionEffectMap_ActionsEntry {
  return { key: "", value: 0 };
}

export const CheckResourceBatchResponse_ActionEffectMap_ActionsEntry = {
  encode(
    message: CheckResourceBatchResponse_ActionEffectMap_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceBatchResponse_ActionEffectMap_ActionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourceBatchResponse_ActionEffectMap_ActionsEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourcesResponse(): CheckResourcesResponse {
  return { requestId: "", results: [] };
}

export const CheckResourcesResponse = {
  encode(
    message: CheckResourcesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    for (const v of message.results) {
      CheckResourcesResponse_ResultEntry.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse();
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

          message.results.push(
            CheckResourcesResponse_ResultEntry.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourcesResponse_ResultEntry(): CheckResourcesResponse_ResultEntry {
  return {
    resource: undefined,
    actions: {},
    validationErrors: [],
    meta: undefined,
    outputs: [],
  };
}

export const CheckResourcesResponse_ResultEntry = {
  encode(
    message: CheckResourcesResponse_ResultEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.resource !== undefined) {
      CheckResourcesResponse_ResultEntry_Resource.encode(
        message.resource,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourcesResponse_ResultEntry_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork(),
      ).ldelim();
    });
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.meta !== undefined) {
      CheckResourcesResponse_ResultEntry_Meta.encode(
        message.meta,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    for (const v of message.outputs) {
      OutputEntry.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse_ResultEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse_ResultEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resource = CheckResourcesResponse_ResultEntry_Resource.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = CheckResourcesResponse_ResultEntry_ActionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry2.value !== undefined) {
            message.actions[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.meta = CheckResourcesResponse_ResultEntry_Meta.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.outputs.push(OutputEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourcesResponse_ResultEntry_Resource(): CheckResourcesResponse_ResultEntry_Resource {
  return { id: "", kind: "", policyVersion: "", scope: "" };
}

export const CheckResourcesResponse_ResultEntry_Resource = {
  encode(
    message: CheckResourcesResponse_ResultEntry_Resource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.kind !== "") {
      writer.uint32(18).string(message.kind);
    }
    if (message.policyVersion !== "") {
      writer.uint32(26).string(message.policyVersion);
    }
    if (message.scope !== "") {
      writer.uint32(34).string(message.scope);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse_ResultEntry_Resource {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse_ResultEntry_Resource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.kind = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.policyVersion = reader.string();
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
};

function createBaseCheckResourcesResponse_ResultEntry_Meta(): CheckResourcesResponse_ResultEntry_Meta {
  return { actions: {}, effectiveDerivedRoles: [] };
}

export const CheckResourcesResponse_ResultEntry_Meta = {
  encode(
    message: CheckResourcesResponse_ResultEntry_Meta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourcesResponse_ResultEntry_Meta_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    for (const v of message.effectiveDerivedRoles) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse_ResultEntry_Meta {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse_ResultEntry_Meta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 =
            CheckResourcesResponse_ResultEntry_Meta_ActionsEntry.decode(
              reader,
              reader.uint32(),
            );
          if (entry1.value !== undefined) {
            message.actions[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.effectiveDerivedRoles.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourcesResponse_ResultEntry_Meta_EffectMeta(): CheckResourcesResponse_ResultEntry_Meta_EffectMeta {
  return { matchedPolicy: "", matchedScope: "" };
}

export const CheckResourcesResponse_ResultEntry_Meta_EffectMeta = {
  encode(
    message: CheckResourcesResponse_ResultEntry_Meta_EffectMeta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.matchedPolicy !== "") {
      writer.uint32(10).string(message.matchedPolicy);
    }
    if (message.matchedScope !== "") {
      writer.uint32(18).string(message.matchedScope);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse_ResultEntry_Meta_EffectMeta {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourcesResponse_ResultEntry_Meta_EffectMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchedPolicy = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchedScope = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourcesResponse_ResultEntry_Meta_ActionsEntry(): CheckResourcesResponse_ResultEntry_Meta_ActionsEntry {
  return { key: "", value: undefined };
}

export const CheckResourcesResponse_ResultEntry_Meta_ActionsEntry = {
  encode(
    message: CheckResourcesResponse_ResultEntry_Meta_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckResourcesResponse_ResultEntry_Meta_EffectMeta.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse_ResultEntry_Meta_ActionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourcesResponse_ResultEntry_Meta_ActionsEntry();
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

          message.value =
            CheckResourcesResponse_ResultEntry_Meta_EffectMeta.decode(
              reader,
              reader.uint32(),
            );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCheckResourcesResponse_ResultEntry_ActionsEntry(): CheckResourcesResponse_ResultEntry_ActionsEntry {
  return { key: "", value: 0 };
}

export const CheckResourcesResponse_ResultEntry_ActionsEntry = {
  encode(
    message: CheckResourcesResponse_ResultEntry_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse_ResultEntry_ActionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse_ResultEntry_ActionsEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseAddOrUpdatePolicyResponse(): AddOrUpdatePolicyResponse {
  return { success: undefined };
}

export const AddOrUpdatePolicyResponse = {
  encode(
    message: AddOrUpdatePolicyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.success !== undefined) {
      Empty.encode(message.success, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AddOrUpdatePolicyResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddOrUpdatePolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.success = Empty.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseListAuditLogEntriesResponse(): ListAuditLogEntriesResponse {
  return { entry: undefined };
}

export const ListAuditLogEntriesResponse = {
  encode(
    message: ListAuditLogEntriesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    switch (message.entry?.$case) {
      case "accessLogEntry":
        AccessLogEntry.encode(
          message.entry.accessLogEntry,
          writer.uint32(10).fork(),
        ).ldelim();
        break;
      case "decisionLogEntry":
        DecisionLogEntry.encode(
          message.entry.decisionLogEntry,
          writer.uint32(18).fork(),
        ).ldelim();
        break;
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListAuditLogEntriesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAuditLogEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entry = {
            $case: "accessLogEntry",
            accessLogEntry: AccessLogEntry.decode(reader, reader.uint32()),
          };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entry = {
            $case: "decisionLogEntry",
            decisionLogEntry: DecisionLogEntry.decode(reader, reader.uint32()),
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServerInfoResponse(): ServerInfoResponse {
  return { version: "", commit: "", buildDate: "" };
}

export const ServerInfoResponse = {
  encode(
    message: ServerInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.commit !== "") {
      writer.uint32(18).string(message.commit);
    }
    if (message.buildDate !== "") {
      writer.uint32(26).string(message.buildDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerInfoResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commit = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.buildDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseListPoliciesResponse(): ListPoliciesResponse {
  return { policyIds: [] };
}

export const ListPoliciesResponse = {
  encode(
    message: ListPoliciesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.policyIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListPoliciesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPoliciesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.policyIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseGetPolicyResponse(): GetPolicyResponse {
  return { policies: [] };
}

export const GetPolicyResponse = {
  encode(
    message: GetPolicyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.policies) {
      Policy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPolicyResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.policies.push(Policy.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseDisablePolicyResponse(): DisablePolicyResponse {
  return { disabledPolicies: 0 };
}

export const DisablePolicyResponse = {
  encode(
    message: DisablePolicyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.disabledPolicies !== 0) {
      writer.uint32(8).uint32(message.disabledPolicies);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DisablePolicyResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisablePolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.disabledPolicies = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseEnablePolicyResponse(): EnablePolicyResponse {
  return { enabledPolicies: 0 };
}

export const EnablePolicyResponse = {
  encode(
    message: EnablePolicyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabledPolicies !== 0) {
      writer.uint32(8).uint32(message.enabledPolicies);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EnablePolicyResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnablePolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabledPolicies = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseAddOrUpdateSchemaResponse(): AddOrUpdateSchemaResponse {
  return {};
}

export const AddOrUpdateSchemaResponse = {
  encode(
    _: AddOrUpdateSchemaResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AddOrUpdateSchemaResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddOrUpdateSchemaResponse();
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
};

function createBaseListSchemasResponse(): ListSchemasResponse {
  return { schemaIds: [] };
}

export const ListSchemasResponse = {
  encode(
    message: ListSchemasResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.schemaIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSchemasResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSchemasResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemaIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseGetSchemaResponse(): GetSchemaResponse {
  return { schemas: [] };
}

export const GetSchemaResponse = {
  encode(
    message: GetSchemaResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.schemas) {
      Schema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSchemaResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemas.push(Schema.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseDeleteSchemaResponse(): DeleteSchemaResponse {
  return { deletedSchemas: 0 };
}

export const DeleteSchemaResponse = {
  encode(
    message: DeleteSchemaResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.deletedSchemas !== 0) {
      writer.uint32(8).uint32(message.deletedSchemas);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DeleteSchemaResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.deletedSchemas = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseReloadStoreResponse(): ReloadStoreResponse {
  return {};
}

export const ReloadStoreResponse = {
  encode(
    _: ReloadStoreResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReloadStoreResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReloadStoreResponse();
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
};
