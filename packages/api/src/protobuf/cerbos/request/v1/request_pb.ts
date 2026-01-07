// Copyright 2021-2025 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

// @generated from file cerbos/request/v1/request.proto (package cerbos.request.v1, syntax proto3)
/* eslint-disable */

import type {
  GenEnum,
  GenFile,
  GenMessage,
} from "@bufbuild/protobuf/codegenv2";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_buf_validate_validate } from "../../../buf/validate/validate_pb.js";
import type {
  PlanResourcesInput_Resource,
  PlanResourcesInput_ResourceJson,
  PlanResourcesInput_ResourceValid,
  Principal,
  PrincipalJson,
  PrincipalValid,
  Resource,
  ResourceJson,
  ResourceValid,
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
} from "../../schema/v1/schema_pb.js";
import { file_cerbos_schema_v1_schema } from "../../schema/v1/schema_pb.js";
import { file_google_api_field_behavior } from "../../../google/api/field_behavior_pb.js";
import type {
  Duration,
  DurationJson,
  Timestamp,
  TimestampJson,
  Value,
  ValueJson,
} from "@bufbuild/protobuf/wkt";
import {
  file_google_protobuf_duration,
  file_google_protobuf_struct,
  file_google_protobuf_timestamp,
} from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb.js";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cerbos/request/v1/request.proto.
 */
