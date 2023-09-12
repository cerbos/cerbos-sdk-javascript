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
      throw new tsProtoGlobalThis.Error(
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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

export const BoolRules = {
  fromJSON(object: any): BoolRules {
    return { const: isSet(object.const) ? Boolean(object.const) : false };
  },
};

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
};

export const BytesRules = {
  fromJSON(object: any): BytesRules {
    return {
      const: isSet(object.const)
        ? bytesFromBase64(object.const)
        : new Uint8Array(0),
      len: isSet(object.len) ? String(object.len) : "0",
      minLen: isSet(object.minLen) ? String(object.minLen) : "0",
      maxLen: isSet(object.maxLen) ? String(object.maxLen) : "0",
      pattern: isSet(object.pattern) ? String(object.pattern) : "",
      prefix: isSet(object.prefix)
        ? bytesFromBase64(object.prefix)
        : new Uint8Array(0),
      suffix: isSet(object.suffix)
        ? bytesFromBase64(object.suffix)
        : new Uint8Array(0),
      contains: isSet(object.contains)
        ? bytesFromBase64(object.contains)
        : new Uint8Array(0),
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
};

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
};

export const MessageRules = {
  fromJSON(object: any): MessageRules {
    return {
      skip: isSet(object.skip) ? Boolean(object.skip) : false,
      required: isSet(object.required) ? Boolean(object.required) : false,
    };
  },
};

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
};

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
};

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
};

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
};

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
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
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
