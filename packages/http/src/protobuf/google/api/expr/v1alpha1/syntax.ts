/* eslint-disable */
import { Timestamp } from "../../../../google/protobuf/timestamp";
import {
  NullValue,
  nullValueToJSON,
  nullValueFromJSON,
} from "../../../../google/protobuf/struct";
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
    | { $case: "bytesValue"; bytesValue: Uint8Array }
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
  fromJSON(object: any): ParsedExpr {
    return {
      expr: isSet(object.expr) ? Expr.fromJSON(object.expr) : undefined,
      sourceInfo: isSet(object.sourceInfo)
        ? SourceInfo.fromJSON(object.sourceInfo)
        : undefined,
    };
  },

  toJSON(message: ParsedExpr): unknown {
    const obj: any = {};
    message.expr !== undefined &&
      (obj.expr = message.expr ? Expr.toJSON(message.expr) : undefined);
    message.sourceInfo !== undefined &&
      (obj.sourceInfo = message.sourceInfo
        ? SourceInfo.toJSON(message.sourceInfo)
        : undefined);
    return obj;
  },
};

function createBaseExpr(): Expr {
  return { id: 0, exprKind: undefined };
}

export const Expr = {
  fromJSON(object: any): Expr {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      exprKind: isSet(object.constExpr)
        ? { $case: "constExpr", constExpr: Constant.fromJSON(object.constExpr) }
        : isSet(object.identExpr)
        ? {
            $case: "identExpr",
            identExpr: Expr_Ident.fromJSON(object.identExpr),
          }
        : isSet(object.selectExpr)
        ? {
            $case: "selectExpr",
            selectExpr: Expr_Select.fromJSON(object.selectExpr),
          }
        : isSet(object.callExpr)
        ? { $case: "callExpr", callExpr: Expr_Call.fromJSON(object.callExpr) }
        : isSet(object.listExpr)
        ? {
            $case: "listExpr",
            listExpr: Expr_CreateList.fromJSON(object.listExpr),
          }
        : isSet(object.structExpr)
        ? {
            $case: "structExpr",
            structExpr: Expr_CreateStruct.fromJSON(object.structExpr),
          }
        : isSet(object.comprehensionExpr)
        ? {
            $case: "comprehensionExpr",
            comprehensionExpr: Expr_Comprehension.fromJSON(
              object.comprehensionExpr
            ),
          }
        : undefined,
    };
  },

  toJSON(message: Expr): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.exprKind?.$case === "constExpr" &&
      (obj.constExpr = message.exprKind?.constExpr
        ? Constant.toJSON(message.exprKind?.constExpr)
        : undefined);
    message.exprKind?.$case === "identExpr" &&
      (obj.identExpr = message.exprKind?.identExpr
        ? Expr_Ident.toJSON(message.exprKind?.identExpr)
        : undefined);
    message.exprKind?.$case === "selectExpr" &&
      (obj.selectExpr = message.exprKind?.selectExpr
        ? Expr_Select.toJSON(message.exprKind?.selectExpr)
        : undefined);
    message.exprKind?.$case === "callExpr" &&
      (obj.callExpr = message.exprKind?.callExpr
        ? Expr_Call.toJSON(message.exprKind?.callExpr)
        : undefined);
    message.exprKind?.$case === "listExpr" &&
      (obj.listExpr = message.exprKind?.listExpr
        ? Expr_CreateList.toJSON(message.exprKind?.listExpr)
        : undefined);
    message.exprKind?.$case === "structExpr" &&
      (obj.structExpr = message.exprKind?.structExpr
        ? Expr_CreateStruct.toJSON(message.exprKind?.structExpr)
        : undefined);
    message.exprKind?.$case === "comprehensionExpr" &&
      (obj.comprehensionExpr = message.exprKind?.comprehensionExpr
        ? Expr_Comprehension.toJSON(message.exprKind?.comprehensionExpr)
        : undefined);
    return obj;
  },
};

function createBaseExpr_Ident(): Expr_Ident {
  return { name: "" };
}