export const file_cerbos_request_v1_request: GenFile =
  /*@__PURE__*/
  fileDesc(
    "Ch9jZXJib3MvcmVxdWVzdC92MS9yZXF1ZXN0LnByb3RvEhFjZXJib3MucmVxdWVzdC52MSLlBwoUUGxhblJlc291cmNlc1JlcXVlc3QSiwEKCnJlcXVlc3RfaWQYASABKAlCd5JBdDJKT3B0aW9uYWwgYXBwbGljYXRpb24tc3BlY2lmaWMgSUQgdXNlZnVsIGZvciBjb3JyZWxhdGluZyBsb2dzIGZvciBhbmFseXNpcy5KJiJjMmRiMTdiOC00ZjlmLTRmYjEtYWNmZC05MTYyYTAyYmU0MmIiElgKBmFjdGlvbhgCIAEoCUJIGAGSQUMyMkFjdGlvbiB0byBiZSBhcHBsaWVkIHRvIGVhY2ggcmVzb3VyY2UgaW4gdGhlIGxpc3QuSg0idmlldzpwdWJsaWMiEvIBCgdhY3Rpb25zGAcgAygJQuABkkHKATKjAUxpc3Qgb2YgYWN0aW9ucyB0byBnZW5lcmF0ZSB0aGUgcXVlcnkgcGxhbiBmb3IuIE11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIHRoZSBzaW5ndWxhciBhY3Rpb24gZmllbGQuIE11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgYWN0aW9uIGFuZCBhbGwgYWN0aW9ucyBtdXN0IGJlIHVuaXF1ZS5KH1sidmlldzpwdWJsaWMiLCAiZWRpdDpwcm9maWxlIl2wAQG6SA+SAQwIABAUGAEiBHICEAESOQoJcHJpbmNpcGFsGAMgASgLMhsuY2VyYm9zLmVuZ2luZS52MS5QcmluY2lwYWxCCeBBArpIA8gBARJKCghyZXNvdXJjZRgEIAEoCzItLmNlcmJvcy5lbmdpbmUudjEuUGxhblJlc291cmNlc0lucHV0LlJlc291cmNlQgngQQK6SAPIAQESMQoIYXV4X2RhdGEYBSABKAsyGi5jZXJib3MucmVxdWVzdC52MS5BdXhEYXRhQgPgQQESVgoMaW5jbHVkZV9tZXRhGAYgASgIQkCSQT0yO09wdCB0byByZWNlaXZlIHJlcXVlc3QgcHJvY2Vzc2luZyBtZXRhZGF0YSBpbiB0aGUgcmVzcG9uc2UuOt0BkkEkCiIyIFBEUCBSZXNvdXJjZXMgUXVlcnkgUGxhbiBSZXF1ZXN0ukiyARqvAQoeZXhjbHVzaXZlRmllbGRzQWN0aW9uT3JBY3Rpb25zEjZFeGFjdGx5IG9uZSBvZiAnYWN0aW9uJyBvciAnYWN0aW9ucycgZmllbGQgbXVzdCBiZSBzZXQaVWhhcyh0aGlzLmFjdGlvbikgJiYgIWhhcyh0aGlzLmFjdGlvbnMpIHx8ICFoYXModGhpcy5hY3Rpb24pICYmIHNpemUodGhpcy5hY3Rpb25zKSA+IDAixwQKF0NoZWNrUmVzb3VyY2VTZXRSZXF1ZXN0EosBCgpyZXF1ZXN0X2lkGAEgASgJQneSQXQySk9wdGlvbmFsIGFwcGxpY2F0aW9uLXNwZWNpZmljIElEIHVzZWZ1bCBmb3IgY29ycmVsYXRpbmcgbG9ncyBmb3IgYW5hbHlzaXMuSiYiYzJkYjE3YjgtNGY5Zi00ZmIxLWFjZmQtOTE2MmEwMmJlNDJiIhKGAQoHYWN0aW9ucxgCIAMoCUJ1kkFcMjhMaXN0IG9mIGFjdGlvbnMgYmVpbmcgcGVyZm9ybWVkIG9uIHRoZSBzZXQgb2YgcmVzb3VyY2VzLkoaWyJ2aWV3OnB1YmxpYyIsICJjb21tZW50Il2oAQGwAQHgQQK6SBDIAQGSAQoIARgBIgRyAhABEjkKCXByaW5jaXBhbBgDIAEoCzIbLmNlcmJvcy5lbmdpbmUudjEuUHJpbmNpcGFsQgngQQK6SAPIAQESOwoIcmVzb3VyY2UYBCABKAsyHi5jZXJib3MucmVxdWVzdC52MS5SZXNvdXJjZVNldEIJ4EECukgDyAEBElYKDGluY2x1ZGVfbWV0YRgFIAEoCEJAkkE9MjtPcHQgdG8gcmVjZWl2ZSByZXF1ZXN0IHByb2Nlc3NpbmcgbWV0YWRhdGEgaW4gdGhlIHJlc3BvbnNlLhIxCghhdXhfZGF0YRgGIAEoCzIaLmNlcmJvcy5yZXF1ZXN0LnYxLkF1eERhdGFCA+BBAToSkkEPCg0yC1BEUCBSZXF1ZXN0IuMHCgtSZXNvdXJjZVNldBI+CgRraW5kGAEgASgJQjCSQSAyDlJlc291cmNlIGtpbmQuSg4iYWxidW06b2JqZWN0IuBBArpIB8gBAXICEAESwQEKDnBvbGljeV92ZXJzaW9uGAIgASgJQqgBkkGTATJ8VGhlIHBvbGljeSB2ZXJzaW9uIHRvIHVzZSB0byBldmFsdWF0ZSB0aGlzIHJlcXVlc3QuIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgZGVmYXVsdCB0byB0aGUgc2VydmVyLWNvbmZpZ3VyZWQgZGVmYXVsdCB2ZXJzaW9uLkoJImRlZmF1bHQiigEHXltcd10qJOBBAbpIC3IJMgdeW1x3XSokEuECCglpbnN0YW5jZXMYAyADKAsyLS5jZXJib3MucmVxdWVzdC52MS5SZXNvdXJjZVNldC5JbnN0YW5jZXNFbnRyeUKeApJBjAIybVNldCBvZiByZXNvdXJjZSBpbnN0YW5jZXMgdG8gY2hlY2suIEVhY2ggaW5zdGFuY2UgbXVzdCBiZSBrZXllZCBieSBhbiBhcHBsaWNhdGlvbi1zcGVjaWZpYyB1bmlxdWUgaWRlbnRpZmllci5KlwF7IlhYMTI1Ijp7ImF0dHIiOnsib3duZXIiOiJidWdzX2J1bm55IiwgInB1YmxpYyI6IGZhbHNlLCAiZmxhZ2dlZCI6IGZhbHNlfX0sICJYWDIyNSI6eyJhdHRyIjp7Im93bmVyIjoiZGFmZnlfZHVjayIsICJwdWJsaWMiOiB0cnVlLCAiZmxhZ2dlZCI6IGZhbHNlfX19yAEB4EECukgIyAEBmgECCAES9QEKBXNjb3BlGAQgASgJQuUBkkGtATJ+QSBkb3Qtc2VwYXJhdGVkIHNjb3BlIHRoYXQgZGVzY3JpYmVzIHRoZSBoaWVyYXJjaHkgdGhlc2UgcmVzb3VyY2VzIGJlbG9uZyB0by4gVGhpcyBpcyB1c2VkIGZvciBkZXRlcm1pbmluZyBwb2xpY3kgaW5oZXJpdGFuY2UuigEqXiheJHxcLnxbMC05YS16QS1aXVtcd1wtXSooXC5cd1tcd1wtXSopKikk4EEBukguciwyKl4oXiR8XC58WzAtOWEtekEtWl1bXHdcLV0qKFwuXHdbXHdcLV0qKSopJBpSCg5JbnN0YW5jZXNFbnRyeRILCgNrZXkYASABKAkSLwoFdmFsdWUYAiABKAsyIC5jZXJib3MucmVxdWVzdC52MS5BdHRyaWJ1dGVzTWFwOgI4ATogkkEdChsyGVNldCBvZiByZXNvdXJjZXMgdG8gY2hlY2sirwIKDUF0dHJpYnV0ZXNNYXASowEKBGF0dHIYASADKAsyKi5jZXJib3MucmVxdWVzdC52MS5BdHRyaWJ1dGVzTWFwLkF0dHJFbnRyeUJpkkFmMmRLZXktdmFsdWUgcGFpcnMgb2YgY29udGV4dHVhbCBkYXRhIGFib3V0IHRoaXMgaW5zdGFuY2UgdGhhdCBzaG91bGQgYmUgdXNlZCBkdXJpbmcgcG9saWN5IGV2YWx1YXRpb24uGkMKCUF0dHJFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBOjOSQTAKLjIsVW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSByZXNvdXJjZSBpbnN0YW5jZS4ipQYKGUNoZWNrUmVzb3VyY2VCYXRjaFJlcXVlc3QSiwEKCnJlcXVlc3RfaWQYASABKAlCd5JBdDJKT3B0aW9uYWwgYXBwbGljYXRpb24tc3BlY2lmaWMgSUQgdXNlZnVsIGZvciBjb3JyZWxhdGluZyBsb2dzIGZvciBhbmFseXNpcy5KJiJjMmRiMTdiOC00ZjlmLTRmYjEtYWNmZC05MTYyYTAyYmU0MmIiEjkKCXByaW5jaXBhbBgCIAEoCzIbLmNlcmJvcy5lbmdpbmUudjEuUHJpbmNpcGFsQgngQQK6SAPIAQEStAIKCXJlc291cmNlcxgDIAMoCzI3LmNlcmJvcy5yZXF1ZXN0LnYxLkNoZWNrUmVzb3VyY2VCYXRjaFJlcXVlc3QuQmF0Y2hFbnRyeULnAZJB1QEyHkxpc3Qgb2YgcmVzb3VyY2VzIGFuZCBhY3Rpb25zLkqsAVt7ImFjdGlvbnMiOlsidmlldyIsImNvbW1lbnQiXSwgInJlc291cmNlIjp7ImtpbmQiOiJhbGJ1bTpvYmplY3QiLCJwb2xpY3lWZXJzaW9uIjoiZGVmYXVsdCIsImlkIjoiWFgxMjUiLCJhdHRyIjp7Im93bmVyIjoiYnVnc19idW5ueSIsICJwdWJsaWMiOiBmYWxzZSwgImZsYWdnZWQiOiBmYWxzZX19fV2oAQGwAQHgQQK6SAjIAQGSAQIIARIsCghhdXhfZGF0YRgEIAEoCzIaLmNlcmJvcy5yZXF1ZXN0LnYxLkF1eERhdGEaxQEKCkJhdGNoRW50cnkSfgoHYWN0aW9ucxgBIAMoCUJtkkFUMjBMaXN0IG9mIGFjdGlvbnMgYmVpbmcgcGVyZm9ybWVkIG9uIHRoZSByZXNvdXJjZS5KGlsidmlldzpwdWJsaWMiLCAiY29tbWVudCJdqAEBsAEB4EECukgQyAEBkgEKCAEYASIEcgIQARI3CghyZXNvdXJjZRgCIAEoCzIaLmNlcmJvcy5lbmdpbmUudjEuUmVzb3VyY2VCCeBBArpIA8gBAToSkkEPCg0yC1BEUCBSZXF1ZXN0IvwGChVDaGVja1Jlc291cmNlc1JlcXVlc3QSiwEKCnJlcXVlc3RfaWQYASABKAlCd5JBdDJKT3B0aW9uYWwgYXBwbGljYXRpb24tc3BlY2lmaWMgSUQgdXNlZnVsIGZvciBjb3JyZWxhdGluZyBsb2dzIGZvciBhbmFseXNpcy5KJiJjMmRiMTdiOC00ZjlmLTRmYjEtYWNmZC05MTYyYTAyYmU0MmIiEksKDGluY2x1ZGVfbWV0YRgCIAEoCEI1kkEyMjBBZGQgcmVxdWVzdCBwcm9jZXNzaW5nIG1ldGFkYXRhIHRvIHRoZSByZXNwb25zZS4SOQoJcHJpbmNpcGFsGAMgASgLMhsuY2VyYm9zLmVuZ2luZS52MS5QcmluY2lwYWxCCeBBArpIA8gBARKzAgoJcmVzb3VyY2VzGAQgAygLMjYuY2VyYm9zLnJlcXVlc3QudjEuQ2hlY2tSZXNvdXJjZXNSZXF1ZXN0LlJlc291cmNlRW50cnlC5wGSQdUBMh5MaXN0IG9mIHJlc291cmNlcyBhbmQgYWN0aW9ucy5KrAFbeyJhY3Rpb25zIjpbInZpZXciLCJjb21tZW50Il0sICJyZXNvdXJjZSI6eyJraW5kIjoiYWxidW06b2JqZWN0IiwicG9saWN5VmVyc2lvbiI6ImRlZmF1bHQiLCJpZCI6IlhYMTI1IiwiYXR0ciI6eyJvd25lciI6ImJ1Z3NfYnVubnkiLCAicHVibGljIjogZmFsc2UsICJmbGFnZ2VkIjogZmFsc2V9fX1dqAEBsAEB4EECukgIyAEBkgECCAESLAoIYXV4X2RhdGEYBSABKAsyGi5jZXJib3MucmVxdWVzdC52MS5BdXhEYXRhGsgBCg1SZXNvdXJjZUVudHJ5En4KB2FjdGlvbnMYASADKAlCbZJBVDIwTGlzdCBvZiBhY3Rpb25zIGJlaW5nIHBlcmZvcm1lZCBvbiB0aGUgcmVzb3VyY2UuShpbInZpZXc6cHVibGljIiwgImNvbW1lbnQiXagBAbABAeBBArpIEMgBAZIBCggBGAEiBHICEAESNwoIcmVzb3VyY2UYAiABKAsyGi5jZXJib3MuZW5naW5lLnYxLlJlc291cmNlQgngQQK6SAPIAQE6HpJBGwoZMhdDaGVjayByZXNvdXJjZXMgcmVxdWVzdCKcBwoHQXV4RGF0YRIrCgNqd3QYASABKAsyHi5jZXJib3MucmVxdWVzdC52MS5BdXhEYXRhLkpXVBqfBgoDSldUEsAECgV0b2tlbhgBIAEoCUKwBJJBnwQyHUpXVCBmcm9tIHRoZSBvcmlnaW5hbCByZXF1ZXN0SskDImV5SmhiR2NpT2lKRlV6TTROQ0lzSW10cFpDSTZJakU1VEdaYVlYUkZaR2M0TTFsT1l6VnlNak5uZFUxS2NYSnVORDBpTENKMGVYQWlPaUpLVjFRaWZRLmV5SmhkV1FpT2xzaVkyVnlZbTl6TFdwM2RDMTBaWE4wY3lKZExDSmpkWE4wYjIxQmNuSmhlU0k2V3lKQklpd2lRaUlzSWtNaVhTd2lZM1Z6ZEc5dFNXNTBJam8wTWl3aVkzVnpkRzl0VFdGd0lqcDdJa0VpT2lKQlFTSXNJa0lpT2lKQ1FpSXNJa01pT2lKRFF5SjlMQ0pqZFhOMGIyMVRkSEpwYm1jaU9pSm1iMjlpWVhJaUxDSmxlSEFpT2pFNU5EazVNelF3TXprc0ltbHpjeUk2SW1ObGNtSnZjeTEwWlhOMExYTjFhWFJsSW4wLldOX3RPU2NTcGRfRUktUDVFSTFZbGFneEVnRXhTZkJqQXRjcmdjRjZseVdqMWxHcFJfR0t4OWdvWkVwMnBfdDVBVldYTl9ianpfc01VbUpkSmE0Y1ZkNTVRbTFtaVItRkt1Nm9OUkhuU0VXZE1GbW5BcndQdy1ZREpXZnlsTEZYIoIDGgoUeC1leGFtcGxlLXNob3ctdmFsdWUSAiAAggMUCg54LWZpbGwtZXhhbXBsZRICIADgQQK6SAfIAQFyAhABEq4BCgprZXlfc2V0X2lkGAIgASgJQpkBkkGVATJSS2V5IElEIHRvIHVzZSB3aGVuIGRlY29kaW5nIHRoZSB0b2tlbiAoZGVmaW5lZCBpbiB0aGUgQ2VyYm9zIHNlcnZlciBjb25maWd1cmF0aW9uKUoLIm15LWtleXNldCKCAxoKFHgtZXhhbXBsZS1zaG93LXZhbHVlEgIgAIIDFAoOeC1maWxsLWV4YW1wbGUSAiAAOiSSQSEKHzIdSldUIGZyb20gdGhlIG9yaWdpbmFsIHJlcXVlc3Q6QpJBPwo9MjtTdHJ1Y3R1cmVkIGF1eGlsaWFyeSBkYXRhIHVzZWZ1bCBmb3IgZXZhbHVhdGluZyB0aGUgcmVxdWVzdCKWAQoYQWRkT3JVcGRhdGVQb2xpY3lSZXF1ZXN0ElgKCHBvbGljaWVzGAEgAygLMhguY2VyYm9zLnBvbGljeS52MS5Qb2xpY3lCLJJBGTIRTGlzdCBvZiBwb2xpY2llcy6gAWSoAQHgQQK6SArIAQGSAQQIARBkOiCSQR0KGzIZQWRkL3VwZGF0ZSBwb2xpY3kgcmVxdWVzdCL6BgoaTGlzdEF1ZGl0TG9nRW50cmllc1JlcXVlc3QSgwEKBGtpbmQYASABKA4yMi5jZXJib3MucmVxdWVzdC52MS5MaXN0QXVkaXRMb2dFbnRyaWVzUmVxdWVzdC5LaW5kQkGSQTEyEUtpbmQgb2YgbG9nIGVudHJ58gILS0lORF9BQ0NFU1PyAg1LSU5EX0RFQ0lTSU9OukgKyAEBggEEGAEYAhJACgR0YWlsGAIgASgNQjCSQSMyD0xhc3QgTiBlbnRyaWVzLlkAAAAAAECPQGkAAAAAAADwP7pIByoFGOgHKAFIABJKCgdiZXR3ZWVuGAMgASgLMjcuY2VyYm9zLnJlcXVlc3QudjEuTGlzdEF1ZGl0TG9nRW50cmllc1JlcXVlc3QuVGltZVJhbmdlSAASUgoFc2luY2UYBCABKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb25CJpJBIzIhRW50cmllcyBzaW5jZSBOIGhvdXJzL21pbnV0ZXMgYWdvSAASewoGbG9va3VwGAUgASgJQmmSQTcyCkJ5IENhbGwgSUSKASheWzAxMjM0NTY3ODlBQkNERUZHSEpLTU5QUVJTVFZXWFlaXXsyNn0kukgscioyKF5bMDEyMzQ1Njc4OUFCQ0RFRkdISktNTlBRUlNUVldYWVpdezI2fSRIABqjAgoJVGltZVJhbmdlEnkKBXN0YXJ0GAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEJOkkE9Mh5TdGFydCBkYXRlIGluIElTTyA4NjAxIGZvcm1hdC5KGyIyMDIxLTA3LTA1VDA3OjI3OjAxKzAwOjAwIuBBArpICMgBAbIBAjgBEnUKA2VuZBgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCTJJBOzIcRW5kIGRhdGUgaW4gSVNPIDg2MDEgZm9ybWF0LkobIjIwMjEtMDctMDVUMDc6Mjc6MDErMDA6MDAi4EECukgIyAEBsgECOAE6JJJBIQofMh1FbnRyaWVzIGJldHdlZW4gYSB0aW1lIHJhbmdlLiJACgRLaW5kEhQKEEtJTkRfVU5TUEVDSUZJRUQQABIPCgtLSU5EX0FDQ0VTUxABEhEKDUtJTkRfREVDSVNJT04QAkIPCgZmaWx0ZXISBbpIAggBIi8KEVNlcnZlckluZm9SZXF1ZXN0OhqSQRcKFTITU2VydmVyIGluZm8gcmVxdWVzdCKQBAoTTGlzdFBvbGljaWVzUmVxdWVzdBI7ChBpbmNsdWRlX2Rpc2FibGVkGAEgASgIQiGSQRsyGUluY2x1ZGUgZGlzYWJsZWQgcG9saWNpZXPgQQESQAoLbmFtZV9yZWdleHAYAiABKAlCK5JBJTIjRmlsdGVyIHBvbGljaWVzIGJ5IG5hbWUgd2l0aCByZWdleHDgQQESQgoMc2NvcGVfcmVnZXhwGAMgASgJQiySQSYyJEZpbHRlciBwb2xpY2llcyBieSBzY29wZSB3aXRoIHJlZ2V4cOBBARJGCg52ZXJzaW9uX3JlZ2V4cBgEIAEoCUIukkEoMiZGaWx0ZXIgcG9saWNpZXMgYnkgdmVyc2lvbiB3aXRoIHJlZ2V4cOBBARLPAQoJcG9saWN5X2lkGAUgAygJQrsBkkGmATKHAUZvciBibG9iLCBkaXNrLCBnaXQgc3RvcmVzIHVzZSBmaWxlIG5hbWUgKDxmaWxlbmFtZT4ueWFtbCkuIEZvciBteXNxbCwgcG9zdGdyZXMsIHNxbGl0ZTMgdXNlIGlkICg8a2luZD4uPG5hbWU+Ljx2ZXJzaW9uPikgb2YgdGhlIHBvbGljeUoaInByaW5jaXBhbC5zYXJhaC52ZGVmYXVsdCLgQQG6SAuSAQgQGSIEcgIQATockkEZChcyFUxpc3QgcG9saWNpZXMgcmVxdWVzdCL9AQoQR2V0UG9saWN5UmVxdWVzdBLNAQoCaWQYASADKAlCwAGSQaYBMocBRm9yIGJsb2IsIGRpc2ssIGdpdCBzdG9yZXMgdXNlIGZpbGUgbmFtZSAoPGZpbGVuYW1lPi55YW1sKS4gRm9yIG15c3FsLCBwb3N0Z3Jlcywgc3FsaXRlMyB1c2UgaWQgKDxraW5kPi48bmFtZT4uPHZlcnNpb24+KSBvZiB0aGUgcG9saWN5ShoicHJpbmNpcGFsLnNhcmFoLnZkZWZhdWx0IuBBArpIEMgBAZIBCggBGAEiBHICEAE6GZJBFgoUMhJHZXQgcG9saWN5IHJlcXVlc3QimgEKFERpc2FibGVQb2xpY3lSZXF1ZXN0EmMKAmlkGAEgAygJQleSQT4yIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgcG9saWN5ShoicHJpbmNpcGFsLnNhcmFoLnZkZWZhdWx0IuBBArpIEMgBAZIBCggBGAEiBHICEAE6HZJBGgoYMhZEaXNhYmxlIHBvbGljeSByZXF1ZXN0IpgBChNFbmFibGVQb2xpY3lSZXF1ZXN0EmMKAmlkGAEgAygJQleSQT4yIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgcG9saWN5ShoicHJpbmNpcGFsLnNhcmFoLnZkZWZhdWx0IuBBArpIEMgBAZIBCggBGAEiBHICEAE6HJJBGQoXMhVFbmFibGUgcG9saWN5IHJlcXVlc3QilgQKFkluc3BlY3RQb2xpY2llc1JlcXVlc3QSOwoQaW5jbHVkZV9kaXNhYmxlZBgBIAEoCEIhkkEbMhlJbmNsdWRlIGRpc2FibGVkIHBvbGljaWVz4EEBEkAKC25hbWVfcmVnZXhwGAIgASgJQiuSQSUyI0ZpbHRlciBwb2xpY2llcyBieSBuYW1lIHdpdGggcmVnZXhw4EEBEkIKDHNjb3BlX3JlZ2V4cBgDIAEoCUIskkEmMiRGaWx0ZXIgcG9saWNpZXMgYnkgc2NvcGUgd2l0aCByZWdleHDgQQESRgoOdmVyc2lvbl9yZWdleHAYBCABKAlCLpJBKDImRmlsdGVyIHBvbGljaWVzIGJ5IHZlcnNpb24gd2l0aCByZWdleHDgQQESzwEKCXBvbGljeV9pZBgFIAMoCUK7AZJBpgEyhwFGb3IgYmxvYiwgZGlzaywgZ2l0IHN0b3JlcyB1c2UgZmlsZSBuYW1lICg8ZmlsZW5hbWU+LnlhbWwpLiBGb3IgbXlzcWwsIHBvc3RncmVzLCBzcWxpdGUzIHVzZSBpZCAoPGtpbmQ+LjxuYW1lPi48dmVyc2lvbj4pIG9mIHRoZSBwb2xpY3lKGiJwcmluY2lwYWwuc2FyYWgudmRlZmF1bHQi4EEBukgLkgEIEBkiBHICEAE6H5JBHAoaMhhJbnNwZWN0IHBvbGljaWVzIHJlcXVlc3QilAEKGEFkZE9yVXBkYXRlU2NoZW1hUmVxdWVzdBJWCgdzY2hlbWFzGAEgAygLMhguY2VyYm9zLnNjaGVtYS52MS5TY2hlbWFCK5JBGDIQTGlzdCBvZiBzY2hlbWFzLqABZKgBAeBBArpICsgBAZIBBAgBEGQ6IJJBHQobMhlBZGQvdXBkYXRlIHNjaGVtYSByZXF1ZXN0IjQKEkxpc3RTY2hlbWFzUmVxdWVzdDoekkEbChkyF0xpc3Qgc2NoZW1hIGlkcyByZXF1ZXN0Io4BChBHZXRTY2hlbWFSZXF1ZXN0ElwKAmlkGAEgAygJQlCSQTQyIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgc2NoZW1hShAicHJpbmNpcGFsLmpzb24i4EECukgTyAEBkgENCAEYASIHcgUQARj/ATockkEZChcyFUdldCBzY2hlbWEocykgcmVxdWVzdCKUAQoTRGVsZXRlU2NoZW1hUmVxdWVzdBJcCgJpZBgBIAMoCUJQkkE0MiBVbmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHNjaGVtYUoQInByaW5jaXBhbC5qc29uIuBBArpIE8gBAZIBDQgBGAEiB3IFEAEY/wE6H5JBHAoaMhhEZWxldGUgc2NoZW1hKHMpIHJlcXVlc3QicgoSUmVsb2FkU3RvcmVSZXF1ZXN0Ej8KBHdhaXQYASABKAhCMZJBKzIpV2FpdCB1bnRpbCB0aGUgcmVsb2FkaW5nIHByb2Nlc3MgZmluaXNoZXPgQQE6G5JBGAoWMhRSZWxvYWQgc3RvcmUgcmVxdWVzdEJzChlkZXYuY2VyYm9zLmFwaS52MS5yZXF1ZXN0Wj5naXRodWIuY29tL2NlcmJvcy9jZXJib3MvYXBpL2dlbnBiL2NlcmJvcy9yZXF1ZXN0L3YxO3JlcXVlc3R2MaoCFUNlcmJvcy5BcGkuVjEuUmVxdWVzdGIGcHJvdG8z",
    [
      file_buf_validate_validate,
      file_cerbos_engine_v1_engine,
      file_cerbos_policy_v1_policy,
      file_cerbos_schema_v1_schema,
      file_google_api_field_behavior,
      file_google_protobuf_duration,
      file_google_protobuf_struct,
      file_google_protobuf_timestamp,
      file_protoc_gen_openapiv2_options_annotations,
    ],
  );

