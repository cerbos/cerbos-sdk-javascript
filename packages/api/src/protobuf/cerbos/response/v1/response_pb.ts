// Copyright 2021-2026 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

// @generated from file cerbos/response/v1/response.proto (package cerbos.response.v1, syntax proto3)
/* eslint-disable */

import type {
  GenEnum,
  GenFile,
  GenMessage,
} from "@bufbuild/protobuf/codegenv2";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import type {
  AccessLogEntry,
  AccessLogEntryJson,
  AccessLogEntryValid,
  DecisionLogEntry,
  DecisionLogEntryJson,
  DecisionLogEntryValid,
} from "../../audit/v1/audit_pb.js";
import { file_cerbos_audit_v1_audit } from "../../audit/v1/audit_pb.js";
import type { Effect, EffectJson } from "../../effect/v1/effect_pb.js";
import { file_cerbos_effect_v1_effect } from "../../effect/v1/effect_pb.js";
import type {
  OutputEntry,
  OutputEntryJson,
  PlanResourcesFilter,
  PlanResourcesFilterJson,
} from "../../engine/v1/engine_pb.js";
import { file_cerbos_engine_v1_engine } from "../../engine/v1/engine_pb.js";
import type {
  Policy,
  PolicyJson,
  PolicyValid,
} from "../../policy/v1/policy_pb.js";
import { file_cerbos_policy_v1_policy } from "../../policy/v1/policy_pb.js";
import type {
  Schema,
  SchemaJson,
  SchemaValid,
  ValidationError,
  ValidationErrorJson,
} from "../../schema/v1/schema_pb.js";
import { file_cerbos_schema_v1_schema } from "../../schema/v1/schema_pb.js";
import type {
  Empty,
  EmptyJson,
  Value,
  ValueJson,
} from "@bufbuild/protobuf/wkt";
import {
  file_google_protobuf_empty,
  file_google_protobuf_struct,
} from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb.js";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cerbos/response/v1/response.proto.
 */
