// Copyright 2021-2025 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

// @generated from file cerbos/policy/v1/policy.proto (package cerbos.policy.v1, syntax proto3)
/* eslint-disable */

import type {
  GenEnum,
  GenFile,
  GenMessage,
} from "@bufbuild/protobuf/codegenv2";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_buf_validate_validate } from "../../../buf/validate/validate_pb";
import type { Effect, EffectJson } from "../../effect/v1/effect_pb";
import { file_cerbos_effect_v1_effect } from "../../effect/v1/effect_pb";
import type { UInt64ValueJson, Value, ValueJson } from "@bufbuild/protobuf/wkt";
import {
  file_google_protobuf_struct,
  file_google_protobuf_wrappers,
} from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cerbos/policy/v1/policy.proto.
 */
export const file_cerbos_policy_v1_policy: GenFile =
  /*@__PURE__*/
  fileDesc(
    "Ch1jZXJib3MvcG9saWN5L3YxL3BvbGljeS5wcm90bxIQY2VyYm9zLnBvbGljeS52MSKdBQoGUG9saWN5EjAKC2FwaV92ZXJzaW9uGAEgASgJQhu6SBjIAQFyEwoRYXBpLmNlcmJvcy5kZXYvdjESEAoIZGlzYWJsZWQYAiABKAgSEwoLZGVzY3JpcHRpb24YAyABKAkSLAoIbWV0YWRhdGEYBCABKAsyGi5jZXJib3MucG9saWN5LnYxLk1ldGFkYXRhEjsKD3Jlc291cmNlX3BvbGljeRgFIAEoCzIgLmNlcmJvcy5wb2xpY3kudjEuUmVzb3VyY2VQb2xpY3lIABI9ChBwcmluY2lwYWxfcG9saWN5GAYgASgLMiEuY2VyYm9zLnBvbGljeS52MS5QcmluY2lwYWxQb2xpY3lIABI3Cg1kZXJpdmVkX3JvbGVzGAcgASgLMh4uY2VyYm9zLnBvbGljeS52MS5EZXJpdmVkUm9sZXNIABI9ChBleHBvcnRfdmFyaWFibGVzGAogASgLMiEuY2VyYm9zLnBvbGljeS52MS5FeHBvcnRWYXJpYWJsZXNIABIzCgtyb2xlX3BvbGljeRgLIAEoCzIcLmNlcmJvcy5wb2xpY3kudjEuUm9sZVBvbGljeUgAEj0KEGV4cG9ydF9jb25zdGFudHMYDCABKAsyIS5jZXJib3MucG9saWN5LnYxLkV4cG9ydENvbnN0YW50c0gAEj4KCXZhcmlhYmxlcxgIIAMoCzInLmNlcmJvcy5wb2xpY3kudjEuUG9saWN5LlZhcmlhYmxlc0VudHJ5QgIYARIcCgtqc29uX3NjaGVtYRgJIAEoCVIHJHNjaGVtYRowCg5WYXJpYWJsZXNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBQhQKC3BvbGljeV90eXBlEgW6SAIIASKlAQoQU291cmNlQXR0cmlidXRlcxJGCgphdHRyaWJ1dGVzGAEgAygLMjIuY2VyYm9zLnBvbGljeS52MS5Tb3VyY2VBdHRyaWJ1dGVzLkF0dHJpYnV0ZXNFbnRyeRpJCg9BdHRyaWJ1dGVzRW50cnkSCwoDa2V5GAEgASgJEiUKBXZhbHVlGAIgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlOgI4ASK3AgoITWV0YWRhdGESEwoLc291cmNlX2ZpbGUYASABKAkSQAoLYW5ub3RhdGlvbnMYAiADKAsyKy5jZXJib3MucG9saWN5LnYxLk1ldGFkYXRhLkFubm90YXRpb25zRW50cnkSKgoEaGFzaBgDIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50NjRWYWx1ZRIbCg9zdG9yZV9pZGVudGlmZXIYBCABKAlCAhgBEhgKEHN0b3JlX2lkZW50aWZpZXIYBSABKAkSPQoRc291cmNlX2F0dHJpYnV0ZXMYBiABKAsyIi5jZXJib3MucG9saWN5LnYxLlNvdXJjZUF0dHJpYnV0ZXMaMgoQQW5ub3RhdGlvbnNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBIs8DCg5SZXNvdXJjZVBvbGljeRIrCghyZXNvdXJjZRgBIAEoCUIZukgWyAEBchEyD15bXiEqP1xbXF17fV0rJBIiCgd2ZXJzaW9uGAIgASgJQhG6SA7IAQFyCTIHXltcd10rJBI3ChRpbXBvcnRfZGVyaXZlZF9yb2xlcxgDIAMoCUIZukgWkgETGAEiD3INMgteW1x3XC1cLl0rJBItCgVydWxlcxgEIAMoCzIeLmNlcmJvcy5wb2xpY3kudjEuUmVzb3VyY2VSdWxlEjkKBXNjb3BlGAUgASgJQiq6SCdyJTIjXihbMC05YS16QS1aXVtcd1wtXSooXC5bXHdcLV0qKSopKiQSKgoHc2NoZW1hcxgGIAEoCzIZLmNlcmJvcy5wb2xpY3kudjEuU2NoZW1hcxIuCgl2YXJpYWJsZXMYByABKAsyGy5jZXJib3MucG9saWN5LnYxLlZhcmlhYmxlcxI9ChFzY29wZV9wZXJtaXNzaW9ucxgIIAEoDjIiLmNlcmJvcy5wb2xpY3kudjEuU2NvcGVQZXJtaXNzaW9ucxIuCgljb25zdGFudHMYCSABKAsyGy5jZXJib3MucG9saWN5LnYxLkNvbnN0YW50cyLHAgoMUmVzb3VyY2VSdWxlEiQKB2FjdGlvbnMYASADKAlCE7pIEMgBAZIBCggBGAEiBHICEAESMAoNZGVyaXZlZF9yb2xlcxgCIAMoCUIZukgWkgETGAEiD3INMgteW1x3XC1cLl0rJBIdCgVyb2xlcxgDIAMoCUIOukgLkgEIGAEiBHICEAESLgoJY29uZGl0aW9uGAQgASgLMhsuY2VyYm9zLnBvbGljeS52MS5Db25kaXRpb24SNwoGZWZmZWN0GAUgASgOMhguY2VyYm9zLmVmZmVjdC52MS5FZmZlY3RCDbpICsgBAYIBBBgBGAISLQoEbmFtZRgGIAEoCUIfukgcchoyGF4oW2EtekEtWl1bXHdcQFwuXC1dKikqJBIoCgZvdXRwdXQYByABKAsyGC5jZXJib3MucG9saWN5LnYxLk91dHB1dCKjAgoKUm9sZVBvbGljeRImCgRyb2xlGAEgASgJQha6SBNyETIPXlteISo/XFtcXXt9XSskSAASJAoMcGFyZW50X3JvbGVzGAUgAygJQg66SAuSAQgYASIEcgIQARI5CgVzY29wZRgCIAEoCUIqukgnciUyI14oWzAtOWEtekEtWl1bXHdcLV0qKFwuW1x3XC1dKikqKSokEikKBXJ1bGVzGAMgAygLMhouY2VyYm9zLnBvbGljeS52MS5Sb2xlUnVsZRJLChFzY29wZV9wZXJtaXNzaW9ucxgEIAEoDjIiLmNlcmJvcy5wb2xpY3kudjEuU2NvcGVQZXJtaXNzaW9uc0IMGAG6SAeCAQQYABgCQhQKC3BvbGljeV90eXBlEgW6SAIIASKEAQoIUm9sZVJ1bGUSHAoIcmVzb3VyY2UYASABKAlCCrpIB8gBAXICEAESKgoNYWxsb3dfYWN0aW9ucxgCIAMoCUITukgQyAEBkgEKCAEYASIEcgIQARIuCgljb25kaXRpb24YAyABKAsyGy5jZXJib3MucG9saWN5LnYxLkNvbmRpdGlvbiLtAgoPUHJpbmNpcGFsUG9saWN5EiwKCXByaW5jaXBhbBgBIAEoCUIZukgWyAEBchEyD15bXiEqP1xbXF17fV0rJBIiCgd2ZXJzaW9uGAIgASgJQhG6SA7IAQFyCTIHXltcd10rJBIuCgVydWxlcxgDIAMoCzIfLmNlcmJvcy5wb2xpY3kudjEuUHJpbmNpcGFsUnVsZRI5CgVzY29wZRgEIAEoCUIqukgnciUyI14oWzAtOWEtekEtWl1bXHdcLV0qKFwuW1x3XC1dKikqKSokEi4KCXZhcmlhYmxlcxgFIAEoCzIbLmNlcmJvcy5wb2xpY3kudjEuVmFyaWFibGVzEj0KEXNjb3BlX3Blcm1pc3Npb25zGAYgASgOMiIuY2VyYm9zLnBvbGljeS52MS5TY29wZVBlcm1pc3Npb25zEi4KCWNvbnN0YW50cxgHIAEoCzIbLmNlcmJvcy5wb2xpY3kudjEuQ29uc3RhbnRzItwCCg1QcmluY2lwYWxSdWxlEhwKCHJlc291cmNlGAEgASgJQgq6SAfIAQFyAhABEkQKB2FjdGlvbnMYAiADKAsyJi5jZXJib3MucG9saWN5LnYxLlByaW5jaXBhbFJ1bGUuQWN0aW9uQgu6SAjIAQGSAQIIARrmAQoGQWN0aW9uEhoKBmFjdGlvbhgBIAEoCUIKukgHyAEBcgIQARIuCgljb25kaXRpb24YAiABKAsyGy5jZXJib3MucG9saWN5LnYxLkNvbmRpdGlvbhI3CgZlZmZlY3QYAyABKA4yGC5jZXJib3MuZWZmZWN0LnYxLkVmZmVjdEINukgKyAEBggEEGAEYAhItCgRuYW1lGAQgASgJQh+6SBxyGjIYXihbYS16QS1aXVtcd1xAXC5cLV0qKSokEigKBm91dHB1dBgFIAEoCzIYLmNlcmJvcy5wb2xpY3kudjEuT3V0cHV0ItIBCgxEZXJpdmVkUm9sZXMSJQoEbmFtZRgBIAEoCUIXukgUyAEBcg8QATILXltcd1wtXC5dKyQSOwoLZGVmaW5pdGlvbnMYAiADKAsyGS5jZXJib3MucG9saWN5LnYxLlJvbGVEZWZCC7pICMgBAZIBAggBEi4KCXZhcmlhYmxlcxgDIAEoCzIbLmNlcmJvcy5wb2xpY3kudjEuVmFyaWFibGVzEi4KCWNvbnN0YW50cxgEIAEoCzIbLmNlcmJvcy5wb2xpY3kudjEuQ29uc3RhbnRzIokBCgdSb2xlRGVmEiMKBG5hbWUYASABKAlCFbpIEsgBAXINMgteW1x3XC1cLl0rJBIpCgxwYXJlbnRfcm9sZXMYAiADKAlCE7pIEMgBAZIBCggBGAEiBHICEAESLgoJY29uZGl0aW9uGAMgASgLMhsuY2VyYm9zLnBvbGljeS52MS5Db25kaXRpb24izQEKD0V4cG9ydENvbnN0YW50cxIlCgRuYW1lGAEgASgJQhe6SBTIAQFyDxABMgteW1x3XC1cLl0rJBJHCgtkZWZpbml0aW9ucxgCIAMoCzIyLmNlcmJvcy5wb2xpY3kudjEuRXhwb3J0Q29uc3RhbnRzLkRlZmluaXRpb25zRW50cnkaSgoQRGVmaW5pdGlvbnNFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBIrMBCglDb25zdGFudHMSKQoGaW1wb3J0GAEgAygJQhm6SBaSARMYASIPcg0yC15bXHdcLVwuXSskEjUKBWxvY2FsGAIgAygLMiYuY2VyYm9zLnBvbGljeS52MS5Db25zdGFudHMuTG9jYWxFbnRyeRpECgpMb2NhbEVudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAEitQEKD0V4cG9ydFZhcmlhYmxlcxIlCgRuYW1lGAEgASgJQhe6SBTIAQFyDxABMgteW1x3XC1cLl0rJBJHCgtkZWZpbml0aW9ucxgCIAMoCzIyLmNlcmJvcy5wb2xpY3kudjEuRXhwb3J0VmFyaWFibGVzLkRlZmluaXRpb25zRW50cnkaMgoQRGVmaW5pdGlvbnNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBIpsBCglWYXJpYWJsZXMSKQoGaW1wb3J0GAEgAygJQhm6SBaSARMYASIPcg0yC15bXHdcLVwuXSskEjUKBWxvY2FsGAIgAygLMiYuY2VyYm9zLnBvbGljeS52MS5WYXJpYWJsZXMuTG9jYWxFbnRyeRosCgpMb2NhbEVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEiWwoJQ29uZGl0aW9uEigKBW1hdGNoGAEgASgLMhcuY2VyYm9zLnBvbGljeS52MS5NYXRjaEgAEhAKBnNjcmlwdBgCIAEoCUgAQhIKCWNvbmRpdGlvbhIFukgCCAEi9gEKBU1hdGNoEi8KA2FsbBgBIAEoCzIgLmNlcmJvcy5wb2xpY3kudjEuTWF0Y2guRXhwckxpc3RIABIvCgNhbnkYAiABKAsyIC5jZXJib3MucG9saWN5LnYxLk1hdGNoLkV4cHJMaXN0SAASMAoEbm9uZRgDIAEoCzIgLmNlcmJvcy5wb2xpY3kudjEuTWF0Y2guRXhwckxpc3RIABIOCgRleHByGAQgASgJSAAaPAoIRXhwckxpc3QSMAoCb2YYASADKAsyFy5jZXJib3MucG9saWN5LnYxLk1hdGNoQgu6SAjIAQGSAQIIAUILCgJvcBIFukgCCAEiggEKBk91dHB1dBIQCgRleHByGAEgASgJQgIYARIrCgR3aGVuGAIgASgLMh0uY2VyYm9zLnBvbGljeS52MS5PdXRwdXQuV2hlbho5CgRXaGVuEhYKDnJ1bGVfYWN0aXZhdGVkGAEgASgJEhkKEWNvbmRpdGlvbl9ub3RfbWV0GAIgASgJIpICCgdTY2hlbWFzEjoKEHByaW5jaXBhbF9zY2hlbWEYASABKAsyIC5jZXJib3MucG9saWN5LnYxLlNjaGVtYXMuU2NoZW1hEjkKD3Jlc291cmNlX3NjaGVtYRgCIAEoCzIgLmNlcmJvcy5wb2xpY3kudjEuU2NoZW1hcy5TY2hlbWEaMgoKSWdub3JlV2hlbhIkCgdhY3Rpb25zGAEgAygJQhO6SBDIAQGSAQoIARgBIgRyAhABGlwKBlNjaGVtYRIXCgNyZWYYASABKAlCCrpIB8gBAXICEAESOQoLaWdub3JlX3doZW4YAiABKAsyJC5jZXJib3MucG9saWN5LnYxLlNjaGVtYXMuSWdub3JlV2hlbiqXAQoQU2NvcGVQZXJtaXNzaW9ucxIhCh1TQ09QRV9QRVJNSVNTSU9OU19VTlNQRUNJRklFRBAAEiUKIVNDT1BFX1BFUk1JU1NJT05TX09WRVJSSURFX1BBUkVOVBABEjkKNVNDT1BFX1BFUk1JU1NJT05TX1JFUVVJUkVfUEFSRU5UQUxfQ09OU0VOVF9GT1JfQUxMT1dTEAJCbwoYZGV2LmNlcmJvcy5hcGkudjEucG9saWN5WjxnaXRodWIuY29tL2NlcmJvcy9jZXJib3MvYXBpL2dlbnBiL2NlcmJvcy9wb2xpY3kvdjE7cG9saWN5djGqAhRDZXJib3MuQXBpLlYxLlBvbGljeWIGcHJvdG8z",
    [
      file_buf_validate_validate,
      file_cerbos_effect_v1_effect,
      file_google_protobuf_struct,
      file_google_protobuf_wrappers,
    ],
  );

