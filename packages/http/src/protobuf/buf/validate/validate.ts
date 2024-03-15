/* eslint-disable */
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Constraint } from "./expression";

export const protobufPackage = "buf.validate";

export enum KnownRegex {
  KNOWN_REGEX_UNSPECIFIED = 0,
  KNOWN_REGEX_HTTP_HEADER_NAME = 1,
  KNOWN_REGEX_HTTP_HEADER_VALUE = 2,
}

export function knownRegexFromJSON(object: any): KnownRegex {
  switch (object) {
    case 0:
    case "KNOWN_REGEX_UNSPECIFIED":
      return KnownRegex.KNOWN_REGEX_UNSPECIFIED;
    case 1:
    case "KNOWN_REGEX_HTTP_HEADER_NAME":
      return KnownRegex.KNOWN_REGEX_HTTP_HEADER_NAME;
    case 2:
    case "KNOWN_REGEX_HTTP_HEADER_VALUE":
      return KnownRegex.KNOWN_REGEX_HTTP_HEADER_VALUE;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum KnownRegex",
      );
  }
}

export function knownRegexToJSON(object: KnownRegex): string {
  switch (object) {
    case KnownRegex.KNOWN_REGEX_UNSPECIFIED:
      return "KNOWN_REGEX_UNSPECIFIED";
    case KnownRegex.KNOWN_REGEX_HTTP_HEADER_NAME:
      return "KNOWN_REGEX_HTTP_HEADER_NAME";
    case KnownRegex.KNOWN_REGEX_HTTP_HEADER_VALUE:
      return "KNOWN_REGEX_HTTP_HEADER_VALUE";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum KnownRegex",
      );
  }
}

export interface OneofConstraints {
  required?: boolean | undefined;
}

export interface FieldConstraints {
  cel: Constraint[];
  skipped: boolean;
  required: boolean;
  ignoreEmpty: boolean;
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
  const?: number | undefined;
  lessThan?:
    | { $case: "lt"; lt: number }
    | { $case: "lte"; lte: number }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: number }
    | { $case: "gte"; gte: number }
    | undefined;
  in: number[];
  notIn: number[];
  finite: boolean;
}

export interface DoubleRules {
  const?: number | undefined;
  lessThan?:
    | { $case: "lt"; lt: number }
    | { $case: "lte"; lte: number }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: number }
    | { $case: "gte"; gte: number }
    | undefined;
  in: number[];
  notIn: number[];
  finite: boolean;
}

export interface Int32Rules {
  const?: number | undefined;
  lessThan?:
    | { $case: "lt"; lt: number }
    | { $case: "lte"; lte: number }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: number }
    | { $case: "gte"; gte: number }
    | undefined;
  in: number[];
  notIn: number[];
}

export interface Int64Rules {
  const?: string | undefined;
  lessThan?:
    | { $case: "lt"; lt: string }
    | { $case: "lte"; lte: string }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: string }
    | { $case: "gte"; gte: string }
    | undefined;
  in: string[];
  notIn: string[];
}

export interface UInt32Rules {
  const?: number | undefined;
  lessThan?:
    | { $case: "lt"; lt: number }
    | { $case: "lte"; lte: number }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: number }
    | { $case: "gte"; gte: number }
    | undefined;
  in: number[];
  notIn: number[];
}

export interface UInt64Rules {
  const?: string | undefined;
  lessThan?:
    | { $case: "lt"; lt: string }
    | { $case: "lte"; lte: string }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: string }
    | { $case: "gte"; gte: string }
    | undefined;
  in: string[];
  notIn: string[];
}

export interface SInt32Rules {
  const?: number | undefined;
  lessThan?:
    | { $case: "lt"; lt: number }
    | { $case: "lte"; lte: number }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: number }
    | { $case: "gte"; gte: number }
    | undefined;
  in: number[];
  notIn: number[];
}

export interface SInt64Rules {
  const?: string | undefined;
  lessThan?:
    | { $case: "lt"; lt: string }
    | { $case: "lte"; lte: string }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: string }
    | { $case: "gte"; gte: string }
    | undefined;
  in: string[];
  notIn: string[];
}

