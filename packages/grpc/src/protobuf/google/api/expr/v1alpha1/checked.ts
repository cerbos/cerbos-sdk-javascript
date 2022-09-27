/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../protobuf/empty";
import { NullValue } from "../../../protobuf/struct";
import { Constant, Expr, SourceInfo } from "./syntax";

export const protobufPackage = "google.api.expr.v1alpha1";

/** A CEL expression which has been successfully type checked. */
export interface CheckedExpr {
  /**
   * A map from expression ids to resolved references.
   *
   * The following entries are in this table:
   *
   * - An Ident or Select expression is represented here if it resolves to a
   *   declaration. For instance, if `a.b.c` is represented by
   *   `select(select(id(a), b), c)`, and `a.b` resolves to a declaration,
   *   while `c` is a field selection, then the reference is attached to the
   *   nested select expression (but not to the id or or the outer select).
   *   In turn, if `a` resolves to a declaration and `b.c` are field selections,
   *   the reference is attached to the ident expression.
   * - Every Call expression has an entry here, identifying the function being
   *   called.
   * - Every CreateStruct expression for a message has an entry, identifying
   *   the message.
   */
  referenceMap: { [key: string]: Reference };
  /**
   * A map from expression ids to types.
   *
   * Every expression node which has a type different than DYN has a mapping
   * here. If an expression has type DYN, it is omitted from this map to save
   * space.
   */
  typeMap: { [key: string]: Type };
  /**
   * The source info derived from input that generated the parsed `expr` and
   * any optimizations made during the type-checking pass.
   */
  sourceInfo:
    | SourceInfo
    | undefined;
  /**
   * The expr version indicates the major / minor version number of the `expr`
   * representation.
   *
   * The most common reason for a version change will be to indicate to the CEL
   * runtimes that transformations have been performed on the expr during static
   * analysis. In some cases, this will save the runtime the work of applying
   * the same or similar transformations prior to evaluation.
   */
  exprVersion: string;
  /**
   * The checked expression. Semantically equivalent to the parsed `expr`, but
   * may have structural differences.
   */
  expr: Expr | undefined;
}

export interface CheckedExpr_ReferenceMapEntry {
  key: string;
  value: Reference | undefined;
}

export interface CheckedExpr_TypeMapEntry {
  key: string;
  value: Type | undefined;
}

/** Represents a CEL type. */
export interface Type {
  typeKind?:
    | { $case: "dyn"; dyn: Empty }
    | { $case: "null"; null: NullValue }
    | { $case: "primitive"; primitive: Type_PrimitiveType }
    | { $case: "wrapper"; wrapper: Type_PrimitiveType }
    | { $case: "wellKnown"; wellKnown: Type_WellKnownType }
    | { $case: "listType"; listType: Type_ListType }
    | { $case: "mapType"; mapType: Type_MapType }
    | { $case: "function"; function: Type_FunctionType }
    | { $case: "messageType"; messageType: string }
    | { $case: "typeParam"; typeParam: string }
    | { $case: "type"; type: Type }
    | { $case: "error"; error: Empty }
    | { $case: "abstractType"; abstractType: Type_AbstractType };
}

/** CEL primitive types. */
export enum Type_PrimitiveType {
  /** PRIMITIVE_TYPE_UNSPECIFIED - Unspecified type. */
  PRIMITIVE_TYPE_UNSPECIFIED = 0,
  /** BOOL - Boolean type. */
  BOOL = 1,
  /**
   * INT64 - Int64 type.
   *
   * Proto-based integer values are widened to int64.
   */
  INT64 = 2,
  /**
   * UINT64 - Uint64 type.
   *
   * Proto-based unsigned integer values are widened to uint64.
   */
  UINT64 = 3,
  /**
   * DOUBLE - Double type.
   *
   * Proto-based float values are widened to double values.
   */
  DOUBLE = 4,
  /** STRING - String type. */
  STRING = 5,
  /** BYTES - Bytes type. */
  BYTES = 6,
}

