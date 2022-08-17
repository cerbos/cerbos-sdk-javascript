/* eslint-disable */
import { Timestamp } from "../google/protobuf/timestamp";
import { Duration } from "../google/protobuf/duration";

export const protobufPackage = "validate";

/** WellKnownRegex contain some well-known patterns. */
export enum KnownRegex {
  UNKNOWN = 0,
  /** HTTP_HEADER_NAME - HTTP header name as defined by RFC 7230. */
  HTTP_HEADER_NAME = 1,
  /** HTTP_HEADER_VALUE - HTTP header value as defined by RFC 7230. */
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
        "Unrecognized enum value " + object + " for enum KnownRegex"
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
        "Unrecognized enum value " + object + " for enum KnownRegex"
      );
  }
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
  items: FieldRules | undefined;
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
  keys: FieldRules | undefined;
  /**
   * Values specifies the constraints to be applied to the value of each key
   * in the field. Message values will still have their validations evaluated
   * unless skip is specified here.
   */
  values: FieldRules | undefined;
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
  const: Duration | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: Duration | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * inclusive
   */
  lte: Duration | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive
   */
  gt: Duration | undefined;
  /**
   * Gte specifies that this field must be greater than the specified value,
   * inclusive
   */
  gte: Duration | undefined;
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
  const: Date | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: Date | undefined;
  /**
   * Lte specifies that this field must be less than the specified value,
   * inclusive
   */
  lte: Date | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive
   */
  gt: Date | undefined;
  /**
   * Gte specifies that this field must be greater than the specified value,
   * inclusive
   */
  gte: Date | undefined;
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
        ? { $case: "uint32", uint32: UInt32Rules.fromJSON(object.uint32) }
        : isSet(object.uint64)
        ? { $case: "uint64", uint64: UInt64Rules.fromJSON(object.uint64) }
        : isSet(object.sint32)
        ? { $case: "sint32", sint32: SInt32Rules.fromJSON(object.sint32) }
        : isSet(object.sint64)
        ? { $case: "sint64", sint64: SInt64Rules.fromJSON(object.sint64) }
        : isSet(object.fixed32)
        ? { $case: "fixed32", fixed32: Fixed32Rules.fromJSON(object.fixed32) }
        : isSet(object.fixed64)
        ? { $case: "fixed64", fixed64: Fixed64Rules.fromJSON(object.fixed64) }
        : isSet(object.sfixed32)
        ? {
            $case: "sfixed32",
            sfixed32: SFixed32Rules.fromJSON(object.sfixed32),
          }
        : isSet(object.sfixed64)
        ? {
            $case: "sfixed64",
            sfixed64: SFixed64Rules.fromJSON(object.sfixed64),
          }
        : isSet(object.bool)
        ? { $case: "bool", bool: BoolRules.fromJSON(object.bool) }
        : isSet(object.string)
        ? { $case: "string", string: StringRules.fromJSON(object.string) }
        : isSet(object.bytes)
        ? { $case: "bytes", bytes: BytesRules.fromJSON(object.bytes) }
        : isSet(object.enum)
        ? { $case: "enum", enum: EnumRules.fromJSON(object.enum) }
        : isSet(object.repeated)
        ? {
            $case: "repeated",
            repeated: RepeatedRules.fromJSON(object.repeated),
          }
        : isSet(object.map)
        ? { $case: "map", map: MapRules.fromJSON(object.map) }
        : isSet(object.any)
        ? { $case: "any", any: AnyRules.fromJSON(object.any) }
        : isSet(object.duration)
        ? {
            $case: "duration",
            duration: DurationRules.fromJSON(object.duration),
          }
        : isSet(object.timestamp)
        ? {
            $case: "timestamp",
            timestamp: TimestampRules.fromJSON(object.timestamp),
          }
        : undefined,
    };
  },

  toJSON(message: FieldRules): unknown {
    const obj: any = {};
    message.message !== undefined &&
      (obj.message = message.message
        ? MessageRules.toJSON(message.message)
        : undefined);
    message.type?.$case === "float" &&
      (obj.float = message.type?.float
        ? FloatRules.toJSON(message.type?.float)
        : undefined);
    message.type?.$case === "double" &&
      (obj.double = message.type?.double
        ? DoubleRules.toJSON(message.type?.double)
        : undefined);
    message.type?.$case === "int32" &&
      (obj.int32 = message.type?.int32
        ? Int32Rules.toJSON(message.type?.int32)
        : undefined);
    message.type?.$case === "int64" &&
      (obj.int64 = message.type?.int64
        ? Int64Rules.toJSON(message.type?.int64)
        : undefined);
    message.type?.$case === "uint32" &&
      (obj.uint32 = message.type?.uint32
        ? UInt32Rules.toJSON(message.type?.uint32)
        : undefined);
    message.type?.$case === "uint64" &&
      (obj.uint64 = message.type?.uint64
        ? UInt64Rules.toJSON(message.type?.uint64)
        : undefined);
    message.type?.$case === "sint32" &&
      (obj.sint32 = message.type?.sint32
        ? SInt32Rules.toJSON(message.type?.sint32)
        : undefined);
    message.type?.$case === "sint64" &&
      (obj.sint64 = message.type?.sint64
        ? SInt64Rules.toJSON(message.type?.sint64)
        : undefined);
    message.type?.$case === "fixed32" &&
      (obj.fixed32 = message.type?.fixed32
        ? Fixed32Rules.toJSON(message.type?.fixed32)
        : undefined);
    message.type?.$case === "fixed64" &&
      (obj.fixed64 = message.type?.fixed64
        ? Fixed64Rules.toJSON(message.type?.fixed64)
        : undefined);
    message.type?.$case === "sfixed32" &&
      (obj.sfixed32 = message.type?.sfixed32
        ? SFixed32Rules.toJSON(message.type?.sfixed32)
        : undefined);
    message.type?.$case === "sfixed64" &&
      (obj.sfixed64 = message.type?.sfixed64
        ? SFixed64Rules.toJSON(message.type?.sfixed64)
        : undefined);
    message.type?.$case === "bool" &&
      (obj.bool = message.type?.bool
        ? BoolRules.toJSON(message.type?.bool)
        : undefined);
    message.type?.$case === "string" &&
      (obj.string = message.type?.string
        ? StringRules.toJSON(message.type?.string)
        : undefined);
    message.type?.$case === "bytes" &&
      (obj.bytes = message.type?.bytes
        ? BytesRules.toJSON(message.type?.bytes)
        : undefined);
    message.type?.$case === "enum" &&
      (obj.enum = message.type?.enum
        ? EnumRules.toJSON(message.type?.enum)
        : undefined);
    message.type?.$case === "repeated" &&
      (obj.repeated = message.type?.repeated
        ? RepeatedRules.toJSON(message.type?.repeated)
        : undefined);
    message.type?.$case === "map" &&
      (obj.map = message.type?.map
        ? MapRules.toJSON(message.type?.map)
        : undefined);
    message.type?.$case === "any" &&
      (obj.any = message.type?.any
        ? AnyRules.toJSON(message.type?.any)
        : undefined);
    message.type?.$case === "duration" &&
      (obj.duration = message.type?.duration
        ? DurationRules.toJSON(message.type?.duration)
        : undefined);
    message.type?.$case === "timestamp" &&
      (obj.timestamp = message.type?.timestamp
        ? TimestampRules.toJSON(message.type?.timestamp)
        : undefined);
    return obj;
  },
};

