/* eslint-disable */

export const protobufPackage = "google.protobuf";

export interface Duration {
  seconds: string;
  nanos: number;
}

export const Duration = {
  fromJSON(object: any): Duration {
    return {
      seconds: isSet(object.seconds) ? String(object.seconds) : "0",
      nanos: isSet(object.nanos) ? Number(object.nanos) : 0,
    };
  },

  toJSON(message: Duration): unknown {
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
