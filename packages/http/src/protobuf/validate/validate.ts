/* eslint-disable */
import { Duration } from "../google/protobuf/duration";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "validate";

export enum KnownRegex {
  UNKNOWN = 0,
  HTTP_HEADER_NAME = 1,
  HTTP_HEADER_VALUE = 2,
}

export function knownRegexFromJSON(object: any): KnownRegex {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return KnownRegex.UNKNOWN;
    case 1:
    case "HTTP_HEADER_NAME":
      return KnownRegex.HTTP_HEADER_NAME;
    case 2:
    case "HTTP_HEADER_VALUE":
      return KnownRegex.HTTP_HEADER_VALUE;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum KnownRegex",
      );
  }
}

export function knownRegexToJSON(object: KnownRegex): string {
  switch (object) {
    case KnownRegex.UNKNOWN:
      return "UNKNOWN";
    case KnownRegex.HTTP_HEADER_NAME:
      return "HTTP_HEADER_NAME";
    case KnownRegex.HTTP_HEADER_VALUE:
      return "HTTP_HEADER_VALUE";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum KnownRegex",
      );
  }
}

export interface FieldRules {
  message: MessageRules | undefined;
  type?:
    | { $case: "float"; float: FloatRules }
    | { $case: "double"; double: DoubleRules }
    | { $case: "int32"; int32: Int32Rules }
    | { $case: "int64"; int64: Int64Rules }
    | { $case: "uint32"; uint32: UInt32Rules }
    | { $case: "uint64"; uint64: UInt64Rules }
    | { $case: "sint32"; sint32: SInt32Rules }
    | { $case: "sint64"; sint64: SInt64Rules }
    | { $case: "fixed32"; fixed32: Fixed32Rules }
    | { $case: "fixed64"; fixed64: Fixed64Rules }
    | { $case: "sfixed32"; sfixed32: SFixed32Rules }
    | { $case: "sfixed64"; sfixed64: SFixed64Rules }
    | { $case: "bool"; bool: BoolRules }
    | { $case: "string"; string: StringRules }
    | { $case: "bytes"; bytes: BytesRules }
    | { $case: "enum"; enum: EnumRules }
    | { $case: "repeated"; repeated: RepeatedRules }
    | { $case: "map"; map: MapRules }
    | { $case: "any"; any: AnyRules }
    | { $case: "duration"; duration: DurationRules }
    | { $case: "timestamp"; timestamp: TimestampRules }
    | undefined;
}

export interface FloatRules {
  const: number;
  lt: number;
  lte: number;
  gt: number;
  gte: number;
  in: number[];
  notIn: number[];
  ignoreEmpty: boolean;
}

export interface DoubleRules {
  const: number;
  lt: number;
  lte: number;
  gt: number;
  gte: number;
  in: number[];
  notIn: number[];
  ignoreEmpty: boolean;
}

export interface Int32Rules {
  const: number;
  lt: number;
  lte: number;
  gt: number;
  gte: number;
  in: number[];
  notIn: number[];
  ignoreEmpty: boolean;
}

export interface Int64Rules {
  const: string;
  lt: string;
  lte: string;
  gt: string;
  gte: string;
  in: string[];
  notIn: string[];
  ignoreEmpty: boolean;
}

export interface UInt32Rules {
  const: number;
  lt: number;
  lte: number;
  gt: number;
  gte: number;
  in: number[];
  notIn: number[];
  ignoreEmpty: boolean;
}

export interface UInt64Rules {
  const: string;
  lt: string;
  lte: string;
  gt: string;
  gte: string;
  in: string[];
  notIn: string[];
  ignoreEmpty: boolean;
}

export interface SInt32Rules {
  const: number;
  lt: number;
  lte: number;
  gt: number;
  gte: number;
  in: number[];
  notIn: number[];
  ignoreEmpty: boolean;
}

export interface SInt64Rules {
  const: string;
  lt: string;
  lte: string;
  gt: string;
  gte: string;
  in: string[];
  notIn: string[];
  ignoreEmpty: boolean;
}

export interface Fixed32Rules {
  const: number;
  lt: number;
  lte: number;
  gt: number;
  gte: number;
  in: number[];
  notIn: number[];
  ignoreEmpty: boolean;
}

export interface Fixed64Rules {
  const: string;
  lt: string;
  lte: string;
  gt: string;
  gte: string;
  in: string[];
  notIn: string[];
  ignoreEmpty: boolean;
}

