/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Effect } from "../../../cerbos/effect/v1/effect";
import { ValidationError, Schema } from "../../../cerbos/schema/v1/schema";
import { TestResults, Policy } from "../../../cerbos/policy/v1/policy";
import { Empty } from "../../../google/protobuf/empty";
import {
  AccessLogEntry,
  DecisionLogEntry,
} from "../../../cerbos/audit/v1/audit";
import { Value } from "../../../google/protobuf/struct";

export const protobufPackage = "cerbos.response.v1";

export interface PlanResourcesResponse {
  requestId: string;
  action: string;
  resourceKind: string;
  policyVersion: string;
  filter: PlanResourcesResponse_Filter | undefined;
  meta: PlanResourcesResponse_Meta | undefined;
}

export interface PlanResourcesResponse_Expression {
  operator: string;
  operands: PlanResourcesResponse_Expression_Operand[];
}

export interface PlanResourcesResponse_Expression_Operand {
  node?:
    | { $case: "value"; value: any | undefined }
    | { $case: "expression"; expression: PlanResourcesResponse_Expression }
    | { $case: "variable"; variable: string };
}

export interface PlanResourcesResponse_Filter {
  kind: PlanResourcesResponse_Filter_Kind;
  condition: PlanResourcesResponse_Expression_Operand | undefined;
}

export enum PlanResourcesResponse_Filter_Kind {
  KIND_UNSPECIFIED = 0,
  KIND_ALWAYS_ALLOWED = 1,
  KIND_ALWAYS_DENIED = 2,
  KIND_CONDITIONAL = 3,
}

export interface PlanResourcesResponse_Meta {
  filterDebug: string;
  matchedScope: string;
}

/** Deprecated. See CheckResourcesResponse. */
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

/** Deprecated. See CheckResourcesResponse. */
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

export interface PlaygroundFailure {
  errors: PlaygroundFailure_Error[];
}

export interface PlaygroundFailure_Error {
  file: string;
  error: string;
}

export interface PlaygroundValidateResponse {
  playgroundId: string;
  outcome?:
    | { $case: "failure"; failure: PlaygroundFailure }
    | { $case: "success"; success: Empty };
}

export interface PlaygroundTestResponse {
  playgroundId: string;
  outcome?:
    | { $case: "failure"; failure: PlaygroundFailure }
    | { $case: "success"; success: PlaygroundTestResponse_TestResults };
}

export interface PlaygroundTestResponse_TestResults {
  results: TestResults | undefined;
}

export interface PlaygroundEvaluateResponse {
  playgroundId: string;
  outcome?:
    | { $case: "failure"; failure: PlaygroundFailure }
    | { $case: "success"; success: PlaygroundEvaluateResponse_EvalResultList };
}

export interface PlaygroundEvaluateResponse_EvalResult {
  action: string;
  effect: Effect;
  policy: string;
  effectiveDerivedRoles: string[];
  validationErrors: ValidationError[];
}

export interface PlaygroundEvaluateResponse_EvalResultList {
  results: PlaygroundEvaluateResponse_EvalResult[];
}

export interface PlaygroundProxyResponse {
  playgroundId: string;
  outcome?:
    | { $case: "failure"; failure: PlaygroundFailure }
    | { $case: "checkResourceSet"; checkResourceSet: CheckResourceSetResponse }
    | {
        $case: "checkResourceBatch";
        checkResourceBatch: CheckResourceBatchResponse;
      }
    | { $case: "planResources"; planResources: PlanResourcesResponse }
    | { $case: "checkResources"; checkResources: CheckResourcesResponse };
}

export interface AddOrUpdatePolicyResponse {
  success: Empty | undefined;
}

