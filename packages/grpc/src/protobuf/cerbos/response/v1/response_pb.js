// source: cerbos/response/v1/response.proto
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

var cerbos_audit_v1_audit_pb = require('../../../cerbos/audit/v1/audit_pb.js');
goog.object.extend(proto, cerbos_audit_v1_audit_pb);
var cerbos_effect_v1_effect_pb = require('../../../cerbos/effect/v1/effect_pb.js');
goog.object.extend(proto, cerbos_effect_v1_effect_pb);
var cerbos_policy_v1_policy_pb = require('../../../cerbos/policy/v1/policy_pb.js');
goog.object.extend(proto, cerbos_policy_v1_policy_pb);
var cerbos_schema_v1_schema_pb = require('../../../cerbos/schema/v1/schema_pb.js');
goog.object.extend(proto, cerbos_schema_v1_schema_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
goog.exportSymbol('proto.cerbos.response.v1.AddOrUpdatePolicyResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.AddOrUpdateSchemaResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.CheckResourceBatchResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap', null, global);
goog.exportSymbol('proto.cerbos.response.v1.CheckResourceSetResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap', null, global);
goog.exportSymbol('proto.cerbos.response.v1.CheckResourceSetResponse.Meta', null, global);
goog.exportSymbol('proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta', null, global);
goog.exportSymbol('proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta', null, global);
goog.exportSymbol('proto.cerbos.response.v1.CheckResourcesResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry', null, global);
goog.exportSymbol('proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta', null, global);
goog.exportSymbol('proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta', null, global);
goog.exportSymbol('proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource', null, global);
goog.exportSymbol('proto.cerbos.response.v1.DeleteSchemaResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.GetPolicyResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.GetSchemaResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.ListAuditLogEntriesResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.ListAuditLogEntriesResponse.EntryCase', null, global);
goog.exportSymbol('proto.cerbos.response.v1.ListPoliciesResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.ListSchemasResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlanResourcesResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlanResourcesResponse.Expression', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.NodeCase', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlanResourcesResponse.Filter', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlanResourcesResponse.Filter.Kind', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlanResourcesResponse.Meta', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlaygroundEvaluateResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlaygroundEvaluateResponse.OutcomeCase', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlaygroundFailure', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlaygroundFailure.Error', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlaygroundProxyResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlaygroundProxyResponse.OutcomeCase', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlaygroundTestResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlaygroundTestResponse.OutcomeCase', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlaygroundTestResponse.TestResults', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlaygroundValidateResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.PlaygroundValidateResponse.OutcomeCase', null, global);
goog.exportSymbol('proto.cerbos.response.v1.ReloadStoreResponse', null, global);
goog.exportSymbol('proto.cerbos.response.v1.ServerInfoResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlanResourcesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.PlanResourcesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlanResourcesResponse.displayName = 'proto.cerbos.response.v1.PlanResourcesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.PlanResourcesResponse.Expression.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.PlanResourcesResponse.Expression, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlanResourcesResponse.Expression.displayName = 'proto.cerbos.response.v1.PlanResourcesResponse.Expression';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.oneofGroups_);
};
goog.inherits(proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.displayName = 'proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlanResourcesResponse.Filter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.PlanResourcesResponse.Filter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlanResourcesResponse.Filter.displayName = 'proto.cerbos.response.v1.PlanResourcesResponse.Filter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlanResourcesResponse.Meta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.PlanResourcesResponse.Meta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlanResourcesResponse.Meta.displayName = 'proto.cerbos.response.v1.PlanResourcesResponse.Meta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.CheckResourceSetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.CheckResourceSetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.CheckResourceSetResponse.displayName = 'proto.cerbos.response.v1.CheckResourceSetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.displayName = 'proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.CheckResourceSetResponse.Meta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.CheckResourceSetResponse.Meta.displayName = 'proto.cerbos.response.v1.CheckResourceSetResponse.Meta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.displayName = 'proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.displayName = 'proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.CheckResourceBatchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.CheckResourceBatchResponse.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.CheckResourceBatchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.CheckResourceBatchResponse.displayName = 'proto.cerbos.response.v1.CheckResourceBatchResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.displayName = 'proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.CheckResourcesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.CheckResourcesResponse.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.CheckResourcesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.CheckResourcesResponse.displayName = 'proto.cerbos.response.v1.CheckResourcesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.displayName = 'proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.displayName = 'proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.displayName = 'proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.displayName = 'proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlaygroundFailure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.PlaygroundFailure.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.PlaygroundFailure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlaygroundFailure.displayName = 'proto.cerbos.response.v1.PlaygroundFailure';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlaygroundFailure.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.PlaygroundFailure.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlaygroundFailure.Error.displayName = 'proto.cerbos.response.v1.PlaygroundFailure.Error';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlaygroundValidateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cerbos.response.v1.PlaygroundValidateResponse.oneofGroups_);
};
goog.inherits(proto.cerbos.response.v1.PlaygroundValidateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlaygroundValidateResponse.displayName = 'proto.cerbos.response.v1.PlaygroundValidateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlaygroundTestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cerbos.response.v1.PlaygroundTestResponse.oneofGroups_);
};
goog.inherits(proto.cerbos.response.v1.PlaygroundTestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlaygroundTestResponse.displayName = 'proto.cerbos.response.v1.PlaygroundTestResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlaygroundTestResponse.TestResults = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.PlaygroundTestResponse.TestResults, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.displayName = 'proto.cerbos.response.v1.PlaygroundTestResponse.TestResults';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cerbos.response.v1.PlaygroundEvaluateResponse.oneofGroups_);
};
goog.inherits(proto.cerbos.response.v1.PlaygroundEvaluateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlaygroundEvaluateResponse.displayName = 'proto.cerbos.response.v1.PlaygroundEvaluateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.displayName = 'proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.displayName = 'proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.PlaygroundProxyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cerbos.response.v1.PlaygroundProxyResponse.oneofGroups_);
};
goog.inherits(proto.cerbos.response.v1.PlaygroundProxyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.PlaygroundProxyResponse.displayName = 'proto.cerbos.response.v1.PlaygroundProxyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.AddOrUpdatePolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.AddOrUpdatePolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.AddOrUpdatePolicyResponse.displayName = 'proto.cerbos.response.v1.AddOrUpdatePolicyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cerbos.response.v1.ListAuditLogEntriesResponse.oneofGroups_);
};
goog.inherits(proto.cerbos.response.v1.ListAuditLogEntriesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.ListAuditLogEntriesResponse.displayName = 'proto.cerbos.response.v1.ListAuditLogEntriesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.ServerInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.ServerInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.ServerInfoResponse.displayName = 'proto.cerbos.response.v1.ServerInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.ListPoliciesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.ListPoliciesResponse.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.ListPoliciesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.ListPoliciesResponse.displayName = 'proto.cerbos.response.v1.ListPoliciesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.GetPolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.GetPolicyResponse.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.GetPolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.GetPolicyResponse.displayName = 'proto.cerbos.response.v1.GetPolicyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.AddOrUpdateSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.AddOrUpdateSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.AddOrUpdateSchemaResponse.displayName = 'proto.cerbos.response.v1.AddOrUpdateSchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.ListSchemasResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.ListSchemasResponse.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.ListSchemasResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.ListSchemasResponse.displayName = 'proto.cerbos.response.v1.ListSchemasResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.GetSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cerbos.response.v1.GetSchemaResponse.repeatedFields_, null);
};
goog.inherits(proto.cerbos.response.v1.GetSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.GetSchemaResponse.displayName = 'proto.cerbos.response.v1.GetSchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.DeleteSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.DeleteSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.DeleteSchemaResponse.displayName = 'proto.cerbos.response.v1.DeleteSchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cerbos.response.v1.ReloadStoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cerbos.response.v1.ReloadStoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cerbos.response.v1.ReloadStoreResponse.displayName = 'proto.cerbos.response.v1.ReloadStoreResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlanResourcesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlanResourcesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    action: jspb.Message.getFieldWithDefault(msg, 2, ""),
    resourceKind: jspb.Message.getFieldWithDefault(msg, 3, ""),
    policyVersion: jspb.Message.getFieldWithDefault(msg, 4, ""),
    filter: (f = msg.getFilter()) && proto.cerbos.response.v1.PlanResourcesResponse.Filter.toObject(includeInstance, f),
    meta: (f = msg.getMeta()) && proto.cerbos.response.v1.PlanResourcesResponse.Meta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse}
 */