export interface Fixed32Rules {
  const?: number | undefined;
  lessThan?:
    | { $case: "lt"; lt: number }
    | { $case: "lte"; lte: number }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: number }
    | { $case: "gte"; gte: number }
    | undefined;
  in: number[];
  notIn: number[];
}

export interface Fixed64Rules {
  const?: string | undefined;
  lessThan?:
    | { $case: "lt"; lt: string }
    | { $case: "lte"; lte: string }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: string }
    | { $case: "gte"; gte: string }
    | undefined;
  in: string[];
  notIn: string[];
}

export interface SFixed32Rules {
  const?: number | undefined;
  lessThan?:
    | { $case: "lt"; lt: number }
    | { $case: "lte"; lte: number }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: number }
    | { $case: "gte"; gte: number }
    | undefined;
  in: number[];
  notIn: number[];
}

export interface SFixed64Rules {
  const?: string | undefined;
  lessThan?:
    | { $case: "lt"; lt: string }
    | { $case: "lte"; lte: string }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: string }
    | { $case: "gte"; gte: string }
    | undefined;
  in: string[];
  notIn: string[];
}

export interface BoolRules {
  const?: boolean | undefined;
}

export interface StringRules {
  const?: string | undefined;
  len?: string | undefined;
  minLen?: string | undefined;
  maxLen?: string | undefined;
  lenBytes?: string | undefined;
  minBytes?: string | undefined;
  maxBytes?: string | undefined;
  pattern?: string | undefined;
  prefix?: string | undefined;
  suffix?: string | undefined;
  contains?: string | undefined;
  notContains?: string | undefined;
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
    | { $case: "ipWithPrefixlen"; ipWithPrefixlen: boolean }
    | { $case: "ipv4WithPrefixlen"; ipv4WithPrefixlen: boolean }
    | { $case: "ipv6WithPrefixlen"; ipv6WithPrefixlen: boolean }
    | { $case: "ipPrefix"; ipPrefix: boolean }
    | { $case: "ipv4Prefix"; ipv4Prefix: boolean }
    | { $case: "ipv6Prefix"; ipv6Prefix: boolean }
    | { $case: "wellKnownRegex"; wellKnownRegex: KnownRegex }
    | undefined;
  strict?: boolean | undefined;
}

export interface BytesRules {
  const?: Uint8Array | undefined;
  len?: string | undefined;
  minLen?: string | undefined;
  maxLen?: string | undefined;
  pattern?: string | undefined;
  prefix?: Uint8Array | undefined;
  suffix?: Uint8Array | undefined;
  contains?: Uint8Array | undefined;
  in: Uint8Array[];
  notIn: Uint8Array[];
  wellKnown?:
    | { $case: "ip"; ip: boolean }
    | { $case: "ipv4"; ipv4: boolean }
    | { $case: "ipv6"; ipv6: boolean }
    | undefined;
}

export interface EnumRules {
  const?: number | undefined;
  definedOnly?: boolean | undefined;
  in: number[];
  notIn: number[];
}

export interface RepeatedRules {
  minItems?: string | undefined;
  maxItems?: string | undefined;
  unique?: boolean | undefined;
  items?: FieldConstraints | undefined;
}

export interface MapRules {
  minPairs?: string | undefined;
  maxPairs?: string | undefined;
  keys?: FieldConstraints | undefined;
  values?: FieldConstraints | undefined;
}

export interface AnyRules {
  in: string[];
  notIn: string[];
}

export interface DurationRules {
  const?: Duration | undefined;
  lessThan?:
    | { $case: "lt"; lt: Duration }
    | { $case: "lte"; lte: Duration }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: Duration }
    | { $case: "gte"; gte: Duration }
    | undefined;
  in: Duration[];
  notIn: Duration[];
}