/** Well-known protobuf types treated with first-class support in CEL. */
export enum Type_WellKnownType {
  /** WELL_KNOWN_TYPE_UNSPECIFIED - Unspecified type. */
  WELL_KNOWN_TYPE_UNSPECIFIED = 0,
  /**
   * ANY - Well-known protobuf.Any type.
   *
   * Any types are a polymorphic message type. During type-checking they are
   * treated like `DYN` types, but at runtime they are resolved to a specific
   * message type specified at evaluation time.
   */
  ANY = 1,
  /** TIMESTAMP - Well-known protobuf.Timestamp type, internally referenced as `timestamp`. */
  TIMESTAMP = 2,
  /** DURATION - Well-known protobuf.Duration type, internally referenced as `duration`. */
  DURATION = 3,
}

/** List type with typed elements, e.g. `list<example.proto.MyMessage>`. */
export interface Type_ListType {
  /** The element type. */
  elemType: Type | undefined;
}

/** Map type with parameterized key and value types, e.g. `map<string, int>`. */
export interface Type_MapType {
  /** The type of the key. */
  keyType:
    | Type
    | undefined;
  /** The type of the value. */
  valueType: Type | undefined;
}

/** Function type with result and arg types. */
export interface Type_FunctionType {
  /** Result type of the function. */
  resultType:
    | Type
    | undefined;
  /** Argument types of the function. */
  argTypes: Type[];
}

/** Application defined abstract type. */
export interface Type_AbstractType {
  /** The fully qualified name of this abstract type. */
  name: string;
  /** Parameter types for this abstract type. */
  parameterTypes: Type[];
}

/**
 * Represents a declaration of a named value or function.
 *
 * A declaration is part of the contract between the expression, the agent
 * evaluating that expression, and the caller requesting evaluation.
 */
export interface Decl {
  /**
   * The fully qualified name of the declaration.
   *
   * Declarations are organized in containers and this represents the full path
   * to the declaration in its container, as in `google.api.expr.Decl`.
   *
   * Declarations used as [FunctionDecl.Overload][google.api.expr.v1alpha1.Decl.FunctionDecl.Overload] parameters may or may not
   * have a name depending on whether the overload is function declaration or a
   * function definition containing a result [Expr][google.api.expr.v1alpha1.Expr].
   */
  name: string;
  declKind?: { $case: "ident"; ident: Decl_IdentDecl } | { $case: "function"; function: Decl_FunctionDecl };
}

/**
 * Identifier declaration which specifies its type and optional `Expr` value.
 *
 * An identifier without a value is a declaration that must be provided at
 * evaluation time. An identifier with a value should resolve to a constant,
 * but may be used in conjunction with other identifiers bound at evaluation
 * time.
 */
export interface Decl_IdentDecl {
  /** Required. The type of the identifier. */
  type:
    | Type
    | undefined;
  /**
   * The constant value of the identifier. If not specified, the identifier
   * must be supplied at evaluation time.
   */
  value:
    | Constant
    | undefined;
  /** Documentation string for the identifier. */
  doc: string;
}

/**
 * Function declaration specifies one or more overloads which indicate the
 * function's parameter types and return type.
 *
 * Functions have no observable side-effects (there may be side-effects like
 * logging which are not observable from CEL).
 */
export interface Decl_FunctionDecl {
  /** Required. List of function overloads, must contain at least one overload. */
  overloads: Decl_FunctionDecl_Overload[];
}

/**
 * An overload indicates a function's parameter types and return type, and
 * may optionally include a function body described in terms of [Expr][google.api.expr.v1alpha1.Expr]
 * values.
 *
 * Functions overloads are declared in either a function or method
 * call-style. For methods, the `params[0]` is the expected type of the
 * target receiver.
 *
 * Overloads must have non-overlapping argument types after erasure of all
 * parameterized type variables (similar as type erasure in Java).
 */