proto.cerbos.response.v1.PlanResourcesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlanResourcesResponse;
  return proto.cerbos.response.v1.PlanResourcesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse}
 */
proto.cerbos.response.v1.PlanResourcesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceKind(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyVersion(value);
      break;
    case 5:
      var value = new proto.cerbos.response.v1.PlanResourcesResponse.Filter;
      reader.readMessage(value,proto.cerbos.response.v1.PlanResourcesResponse.Filter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 6:
      var value = new proto.cerbos.response.v1.PlanResourcesResponse.Meta;
      reader.readMessage(value,proto.cerbos.response.v1.PlanResourcesResponse.Meta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlanResourcesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlanResourcesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResourceKind();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPolicyVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cerbos.response.v1.PlanResourcesResponse.Filter.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cerbos.response.v1.PlanResourcesResponse.Meta.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlanResourcesResponse.Expression.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Expression} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.toObject = function(includeInstance, msg) {
  var f, obj = {
    operator: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operandsList: jspb.Message.toObjectList(msg.getOperandsList(),
    proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlanResourcesResponse.Expression;
  return proto.cerbos.response.v1.PlanResourcesResponse.Expression.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Expression} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 2:
      var value = new proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand;
      reader.readMessage(value,proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.deserializeBinaryFromReader);
      msg.addOperands(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlanResourcesResponse.Expression.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Expression} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.NodeCase = {
  NODE_NOT_SET: 0,
  VALUE: 1,
  EXPRESSION: 2,
  VARIABLE: 3
};

/**
 * @return {proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.NodeCase}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.getNodeCase = function() {
  return /** @type {proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.NodeCase} */(jspb.Message.computeOneofCase(this, proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f),
    expression: (f = msg.getExpression()) && proto.cerbos.response.v1.PlanResourcesResponse.Expression.toObject(includeInstance, f),
    variable: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand;
  return proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 2:
      var value = new proto.cerbos.response.v1.PlanResourcesResponse.Expression;
      reader.readMessage(value,proto.cerbos.response.v1.PlanResourcesResponse.Expression.deserializeBinaryFromReader);
      msg.setExpression(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getExpression();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cerbos.response.v1.PlanResourcesResponse.Expression.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Value value = 1;
 * @return {?proto.google.protobuf.Value}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.getValue = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 1));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand} returns this
*/
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.setValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Expression expression = 2;
 * @return {?proto.cerbos.response.v1.PlanResourcesResponse.Expression}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.getExpression = function() {
  return /** @type{?proto.cerbos.response.v1.PlanResourcesResponse.Expression} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.PlanResourcesResponse.Expression, 2));
};


/**
 * @param {?proto.cerbos.response.v1.PlanResourcesResponse.Expression|undefined} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand} returns this
*/
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.setExpression = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.clearExpression = function() {
  return this.setExpression(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.hasExpression = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string variable = 3;
 * @return {string}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.getVariable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.setVariable = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.clearVariable = function() {
  return jspb.Message.setOneofField(this, 3, proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.prototype.hasVariable = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string operator = 1;
 * @return {string}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Operand operands = 2;
 * @return {!Array<!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand>}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.prototype.getOperandsList = function() {
  return /** @type{!Array<!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand, 2));
};


/**
 * @param {!Array<!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand>} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression} returns this
*/
proto.cerbos.response.v1.PlanResourcesResponse.Expression.prototype.setOperandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.prototype.addOperands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Expression} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.Expression.prototype.clearOperandsList = function() {
  return this.setOperandsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Filter.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlanResourcesResponse.Filter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Filter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlanResourcesResponse.Filter.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    condition: (f = msg.getCondition()) && proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Filter}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Filter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlanResourcesResponse.Filter;
  return proto.cerbos.response.v1.PlanResourcesResponse.Filter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Filter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Filter}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Filter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cerbos.response.v1.PlanResourcesResponse.Filter.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = new proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand;
      reader.readMessage(value,proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.deserializeBinaryFromReader);
      msg.setCondition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Filter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlanResourcesResponse.Filter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Filter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlanResourcesResponse.Filter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCondition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Filter.Kind = {
  KIND_UNSPECIFIED: 0,
  KIND_ALWAYS_ALLOWED: 1,
  KIND_ALWAYS_DENIED: 2,
  KIND_CONDITIONAL: 3
};

/**
 * optional Kind kind = 1;
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Filter.Kind}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Filter.prototype.getKind = function() {
  return /** @type {!proto.cerbos.response.v1.PlanResourcesResponse.Filter.Kind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Filter.Kind} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Filter} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.Filter.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Expression.Operand condition = 2;
 * @return {?proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Filter.prototype.getCondition = function() {
  return /** @type{?proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand, 2));
};


/**
 * @param {?proto.cerbos.response.v1.PlanResourcesResponse.Expression.Operand|undefined} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Filter} returns this
*/
proto.cerbos.response.v1.PlanResourcesResponse.Filter.prototype.setCondition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Filter} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.Filter.prototype.clearCondition = function() {
  return this.setCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Filter.prototype.hasCondition = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Meta.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlanResourcesResponse.Meta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Meta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlanResourcesResponse.Meta.toObject = function(includeInstance, msg) {
  var f, obj = {
    filterDebug: jspb.Message.getFieldWithDefault(msg, 1, ""),
    matchedScope: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Meta}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Meta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlanResourcesResponse.Meta;
  return proto.cerbos.response.v1.PlanResourcesResponse.Meta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Meta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Meta}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Meta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilterDebug(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchedScope(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Meta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlanResourcesResponse.Meta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlanResourcesResponse.Meta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlanResourcesResponse.Meta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilterDebug();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMatchedScope();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string filter_debug = 1;
 * @return {string}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Meta.prototype.getFilterDebug = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Meta} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.Meta.prototype.setFilterDebug = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string matched_scope = 2;
 * @return {string}
 */
proto.cerbos.response.v1.PlanResourcesResponse.Meta.prototype.getMatchedScope = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse.Meta} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.Meta.prototype.setMatchedScope = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string action = 2;
 * @return {string}
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string resource_kind = 3;
 * @return {string}
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.getResourceKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.setResourceKind = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string policy_version = 4;
 * @return {string}
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.getPolicyVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.setPolicyVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Filter filter = 5;
 * @return {?proto.cerbos.response.v1.PlanResourcesResponse.Filter}
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.getFilter = function() {
  return /** @type{?proto.cerbos.response.v1.PlanResourcesResponse.Filter} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.PlanResourcesResponse.Filter, 5));
};


/**
 * @param {?proto.cerbos.response.v1.PlanResourcesResponse.Filter|undefined} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse} returns this
*/
proto.cerbos.response.v1.PlanResourcesResponse.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Meta meta = 6;
 * @return {?proto.cerbos.response.v1.PlanResourcesResponse.Meta}
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.getMeta = function() {
  return /** @type{?proto.cerbos.response.v1.PlanResourcesResponse.Meta} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.PlanResourcesResponse.Meta, 6));
};


/**
 * @param {?proto.cerbos.response.v1.PlanResourcesResponse.Meta|undefined} value
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse} returns this
*/
proto.cerbos.response.v1.PlanResourcesResponse.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlanResourcesResponse} returns this
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlanResourcesResponse.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.CheckResourceSetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceSetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resourceInstancesMap: (f = msg.getResourceInstancesMap()) ? f.toObject(includeInstance, proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.toObject) : [],
    meta: (f = msg.getMeta()) && proto.cerbos.response.v1.CheckResourceSetResponse.Meta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.CheckResourceSetResponse;
  return proto.cerbos.response.v1.CheckResourceSetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = msg.getResourceInstancesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.deserializeBinaryFromReader, "", new proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap());
         });
      break;
    case 3:
      var value = new proto.cerbos.response.v1.CheckResourceSetResponse.Meta;
      reader.readMessage(value,proto.cerbos.response.v1.CheckResourceSetResponse.Meta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.CheckResourceSetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceSetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResourceInstancesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.serializeBinaryToWriter);
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cerbos.response.v1.CheckResourceSetResponse.Meta.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsMap: (f = msg.getActionsMap()) ? f.toObject(includeInstance, undefined) : [],
    validationErrorsList: jspb.Message.toObjectList(msg.getValidationErrorsList(),
    cerbos_schema_v1_schema_pb.ValidationError.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap;
  return proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getActionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readEnum, null, "", 0);
         });
      break;
    case 2:
      var value = new cerbos_schema_v1_schema_pb.ValidationError;
      reader.readMessage(value,cerbos_schema_v1_schema_pb.ValidationError.deserializeBinaryFromReader);
      msg.addValidationErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeEnum);
  }
  f = message.getValidationErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      cerbos_schema_v1_schema_pb.ValidationError.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, cerbos.effect.v1.Effect> actions = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cerbos.effect.v1.Effect>}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.prototype.getActionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cerbos.effect.v1.Effect>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap} returns this
 */
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.prototype.clearActionsMap = function() {
  this.getActionsMap().clear();
  return this;};


