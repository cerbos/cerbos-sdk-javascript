// package: cerbos.engine.v1
// file: cerbos/engine/v1/engine.proto

import * as jspb from "google-protobuf";
import * as cerbos_effect_v1_effect_pb from "../../../cerbos/effect/v1/effect_pb";
import * as cerbos_schema_v1_schema_pb from "../../../cerbos/schema/v1/schema_pb";
import * as google_api_expr_v1alpha1_checked_pb from "../../../google/api/expr/v1alpha1/checked_pb";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class PlanResourcesRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  hasPrincipal(): boolean;
  clearPrincipal(): void;
  getPrincipal(): Principal | undefined;
  setPrincipal(value?: Principal): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): PlanResourcesRequest.Resource | undefined;
  setResource(value?: PlanResourcesRequest.Resource): void;

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
    principal?: Principal.AsObject,
    resource?: PlanResourcesRequest.Resource.AsObject,
    auxData?: AuxData.AsObject,
    includeMeta: boolean,
  }

  export class Resource extends jspb.Message {
    getKind(): string;
    setKind(value: string): void;

    getAttrMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearAttrMap(): void;
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
      kind: string,
      attrMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
      policyVersion: string,
      scope: string,
    }
  }
}

export class CheckInput extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  hasPrincipal(): boolean;
  clearPrincipal(): void;
  getPrincipal(): Principal | undefined;
  setPrincipal(value?: Principal): void;

  clearActionsList(): void;
  getActionsList(): Array<string>;
  setActionsList(value: Array<string>): void;
  addActions(value: string, index?: number): string;

  hasAuxData(): boolean;
  clearAuxData(): void;
  getAuxData(): AuxData | undefined;
  setAuxData(value?: AuxData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckInput.AsObject;
  static toObject(includeInstance: boolean, msg: CheckInput): CheckInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckInput;
  static deserializeBinaryFromReader(message: CheckInput, reader: jspb.BinaryReader): CheckInput;
}

export namespace CheckInput {
  export type AsObject = {
    requestId: string,
    resource?: Resource.AsObject,
    principal?: Principal.AsObject,
    actionsList: Array<string>,
    auxData?: AuxData.AsObject,
  }
}

export class CheckOutput extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  getActionsMap(): jspb.Map<string, CheckOutput.ActionEffect>;
  clearActionsMap(): void;
  clearEffectiveDerivedRolesList(): void;
  getEffectiveDerivedRolesList(): Array<string>;
  setEffectiveDerivedRolesList(value: Array<string>): void;
  addEffectiveDerivedRoles(value: string, index?: number): string;

  clearValidationErrorsList(): void;
  getValidationErrorsList(): Array<cerbos_schema_v1_schema_pb.ValidationError>;
  setValidationErrorsList(value: Array<cerbos_schema_v1_schema_pb.ValidationError>): void;
  addValidationErrors(value?: cerbos_schema_v1_schema_pb.ValidationError, index?: number): cerbos_schema_v1_schema_pb.ValidationError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckOutput.AsObject;
  static toObject(includeInstance: boolean, msg: CheckOutput): CheckOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckOutput;
  static deserializeBinaryFromReader(message: CheckOutput, reader: jspb.BinaryReader): CheckOutput;
}

export namespace CheckOutput {
  export type AsObject = {
    requestId: string,
    resourceId: string,
    actionsMap: Array<[string, CheckOutput.ActionEffect.AsObject]>,
    effectiveDerivedRolesList: Array<string>,
    validationErrorsList: Array<cerbos_schema_v1_schema_pb.ValidationError.AsObject>,
  }

  export class ActionEffect extends jspb.Message {
    getEffect(): cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap];
    setEffect(value: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap]): void;

    getPolicy(): string;
    setPolicy(value: string): void;

    getScope(): string;
    setScope(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionEffect.AsObject;
    static toObject(includeInstance: boolean, msg: ActionEffect): ActionEffect.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActionEffect, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionEffect;
    static deserializeBinaryFromReader(message: ActionEffect, reader: jspb.BinaryReader): ActionEffect;
  }

  export namespace ActionEffect {
    export type AsObject = {
      effect: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap],
      policy: string,
      scope: string,
    }
  }
}

