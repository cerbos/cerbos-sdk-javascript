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
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Effect"
      );
  }
}

export function effectToJSON(object: Effect): string {
  switch (object) {
    case Effect.EFFECT_UNSPECIFIED:
      return "EFFECT_UNSPECIFIED";
    case Effect.EFFECT_ALLOW:
      return "EFFECT_ALLOW";
    case Effect.EFFECT_DENY:
      return "EFFECT_DENY";
    case Effect.EFFECT_NO_MATCH:
      return "EFFECT_NO_MATCH";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Effect"
      );
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();