/**
 * @generated from message cerbos.policy.v1.Policy
 */
export type Policy = Message<"cerbos.policy.v1.Policy"> & {
  /**
   * @generated from field: string api_version = 1;
   */
  apiVersion: string;

  /**
   * @generated from field: bool disabled = 2;
   */
  disabled: boolean;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: cerbos.policy.v1.Metadata metadata = 4;
   */
  metadata?: Metadata;

  /**
   * @generated from oneof cerbos.policy.v1.Policy.policy_type
   */
  policyType:
    | {
        /**
         * @generated from field: cerbos.policy.v1.ResourcePolicy resource_policy = 5;
         */
        value: ResourcePolicy;
        case: "resourcePolicy";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.PrincipalPolicy principal_policy = 6;
         */
        value: PrincipalPolicy;
        case: "principalPolicy";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.DerivedRoles derived_roles = 7;
         */
        value: DerivedRoles;
        case: "derivedRoles";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.ExportVariables export_variables = 10;
         */
        value: ExportVariables;
        case: "exportVariables";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.RolePolicy role_policy = 11;
         */
        value: RolePolicy;
        case: "rolePolicy";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.ExportConstants export_constants = 12;
         */
        value: ExportConstants;
        case: "exportConstants";
      }
    | { case: undefined; value?: undefined };

  /**
   * @generated from field: map<string, string> variables = 8 [deprecated = true];
   * @deprecated
   */
  variables: { [key: string]: string };

  /**
   * @generated from field: string json_schema = 9 [json_name = "$schema"];
   */
  jsonSchema: string;
};