/**
 * @generated from message cerbos.request.v1.PlanResourcesRequest
 */
export type PlanResourcesRequest =
  Message<"cerbos.request.v1.PlanResourcesRequest"> & {
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
     * @generated from field: repeated string actions = 7;
     */
    actions: string[];

    /**
     * @generated from field: cerbos.engine.v1.Principal principal = 3;
     */
    principal?: Principal;

    /**
     * @generated from field: cerbos.engine.v1.PlanResourcesInput.Resource resource = 4;
     */
    resource?: PlanResourcesInput_Resource;

    /**
     * @generated from field: cerbos.request.v1.AuxData aux_data = 5;
     */
    auxData?: AuxData;

    /**
     * @generated from field: bool include_meta = 6;
     */
    includeMeta: boolean;
  };

/**
 * @generated from message cerbos.request.v1.PlanResourcesRequest
 */
export type PlanResourcesRequestJson = {
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
   * @generated from field: repeated string actions = 7;
   */
  actions?: string[];

  /**
   * @generated from field: cerbos.engine.v1.Principal principal = 3;
   */
  principal?: PrincipalJson;

  /**
   * @generated from field: cerbos.engine.v1.PlanResourcesInput.Resource resource = 4;
   */
  resource?: PlanResourcesInput_ResourceJson;

  /**
   * @generated from field: cerbos.request.v1.AuxData aux_data = 5;
   */
  auxData?: AuxDataJson;

  /**
   * @generated from field: bool include_meta = 6;
   */
  includeMeta?: boolean;
};

