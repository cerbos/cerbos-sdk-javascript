// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: google/protobuf/duration.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "google.protobuf";

export interface Duration {
  seconds: string;
  nanos: number;
}

function createBaseDuration(): Duration {
  return { seconds: "0", nanos: 0 };
}

export const Duration: MessageFns<Duration> = {
  encode(
    message: Duration,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.seconds !== "0") {
      writer.uint32(8).int64(message.seconds);
    }
    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Duration {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.seconds = reader.int64().toString();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.nanos = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