/**
 * @generated from message cerbos.policy.v1.Policy
 */
export type PolicyJson = {
  /**
   * @generated from field: string api_version = 1;
   */
  apiVersion?: string;

  /**
   * @generated from field: bool disabled = 2;
   */
  disabled?: boolean;

  /**
   * @generated from field: string description = 3;
   */
  description?: string;

  /**
   * @generated from field: cerbos.policy.v1.Metadata metadata = 4;
   */
  metadata?: MetadataJson;

  /**
   * @generated from field: cerbos.policy.v1.ResourcePolicy resource_policy = 5;
   */
  resourcePolicy?: ResourcePolicyJson;

  /**
   * @generated from field: cerbos.policy.v1.PrincipalPolicy principal_policy = 6;
   */
  principalPolicy?: PrincipalPolicyJson;

  /**
   * @generated from field: cerbos.policy.v1.DerivedRoles derived_roles = 7;
   */
  derivedRoles?: DerivedRolesJson;

  /**
   * @generated from field: cerbos.policy.v1.ExportVariables export_variables = 10;
   */
  exportVariables?: ExportVariablesJson;

  /**
   * @generated from field: cerbos.policy.v1.RolePolicy role_policy = 11;
   */
  rolePolicy?: RolePolicyJson;

  /**
   * @generated from field: cerbos.policy.v1.ExportConstants export_constants = 12;
   */
  exportConstants?: ExportConstantsJson;

  /**
   * @generated from field: map<string, string> variables = 8 [deprecated = true];
   * @deprecated
   */
  variables?: { [key: string]: string };

  /**
   * @generated from field: string json_schema = 9 [json_name = "$schema"];
   */
  $schema?: string;
};

/**
 * @generated from message cerbos.policy.v1.Policy
 */
export type PolicyValid = Message<"cerbos.policy.v1.Policy"> & {
  /**
   * @generated from field: string api_version = 1;
   */
  apiVersion: string;

  /**
   * @generated from field: bool disabled = 2;
   */
  disabled: boolean;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: cerbos.policy.v1.Metadata metadata = 4;
   */
  metadata?: MetadataValid;

  /**
   * @generated from oneof cerbos.policy.v1.Policy.policy_type
   */
  policyType:
    | {
        /**
         * @generated from field: cerbos.policy.v1.ResourcePolicy resource_policy = 5;
         */
        value: ResourcePolicyValid;
        case: "resourcePolicy";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.PrincipalPolicy principal_policy = 6;
         */
        value: PrincipalPolicyValid;
        case: "principalPolicy";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.DerivedRoles derived_roles = 7;
         */
        value: DerivedRolesValid;
        case: "derivedRoles";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.ExportVariables export_variables = 10;
         */
        value: ExportVariablesValid;
        case: "exportVariables";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.RolePolicy role_policy = 11;
         */
        value: RolePolicyValid;
        case: "rolePolicy";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.ExportConstants export_constants = 12;
         */
        value: ExportConstantsValid;
        case: "exportConstants";
      }
    | { case: undefined; value?: undefined };

  /**
   * @generated from field: map<string, string> variables = 8 [deprecated = true];
   * @deprecated
   */
  variables: { [key: string]: string };

  /**
   * @generated from field: string json_schema = 9 [json_name = "$schema"];
   */
  jsonSchema: string;
};

/**
 * Describes the message cerbos.policy.v1.Policy.
 * Use `create(PolicySchema)` to create a new message.
 */
export const PolicySchema: GenMessage<
  Policy,
  { jsonType: PolicyJson; validType: PolicyValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 0);

/**
 * @generated from message cerbos.policy.v1.SourceAttributes
 */
export type SourceAttributes = Message<"cerbos.policy.v1.SourceAttributes"> & {
  /**
   * @generated from field: map<string, google.protobuf.Value> attributes = 1;
   */
  attributes: { [key: string]: Value };
};

/**
 * @generated from message cerbos.policy.v1.SourceAttributes
 */
export type SourceAttributesJson = {
  /**
   * @generated from field: map<string, google.protobuf.Value> attributes = 1;
   */
  attributes?: { [key: string]: ValueJson };
};

export type SourceAttributesValid = SourceAttributes;

/**
 * Describes the message cerbos.policy.v1.SourceAttributes.
 * Use `create(SourceAttributesSchema)` to create a new message.
 */
export const SourceAttributesSchema: GenMessage<
  SourceAttributes,
  { jsonType: SourceAttributesJson; validType: SourceAttributesValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 1);

/**
 * @generated from message cerbos.policy.v1.Metadata
 */
export type Metadata = Message<"cerbos.policy.v1.Metadata"> & {
  /**
   * @generated from field: string source_file = 1;
   */
  sourceFile: string;

  /**
   * @generated from field: map<string, string> annotations = 2;
   */
  annotations: { [key: string]: string };

  /**
   * @generated from field: google.protobuf.UInt64Value hash = 3;
   */
  hash?: bigint;

  /**
   * @generated from field: string store_identifer = 4 [deprecated = true];
   * @deprecated
   */
  storeIdentifer: string;

  /**
   * @generated from field: string store_identifier = 5;
   */
  storeIdentifier: string;

  /**
   * @generated from field: cerbos.policy.v1.SourceAttributes source_attributes = 6;
   */
  sourceAttributes?: SourceAttributes;
};

/**
 * @generated from message cerbos.policy.v1.Metadata
 */
