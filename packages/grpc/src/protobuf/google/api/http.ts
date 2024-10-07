// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: google/api/http.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "google.api";

export interface HttpRule {
  selector: string;
  pattern?:
    | { $case: "get"; get: string }
    | { $case: "put"; put: string }
    | { $case: "post"; post: string }
    | { $case: "delete"; delete: string }
    | { $case: "patch"; patch: string }
    | { $case: "custom"; custom: CustomHttpPattern }
    | undefined;
  body: string;
  responseBody: string;
  additionalBindings: HttpRule[];
}

export interface CustomHttpPattern {
  kind: string;
  path: string;
}

function createBaseHttpRule(): HttpRule {
  return {
    selector: "",
    pattern: undefined,
    body: "",
    responseBody: "",
    additionalBindings: [],
  };
}

export const HttpRule: MessageFns<HttpRule> = {
  encode(
    message: HttpRule,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    switch (message.pattern?.$case) {
      case "get":
        writer.uint32(18).string(message.pattern.get);
        break;
      case "put":
        writer.uint32(26).string(message.pattern.put);
        break;
      case "post":
        writer.uint32(34).string(message.pattern.post);
        break;
      case "delete":
        writer.uint32(42).string(message.pattern.delete);
        break;
      case "patch":
        writer.uint32(50).string(message.pattern.patch);
        break;
      case "custom":
        CustomHttpPattern.encode(
          message.pattern.custom,
          writer.uint32(66).fork(),
        ).join();
        break;
    }
    if (message.body !== "") {
      writer.uint32(58).string(message.body);
    }
    if (message.responseBody !== "") {
      writer.uint32(98).string(message.responseBody);
    }
    for (const v of message.additionalBindings) {
      HttpRule.encode(v!, writer.uint32(90).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HttpRule {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.selector = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.pattern = { $case: "get", get: reader.string() };
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.pattern = { $case: "put", put: reader.string() };
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.pattern = { $case: "post", post: reader.string() };
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.pattern = { $case: "delete", delete: reader.string() };
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.pattern = { $case: "patch", patch: reader.string() };
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.pattern = {
            $case: "custom",
            custom: CustomHttpPattern.decode(reader, reader.uint32()),
          };
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.body = reader.string();
          continue;
        }
        case 12: {
          if (tag !== 98) {
            break;
          }

          message.responseBody = reader.string();
          continue;
        }
        case 11: {
          if (tag !== 90) {
            break;
          }

          message.additionalBindings.push(
            HttpRule.decode(reader, reader.uint32()),
          );
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

function createBaseCustomHttpPattern(): CustomHttpPattern {
  return { kind: "", path: "" };
}

export const CustomHttpPattern: MessageFns<CustomHttpPattern> = {
  encode(
    message: CustomHttpPattern,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomHttpPattern {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomHttpPattern();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.kind = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
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