export interface ListAuditLogEntriesResponse {
  entry?:
    | { $case: "accessLogEntry"; accessLogEntry: AccessLogEntry }
    | { $case: "decisionLogEntry"; decisionLogEntry: DecisionLogEntry };
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

export interface AddOrUpdateSchemaResponse {}

export interface ListSchemasResponse {
  schemaIds: string[];
}

export interface GetSchemaResponse {
  schemas: Schema[];
}

export interface DeleteSchemaResponse {}

export interface ReloadStoreResponse {}

function createBasePlanResourcesResponse(): PlanResourcesResponse {
  return {
    requestId: "",
    action: "",
    resourceKind: "",
    policyVersion: "",
    filter: undefined,
    meta: undefined,
  };
}

export const PlanResourcesResponse = {
  encode(
    message: PlanResourcesResponse,
    writer: _m0.Writer = _m0.Writer.create()
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
      PlanResourcesResponse_Filter.encode(
        message.filter,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.meta !== undefined) {
      PlanResourcesResponse_Meta.encode(
        message.meta,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlanResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesResponse();
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
          message.resourceKind = reader.string();
          break;
        case 4:
          message.policyVersion = reader.string();
          break;
        case 5:
          message.filter = PlanResourcesResponse_Filter.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.meta = PlanResourcesResponse_Meta.decode(
            reader,
            reader.uint32()
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

function createBasePlanResourcesResponse_Expression(): PlanResourcesResponse_Expression {
  return { operator: "", operands: [] };
}

export const PlanResourcesResponse_Expression = {
  encode(
    message: PlanResourcesResponse_Expression,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    for (const v of message.operands) {
      PlanResourcesResponse_Expression_Operand.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlanResourcesResponse_Expression {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesResponse_Expression();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.operands.push(
            PlanResourcesResponse_Expression_Operand.decode(
              reader,
              reader.uint32()
            )
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

function createBasePlanResourcesResponse_Expression_Operand(): PlanResourcesResponse_Expression_Operand {
  return { node: undefined };
}

export const PlanResourcesResponse_Expression_Operand = {
  encode(
    message: PlanResourcesResponse_Expression_Operand,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.node?.$case === "value") {
      Value.encode(
        Value.wrap(message.node.value),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.node?.$case === "expression") {
      PlanResourcesResponse_Expression.encode(
        message.node.expression,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.node?.$case === "variable") {
      writer.uint32(26).string(message.node.variable);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlanResourcesResponse_Expression_Operand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesResponse_Expression_Operand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.node = {
            $case: "value",
            value: Value.unwrap(Value.decode(reader, reader.uint32())),
          };
          break;
        case 2:
          message.node = {
            $case: "expression",
            expression: PlanResourcesResponse_Expression.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 3:
          message.node = { $case: "variable", variable: reader.string() };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlanResourcesResponse_Filter(): PlanResourcesResponse_Filter {
  return { kind: 0, condition: undefined };
}

export const PlanResourcesResponse_Filter = {
  encode(
    message: PlanResourcesResponse_Filter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.condition !== undefined) {
      PlanResourcesResponse_Expression_Operand.encode(
        message.condition,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlanResourcesResponse_Filter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesResponse_Filter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.int32() as any;
          break;
        case 2:
          message.condition = PlanResourcesResponse_Expression_Operand.decode(
            reader,
            reader.uint32()
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

function createBasePlanResourcesResponse_Meta(): PlanResourcesResponse_Meta {
  return { filterDebug: "", matchedScope: "" };
}

export const PlanResourcesResponse_Meta = {
  encode(
    message: PlanResourcesResponse_Meta,
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
  ): PlanResourcesResponse_Meta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesResponse_Meta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filterDebug = reader.string();
          break;
        case 2:
          message.matchedScope = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    Object.entries(message.resourceInstances).forEach(([key, value]) => {
      CheckResourceSetResponse_ResourceInstancesEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    if (message.meta !== undefined) {
      CheckResourceSetResponse_Meta.encode(
        message.meta,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourceSetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          const entry2 = CheckResourceSetResponse_ResourceInstancesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.resourceInstances[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.meta = CheckResourceSetResponse_Meta.decode(
            reader,
            reader.uint32()
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

function createBaseCheckResourceSetResponse_ActionEffectMap(): CheckResourceSetResponse_ActionEffectMap {
  return { actions: {}, validationErrors: [] };
}

export const CheckResourceSetResponse_ActionEffectMap = {
  encode(
    message: CheckResourceSetResponse_ActionEffectMap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourceSetResponse_ActionEffectMap_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourceSetResponse_ActionEffectMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_ActionEffectMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 =
            CheckResourceSetResponse_ActionEffectMap_ActionsEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry1.value !== undefined) {
            message.actions[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32())
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

function createBaseCheckResourceSetResponse_ActionEffectMap_ActionsEntry(): CheckResourceSetResponse_ActionEffectMap_ActionsEntry {
  return { key: "", value: 0 };
}

export const CheckResourceSetResponse_ActionEffectMap_ActionsEntry = {
  encode(
    message: CheckResourceSetResponse_ActionEffectMap_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
  ): CheckResourceSetResponse_ActionEffectMap_ActionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourceSetResponse_ActionEffectMap_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.resourceInstances).forEach(([key, value]) => {
      CheckResourceSetResponse_Meta_ResourceInstancesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourceSetResponse_Meta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_Meta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 =
            CheckResourceSetResponse_Meta_ResourceInstancesEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry1.value !== undefined) {
            message.resourceInstances[entry1.key] = entry1.value;
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

function createBaseCheckResourceSetResponse_Meta_EffectMeta(): CheckResourceSetResponse_Meta_EffectMeta {
  return { matchedPolicy: "", matchedScope: "" };
}

export const CheckResourceSetResponse_Meta_EffectMeta = {
  encode(
    message: CheckResourceSetResponse_Meta_EffectMeta,
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
  ): CheckResourceSetResponse_Meta_EffectMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_Meta_EffectMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchedPolicy = reader.string();
          break;
        case 2:
          message.matchedScope = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    for (const v of message.effectiveDerivedRoles) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourceSetResponse_Meta_ActionMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_Meta_ActionMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 =
            CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry1.value !== undefined) {
            message.actions[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.effectiveDerivedRoles.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckResourceSetResponse_Meta_EffectMeta.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourceSetResponse_Meta_ActionMeta_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = CheckResourceSetResponse_Meta_EffectMeta.decode(
            reader,
            reader.uint32()
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

function createBaseCheckResourceSetResponse_Meta_ResourceInstancesEntry(): CheckResourceSetResponse_Meta_ResourceInstancesEntry {
  return { key: "", value: undefined };
}

export const CheckResourceSetResponse_Meta_ResourceInstancesEntry = {
  encode(
    message: CheckResourceSetResponse_Meta_ResourceInstancesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckResourceSetResponse_Meta_ActionMeta.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourceSetResponse_Meta_ResourceInstancesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourceSetResponse_Meta_ResourceInstancesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = CheckResourceSetResponse_Meta_ActionMeta.decode(
            reader,
            reader.uint32()
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

function createBaseCheckResourceSetResponse_ResourceInstancesEntry(): CheckResourceSetResponse_ResourceInstancesEntry {
  return { key: "", value: undefined };
}

export const CheckResourceSetResponse_ResourceInstancesEntry = {
  encode(
    message: CheckResourceSetResponse_ResourceInstancesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckResourceSetResponse_ActionEffectMap.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourceSetResponse_ResourceInstancesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_ResourceInstancesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = CheckResourceSetResponse_ActionEffectMap.decode(
            reader,
            reader.uint32()
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

function createBaseCheckResourceBatchResponse(): CheckResourceBatchResponse {
  return { requestId: "", results: [] };
}

export const CheckResourceBatchResponse = {
  encode(
    message: CheckResourceBatchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    for (const v of message.results) {
      CheckResourceBatchResponse_ActionEffectMap.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourceBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.results.push(
            CheckResourceBatchResponse_ActionEffectMap.decode(
              reader,
              reader.uint32()
            )
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

function createBaseCheckResourceBatchResponse_ActionEffectMap(): CheckResourceBatchResponse_ActionEffectMap {
  return { resourceId: "", actions: {}, validationErrors: [] };
}

export const CheckResourceBatchResponse_ActionEffectMap = {
  encode(
    message: CheckResourceBatchResponse_ActionEffectMap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourceBatchResponse_ActionEffectMap_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourceBatchResponse_ActionEffectMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceBatchResponse_ActionEffectMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.string();
          break;
        case 2:
          const entry2 =
            CheckResourceBatchResponse_ActionEffectMap_ActionsEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry2.value !== undefined) {
            message.actions[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32())
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

function createBaseCheckResourceBatchResponse_ActionEffectMap_ActionsEntry(): CheckResourceBatchResponse_ActionEffectMap_ActionsEntry {
  return { key: "", value: 0 };
}

export const CheckResourceBatchResponse_ActionEffectMap_ActionsEntry = {
  encode(
    message: CheckResourceBatchResponse_ActionEffectMap_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
  ): CheckResourceBatchResponse_ActionEffectMap_ActionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourceBatchResponse_ActionEffectMap_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    for (const v of message.results) {
      CheckResourcesResponse_ResultEntry.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.results.push(
            CheckResourcesResponse_ResultEntry.decode(reader, reader.uint32())
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

function createBaseCheckResourcesResponse_ResultEntry(): CheckResourcesResponse_ResultEntry {
  return {
    resource: undefined,
    actions: {},
    validationErrors: [],
    meta: undefined,
  };
}

export const CheckResourcesResponse_ResultEntry = {
  encode(
    message: CheckResourcesResponse_ResultEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resource !== undefined) {
      CheckResourcesResponse_ResultEntry_Resource.encode(
        message.resource,
        writer.uint32(10).fork()
      ).ldelim();
    }
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourcesResponse_ResultEntry_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.meta !== undefined) {
      CheckResourcesResponse_ResultEntry_Meta.encode(
        message.meta,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourcesResponse_ResultEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse_ResultEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = CheckResourcesResponse_ResultEntry_Resource.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          const entry2 = CheckResourcesResponse_ResultEntry_ActionsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.actions[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.meta = CheckResourcesResponse_ResultEntry_Meta.decode(
            reader,
            reader.uint32()
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

function createBaseCheckResourcesResponse_ResultEntry_Resource(): CheckResourcesResponse_ResultEntry_Resource {
  return { id: "", kind: "", policyVersion: "", scope: "" };
}

export const CheckResourcesResponse_ResultEntry_Resource = {
  encode(
    message: CheckResourcesResponse_ResultEntry_Resource,
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
  ): CheckResourcesResponse_ResultEntry_Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse_ResultEntry_Resource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.kind = reader.string();
          break;
        case 3:
          message.policyVersion = reader.string();
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

function createBaseCheckResourcesResponse_ResultEntry_Meta(): CheckResourcesResponse_ResultEntry_Meta {
  return { actions: {}, effectiveDerivedRoles: [] };
}

export const CheckResourcesResponse_ResultEntry_Meta = {
  encode(
    message: CheckResourcesResponse_ResultEntry_Meta,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourcesResponse_ResultEntry_Meta_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    for (const v of message.effectiveDerivedRoles) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourcesResponse_ResultEntry_Meta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse_ResultEntry_Meta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 =
            CheckResourcesResponse_ResultEntry_Meta_ActionsEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry1.value !== undefined) {
            message.actions[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.effectiveDerivedRoles.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
  ): CheckResourcesResponse_ResultEntry_Meta_EffectMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourcesResponse_ResultEntry_Meta_EffectMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchedPolicy = reader.string();
          break;
        case 2:
          message.matchedScope = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckResourcesResponse_ResultEntry_Meta_EffectMeta.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckResourcesResponse_ResultEntry_Meta_ActionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourcesResponse_ResultEntry_Meta_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value =
            CheckResourcesResponse_ResultEntry_Meta_EffectMeta.decode(
              reader,
              reader.uint32()
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

function createBaseCheckResourcesResponse_ResultEntry_ActionsEntry(): CheckResourcesResponse_ResultEntry_ActionsEntry {
  return { key: "", value: 0 };
}

export const CheckResourcesResponse_ResultEntry_ActionsEntry = {
  encode(
    message: CheckResourcesResponse_ResultEntry_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
  ): CheckResourcesResponse_ResultEntry_ActionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse_ResultEntry_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlaygroundFailure(): PlaygroundFailure {
  return { errors: [] };
}

export const PlaygroundFailure = {
  encode(
    message: PlaygroundFailure,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.errors) {
      PlaygroundFailure_Error.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlaygroundFailure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaygroundFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errors.push(
            PlaygroundFailure_Error.decode(reader, reader.uint32())
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

function createBasePlaygroundFailure_Error(): PlaygroundFailure_Error {
  return { file: "", error: "" };
}

export const PlaygroundFailure_Error = {
  encode(
    message: PlaygroundFailure_Error,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlaygroundFailure_Error {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaygroundFailure_Error();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = reader.string();
          break;
        case 2:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlaygroundValidateResponse(): PlaygroundValidateResponse {
  return { playgroundId: "", outcome: undefined };
}

export const PlaygroundValidateResponse = {
  encode(
    message: PlaygroundValidateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.playgroundId !== "") {
      writer.uint32(10).string(message.playgroundId);
    }
    if (message.outcome?.$case === "failure") {
      PlaygroundFailure.encode(
        message.outcome.failure,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.outcome?.$case === "success") {
      Empty.encode(message.outcome.success, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlaygroundValidateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaygroundValidateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playgroundId = reader.string();
          break;
        case 2:
          message.outcome = {
            $case: "failure",
            failure: PlaygroundFailure.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.outcome = {
            $case: "success",
            success: Empty.decode(reader, reader.uint32()),
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

function createBasePlaygroundTestResponse(): PlaygroundTestResponse {
  return { playgroundId: "", outcome: undefined };
}

export const PlaygroundTestResponse = {
  encode(
    message: PlaygroundTestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.playgroundId !== "") {
      writer.uint32(10).string(message.playgroundId);
    }
    if (message.outcome?.$case === "failure") {
      PlaygroundFailure.encode(
        message.outcome.failure,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.outcome?.$case === "success") {
      PlaygroundTestResponse_TestResults.encode(
        message.outcome.success,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlaygroundTestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaygroundTestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playgroundId = reader.string();
          break;
        case 2:
          message.outcome = {
            $case: "failure",
            failure: PlaygroundFailure.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.outcome = {
            $case: "success",
            success: PlaygroundTestResponse_TestResults.decode(
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

function createBasePlaygroundTestResponse_TestResults(): PlaygroundTestResponse_TestResults {
  return { results: undefined };
}

export const PlaygroundTestResponse_TestResults = {
  encode(
    message: PlaygroundTestResponse_TestResults,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.results !== undefined) {
      TestResults.encode(message.results, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlaygroundTestResponse_TestResults {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaygroundTestResponse_TestResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results = TestResults.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBasePlaygroundEvaluateResponse(): PlaygroundEvaluateResponse {
  return { playgroundId: "", outcome: undefined };
}

export const PlaygroundEvaluateResponse = {
  encode(
    message: PlaygroundEvaluateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.playgroundId !== "") {
      writer.uint32(10).string(message.playgroundId);
    }
    if (message.outcome?.$case === "failure") {
      PlaygroundFailure.encode(
        message.outcome.failure,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.outcome?.$case === "success") {
      PlaygroundEvaluateResponse_EvalResultList.encode(
        message.outcome.success,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlaygroundEvaluateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaygroundEvaluateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playgroundId = reader.string();
          break;
        case 2:
          message.outcome = {
            $case: "failure",
            failure: PlaygroundFailure.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.outcome = {
            $case: "success",
            success: PlaygroundEvaluateResponse_EvalResultList.decode(
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

function createBasePlaygroundEvaluateResponse_EvalResult(): PlaygroundEvaluateResponse_EvalResult {
  return {
    action: "",
    effect: 0,
    policy: "",
    effectiveDerivedRoles: [],
    validationErrors: [],
  };
}

export const PlaygroundEvaluateResponse_EvalResult = {
  encode(
    message: PlaygroundEvaluateResponse_EvalResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.action !== "") {
      writer.uint32(10).string(message.action);
    }
    if (message.effect !== 0) {
      writer.uint32(16).int32(message.effect);
    }
    if (message.policy !== "") {
      writer.uint32(26).string(message.policy);
    }
    for (const v of message.effectiveDerivedRoles) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlaygroundEvaluateResponse_EvalResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaygroundEvaluateResponse_EvalResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.string();
          break;
        case 2:
          message.effect = reader.int32() as any;
          break;
        case 3:
          message.policy = reader.string();
          break;
        case 4:
          message.effectiveDerivedRoles.push(reader.string());
          break;
        case 5:
          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32())
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

function createBasePlaygroundEvaluateResponse_EvalResultList(): PlaygroundEvaluateResponse_EvalResultList {
  return { results: [] };
}

export const PlaygroundEvaluateResponse_EvalResultList = {
  encode(
    message: PlaygroundEvaluateResponse_EvalResultList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.results) {
      PlaygroundEvaluateResponse_EvalResult.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlaygroundEvaluateResponse_EvalResultList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaygroundEvaluateResponse_EvalResultList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(
            PlaygroundEvaluateResponse_EvalResult.decode(
              reader,
              reader.uint32()
            )
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

function createBasePlaygroundProxyResponse(): PlaygroundProxyResponse {
  return { playgroundId: "", outcome: undefined };
}

export const PlaygroundProxyResponse = {
  encode(
    message: PlaygroundProxyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.playgroundId !== "") {
      writer.uint32(10).string(message.playgroundId);
    }
    if (message.outcome?.$case === "failure") {
      PlaygroundFailure.encode(
        message.outcome.failure,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.outcome?.$case === "checkResourceSet") {
      CheckResourceSetResponse.encode(
        message.outcome.checkResourceSet,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.outcome?.$case === "checkResourceBatch") {
      CheckResourceBatchResponse.encode(
        message.outcome.checkResourceBatch,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.outcome?.$case === "planResources") {
      PlanResourcesResponse.encode(
        message.outcome.planResources,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.outcome?.$case === "checkResources") {
      CheckResourcesResponse.encode(
        message.outcome.checkResources,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlaygroundProxyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaygroundProxyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playgroundId = reader.string();
          break;
        case 2:
          message.outcome = {
            $case: "failure",
            failure: PlaygroundFailure.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.outcome = {
            $case: "checkResourceSet",
            checkResourceSet: CheckResourceSetResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 4:
          message.outcome = {
            $case: "checkResourceBatch",
            checkResourceBatch: CheckResourceBatchResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 5:
          message.outcome = {
            $case: "planResources",
            planResources: PlanResourcesResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 6:
          message.outcome = {
            $case: "checkResources",
            checkResources: CheckResourcesResponse.decode(
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

function createBaseAddOrUpdatePolicyResponse(): AddOrUpdatePolicyResponse {
  return { success: undefined };
}

export const AddOrUpdatePolicyResponse = {
  encode(
    message: AddOrUpdatePolicyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success !== undefined) {
      Empty.encode(message.success, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddOrUpdatePolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddOrUpdatePolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = Empty.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entry?.$case === "accessLogEntry") {
      AccessLogEntry.encode(
        message.entry.accessLogEntry,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.entry?.$case === "decisionLogEntry") {
      DecisionLogEntry.encode(
        message.entry.decisionLogEntry,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListAuditLogEntriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAuditLogEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entry = {
            $case: "accessLogEntry",
            accessLogEntry: AccessLogEntry.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.entry = {
            $case: "decisionLogEntry",
            decisionLogEntry: DecisionLogEntry.decode(reader, reader.uint32()),
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

function createBaseServerInfoResponse(): ServerInfoResponse {
  return { version: "", commit: "", buildDate: "" };
}

export const ServerInfoResponse = {
  encode(
    message: ServerInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.commit = reader.string();
          break;
        case 3:
          message.buildDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.policyIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListPoliciesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPoliciesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.policies) {
      Policy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPolicyResponse();
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

function createBaseAddOrUpdateSchemaResponse(): AddOrUpdateSchemaResponse {
  return {};
}

export const AddOrUpdateSchemaResponse = {
  encode(
    _: AddOrUpdateSchemaResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddOrUpdateSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddOrUpdateSchemaResponse();
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

function createBaseListSchemasResponse(): ListSchemasResponse {
  return { schemaIds: [] };
}

export const ListSchemasResponse = {
  encode(
    message: ListSchemasResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.schemaIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSchemasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSchemasResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.schemas) {
      Schema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSchemaResponse();
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

function createBaseDeleteSchemaResponse(): DeleteSchemaResponse {
  return {};
}

export const DeleteSchemaResponse = {
  encode(
    _: DeleteSchemaResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSchemaResponse();
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

function createBaseReloadStoreResponse(): ReloadStoreResponse {
  return {};
}

export const ReloadStoreResponse = {
  encode(
    _: ReloadStoreResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReloadStoreResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReloadStoreResponse();
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