export const file_cerbos_response_v1_response: GenFile =
  /*@__PURE__*/
  fileDesc(
    "CiFjZXJib3MvcmVzcG9uc2UvdjEvcmVzcG9uc2UucHJvdG8SEmNlcmJvcy5yZXNwb25zZS52MSLzCAoVUGxhblJlc291cmNlc1Jlc3BvbnNlEmQKCnJlcXVlc3RfaWQYASABKAlCUJJBTTIjUmVxdWVzdCBJRCBwcm92aWRlZCBpbiB0aGUgcmVxdWVzdC5KJiJjMmRiMTdiOC00ZjlmLTRmYjEtYWNmZC05MTYyYTAyYmU0MmIiEhIKBmFjdGlvbhgCIAEoCUICGAESPgoHYWN0aW9ucxgJIAMoCUItkkEqMgdBY3Rpb25zSh9bInZpZXc6cHVibGljIiwgImVkaXQ6cHJvZmlsZSJdEjoKDXJlc291cmNlX2tpbmQYAyABKAlCI5JBIDIOUmVzb3VyY2Uga2luZC5KDiJhbGJ1bTpvYmplY3QiEjsKDnBvbGljeV92ZXJzaW9uGAQgASgJQiOSQSAyE1RoZSBwb2xpY3kgdmVyc2lvbi5KCSJkZWZhdWx0IhJCCgZmaWx0ZXIYBSABKAsyJS5jZXJib3MuZW5naW5lLnYxLlBsYW5SZXNvdXJjZXNGaWx0ZXJCC5JBCDIGRmlsdGVyEnkKBG1ldGEYBiABKAsyLi5jZXJib3MucmVzcG9uc2UudjEuUGxhblJlc291cmNlc1Jlc3BvbnNlLk1ldGFCO5JBODI2T3B0aW9uYWwgbWV0YWRhdGEgYWJvdXQgdGhlIHJlcXVlc3QgZXZhbHVhdGlvbiBwcm9jZXNzEn4KEXZhbGlkYXRpb25fZXJyb3JzGAcgAygLMiEuY2VyYm9zLnNjaGVtYS52MS5WYWxpZGF0aW9uRXJyb3JCQJJBPTI7TGlzdCBvZiB2YWxpZGF0aW9uIGVycm9ycyAoaWYgc2NoZW1hIHZhbGlkYXRpb24gaXMgZW5hYmxlZCkSSwoOY2VyYm9zX2NhbGxfaWQYCCABKAlCM5JBMDIuQXVkaXQgbG9nIGNhbGwgSUQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcmVxdWVzdBrcAgoETWV0YRJQCgxmaWx0ZXJfZGVidWcYASABKAlCOpJBNzI1RmlsdGVyIHRleHR1YWwgcmVwcmVzZW50YXRpb24gZm9yIGRlYnVnZ2luZyBwdXJwb3Nlcy4SGQoNbWF0Y2hlZF9zY29wZRgCIAEoCUICGAEShQEKDm1hdGNoZWRfc2NvcGVzGAMgAygLMkEuY2VyYm9zLnJlc3BvbnNlLnYxLlBsYW5SZXNvdXJjZXNSZXNwb25zZS5NZXRhLk1hdGNoZWRTY29wZXNFbnRyeUIqkkEnMiVNYXRjaGVkIHBvbGljeSBzY29wZSBmb3IgZWFjaCBhY3Rpb24uGjQKEk1hdGNoZWRTY29wZXNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBOimSQSYKJDIiTWV0YWRhdGEgYWJvdXQgcmVxdWVzdCBldmFsdWF0aW9uLjo8kkE5CjcyNVJlc291cmNlcyBxdWVyeSBwbGFuIHJlc3BvbnNlIGZvciBhIHNldCBvZiByZXNvdXJjZXMuIoQUChhDaGVja1Jlc291cmNlU2V0UmVzcG9uc2USZAoKcmVxdWVzdF9pZBgBIAEoCUJQkkFNMiNSZXF1ZXN0IElEIHByb3ZpZGVkIGluIHRoZSByZXF1ZXN0LkomImMyZGIxN2I4LTRmOWYtNGZiMS1hY2ZkLTkxNjJhMDJiZTQyYiISyAIKEnJlc291cmNlX2luc3RhbmNlcxgCIAMoCzJDLmNlcmJvcy5yZXNwb25zZS52MS5DaGVja1Jlc291cmNlU2V0UmVzcG9uc2UuUmVzb3VyY2VJbnN0YW5jZXNFbnRyeULmAZJB4gEyS1Jlc3VsdHMgZm9yIGVhY2ggcmVzb3VyY2UgaW5zdGFuY2UsIGtleWVkIGJ5IHRoZSBJRCBzdXBwbGllZCBpbiB0aGUgcmVxdWVzdEqSAXsiWFgxMjUiOnsiYWN0aW9ucyI6eyJ2aWV3OioiOiJFRkZFQ1RfQUxMT1ciLCAiY29tbWVudCI6ICJFRkZFQ1RfQUxMT1cifX0sICJYWDIyNSI6eyJhY3Rpb25zIjp7InZpZXc6KiI6IkVGRkVDVF9ERU5ZIiwgImNvbW1lbnQiOiAiRUZGRUNUX0RFTlkifX19EnwKBG1ldGEYAyABKAsyMS5jZXJib3MucmVzcG9uc2UudjEuQ2hlY2tSZXNvdXJjZVNldFJlc3BvbnNlLk1ldGFCO5JBODI2T3B0aW9uYWwgbWV0YWRhdGEgYWJvdXQgdGhlIHJlcXVlc3QgZXZhbHVhdGlvbiBwcm9jZXNzGuMCCg9BY3Rpb25FZmZlY3RNYXAShQEKB2FjdGlvbnMYASADKAsySS5jZXJib3MucmVzcG9uc2UudjEuQ2hlY2tSZXNvdXJjZVNldFJlc3BvbnNlLkFjdGlvbkVmZmVjdE1hcC5BY3Rpb25zRW50cnlCKZJBJjIkTWFwcGluZyBvZiBlYWNoIGFjdGlvbiB0byBhbiBlZmZlY3QuEn4KEXZhbGlkYXRpb25fZXJyb3JzGAIgAygLMiEuY2VyYm9zLnNjaGVtYS52MS5WYWxpZGF0aW9uRXJyb3JCQJJBPTI7TGlzdCBvZiB2YWxpZGF0aW9uIGVycm9ycyAoaWYgc2NoZW1hIHZhbGlkYXRpb24gaXMgZW5hYmxlZCkaSAoMQWN0aW9uc0VudHJ5EgsKA2tleRgBIAEoCRInCgV2YWx1ZRgCIAEoDjIYLmNlcmJvcy5lZmZlY3QudjEuRWZmZWN0OgI4ARqfCwoETWV0YRK8AwoScmVzb3VyY2VfaW5zdGFuY2VzGAEgAygLMkguY2VyYm9zLnJlc3BvbnNlLnYxLkNoZWNrUmVzb3VyY2VTZXRSZXNwb25zZS5NZXRhLlJlc291cmNlSW5zdGFuY2VzRW50cnlC1QKSQdECMiJNZXRhZGF0YSBhYm91dCByZXNvdXJjZSBpbnN0YW5jZXMuSqoCeyJYWDEyNSI6IHsiYWN0aW9ucyI6IHsidmlldzoqIjp7Im1hdGNoZWRfcG9saWN5IjogImFsYnVtOm9iamVjdDpkZWZhdWx0In0sImNvbW1lbnQiOnsibWF0Y2hlZF9wb2xpY3kiOiAiYWxidW06b2JqZWN0OmRlZmF1bHQifX0sICJlZmZlY3RpdmVfZGVyaXZlZF9yb2xlcyI6IFsib3duZXIiXX0sICJYWDIyNSI6IHsiYWN0aW9ucyI6IHsidmlldzoqIjp7Im1hdGNoZWRfcG9saWN5IjogImFsYnVtOm9iamVjdDpkZWZhdWx0In0sImNvbW1lbnQiOnsibWF0Y2hlZF9wb2xpY3kiOiAiYWxidW06b2JqZWN0OmRlZmF1bHQifX19fRrrAQoKRWZmZWN0TWV0YRJgCg5tYXRjaGVkX3BvbGljeRgBIAEoCUJIkkFFMitQb2xpY3kgdGhhdCBtYXRjaGVkIHRvIHByb2R1Y2UgdGhpcyBlZmZlY3QuShYiYWxidW06b2JqZWN0OmRlZmF1bHQiEl8KDW1hdGNoZWRfc2NvcGUYAiABKAlCSJJBRTIxUG9saWN5IHNjb3BlIHRoYXQgbWF0Y2hlZCB0byBwcm9kdWNlIHRoaXMgZWZmZWN0LkoQImFjbWUuY29ycC5iYXNlIjoakkEXChUyE05hbWUgb2YgdGhlIGFjdGlvbi4axgQKCkFjdGlvbk1ldGESngIKB2FjdGlvbnMYASADKAsySS5jZXJib3MucmVzcG9uc2UudjEuQ2hlY2tSZXNvdXJjZVNldFJlc3BvbnNlLk1ldGEuQWN0aW9uTWV0YS5BY3Rpb25zRW50cnlCwQGSQb0BMk9NZXRhZGF0YSBhYm91dCB0aGUgZWZmZWN0IGNhbGN1bGF0ZWQgZm9yIGVhY2ggYWN0aW9uIG9uIHRoaXMgcmVzb3VyY2UgaW5zdGFuY2UuSmp7InZpZXc6KiI6eyJtYXRjaGVkX3BvbGljeSI6ICJhbGJ1bTpvYmplY3Q6ZGVmYXVsdCJ9LCJjb21tZW50Ijp7Im1hdGNoZWRfcG9saWN5IjogImFsYnVtOm9iamVjdDpkZWZhdWx0In19EmwKF2VmZmVjdGl2ZV9kZXJpdmVkX3JvbGVzGAIgAygJQkuSQUgyO0Rlcml2ZWQgcm9sZXMgdGhhdCB3ZXJlIGVmZmVjdGl2ZSBkdXJpbmcgcG9saWN5IGV2YWx1YXRpb24uSglbIm93bmVyIl0abAoMQWN0aW9uc0VudHJ5EgsKA2tleRgBIAEoCRJLCgV2YWx1ZRgCIAEoCzI8LmNlcmJvcy5yZXNwb25zZS52MS5DaGVja1Jlc291cmNlU2V0UmVzcG9uc2UuTWV0YS5FZmZlY3RNZXRhOgI4ATo7kkE4CjYyNFVuaXF1ZSByZXNvdXJjZSBpbnN0YW5jZSBJRCBzdXBwbGllZCBpbiB0aGUgcmVxdWVzdC4adgoWUmVzb3VyY2VJbnN0YW5jZXNFbnRyeRILCgNrZXkYASABKAkSSwoFdmFsdWUYAiABKAsyPC5jZXJib3MucmVzcG9uc2UudjEuQ2hlY2tSZXNvdXJjZVNldFJlc3BvbnNlLk1ldGEuQWN0aW9uTWV0YToCOAE6KZJBJgokMiJNZXRhZGF0YSBhYm91dCByZXF1ZXN0IGV2YWx1YXRpb24uGnYKFlJlc291cmNlSW5zdGFuY2VzRW50cnkSCwoDa2V5GAEgASgJEksKBXZhbHVlGAIgASgLMjwuY2VyYm9zLnJlc3BvbnNlLnYxLkNoZWNrUmVzb3VyY2VTZXRSZXNwb25zZS5BY3Rpb25FZmZlY3RNYXA6AjgBOjmSQTYKNDIyUG9saWN5IGV2YWx1YXRpb24gcmVzcG9uc2UgZm9yIGEgc2V0IG9mIHJlc291cmNlcy4inQYKGkNoZWNrUmVzb3VyY2VCYXRjaFJlc3BvbnNlEmQKCnJlcXVlc3RfaWQYASABKAlCUJJBTTIjUmVxdWVzdCBJRCBwcm92aWRlZCBpbiB0aGUgcmVxdWVzdC5KJiJjMmRiMTdiOC00ZjlmLTRmYjEtYWNmZC05MTYyYTAyYmU0MmIiEqoBCgdyZXN1bHRzGAIgAygLMj4uY2VyYm9zLnJlc3BvbnNlLnYxLkNoZWNrUmVzb3VyY2VCYXRjaFJlc3BvbnNlLkFjdGlvbkVmZmVjdE1hcEJZkkFWMhhSZXN1bHQgZm9yIGVhY2ggcmVzb3VyY2VKOlt7InJlc291cmNlSWQiOiJYWDEyNSIsImFjdGlvbnMiOnsidmlldyI6IkVGRkVDVF9BTExPVyJ9fV0argMKD0FjdGlvbkVmZmVjdE1hcBIuCgtyZXNvdXJjZV9pZBgBIAEoCUIZkkEWMgtSZXNvdXJjZSBJREoHIlhYMTI1IhKgAQoHYWN0aW9ucxgCIAMoCzJLLmNlcmJvcy5yZXNwb25zZS52MS5DaGVja1Jlc291cmNlQmF0Y2hSZXNwb25zZS5BY3Rpb25FZmZlY3RNYXAuQWN0aW9uc0VudHJ5QkKSQT8yJE1hcHBpbmcgb2YgZWFjaCBhY3Rpb24gdG8gYW4gZWZmZWN0LkoXeyJ2aWV3IjoiRUZGRUNUX0FMTE9XIn0SfgoRdmFsaWRhdGlvbl9lcnJvcnMYAyADKAsyIS5jZXJib3Muc2NoZW1hLnYxLlZhbGlkYXRpb25FcnJvckJAkkE9MjtMaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzIChpZiBzY2hlbWEgdmFsaWRhdGlvbiBpcyBlbmFibGVkKRpICgxBY3Rpb25zRW50cnkSCwoDa2V5GAEgASgJEicKBXZhbHVlGAIgASgOMhguY2VyYm9zLmVmZmVjdC52MS5FZmZlY3Q6AjgBOjuSQTgKNjI0UG9saWN5IGV2YWx1YXRpb24gcmVzcG9uc2UgZm9yIGEgYmF0Y2ggb2YgcmVzb3VyY2VzLiLlFQoWQ2hlY2tSZXNvdXJjZXNSZXNwb25zZRJkCgpyZXF1ZXN0X2lkGAEgASgJQlCSQU0yI1JlcXVlc3QgSUQgcHJvdmlkZWQgaW4gdGhlIHJlcXVlc3QuSiYiYzJkYjE3YjgtNGY5Zi00ZmIxLWFjZmQtOTE2MmEwMmJlNDJiIhLaAQoHcmVzdWx0cxgCIAMoCzI2LmNlcmJvcy5yZXNwb25zZS52MS5DaGVja1Jlc291cmNlc1Jlc3BvbnNlLlJlc3VsdEVudHJ5QpABkkGMATIYUmVzdWx0IGZvciBlYWNoIHJlc291cmNlSnBbeyJyZXNvdXJjZSI6IHsiSWQiOiJYWDEyNSIsICJraW5kIjoiYWxidW06b2JqZWN0In0sICJhY3Rpb25zIjp7InZpZXciOiJFRkZFQ1RfQUxMT1ciLCJjb21tZW50IjoiRUZGRUNUX0RFTlkifX1dEksKDmNlcmJvc19jYWxsX2lkGAMgASgJQjOSQTAyLkF1ZGl0IGxvZyBjYWxsIElEIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHJlcXVlc3QahhIKC1Jlc3VsdEVudHJ5ElEKCHJlc291cmNlGAEgASgLMj8uY2VyYm9zLnJlc3BvbnNlLnYxLkNoZWNrUmVzb3VyY2VzUmVzcG9uc2UuUmVzdWx0RW50cnkuUmVzb3VyY2USmAEKB2FjdGlvbnMYAiADKAsyQy5jZXJib3MucmVzcG9uc2UudjEuQ2hlY2tSZXNvdXJjZXNSZXNwb25zZS5SZXN1bHRFbnRyeS5BY3Rpb25zRW50cnlCQpJBPzIkTWFwcGluZyBvZiBlYWNoIGFjdGlvbiB0byBhbiBlZmZlY3QuShd7InZpZXciOiJFRkZFQ1RfQUxMT1cifRJ+ChF2YWxpZGF0aW9uX2Vycm9ycxgDIAMoCzIhLmNlcmJvcy5zY2hlbWEudjEuVmFsaWRhdGlvbkVycm9yQkCSQT0yO0xpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMgKGlmIHNjaGVtYSB2YWxpZGF0aW9uIGlzIGVuYWJsZWQpEpICCgRtZXRhGAQgASgLMjsuY2VyYm9zLnJlc3BvbnNlLnYxLkNoZWNrUmVzb3VyY2VzUmVzcG9uc2UuUmVzdWx0RW50cnkuTWV0YULGAZJBwgEyIE1ldGFkYXRhIGFib3V0IHBvbGljeSBldmFsdWF0aW9uSp0BeyJhY3Rpb25zIjogeyJ2aWV3OioiOnsibWF0Y2hlZF9wb2xpY3kiOiAiYWxidW06b2JqZWN0OmRlZmF1bHQifSwiY29tbWVudCI6eyJtYXRjaGVkX3BvbGljeSI6ICJhbGJ1bTpvYmplY3Q6ZGVmYXVsdCJ9fSwgImVmZmVjdGl2ZV9kZXJpdmVkX3JvbGVzIjogWyJvd25lciJdfRLtAQoHb3V0cHV0cxgFIAMoCzIdLmNlcmJvcy5lbmdpbmUudjEuT3V0cHV0RW50cnlCvAGSQbgBMixPdXRwdXQgZm9yIGVhY2ggcnVsZSB3aXRoIG91dHB1dHMgY29uZmlndXJlZEqHAVt7InNyYyI6ICJyZXNvdXJjZS5leHBlbnNlLnYxL2FjbWUjcnVsZS0wMDEiLCAidmFsIjogInZpZXdfYWxsb3dlZDphbGljZSJ9LCB7InNyYyI6ICJyZXNvdXJjZS5leHBlbnNlLnYxL2FjbWUjcnVsZS0wMDIiLCAidmFsIjogImZvbyJ9XRqRBAoIUmVzb3VyY2USNQoCaWQYASABKAlCKZJBJjIbSUQgb2YgdGhlIHJlc291cmNlIGluc3RhbmNlSgciWFgxMjUiEksKBGtpbmQYAiABKAlCPZJBOjIpTmFtZSBvZiB0aGUgcmVzb3VyY2Uga2luZCBiZWluZyBhY2Nlc3NlZC5KDSJhbGJ1bTpwaG90byISsAEKDnBvbGljeV92ZXJzaW9uGAMgASgJQpcBkkGTATJ8VGhlIHBvbGljeSB2ZXJzaW9uIHRvIHVzZSB0byBldmFsdWF0ZSB0aGlzIHJlcXVlc3QuIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgZGVmYXVsdCB0byB0aGUgc2VydmVyLWNvbmZpZ3VyZWQgZGVmYXVsdCB2ZXJzaW9uLkoJImRlZmF1bHQiigEHXltcd10qJBLNAQoFc2NvcGUYBCABKAlCvQGSQbkBMn1BIGRvdC1zZXBhcmF0ZWQgc2NvcGUgdGhhdCBkZXNjcmliZXMgdGhlIGhpZXJhcmNoeSB0aGlzIHJlc291cmNlIGJlbG9uZ3MgdG8uIFRoaXMgaXMgdXNlZCBmb3IgZGV0ZXJtaW5pbmcgcG9saWN5IGluaGVyaXRhbmNlLkoLImFjbWUuY29ycCKKASpeKF4kfFwufFswLTlhLXpBLVpdW1x3XC1dKihcLlx3W1x3XC1dKikqKSQapQYKBE1ldGESnQIKB2FjdGlvbnMYASADKAsySC5jZXJib3MucmVzcG9uc2UudjEuQ2hlY2tSZXNvdXJjZXNSZXNwb25zZS5SZXN1bHRFbnRyeS5NZXRhLkFjdGlvbnNFbnRyeULBAZJBvQEyT01ldGFkYXRhIGFib3V0IHRoZSBlZmZlY3QgY2FsY3VsYXRlZCBmb3IgZWFjaCBhY3Rpb24gb24gdGhpcyByZXNvdXJjZSBpbnN0YW5jZS5KansidmlldzoqIjp7Im1hdGNoZWRfcG9saWN5IjogImFsYnVtOm9iamVjdDpkZWZhdWx0In0sImNvbW1lbnQiOnsibWF0Y2hlZF9wb2xpY3kiOiAiYWxidW06b2JqZWN0OmRlZmF1bHQifX0SbAoXZWZmZWN0aXZlX2Rlcml2ZWRfcm9sZXMYAiADKAlCS5JBSDI7RGVyaXZlZCByb2xlcyB0aGF0IHdlcmUgZWZmZWN0aXZlIGR1cmluZyBwb2xpY3kgZXZhbHVhdGlvbi5KCVsib3duZXIiXRrrAQoKRWZmZWN0TWV0YRJgCg5tYXRjaGVkX3BvbGljeRgBIAEoCUJIkkFFMitQb2xpY3kgdGhhdCBtYXRjaGVkIHRvIHByb2R1Y2UgdGhpcyBlZmZlY3QuShYiYWxidW06b2JqZWN0OmRlZmF1bHQiEl8KDW1hdGNoZWRfc2NvcGUYAiABKAlCSJJBRTIxUG9saWN5IHNjb3BlIHRoYXQgbWF0Y2hlZCB0byBwcm9kdWNlIHRoaXMgZWZmZWN0LkoQImFjbWUuY29ycC5iYXNlIjoakkEXChUyE05hbWUgb2YgdGhlIGFjdGlvbi4adgoMQWN0aW9uc0VudHJ5EgsKA2tleRgBIAEoCRJVCgV2YWx1ZRgCIAEoCzJGLmNlcmJvcy5yZXNwb25zZS52MS5DaGVja1Jlc291cmNlc1Jlc3BvbnNlLlJlc3VsdEVudHJ5Lk1ldGEuRWZmZWN0TWV0YToCOAE6KZJBJgokMiJNZXRhZGF0YSBhYm91dCByZXF1ZXN0IGV2YWx1YXRpb24uGkgKDEFjdGlvbnNFbnRyeRILCgNrZXkYASABKAkSJwoFdmFsdWUYAiABKA4yGC5jZXJib3MuZWZmZWN0LnYxLkVmZmVjdDoCOAE6MpJBLwotMitSZXNwb25zZSBmcm9tIHRoZSBjaGVjayByZXNvdXJjZXMgQVBJIGNhbGwuImcKGUFkZE9yVXBkYXRlUG9saWN5UmVzcG9uc2USJwoHc3VjY2VzcxgBIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eTohkkEeChwyGkFkZC91cGRhdGUgcG9saWN5IHJlc3BvbnNlIr4BChtMaXN0QXVkaXRMb2dFbnRyaWVzUmVzcG9uc2USOwoQYWNjZXNzX2xvZ19lbnRyeRgBIAEoCzIfLmNlcmJvcy5hdWRpdC52MS5BY2Nlc3NMb2dFbnRyeUgAEj8KEmRlY2lzaW9uX2xvZ19lbnRyeRgCIAEoCzIhLmNlcmJvcy5hdWRpdC52MS5EZWNpc2lvbkxvZ0VudHJ5SAA6GJJBFQoTMhFBdWRpdCBsb2cgc3RyZWFtLkIHCgVlbnRyeSJmChJTZXJ2ZXJJbmZvUmVzcG9uc2USDwoHdmVyc2lvbhgBIAEoCRIOCgZjb21taXQYAiABKAkSEgoKYnVpbGRfZGF0ZRgDIAEoCTobkkEYChYyFFNlcnZlciBpbmZvIHJlc3BvbnNlIl8KFExpc3RQb2xpY2llc1Jlc3BvbnNlEhIKCnBvbGljeV9pZHMYASADKAk6M5JBMAouMixMaXN0IG9mIHBvbGljaWVzIHN0b3JlZCBpbiB0aGUgQ2VyYm9zIHNlcnZlciJbChFHZXRQb2xpY3lSZXNwb25zZRIqCghwb2xpY2llcxgBIAMoCzIYLmNlcmJvcy5wb2xpY3kudjEuUG9saWN5OhqSQRcKFTITR2V0IHBvbGljeSByZXNwb25zZSJPChREZWxldGVQb2xpY3lSZXNwb25zZRIYChBkZWxldGVkX3BvbGljaWVzGAEgASgNOh2SQRoKGDIWRGVsZXRlIHBvbGljeSByZXNwb25zZSK4AQoYRGVsZXRlUG9saWN5RXJyb3JEZXRhaWxzEkgKBmVycm9ycxgBIAMoCzI4LmNlcmJvcy5yZXNwb25zZS52MS5EZWxldGVQb2xpY3lFcnJvckRldGFpbHMuRXJyb3JzRW50cnkaUgoLRXJyb3JzRW50cnkSCwoDa2V5GAEgASgJEjIKBXZhbHVlGAIgASgLMiMuY2VyYm9zLnJlc3BvbnNlLnYxLkludGVncml0eUVycm9yczoCOAEiUgoVRGlzYWJsZVBvbGljeVJlc3BvbnNlEhkKEWRpc2FibGVkX3BvbGljaWVzGAEgASgNOh6SQRsKGTIXRGlzYWJsZSBwb2xpY3kgcmVzcG9uc2UiugEKGURpc2FibGVQb2xpY3lFcnJvckRldGFpbHMSSQoGZXJyb3JzGAEgAygLMjkuY2VyYm9zLnJlc3BvbnNlLnYxLkRpc2FibGVQb2xpY3lFcnJvckRldGFpbHMuRXJyb3JzRW50cnkaUgoLRXJyb3JzRW50cnkSCwoDa2V5GAEgASgJEjIKBXZhbHVlGAIgASgLMiMuY2VyYm9zLnJlc3BvbnNlLnYxLkludGVncml0eUVycm9yczoCOAEinAIKD0ludGVncml0eUVycm9ycxJQChJicmVha3Nfc2NvcGVfY2hhaW4YASABKAsyNC5jZXJib3MucmVzcG9uc2UudjEuSW50ZWdyaXR5RXJyb3JzLkJyZWFrc1Njb3BlQ2hhaW4SXwoacmVxdWlyZWRfYnlfb3RoZXJfcG9saWNpZXMYAiABKAsyOy5jZXJib3MucmVzcG9uc2UudjEuSW50ZWdyaXR5RXJyb3JzLlJlcXVpcmVkQnlPdGhlclBvbGljaWVzGicKEEJyZWFrc1Njb3BlQ2hhaW4SEwoLZGVzY2VuZGFudHMYASADKAkaLQoXUmVxdWlyZWRCeU90aGVyUG9saWNpZXMSEgoKZGVwZW5kZW50cxgBIAMoCSJPChRFbmFibGVQb2xpY3lSZXNwb25zZRIYChBlbmFibGVkX3BvbGljaWVzGAEgASgNOh2SQRoKGDIWRW5hYmxlIHBvbGljeSByZXNwb25zZSKLFQoXSW5zcGVjdFBvbGljaWVzUmVzcG9uc2USSQoHcmVzdWx0cxgBIAMoCzI4LmNlcmJvcy5yZXNwb25zZS52MS5JbnNwZWN0UG9saWNpZXNSZXNwb25zZS5SZXN1bHRzRW50cnkamAIKCUF0dHJpYnV0ZRJ2CgRraW5kGAEgASgOMjouY2VyYm9zLnJlc3BvbnNlLnYxLkluc3BlY3RQb2xpY2llc1Jlc3BvbnNlLkF0dHJpYnV0ZS5LaW5kQiySQSkyJ0tpbmQgb2YgdGhlIGF0dHJpYnV0ZSBiZWluZyByZWZlcmVuY2VkLhI6CgRuYW1lGAIgASgJQiySQSkyJ05hbWUgb2YgdGhlIGF0dHJpYnV0ZSBiZWluZyByZWZlcmVuY2VkLiJXCgRLaW5kEhQKEEtJTkRfVU5TUEVDSUZJRUQQABIcChhLSU5EX1BSSU5DSVBBTF9BVFRSSUJVVEUQARIbChdLSU5EX1JFU09VUkNFX0FUVFJJQlVURRACGu0CCgtEZXJpdmVkUm9sZRI7CgRuYW1lGAEgASgJQi2SQSoyKERlcml2ZWQgcm9sZSBuYW1lIGRlZmluZWQgaW4gdGhlIHBvbGljeS4SgAEKBGtpbmQYAiABKA4yPC5jZXJib3MucmVzcG9uc2UudjEuSW5zcGVjdFBvbGljaWVzUmVzcG9uc2UuRGVyaXZlZFJvbGUuS2luZEI0kkExMi9LaW5kIG9mIHRoZSBkZXJpdmVkIHJvbGUgZGVmaW5lZCBpbiB0aGUgcG9saWN5LhJGCgZzb3VyY2UYAyABKAlCNpJBMzIxU291cmNlIG9mIHRoZSBkZXJpdmVkIHJvbGUgZGVmaW5lZCBpbiB0aGUgcG9saWN5LiJWCgRLaW5kEhQKEEtJTkRfVU5TUEVDSUZJRUQQABISCg5LSU5EX1VOREVGSU5FRBABEhEKDUtJTkRfRVhQT1JURUQQAhIRCg1LSU5EX0lNUE9SVEVEEAMawAQKCENvbnN0YW50EjcKBG5hbWUYASABKAlCKZJBJjIkQ29uc3RhbnQgbmFtZSBkZWZpbmVkIGluIHRoZSBwb2xpY3kuElwKBXZhbHVlGAIgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlQjWSQTIyMFJhdyB2YWx1ZSBvZiB0aGUgY29uc3RhbnQgZGVmaW5lZCBpbiB0aGUgcG9saWN5LhJ5CgRraW5kGAMgASgOMjkuY2VyYm9zLnJlc3BvbnNlLnYxLkluc3BlY3RQb2xpY2llc1Jlc3BvbnNlLkNvbnN0YW50LktpbmRCMJJBLTIrS2luZCBvZiB0aGUgY29uc3RhbnQgZGVmaW5lZCBpbiB0aGUgcG9saWN5LhJnCgZzb3VyY2UYBCABKAlCV5JBVDJSU291cmNlIG9mIHRoZSBjb25zdGFudCBkZWZpbmVkIGluIHRoZSBwb2xpY3kuIE9ubHkgZXhpc3RzIGlmIHRoZSBraW5kIGlzIGltcG9ydGVkLhI/CgR1c2VkGAUgASgIQjGSQS4yLFdoZXRoZXIgdGhlIGNvbnN0YW50IGlzIHVzZWQgaW4gYSBjb25kaXRpb24uIngKBEtpbmQSFAoQS0lORF9VTlNQRUNJRklFRBAAEhEKDUtJTkRfRVhQT1JURUQQARIRCg1LSU5EX0lNUE9SVEVEEAISDgoKS0lORF9MT0NBTBADEhIKDktJTkRfVU5ERUZJTkVEEAQSEAoMS0lORF9VTktOT1dOEAUaqAQKCFZhcmlhYmxlEjcKBG5hbWUYASABKAlCKZJBJjIkVmFyaWFibGUgbmFtZSBkZWZpbmVkIGluIHRoZSBwb2xpY3kuEkQKBXZhbHVlGAIgASgJQjWSQTIyMFJhdyB2YWx1ZSBvZiB0aGUgdmFyaWFibGUgZGVmaW5lZCBpbiB0aGUgcG9saWN5LhJ5CgRraW5kGAMgASgOMjkuY2VyYm9zLnJlc3BvbnNlLnYxLkluc3BlY3RQb2xpY2llc1Jlc3BvbnNlLlZhcmlhYmxlLktpbmRCMJJBLTIrS2luZCBvZiB0aGUgdmFyaWFibGUgZGVmaW5lZCBpbiB0aGUgcG9saWN5LhJnCgZzb3VyY2UYBCABKAlCV5JBVDJSU291cmNlIG9mIHRoZSB2YXJpYWJsZSBkZWZpbmVkIGluIHRoZSBwb2xpY3kuIE9ubHkgZXhpc3RzIGlmIHRoZSBraW5kIGlzIGltcG9ydGVkLhI/CgR1c2VkGAUgASgIQjGSQS4yLFdoZXRoZXIgdGhlIHZhcmlhYmxlIGlzIHVzZWQgaW4gYSBjb25kaXRpb24uIngKBEtpbmQSFAoQS0lORF9VTlNQRUNJRklFRBAAEhEKDUtJTkRfRVhQT1JURUQQARIRCg1LSU5EX0lNUE9SVEVEEAISDgoKS0lORF9MT0NBTBADEhIKDktJTkRfVU5ERUZJTkVEEAQSEAoMS0lORF9VTktOT1dOEAUapQUKBlJlc3VsdBI0CgdhY3Rpb25zGAEgAygJQiOSQSAyHkFjdGlvbnMgZGVmaW5lZCBpbiB0aGUgcG9saWN5LhJxCgl2YXJpYWJsZXMYAiADKAsyNC5jZXJib3MucmVzcG9uc2UudjEuSW5zcGVjdFBvbGljaWVzUmVzcG9uc2UuVmFyaWFibGVCKJJBJTIjVmFyaWFibGVzIHJlZmVyZW5jZWQgaW4gdGhlIHBvbGljeS4SigEKCXBvbGljeV9pZBgDIAEoCUJ3kkF0MnJGb3IgYmxvYiwgZGlzaywgYW5kIGdpdCBzdG9yZXMgcG9saWN5IElEIGlzIHRoZSBmaWxlIG5hbWUuIEZvciBvdGhlciBzdG9yZXMgaXQgaXMgPGtpbmQ+LjxuYW1lPi48dmVyc2lvbj4vPHNjb3BlPi4SfAoNZGVyaXZlZF9yb2xlcxgEIAMoCzI3LmNlcmJvcy5yZXNwb25zZS52MS5JbnNwZWN0UG9saWNpZXNSZXNwb25zZS5EZXJpdmVkUm9sZUIskkEpMidEZXJpdmVkIHJvbGVzIHJlZmVyZW5jZWQgaW4gdGhlIHBvbGljeS4SdAoKYXR0cmlidXRlcxgFIAMoCzI1LmNlcmJvcy5yZXNwb25zZS52MS5JbnNwZWN0UG9saWNpZXNSZXNwb25zZS5BdHRyaWJ1dGVCKZJBJjIkQXR0cmlidXRlcyByZWZlcmVuY2VkIGluIHRoZSBwb2xpY3kuEnEKCWNvbnN0YW50cxgGIAMoCzI0LmNlcmJvcy5yZXNwb25zZS52MS5JbnNwZWN0UG9saWNpZXNSZXNwb25zZS5Db25zdGFudEIokkElMiNDb25zdGFudHMgcmVmZXJlbmNlZCBpbiB0aGUgcG9saWN5LhpiCgxSZXN1bHRzRW50cnkSCwoDa2V5GAEgASgJEkEKBXZhbHVlGAIgASgLMjIuY2VyYm9zLnJlc3BvbnNlLnYxLkluc3BlY3RQb2xpY2llc1Jlc3BvbnNlLlJlc3VsdDoCOAE6IJJBHQobMhlJbnNwZWN0IHBvbGljaWVzIHJlc3BvbnNlIj4KGUFkZE9yVXBkYXRlU2NoZW1hUmVzcG9uc2U6IZJBHgocMhpBZGQvdXBkYXRlIHNjaGVtYSByZXNwb25zZSJKChNMaXN0U2NoZW1hc1Jlc3BvbnNlEhIKCnNjaGVtYV9pZHMYASADKAk6H5JBHAoaMhhMaXN0IHNjaGVtYSBpZHMgcmVzcG9uc2UiXQoRR2V0U2NoZW1hUmVzcG9uc2USKQoHc2NoZW1hcxgBIAMoCzIYLmNlcmJvcy5zY2hlbWEudjEuU2NoZW1hOh2SQRoKGDIWR2V0IHNjaGVtYShzKSByZXNwb25zZSJRChREZWxldGVTY2hlbWFSZXNwb25zZRIXCg9kZWxldGVkX3NjaGVtYXMYASABKA06IJJBHQobMhlEZWxldGUgc2NoZW1hKHMpIHJlc3BvbnNlIjMKE1JlbG9hZFN0b3JlUmVzcG9uc2U6HJJBGQoXMhVSZWxvYWQgc3RvcmUgcmVzcG9uc2UiWwobUHVyZ2VTdG9yZVJldmlzaW9uc1Jlc3BvbnNlEhUKDWFmZmVjdGVkX3Jvd3MYASABKA06JZJBIgogMh5QdXJnZSBzdG9yZSByZXZpc2lvbnMgcmVzcG9uc2VCdwoaZGV2LmNlcmJvcy5hcGkudjEucmVzcG9uc2VaQGdpdGh1Yi5jb20vY2VyYm9zL2NlcmJvcy9hcGkvZ2VucGIvY2VyYm9zL3Jlc3BvbnNlL3YxO3Jlc3BvbnNldjGqAhZDZXJib3MuQXBpLlYxLlJlc3BvbnNlYgZwcm90bzM",
    [
      file_cerbos_audit_v1_audit,
      file_cerbos_effect_v1_effect,
      file_cerbos_engine_v1_engine,
      file_cerbos_policy_v1_policy,
      file_cerbos_schema_v1_schema,
      file_google_protobuf_empty,
      file_google_protobuf_struct,
      file_protoc_gen_openapiv2_options_annotations,
    ],
  );

