/* eslint-disable */

export const protobufPackage = "cerbos.effect.v1";

export enum Effect {
  EFFECT_UNSPECIFIED = 0,
  EFFECT_ALLOW = 1,
  EFFECT_DENY = 2,
  EFFECT_NO_MATCH = 3,
}

export function effectFromJSON(object: any): Effect {
  switch (object) {
    case 0:
    case "EFFECT_UNSPECIFIED":
      return Effect.EFFECT_UNSPECIFIED;
    case 1:
    case "EFFECT_ALLOW":
      return Effect.EFFECT_ALLOW;
    case 2:
    case "EFFECT_DENY":
      return Effect.EFFECT_DENY;
    case 3:
    case "EFFECT_NO_MATCH":
      return Effect.EFFECT_NO_MATCH;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum Effect",
      );
  }
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();