/**
 * repeated cerbos.schema.v1.ValidationError validation_errors = 2;
 * @return {!Array<!proto.cerbos.schema.v1.ValidationError>}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.prototype.getValidationErrorsList = function() {
  return /** @type{!Array<!proto.cerbos.schema.v1.ValidationError>} */ (
    jspb.Message.getRepeatedWrapperField(this, cerbos_schema_v1_schema_pb.ValidationError, 2));
};


/**
 * @param {!Array<!proto.cerbos.schema.v1.ValidationError>} value
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap} returns this
*/
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.prototype.setValidationErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cerbos.schema.v1.ValidationError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cerbos.schema.v1.ValidationError}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.prototype.addValidationErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cerbos.schema.v1.ValidationError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap} returns this
 */
proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.prototype.clearValidationErrorsList = function() {
  return this.setValidationErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.CheckResourceSetResponse.Meta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceInstancesMap: (f = msg.getResourceInstancesMap()) ? f.toObject(includeInstance, proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.CheckResourceSetResponse.Meta;
  return proto.cerbos.response.v1.CheckResourceSetResponse.Meta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getResourceInstancesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.deserializeBinaryFromReader, "", new proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.CheckResourceSetResponse.Meta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceInstancesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.serializeBinaryToWriter);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchedPolicy: jspb.Message.getFieldWithDefault(msg, 1, ""),
    matchedScope: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta;
  return proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchedPolicy(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchedScope(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchedPolicy();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMatchedScope();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string matched_policy = 1;
 * @return {string}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.prototype.getMatchedPolicy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta} returns this
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.prototype.setMatchedPolicy = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string matched_scope = 2;
 * @return {string}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.prototype.getMatchedScope = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta} returns this
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.prototype.setMatchedScope = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsMap: (f = msg.getActionsMap()) ? f.toObject(includeInstance, proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.toObject) : [],
    effectiveDerivedRolesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta;
  return proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getActionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.deserializeBinaryFromReader, "", new proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta());
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addEffectiveDerivedRoles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.serializeBinaryToWriter);
  }
  f = message.getEffectiveDerivedRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * map<string, EffectMeta> actions = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta>}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.prototype.getActionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta} returns this
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.prototype.clearActionsMap = function() {
  this.getActionsMap().clear();
  return this;};


/**
 * repeated string effective_derived_roles = 2;
 * @return {!Array<string>}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.prototype.getEffectiveDerivedRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta} returns this
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.prototype.setEffectiveDerivedRolesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta} returns this
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.prototype.addEffectiveDerivedRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta} returns this
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.prototype.clearEffectiveDerivedRolesList = function() {
  return this.setEffectiveDerivedRolesList([]);
};


/**
 * map<string, ActionMeta> resource_instances = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta>}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.prototype.getResourceInstancesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse.Meta} returns this
 */
proto.cerbos.response.v1.CheckResourceSetResponse.Meta.prototype.clearResourceInstancesMap = function() {
  this.getResourceInstancesMap().clear();
  return this;};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse} returns this
 */
proto.cerbos.response.v1.CheckResourceSetResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, ActionEffectMap> resource_instances = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap>}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.prototype.getResourceInstancesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse} returns this
 */
proto.cerbos.response.v1.CheckResourceSetResponse.prototype.clearResourceInstancesMap = function() {
  this.getResourceInstancesMap().clear();
  return this;};


/**
 * optional Meta meta = 3;
 * @return {?proto.cerbos.response.v1.CheckResourceSetResponse.Meta}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.prototype.getMeta = function() {
  return /** @type{?proto.cerbos.response.v1.CheckResourceSetResponse.Meta} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.CheckResourceSetResponse.Meta, 3));
};


/**
 * @param {?proto.cerbos.response.v1.CheckResourceSetResponse.Meta|undefined} value
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse} returns this
*/
proto.cerbos.response.v1.CheckResourceSetResponse.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.CheckResourceSetResponse} returns this
 */
proto.cerbos.response.v1.CheckResourceSetResponse.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.CheckResourceSetResponse.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.CheckResourceBatchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.CheckResourceBatchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.CheckResourceBatchResponse}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.CheckResourceBatchResponse;
  return proto.cerbos.response.v1.CheckResourceBatchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.CheckResourceBatchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.CheckResourceBatchResponse}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = new proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap;
      reader.readMessage(value,proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.CheckResourceBatchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.CheckResourceBatchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    actionsMap: (f = msg.getActionsMap()) ? f.toObject(includeInstance, undefined) : [],
    validationErrorsList: jspb.Message.toObjectList(msg.getValidationErrorsList(),
    cerbos_schema_v1_schema_pb.ValidationError.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap;
  return proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceId(value);
      break;
    case 2:
      var value = msg.getActionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readEnum, null, "", 0);
         });
      break;
    case 3:
      var value = new cerbos_schema_v1_schema_pb.ValidationError;
      reader.readMessage(value,cerbos_schema_v1_schema_pb.ValidationError.deserializeBinaryFromReader);
      msg.addValidationErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeEnum);
  }
  f = message.getValidationErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cerbos_schema_v1_schema_pb.ValidationError.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_id = 1;
 * @return {string}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.prototype.getResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap} returns this
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.prototype.setResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, cerbos.effect.v1.Effect> actions = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cerbos.effect.v1.Effect>}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.prototype.getActionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cerbos.effect.v1.Effect>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap} returns this
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.prototype.clearActionsMap = function() {
  this.getActionsMap().clear();
  return this;};


/**
 * repeated cerbos.schema.v1.ValidationError validation_errors = 3;
 * @return {!Array<!proto.cerbos.schema.v1.ValidationError>}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.prototype.getValidationErrorsList = function() {
  return /** @type{!Array<!proto.cerbos.schema.v1.ValidationError>} */ (
    jspb.Message.getRepeatedWrapperField(this, cerbos_schema_v1_schema_pb.ValidationError, 3));
};


/**
 * @param {!Array<!proto.cerbos.schema.v1.ValidationError>} value
 * @return {!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap} returns this
*/
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.prototype.setValidationErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cerbos.schema.v1.ValidationError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cerbos.schema.v1.ValidationError}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.prototype.addValidationErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cerbos.schema.v1.ValidationError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap} returns this
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.prototype.clearValidationErrorsList = function() {
  return this.setValidationErrorsList([]);
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.CheckResourceBatchResponse} returns this
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated ActionEffectMap results = 2;
 * @return {!Array<!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap>}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap, 2));
};


/**
 * @param {!Array<!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap>} value
 * @return {!proto.cerbos.response.v1.CheckResourceBatchResponse} returns this
*/
proto.cerbos.response.v1.CheckResourceBatchResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap}
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.CheckResourceBatchResponse} returns this
 */
proto.cerbos.response.v1.CheckResourceBatchResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.CheckResourcesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.CheckResourcesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.CheckResourcesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourcesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse}
 */
proto.cerbos.response.v1.CheckResourcesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.CheckResourcesResponse;
  return proto.cerbos.response.v1.CheckResourcesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse}
 */