export type MetadataJson = {
  /**
   * @generated from field: string source_file = 1;
   */
  sourceFile?: string;

  /**
   * @generated from field: map<string, string> annotations = 2;
   */
  annotations?: { [key: string]: string };

  /**
   * @generated from field: google.protobuf.UInt64Value hash = 3;
   */
  hash?: UInt64ValueJson;

  /**
   * @generated from field: string store_identifer = 4 [deprecated = true];
   * @deprecated
   */
  storeIdentifer?: string;

  /**
   * @generated from field: string store_identifier = 5;
   */
  storeIdentifier?: string;

  /**
   * @generated from field: cerbos.policy.v1.SourceAttributes source_attributes = 6;
   */
  sourceAttributes?: SourceAttributesJson;
};

export type MetadataValid = Metadata;

/**
 * Describes the message cerbos.policy.v1.Metadata.
 * Use `create(MetadataSchema)` to create a new message.
 */
export const MetadataSchema: GenMessage<
  Metadata,
  { jsonType: MetadataJson; validType: MetadataValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 2);

/**
 * @generated from message cerbos.policy.v1.ResourcePolicy
 */
export type ResourcePolicy = Message<"cerbos.policy.v1.ResourcePolicy"> & {
  /**
   * @generated from field: string resource = 1;
   */
  resource: string;

  /**
   * @generated from field: string version = 2;
   */
  version: string;

  /**
   * @generated from field: repeated string import_derived_roles = 3;
   */
  importDerivedRoles: string[];

  /**
   * @generated from field: repeated cerbos.policy.v1.ResourceRule rules = 4;
   */
  rules: ResourceRule[];

  /**
   * @generated from field: string scope = 5;
   */
  scope: string;

  /**
   * @generated from field: cerbos.policy.v1.Schemas schemas = 6;
   */
  schemas?: Schemas;

  /**
   * @generated from field: cerbos.policy.v1.Variables variables = 7;
   */
  variables?: Variables;

  /**
   * @generated from field: cerbos.policy.v1.ScopePermissions scope_permissions = 8;
   */
  scopePermissions: ScopePermissions;

  /**
   * @generated from field: cerbos.policy.v1.Constants constants = 9;
   */
  constants?: Constants;
};

/**
 * @generated from message cerbos.policy.v1.ResourcePolicy
 */
export type ResourcePolicyJson = {
  /**
   * @generated from field: string resource = 1;
   */
  resource?: string;

  /**
   * @generated from field: string version = 2;
   */
  version?: string;

  /**
   * @generated from field: repeated string import_derived_roles = 3;
   */
  importDerivedRoles?: string[];

  /**
   * @generated from field: repeated cerbos.policy.v1.ResourceRule rules = 4;
   */
  rules?: ResourceRuleJson[];

  /**
   * @generated from field: string scope = 5;
   */
  scope?: string;

  /**
   * @generated from field: cerbos.policy.v1.Schemas schemas = 6;
   */
  schemas?: SchemasJson;

  /**
   * @generated from field: cerbos.policy.v1.Variables variables = 7;
   */
  variables?: VariablesJson;

  /**
   * @generated from field: cerbos.policy.v1.ScopePermissions scope_permissions = 8;
   */
  scopePermissions?: ScopePermissionsJson;

  /**
   * @generated from field: cerbos.policy.v1.Constants constants = 9;
   */
  constants?: ConstantsJson;
};

/**
 * @generated from message cerbos.policy.v1.ResourcePolicy
 */
export type ResourcePolicyValid = Message<"cerbos.policy.v1.ResourcePolicy"> & {
  /**
   * @generated from field: string resource = 1;
   */
  resource: string;

  /**
   * @generated from field: string version = 2;
   */
  version: string;

  /**
   * @generated from field: repeated string import_derived_roles = 3;
   */
  importDerivedRoles: string[];

  /**
   * @generated from field: repeated cerbos.policy.v1.ResourceRule rules = 4;
   */
  rules: ResourceRuleValid[];

  /**
   * @generated from field: string scope = 5;
   */
  scope: string;

  /**
   * @generated from field: cerbos.policy.v1.Schemas schemas = 6;
   */
  schemas?: SchemasValid;

  /**
   * @generated from field: cerbos.policy.v1.Variables variables = 7;
   */
  variables?: VariablesValid;

  /**
   * @generated from field: cerbos.policy.v1.ScopePermissions scope_permissions = 8;
   */
  scopePermissions: ScopePermissions;

  /**
   * @generated from field: cerbos.policy.v1.Constants constants = 9;
   */
  constants?: ConstantsValid;
};

/**
 * Describes the message cerbos.policy.v1.ResourcePolicy.
 * Use `create(ResourcePolicySchema)` to create a new message.
 */
export const ResourcePolicySchema: GenMessage<
  ResourcePolicy,
  { jsonType: ResourcePolicyJson; validType: ResourcePolicyValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 3);

/**
 * @generated from message cerbos.policy.v1.ResourceRule
 */
export type ResourceRule = Message<"cerbos.policy.v1.ResourceRule"> & {
  /**
   * @generated from field: repeated string actions = 1;
   */
  actions: string[];

  /**
   * @generated from field: repeated string derived_roles = 2;
   */
  derivedRoles: string[];

  /**
   * @generated from field: repeated string roles = 3;
   */
  roles: string[];

  /**
   * @generated from field: cerbos.policy.v1.Condition condition = 4;
   */
  condition?: Condition;

  /**
   * @generated from field: cerbos.effect.v1.Effect effect = 5;
   */
  effect: Effect;

  /**
   * @generated from field: string name = 6;
   */
  name: string;

  /**
   * @generated from field: cerbos.policy.v1.Output output = 7;
   */
  output?: Output;
};

/**
 * @generated from message cerbos.policy.v1.ResourceRule
 */
export type ResourceRuleJson = {
  /**
   * @generated from field: repeated string actions = 1;
   */
  actions?: string[];

  /**
   * @generated from field: repeated string derived_roles = 2;
   */
  derivedRoles?: string[];

  /**
   * @generated from field: repeated string roles = 3;
   */
  roles?: string[];

  /**
   * @generated from field: cerbos.policy.v1.Condition condition = 4;
   */
  condition?: ConditionJson;

  /**
   * @generated from field: cerbos.effect.v1.Effect effect = 5;
   */
  effect?: EffectJson;

  /**
   * @generated from field: string name = 6;
   */
  name?: string;

  /**
   * @generated from field: cerbos.policy.v1.Output output = 7;
   */
  output?: OutputJson;
};

/**
 * @generated from message cerbos.policy.v1.ResourceRule
 */
export type ResourceRuleValid = Message<"cerbos.policy.v1.ResourceRule"> & {
  /**
   * @generated from field: repeated string actions = 1;
   */
  actions: string[];

  /**
   * @generated from field: repeated string derived_roles = 2;
   */
  derivedRoles: string[];

  /**
   * @generated from field: repeated string roles = 3;
   */
  roles: string[];

  /**
   * @generated from field: cerbos.policy.v1.Condition condition = 4;
   */
  condition?: ConditionValid;

  /**
   * @generated from field: cerbos.effect.v1.Effect effect = 5;
   */
  effect: Effect;

  /**
   * @generated from field: string name = 6;
   */
  name: string;

  /**
   * @generated from field: cerbos.policy.v1.Output output = 7;
   */
  output?: OutputValid;
};

/**
 * Describes the message cerbos.policy.v1.ResourceRule.
 * Use `create(ResourceRuleSchema)` to create a new message.
 */
export const ResourceRuleSchema: GenMessage<
  ResourceRule,
  { jsonType: ResourceRuleJson; validType: ResourceRuleValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 4);

/**
 * @generated from message cerbos.policy.v1.RolePolicy
 */