export class PlanResourcesOutput extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  getKind(): string;
  setKind(value: string): void;

  getPolicyVersion(): string;
  setPolicyVersion(value: string): void;

  getScope(): string;
  setScope(value: string): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): PlanResourcesOutput.Node | undefined;
  setFilter(value?: PlanResourcesOutput.Node): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanResourcesOutput.AsObject;
  static toObject(includeInstance: boolean, msg: PlanResourcesOutput): PlanResourcesOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanResourcesOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanResourcesOutput;
  static deserializeBinaryFromReader(message: PlanResourcesOutput, reader: jspb.BinaryReader): PlanResourcesOutput;
}

export namespace PlanResourcesOutput {
  export type AsObject = {
    requestId: string,
    action: string,
    kind: string,
    policyVersion: string,
    scope: string,
    filter?: PlanResourcesOutput.Node.AsObject,
  }

  export class Node extends jspb.Message {
    hasLogicalOperation(): boolean;
    clearLogicalOperation(): void;
    getLogicalOperation(): PlanResourcesOutput.LogicalOperation | undefined;
    setLogicalOperation(value?: PlanResourcesOutput.LogicalOperation): void;

    hasExpression(): boolean;
    clearExpression(): void;
    getExpression(): google_api_expr_v1alpha1_checked_pb.CheckedExpr | undefined;
    setExpression(value?: google_api_expr_v1alpha1_checked_pb.CheckedExpr): void;

    getNodeCase(): Node.NodeCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Node.AsObject;
    static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Node;
    static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
  }

  export namespace Node {
    export type AsObject = {
      logicalOperation?: PlanResourcesOutput.LogicalOperation.AsObject,
      expression?: google_api_expr_v1alpha1_checked_pb.CheckedExpr.AsObject,
    }

    export enum NodeCase {
      NODE_NOT_SET = 0,
      LOGICAL_OPERATION = 1,
      EXPRESSION = 2,
    }
  }

  export class LogicalOperation extends jspb.Message {
    getOperator(): PlanResourcesOutput.LogicalOperation.OperatorMap[keyof PlanResourcesOutput.LogicalOperation.OperatorMap];
    setOperator(value: PlanResourcesOutput.LogicalOperation.OperatorMap[keyof PlanResourcesOutput.LogicalOperation.OperatorMap]): void;

    clearNodesList(): void;
    getNodesList(): Array<PlanResourcesOutput.Node>;
    setNodesList(value: Array<PlanResourcesOutput.Node>): void;
    addNodes(value?: PlanResourcesOutput.Node, index?: number): PlanResourcesOutput.Node;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicalOperation.AsObject;
    static toObject(includeInstance: boolean, msg: LogicalOperation): LogicalOperation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicalOperation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicalOperation;
    static deserializeBinaryFromReader(message: LogicalOperation, reader: jspb.BinaryReader): LogicalOperation;
  }

  export namespace LogicalOperation {
    export type AsObject = {
      operator: PlanResourcesOutput.LogicalOperation.OperatorMap[keyof PlanResourcesOutput.LogicalOperation.OperatorMap],
      nodesList: Array<PlanResourcesOutput.Node.AsObject>,
    }

    export interface OperatorMap {
      OPERATOR_UNSPECIFIED: 0;
      OPERATOR_AND: 1;
      OPERATOR_OR: 2;
      OPERATOR_NOT: 3;
    }

    export const Operator: OperatorMap;
  }
}

export class Resource extends jspb.Message {
  getKind(): string;
  setKind(value: string): void;

  getPolicyVersion(): string;
  setPolicyVersion(value: string): void;

  getId(): string;
  setId(value: string): void;

  getAttrMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearAttrMap(): void;
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
    kind: string,
    policyVersion: string,
    id: string,
    attrMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    scope: string,
  }
}

export class Principal extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPolicyVersion(): string;
  setPolicyVersion(value: string): void;

  clearRolesList(): void;
  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): void;
  addRoles(value: string, index?: number): string;

  getAttrMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearAttrMap(): void;
  getScope(): string;
  setScope(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Principal.AsObject;
  static toObject(includeInstance: boolean, msg: Principal): Principal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Principal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Principal;
  static deserializeBinaryFromReader(message: Principal, reader: jspb.BinaryReader): Principal;
}

export namespace Principal {
  export type AsObject = {
    id: string,
    policyVersion: string,
    rolesList: Array<string>,
    attrMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    scope: string,
  }
}

export class AuxData extends jspb.Message {
  getJwtMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearJwtMap(): void;
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
    jwtMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

export class Trace extends jspb.Message {
  clearComponentsList(): void;
  getComponentsList(): Array<Trace.Component>;
  setComponentsList(value: Array<Trace.Component>): void;
  addComponents(value?: Trace.Component, index?: number): Trace.Component;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): Trace.Event | undefined;
  setEvent(value?: Trace.Event): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trace.AsObject;
  static toObject(includeInstance: boolean, msg: Trace): Trace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Trace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trace;
  static deserializeBinaryFromReader(message: Trace, reader: jspb.BinaryReader): Trace;
}