export interface Decl_FunctionDecl_Overload {
  /**
   * Required. Globally unique overload name of the function which reflects
   * the function name and argument types.
   *
   * This will be used by a [Reference][google.api.expr.v1alpha1.Reference] to indicate the `overload_id` that
   * was resolved for the function `name`.
   */
  overloadId: string;
  /**
   * List of function parameter [Type][google.api.expr.v1alpha1.Type] values.
   *
   * Param types are disjoint after generic type parameters have been
   * replaced with the type `DYN`. Since the `DYN` type is compatible with
   * any other type, this means that if `A` is a type parameter, the
   * function types `int<A>` and `int<int>` are not disjoint. Likewise,
   * `map<string, string>` is not disjoint from `map<K, V>`.
   *
   * When the `result_type` of a function is a generic type param, the
   * type param name also appears as the `type` of on at least one params.
   */
  params: Type[];
  /**
   * The type param names associated with the function declaration.
   *
   * For example, `function ex<K,V>(K key, map<K, V> map) : V` would yield
   * the type params of `K, V`.
   */
  typeParams: string[];
  /**
   * Required. The result type of the function. For example, the operator
   * `string.isEmpty()` would have `result_type` of `kind: BOOL`.
   */
  resultType:
    | Type
    | undefined;
  /**
   * Whether the function is to be used in a method call-style `x.f(...)`
   * or a function call-style `f(x, ...)`.
   *
   * For methods, the first parameter declaration, `params[0]` is the
   * expected type of the target receiver.
   */
  isInstanceFunction: boolean;
  /** Documentation string for the overload. */
  doc: string;
}

/** Describes a resolved reference to a declaration. */
export interface Reference {
  /** The fully qualified name of the declaration. */
  name: string;
  /**
   * For references to functions, this is a list of `Overload.overload_id`
   * values which match according to typing rules.
   *
   * If the list has more than one element, overload resolution among the
   * presented candidates must happen at runtime because of dynamic types. The
   * type checker attempts to narrow down this list as much as possible.
   *
   * Empty if this is not a reference to a [Decl.FunctionDecl][google.api.expr.v1alpha1.Decl.FunctionDecl].
   */
  overloadId: string[];
  /**
   * For references to constants, this may contain the value of the
   * constant if known at compile time.
   */
  value: Constant | undefined;
}

function createBaseCheckedExpr(): CheckedExpr {
  return { referenceMap: {}, typeMap: {}, sourceInfo: undefined, exprVersion: "", expr: undefined };
}

