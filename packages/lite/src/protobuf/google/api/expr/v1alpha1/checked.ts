/* eslint-disable */
import { Empty } from "../../../protobuf/empty";
import { NullValue, nullValueFromJSON, nullValueToJSON } from "../../../protobuf/struct";
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
  referenceMap: { [key: number]: Reference };
  /**
   * A map from expression ids to types.
   *
   * Every expression node which has a type different than DYN has a mapping
   * here. If an expression has type DYN, it is omitted from this map to save
   * space.
   */
  typeMap: { [key: number]: Type };
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
  key: number;
  value: Reference | undefined;
}

export interface CheckedExpr_TypeMapEntry {
  key: number;
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

export function type_PrimitiveTypeFromJSON(object: any): Type_PrimitiveType {
  switch (object) {
    case 0:
    case "PRIMITIVE_TYPE_UNSPECIFIED":
      return Type_PrimitiveType.PRIMITIVE_TYPE_UNSPECIFIED;
    case 1:
    case "BOOL":
      return Type_PrimitiveType.BOOL;
    case 2:
    case "INT64":
      return Type_PrimitiveType.INT64;
    case 3:
    case "UINT64":
      return Type_PrimitiveType.UINT64;
    case 4:
    case "DOUBLE":
      return Type_PrimitiveType.DOUBLE;
    case 5:
    case "STRING":
      return Type_PrimitiveType.STRING;
    case 6:
    case "BYTES":
      return Type_PrimitiveType.BYTES;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum Type_PrimitiveType");
  }
}

export function type_PrimitiveTypeToJSON(object: Type_PrimitiveType): string {
  switch (object) {
    case Type_PrimitiveType.PRIMITIVE_TYPE_UNSPECIFIED:
      return "PRIMITIVE_TYPE_UNSPECIFIED";
    case Type_PrimitiveType.BOOL:
      return "BOOL";
    case Type_PrimitiveType.INT64:
      return "INT64";
    case Type_PrimitiveType.UINT64:
      return "UINT64";
    case Type_PrimitiveType.DOUBLE:
      return "DOUBLE";
    case Type_PrimitiveType.STRING:
      return "STRING";
    case Type_PrimitiveType.BYTES:
      return "BYTES";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum Type_PrimitiveType");
  }
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

export function type_WellKnownTypeFromJSON(object: any): Type_WellKnownType {
  switch (object) {
    case 0:
    case "WELL_KNOWN_TYPE_UNSPECIFIED":
      return Type_WellKnownType.WELL_KNOWN_TYPE_UNSPECIFIED;
    case 1:
    case "ANY":
      return Type_WellKnownType.ANY;
    case 2:
    case "TIMESTAMP":
      return Type_WellKnownType.TIMESTAMP;
    case 3:
    case "DURATION":
      return Type_WellKnownType.DURATION;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum Type_WellKnownType");
  }
}

export function type_WellKnownTypeToJSON(object: Type_WellKnownType): string {
  switch (object) {
    case Type_WellKnownType.WELL_KNOWN_TYPE_UNSPECIFIED:
      return "WELL_KNOWN_TYPE_UNSPECIFIED";
    case Type_WellKnownType.ANY:
      return "ANY";
    case Type_WellKnownType.TIMESTAMP:
      return "TIMESTAMP";
    case Type_WellKnownType.DURATION:
      return "DURATION";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum Type_WellKnownType");
  }
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
   * of a function call-style `f(x, ...)`.
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
  fromJSON(object: any): CheckedExpr {
    return {
      referenceMap: isObject(object.referenceMap)
        ? Object.entries(object.referenceMap).reduce<{ [key: number]: Reference }>((acc, [key, value]) => {
          acc[Number(key)] = Reference.fromJSON(value);
          return acc;
        }, {})
        : {},
      typeMap: isObject(object.typeMap)
        ? Object.entries(object.typeMap).reduce<{ [key: number]: Type }>((acc, [key, value]) => {
          acc[Number(key)] = Type.fromJSON(value);
          return acc;
        }, {})
        : {},
      sourceInfo: isSet(object.sourceInfo) ? SourceInfo.fromJSON(object.sourceInfo) : undefined,
      exprVersion: isSet(object.exprVersion) ? String(object.exprVersion) : "",
      expr: isSet(object.expr) ? Expr.fromJSON(object.expr) : undefined,
    };
  },

  toJSON(message: CheckedExpr): unknown {
    const obj: any = {};
    obj.referenceMap = {};
    if (message.referenceMap) {
      Object.entries(message.referenceMap).forEach(([k, v]) => {
        obj.referenceMap[k] = Reference.toJSON(v);
      });
    }
    obj.typeMap = {};
    if (message.typeMap) {
      Object.entries(message.typeMap).forEach(([k, v]) => {
        obj.typeMap[k] = Type.toJSON(v);
      });
    }
    message.sourceInfo !== undefined &&
      (obj.sourceInfo = message.sourceInfo ? SourceInfo.toJSON(message.sourceInfo) : undefined);
    message.exprVersion !== undefined && (obj.exprVersion = message.exprVersion);
    message.expr !== undefined && (obj.expr = message.expr ? Expr.toJSON(message.expr) : undefined);
    return obj;
  },
};

function createBaseCheckedExpr_ReferenceMapEntry(): CheckedExpr_ReferenceMapEntry {
  return { key: 0, value: undefined };
}

export const CheckedExpr_ReferenceMapEntry = {
  fromJSON(object: any): CheckedExpr_ReferenceMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Reference.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CheckedExpr_ReferenceMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value ? Reference.toJSON(message.value) : undefined);
    return obj;
  },
};

