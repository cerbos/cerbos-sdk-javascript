// Copyright 2021-2025 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

// @generated from file cerbos/engine/v1/engine.proto (package cerbos.engine.v1, syntax proto3)
/* eslint-disable */

import type {
  GenEnum,
  GenFile,
  GenMessage,
} from "@bufbuild/protobuf/codegenv2";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_buf_validate_validate } from "../../../buf/validate/validate_pb.js";
import type { Effect, EffectJson } from "../../effect/v1/effect_pb.js";
import { file_cerbos_effect_v1_effect } from "../../effect/v1/effect_pb.js";
import type {
  ValidationError,
  ValidationErrorJson,
} from "../../schema/v1/schema_pb.js";
import { file_cerbos_schema_v1_schema } from "../../schema/v1/schema_pb.js";
import { file_google_api_field_behavior } from "../../../google/api/field_behavior_pb.js";
import type { Value, ValueJson } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb.js";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cerbos/engine/v1/engine.proto.
 */
export const file_cerbos_engine_v1_engine: GenFile =
  /*@__PURE__*/
  fileDesc(
    "Ch1jZXJib3MvZW5naW5lL3YxL2VuZ2luZS5wcm90bxIQY2VyYm9zLmVuZ2luZS52MSL7BwoSUGxhblJlc291cmNlc0lucHV0EhIKCnJlcXVlc3RfaWQYASABKAkSEgoGYWN0aW9uGAIgASgJQgIYARIPCgdhY3Rpb25zGAcgAygJEi4KCXByaW5jaXBhbBgDIAEoCzIbLmNlcmJvcy5lbmdpbmUudjEuUHJpbmNpcGFsEj8KCHJlc291cmNlGAQgASgLMi0uY2VyYm9zLmVuZ2luZS52MS5QbGFuUmVzb3VyY2VzSW5wdXQuUmVzb3VyY2USKwoIYXV4X2RhdGEYBSABKAsyGS5jZXJib3MuZW5naW5lLnYxLkF1eERhdGESFAoMaW5jbHVkZV9tZXRhGAYgASgIGvcFCghSZXNvdXJjZRI+CgRraW5kGAEgASgJQjCSQSAyDlJlc291cmNlIGtpbmQuSg4iYWxidW06b2JqZWN0IuBBArpIB8gBAXICEAESqgEKBGF0dHIYAiADKAsyNy5jZXJib3MuZW5naW5lLnYxLlBsYW5SZXNvdXJjZXNJbnB1dC5SZXNvdXJjZS5BdHRyRW50cnlCY5JBYDJeS2V5LXZhbHVlIHBhaXJzIG9mIGNvbnRleHR1YWwgZGF0YSBhYm91dCB0aGUgcmVzb3VyY2UgdGhhdCBhcmUga25vd24gYXQgYSB0aW1lIG9mIHRoZSByZXF1ZXN0LhLBAQoOcG9saWN5X3ZlcnNpb24YAyABKAlCqAGSQZMBMnxUaGUgcG9saWN5IHZlcnNpb24gdG8gdXNlIHRvIGV2YWx1YXRlIHRoaXMgcmVxdWVzdC4gSWYgbm90IHNwZWNpZmllZCwgd2lsbCBkZWZhdWx0IHRvIHRoZSBzZXJ2ZXItY29uZmlndXJlZCBkZWZhdWx0IHZlcnNpb24uSgkiZGVmYXVsdCKKAQdeW1x3XSok4EEBukgLcgkyB15bXHddKiQS9AEKBXNjb3BlGAQgASgJQuQBkkGsATJ9QSBkb3Qtc2VwYXJhdGVkIHNjb3BlIHRoYXQgZGVzY3JpYmVzIHRoZSBoaWVyYXJjaHkgdGhpcyByZXNvdXJjZSBiZWxvbmdzIHRvLiBUaGlzIGlzIHVzZWQgZm9yIGRldGVybWluaW5nIHBvbGljeSBpbmhlcml0YW5jZS6KASpeKF4kfFwufFswLTlhLXpBLVpdW1x3XC1dKihcLlx3W1x3XC1dKikqKSTgQQG6SC5yLDIqXiheJHxcLnxbMC05YS16QS1aXVtcd1wtXSooXC5cd1tcd1wtXSopKikkGkMKCUF0dHJFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBIuIFChNQbGFuUmVzb3VyY2VzRmlsdGVyEqcBCgRraW5kGAEgASgOMiouY2VyYm9zLmVuZ2luZS52MS5QbGFuUmVzb3VyY2VzRmlsdGVyLktpbmRCbZJBajJoRmlsdGVyIGtpbmQuIERlZmluZXMgd2hldGhlciB0aGUgZ2l2ZW4gYWN0aW9uIGlzIGFsd2F5cyBhbGxvd2VkLCBhbHdheXMgZGVuaWVkIG9yIGFsbG93ZWQgY29uZGl0aW9uYWxseS4SjwEKCWNvbmRpdGlvbhgCIAEoCzI4LmNlcmJvcy5lbmdpbmUudjEuUGxhblJlc291cmNlc0ZpbHRlci5FeHByZXNzaW9uLk9wZXJhbmRCQpJBPzI9RmlsdGVyIGNvbmRpdGlvbi4gT25seSBwb3B1bGF0ZWQgaWYga2luZCBpcyBLSU5EX0NPTkRJVElPTkFMLhqpAgoKRXhwcmVzc2lvbhIfCghvcGVyYXRvchgBIAEoCUINkkEKMghPcGVyYXRvchJKCghvcGVyYW5kcxgCIAMoCzI4LmNlcmJvcy5lbmdpbmUudjEuUGxhblJlc291cmNlc0ZpbHRlci5FeHByZXNzaW9uLk9wZXJhbmQalgEKB09wZXJhbmQSJwoFdmFsdWUYASABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWVIABJGCgpleHByZXNzaW9uGAIgASgLMjAuY2VyYm9zLmVuZ2luZS52MS5QbGFuUmVzb3VyY2VzRmlsdGVyLkV4cHJlc3Npb25IABISCgh2YXJpYWJsZRgDIAEoCUgAQgYKBG5vZGU6FZJBEgoQMg5DRUwgZXhwcmVzc2lvbiJjCgRLaW5kEhQKEEtJTkRfVU5TUEVDSUZJRUQQABIXChNLSU5EX0FMV0FZU19BTExPV0VEEAESFgoSS0lORF9BTFdBWVNfREVOSUVEEAISFAoQS0lORF9DT05ESVRJT05BTBADIpYDChNQbGFuUmVzb3VyY2VzT3V0cHV0EhIKCnJlcXVlc3RfaWQYASABKAkSEgoGYWN0aW9uGAIgASgJQgIYARIMCgRraW5kGAMgASgJEhYKDnBvbGljeV92ZXJzaW9uGAQgASgJEg0KBXNjb3BlGAUgASgJEjUKBmZpbHRlchgGIAEoCzIlLmNlcmJvcy5lbmdpbmUudjEuUGxhblJlc291cmNlc0ZpbHRlchIUCgxmaWx0ZXJfZGVidWcYByABKAkSPAoRdmFsaWRhdGlvbl9lcnJvcnMYCCADKAsyIS5jZXJib3Muc2NoZW1hLnYxLlZhbGlkYXRpb25FcnJvchIPCgdhY3Rpb25zGAkgAygJElAKDm1hdGNoZWRfc2NvcGVzGAogAygLMjguY2VyYm9zLmVuZ2luZS52MS5QbGFuUmVzb3VyY2VzT3V0cHV0Lk1hdGNoZWRTY29wZXNFbnRyeRo0ChJNYXRjaGVkU2NvcGVzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ASLlAQoKQ2hlY2tJbnB1dBISCgpyZXF1ZXN0X2lkGAEgASgJEjcKCHJlc291cmNlGAIgASgLMhouY2VyYm9zLmVuZ2luZS52MS5SZXNvdXJjZUIJ4EECukgDyAEBEjkKCXByaW5jaXBhbBgDIAEoCzIbLmNlcmJvcy5lbmdpbmUudjEuUHJpbmNpcGFsQgngQQK6SAPIAQESIgoHYWN0aW9ucxgEIAMoCUIR4EECukgLkgEIGAEiBHICEAESKwoIYXV4X2RhdGEYBSABKAsyGS5jZXJib3MuZW5naW5lLnYxLkF1eERhdGEitwMKC0NoZWNrT3V0cHV0EhIKCnJlcXVlc3RfaWQYASABKAkSEwoLcmVzb3VyY2VfaWQYAiABKAkSOwoHYWN0aW9ucxgDIAMoCzIqLmNlcmJvcy5lbmdpbmUudjEuQ2hlY2tPdXRwdXQuQWN0aW9uc0VudHJ5Eh8KF2VmZmVjdGl2ZV9kZXJpdmVkX3JvbGVzGAQgAygJEjwKEXZhbGlkYXRpb25fZXJyb3JzGAUgAygLMiEuY2VyYm9zLnNjaGVtYS52MS5WYWxpZGF0aW9uRXJyb3ISLgoHb3V0cHV0cxgGIAMoCzIdLmNlcmJvcy5lbmdpbmUudjEuT3V0cHV0RW50cnkaVwoMQWN0aW9uRWZmZWN0EigKBmVmZmVjdBgBIAEoDjIYLmNlcmJvcy5lZmZlY3QudjEuRWZmZWN0Eg4KBnBvbGljeRgCIAEoCRINCgVzY29wZRgDIAEoCRpaCgxBY3Rpb25zRW50cnkSCwoDa2V5GAEgASgJEjkKBXZhbHVlGAIgASgLMiouY2VyYm9zLmVuZ2luZS52MS5DaGVja091dHB1dC5BY3Rpb25FZmZlY3Q6AjgBIuEBCgtPdXRwdXRFbnRyeRJgCgNzcmMYASABKAlCU5JBUDIpUnVsZSB0aGF0IG1hdGNoZWQgdG8gcHJvZHVjZSB0aGlzIG91dHB1dC5KIyJyZXNvdXJjZS5leHBlbnNlLnYxL2FjbWUjcnVsZS0wMDEiEnAKA3ZhbBgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZUJLkkFIMjdEeW5hbWljIG91dHB1dCwgZGV0ZXJtaW5lZCBieSB1c2VyIGRlZmluZWQgcnVsZSBvdXRwdXQuSg0ic29tZV9zdHJpbmciIoAHCghSZXNvdXJjZRJYCgRraW5kGAEgASgJQkqSQToyKU5hbWUgb2YgdGhlIHJlc291cmNlIGtpbmQgYmVpbmcgYWNjZXNzZWQuSg0iYWxidW06cGhvdG8i4EECukgHyAEBcgIQARLBAQoOcG9saWN5X3ZlcnNpb24YAiABKAlCqAGSQZMBMnxUaGUgcG9saWN5IHZlcnNpb24gdG8gdXNlIHRvIGV2YWx1YXRlIHRoaXMgcmVxdWVzdC4gSWYgbm90IHNwZWNpZmllZCwgd2lsbCBkZWZhdWx0IHRvIHRoZSBzZXJ2ZXItY29uZmlndXJlZCBkZWZhdWx0IHZlcnNpb24uSgkiZGVmYXVsdCKKAQdeW1x3XSok4EEBukgLcgkyB15bXHddKiQSQgoCaWQYAyABKAlCNpJBJjIbSUQgb2YgdGhlIHJlc291cmNlIGluc3RhbmNlSgciWFgxMjUi4EECukgHyAEBcgIQARLIAQoEYXR0chgEIAMoCzIkLmNlcmJvcy5lbmdpbmUudjEuUmVzb3VyY2UuQXR0ckVudHJ5QpMBkkF/MmRLYXktdmFsdWUgcGFpcnMgb2YgY29udGV4dHVhbCBkYXRhIGFib3V0IHRoaXMgcmVzb3VyY2UgdGhhdCBzaG91bGQgYmUgdXNlZCBkdXJpbmcgcG9saWN5IGV2YWx1YXRpb24uShd7Im93bmVyIjogImJ1Z3NfYnVubnkifbpIDpoBCyIEcgIQASoDyAEBEoECCgVzY29wZRgFIAEoCULxAZJBuQEyfUEgZG90LXNlcGFyYXRlZCBzY29wZSB0aGF0IGRlc2NyaWJlcyB0aGUgaGllcmFyY2h5IHRoaXMgcmVzb3VyY2UgYmVsb25ncyB0by4gVGhpcyBpcyB1c2VkIGZvciBkZXRlcm1pbmluZyBwb2xpY3kgaW5oZXJpdGFuY2UuSgsiYWNtZS5jb3JwIooBKl4oXiR8XC58WzAtOWEtekEtWl1bXHdcLV0qKFwuXHdbXHdcLV0qKSopJOBBAbpILnIsMipeKF4kfFwufFswLTlhLXpBLVpdW1x3XC1dKihcLlx3W1x3XC1dKikqKSQaQwoJQXR0ckVudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAEigwgKCVByaW5jaXBhbBI/CgJpZBgBIAEoCUIzkkEjMhNJRCBvZiB0aGUgcHJpbmNpcGFsSgwiYnVnc19idW5ueSLgQQK6SAfIAQFyAhABEsEBCg5wb2xpY3lfdmVyc2lvbhgCIAEoCUKoAZJBkwEyfFRoZSBwb2xpY3kgdmVyc2lvbiB0byB1c2UgdG8gZXZhbHVhdGUgdGhpcyByZXF1ZXN0LiBJZiBub3Qgc3BlY2lmaWVkLCB3aWxsIGRlZmF1bHQgdG8gdGhlIHNlcnZlci1jb25maWd1cmVkIGRlZmF1bHQgdmVyc2lvbi5KCSJkZWZhdWx0IooBB15bXHddKiTgQQG6SAtyCTIHXltcd10qJBKAAQoFcm9sZXMYAyADKAlCcZJBWDJGUm9sZXMgYXNzaWduZWQgdG8gdGhpcyBwcmluY2lwYWwgZnJvbSB5b3VyIGlkZW50aXR5IG1hbmFnZW1lbnQgc3lzdGVtLkoIWyJ1c2VyIl2oAQGwAQHgQQK6SBDIAQGSAQoIARgBIgRyAhABEsgBCgRhdHRyGAQgAygLMiUuY2VyYm9zLmVuZ2luZS52MS5QcmluY2lwYWwuQXR0ckVudHJ5QpIBkkF+MmVLZXktdmFsdWUgcGFpcnMgb2YgY29udGV4dHVhbCBkYXRhIGFib3V0IHRoaXMgcHJpbmNpcGFsIHRoYXQgc2hvdWxkIGJlIHVzZWQgZHVyaW5nIHBvbGljeSBldmFsdWF0aW9uLkoVeyJiZXRhX3Rlc3RlciI6IHRydWV9ukgOmgELIgRyAhABKgPIAQESggIKBXNjb3BlGAUgASgJQvIBkkG6ATJ+QSBkb3Qtc2VwYXJhdGVkIHNjb3BlIHRoYXQgZGVzY3JpYmVzIHRoZSBoaWVyYXJjaHkgdGhpcyBwcmluY2lwYWwgYmVsb25ncyB0by4gVGhpcyBpcyB1c2VkIGZvciBkZXRlcm1pbmluZyBwb2xpY3kgaW5oZXJpdGFuY2UuSgsiYWNtZS5jb3JwIooBKl4oXiR8XC58WzAtOWEtekEtWl1bXHdcLV0qKFwuXHdbXHdcLV0qKSopJOBBAbpILnIsMipeKF4kfFwufFswLTlhLXpBLVpdW1x3XC1dKihcLlx3W1x3XC1dKikqKSQaQwoJQXR0ckVudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAE6WZJBVgpUMlJBIHBlcnNvbiBvciBhcHBsaWNhdGlvbiBhdHRlbXB0aW5nIHRvIHBlcmZvcm0gdGhlIGFjdGlvbnMgb24gdGhlIHNldCBvZiByZXNvdXJjZXMuIqABCgdBdXhEYXRhEi8KA2p3dBgBIAMoCzIiLmNlcmJvcy5lbmdpbmUudjEuQXV4RGF0YS5Kd3RFbnRyeRpCCghKd3RFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBOiCSQR0KGzIZU3RydWN0dXJlZCBhdXhpbGlhcnkgZGF0YUJvChhkZXYuY2VyYm9zLmFwaS52MS5lbmdpbmVaPGdpdGh1Yi5jb20vY2VyYm9zL2NlcmJvcy9hcGkvZ2VucGIvY2VyYm9zL2VuZ2luZS92MTtlbmdpbmV2MaoCFENlcmJvcy5BcGkuVjEuRW5naW5lYgZwcm90bzM",
    [
      file_buf_validate_validate,
      file_cerbos_effect_v1_effect,
      file_cerbos_schema_v1_schema,
      file_google_api_field_behavior,
      file_google_protobuf_struct,
      file_protoc_gen_openapiv2_options_annotations,
    ],
  );

