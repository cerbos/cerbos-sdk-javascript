/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Constraint } from "./expression";

export const protobufPackage = "buf.validate";

export enum KnownRegex {
  KNOWN_REGEX_UNSPECIFIED = 0,
  KNOWN_REGEX_HTTP_HEADER_NAME = 1,
  KNOWN_REGEX_HTTP_HEADER_VALUE = 2,
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

function createBaseOneofConstraints(): OneofConstraints {
  return { required: undefined };
}

export const OneofConstraints = {
  encode(
    message: OneofConstraints,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.required !== undefined) {
      writer.uint32(8).bool(message.required);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneofConstraints {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofConstraints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.required = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseFieldConstraints(): FieldConstraints {
  return {
    cel: [],
    skipped: false,
    required: false,
    ignoreEmpty: false,
    type: undefined,
  };
}

export const FieldConstraints = {
  encode(
    message: FieldConstraints,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cel) {
      Constraint.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    if (message.skipped === true) {
      writer.uint32(192).bool(message.skipped);
    }
    if (message.required === true) {
      writer.uint32(200).bool(message.required);
    }
    if (message.ignoreEmpty === true) {
      writer.uint32(208).bool(message.ignoreEmpty);
    }
    switch (message.type?.$case) {
      case "float":
        FloatRules.encode(
          message.type.float,
          writer.uint32(10).fork(),
        ).ldelim();
        break;
      case "double":
        DoubleRules.encode(
          message.type.double,
          writer.uint32(18).fork(),
        ).ldelim();
        break;
      case "int32":
        Int32Rules.encode(
          message.type.int32,
          writer.uint32(26).fork(),
        ).ldelim();
        break;
      case "int64":
        Int64Rules.encode(
          message.type.int64,
          writer.uint32(34).fork(),
        ).ldelim();
        break;
      case "uint32":
        UInt32Rules.encode(
          message.type.uint32,
          writer.uint32(42).fork(),
        ).ldelim();
        break;
      case "uint64":
        UInt64Rules.encode(
          message.type.uint64,
          writer.uint32(50).fork(),
        ).ldelim();
        break;
      case "sint32":
        SInt32Rules.encode(
          message.type.sint32,
          writer.uint32(58).fork(),
        ).ldelim();
        break;
      case "sint64":
        SInt64Rules.encode(
          message.type.sint64,
          writer.uint32(66).fork(),
        ).ldelim();
        break;
      case "fixed32":
        Fixed32Rules.encode(
          message.type.fixed32,
          writer.uint32(74).fork(),
        ).ldelim();
        break;
      case "fixed64":
        Fixed64Rules.encode(
          message.type.fixed64,
          writer.uint32(82).fork(),
        ).ldelim();
        break;
      case "sfixed32":
        SFixed32Rules.encode(
          message.type.sfixed32,
          writer.uint32(90).fork(),
        ).ldelim();
        break;
      case "sfixed64":
        SFixed64Rules.encode(
          message.type.sfixed64,
          writer.uint32(98).fork(),
        ).ldelim();
        break;
      case "bool":
        BoolRules.encode(message.type.bool, writer.uint32(106).fork()).ldelim();
        break;
      case "string":
        StringRules.encode(
          message.type.string,
          writer.uint32(114).fork(),
        ).ldelim();
        break;
      case "bytes":
        BytesRules.encode(
          message.type.bytes,
          writer.uint32(122).fork(),
        ).ldelim();
        break;
      case "enum":
        EnumRules.encode(message.type.enum, writer.uint32(130).fork()).ldelim();
        break;
      case "repeated":
        RepeatedRules.encode(
          message.type.repeated,
          writer.uint32(146).fork(),
        ).ldelim();
        break;
      case "map":
        MapRules.encode(message.type.map, writer.uint32(154).fork()).ldelim();
        break;
      case "any":
        AnyRules.encode(message.type.any, writer.uint32(162).fork()).ldelim();
        break;
      case "duration":
        DurationRules.encode(
          message.type.duration,
          writer.uint32(170).fork(),
        ).ldelim();
        break;
      case "timestamp":
        TimestampRules.encode(
          message.type.timestamp,
          writer.uint32(178).fork(),
        ).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldConstraints {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldConstraints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 23:
          if (tag !== 186) {
            break;
          }

          message.cel.push(Constraint.decode(reader, reader.uint32()));
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.skipped = reader.bool();
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.required = reader.bool();
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.ignoreEmpty = reader.bool();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = {
            $case: "float",
            float: FloatRules.decode(reader, reader.uint32()),
          };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = {
            $case: "double",
            double: DoubleRules.decode(reader, reader.uint32()),
          };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = {
            $case: "int32",
            int32: Int32Rules.decode(reader, reader.uint32()),
          };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.type = {
            $case: "int64",
            int64: Int64Rules.decode(reader, reader.uint32()),
          };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.type = {
            $case: "uint32",
            uint32: UInt32Rules.decode(reader, reader.uint32()),
          };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.type = {
            $case: "uint64",
            uint64: UInt64Rules.decode(reader, reader.uint32()),
          };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.type = {
            $case: "sint32",
            sint32: SInt32Rules.decode(reader, reader.uint32()),
          };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.type = {
            $case: "sint64",
            sint64: SInt64Rules.decode(reader, reader.uint32()),
          };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.type = {
            $case: "fixed32",
            fixed32: Fixed32Rules.decode(reader, reader.uint32()),
          };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.type = {
            $case: "fixed64",
            fixed64: Fixed64Rules.decode(reader, reader.uint32()),
          };
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.type = {
            $case: "sfixed32",
            sfixed32: SFixed32Rules.decode(reader, reader.uint32()),
          };
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.type = {
            $case: "sfixed64",
            sfixed64: SFixed64Rules.decode(reader, reader.uint32()),
          };
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.type = {
            $case: "bool",
            bool: BoolRules.decode(reader, reader.uint32()),
          };
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.type = {
            $case: "string",
            string: StringRules.decode(reader, reader.uint32()),
          };
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.type = {
            $case: "bytes",
            bytes: BytesRules.decode(reader, reader.uint32()),
          };
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.type = {
            $case: "enum",
            enum: EnumRules.decode(reader, reader.uint32()),
          };
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.type = {
            $case: "repeated",
            repeated: RepeatedRules.decode(reader, reader.uint32()),
          };
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.type = {
            $case: "map",
            map: MapRules.decode(reader, reader.uint32()),
          };
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.type = {
            $case: "any",
            any: AnyRules.decode(reader, reader.uint32()),
          };
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.type = {
            $case: "duration",
            duration: DurationRules.decode(reader, reader.uint32()),
          };
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.type = {
            $case: "timestamp",
            timestamp: TimestampRules.decode(reader, reader.uint32()),
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseFloatRules(): FloatRules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    in: [],
    notIn: [],
    finite: false,
  };
}

export const FloatRules = {
  encode(
    message: FloatRules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(13).float(message.const);
    }
    switch (message.lessThan?.$case) {
      case "lt":
        writer.uint32(21).float(message.lessThan.lt);
        break;
      case "lte":
        writer.uint32(29).float(message.lessThan.lte);
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        writer.uint32(37).float(message.greaterThan.gt);
        break;
      case "gte":
        writer.uint32(45).float(message.greaterThan.gte);
        break;
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
    if (message.finite === true) {
      writer.uint32(64).bool(message.finite);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FloatRules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.const = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.lessThan = { $case: "lt", lt: reader.float() };
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.lessThan = { $case: "lte", lte: reader.float() };
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.greaterThan = { $case: "gt", gt: reader.float() };
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.greaterThan = { $case: "gte", gte: reader.float() };
          continue;
        case 6:
          if (tag === 53) {
            message.in.push(reader.float());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.float());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 61) {
            message.notIn.push(reader.float());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.float());
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.finite = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseDoubleRules(): DoubleRules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    in: [],
    notIn: [],
    finite: false,
  };
}

export const DoubleRules = {
  encode(
    message: DoubleRules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(9).double(message.const);
    }
    switch (message.lessThan?.$case) {
      case "lt":
        writer.uint32(17).double(message.lessThan.lt);
        break;
      case "lte":
        writer.uint32(25).double(message.lessThan.lte);
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        writer.uint32(33).double(message.greaterThan.gt);
        break;
      case "gte":
        writer.uint32(41).double(message.greaterThan.gte);
        break;
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
    if (message.finite === true) {
      writer.uint32(64).bool(message.finite);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleRules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.const = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.lessThan = { $case: "lt", lt: reader.double() };
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.lessThan = { $case: "lte", lte: reader.double() };
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.greaterThan = { $case: "gt", gt: reader.double() };
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.greaterThan = { $case: "gte", gte: reader.double() };
          continue;
        case 6:
          if (tag === 49) {
            message.in.push(reader.double());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.double());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 57) {
            message.notIn.push(reader.double());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.double());
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.finite = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseInt32Rules(): Int32Rules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    in: [],
    notIn: [],
  };
}

export const Int32Rules = {
  encode(
    message: Int32Rules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(8).int32(message.const);
    }
    switch (message.lessThan?.$case) {
      case "lt":
        writer.uint32(16).int32(message.lessThan.lt);
        break;
      case "lte":
        writer.uint32(24).int32(message.lessThan.lte);
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        writer.uint32(32).int32(message.greaterThan.gt);
        break;
      case "gte":
        writer.uint32(40).int32(message.greaterThan.gte);
        break;
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int32Rules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lessThan = { $case: "lt", lt: reader.int32() };
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lessThan = { $case: "lte", lte: reader.int32() };
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.greaterThan = { $case: "gt", gt: reader.int32() };
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.greaterThan = { $case: "gte", gte: reader.int32() };
          continue;
        case 6:
          if (tag === 48) {
            message.in.push(reader.int32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.int32());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 56) {
            message.notIn.push(reader.int32());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseInt64Rules(): Int64Rules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    in: [],
    notIn: [],
  };
}

export const Int64Rules = {
  encode(
    message: Int64Rules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(8).int64(message.const);
    }
    switch (message.lessThan?.$case) {
      case "lt":
        writer.uint32(16).int64(message.lessThan.lt);
        break;
      case "lte":
        writer.uint32(24).int64(message.lessThan.lte);
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        writer.uint32(32).int64(message.greaterThan.gt);
        break;
      case "gte":
        writer.uint32(40).int64(message.greaterThan.gte);
        break;
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int64Rules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lessThan = {
            $case: "lt",
            lt: longToString(reader.int64() as Long),
          };
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lessThan = {
            $case: "lte",
            lte: longToString(reader.int64() as Long),
          };
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.greaterThan = {
            $case: "gt",
            gt: longToString(reader.int64() as Long),
          };
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.greaterThan = {
            $case: "gte",
            gte: longToString(reader.int64() as Long),
          };
          continue;
        case 6:
          if (tag === 48) {
            message.in.push(longToString(reader.int64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToString(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag === 56) {
            message.notIn.push(longToString(reader.int64() as Long));

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToString(reader.int64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseUInt32Rules(): UInt32Rules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    in: [],
    notIn: [],
  };
}

export const UInt32Rules = {
  encode(
    message: UInt32Rules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(8).uint32(message.const);
    }
    switch (message.lessThan?.$case) {
      case "lt":
        writer.uint32(16).uint32(message.lessThan.lt);
        break;
      case "lte":
        writer.uint32(24).uint32(message.lessThan.lte);
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        writer.uint32(32).uint32(message.greaterThan.gt);
        break;
      case "gte":
        writer.uint32(40).uint32(message.greaterThan.gte);
        break;
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UInt32Rules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lessThan = { $case: "lt", lt: reader.uint32() };
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lessThan = { $case: "lte", lte: reader.uint32() };
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.greaterThan = { $case: "gt", gt: reader.uint32() };
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.greaterThan = { $case: "gte", gte: reader.uint32() };
          continue;
        case 6:
          if (tag === 48) {
            message.in.push(reader.uint32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.uint32());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 56) {
            message.notIn.push(reader.uint32());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseUInt64Rules(): UInt64Rules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    in: [],
    notIn: [],
  };
}

export const UInt64Rules = {
  encode(
    message: UInt64Rules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(8).uint64(message.const);
    }
    switch (message.lessThan?.$case) {
      case "lt":
        writer.uint32(16).uint64(message.lessThan.lt);
        break;
      case "lte":
        writer.uint32(24).uint64(message.lessThan.lte);
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        writer.uint32(32).uint64(message.greaterThan.gt);
        break;
      case "gte":
        writer.uint32(40).uint64(message.greaterThan.gte);
        break;
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UInt64Rules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lessThan = {
            $case: "lt",
            lt: longToString(reader.uint64() as Long),
          };
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lessThan = {
            $case: "lte",
            lte: longToString(reader.uint64() as Long),
          };
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.greaterThan = {
            $case: "gt",
            gt: longToString(reader.uint64() as Long),
          };
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.greaterThan = {
            $case: "gte",
            gte: longToString(reader.uint64() as Long),
          };
          continue;
        case 6:
          if (tag === 48) {
            message.in.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag === 56) {
            message.notIn.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseSInt32Rules(): SInt32Rules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    in: [],
    notIn: [],
  };
}

export const SInt32Rules = {
  encode(
    message: SInt32Rules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(8).sint32(message.const);
    }
    switch (message.lessThan?.$case) {
      case "lt":
        writer.uint32(16).sint32(message.lessThan.lt);
        break;
      case "lte":
        writer.uint32(24).sint32(message.lessThan.lte);
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        writer.uint32(32).sint32(message.greaterThan.gt);
        break;
      case "gte":
        writer.uint32(40).sint32(message.greaterThan.gte);
        break;
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SInt32Rules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSInt32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = reader.sint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lessThan = { $case: "lt", lt: reader.sint32() };
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lessThan = { $case: "lte", lte: reader.sint32() };
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.greaterThan = { $case: "gt", gt: reader.sint32() };
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.greaterThan = { $case: "gte", gte: reader.sint32() };
          continue;
        case 6:
          if (tag === 48) {
            message.in.push(reader.sint32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.sint32());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 56) {
            message.notIn.push(reader.sint32());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.sint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseSInt64Rules(): SInt64Rules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    in: [],
    notIn: [],
  };
}

export const SInt64Rules = {
  encode(
    message: SInt64Rules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(8).sint64(message.const);
    }
    switch (message.lessThan?.$case) {
      case "lt":
        writer.uint32(16).sint64(message.lessThan.lt);
        break;
      case "lte":
        writer.uint32(24).sint64(message.lessThan.lte);
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        writer.uint32(32).sint64(message.greaterThan.gt);
        break;
      case "gte":
        writer.uint32(40).sint64(message.greaterThan.gte);
        break;
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SInt64Rules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSInt64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = longToString(reader.sint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lessThan = {
            $case: "lt",
            lt: longToString(reader.sint64() as Long),
          };
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lessThan = {
            $case: "lte",
            lte: longToString(reader.sint64() as Long),
          };
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.greaterThan = {
            $case: "gt",
            gt: longToString(reader.sint64() as Long),
          };
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.greaterThan = {
            $case: "gte",
            gte: longToString(reader.sint64() as Long),
          };
          continue;
        case 6:
          if (tag === 48) {
            message.in.push(longToString(reader.sint64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToString(reader.sint64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag === 56) {
            message.notIn.push(longToString(reader.sint64() as Long));

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToString(reader.sint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseFixed32Rules(): Fixed32Rules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    in: [],
    notIn: [],
  };
}

export const Fixed32Rules = {
  encode(
    message: Fixed32Rules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(13).fixed32(message.const);
    }
    switch (message.lessThan?.$case) {
      case "lt":
        writer.uint32(21).fixed32(message.lessThan.lt);
        break;
      case "lte":
        writer.uint32(29).fixed32(message.lessThan.lte);
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        writer.uint32(37).fixed32(message.greaterThan.gt);
        break;
      case "gte":
        writer.uint32(45).fixed32(message.greaterThan.gte);
        break;
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fixed32Rules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixed32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.const = reader.fixed32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.lessThan = { $case: "lt", lt: reader.fixed32() };
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.lessThan = { $case: "lte", lte: reader.fixed32() };
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.greaterThan = { $case: "gt", gt: reader.fixed32() };
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.greaterThan = { $case: "gte", gte: reader.fixed32() };
          continue;
        case 6:
          if (tag === 53) {
            message.in.push(reader.fixed32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 61) {
            message.notIn.push(reader.fixed32());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.fixed32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseFixed64Rules(): Fixed64Rules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    in: [],
    notIn: [],
  };
}

export const Fixed64Rules = {
  encode(
    message: Fixed64Rules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(9).fixed64(message.const);
    }
    switch (message.lessThan?.$case) {
      case "lt":
        writer.uint32(17).fixed64(message.lessThan.lt);
        break;
      case "lte":
        writer.uint32(25).fixed64(message.lessThan.lte);
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        writer.uint32(33).fixed64(message.greaterThan.gt);
        break;
      case "gte":
        writer.uint32(41).fixed64(message.greaterThan.gte);
        break;
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fixed64Rules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixed64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.const = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.lessThan = {
            $case: "lt",
            lt: longToString(reader.fixed64() as Long),
          };
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.lessThan = {
            $case: "lte",
            lte: longToString(reader.fixed64() as Long),
          };
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.greaterThan = {
            $case: "gt",
            gt: longToString(reader.fixed64() as Long),
          };
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.greaterThan = {
            $case: "gte",
            gte: longToString(reader.fixed64() as Long),
          };
          continue;
        case 6:
          if (tag === 49) {
            message.in.push(longToString(reader.fixed64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToString(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag === 57) {
            message.notIn.push(longToString(reader.fixed64() as Long));

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToString(reader.fixed64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseSFixed32Rules(): SFixed32Rules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    in: [],
    notIn: [],
  };
}

export const SFixed32Rules = {
  encode(
    message: SFixed32Rules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(13).sfixed32(message.const);
    }
    switch (message.lessThan?.$case) {
      case "lt":
        writer.uint32(21).sfixed32(message.lessThan.lt);
        break;
      case "lte":
        writer.uint32(29).sfixed32(message.lessThan.lte);
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        writer.uint32(37).sfixed32(message.greaterThan.gt);
        break;
      case "gte":
        writer.uint32(45).sfixed32(message.greaterThan.gte);
        break;
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SFixed32Rules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSFixed32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.const = reader.sfixed32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.lessThan = { $case: "lt", lt: reader.sfixed32() };
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.lessThan = { $case: "lte", lte: reader.sfixed32() };
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.greaterThan = { $case: "gt", gt: reader.sfixed32() };
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.greaterThan = { $case: "gte", gte: reader.sfixed32() };
          continue;
        case 6:
          if (tag === 53) {
            message.in.push(reader.sfixed32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.sfixed32());
            }

            continue;
          }

          break;
        case 7:
          if (tag === 61) {
            message.notIn.push(reader.sfixed32());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.sfixed32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseSFixed64Rules(): SFixed64Rules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    in: [],
    notIn: [],
  };
}

export const SFixed64Rules = {
  encode(
    message: SFixed64Rules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(9).sfixed64(message.const);
    }
    switch (message.lessThan?.$case) {
      case "lt":
        writer.uint32(17).sfixed64(message.lessThan.lt);
        break;
      case "lte":
        writer.uint32(25).sfixed64(message.lessThan.lte);
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        writer.uint32(33).sfixed64(message.greaterThan.gt);
        break;
      case "gte":
        writer.uint32(41).sfixed64(message.greaterThan.gte);
        break;
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SFixed64Rules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSFixed64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.const = longToString(reader.sfixed64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.lessThan = {
            $case: "lt",
            lt: longToString(reader.sfixed64() as Long),
          };
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.lessThan = {
            $case: "lte",
            lte: longToString(reader.sfixed64() as Long),
          };
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.greaterThan = {
            $case: "gt",
            gt: longToString(reader.sfixed64() as Long),
          };
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.greaterThan = {
            $case: "gte",
            gte: longToString(reader.sfixed64() as Long),
          };
          continue;
        case 6:
          if (tag === 49) {
            message.in.push(longToString(reader.sfixed64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToString(reader.sfixed64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag === 57) {
            message.notIn.push(longToString(reader.sfixed64() as Long));

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToString(reader.sfixed64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseBoolRules(): BoolRules {
  return { const: undefined };
}

export const BoolRules = {
  encode(
    message: BoolRules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(8).bool(message.const);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoolRules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoolRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseStringRules(): StringRules {
  return {
    const: undefined,
    len: undefined,
    minLen: undefined,
    maxLen: undefined,
    lenBytes: undefined,
    minBytes: undefined,
    maxBytes: undefined,
    pattern: undefined,
    prefix: undefined,
    suffix: undefined,
    contains: undefined,
    notContains: undefined,
    in: [],
    notIn: [],
    wellKnown: undefined,
    strict: undefined,
  };
}

export const StringRules = {
  encode(
    message: StringRules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(10).string(message.const);
    }
    if (message.len !== undefined) {
      writer.uint32(152).uint64(message.len);
    }
    if (message.minLen !== undefined) {
      writer.uint32(16).uint64(message.minLen);
    }
    if (message.maxLen !== undefined) {
      writer.uint32(24).uint64(message.maxLen);
    }
    if (message.lenBytes !== undefined) {
      writer.uint32(160).uint64(message.lenBytes);
    }
    if (message.minBytes !== undefined) {
      writer.uint32(32).uint64(message.minBytes);
    }
    if (message.maxBytes !== undefined) {
      writer.uint32(40).uint64(message.maxBytes);
    }
    if (message.pattern !== undefined) {
      writer.uint32(50).string(message.pattern);
    }
    if (message.prefix !== undefined) {
      writer.uint32(58).string(message.prefix);
    }
    if (message.suffix !== undefined) {
      writer.uint32(66).string(message.suffix);
    }
    if (message.contains !== undefined) {
      writer.uint32(74).string(message.contains);
    }
    if (message.notContains !== undefined) {
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
      case "ipWithPrefixlen":
        writer.uint32(208).bool(message.wellKnown.ipWithPrefixlen);
        break;
      case "ipv4WithPrefixlen":
        writer.uint32(216).bool(message.wellKnown.ipv4WithPrefixlen);
        break;
      case "ipv6WithPrefixlen":
        writer.uint32(224).bool(message.wellKnown.ipv6WithPrefixlen);
        break;
      case "ipPrefix":
        writer.uint32(232).bool(message.wellKnown.ipPrefix);
        break;
      case "ipv4Prefix":
        writer.uint32(240).bool(message.wellKnown.ipv4Prefix);
        break;
      case "ipv6Prefix":
        writer.uint32(248).bool(message.wellKnown.ipv6Prefix);
        break;
      case "wellKnownRegex":
        writer.uint32(192).int32(message.wellKnown.wellKnownRegex);
        break;
    }
    if (message.strict !== undefined) {
      writer.uint32(200).bool(message.strict);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringRules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.const = reader.string();
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.len = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minLen = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxLen = longToString(reader.uint64() as Long);
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.lenBytes = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.minBytes = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.maxBytes = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.pattern = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.prefix = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.suffix = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.contains = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.notContains = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.in.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.notIn.push(reader.string());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.wellKnown = { $case: "email", email: reader.bool() };
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.wellKnown = { $case: "hostname", hostname: reader.bool() };
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.wellKnown = { $case: "ip", ip: reader.bool() };
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.wellKnown = { $case: "ipv4", ipv4: reader.bool() };
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.wellKnown = { $case: "ipv6", ipv6: reader.bool() };
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.wellKnown = { $case: "uri", uri: reader.bool() };
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.wellKnown = { $case: "uriRef", uriRef: reader.bool() };
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.wellKnown = { $case: "address", address: reader.bool() };
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.wellKnown = { $case: "uuid", uuid: reader.bool() };
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.wellKnown = {
            $case: "ipWithPrefixlen",
            ipWithPrefixlen: reader.bool(),
          };
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.wellKnown = {
            $case: "ipv4WithPrefixlen",
            ipv4WithPrefixlen: reader.bool(),
          };
          continue;
        case 28:
          if (tag !== 224) {
            break;
          }

          message.wellKnown = {
            $case: "ipv6WithPrefixlen",
            ipv6WithPrefixlen: reader.bool(),
          };
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.wellKnown = { $case: "ipPrefix", ipPrefix: reader.bool() };
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.wellKnown = {
            $case: "ipv4Prefix",
            ipv4Prefix: reader.bool(),
          };
          continue;
        case 31:
          if (tag !== 248) {
            break;
          }

          message.wellKnown = {
            $case: "ipv6Prefix",
            ipv6Prefix: reader.bool(),
          };
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.wellKnown = {
            $case: "wellKnownRegex",
            wellKnownRegex: reader.int32() as any,
          };
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.strict = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseBytesRules(): BytesRules {
  return {
    const: undefined,
    len: undefined,
    minLen: undefined,
    maxLen: undefined,
    pattern: undefined,
    prefix: undefined,
    suffix: undefined,
    contains: undefined,
    in: [],
    notIn: [],
    wellKnown: undefined,
  };
}

export const BytesRules = {
  encode(
    message: BytesRules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(10).bytes(message.const);
    }
    if (message.len !== undefined) {
      writer.uint32(104).uint64(message.len);
    }
    if (message.minLen !== undefined) {
      writer.uint32(16).uint64(message.minLen);
    }
    if (message.maxLen !== undefined) {
      writer.uint32(24).uint64(message.maxLen);
    }
    if (message.pattern !== undefined) {
      writer.uint32(34).string(message.pattern);
    }
    if (message.prefix !== undefined) {
      writer.uint32(42).bytes(message.prefix);
    }
    if (message.suffix !== undefined) {
      writer.uint32(50).bytes(message.suffix);
    }
    if (message.contains !== undefined) {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BytesRules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.const = reader.bytes();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.len = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minLen = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxLen = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pattern = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.prefix = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.suffix = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.contains = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.in.push(reader.bytes());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.notIn.push(reader.bytes());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.wellKnown = { $case: "ip", ip: reader.bool() };
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.wellKnown = { $case: "ipv4", ipv4: reader.bool() };
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.wellKnown = { $case: "ipv6", ipv6: reader.bool() };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseEnumRules(): EnumRules {
  return { const: undefined, definedOnly: undefined, in: [], notIn: [] };
}

export const EnumRules = {
  encode(
    message: EnumRules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      writer.uint32(8).int32(message.const);
    }
    if (message.definedOnly !== undefined) {
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
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.const = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.definedOnly = reader.bool();
          continue;
        case 3:
          if (tag === 24) {
            message.in.push(reader.int32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag === 32) {
            message.notIn.push(reader.int32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseRepeatedRules(): RepeatedRules {
  return {
    minItems: undefined,
    maxItems: undefined,
    unique: undefined,
    items: undefined,
  };
}

export const RepeatedRules = {
  encode(
    message: RepeatedRules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.minItems !== undefined) {
      writer.uint32(8).uint64(message.minItems);
    }
    if (message.maxItems !== undefined) {
      writer.uint32(16).uint64(message.maxItems);
    }
    if (message.unique !== undefined) {
      writer.uint32(24).bool(message.unique);
    }
    if (message.items !== undefined) {
      FieldConstraints.encode(message.items, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RepeatedRules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepeatedRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.minItems = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxItems = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.unique = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.items = FieldConstraints.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseMapRules(): MapRules {
  return {
    minPairs: undefined,
    maxPairs: undefined,
    keys: undefined,
    values: undefined,
  };
}

export const MapRules = {
  encode(
    message: MapRules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.minPairs !== undefined) {
      writer.uint32(8).uint64(message.minPairs);
    }
    if (message.maxPairs !== undefined) {
      writer.uint32(16).uint64(message.maxPairs);
    }
    if (message.keys !== undefined) {
      FieldConstraints.encode(message.keys, writer.uint32(34).fork()).ldelim();
    }
    if (message.values !== undefined) {
      FieldConstraints.encode(
        message.values,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapRules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.minPairs = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxPairs = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.keys = FieldConstraints.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.values = FieldConstraints.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseAnyRules(): AnyRules {
  return { in: [], notIn: [] };
}

export const AnyRules = {
  encode(
    message: AnyRules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.in) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.notIn) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnyRules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.in.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.notIn.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseDurationRules(): DurationRules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    in: [],
    notIn: [],
  };
}

export const DurationRules = {
  encode(
    message: DurationRules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      Duration.encode(message.const, writer.uint32(18).fork()).ldelim();
    }
    switch (message.lessThan?.$case) {
      case "lt":
        Duration.encode(message.lessThan.lt, writer.uint32(26).fork()).ldelim();
        break;
      case "lte":
        Duration.encode(
          message.lessThan.lte,
          writer.uint32(34).fork(),
        ).ldelim();
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        Duration.encode(
          message.greaterThan.gt,
          writer.uint32(42).fork(),
        ).ldelim();
        break;
      case "gte":
        Duration.encode(
          message.greaterThan.gte,
          writer.uint32(50).fork(),
        ).ldelim();
        break;
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
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDurationRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.const = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lessThan = {
            $case: "lt",
            lt: Duration.decode(reader, reader.uint32()),
          };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lessThan = {
            $case: "lte",
            lte: Duration.decode(reader, reader.uint32()),
          };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.greaterThan = {
            $case: "gt",
            gt: Duration.decode(reader, reader.uint32()),
          };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.greaterThan = {
            $case: "gte",
            gte: Duration.decode(reader, reader.uint32()),
          };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.in.push(Duration.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.notIn.push(Duration.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseTimestampRules(): TimestampRules {
  return {
    const: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    within: undefined,
  };
}

export const TimestampRules = {
  encode(
    message: TimestampRules,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.const !== undefined) {
      Timestamp.encode(
        toTimestamp(message.const),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    switch (message.lessThan?.$case) {
      case "lt":
        Timestamp.encode(
          toTimestamp(message.lessThan.lt),
          writer.uint32(26).fork(),
        ).ldelim();
        break;
      case "lte":
        Timestamp.encode(
          toTimestamp(message.lessThan.lte),
          writer.uint32(34).fork(),
        ).ldelim();
        break;
      case "ltNow":
        writer.uint32(56).bool(message.lessThan.ltNow);
        break;
    }
    switch (message.greaterThan?.$case) {
      case "gt":
        Timestamp.encode(
          toTimestamp(message.greaterThan.gt),
          writer.uint32(42).fork(),
        ).ldelim();
        break;
      case "gte":
        Timestamp.encode(
          toTimestamp(message.greaterThan.gte),
          writer.uint32(50).fork(),
        ).ldelim();
        break;
      case "gtNow":
        writer.uint32(64).bool(message.greaterThan.gtNow);
        break;
    }
    if (message.within !== undefined) {
      Duration.encode(message.within, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimestampRules {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.const = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lessThan = {
            $case: "lt",
            lt: fromTimestamp(Timestamp.decode(reader, reader.uint32())),
          };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lessThan = {
            $case: "lte",
            lte: fromTimestamp(Timestamp.decode(reader, reader.uint32())),
          };
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.lessThan = { $case: "ltNow", ltNow: reader.bool() };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.greaterThan = {
            $case: "gt",
            gt: fromTimestamp(Timestamp.decode(reader, reader.uint32())),
          };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.greaterThan = {
            $case: "gte",
            gte: fromTimestamp(Timestamp.decode(reader, reader.uint32())),
          };
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.greaterThan = { $case: "gtNow", gtNow: reader.bool() };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.within = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
  let millis = (globalThis.Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