function createBaseCheckedExpr_TypeMapEntry(): CheckedExpr_TypeMapEntry {
  return { key: 0, value: undefined };
}

export const CheckedExpr_TypeMapEntry = {
  fromJSON(object: any): CheckedExpr_TypeMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Type.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CheckedExpr_TypeMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value ? Type.toJSON(message.value) : undefined);
    return obj;
  },
};

function createBaseType(): Type {
  return { typeKind: undefined };
}

export const Type = {
  fromJSON(object: any): Type {
    return {
      typeKind: isSet(object.dyn)
        ? { $case: "dyn", dyn: Empty.fromJSON(object.dyn) }
        : isSet(object.null)
        ? { $case: "null", null: nullValueFromJSON(object.null) }
        : isSet(object.primitive)
        ? { $case: "primitive", primitive: type_PrimitiveTypeFromJSON(object.primitive) }
        : isSet(object.wrapper)
        ? { $case: "wrapper", wrapper: type_PrimitiveTypeFromJSON(object.wrapper) }
        : isSet(object.wellKnown)
        ? { $case: "wellKnown", wellKnown: type_WellKnownTypeFromJSON(object.wellKnown) }
        : isSet(object.listType)
        ? { $case: "listType", listType: Type_ListType.fromJSON(object.listType) }
        : isSet(object.mapType)
        ? { $case: "mapType", mapType: Type_MapType.fromJSON(object.mapType) }
        : isSet(object.function)
        ? { $case: "function", function: Type_FunctionType.fromJSON(object.function) }
        : isSet(object.messageType)
        ? { $case: "messageType", messageType: String(object.messageType) }
        : isSet(object.typeParam)
        ? { $case: "typeParam", typeParam: String(object.typeParam) }
        : isSet(object.type)
        ? { $case: "type", type: Type.fromJSON(object.type) }
        : isSet(object.error)
        ? { $case: "error", error: Empty.fromJSON(object.error) }
        : isSet(object.abstractType)
        ? { $case: "abstractType", abstractType: Type_AbstractType.fromJSON(object.abstractType) }
        : undefined,
    };
  },

  toJSON(message: Type): unknown {
    const obj: any = {};
    message.typeKind?.$case === "dyn" &&
      (obj.dyn = message.typeKind?.dyn ? Empty.toJSON(message.typeKind?.dyn) : undefined);
    message.typeKind?.$case === "null" &&
      (obj.null = message.typeKind?.null !== undefined ? nullValueToJSON(message.typeKind?.null) : undefined);
    message.typeKind?.$case === "primitive" && (obj.primitive = message.typeKind?.primitive !== undefined
      ? type_PrimitiveTypeToJSON(message.typeKind?.primitive)
      : undefined);
    message.typeKind?.$case === "wrapper" && (obj.wrapper = message.typeKind?.wrapper !== undefined
      ? type_PrimitiveTypeToJSON(message.typeKind?.wrapper)
      : undefined);
    message.typeKind?.$case === "wellKnown" && (obj.wellKnown = message.typeKind?.wellKnown !== undefined
      ? type_WellKnownTypeToJSON(message.typeKind?.wellKnown)
      : undefined);
    message.typeKind?.$case === "listType" &&
      (obj.listType = message.typeKind?.listType ? Type_ListType.toJSON(message.typeKind?.listType) : undefined);
    message.typeKind?.$case === "mapType" &&
      (obj.mapType = message.typeKind?.mapType ? Type_MapType.toJSON(message.typeKind?.mapType) : undefined);
    message.typeKind?.$case === "function" &&
      (obj.function = message.typeKind?.function ? Type_FunctionType.toJSON(message.typeKind?.function) : undefined);
    message.typeKind?.$case === "messageType" && (obj.messageType = message.typeKind?.messageType);
    message.typeKind?.$case === "typeParam" && (obj.typeParam = message.typeKind?.typeParam);
    message.typeKind?.$case === "type" &&
      (obj.type = message.typeKind?.type ? Type.toJSON(message.typeKind?.type) : undefined);
    message.typeKind?.$case === "error" &&
      (obj.error = message.typeKind?.error ? Empty.toJSON(message.typeKind?.error) : undefined);
    message.typeKind?.$case === "abstractType" && (obj.abstractType = message.typeKind?.abstractType
      ? Type_AbstractType.toJSON(message.typeKind?.abstractType)
      : undefined);
    return obj;
  },
};

