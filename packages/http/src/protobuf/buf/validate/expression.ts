/* eslint-disable */

export const protobufPackage = "buf.validate";

export interface Constraint {
  id: string;
  message: string;
  expression: string;
}

export const Constraint = {
  fromJSON(object: any): Constraint {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      expression: isSet(object.expression)
        ? globalThis.String(object.expression)
        : "",
    };
  },

  toJSON(message: Constraint): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.expression !== "") {
      obj.expression = message.expression;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