export interface SFixed32Rules {
  const: number;
  lt: number;
  lte: number;
  gt: number;
  gte: number;
  in: number[];
  notIn: number[];
  ignoreEmpty: boolean;
}

export interface SFixed64Rules {
  const: string;
  lt: string;
  lte: string;
  gt: string;
  gte: string;
  in: string[];
  notIn: string[];
  ignoreEmpty: boolean;
}

export interface BoolRules {
  const: boolean;
}

export interface StringRules {
  const: string;
  len: string;
  minLen: string;
  maxLen: string;
  lenBytes: string;
  minBytes: string;
  maxBytes: string;
  pattern: string;
  prefix: string;
  suffix: string;
  contains: string;
  notContains: string;
  in: string[];
  notIn: string[];
  wellKnown?:
    | { $case: "email"; email: boolean }
    | { $case: "hostname"; hostname: boolean }
    | { $case: "ip"; ip: boolean }
    | { $case: "ipv4"; ipv4: boolean }
    | { $case: "ipv6"; ipv6: boolean }
    | { $case: "uri"; uri: boolean }
    | { $case: "uriRef"; uriRef: boolean }
    | { $case: "address"; address: boolean }
    | { $case: "uuid"; uuid: boolean }
    | { $case: "wellKnownRegex"; wellKnownRegex: KnownRegex }
    | undefined;
  strict: boolean;
  ignoreEmpty: boolean;
}

export interface BytesRules {
  const: Uint8Array;
  len: string;
  minLen: string;
  maxLen: string;
  pattern: string;
  prefix: Uint8Array;
  suffix: Uint8Array;
  contains: Uint8Array;
  in: Uint8Array[];
  notIn: Uint8Array[];
  wellKnown?:
    | { $case: "ip"; ip: boolean }
    | { $case: "ipv4"; ipv4: boolean }
    | { $case: "ipv6"; ipv6: boolean }
    | undefined;
  ignoreEmpty: boolean;
}

export interface EnumRules {
  const: number;
  definedOnly: boolean;
  in: number[];
  notIn: number[];
}

export interface MessageRules {
  skip: boolean;
  required: boolean;
}

export interface RepeatedRules {
  minItems: string;
  maxItems: string;
  unique: boolean;
  items: FieldRules | undefined;
  ignoreEmpty: boolean;
}

export interface MapRules {
  minPairs: string;
  maxPairs: string;
  noSparse: boolean;
  keys: FieldRules | undefined;
  values: FieldRules | undefined;
  ignoreEmpty: boolean;
}

export interface AnyRules {
  required: boolean;
  in: string[];
  notIn: string[];
}

export interface DurationRules {
  required: boolean;
  const: Duration | undefined;
  lt: Duration | undefined;
  lte: Duration | undefined;
  gt: Duration | undefined;
  gte: Duration | undefined;
  in: Duration[];
  notIn: Duration[];
}

export interface TimestampRules {
  required: boolean;
  const: Date | undefined;
  lt: Date | undefined;
  lte: Date | undefined;
  gt: Date | undefined;
  gte: Date | undefined;
  ltNow: boolean;
  gtNow: boolean;
  within: Duration | undefined;
}