export type RolePolicy = Message<"cerbos.policy.v1.RolePolicy"> & {
  /**
   * @generated from oneof cerbos.policy.v1.RolePolicy.policy_type
   */
  policyType:
    | {
        /**
         * @generated from field: string role = 1;
         */
        value: string;
        case: "role";
      }
    | { case: undefined; value?: undefined };

  /**
   * @generated from field: repeated string parent_roles = 5;
   */
  parentRoles: string[];

  /**
   * @generated from field: string scope = 2;
   */
  scope: string;

  /**
   * @generated from field: repeated cerbos.policy.v1.RoleRule rules = 3;
   */
  rules: RoleRule[];

  /**
   * Deprecated: no-op.
   *
   * @generated from field: cerbos.policy.v1.ScopePermissions scope_permissions = 4 [deprecated = true];
   * @deprecated
   */
  scopePermissions: ScopePermissions;
};

/**
 * @generated from message cerbos.policy.v1.RolePolicy
 */
export type RolePolicyJson = {
  /**
   * @generated from field: string role = 1;
   */
  role?: string;

  /**
   * @generated from field: repeated string parent_roles = 5;
   */
  parentRoles?: string[];

  /**
   * @generated from field: string scope = 2;
   */
  scope?: string;

  /**
   * @generated from field: repeated cerbos.policy.v1.RoleRule rules = 3;
   */
  rules?: RoleRuleJson[];

  /**
   * Deprecated: no-op.
   *
   * @generated from field: cerbos.policy.v1.ScopePermissions scope_permissions = 4 [deprecated = true];
   * @deprecated
   */
  scopePermissions?: ScopePermissionsJson;
};

/**
 * @generated from message cerbos.policy.v1.RolePolicy
 */
export type RolePolicyValid = Message<"cerbos.policy.v1.RolePolicy"> & {
  /**
   * @generated from oneof cerbos.policy.v1.RolePolicy.policy_type
   */
  policyType:
    | {
        /**
         * @generated from field: string role = 1;
         */
        value: string;
        case: "role";
      }
    | { case: undefined; value?: undefined };

  /**
   * @generated from field: repeated string parent_roles = 5;
   */
  parentRoles: string[];

  /**
   * @generated from field: string scope = 2;
   */
  scope: string;

  /**
   * @generated from field: repeated cerbos.policy.v1.RoleRule rules = 3;
   */
  rules: RoleRuleValid[];

  /**
   * Deprecated: no-op.
   *
   * @generated from field: cerbos.policy.v1.ScopePermissions scope_permissions = 4 [deprecated = true];
   * @deprecated
   */
  scopePermissions: ScopePermissions;
};

/**
 * Describes the message cerbos.policy.v1.RolePolicy.
 * Use `create(RolePolicySchema)` to create a new message.
 */
export const RolePolicySchema: GenMessage<
  RolePolicy,
  { jsonType: RolePolicyJson; validType: RolePolicyValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 5);

/**
 * @generated from message cerbos.policy.v1.RoleRule
 */
export type RoleRule = Message<"cerbos.policy.v1.RoleRule"> & {
  /**
   * @generated from field: string resource = 1;
   */
  resource: string;

  /**
   * @generated from field: repeated string allow_actions = 2;
   */
  allowActions: string[];

  /**
   * @generated from field: cerbos.policy.v1.Condition condition = 3;
   */
  condition?: Condition;
};

/**
 * @generated from message cerbos.policy.v1.RoleRule
 */
export type RoleRuleJson = {
  /**
   * @generated from field: string resource = 1;
   */
  resource?: string;

  /**
   * @generated from field: repeated string allow_actions = 2;
   */
  allowActions?: string[];

  /**
   * @generated from field: cerbos.policy.v1.Condition condition = 3;
   */
  condition?: ConditionJson;
};

/**
 * @generated from message cerbos.policy.v1.RoleRule
 */
export type RoleRuleValid = Message<"cerbos.policy.v1.RoleRule"> & {
  /**
   * @generated from field: string resource = 1;
   */
  resource: string;

  /**
   * @generated from field: repeated string allow_actions = 2;
   */
  allowActions: string[];

  /**
   * @generated from field: cerbos.policy.v1.Condition condition = 3;
   */
  condition?: ConditionValid;
};

/**
 * Describes the message cerbos.policy.v1.RoleRule.
 * Use `create(RoleRuleSchema)` to create a new message.
 */
export const RoleRuleSchema: GenMessage<
  RoleRule,
  { jsonType: RoleRuleJson; validType: RoleRuleValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 6);

/**
 * @generated from message cerbos.policy.v1.PrincipalPolicy
 */
export type PrincipalPolicy = Message<"cerbos.policy.v1.PrincipalPolicy"> & {
  /**
   * @generated from field: string principal = 1;
   */
  principal: string;

  /**
   * @generated from field: string version = 2;
   */
  version: string;

  /**
   * @generated from field: repeated cerbos.policy.v1.PrincipalRule rules = 3;
   */
  rules: PrincipalRule[];

  /**
   * @generated from field: string scope = 4;
   */
  scope: string;

  /**
   * @generated from field: cerbos.policy.v1.Variables variables = 5;
   */
  variables?: Variables;

  /**
   * @generated from field: cerbos.policy.v1.ScopePermissions scope_permissions = 6;
   */
  scopePermissions: ScopePermissions;

  /**
   * @generated from field: cerbos.policy.v1.Constants constants = 7;
   */
  constants?: Constants;
};

/**
 * @generated from message cerbos.policy.v1.PrincipalPolicy
 */
export type PrincipalPolicyJson = {
  /**
   * @generated from field: string principal = 1;
   */
  principal?: string;

  /**
   * @generated from field: string version = 2;
   */
  version?: string;

  /**
   * @generated from field: repeated cerbos.policy.v1.PrincipalRule rules = 3;
   */
  rules?: PrincipalRuleJson[];

  /**
   * @generated from field: string scope = 4;
   */
  scope?: string;

  /**
   * @generated from field: cerbos.policy.v1.Variables variables = 5;
   */
  variables?: VariablesJson;

  /**
   * @generated from field: cerbos.policy.v1.ScopePermissions scope_permissions = 6;
   */
  scopePermissions?: ScopePermissionsJson;

  /**
   * @generated from field: cerbos.policy.v1.Constants constants = 7;
   */
  constants?: ConstantsJson;
};

/**
 * @generated from message cerbos.policy.v1.PrincipalPolicy
 */
export type PrincipalPolicyValid =
  Message<"cerbos.policy.v1.PrincipalPolicy"> & {
    /**
     * @generated from field: string principal = 1;
     */
    principal: string;

    /**
     * @generated from field: string version = 2;
     */
    version: string;

    /**
     * @generated from field: repeated cerbos.policy.v1.PrincipalRule rules = 3;
     */
    rules: PrincipalRuleValid[];

    /**
     * @generated from field: string scope = 4;
     */
    scope: string;

    /**
     * @generated from field: cerbos.policy.v1.Variables variables = 5;
     */
    variables?: VariablesValid;

    /**
     * @generated from field: cerbos.policy.v1.ScopePermissions scope_permissions = 6;
     */
    scopePermissions: ScopePermissions;

    /**
     * @generated from field: cerbos.policy.v1.Constants constants = 7;
     */
    constants?: ConstantsValid;
  };

/**
 * Describes the message cerbos.policy.v1.PrincipalPolicy.
 * Use `create(PrincipalPolicySchema)` to create a new message.
 */
export const PrincipalPolicySchema: GenMessage<
  PrincipalPolicy,
  { jsonType: PrincipalPolicyJson; validType: PrincipalPolicyValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 7);

/**
 * @generated from message cerbos.policy.v1.PrincipalRule
 */
export type PrincipalRule = Message<"cerbos.policy.v1.PrincipalRule"> & {
  /**
   * @generated from field: string resource = 1;
   */
  resource: string;

  /**
   * @generated from field: repeated cerbos.policy.v1.PrincipalRule.Action actions = 2;
   */
  actions: PrincipalRule_Action[];
};