export namespace Trace {
  export type AsObject = {
    componentsList: Array<Trace.Component.AsObject>,
    event?: Trace.Event.AsObject,
  }

  export class Component extends jspb.Message {
    getKind(): Trace.Component.KindMap[keyof Trace.Component.KindMap];
    setKind(value: Trace.Component.KindMap[keyof Trace.Component.KindMap]): void;

    hasAction(): boolean;
    clearAction(): void;
    getAction(): string;
    setAction(value: string): void;

    hasDerivedRole(): boolean;
    clearDerivedRole(): void;
    getDerivedRole(): string;
    setDerivedRole(value: string): void;

    hasExpr(): boolean;
    clearExpr(): void;
    getExpr(): string;
    setExpr(value: string): void;

    hasIndex(): boolean;
    clearIndex(): void;
    getIndex(): number;
    setIndex(value: number): void;

    hasPolicy(): boolean;
    clearPolicy(): void;
    getPolicy(): string;
    setPolicy(value: string): void;

    hasResource(): boolean;
    clearResource(): void;
    getResource(): string;
    setResource(value: string): void;

    hasRule(): boolean;
    clearRule(): void;
    getRule(): string;
    setRule(value: string): void;

    hasScope(): boolean;
    clearScope(): void;
    getScope(): string;
    setScope(value: string): void;

    hasVariable(): boolean;
    clearVariable(): void;
    getVariable(): Trace.Component.Variable | undefined;
    setVariable(value?: Trace.Component.Variable): void;

    getDetailsCase(): Component.DetailsCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Component.AsObject;
    static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Component;
    static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
  }

  export namespace Component {
    export type AsObject = {
      kind: Trace.Component.KindMap[keyof Trace.Component.KindMap],
      action: string,
      derivedRole: string,
      expr: string,
      index: number,
      policy: string,
      resource: string,
      rule: string,
      scope: string,
      variable?: Trace.Component.Variable.AsObject,
    }

    export class Variable extends jspb.Message {
      getName(): string;
      setName(value: string): void;

      getExpr(): string;
      setExpr(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Variable.AsObject;
      static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Variable;
      static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
    }

    export namespace Variable {
      export type AsObject = {
        name: string,
        expr: string,
      }
    }

    export interface KindMap {
      KIND_UNSPECIFIED: 0;
      KIND_ACTION: 1;
      KIND_CONDITION_ALL: 2;
      KIND_CONDITION_ANY: 3;
      KIND_CONDITION_NONE: 4;
      KIND_CONDITION: 5;
      KIND_DERIVED_ROLE: 6;
      KIND_EXPR: 7;
      KIND_POLICY: 8;
      KIND_RESOURCE: 9;
      KIND_RULE: 10;
      KIND_SCOPE: 11;
      KIND_VARIABLE: 12;
      KIND_VARIABLES: 13;
    }

    export const Kind: KindMap;

    export enum DetailsCase {
      DETAILS_NOT_SET = 0,
      ACTION = 2,
      DERIVED_ROLE = 3,
      EXPR = 4,
      INDEX = 5,
      POLICY = 6,
      RESOURCE = 7,
      RULE = 8,
      SCOPE = 9,
      VARIABLE = 10,
    }
  }

  export class Event extends jspb.Message {
    getStatus(): Trace.Event.StatusMap[keyof Trace.Event.StatusMap];
    setStatus(value: Trace.Event.StatusMap[keyof Trace.Event.StatusMap]): void;

    getEffect(): cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap];
    setEffect(value: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap]): void;

    getError(): string;
    setError(value: string): void;

    getMessage(): string;
    setMessage(value: string): void;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): google_protobuf_struct_pb.Value | undefined;
    setResult(value?: google_protobuf_struct_pb.Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
  }

  export namespace Event {
    export type AsObject = {
      status: Trace.Event.StatusMap[keyof Trace.Event.StatusMap],
      effect: cerbos_effect_v1_effect_pb.EffectMap[keyof cerbos_effect_v1_effect_pb.EffectMap],
      error: string,
      message: string,
      result?: google_protobuf_struct_pb.Value.AsObject,
    }

    export interface StatusMap {
      STATUS_UNSPECIFIED: 0;
      STATUS_ACTIVATED: 1;
      STATUS_SKIPPED: 2;
    }

    export const Status: StatusMap;
  }
}

