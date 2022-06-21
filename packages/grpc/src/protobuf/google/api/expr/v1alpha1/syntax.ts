/* eslint-disable */
import { Timestamp } from "../../../../google/protobuf/timestamp";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { NullValue } from "../../../../google/protobuf/struct";
import { Duration } from "../../../../google/protobuf/duration";

export const protobufPackage = "google.api.expr.v1alpha1";

/** An expression together with source information as returned by the parser. */
export interface ParsedExpr {
  /** The parsed expression. */
  expr: Expr | undefined;
  /** The source info derived from input that generated the parsed `expr`. */
  sourceInfo: SourceInfo | undefined;
}

/**
 * An abstract representation of a common expression.
 *
 * Expressions are abstractly represented as a collection of identifiers,
 * select statements, function calls, literals, and comprehensions. All
 * operators with the exception of the '.' operator are modelled as function
 * calls. This makes it easy to represent new operators into the existing AST.
 *
 * All references within expressions must resolve to a [Decl][google.api.expr.v1alpha1.Decl] provided at
 * type-check for an expression to be valid. A reference may either be a bare
 * identifier `name` or a qualified identifier `google.api.name`. References
 * may either refer to a value or a function declaration.
 *
 * For example, the expression `google.api.name.startsWith('expr')` references
 * the declaration `google.api.name` within a [Expr.Select][google.api.expr.v1alpha1.Expr.Select] expression, and
 * the function declaration `startsWith`.
 */
export interface Expr {
  /**
   * Required. An id assigned to this node by the parser which is unique in a
   * given expression tree. This is used to associate type information and other
   * attributes to a node in the parse tree.
   */
  id: number;
  exprKind?:
    | { $case: "constExpr"; constExpr: Constant }
    | { $case: "identExpr"; identExpr: Expr_Ident }
    | { $case: "selectExpr"; selectExpr: Expr_Select }
    | { $case: "callExpr"; callExpr: Expr_Call }
    | { $case: "listExpr"; listExpr: Expr_CreateList }
    | { $case: "structExpr"; structExpr: Expr_CreateStruct }
    | { $case: "comprehensionExpr"; comprehensionExpr: Expr_Comprehension };
}

/** An identifier expression. e.g. `request`. */
export interface Expr_Ident {
  /**
   * Required. Holds a single, unqualified identifier, possibly preceded by a
   * '.'.
   *
   * Qualified names are represented by the [Expr.Select][google.api.expr.v1alpha1.Expr.Select] expression.
   */
  name: string;
}

/** A field selection expression. e.g. `request.auth`. */
export interface Expr_Select {
  /**
   * Required. The target of the selection expression.
   *
   * For example, in the select expression `request.auth`, the `request`
   * portion of the expression is the `operand`.
   */
  operand: Expr | undefined;
  /**
   * Required. The name of the field to select.
   *
   * For example, in the select expression `request.auth`, the `auth` portion
   * of the expression would be the `field`.
   */
  field: string;
  /**
   * Whether the select is to be interpreted as a field presence test.
   *
   * This results from the macro `has(request.auth)`.
   */
  testOnly: boolean;
}

/**
 * A call expression, including calls to predefined functions and operators.
 *
 * For example, `value == 10`, `size(map_value)`.
 */
export interface Expr_Call {
  /**
   * The target of an method call-style expression. For example, `x` in
   * `x.f()`.
   */
  target: Expr | undefined;
  /** Required. The name of the function or method being called. */
  function: string;
  /** The arguments. */
  args: Expr[];
}

/**
 * A list creation expression.
 *
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogeneous, e.g.
 * `dyn([1, 'hello', 2.0])`
 */
export interface Expr_CreateList {
  /** The elements part of the list. */
  elements: Expr[];
}

/**
 * A map or message creation expression.
 *
 * Maps are constructed as `{'key_name': 'value'}`. Message construction is
 * similar, but prefixed with a type name and composed of field ids:
 * `types.MyType{field_id: 'value'}`.
 */
export interface Expr_CreateStruct {
  /**
   * The type name of the message to be created, empty when creating map
   * literals.
   */
  messageName: string;
  /** The entries in the creation expression. */
  entries: Expr_CreateStruct_Entry[];
}