function createBaseType_ListType(): Type_ListType {
  return { elemType: undefined };
}

export const Type_ListType = {
  fromJSON(object: any): Type_ListType {
    return { elemType: isSet(object.elemType) ? Type.fromJSON(object.elemType) : undefined };
  },

  toJSON(message: Type_ListType): unknown {
    const obj: any = {};
    message.elemType !== undefined && (obj.elemType = message.elemType ? Type.toJSON(message.elemType) : undefined);
    return obj;
  },
};

function createBaseType_MapType(): Type_MapType {
  return { keyType: undefined, valueType: undefined };
}

export const Type_MapType = {
  fromJSON(object: any): Type_MapType {
    return {
      keyType: isSet(object.keyType) ? Type.fromJSON(object.keyType) : undefined,
      valueType: isSet(object.valueType) ? Type.fromJSON(object.valueType) : undefined,
    };
  },

  toJSON(message: Type_MapType): unknown {
    const obj: any = {};
    message.keyType !== undefined && (obj.keyType = message.keyType ? Type.toJSON(message.keyType) : undefined);
    message.valueType !== undefined && (obj.valueType = message.valueType ? Type.toJSON(message.valueType) : undefined);
    return obj;
  },
};

function createBaseType_FunctionType(): Type_FunctionType {
  return { resultType: undefined, argTypes: [] };
}

export const Type_FunctionType = {
  fromJSON(object: any): Type_FunctionType {
    return {
      resultType: isSet(object.resultType) ? Type.fromJSON(object.resultType) : undefined,
      argTypes: Array.isArray(object?.argTypes) ? object.argTypes.map((e: any) => Type.fromJSON(e)) : [],
    };
  },

  toJSON(message: Type_FunctionType): unknown {
    const obj: any = {};
    message.resultType !== undefined &&
      (obj.resultType = message.resultType ? Type.toJSON(message.resultType) : undefined);
    if (message.argTypes) {
      obj.argTypes = message.argTypes.map((e) => e ? Type.toJSON(e) : undefined);
    } else {
      obj.argTypes = [];
    }
    return obj;
  },
};

function createBaseType_AbstractType(): Type_AbstractType {
  return { name: "", parameterTypes: [] };
}

export const Type_AbstractType = {
  fromJSON(object: any): Type_AbstractType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parameterTypes: Array.isArray(object?.parameterTypes)
        ? object.parameterTypes.map((e: any) => Type.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Type_AbstractType): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.parameterTypes) {
      obj.parameterTypes = message.parameterTypes.map((e) => e ? Type.toJSON(e) : undefined);
    } else {
      obj.parameterTypes = [];
    }
    return obj;
  },
};

function createBaseDecl(): Decl {
  return { name: "", declKind: undefined };
}

