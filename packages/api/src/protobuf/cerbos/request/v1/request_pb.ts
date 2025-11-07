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
import { file_buf_validate_validate } from "../../../buf/validate/validate_pb";
import type {
  PlanResourcesInput_Resource,
  PlanResourcesInput_ResourceValid,
  Principal,
  PrincipalValid,
  Resource,
  ResourceValid,
} from "../../engine/v1/engine_pb";
import { file_cerbos_engine_v1_engine } from "../../engine/v1/engine_pb";
import type { Policy, PolicyValid } from "../../policy/v1/policy_pb";
import { file_cerbos_policy_v1_policy } from "../../policy/v1/policy_pb";
import type { Schema, SchemaValid } from "../../schema/v1/schema_pb";
import { file_cerbos_schema_v1_schema } from "../../schema/v1/schema_pb";
import { file_google_api_field_behavior } from "../../../google/api/field_behavior_pb";
import type { Duration, Timestamp, Value } from "@bufbuild/protobuf/wkt";
import {
  file_google_protobuf_duration,
  file_google_protobuf_struct,
  file_google_protobuf_timestamp,
} from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cerbos/request/v1/request.proto.
 */
export const file_cerbos_request_v1_request: GenFile =
  /*@__PURE__*/
  fileDesc(
    "Ch9jZXJib3MvcmVxdWVzdC92MS9yZXF1ZXN0LnByb3RvEhFjZXJib3MucmVxdWVzdC52MSLlBwoUUGxhblJlc291cmNlc1JlcXVlc3QSiwEKCnJlcXVlc3RfaWQYASABKAlCd5JBdDJKT3B0aW9uYWwgYXBwbGljYXRpb24tc3BlY2lmaWMgSUQgdXNlZnVsIGZvciBjb3JyZWxhdGluZyBsb2dzIGZvciBhbmFseXNpcy5KJiJjMmRiMTdiOC00ZjlmLTRmYjEtYWNmZC05MTYyYTAyYmU0MmIiElgKBmFjdGlvbhgCIAEoCUJIGAGSQUMyMkFjdGlvbiB0byBiZSBhcHBsaWVkIHRvIGVhY2ggcmVzb3VyY2UgaW4gdGhlIGxpc3QuSg0idmlldzpwdWJsaWMiEvIBCgdhY3Rpb25zGAcgAygJQuABkkHKATKjAUxpc3Qgb2YgYWN0aW9ucyB0byBnZW5lcmF0ZSB0aGUgcXVlcnkgcGxhbiBmb3IuIE11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIHRoZSBzaW5ndWxhciBhY3Rpb24gZmllbGQuIE11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgYWN0aW9uIGFuZCBhbGwgYWN0aW9ucyBtdXN0IGJlIHVuaXF1ZS5KH1sidmlldzpwdWJsaWMiLCAiZWRpdDpwcm9maWxlIl2wAQG6SA+SAQwIABAUGAEiBHICEAESOQoJcHJpbmNpcGFsGAMgASgLMhsuY2VyYm9zLmVuZ2luZS52MS5QcmluY2lwYWxCCeBBArpIA8gBARJKCghyZXNvdXJjZRgEIAEoCzItLmNlcmJvcy5lbmdpbmUudjEuUGxhblJlc291cmNlc0lucHV0LlJlc291cmNlQgngQQK6SAPIAQESMQoIYXV4X2RhdGEYBSABKAsyGi5jZXJib3MucmVxdWVzdC52MS5BdXhEYXRhQgPgQQESVgoMaW5jbHVkZV9tZXRhGAYgASgIQkCSQT0yO09wdCB0byByZWNlaXZlIHJlcXVlc3QgcHJvY2Vzc2luZyBtZXRhZGF0YSBpbiB0aGUgcmVzcG9uc2UuOt0BkkEkCiIyIFBEUCBSZXNvdXJjZXMgUXVlcnkgUGxhbiBSZXF1ZXN0ukiyARqvAQoeZXhjbHVzaXZlRmllbGRzQWN0aW9uT3JBY3Rpb25zEjZFeGFjdGx5IG9uZSBvZiAnYWN0aW9uJyBvciAnYWN0aW9ucycgZmllbGQgbXVzdCBiZSBzZXQaVWhhcyh0aGlzLmFjdGlvbikgJiYgIWhhcyh0aGlzLmFjdGlvbnMpIHx8ICFoYXModGhpcy5hY3Rpb24pICYmIHNpemUodGhpcy5hY3Rpb25zKSA+IDAixwQKF0NoZWNrUmVzb3VyY2VTZXRSZXF1ZXN0EosBCgpyZXF1ZXN0X2lkGAEgASgJQneSQXQySk9wdGlvbmFsIGFwcGxpY2F0aW9uLXNwZWNpZmljIElEIHVzZWZ1bCBmb3IgY29ycmVsYXRpbmcgbG9ncyBmb3IgYW5hbHlzaXMuSiYiYzJkYjE3YjgtNGY5Zi00ZmIxLWFjZmQtOTE2MmEwMmJlNDJiIhKGAQoHYWN0aW9ucxgCIAMoCUJ1kkFcMjhMaXN0IG9mIGFjdGlvbnMgYmVpbmcgcGVyZm9ybWVkIG9uIHRoZSBzZXQgb2YgcmVzb3VyY2VzLkoaWyJ2aWV3OnB1YmxpYyIsICJjb21tZW50Il2oAQGwAQHgQQK6SBDIAQGSAQoIARgBIgRyAhABEjkKCXByaW5jaXBhbBgDIAEoCzIbLmNlcmJvcy5lbmdpbmUudjEuUHJpbmNpcGFsQgngQQK6SAPIAQESOwoIcmVzb3VyY2UYBCABKAsyHi5jZXJib3MucmVxdWVzdC52MS5SZXNvdXJjZVNldEIJ4EECukgDyAEBElYKDGluY2x1ZGVfbWV0YRgFIAEoCEJAkkE9MjtPcHQgdG8gcmVjZWl2ZSByZXF1ZXN0IHByb2Nlc3NpbmcgbWV0YWRhdGEgaW4gdGhlIHJlc3BvbnNlLhIxCghhdXhfZGF0YRgGIAEoCzIaLmNlcmJvcy5yZXF1ZXN0LnYxLkF1eERhdGFCA+BBAToSkkEPCg0yC1BEUCBSZXF1ZXN0ItUHCgtSZXNvdXJjZVNldBI+CgRraW5kGAEgASgJQjCSQSAyDlJlc291cmNlIGtpbmQuSg4iYWxidW06b2JqZWN0IuBBArpIB8gBAXICEAESwQEKDnBvbGljeV92ZXJzaW9uGAIgASgJQqgBkkGTATJ8VGhlIHBvbGljeSB2ZXJzaW9uIHRvIHVzZSB0byBldmFsdWF0ZSB0aGlzIHJlcXVlc3QuIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgZGVmYXVsdCB0byB0aGUgc2VydmVyLWNvbmZpZ3VyZWQgZGVmYXVsdCB2ZXJzaW9uLkoJImRlZmF1bHQiigEHXltcd10qJOBBAbpIC3IJMgdeW1x3XSokEuECCglpbnN0YW5jZXMYAyADKAsyLS5jZXJib3MucmVxdWVzdC52MS5SZXNvdXJjZVNldC5JbnN0YW5jZXNFbnRyeUKeApJBjAIybVNldCBvZiByZXNvdXJjZSBpbnN0YW5jZXMgdG8gY2hlY2suIEVhY2ggaW5zdGFuY2UgbXVzdCBiZSBrZXllZCBieSBhbiBhcHBsaWNhdGlvbi1zcGVjaWZpYyB1bmlxdWUgaWRlbnRpZmllci5KlwF7IlhYMTI1Ijp7ImF0dHIiOnsib3duZXIiOiJidWdzX2J1bm55IiwgInB1YmxpYyI6IGZhbHNlLCAiZmxhZ2dlZCI6IGZhbHNlfX0sICJYWDIyNSI6eyJhdHRyIjp7Im93bmVyIjoiZGFmZnlfZHVjayIsICJwdWJsaWMiOiB0cnVlLCAiZmxhZ2dlZCI6IGZhbHNlfX19yAEB4EECukgIyAEBmgECCAES5wEKBXNjb3BlGAQgASgJQtcBkkGmATJ+QSBkb3Qtc2VwYXJhdGVkIHNjb3BlIHRoYXQgZGVzY3JpYmVzIHRoZSBoaWVyYXJjaHkgdGhlc2UgcmVzb3VyY2VzIGJlbG9uZyB0by4gVGhpcyBpcyB1c2VkIGZvciBkZXRlcm1pbmluZyBwb2xpY3kgaW5oZXJpdGFuY2UuigEjXihbMC05YS16QS1aXVtcd1wtXSooXC5bXHdcLV0qKSopKiTgQQG6SCdyJTIjXihbMC05YS16QS1aXVtcd1wtXSooXC5bXHdcLV0qKSopKiQaUgoOSW5zdGFuY2VzRW50cnkSCwoDa2V5GAEgASgJEi8KBXZhbHVlGAIgASgLMiAuY2VyYm9zLnJlcXVlc3QudjEuQXR0cmlidXRlc01hcDoCOAE6IJJBHQobMhlTZXQgb2YgcmVzb3VyY2VzIHRvIGNoZWNrIq8CCg1BdHRyaWJ1dGVzTWFwEqMBCgRhdHRyGAEgAygLMiouY2VyYm9zLnJlcXVlc3QudjEuQXR0cmlidXRlc01hcC5BdHRyRW50cnlCaZJBZjJkS2V5LXZhbHVlIHBhaXJzIG9mIGNvbnRleHR1YWwgZGF0YSBhYm91dCB0aGlzIGluc3RhbmNlIHRoYXQgc2hvdWxkIGJlIHVzZWQgZHVyaW5nIHBvbGljeSBldmFsdWF0aW9uLhpDCglBdHRyRW50cnkSCwoDa2V5GAEgASgJEiUKBXZhbHVlGAIgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlOgI4ATozkkEwCi4yLFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgcmVzb3VyY2UgaW5zdGFuY2UuIqUGChlDaGVja1Jlc291cmNlQmF0Y2hSZXF1ZXN0EosBCgpyZXF1ZXN0X2lkGAEgASgJQneSQXQySk9wdGlvbmFsIGFwcGxpY2F0aW9uLXNwZWNpZmljIElEIHVzZWZ1bCBmb3IgY29ycmVsYXRpbmcgbG9ncyBmb3IgYW5hbHlzaXMuSiYiYzJkYjE3YjgtNGY5Zi00ZmIxLWFjZmQtOTE2MmEwMmJlNDJiIhI5CglwcmluY2lwYWwYAiABKAsyGy5jZXJib3MuZW5naW5lLnYxLlByaW5jaXBhbEIJ4EECukgDyAEBErQCCglyZXNvdXJjZXMYAyADKAsyNy5jZXJib3MucmVxdWVzdC52MS5DaGVja1Jlc291cmNlQmF0Y2hSZXF1ZXN0LkJhdGNoRW50cnlC5wGSQdUBMh5MaXN0IG9mIHJlc291cmNlcyBhbmQgYWN0aW9ucy5KrAFbeyJhY3Rpb25zIjpbInZpZXciLCJjb21tZW50Il0sICJyZXNvdXJjZSI6eyJraW5kIjoiYWxidW06b2JqZWN0IiwicG9saWN5VmVyc2lvbiI6ImRlZmF1bHQiLCJpZCI6IlhYMTI1IiwiYXR0ciI6eyJvd25lciI6ImJ1Z3NfYnVubnkiLCAicHVibGljIjogZmFsc2UsICJmbGFnZ2VkIjogZmFsc2V9fX1dqAEBsAEB4EECukgIyAEBkgECCAESLAoIYXV4X2RhdGEYBCABKAsyGi5jZXJib3MucmVxdWVzdC52MS5BdXhEYXRhGsUBCgpCYXRjaEVudHJ5En4KB2FjdGlvbnMYASADKAlCbZJBVDIwTGlzdCBvZiBhY3Rpb25zIGJlaW5nIHBlcmZvcm1lZCBvbiB0aGUgcmVzb3VyY2UuShpbInZpZXc6cHVibGljIiwgImNvbW1lbnQiXagBAbABAeBBArpIEMgBAZIBCggBGAEiBHICEAESNwoIcmVzb3VyY2UYAiABKAsyGi5jZXJib3MuZW5naW5lLnYxLlJlc291cmNlQgngQQK6SAPIAQE6EpJBDwoNMgtQRFAgUmVxdWVzdCL8BgoVQ2hlY2tSZXNvdXJjZXNSZXF1ZXN0EosBCgpyZXF1ZXN0X2lkGAEgASgJQneSQXQySk9wdGlvbmFsIGFwcGxpY2F0aW9uLXNwZWNpZmljIElEIHVzZWZ1bCBmb3IgY29ycmVsYXRpbmcgbG9ncyBmb3IgYW5hbHlzaXMuSiYiYzJkYjE3YjgtNGY5Zi00ZmIxLWFjZmQtOTE2MmEwMmJlNDJiIhJLCgxpbmNsdWRlX21ldGEYAiABKAhCNZJBMjIwQWRkIHJlcXVlc3QgcHJvY2Vzc2luZyBtZXRhZGF0YSB0byB0aGUgcmVzcG9uc2UuEjkKCXByaW5jaXBhbBgDIAEoCzIbLmNlcmJvcy5lbmdpbmUudjEuUHJpbmNpcGFsQgngQQK6SAPIAQESswIKCXJlc291cmNlcxgEIAMoCzI2LmNlcmJvcy5yZXF1ZXN0LnYxLkNoZWNrUmVzb3VyY2VzUmVxdWVzdC5SZXNvdXJjZUVudHJ5QucBkkHVATIeTGlzdCBvZiByZXNvdXJjZXMgYW5kIGFjdGlvbnMuSqwBW3siYWN0aW9ucyI6WyJ2aWV3IiwiY29tbWVudCJdLCAicmVzb3VyY2UiOnsia2luZCI6ImFsYnVtOm9iamVjdCIsInBvbGljeVZlcnNpb24iOiJkZWZhdWx0IiwiaWQiOiJYWDEyNSIsImF0dHIiOnsib3duZXIiOiJidWdzX2J1bm55IiwgInB1YmxpYyI6IGZhbHNlLCAiZmxhZ2dlZCI6IGZhbHNlfX19XagBAbABAeBBArpICMgBAZIBAggBEiwKCGF1eF9kYXRhGAUgASgLMhouY2VyYm9zLnJlcXVlc3QudjEuQXV4RGF0YRrIAQoNUmVzb3VyY2VFbnRyeRJ+CgdhY3Rpb25zGAEgAygJQm2SQVQyMExpc3Qgb2YgYWN0aW9ucyBiZWluZyBwZXJmb3JtZWQgb24gdGhlIHJlc291cmNlLkoaWyJ2aWV3OnB1YmxpYyIsICJjb21tZW50Il2oAQGwAQHgQQK6SBDIAQGSAQoIARgBIgRyAhABEjcKCHJlc291cmNlGAIgASgLMhouY2VyYm9zLmVuZ2luZS52MS5SZXNvdXJjZUIJ4EECukgDyAEBOh6SQRsKGTIXQ2hlY2sgcmVzb3VyY2VzIHJlcXVlc3QinAcKB0F1eERhdGESKwoDand0GAEgASgLMh4uY2VyYm9zLnJlcXVlc3QudjEuQXV4RGF0YS5KV1QanwYKA0pXVBLABAoFdG9rZW4YASABKAlCsASSQZ8EMh1KV1QgZnJvbSB0aGUgb3JpZ2luYWwgcmVxdWVzdErJAyJleUpoYkdjaU9pSkZVek00TkNJc0ltdHBaQ0k2SWpFNVRHWmFZWFJGWkdjNE0xbE9ZelZ5TWpObmRVMUtjWEp1TkQwaUxDSjBlWEFpT2lKS1YxUWlmUS5leUpoZFdRaU9sc2lZMlZ5WW05ekxXcDNkQzEwWlhOMGN5SmRMQ0pqZFhOMGIyMUJjbkpoZVNJNld5SkJJaXdpUWlJc0lrTWlYU3dpWTNWemRHOXRTVzUwSWpvME1pd2lZM1Z6ZEc5dFRXRndJanA3SWtFaU9pSkJRU0lzSWtJaU9pSkNRaUlzSWtNaU9pSkRReUo5TENKamRYTjBiMjFUZEhKcGJtY2lPaUptYjI5aVlYSWlMQ0psZUhBaU9qRTVORGs1TXpRd016a3NJbWx6Y3lJNkltTmxjbUp2Y3kxMFpYTjBMWE4xYVhSbEluMC5XTl90T1NjU3BkX0VJLVA1RUkxWWxhZ3hFZ0V4U2ZCakF0Y3JnY0Y2bHlXajFsR3BSX0dLeDlnb1pFcDJwX3Q1QVZXWE5fYmp6X3NNVW1KZEphNGNWZDU1UW0xbWlSLUZLdTZvTlJIblNFV2RNRm1uQXJ3UHctWURKV2Z5bExGWCKCAxoKFHgtZXhhbXBsZS1zaG93LXZhbHVlEgIgAIIDFAoOeC1maWxsLWV4YW1wbGUSAiAA4EECukgHyAEBcgIQARKuAQoKa2V5X3NldF9pZBgCIAEoCUKZAZJBlQEyUktleSBJRCB0byB1c2Ugd2hlbiBkZWNvZGluZyB0aGUgdG9rZW4gKGRlZmluZWQgaW4gdGhlIENlcmJvcyBzZXJ2ZXIgY29uZmlndXJhdGlvbilKCyJteS1rZXlzZXQiggMaChR4LWV4YW1wbGUtc2hvdy12YWx1ZRICIACCAxQKDngtZmlsbC1leGFtcGxlEgIgADokkkEhCh8yHUpXVCBmcm9tIHRoZSBvcmlnaW5hbCByZXF1ZXN0OkKSQT8KPTI7U3RydWN0dXJlZCBhdXhpbGlhcnkgZGF0YSB1c2VmdWwgZm9yIGV2YWx1YXRpbmcgdGhlIHJlcXVlc3QilgEKGEFkZE9yVXBkYXRlUG9saWN5UmVxdWVzdBJYCghwb2xpY2llcxgBIAMoCzIYLmNlcmJvcy5wb2xpY3kudjEuUG9saWN5QiySQRkyEUxpc3Qgb2YgcG9saWNpZXMuoAFkqAEB4EECukgKyAEBkgEECAEQZDogkkEdChsyGUFkZC91cGRhdGUgcG9saWN5IHJlcXVlc3Qi+gYKGkxpc3RBdWRpdExvZ0VudHJpZXNSZXF1ZXN0EoMBCgRraW5kGAEgASgOMjIuY2VyYm9zLnJlcXVlc3QudjEuTGlzdEF1ZGl0TG9nRW50cmllc1JlcXVlc3QuS2luZEJBkkExMhFLaW5kIG9mIGxvZyBlbnRyefICC0tJTkRfQUNDRVNT8gINS0lORF9ERUNJU0lPTrpICsgBAYIBBBgBGAISQAoEdGFpbBgCIAEoDUIwkkEjMg9MYXN0IE4gZW50cmllcy5ZAAAAAABAj0BpAAAAAAAA8D+6SAcqBRjoBygBSAASSgoHYmV0d2VlbhgDIAEoCzI3LmNlcmJvcy5yZXF1ZXN0LnYxLkxpc3RBdWRpdExvZ0VudHJpZXNSZXF1ZXN0LlRpbWVSYW5nZUgAElIKBXNpbmNlGAQgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uQiaSQSMyIUVudHJpZXMgc2luY2UgTiBob3Vycy9taW51dGVzIGFnb0gAEnsKBmxvb2t1cBgFIAEoCUJpkkE3MgpCeSBDYWxsIElEigEoXlswMTIzNDU2Nzg5QUJDREVGR0hKS01OUFFSU1RWV1hZWl17MjZ9JLpILHIqMiheWzAxMjM0NTY3ODlBQkNERUZHSEpLTU5QUVJTVFZXWFlaXXsyNn0kSAAaowIKCVRpbWVSYW5nZRJ5CgVzdGFydBgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCTpJBPTIeU3RhcnQgZGF0ZSBpbiBJU08gODYwMSBmb3JtYXQuShsiMjAyMS0wNy0wNVQwNzoyNzowMSswMDowMCLgQQK6SAjIAQGyAQI4ARJ1CgNlbmQYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQkySQTsyHEVuZCBkYXRlIGluIElTTyA4NjAxIGZvcm1hdC5KGyIyMDIxLTA3LTA1VDA3OjI3OjAxKzAwOjAwIuBBArpICMgBAbIBAjgBOiSSQSEKHzIdRW50cmllcyBiZXR3ZWVuIGEgdGltZSByYW5nZS4iQAoES2luZBIUChBLSU5EX1VOU1BFQ0lGSUVEEAASDwoLS0lORF9BQ0NFU1MQARIRCg1LSU5EX0RFQ0lTSU9OEAJCDwoGZmlsdGVyEgW6SAIIASIvChFTZXJ2ZXJJbmZvUmVxdWVzdDoakkEXChUyE1NlcnZlciBpbmZvIHJlcXVlc3QikAQKE0xpc3RQb2xpY2llc1JlcXVlc3QSOwoQaW5jbHVkZV9kaXNhYmxlZBgBIAEoCEIhkkEbMhlJbmNsdWRlIGRpc2FibGVkIHBvbGljaWVz4EEBEkAKC25hbWVfcmVnZXhwGAIgASgJQiuSQSUyI0ZpbHRlciBwb2xpY2llcyBieSBuYW1lIHdpdGggcmVnZXhw4EEBEkIKDHNjb3BlX3JlZ2V4cBgDIAEoCUIskkEmMiRGaWx0ZXIgcG9saWNpZXMgYnkgc2NvcGUgd2l0aCByZWdleHDgQQESRgoOdmVyc2lvbl9yZWdleHAYBCABKAlCLpJBKDImRmlsdGVyIHBvbGljaWVzIGJ5IHZlcnNpb24gd2l0aCByZWdleHDgQQESzwEKCXBvbGljeV9pZBgFIAMoCUK7AZJBpgEyhwFGb3IgYmxvYiwgZGlzaywgZ2l0IHN0b3JlcyB1c2UgZmlsZSBuYW1lICg8ZmlsZW5hbWU+LnlhbWwpLiBGb3IgbXlzcWwsIHBvc3RncmVzLCBzcWxpdGUzIHVzZSBpZCAoPGtpbmQ+LjxuYW1lPi48dmVyc2lvbj4pIG9mIHRoZSBwb2xpY3lKGiJwcmluY2lwYWwuc2FyYWgudmRlZmF1bHQi4EEBukgLkgEIEBkiBHICEAE6HJJBGQoXMhVMaXN0IHBvbGljaWVzIHJlcXVlc3Qi/QEKEEdldFBvbGljeVJlcXVlc3QSzQEKAmlkGAEgAygJQsABkkGmATKHAUZvciBibG9iLCBkaXNrLCBnaXQgc3RvcmVzIHVzZSBmaWxlIG5hbWUgKDxmaWxlbmFtZT4ueWFtbCkuIEZvciBteXNxbCwgcG9zdGdyZXMsIHNxbGl0ZTMgdXNlIGlkICg8a2luZD4uPG5hbWU+Ljx2ZXJzaW9uPikgb2YgdGhlIHBvbGljeUoaInByaW5jaXBhbC5zYXJhaC52ZGVmYXVsdCLgQQK6SBDIAQGSAQoIARgBIgRyAhABOhmSQRYKFDISR2V0IHBvbGljeSByZXF1ZXN0IpoBChREaXNhYmxlUG9saWN5UmVxdWVzdBJjCgJpZBgBIAMoCUJXkkE+MiBVbmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHBvbGljeUoaInByaW5jaXBhbC5zYXJhaC52ZGVmYXVsdCLgQQK6SBDIAQGSAQoIARgBIgRyAhABOh2SQRoKGDIWRGlzYWJsZSBwb2xpY3kgcmVxdWVzdCKYAQoTRW5hYmxlUG9saWN5UmVxdWVzdBJjCgJpZBgBIAMoCUJXkkE+MiBVbmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHBvbGljeUoaInByaW5jaXBhbC5zYXJhaC52ZGVmYXVsdCLgQQK6SBDIAQGSAQoIARgBIgRyAhABOhySQRkKFzIVRW5hYmxlIHBvbGljeSByZXF1ZXN0IpYEChZJbnNwZWN0UG9saWNpZXNSZXF1ZXN0EjsKEGluY2x1ZGVfZGlzYWJsZWQYASABKAhCIZJBGzIZSW5jbHVkZSBkaXNhYmxlZCBwb2xpY2llc+BBARJACgtuYW1lX3JlZ2V4cBgCIAEoCUIrkkElMiNGaWx0ZXIgcG9saWNpZXMgYnkgbmFtZSB3aXRoIHJlZ2V4cOBBARJCCgxzY29wZV9yZWdleHAYAyABKAlCLJJBJjIkRmlsdGVyIHBvbGljaWVzIGJ5IHNjb3BlIHdpdGggcmVnZXhw4EEBEkYKDnZlcnNpb25fcmVnZXhwGAQgASgJQi6SQSgyJkZpbHRlciBwb2xpY2llcyBieSB2ZXJzaW9uIHdpdGggcmVnZXhw4EEBEs8BCglwb2xpY3lfaWQYBSADKAlCuwGSQaYBMocBRm9yIGJsb2IsIGRpc2ssIGdpdCBzdG9yZXMgdXNlIGZpbGUgbmFtZSAoPGZpbGVuYW1lPi55YW1sKS4gRm9yIG15c3FsLCBwb3N0Z3Jlcywgc3FsaXRlMyB1c2UgaWQgKDxraW5kPi48bmFtZT4uPHZlcnNpb24+KSBvZiB0aGUgcG9saWN5ShoicHJpbmNpcGFsLnNhcmFoLnZkZWZhdWx0IuBBAbpIC5IBCBAZIgRyAhABOh+SQRwKGjIYSW5zcGVjdCBwb2xpY2llcyByZXF1ZXN0IpQBChhBZGRPclVwZGF0ZVNjaGVtYVJlcXVlc3QSVgoHc2NoZW1hcxgBIAMoCzIYLmNlcmJvcy5zY2hlbWEudjEuU2NoZW1hQiuSQRgyEExpc3Qgb2Ygc2NoZW1hcy6gAWSoAQHgQQK6SArIAQGSAQQIARBkOiCSQR0KGzIZQWRkL3VwZGF0ZSBzY2hlbWEgcmVxdWVzdCI0ChJMaXN0U2NoZW1hc1JlcXVlc3Q6HpJBGwoZMhdMaXN0IHNjaGVtYSBpZHMgcmVxdWVzdCKOAQoQR2V0U2NoZW1hUmVxdWVzdBJcCgJpZBgBIAMoCUJQkkE0MiBVbmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHNjaGVtYUoQInByaW5jaXBhbC5qc29uIuBBArpIE8gBAZIBDQgBGAEiB3IFEAEY/wE6HJJBGQoXMhVHZXQgc2NoZW1hKHMpIHJlcXVlc3QilAEKE0RlbGV0ZVNjaGVtYVJlcXVlc3QSXAoCaWQYASADKAlCUJJBNDIgVW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBzY2hlbWFKECJwcmluY2lwYWwuanNvbiLgQQK6SBPIAQGSAQ0IARgBIgdyBRABGP8BOh+SQRwKGjIYRGVsZXRlIHNjaGVtYShzKSByZXF1ZXN0InIKElJlbG9hZFN0b3JlUmVxdWVzdBI/CgR3YWl0GAEgASgIQjGSQSsyKVdhaXQgdW50aWwgdGhlIHJlbG9hZGluZyBwcm9jZXNzIGZpbmlzaGVz4EEBOhuSQRgKFjIUUmVsb2FkIHN0b3JlIHJlcXVlc3RCcwoZZGV2LmNlcmJvcy5hcGkudjEucmVxdWVzdFo+Z2l0aHViLmNvbS9jZXJib3MvY2VyYm9zL2FwaS9nZW5wYi9jZXJib3MvcmVxdWVzdC92MTtyZXF1ZXN0djGqAhVDZXJib3MuQXBpLlYxLlJlcXVlc3RiBnByb3RvMw",
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
  { validType: PlanResourcesRequestValid }
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
  { validType: CheckResourceSetRequestValid }
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
  { validType: ResourceSetValid }
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

export type AttributesMapValid = AttributesMap;

/**
 * Describes the message cerbos.request.v1.AttributesMap.
 * Use `create(AttributesMapSchema)` to create a new message.
 */
export const AttributesMapSchema: GenMessage<
  AttributesMap,
  { validType: AttributesMapValid }
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
  { validType: CheckResourceBatchRequestValid }
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
  { validType: CheckResourceBatchRequest_BatchEntryValid }
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
  { validType: CheckResourcesRequestValid }
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
  { validType: CheckResourcesRequest_ResourceEntryValid }
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
export const AuxDataSchema: GenMessage<AuxData, { validType: AuxDataValid }> =
  /*@__PURE__*/
  messageDesc(file_cerbos_request_v1_request, 6);

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
  { validType: AuxData_JWTValid }
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
  { validType: AddOrUpdatePolicyRequestValid }
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
  { validType: ListAuditLogEntriesRequestValid }
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
  { validType: ListAuditLogEntriesRequest_TimeRangeValid }
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
 * Describes the enum cerbos.request.v1.ListAuditLogEntriesRequest.Kind.
 */
export const ListAuditLogEntriesRequest_KindSchema: GenEnum<ListAuditLogEntriesRequest_Kind> =
  /*@__PURE__*/
  enumDesc(file_cerbos_request_v1_request, 8, 0);

/**
 * @generated from message cerbos.request.v1.ServerInfoRequest
 */
export type ServerInfoRequest =
  Message<"cerbos.request.v1.ServerInfoRequest"> & {};

export type ServerInfoRequestValid = ServerInfoRequest;

/**
 * Describes the message cerbos.request.v1.ServerInfoRequest.
 * Use `create(ServerInfoRequestSchema)` to create a new message.
 */
export const ServerInfoRequestSchema: GenMessage<
  ServerInfoRequest,
  { validType: ServerInfoRequestValid }
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

export type ListPoliciesRequestValid = ListPoliciesRequest;

/**
 * Describes the message cerbos.request.v1.ListPoliciesRequest.
 * Use `create(ListPoliciesRequestSchema)` to create a new message.
 */
export const ListPoliciesRequestSchema: GenMessage<
  ListPoliciesRequest,
  { validType: ListPoliciesRequestValid }
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
  { validType: GetPolicyRequestValid }
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
  { validType: DisablePolicyRequestValid }
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
  { validType: EnablePolicyRequestValid }
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

export type InspectPoliciesRequestValid = InspectPoliciesRequest;

/**
 * Describes the message cerbos.request.v1.InspectPoliciesRequest.
 * Use `create(InspectPoliciesRequestSchema)` to create a new message.
 */
export const InspectPoliciesRequestSchema: GenMessage<
  InspectPoliciesRequest,
  { validType: InspectPoliciesRequestValid }
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
  { validType: AddOrUpdateSchemaRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 15);

/**
 * @generated from message cerbos.request.v1.ListSchemasRequest
 */
export type ListSchemasRequest =
  Message<"cerbos.request.v1.ListSchemasRequest"> & {};

export type ListSchemasRequestValid = ListSchemasRequest;

/**
 * Describes the message cerbos.request.v1.ListSchemasRequest.
 * Use `create(ListSchemasRequestSchema)` to create a new message.
 */
export const ListSchemasRequestSchema: GenMessage<
  ListSchemasRequest,
  { validType: ListSchemasRequestValid }
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
  { validType: GetSchemaRequestValid }
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
  { validType: DeleteSchemaRequestValid }
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

export type ReloadStoreRequestValid = ReloadStoreRequest;

/**
 * Describes the message cerbos.request.v1.ReloadStoreRequest.
 * Use `create(ReloadStoreRequestSchema)` to create a new message.
 */
export const ReloadStoreRequestSchema: GenMessage<
  ReloadStoreRequest,
  { validType: ReloadStoreRequestValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_request_v1_request, 19);