proto.cerbos.response.v1.CheckResourcesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = new proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry;
      reader.readMessage(value,proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.CheckResourcesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.CheckResourcesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourcesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: (f = msg.getResource()) && proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.toObject(includeInstance, f),
    actionsMap: (f = msg.getActionsMap()) ? f.toObject(includeInstance, undefined) : [],
    validationErrorsList: jspb.Message.toObjectList(msg.getValidationErrorsList(),
    cerbos_schema_v1_schema_pb.ValidationError.toObject, includeInstance),
    meta: (f = msg.getMeta()) && proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry;
  return proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource;
      reader.readMessage(value,proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    case 2:
      var value = msg.getActionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readEnum, null, "", 0);
         });
      break;
    case 3:
      var value = new cerbos_schema_v1_schema_pb.ValidationError;
      reader.readMessage(value,cerbos_schema_v1_schema_pb.ValidationError.deserializeBinaryFromReader);
      msg.addValidationErrors(value);
      break;
    case 4:
      var value = new proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta;
      reader.readMessage(value,proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.serializeBinaryToWriter
    );
  }
  f = message.getActionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeEnum);
  }
  f = message.getValidationErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cerbos_schema_v1_schema_pb.ValidationError.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 2, ""),
    policyVersion: jspb.Message.getFieldWithDefault(msg, 3, ""),
    scope: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource;
  return proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setScope(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPolicyVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getScope();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string kind = 2;
 * @return {string}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string policy_version = 3;
 * @return {string}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.prototype.getPolicyVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.prototype.setPolicyVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string scope = 4;
 * @return {string}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.prototype.getScope = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.prototype.setScope = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsMap: (f = msg.getActionsMap()) ? f.toObject(includeInstance, proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.toObject) : [],
    effectiveDerivedRolesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta;
  return proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getActionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.deserializeBinaryFromReader, "", new proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta());
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addEffectiveDerivedRoles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.serializeBinaryToWriter);
  }
  f = message.getEffectiveDerivedRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchedPolicy: jspb.Message.getFieldWithDefault(msg, 1, ""),
    matchedScope: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta;
  return proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchedPolicy(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchedScope(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchedPolicy();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMatchedScope();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string matched_policy = 1;
 * @return {string}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.prototype.getMatchedPolicy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.prototype.setMatchedPolicy = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string matched_scope = 2;
 * @return {string}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.prototype.getMatchedScope = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.prototype.setMatchedScope = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, EffectMeta> actions = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta>}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.prototype.getActionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.prototype.clearActionsMap = function() {
  this.getActionsMap().clear();
  return this;};


/**
 * repeated string effective_derived_roles = 2;
 * @return {!Array<string>}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.prototype.getEffectiveDerivedRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.prototype.setEffectiveDerivedRolesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.prototype.addEffectiveDerivedRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.prototype.clearEffectiveDerivedRolesList = function() {
  return this.setEffectiveDerivedRolesList([]);
};


/**
 * optional Resource resource = 1;
 * @return {?proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.getResource = function() {
  return /** @type{?proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource, 1));
};


/**
 * @param {?proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource|undefined} value
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry} returns this
*/
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.hasResource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, cerbos.effect.v1.Effect> actions = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cerbos.effect.v1.Effect>}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.getActionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cerbos.effect.v1.Effect>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.clearActionsMap = function() {
  this.getActionsMap().clear();
  return this;};


/**
 * repeated cerbos.schema.v1.ValidationError validation_errors = 3;
 * @return {!Array<!proto.cerbos.schema.v1.ValidationError>}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.getValidationErrorsList = function() {
  return /** @type{!Array<!proto.cerbos.schema.v1.ValidationError>} */ (
    jspb.Message.getRepeatedWrapperField(this, cerbos_schema_v1_schema_pb.ValidationError, 3));
};


/**
 * @param {!Array<!proto.cerbos.schema.v1.ValidationError>} value
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry} returns this
*/
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.setValidationErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cerbos.schema.v1.ValidationError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cerbos.schema.v1.ValidationError}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.addValidationErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cerbos.schema.v1.ValidationError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.clearValidationErrorsList = function() {
  return this.setValidationErrorsList([]);
};


/**
 * optional Meta meta = 4;
 * @return {?proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.getMeta = function() {
  return /** @type{?proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta, 4));
};


/**
 * @param {?proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta|undefined} value
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry} returns this
*/
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.cerbos.response.v1.CheckResourcesResponse.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated ResultEntry results = 2;
 * @return {!Array<!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry>}
 */
proto.cerbos.response.v1.CheckResourcesResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry, 2));
};


/**
 * @param {!Array<!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry>} value
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse} returns this
*/
proto.cerbos.response.v1.CheckResourcesResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry}
 */
proto.cerbos.response.v1.CheckResourcesResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cerbos.response.v1.CheckResourcesResponse.ResultEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.CheckResourcesResponse} returns this
 */
proto.cerbos.response.v1.CheckResourcesResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.PlaygroundFailure.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlaygroundFailure.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlaygroundFailure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlaygroundFailure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundFailure.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.cerbos.response.v1.PlaygroundFailure.Error.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlaygroundFailure}
 */
proto.cerbos.response.v1.PlaygroundFailure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlaygroundFailure;
  return proto.cerbos.response.v1.PlaygroundFailure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlaygroundFailure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlaygroundFailure}
 */
proto.cerbos.response.v1.PlaygroundFailure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cerbos.response.v1.PlaygroundFailure.Error;
      reader.readMessage(value,proto.cerbos.response.v1.PlaygroundFailure.Error.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlaygroundFailure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlaygroundFailure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlaygroundFailure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundFailure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cerbos.response.v1.PlaygroundFailure.Error.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlaygroundFailure.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlaygroundFailure.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlaygroundFailure.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundFailure.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlaygroundFailure.Error}
 */
proto.cerbos.response.v1.PlaygroundFailure.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlaygroundFailure.Error;
  return proto.cerbos.response.v1.PlaygroundFailure.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlaygroundFailure.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlaygroundFailure.Error}
 */
proto.cerbos.response.v1.PlaygroundFailure.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFile(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlaygroundFailure.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlaygroundFailure.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlaygroundFailure.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundFailure.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string file = 1;
 * @return {string}
 */
proto.cerbos.response.v1.PlaygroundFailure.Error.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlaygroundFailure.Error} returns this
 */
proto.cerbos.response.v1.PlaygroundFailure.Error.prototype.setFile = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.cerbos.response.v1.PlaygroundFailure.Error.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlaygroundFailure.Error} returns this
 */
proto.cerbos.response.v1.PlaygroundFailure.Error.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Error errors = 1;
 * @return {!Array<!proto.cerbos.response.v1.PlaygroundFailure.Error>}
 */
proto.cerbos.response.v1.PlaygroundFailure.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.cerbos.response.v1.PlaygroundFailure.Error>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cerbos.response.v1.PlaygroundFailure.Error, 1));
};


/**
 * @param {!Array<!proto.cerbos.response.v1.PlaygroundFailure.Error>} value
 * @return {!proto.cerbos.response.v1.PlaygroundFailure} returns this
*/
proto.cerbos.response.v1.PlaygroundFailure.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cerbos.response.v1.PlaygroundFailure.Error=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cerbos.response.v1.PlaygroundFailure.Error}
 */
proto.cerbos.response.v1.PlaygroundFailure.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cerbos.response.v1.PlaygroundFailure.Error, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.PlaygroundFailure} returns this
 */
proto.cerbos.response.v1.PlaygroundFailure.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.OutcomeCase = {
  OUTCOME_NOT_SET: 0,
  FAILURE: 2,
  SUCCESS: 3
};

/**
 * @return {proto.cerbos.response.v1.PlaygroundValidateResponse.OutcomeCase}
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.prototype.getOutcomeCase = function() {
  return /** @type {proto.cerbos.response.v1.PlaygroundValidateResponse.OutcomeCase} */(jspb.Message.computeOneofCase(this, proto.cerbos.response.v1.PlaygroundValidateResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlaygroundValidateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlaygroundValidateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    playgroundId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    failure: (f = msg.getFailure()) && proto.cerbos.response.v1.PlaygroundFailure.toObject(includeInstance, f),
    success: (f = msg.getSuccess()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlaygroundValidateResponse}
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlaygroundValidateResponse;
  return proto.cerbos.response.v1.PlaygroundValidateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlaygroundValidateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlaygroundValidateResponse}
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaygroundId(value);
      break;
    case 2:
      var value = new proto.cerbos.response.v1.PlaygroundFailure;
      reader.readMessage(value,proto.cerbos.response.v1.PlaygroundFailure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 3:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlaygroundValidateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlaygroundValidateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaygroundId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cerbos.response.v1.PlaygroundFailure.serializeBinaryToWriter
    );
  }
  f = message.getSuccess();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
};


