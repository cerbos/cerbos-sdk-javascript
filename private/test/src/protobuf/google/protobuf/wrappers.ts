// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: google/protobuf/wrappers.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "google.protobuf";

export interface UInt64Value {
  value: string;
}

function createBaseUInt64Value(): UInt64Value {
  return { value: "0" };
}

export const UInt64Value = {
  encode(
    message: UInt64Value,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== "0") {
      writer.uint32(8).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UInt64Value {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt64Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UInt64Value {
    return {
      value: isSet(object.value) ? globalThis.String(object.value) : "0",
    };
  },

  toJSON(message: UInt64Value): unknown {
    const obj: any = {};
    if (message.value !== "0") {
      obj.value = message.value;
    }
    return obj;
  },
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