/**
 * @generated from message cerbos.policy.v1.PrincipalRule
 */
export type PrincipalRuleJson = {
  /**
   * @generated from field: string resource = 1;
   */
  resource?: string;

  /**
   * @generated from field: repeated cerbos.policy.v1.PrincipalRule.Action actions = 2;
   */
  actions?: PrincipalRule_ActionJson[];
};

/**
 * @generated from message cerbos.policy.v1.PrincipalRule
 */
export type PrincipalRuleValid = Message<"cerbos.policy.v1.PrincipalRule"> & {
  /**
   * @generated from field: string resource = 1;
   */
  resource: string;

  /**
   * @generated from field: repeated cerbos.policy.v1.PrincipalRule.Action actions = 2;
   */
  actions: PrincipalRule_ActionValid[];
};

/**
 * Describes the message cerbos.policy.v1.PrincipalRule.
 * Use `create(PrincipalRuleSchema)` to create a new message.
 */
export const PrincipalRuleSchema: GenMessage<
  PrincipalRule,
  { jsonType: PrincipalRuleJson; validType: PrincipalRuleValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 8);

/**
 * @generated from message cerbos.policy.v1.PrincipalRule.Action
 */
export type PrincipalRule_Action =
  Message<"cerbos.policy.v1.PrincipalRule.Action"> & {
    /**
     * @generated from field: string action = 1;
     */
    action: string;

    /**
     * @generated from field: cerbos.policy.v1.Condition condition = 2;
     */
    condition?: Condition;

    /**
     * @generated from field: cerbos.effect.v1.Effect effect = 3;
     */
    effect: Effect;

    /**
     * @generated from field: string name = 4;
     */
    name: string;

    /**
     * @generated from field: cerbos.policy.v1.Output output = 5;
     */
    output?: Output;
  };

/**
 * @generated from message cerbos.policy.v1.PrincipalRule.Action
 */
export type PrincipalRule_ActionJson = {
  /**
   * @generated from field: string action = 1;
   */
  action?: string;

  /**
   * @generated from field: cerbos.policy.v1.Condition condition = 2;
   */
  condition?: ConditionJson;

  /**
   * @generated from field: cerbos.effect.v1.Effect effect = 3;
   */
  effect?: EffectJson;

  /**
   * @generated from field: string name = 4;
   */
  name?: string;

  /**
   * @generated from field: cerbos.policy.v1.Output output = 5;
   */
  output?: OutputJson;
};

/**
 * @generated from message cerbos.policy.v1.PrincipalRule.Action
 */
export type PrincipalRule_ActionValid =
  Message<"cerbos.policy.v1.PrincipalRule.Action"> & {
    /**
     * @generated from field: string action = 1;
     */
    action: string;

    /**
     * @generated from field: cerbos.policy.v1.Condition condition = 2;
     */
    condition?: ConditionValid;

    /**
     * @generated from field: cerbos.effect.v1.Effect effect = 3;
     */
    effect: Effect;

    /**
     * @generated from field: string name = 4;
     */
    name: string;

    /**
     * @generated from field: cerbos.policy.v1.Output output = 5;
     */
    output?: OutputValid;
  };

/**
 * Describes the message cerbos.policy.v1.PrincipalRule.Action.
 * Use `create(PrincipalRule_ActionSchema)` to create a new message.
 */
export const PrincipalRule_ActionSchema: GenMessage<
  PrincipalRule_Action,
  { jsonType: PrincipalRule_ActionJson; validType: PrincipalRule_ActionValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 8, 0);

/**
 * @generated from message cerbos.policy.v1.DerivedRoles
 */
export type DerivedRoles = Message<"cerbos.policy.v1.DerivedRoles"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: repeated cerbos.policy.v1.RoleDef definitions = 2;
   */
  definitions: RoleDef[];

  /**
   * @generated from field: cerbos.policy.v1.Variables variables = 3;
   */
  variables?: Variables;

  /**
   * @generated from field: cerbos.policy.v1.Constants constants = 4;
   */
  constants?: Constants;
};

/**
 * @generated from message cerbos.policy.v1.DerivedRoles
 */
export type DerivedRolesJson = {
  /**
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * @generated from field: repeated cerbos.policy.v1.RoleDef definitions = 2;
   */
  definitions?: RoleDefJson[];

  /**
   * @generated from field: cerbos.policy.v1.Variables variables = 3;
   */
  variables?: VariablesJson;

  /**
   * @generated from field: cerbos.policy.v1.Constants constants = 4;
   */
  constants?: ConstantsJson;
};

/**
 * @generated from message cerbos.policy.v1.DerivedRoles
 */
export type DerivedRolesValid = Message<"cerbos.policy.v1.DerivedRoles"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: repeated cerbos.policy.v1.RoleDef definitions = 2;
   */
  definitions: RoleDefValid[];

  /**
   * @generated from field: cerbos.policy.v1.Variables variables = 3;
   */
  variables?: VariablesValid;

  /**
   * @generated from field: cerbos.policy.v1.Constants constants = 4;
   */
  constants?: ConstantsValid;
};

/**
 * Describes the message cerbos.policy.v1.DerivedRoles.
 * Use `create(DerivedRolesSchema)` to create a new message.
 */
export const DerivedRolesSchema: GenMessage<
  DerivedRoles,
  { jsonType: DerivedRolesJson; validType: DerivedRolesValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 9);

/**
 * @generated from message cerbos.policy.v1.RoleDef
 */
export type RoleDef = Message<"cerbos.policy.v1.RoleDef"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: repeated string parent_roles = 2;
   */
  parentRoles: string[];

  /**
   * @generated from field: cerbos.policy.v1.Condition condition = 3;
   */
  condition?: Condition;
};

/**
 * @generated from message cerbos.policy.v1.RoleDef
 */
export type RoleDefJson = {
  /**
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * @generated from field: repeated string parent_roles = 2;
   */
  parentRoles?: string[];

  /**
   * @generated from field: cerbos.policy.v1.Condition condition = 3;
   */
  condition?: ConditionJson;
};

/**
 * @generated from message cerbos.policy.v1.RoleDef
 */
export type RoleDefValid = Message<"cerbos.policy.v1.RoleDef"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: repeated string parent_roles = 2;
   */
  parentRoles: string[];

  /**
   * @generated from field: cerbos.policy.v1.Condition condition = 3;
   */
  condition?: ConditionValid;
};

/**
 * Describes the message cerbos.policy.v1.RoleDef.
 * Use `create(RoleDefSchema)` to create a new message.
 */
export const RoleDefSchema: GenMessage<
  RoleDef,
  { jsonType: RoleDefJson; validType: RoleDefValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 10);

/**
 * @generated from message cerbos.policy.v1.ExportConstants
 */
export type ExportConstants = Message<"cerbos.policy.v1.ExportConstants"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> definitions = 2;
   */
  definitions: { [key: string]: Value };
};

/**
 * @generated from message cerbos.policy.v1.ExportConstants
 */
export type ExportConstantsJson = {
  /**
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> definitions = 2;
   */
  definitions?: { [key: string]: ValueJson };
};

/**
 * @generated from message cerbos.policy.v1.ExportConstants
 */
export type ExportConstantsValid =
  Message<"cerbos.policy.v1.ExportConstants"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;

    /**
     * @generated from field: map<string, google.protobuf.Value> definitions = 2;
     */
    definitions: { [key: string]: Value };
  };

/**
 * Describes the message cerbos.policy.v1.ExportConstants.
 * Use `create(ExportConstantsSchema)` to create a new message.
 */
export const ExportConstantsSchema: GenMessage<
  ExportConstants,
  { jsonType: ExportConstantsJson; validType: ExportConstantsValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 11);