/**
 * optional string playground_id = 1;
 * @return {string}
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.prototype.getPlaygroundId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlaygroundValidateResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.prototype.setPlaygroundId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PlaygroundFailure failure = 2;
 * @return {?proto.cerbos.response.v1.PlaygroundFailure}
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.prototype.getFailure = function() {
  return /** @type{?proto.cerbos.response.v1.PlaygroundFailure} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.PlaygroundFailure, 2));
};


/**
 * @param {?proto.cerbos.response.v1.PlaygroundFailure|undefined} value
 * @return {!proto.cerbos.response.v1.PlaygroundValidateResponse} returns this
*/
proto.cerbos.response.v1.PlaygroundValidateResponse.prototype.setFailure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cerbos.response.v1.PlaygroundValidateResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlaygroundValidateResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.prototype.clearFailure = function() {
  return this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Empty success = 3;
 * @return {?proto.google.protobuf.Empty}
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.prototype.getSuccess = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 3));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.cerbos.response.v1.PlaygroundValidateResponse} returns this
*/
proto.cerbos.response.v1.PlaygroundValidateResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cerbos.response.v1.PlaygroundValidateResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlaygroundValidateResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.prototype.clearSuccess = function() {
  return this.setSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlaygroundValidateResponse.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cerbos.response.v1.PlaygroundTestResponse.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.OutcomeCase = {
  OUTCOME_NOT_SET: 0,
  FAILURE: 2,
  SUCCESS: 3
};

/**
 * @return {proto.cerbos.response.v1.PlaygroundTestResponse.OutcomeCase}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.prototype.getOutcomeCase = function() {
  return /** @type {proto.cerbos.response.v1.PlaygroundTestResponse.OutcomeCase} */(jspb.Message.computeOneofCase(this, proto.cerbos.response.v1.PlaygroundTestResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlaygroundTestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlaygroundTestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundTestResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    playgroundId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    failure: (f = msg.getFailure()) && proto.cerbos.response.v1.PlaygroundFailure.toObject(includeInstance, f),
    success: (f = msg.getSuccess()) && proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlaygroundTestResponse}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlaygroundTestResponse;
  return proto.cerbos.response.v1.PlaygroundTestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlaygroundTestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlaygroundTestResponse}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaygroundId(value);
      break;
    case 2:
      var value = new proto.cerbos.response.v1.PlaygroundFailure;
      reader.readMessage(value,proto.cerbos.response.v1.PlaygroundFailure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 3:
      var value = new proto.cerbos.response.v1.PlaygroundTestResponse.TestResults;
      reader.readMessage(value,proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.deserializeBinaryFromReader);
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlaygroundTestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlaygroundTestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundTestResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaygroundId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cerbos.response.v1.PlaygroundFailure.serializeBinaryToWriter
    );
  }
  f = message.getSuccess();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlaygroundTestResponse.TestResults} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.toObject = function(includeInstance, msg) {
  var f, obj = {
    results: (f = msg.getResults()) && cerbos_policy_v1_policy_pb.TestResults.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlaygroundTestResponse.TestResults}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlaygroundTestResponse.TestResults;
  return proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlaygroundTestResponse.TestResults} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlaygroundTestResponse.TestResults}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cerbos_policy_v1_policy_pb.TestResults;
      reader.readMessage(value,cerbos_policy_v1_policy_pb.TestResults.deserializeBinaryFromReader);
      msg.setResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlaygroundTestResponse.TestResults} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResults();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cerbos_policy_v1_policy_pb.TestResults.serializeBinaryToWriter
    );
  }
};


/**
 * optional cerbos.policy.v1.TestResults results = 1;
 * @return {?proto.cerbos.policy.v1.TestResults}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.prototype.getResults = function() {
  return /** @type{?proto.cerbos.policy.v1.TestResults} */ (
    jspb.Message.getWrapperField(this, cerbos_policy_v1_policy_pb.TestResults, 1));
};


/**
 * @param {?proto.cerbos.policy.v1.TestResults|undefined} value
 * @return {!proto.cerbos.response.v1.PlaygroundTestResponse.TestResults} returns this
*/
proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.prototype.setResults = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlaygroundTestResponse.TestResults} returns this
 */
proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.prototype.clearResults = function() {
  return this.setResults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.TestResults.prototype.hasResults = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string playground_id = 1;
 * @return {string}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.prototype.getPlaygroundId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlaygroundTestResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundTestResponse.prototype.setPlaygroundId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PlaygroundFailure failure = 2;
 * @return {?proto.cerbos.response.v1.PlaygroundFailure}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.prototype.getFailure = function() {
  return /** @type{?proto.cerbos.response.v1.PlaygroundFailure} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.PlaygroundFailure, 2));
};


/**
 * @param {?proto.cerbos.response.v1.PlaygroundFailure|undefined} value
 * @return {!proto.cerbos.response.v1.PlaygroundTestResponse} returns this
*/
proto.cerbos.response.v1.PlaygroundTestResponse.prototype.setFailure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cerbos.response.v1.PlaygroundTestResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlaygroundTestResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundTestResponse.prototype.clearFailure = function() {
  return this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TestResults success = 3;
 * @return {?proto.cerbos.response.v1.PlaygroundTestResponse.TestResults}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.prototype.getSuccess = function() {
  return /** @type{?proto.cerbos.response.v1.PlaygroundTestResponse.TestResults} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.PlaygroundTestResponse.TestResults, 3));
};


/**
 * @param {?proto.cerbos.response.v1.PlaygroundTestResponse.TestResults|undefined} value
 * @return {!proto.cerbos.response.v1.PlaygroundTestResponse} returns this
*/
proto.cerbos.response.v1.PlaygroundTestResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cerbos.response.v1.PlaygroundTestResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlaygroundTestResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundTestResponse.prototype.clearSuccess = function() {
  return this.setSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlaygroundTestResponse.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.OutcomeCase = {
  OUTCOME_NOT_SET: 0,
  FAILURE: 2,
  SUCCESS: 3
};

/**
 * @return {proto.cerbos.response.v1.PlaygroundEvaluateResponse.OutcomeCase}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.prototype.getOutcomeCase = function() {
  return /** @type {proto.cerbos.response.v1.PlaygroundEvaluateResponse.OutcomeCase} */(jspb.Message.computeOneofCase(this, proto.cerbos.response.v1.PlaygroundEvaluateResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlaygroundEvaluateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlaygroundEvaluateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    playgroundId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    failure: (f = msg.getFailure()) && proto.cerbos.response.v1.PlaygroundFailure.toObject(includeInstance, f),
    success: (f = msg.getSuccess()) && proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlaygroundEvaluateResponse;
  return proto.cerbos.response.v1.PlaygroundEvaluateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlaygroundEvaluateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaygroundId(value);
      break;
    case 2:
      var value = new proto.cerbos.response.v1.PlaygroundFailure;
      reader.readMessage(value,proto.cerbos.response.v1.PlaygroundFailure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 3:
      var value = new proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList;
      reader.readMessage(value,proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.deserializeBinaryFromReader);
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlaygroundEvaluateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlaygroundEvaluateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaygroundId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cerbos.response.v1.PlaygroundFailure.serializeBinaryToWriter
    );
  }
  f = message.getSuccess();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, ""),
    effect: jspb.Message.getFieldWithDefault(msg, 2, 0),
    policy: jspb.Message.getFieldWithDefault(msg, 3, ""),
    effectiveDerivedRolesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    validationErrorsList: jspb.Message.toObjectList(msg.getValidationErrorsList(),
    cerbos_schema_v1_schema_pb.ValidationError.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult;
  return proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {!proto.cerbos.effect.v1.Effect} */ (reader.readEnum());
      msg.setEffect(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicy(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addEffectiveDerivedRoles(value);
      break;
    case 5:
      var value = new cerbos_schema_v1_schema_pb.ValidationError;
      reader.readMessage(value,cerbos_schema_v1_schema_pb.ValidationError.deserializeBinaryFromReader);
      msg.addValidationErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEffect();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPolicy();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEffectiveDerivedRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getValidationErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      cerbos_schema_v1_schema_pb.ValidationError.serializeBinaryToWriter
    );
  }
};


/**
 * optional string action = 1;
 * @return {string}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult} returns this
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional cerbos.effect.v1.Effect effect = 2;
 * @return {!proto.cerbos.effect.v1.Effect}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.getEffect = function() {
  return /** @type {!proto.cerbos.effect.v1.Effect} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.cerbos.effect.v1.Effect} value
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult} returns this
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.setEffect = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string policy = 3;
 * @return {string}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.getPolicy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult} returns this
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.setPolicy = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string effective_derived_roles = 4;
 * @return {!Array<string>}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.getEffectiveDerivedRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult} returns this
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.setEffectiveDerivedRolesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult} returns this
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.addEffectiveDerivedRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult} returns this
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.clearEffectiveDerivedRolesList = function() {
  return this.setEffectiveDerivedRolesList([]);
};


/**
 * repeated cerbos.schema.v1.ValidationError validation_errors = 5;
 * @return {!Array<!proto.cerbos.schema.v1.ValidationError>}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.getValidationErrorsList = function() {
  return /** @type{!Array<!proto.cerbos.schema.v1.ValidationError>} */ (
    jspb.Message.getRepeatedWrapperField(this, cerbos_schema_v1_schema_pb.ValidationError, 5));
};


/**
 * @param {!Array<!proto.cerbos.schema.v1.ValidationError>} value
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult} returns this
*/
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.setValidationErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.cerbos.schema.v1.ValidationError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cerbos.schema.v1.ValidationError}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.addValidationErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.cerbos.schema.v1.ValidationError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult} returns this
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.prototype.clearValidationErrorsList = function() {
  return this.setValidationErrorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList;
  return proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult;
      reader.readMessage(value,proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EvalResult results = 1;
 * @return {!Array<!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult>}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult, 1));
};


/**
 * @param {!Array<!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult>} value
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList} returns this
*/
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList} returns this
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional string playground_id = 1;
 * @return {string}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.prototype.getPlaygroundId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.prototype.setPlaygroundId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PlaygroundFailure failure = 2;
 * @return {?proto.cerbos.response.v1.PlaygroundFailure}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.prototype.getFailure = function() {
  return /** @type{?proto.cerbos.response.v1.PlaygroundFailure} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.PlaygroundFailure, 2));
};


/**
 * @param {?proto.cerbos.response.v1.PlaygroundFailure|undefined} value
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse} returns this
*/
proto.cerbos.response.v1.PlaygroundEvaluateResponse.prototype.setFailure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cerbos.response.v1.PlaygroundEvaluateResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.prototype.clearFailure = function() {
  return this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EvalResultList success = 3;
 * @return {?proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.prototype.getSuccess = function() {
  return /** @type{?proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList, 3));
};


/**
 * @param {?proto.cerbos.response.v1.PlaygroundEvaluateResponse.EvalResultList|undefined} value
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse} returns this
*/
proto.cerbos.response.v1.PlaygroundEvaluateResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cerbos.response.v1.PlaygroundEvaluateResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlaygroundEvaluateResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.prototype.clearSuccess = function() {
  return this.setSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlaygroundEvaluateResponse.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.oneofGroups_ = [[2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.OutcomeCase = {
  OUTCOME_NOT_SET: 0,
  FAILURE: 2,
  CHECK_RESOURCE_SET: 3,
  CHECK_RESOURCE_BATCH: 4,
  PLAN_RESOURCES: 5,
  CHECK_RESOURCES: 6
};

/**
 * @return {proto.cerbos.response.v1.PlaygroundProxyResponse.OutcomeCase}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.getOutcomeCase = function() {
  return /** @type {proto.cerbos.response.v1.PlaygroundProxyResponse.OutcomeCase} */(jspb.Message.computeOneofCase(this, proto.cerbos.response.v1.PlaygroundProxyResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.PlaygroundProxyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.PlaygroundProxyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    playgroundId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    failure: (f = msg.getFailure()) && proto.cerbos.response.v1.PlaygroundFailure.toObject(includeInstance, f),
    checkResourceSet: (f = msg.getCheckResourceSet()) && proto.cerbos.response.v1.CheckResourceSetResponse.toObject(includeInstance, f),
    checkResourceBatch: (f = msg.getCheckResourceBatch()) && proto.cerbos.response.v1.CheckResourceBatchResponse.toObject(includeInstance, f),
    planResources: (f = msg.getPlanResources()) && proto.cerbos.response.v1.PlanResourcesResponse.toObject(includeInstance, f),
    checkResources: (f = msg.getCheckResources()) && proto.cerbos.response.v1.CheckResourcesResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.PlaygroundProxyResponse}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.PlaygroundProxyResponse;
  return proto.cerbos.response.v1.PlaygroundProxyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.PlaygroundProxyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.PlaygroundProxyResponse}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaygroundId(value);
      break;
    case 2:
      var value = new proto.cerbos.response.v1.PlaygroundFailure;
      reader.readMessage(value,proto.cerbos.response.v1.PlaygroundFailure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    case 3:
      var value = new proto.cerbos.response.v1.CheckResourceSetResponse;
      reader.readMessage(value,proto.cerbos.response.v1.CheckResourceSetResponse.deserializeBinaryFromReader);
      msg.setCheckResourceSet(value);
      break;
    case 4:
      var value = new proto.cerbos.response.v1.CheckResourceBatchResponse;
      reader.readMessage(value,proto.cerbos.response.v1.CheckResourceBatchResponse.deserializeBinaryFromReader);
      msg.setCheckResourceBatch(value);
      break;
    case 5:
      var value = new proto.cerbos.response.v1.PlanResourcesResponse;
      reader.readMessage(value,proto.cerbos.response.v1.PlanResourcesResponse.deserializeBinaryFromReader);
      msg.setPlanResources(value);
      break;
    case 6:
      var value = new proto.cerbos.response.v1.CheckResourcesResponse;
      reader.readMessage(value,proto.cerbos.response.v1.CheckResourcesResponse.deserializeBinaryFromReader);
      msg.setCheckResources(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.PlaygroundProxyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.PlaygroundProxyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaygroundId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cerbos.response.v1.PlaygroundFailure.serializeBinaryToWriter
    );
  }
  f = message.getCheckResourceSet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cerbos.response.v1.CheckResourceSetResponse.serializeBinaryToWriter
    );
  }
  f = message.getCheckResourceBatch();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cerbos.response.v1.CheckResourceBatchResponse.serializeBinaryToWriter
    );
  }
  f = message.getPlanResources();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cerbos.response.v1.PlanResourcesResponse.serializeBinaryToWriter
    );
  }
  f = message.getCheckResources();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cerbos.response.v1.CheckResourcesResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional string playground_id = 1;
 * @return {string}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.getPlaygroundId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.PlaygroundProxyResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.setPlaygroundId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PlaygroundFailure failure = 2;
 * @return {?proto.cerbos.response.v1.PlaygroundFailure}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.getFailure = function() {
  return /** @type{?proto.cerbos.response.v1.PlaygroundFailure} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.PlaygroundFailure, 2));
};


/**
 * @param {?proto.cerbos.response.v1.PlaygroundFailure|undefined} value
 * @return {!proto.cerbos.response.v1.PlaygroundProxyResponse} returns this
*/
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.setFailure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cerbos.response.v1.PlaygroundProxyResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlaygroundProxyResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.clearFailure = function() {
  return this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CheckResourceSetResponse check_resource_set = 3;
 * @return {?proto.cerbos.response.v1.CheckResourceSetResponse}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.getCheckResourceSet = function() {
  return /** @type{?proto.cerbos.response.v1.CheckResourceSetResponse} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.CheckResourceSetResponse, 3));
};


/**
 * @param {?proto.cerbos.response.v1.CheckResourceSetResponse|undefined} value
 * @return {!proto.cerbos.response.v1.PlaygroundProxyResponse} returns this
*/
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.setCheckResourceSet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cerbos.response.v1.PlaygroundProxyResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlaygroundProxyResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.clearCheckResourceSet = function() {
  return this.setCheckResourceSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.hasCheckResourceSet = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CheckResourceBatchResponse check_resource_batch = 4;
 * @return {?proto.cerbos.response.v1.CheckResourceBatchResponse}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.getCheckResourceBatch = function() {
  return /** @type{?proto.cerbos.response.v1.CheckResourceBatchResponse} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.CheckResourceBatchResponse, 4));
};


/**
 * @param {?proto.cerbos.response.v1.CheckResourceBatchResponse|undefined} value
 * @return {!proto.cerbos.response.v1.PlaygroundProxyResponse} returns this
*/
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.setCheckResourceBatch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.cerbos.response.v1.PlaygroundProxyResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlaygroundProxyResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.clearCheckResourceBatch = function() {
  return this.setCheckResourceBatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.hasCheckResourceBatch = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PlanResourcesResponse plan_resources = 5;
 * @return {?proto.cerbos.response.v1.PlanResourcesResponse}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.getPlanResources = function() {
  return /** @type{?proto.cerbos.response.v1.PlanResourcesResponse} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.PlanResourcesResponse, 5));
};


/**
 * @param {?proto.cerbos.response.v1.PlanResourcesResponse|undefined} value
 * @return {!proto.cerbos.response.v1.PlaygroundProxyResponse} returns this
*/
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.setPlanResources = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.cerbos.response.v1.PlaygroundProxyResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlaygroundProxyResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.clearPlanResources = function() {
  return this.setPlanResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.hasPlanResources = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CheckResourcesResponse check_resources = 6;
 * @return {?proto.cerbos.response.v1.CheckResourcesResponse}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.getCheckResources = function() {
  return /** @type{?proto.cerbos.response.v1.CheckResourcesResponse} */ (
    jspb.Message.getWrapperField(this, proto.cerbos.response.v1.CheckResourcesResponse, 6));
};


/**
 * @param {?proto.cerbos.response.v1.CheckResourcesResponse|undefined} value
 * @return {!proto.cerbos.response.v1.PlaygroundProxyResponse} returns this
*/
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.setCheckResources = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.cerbos.response.v1.PlaygroundProxyResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.PlaygroundProxyResponse} returns this
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.clearCheckResources = function() {
  return this.setCheckResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.PlaygroundProxyResponse.prototype.hasCheckResources = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.AddOrUpdatePolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.AddOrUpdatePolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.AddOrUpdatePolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.AddOrUpdatePolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: (f = msg.getSuccess()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.AddOrUpdatePolicyResponse}
 */
proto.cerbos.response.v1.AddOrUpdatePolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.AddOrUpdatePolicyResponse;
  return proto.cerbos.response.v1.AddOrUpdatePolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.AddOrUpdatePolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.AddOrUpdatePolicyResponse}
 */
proto.cerbos.response.v1.AddOrUpdatePolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.AddOrUpdatePolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.AddOrUpdatePolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.AddOrUpdatePolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.AddOrUpdatePolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Empty success = 1;
 * @return {?proto.google.protobuf.Empty}
 */
proto.cerbos.response.v1.AddOrUpdatePolicyResponse.prototype.getSuccess = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 1));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.cerbos.response.v1.AddOrUpdatePolicyResponse} returns this
*/
proto.cerbos.response.v1.AddOrUpdatePolicyResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.AddOrUpdatePolicyResponse} returns this
 */
proto.cerbos.response.v1.AddOrUpdatePolicyResponse.prototype.clearSuccess = function() {
  return this.setSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.AddOrUpdatePolicyResponse.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.EntryCase = {
  ENTRY_NOT_SET: 0,
  ACCESS_LOG_ENTRY: 1,
  DECISION_LOG_ENTRY: 2
};

/**
 * @return {proto.cerbos.response.v1.ListAuditLogEntriesResponse.EntryCase}
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.prototype.getEntryCase = function() {
  return /** @type {proto.cerbos.response.v1.ListAuditLogEntriesResponse.EntryCase} */(jspb.Message.computeOneofCase(this, proto.cerbos.response.v1.ListAuditLogEntriesResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.ListAuditLogEntriesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.ListAuditLogEntriesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accessLogEntry: (f = msg.getAccessLogEntry()) && cerbos_audit_v1_audit_pb.AccessLogEntry.toObject(includeInstance, f),
    decisionLogEntry: (f = msg.getDecisionLogEntry()) && cerbos_audit_v1_audit_pb.DecisionLogEntry.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.ListAuditLogEntriesResponse}
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.ListAuditLogEntriesResponse;
  return proto.cerbos.response.v1.ListAuditLogEntriesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.ListAuditLogEntriesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.ListAuditLogEntriesResponse}
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cerbos_audit_v1_audit_pb.AccessLogEntry;
      reader.readMessage(value,cerbos_audit_v1_audit_pb.AccessLogEntry.deserializeBinaryFromReader);
      msg.setAccessLogEntry(value);
      break;
    case 2:
      var value = new cerbos_audit_v1_audit_pb.DecisionLogEntry;
      reader.readMessage(value,cerbos_audit_v1_audit_pb.DecisionLogEntry.deserializeBinaryFromReader);
      msg.setDecisionLogEntry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.ListAuditLogEntriesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.ListAuditLogEntriesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccessLogEntry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cerbos_audit_v1_audit_pb.AccessLogEntry.serializeBinaryToWriter
    );
  }
  f = message.getDecisionLogEntry();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cerbos_audit_v1_audit_pb.DecisionLogEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional cerbos.audit.v1.AccessLogEntry access_log_entry = 1;
 * @return {?proto.cerbos.audit.v1.AccessLogEntry}
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.prototype.getAccessLogEntry = function() {
  return /** @type{?proto.cerbos.audit.v1.AccessLogEntry} */ (
    jspb.Message.getWrapperField(this, cerbos_audit_v1_audit_pb.AccessLogEntry, 1));
};


/**
 * @param {?proto.cerbos.audit.v1.AccessLogEntry|undefined} value
 * @return {!proto.cerbos.response.v1.ListAuditLogEntriesResponse} returns this
*/
proto.cerbos.response.v1.ListAuditLogEntriesResponse.prototype.setAccessLogEntry = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cerbos.response.v1.ListAuditLogEntriesResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.ListAuditLogEntriesResponse} returns this
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.prototype.clearAccessLogEntry = function() {
  return this.setAccessLogEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.prototype.hasAccessLogEntry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cerbos.audit.v1.DecisionLogEntry decision_log_entry = 2;
 * @return {?proto.cerbos.audit.v1.DecisionLogEntry}
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.prototype.getDecisionLogEntry = function() {
  return /** @type{?proto.cerbos.audit.v1.DecisionLogEntry} */ (
    jspb.Message.getWrapperField(this, cerbos_audit_v1_audit_pb.DecisionLogEntry, 2));
};


/**
 * @param {?proto.cerbos.audit.v1.DecisionLogEntry|undefined} value
 * @return {!proto.cerbos.response.v1.ListAuditLogEntriesResponse} returns this
*/
proto.cerbos.response.v1.ListAuditLogEntriesResponse.prototype.setDecisionLogEntry = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cerbos.response.v1.ListAuditLogEntriesResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cerbos.response.v1.ListAuditLogEntriesResponse} returns this
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.prototype.clearDecisionLogEntry = function() {
  return this.setDecisionLogEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cerbos.response.v1.ListAuditLogEntriesResponse.prototype.hasDecisionLogEntry = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.ServerInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.ServerInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.ServerInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.ServerInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commit: jspb.Message.getFieldWithDefault(msg, 2, ""),
    buildDate: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.ServerInfoResponse}
 */
proto.cerbos.response.v1.ServerInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.ServerInfoResponse;
  return proto.cerbos.response.v1.ServerInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.ServerInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.ServerInfoResponse}
 */
proto.cerbos.response.v1.ServerInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuildDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.ServerInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.ServerInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.ServerInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.ServerInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommit();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBuildDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.cerbos.response.v1.ServerInfoResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.ServerInfoResponse} returns this
 */
