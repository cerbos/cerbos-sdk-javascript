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
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