/**
 * @generated from message cerbos.response.v1.PlanResourcesResponse
 */
export type PlanResourcesResponse =
  Message<"cerbos.response.v1.PlanResourcesResponse"> & {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;

    /**
     * @generated from field: string action = 2 [deprecated = true];
     * @deprecated
     */
    action: string;

    /**
     * @generated from field: repeated string actions = 9;
     */
    actions: string[];

    /**
     * @generated from field: string resource_kind = 3;
     */
    resourceKind: string;

    /**
     * @generated from field: string policy_version = 4;
     */
    policyVersion: string;

    /**
     * @generated from field: cerbos.engine.v1.PlanResourcesFilter filter = 5;
     */
    filter?: PlanResourcesFilter;

    /**
     * @generated from field: cerbos.response.v1.PlanResourcesResponse.Meta meta = 6;
     */
    meta?: PlanResourcesResponse_Meta;

    /**
     * @generated from field: repeated cerbos.schema.v1.ValidationError validation_errors = 7;
     */
    validationErrors: ValidationError[];

    /**
     * @generated from field: string cerbos_call_id = 8;
     */
    cerbosCallId: string;
  };

/**
 * @generated from message cerbos.response.v1.PlanResourcesResponse
 */
export type PlanResourcesResponseJson = {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId?: string;

  /**
   * @generated from field: string action = 2 [deprecated = true];
   * @deprecated
   */
  action?: string;

  /**
   * @generated from field: repeated string actions = 9;
   */
  actions?: string[];

  /**
   * @generated from field: string resource_kind = 3;
   */
  resourceKind?: string;

  /**
   * @generated from field: string policy_version = 4;
   */
  policyVersion?: string;

  /**
   * @generated from field: cerbos.engine.v1.PlanResourcesFilter filter = 5;
   */
  filter?: PlanResourcesFilterJson;

  /**
   * @generated from field: cerbos.response.v1.PlanResourcesResponse.Meta meta = 6;
   */
  meta?: PlanResourcesResponse_MetaJson;

  /**
   * @generated from field: repeated cerbos.schema.v1.ValidationError validation_errors = 7;
   */
  validationErrors?: ValidationErrorJson[];

  /**
   * @generated from field: string cerbos_call_id = 8;
   */
  cerbosCallId?: string;
};