/**
 * @generated from message cerbos.engine.v1.PlanResourcesInput
 */
export type PlanResourcesInput =
  Message<"cerbos.engine.v1.PlanResourcesInput"> & {
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
     * @generated from field: cerbos.engine.v1.AuxData aux_data = 5;
     */
    auxData?: AuxData;

    /**
     * @generated from field: bool include_meta = 6;
     */
    includeMeta: boolean;
  };

/**
 * @generated from message cerbos.engine.v1.PlanResourcesInput
 */
export type PlanResourcesInputJson = {
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
   * @generated from field: cerbos.engine.v1.AuxData aux_data = 5;
   */
  auxData?: AuxDataJson;

  /**
   * @generated from field: bool include_meta = 6;
   */
  includeMeta?: boolean;
};

/**
 * @generated from message cerbos.engine.v1.PlanResourcesInput
 */
export type PlanResourcesInputValid =
  Message<"cerbos.engine.v1.PlanResourcesInput"> & {
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
    principal?: PrincipalValid;

    /**
     * @generated from field: cerbos.engine.v1.PlanResourcesInput.Resource resource = 4;
     */
    resource?: PlanResourcesInput_ResourceValid;

    /**
     * @generated from field: cerbos.engine.v1.AuxData aux_data = 5;
     */
    auxData?: AuxDataValid;

    /**
     * @generated from field: bool include_meta = 6;
     */
    includeMeta: boolean;
  };

