// package: cerbos.response.v1
// file: cerbos/response/v1/response.proto

import * as jspb from "google-protobuf";
import * as cerbos_audit_v1_audit_pb from "../../../cerbos/audit/v1/audit_pb";
import * as cerbos_effect_v1_effect_pb from "../../../cerbos/effect/v1/effect_pb";
import * as cerbos_policy_v1_policy_pb from "../../../cerbos/policy/v1/policy_pb";
import * as cerbos_schema_v1_schema_pb from "../../../cerbos/schema/v1/schema_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";

export class PlanResourcesResponse extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  getResourceKind(): string;
  setResourceKind(value: string): void;

  getPolicyVersion(): string;
  setPolicyVersion(value: string): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): PlanResourcesResponse.Filter | undefined;
  setFilter(value?: PlanResourcesResponse.Filter): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): PlanResourcesResponse.Meta | undefined;
  setMeta(value?: PlanResourcesResponse.Meta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanResourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlanResourcesResponse): PlanResourcesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanResourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanResourcesResponse;
  static deserializeBinaryFromReader(message: PlanResourcesResponse, reader: jspb.BinaryReader): PlanResourcesResponse;
}

export namespace PlanResourcesResponse {
  export type AsObject = {
    requestId: string,
    action: string,
    resourceKind: string,
    policyVersion: string,
    filter?: PlanResourcesResponse.Filter.AsObject,
    meta?: PlanResourcesResponse.Meta.AsObject,
  }

  export class Expression extends jspb.Message {
    getOperator(): string;
    setOperator(value: string): void;

    clearOperandsList(): void;
    getOperandsList(): Array<PlanResourcesResponse.Expression.Operand>;
    setOperandsList(value: Array<PlanResourcesResponse.Expression.Operand>): void;
    addOperands(value?: PlanResourcesResponse.Expression.Operand, index?: number): PlanResourcesResponse.Expression.Operand;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Expression.AsObject;
    static toObject(includeInstance: boolean, msg: Expression): Expression.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Expression, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Expression;
    static deserializeBinaryFromReader(message: Expression, reader: jspb.BinaryReader): Expression;
  }

  export namespace Expression {
    export type AsObject = {
      operator: string,
      operandsList: Array<PlanResourcesResponse.Expression.Operand.AsObject>,
    }

    export class Operand extends jspb.Message {
      hasValue(): boolean;
      clearValue(): void;
      getValue(): google_protobuf_struct_pb.Value | undefined;
      setValue(value?: google_protobuf_struct_pb.Value): void;

      hasExpression(): boolean;
      clearExpression(): void;
      getExpression(): PlanResourcesResponse.Expression | undefined;
      setExpression(value?: PlanResourcesResponse.Expression): void;

      hasVariable(): boolean;
      clearVariable(): void;
      getVariable(): string;
      setVariable(value: string): void;

      getNodeCase(): Operand.NodeCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Operand.AsObject;
      static toObject(includeInstance: boolean, msg: Operand): Operand.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Operand, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Operand;
      static deserializeBinaryFromReader(message: Operand, reader: jspb.BinaryReader): Operand;
    }

    export namespace Operand {
      export type AsObject = {
        value?: google_protobuf_struct_pb.Value.AsObject,
        expression?: PlanResourcesResponse.Expression.AsObject,
        variable: string,
      }

      export enum NodeCase {
        NODE_NOT_SET = 0,
        VALUE = 1,
        EXPRESSION = 2,
        VARIABLE = 3,
      }
    }
  }

  export class Filter extends jspb.Message {
    getKind(): PlanResourcesResponse.Filter.KindMap[keyof PlanResourcesResponse.Filter.KindMap];
    setKind(value: PlanResourcesResponse.Filter.KindMap[keyof PlanResourcesResponse.Filter.KindMap]): void;

    hasCondition(): boolean;
    clearCondition(): void;
    getCondition(): PlanResourcesResponse.Expression.Operand | undefined;
    setCondition(value?: PlanResourcesResponse.Expression.Operand): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
  }