export type PlanResourcesResponseValid = PlanResourcesResponse;

/**
 * Describes the message cerbos.response.v1.PlanResourcesResponse.
 * Use `create(PlanResourcesResponseSchema)` to create a new message.
 */
export const PlanResourcesResponseSchema: GenMessage<
  PlanResourcesResponse,
  { jsonType: PlanResourcesResponseJson; validType: PlanResourcesResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 0);

/**
 * @generated from message cerbos.response.v1.PlanResourcesResponse.Meta
 */
export type PlanResourcesResponse_Meta =
  Message<"cerbos.response.v1.PlanResourcesResponse.Meta"> & {
    /**
     * @generated from field: string filter_debug = 1;
     */
    filterDebug: string;

    /**
     * @generated from field: string matched_scope = 2 [deprecated = true];
     * @deprecated
     */
    matchedScope: string;

    /**
     * @generated from field: map<string, string> matched_scopes = 3;
     */
    matchedScopes: { [key: string]: string };
  };

/**
 * @generated from message cerbos.response.v1.PlanResourcesResponse.Meta
 */
export type PlanResourcesResponse_MetaJson = {
  /**
   * @generated from field: string filter_debug = 1;
   */
  filterDebug?: string;

  /**
   * @generated from field: string matched_scope = 2 [deprecated = true];
   * @deprecated
   */
  matchedScope?: string;

  /**
   * @generated from field: map<string, string> matched_scopes = 3;
   */
  matchedScopes?: { [key: string]: string };
};

export type PlanResourcesResponse_MetaValid = PlanResourcesResponse_Meta;

/**
 * Describes the message cerbos.response.v1.PlanResourcesResponse.Meta.
 * Use `create(PlanResourcesResponse_MetaSchema)` to create a new message.
 */
export const PlanResourcesResponse_MetaSchema: GenMessage<
  PlanResourcesResponse_Meta,
  {
    jsonType: PlanResourcesResponse_MetaJson;
    validType: PlanResourcesResponse_MetaValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 0, 0);

/**
 * Deprecated. See CheckResourcesResponse.
 *
 * @generated from message cerbos.response.v1.CheckResourceSetResponse
 */
export type CheckResourceSetResponse =
  Message<"cerbos.response.v1.CheckResourceSetResponse"> & {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;

    /**
     * @generated from field: map<string, cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap> resource_instances = 2;
     */
    resourceInstances: {
      [key: string]: CheckResourceSetResponse_ActionEffectMap;
    };

    /**
     * @generated from field: cerbos.response.v1.CheckResourceSetResponse.Meta meta = 3;
     */
    meta?: CheckResourceSetResponse_Meta;
  };

/**
 * Deprecated. See CheckResourcesResponse.
 *
 * @generated from message cerbos.response.v1.CheckResourceSetResponse
 */
export type CheckResourceSetResponseJson = {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId?: string;

  /**
   * @generated from field: map<string, cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap> resource_instances = 2;
   */
  resourceInstances?: {
    [key: string]: CheckResourceSetResponse_ActionEffectMapJson;
  };

  /**
   * @generated from field: cerbos.response.v1.CheckResourceSetResponse.Meta meta = 3;
   */
  meta?: CheckResourceSetResponse_MetaJson;
};

export type CheckResourceSetResponseValid = CheckResourceSetResponse;

/**
 * Describes the message cerbos.response.v1.CheckResourceSetResponse.
 * Use `create(CheckResourceSetResponseSchema)` to create a new message.
 */
export const CheckResourceSetResponseSchema: GenMessage<
  CheckResourceSetResponse,
  {
    jsonType: CheckResourceSetResponseJson;
    validType: CheckResourceSetResponseValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 1);

/**
 * @generated from message cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap
 */
export type CheckResourceSetResponse_ActionEffectMap =
  Message<"cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap"> & {
    /**
     * @generated from field: map<string, cerbos.effect.v1.Effect> actions = 1;
     */
    actions: { [key: string]: Effect };

    /**
     * @generated from field: repeated cerbos.schema.v1.ValidationError validation_errors = 2;
     */
    validationErrors: ValidationError[];
  };

/**
 * @generated from message cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap
 */
export type CheckResourceSetResponse_ActionEffectMapJson = {
  /**
   * @generated from field: map<string, cerbos.effect.v1.Effect> actions = 1;
   */
  actions?: { [key: string]: EffectJson };

  /**
   * @generated from field: repeated cerbos.schema.v1.ValidationError validation_errors = 2;
   */
  validationErrors?: ValidationErrorJson[];
};

export type CheckResourceSetResponse_ActionEffectMapValid =
  CheckResourceSetResponse_ActionEffectMap;

/**
 * Describes the message cerbos.response.v1.CheckResourceSetResponse.ActionEffectMap.
 * Use `create(CheckResourceSetResponse_ActionEffectMapSchema)` to create a new message.
 */
export const CheckResourceSetResponse_ActionEffectMapSchema: GenMessage<
  CheckResourceSetResponse_ActionEffectMap,
  {
    jsonType: CheckResourceSetResponse_ActionEffectMapJson;
    validType: CheckResourceSetResponse_ActionEffectMapValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 1, 0);

/**
 * @generated from message cerbos.response.v1.CheckResourceSetResponse.Meta
 */
export type CheckResourceSetResponse_Meta =
  Message<"cerbos.response.v1.CheckResourceSetResponse.Meta"> & {
    /**
     * @generated from field: map<string, cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta> resource_instances = 1;
     */
    resourceInstances: {
      [key: string]: CheckResourceSetResponse_Meta_ActionMeta;
    };
  };

/**
 * @generated from message cerbos.response.v1.CheckResourceSetResponse.Meta
 */
export type CheckResourceSetResponse_MetaJson = {
  /**
   * @generated from field: map<string, cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta> resource_instances = 1;
   */
  resourceInstances?: {
    [key: string]: CheckResourceSetResponse_Meta_ActionMetaJson;
  };
};

export type CheckResourceSetResponse_MetaValid = CheckResourceSetResponse_Meta;

/**
 * Describes the message cerbos.response.v1.CheckResourceSetResponse.Meta.
 * Use `create(CheckResourceSetResponse_MetaSchema)` to create a new message.
 */
export const CheckResourceSetResponse_MetaSchema: GenMessage<
  CheckResourceSetResponse_Meta,
  {
    jsonType: CheckResourceSetResponse_MetaJson;
    validType: CheckResourceSetResponse_MetaValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 1, 1);

/**
 * @generated from message cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta
 */
export type CheckResourceSetResponse_Meta_EffectMeta =
  Message<"cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta"> & {
    /**
     * @generated from field: string matched_policy = 1;
     */
    matchedPolicy: string;

    /**
     * @generated from field: string matched_scope = 2;
     */
    matchedScope: string;
  };

/**
 * @generated from message cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta
 */
export type CheckResourceSetResponse_Meta_EffectMetaJson = {
  /**
   * @generated from field: string matched_policy = 1;
   */
  matchedPolicy?: string;

  /**
   * @generated from field: string matched_scope = 2;
   */
  matchedScope?: string;
};

export type CheckResourceSetResponse_Meta_EffectMetaValid =
  CheckResourceSetResponse_Meta_EffectMeta;

/**
 * Describes the message cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta.
 * Use `create(CheckResourceSetResponse_Meta_EffectMetaSchema)` to create a new message.
 */
export const CheckResourceSetResponse_Meta_EffectMetaSchema: GenMessage<
  CheckResourceSetResponse_Meta_EffectMeta,
  {
    jsonType: CheckResourceSetResponse_Meta_EffectMetaJson;
    validType: CheckResourceSetResponse_Meta_EffectMetaValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 1, 1, 0);

/**
 * @generated from message cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta
 */
export type CheckResourceSetResponse_Meta_ActionMeta =
  Message<"cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta"> & {
    /**
     * @generated from field: map<string, cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta> actions = 1;
     */
    actions: { [key: string]: CheckResourceSetResponse_Meta_EffectMeta };

    /**
     * @generated from field: repeated string effective_derived_roles = 2;
     */
    effectiveDerivedRoles: string[];
  };