/** Represents an entry. */
export interface Expr_CreateStruct_Entry {
  /**
   * Required. An id assigned to this node by the parser which is unique
   * in a given expression tree. This is used to associate type
   * information and other attributes to the node.
   */
  id: number;
  keyKind?:
    | { $case: "fieldKey"; fieldKey: string }
    | { $case: "mapKey"; mapKey: Expr };
  /** Required. The value assigned to the key. */
  value: Expr | undefined;
}

/**
 * A comprehension expression applied to a list or map.
 *
 * Comprehensions are not part of the core syntax, but enabled with macros.
 * A macro matches a specific call signature within a parsed AST and replaces
 * the call with an alternate AST block. Macro expansion happens at parse
 * time.
 *
 * The following macros are supported within CEL:
 *
 * Aggregate type macros may be applied to all elements in a list or all keys
 * in a map:
 *
 * *  `all`, `exists`, `exists_one` -  test a predicate expression against
 *    the inputs and return `true` if the predicate is satisfied for all,
 *    any, or only one value `list.all(x, x < 10)`.
 * *  `filter` - test a predicate expression against the inputs and return
 *    the subset of elements which satisfy the predicate:
 *    `payments.filter(p, p > 1000)`.
 * *  `map` - apply an expression to all elements in the input and return the
 *    output aggregate type: `[1, 2, 3].map(i, i * i)`.
 *
 * The `has(m.x)` macro tests whether the property `x` is present in struct
 * `m`. The semantics of this macro depend on the type of `m`. For proto2
 * messages `has(m.x)` is defined as 'defined, but not set`. For proto3, the
 * macro tests whether the property is set to its default. For map and struct
 * types, the macro tests whether the property `x` is defined on `m`.
 */
export interface Expr_Comprehension {
  /** The name of the iteration variable. */
  iterVar: string;
  /** The range over which var iterates. */
  iterRange: Expr | undefined;
  /** The name of the variable used for accumulation of the result. */
  accuVar: string;
  /** The initial value of the accumulator. */
  accuInit: Expr | undefined;
  /**
   * An expression which can contain iter_var and accu_var.
   *
   * Returns false when the result has been computed and may be used as
   * a hint to short-circuit the remainder of the comprehension.
   */
  loopCondition: Expr | undefined;
  /**
   * An expression which can contain iter_var and accu_var.
   *
   * Computes the next value of accu_var.
   */
  loopStep: Expr | undefined;
  /**
   * An expression which can contain accu_var.
   *
   * Computes the result.
   */
  result: Expr | undefined;
}

/**
 * Represents a primitive literal.
 *
 * Named 'Constant' here for backwards compatibility.
 *
 * This is similar as the primitives supported in the well-known type
 * `google.protobuf.Value`, but richer so it can represent CEL's full range of
 * primitives.
 *
 * Lists and structs are not included as constants as these aggregate types may
 * contain [Expr][google.api.expr.v1alpha1.Expr] elements which require evaluation and are thus not constant.
 *
 * Examples of literals include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
 * `true`, `null`.
 */
export interface Constant {
  constantKind?:
    | { $case: "nullValue"; nullValue: NullValue }
    | { $case: "boolValue"; boolValue: boolean }
    | { $case: "int64Value"; int64Value: number }
    | { $case: "uint64Value"; uint64Value: number }
    | { $case: "doubleValue"; doubleValue: number }
    | { $case: "stringValue"; stringValue: string }
    | { $case: "bytesValue"; bytesValue: Buffer }
    | { $case: "durationValue"; durationValue: Duration }
    | { $case: "timestampValue"; timestampValue: Date };
}

/** Source information collected at parse time. */
export interface SourceInfo {
  /** The syntax version of the source, e.g. `cel1`. */
  syntaxVersion: string;
  /**
   * The location name. All position information attached to an expression is
   * relative to this location.
   *
   * The location could be a file, UI element, or similar. For example,
   * `acme/app/AnvilPolicy.cel`.
   */
  location: string;
  /**
   * Monotonically increasing list of code point offsets where newlines
   * `\n` appear.
   *
   * The line number of a given position is the index `i` where for a given
   * `id` the `line_offsets[i] < id_positions[id] < line_offsets[i+1]`. The
   * column may be derivd from `id_positions[id] - line_offsets[i]`.
   */
  lineOffsets: number[];
  /**
   * A map from the parse node id (e.g. `Expr.id`) to the code point offset
   * within the source.
   */
  positions: { [key: number]: number };
  /**
   * A map from the parse node id where a macro replacement was made to the
   * call `Expr` that resulted in a macro expansion.
   *
   * For example, `has(value.field)` is a function call that is replaced by a
   * `test_only` field selection in the AST. Likewise, the call
   * `list.exists(e, e > 10)` translates to a comprehension expression. The key
   * in the map corresponds to the expression id of the expanded macro, and the
   * value is the call `Expr` that was replaced.
   */
  macroCalls: { [key: number]: Expr };
}