  export namespace Filter {
    export type AsObject = {
      kind: PlanResourcesResponse.Filter.KindMap[keyof PlanResourcesResponse.Filter.KindMap],
      condition?: PlanResourcesResponse.Expression.Operand.AsObject,
    }

    export interface KindMap {
      KIND_UNSPECIFIED: 0;
      KIND_ALWAYS_ALLOWED: 1;
      KIND_ALWAYS_DENIED: 2;
      KIND_CONDITIONAL: 3;
    }

    export const Kind: KindMap;
  }

  export class Meta extends jspb.Message {
    getFilterDebug(): string;
    setFilterDebug(value: string): void;

    getMatchedScope(): string;
    setMatchedScope(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Meta.AsObject;
    static toObject(includeInstance: boolean, msg: Meta): Meta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Meta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Meta;
    static deserializeBinaryFromReader(message: Meta, reader: jspb.BinaryReader): Meta;
  }

  export namespace Meta {
    export type AsObject = {
      filterDebug: string,
      matchedScope: string,
    }
  }
}

export class CheckResourceSetResponse extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getResourceInstancesMap(): jspb.Map<string, CheckResourceSetResponse.ActionEffectMap>;
  clearResourceInstancesMap(): void;
  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): CheckResourceSetResponse.Meta | undefined;
  setMeta(value?: CheckResourceSetResponse.Meta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResourceSetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResourceSetResponse): CheckResourceSetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckResourceSetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResourceSetResponse;
  static deserializeBinaryFromReader(message: CheckResourceSetResponse, reader: jspb.BinaryReader): CheckResourceSetResponse;
}

export namespace CheckResourceSetResponse {
  export type AsObject = {
    requestId: string,
    resourceInstancesMap: Array<[string, CheckResourceSetResponse.ActionEffectMap.AsObject]>,
    meta?: CheckResourceSetResponse.Meta.AsObject,
  }

  export class ActionEffectMap extends jspb.Message {
    getActionsMap(): jspb.Map<string, cerbos_effect_v1_effect_pb.Effect[keyof cerbos_effect_v1_effect_pb.Effect]>;
    clearActionsMap(): void;
    clearValidationErrorsList(): void;
    getValidationErrorsList(): Array<cerbos_schema_v1_schema_pb.ValidationError>;
    setValidationErrorsList(value: Array<cerbos_schema_v1_schema_pb.ValidationError>): void;
    addValidationErrors(value?: cerbos_schema_v1_schema_pb.ValidationError, index?: number): cerbos_schema_v1_schema_pb.ValidationError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionEffectMap.AsObject;
    static toObject(includeInstance: boolean, msg: ActionEffectMap): ActionEffectMap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActionEffectMap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionEffectMap;
    static deserializeBinaryFromReader(message: ActionEffectMap, reader: jspb.BinaryReader): ActionEffectMap;
  }

  export namespace ActionEffectMap {
    export type AsObject = {
      actionsMap: Array<[string, cerbos_effect_v1_effect_pb.Effect[keyof cerbos_effect_v1_effect_pb.Effect]]>,
      validationErrorsList: Array<cerbos_schema_v1_schema_pb.ValidationError.AsObject>,
    }
  }

  export class Meta extends jspb.Message {
    getResourceInstancesMap(): jspb.Map<string, CheckResourceSetResponse.Meta.ActionMeta>;
    clearResourceInstancesMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Meta.AsObject;
    static toObject(includeInstance: boolean, msg: Meta): Meta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Meta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Meta;
    static deserializeBinaryFromReader(message: Meta, reader: jspb.BinaryReader): Meta;
  }

  export namespace Meta {
    export type AsObject = {
      resourceInstancesMap: Array<[string, CheckResourceSetResponse.Meta.ActionMeta.AsObject]>,
    }

    export class EffectMeta extends jspb.Message {
      getMatchedPolicy(): string;
      setMatchedPolicy(value: string): void;