/**
 * @generated from message cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta
 */
export type CheckResourceSetResponse_Meta_ActionMetaJson = {
  /**
   * @generated from field: map<string, cerbos.response.v1.CheckResourceSetResponse.Meta.EffectMeta> actions = 1;
   */
  actions?: { [key: string]: CheckResourceSetResponse_Meta_EffectMetaJson };

  /**
   * @generated from field: repeated string effective_derived_roles = 2;
   */
  effectiveDerivedRoles?: string[];
};

export type CheckResourceSetResponse_Meta_ActionMetaValid =
  CheckResourceSetResponse_Meta_ActionMeta;

/**
 * Describes the message cerbos.response.v1.CheckResourceSetResponse.Meta.ActionMeta.
 * Use `create(CheckResourceSetResponse_Meta_ActionMetaSchema)` to create a new message.
 */
export const CheckResourceSetResponse_Meta_ActionMetaSchema: GenMessage<
  CheckResourceSetResponse_Meta_ActionMeta,
  {
    jsonType: CheckResourceSetResponse_Meta_ActionMetaJson;
    validType: CheckResourceSetResponse_Meta_ActionMetaValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 1, 1, 1);

/**
 * Deprecated. See CheckResourcesResponse.
 *
 * @generated from message cerbos.response.v1.CheckResourceBatchResponse
 */
export type CheckResourceBatchResponse =
  Message<"cerbos.response.v1.CheckResourceBatchResponse"> & {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;

    /**
     * @generated from field: repeated cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap results = 2;
     */
    results: CheckResourceBatchResponse_ActionEffectMap[];
  };

/**
 * Deprecated. See CheckResourcesResponse.
 *
 * @generated from message cerbos.response.v1.CheckResourceBatchResponse
 */
export type CheckResourceBatchResponseJson = {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId?: string;

  /**
   * @generated from field: repeated cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap results = 2;
   */
  results?: CheckResourceBatchResponse_ActionEffectMapJson[];
};

export type CheckResourceBatchResponseValid = CheckResourceBatchResponse;

/**
 * Describes the message cerbos.response.v1.CheckResourceBatchResponse.
 * Use `create(CheckResourceBatchResponseSchema)` to create a new message.
 */
export const CheckResourceBatchResponseSchema: GenMessage<
  CheckResourceBatchResponse,
  {
    jsonType: CheckResourceBatchResponseJson;
    validType: CheckResourceBatchResponseValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 2);

/**
 * @generated from message cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap
 */
export type CheckResourceBatchResponse_ActionEffectMap =
  Message<"cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap"> & {
    /**
     * @generated from field: string resource_id = 1;
     */
    resourceId: string;

    /**
     * @generated from field: map<string, cerbos.effect.v1.Effect> actions = 2;
     */
    actions: { [key: string]: Effect };

    /**
     * @generated from field: repeated cerbos.schema.v1.ValidationError validation_errors = 3;
     */
    validationErrors: ValidationError[];
  };

/**
 * @generated from message cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap
 */
export type CheckResourceBatchResponse_ActionEffectMapJson = {
  /**
   * @generated from field: string resource_id = 1;
   */
  resourceId?: string;

  /**
   * @generated from field: map<string, cerbos.effect.v1.Effect> actions = 2;
   */
  actions?: { [key: string]: EffectJson };

  /**
   * @generated from field: repeated cerbos.schema.v1.ValidationError validation_errors = 3;
   */
  validationErrors?: ValidationErrorJson[];
};

export type CheckResourceBatchResponse_ActionEffectMapValid =
  CheckResourceBatchResponse_ActionEffectMap;

/**
 * Describes the message cerbos.response.v1.CheckResourceBatchResponse.ActionEffectMap.
 * Use `create(CheckResourceBatchResponse_ActionEffectMapSchema)` to create a new message.
 */
export const CheckResourceBatchResponse_ActionEffectMapSchema: GenMessage<
  CheckResourceBatchResponse_ActionEffectMap,
  {
    jsonType: CheckResourceBatchResponse_ActionEffectMapJson;
    validType: CheckResourceBatchResponse_ActionEffectMapValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 2, 0);

/**
 * @generated from message cerbos.response.v1.CheckResourcesResponse
 */
export type CheckResourcesResponse =
  Message<"cerbos.response.v1.CheckResourcesResponse"> & {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;

    /**
     * @generated from field: repeated cerbos.response.v1.CheckResourcesResponse.ResultEntry results = 2;
     */
    results: CheckResourcesResponse_ResultEntry[];

    /**
     * @generated from field: string cerbos_call_id = 3;
     */
    cerbosCallId: string;
  };

/**
 * @generated from message cerbos.response.v1.CheckResourcesResponse
 */
export type CheckResourcesResponseJson = {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId?: string;

  /**
   * @generated from field: repeated cerbos.response.v1.CheckResourcesResponse.ResultEntry results = 2;
   */
  results?: CheckResourcesResponse_ResultEntryJson[];

  /**
   * @generated from field: string cerbos_call_id = 3;
   */
  cerbosCallId?: string;
};

export type CheckResourcesResponseValid = CheckResourcesResponse;

/**
 * Describes the message cerbos.response.v1.CheckResourcesResponse.
 * Use `create(CheckResourcesResponseSchema)` to create a new message.
 */
export const CheckResourcesResponseSchema: GenMessage<
  CheckResourcesResponse,
  {
    jsonType: CheckResourcesResponseJson;
    validType: CheckResourcesResponseValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 3);

/**
 * @generated from message cerbos.response.v1.CheckResourcesResponse.ResultEntry
 */
export type CheckResourcesResponse_ResultEntry =
  Message<"cerbos.response.v1.CheckResourcesResponse.ResultEntry"> & {
    /**
     * @generated from field: cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource resource = 1;
     */
    resource?: CheckResourcesResponse_ResultEntry_Resource;

    /**
     * @generated from field: map<string, cerbos.effect.v1.Effect> actions = 2;
     */
    actions: { [key: string]: Effect };

    /**
     * @generated from field: repeated cerbos.schema.v1.ValidationError validation_errors = 3;
     */
    validationErrors: ValidationError[];

    /**
     * @generated from field: cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta meta = 4;
     */
    meta?: CheckResourcesResponse_ResultEntry_Meta;

    /**
     * @generated from field: repeated cerbos.engine.v1.OutputEntry outputs = 5;
     */
    outputs: OutputEntry[];
  };

/**
 * @generated from message cerbos.response.v1.CheckResourcesResponse.ResultEntry
 */
export type CheckResourcesResponse_ResultEntryJson = {
  /**
   * @generated from field: cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource resource = 1;
   */
  resource?: CheckResourcesResponse_ResultEntry_ResourceJson;

  /**
   * @generated from field: map<string, cerbos.effect.v1.Effect> actions = 2;
   */
  actions?: { [key: string]: EffectJson };

  /**
   * @generated from field: repeated cerbos.schema.v1.ValidationError validation_errors = 3;
   */
  validationErrors?: ValidationErrorJson[];

  /**
   * @generated from field: cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta meta = 4;
   */
  meta?: CheckResourcesResponse_ResultEntry_MetaJson;

  /**
   * @generated from field: repeated cerbos.engine.v1.OutputEntry outputs = 5;
   */
  outputs?: OutputEntryJson[];
};

export type CheckResourcesResponse_ResultEntryValid =
  CheckResourcesResponse_ResultEntry;

/**
 * Describes the message cerbos.response.v1.CheckResourcesResponse.ResultEntry.
 * Use `create(CheckResourcesResponse_ResultEntrySchema)` to create a new message.
 */
export const CheckResourcesResponse_ResultEntrySchema: GenMessage<
  CheckResourcesResponse_ResultEntry,
  {
    jsonType: CheckResourcesResponse_ResultEntryJson;
    validType: CheckResourcesResponse_ResultEntryValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 3, 0);

/**
 * @generated from message cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource
 */
export type CheckResourcesResponse_ResultEntry_Resource =
  Message<"cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;

    /**
     * @generated from field: string kind = 2;
     */
    kind: string;

    /**
     * @generated from field: string policy_version = 3;
     */
    policyVersion: string;

    /**
     * @generated from field: string scope = 4;
     */
    scope: string;
  };

/**
 * @generated from message cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource
 */
export type CheckResourcesResponse_ResultEntry_ResourceJson = {
  /**
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * @generated from field: string kind = 2;
   */
  kind?: string;

  /**
   * @generated from field: string policy_version = 3;
   */
  policyVersion?: string;

  /**
   * @generated from field: string scope = 4;
   */
  scope?: string;
};

export type CheckResourcesResponse_ResultEntry_ResourceValid =
  CheckResourcesResponse_ResultEntry_Resource;

/**
 * Describes the message cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource.
 * Use `create(CheckResourcesResponse_ResultEntry_ResourceSchema)` to create a new message.
 */
export const CheckResourcesResponse_ResultEntry_ResourceSchema: GenMessage<
  CheckResourcesResponse_ResultEntry_Resource,
  {
    jsonType: CheckResourcesResponse_ResultEntry_ResourceJson;
    validType: CheckResourcesResponse_ResultEntry_ResourceValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 3, 0, 0);

/**
 * @generated from message cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta
 */
export type CheckResourcesResponse_ResultEntry_Meta =
  Message<"cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta"> & {
    /**
     * @generated from field: map<string, cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta> actions = 1;
     */
    actions: {
      [key: string]: CheckResourcesResponse_ResultEntry_Meta_EffectMeta;
    };

    /**
     * @generated from field: repeated string effective_derived_roles = 2;
     */
    effectiveDerivedRoles: string[];
  };

/**
 * @generated from message cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta
 */
export type CheckResourcesResponse_ResultEntry_MetaJson = {
  /**
   * @generated from field: map<string, cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta> actions = 1;
   */
  actions?: {
    [key: string]: CheckResourcesResponse_ResultEntry_Meta_EffectMetaJson;
  };

  /**
   * @generated from field: repeated string effective_derived_roles = 2;
   */
  effectiveDerivedRoles?: string[];
};

export type CheckResourcesResponse_ResultEntry_MetaValid =
  CheckResourcesResponse_ResultEntry_Meta;

/**
 * Describes the message cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.
 * Use `create(CheckResourcesResponse_ResultEntry_MetaSchema)` to create a new message.
 */
export const CheckResourcesResponse_ResultEntry_MetaSchema: GenMessage<
  CheckResourcesResponse_ResultEntry_Meta,
  {
    jsonType: CheckResourcesResponse_ResultEntry_MetaJson;
    validType: CheckResourcesResponse_ResultEntry_MetaValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 3, 0, 1);

/**
 * @generated from message cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta
 */
export type CheckResourcesResponse_ResultEntry_Meta_EffectMeta =
  Message<"cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta"> & {
    /**
     * @generated from field: string matched_policy = 1;
     */
    matchedPolicy: string;

    /**
     * @generated from field: string matched_scope = 2;
     */
    matchedScope: string;
  };

/**
 * @generated from message cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta
 */
export type CheckResourcesResponse_ResultEntry_Meta_EffectMetaJson = {
  /**
   * @generated from field: string matched_policy = 1;
   */
  matchedPolicy?: string;

  /**
   * @generated from field: string matched_scope = 2;
   */
  matchedScope?: string;
};

export type CheckResourcesResponse_ResultEntry_Meta_EffectMetaValid =
  CheckResourcesResponse_ResultEntry_Meta_EffectMeta;

/**
 * Describes the message cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta.
 * Use `create(CheckResourcesResponse_ResultEntry_Meta_EffectMetaSchema)` to create a new message.
 */
export const CheckResourcesResponse_ResultEntry_Meta_EffectMetaSchema: GenMessage<
  CheckResourcesResponse_ResultEntry_Meta_EffectMeta,
  {
    jsonType: CheckResourcesResponse_ResultEntry_Meta_EffectMetaJson;
    validType: CheckResourcesResponse_ResultEntry_Meta_EffectMetaValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 3, 0, 1, 0);

/**
 * @generated from message cerbos.response.v1.AddOrUpdatePolicyResponse
 */
export type AddOrUpdatePolicyResponse =
  Message<"cerbos.response.v1.AddOrUpdatePolicyResponse"> & {
    /**
     * @generated from field: google.protobuf.Empty success = 1;
     */
    success?: Empty;
  };

/**
 * @generated from message cerbos.response.v1.AddOrUpdatePolicyResponse
 */
export type AddOrUpdatePolicyResponseJson = {
  /**
   * @generated from field: google.protobuf.Empty success = 1;
   */
  success?: EmptyJson;
};