export const Expr_Ident = {
  fromJSON(object: any): Expr_Ident {
    return {
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: Expr_Ident): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
};

function createBaseExpr_Select(): Expr_Select {
  return { operand: undefined, field: "", testOnly: false };
}

export const Expr_Select = {
  fromJSON(object: any): Expr_Select {
    return {
      operand: isSet(object.operand)
        ? Expr.fromJSON(object.operand)
        : undefined,
      field: isSet(object.field) ? String(object.field) : "",
      testOnly: isSet(object.testOnly) ? Boolean(object.testOnly) : false,
    };
  },

  toJSON(message: Expr_Select): unknown {
    const obj: any = {};
    message.operand !== undefined &&
      (obj.operand = message.operand
        ? Expr.toJSON(message.operand)
        : undefined);
    message.field !== undefined && (obj.field = message.field);
    message.testOnly !== undefined && (obj.testOnly = message.testOnly);
    return obj;
  },
};

function createBaseExpr_Call(): Expr_Call {
  return { target: undefined, function: "", args: [] };
}

export const Expr_Call = {
  fromJSON(object: any): Expr_Call {
    return {
      target: isSet(object.target) ? Expr.fromJSON(object.target) : undefined,
      function: isSet(object.function) ? String(object.function) : "",
      args: Array.isArray(object?.args)
        ? object.args.map((e: any) => Expr.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Expr_Call): unknown {
    const obj: any = {};
    message.target !== undefined &&
      (obj.target = message.target ? Expr.toJSON(message.target) : undefined);
    message.function !== undefined && (obj.function = message.function);
    if (message.args) {
      obj.args = message.args.map((e) => (e ? Expr.toJSON(e) : undefined));
    } else {
      obj.args = [];
    }
    return obj;
  },
};

function createBaseExpr_CreateList(): Expr_CreateList {
  return { elements: [] };
}

export const Expr_CreateList = {
  fromJSON(object: any): Expr_CreateList {
    return {
      elements: Array.isArray(object?.elements)
        ? object.elements.map((e: any) => Expr.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Expr_CreateList): unknown {
    const obj: any = {};
    if (message.elements) {
      obj.elements = message.elements.map((e) =>
        e ? Expr.toJSON(e) : undefined
      );
    } else {
      obj.elements = [];
    }
    return obj;
  },
};

function createBaseExpr_CreateStruct(): Expr_CreateStruct {
  return { messageName: "", entries: [] };
}

export const Expr_CreateStruct = {
  fromJSON(object: any): Expr_CreateStruct {
    return {
      messageName: isSet(object.messageName) ? String(object.messageName) : "",
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => Expr_CreateStruct_Entry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Expr_CreateStruct): unknown {
    const obj: any = {};
    message.messageName !== undefined &&
      (obj.messageName = message.messageName);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? Expr_CreateStruct_Entry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },
};

function createBaseExpr_CreateStruct_Entry(): Expr_CreateStruct_Entry {
  return { id: 0, keyKind: undefined, value: undefined };
}

export const Expr_CreateStruct_Entry = {
  fromJSON(object: any): Expr_CreateStruct_Entry {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      keyKind: isSet(object.fieldKey)
        ? { $case: "fieldKey", fieldKey: String(object.fieldKey) }
        : isSet(object.mapKey)
        ? { $case: "mapKey", mapKey: Expr.fromJSON(object.mapKey) }
        : undefined,
      value: isSet(object.value) ? Expr.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Expr_CreateStruct_Entry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.keyKind?.$case === "fieldKey" &&
      (obj.fieldKey = message.keyKind?.fieldKey);
    message.keyKind?.$case === "mapKey" &&
      (obj.mapKey = message.keyKind?.mapKey
        ? Expr.toJSON(message.keyKind?.mapKey)
        : undefined);
    message.value !== undefined &&
      (obj.value = message.value ? Expr.toJSON(message.value) : undefined);
    return obj;
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
  fromJSON(object: any): Expr_Comprehension {
    return {
      iterVar: isSet(object.iterVar) ? String(object.iterVar) : "",
      iterRange: isSet(object.iterRange)
        ? Expr.fromJSON(object.iterRange)
        : undefined,
      accuVar: isSet(object.accuVar) ? String(object.accuVar) : "",
      accuInit: isSet(object.accuInit)
        ? Expr.fromJSON(object.accuInit)
        : undefined,
      loopCondition: isSet(object.loopCondition)
        ? Expr.fromJSON(object.loopCondition)
        : undefined,
      loopStep: isSet(object.loopStep)
        ? Expr.fromJSON(object.loopStep)
        : undefined,
      result: isSet(object.result) ? Expr.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: Expr_Comprehension): unknown {
    const obj: any = {};
    message.iterVar !== undefined && (obj.iterVar = message.iterVar);
    message.iterRange !== undefined &&
      (obj.iterRange = message.iterRange
        ? Expr.toJSON(message.iterRange)
        : undefined);
    message.accuVar !== undefined && (obj.accuVar = message.accuVar);
    message.accuInit !== undefined &&
      (obj.accuInit = message.accuInit
        ? Expr.toJSON(message.accuInit)
        : undefined);
    message.loopCondition !== undefined &&
      (obj.loopCondition = message.loopCondition
        ? Expr.toJSON(message.loopCondition)
        : undefined);
    message.loopStep !== undefined &&
      (obj.loopStep = message.loopStep
        ? Expr.toJSON(message.loopStep)
        : undefined);
    message.result !== undefined &&
      (obj.result = message.result ? Expr.toJSON(message.result) : undefined);
    return obj;
  },
};

function createBaseConstant(): Constant {
  return { constantKind: undefined };
}

export const Constant = {
  fromJSON(object: any): Constant {
    return {
      constantKind: isSet(object.nullValue)
        ? { $case: "nullValue", nullValue: nullValueFromJSON(object.nullValue) }
        : isSet(object.boolValue)
        ? { $case: "boolValue", boolValue: Boolean(object.boolValue) }
        : isSet(object.int64Value)
        ? { $case: "int64Value", int64Value: Number(object.int64Value) }
        : isSet(object.uint64Value)
        ? { $case: "uint64Value", uint64Value: Number(object.uint64Value) }
        : isSet(object.doubleValue)
        ? { $case: "doubleValue", doubleValue: Number(object.doubleValue) }
        : isSet(object.stringValue)
        ? { $case: "stringValue", stringValue: String(object.stringValue) }
        : isSet(object.bytesValue)
        ? {
            $case: "bytesValue",
            bytesValue: bytesFromBase64(object.bytesValue),
          }
        : isSet(object.durationValue)
        ? {
            $case: "durationValue",
            durationValue: Duration.fromJSON(object.durationValue),
          }
        : isSet(object.timestampValue)
        ? {
            $case: "timestampValue",
            timestampValue: fromJsonTimestamp(object.timestampValue),
          }
        : undefined,
    };
  },

  toJSON(message: Constant): unknown {
    const obj: any = {};
    message.constantKind?.$case === "nullValue" &&
      (obj.nullValue =
        message.constantKind?.nullValue !== undefined
          ? nullValueToJSON(message.constantKind?.nullValue)
          : undefined);
    message.constantKind?.$case === "boolValue" &&
      (obj.boolValue = message.constantKind?.boolValue);
    message.constantKind?.$case === "int64Value" &&
      (obj.int64Value = Math.round(message.constantKind?.int64Value));
    message.constantKind?.$case === "uint64Value" &&
      (obj.uint64Value = Math.round(message.constantKind?.uint64Value));
    message.constantKind?.$case === "doubleValue" &&
      (obj.doubleValue = message.constantKind?.doubleValue);
    message.constantKind?.$case === "stringValue" &&
      (obj.stringValue = message.constantKind?.stringValue);
    message.constantKind?.$case === "bytesValue" &&
      (obj.bytesValue =
        message.constantKind?.bytesValue !== undefined
          ? base64FromBytes(message.constantKind?.bytesValue)
          : undefined);
    message.constantKind?.$case === "durationValue" &&
      (obj.durationValue = message.constantKind?.durationValue
        ? Duration.toJSON(message.constantKind?.durationValue)
        : undefined);
    message.constantKind?.$case === "timestampValue" &&
      (obj.timestampValue = message.constantKind?.timestampValue.toISOString());
    return obj;
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
  fromJSON(object: any): SourceInfo {
    return {
      syntaxVersion: isSet(object.syntaxVersion)
        ? String(object.syntaxVersion)
        : "",
      location: isSet(object.location) ? String(object.location) : "",
      lineOffsets: Array.isArray(object?.lineOffsets)
        ? object.lineOffsets.map((e: any) => Number(e))
        : [],
      positions: isObject(object.positions)
        ? Object.entries(object.positions).reduce<{ [key: number]: number }>(
            (acc, [key, value]) => {
              acc[Number(key)] = Number(value);
              return acc;
            },
            {}
          )
        : {},
      macroCalls: isObject(object.macroCalls)
        ? Object.entries(object.macroCalls).reduce<{ [key: number]: Expr }>(
            (acc, [key, value]) => {
              acc[Number(key)] = Expr.fromJSON(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: SourceInfo): unknown {
    const obj: any = {};
    message.syntaxVersion !== undefined &&
      (obj.syntaxVersion = message.syntaxVersion);
    message.location !== undefined && (obj.location = message.location);
    if (message.lineOffsets) {
      obj.lineOffsets = message.lineOffsets.map((e) => Math.round(e));
    } else {
      obj.lineOffsets = [];
    }
    obj.positions = {};
    if (message.positions) {
      Object.entries(message.positions).forEach(([k, v]) => {
        obj.positions[k] = Math.round(v);
      });
    }
    obj.macroCalls = {};
    if (message.macroCalls) {
      Object.entries(message.macroCalls).forEach(([k, v]) => {
        obj.macroCalls[k] = Expr.toJSON(v);
      });
    }
    return obj;
  },
};

function createBaseSourceInfo_PositionsEntry(): SourceInfo_PositionsEntry {
  return { key: 0, value: 0 };
}

export const SourceInfo_PositionsEntry = {
  fromJSON(object: any): SourceInfo_PositionsEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: SourceInfo_PositionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
};

function createBaseSourceInfo_MacroCallsEntry(): SourceInfo_MacroCallsEntry {
  return { key: 0, value: undefined };
}

export const SourceInfo_MacroCallsEntry = {
  fromJSON(object: any): SourceInfo_MacroCallsEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Expr.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SourceInfo_MacroCallsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined &&
      (obj.value = message.value ? Expr.toJSON(message.value) : undefined);
    return obj;
  },
};

function createBaseSourcePosition(): SourcePosition {
  return { location: "", offset: 0, line: 0, column: 0 };
}

export const SourcePosition = {
  fromJSON(object: any): SourcePosition {
    return {
      location: isSet(object.location) ? String(object.location) : "",
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      line: isSet(object.line) ? Number(object.line) : 0,
      column: isSet(object.column) ? Number(object.column) : 0,
    };
  },

  toJSON(message: SourcePosition): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = message.location);
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.line !== undefined && (obj.line = Math.round(message.line));
    message.column !== undefined && (obj.column = Math.round(message.column));
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
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
