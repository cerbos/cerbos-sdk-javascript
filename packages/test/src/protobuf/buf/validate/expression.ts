/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "buf.validate";

export interface Constraint {
  id: string;
  message: string;
  expression: string;
}

function createBaseConstraint(): Constraint {
  return { id: "", message: "", expression: "" };
}

export const Constraint = {
  encode(
    message: Constraint,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.expression !== "") {
      writer.uint32(26).string(message.expression);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Constraint {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstraint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.expression = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Constraint {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      expression: isSet(object.expression)
        ? globalThis.String(object.expression)
        : "",
    };
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