export const CheckedExpr = {
  encode(message: CheckedExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.referenceMap).forEach(([key, value]) => {
      CheckedExpr_ReferenceMapEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.typeMap).forEach(([key, value]) => {
      CheckedExpr_TypeMapEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(42).fork()).ldelim();
    }
    if (message.exprVersion !== "") {
      writer.uint32(50).string(message.exprVersion);
    }
    if (message.expr !== undefined) {
      Expr.encode(message.expr, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          const entry2 = CheckedExpr_ReferenceMapEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.referenceMap[entry2.key] = entry2.value;
          }
          break;
        case 3:
          const entry3 = CheckedExpr_TypeMapEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.typeMap[entry3.key] = entry3.value;
          }
          break;
        case 5:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.exprVersion = reader.string();
          break;
        case 4:
          message.expr = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseCheckedExpr_ReferenceMapEntry(): CheckedExpr_ReferenceMapEntry {
  return { key: "0", value: undefined };
}

export const CheckedExpr_ReferenceMapEntry = {
  encode(message: CheckedExpr_ReferenceMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "0") {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Reference.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr_ReferenceMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr_ReferenceMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToString(reader.int64() as Long);
          break;
        case 2:
          message.value = Reference.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseCheckedExpr_TypeMapEntry(): CheckedExpr_TypeMapEntry {
  return { key: "0", value: undefined };
}

export const CheckedExpr_TypeMapEntry = {
  encode(message: CheckedExpr_TypeMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "0") {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Type.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr_TypeMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr_TypeMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToString(reader.int64() as Long);
          break;
        case 2:
          message.value = Type.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseType(): Type {
  return { typeKind: undefined };
}

export const Type = {
  encode(message: Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeKind?.$case === "dyn") {
      Empty.encode(message.typeKind.dyn, writer.uint32(10).fork()).ldelim();
    }
    if (message.typeKind?.$case === "null") {
      writer.uint32(16).int32(message.typeKind.null);
    }
    if (message.typeKind?.$case === "primitive") {
      writer.uint32(24).int32(message.typeKind.primitive);
    }
    if (message.typeKind?.$case === "wrapper") {
      writer.uint32(32).int32(message.typeKind.wrapper);
    }
    if (message.typeKind?.$case === "wellKnown") {
      writer.uint32(40).int32(message.typeKind.wellKnown);
    }
    if (message.typeKind?.$case === "listType") {
      Type_ListType.encode(message.typeKind.listType, writer.uint32(50).fork()).ldelim();
    }
    if (message.typeKind?.$case === "mapType") {
      Type_MapType.encode(message.typeKind.mapType, writer.uint32(58).fork()).ldelim();
    }
    if (message.typeKind?.$case === "function") {
      Type_FunctionType.encode(message.typeKind.function, writer.uint32(66).fork()).ldelim();
    }
    if (message.typeKind?.$case === "messageType") {
      writer.uint32(74).string(message.typeKind.messageType);
    }
    if (message.typeKind?.$case === "typeParam") {
      writer.uint32(82).string(message.typeKind.typeParam);
    }
    if (message.typeKind?.$case === "type") {
      Type.encode(message.typeKind.type, writer.uint32(90).fork()).ldelim();
    }
    if (message.typeKind?.$case === "error") {
      Empty.encode(message.typeKind.error, writer.uint32(98).fork()).ldelim();
    }
    if (message.typeKind?.$case === "abstractType") {
      Type_AbstractType.encode(message.typeKind.abstractType, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeKind = { $case: "dyn", dyn: Empty.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.typeKind = { $case: "null", null: reader.int32() as any };
          break;
        case 3:
          message.typeKind = { $case: "primitive", primitive: reader.int32() as any };
          break;
        case 4:
          message.typeKind = { $case: "wrapper", wrapper: reader.int32() as any };
          break;
        case 5:
          message.typeKind = { $case: "wellKnown", wellKnown: reader.int32() as any };
          break;
        case 6:
          message.typeKind = { $case: "listType", listType: Type_ListType.decode(reader, reader.uint32()) };
          break;
        case 7:
          message.typeKind = { $case: "mapType", mapType: Type_MapType.decode(reader, reader.uint32()) };
          break;
        case 8:
          message.typeKind = { $case: "function", function: Type_FunctionType.decode(reader, reader.uint32()) };
          break;
        case 9:
          message.typeKind = { $case: "messageType", messageType: reader.string() };
          break;
        case 10:
          message.typeKind = { $case: "typeParam", typeParam: reader.string() };
          break;
        case 11:
          message.typeKind = { $case: "type", type: Type.decode(reader, reader.uint32()) };
          break;
        case 12:
          message.typeKind = { $case: "error", error: Empty.decode(reader, reader.uint32()) };
          break;
        case 14:
          message.typeKind = { $case: "abstractType", abstractType: Type_AbstractType.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseType_ListType(): Type_ListType {
  return { elemType: undefined };
}

export const Type_ListType = {
  encode(message: Type_ListType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elemType !== undefined) {
      Type.encode(message.elemType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_ListType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_ListType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elemType = Type.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseType_MapType(): Type_MapType {
  return { keyType: undefined, valueType: undefined };
}

export const Type_MapType = {
  encode(message: Type_MapType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyType !== undefined) {
      Type.encode(message.keyType, writer.uint32(10).fork()).ldelim();
    }
    if (message.valueType !== undefined) {
      Type.encode(message.valueType, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_MapType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_MapType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyType = Type.decode(reader, reader.uint32());
          break;
        case 2:
          message.valueType = Type.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseType_FunctionType(): Type_FunctionType {
  return { resultType: undefined, argTypes: [] };
}

export const Type_FunctionType = {
  encode(message: Type_FunctionType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resultType !== undefined) {
      Type.encode(message.resultType, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.argTypes) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_FunctionType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_FunctionType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resultType = Type.decode(reader, reader.uint32());
          break;
        case 2:
          message.argTypes.push(Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseType_AbstractType(): Type_AbstractType {
  return { name: "", parameterTypes: [] };
}

export const Type_AbstractType = {
  encode(message: Type_AbstractType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.parameterTypes) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_AbstractType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_AbstractType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.parameterTypes.push(Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseDecl(): Decl {
  return { name: "", declKind: undefined };
}

export const Decl = {
  encode(message: Decl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.declKind?.$case === "ident") {
      Decl_IdentDecl.encode(message.declKind.ident, writer.uint32(18).fork()).ldelim();
    }
    if (message.declKind?.$case === "function") {
      Decl_FunctionDecl.encode(message.declKind.function, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.declKind = { $case: "ident", ident: Decl_IdentDecl.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.declKind = { $case: "function", function: Decl_FunctionDecl.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseDecl_IdentDecl(): Decl_IdentDecl {
  return { type: undefined, value: undefined, doc: "" };
}

export const Decl_IdentDecl = {
  encode(message: Decl_IdentDecl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      Type.encode(message.type, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Constant.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    if (message.doc !== "") {
      writer.uint32(26).string(message.doc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_IdentDecl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_IdentDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = Type.decode(reader, reader.uint32());
          break;
        case 2:
          message.value = Constant.decode(reader, reader.uint32());
          break;
        case 3:
          message.doc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseDecl_FunctionDecl(): Decl_FunctionDecl {
  return { overloads: [] };
}

export const Decl_FunctionDecl = {
  encode(message: Decl_FunctionDecl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.overloads) {
      Decl_FunctionDecl_Overload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_FunctionDecl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_FunctionDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overloads.push(Decl_FunctionDecl_Overload.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseDecl_FunctionDecl_Overload(): Decl_FunctionDecl_Overload {
  return { overloadId: "", params: [], typeParams: [], resultType: undefined, isInstanceFunction: false, doc: "" };
}

export const Decl_FunctionDecl_Overload = {
  encode(message: Decl_FunctionDecl_Overload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.overloadId !== "") {
      writer.uint32(10).string(message.overloadId);
    }
    for (const v of message.params) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.typeParams) {
      writer.uint32(26).string(v!);
    }
    if (message.resultType !== undefined) {
      Type.encode(message.resultType, writer.uint32(34).fork()).ldelim();
    }
    if (message.isInstanceFunction === true) {
      writer.uint32(40).bool(message.isInstanceFunction);
    }
    if (message.doc !== "") {
      writer.uint32(50).string(message.doc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_FunctionDecl_Overload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_FunctionDecl_Overload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overloadId = reader.string();
          break;
        case 2:
          message.params.push(Type.decode(reader, reader.uint32()));
          break;
        case 3:
          message.typeParams.push(reader.string());
          break;
        case 4:
          message.resultType = Type.decode(reader, reader.uint32());
          break;
        case 5:
          message.isInstanceFunction = reader.bool();
          break;
        case 6:
          message.doc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseReference(): Reference {
  return { name: "", overloadId: [], value: undefined };
}

export const Reference = {
  encode(message: Reference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.overloadId) {
      writer.uint32(26).string(v!);
    }
    if (message.value !== undefined) {
      Constant.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.overloadId.push(reader.string());
          break;
        case 4:
          message.value = Constant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