proto.cerbos.response.v1.ServerInfoResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string commit = 2;
 * @return {string}
 */
proto.cerbos.response.v1.ServerInfoResponse.prototype.getCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.ServerInfoResponse} returns this
 */
proto.cerbos.response.v1.ServerInfoResponse.prototype.setCommit = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string build_date = 3;
 * @return {string}
 */
proto.cerbos.response.v1.ServerInfoResponse.prototype.getBuildDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cerbos.response.v1.ServerInfoResponse} returns this
 */
proto.cerbos.response.v1.ServerInfoResponse.prototype.setBuildDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.ListPoliciesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.ListPoliciesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.ListPoliciesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.ListPoliciesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.ListPoliciesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    policyIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.ListPoliciesResponse}
 */
proto.cerbos.response.v1.ListPoliciesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.ListPoliciesResponse;
  return proto.cerbos.response.v1.ListPoliciesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.ListPoliciesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.ListPoliciesResponse}
 */
proto.cerbos.response.v1.ListPoliciesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPolicyIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.ListPoliciesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.ListPoliciesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.ListPoliciesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.ListPoliciesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string policy_ids = 1;
 * @return {!Array<string>}
 */
proto.cerbos.response.v1.ListPoliciesResponse.prototype.getPolicyIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cerbos.response.v1.ListPoliciesResponse} returns this
 */