      getMatchedScope(): string;
      setMatchedScope(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EffectMeta.AsObject;
      static toObject(includeInstance: boolean, msg: EffectMeta): EffectMeta.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: EffectMeta, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EffectMeta;
      static deserializeBinaryFromReader(message: EffectMeta, reader: jspb.BinaryReader): EffectMeta;
    }

    export namespace EffectMeta {
      export type AsObject = {
        matchedPolicy: string,
        matchedScope: string,
      }
    }

    export class ActionMeta extends jspb.Message {
      getActionsMap(): jspb.Map<string, CheckResourceSetResponse.Meta.EffectMeta>;
      clearActionsMap(): void;
      clearEffectiveDerivedRolesList(): void;
      getEffectiveDerivedRolesList(): Array<string>;
      setEffectiveDerivedRolesList(value: Array<string>): void;
      addEffectiveDerivedRoles(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ActionMeta.AsObject;
      static toObject(includeInstance: boolean, msg: ActionMeta): ActionMeta.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ActionMeta, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ActionMeta;
      static deserializeBinaryFromReader(message: ActionMeta, reader: jspb.BinaryReader): ActionMeta;
    }

    export namespace ActionMeta {
      export type AsObject = {
        actionsMap: Array<[string, CheckResourceSetResponse.Meta.EffectMeta.AsObject]>,
        effectiveDerivedRolesList: Array<string>,
      }
    }
  }
}

export class CheckResourceBatchResponse extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  clearResultsList(): void;
  getResultsList(): Array<CheckResourceBatchResponse.ActionEffectMap>;
  setResultsList(value: Array<CheckResourceBatchResponse.ActionEffectMap>): void;
  addResults(value?: CheckResourceBatchResponse.ActionEffectMap, index?: number): CheckResourceBatchResponse.ActionEffectMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResourceBatchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResourceBatchResponse): CheckResourceBatchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckResourceBatchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResourceBatchResponse;
  static deserializeBinaryFromReader(message: CheckResourceBatchResponse, reader: jspb.BinaryReader): CheckResourceBatchResponse;
}

export namespace CheckResourceBatchResponse {
  export type AsObject = {
    requestId: string,
    resultsList: Array<CheckResourceBatchResponse.ActionEffectMap.AsObject>,
  }

  export class ActionEffectMap extends jspb.Message {
    getResourceId(): string;
    setResourceId(value: string): void;

    getActionsMap(): jspb.Map<string, cerbos_effect_v1_effect_pb.Effect[keyof cerbos_effect_v1_effect_pb.Effect]>;
    clearActionsMap(): void;
    clearValidationErrorsList(): void;
    getValidationErrorsList(): Array<cerbos_schema_v1_schema_pb.ValidationError>;
    setValidationErrorsList(value: Array<cerbos_schema_v1_schema_pb.ValidationError>): void;
    addValidationErrors(value?: cerbos_schema_v1_schema_pb.ValidationError, index?: number): cerbos_schema_v1_schema_pb.ValidationError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionEffectMap.AsObject;
    static toObject(includeInstance: boolean, msg: ActionEffectMap): ActionEffectMap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActionEffectMap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionEffectMap;
    static deserializeBinaryFromReader(message: ActionEffectMap, reader: jspb.BinaryReader): ActionEffectMap;
  }

  export namespace ActionEffectMap {
    export type AsObject = {
      resourceId: string,
      actionsMap: Array<[string, cerbos_effect_v1_effect_pb.Effect[keyof cerbos_effect_v1_effect_pb.Effect]]>,
      validationErrorsList: Array<cerbos_schema_v1_schema_pb.ValidationError.AsObject>,
    }
  }
}

export class CheckResourcesResponse extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  clearResultsList(): void;
  getResultsList(): Array<CheckResourcesResponse.ResultEntry>;
  setResultsList(value: Array<CheckResourcesResponse.ResultEntry>): void;
  addResults(value?: CheckResourcesResponse.ResultEntry, index?: number): CheckResourcesResponse.ResultEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResourcesResponse): CheckResourcesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckResourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResourcesResponse;
  static deserializeBinaryFromReader(message: CheckResourcesResponse, reader: jspb.BinaryReader): CheckResourcesResponse;
}