/**
 * @generated from message cerbos.request.v1.PlanResourcesRequest
 */
export type PlanResourcesRequestValid =
  Message<"cerbos.request.v1.PlanResourcesRequest"> & {
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
     * @generated from field: repeated string actions = 7;
     */
    actions: string[];

    /**
     * @generated from field: cerbos.engine.v1.Principal principal = 3;
     */
    principal: PrincipalValid;

    /**
     * @generated from field: cerbos.engine.v1.PlanResourcesInput.Resource resource = 4;
     */
    resource: PlanResourcesInput_ResourceValid;

    /**
     * @generated from field: cerbos.request.v1.AuxData aux_data = 5;
     */
    auxData?: AuxDataValid;

    /**
     * @generated from field: bool include_meta = 6;
     */
    includeMeta: boolean;
  };

/**
 * Describes the message cerbos.request.v1.PlanResourcesRequest.
 * Use `create(PlanResourcesRequestSchema)` to create a new message.
 */
export const PlanResourcesRequestSchema: GenMessage<
  PlanResourcesRequest,
  { jsonType: PlanResourcesRequestJson; validType: PlanResourcesRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 0);

/**
 * Deprecated. See CheckResourcesRequest.
 *
 * @generated from message cerbos.request.v1.CheckResourceSetRequest
 */
export type CheckResourceSetRequest =
  Message<"cerbos.request.v1.CheckResourceSetRequest"> & {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;

    /**
     * @generated from field: repeated string actions = 2;
     */
    actions: string[];

    /**
     * @generated from field: cerbos.engine.v1.Principal principal = 3;
     */
    principal?: Principal;

    /**
     * @generated from field: cerbos.request.v1.ResourceSet resource = 4;
     */
    resource?: ResourceSet;

    /**
     * @generated from field: bool include_meta = 5;
     */
    includeMeta: boolean;

    /**
     * @generated from field: cerbos.request.v1.AuxData aux_data = 6;
     */
    auxData?: AuxData;
  };

/**
 * Deprecated. See CheckResourcesRequest.
 *
 * @generated from message cerbos.request.v1.CheckResourceSetRequest
 */
export type CheckResourceSetRequestJson = {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId?: string;

  /**
   * @generated from field: repeated string actions = 2;
   */
  actions?: string[];

  /**
   * @generated from field: cerbos.engine.v1.Principal principal = 3;
   */
  principal?: PrincipalJson;

  /**
   * @generated from field: cerbos.request.v1.ResourceSet resource = 4;
   */
  resource?: ResourceSetJson;

  /**
   * @generated from field: bool include_meta = 5;
   */
  includeMeta?: boolean;

  /**
   * @generated from field: cerbos.request.v1.AuxData aux_data = 6;
   */
  auxData?: AuxDataJson;
};

/**
 * Deprecated. See CheckResourcesRequest.
 *
 * @generated from message cerbos.request.v1.CheckResourceSetRequest
 */
export type CheckResourceSetRequestValid =
  Message<"cerbos.request.v1.CheckResourceSetRequest"> & {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;

    /**
     * @generated from field: repeated string actions = 2;
     */
    actions: string[];

    /**
     * @generated from field: cerbos.engine.v1.Principal principal = 3;
     */
    principal: PrincipalValid;

    /**
     * @generated from field: cerbos.request.v1.ResourceSet resource = 4;
     */
    resource: ResourceSetValid;

    /**
     * @generated from field: bool include_meta = 5;
     */
    includeMeta: boolean;

    /**
     * @generated from field: cerbos.request.v1.AuxData aux_data = 6;
     */
    auxData?: AuxDataValid;
  };

/**
 * Describes the message cerbos.request.v1.CheckResourceSetRequest.
 * Use `create(CheckResourceSetRequestSchema)` to create a new message.
 */
export const CheckResourceSetRequestSchema: GenMessage<
  CheckResourceSetRequest,
  {
    jsonType: CheckResourceSetRequestJson;
    validType: CheckResourceSetRequestValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 1);

