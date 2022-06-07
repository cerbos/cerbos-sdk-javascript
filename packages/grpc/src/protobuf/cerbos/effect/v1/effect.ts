/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "cerbos.effect.v1";

export enum Effect {
  EFFECT_UNSPECIFIED = 0,
  EFFECT_ALLOW = 1,
  EFFECT_DENY = 2,
  EFFECT_NO_MATCH = 3,
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