export namespace CheckResourcesResponse {
  export type AsObject = {
    requestId: string,
    resultsList: Array<CheckResourcesResponse.ResultEntry.AsObject>,
  }

  export class ResultEntry extends jspb.Message {
    hasResource(): boolean;
    clearResource(): void;
    getResource(): CheckResourcesResponse.ResultEntry.Resource | undefined;
    setResource(value?: CheckResourcesResponse.ResultEntry.Resource): void;

    getActionsMap(): jspb.Map<string, cerbos_effect_v1_effect_pb.Effect[keyof cerbos_effect_v1_effect_pb.Effect]>;
    clearActionsMap(): void;
    clearValidationErrorsList(): void;
    getValidationErrorsList(): Array<cerbos_schema_v1_schema_pb.ValidationError>;
    setValidationErrorsList(value: Array<cerbos_schema_v1_schema_pb.ValidationError>): void;
    addValidationErrors(value?: cerbos_schema_v1_schema_pb.ValidationError, index?: number): cerbos_schema_v1_schema_pb.ValidationError;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): CheckResourcesResponse.ResultEntry.Meta | undefined;
    setMeta(value?: CheckResourcesResponse.ResultEntry.Meta): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResultEntry.AsObject;
    static toObject(includeInstance: boolean, msg: ResultEntry): ResultEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResultEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResultEntry;
    static deserializeBinaryFromReader(message: ResultEntry, reader: jspb.BinaryReader): ResultEntry;
  }

  export namespace ResultEntry {
    export type AsObject = {
      resource?: CheckResourcesResponse.ResultEntry.Resource.AsObject,
      actionsMap: Array<[string, cerbos_effect_v1_effect_pb.Effect[keyof cerbos_effect_v1_effect_pb.Effect]]>,
      validationErrorsList: Array<cerbos_schema_v1_schema_pb.ValidationError.AsObject>,
      meta?: CheckResourcesResponse.ResultEntry.Meta.AsObject,
    }

    export class Resource extends jspb.Message {
      getId(): string;
      setId(value: string): void;

      getKind(): string;
      setKind(value: string): void;

      getPolicyVersion(): string;
      setPolicyVersion(value: string): void;

      getScope(): string;
      setScope(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Resource.AsObject;
      static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Resource;
      static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
    }

    export namespace Resource {
      export type AsObject = {
        id: string,
        kind: string,
        policyVersion: string,
        scope: string,
      }
    }

    export class Meta extends jspb.Message {
      getActionsMap(): jspb.Map<string, CheckResourcesResponse.ResultEntry.Meta.EffectMeta>;
      clearActionsMap(): void;
      clearEffectiveDerivedRolesList(): void;
      getEffectiveDerivedRolesList(): Array<string>;
      setEffectiveDerivedRolesList(value: Array<string>): void;
      addEffectiveDerivedRoles(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Meta.AsObject;
      static toObject(includeInstance: boolean, msg: Meta): Meta.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Meta, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Meta;
      static deserializeBinaryFromReader(message: Meta, reader: jspb.BinaryReader): Meta;
    }

    export namespace Meta {
      export type AsObject = {
        actionsMap: Array<[string, CheckResourcesResponse.ResultEntry.Meta.EffectMeta.AsObject]>,
        effectiveDerivedRolesList: Array<string>,
      }

      export class EffectMeta extends jspb.Message {
        getMatchedPolicy(): string;
        setMatchedPolicy(value: string): void;

        getMatchedScope(): string;
        setMatchedScope(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): EffectMeta.AsObject;
        static toObject(includeInstance: boolean, msg: EffectMeta): EffectMeta.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: EffectMeta, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): EffectMeta;
        static deserializeBinaryFromReader(message: EffectMeta, reader: jspb.BinaryReader): EffectMeta;
      }

      export namespace EffectMeta {
        export type AsObject = {
          matchedPolicy: string,
          matchedScope: string,
        }
      }
    }
  }
}

