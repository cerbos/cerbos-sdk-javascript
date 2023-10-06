/* eslint-disable */

export const protobufPackage = "google.protobuf";

export interface Timestamp {
  seconds: string;
  nanos: number;
}

export const Timestamp = {
  fromJSON(object: any): Timestamp {
    return {
      seconds: isSet(object.seconds) ? globalThis.String(object.seconds) : "0",
      nanos: isSet(object.nanos) ? globalThis.Number(object.nanos) : 0,
    };
  },

  toJSON(message: Timestamp): unknown {
    const obj: any = {};
    if (message.seconds !== "0") {
      obj.seconds = message.seconds;
    }
    if (message.nanos !== 0) {
      obj.nanos = Math.round(message.nanos);
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