/**
 * @generated from message cerbos.request.v1.ResourceSet
 */
export type ResourceSet = Message<"cerbos.request.v1.ResourceSet"> & {
  /**
   * @generated from field: string kind = 1;
   */
  kind: string;

  /**
   * @generated from field: string policy_version = 2;
   */
  policyVersion: string;

  /**
   * @generated from field: map<string, cerbos.request.v1.AttributesMap> instances = 3;
   */
  instances: { [key: string]: AttributesMap };

  /**
   * @generated from field: string scope = 4;
   */
  scope: string;
};

/**
 * @generated from message cerbos.request.v1.ResourceSet
 */
export type ResourceSetJson = {
  /**
   * @generated from field: string kind = 1;
   */
  kind?: string;

  /**
   * @generated from field: string policy_version = 2;
   */
  policyVersion?: string;

  /**
   * @generated from field: map<string, cerbos.request.v1.AttributesMap> instances = 3;
   */
  instances?: { [key: string]: AttributesMapJson };

  /**
   * @generated from field: string scope = 4;
   */
  scope?: string;
};

/**
 * @generated from message cerbos.request.v1.ResourceSet
 */
export type ResourceSetValid = Message<"cerbos.request.v1.ResourceSet"> & {
  /**
   * @generated from field: string kind = 1;
   */
  kind: string;

  /**
   * @generated from field: string policy_version = 2;
   */
  policyVersion: string;

  /**
   * @generated from field: map<string, cerbos.request.v1.AttributesMap> instances = 3;
   */
  instances: { [key: string]: AttributesMapValid };

  /**
   * @generated from field: string scope = 4;
   */
  scope: string;
};

/**
 * Describes the message cerbos.request.v1.ResourceSet.
 * Use `create(ResourceSetSchema)` to create a new message.
 */
export const ResourceSetSchema: GenMessage<
  ResourceSet,
  { jsonType: ResourceSetJson; validType: ResourceSetValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 2);

/**
 * @generated from message cerbos.request.v1.AttributesMap
 */
export type AttributesMap = Message<"cerbos.request.v1.AttributesMap"> & {
  /**
   * @generated from field: map<string, google.protobuf.Value> attr = 1;
   */
  attr: { [key: string]: Value };
};

/**
 * @generated from message cerbos.request.v1.AttributesMap
 */
export type AttributesMapJson = {
  /**
   * @generated from field: map<string, google.protobuf.Value> attr = 1;
   */
  attr?: { [key: string]: ValueJson };
};

export type AttributesMapValid = AttributesMap;

/**
 * Describes the message cerbos.request.v1.AttributesMap.
 * Use `create(AttributesMapSchema)` to create a new message.
 */
export const AttributesMapSchema: GenMessage<
  AttributesMap,
  { jsonType: AttributesMapJson; validType: AttributesMapValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 3);

/**
 * Deprecated. See CheckResourcesRequest.
 *
 * @generated from message cerbos.request.v1.CheckResourceBatchRequest
 */
export type CheckResourceBatchRequest =
  Message<"cerbos.request.v1.CheckResourceBatchRequest"> & {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;

    /**
     * @generated from field: cerbos.engine.v1.Principal principal = 2;
     */
    principal?: Principal;

    /**
     * @generated from field: repeated cerbos.request.v1.CheckResourceBatchRequest.BatchEntry resources = 3;
     */
    resources: CheckResourceBatchRequest_BatchEntry[];

    /**
     * @generated from field: cerbos.request.v1.AuxData aux_data = 4;
     */
    auxData?: AuxData;
  };

/**
 * Deprecated. See CheckResourcesRequest.
 *
 * @generated from message cerbos.request.v1.CheckResourceBatchRequest
 */
export type CheckResourceBatchRequestJson = {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId?: string;

  /**
   * @generated from field: cerbos.engine.v1.Principal principal = 2;
   */
  principal?: PrincipalJson;

  /**
   * @generated from field: repeated cerbos.request.v1.CheckResourceBatchRequest.BatchEntry resources = 3;
   */
  resources?: CheckResourceBatchRequest_BatchEntryJson[];

  /**
   * @generated from field: cerbos.request.v1.AuxData aux_data = 4;
   */
  auxData?: AuxDataJson;
};

/**
 * Deprecated. See CheckResourcesRequest.
 *
 * @generated from message cerbos.request.v1.CheckResourceBatchRequest
 */
export type CheckResourceBatchRequestValid =
  Message<"cerbos.request.v1.CheckResourceBatchRequest"> & {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;

    /**
     * @generated from field: cerbos.engine.v1.Principal principal = 2;
     */
    principal: PrincipalValid;

    /**
     * @generated from field: repeated cerbos.request.v1.CheckResourceBatchRequest.BatchEntry resources = 3;
     */
    resources: CheckResourceBatchRequest_BatchEntryValid[];

    /**
     * @generated from field: cerbos.request.v1.AuxData aux_data = 4;
     */
    auxData?: AuxDataValid;
  };

/**
 * Describes the message cerbos.request.v1.CheckResourceBatchRequest.
 * Use `create(CheckResourceBatchRequestSchema)` to create a new message.
 */
export const CheckResourceBatchRequestSchema: GenMessage<
  CheckResourceBatchRequest,
  {
    jsonType: CheckResourceBatchRequestJson;
    validType: CheckResourceBatchRequestValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 4);

/**
 * @generated from message cerbos.request.v1.CheckResourceBatchRequest.BatchEntry
 */
export type CheckResourceBatchRequest_BatchEntry =
  Message<"cerbos.request.v1.CheckResourceBatchRequest.BatchEntry"> & {
    /**
     * @generated from field: repeated string actions = 1;
     */
    actions: string[];

    /**
     * @generated from field: cerbos.engine.v1.Resource resource = 2;
     */
    resource?: Resource;
  };

/**
 * @generated from message cerbos.request.v1.CheckResourceBatchRequest.BatchEntry
 */
export type CheckResourceBatchRequest_BatchEntryJson = {
  /**
   * @generated from field: repeated string actions = 1;
   */
  actions?: string[];

  /**
   * @generated from field: cerbos.engine.v1.Resource resource = 2;
   */
  resource?: ResourceJson;
};

/**
 * @generated from message cerbos.request.v1.CheckResourceBatchRequest.BatchEntry
 */
export type CheckResourceBatchRequest_BatchEntryValid =
  Message<"cerbos.request.v1.CheckResourceBatchRequest.BatchEntry"> & {
    /**
     * @generated from field: repeated string actions = 1;
     */
    actions: string[];

    /**
     * @generated from field: cerbos.engine.v1.Resource resource = 2;
     */
    resource: ResourceValid;
  };

/**
 * Describes the message cerbos.request.v1.CheckResourceBatchRequest.BatchEntry.
 * Use `create(CheckResourceBatchRequest_BatchEntrySchema)` to create a new message.
 */
export const CheckResourceBatchRequest_BatchEntrySchema: GenMessage<
  CheckResourceBatchRequest_BatchEntry,
  {
    jsonType: CheckResourceBatchRequest_BatchEntryJson;
    validType: CheckResourceBatchRequest_BatchEntryValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 4, 0);

/**
 * Structure of the request for the check resources API call.
 *
 * @generated from message cerbos.request.v1.CheckResourcesRequest
 */
export type CheckResourcesRequest =
  Message<"cerbos.request.v1.CheckResourcesRequest"> & {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;

    /**
     * @generated from field: bool include_meta = 2;
     */
    includeMeta: boolean;

    /**
     * @generated from field: cerbos.engine.v1.Principal principal = 3;
     */
    principal?: Principal;

    /**
     * @generated from field: repeated cerbos.request.v1.CheckResourcesRequest.ResourceEntry resources = 4;
     */
    resources: CheckResourcesRequest_ResourceEntry[];

    /**
     * @generated from field: cerbos.request.v1.AuxData aux_data = 5;
     */
    auxData?: AuxData;
  };

/**
 * Structure of the request for the check resources API call.
 *
 * @generated from message cerbos.request.v1.CheckResourcesRequest
 */
export type CheckResourcesRequestJson = {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId?: string;

  /**
   * @generated from field: bool include_meta = 2;
   */
  includeMeta?: boolean;

  /**
   * @generated from field: cerbos.engine.v1.Principal principal = 3;
   */
  principal?: PrincipalJson;

  /**
   * @generated from field: repeated cerbos.request.v1.CheckResourcesRequest.ResourceEntry resources = 4;
   */
  resources?: CheckResourcesRequest_ResourceEntryJson[];

  /**
   * @generated from field: cerbos.request.v1.AuxData aux_data = 5;
   */
  auxData?: AuxDataJson;
};

