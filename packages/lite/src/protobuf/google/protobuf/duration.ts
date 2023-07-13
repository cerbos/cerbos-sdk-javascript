/* eslint-disable */

export const protobufPackage = "google.protobuf";

export interface Duration {
  seconds: number;
  nanos: number;
}

export const Duration = {
  fromJSON(object: any): Duration {
    return {
      seconds: isSet(object.seconds) ? Number(object.seconds) : 0,
      nanos: isSet(object.nanos) ? Number(object.nanos) : 0,
    };
  },

  toJSON(message: Duration): unknown {
    const obj: any = {};
    message.seconds !== undefined &&
      (obj.seconds = Math.round(message.seconds));
    message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