export interface SourceInfo_PositionsEntry {
  key: number;
  value: number;
}

export interface SourceInfo_MacroCallsEntry {
  key: number;
  value: Expr | undefined;
}

/** A specific position in source. */
export interface SourcePosition {
  /** The soucre location name (e.g. file name). */
  location: string;
  /** The UTF-8 code unit offset. */
  offset: number;
  /**
   * The 1-based index of the starting line in the source text
   * where the issue occurs, or 0 if unknown.
   */
  line: number;
  /**
   * The 0-based index of the starting position within the line of source text
   * where the issue occurs.  Only meaningful if line is nonzero.
   */
  column: number;
}

function createBaseParsedExpr(): ParsedExpr {
  return { expr: undefined, sourceInfo: undefined };
}

export const ParsedExpr = {
  encode(
    message: ParsedExpr,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.expr !== undefined) {
      Expr.encode(message.expr, writer.uint32(18).fork()).ldelim();
    }
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParsedExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParsedExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.expr = Expr.decode(reader, reader.uint32());
          break;
        case 3:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseExpr(): Expr {
  return { id: 0, exprKind: undefined };
}

export const Expr = {
  encode(message: Expr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(16).int64(message.id);
    }
    if (message.exprKind?.$case === "constExpr") {
      Constant.encode(
        message.exprKind.constExpr,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.exprKind?.$case === "identExpr") {
      Expr_Ident.encode(
        message.exprKind.identExpr,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.exprKind?.$case === "selectExpr") {
      Expr_Select.encode(
        message.exprKind.selectExpr,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.exprKind?.$case === "callExpr") {
      Expr_Call.encode(
        message.exprKind.callExpr,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.exprKind?.$case === "listExpr") {
      Expr_CreateList.encode(
        message.exprKind.listExpr,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.exprKind?.$case === "structExpr") {
      Expr_CreateStruct.encode(
        message.exprKind.structExpr,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.exprKind?.$case === "comprehensionExpr") {
      Expr_Comprehension.encode(
        message.exprKind.comprehensionExpr,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.exprKind = {
            $case: "constExpr",
            constExpr: Constant.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.exprKind = {
            $case: "identExpr",
            identExpr: Expr_Ident.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.exprKind = {
            $case: "selectExpr",
            selectExpr: Expr_Select.decode(reader, reader.uint32()),
          };
          break;
        case 6:
          message.exprKind = {
            $case: "callExpr",
            callExpr: Expr_Call.decode(reader, reader.uint32()),
          };
          break;
        case 7:
          message.exprKind = {
            $case: "listExpr",
            listExpr: Expr_CreateList.decode(reader, reader.uint32()),
          };
          break;
        case 8:
          message.exprKind = {
            $case: "structExpr",
            structExpr: Expr_CreateStruct.decode(reader, reader.uint32()),
          };
          break;
        case 9:
          message.exprKind = {
            $case: "comprehensionExpr",
            comprehensionExpr: Expr_Comprehension.decode(
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

function createBaseExpr_Ident(): Expr_Ident {
  return { name: "" };
}

export const Expr_Ident = {
  encode(
    message: Expr_Ident,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Ident {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Ident();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseExpr_Select(): Expr_Select {
  return { operand: undefined, field: "", testOnly: false };
}

export const Expr_Select = {
  encode(
    message: Expr_Select,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operand !== undefined) {
      Expr.encode(message.operand, writer.uint32(10).fork()).ldelim();
    }
    if (message.field !== "") {
      writer.uint32(18).string(message.field);
    }
    if (message.testOnly === true) {
      writer.uint32(24).bool(message.testOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Select {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Select();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operand = Expr.decode(reader, reader.uint32());
          break;
        case 2:
          message.field = reader.string();
          break;
        case 3:
          message.testOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseExpr_Call(): Expr_Call {
  return { target: undefined, function: "", args: [] };
}

export const Expr_Call = {
  encode(
    message: Expr_Call,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.target !== undefined) {
      Expr.encode(message.target, writer.uint32(10).fork()).ldelim();
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    for (const v of message.args) {
      Expr.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Call {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Call();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = Expr.decode(reader, reader.uint32());
          break;
        case 2:
          message.function = reader.string();
          break;
        case 3:
          message.args.push(Expr.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseExpr_CreateList(): Expr_CreateList {
  return { elements: [] };
}

export const Expr_CreateList = {
  encode(
    message: Expr_CreateList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.elements) {
      Expr.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elements.push(Expr.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseExpr_CreateStruct(): Expr_CreateStruct {
  return { messageName: "", entries: [] };
}

export const Expr_CreateStruct = {
  encode(
    message: Expr_CreateStruct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    for (const v of message.entries) {
      Expr_CreateStruct_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateStruct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageName = reader.string();
          break;
        case 2:
          message.entries.push(
            Expr_CreateStruct_Entry.decode(reader, reader.uint32())
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

function createBaseExpr_CreateStruct_Entry(): Expr_CreateStruct_Entry {
  return { id: 0, keyKind: undefined, value: undefined };
}

export const Expr_CreateStruct_Entry = {
  encode(
    message: Expr_CreateStruct_Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.keyKind?.$case === "fieldKey") {
      writer.uint32(18).string(message.keyKind.fieldKey);
    }
    if (message.keyKind?.$case === "mapKey") {
      Expr.encode(message.keyKind.mapKey, writer.uint32(26).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Expr.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Expr_CreateStruct_Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateStruct_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.keyKind = { $case: "fieldKey", fieldKey: reader.string() };
          break;
        case 3:
          message.keyKind = {
            $case: "mapKey",
            mapKey: Expr.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.value = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseExpr_Comprehension(): Expr_Comprehension {
  return {
    iterVar: "",
    iterRange: undefined,
    accuVar: "",
    accuInit: undefined,
    loopCondition: undefined,
    loopStep: undefined,
    result: undefined,
  };
}

export const Expr_Comprehension = {
  encode(
    message: Expr_Comprehension,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.iterVar !== "") {
      writer.uint32(10).string(message.iterVar);
    }
    if (message.iterRange !== undefined) {
      Expr.encode(message.iterRange, writer.uint32(18).fork()).ldelim();
    }
    if (message.accuVar !== "") {
      writer.uint32(26).string(message.accuVar);
    }
    if (message.accuInit !== undefined) {
      Expr.encode(message.accuInit, writer.uint32(34).fork()).ldelim();
    }
    if (message.loopCondition !== undefined) {
      Expr.encode(message.loopCondition, writer.uint32(42).fork()).ldelim();
    }
    if (message.loopStep !== undefined) {
      Expr.encode(message.loopStep, writer.uint32(50).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Expr.encode(message.result, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Comprehension {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Comprehension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iterVar = reader.string();
          break;
        case 2:
          message.iterRange = Expr.decode(reader, reader.uint32());
          break;
        case 3:
          message.accuVar = reader.string();
          break;
        case 4:
          message.accuInit = Expr.decode(reader, reader.uint32());
          break;
        case 5:
          message.loopCondition = Expr.decode(reader, reader.uint32());
          break;
        case 6:
          message.loopStep = Expr.decode(reader, reader.uint32());
          break;
        case 7:
          message.result = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseConstant(): Constant {
  return { constantKind: undefined };
}

export const Constant = {
  encode(
    message: Constant,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.constantKind?.$case === "nullValue") {
      writer.uint32(8).int32(message.constantKind.nullValue);
    }
    if (message.constantKind?.$case === "boolValue") {
      writer.uint32(16).bool(message.constantKind.boolValue);
    }
    if (message.constantKind?.$case === "int64Value") {
      writer.uint32(24).int64(message.constantKind.int64Value);
    }
    if (message.constantKind?.$case === "uint64Value") {
      writer.uint32(32).uint64(message.constantKind.uint64Value);
    }
    if (message.constantKind?.$case === "doubleValue") {
      writer.uint32(41).double(message.constantKind.doubleValue);
    }
    if (message.constantKind?.$case === "stringValue") {
      writer.uint32(50).string(message.constantKind.stringValue);
    }
    if (message.constantKind?.$case === "bytesValue") {
      writer.uint32(58).bytes(message.constantKind.bytesValue);
    }
    if (message.constantKind?.$case === "durationValue") {
      Duration.encode(
        message.constantKind.durationValue,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.constantKind?.$case === "timestampValue") {
      Timestamp.encode(
        toTimestamp(message.constantKind.timestampValue),
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Constant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.constantKind = {
            $case: "nullValue",
            nullValue: reader.int32() as any,
          };
          break;
        case 2:
          message.constantKind = {
            $case: "boolValue",
            boolValue: reader.bool(),
          };
          break;
        case 3:
          message.constantKind = {
            $case: "int64Value",
            int64Value: longToNumber(reader.int64() as Long),
          };
          break;
        case 4:
          message.constantKind = {
            $case: "uint64Value",
            uint64Value: longToNumber(reader.uint64() as Long),
          };
          break;
        case 5:
          message.constantKind = {
            $case: "doubleValue",
            doubleValue: reader.double(),
          };
          break;
        case 6:
          message.constantKind = {
            $case: "stringValue",
            stringValue: reader.string(),
          };
          break;
        case 7:
          message.constantKind = {
            $case: "bytesValue",
            bytesValue: reader.bytes() as Buffer,
          };
          break;
        case 8:
          message.constantKind = {
            $case: "durationValue",
            durationValue: Duration.decode(reader, reader.uint32()),
          };
          break;
        case 9:
          message.constantKind = {
            $case: "timestampValue",
            timestampValue: fromTimestamp(
              Timestamp.decode(reader, reader.uint32())
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

function createBaseSourceInfo(): SourceInfo {
  return {
    syntaxVersion: "",
    location: "",
    lineOffsets: [],
    positions: {},
    macroCalls: {},
  };
}

export const SourceInfo = {
  encode(
    message: SourceInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.syntaxVersion !== "") {
      writer.uint32(10).string(message.syntaxVersion);
    }
    if (message.location !== "") {
      writer.uint32(18).string(message.location);
    }
    writer.uint32(26).fork();
    for (const v of message.lineOffsets) {
      writer.int32(v);
    }
    writer.ldelim();
    Object.entries(message.positions).forEach(([key, value]) => {
      SourceInfo_PositionsEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    Object.entries(message.macroCalls).forEach(([key, value]) => {
      SourceInfo_MacroCallsEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syntaxVersion = reader.string();
          break;
        case 2:
          message.location = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lineOffsets.push(reader.int32());
            }
          } else {
            message.lineOffsets.push(reader.int32());
          }
          break;
        case 4:
          const entry4 = SourceInfo_PositionsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.positions[entry4.key] = entry4.value;
          }
          break;
        case 5:
          const entry5 = SourceInfo_MacroCallsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.macroCalls[entry5.key] = entry5.value;
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

function createBaseSourceInfo_PositionsEntry(): SourceInfo_PositionsEntry {
  return { key: 0, value: 0 };
}

export const SourceInfo_PositionsEntry = {
  encode(
    message: SourceInfo_PositionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SourceInfo_PositionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo_PositionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSourceInfo_MacroCallsEntry(): SourceInfo_MacroCallsEntry {
  return { key: 0, value: undefined };
}

export const SourceInfo_MacroCallsEntry = {
  encode(
    message: SourceInfo_MacroCallsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Expr.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SourceInfo_MacroCallsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo_MacroCallsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSourcePosition(): SourcePosition {
  return { location: "", offset: 0, line: 0, column: 0 };
}

export const SourcePosition = {
  encode(
    message: SourcePosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }
    if (message.offset !== 0) {
      writer.uint32(16).int32(message.offset);
    }
    if (message.line !== 0) {
      writer.uint32(24).int32(message.line);
    }
    if (message.column !== 0) {
      writer.uint32(32).int32(message.column);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourcePosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourcePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location = reader.string();
          break;
        case 2:
          message.offset = reader.int32();
          break;
        case 3:
          message.line = reader.int32();
          break;
        case 4:
          message.column = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