export const FieldRules = {
  fromJSON(object: any): FieldRules {
    return {
      message: isSet(object.message)
        ? MessageRules.fromJSON(object.message)
        : undefined,
      type: isSet(object.float)
        ? { $case: "float", float: FloatRules.fromJSON(object.float) }
        : isSet(object.double)
          ? { $case: "double", double: DoubleRules.fromJSON(object.double) }
          : isSet(object.int32)
            ? { $case: "int32", int32: Int32Rules.fromJSON(object.int32) }
            : isSet(object.int64)
              ? { $case: "int64", int64: Int64Rules.fromJSON(object.int64) }
              : isSet(object.uint32)
                ? {
                    $case: "uint32",
                    uint32: UInt32Rules.fromJSON(object.uint32),
                  }
                : isSet(object.uint64)
                  ? {
                      $case: "uint64",
                      uint64: UInt64Rules.fromJSON(object.uint64),
                    }
                  : isSet(object.sint32)
                    ? {
                        $case: "sint32",
                        sint32: SInt32Rules.fromJSON(object.sint32),
                      }
                    : isSet(object.sint64)
                      ? {
                          $case: "sint64",
                          sint64: SInt64Rules.fromJSON(object.sint64),
                        }
                      : isSet(object.fixed32)
                        ? {
                            $case: "fixed32",
                            fixed32: Fixed32Rules.fromJSON(object.fixed32),
                          }
                        : isSet(object.fixed64)
                          ? {
                              $case: "fixed64",
                              fixed64: Fixed64Rules.fromJSON(object.fixed64),
                            }
                          : isSet(object.sfixed32)
                            ? {
                                $case: "sfixed32",
                                sfixed32: SFixed32Rules.fromJSON(
                                  object.sfixed32,
                                ),
                              }
                            : isSet(object.sfixed64)
                              ? {
                                  $case: "sfixed64",
                                  sfixed64: SFixed64Rules.fromJSON(
                                    object.sfixed64,
                                  ),
                                }
                              : isSet(object.bool)
                                ? {
                                    $case: "bool",
                                    bool: BoolRules.fromJSON(object.bool),
                                  }
                                : isSet(object.string)
                                  ? {
                                      $case: "string",
                                      string: StringRules.fromJSON(
                                        object.string,
                                      ),
                                    }
                                  : isSet(object.bytes)
                                    ? {
                                        $case: "bytes",
                                        bytes: BytesRules.fromJSON(
                                          object.bytes,
                                        ),
                                      }
                                    : isSet(object.enum)
                                      ? {
                                          $case: "enum",
                                          enum: EnumRules.fromJSON(object.enum),
                                        }
                                      : isSet(object.repeated)
                                        ? {
                                            $case: "repeated",
                                            repeated: RepeatedRules.fromJSON(
                                              object.repeated,
                                            ),
                                          }
                                        : isSet(object.map)
                                          ? {
                                              $case: "map",
                                              map: MapRules.fromJSON(
                                                object.map,
                                              ),
                                            }
                                          : isSet(object.any)
                                            ? {
                                                $case: "any",
                                                any: AnyRules.fromJSON(
                                                  object.any,
                                                ),
                                              }
                                            : isSet(object.duration)
                                              ? {
                                                  $case: "duration",
                                                  duration:
                                                    DurationRules.fromJSON(
                                                      object.duration,
                                                    ),
                                                }
                                              : isSet(object.timestamp)
                                                ? {
                                                    $case: "timestamp",
                                                    timestamp:
                                                      TimestampRules.fromJSON(
                                                        object.timestamp,
                                                      ),
                                                  }
                                                : undefined,
    };
  },

  toJSON(message: FieldRules): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = MessageRules.toJSON(message.message);
    }
    if (message.type?.$case === "float") {
      obj.float = FloatRules.toJSON(message.type.float);
    }
    if (message.type?.$case === "double") {
      obj.double = DoubleRules.toJSON(message.type.double);
    }
    if (message.type?.$case === "int32") {
      obj.int32 = Int32Rules.toJSON(message.type.int32);
    }
    if (message.type?.$case === "int64") {
      obj.int64 = Int64Rules.toJSON(message.type.int64);
    }
    if (message.type?.$case === "uint32") {
      obj.uint32 = UInt32Rules.toJSON(message.type.uint32);
    }
    if (message.type?.$case === "uint64") {
      obj.uint64 = UInt64Rules.toJSON(message.type.uint64);
    }
    if (message.type?.$case === "sint32") {
      obj.sint32 = SInt32Rules.toJSON(message.type.sint32);
    }
    if (message.type?.$case === "sint64") {
      obj.sint64 = SInt64Rules.toJSON(message.type.sint64);
    }
    if (message.type?.$case === "fixed32") {
      obj.fixed32 = Fixed32Rules.toJSON(message.type.fixed32);
    }
    if (message.type?.$case === "fixed64") {
      obj.fixed64 = Fixed64Rules.toJSON(message.type.fixed64);
    }
    if (message.type?.$case === "sfixed32") {
      obj.sfixed32 = SFixed32Rules.toJSON(message.type.sfixed32);
    }
    if (message.type?.$case === "sfixed64") {
      obj.sfixed64 = SFixed64Rules.toJSON(message.type.sfixed64);
    }
    if (message.type?.$case === "bool") {
      obj.bool = BoolRules.toJSON(message.type.bool);
    }
    if (message.type?.$case === "string") {
      obj.string = StringRules.toJSON(message.type.string);
    }
    if (message.type?.$case === "bytes") {
      obj.bytes = BytesRules.toJSON(message.type.bytes);
    }
    if (message.type?.$case === "enum") {
      obj.enum = EnumRules.toJSON(message.type.enum);
    }
    if (message.type?.$case === "repeated") {
      obj.repeated = RepeatedRules.toJSON(message.type.repeated);
    }
    if (message.type?.$case === "map") {
      obj.map = MapRules.toJSON(message.type.map);
    }
    if (message.type?.$case === "any") {
      obj.any = AnyRules.toJSON(message.type.any);
    }
    if (message.type?.$case === "duration") {
      obj.duration = DurationRules.toJSON(message.type.duration);
    }
    if (message.type?.$case === "timestamp") {
      obj.timestamp = TimestampRules.toJSON(message.type.timestamp);
    }
    return obj;
  },
};

