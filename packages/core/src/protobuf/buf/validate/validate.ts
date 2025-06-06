// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: buf/validate/validate.proto

/* eslint-disable */
import type { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "buf.validate";

export enum Ignore {
  IGNORE_UNSPECIFIED = 0,
  IGNORE_IF_UNPOPULATED = 1,
  IGNORE_IF_DEFAULT_VALUE = 2,
  IGNORE_ALWAYS = 3,
}

export enum KnownRegex {
  KNOWN_REGEX_UNSPECIFIED = 0,
  KNOWN_REGEX_HTTP_HEADER_NAME = 1,
  KNOWN_REGEX_HTTP_HEADER_VALUE = 2,
}

export interface Rule {
  id?: string | undefined;
  message?: string | undefined;
  expression?: string | undefined;
}

export interface MessageRules {
  disabled?: boolean | undefined;
  cel: Rule[];
}

export interface OneofRules {
  required?: boolean | undefined;
}

export interface FieldRules {
  cel: Rule[];
  required?: boolean | undefined;
  ignore?: Ignore | undefined;
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

export interface PredefinedRules {
  cel: Rule[];
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
  finite?: boolean | undefined;
  example: number[];
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
  finite?: boolean | undefined;
  example: number[];
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
  example: number[];
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
  example: string[];
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
  example: number[];
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
  example: string[];
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
  example: number[];
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
  example: string[];
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
  example: number[];
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
  example: string[];
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
  example: number[];
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
  example: string[];
}

export interface BoolRules {
  const?: boolean | undefined;
  example: boolean[];
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
    | { $case: "tuuid"; tuuid: boolean }
    | { $case: "ipWithPrefixlen"; ipWithPrefixlen: boolean }
    | { $case: "ipv4WithPrefixlen"; ipv4WithPrefixlen: boolean }
    | { $case: "ipv6WithPrefixlen"; ipv6WithPrefixlen: boolean }
    | { $case: "ipPrefix"; ipPrefix: boolean }
    | { $case: "ipv4Prefix"; ipv4Prefix: boolean }
    | { $case: "ipv6Prefix"; ipv6Prefix: boolean }
    | { $case: "hostAndPort"; hostAndPort: boolean }
    | { $case: "wellKnownRegex"; wellKnownRegex: KnownRegex }
    | undefined;
  strict?: boolean | undefined;
  example: string[];
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
  example: Uint8Array[];
}

export interface EnumRules {
  const?: number | undefined;
  definedOnly?: boolean | undefined;
  in: number[];
  notIn: number[];
  example: number[];
}

export interface RepeatedRules {
  minItems?: string | undefined;
  maxItems?: string | undefined;
  unique?: boolean | undefined;
  items?: FieldRules | undefined;
}

export interface MapRules {
  minPairs?: string | undefined;
  maxPairs?: string | undefined;
  keys?: FieldRules | undefined;
  values?: FieldRules | undefined;
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
  example: Duration[];
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
  example: Date[];
}