export type AddOrUpdatePolicyResponseValid = AddOrUpdatePolicyResponse;

/**
 * Describes the message cerbos.response.v1.AddOrUpdatePolicyResponse.
 * Use `create(AddOrUpdatePolicyResponseSchema)` to create a new message.
 */
export const AddOrUpdatePolicyResponseSchema: GenMessage<
  AddOrUpdatePolicyResponse,
  {
    jsonType: AddOrUpdatePolicyResponseJson;
    validType: AddOrUpdatePolicyResponseValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 4);

/**
 * @generated from message cerbos.response.v1.ListAuditLogEntriesResponse
 */
export type ListAuditLogEntriesResponse =
  Message<"cerbos.response.v1.ListAuditLogEntriesResponse"> & {
    /**
     * @generated from oneof cerbos.response.v1.ListAuditLogEntriesResponse.entry
     */
    entry:
      | {
          /**
           * @generated from field: cerbos.audit.v1.AccessLogEntry access_log_entry = 1;
           */
          value: AccessLogEntry;
          case: "accessLogEntry";
        }
      | {
          /**
           * @generated from field: cerbos.audit.v1.DecisionLogEntry decision_log_entry = 2;
           */
          value: DecisionLogEntry;
          case: "decisionLogEntry";
        }
      | { case: undefined; value?: undefined };
  };

/**
 * @generated from message cerbos.response.v1.ListAuditLogEntriesResponse
 */
export type ListAuditLogEntriesResponseJson = {
  /**
   * @generated from field: cerbos.audit.v1.AccessLogEntry access_log_entry = 1;
   */
  accessLogEntry?: AccessLogEntryJson;

  /**
   * @generated from field: cerbos.audit.v1.DecisionLogEntry decision_log_entry = 2;
   */
  decisionLogEntry?: DecisionLogEntryJson;
};

/**
 * @generated from message cerbos.response.v1.ListAuditLogEntriesResponse
 */
export type ListAuditLogEntriesResponseValid =
  Message<"cerbos.response.v1.ListAuditLogEntriesResponse"> & {
    /**
     * @generated from oneof cerbos.response.v1.ListAuditLogEntriesResponse.entry
     */
    entry:
      | {
          /**
           * @generated from field: cerbos.audit.v1.AccessLogEntry access_log_entry = 1;
           */
          value: AccessLogEntryValid;
          case: "accessLogEntry";
        }
      | {
          /**
           * @generated from field: cerbos.audit.v1.DecisionLogEntry decision_log_entry = 2;
           */
          value: DecisionLogEntryValid;
          case: "decisionLogEntry";
        }
      | { case: undefined; value?: undefined };
  };

/**
 * Describes the message cerbos.response.v1.ListAuditLogEntriesResponse.
 * Use `create(ListAuditLogEntriesResponseSchema)` to create a new message.
 */
export const ListAuditLogEntriesResponseSchema: GenMessage<
  ListAuditLogEntriesResponse,
  {
    jsonType: ListAuditLogEntriesResponseJson;
    validType: ListAuditLogEntriesResponseValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 5);

/**
 * @generated from message cerbos.response.v1.ServerInfoResponse
 */
export type ServerInfoResponse =
  Message<"cerbos.response.v1.ServerInfoResponse"> & {
    /**
     * @generated from field: string version = 1;
     */
    version: string;

    /**
     * @generated from field: string commit = 2;
     */
    commit: string;

    /**
     * @generated from field: string build_date = 3;
     */
    buildDate: string;
  };

/**
 * @generated from message cerbos.response.v1.ServerInfoResponse
 */
export type ServerInfoResponseJson = {
  /**
   * @generated from field: string version = 1;
   */
  version?: string;

  /**
   * @generated from field: string commit = 2;
   */
  commit?: string;

  /**
   * @generated from field: string build_date = 3;
   */
  buildDate?: string;
};

export type ServerInfoResponseValid = ServerInfoResponse;

/**
 * Describes the message cerbos.response.v1.ServerInfoResponse.
 * Use `create(ServerInfoResponseSchema)` to create a new message.
 */
export const ServerInfoResponseSchema: GenMessage<
  ServerInfoResponse,
  { jsonType: ServerInfoResponseJson; validType: ServerInfoResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 6);

/**
 * @generated from message cerbos.response.v1.ListPoliciesResponse
 */
export type ListPoliciesResponse =
  Message<"cerbos.response.v1.ListPoliciesResponse"> & {
    /**
     * @generated from field: repeated string policy_ids = 1;
     */
    policyIds: string[];
  };

/**
 * @generated from message cerbos.response.v1.ListPoliciesResponse
 */
export type ListPoliciesResponseJson = {
  /**
   * @generated from field: repeated string policy_ids = 1;
   */
  policyIds?: string[];
};

export type ListPoliciesResponseValid = ListPoliciesResponse;

/**
 * Describes the message cerbos.response.v1.ListPoliciesResponse.
 * Use `create(ListPoliciesResponseSchema)` to create a new message.
 */
export const ListPoliciesResponseSchema: GenMessage<
  ListPoliciesResponse,
  { jsonType: ListPoliciesResponseJson; validType: ListPoliciesResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 7);

/**
 * @generated from message cerbos.response.v1.GetPolicyResponse
 */
export type GetPolicyResponse =
  Message<"cerbos.response.v1.GetPolicyResponse"> & {
    /**
     * @generated from field: repeated cerbos.policy.v1.Policy policies = 1;
     */
    policies: Policy[];
  };

/**
 * @generated from message cerbos.response.v1.GetPolicyResponse
 */
export type GetPolicyResponseJson = {
  /**
   * @generated from field: repeated cerbos.policy.v1.Policy policies = 1;
   */
  policies?: PolicyJson[];
};

/**
 * @generated from message cerbos.response.v1.GetPolicyResponse
 */
export type GetPolicyResponseValid =
  Message<"cerbos.response.v1.GetPolicyResponse"> & {
    /**
     * @generated from field: repeated cerbos.policy.v1.Policy policies = 1;
     */
    policies: PolicyValid[];
  };

/**
 * Describes the message cerbos.response.v1.GetPolicyResponse.
 * Use `create(GetPolicyResponseSchema)` to create a new message.
 */
export const GetPolicyResponseSchema: GenMessage<
  GetPolicyResponse,
  { jsonType: GetPolicyResponseJson; validType: GetPolicyResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 8);

/**
 * @generated from message cerbos.response.v1.DeletePolicyResponse
 */
export type DeletePolicyResponse =
  Message<"cerbos.response.v1.DeletePolicyResponse"> & {
    /**
     * @generated from field: uint32 deleted_policies = 1;
     */
    deletedPolicies: number;
  };

/**
 * @generated from message cerbos.response.v1.DeletePolicyResponse
 */
export type DeletePolicyResponseJson = {
  /**
   * @generated from field: uint32 deleted_policies = 1;
   */
  deletedPolicies?: number;
};

export type DeletePolicyResponseValid = DeletePolicyResponse;

/**
 * Describes the message cerbos.response.v1.DeletePolicyResponse.
 * Use `create(DeletePolicyResponseSchema)` to create a new message.
 */
export const DeletePolicyResponseSchema: GenMessage<
  DeletePolicyResponse,
  { jsonType: DeletePolicyResponseJson; validType: DeletePolicyResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 9);

/**
 * @generated from message cerbos.response.v1.DeletePolicyErrorDetails
 */
export type DeletePolicyErrorDetails =
  Message<"cerbos.response.v1.DeletePolicyErrorDetails"> & {
    /**
     * @generated from field: map<string, cerbos.response.v1.IntegrityErrors> errors = 1;
     */
    errors: { [key: string]: IntegrityErrors };
  };

/**
 * @generated from message cerbos.response.v1.DeletePolicyErrorDetails
 */
export type DeletePolicyErrorDetailsJson = {
  /**
   * @generated from field: map<string, cerbos.response.v1.IntegrityErrors> errors = 1;
   */
  errors?: { [key: string]: IntegrityErrorsJson };
};

export type DeletePolicyErrorDetailsValid = DeletePolicyErrorDetails;

/**
 * Describes the message cerbos.response.v1.DeletePolicyErrorDetails.
 * Use `create(DeletePolicyErrorDetailsSchema)` to create a new message.
 */
export const DeletePolicyErrorDetailsSchema: GenMessage<
  DeletePolicyErrorDetails,
  {
    jsonType: DeletePolicyErrorDetailsJson;
    validType: DeletePolicyErrorDetailsValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 10);

/**
 * @generated from message cerbos.response.v1.DisablePolicyResponse
 */
export type DisablePolicyResponse =
  Message<"cerbos.response.v1.DisablePolicyResponse"> & {
    /**
     * @generated from field: uint32 disabled_policies = 1;
     */
    disabledPolicies: number;
  };

/**
 * @generated from message cerbos.response.v1.DisablePolicyResponse
 */
export type DisablePolicyResponseJson = {
  /**
   * @generated from field: uint32 disabled_policies = 1;
   */
  disabledPolicies?: number;
};

export type DisablePolicyResponseValid = DisablePolicyResponse;

/**
 * Describes the message cerbos.response.v1.DisablePolicyResponse.
 * Use `create(DisablePolicyResponseSchema)` to create a new message.
 */
export const DisablePolicyResponseSchema: GenMessage<
  DisablePolicyResponse,
  { jsonType: DisablePolicyResponseJson; validType: DisablePolicyResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 11);

/**
 * @generated from message cerbos.response.v1.DisablePolicyErrorDetails
 */
export type DisablePolicyErrorDetails =
  Message<"cerbos.response.v1.DisablePolicyErrorDetails"> & {
    /**
     * @generated from field: map<string, cerbos.response.v1.IntegrityErrors> errors = 1;
     */
    errors: { [key: string]: IntegrityErrors };
  };

/**
 * @generated from message cerbos.response.v1.DisablePolicyErrorDetails
 */
export type DisablePolicyErrorDetailsJson = {
  /**
   * @generated from field: map<string, cerbos.response.v1.IntegrityErrors> errors = 1;
   */
  errors?: { [key: string]: IntegrityErrorsJson };
};

export type DisablePolicyErrorDetailsValid = DisablePolicyErrorDetails;

/**
 * Describes the message cerbos.response.v1.DisablePolicyErrorDetails.
 * Use `create(DisablePolicyErrorDetailsSchema)` to create a new message.
 */
export const DisablePolicyErrorDetailsSchema: GenMessage<
  DisablePolicyErrorDetails,
  {
    jsonType: DisablePolicyErrorDetailsJson;
    validType: DisablePolicyErrorDetailsValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 12);

/**
 * @generated from message cerbos.response.v1.IntegrityErrors
 */
export type IntegrityErrors = Message<"cerbos.response.v1.IntegrityErrors"> & {
  /**
   * @generated from field: cerbos.response.v1.IntegrityErrors.BreaksScopeChain breaks_scope_chain = 1;
   */
  breaksScopeChain?: IntegrityErrors_BreaksScopeChain;

  /**
   * @generated from field: cerbos.response.v1.IntegrityErrors.RequiredByOtherPolicies required_by_other_policies = 2;
   */
  requiredByOtherPolicies?: IntegrityErrors_RequiredByOtherPolicies;
};

/**
 * @generated from message cerbos.response.v1.IntegrityErrors
 */
export type IntegrityErrorsJson = {
  /**
   * @generated from field: cerbos.response.v1.IntegrityErrors.BreaksScopeChain breaks_scope_chain = 1;
   */
  breaksScopeChain?: IntegrityErrors_BreaksScopeChainJson;

  /**
   * @generated from field: cerbos.response.v1.IntegrityErrors.RequiredByOtherPolicies required_by_other_policies = 2;
   */
  requiredByOtherPolicies?: IntegrityErrors_RequiredByOtherPoliciesJson;
};

export type IntegrityErrorsValid = IntegrityErrors;

/**
 * Describes the message cerbos.response.v1.IntegrityErrors.
 * Use `create(IntegrityErrorsSchema)` to create a new message.
 */
export const IntegrityErrorsSchema: GenMessage<
  IntegrityErrors,
  { jsonType: IntegrityErrorsJson; validType: IntegrityErrorsValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 13);

/**
 * @generated from message cerbos.response.v1.IntegrityErrors.BreaksScopeChain
 */
export type IntegrityErrors_BreaksScopeChain =
  Message<"cerbos.response.v1.IntegrityErrors.BreaksScopeChain"> & {
    /**
     * @generated from field: repeated string descendants = 1;
     */
    descendants: string[];
  };