export interface TimestampRules {
  const?: Date | undefined;
  lessThan?:
    | { $case: "lt"; lt: Date }
    | { $case: "lte"; lte: Date }
    | { $case: "ltNow"; ltNow: boolean }
    | undefined;
  greaterThan?:
    | { $case: "gt"; gt: Date }
    | { $case: "gte"; gte: Date }
    | { $case: "gtNow"; gtNow: boolean }
    | undefined;
  within?: Duration | undefined;
}

export const OneofConstraints = {
  fromJSON(object: any): OneofConstraints {
    return {
      required: isSet(object.required)
        ? globalThis.Boolean(object.required)
        : undefined,
    };
  },

  toJSON(message: OneofConstraints): unknown {
    const obj: any = {};
    if (message.required !== undefined) {
      obj.required = message.required;
    }
    return obj;
  },
};

export const FieldConstraints = {
  fromJSON(object: any): FieldConstraints {
    return {
      cel: globalThis.Array.isArray(object?.cel)
        ? object.cel.map((e: any) => Constraint.fromJSON(e))
        : [],
      skipped: isSet(object.skipped)
        ? globalThis.Boolean(object.skipped)
        : false,
      required: isSet(object.required)
        ? globalThis.Boolean(object.required)
        : false,
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? globalThis.Boolean(object.ignoreEmpty)
        : false,
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

  toJSON(message: FieldConstraints): unknown {
    const obj: any = {};
    if (message.cel?.length) {
      obj.cel = message.cel.map((e) => Constraint.toJSON(e));
    }
    if (message.skipped !== false) {
      obj.skipped = message.skipped;
    }
    if (message.required !== false) {
      obj.required = message.required;
    }
    if (message.ignoreEmpty !== false) {
      obj.ignoreEmpty = message.ignoreEmpty;
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
      const: isSet(object.const) ? globalThis.Number(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: globalThis.Number(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: globalThis.Number(object.lte) }
          : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: globalThis.Number(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: globalThis.Number(object.gte) }
          : undefined,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
      finite: isSet(object.finite) ? globalThis.Boolean(object.finite) : false,
    };
  },

  toJSON(message: FloatRules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = message.const;
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = message.lessThan.lt;
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = message.lessThan.lte;
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = message.greaterThan.gt;
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = message.greaterThan.gte;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn;
    }
    if (message.finite !== false) {
      obj.finite = message.finite;
    }
    return obj;
  },
};

export const DoubleRules = {
  fromJSON(object: any): DoubleRules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: globalThis.Number(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: globalThis.Number(object.lte) }
          : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: globalThis.Number(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: globalThis.Number(object.gte) }
          : undefined,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
      finite: isSet(object.finite) ? globalThis.Boolean(object.finite) : false,
    };
  },

  toJSON(message: DoubleRules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = message.const;
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = message.lessThan.lt;
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = message.lessThan.lte;
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = message.greaterThan.gt;
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = message.greaterThan.gte;
    }
    if (message.in?.length) {
      obj.in = message.in;
    }
    if (message.notIn?.length) {
      obj.notIn = message.notIn;
    }
    if (message.finite !== false) {
      obj.finite = message.finite;
    }
    return obj;
  },
};