export class PlaygroundFailure extends jspb.Message {
  clearErrorsList(): void;
  getErrorsList(): Array<PlaygroundFailure.Error>;
  setErrorsList(value: Array<PlaygroundFailure.Error>): void;
  addErrors(value?: PlaygroundFailure.Error, index?: number): PlaygroundFailure.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaygroundFailure.AsObject;
  static toObject(includeInstance: boolean, msg: PlaygroundFailure): PlaygroundFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaygroundFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaygroundFailure;
  static deserializeBinaryFromReader(message: PlaygroundFailure, reader: jspb.BinaryReader): PlaygroundFailure;
}

export namespace PlaygroundFailure {
  export type AsObject = {
    errorsList: Array<PlaygroundFailure.Error.AsObject>,
  }

  export class Error extends jspb.Message {
    getFile(): string;
    setFile(value: string): void;

    getError(): string;
    setError(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      file: string,
      error: string,
    }
  }
}

export class PlaygroundValidateResponse extends jspb.Message {
  getPlaygroundId(): string;
  setPlaygroundId(value: string): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): PlaygroundFailure | undefined;
  setFailure(value?: PlaygroundFailure): void;

  hasSuccess(): boolean;
  clearSuccess(): void;
  getSuccess(): google_protobuf_empty_pb.Empty | undefined;
  setSuccess(value?: google_protobuf_empty_pb.Empty): void;

  getOutcomeCase(): PlaygroundValidateResponse.OutcomeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaygroundValidateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlaygroundValidateResponse): PlaygroundValidateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaygroundValidateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaygroundValidateResponse;
  static deserializeBinaryFromReader(message: PlaygroundValidateResponse, reader: jspb.BinaryReader): PlaygroundValidateResponse;
}

export namespace PlaygroundValidateResponse {
  export type AsObject = {
    playgroundId: string,
    failure?: PlaygroundFailure.AsObject,
    success?: google_protobuf_empty_pb.Empty.AsObject,
  }

  export enum OutcomeCase {
    OUTCOME_NOT_SET = 0,
    FAILURE = 2,
    SUCCESS = 3,
  }
}

export class PlaygroundTestResponse extends jspb.Message {
  getPlaygroundId(): string;
  setPlaygroundId(value: string): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): PlaygroundFailure | undefined;
  setFailure(value?: PlaygroundFailure): void;

  hasSuccess(): boolean;
  clearSuccess(): void;
  getSuccess(): PlaygroundTestResponse.TestResults | undefined;
  setSuccess(value?: PlaygroundTestResponse.TestResults): void;

  getOutcomeCase(): PlaygroundTestResponse.OutcomeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaygroundTestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlaygroundTestResponse): PlaygroundTestResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaygroundTestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaygroundTestResponse;
  static deserializeBinaryFromReader(message: PlaygroundTestResponse, reader: jspb.BinaryReader): PlaygroundTestResponse;
}

export namespace PlaygroundTestResponse {
  export type AsObject = {
    playgroundId: string,
    failure?: PlaygroundFailure.AsObject,
    success?: PlaygroundTestResponse.TestResults.AsObject,
  }

  export class TestResults extends jspb.Message {
    hasResults(): boolean;
    clearResults(): void;
    getResults(): cerbos_policy_v1_policy_pb.TestResults | undefined;
    setResults(value?: cerbos_policy_v1_policy_pb.TestResults): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestResults.AsObject;
    static toObject(includeInstance: boolean, msg: TestResults): TestResults.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestResults, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestResults;
    static deserializeBinaryFromReader(message: TestResults, reader: jspb.BinaryReader): TestResults;
  }

  export namespace TestResults {
    export type AsObject = {
      results?: cerbos_policy_v1_policy_pb.TestResults.AsObject,
    }
  }

  export enum OutcomeCase {
    OUTCOME_NOT_SET = 0,
    FAILURE = 2,
    SUCCESS = 3,
  }
}

