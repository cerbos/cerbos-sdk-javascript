/* eslint-disable */

export const protobufPackage = "google.protobuf";

export interface Duration {
  seconds: number;
  nanos: number;
}

export const Duration = {
  fromJSON(object: any): Duration {
    return {
      seconds: isSet(object.seconds) ? globalThis.Number(object.seconds) : 0,
      nanos: isSet(object.nanos) ? globalThis.Number(object.nanos) : 0,
    };
  },

  toJSON(message: Duration): unknown {
    const obj: any = {};
    if (message.seconds !== 0) {
      obj.seconds = Math.round(message.seconds);
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