export const Int32Rules = {
  fromJSON(object: any): Int32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: globalThis.Number(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: globalThis.Number(object.lte) }
          : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: globalThis.Number(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: globalThis.Number(object.gte) }
          : undefined,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: Int32Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = Math.round(message.const);
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = Math.round(message.lessThan.lt);
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = Math.round(message.lessThan.lte);
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = Math.round(message.greaterThan.gt);
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = Math.round(message.greaterThan.gte);
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

export const Int64Rules = {
  fromJSON(object: any): Int64Rules {
    return {
      const: isSet(object.const) ? globalThis.String(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: globalThis.String(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: globalThis.String(object.lte) }
          : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: globalThis.String(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: globalThis.String(object.gte) }
          : undefined,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.String(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Int64Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = message.const;
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = message.lessThan.lt;
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = message.lessThan.lte;
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = message.greaterThan.gt;
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = message.greaterThan.gte;
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

export const UInt32Rules = {
  fromJSON(object: any): UInt32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: globalThis.Number(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: globalThis.Number(object.lte) }
          : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: globalThis.Number(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: globalThis.Number(object.gte) }
          : undefined,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: UInt32Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = Math.round(message.const);
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = Math.round(message.lessThan.lt);
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = Math.round(message.lessThan.lte);
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = Math.round(message.greaterThan.gt);
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = Math.round(message.greaterThan.gte);
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

export const UInt64Rules = {
  fromJSON(object: any): UInt64Rules {
    return {
      const: isSet(object.const) ? globalThis.String(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: globalThis.String(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: globalThis.String(object.lte) }
          : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: globalThis.String(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: globalThis.String(object.gte) }
          : undefined,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.String(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: UInt64Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = message.const;
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = message.lessThan.lt;
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = message.lessThan.lte;
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = message.greaterThan.gt;
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = message.greaterThan.gte;
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

export const SInt32Rules = {
  fromJSON(object: any): SInt32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: globalThis.Number(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: globalThis.Number(object.lte) }
          : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: globalThis.Number(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: globalThis.Number(object.gte) }
          : undefined,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: SInt32Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = Math.round(message.const);
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = Math.round(message.lessThan.lt);
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = Math.round(message.lessThan.lte);
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = Math.round(message.greaterThan.gt);
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = Math.round(message.greaterThan.gte);
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

export const SInt64Rules = {
  fromJSON(object: any): SInt64Rules {
    return {
      const: isSet(object.const) ? globalThis.String(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: globalThis.String(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: globalThis.String(object.lte) }
          : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: globalThis.String(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: globalThis.String(object.gte) }
          : undefined,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.String(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: SInt64Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = message.const;
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = message.lessThan.lt;
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = message.lessThan.lte;
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = message.greaterThan.gt;
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = message.greaterThan.gte;
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

export const Fixed32Rules = {
  fromJSON(object: any): Fixed32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: globalThis.Number(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: globalThis.Number(object.lte) }
          : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: globalThis.Number(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: globalThis.Number(object.gte) }
          : undefined,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: Fixed32Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = Math.round(message.const);
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = Math.round(message.lessThan.lt);
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = Math.round(message.lessThan.lte);
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = Math.round(message.greaterThan.gt);
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = Math.round(message.greaterThan.gte);
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

export const Fixed64Rules = {
  fromJSON(object: any): Fixed64Rules {
    return {
      const: isSet(object.const) ? globalThis.String(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: globalThis.String(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: globalThis.String(object.lte) }
          : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: globalThis.String(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: globalThis.String(object.gte) }
          : undefined,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.String(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Fixed64Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = message.const;
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = message.lessThan.lt;
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = message.lessThan.lte;
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = message.greaterThan.gt;
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = message.greaterThan.gte;
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

export const SFixed32Rules = {
  fromJSON(object: any): SFixed32Rules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: globalThis.Number(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: globalThis.Number(object.lte) }
          : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: globalThis.Number(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: globalThis.Number(object.gte) }
          : undefined,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.Number(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: SFixed32Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = Math.round(message.const);
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = Math.round(message.lessThan.lt);
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = Math.round(message.lessThan.lte);
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = Math.round(message.greaterThan.gt);
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = Math.round(message.greaterThan.gte);
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

export const SFixed64Rules = {
  fromJSON(object: any): SFixed64Rules {
    return {
      const: isSet(object.const) ? globalThis.String(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: globalThis.String(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: globalThis.String(object.lte) }
          : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: globalThis.String(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: globalThis.String(object.gte) }
          : undefined,
      in: globalThis.Array.isArray(object?.in)
        ? object.in.map((e: any) => globalThis.String(e))
        : [],
      notIn: globalThis.Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: SFixed64Rules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = message.const;
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = message.lessThan.lt;
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = message.lessThan.lte;
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = message.greaterThan.gt;
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = message.greaterThan.gte;
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

export const BoolRules = {
  fromJSON(object: any): BoolRules {
    return {
      const: isSet(object.const) ? globalThis.Boolean(object.const) : undefined,
    };
  },

  toJSON(message: BoolRules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = message.const;
    }
    return obj;
  },
};

export const StringRules = {
  fromJSON(object: any): StringRules {
    return {
      const: isSet(object.const) ? globalThis.String(object.const) : undefined,
      len: isSet(object.len) ? globalThis.String(object.len) : undefined,
      minLen: isSet(object.minLen)
        ? globalThis.String(object.minLen)
        : undefined,
      maxLen: isSet(object.maxLen)
        ? globalThis.String(object.maxLen)
        : undefined,
      lenBytes: isSet(object.lenBytes)
        ? globalThis.String(object.lenBytes)
        : undefined,
      minBytes: isSet(object.minBytes)
        ? globalThis.String(object.minBytes)
        : undefined,
      maxBytes: isSet(object.maxBytes)
        ? globalThis.String(object.maxBytes)
        : undefined,
      pattern: isSet(object.pattern)
        ? globalThis.String(object.pattern)
        : undefined,
      prefix: isSet(object.prefix)
        ? globalThis.String(object.prefix)
        : undefined,
      suffix: isSet(object.suffix)
        ? globalThis.String(object.suffix)
        : undefined,
      contains: isSet(object.contains)
        ? globalThis.String(object.contains)
        : undefined,
      notContains: isSet(object.notContains)
        ? globalThis.String(object.notContains)
        : undefined,
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
                        : isSet(object.ipWithPrefixlen)
                          ? {
                              $case: "ipWithPrefixlen",
                              ipWithPrefixlen: globalThis.Boolean(
                                object.ipWithPrefixlen,
                              ),
                            }
                          : isSet(object.ipv4WithPrefixlen)
                            ? {
                                $case: "ipv4WithPrefixlen",
                                ipv4WithPrefixlen: globalThis.Boolean(
                                  object.ipv4WithPrefixlen,
                                ),
                              }
                            : isSet(object.ipv6WithPrefixlen)
                              ? {
                                  $case: "ipv6WithPrefixlen",
                                  ipv6WithPrefixlen: globalThis.Boolean(
                                    object.ipv6WithPrefixlen,
                                  ),
                                }
                              : isSet(object.ipPrefix)
                                ? {
                                    $case: "ipPrefix",
                                    ipPrefix: globalThis.Boolean(
                                      object.ipPrefix,
                                    ),
                                  }
                                : isSet(object.ipv4Prefix)
                                  ? {
                                      $case: "ipv4Prefix",
                                      ipv4Prefix: globalThis.Boolean(
                                        object.ipv4Prefix,
                                      ),
                                    }
                                  : isSet(object.ipv6Prefix)
                                    ? {
                                        $case: "ipv6Prefix",
                                        ipv6Prefix: globalThis.Boolean(
                                          object.ipv6Prefix,
                                        ),
                                      }
                                    : isSet(object.wellKnownRegex)
                                      ? {
                                          $case: "wellKnownRegex",
                                          wellKnownRegex: knownRegexFromJSON(
                                            object.wellKnownRegex,
                                          ),
                                        }
                                      : undefined,
      strict: isSet(object.strict)
        ? globalThis.Boolean(object.strict)
        : undefined,
    };
  },

  toJSON(message: StringRules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = message.const;
    }
    if (message.len !== undefined) {
      obj.len = message.len;
    }
    if (message.minLen !== undefined) {
      obj.minLen = message.minLen;
    }
    if (message.maxLen !== undefined) {
      obj.maxLen = message.maxLen;
    }
    if (message.lenBytes !== undefined) {
      obj.lenBytes = message.lenBytes;
    }
    if (message.minBytes !== undefined) {
      obj.minBytes = message.minBytes;
    }
    if (message.maxBytes !== undefined) {
      obj.maxBytes = message.maxBytes;
    }
    if (message.pattern !== undefined) {
      obj.pattern = message.pattern;
    }
    if (message.prefix !== undefined) {
      obj.prefix = message.prefix;
    }
    if (message.suffix !== undefined) {
      obj.suffix = message.suffix;
    }
    if (message.contains !== undefined) {
      obj.contains = message.contains;
    }
    if (message.notContains !== undefined) {
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
    if (message.wellKnown?.$case === "ipWithPrefixlen") {
      obj.ipWithPrefixlen = message.wellKnown.ipWithPrefixlen;
    }
    if (message.wellKnown?.$case === "ipv4WithPrefixlen") {
      obj.ipv4WithPrefixlen = message.wellKnown.ipv4WithPrefixlen;
    }
    if (message.wellKnown?.$case === "ipv6WithPrefixlen") {
      obj.ipv6WithPrefixlen = message.wellKnown.ipv6WithPrefixlen;
    }
    if (message.wellKnown?.$case === "ipPrefix") {
      obj.ipPrefix = message.wellKnown.ipPrefix;
    }
    if (message.wellKnown?.$case === "ipv4Prefix") {
      obj.ipv4Prefix = message.wellKnown.ipv4Prefix;
    }
    if (message.wellKnown?.$case === "ipv6Prefix") {
      obj.ipv6Prefix = message.wellKnown.ipv6Prefix;
    }
    if (message.wellKnown?.$case === "wellKnownRegex") {
      obj.wellKnownRegex = knownRegexToJSON(message.wellKnown.wellKnownRegex);
    }
    if (message.strict !== undefined) {
      obj.strict = message.strict;
    }
    return obj;
  },
};

export const BytesRules = {
  fromJSON(object: any): BytesRules {
    return {
      const: isSet(object.const) ? bytesFromBase64(object.const) : undefined,
      len: isSet(object.len) ? globalThis.String(object.len) : undefined,
      minLen: isSet(object.minLen)
        ? globalThis.String(object.minLen)
        : undefined,
      maxLen: isSet(object.maxLen)
        ? globalThis.String(object.maxLen)
        : undefined,
      pattern: isSet(object.pattern)
        ? globalThis.String(object.pattern)
        : undefined,
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : undefined,
      suffix: isSet(object.suffix) ? bytesFromBase64(object.suffix) : undefined,
      contains: isSet(object.contains)
        ? bytesFromBase64(object.contains)
        : undefined,
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
    };
  },

  toJSON(message: BytesRules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = base64FromBytes(message.const);
    }
    if (message.len !== undefined) {
      obj.len = message.len;
    }
    if (message.minLen !== undefined) {
      obj.minLen = message.minLen;
    }
    if (message.maxLen !== undefined) {
      obj.maxLen = message.maxLen;
    }
    if (message.pattern !== undefined) {
      obj.pattern = message.pattern;
    }
    if (message.prefix !== undefined) {
      obj.prefix = base64FromBytes(message.prefix);
    }
    if (message.suffix !== undefined) {
      obj.suffix = base64FromBytes(message.suffix);
    }
    if (message.contains !== undefined) {
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
    return obj;
  },
};

export const EnumRules = {
  fromJSON(object: any): EnumRules {
    return {
      const: isSet(object.const) ? globalThis.Number(object.const) : undefined,
      definedOnly: isSet(object.definedOnly)
        ? globalThis.Boolean(object.definedOnly)
        : undefined,
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
    if (message.const !== undefined) {
      obj.const = Math.round(message.const);
    }
    if (message.definedOnly !== undefined) {
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

export const RepeatedRules = {
  fromJSON(object: any): RepeatedRules {
    return {
      minItems: isSet(object.minItems)
        ? globalThis.String(object.minItems)
        : undefined,
      maxItems: isSet(object.maxItems)
        ? globalThis.String(object.maxItems)
        : undefined,
      unique: isSet(object.unique)
        ? globalThis.Boolean(object.unique)
        : undefined,
      items: isSet(object.items)
        ? FieldConstraints.fromJSON(object.items)
        : undefined,
    };
  },

  toJSON(message: RepeatedRules): unknown {
    const obj: any = {};
    if (message.minItems !== undefined) {
      obj.minItems = message.minItems;
    }
    if (message.maxItems !== undefined) {
      obj.maxItems = message.maxItems;
    }
    if (message.unique !== undefined) {
      obj.unique = message.unique;
    }
    if (message.items !== undefined) {
      obj.items = FieldConstraints.toJSON(message.items);
    }
    return obj;
  },
};

export const MapRules = {
  fromJSON(object: any): MapRules {
    return {
      minPairs: isSet(object.minPairs)
        ? globalThis.String(object.minPairs)
        : undefined,
      maxPairs: isSet(object.maxPairs)
        ? globalThis.String(object.maxPairs)
        : undefined,
      keys: isSet(object.keys)
        ? FieldConstraints.fromJSON(object.keys)
        : undefined,
      values: isSet(object.values)
        ? FieldConstraints.fromJSON(object.values)
        : undefined,
    };
  },

  toJSON(message: MapRules): unknown {
    const obj: any = {};
    if (message.minPairs !== undefined) {
      obj.minPairs = message.minPairs;
    }
    if (message.maxPairs !== undefined) {
      obj.maxPairs = message.maxPairs;
    }
    if (message.keys !== undefined) {
      obj.keys = FieldConstraints.toJSON(message.keys);
    }
    if (message.values !== undefined) {
      obj.values = FieldConstraints.toJSON(message.values);
    }
    return obj;
  },
};

export const AnyRules = {
  fromJSON(object: any): AnyRules {
    return {
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
      const: isSet(object.const) ? Duration.fromJSON(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: Duration.fromJSON(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: Duration.fromJSON(object.lte) }
          : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: Duration.fromJSON(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: Duration.fromJSON(object.gte) }
          : undefined,
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
    if (message.const !== undefined) {
      obj.const = Duration.toJSON(message.const);
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = Duration.toJSON(message.lessThan.lt);
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = Duration.toJSON(message.lessThan.lte);
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = Duration.toJSON(message.greaterThan.gt);
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = Duration.toJSON(message.greaterThan.gte);
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
      const: isSet(object.const) ? fromJsonTimestamp(object.const) : undefined,
      lessThan: isSet(object.lt)
        ? { $case: "lt", lt: fromJsonTimestamp(object.lt) }
        : isSet(object.lte)
          ? { $case: "lte", lte: fromJsonTimestamp(object.lte) }
          : isSet(object.ltNow)
            ? { $case: "ltNow", ltNow: globalThis.Boolean(object.ltNow) }
            : undefined,
      greaterThan: isSet(object.gt)
        ? { $case: "gt", gt: fromJsonTimestamp(object.gt) }
        : isSet(object.gte)
          ? { $case: "gte", gte: fromJsonTimestamp(object.gte) }
          : isSet(object.gtNow)
            ? { $case: "gtNow", gtNow: globalThis.Boolean(object.gtNow) }
            : undefined,
      within: isSet(object.within)
        ? Duration.fromJSON(object.within)
        : undefined,
    };
  },

  toJSON(message: TimestampRules): unknown {
    const obj: any = {};
    if (message.const !== undefined) {
      obj.const = message.const.toISOString();
    }
    if (message.lessThan?.$case === "lt") {
      obj.lt = message.lessThan.lt.toISOString();
    }
    if (message.lessThan?.$case === "lte") {
      obj.lte = message.lessThan.lte.toISOString();
    }
    if (message.lessThan?.$case === "ltNow") {
      obj.ltNow = message.lessThan.ltNow;
    }
    if (message.greaterThan?.$case === "gt") {
      obj.gt = message.greaterThan.gt.toISOString();
    }
    if (message.greaterThan?.$case === "gte") {
      obj.gte = message.greaterThan.gte.toISOString();
    }
    if (message.greaterThan?.$case === "gtNow") {
      obj.gtNow = message.greaterThan.gtNow;
    }
    if (message.within !== undefined) {
      obj.within = Duration.toJSON(message.within);
    }
    return obj;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
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
  if ((globalThis as any).Buffer) {
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