export class PlaygroundEvaluateResponse extends jspb.Message {
  getPlaygroundId(): string;
  setPlaygroundId(value: string): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): PlaygroundFailure | undefined;
  setFailure(value?: PlaygroundFailure): void;

  hasSuccess(): boolean;
  clearSuccess(): void;
  getSuccess(): PlaygroundEvaluateResponse.EvalResultList | undefined;
  setSuccess(value?: PlaygroundEvaluateResponse.EvalResultList): void;

  getOutcomeCase(): PlaygroundEvaluateResponse.OutcomeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaygroundEvaluateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlaygroundEvaluateResponse): PlaygroundEvaluateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaygroundEvaluateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaygroundEvaluateResponse;
  static deserializeBinaryFromReader(message: PlaygroundEvaluateResponse, reader: jspb.BinaryReader): PlaygroundEvaluateResponse;
}

export namespace PlaygroundEvaluateResponse {
  export type AsObject = {
    playgroundId: string,
    failure?: PlaygroundFailure.AsObject,
    success?: PlaygroundEvaluateResponse.EvalResultList.AsObject,
  }

  export class EvalResult extends jspb.Message {
    getAction(): string;
    setAction(value: string): void;

    getEffect(): cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap];
    setEffect(value: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap]): void;

    getPolicy(): string;
    setPolicy(value: string): void;

    clearEffectiveDerivedRolesList(): void;
    getEffectiveDerivedRolesList(): Array<string>;
    setEffectiveDerivedRolesList(value: Array<string>): void;
    addEffectiveDerivedRoles(value: string, index?: number): string;

    clearValidationErrorsList(): void;
    getValidationErrorsList(): Array<cerbos_schema_v1_schema_pb.ValidationError>;
    setValidationErrorsList(value: Array<cerbos_schema_v1_schema_pb.ValidationError>): void;
    addValidationErrors(value?: cerbos_schema_v1_schema_pb.ValidationError, index?: number): cerbos_schema_v1_schema_pb.ValidationError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EvalResult.AsObject;
    static toObject(includeInstance: boolean, msg: EvalResult): EvalResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EvalResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EvalResult;
    static deserializeBinaryFromReader(message: EvalResult, reader: jspb.BinaryReader): EvalResult;
  }

  export namespace EvalResult {
    export type AsObject = {
      action: string,
      effect: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap],
      policy: string,
      effectiveDerivedRolesList: Array<string>,
      validationErrorsList: Array<cerbos_schema_v1_schema_pb.ValidationError.AsObject>,
    }
  }

  export class EvalResultList extends jspb.Message {
    clearResultsList(): void;
    getResultsList(): Array<PlaygroundEvaluateResponse.EvalResult>;
    setResultsList(value: Array<PlaygroundEvaluateResponse.EvalResult>): void;
    addResults(value?: PlaygroundEvaluateResponse.EvalResult, index?: number): PlaygroundEvaluateResponse.EvalResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EvalResultList.AsObject;
    static toObject(includeInstance: boolean, msg: EvalResultList): EvalResultList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EvalResultList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EvalResultList;
    static deserializeBinaryFromReader(message: EvalResultList, reader: jspb.BinaryReader): EvalResultList;
  }

  export namespace EvalResultList {
    export type AsObject = {
      resultsList: Array<PlaygroundEvaluateResponse.EvalResult.AsObject>,
    }
  }

  export enum OutcomeCase {
    OUTCOME_NOT_SET = 0,
    FAILURE = 2,
    SUCCESS = 3,
  }
}

