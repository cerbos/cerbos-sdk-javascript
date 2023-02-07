/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "validate";

/** WellKnownRegex contain some well-known patterns. */
export enum KnownRegex {
  UNKNOWN = 0,
  /** HTTP_HEADER_NAME - HTTP header name as defined by RFC 7230. */
  HTTP_HEADER_NAME = 1,
  /** HTTP_HEADER_VALUE - HTTP header value as defined by RFC 7230. */
  HTTP_HEADER_VALUE = 2,
}

/**
 * FieldRules encapsulates the rules for each type of field. Depending on the
 * field, the correct set should be used to ensure proper validations.
 */
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
    | { $case: "timestamp"; timestamp: TimestampRules };
}

/** FloatRules describes the constraints applied to `float` values */
export interface FloatRules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** DoubleRules describes the constraints applied to `double` values */
export interface DoubleRules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** Int32Rules describes the constraints applied to `int32` values */
export interface Int32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** Int64Rules describes the constraints applied to `int64` values */
export interface Int64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: string;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: string;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: string;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: string[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** UInt32Rules describes the constraints applied to `uint32` values */
export interface UInt32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** UInt64Rules describes the constraints applied to `uint64` values */
export interface UInt64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: string;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: string;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: string;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: string[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** SInt32Rules describes the constraints applied to `sint32` values */
export interface SInt32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** SInt64Rules describes the constraints applied to `sint64` values */
export interface SInt64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: string;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: string;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: string;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: string[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** Fixed32Rules describes the constraints applied to `fixed32` values */
export interface Fixed32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** Fixed64Rules describes the constraints applied to `fixed64` values */
export interface Fixed64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: string;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: string;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: string;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: string[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** SFixed32Rules describes the constraints applied to `sfixed32` values */
export interface SFixed32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** SFixed64Rules describes the constraints applied to `sfixed64` values */
export interface SFixed64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: string;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: string;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: string;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: string[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** BoolRules describes the constraints applied to `bool` values */
export interface BoolRules {
  /** Const specifies that this field must be exactly the specified value */
  const: boolean;
}

/** StringRules describe the constraints applied to `string` values */
export interface StringRules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Len specifies that this field must be the specified number of
   * characters (Unicode code points). Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  len: string;
  /**
   * MinLen specifies that this field must be the specified number of
   * characters (Unicode code points) at a minimum. Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  minLen: string;
  /**
   * MaxLen specifies that this field must be the specified number of
   * characters (Unicode code points) at a maximum. Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  maxLen: string;
  /** LenBytes specifies that this field must be the specified number of bytes */
  lenBytes: string;
  /**
   * MinBytes specifies that this field must be the specified number of bytes
   * at a minimum
   */
  minBytes: string;
  /**
   * MaxBytes specifies that this field must be the specified number of bytes
   * at a maximum
   */
  maxBytes: string;
  /**
   * Pattern specifes that this field must match against the specified
   * regular expression (RE2 syntax). The included expression should elide
   * any delimiters.
   */
  pattern: string;
  /**
   * Prefix specifies that this field must have the specified substring at
   * the beginning of the string.
   */
  prefix: string;
  /**
   * Suffix specifies that this field must have the specified substring at
   * the end of the string.
   */
  suffix: string;
  /**
   * Contains specifies that this field must have the specified substring
   * anywhere in the string.
   */
  contains: string;
  /**
   * NotContains specifies that this field cannot have the specified substring
   * anywhere in the string.
   */
  notContains: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
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
    | { $case: "wellKnownRegex"; wellKnownRegex: KnownRegex };
  /**
   * This applies to regexes HTTP_HEADER_NAME and HTTP_HEADER_VALUE to enable
   * strict header validation.
   * By default, this is true, and HTTP header validations are RFC-compliant.
   * Setting to false will enable a looser validations that only disallows
   * \r\n\0 characters, which can be used to bypass header matching rules.
   */
  strict: boolean;
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** BytesRules describe the constraints applied to `bytes` values */
export interface BytesRules {
  /** Const specifies that this field must be exactly the specified value */
  const: Uint8Array;
  /** Len specifies that this field must be the specified number of bytes */
  len: string;
  /**
   * MinLen specifies that this field must be the specified number of bytes
   * at a minimum
   */
  minLen: string;
  /**
   * MaxLen specifies that this field must be the specified number of bytes
   * at a maximum
   */
  maxLen: string;
  /**
   * Pattern specifes that this field must match against the specified
   * regular expression (RE2 syntax). The included expression should elide
   * any delimiters.
   */
  pattern: string;
  /**
   * Prefix specifies that this field must have the specified bytes at the
   * beginning of the string.
   */
  prefix: Uint8Array;
  /**
   * Suffix specifies that this field must have the specified bytes at the
   * end of the string.
   */
  suffix: Uint8Array;
  /**
   * Contains specifies that this field must have the specified bytes
   * anywhere in the string.
   */
  contains: Uint8Array;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Uint8Array[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: Uint8Array[];
  wellKnown?:
    | { $case: "ip"; ip: boolean }
    | { $case: "ipv4"; ipv4: boolean }
    | { $case: "ipv6"; ipv6: boolean };
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** EnumRules describe the constraints applied to enum values */
export interface EnumRules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * DefinedOnly specifies that this field must be only one of the defined
   * values for this enum, failing on any undefined value.
   */
  definedOnly: boolean;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/**
 * MessageRules describe the constraints applied to embedded message values.
 * For message-type fields, validation is performed recursively.
 */
export interface MessageRules {
  /**
   * Skip specifies that the validation rules of this field should not be
   * evaluated
   */
  skip: boolean;
  /** Required specifies that this field must be set */
  required: boolean;
}

/** RepeatedRules describe the constraints applied to `repeated` values */
export interface RepeatedRules {
  /**
   * MinItems specifies that this field must have the specified number of
   * items at a minimum
   */
  minItems: string;
  /**
   * MaxItems specifies that this field must have the specified number of
   * items at a maximum
   */
  maxItems: string;
  /**
   * Unique specifies that all elements in this field must be unique. This
   * contraint is only applicable to scalar and enum types (messages are not
   * supported).
   */
  unique: boolean;
  /**
   * Items specifies the contraints to be applied to each item in the field.
   * Repeated message fields will still execute validation against each item
   * unless skip is specified here.
   */
  items:
    | FieldRules
    | undefined;
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** MapRules describe the constraints applied to `map` values */
export interface MapRules {
  /**
   * MinPairs specifies that this field must have the specified number of
   * KVs at a minimum
   */
  minPairs: string;
  /**
   * MaxPairs specifies that this field must have the specified number of
   * KVs at a maximum
   */
  maxPairs: string;
  /**
   * NoSparse specifies values in this field cannot be unset. This only
   * applies to map's with message value types.
   */
  noSparse: boolean;
  /** Keys specifies the constraints to be applied to each key in the field. */
  keys:
    | FieldRules
    | undefined;
  /**
   * Values specifies the constraints to be applied to the value of each key
   * in the field. Message values will still have their validations evaluated
   * unless skip is specified here.
   */
  values:
    | FieldRules
    | undefined;
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/**
 * AnyRules describe constraints applied exclusively to the
 * `google.protobuf.Any` well-known type
 */
export interface AnyRules {
  /** Required specifies that this field must be set */
  required: boolean;
  /**
   * In specifies that this field's `type_url` must be equal to one of the
   * specified values.
   */
  in: string[];
  /**
   * NotIn specifies that this field's `type_url` must not be equal to any of
   * the specified values.
   */
  notIn: string[];
}

/**
 * DurationRules describe the constraints applied exclusively to the
 * `google.protobuf.Duration` well-known type
 */
export interface DurationRules {
  /** Required specifies that this field must be set */
  required: boolean;
  /** Const specifies that this field must be exactly the specified value */
  const:
    | Duration
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt:
    | Duration
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * inclusive
   */
  lte:
    | Duration
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive
   */
  gt:
    | Duration
    | undefined;
  /**
   * Gte specifies that this field must be greater than the specified value,
   * inclusive
   */
  gte:
    | Duration
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Duration[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: Duration[];
}

/**
 * TimestampRules describe the constraints applied exclusively to the
 * `google.protobuf.Timestamp` well-known type
 */
export interface TimestampRules {
  /** Required specifies that this field must be set */
  required: boolean;
  /** Const specifies that this field must be exactly the specified value */
  const:
    | Date
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt:
    | Date
    | undefined;
  /**
   * Lte specifies that this field must be less than the specified value,
   * inclusive
   */
  lte:
    | Date
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive
   */
  gt:
    | Date
    | undefined;
  /**
   * Gte specifies that this field must be greater than the specified value,
   * inclusive
   */
  gte:
    | Date
    | undefined;
  /**
   * LtNow specifies that this must be less than the current time. LtNow
   * can only be used with the Within rule.
   */
  ltNow: boolean;
  /**
   * GtNow specifies that this must be greater than the current time. GtNow
   * can only be used with the Within rule.
   */
  gtNow: boolean;
  /**
   * Within specifies that this field must be within this duration of the
   * current time. This constraint can be used alone or with the LtNow and
   * GtNow rules.
   */
  within: Duration | undefined;
}

function createBaseFieldRules(): FieldRules {
  return { message: undefined, type: undefined };
}

export const FieldRules = {
  encode(message: FieldRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      MessageRules.encode(message.message, writer.uint32(138).fork()).ldelim();
    }
    switch (message.type?.$case) {
      case "float":
        FloatRules.encode(message.type.float, writer.uint32(10).fork()).ldelim();
        break;
      case "double":
        DoubleRules.encode(message.type.double, writer.uint32(18).fork()).ldelim();
        break;
      case "int32":
        Int32Rules.encode(message.type.int32, writer.uint32(26).fork()).ldelim();
        break;
      case "int64":
        Int64Rules.encode(message.type.int64, writer.uint32(34).fork()).ldelim();
        break;
      case "uint32":
        UInt32Rules.encode(message.type.uint32, writer.uint32(42).fork()).ldelim();
        break;
      case "uint64":
        UInt64Rules.encode(message.type.uint64, writer.uint32(50).fork()).ldelim();
        break;
      case "sint32":
        SInt32Rules.encode(message.type.sint32, writer.uint32(58).fork()).ldelim();
        break;
      case "sint64":
        SInt64Rules.encode(message.type.sint64, writer.uint32(66).fork()).ldelim();
        break;
      case "fixed32":
        Fixed32Rules.encode(message.type.fixed32, writer.uint32(74).fork()).ldelim();
        break;
      case "fixed64":
        Fixed64Rules.encode(message.type.fixed64, writer.uint32(82).fork()).ldelim();
        break;
      case "sfixed32":
        SFixed32Rules.encode(message.type.sfixed32, writer.uint32(90).fork()).ldelim();
        break;
      case "sfixed64":
        SFixed64Rules.encode(message.type.sfixed64, writer.uint32(98).fork()).ldelim();
        break;
      case "bool":
        BoolRules.encode(message.type.bool, writer.uint32(106).fork()).ldelim();
        break;
      case "string":
        StringRules.encode(message.type.string, writer.uint32(114).fork()).ldelim();
        break;
      case "bytes":
        BytesRules.encode(message.type.bytes, writer.uint32(122).fork()).ldelim();
        break;
      case "enum":
        EnumRules.encode(message.type.enum, writer.uint32(130).fork()).ldelim();
        break;
      case "repeated":
        RepeatedRules.encode(message.type.repeated, writer.uint32(146).fork()).ldelim();
        break;
      case "map":
        MapRules.encode(message.type.map, writer.uint32(154).fork()).ldelim();
        break;
      case "any":
        AnyRules.encode(message.type.any, writer.uint32(162).fork()).ldelim();
        break;
      case "duration":
        DurationRules.encode(message.type.duration, writer.uint32(170).fork()).ldelim();
        break;
      case "timestamp":
        TimestampRules.encode(message.type.timestamp, writer.uint32(178).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 17:
          message.message = MessageRules.decode(reader, reader.uint32());
          break;
        case 1:
          message.type = { $case: "float", float: FloatRules.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.type = { $case: "double", double: DoubleRules.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.type = { $case: "int32", int32: Int32Rules.decode(reader, reader.uint32()) };
          break;
        case 4:
          message.type = { $case: "int64", int64: Int64Rules.decode(reader, reader.uint32()) };
          break;
        case 5:
          message.type = { $case: "uint32", uint32: UInt32Rules.decode(reader, reader.uint32()) };
          break;
        case 6:
          message.type = { $case: "uint64", uint64: UInt64Rules.decode(reader, reader.uint32()) };
          break;
        case 7:
          message.type = { $case: "sint32", sint32: SInt32Rules.decode(reader, reader.uint32()) };
          break;
        case 8:
          message.type = { $case: "sint64", sint64: SInt64Rules.decode(reader, reader.uint32()) };
          break;
        case 9:
          message.type = { $case: "fixed32", fixed32: Fixed32Rules.decode(reader, reader.uint32()) };
          break;
        case 10:
          message.type = { $case: "fixed64", fixed64: Fixed64Rules.decode(reader, reader.uint32()) };
          break;
        case 11:
          message.type = { $case: "sfixed32", sfixed32: SFixed32Rules.decode(reader, reader.uint32()) };
          break;
        case 12:
          message.type = { $case: "sfixed64", sfixed64: SFixed64Rules.decode(reader, reader.uint32()) };
          break;
        case 13:
          message.type = { $case: "bool", bool: BoolRules.decode(reader, reader.uint32()) };
          break;
        case 14:
          message.type = { $case: "string", string: StringRules.decode(reader, reader.uint32()) };
          break;
        case 15:
          message.type = { $case: "bytes", bytes: BytesRules.decode(reader, reader.uint32()) };
          break;
        case 16:
          message.type = { $case: "enum", enum: EnumRules.decode(reader, reader.uint32()) };
          break;
        case 18:
          message.type = { $case: "repeated", repeated: RepeatedRules.decode(reader, reader.uint32()) };
          break;
        case 19:
          message.type = { $case: "map", map: MapRules.decode(reader, reader.uint32()) };
          break;
        case 20:
          message.type = { $case: "any", any: AnyRules.decode(reader, reader.uint32()) };
          break;
        case 21:
          message.type = { $case: "duration", duration: DurationRules.decode(reader, reader.uint32()) };
          break;
        case 22:
          message.type = { $case: "timestamp", timestamp: TimestampRules.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseFloatRules(): FloatRules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const FloatRules = {
  encode(message: FloatRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(13).float(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(21).float(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(29).float(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(37).float(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(45).float(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FloatRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.float();
          break;
        case 2:
          message.lt = reader.float();
          break;
        case 3:
          message.lte = reader.float();
          break;
        case 4:
          message.gt = reader.float();
          break;
        case 5:
          message.gte = reader.float();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.float());
            }
          } else {
            message.in.push(reader.float());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.float());
            }
          } else {
            message.notIn.push(reader.float());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseDoubleRules(): DoubleRules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const DoubleRules = {
  encode(message: DoubleRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(9).double(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(17).double(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(25).double(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(33).double(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(41).double(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.double(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.double(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.double();
          break;
        case 2:
          message.lt = reader.double();
          break;
        case 3:
          message.lte = reader.double();
          break;
        case 4:
          message.gt = reader.double();
          break;
        case 5:
          message.gte = reader.double();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.double());
            }
          } else {
            message.in.push(reader.double());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.double());
            }
          } else {
            message.notIn.push(reader.double());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseInt32Rules(): Int32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const Int32Rules = {
  encode(message: Int32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(8).int32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(16).int32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(24).int32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(32).int32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(40).int32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int32Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.int32();
          break;
        case 2:
          message.lt = reader.int32();
          break;
        case 3:
          message.lte = reader.int32();
          break;
        case 4:
          message.gt = reader.int32();
          break;
        case 5:
          message.gte = reader.int32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.int32());
            }
          } else {
            message.in.push(reader.int32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.int32());
            }
          } else {
            message.notIn.push(reader.int32());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseInt64Rules(): Int64Rules {
  return { const: "0", lt: "0", lte: "0", gt: "0", gte: "0", in: [], notIn: [], ignoreEmpty: false };
}

export const Int64Rules = {
  encode(message: Int64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== "0") {
      writer.uint32(8).int64(message.const);
    }
    if (message.lt !== "0") {
      writer.uint32(16).int64(message.lt);
    }
    if (message.lte !== "0") {
      writer.uint32(24).int64(message.lte);
    }
    if (message.gt !== "0") {
      writer.uint32(32).int64(message.gt);
    }
    if (message.gte !== "0") {
      writer.uint32(40).int64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int64Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = longToString(reader.int64() as Long);
          break;
        case 2:
          message.lt = longToString(reader.int64() as Long);
          break;
        case 3:
          message.lte = longToString(reader.int64() as Long);
          break;
        case 4:
          message.gt = longToString(reader.int64() as Long);
          break;
        case 5:
          message.gte = longToString(reader.int64() as Long);
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToString(reader.int64() as Long));
            }
          } else {
            message.in.push(longToString(reader.int64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToString(reader.int64() as Long));
            }
          } else {
            message.notIn.push(longToString(reader.int64() as Long));
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseUInt32Rules(): UInt32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const UInt32Rules = {
  encode(message: UInt32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(8).uint32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(16).uint32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(24).uint32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(32).uint32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(40).uint32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UInt32Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.uint32();
          break;
        case 2:
          message.lt = reader.uint32();
          break;
        case 3:
          message.lte = reader.uint32();
          break;
        case 4:
          message.gt = reader.uint32();
          break;
        case 5:
          message.gte = reader.uint32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.uint32());
            }
          } else {
            message.in.push(reader.uint32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.uint32());
            }
          } else {
            message.notIn.push(reader.uint32());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseUInt64Rules(): UInt64Rules {
  return { const: "0", lt: "0", lte: "0", gt: "0", gte: "0", in: [], notIn: [], ignoreEmpty: false };
}

export const UInt64Rules = {
  encode(message: UInt64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== "0") {
      writer.uint32(8).uint64(message.const);
    }
    if (message.lt !== "0") {
      writer.uint32(16).uint64(message.lt);
    }
    if (message.lte !== "0") {
      writer.uint32(24).uint64(message.lte);
    }
    if (message.gt !== "0") {
      writer.uint32(32).uint64(message.gt);
    }
    if (message.gte !== "0") {
      writer.uint32(40).uint64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UInt64Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.lt = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.lte = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.gt = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.gte = longToString(reader.uint64() as Long);
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToString(reader.uint64() as Long));
            }
          } else {
            message.in.push(longToString(reader.uint64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToString(reader.uint64() as Long));
            }
          } else {
            message.notIn.push(longToString(reader.uint64() as Long));
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSInt32Rules(): SInt32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const SInt32Rules = {
  encode(message: SInt32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(8).sint32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(16).sint32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(24).sint32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(32).sint32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(40).sint32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sint32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.sint32(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SInt32Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSInt32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.sint32();
          break;
        case 2:
          message.lt = reader.sint32();
          break;
        case 3:
          message.lte = reader.sint32();
          break;
        case 4:
          message.gt = reader.sint32();
          break;
        case 5:
          message.gte = reader.sint32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.sint32());
            }
          } else {
            message.in.push(reader.sint32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.sint32());
            }
          } else {
            message.notIn.push(reader.sint32());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSInt64Rules(): SInt64Rules {
  return { const: "0", lt: "0", lte: "0", gt: "0", gte: "0", in: [], notIn: [], ignoreEmpty: false };
}

export const SInt64Rules = {
  encode(message: SInt64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== "0") {
      writer.uint32(8).sint64(message.const);
    }
    if (message.lt !== "0") {
      writer.uint32(16).sint64(message.lt);
    }
    if (message.lte !== "0") {
      writer.uint32(24).sint64(message.lte);
    }
    if (message.gt !== "0") {
      writer.uint32(32).sint64(message.gt);
    }
    if (message.gte !== "0") {
      writer.uint32(40).sint64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sint64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.sint64(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SInt64Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSInt64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = longToString(reader.sint64() as Long);
          break;
        case 2:
          message.lt = longToString(reader.sint64() as Long);
          break;
        case 3:
          message.lte = longToString(reader.sint64() as Long);
          break;
        case 4:
          message.gt = longToString(reader.sint64() as Long);
          break;
        case 5:
          message.gte = longToString(reader.sint64() as Long);
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToString(reader.sint64() as Long));
            }
          } else {
            message.in.push(longToString(reader.sint64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToString(reader.sint64() as Long));
            }
          } else {
            message.notIn.push(longToString(reader.sint64() as Long));
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseFixed32Rules(): Fixed32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const Fixed32Rules = {
  encode(message: Fixed32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(13).fixed32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(21).fixed32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(29).fixed32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(37).fixed32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(45).fixed32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.fixed32(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fixed32Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixed32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.fixed32();
          break;
        case 2:
          message.lt = reader.fixed32();
          break;
        case 3:
          message.lte = reader.fixed32();
          break;
        case 4:
          message.gt = reader.fixed32();
          break;
        case 5:
          message.gte = reader.fixed32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.fixed32());
            }
          } else {
            message.in.push(reader.fixed32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.fixed32());
            }
          } else {
            message.notIn.push(reader.fixed32());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseFixed64Rules(): Fixed64Rules {
  return { const: "0", lt: "0", lte: "0", gt: "0", gte: "0", in: [], notIn: [], ignoreEmpty: false };
}

export const Fixed64Rules = {
  encode(message: Fixed64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== "0") {
      writer.uint32(9).fixed64(message.const);
    }
    if (message.lt !== "0") {
      writer.uint32(17).fixed64(message.lt);
    }
    if (message.lte !== "0") {
      writer.uint32(25).fixed64(message.lte);
    }
    if (message.gt !== "0") {
      writer.uint32(33).fixed64(message.gt);
    }
    if (message.gte !== "0") {
      writer.uint32(41).fixed64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fixed64Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixed64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.lt = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.lte = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.gt = longToString(reader.fixed64() as Long);
          break;
        case 5:
          message.gte = longToString(reader.fixed64() as Long);
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToString(reader.fixed64() as Long));
            }
          } else {
            message.in.push(longToString(reader.fixed64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToString(reader.fixed64() as Long));
            }
          } else {
            message.notIn.push(longToString(reader.fixed64() as Long));
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSFixed32Rules(): SFixed32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const SFixed32Rules = {
  encode(message: SFixed32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(13).sfixed32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(21).sfixed32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(29).sfixed32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(37).sfixed32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(45).sfixed32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SFixed32Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSFixed32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.sfixed32();
          break;
        case 2:
          message.lt = reader.sfixed32();
          break;
        case 3:
          message.lte = reader.sfixed32();
          break;
        case 4:
          message.gt = reader.sfixed32();
          break;
        case 5:
          message.gte = reader.sfixed32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.sfixed32());
            }
          } else {
            message.in.push(reader.sfixed32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.sfixed32());
            }
          } else {
            message.notIn.push(reader.sfixed32());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseSFixed64Rules(): SFixed64Rules {
  return { const: "0", lt: "0", lte: "0", gt: "0", gte: "0", in: [], notIn: [], ignoreEmpty: false };
}

export const SFixed64Rules = {
  encode(message: SFixed64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== "0") {
      writer.uint32(9).sfixed64(message.const);
    }
    if (message.lt !== "0") {
      writer.uint32(17).sfixed64(message.lt);
    }
    if (message.lte !== "0") {
      writer.uint32(25).sfixed64(message.lte);
    }
    if (message.gt !== "0") {
      writer.uint32(33).sfixed64(message.gt);
    }
    if (message.gte !== "0") {
      writer.uint32(41).sfixed64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SFixed64Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSFixed64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = longToString(reader.sfixed64() as Long);
          break;
        case 2:
          message.lt = longToString(reader.sfixed64() as Long);
          break;
        case 3:
          message.lte = longToString(reader.sfixed64() as Long);
          break;
        case 4:
          message.gt = longToString(reader.sfixed64() as Long);
          break;
        case 5:
          message.gte = longToString(reader.sfixed64() as Long);
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToString(reader.sfixed64() as Long));
            }
          } else {
            message.in.push(longToString(reader.sfixed64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToString(reader.sfixed64() as Long));
            }
          } else {
            message.notIn.push(longToString(reader.sfixed64() as Long));
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseBoolRules(): BoolRules {
  return { const: false };
}

export const BoolRules = {
  encode(message: BoolRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const === true) {
      writer.uint32(8).bool(message.const);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoolRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoolRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseStringRules(): StringRules {
  return {
    const: "",
    len: "0",
    minLen: "0",
    maxLen: "0",
    lenBytes: "0",
    minBytes: "0",
    maxBytes: "0",
    pattern: "",
    prefix: "",
    suffix: "",
    contains: "",
    notContains: "",
    in: [],
    notIn: [],
    wellKnown: undefined,
    strict: false,
    ignoreEmpty: false,
  };
}

export const StringRules = {
  encode(message: StringRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== "") {
      writer.uint32(10).string(message.const);
    }
    if (message.len !== "0") {
      writer.uint32(152).uint64(message.len);
    }
    if (message.minLen !== "0") {
      writer.uint32(16).uint64(message.minLen);
    }
    if (message.maxLen !== "0") {
      writer.uint32(24).uint64(message.maxLen);
    }
    if (message.lenBytes !== "0") {
      writer.uint32(160).uint64(message.lenBytes);
    }
    if (message.minBytes !== "0") {
      writer.uint32(32).uint64(message.minBytes);
    }
    if (message.maxBytes !== "0") {
      writer.uint32(40).uint64(message.maxBytes);
    }
    if (message.pattern !== "") {
      writer.uint32(50).string(message.pattern);
    }
    if (message.prefix !== "") {
      writer.uint32(58).string(message.prefix);
    }
    if (message.suffix !== "") {
      writer.uint32(66).string(message.suffix);
    }
    if (message.contains !== "") {
      writer.uint32(74).string(message.contains);
    }
    if (message.notContains !== "") {
      writer.uint32(186).string(message.notContains);
    }
    for (const v of message.in) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.notIn) {
      writer.uint32(90).string(v!);
    }
    switch (message.wellKnown?.$case) {
      case "email":
        writer.uint32(96).bool(message.wellKnown.email);
        break;
      case "hostname":
        writer.uint32(104).bool(message.wellKnown.hostname);
        break;
      case "ip":
        writer.uint32(112).bool(message.wellKnown.ip);
        break;
      case "ipv4":
        writer.uint32(120).bool(message.wellKnown.ipv4);
        break;
      case "ipv6":
        writer.uint32(128).bool(message.wellKnown.ipv6);
        break;
      case "uri":
        writer.uint32(136).bool(message.wellKnown.uri);
        break;
      case "uriRef":
        writer.uint32(144).bool(message.wellKnown.uriRef);
        break;
      case "address":
        writer.uint32(168).bool(message.wellKnown.address);
        break;
      case "uuid":
        writer.uint32(176).bool(message.wellKnown.uuid);
        break;
      case "wellKnownRegex":
        writer.uint32(192).int32(message.wellKnown.wellKnownRegex);
        break;
    }
    if (message.strict === true) {
      writer.uint32(200).bool(message.strict);
    }
    if (message.ignoreEmpty === true) {
      writer.uint32(208).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.string();
          break;
        case 19:
          message.len = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.minLen = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.maxLen = longToString(reader.uint64() as Long);
          break;
        case 20:
          message.lenBytes = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.minBytes = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.maxBytes = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.pattern = reader.string();
          break;
        case 7:
          message.prefix = reader.string();
          break;
        case 8:
          message.suffix = reader.string();
          break;
        case 9:
          message.contains = reader.string();
          break;
        case 23:
          message.notContains = reader.string();
          break;
        case 10:
          message.in.push(reader.string());
          break;
        case 11:
          message.notIn.push(reader.string());
          break;
        case 12:
          message.wellKnown = { $case: "email", email: reader.bool() };
          break;
        case 13:
          message.wellKnown = { $case: "hostname", hostname: reader.bool() };
          break;
        case 14:
          message.wellKnown = { $case: "ip", ip: reader.bool() };
          break;
        case 15:
          message.wellKnown = { $case: "ipv4", ipv4: reader.bool() };
          break;
        case 16:
          message.wellKnown = { $case: "ipv6", ipv6: reader.bool() };
          break;
        case 17:
          message.wellKnown = { $case: "uri", uri: reader.bool() };
          break;
        case 18:
          message.wellKnown = { $case: "uriRef", uriRef: reader.bool() };
          break;
        case 21:
          message.wellKnown = { $case: "address", address: reader.bool() };
          break;
        case 22:
          message.wellKnown = { $case: "uuid", uuid: reader.bool() };
          break;
        case 24:
          message.wellKnown = { $case: "wellKnownRegex", wellKnownRegex: reader.int32() as any };
          break;
        case 25:
          message.strict = reader.bool();
          break;
        case 26:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseBytesRules(): BytesRules {
  return {
    const: new Uint8Array(),
    len: "0",
    minLen: "0",
    maxLen: "0",
    pattern: "",
    prefix: new Uint8Array(),
    suffix: new Uint8Array(),
    contains: new Uint8Array(),
    in: [],
    notIn: [],
    wellKnown: undefined,
    ignoreEmpty: false,
  };
}

export const BytesRules = {
  encode(message: BytesRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const.length !== 0) {
      writer.uint32(10).bytes(message.const);
    }
    if (message.len !== "0") {
      writer.uint32(104).uint64(message.len);
    }
    if (message.minLen !== "0") {
      writer.uint32(16).uint64(message.minLen);
    }
    if (message.maxLen !== "0") {
      writer.uint32(24).uint64(message.maxLen);
    }
    if (message.pattern !== "") {
      writer.uint32(34).string(message.pattern);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(42).bytes(message.prefix);
    }
    if (message.suffix.length !== 0) {
      writer.uint32(50).bytes(message.suffix);
    }
    if (message.contains.length !== 0) {
      writer.uint32(58).bytes(message.contains);
    }
    for (const v of message.in) {
      writer.uint32(66).bytes(v!);
    }
    for (const v of message.notIn) {
      writer.uint32(74).bytes(v!);
    }
    switch (message.wellKnown?.$case) {
      case "ip":
        writer.uint32(80).bool(message.wellKnown.ip);
        break;
      case "ipv4":
        writer.uint32(88).bool(message.wellKnown.ipv4);
        break;
      case "ipv6":
        writer.uint32(96).bool(message.wellKnown.ipv6);
        break;
    }
    if (message.ignoreEmpty === true) {
      writer.uint32(112).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BytesRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.bytes();
          break;
        case 13:
          message.len = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.minLen = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.maxLen = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.pattern = reader.string();
          break;
        case 5:
          message.prefix = reader.bytes();
          break;
        case 6:
          message.suffix = reader.bytes();
          break;
        case 7:
          message.contains = reader.bytes();
          break;
        case 8:
          message.in.push(reader.bytes());
          break;
        case 9:
          message.notIn.push(reader.bytes());
          break;
        case 10:
          message.wellKnown = { $case: "ip", ip: reader.bool() };
          break;
        case 11:
          message.wellKnown = { $case: "ipv4", ipv4: reader.bool() };
          break;
        case 12:
          message.wellKnown = { $case: "ipv6", ipv6: reader.bool() };
          break;
        case 14:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseEnumRules(): EnumRules {
  return { const: 0, definedOnly: false, in: [], notIn: [] };
}

export const EnumRules = {
  encode(message: EnumRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(8).int32(message.const);
    }
    if (message.definedOnly === true) {
      writer.uint32(16).bool(message.definedOnly);
    }
    writer.uint32(26).fork();
    for (const v of message.in) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.notIn) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.int32();
          break;
        case 2:
          message.definedOnly = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.int32());
            }
          } else {
            message.in.push(reader.int32());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.int32());
            }
          } else {
            message.notIn.push(reader.int32());
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

function createBaseMessageRules(): MessageRules {
  return { skip: false, required: false };
}

export const MessageRules = {
  encode(message: MessageRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.skip === true) {
      writer.uint32(8).bool(message.skip);
    }
    if (message.required === true) {
      writer.uint32(16).bool(message.required);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skip = reader.bool();
          break;
        case 2:
          message.required = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseRepeatedRules(): RepeatedRules {
  return { minItems: "0", maxItems: "0", unique: false, items: undefined, ignoreEmpty: false };
}

export const RepeatedRules = {
  encode(message: RepeatedRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minItems !== "0") {
      writer.uint32(8).uint64(message.minItems);
    }
    if (message.maxItems !== "0") {
      writer.uint32(16).uint64(message.maxItems);
    }
    if (message.unique === true) {
      writer.uint32(24).bool(message.unique);
    }
    if (message.items !== undefined) {
      FieldRules.encode(message.items, writer.uint32(34).fork()).ldelim();
    }
    if (message.ignoreEmpty === true) {
      writer.uint32(40).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RepeatedRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepeatedRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minItems = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.maxItems = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.unique = reader.bool();
          break;
        case 4:
          message.items = FieldRules.decode(reader, reader.uint32());
          break;
        case 5:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseMapRules(): MapRules {
  return { minPairs: "0", maxPairs: "0", noSparse: false, keys: undefined, values: undefined, ignoreEmpty: false };
}

export const MapRules = {
  encode(message: MapRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minPairs !== "0") {
      writer.uint32(8).uint64(message.minPairs);
    }
    if (message.maxPairs !== "0") {
      writer.uint32(16).uint64(message.maxPairs);
    }
    if (message.noSparse === true) {
      writer.uint32(24).bool(message.noSparse);
    }
    if (message.keys !== undefined) {
      FieldRules.encode(message.keys, writer.uint32(34).fork()).ldelim();
    }
    if (message.values !== undefined) {
      FieldRules.encode(message.values, writer.uint32(42).fork()).ldelim();
    }
    if (message.ignoreEmpty === true) {
      writer.uint32(48).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minPairs = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.maxPairs = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.noSparse = reader.bool();
          break;
        case 4:
          message.keys = FieldRules.decode(reader, reader.uint32());
          break;
        case 5:
          message.values = FieldRules.decode(reader, reader.uint32());
          break;
        case 6:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseAnyRules(): AnyRules {
  return { required: false, in: [], notIn: [] };
}

export const AnyRules = {
  encode(message: AnyRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.required === true) {
      writer.uint32(8).bool(message.required);
    }
    for (const v of message.in) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.notIn) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnyRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.required = reader.bool();
          break;
        case 2:
          message.in.push(reader.string());
          break;
        case 3:
          message.notIn.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseDurationRules(): DurationRules {
  return {
    required: false,
    const: undefined,
    lt: undefined,
    lte: undefined,
    gt: undefined,
    gte: undefined,
    in: [],
    notIn: [],
  };
}

export const DurationRules = {
  encode(message: DurationRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.required === true) {
      writer.uint32(8).bool(message.required);
    }
    if (message.const !== undefined) {
      Duration.encode(message.const, writer.uint32(18).fork()).ldelim();
    }
    if (message.lt !== undefined) {
      Duration.encode(message.lt, writer.uint32(26).fork()).ldelim();
    }
    if (message.lte !== undefined) {
      Duration.encode(message.lte, writer.uint32(34).fork()).ldelim();
    }
    if (message.gt !== undefined) {
      Duration.encode(message.gt, writer.uint32(42).fork()).ldelim();
    }
    if (message.gte !== undefined) {
      Duration.encode(message.gte, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.in) {
      Duration.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.notIn) {
      Duration.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DurationRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDurationRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.required = reader.bool();
          break;
        case 2:
          message.const = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.lt = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.lte = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.gt = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.gte = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.in.push(Duration.decode(reader, reader.uint32()));
          break;
        case 8:
          message.notIn.push(Duration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function createBaseTimestampRules(): TimestampRules {
  return {
    required: false,
    const: undefined,
    lt: undefined,
    lte: undefined,
    gt: undefined,
    gte: undefined,
    ltNow: false,
    gtNow: false,
    within: undefined,
  };
}

export const TimestampRules = {
  encode(message: TimestampRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.required === true) {
      writer.uint32(8).bool(message.required);
    }
    if (message.const !== undefined) {
      Timestamp.encode(toTimestamp(message.const), writer.uint32(18).fork()).ldelim();
    }
    if (message.lt !== undefined) {
      Timestamp.encode(toTimestamp(message.lt), writer.uint32(26).fork()).ldelim();
    }
    if (message.lte !== undefined) {
      Timestamp.encode(toTimestamp(message.lte), writer.uint32(34).fork()).ldelim();
    }
    if (message.gt !== undefined) {
      Timestamp.encode(toTimestamp(message.gt), writer.uint32(42).fork()).ldelim();
    }
    if (message.gte !== undefined) {
      Timestamp.encode(toTimestamp(message.gte), writer.uint32(50).fork()).ldelim();
    }
    if (message.ltNow === true) {
      writer.uint32(56).bool(message.ltNow);
    }
    if (message.gtNow === true) {
      writer.uint32(64).bool(message.gtNow);
    }
    if (message.within !== undefined) {
      Duration.encode(message.within, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimestampRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.required = reader.bool();
          break;
        case 2:
          message.const = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lte = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.gt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.gte = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.ltNow = reader.bool();
          break;
        case 8:
          message.gtNow = reader.bool();
          break;
        case 9:
          message.within = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = Number(t.seconds) * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
