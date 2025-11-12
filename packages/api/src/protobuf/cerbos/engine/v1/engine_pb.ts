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
import { file_buf_validate_validate } from "../../../buf/validate/validate_pb";
import type { Effect } from "../../effect/v1/effect_pb";
import { file_cerbos_effect_v1_effect } from "../../effect/v1/effect_pb";
import type { ValidationError } from "../../schema/v1/schema_pb";
import { file_cerbos_schema_v1_schema } from "../../schema/v1/schema_pb";
import { file_google_api_field_behavior } from "../../../google/api/field_behavior_pb";
import type { Value } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cerbos/engine/v1/engine.proto.
 */
export const file_cerbos_engine_v1_engine: GenFile =
  /*@__PURE__*/
  fileDesc(
    "Ch1jZXJib3MvZW5naW5lL3YxL2VuZ2luZS5wcm90bxIQY2VyYm9zLmVuZ2luZS52MSLtBwoSUGxhblJlc291cmNlc0lucHV0EhIKCnJlcXVlc3RfaWQYASABKAkSEgoGYWN0aW9uGAIgASgJQgIYARIPCgdhY3Rpb25zGAcgAygJEi4KCXByaW5jaXBhbBgDIAEoCzIbLmNlcmJvcy5lbmdpbmUudjEuUHJpbmNpcGFsEj8KCHJlc291cmNlGAQgASgLMi0uY2VyYm9zLmVuZ2luZS52MS5QbGFuUmVzb3VyY2VzSW5wdXQuUmVzb3VyY2USKwoIYXV4X2RhdGEYBSABKAsyGS5jZXJib3MuZW5naW5lLnYxLkF1eERhdGESFAoMaW5jbHVkZV9tZXRhGAYgASgIGukFCghSZXNvdXJjZRI+CgRraW5kGAEgASgJQjCSQSAyDlJlc291cmNlIGtpbmQuSg4iYWxidW06b2JqZWN0IuBBArpIB8gBAXICEAESqgEKBGF0dHIYAiADKAsyNy5jZXJib3MuZW5naW5lLnYxLlBsYW5SZXNvdXJjZXNJbnB1dC5SZXNvdXJjZS5BdHRyRW50cnlCY5JBYDJeS2V5LXZhbHVlIHBhaXJzIG9mIGNvbnRleHR1YWwgZGF0YSBhYm91dCB0aGUgcmVzb3VyY2UgdGhhdCBhcmUga25vd24gYXQgYSB0aW1lIG9mIHRoZSByZXF1ZXN0LhLBAQoOcG9saWN5X3ZlcnNpb24YAyABKAlCqAGSQZMBMnxUaGUgcG9saWN5IHZlcnNpb24gdG8gdXNlIHRvIGV2YWx1YXRlIHRoaXMgcmVxdWVzdC4gSWYgbm90IHNwZWNpZmllZCwgd2lsbCBkZWZhdWx0IHRvIHRoZSBzZXJ2ZXItY29uZmlndXJlZCBkZWZhdWx0IHZlcnNpb24uSgkiZGVmYXVsdCKKAQdeW1x3XSok4EEBukgLcgkyB15bXHddKiQS5gEKBXNjb3BlGAQgASgJQtYBkkGlATJ9QSBkb3Qtc2VwYXJhdGVkIHNjb3BlIHRoYXQgZGVzY3JpYmVzIHRoZSBoaWVyYXJjaHkgdGhpcyByZXNvdXJjZSBiZWxvbmdzIHRvLiBUaGlzIGlzIHVzZWQgZm9yIGRldGVybWluaW5nIHBvbGljeSBpbmhlcml0YW5jZS6KASNeKFswLTlhLXpBLVpdW1x3XC1dKihcLltcd1wtXSopKikqJOBBAbpIJ3IlMiNeKFswLTlhLXpBLVpdW1x3XC1dKihcLltcd1wtXSopKikqJBpDCglBdHRyRW50cnkSCwoDa2V5GAEgASgJEiUKBXZhbHVlGAIgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlOgI4ASLiBQoTUGxhblJlc291cmNlc0ZpbHRlchKnAQoEa2luZBgBIAEoDjIqLmNlcmJvcy5lbmdpbmUudjEuUGxhblJlc291cmNlc0ZpbHRlci5LaW5kQm2SQWoyaEZpbHRlciBraW5kLiBEZWZpbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGFjdGlvbiBpcyBhbHdheXMgYWxsb3dlZCwgYWx3YXlzIGRlbmllZCBvciBhbGxvd2VkIGNvbmRpdGlvbmFsbHkuEo8BCgljb25kaXRpb24YAiABKAsyOC5jZXJib3MuZW5naW5lLnYxLlBsYW5SZXNvdXJjZXNGaWx0ZXIuRXhwcmVzc2lvbi5PcGVyYW5kQkKSQT8yPUZpbHRlciBjb25kaXRpb24uIE9ubHkgcG9wdWxhdGVkIGlmIGtpbmQgaXMgS0lORF9DT05ESVRJT05BTC4aqQIKCkV4cHJlc3Npb24SHwoIb3BlcmF0b3IYASABKAlCDZJBCjIIT3BlcmF0b3ISSgoIb3BlcmFuZHMYAiADKAsyOC5jZXJib3MuZW5naW5lLnYxLlBsYW5SZXNvdXJjZXNGaWx0ZXIuRXhwcmVzc2lvbi5PcGVyYW5kGpYBCgdPcGVyYW5kEicKBXZhbHVlGAEgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlSAASRgoKZXhwcmVzc2lvbhgCIAEoCzIwLmNlcmJvcy5lbmdpbmUudjEuUGxhblJlc291cmNlc0ZpbHRlci5FeHByZXNzaW9uSAASEgoIdmFyaWFibGUYAyABKAlIAEIGCgRub2RlOhWSQRIKEDIOQ0VMIGV4cHJlc3Npb24iYwoES2luZBIUChBLSU5EX1VOU1BFQ0lGSUVEEAASFwoTS0lORF9BTFdBWVNfQUxMT1dFRBABEhYKEktJTkRfQUxXQVlTX0RFTklFRBACEhQKEEtJTkRfQ09ORElUSU9OQUwQAyKWAwoTUGxhblJlc291cmNlc091dHB1dBISCgpyZXF1ZXN0X2lkGAEgASgJEhIKBmFjdGlvbhgCIAEoCUICGAESDAoEa2luZBgDIAEoCRIWCg5wb2xpY3lfdmVyc2lvbhgEIAEoCRINCgVzY29wZRgFIAEoCRI1CgZmaWx0ZXIYBiABKAsyJS5jZXJib3MuZW5naW5lLnYxLlBsYW5SZXNvdXJjZXNGaWx0ZXISFAoMZmlsdGVyX2RlYnVnGAcgASgJEjwKEXZhbGlkYXRpb25fZXJyb3JzGAggAygLMiEuY2VyYm9zLnNjaGVtYS52MS5WYWxpZGF0aW9uRXJyb3ISDwoHYWN0aW9ucxgJIAMoCRJQCg5tYXRjaGVkX3Njb3BlcxgKIAMoCzI4LmNlcmJvcy5lbmdpbmUudjEuUGxhblJlc291cmNlc091dHB1dC5NYXRjaGVkU2NvcGVzRW50cnkaNAoSTWF0Y2hlZFNjb3Blc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEi5QEKCkNoZWNrSW5wdXQSEgoKcmVxdWVzdF9pZBgBIAEoCRI3CghyZXNvdXJjZRgCIAEoCzIaLmNlcmJvcy5lbmdpbmUudjEuUmVzb3VyY2VCCeBBArpIA8gBARI5CglwcmluY2lwYWwYAyABKAsyGy5jZXJib3MuZW5naW5lLnYxLlByaW5jaXBhbEIJ4EECukgDyAEBEiIKB2FjdGlvbnMYBCADKAlCEeBBArpIC5IBCBgBIgRyAhABEisKCGF1eF9kYXRhGAUgASgLMhkuY2VyYm9zLmVuZ2luZS52MS5BdXhEYXRhIrcDCgtDaGVja091dHB1dBISCgpyZXF1ZXN0X2lkGAEgASgJEhMKC3Jlc291cmNlX2lkGAIgASgJEjsKB2FjdGlvbnMYAyADKAsyKi5jZXJib3MuZW5naW5lLnYxLkNoZWNrT3V0cHV0LkFjdGlvbnNFbnRyeRIfChdlZmZlY3RpdmVfZGVyaXZlZF9yb2xlcxgEIAMoCRI8ChF2YWxpZGF0aW9uX2Vycm9ycxgFIAMoCzIhLmNlcmJvcy5zY2hlbWEudjEuVmFsaWRhdGlvbkVycm9yEi4KB291dHB1dHMYBiADKAsyHS5jZXJib3MuZW5naW5lLnYxLk91dHB1dEVudHJ5GlcKDEFjdGlvbkVmZmVjdBIoCgZlZmZlY3QYASABKA4yGC5jZXJib3MuZWZmZWN0LnYxLkVmZmVjdBIOCgZwb2xpY3kYAiABKAkSDQoFc2NvcGUYAyABKAkaWgoMQWN0aW9uc0VudHJ5EgsKA2tleRgBIAEoCRI5CgV2YWx1ZRgCIAEoCzIqLmNlcmJvcy5lbmdpbmUudjEuQ2hlY2tPdXRwdXQuQWN0aW9uRWZmZWN0OgI4ASLhAQoLT3V0cHV0RW50cnkSYAoDc3JjGAEgASgJQlOSQVAyKVJ1bGUgdGhhdCBtYXRjaGVkIHRvIHByb2R1Y2UgdGhpcyBvdXRwdXQuSiMicmVzb3VyY2UuZXhwZW5zZS52MS9hY21lI3J1bGUtMDAxIhJwCgN2YWwYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWVCS5JBSDI3RHluYW1pYyBvdXRwdXQsIGRldGVybWluZWQgYnkgdXNlciBkZWZpbmVkIHJ1bGUgb3V0cHV0LkoNInNvbWVfc3RyaW5nIiLyBgoIUmVzb3VyY2USWAoEa2luZBgBIAEoCUJKkkE6MilOYW1lIG9mIHRoZSByZXNvdXJjZSBraW5kIGJlaW5nIGFjY2Vzc2VkLkoNImFsYnVtOnBob3RvIuBBArpIB8gBAXICEAESwQEKDnBvbGljeV92ZXJzaW9uGAIgASgJQqgBkkGTATJ8VGhlIHBvbGljeSB2ZXJzaW9uIHRvIHVzZSB0byBldmFsdWF0ZSB0aGlzIHJlcXVlc3QuIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgZGVmYXVsdCB0byB0aGUgc2VydmVyLWNvbmZpZ3VyZWQgZGVmYXVsdCB2ZXJzaW9uLkoJImRlZmF1bHQiigEHXltcd10qJOBBAbpIC3IJMgdeW1x3XSokEkIKAmlkGAMgASgJQjaSQSYyG0lEIG9mIHRoZSByZXNvdXJjZSBpbnN0YW5jZUoHIlhYMTI1IuBBArpIB8gBAXICEAESyAEKBGF0dHIYBCADKAsyJC5jZXJib3MuZW5naW5lLnYxLlJlc291cmNlLkF0dHJFbnRyeUKTAZJBfzJkS2F5LXZhbHVlIHBhaXJzIG9mIGNvbnRleHR1YWwgZGF0YSBhYm91dCB0aGlzIHJlc291cmNlIHRoYXQgc2hvdWxkIGJlIHVzZWQgZHVyaW5nIHBvbGljeSBldmFsdWF0aW9uLkoXeyJvd25lciI6ICJidWdzX2J1bm55In26SA6aAQsiBHICEAEqA8gBARLzAQoFc2NvcGUYBSABKAlC4wGSQbIBMn1BIGRvdC1zZXBhcmF0ZWQgc2NvcGUgdGhhdCBkZXNjcmliZXMgdGhlIGhpZXJhcmNoeSB0aGlzIHJlc291cmNlIGJlbG9uZ3MgdG8uIFRoaXMgaXMgdXNlZCBmb3IgZGV0ZXJtaW5pbmcgcG9saWN5IGluaGVyaXRhbmNlLkoLImFjbWUuY29ycCKKASNeKFswLTlhLXpBLVpdW1x3XC1dKihcLltcd1wtXSopKikqJOBBAbpIJ3IlMiNeKFswLTlhLXpBLVpdW1x3XC1dKihcLltcd1wtXSopKikqJBpDCglBdHRyRW50cnkSCwoDa2V5GAEgASgJEiUKBXZhbHVlGAIgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlOgI4ASL1BwoJUHJpbmNpcGFsEj8KAmlkGAEgASgJQjOSQSMyE0lEIG9mIHRoZSBwcmluY2lwYWxKDCJidWdzX2J1bm55IuBBArpIB8gBAXICEAESwQEKDnBvbGljeV92ZXJzaW9uGAIgASgJQqgBkkGTATJ8VGhlIHBvbGljeSB2ZXJzaW9uIHRvIHVzZSB0byBldmFsdWF0ZSB0aGlzIHJlcXVlc3QuIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgZGVmYXVsdCB0byB0aGUgc2VydmVyLWNvbmZpZ3VyZWQgZGVmYXVsdCB2ZXJzaW9uLkoJImRlZmF1bHQiigEHXltcd10qJOBBAbpIC3IJMgdeW1x3XSokEoABCgVyb2xlcxgDIAMoCUJxkkFYMkZSb2xlcyBhc3NpZ25lZCB0byB0aGlzIHByaW5jaXBhbCBmcm9tIHlvdXIgaWRlbnRpdHkgbWFuYWdlbWVudCBzeXN0ZW0uSghbInVzZXIiXagBAbABAeBBArpIEMgBAZIBCggBGAEiBHICEAESyAEKBGF0dHIYBCADKAsyJS5jZXJib3MuZW5naW5lLnYxLlByaW5jaXBhbC5BdHRyRW50cnlCkgGSQX4yZUtleS12YWx1ZSBwYWlycyBvZiBjb250ZXh0dWFsIGRhdGEgYWJvdXQgdGhpcyBwcmluY2lwYWwgdGhhdCBzaG91bGQgYmUgdXNlZCBkdXJpbmcgcG9saWN5IGV2YWx1YXRpb24uShV7ImJldGFfdGVzdGVyIjogdHJ1ZX26SA6aAQsiBHICEAEqA8gBARL0AQoFc2NvcGUYBSABKAlC5AGSQbMBMn5BIGRvdC1zZXBhcmF0ZWQgc2NvcGUgdGhhdCBkZXNjcmliZXMgdGhlIGhpZXJhcmNoeSB0aGlzIHByaW5jaXBhbCBiZWxvbmdzIHRvLiBUaGlzIGlzIHVzZWQgZm9yIGRldGVybWluaW5nIHBvbGljeSBpbmhlcml0YW5jZS5KCyJhY21lLmNvcnAiigEjXihbMC05YS16QS1aXVtcd1wtXSooXC5bXHdcLV0qKSopKiTgQQG6SCdyJTIjXihbMC05YS16QS1aXVtcd1wtXSooXC5bXHdcLV0qKSopKiQaQwoJQXR0ckVudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAE6WZJBVgpUMlJBIHBlcnNvbiBvciBhcHBsaWNhdGlvbiBhdHRlbXB0aW5nIHRvIHBlcmZvcm0gdGhlIGFjdGlvbnMgb24gdGhlIHNldCBvZiByZXNvdXJjZXMuIqABCgdBdXhEYXRhEi8KA2p3dBgBIAMoCzIiLmNlcmJvcy5lbmdpbmUudjEuQXV4RGF0YS5Kd3RFbnRyeRpCCghKd3RFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBOiCSQR0KGzIZU3RydWN0dXJlZCBhdXhpbGlhcnkgZGF0YUJvChhkZXYuY2VyYm9zLmFwaS52MS5lbmdpbmVaPGdpdGh1Yi5jb20vY2VyYm9zL2NlcmJvcy9hcGkvZ2VucGIvY2VyYm9zL2VuZ2luZS92MTtlbmdpbmV2MaoCFENlcmJvcy5BcGkuVjEuRW5naW5lYgZwcm90bzM",
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
  { validType: PlanResourcesInputValid }
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
  { validType: PlanResourcesInput_ResourceValid }
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

export type PlanResourcesFilterValid = PlanResourcesFilter;

/**
 * Describes the message cerbos.engine.v1.PlanResourcesFilter.
 * Use `create(PlanResourcesFilterSchema)` to create a new message.
 */
export const PlanResourcesFilterSchema: GenMessage<
  PlanResourcesFilter,
  { validType: PlanResourcesFilterValid }
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

export type PlanResourcesFilter_ExpressionValid =
  PlanResourcesFilter_Expression;

/**
 * Describes the message cerbos.engine.v1.PlanResourcesFilter.Expression.
 * Use `create(PlanResourcesFilter_ExpressionSchema)` to create a new message.
 */
export const PlanResourcesFilter_ExpressionSchema: GenMessage<
  PlanResourcesFilter_Expression,
  { validType: PlanResourcesFilter_ExpressionValid }
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

export type PlanResourcesFilter_Expression_OperandValid =
  PlanResourcesFilter_Expression_Operand;

/**
 * Describes the message cerbos.engine.v1.PlanResourcesFilter.Expression.Operand.
 * Use `create(PlanResourcesFilter_Expression_OperandSchema)` to create a new message.
 */
export const PlanResourcesFilter_Expression_OperandSchema: GenMessage<
  PlanResourcesFilter_Expression_Operand,
  { validType: PlanResourcesFilter_Expression_OperandValid }
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
 * Describes the enum cerbos.engine.v1.PlanResourcesFilter.Kind.
 */
export const PlanResourcesFilter_KindSchema: GenEnum<PlanResourcesFilter_Kind> =
  /*@__PURE__*/
  enumDesc(file_cerbos_engine_v1_engine, 1, 0);

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

export type PlanResourcesOutputValid = PlanResourcesOutput;

/**
 * Describes the message cerbos.engine.v1.PlanResourcesOutput.
 * Use `create(PlanResourcesOutputSchema)` to create a new message.
 */
export const PlanResourcesOutputSchema: GenMessage<
  PlanResourcesOutput,
  { validType: PlanResourcesOutputValid }
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
  { validType: CheckInputValid }
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

export type CheckOutputValid = CheckOutput;

/**
 * Describes the message cerbos.engine.v1.CheckOutput.
 * Use `create(CheckOutputSchema)` to create a new message.
 */
export const CheckOutputSchema: GenMessage<
  CheckOutput,
  { validType: CheckOutputValid }
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

export type CheckOutput_ActionEffectValid = CheckOutput_ActionEffect;

/**
 * Describes the message cerbos.engine.v1.CheckOutput.ActionEffect.
 * Use `create(CheckOutput_ActionEffectSchema)` to create a new message.
 */
export const CheckOutput_ActionEffectSchema: GenMessage<
  CheckOutput_ActionEffect,
  { validType: CheckOutput_ActionEffectValid }
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

export type OutputEntryValid = OutputEntry;

/**
 * Describes the message cerbos.engine.v1.OutputEntry.
 * Use `create(OutputEntrySchema)` to create a new message.
 */
export const OutputEntrySchema: GenMessage<
  OutputEntry,
  { validType: OutputEntryValid }
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
  { validType: ResourceValid }
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
  { validType: PrincipalValid }
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

export type AuxDataValid = AuxData;

/**
 * Describes the message cerbos.engine.v1.AuxData.
 * Use `create(AuxDataSchema)` to create a new message.
 */
export const AuxDataSchema: GenMessage<AuxData, { validType: AuxDataValid }> =
  /*@__PURE__*/
  messageDesc(file_cerbos_engine_v1_engine, 8);