export class PlaygroundProxyResponse extends jspb.Message {
  getPlaygroundId(): string;
  setPlaygroundId(value: string): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): PlaygroundFailure | undefined;
  setFailure(value?: PlaygroundFailure): void;

  hasCheckResourceSet(): boolean;
  clearCheckResourceSet(): void;
  getCheckResourceSet(): CheckResourceSetResponse | undefined;
  setCheckResourceSet(value?: CheckResourceSetResponse): void;

  hasCheckResourceBatch(): boolean;
  clearCheckResourceBatch(): void;
  getCheckResourceBatch(): CheckResourceBatchResponse | undefined;
  setCheckResourceBatch(value?: CheckResourceBatchResponse): void;

  hasPlanResources(): boolean;
  clearPlanResources(): void;
  getPlanResources(): PlanResourcesResponse | undefined;
  setPlanResources(value?: PlanResourcesResponse): void;

  hasCheckResources(): boolean;
  clearCheckResources(): void;
  getCheckResources(): CheckResourcesResponse | undefined;
  setCheckResources(value?: CheckResourcesResponse): void;

  getOutcomeCase(): PlaygroundProxyResponse.OutcomeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaygroundProxyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlaygroundProxyResponse): PlaygroundProxyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaygroundProxyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaygroundProxyResponse;
  static deserializeBinaryFromReader(message: PlaygroundProxyResponse, reader: jspb.BinaryReader): PlaygroundProxyResponse;
}

export namespace PlaygroundProxyResponse {
  export type AsObject = {
    playgroundId: string,
    failure?: PlaygroundFailure.AsObject,
    checkResourceSet?: CheckResourceSetResponse.AsObject,
    checkResourceBatch?: CheckResourceBatchResponse.AsObject,
    planResources?: PlanResourcesResponse.AsObject,
    checkResources?: CheckResourcesResponse.AsObject,
  }

  export enum OutcomeCase {
    OUTCOME_NOT_SET = 0,
    FAILURE = 2,
    CHECK_RESOURCE_SET = 3,
    CHECK_RESOURCE_BATCH = 4,
    PLAN_RESOURCES = 5,
    CHECK_RESOURCES = 6,
  }
}

export class AddOrUpdatePolicyResponse extends jspb.Message {
  hasSuccess(): boolean;
  clearSuccess(): void;
  getSuccess(): google_protobuf_empty_pb.Empty | undefined;
  setSuccess(value?: google_protobuf_empty_pb.Empty): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOrUpdatePolicyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddOrUpdatePolicyResponse): AddOrUpdatePolicyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddOrUpdatePolicyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOrUpdatePolicyResponse;
  static deserializeBinaryFromReader(message: AddOrUpdatePolicyResponse, reader: jspb.BinaryReader): AddOrUpdatePolicyResponse;
}

export namespace AddOrUpdatePolicyResponse {
  export type AsObject = {
    success?: google_protobuf_empty_pb.Empty.AsObject,
  }
}

export class ListAuditLogEntriesResponse extends jspb.Message {
  hasAccessLogEntry(): boolean;
  clearAccessLogEntry(): void;
  getAccessLogEntry(): cerbos_audit_v1_audit_pb.AccessLogEntry | undefined;
  setAccessLogEntry(value?: cerbos_audit_v1_audit_pb.AccessLogEntry): void;

  hasDecisionLogEntry(): boolean;
  clearDecisionLogEntry(): void;
  getDecisionLogEntry(): cerbos_audit_v1_audit_pb.DecisionLogEntry | undefined;
  setDecisionLogEntry(value?: cerbos_audit_v1_audit_pb.DecisionLogEntry): void;

  getEntryCase(): ListAuditLogEntriesResponse.EntryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuditLogEntriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuditLogEntriesResponse): ListAuditLogEntriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAuditLogEntriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuditLogEntriesResponse;
  static deserializeBinaryFromReader(message: ListAuditLogEntriesResponse, reader: jspb.BinaryReader): ListAuditLogEntriesResponse;
}

export namespace ListAuditLogEntriesResponse {
  export type AsObject = {
    accessLogEntry?: cerbos_audit_v1_audit_pb.AccessLogEntry.AsObject,
    decisionLogEntry?: cerbos_audit_v1_audit_pb.DecisionLogEntry.AsObject,
  }

  export enum EntryCase {
    ENTRY_NOT_SET = 0,
    ACCESS_LOG_ENTRY = 1,
    DECISION_LOG_ENTRY = 2,
  }
}

export class ServerInfoResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  getCommit(): string;
  setCommit(value: string): void;

  getBuildDate(): string;
  setBuildDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerInfoResponse): ServerInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerInfoResponse;
  static deserializeBinaryFromReader(message: ServerInfoResponse, reader: jspb.BinaryReader): ServerInfoResponse;
}