/**
 * Describes the message cerbos.engine.v1.PlanResourcesInput.
 * Use `create(PlanResourcesInputSchema)` to create a new message.
 */
export const PlanResourcesInputSchema: GenMessage<
  PlanResourcesInput,
  { jsonType: PlanResourcesInputJson; validType: PlanResourcesInputValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_engine_v1_engine, 0);

/**
 * @generated from message cerbos.engine.v1.PlanResourcesInput.Resource
 */
export type PlanResourcesInput_Resource =
  Message<"cerbos.engine.v1.PlanResourcesInput.Resource"> & {
    /**
     * @generated from field: string kind = 1;
     */
    kind: string;

    /**
     * @generated from field: map<string, google.protobuf.Value> attr = 2;
     */
    attr: { [key: string]: Value };

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
 * @generated from message cerbos.engine.v1.PlanResourcesInput.Resource
 */
export type PlanResourcesInput_ResourceJson = {
  /**
   * @generated from field: string kind = 1;
   */
  kind?: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> attr = 2;
   */
  attr?: { [key: string]: ValueJson };

  /**
   * @generated from field: string policy_version = 3;
   */
  policyVersion?: string;

  /**
   * @generated from field: string scope = 4;
   */
  scope?: string;
};

/**
 * @generated from message cerbos.engine.v1.PlanResourcesInput.Resource
 */
export type PlanResourcesInput_ResourceValid =
  Message<"cerbos.engine.v1.PlanResourcesInput.Resource"> & {
    /**
     * @generated from field: string kind = 1;
     */
    kind: string;

    /**
     * @generated from field: map<string, google.protobuf.Value> attr = 2;
     */
    attr: { [key: string]: Value };

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
 * Describes the message cerbos.engine.v1.PlanResourcesInput.Resource.
 * Use `create(PlanResourcesInput_ResourceSchema)` to create a new message.
 */
export const PlanResourcesInput_ResourceSchema: GenMessage<
  PlanResourcesInput_Resource,
  {
    jsonType: PlanResourcesInput_ResourceJson;
    validType: PlanResourcesInput_ResourceValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_engine_v1_engine, 0, 0);

/**
 * @generated from message cerbos.engine.v1.PlanResourcesFilter
 */
export type PlanResourcesFilter =
  Message<"cerbos.engine.v1.PlanResourcesFilter"> & {
    /**
     * @generated from field: cerbos.engine.v1.PlanResourcesFilter.Kind kind = 1;
     */
    kind: PlanResourcesFilter_Kind;

    /**
     * @generated from field: cerbos.engine.v1.PlanResourcesFilter.Expression.Operand condition = 2;
     */
    condition?: PlanResourcesFilter_Expression_Operand;
  };

/**
 * @generated from message cerbos.engine.v1.PlanResourcesFilter
 */
export type PlanResourcesFilterJson = {
  /**
   * @generated from field: cerbos.engine.v1.PlanResourcesFilter.Kind kind = 1;
   */
  kind?: PlanResourcesFilter_KindJson;

  /**
   * @generated from field: cerbos.engine.v1.PlanResourcesFilter.Expression.Operand condition = 2;
   */
  condition?: PlanResourcesFilter_Expression_OperandJson;
};

export type PlanResourcesFilterValid = PlanResourcesFilter;

/**
 * Describes the message cerbos.engine.v1.PlanResourcesFilter.
 * Use `create(PlanResourcesFilterSchema)` to create a new message.
 */
export const PlanResourcesFilterSchema: GenMessage<
  PlanResourcesFilter,
  { jsonType: PlanResourcesFilterJson; validType: PlanResourcesFilterValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_engine_v1_engine, 1);

/**
 * @generated from message cerbos.engine.v1.PlanResourcesFilter.Expression
 */
export type PlanResourcesFilter_Expression =
  Message<"cerbos.engine.v1.PlanResourcesFilter.Expression"> & {
    /**
     * @generated from field: string operator = 1;
     */
    operator: string;

    /**
     * @generated from field: repeated cerbos.engine.v1.PlanResourcesFilter.Expression.Operand operands = 2;
     */
    operands: PlanResourcesFilter_Expression_Operand[];
  };

/**
 * @generated from message cerbos.engine.v1.PlanResourcesFilter.Expression
 */
export type PlanResourcesFilter_ExpressionJson = {
  /**
   * @generated from field: string operator = 1;
   */
  operator?: string;

  /**
   * @generated from field: repeated cerbos.engine.v1.PlanResourcesFilter.Expression.Operand operands = 2;
   */
  operands?: PlanResourcesFilter_Expression_OperandJson[];
};

export type PlanResourcesFilter_ExpressionValid =
  PlanResourcesFilter_Expression;

/**
 * Describes the message cerbos.engine.v1.PlanResourcesFilter.Expression.
 * Use `create(PlanResourcesFilter_ExpressionSchema)` to create a new message.
 */
export const PlanResourcesFilter_ExpressionSchema: GenMessage<
  PlanResourcesFilter_Expression,
  {
    jsonType: PlanResourcesFilter_ExpressionJson;
    validType: PlanResourcesFilter_ExpressionValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_engine_v1_engine, 1, 0);

/**
 * @generated from message cerbos.engine.v1.PlanResourcesFilter.Expression.Operand
 */
export type PlanResourcesFilter_Expression_Operand =
  Message<"cerbos.engine.v1.PlanResourcesFilter.Expression.Operand"> & {
    /**
     * @generated from oneof cerbos.engine.v1.PlanResourcesFilter.Expression.Operand.node
     */
    node:
      | {
          /**
           * @generated from field: google.protobuf.Value value = 1;
           */
          value: Value;
          case: "value";
        }
      | {
          /**
           * @generated from field: cerbos.engine.v1.PlanResourcesFilter.Expression expression = 2;
           */
          value: PlanResourcesFilter_Expression;
          case: "expression";
        }
      | {
          /**
           * @generated from field: string variable = 3;
           */
          value: string;
          case: "variable";
        }
      | { case: undefined; value?: undefined };
  };

/**
 * @generated from message cerbos.engine.v1.PlanResourcesFilter.Expression.Operand
 */
export type PlanResourcesFilter_Expression_OperandJson = {
  /**
   * @generated from field: google.protobuf.Value value = 1;
   */
  value?: ValueJson;

  /**
   * @generated from field: cerbos.engine.v1.PlanResourcesFilter.Expression expression = 2;
   */
  expression?: PlanResourcesFilter_ExpressionJson;

  /**
   * @generated from field: string variable = 3;
   */
  variable?: string;
};

export type PlanResourcesFilter_Expression_OperandValid =
  PlanResourcesFilter_Expression_Operand;

/**
 * Describes the message cerbos.engine.v1.PlanResourcesFilter.Expression.Operand.
 * Use `create(PlanResourcesFilter_Expression_OperandSchema)` to create a new message.
 */
export const PlanResourcesFilter_Expression_OperandSchema: GenMessage<
  PlanResourcesFilter_Expression_Operand,
  {
    jsonType: PlanResourcesFilter_Expression_OperandJson;
    validType: PlanResourcesFilter_Expression_OperandValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_engine_v1_engine, 1, 0, 0);

/**
 * @generated from enum cerbos.engine.v1.PlanResourcesFilter.Kind
 */
export enum PlanResourcesFilter_Kind {
  /**
   * @generated from enum value: KIND_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: KIND_ALWAYS_ALLOWED = 1;
   */
  ALWAYS_ALLOWED = 1,

  /**
   * @generated from enum value: KIND_ALWAYS_DENIED = 2;
   */
  ALWAYS_DENIED = 2,

  /**
   * @generated from enum value: KIND_CONDITIONAL = 3;
   */
  CONDITIONAL = 3,
}

/**
 * @generated from enum cerbos.engine.v1.PlanResourcesFilter.Kind
 */
export type PlanResourcesFilter_KindJson =
  | "KIND_UNSPECIFIED"
  | "KIND_ALWAYS_ALLOWED"
  | "KIND_ALWAYS_DENIED"
  | "KIND_CONDITIONAL";

/**
 * Describes the enum cerbos.engine.v1.PlanResourcesFilter.Kind.
 */
export const PlanResourcesFilter_KindSchema: GenEnum<
  PlanResourcesFilter_Kind,
  PlanResourcesFilter_KindJson
> = /*@__PURE__*/ enumDesc(file_cerbos_engine_v1_engine, 1, 0);

/**
 * @generated from message cerbos.engine.v1.PlanResourcesOutput
 */
export type PlanResourcesOutput =
  Message<"cerbos.engine.v1.PlanResourcesOutput"> & {
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
     * @generated from field: string kind = 3;
     */
    kind: string;

    /**
     * @generated from field: string policy_version = 4;
     */
    policyVersion: string;

    /**
     * @generated from field: string scope = 5;
     */
    scope: string;

    /**
     * @generated from field: cerbos.engine.v1.PlanResourcesFilter filter = 6;
     */
    filter?: PlanResourcesFilter;

    /**
     * @generated from field: string filter_debug = 7;
     */
    filterDebug: string;

    /**
     * @generated from field: repeated cerbos.schema.v1.ValidationError validation_errors = 8;
     */
    validationErrors: ValidationError[];

    /**
     * @generated from field: repeated string actions = 9;
     */
    actions: string[];

    /**
     * @generated from field: map<string, string> matched_scopes = 10;
     */
    matchedScopes: { [key: string]: string };
  };

/**
 * @generated from message cerbos.engine.v1.PlanResourcesOutput
 */
export type PlanResourcesOutputJson = {
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
   * @generated from field: string kind = 3;
   */
  kind?: string;

  /**
   * @generated from field: string policy_version = 4;
   */
  policyVersion?: string;

  /**
   * @generated from field: string scope = 5;
   */
  scope?: string;

  /**
   * @generated from field: cerbos.engine.v1.PlanResourcesFilter filter = 6;
   */
  filter?: PlanResourcesFilterJson;

  /**
   * @generated from field: string filter_debug = 7;
   */
  filterDebug?: string;

  /**
   * @generated from field: repeated cerbos.schema.v1.ValidationError validation_errors = 8;
   */
  validationErrors?: ValidationErrorJson[];

  /**
   * @generated from field: repeated string actions = 9;
   */
  actions?: string[];

  /**
   * @generated from field: map<string, string> matched_scopes = 10;
   */
  matchedScopes?: { [key: string]: string };
};

export type PlanResourcesOutputValid = PlanResourcesOutput;

/**
 * Describes the message cerbos.engine.v1.PlanResourcesOutput.
 * Use `create(PlanResourcesOutputSchema)` to create a new message.
 */
export const PlanResourcesOutputSchema: GenMessage<
  PlanResourcesOutput,
  { jsonType: PlanResourcesOutputJson; validType: PlanResourcesOutputValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_engine_v1_engine, 2);

/**
 * @generated from message cerbos.engine.v1.CheckInput
 */
export type CheckInput = Message<"cerbos.engine.v1.CheckInput"> & {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId: string;

  /**
   * @generated from field: cerbos.engine.v1.Resource resource = 2;
   */
  resource?: Resource;

  /**
   * @generated from field: cerbos.engine.v1.Principal principal = 3;
   */
  principal?: Principal;

  /**
   * @generated from field: repeated string actions = 4;
   */
  actions: string[];

  /**
   * @generated from field: cerbos.engine.v1.AuxData aux_data = 5;
   */
  auxData?: AuxData;
};

/**
 * @generated from message cerbos.engine.v1.CheckInput
 */
export type CheckInputJson = {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId?: string;

  /**
   * @generated from field: cerbos.engine.v1.Resource resource = 2;
   */
  resource?: ResourceJson;

  /**
   * @generated from field: cerbos.engine.v1.Principal principal = 3;
   */
  principal?: PrincipalJson;

  /**
   * @generated from field: repeated string actions = 4;
   */
  actions?: string[];

  /**
   * @generated from field: cerbos.engine.v1.AuxData aux_data = 5;
   */
  auxData?: AuxDataJson;
};

/**
 * @generated from message cerbos.engine.v1.CheckInput
 */
export type CheckInputValid = Message<"cerbos.engine.v1.CheckInput"> & {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId: string;

  /**
   * @generated from field: cerbos.engine.v1.Resource resource = 2;
   */
  resource: ResourceValid;

  /**
   * @generated from field: cerbos.engine.v1.Principal principal = 3;
   */
  principal: PrincipalValid;

  /**
   * @generated from field: repeated string actions = 4;
   */
  actions: string[];

  /**
   * @generated from field: cerbos.engine.v1.AuxData aux_data = 5;
   */
  auxData?: AuxDataValid;
};

/**
 * Describes the message cerbos.engine.v1.CheckInput.
 * Use `create(CheckInputSchema)` to create a new message.
 */
export const CheckInputSchema: GenMessage<
  CheckInput,
  { jsonType: CheckInputJson; validType: CheckInputValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_engine_v1_engine, 3);

/**
 * @generated from message cerbos.engine.v1.CheckOutput
 */
export type CheckOutput = Message<"cerbos.engine.v1.CheckOutput"> & {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId: string;

  /**
   * @generated from field: string resource_id = 2;
   */
  resourceId: string;

  /**
   * @generated from field: map<string, cerbos.engine.v1.CheckOutput.ActionEffect> actions = 3;
   */
  actions: { [key: string]: CheckOutput_ActionEffect };

  /**
   * @generated from field: repeated string effective_derived_roles = 4;
   */
  effectiveDerivedRoles: string[];

  /**
   * @generated from field: repeated cerbos.schema.v1.ValidationError validation_errors = 5;
   */
  validationErrors: ValidationError[];

  /**
   * @generated from field: repeated cerbos.engine.v1.OutputEntry outputs = 6;
   */
  outputs: OutputEntry[];
};

/**
 * @generated from message cerbos.engine.v1.CheckOutput
 */
export type CheckOutputJson = {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId?: string;

  /**
   * @generated from field: string resource_id = 2;
   */
  resourceId?: string;

  /**
   * @generated from field: map<string, cerbos.engine.v1.CheckOutput.ActionEffect> actions = 3;
   */
  actions?: { [key: string]: CheckOutput_ActionEffectJson };

  /**
   * @generated from field: repeated string effective_derived_roles = 4;
   */
  effectiveDerivedRoles?: string[];

  /**
   * @generated from field: repeated cerbos.schema.v1.ValidationError validation_errors = 5;
   */
  validationErrors?: ValidationErrorJson[];

  /**
   * @generated from field: repeated cerbos.engine.v1.OutputEntry outputs = 6;
   */
  outputs?: OutputEntryJson[];
};

export type CheckOutputValid = CheckOutput;

/**
 * Describes the message cerbos.engine.v1.CheckOutput.
 * Use `create(CheckOutputSchema)` to create a new message.
 */
export const CheckOutputSchema: GenMessage<
  CheckOutput,
  { jsonType: CheckOutputJson; validType: CheckOutputValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_engine_v1_engine, 4);

/**
 * @generated from message cerbos.engine.v1.CheckOutput.ActionEffect
 */
export type CheckOutput_ActionEffect =
  Message<"cerbos.engine.v1.CheckOutput.ActionEffect"> & {
    /**
     * @generated from field: cerbos.effect.v1.Effect effect = 1;
     */
    effect: Effect;

    /**
     * @generated from field: string policy = 2;
     */
    policy: string;

    /**
     * @generated from field: string scope = 3;
     */
    scope: string;
  };

/**
 * @generated from message cerbos.engine.v1.CheckOutput.ActionEffect
 */
export type CheckOutput_ActionEffectJson = {
  /**
   * @generated from field: cerbos.effect.v1.Effect effect = 1;
   */
  effect?: EffectJson;

  /**
   * @generated from field: string policy = 2;
   */
  policy?: string;

  /**
   * @generated from field: string scope = 3;
   */
  scope?: string;
};

export type CheckOutput_ActionEffectValid = CheckOutput_ActionEffect;

/**
 * Describes the message cerbos.engine.v1.CheckOutput.ActionEffect.
 * Use `create(CheckOutput_ActionEffectSchema)` to create a new message.
 */
export const CheckOutput_ActionEffectSchema: GenMessage<
  CheckOutput_ActionEffect,
  {
    jsonType: CheckOutput_ActionEffectJson;
    validType: CheckOutput_ActionEffectValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_engine_v1_engine, 4, 0);

/**
 * @generated from message cerbos.engine.v1.OutputEntry
 */
export type OutputEntry = Message<"cerbos.engine.v1.OutputEntry"> & {
  /**
   * @generated from field: string src = 1;
   */
  src: string;

  /**
   * @generated from field: google.protobuf.Value val = 2;
   */
  val?: Value;
};

/**
 * @generated from message cerbos.engine.v1.OutputEntry
 */
export type OutputEntryJson = {
  /**
   * @generated from field: string src = 1;
   */
  src?: string;

  /**
   * @generated from field: google.protobuf.Value val = 2;
   */
  val?: ValueJson;
};

export type OutputEntryValid = OutputEntry;

/**
 * Describes the message cerbos.engine.v1.OutputEntry.
 * Use `create(OutputEntrySchema)` to create a new message.
 */
export const OutputEntrySchema: GenMessage<
  OutputEntry,
  { jsonType: OutputEntryJson; validType: OutputEntryValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_engine_v1_engine, 5);

/**
 * @generated from message cerbos.engine.v1.Resource
 */
export type Resource = Message<"cerbos.engine.v1.Resource"> & {
  /**
   * @generated from field: string kind = 1;
   */
  kind: string;

  /**
   * @generated from field: string policy_version = 2;
   */
  policyVersion: string;

  /**
   * @generated from field: string id = 3;
   */
  id: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> attr = 4;
   */
  attr: { [key: string]: Value };

  /**
   * @generated from field: string scope = 5;
   */
  scope: string;
};

/**
 * @generated from message cerbos.engine.v1.Resource
 */
export type ResourceJson = {
  /**
   * @generated from field: string kind = 1;
   */
  kind?: string;

  /**
   * @generated from field: string policy_version = 2;
   */
  policyVersion?: string;

  /**
   * @generated from field: string id = 3;
   */
  id?: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> attr = 4;
   */
  attr?: { [key: string]: ValueJson };

  /**
   * @generated from field: string scope = 5;
   */
  scope?: string;
};

/**
 * @generated from message cerbos.engine.v1.Resource
 */
export type ResourceValid = Message<"cerbos.engine.v1.Resource"> & {
  /**
   * @generated from field: string kind = 1;
   */
  kind: string;

  /**
   * @generated from field: string policy_version = 2;
   */
  policyVersion: string;

  /**
   * @generated from field: string id = 3;
   */
  id: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> attr = 4;
   */
  attr: { [key: string]: Value };

  /**
   * @generated from field: string scope = 5;
   */
  scope: string;
};

/**
 * Describes the message cerbos.engine.v1.Resource.
 * Use `create(ResourceSchema)` to create a new message.
 */
export const ResourceSchema: GenMessage<
  Resource,
  { jsonType: ResourceJson; validType: ResourceValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_engine_v1_engine, 6);

/**
 * @generated from message cerbos.engine.v1.Principal
 */
export type Principal = Message<"cerbos.engine.v1.Principal"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string policy_version = 2;
   */
  policyVersion: string;

  /**
   * @generated from field: repeated string roles = 3;
   */
  roles: string[];

  /**
   * @generated from field: map<string, google.protobuf.Value> attr = 4;
   */
  attr: { [key: string]: Value };

  /**
   * @generated from field: string scope = 5;
   */
  scope: string;
};

/**
 * @generated from message cerbos.engine.v1.Principal
 */
export type PrincipalJson = {
  /**
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * @generated from field: string policy_version = 2;
   */
  policyVersion?: string;

  /**
   * @generated from field: repeated string roles = 3;
   */
  roles?: string[];

  /**
   * @generated from field: map<string, google.protobuf.Value> attr = 4;
   */
  attr?: { [key: string]: ValueJson };

  /**
   * @generated from field: string scope = 5;
   */
  scope?: string;
};

/**
 * @generated from message cerbos.engine.v1.Principal
 */
export type PrincipalValid = Message<"cerbos.engine.v1.Principal"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string policy_version = 2;
   */
  policyVersion: string;

  /**
   * @generated from field: repeated string roles = 3;
   */
  roles: string[];

  /**
   * @generated from field: map<string, google.protobuf.Value> attr = 4;
   */
  attr: { [key: string]: Value };

  /**
   * @generated from field: string scope = 5;
   */
  scope: string;
};

/**
 * Describes the message cerbos.engine.v1.Principal.
 * Use `create(PrincipalSchema)` to create a new message.
 */
export const PrincipalSchema: GenMessage<
  Principal,
  { jsonType: PrincipalJson; validType: PrincipalValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_engine_v1_engine, 7);

/**
 * @generated from message cerbos.engine.v1.AuxData
 */
export type AuxData = Message<"cerbos.engine.v1.AuxData"> & {
  /**
   * @generated from field: map<string, google.protobuf.Value> jwt = 1;
   */
  jwt: { [key: string]: Value };
};

/**
 * @generated from message cerbos.engine.v1.AuxData
 */
export type AuxDataJson = {
  /**
   * @generated from field: map<string, google.protobuf.Value> jwt = 1;
   */
  jwt?: { [key: string]: ValueJson };
};

export type AuxDataValid = AuxData;

/**
 * Describes the message cerbos.engine.v1.AuxData.
 * Use `create(AuxDataSchema)` to create a new message.
 */
export const AuxDataSchema: GenMessage<
  AuxData,
  { jsonType: AuxDataJson; validType: AuxDataValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_engine_v1_engine, 8);