export const FloatRules = {
  fromJSON(object: any): FloatRules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: FloatRules): unknown {
    const obj: any = {};
    if (message.const !== 0) {
      obj.const = message.const;
    }
    if (message.lt !== 0) {
      obj.lt = message.lt;
    }
    if (message.lte !== 0) {
      obj.lte = message.lte;
    }
    if (message.gt !== 0) {
      obj.gt = message.gt;
    }
    if (message.gte !== 0) {
      obj.gte = message.gte;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn;
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const DoubleRules = {
  fromJSON(object: any): DoubleRules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: DoubleRules): unknown {
    const obj: any = {};
    if (message.const !== 0) {
      obj.const = message.const;
    }
    if (message.lt !== 0) {
      obj.lt = message.lt;
    }
    if (message.lte !== 0) {
      obj.lte = message.lte;
    }
    if (message.gt !== 0) {
      obj.gt = message.gt;
    }
    if (message.gte !== 0) {
      obj.gte = message.gte;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn;
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const Int32Rules = {
  fromJSON(object: any): Int32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: Int32Rules): unknown {
    const obj: any = {};
    if (message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const Int64Rules = {
  fromJSON(object: any): Int64Rules {
    return {
      const: isSet(object.const) ? globalThis.String(object.const) : "0",
      lt: isSet(object.lt) ? globalThis.String(object.lt) : "0",
      lte: isSet(object.lte) ? globalThis.String(object.lte) : "0",
      gt: isSet(object.gt) ? globalThis.String(object.gt) : "0",
      gte: isSet(object.gte) ? globalThis.String(object.gte) : "0",
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.String(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.String(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: Int64Rules): unknown {
    const obj: any = {};
    if (message.const !== "0") {
      obj.const = message.const;
    }
    if (message.lt !== "0") {
      obj.lt = message.lt;
    }
    if (message.lte !== "0") {
      obj.lte = message.lte;
    }
    if (message.gt !== "0") {
      obj.gt = message.gt;
    }
    if (message.gte !== "0") {
      obj.gte = message.gte;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn;
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const UInt32Rules = {
  fromJSON(object: any): UInt32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: UInt32Rules): unknown {
    const obj: any = {};
    if (message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const UInt64Rules = {
  fromJSON(object: any): UInt64Rules {
    return {
      const: isSet(object.const) ? globalThis.String(object.const) : "0",
      lt: isSet(object.lt) ? globalThis.String(object.lt) : "0",
      lte: isSet(object.lte) ? globalThis.String(object.lte) : "0",
      gt: isSet(object.gt) ? globalThis.String(object.gt) : "0",
      gte: isSet(object.gte) ? globalThis.String(object.gte) : "0",
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.String(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.String(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: UInt64Rules): unknown {
    const obj: any = {};
    if (message.const !== "0") {
      obj.const = message.const;
    }
    if (message.lt !== "0") {
      obj.lt = message.lt;
    }
    if (message.lte !== "0") {
      obj.lte = message.lte;
    }
    if (message.gt !== "0") {
      obj.gt = message.gt;
    }
    if (message.gte !== "0") {
      obj.gte = message.gte;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn;
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const SInt32Rules = {
  fromJSON(object: any): SInt32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: SInt32Rules): unknown {
    const obj: any = {};
    if (message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const SInt64Rules = {
  fromJSON(object: any): SInt64Rules {
    return {
      const: isSet(object.const) ? globalThis.String(object.const) : "0",
      lt: isSet(object.lt) ? globalThis.String(object.lt) : "0",
      lte: isSet(object.lte) ? globalThis.String(object.lte) : "0",
      gt: isSet(object.gt) ? globalThis.String(object.gt) : "0",
      gte: isSet(object.gte) ? globalThis.String(object.gte) : "0",
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.String(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.String(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: SInt64Rules): unknown {
    const obj: any = {};
    if (message.const !== "0") {
      obj.const = message.const;
    }
    if (message.lt !== "0") {
      obj.lt = message.lt;
    }
    if (message.lte !== "0") {
      obj.lte = message.lte;
    }
    if (message.gt !== "0") {
      obj.gt = message.gt;
    }
    if (message.gte !== "0") {
      obj.gte = message.gte;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn;
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const Fixed32Rules = {
  fromJSON(object: any): Fixed32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: Fixed32Rules): unknown {
    const obj: any = {};
    if (message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const Fixed64Rules = {
  fromJSON(object: any): Fixed64Rules {
    return {
      const: isSet(object.const) ? globalThis.String(object.const) : "0",
      lt: isSet(object.lt) ? globalThis.String(object.lt) : "0",
      lte: isSet(object.lte) ? globalThis.String(object.lte) : "0",
      gt: isSet(object.gt) ? globalThis.String(object.gt) : "0",
      gte: isSet(object.gte) ? globalThis.String(object.gte) : "0",
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.String(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.String(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: Fixed64Rules): unknown {
    const obj: any = {};
    if (message.const !== "0") {
      obj.const = message.const;
    }
    if (message.lt !== "0") {
      obj.lt = message.lt;
    }
    if (message.lte !== "0") {
      obj.lte = message.lte;
    }
    if (message.gt !== "0") {
      obj.gt = message.gt;
    }
    if (message.gte !== "0") {
      obj.gte = message.gte;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn;
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const SFixed32Rules = {
  fromJSON(object: any): SFixed32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      lt: isSet(object.lt) ? globalThis.Number(object.lt) : 0,
      lte: isSet(object.lte) ? globalThis.Number(object.lte) : 0,
      gt: isSet(object.gt) ? globalThis.Number(object.gt) : 0,
      gte: isSet(object.gte) ? globalThis.Number(object.gte) : 0,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: SFixed32Rules): unknown {
    const obj: any = {};
    if (message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.lt !== 0) {
      obj.lt = Math.round(message.lt);
    }
    if (message.lte !== 0) {
      obj.lte = Math.round(message.lte);
    }
    if (message.gt !== 0) {
      obj.gt = Math.round(message.gt);
    }
    if (message.gte !== 0) {
      obj.gte = Math.round(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const SFixed64Rules = {
  fromJSON(object: any): SFixed64Rules {
    return {
      const: isSet(object.const) ? globalThis.String(object.const) : "0",
      lt: isSet(object.lt) ? globalThis.String(object.lt) : "0",
      lte: isSet(object.lte) ? globalThis.String(object.lte) : "0",
      gt: isSet(object.gt) ? globalThis.String(object.gt) : "0",
      gte: isSet(object.gte) ? globalThis.String(object.gte) : "0",
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.String(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.String(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: SFixed64Rules): unknown {
    const obj: any = {};
    if (message.const !== "0") {
      obj.const = message.const;
    }
    if (message.lt !== "0") {
      obj.lt = message.lt;
    }
    if (message.lte !== "0") {
      obj.lte = message.lte;
    }
    if (message.gt !== "0") {
      obj.gt = message.gt;
    }
    if (message.gte !== "0") {
      obj.gte = message.gte;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn;
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const BoolRules = {
  fromJSON(object: any): BoolRules {
    return {
      const: isSet(object.const) ? globalThis.Boolean(object.const) : false,
    };
  },

  toJSON(message: BoolRules): unknown {
    const obj: any = {};
    if (message.const === true) {
      obj.const = message.const;
    }
    return obj;
  },
};

export const StringRules = {
  fromJSON(object: any): StringRules {
    return {
      const: isSet(object.const) ? globalThis.String(object.const) : "",
      len: isSet(object.len) ? globalThis.String(object.len) : "0",
      minLen: isSet(object.minLen) ? globalThis.String(object.minLen) : "0",
      maxLen: isSet(object.maxLen) ? globalThis.String(object.maxLen) : "0",
      lenBytes: isSet(object.lenBytes)
        ? globalThis.String(object.lenBytes)
        : "0",
      minBytes: isSet(object.minBytes)
        ? globalThis.String(object.minBytes)
        : "0",
      maxBytes: isSet(object.maxBytes)
        ? globalThis.String(object.maxBytes)
        : "0",
      pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : "",
      prefix: isSet(object.prefix) ? globalThis.String(object.prefix) : "",
      suffix: isSet(object.suffix) ? globalThis.String(object.suffix) : "",
      contains: isSet(object.contains)
        ? globalThis.String(object.contains)
        : "",
      notContains: isSet(object.notContains)
        ? globalThis.String(object.notContains)
        : "",
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.String(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.String(e))
        : [],
      wellKnown: isSet(object.email)
        ? { $case: "email", email: globalThis.Boolean(object.email) }
        : isSet(object.hostname)
          ? { $case: "hostname", hostname: globalThis.Boolean(object.hostname) }
          : isSet(object.ip)
            ? { $case: "ip", ip: globalThis.Boolean(object.ip) }
            : isSet(object.ipv4)
              ? { $case: "ipv4", ipv4: globalThis.Boolean(object.ipv4) }
              : isSet(object.ipv6)
                ? { $case: "ipv6", ipv6: globalThis.Boolean(object.ipv6) }
                : isSet(object.uri)
                  ? { $case: "uri", uri: globalThis.Boolean(object.uri) }
                  : isSet(object.uriRef)
                    ? {
                        $case: "uriRef",
                        uriRef: globalThis.Boolean(object.uriRef),
                      }
                    : isSet(object.address)
                      ? {
                          $case: "address",
                          address: globalThis.Boolean(object.address),
                        }
                      : isSet(object.uuid)
                        ? {
                            $case: "uuid",
                            uuid: globalThis.Boolean(object.uuid),
                          }
                        : isSet(object.wellKnownRegex)
                          ? {
                              $case: "wellKnownRegex",
                              wellKnownRegex: knownRegexFromJSON(
                                object.wellKnownRegex,
                              ),
                            }
                          : undefined,
      strict: isSet(object.strict) ? globalThis.Boolean(object.strict) : false,
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: StringRules): unknown {
    const obj: any = {};
    if (message.const !== "") {
      obj.const = message.const;
    }
    if (message.len !== "0") {
      obj.len = message.len;
    }
    if (message.minLen !== "0") {
      obj.minLen = message.minLen;
    }
    if (message.maxLen !== "0") {
      obj.maxLen = message.maxLen;
    }
    if (message.lenBytes !== "0") {
      obj.lenBytes = message.lenBytes;
    }
    if (message.minBytes !== "0") {
      obj.minBytes = message.minBytes;
    }
    if (message.maxBytes !== "0") {
      obj.maxBytes = message.maxBytes;
    }
    if (message.pattern !== "") {
      obj.pattern = message.pattern;
    }
    if (message.prefix !== "") {
      obj.prefix = message.prefix;
    }
    if (message.suffix !== "") {
      obj.suffix = message.suffix;
    }
    if (message.contains !== "") {
      obj.contains = message.contains;
    }
    if (message.notContains !== "") {
      obj.notContains = message.notContains;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn;
    }
    if (message.wellKnown?.$case === "email") {
      obj.email = message.wellKnown.email;
    }
    if (message.wellKnown?.$case === "hostname") {
      obj.hostname = message.wellKnown.hostname;
    }
    if (message.wellKnown?.$case === "ip") {
      obj.ip = message.wellKnown.ip;
    }
    if (message.wellKnown?.$case === "ipv4") {
      obj.ipv4 = message.wellKnown.ipv4;
    }
    if (message.wellKnown?.$case === "ipv6") {
      obj.ipv6 = message.wellKnown.ipv6;
    }
    if (message.wellKnown?.$case === "uri") {
      obj.uri = message.wellKnown.uri;
    }
    if (message.wellKnown?.$case === "uriRef") {
      obj.uriRef = message.wellKnown.uriRef;
    }
    if (message.wellKnown?.$case === "address") {
      obj.address = message.wellKnown.address;
    }
    if (message.wellKnown?.$case === "uuid") {
      obj.uuid = message.wellKnown.uuid;
    }
    if (message.wellKnown?.$case === "wellKnownRegex") {
      obj.wellKnownRegex = knownRegexToJSON(message.wellKnown.wellKnownRegex);
    }
    if (message.strict === true) {
      obj.strict = message.strict;
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const BytesRules = {
  fromJSON(object: any): BytesRules {
    return {
      const: isSet(object.const)
        ? bytesFromBase64(object.const)
        : new Uint8Array(0),
      len: isSet(object.len) ? globalThis.String(object.len) : "0",
      minLen: isSet(object.minLen) ? globalThis.String(object.minLen) : "0",
      maxLen: isSet(object.maxLen) ? globalThis.String(object.maxLen) : "0",
      pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : "",
      prefix: isSet(object.prefix)
        ? bytesFromBase64(object.prefix)
        : new Uint8Array(0),
      suffix: isSet(object.suffix)
        ? bytesFromBase64(object.suffix)
        : new Uint8Array(0),
      contains: isSet(object.contains)
        ? bytesFromBase64(object.contains)
        : new Uint8Array(0),
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => bytesFromBase64(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => bytesFromBase64(e))
        : [],
      wellKnown: isSet(object.ip)
        ? { $case: "ip", ip: globalThis.Boolean(object.ip) }
        : isSet(object.ipv4)
          ? { $case: "ipv4", ipv4: globalThis.Boolean(object.ipv4) }
          : isSet(object.ipv6)
            ? { $case: "ipv6", ipv6: globalThis.Boolean(object.ipv6) }
            : undefined,
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: BytesRules): unknown {
    const obj: any = {};
    if (message.const.length !== 0) {
      obj.const = base64FromBytes(message.const);
    }
    if (message.len !== "0") {
      obj.len = message.len;
    }
    if (message.minLen !== "0") {
      obj.minLen = message.minLen;
    }
    if (message.maxLen !== "0") {
      obj.maxLen = message.maxLen;
    }
    if (message.pattern !== "") {
      obj.pattern = message.pattern;
    }
    if (message.prefix.length !== 0) {
      obj.prefix = base64FromBytes(message.prefix);
    }
    if (message.suffix.length !== 0) {
      obj.suffix = base64FromBytes(message.suffix);
    }
    if (message.contains.length !== 0) {
      obj.contains = base64FromBytes(message.contains);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => base64FromBytes(e));
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn.map((e) => base64FromBytes(e));
    }
    if (message.wellKnown?.$case === "ip") {
      obj.ip = message.wellKnown.ip;
    }
    if (message.wellKnown?.$case === "ipv4") {
      obj.ipv4 = message.wellKnown.ipv4;
    }
    if (message.wellKnown?.$case === "ipv6") {
      obj.ipv6 = message.wellKnown.ipv6;
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const EnumRules = {
  fromJSON(object: any): EnumRules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : 0,
      definedOnly: isSet(object.definedOnly)
        ? globalThis.Boolean(object.definedOnly)
        : false,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: EnumRules): unknown {
    const obj: any = {};
    if (message.const !== 0) {
      obj.const = Math.round(message.const);
    }
    if (message.definedOnly === true) {
      obj.definedOnly = message.definedOnly;
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Math.round(e));
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    }
    return obj;
  },
};

export const MessageRules = {
  fromJSON(object: any): MessageRules {
    return {
      skip: isSet(object.skip) ? globalThis.Boolean(object.skip) : false,
      required: isSet(object.required)
        ? globalThis.Boolean(object.required)
        : false,
    };
  },

  toJSON(message: MessageRules): unknown {
    const obj: any = {};
    if (message.skip === true) {
      obj.skip = message.skip;
    }
    if (message.required === true) {
      obj.required = message.required;
    }
    return obj;
  },
};

export const RepeatedRules = {
  fromJSON(object: any): RepeatedRules {
    return {
      minItems: isSet(object.minItems)
        ? globalThis.String(object.minItems)
        : "0",
      maxItems: isSet(object.maxItems)
        ? globalThis.String(object.maxItems)
        : "0",
      unique: isSet(object.unique) ? globalThis.Boolean(object.unique) : false,
      items: isSet(object.items)
        ? FieldRules.fromJSON(object.items)
        : undefined,
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: RepeatedRules): unknown {
    const obj: any = {};
    if (message.minItems !== "0") {
      obj.minItems = message.minItems;
    }
    if (message.maxItems !== "0") {
      obj.maxItems = message.maxItems;
    }
    if (message.unique === true) {
      obj.unique = message.unique;
    }
    if (message.items !== undefined) {
      obj.items = FieldRules.toJSON(message.items);
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const MapRules = {
  fromJSON(object: any): MapRules {
    return {
      minPairs: isSet(object.minPairs)
        ? globalThis.String(object.minPairs)
        : "0",
      maxPairs: isSet(object.maxPairs)
        ? globalThis.String(object.maxPairs)
        : "0",
      noSparse: isSet(object.noSparse)
        ? globalThis.Boolean(object.noSparse)
        : false,
      keys: isSet(object.keys) ? FieldRules.fromJSON(object.keys) : undefined,
      values: isSet(object.values)
        ? FieldRules.fromJSON(object.values)
        : undefined,
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: MapRules): unknown {
    const obj: any = {};
    if (message.minPairs !== "0") {
      obj.minPairs = message.minPairs;
    }
    if (message.maxPairs !== "0") {
      obj.maxPairs = message.maxPairs;
    }
    if (message.noSparse === true) {
      obj.noSparse = message.noSparse;
    }
    if (message.keys !== undefined) {
      obj.keys = FieldRules.toJSON(message.keys);
    }
    if (message.values !== undefined) {
      obj.values = FieldRules.toJSON(message.values);
    }
    if (message.ignoreEmpty === true) {
      obj.ignoreEmpty = message.ignoreEmpty;
    }
    return obj;
  },
};

export const AnyRules = {
  fromJSON(object: any): AnyRules {
    return {
      required: isSet(object.required)
        ? globalThis.Boolean(object.required)
        : false,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.String(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: AnyRules): unknown {
    const obj: any = {};
    if (message.required === true) {
      obj.required = message.required;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn;
    }
    return obj;
  },
};

export const DurationRules = {
  fromJSON(object: any): DurationRules {
    return {
      required: isSet(object.required)
        ? globalThis.Boolean(object.required)
        : false,
      const: isSet(object.const) ? Duration.fromJSON(object.const) : undefined,
      lt: isSet(object.lt) ? Duration.fromJSON(object.lt) : undefined,
      lte: isSet(object.lte) ? Duration.fromJSON(object.lte) : undefined,
      gt: isSet(object.gt) ? Duration.fromJSON(object.gt) : undefined,
      gte: isSet(object.gte) ? Duration.fromJSON(object.gte) : undefined,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => Duration.fromJSON(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => Duration.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DurationRules): unknown {
    const obj: any = {};
    if (message.required === true) {
      obj.required = message.required;
    }
    if (message.const !== undefined) {
      obj.const = Duration.toJSON(message.const);
    }
    if (message.lt !== undefined) {
      obj.lt = Duration.toJSON(message.lt);
    }
    if (message.lte !== undefined) {
      obj.lte = Duration.toJSON(message.lte);
    }
    if (message.gt !== undefined) {
      obj.gt = Duration.toJSON(message.gt);
    }
    if (message.gte !== undefined) {
      obj.gte = Duration.toJSON(message.gte);
    }
    if (message.in?.length) {
      obj.in = message.in.map((e) => Duration.toJSON(e));
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn.map((e) => Duration.toJSON(e));
    }
    return obj;
  },
};

export const TimestampRules = {
  fromJSON(object: any): TimestampRules {
    return {
      required: isSet(object.required)
        ? globalThis.Boolean(object.required)
        : false,
      const: isSet(object.const) ? fromJsonTimestamp(object.const) : undefined,
      lt: isSet(object.lt) ? fromJsonTimestamp(object.lt) : undefined,
      lte: isSet(object.lte) ? fromJsonTimestamp(object.lte) : undefined,
      gt: isSet(object.gt) ? fromJsonTimestamp(object.gt) : undefined,
      gte: isSet(object.gte) ? fromJsonTimestamp(object.gte) : undefined,
      ltNow: isSet(object.ltNow) ? globalThis.Boolean(object.ltNow) : false,
      gtNow: isSet(object.gtNow) ? globalThis.Boolean(object.gtNow) : false,
      within: isSet(object.within)
        ? Duration.fromJSON(object.within)
        : undefined,
    };
  },

  toJSON(message: TimestampRules): unknown {
    const obj: any = {};
    if (message.required === true) {
      obj.required = message.required;
    }
    if (message.const !== undefined) {
      obj.const = message.const.toISOString();
    }
    if (message.lt !== undefined) {
      obj.lt = message.lt.toISOString();
    }
    if (message.lte !== undefined) {
      obj.lte = message.lte.toISOString();
    }
    if (message.gt !== undefined) {
      obj.gt = message.gt.toISOString();
    }
    if (message.gte !== undefined) {
      obj.gte = message.gte.toISOString();
    }
    if (message.ltNow === true) {
      obj.ltNow = message.ltNow;
    }
    if (message.gtNow === true) {
      obj.gtNow = message.gtNow;
    }
    if (message.within !== undefined) {
      obj.within = Duration.toJSON(message.within);
    }
    return obj;
  },
};

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
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (globalThis.Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