/**
 * @generated from message cerbos.response.v1.IntegrityErrors.BreaksScopeChain
 */
export type IntegrityErrors_BreaksScopeChainJson = {
  /**
   * @generated from field: repeated string descendants = 1;
   */
  descendants?: string[];
};

export type IntegrityErrors_BreaksScopeChainValid =
  IntegrityErrors_BreaksScopeChain;

/**
 * Describes the message cerbos.response.v1.IntegrityErrors.BreaksScopeChain.
 * Use `create(IntegrityErrors_BreaksScopeChainSchema)` to create a new message.
 */
export const IntegrityErrors_BreaksScopeChainSchema: GenMessage<
  IntegrityErrors_BreaksScopeChain,
  {
    jsonType: IntegrityErrors_BreaksScopeChainJson;
    validType: IntegrityErrors_BreaksScopeChainValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 13, 0);

/**
 * @generated from message cerbos.response.v1.IntegrityErrors.RequiredByOtherPolicies
 */
export type IntegrityErrors_RequiredByOtherPolicies =
  Message<"cerbos.response.v1.IntegrityErrors.RequiredByOtherPolicies"> & {
    /**
     * @generated from field: repeated string dependents = 1;
     */
    dependents: string[];
  };

/**
 * @generated from message cerbos.response.v1.IntegrityErrors.RequiredByOtherPolicies
 */
export type IntegrityErrors_RequiredByOtherPoliciesJson = {
  /**
   * @generated from field: repeated string dependents = 1;
   */
  dependents?: string[];
};

export type IntegrityErrors_RequiredByOtherPoliciesValid =
  IntegrityErrors_RequiredByOtherPolicies;

/**
 * Describes the message cerbos.response.v1.IntegrityErrors.RequiredByOtherPolicies.
 * Use `create(IntegrityErrors_RequiredByOtherPoliciesSchema)` to create a new message.
 */
export const IntegrityErrors_RequiredByOtherPoliciesSchema: GenMessage<
  IntegrityErrors_RequiredByOtherPolicies,
  {
    jsonType: IntegrityErrors_RequiredByOtherPoliciesJson;
    validType: IntegrityErrors_RequiredByOtherPoliciesValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 13, 1);

/**
 * @generated from message cerbos.response.v1.EnablePolicyResponse
 */
export type EnablePolicyResponse =
  Message<"cerbos.response.v1.EnablePolicyResponse"> & {
    /**
     * @generated from field: uint32 enabled_policies = 1;
     */
    enabledPolicies: number;
  };

/**
 * @generated from message cerbos.response.v1.EnablePolicyResponse
 */
export type EnablePolicyResponseJson = {
  /**
   * @generated from field: uint32 enabled_policies = 1;
   */
  enabledPolicies?: number;
};

export type EnablePolicyResponseValid = EnablePolicyResponse;

/**
 * Describes the message cerbos.response.v1.EnablePolicyResponse.
 * Use `create(EnablePolicyResponseSchema)` to create a new message.
 */
export const EnablePolicyResponseSchema: GenMessage<
  EnablePolicyResponse,
  { jsonType: EnablePolicyResponseJson; validType: EnablePolicyResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 14);

/**
 * @generated from message cerbos.response.v1.InspectPoliciesResponse
 */
export type InspectPoliciesResponse =
  Message<"cerbos.response.v1.InspectPoliciesResponse"> & {
    /**
     * @generated from field: map<string, cerbos.response.v1.InspectPoliciesResponse.Result> results = 1;
     */
    results: { [key: string]: InspectPoliciesResponse_Result };
  };

/**
 * @generated from message cerbos.response.v1.InspectPoliciesResponse
 */
export type InspectPoliciesResponseJson = {
  /**
   * @generated from field: map<string, cerbos.response.v1.InspectPoliciesResponse.Result> results = 1;
   */
  results?: { [key: string]: InspectPoliciesResponse_ResultJson };
};

export type InspectPoliciesResponseValid = InspectPoliciesResponse;

/**
 * Describes the message cerbos.response.v1.InspectPoliciesResponse.
 * Use `create(InspectPoliciesResponseSchema)` to create a new message.
 */
export const InspectPoliciesResponseSchema: GenMessage<
  InspectPoliciesResponse,
  {
    jsonType: InspectPoliciesResponseJson;
    validType: InspectPoliciesResponseValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 15);

/**
 * @generated from message cerbos.response.v1.InspectPoliciesResponse.Attribute
 */
export type InspectPoliciesResponse_Attribute =
  Message<"cerbos.response.v1.InspectPoliciesResponse.Attribute"> & {
    /**
     * @generated from field: cerbos.response.v1.InspectPoliciesResponse.Attribute.Kind kind = 1;
     */
    kind: InspectPoliciesResponse_Attribute_Kind;

    /**
     * @generated from field: string name = 2;
     */
    name: string;
  };

/**
 * @generated from message cerbos.response.v1.InspectPoliciesResponse.Attribute
 */
export type InspectPoliciesResponse_AttributeJson = {
  /**
   * @generated from field: cerbos.response.v1.InspectPoliciesResponse.Attribute.Kind kind = 1;
   */
  kind?: InspectPoliciesResponse_Attribute_KindJson;

  /**
   * @generated from field: string name = 2;
   */
  name?: string;
};

export type InspectPoliciesResponse_AttributeValid =
  InspectPoliciesResponse_Attribute;

/**
 * Describes the message cerbos.response.v1.InspectPoliciesResponse.Attribute.
 * Use `create(InspectPoliciesResponse_AttributeSchema)` to create a new message.
 */
export const InspectPoliciesResponse_AttributeSchema: GenMessage<
  InspectPoliciesResponse_Attribute,
  {
    jsonType: InspectPoliciesResponse_AttributeJson;
    validType: InspectPoliciesResponse_AttributeValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 15, 0);

/**
 * @generated from enum cerbos.response.v1.InspectPoliciesResponse.Attribute.Kind
 */
export enum InspectPoliciesResponse_Attribute_Kind {
  /**
   * @generated from enum value: KIND_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: KIND_PRINCIPAL_ATTRIBUTE = 1;
   */
  PRINCIPAL_ATTRIBUTE = 1,

  /**
   * @generated from enum value: KIND_RESOURCE_ATTRIBUTE = 2;
   */
  RESOURCE_ATTRIBUTE = 2,
}

/**
 * @generated from enum cerbos.response.v1.InspectPoliciesResponse.Attribute.Kind
 */
export type InspectPoliciesResponse_Attribute_KindJson =
  | "KIND_UNSPECIFIED"
  | "KIND_PRINCIPAL_ATTRIBUTE"
  | "KIND_RESOURCE_ATTRIBUTE";

/**
 * Describes the enum cerbos.response.v1.InspectPoliciesResponse.Attribute.Kind.
 */
export const InspectPoliciesResponse_Attribute_KindSchema: GenEnum<
  InspectPoliciesResponse_Attribute_Kind,
  InspectPoliciesResponse_Attribute_KindJson
> = /*@__PURE__*/ enumDesc(file_cerbos_response_v1_response, 15, 0, 0);

/**
 * @generated from message cerbos.response.v1.InspectPoliciesResponse.DerivedRole
 */
export type InspectPoliciesResponse_DerivedRole =
  Message<"cerbos.response.v1.InspectPoliciesResponse.DerivedRole"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;

    /**
     * @generated from field: cerbos.response.v1.InspectPoliciesResponse.DerivedRole.Kind kind = 2;
     */
    kind: InspectPoliciesResponse_DerivedRole_Kind;

    /**
     * @generated from field: string source = 3;
     */
    source: string;
  };

/**
 * @generated from message cerbos.response.v1.InspectPoliciesResponse.DerivedRole
 */
export type InspectPoliciesResponse_DerivedRoleJson = {
  /**
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * @generated from field: cerbos.response.v1.InspectPoliciesResponse.DerivedRole.Kind kind = 2;
   */
  kind?: InspectPoliciesResponse_DerivedRole_KindJson;

  /**
   * @generated from field: string source = 3;
   */
  source?: string;
};

export type InspectPoliciesResponse_DerivedRoleValid =
  InspectPoliciesResponse_DerivedRole;

/**
 * Describes the message cerbos.response.v1.InspectPoliciesResponse.DerivedRole.
 * Use `create(InspectPoliciesResponse_DerivedRoleSchema)` to create a new message.
 */
export const InspectPoliciesResponse_DerivedRoleSchema: GenMessage<
  InspectPoliciesResponse_DerivedRole,
  {
    jsonType: InspectPoliciesResponse_DerivedRoleJson;
    validType: InspectPoliciesResponse_DerivedRoleValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 15, 1);

/**
 * @generated from enum cerbos.response.v1.InspectPoliciesResponse.DerivedRole.Kind
 */
export enum InspectPoliciesResponse_DerivedRole_Kind {
  /**
   * @generated from enum value: KIND_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: KIND_UNDEFINED = 1;
   */
  UNDEFINED = 1,

  /**
   * @generated from enum value: KIND_EXPORTED = 2;
   */
  EXPORTED = 2,

  /**
   * @generated from enum value: KIND_IMPORTED = 3;
   */
  IMPORTED = 3,
}

/**
 * @generated from enum cerbos.response.v1.InspectPoliciesResponse.DerivedRole.Kind
 */
export type InspectPoliciesResponse_DerivedRole_KindJson =
  | "KIND_UNSPECIFIED"
  | "KIND_UNDEFINED"
  | "KIND_EXPORTED"
  | "KIND_IMPORTED";

/**
 * Describes the enum cerbos.response.v1.InspectPoliciesResponse.DerivedRole.Kind.
 */
export const InspectPoliciesResponse_DerivedRole_KindSchema: GenEnum<
  InspectPoliciesResponse_DerivedRole_Kind,
  InspectPoliciesResponse_DerivedRole_KindJson
> = /*@__PURE__*/ enumDesc(file_cerbos_response_v1_response, 15, 1, 0);

/**
 * @generated from message cerbos.response.v1.InspectPoliciesResponse.Constant
 */
export type InspectPoliciesResponse_Constant =
  Message<"cerbos.response.v1.InspectPoliciesResponse.Constant"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;

    /**
     * @generated from field: google.protobuf.Value value = 2;
     */
    value?: Value;

    /**
     * @generated from field: cerbos.response.v1.InspectPoliciesResponse.Constant.Kind kind = 3;
     */
    kind: InspectPoliciesResponse_Constant_Kind;

    /**
     * @generated from field: string source = 4;
     */
    source: string;

    /**
     * @generated from field: bool used = 5;
     */
    used: boolean;
  };

/**
 * @generated from message cerbos.response.v1.InspectPoliciesResponse.Constant
 */
export type InspectPoliciesResponse_ConstantJson = {
  /**
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * @generated from field: google.protobuf.Value value = 2;
   */
  value?: ValueJson;

  /**
   * @generated from field: cerbos.response.v1.InspectPoliciesResponse.Constant.Kind kind = 3;
   */
  kind?: InspectPoliciesResponse_Constant_KindJson;

  /**
   * @generated from field: string source = 4;
   */
  source?: string;

  /**
   * @generated from field: bool used = 5;
   */
  used?: boolean;
};

export type InspectPoliciesResponse_ConstantValid =
  InspectPoliciesResponse_Constant;

/**
 * Describes the message cerbos.response.v1.InspectPoliciesResponse.Constant.
 * Use `create(InspectPoliciesResponse_ConstantSchema)` to create a new message.
 */
export const InspectPoliciesResponse_ConstantSchema: GenMessage<
  InspectPoliciesResponse_Constant,
  {
    jsonType: InspectPoliciesResponse_ConstantJson;
    validType: InspectPoliciesResponse_ConstantValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 15, 2);

/**
 * @generated from enum cerbos.response.v1.InspectPoliciesResponse.Constant.Kind
 */
export enum InspectPoliciesResponse_Constant_Kind {
  /**
   * @generated from enum value: KIND_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: KIND_EXPORTED = 1;
   */
  EXPORTED = 1,

  /**
   * @generated from enum value: KIND_IMPORTED = 2;
   */
  IMPORTED = 2,

  /**
   * @generated from enum value: KIND_LOCAL = 3;
   */
  LOCAL = 3,

  /**
   * @generated from enum value: KIND_UNDEFINED = 4;
   */
  UNDEFINED = 4,

  /**
   * @generated from enum value: KIND_UNKNOWN = 5;
   */
  UNKNOWN = 5,
}

/**
 * @generated from enum cerbos.response.v1.InspectPoliciesResponse.Constant.Kind
 */
