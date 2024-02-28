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
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
