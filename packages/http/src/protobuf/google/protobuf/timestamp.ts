/* eslint-disable */

export const protobufPackage = "google.protobuf";

export interface Timestamp {
  seconds: string;
  nanos: number;
}

export const Timestamp = {
  fromJSON(object: any): Timestamp {
    return {
      seconds: isSet(object.seconds) ? String(object.seconds) : "0",
      nanos: isSet(object.nanos) ? Number(object.nanos) : 0,
    };
  },

  toJSON(message: Timestamp): unknown {
    const obj: any = {};
    message.seconds !== undefined && (obj.seconds = message.seconds);
    message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
