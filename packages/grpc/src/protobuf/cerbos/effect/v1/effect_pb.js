// source: cerbos/effect/v1/effect.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.cerbos.effect.v1.Effect', null, global);
/**
 * @enum {number}
 */
proto.cerbos.effect.v1.Effect = {
  EFFECT_UNSPECIFIED: 0,
  EFFECT_ALLOW: 1,
  EFFECT_DENY: 2,
  EFFECT_NO_MATCH: 3
};

goog.object.extend(exports, proto.cerbos.effect.v1);