/**
 * @generated from message cerbos.policy.v1.Constants
 */
export type Constants = Message<"cerbos.policy.v1.Constants"> & {
  /**
   * @generated from field: repeated string import = 1;
   */
  import: string[];

  /**
   * @generated from field: map<string, google.protobuf.Value> local = 2;
   */
  local: { [key: string]: Value };
};

/**
 * @generated from message cerbos.policy.v1.Constants
 */
export type ConstantsJson = {
  /**
   * @generated from field: repeated string import = 1;
   */
  import?: string[];

  /**
   * @generated from field: map<string, google.protobuf.Value> local = 2;
   */
  local?: { [key: string]: ValueJson };
};

export type ConstantsValid = Constants;

/**
 * Describes the message cerbos.policy.v1.Constants.
 * Use `create(ConstantsSchema)` to create a new message.
 */
export const ConstantsSchema: GenMessage<
  Constants,
  { jsonType: ConstantsJson; validType: ConstantsValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 12);

/**
 * @generated from message cerbos.policy.v1.ExportVariables
 */
export type ExportVariables = Message<"cerbos.policy.v1.ExportVariables"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: map<string, string> definitions = 2;
   */
  definitions: { [key: string]: string };
};

/**
 * @generated from message cerbos.policy.v1.ExportVariables
 */
export type ExportVariablesJson = {
  /**
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * @generated from field: map<string, string> definitions = 2;
   */
  definitions?: { [key: string]: string };
};

/**
 * @generated from message cerbos.policy.v1.ExportVariables
 */
export type ExportVariablesValid =
  Message<"cerbos.policy.v1.ExportVariables"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;

    /**
     * @generated from field: map<string, string> definitions = 2;
     */
    definitions: { [key: string]: string };
  };

/**
 * Describes the message cerbos.policy.v1.ExportVariables.
 * Use `create(ExportVariablesSchema)` to create a new message.
 */
export const ExportVariablesSchema: GenMessage<
  ExportVariables,
  { jsonType: ExportVariablesJson; validType: ExportVariablesValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 13);

/**
 * @generated from message cerbos.policy.v1.Variables
 */
export type Variables = Message<"cerbos.policy.v1.Variables"> & {
  /**
   * @generated from field: repeated string import = 1;
   */
  import: string[];

  /**
   * @generated from field: map<string, string> local = 2;
   */
  local: { [key: string]: string };
};

/**
 * @generated from message cerbos.policy.v1.Variables
 */
export type VariablesJson = {
  /**
   * @generated from field: repeated string import = 1;
   */
  import?: string[];

  /**
   * @generated from field: map<string, string> local = 2;
   */
  local?: { [key: string]: string };
};

export type VariablesValid = Variables;

/**
 * Describes the message cerbos.policy.v1.Variables.
 * Use `create(VariablesSchema)` to create a new message.
 */
export const VariablesSchema: GenMessage<
  Variables,
  { jsonType: VariablesJson; validType: VariablesValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 14);

/**
 * @generated from message cerbos.policy.v1.Condition
 */
export type Condition = Message<"cerbos.policy.v1.Condition"> & {
  /**
   * @generated from oneof cerbos.policy.v1.Condition.condition
   */
  condition:
    | {
        /**
         * @generated from field: cerbos.policy.v1.Match match = 1;
         */
        value: Match;
        case: "match";
      }
    | {
        /**
         * @generated from field: string script = 2;
         */
        value: string;
        case: "script";
      }
    | { case: undefined; value?: undefined };
};

/**
 * @generated from message cerbos.policy.v1.Condition
 */
export type ConditionJson = {
  /**
   * @generated from field: cerbos.policy.v1.Match match = 1;
   */
  match?: MatchJson;

  /**
   * @generated from field: string script = 2;
   */
  script?: string;
};

/**
 * @generated from message cerbos.policy.v1.Condition
 */
export type ConditionValid = Message<"cerbos.policy.v1.Condition"> & {
  /**
   * @generated from oneof cerbos.policy.v1.Condition.condition
   */
  condition:
    | {
        /**
         * @generated from field: cerbos.policy.v1.Match match = 1;
         */
        value: MatchValid;
        case: "match";
      }
    | {
        /**
         * @generated from field: string script = 2;
         */
        value: string;
        case: "script";
      }
    | { case: undefined; value?: undefined };
};

/**
 * Describes the message cerbos.policy.v1.Condition.
 * Use `create(ConditionSchema)` to create a new message.
 */
export const ConditionSchema: GenMessage<
  Condition,
  { jsonType: ConditionJson; validType: ConditionValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 15);

/**
 * @generated from message cerbos.policy.v1.Match
 */
export type Match = Message<"cerbos.policy.v1.Match"> & {
  /**
   * @generated from oneof cerbos.policy.v1.Match.op
   */
  op:
    | {
        /**
         * @generated from field: cerbos.policy.v1.Match.ExprList all = 1;
         */
        value: Match_ExprList;
        case: "all";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.Match.ExprList any = 2;
         */
        value: Match_ExprList;
        case: "any";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.Match.ExprList none = 3;
         */
        value: Match_ExprList;
        case: "none";
      }
    | {
        /**
         * @generated from field: string expr = 4;
         */
        value: string;
        case: "expr";
      }
    | { case: undefined; value?: undefined };
};

/**
 * @generated from message cerbos.policy.v1.Match
 */
export type MatchJson = {
  /**
   * @generated from field: cerbos.policy.v1.Match.ExprList all = 1;
   */
  all?: Match_ExprListJson;

  /**
   * @generated from field: cerbos.policy.v1.Match.ExprList any = 2;
   */
  any?: Match_ExprListJson;

  /**
   * @generated from field: cerbos.policy.v1.Match.ExprList none = 3;
   */
  none?: Match_ExprListJson;

  /**
   * @generated from field: string expr = 4;
   */
  expr?: string;
};

/**
 * @generated from message cerbos.policy.v1.Match
 */
export type MatchValid = Message<"cerbos.policy.v1.Match"> & {
  /**
   * @generated from oneof cerbos.policy.v1.Match.op
   */
  op:
    | {
        /**
         * @generated from field: cerbos.policy.v1.Match.ExprList all = 1;
         */
        value: Match_ExprListValid;
        case: "all";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.Match.ExprList any = 2;
         */
        value: Match_ExprListValid;
        case: "any";
      }
    | {
        /**
         * @generated from field: cerbos.policy.v1.Match.ExprList none = 3;
         */
        value: Match_ExprListValid;
        case: "none";
      }
    | {
        /**
         * @generated from field: string expr = 4;
         */
        value: string;
        case: "expr";
      }
    | { case: undefined; value?: undefined };
};

/**
 * Describes the message cerbos.policy.v1.Match.
 * Use `create(MatchSchema)` to create a new message.
 */
export const MatchSchema: GenMessage<
  Match,
  { jsonType: MatchJson; validType: MatchValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 16);

/**
 * @generated from message cerbos.policy.v1.Match.ExprList
 */
export type Match_ExprList = Message<"cerbos.policy.v1.Match.ExprList"> & {
  /**
   * @generated from field: repeated cerbos.policy.v1.Match of = 1;
   */
  of: Match[];
};

/**
 * @generated from message cerbos.policy.v1.Match.ExprList
 */
export type Match_ExprListJson = {
  /**
   * @generated from field: repeated cerbos.policy.v1.Match of = 1;
   */
  of?: MatchJson[];
};

/**
 * @generated from message cerbos.policy.v1.Match.ExprList
 */
export type Match_ExprListValid = Message<"cerbos.policy.v1.Match.ExprList"> & {
  /**
   * @generated from field: repeated cerbos.policy.v1.Match of = 1;
   */
  of: MatchValid[];
};

/**
 * Describes the message cerbos.policy.v1.Match.ExprList.
 * Use `create(Match_ExprListSchema)` to create a new message.
 */