proto.cerbos.response.v1.ListPoliciesResponse.prototype.setPolicyIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cerbos.response.v1.ListPoliciesResponse} returns this
 */
proto.cerbos.response.v1.ListPoliciesResponse.prototype.addPolicyIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.ListPoliciesResponse} returns this
 */
proto.cerbos.response.v1.ListPoliciesResponse.prototype.clearPolicyIdsList = function() {
  return this.setPolicyIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.GetPolicyResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.GetPolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.GetPolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.GetPolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.GetPolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    policiesList: jspb.Message.toObjectList(msg.getPoliciesList(),
    cerbos_policy_v1_policy_pb.Policy.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.GetPolicyResponse}
 */
proto.cerbos.response.v1.GetPolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.GetPolicyResponse;
  return proto.cerbos.response.v1.GetPolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.GetPolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.GetPolicyResponse}
 */
proto.cerbos.response.v1.GetPolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cerbos_policy_v1_policy_pb.Policy;
      reader.readMessage(value,cerbos_policy_v1_policy_pb.Policy.deserializeBinaryFromReader);
      msg.addPolicies(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.GetPolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.GetPolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.GetPolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.GetPolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoliciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cerbos_policy_v1_policy_pb.Policy.serializeBinaryToWriter
    );
  }
};


/**
 * repeated cerbos.policy.v1.Policy policies = 1;
 * @return {!Array<!proto.cerbos.policy.v1.Policy>}
 */
proto.cerbos.response.v1.GetPolicyResponse.prototype.getPoliciesList = function() {
  return /** @type{!Array<!proto.cerbos.policy.v1.Policy>} */ (
    jspb.Message.getRepeatedWrapperField(this, cerbos_policy_v1_policy_pb.Policy, 1));
};


/**
 * @param {!Array<!proto.cerbos.policy.v1.Policy>} value
 * @return {!proto.cerbos.response.v1.GetPolicyResponse} returns this
*/
proto.cerbos.response.v1.GetPolicyResponse.prototype.setPoliciesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cerbos.policy.v1.Policy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cerbos.policy.v1.Policy}
 */
proto.cerbos.response.v1.GetPolicyResponse.prototype.addPolicies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cerbos.policy.v1.Policy, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.GetPolicyResponse} returns this
 */
proto.cerbos.response.v1.GetPolicyResponse.prototype.clearPoliciesList = function() {
  return this.setPoliciesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.AddOrUpdateSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.AddOrUpdateSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.AddOrUpdateSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.AddOrUpdateSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.AddOrUpdateSchemaResponse}
 */
proto.cerbos.response.v1.AddOrUpdateSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.AddOrUpdateSchemaResponse;
  return proto.cerbos.response.v1.AddOrUpdateSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.AddOrUpdateSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.AddOrUpdateSchemaResponse}
 */
proto.cerbos.response.v1.AddOrUpdateSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.AddOrUpdateSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.AddOrUpdateSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.AddOrUpdateSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.AddOrUpdateSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.ListSchemasResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.ListSchemasResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.ListSchemasResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.ListSchemasResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.ListSchemasResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    schemaIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.ListSchemasResponse}
 */
proto.cerbos.response.v1.ListSchemasResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.ListSchemasResponse;
  return proto.cerbos.response.v1.ListSchemasResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.ListSchemasResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.ListSchemasResponse}
 */
proto.cerbos.response.v1.ListSchemasResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSchemaIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.ListSchemasResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.ListSchemasResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.ListSchemasResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.ListSchemasResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemaIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string schema_ids = 1;
 * @return {!Array<string>}
 */
proto.cerbos.response.v1.ListSchemasResponse.prototype.getSchemaIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cerbos.response.v1.ListSchemasResponse} returns this
 */
proto.cerbos.response.v1.ListSchemasResponse.prototype.setSchemaIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cerbos.response.v1.ListSchemasResponse} returns this
 */
proto.cerbos.response.v1.ListSchemasResponse.prototype.addSchemaIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.ListSchemasResponse} returns this
 */
proto.cerbos.response.v1.ListSchemasResponse.prototype.clearSchemaIdsList = function() {
  return this.setSchemaIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cerbos.response.v1.GetSchemaResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.GetSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.GetSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.GetSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.GetSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    schemasList: jspb.Message.toObjectList(msg.getSchemasList(),
    cerbos_schema_v1_schema_pb.Schema.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.GetSchemaResponse}
 */
proto.cerbos.response.v1.GetSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.GetSchemaResponse;
  return proto.cerbos.response.v1.GetSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.GetSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.GetSchemaResponse}
 */
proto.cerbos.response.v1.GetSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cerbos_schema_v1_schema_pb.Schema;
      reader.readMessage(value,cerbos_schema_v1_schema_pb.Schema.deserializeBinaryFromReader);
      msg.addSchemas(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.GetSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.GetSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.GetSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.GetSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cerbos_schema_v1_schema_pb.Schema.serializeBinaryToWriter
    );
  }
};


/**
 * repeated cerbos.schema.v1.Schema schemas = 1;
 * @return {!Array<!proto.cerbos.schema.v1.Schema>}
 */
proto.cerbos.response.v1.GetSchemaResponse.prototype.getSchemasList = function() {
  return /** @type{!Array<!proto.cerbos.schema.v1.Schema>} */ (
    jspb.Message.getRepeatedWrapperField(this, cerbos_schema_v1_schema_pb.Schema, 1));
};


/**
 * @param {!Array<!proto.cerbos.schema.v1.Schema>} value
 * @return {!proto.cerbos.response.v1.GetSchemaResponse} returns this
*/
proto.cerbos.response.v1.GetSchemaResponse.prototype.setSchemasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cerbos.schema.v1.Schema=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cerbos.schema.v1.Schema}
 */
proto.cerbos.response.v1.GetSchemaResponse.prototype.addSchemas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cerbos.schema.v1.Schema, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cerbos.response.v1.GetSchemaResponse} returns this
 */
proto.cerbos.response.v1.GetSchemaResponse.prototype.clearSchemasList = function() {
  return this.setSchemasList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.DeleteSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.DeleteSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.DeleteSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.DeleteSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.DeleteSchemaResponse}
 */
proto.cerbos.response.v1.DeleteSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.DeleteSchemaResponse;
  return proto.cerbos.response.v1.DeleteSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.DeleteSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.DeleteSchemaResponse}
 */
proto.cerbos.response.v1.DeleteSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.DeleteSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.DeleteSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.DeleteSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.DeleteSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cerbos.response.v1.ReloadStoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cerbos.response.v1.ReloadStoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cerbos.response.v1.ReloadStoreResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.ReloadStoreResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cerbos.response.v1.ReloadStoreResponse}
 */
proto.cerbos.response.v1.ReloadStoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cerbos.response.v1.ReloadStoreResponse;
  return proto.cerbos.response.v1.ReloadStoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cerbos.response.v1.ReloadStoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cerbos.response.v1.ReloadStoreResponse}
 */
proto.cerbos.response.v1.ReloadStoreResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cerbos.response.v1.ReloadStoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cerbos.response.v1.ReloadStoreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cerbos.response.v1.ReloadStoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cerbos.response.v1.ReloadStoreResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.cerbos.response.v1);