/**
 * Structure of the request for the check resources API call.
 *
 * @generated from message cerbos.request.v1.CheckResourcesRequest
 */
export type CheckResourcesRequestValid =
  Message<"cerbos.request.v1.CheckResourcesRequest"> & {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;

    /**
     * @generated from field: bool include_meta = 2;
     */
    includeMeta: boolean;

    /**
     * @generated from field: cerbos.engine.v1.Principal principal = 3;
     */
    principal: PrincipalValid;

    /**
     * @generated from field: repeated cerbos.request.v1.CheckResourcesRequest.ResourceEntry resources = 4;
     */
    resources: CheckResourcesRequest_ResourceEntryValid[];

    /**
     * @generated from field: cerbos.request.v1.AuxData aux_data = 5;
     */
    auxData?: AuxDataValid;
  };

/**
 * Describes the message cerbos.request.v1.CheckResourcesRequest.
 * Use `create(CheckResourcesRequestSchema)` to create a new message.
 */
export const CheckResourcesRequestSchema: GenMessage<
  CheckResourcesRequest,
  { jsonType: CheckResourcesRequestJson; validType: CheckResourcesRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 5);

/**
 * @generated from message cerbos.request.v1.CheckResourcesRequest.ResourceEntry
 */
export type CheckResourcesRequest_ResourceEntry =
  Message<"cerbos.request.v1.CheckResourcesRequest.ResourceEntry"> & {
    /**
     * @generated from field: repeated string actions = 1;
     */
    actions: string[];

    /**
     * @generated from field: cerbos.engine.v1.Resource resource = 2;
     */
    resource?: Resource;
  };

/**
 * @generated from message cerbos.request.v1.CheckResourcesRequest.ResourceEntry
 */
export type CheckResourcesRequest_ResourceEntryJson = {
  /**
   * @generated from field: repeated string actions = 1;
   */
  actions?: string[];

  /**
   * @generated from field: cerbos.engine.v1.Resource resource = 2;
   */
  resource?: ResourceJson;
};

/**
 * @generated from message cerbos.request.v1.CheckResourcesRequest.ResourceEntry
 */
export type CheckResourcesRequest_ResourceEntryValid =
  Message<"cerbos.request.v1.CheckResourcesRequest.ResourceEntry"> & {
    /**
     * @generated from field: repeated string actions = 1;
     */
    actions: string[];

    /**
     * @generated from field: cerbos.engine.v1.Resource resource = 2;
     */
    resource: ResourceValid;
  };

/**
 * Describes the message cerbos.request.v1.CheckResourcesRequest.ResourceEntry.
 * Use `create(CheckResourcesRequest_ResourceEntrySchema)` to create a new message.
 */
export const CheckResourcesRequest_ResourceEntrySchema: GenMessage<
  CheckResourcesRequest_ResourceEntry,
  {
    jsonType: CheckResourcesRequest_ResourceEntryJson;
    validType: CheckResourcesRequest_ResourceEntryValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 5, 0);

/**
 * @generated from message cerbos.request.v1.AuxData
 */
export type AuxData = Message<"cerbos.request.v1.AuxData"> & {
  /**
   * @generated from field: cerbos.request.v1.AuxData.JWT jwt = 1;
   */
  jwt?: AuxData_JWT;
};

/**
 * @generated from message cerbos.request.v1.AuxData
 */
export type AuxDataJson = {
  /**
   * @generated from field: cerbos.request.v1.AuxData.JWT jwt = 1;
   */
  jwt?: AuxData_JWTJson;
};

/**
 * @generated from message cerbos.request.v1.AuxData
 */
export type AuxDataValid = Message<"cerbos.request.v1.AuxData"> & {
  /**
   * @generated from field: cerbos.request.v1.AuxData.JWT jwt = 1;
   */
  jwt?: AuxData_JWTValid;
};

/**
 * Describes the message cerbos.request.v1.AuxData.
 * Use `create(AuxDataSchema)` to create a new message.
 */
export const AuxDataSchema: GenMessage<
  AuxData,
  { jsonType: AuxDataJson; validType: AuxDataValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 6);

/**
 * @generated from message cerbos.request.v1.AuxData.JWT
 */
export type AuxData_JWT = Message<"cerbos.request.v1.AuxData.JWT"> & {
  /**
   * @generated from field: string token = 1;
   */
  token: string;

  /**
   * @generated from field: string key_set_id = 2;
   */
  keySetId: string;
};

/**
 * @generated from message cerbos.request.v1.AuxData.JWT
 */
export type AuxData_JWTJson = {
  /**
   * @generated from field: string token = 1;
   */
  token?: string;

  /**
   * @generated from field: string key_set_id = 2;
   */
  keySetId?: string;
};

/**
 * @generated from message cerbos.request.v1.AuxData.JWT
 */
export type AuxData_JWTValid = Message<"cerbos.request.v1.AuxData.JWT"> & {
  /**
   * @generated from field: string token = 1;
   */
  token: string;

  /**
   * @generated from field: string key_set_id = 2;
   */
  keySetId: string;
};

/**
 * Describes the message cerbos.request.v1.AuxData.JWT.
 * Use `create(AuxData_JWTSchema)` to create a new message.
 */
export const AuxData_JWTSchema: GenMessage<
  AuxData_JWT,
  { jsonType: AuxData_JWTJson; validType: AuxData_JWTValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 6, 0);

/**
 * @generated from message cerbos.request.v1.AddOrUpdatePolicyRequest
 */
export type AddOrUpdatePolicyRequest =
  Message<"cerbos.request.v1.AddOrUpdatePolicyRequest"> & {
    /**
     * @generated from field: repeated cerbos.policy.v1.Policy policies = 1;
     */
    policies: Policy[];
  };

/**
 * @generated from message cerbos.request.v1.AddOrUpdatePolicyRequest
 */
export type AddOrUpdatePolicyRequestJson = {
  /**
   * @generated from field: repeated cerbos.policy.v1.Policy policies = 1;
   */
  policies?: PolicyJson[];
};

/**
 * @generated from message cerbos.request.v1.AddOrUpdatePolicyRequest
 */
export type AddOrUpdatePolicyRequestValid =
  Message<"cerbos.request.v1.AddOrUpdatePolicyRequest"> & {
    /**
     * @generated from field: repeated cerbos.policy.v1.Policy policies = 1;
     */
    policies: PolicyValid[];
  };

/**
 * Describes the message cerbos.request.v1.AddOrUpdatePolicyRequest.
 * Use `create(AddOrUpdatePolicyRequestSchema)` to create a new message.
 */
export const AddOrUpdatePolicyRequestSchema: GenMessage<
  AddOrUpdatePolicyRequest,
  {
    jsonType: AddOrUpdatePolicyRequestJson;
    validType: AddOrUpdatePolicyRequestValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 7);

/**
 * @generated from message cerbos.request.v1.ListAuditLogEntriesRequest
 */
export type ListAuditLogEntriesRequest =
  Message<"cerbos.request.v1.ListAuditLogEntriesRequest"> & {
    /**
     * @generated from field: cerbos.request.v1.ListAuditLogEntriesRequest.Kind kind = 1;
     */
    kind: ListAuditLogEntriesRequest_Kind;

    /**
     * @generated from oneof cerbos.request.v1.ListAuditLogEntriesRequest.filter
     */
    filter:
      | {
          /**
           * @generated from field: uint32 tail = 2;
           */
          value: number;
          case: "tail";
        }
      | {
          /**
           * @generated from field: cerbos.request.v1.ListAuditLogEntriesRequest.TimeRange between = 3;
           */
          value: ListAuditLogEntriesRequest_TimeRange;
          case: "between";
        }
      | {
          /**
           * @generated from field: google.protobuf.Duration since = 4;
           */
          value: Duration;
          case: "since";
        }
      | {
          /**
           * @generated from field: string lookup = 5;
           */
          value: string;
          case: "lookup";
        }
      | { case: undefined; value?: undefined };
  };

/**
 * @generated from message cerbos.request.v1.ListAuditLogEntriesRequest
 */
export type ListAuditLogEntriesRequestJson = {
  /**
   * @generated from field: cerbos.request.v1.ListAuditLogEntriesRequest.Kind kind = 1;
   */
  kind?: ListAuditLogEntriesRequest_KindJson;

  /**
   * @generated from field: uint32 tail = 2;
   */
  tail?: number;

  /**
   * @generated from field: cerbos.request.v1.ListAuditLogEntriesRequest.TimeRange between = 3;
   */
  between?: ListAuditLogEntriesRequest_TimeRangeJson;

  /**
   * @generated from field: google.protobuf.Duration since = 4;
   */
  since?: DurationJson;

  /**
   * @generated from field: string lookup = 5;
   */
  lookup?: string;
};