export const Match_ExprListSchema: GenMessage<
  Match_ExprList,
  { jsonType: Match_ExprListJson; validType: Match_ExprListValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 16, 0);

/**
 * @generated from message cerbos.policy.v1.Output
 */
export type Output = Message<"cerbos.policy.v1.Output"> & {
  /**
   * @generated from field: string expr = 1 [deprecated = true];
   * @deprecated
   */
  expr: string;

  /**
   * @generated from field: cerbos.policy.v1.Output.When when = 2;
   */
  when?: Output_When;
};

/**
 * @generated from message cerbos.policy.v1.Output
 */
export type OutputJson = {
  /**
   * @generated from field: string expr = 1 [deprecated = true];
   * @deprecated
   */
  expr?: string;

  /**
   * @generated from field: cerbos.policy.v1.Output.When when = 2;
   */
  when?: Output_WhenJson;
};

export type OutputValid = Output;

/**
 * Describes the message cerbos.policy.v1.Output.
 * Use `create(OutputSchema)` to create a new message.
 */
export const OutputSchema: GenMessage<
  Output,
  { jsonType: OutputJson; validType: OutputValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 17);

/**
 * @generated from message cerbos.policy.v1.Output.When
 */
export type Output_When = Message<"cerbos.policy.v1.Output.When"> & {
  /**
   * @generated from field: string rule_activated = 1;
   */
  ruleActivated: string;

  /**
   * @generated from field: string condition_not_met = 2;
   */
  conditionNotMet: string;
};

/**
 * @generated from message cerbos.policy.v1.Output.When
 */
export type Output_WhenJson = {
  /**
   * @generated from field: string rule_activated = 1;
   */
  ruleActivated?: string;

  /**
   * @generated from field: string condition_not_met = 2;
   */
  conditionNotMet?: string;
};

export type Output_WhenValid = Output_When;

/**
 * Describes the message cerbos.policy.v1.Output.When.
 * Use `create(Output_WhenSchema)` to create a new message.
 */
export const Output_WhenSchema: GenMessage<
  Output_When,
  { jsonType: Output_WhenJson; validType: Output_WhenValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 17, 0);

/**
 * @generated from message cerbos.policy.v1.Schemas
 */
export type Schemas = Message<"cerbos.policy.v1.Schemas"> & {
  /**
   * @generated from field: cerbos.policy.v1.Schemas.Schema principal_schema = 1;
   */
  principalSchema?: Schemas_Schema;

  /**
   * @generated from field: cerbos.policy.v1.Schemas.Schema resource_schema = 2;
   */
  resourceSchema?: Schemas_Schema;
};

/**
 * @generated from message cerbos.policy.v1.Schemas
 */
export type SchemasJson = {
  /**
   * @generated from field: cerbos.policy.v1.Schemas.Schema principal_schema = 1;
   */
  principalSchema?: Schemas_SchemaJson;

  /**
   * @generated from field: cerbos.policy.v1.Schemas.Schema resource_schema = 2;
   */
  resourceSchema?: Schemas_SchemaJson;
};

/**
 * @generated from message cerbos.policy.v1.Schemas
 */
export type SchemasValid = Message<"cerbos.policy.v1.Schemas"> & {
  /**
   * @generated from field: cerbos.policy.v1.Schemas.Schema principal_schema = 1;
   */
  principalSchema?: Schemas_SchemaValid;

  /**
   * @generated from field: cerbos.policy.v1.Schemas.Schema resource_schema = 2;
   */
  resourceSchema?: Schemas_SchemaValid;
};

/**
 * Describes the message cerbos.policy.v1.Schemas.
 * Use `create(SchemasSchema)` to create a new message.
 */
export const SchemasSchema: GenMessage<
  Schemas,
  { jsonType: SchemasJson; validType: SchemasValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 18);

/**
 * @generated from message cerbos.policy.v1.Schemas.IgnoreWhen
 */
export type Schemas_IgnoreWhen =
  Message<"cerbos.policy.v1.Schemas.IgnoreWhen"> & {
    /**
     * @generated from field: repeated string actions = 1;
     */
    actions: string[];
  };

/**
 * @generated from message cerbos.policy.v1.Schemas.IgnoreWhen
 */
export type Schemas_IgnoreWhenJson = {
  /**
   * @generated from field: repeated string actions = 1;
   */
  actions?: string[];
};

/**
 * @generated from message cerbos.policy.v1.Schemas.IgnoreWhen
 */
export type Schemas_IgnoreWhenValid =
  Message<"cerbos.policy.v1.Schemas.IgnoreWhen"> & {
    /**
     * @generated from field: repeated string actions = 1;
     */
    actions: string[];
  };

/**
 * Describes the message cerbos.policy.v1.Schemas.IgnoreWhen.
 * Use `create(Schemas_IgnoreWhenSchema)` to create a new message.
 */
export const Schemas_IgnoreWhenSchema: GenMessage<
  Schemas_IgnoreWhen,
  { jsonType: Schemas_IgnoreWhenJson; validType: Schemas_IgnoreWhenValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 18, 0);

/**
 * @generated from message cerbos.policy.v1.Schemas.Schema
 */
export type Schemas_Schema = Message<"cerbos.policy.v1.Schemas.Schema"> & {
  /**
   * @generated from field: string ref = 1;
   */
  ref: string;

  /**
   * @generated from field: cerbos.policy.v1.Schemas.IgnoreWhen ignore_when = 2;
   */
  ignoreWhen?: Schemas_IgnoreWhen;
};

/**
 * @generated from message cerbos.policy.v1.Schemas.Schema
 */
export type Schemas_SchemaJson = {
  /**
   * @generated from field: string ref = 1;
   */
  ref?: string;

  /**
   * @generated from field: cerbos.policy.v1.Schemas.IgnoreWhen ignore_when = 2;
   */
  ignoreWhen?: Schemas_IgnoreWhenJson;
};

/**
 * @generated from message cerbos.policy.v1.Schemas.Schema
 */
export type Schemas_SchemaValid = Message<"cerbos.policy.v1.Schemas.Schema"> & {
  /**
   * @generated from field: string ref = 1;
   */
  ref: string;

  /**
   * @generated from field: cerbos.policy.v1.Schemas.IgnoreWhen ignore_when = 2;
   */
  ignoreWhen?: Schemas_IgnoreWhenValid;
};

/**
 * Describes the message cerbos.policy.v1.Schemas.Schema.
 * Use `create(Schemas_SchemaSchema)` to create a new message.
 */
export const Schemas_SchemaSchema: GenMessage<
  Schemas_Schema,
  { jsonType: Schemas_SchemaJson; validType: Schemas_SchemaValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_policy_v1_policy, 18, 1);

/**
 * @generated from enum cerbos.policy.v1.ScopePermissions
 */
export enum ScopePermissions {
  /**
   * @generated from enum value: SCOPE_PERMISSIONS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: SCOPE_PERMISSIONS_OVERRIDE_PARENT = 1;
   */
  OVERRIDE_PARENT = 1,

  /**
   * @generated from enum value: SCOPE_PERMISSIONS_REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS = 2;
   */
  REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS = 2,
}

/**
 * @generated from enum cerbos.policy.v1.ScopePermissions
 */
export type ScopePermissionsJson =
  | "SCOPE_PERMISSIONS_UNSPECIFIED"
  | "SCOPE_PERMISSIONS_OVERRIDE_PARENT"
  | "SCOPE_PERMISSIONS_REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS";

/**
 * Describes the enum cerbos.policy.v1.ScopePermissions.
 */
export const ScopePermissionsSchema: GenEnum<
  ScopePermissions,
  ScopePermissionsJson
> = /*@__PURE__*/ enumDesc(file_cerbos_policy_v1_policy, 0);