export type InspectPoliciesResponse_Constant_KindJson =
  | "KIND_UNSPECIFIED"
  | "KIND_EXPORTED"
  | "KIND_IMPORTED"
  | "KIND_LOCAL"
  | "KIND_UNDEFINED"
  | "KIND_UNKNOWN";

/**
 * Describes the enum cerbos.response.v1.InspectPoliciesResponse.Constant.Kind.
 */
export const InspectPoliciesResponse_Constant_KindSchema: GenEnum<
  InspectPoliciesResponse_Constant_Kind,
  InspectPoliciesResponse_Constant_KindJson
> = /*@__PURE__*/ enumDesc(file_cerbos_response_v1_response, 15, 2, 0);

/**
 * @generated from message cerbos.response.v1.InspectPoliciesResponse.Variable
 */
export type InspectPoliciesResponse_Variable =
  Message<"cerbos.response.v1.InspectPoliciesResponse.Variable"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;

    /**
     * @generated from field: string value = 2;
     */
    value: string;

    /**
     * @generated from field: cerbos.response.v1.InspectPoliciesResponse.Variable.Kind kind = 3;
     */
    kind: InspectPoliciesResponse_Variable_Kind;

    /**
     * @generated from field: string source = 4;
     */
    source: string;

    /**
     * @generated from field: bool used = 5;
     */
    used: boolean;
  };

/**
 * @generated from message cerbos.response.v1.InspectPoliciesResponse.Variable
 */
export type InspectPoliciesResponse_VariableJson = {
  /**
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * @generated from field: string value = 2;
   */
  value?: string;

  /**
   * @generated from field: cerbos.response.v1.InspectPoliciesResponse.Variable.Kind kind = 3;
   */
  kind?: InspectPoliciesResponse_Variable_KindJson;

  /**
   * @generated from field: string source = 4;
   */
  source?: string;

  /**
   * @generated from field: bool used = 5;
   */
  used?: boolean;
};

export type InspectPoliciesResponse_VariableValid =
  InspectPoliciesResponse_Variable;

/**
 * Describes the message cerbos.response.v1.InspectPoliciesResponse.Variable.
 * Use `create(InspectPoliciesResponse_VariableSchema)` to create a new message.
 */
export const InspectPoliciesResponse_VariableSchema: GenMessage<
  InspectPoliciesResponse_Variable,
  {
    jsonType: InspectPoliciesResponse_VariableJson;
    validType: InspectPoliciesResponse_VariableValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 15, 3);

/**
 * @generated from enum cerbos.response.v1.InspectPoliciesResponse.Variable.Kind
 */
export enum InspectPoliciesResponse_Variable_Kind {
  /**
   * @generated from enum value: KIND_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: KIND_EXPORTED = 1;
   */
  EXPORTED = 1,

  /**
   * @generated from enum value: KIND_IMPORTED = 2;
   */
  IMPORTED = 2,

  /**
   * @generated from enum value: KIND_LOCAL = 3;
   */
  LOCAL = 3,

  /**
   * @generated from enum value: KIND_UNDEFINED = 4;
   */
  UNDEFINED = 4,

  /**
   * @generated from enum value: KIND_UNKNOWN = 5;
   */
  UNKNOWN = 5,
}

/**
 * @generated from enum cerbos.response.v1.InspectPoliciesResponse.Variable.Kind
 */
export type InspectPoliciesResponse_Variable_KindJson =
  | "KIND_UNSPECIFIED"
  | "KIND_EXPORTED"
  | "KIND_IMPORTED"
  | "KIND_LOCAL"
  | "KIND_UNDEFINED"
  | "KIND_UNKNOWN";

/**
 * Describes the enum cerbos.response.v1.InspectPoliciesResponse.Variable.Kind.
 */
export const InspectPoliciesResponse_Variable_KindSchema: GenEnum<
  InspectPoliciesResponse_Variable_Kind,
  InspectPoliciesResponse_Variable_KindJson
> = /*@__PURE__*/ enumDesc(file_cerbos_response_v1_response, 15, 3, 0);

/**
 * @generated from message cerbos.response.v1.InspectPoliciesResponse.Result
 */
export type InspectPoliciesResponse_Result =
  Message<"cerbos.response.v1.InspectPoliciesResponse.Result"> & {
    /**
     * @generated from field: repeated string actions = 1;
     */
    actions: string[];

    /**
     * @generated from field: repeated cerbos.response.v1.InspectPoliciesResponse.Variable variables = 2;
     */
    variables: InspectPoliciesResponse_Variable[];

    /**
     * @generated from field: string policy_id = 3;
     */
    policyId: string;

    /**
     * @generated from field: repeated cerbos.response.v1.InspectPoliciesResponse.DerivedRole derived_roles = 4;
     */
    derivedRoles: InspectPoliciesResponse_DerivedRole[];

    /**
     * @generated from field: repeated cerbos.response.v1.InspectPoliciesResponse.Attribute attributes = 5;
     */
    attributes: InspectPoliciesResponse_Attribute[];

    /**
     * @generated from field: repeated cerbos.response.v1.InspectPoliciesResponse.Constant constants = 6;
     */
    constants: InspectPoliciesResponse_Constant[];
  };

/**
 * @generated from message cerbos.response.v1.InspectPoliciesResponse.Result
 */
export type InspectPoliciesResponse_ResultJson = {
  /**
   * @generated from field: repeated string actions = 1;
   */
  actions?: string[];

  /**
   * @generated from field: repeated cerbos.response.v1.InspectPoliciesResponse.Variable variables = 2;
   */
  variables?: InspectPoliciesResponse_VariableJson[];

  /**
   * @generated from field: string policy_id = 3;
   */
  policyId?: string;

  /**
   * @generated from field: repeated cerbos.response.v1.InspectPoliciesResponse.DerivedRole derived_roles = 4;
   */
  derivedRoles?: InspectPoliciesResponse_DerivedRoleJson[];

  /**
   * @generated from field: repeated cerbos.response.v1.InspectPoliciesResponse.Attribute attributes = 5;
   */
  attributes?: InspectPoliciesResponse_AttributeJson[];

  /**
   * @generated from field: repeated cerbos.response.v1.InspectPoliciesResponse.Constant constants = 6;
   */
  constants?: InspectPoliciesResponse_ConstantJson[];
};

export type InspectPoliciesResponse_ResultValid =
  InspectPoliciesResponse_Result;

/**
 * Describes the message cerbos.response.v1.InspectPoliciesResponse.Result.
 * Use `create(InspectPoliciesResponse_ResultSchema)` to create a new message.
 */
export const InspectPoliciesResponse_ResultSchema: GenMessage<
  InspectPoliciesResponse_Result,
  {
    jsonType: InspectPoliciesResponse_ResultJson;
    validType: InspectPoliciesResponse_ResultValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 15, 4);

/**
 * @generated from message cerbos.response.v1.AddOrUpdateSchemaResponse
 */
export type AddOrUpdateSchemaResponse =
  Message<"cerbos.response.v1.AddOrUpdateSchemaResponse"> & {};

/**
 * @generated from message cerbos.response.v1.AddOrUpdateSchemaResponse
 */
export type AddOrUpdateSchemaResponseJson = {};

export type AddOrUpdateSchemaResponseValid = AddOrUpdateSchemaResponse;

/**
 * Describes the message cerbos.response.v1.AddOrUpdateSchemaResponse.
 * Use `create(AddOrUpdateSchemaResponseSchema)` to create a new message.
 */
export const AddOrUpdateSchemaResponseSchema: GenMessage<
  AddOrUpdateSchemaResponse,
  {
    jsonType: AddOrUpdateSchemaResponseJson;
    validType: AddOrUpdateSchemaResponseValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 16);

/**
 * @generated from message cerbos.response.v1.ListSchemasResponse
 */
export type ListSchemasResponse =
  Message<"cerbos.response.v1.ListSchemasResponse"> & {
    /**
     * @generated from field: repeated string schema_ids = 1;
     */
    schemaIds: string[];
  };

/**
 * @generated from message cerbos.response.v1.ListSchemasResponse
 */
export type ListSchemasResponseJson = {
  /**
   * @generated from field: repeated string schema_ids = 1;
   */
  schemaIds?: string[];
};

export type ListSchemasResponseValid = ListSchemasResponse;

/**
 * Describes the message cerbos.response.v1.ListSchemasResponse.
 * Use `create(ListSchemasResponseSchema)` to create a new message.
 */
export const ListSchemasResponseSchema: GenMessage<
  ListSchemasResponse,
  { jsonType: ListSchemasResponseJson; validType: ListSchemasResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 17);

/**
 * @generated from message cerbos.response.v1.GetSchemaResponse
 */
export type GetSchemaResponse =
  Message<"cerbos.response.v1.GetSchemaResponse"> & {
    /**
     * @generated from field: repeated cerbos.schema.v1.Schema schemas = 1;
     */
    schemas: Schema[];
  };

/**
 * @generated from message cerbos.response.v1.GetSchemaResponse
 */
export type GetSchemaResponseJson = {
  /**
   * @generated from field: repeated cerbos.schema.v1.Schema schemas = 1;
   */
  schemas?: SchemaJson[];
};

/**
 * @generated from message cerbos.response.v1.GetSchemaResponse
 */
export type GetSchemaResponseValid =
  Message<"cerbos.response.v1.GetSchemaResponse"> & {
    /**
     * @generated from field: repeated cerbos.schema.v1.Schema schemas = 1;
     */
    schemas: SchemaValid[];
  };

/**
 * Describes the message cerbos.response.v1.GetSchemaResponse.
 * Use `create(GetSchemaResponseSchema)` to create a new message.
 */
export const GetSchemaResponseSchema: GenMessage<
  GetSchemaResponse,
  { jsonType: GetSchemaResponseJson; validType: GetSchemaResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 18);

/**
 * @generated from message cerbos.response.v1.DeleteSchemaResponse
 */
export type DeleteSchemaResponse =
  Message<"cerbos.response.v1.DeleteSchemaResponse"> & {
    /**
     * @generated from field: uint32 deleted_schemas = 1;
     */
    deletedSchemas: number;
  };

/**
 * @generated from message cerbos.response.v1.DeleteSchemaResponse
 */
export type DeleteSchemaResponseJson = {
  /**
   * @generated from field: uint32 deleted_schemas = 1;
   */
  deletedSchemas?: number;
};

export type DeleteSchemaResponseValid = DeleteSchemaResponse;

/**
 * Describes the message cerbos.response.v1.DeleteSchemaResponse.
 * Use `create(DeleteSchemaResponseSchema)` to create a new message.
 */
export const DeleteSchemaResponseSchema: GenMessage<
  DeleteSchemaResponse,
  { jsonType: DeleteSchemaResponseJson; validType: DeleteSchemaResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 19);

/**
 * @generated from message cerbos.response.v1.ReloadStoreResponse
 */
export type ReloadStoreResponse =
  Message<"cerbos.response.v1.ReloadStoreResponse"> & {};

/**
 * @generated from message cerbos.response.v1.ReloadStoreResponse
 */
export type ReloadStoreResponseJson = {};

export type ReloadStoreResponseValid = ReloadStoreResponse;

/**
 * Describes the message cerbos.response.v1.ReloadStoreResponse.
 * Use `create(ReloadStoreResponseSchema)` to create a new message.
 */
export const ReloadStoreResponseSchema: GenMessage<
  ReloadStoreResponse,
  { jsonType: ReloadStoreResponseJson; validType: ReloadStoreResponseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 20);

/**
 * @generated from message cerbos.response.v1.PurgeStoreRevisionsResponse
 */
export type PurgeStoreRevisionsResponse =
  Message<"cerbos.response.v1.PurgeStoreRevisionsResponse"> & {
    /**
     * @generated from field: uint32 affected_rows = 1;
     */
    affectedRows: number;
  };

/**
 * @generated from message cerbos.response.v1.PurgeStoreRevisionsResponse
 */
export type PurgeStoreRevisionsResponseJson = {
  /**
   * @generated from field: uint32 affected_rows = 1;
   */
  affectedRows?: number;
};

export type PurgeStoreRevisionsResponseValid = PurgeStoreRevisionsResponse;

/**
 * Describes the message cerbos.response.v1.PurgeStoreRevisionsResponse.
 * Use `create(PurgeStoreRevisionsResponseSchema)` to create a new message.
 */
export const PurgeStoreRevisionsResponseSchema: GenMessage<
  PurgeStoreRevisionsResponse,
  {
    jsonType: PurgeStoreRevisionsResponseJson;
    validType: PurgeStoreRevisionsResponseValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_response_v1_response, 21);