function createBaseFloatRules(): FloatRules {
  return {
    const: 0,
    lt: 0,
    lte: 0,
    gt: 0,
    gte: 0,
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const FloatRules = {
  fromJSON(object: any): FloatRules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: FloatRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseDoubleRules(): DoubleRules {
  return {
    const: 0,
    lt: 0,
    lte: 0,
    gt: 0,
    gte: 0,
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const DoubleRules = {
  fromJSON(object: any): DoubleRules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: DoubleRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseInt32Rules(): Int32Rules {
  return {
    const: 0,
    lt: 0,
    lte: 0,
    gt: 0,
    gte: 0,
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const Int32Rules = {
  fromJSON(object: any): Int32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: Int32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseInt64Rules(): Int64Rules {
  return {
    const: "0",
    lt: "0",
    lte: "0",
    gt: "0",
    gte: "0",
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const Int64Rules = {
  fromJSON(object: any): Int64Rules {
    return {
      const: isSet(object.const) ? String(object.const) : "0",
      lt: isSet(object.lt) ? String(object.lt) : "0",
      lte: isSet(object.lte) ? String(object.lte) : "0",
      gt: isSet(object.gt) ? String(object.gt) : "0",
      gte: isSet(object.gte) ? String(object.gte) : "0",
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => String(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: Int64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseUInt32Rules(): UInt32Rules {
  return {
    const: 0,
    lt: 0,
    lte: 0,
    gt: 0,
    gte: 0,
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const UInt32Rules = {
  fromJSON(object: any): UInt32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: UInt32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseUInt64Rules(): UInt64Rules {
  return {
    const: "0",
    lt: "0",
    lte: "0",
    gt: "0",
    gte: "0",
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const UInt64Rules = {
  fromJSON(object: any): UInt64Rules {
    return {
      const: isSet(object.const) ? String(object.const) : "0",
      lt: isSet(object.lt) ? String(object.lt) : "0",
      lte: isSet(object.lte) ? String(object.lte) : "0",
      gt: isSet(object.gt) ? String(object.gt) : "0",
      gte: isSet(object.gte) ? String(object.gte) : "0",
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => String(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: UInt64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseSInt32Rules(): SInt32Rules {
  return {
    const: 0,
    lt: 0,
    lte: 0,
    gt: 0,
    gte: 0,
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const SInt32Rules = {
  fromJSON(object: any): SInt32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: SInt32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseSInt64Rules(): SInt64Rules {
  return {
    const: "0",
    lt: "0",
    lte: "0",
    gt: "0",
    gte: "0",
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const SInt64Rules = {
  fromJSON(object: any): SInt64Rules {
    return {
      const: isSet(object.const) ? String(object.const) : "0",
      lt: isSet(object.lt) ? String(object.lt) : "0",
      lte: isSet(object.lte) ? String(object.lte) : "0",
      gt: isSet(object.gt) ? String(object.gt) : "0",
      gte: isSet(object.gte) ? String(object.gte) : "0",
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => String(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: SInt64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseFixed32Rules(): Fixed32Rules {
  return {
    const: 0,
    lt: 0,
    lte: 0,
    gt: 0,
    gte: 0,
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const Fixed32Rules = {
  fromJSON(object: any): Fixed32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: Fixed32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseFixed64Rules(): Fixed64Rules {
  return {
    const: "0",
    lt: "0",
    lte: "0",
    gt: "0",
    gte: "0",
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const Fixed64Rules = {
  fromJSON(object: any): Fixed64Rules {
    return {
      const: isSet(object.const) ? String(object.const) : "0",
      lt: isSet(object.lt) ? String(object.lt) : "0",
      lte: isSet(object.lte) ? String(object.lte) : "0",
      gt: isSet(object.gt) ? String(object.gt) : "0",
      gte: isSet(object.gte) ? String(object.gte) : "0",
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => String(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: Fixed64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseSFixed32Rules(): SFixed32Rules {
  return {
    const: 0,
    lt: 0,
    lte: 0,
    gt: 0,
    gte: 0,
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const SFixed32Rules = {
  fromJSON(object: any): SFixed32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => Number(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: SFixed32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseSFixed64Rules(): SFixed64Rules {
  return {
    const: "0",
    lt: "0",
    lte: "0",
    gt: "0",
    gte: "0",
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const SFixed64Rules = {
  fromJSON(object: any): SFixed64Rules {
    return {
      const: isSet(object.const) ? String(object.const) : "0",
      lt: isSet(object.lt) ? String(object.lt) : "0",
      lte: isSet(object.lte) ? String(object.lte) : "0",
      gt: isSet(object.gt) ? String(object.gt) : "0",
      gte: isSet(object.gte) ? String(object.gte) : "0",
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => String(e))
        : [],
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: SFixed64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseBoolRules(): BoolRules {
  return { const: false };
}

export const BoolRules = {
  fromJSON(object: any): BoolRules {
    return {
      const: isSet(object.const) ? Boolean(object.const) : false,
    };
  },

  toJSON(message: BoolRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    return obj;
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
  fromJSON(object: any): StringRules {
    return {
      const: isSet(object.const) ? String(object.const) : "",
      len: isSet(object.len) ? String(object.len) : "0",
      minLen: isSet(object.minLen) ? String(object.minLen) : "0",
      maxLen: isSet(object.maxLen) ? String(object.maxLen) : "0",
      lenBytes: isSet(object.lenBytes) ? String(object.lenBytes) : "0",
      minBytes: isSet(object.minBytes) ? String(object.minBytes) : "0",
      maxBytes: isSet(object.maxBytes) ? String(object.maxBytes) : "0",
      pattern: isSet(object.pattern) ? String(object.pattern) : "",
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
      suffix: isSet(object.suffix) ? String(object.suffix) : "",
      contains: isSet(object.contains) ? String(object.contains) : "",
      notContains: isSet(object.notContains) ? String(object.notContains) : "",
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => String(e))
        : [],
      wellKnown: isSet(object.email)
        ? { $case: "email", email: Boolean(object.email) }
        : isSet(object.hostname)
        ? { $case: "hostname", hostname: Boolean(object.hostname) }
        : isSet(object.ip)
        ? { $case: "ip", ip: Boolean(object.ip) }
        : isSet(object.ipv4)
        ? { $case: "ipv4", ipv4: Boolean(object.ipv4) }
        : isSet(object.ipv6)
        ? { $case: "ipv6", ipv6: Boolean(object.ipv6) }
        : isSet(object.uri)
        ? { $case: "uri", uri: Boolean(object.uri) }
        : isSet(object.uriRef)
        ? { $case: "uriRef", uriRef: Boolean(object.uriRef) }
        : isSet(object.address)
        ? { $case: "address", address: Boolean(object.address) }
        : isSet(object.uuid)
        ? { $case: "uuid", uuid: Boolean(object.uuid) }
        : isSet(object.wellKnownRegex)
        ? {
            $case: "wellKnownRegex",
            wellKnownRegex: knownRegexFromJSON(object.wellKnownRegex),
          }
        : undefined,
      strict: isSet(object.strict) ? Boolean(object.strict) : false,
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: StringRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.len !== undefined && (obj.len = message.len);
    message.minLen !== undefined && (obj.minLen = message.minLen);
    message.maxLen !== undefined && (obj.maxLen = message.maxLen);
    message.lenBytes !== undefined && (obj.lenBytes = message.lenBytes);
    message.minBytes !== undefined && (obj.minBytes = message.minBytes);
    message.maxBytes !== undefined && (obj.maxBytes = message.maxBytes);
    message.pattern !== undefined && (obj.pattern = message.pattern);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.suffix !== undefined && (obj.suffix = message.suffix);
    message.contains !== undefined && (obj.contains = message.contains);
    message.notContains !== undefined &&
      (obj.notContains = message.notContains);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    message.wellKnown?.$case === "email" &&
      (obj.email = message.wellKnown?.email);
    message.wellKnown?.$case === "hostname" &&
      (obj.hostname = message.wellKnown?.hostname);
    message.wellKnown?.$case === "ip" && (obj.ip = message.wellKnown?.ip);
    message.wellKnown?.$case === "ipv4" && (obj.ipv4 = message.wellKnown?.ipv4);
    message.wellKnown?.$case === "ipv6" && (obj.ipv6 = message.wellKnown?.ipv6);
    message.wellKnown?.$case === "uri" && (obj.uri = message.wellKnown?.uri);
    message.wellKnown?.$case === "uriRef" &&
      (obj.uriRef = message.wellKnown?.uriRef);
    message.wellKnown?.$case === "address" &&
      (obj.address = message.wellKnown?.address);
    message.wellKnown?.$case === "uuid" && (obj.uuid = message.wellKnown?.uuid);
    message.wellKnown?.$case === "wellKnownRegex" &&
      (obj.wellKnownRegex =
        message.wellKnown?.wellKnownRegex !== undefined
          ? knownRegexToJSON(message.wellKnown?.wellKnownRegex)
          : undefined);
    message.strict !== undefined && (obj.strict = message.strict);
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
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
  fromJSON(object: any): BytesRules {
    return {
      const: isSet(object.const)
        ? bytesFromBase64(object.const)
        : new Uint8Array(),
      len: isSet(object.len) ? String(object.len) : "0",
      minLen: isSet(object.minLen) ? String(object.minLen) : "0",
      maxLen: isSet(object.maxLen) ? String(object.maxLen) : "0",
      pattern: isSet(object.pattern) ? String(object.pattern) : "",
      prefix: isSet(object.prefix)
        ? bytesFromBase64(object.prefix)
        : new Uint8Array(),
      suffix: isSet(object.suffix)
        ? bytesFromBase64(object.suffix)
        : new Uint8Array(),
      contains: isSet(object.contains)
        ? bytesFromBase64(object.contains)
        : new Uint8Array(),
      in: Array.isArray(object?.in)
        ? object.in.map((e: any) => bytesFromBase64(e))
        : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => bytesFromBase64(e))
        : [],
      wellKnown: isSet(object.ip)
        ? { $case: "ip", ip: Boolean(object.ip) }
        : isSet(object.ipv4)
        ? { $case: "ipv4", ipv4: Boolean(object.ipv4) }
        : isSet(object.ipv6)
        ? { $case: "ipv6", ipv6: Boolean(object.ipv6) }
        : undefined,
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: BytesRules): unknown {
    const obj: any = {};
    message.const !== undefined &&
      (obj.const = base64FromBytes(
        message.const !== undefined ? message.const : new Uint8Array()
      ));
    message.len !== undefined && (obj.len = message.len);
    message.minLen !== undefined && (obj.minLen = message.minLen);
    message.maxLen !== undefined && (obj.maxLen = message.maxLen);
    message.pattern !== undefined && (obj.pattern = message.pattern);
    message.prefix !== undefined &&
      (obj.prefix = base64FromBytes(
        message.prefix !== undefined ? message.prefix : new Uint8Array()
      ));
    message.suffix !== undefined &&
      (obj.suffix = base64FromBytes(
        message.suffix !== undefined ? message.suffix : new Uint8Array()
      ));
    message.contains !== undefined &&
      (obj.contains = base64FromBytes(
        message.contains !== undefined ? message.contains : new Uint8Array()
      ));
    if (message.in) {
      obj.in = message.in.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.notIn = [];
    }
    message.wellKnown?.$case === "ip" && (obj.ip = message.wellKnown?.ip);
    message.wellKnown?.$case === "ipv4" && (obj.ipv4 = message.wellKnown?.ipv4);
    message.wellKnown?.$case === "ipv6" && (obj.ipv6 = message.wellKnown?.ipv6);
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseEnumRules(): EnumRules {
  return { const: 0, definedOnly: false, in: [], notIn: [] };
}

export const EnumRules = {
  fromJSON(object: any): EnumRules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      definedOnly: isSet(object.definedOnly)
        ? Boolean(object.definedOnly)
        : false,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: EnumRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.definedOnly !== undefined &&
      (obj.definedOnly = message.definedOnly);
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    } else {
      obj.notIn = [];
    }
    return obj;
  },
};

function createBaseMessageRules(): MessageRules {
  return { skip: false, required: false };
}

export const MessageRules = {
  fromJSON(object: any): MessageRules {
    return {
      skip: isSet(object.skip) ? Boolean(object.skip) : false,
      required: isSet(object.required) ? Boolean(object.required) : false,
    };
  },

  toJSON(message: MessageRules): unknown {
    const obj: any = {};
    message.skip !== undefined && (obj.skip = message.skip);
    message.required !== undefined && (obj.required = message.required);
    return obj;
  },
};

function createBaseRepeatedRules(): RepeatedRules {
  return {
    minItems: "0",
    maxItems: "0",
    unique: false,
    items: undefined,
    ignoreEmpty: false,
  };
}

export const RepeatedRules = {
  fromJSON(object: any): RepeatedRules {
    return {
      minItems: isSet(object.minItems) ? String(object.minItems) : "0",
      maxItems: isSet(object.maxItems) ? String(object.maxItems) : "0",
      unique: isSet(object.unique) ? Boolean(object.unique) : false,
      items: isSet(object.items)
        ? FieldRules.fromJSON(object.items)
        : undefined,
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: RepeatedRules): unknown {
    const obj: any = {};
    message.minItems !== undefined && (obj.minItems = message.minItems);
    message.maxItems !== undefined && (obj.maxItems = message.maxItems);
    message.unique !== undefined && (obj.unique = message.unique);
    message.items !== undefined &&
      (obj.items = message.items
        ? FieldRules.toJSON(message.items)
        : undefined);
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseMapRules(): MapRules {
  return {
    minPairs: "0",
    maxPairs: "0",
    noSparse: false,
    keys: undefined,
    values: undefined,
    ignoreEmpty: false,
  };
}

export const MapRules = {
  fromJSON(object: any): MapRules {
    return {
      minPairs: isSet(object.minPairs) ? String(object.minPairs) : "0",
      maxPairs: isSet(object.maxPairs) ? String(object.maxPairs) : "0",
      noSparse: isSet(object.noSparse) ? Boolean(object.noSparse) : false,
      keys: isSet(object.keys) ? FieldRules.fromJSON(object.keys) : undefined,
      values: isSet(object.values)
        ? FieldRules.fromJSON(object.values)
        : undefined,
      ignoreEmpty: isSet(object.ignoreEmpty)
        ? Boolean(object.ignoreEmpty)
        : false,
    };
  },

  toJSON(message: MapRules): unknown {
    const obj: any = {};
    message.minPairs !== undefined && (obj.minPairs = message.minPairs);
    message.maxPairs !== undefined && (obj.maxPairs = message.maxPairs);
    message.noSparse !== undefined && (obj.noSparse = message.noSparse);
    message.keys !== undefined &&
      (obj.keys = message.keys ? FieldRules.toJSON(message.keys) : undefined);
    message.values !== undefined &&
      (obj.values = message.values
        ? FieldRules.toJSON(message.values)
        : undefined);
    message.ignoreEmpty !== undefined &&
      (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },
};

function createBaseAnyRules(): AnyRules {
  return { required: false, in: [], notIn: [] };
}

export const AnyRules = {
  fromJSON(object: any): AnyRules {
    return {
      required: isSet(object.required) ? Boolean(object.required) : false,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: AnyRules): unknown {
    const obj: any = {};
    message.required !== undefined && (obj.required = message.required);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
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
  fromJSON(object: any): DurationRules {
    return {
      required: isSet(object.required) ? Boolean(object.required) : false,
      const: isSet(object.const) ? Duration.fromJSON(object.const) : undefined,
      lt: isSet(object.lt) ? Duration.fromJSON(object.lt) : undefined,
      lte: isSet(object.lte) ? Duration.fromJSON(object.lte) : undefined,
      gt: isSet(object.gt) ? Duration.fromJSON(object.gt) : undefined,
      gte: isSet(object.gte) ? Duration.fromJSON(object.gte) : undefined,
      in: Array.isArray(object?.in)
        ? object.in.map((e: any) => Duration.fromJSON(e))
        : [],
      notIn: Array.isArray(object?.notIn)
        ? object.notIn.map((e: any) => Duration.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DurationRules): unknown {
    const obj: any = {};
    message.required !== undefined && (obj.required = message.required);
    message.const !== undefined &&
      (obj.const = message.const ? Duration.toJSON(message.const) : undefined);
    message.lt !== undefined &&
      (obj.lt = message.lt ? Duration.toJSON(message.lt) : undefined);
    message.lte !== undefined &&
      (obj.lte = message.lte ? Duration.toJSON(message.lte) : undefined);
    message.gt !== undefined &&
      (obj.gt = message.gt ? Duration.toJSON(message.gt) : undefined);
    message.gte !== undefined &&
      (obj.gte = message.gte ? Duration.toJSON(message.gte) : undefined);
    if (message.in) {
      obj.in = message.in.map((e) => (e ? Duration.toJSON(e) : undefined));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) =>
        e ? Duration.toJSON(e) : undefined
      );
    } else {
      obj.notIn = [];
    }
    return obj;
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
  fromJSON(object: any): TimestampRules {
    return {
      required: isSet(object.required) ? Boolean(object.required) : false,
      const: isSet(object.const) ? fromJsonTimestamp(object.const) : undefined,
      lt: isSet(object.lt) ? fromJsonTimestamp(object.lt) : undefined,
      lte: isSet(object.lte) ? fromJsonTimestamp(object.lte) : undefined,
      gt: isSet(object.gt) ? fromJsonTimestamp(object.gt) : undefined,
      gte: isSet(object.gte) ? fromJsonTimestamp(object.gte) : undefined,
      ltNow: isSet(object.ltNow) ? Boolean(object.ltNow) : false,
      gtNow: isSet(object.gtNow) ? Boolean(object.gtNow) : false,
      within: isSet(object.within)
        ? Duration.fromJSON(object.within)
        : undefined,
    };
  },

  toJSON(message: TimestampRules): unknown {
    const obj: any = {};
    message.required !== undefined && (obj.required = message.required);
    message.const !== undefined && (obj.const = message.const.toISOString());
    message.lt !== undefined && (obj.lt = message.lt.toISOString());
    message.lte !== undefined && (obj.lte = message.lte.toISOString());
    message.gt !== undefined && (obj.gt = message.gt.toISOString());
    message.gte !== undefined && (obj.gte = message.gte.toISOString());
    message.ltNow !== undefined && (obj.ltNow = message.ltNow);
    message.gtNow !== undefined && (obj.gtNow = message.gtNow);
    message.within !== undefined &&
      (obj.within = message.within
        ? Duration.toJSON(message.within)
        : undefined);
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
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = Number(t.seconds) * 1_000;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