/**
 * @generated from message cerbos.request.v1.ListAuditLogEntriesRequest
 */
export type ListAuditLogEntriesRequestValid =
  Message<"cerbos.request.v1.ListAuditLogEntriesRequest"> & {
    /**
     * @generated from field: cerbos.request.v1.ListAuditLogEntriesRequest.Kind kind = 1;
     */
    kind: ListAuditLogEntriesRequest_Kind;

    /**
     * @generated from oneof cerbos.request.v1.ListAuditLogEntriesRequest.filter
     */
    filter:
      | {
          /**
           * @generated from field: uint32 tail = 2;
           */
          value: number;
          case: "tail";
        }
      | {
          /**
           * @generated from field: cerbos.request.v1.ListAuditLogEntriesRequest.TimeRange between = 3;
           */
          value: ListAuditLogEntriesRequest_TimeRangeValid;
          case: "between";
        }
      | {
          /**
           * @generated from field: google.protobuf.Duration since = 4;
           */
          value: Duration;
          case: "since";
        }
      | {
          /**
           * @generated from field: string lookup = 5;
           */
          value: string;
          case: "lookup";
        }
      | { case: undefined; value?: undefined };
  };

/**
 * Describes the message cerbos.request.v1.ListAuditLogEntriesRequest.
 * Use `create(ListAuditLogEntriesRequestSchema)` to create a new message.
 */
export const ListAuditLogEntriesRequestSchema: GenMessage<
  ListAuditLogEntriesRequest,
  {
    jsonType: ListAuditLogEntriesRequestJson;
    validType: ListAuditLogEntriesRequestValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 8);

/**
 * @generated from message cerbos.request.v1.ListAuditLogEntriesRequest.TimeRange
 */
export type ListAuditLogEntriesRequest_TimeRange =
  Message<"cerbos.request.v1.ListAuditLogEntriesRequest.TimeRange"> & {
    /**
     * @generated from field: google.protobuf.Timestamp start = 1;
     */
    start?: Timestamp;

    /**
     * @generated from field: google.protobuf.Timestamp end = 2;
     */
    end?: Timestamp;
  };

/**
 * @generated from message cerbos.request.v1.ListAuditLogEntriesRequest.TimeRange
 */
export type ListAuditLogEntriesRequest_TimeRangeJson = {
  /**
   * @generated from field: google.protobuf.Timestamp start = 1;
   */
  start?: TimestampJson;

  /**
   * @generated from field: google.protobuf.Timestamp end = 2;
   */
  end?: TimestampJson;
};

/**
 * @generated from message cerbos.request.v1.ListAuditLogEntriesRequest.TimeRange
 */
export type ListAuditLogEntriesRequest_TimeRangeValid =
  Message<"cerbos.request.v1.ListAuditLogEntriesRequest.TimeRange"> & {
    /**
     * @generated from field: google.protobuf.Timestamp start = 1;
     */
    start: Timestamp;

    /**
     * @generated from field: google.protobuf.Timestamp end = 2;
     */
    end: Timestamp;
  };

/**
 * Describes the message cerbos.request.v1.ListAuditLogEntriesRequest.TimeRange.
 * Use `create(ListAuditLogEntriesRequest_TimeRangeSchema)` to create a new message.
 */
export const ListAuditLogEntriesRequest_TimeRangeSchema: GenMessage<
  ListAuditLogEntriesRequest_TimeRange,
  {
    jsonType: ListAuditLogEntriesRequest_TimeRangeJson;
    validType: ListAuditLogEntriesRequest_TimeRangeValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 8, 0);

/**
 * @generated from enum cerbos.request.v1.ListAuditLogEntriesRequest.Kind
 */
export enum ListAuditLogEntriesRequest_Kind {
  /**
   * @generated from enum value: KIND_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: KIND_ACCESS = 1;
   */
  ACCESS = 1,

  /**
   * @generated from enum value: KIND_DECISION = 2;
   */
  DECISION = 2,
}

/**
 * @generated from enum cerbos.request.v1.ListAuditLogEntriesRequest.Kind
 */
export type ListAuditLogEntriesRequest_KindJson =
  | "KIND_UNSPECIFIED"
  | "KIND_ACCESS"
  | "KIND_DECISION";

/**
 * Describes the enum cerbos.request.v1.ListAuditLogEntriesRequest.Kind.
 */
export const ListAuditLogEntriesRequest_KindSchema: GenEnum<
  ListAuditLogEntriesRequest_Kind,
  ListAuditLogEntriesRequest_KindJson
> = /*@__PURE__*/ enumDesc(file_cerbos_request_v1_request, 8, 0);

/**
 * @generated from message cerbos.request.v1.ServerInfoRequest
 */
export type ServerInfoRequest =
  Message<"cerbos.request.v1.ServerInfoRequest"> & {};

/**
 * @generated from message cerbos.request.v1.ServerInfoRequest
 */
export type ServerInfoRequestJson = {};

export type ServerInfoRequestValid = ServerInfoRequest;

/**
 * Describes the message cerbos.request.v1.ServerInfoRequest.
 * Use `create(ServerInfoRequestSchema)` to create a new message.
 */
export const ServerInfoRequestSchema: GenMessage<
  ServerInfoRequest,
  { jsonType: ServerInfoRequestJson; validType: ServerInfoRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 9);

/**
 * @generated from message cerbos.request.v1.ListPoliciesRequest
 */
export type ListPoliciesRequest =
  Message<"cerbos.request.v1.ListPoliciesRequest"> & {
    /**
     * @generated from field: bool include_disabled = 1;
     */
    includeDisabled: boolean;

    /**
     * @generated from field: string name_regexp = 2;
     */
    nameRegexp: string;

    /**
     * @generated from field: string scope_regexp = 3;
     */
    scopeRegexp: string;

    /**
     * @generated from field: string version_regexp = 4;
     */
    versionRegexp: string;

    /**
     * @generated from field: repeated string policy_id = 5;
     */
    policyId: string[];
  };

/**
 * @generated from message cerbos.request.v1.ListPoliciesRequest
 */
export type ListPoliciesRequestJson = {
  /**
   * @generated from field: bool include_disabled = 1;
   */
  includeDisabled?: boolean;

  /**
   * @generated from field: string name_regexp = 2;
   */
  nameRegexp?: string;

  /**
   * @generated from field: string scope_regexp = 3;
   */
  scopeRegexp?: string;

  /**
   * @generated from field: string version_regexp = 4;
   */
  versionRegexp?: string;

  /**
   * @generated from field: repeated string policy_id = 5;
   */
  policyId?: string[];
};

export type ListPoliciesRequestValid = ListPoliciesRequest;

/**
 * Describes the message cerbos.request.v1.ListPoliciesRequest.
 * Use `create(ListPoliciesRequestSchema)` to create a new message.
 */
export const ListPoliciesRequestSchema: GenMessage<
  ListPoliciesRequest,
  { jsonType: ListPoliciesRequestJson; validType: ListPoliciesRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 10);

/**
 * @generated from message cerbos.request.v1.GetPolicyRequest
 */
export type GetPolicyRequest = Message<"cerbos.request.v1.GetPolicyRequest"> & {
  /**
   * @generated from field: repeated string id = 1;
   */
  id: string[];
};

/**
 * @generated from message cerbos.request.v1.GetPolicyRequest
 */
export type GetPolicyRequestJson = {
  /**
   * @generated from field: repeated string id = 1;
   */
  id?: string[];
};

/**
 * @generated from message cerbos.request.v1.GetPolicyRequest
 */
export type GetPolicyRequestValid =
  Message<"cerbos.request.v1.GetPolicyRequest"> & {
    /**
     * @generated from field: repeated string id = 1;
     */
    id: string[];
  };

/**
 * Describes the message cerbos.request.v1.GetPolicyRequest.
 * Use `create(GetPolicyRequestSchema)` to create a new message.
 */
export const GetPolicyRequestSchema: GenMessage<
  GetPolicyRequest,
  { jsonType: GetPolicyRequestJson; validType: GetPolicyRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 11);

/**
 * @generated from message cerbos.request.v1.DisablePolicyRequest
 */
export type DisablePolicyRequest =
  Message<"cerbos.request.v1.DisablePolicyRequest"> & {
    /**
     * @generated from field: repeated string id = 1;
     */
    id: string[];
  };

/**
 * @generated from message cerbos.request.v1.DisablePolicyRequest
 */
export type DisablePolicyRequestJson = {
  /**
   * @generated from field: repeated string id = 1;
   */
  id?: string[];
};

/**
 * @generated from message cerbos.request.v1.DisablePolicyRequest
 */