export const Decl = {
  fromJSON(object: any): Decl {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      declKind: isSet(object.ident)
        ? { $case: "ident", ident: Decl_IdentDecl.fromJSON(object.ident) }
        : isSet(object.function)
        ? { $case: "function", function: Decl_FunctionDecl.fromJSON(object.function) }
        : undefined,
    };
  },

  toJSON(message: Decl): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.declKind?.$case === "ident" &&
      (obj.ident = message.declKind?.ident ? Decl_IdentDecl.toJSON(message.declKind?.ident) : undefined);
    message.declKind?.$case === "function" &&
      (obj.function = message.declKind?.function ? Decl_FunctionDecl.toJSON(message.declKind?.function) : undefined);
    return obj;
  },
};

function createBaseDecl_IdentDecl(): Decl_IdentDecl {
  return { type: undefined, value: undefined, doc: "" };
}

export const Decl_IdentDecl = {
  fromJSON(object: any): Decl_IdentDecl {
    return {
      type: isSet(object.type) ? Type.fromJSON(object.type) : undefined,
      value: isSet(object.value) ? Constant.fromJSON(object.value) : undefined,
      doc: isSet(object.doc) ? String(object.doc) : "",
    };
  },

  toJSON(message: Decl_IdentDecl): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type ? Type.toJSON(message.type) : undefined);
    message.value !== undefined && (obj.value = message.value ? Constant.toJSON(message.value) : undefined);
    message.doc !== undefined && (obj.doc = message.doc);
    return obj;
  },
};

function createBaseDecl_FunctionDecl(): Decl_FunctionDecl {
  return { overloads: [] };
}

export const Decl_FunctionDecl = {
  fromJSON(object: any): Decl_FunctionDecl {
    return {
      overloads: Array.isArray(object?.overloads)
        ? object.overloads.map((e: any) => Decl_FunctionDecl_Overload.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Decl_FunctionDecl): unknown {
    const obj: any = {};
    if (message.overloads) {
      obj.overloads = message.overloads.map((e) => e ? Decl_FunctionDecl_Overload.toJSON(e) : undefined);
    } else {
      obj.overloads = [];
    }
    return obj;
  },
};

function createBaseDecl_FunctionDecl_Overload(): Decl_FunctionDecl_Overload {
  return { overloadId: "", params: [], typeParams: [], resultType: undefined, isInstanceFunction: false, doc: "" };
}

export const Decl_FunctionDecl_Overload = {
  fromJSON(object: any): Decl_FunctionDecl_Overload {
    return {
      overloadId: isSet(object.overloadId) ? String(object.overloadId) : "",
      params: Array.isArray(object?.params) ? object.params.map((e: any) => Type.fromJSON(e)) : [],
      typeParams: Array.isArray(object?.typeParams) ? object.typeParams.map((e: any) => String(e)) : [],
      resultType: isSet(object.resultType) ? Type.fromJSON(object.resultType) : undefined,
      isInstanceFunction: isSet(object.isInstanceFunction) ? Boolean(object.isInstanceFunction) : false,
      doc: isSet(object.doc) ? String(object.doc) : "",
    };
  },

  toJSON(message: Decl_FunctionDecl_Overload): unknown {
    const obj: any = {};
    message.overloadId !== undefined && (obj.overloadId = message.overloadId);
    if (message.params) {
      obj.params = message.params.map((e) => e ? Type.toJSON(e) : undefined);
    } else {
      obj.params = [];
    }
    if (message.typeParams) {
      obj.typeParams = message.typeParams.map((e) => e);
    } else {
      obj.typeParams = [];
    }
    message.resultType !== undefined &&
      (obj.resultType = message.resultType ? Type.toJSON(message.resultType) : undefined);
    message.isInstanceFunction !== undefined && (obj.isInstanceFunction = message.isInstanceFunction);
    message.doc !== undefined && (obj.doc = message.doc);
    return obj;
  },
};

function createBaseReference(): Reference {
  return { name: "", overloadId: [], value: undefined };
}

export const Reference = {
  fromJSON(object: any): Reference {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      overloadId: Array.isArray(object?.overloadId) ? object.overloadId.map((e: any) => String(e)) : [],
      value: isSet(object.value) ? Constant.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Reference): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.overloadId) {
      obj.overloadId = message.overloadId.map((e) => e);
    } else {
      obj.overloadId = [];
    }
    message.value !== undefined && (obj.value = message.value ? Constant.toJSON(message.value) : undefined);
    return obj;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