export namespace ServerInfoResponse {
  export type AsObject = {
    version: string,
    commit: string,
    buildDate: string,
  }
}

export class ListPoliciesResponse extends jspb.Message {
  clearPolicyIdsList(): void;
  getPolicyIdsList(): Array<string>;
  setPolicyIdsList(value: Array<string>): void;
  addPolicyIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPoliciesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPoliciesResponse): ListPoliciesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPoliciesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPoliciesResponse;
  static deserializeBinaryFromReader(message: ListPoliciesResponse, reader: jspb.BinaryReader): ListPoliciesResponse;
}

export namespace ListPoliciesResponse {
  export type AsObject = {
    policyIdsList: Array<string>,
  }
}

export class GetPolicyResponse extends jspb.Message {
  clearPoliciesList(): void;
  getPoliciesList(): Array<cerbos_policy_v1_policy_pb.Policy>;
  setPoliciesList(value: Array<cerbos_policy_v1_policy_pb.Policy>): void;
  addPolicies(value?: cerbos_policy_v1_policy_pb.Policy, index?: number): cerbos_policy_v1_policy_pb.Policy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPolicyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPolicyResponse): GetPolicyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPolicyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPolicyResponse;
  static deserializeBinaryFromReader(message: GetPolicyResponse, reader: jspb.BinaryReader): GetPolicyResponse;
}

export namespace GetPolicyResponse {
  export type AsObject = {
    policiesList: Array<cerbos_policy_v1_policy_pb.Policy.AsObject>,
  }
}

export class AddOrUpdateSchemaResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOrUpdateSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddOrUpdateSchemaResponse): AddOrUpdateSchemaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddOrUpdateSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOrUpdateSchemaResponse;
  static deserializeBinaryFromReader(message: AddOrUpdateSchemaResponse, reader: jspb.BinaryReader): AddOrUpdateSchemaResponse;
}

export namespace AddOrUpdateSchemaResponse {
  export type AsObject = {
  }
}

export class ListSchemasResponse extends jspb.Message {
  clearSchemaIdsList(): void;
  getSchemaIdsList(): Array<string>;
  setSchemaIdsList(value: Array<string>): void;
  addSchemaIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSchemasResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSchemasResponse): ListSchemasResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSchemasResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSchemasResponse;
  static deserializeBinaryFromReader(message: ListSchemasResponse, reader: jspb.BinaryReader): ListSchemasResponse;
}

export namespace ListSchemasResponse {
  export type AsObject = {
    schemaIdsList: Array<string>,
  }
}

export class GetSchemaResponse extends jspb.Message {
  clearSchemasList(): void;
  getSchemasList(): Array<cerbos_schema_v1_schema_pb.Schema>;
  setSchemasList(value: Array<cerbos_schema_v1_schema_pb.Schema>): void;
  addSchemas(value?: cerbos_schema_v1_schema_pb.Schema, index?: number): cerbos_schema_v1_schema_pb.Schema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchemaResponse): GetSchemaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchemaResponse;
  static deserializeBinaryFromReader(message: GetSchemaResponse, reader: jspb.BinaryReader): GetSchemaResponse;
}

export namespace GetSchemaResponse {
  export type AsObject = {
    schemasList: Array<cerbos_schema_v1_schema_pb.Schema.AsObject>,
  }
}

export class DeleteSchemaResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSchemaResponse): DeleteSchemaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSchemaResponse;
  static deserializeBinaryFromReader(message: DeleteSchemaResponse, reader: jspb.BinaryReader): DeleteSchemaResponse;
}

export namespace DeleteSchemaResponse {
  export type AsObject = {
  }
}

export class ReloadStoreResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReloadStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReloadStoreResponse): ReloadStoreResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReloadStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReloadStoreResponse;
  static deserializeBinaryFromReader(message: ReloadStoreResponse, reader: jspb.BinaryReader): ReloadStoreResponse;
}

export namespace ReloadStoreResponse {
  export type AsObject = {
  }
}