export type DisablePolicyRequestValid =
  Message<"cerbos.request.v1.DisablePolicyRequest"> & {
    /**
     * @generated from field: repeated string id = 1;
     */
    id: string[];
  };

/**
 * Describes the message cerbos.request.v1.DisablePolicyRequest.
 * Use `create(DisablePolicyRequestSchema)` to create a new message.
 */
export const DisablePolicyRequestSchema: GenMessage<
  DisablePolicyRequest,
  { jsonType: DisablePolicyRequestJson; validType: DisablePolicyRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 12);

/**
 * @generated from message cerbos.request.v1.EnablePolicyRequest
 */
export type EnablePolicyRequest =
  Message<"cerbos.request.v1.EnablePolicyRequest"> & {
    /**
     * @generated from field: repeated string id = 1;
     */
    id: string[];
  };

/**
 * @generated from message cerbos.request.v1.EnablePolicyRequest
 */
export type EnablePolicyRequestJson = {
  /**
   * @generated from field: repeated string id = 1;
   */
  id?: string[];
};

/**
 * @generated from message cerbos.request.v1.EnablePolicyRequest
 */
export type EnablePolicyRequestValid =
  Message<"cerbos.request.v1.EnablePolicyRequest"> & {
    /**
     * @generated from field: repeated string id = 1;
     */
    id: string[];
  };

/**
 * Describes the message cerbos.request.v1.EnablePolicyRequest.
 * Use `create(EnablePolicyRequestSchema)` to create a new message.
 */
export const EnablePolicyRequestSchema: GenMessage<
  EnablePolicyRequest,
  { jsonType: EnablePolicyRequestJson; validType: EnablePolicyRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 13);

/**
 * @generated from message cerbos.request.v1.InspectPoliciesRequest
 */
export type InspectPoliciesRequest =
  Message<"cerbos.request.v1.InspectPoliciesRequest"> & {
    /**
     * @generated from field: bool include_disabled = 1;
     */
    includeDisabled: boolean;

    /**
     * @generated from field: string name_regexp = 2;
     */
    nameRegexp: string;

    /**
     * @generated from field: string scope_regexp = 3;
     */
    scopeRegexp: string;

    /**
     * @generated from field: string version_regexp = 4;
     */
    versionRegexp: string;

    /**
     * @generated from field: repeated string policy_id = 5;
     */
    policyId: string[];
  };

/**
 * @generated from message cerbos.request.v1.InspectPoliciesRequest
 */
export type InspectPoliciesRequestJson = {
  /**
   * @generated from field: bool include_disabled = 1;
   */
  includeDisabled?: boolean;

  /**
   * @generated from field: string name_regexp = 2;
   */
  nameRegexp?: string;

  /**
   * @generated from field: string scope_regexp = 3;
   */
  scopeRegexp?: string;

  /**
   * @generated from field: string version_regexp = 4;
   */
  versionRegexp?: string;

  /**
   * @generated from field: repeated string policy_id = 5;
   */
  policyId?: string[];
};

export type InspectPoliciesRequestValid = InspectPoliciesRequest;

/**
 * Describes the message cerbos.request.v1.InspectPoliciesRequest.
 * Use `create(InspectPoliciesRequestSchema)` to create a new message.
 */
export const InspectPoliciesRequestSchema: GenMessage<
  InspectPoliciesRequest,
  {
    jsonType: InspectPoliciesRequestJson;
    validType: InspectPoliciesRequestValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 14);

/**
 * @generated from message cerbos.request.v1.AddOrUpdateSchemaRequest
 */
export type AddOrUpdateSchemaRequest =
  Message<"cerbos.request.v1.AddOrUpdateSchemaRequest"> & {
    /**
     * @generated from field: repeated cerbos.schema.v1.Schema schemas = 1;
     */
    schemas: Schema[];
  };

/**
 * @generated from message cerbos.request.v1.AddOrUpdateSchemaRequest
 */
export type AddOrUpdateSchemaRequestJson = {
  /**
   * @generated from field: repeated cerbos.schema.v1.Schema schemas = 1;
   */
  schemas?: SchemaJson[];
};

/**
 * @generated from message cerbos.request.v1.AddOrUpdateSchemaRequest
 */
export type AddOrUpdateSchemaRequestValid =
  Message<"cerbos.request.v1.AddOrUpdateSchemaRequest"> & {
    /**
     * @generated from field: repeated cerbos.schema.v1.Schema schemas = 1;
     */
    schemas: SchemaValid[];
  };

/**
 * Describes the message cerbos.request.v1.AddOrUpdateSchemaRequest.
 * Use `create(AddOrUpdateSchemaRequestSchema)` to create a new message.
 */
export const AddOrUpdateSchemaRequestSchema: GenMessage<
  AddOrUpdateSchemaRequest,
  {
    jsonType: AddOrUpdateSchemaRequestJson;
    validType: AddOrUpdateSchemaRequestValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 15);

/**
 * @generated from message cerbos.request.v1.ListSchemasRequest
 */
export type ListSchemasRequest =
  Message<"cerbos.request.v1.ListSchemasRequest"> & {};

/**
 * @generated from message cerbos.request.v1.ListSchemasRequest
 */
export type ListSchemasRequestJson = {};

export type ListSchemasRequestValid = ListSchemasRequest;

/**
 * Describes the message cerbos.request.v1.ListSchemasRequest.
 * Use `create(ListSchemasRequestSchema)` to create a new message.
 */
export const ListSchemasRequestSchema: GenMessage<
  ListSchemasRequest,
  { jsonType: ListSchemasRequestJson; validType: ListSchemasRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 16);

/**
 * @generated from message cerbos.request.v1.GetSchemaRequest
 */
export type GetSchemaRequest = Message<"cerbos.request.v1.GetSchemaRequest"> & {
  /**
   * @generated from field: repeated string id = 1;
   */
  id: string[];
};

/**
 * @generated from message cerbos.request.v1.GetSchemaRequest
 */
export type GetSchemaRequestJson = {
  /**
   * @generated from field: repeated string id = 1;
   */
  id?: string[];
};

/**
 * @generated from message cerbos.request.v1.GetSchemaRequest
 */
export type GetSchemaRequestValid =
  Message<"cerbos.request.v1.GetSchemaRequest"> & {
    /**
     * @generated from field: repeated string id = 1;
     */
    id: string[];
  };

/**
 * Describes the message cerbos.request.v1.GetSchemaRequest.
 * Use `create(GetSchemaRequestSchema)` to create a new message.
 */
export const GetSchemaRequestSchema: GenMessage<
  GetSchemaRequest,
  { jsonType: GetSchemaRequestJson; validType: GetSchemaRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 17);

/**
 * @generated from message cerbos.request.v1.DeleteSchemaRequest
 */
export type DeleteSchemaRequest =
  Message<"cerbos.request.v1.DeleteSchemaRequest"> & {
    /**
     * @generated from field: repeated string id = 1;
     */
    id: string[];
  };

/**
 * @generated from message cerbos.request.v1.DeleteSchemaRequest
 */
export type DeleteSchemaRequestJson = {
  /**
   * @generated from field: repeated string id = 1;
   */
  id?: string[];
};

/**
 * @generated from message cerbos.request.v1.DeleteSchemaRequest
 */
export type DeleteSchemaRequestValid =
  Message<"cerbos.request.v1.DeleteSchemaRequest"> & {
    /**
     * @generated from field: repeated string id = 1;
     */
    id: string[];
  };

/**
 * Describes the message cerbos.request.v1.DeleteSchemaRequest.
 * Use `create(DeleteSchemaRequestSchema)` to create a new message.
 */
export const DeleteSchemaRequestSchema: GenMessage<
  DeleteSchemaRequest,
  { jsonType: DeleteSchemaRequestJson; validType: DeleteSchemaRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 18);

/**
 * @generated from message cerbos.request.v1.ReloadStoreRequest
 */
export type ReloadStoreRequest =
  Message<"cerbos.request.v1.ReloadStoreRequest"> & {
    /**
     * @generated from field: bool wait = 1;
     */
    wait: boolean;
  };

/**
 * @generated from message cerbos.request.v1.ReloadStoreRequest
 */
export type ReloadStoreRequestJson = {
  /**
   * @generated from field: bool wait = 1;
   */
  wait?: boolean;
};

export type ReloadStoreRequestValid = ReloadStoreRequest;

/**
 * Describes the message cerbos.request.v1.ReloadStoreRequest.
 * Use `create(ReloadStoreRequestSchema)` to create a new message.
 */
export const ReloadStoreRequestSchema: GenMessage<
  ReloadStoreRequest,
  { jsonType: ReloadStoreRequestJson; validType: ReloadStoreRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 19);
