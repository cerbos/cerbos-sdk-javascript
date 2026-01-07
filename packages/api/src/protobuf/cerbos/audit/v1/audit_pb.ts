// Copyright 2021-2025 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

// @generated from file cerbos/audit/v1/audit.proto (package cerbos.audit.v1, syntax proto3)
/* eslint-disable */

import type {
  GenEnum,
  GenFile,
  GenMessage,
} from "@bufbuild/protobuf/codegenv2";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import type {
  CheckInput,
  CheckInputJson,
  CheckInputValid,
  CheckOutput,
  CheckOutputJson,
  CheckOutputValid,
  PlanResourcesInput,
  PlanResourcesInputJson,
  PlanResourcesInputValid,
  PlanResourcesOutput,
  PlanResourcesOutputJson,
  PlanResourcesOutputValid,
} from "../../engine/v1/engine_pb.js";
import { file_cerbos_engine_v1_engine } from "../../engine/v1/engine_pb.js";
import type {
  SourceAttributes,
  SourceAttributesJson,
} from "../../policy/v1/policy_pb.js";
import { file_cerbos_policy_v1_policy } from "../../policy/v1/policy_pb.js";
import type { Timestamp, TimestampJson } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cerbos/audit/v1/audit.proto.
 */
export const file_cerbos_audit_v1_audit: GenFile =
  /*@__PURE__*/
  fileDesc(
    "ChtjZXJib3MvYXVkaXQvdjEvYXVkaXQucHJvdG8SD2NlcmJvcy5hdWRpdC52MSLyAgoOQWNjZXNzTG9nRW50cnkSDwoHY2FsbF9pZBgBIAEoCRItCgl0aW1lc3RhbXAYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEiMKBHBlZXIYAyABKAsyFS5jZXJib3MuYXVkaXQudjEuUGVlchI/CghtZXRhZGF0YRgEIAMoCzItLmNlcmJvcy5hdWRpdC52MS5BY2Nlc3NMb2dFbnRyeS5NZXRhZGF0YUVudHJ5Eg4KBm1ldGhvZBgFIAEoCRITCgtzdGF0dXNfY29kZRgGIAEoDRIRCglvdmVyc2l6ZWQYByABKAgSNAoNcG9saWN5X3NvdXJjZRgIIAEoCzIdLmNlcmJvcy5hdWRpdC52MS5Qb2xpY3lTb3VyY2UaTAoNTWV0YWRhdGFFbnRyeRILCgNrZXkYASABKAkSKgoFdmFsdWUYAiABKAsyGy5jZXJib3MuYXVkaXQudjEuTWV0YVZhbHVlczoCOAEiqgcKEERlY2lzaW9uTG9nRW50cnkSDwoHY2FsbF9pZBgBIAEoCRItCgl0aW1lc3RhbXAYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEiMKBHBlZXIYAyABKAsyFS5jZXJib3MuYXVkaXQudjEuUGVlchIwCgZpbnB1dHMYBCADKAsyHC5jZXJib3MuZW5naW5lLnYxLkNoZWNrSW5wdXRCAhgBEjIKB291dHB1dHMYBSADKAsyHS5jZXJib3MuZW5naW5lLnYxLkNoZWNrT3V0cHV0QgIYARIRCgVlcnJvchgGIAEoCUICGAESSwoPY2hlY2tfcmVzb3VyY2VzGAcgASgLMjAuY2VyYm9zLmF1ZGl0LnYxLkRlY2lzaW9uTG9nRW50cnkuQ2hlY2tSZXNvdXJjZXNIABJJCg5wbGFuX3Jlc291cmNlcxgIIAEoCzIvLmNlcmJvcy5hdWRpdC52MS5EZWNpc2lvbkxvZ0VudHJ5LlBsYW5SZXNvdXJjZXNIABJBCghtZXRhZGF0YRgPIAMoCzIvLmNlcmJvcy5hdWRpdC52MS5EZWNpc2lvbkxvZ0VudHJ5Lk1ldGFkYXRhRW50cnkSMAoLYXVkaXRfdHJhaWwYECABKAsyGy5jZXJib3MuYXVkaXQudjEuQXVkaXRUcmFpbBIRCglvdmVyc2l6ZWQYESABKAgSNAoNcG9saWN5X3NvdXJjZRgSIAEoCzIdLmNlcmJvcy5hdWRpdC52MS5Qb2xpY3lTb3VyY2UafQoOQ2hlY2tSZXNvdXJjZXMSLAoGaW5wdXRzGAEgAygLMhwuY2VyYm9zLmVuZ2luZS52MS5DaGVja0lucHV0Ei4KB291dHB1dHMYAiADKAsyHS5jZXJib3MuZW5naW5lLnYxLkNoZWNrT3V0cHV0Eg0KBWVycm9yGAMgASgJGooBCg1QbGFuUmVzb3VyY2VzEjMKBWlucHV0GAEgASgLMiQuY2VyYm9zLmVuZ2luZS52MS5QbGFuUmVzb3VyY2VzSW5wdXQSNQoGb3V0cHV0GAIgASgLMiUuY2VyYm9zLmVuZ2luZS52MS5QbGFuUmVzb3VyY2VzT3V0cHV0Eg0KBWVycm9yGAMgASgJGkwKDU1ldGFkYXRhRW50cnkSCwoDa2V5GAEgASgJEioKBXZhbHVlGAIgASgLMhsuY2VyYm9zLmF1ZGl0LnYxLk1ldGFWYWx1ZXM6AjgBQggKBm1ldGhvZCIcCgpNZXRhVmFsdWVzEg4KBnZhbHVlcxgBIAMoCSJVCgRQZWVyEg8KB2FkZHJlc3MYASABKAkSEQoJYXV0aF9pbmZvGAIgASgJEhIKCnVzZXJfYWdlbnQYAyABKAkSFQoNZm9yd2FyZGVkX2ZvchgEIAEoCSK6AQoKQXVkaXRUcmFpbBJOChJlZmZlY3RpdmVfcG9saWNpZXMYASADKAsyMi5jZXJib3MuYXVkaXQudjEuQXVkaXRUcmFpbC5FZmZlY3RpdmVQb2xpY2llc0VudHJ5GlwKFkVmZmVjdGl2ZVBvbGljaWVzRW50cnkSCwoDa2V5GAEgASgJEjEKBXZhbHVlGAIgASgLMiIuY2VyYm9zLnBvbGljeS52MS5Tb3VyY2VBdHRyaWJ1dGVzOgI4ASKwCAoMUG9saWN5U291cmNlEjIKBGJsb2IYASABKAsyIi5jZXJib3MuYXVkaXQudjEuUG9saWN5U291cmNlLkJsb2JIABI6CghkYXRhYmFzZRgCIAEoCzImLmNlcmJvcy5hdWRpdC52MS5Qb2xpY3lTb3VyY2UuRGF0YWJhc2VIABIyCgRkaXNrGAMgASgLMiIuY2VyYm9zLmF1ZGl0LnYxLlBvbGljeVNvdXJjZS5EaXNrSAASMAoDZ2l0GAQgASgLMiEuY2VyYm9zLmF1ZGl0LnYxLlBvbGljeVNvdXJjZS5HaXRIABIwCgNodWIYBSABKAsyIS5jZXJib3MuYXVkaXQudjEuUG9saWN5U291cmNlLkh1YkgAEkEKDGVtYmVkZGVkX3BkcBgGIAEoCzIpLmNlcmJvcy5hdWRpdC52MS5Qb2xpY3lTb3VyY2UuRW1iZWRkZWRQRFBIABoqCgRCbG9iEhIKCmJ1Y2tldF91cmwYASABKAkSDgoGcHJlZml4GAIgASgJGqYBCghEYXRhYmFzZRI9CgZkcml2ZXIYASABKA4yLS5jZXJib3MuYXVkaXQudjEuUG9saWN5U291cmNlLkRhdGFiYXNlLkRyaXZlciJbCgZEcml2ZXISFgoSRFJJVkVSX1VOU1BFQ0lGSUVEEAASEAoMRFJJVkVSX01ZU1FMEAESEwoPRFJJVkVSX1BPU1RHUkVTEAISEgoORFJJVkVSX1NRTElURTMQAxoZCgREaXNrEhEKCWRpcmVjdG9yeRgBIAEoCRpdCgtFbWJlZGRlZFBEUBILCgN1cmwYASABKAkSEwoLY29tbWl0X2hhc2gYAiABKAkSLAoIYnVpbHRfYXQYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wGkMKA0dpdBIWCg5yZXBvc2l0b3J5X3VybBgBIAEoCRIOCgZicmFuY2gYAiABKAkSFAoMc3ViZGlyZWN0b3J5GAMgASgJGrYCCgNIdWISDwoFbGFiZWwYASABKAlIABIXCg1kZXBsb3ltZW50X2lkGAIgASgJSAASFwoNcGxheWdyb3VuZF9pZBgDIAEoCUgAEkUKDGxvY2FsX2J1bmRsZRgEIAEoCzItLmNlcmJvcy5hdWRpdC52MS5Qb2xpY3lTb3VyY2UuSHViLkxvY2FsQnVuZGxlSAASSwoPZW1iZWRkZWRfYnVuZGxlGAUgASgLMjAuY2VyYm9zLmF1ZGl0LnYxLlBvbGljeVNvdXJjZS5IdWIuRW1iZWRkZWRCdW5kbGVIABoxCg5FbWJlZGRlZEJ1bmRsZRIPCgdydWxlX2lkGAEgASgJEg4KBnNjb3BlcxgCIAMoCRobCgtMb2NhbEJ1bmRsZRIMCgRwYXRoGAEgASgJQggKBnNvdXJjZUIICgZzb3VyY2VCawoXZGV2LmNlcmJvcy5hcGkudjEuYXVkaXRaOmdpdGh1Yi5jb20vY2VyYm9zL2NlcmJvcy9hcGkvZ2VucGIvY2VyYm9zL2F1ZGl0L3YxO2F1ZGl0djGqAhNDZXJib3MuQXBpLlYxLkF1ZGl0YgZwcm90bzM",
    [
      file_cerbos_engine_v1_engine,
      file_cerbos_policy_v1_policy,
      file_google_protobuf_timestamp,
    ],
  );

/**
 * @generated from message cerbos.audit.v1.AccessLogEntry
 */
export type AccessLogEntry = Message<"cerbos.audit.v1.AccessLogEntry"> & {
  /**
   * @generated from field: string call_id = 1;
   */
  callId: string;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 2;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: cerbos.audit.v1.Peer peer = 3;
   */
  peer?: Peer;

  /**
   * @generated from field: map<string, cerbos.audit.v1.MetaValues> metadata = 4;
   */
  metadata: { [key: string]: MetaValues };

  /**
   * @generated from field: string method = 5;
   */
  method: string;

  /**
   * @generated from field: uint32 status_code = 6;
   */
  statusCode: number;

  /**
   * @generated from field: bool oversized = 7;
   */
  oversized: boolean;

  /**
   * @generated from field: cerbos.audit.v1.PolicySource policy_source = 8;
   */
  policySource?: PolicySource;
};

/**
 * @generated from message cerbos.audit.v1.AccessLogEntry
 */
export type AccessLogEntryJson = {
  /**
   * @generated from field: string call_id = 1;
   */
  callId?: string;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 2;
   */
  timestamp?: TimestampJson;

  /**
   * @generated from field: cerbos.audit.v1.Peer peer = 3;
   */
  peer?: PeerJson;

  /**
   * @generated from field: map<string, cerbos.audit.v1.MetaValues> metadata = 4;
   */
  metadata?: { [key: string]: MetaValuesJson };

  /**
   * @generated from field: string method = 5;
   */
  method?: string;

  /**
   * @generated from field: uint32 status_code = 6;
   */
  statusCode?: number;

  /**
   * @generated from field: bool oversized = 7;
   */
  oversized?: boolean;

  /**
   * @generated from field: cerbos.audit.v1.PolicySource policy_source = 8;
   */
  policySource?: PolicySourceJson;
};

export type AccessLogEntryValid = AccessLogEntry;

/**
 * Describes the message cerbos.audit.v1.AccessLogEntry.
 * Use `create(AccessLogEntrySchema)` to create a new message.
 */
export const AccessLogEntrySchema: GenMessage<
  AccessLogEntry,
  { jsonType: AccessLogEntryJson; validType: AccessLogEntryValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 0);

/**
 * @generated from message cerbos.audit.v1.DecisionLogEntry
 */
export type DecisionLogEntry = Message<"cerbos.audit.v1.DecisionLogEntry"> & {
  /**
   * @generated from field: string call_id = 1;
   */
  callId: string;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 2;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: cerbos.audit.v1.Peer peer = 3;
   */
  peer?: Peer;

  /**
   * Deprecated. Use method.check_resources.inputs instead.
   *
   * @generated from field: repeated cerbos.engine.v1.CheckInput inputs = 4 [deprecated = true];
   * @deprecated
   */
  inputs: CheckInput[];

  /**
   * Deprecated. Use method.check_resources.outputs instead.
   *
   * @generated from field: repeated cerbos.engine.v1.CheckOutput outputs = 5 [deprecated = true];
   * @deprecated
   */
  outputs: CheckOutput[];

  /**
   * Deprecated. Use method.check_resources.error instead.
   *
   * @generated from field: string error = 6 [deprecated = true];
   * @deprecated
   */
  error: string;

  /**
   * @generated from oneof cerbos.audit.v1.DecisionLogEntry.method
   */
  method:
    | {
        /**
         * @generated from field: cerbos.audit.v1.DecisionLogEntry.CheckResources check_resources = 7;
         */
        value: DecisionLogEntry_CheckResources;
        case: "checkResources";
      }
    | {
        /**
         * @generated from field: cerbos.audit.v1.DecisionLogEntry.PlanResources plan_resources = 8;
         */
        value: DecisionLogEntry_PlanResources;
        case: "planResources";
      }
    | { case: undefined; value?: undefined };

  /**
   * @generated from field: map<string, cerbos.audit.v1.MetaValues> metadata = 15;
   */
  metadata: { [key: string]: MetaValues };

  /**
   * @generated from field: cerbos.audit.v1.AuditTrail audit_trail = 16;
   */
  auditTrail?: AuditTrail;

  /**
   * @generated from field: bool oversized = 17;
   */
  oversized: boolean;

  /**
   * @generated from field: cerbos.audit.v1.PolicySource policy_source = 18;
   */
  policySource?: PolicySource;
};

/**
 * @generated from message cerbos.audit.v1.DecisionLogEntry
 */
export type DecisionLogEntryJson = {
  /**
   * @generated from field: string call_id = 1;
   */
  callId?: string;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 2;
   */
  timestamp?: TimestampJson;

  /**
   * @generated from field: cerbos.audit.v1.Peer peer = 3;
   */
  peer?: PeerJson;

  /**
   * Deprecated. Use method.check_resources.inputs instead.
   *
   * @generated from field: repeated cerbos.engine.v1.CheckInput inputs = 4 [deprecated = true];
   * @deprecated
   */
  inputs?: CheckInputJson[];

  /**
   * Deprecated. Use method.check_resources.outputs instead.
   *
   * @generated from field: repeated cerbos.engine.v1.CheckOutput outputs = 5 [deprecated = true];
   * @deprecated
   */
  outputs?: CheckOutputJson[];

  /**
   * Deprecated. Use method.check_resources.error instead.
   *
   * @generated from field: string error = 6 [deprecated = true];
   * @deprecated
   */
  error?: string;

  /**
   * @generated from field: cerbos.audit.v1.DecisionLogEntry.CheckResources check_resources = 7;
   */
  checkResources?: DecisionLogEntry_CheckResourcesJson;

  /**
   * @generated from field: cerbos.audit.v1.DecisionLogEntry.PlanResources plan_resources = 8;
   */
  planResources?: DecisionLogEntry_PlanResourcesJson;

  /**
   * @generated from field: map<string, cerbos.audit.v1.MetaValues> metadata = 15;
   */
  metadata?: { [key: string]: MetaValuesJson };

  /**
   * @generated from field: cerbos.audit.v1.AuditTrail audit_trail = 16;
   */
  auditTrail?: AuditTrailJson;

  /**
   * @generated from field: bool oversized = 17;
   */
  oversized?: boolean;

  /**
   * @generated from field: cerbos.audit.v1.PolicySource policy_source = 18;
   */
  policySource?: PolicySourceJson;
};

/**
 * @generated from message cerbos.audit.v1.DecisionLogEntry
 */
export type DecisionLogEntryValid =
  Message<"cerbos.audit.v1.DecisionLogEntry"> & {
    /**
     * @generated from field: string call_id = 1;
     */
    callId: string;

    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 2;
     */
    timestamp?: Timestamp;

    /**
     * @generated from field: cerbos.audit.v1.Peer peer = 3;
     */
    peer?: PeerValid;

    /**
     * Deprecated. Use method.check_resources.inputs instead.
     *
     * @generated from field: repeated cerbos.engine.v1.CheckInput inputs = 4 [deprecated = true];
     * @deprecated
     */
    inputs: CheckInputValid[];

    /**
     * Deprecated. Use method.check_resources.outputs instead.
     *
     * @generated from field: repeated cerbos.engine.v1.CheckOutput outputs = 5 [deprecated = true];
     * @deprecated
     */
    outputs: CheckOutputValid[];

    /**
     * Deprecated. Use method.check_resources.error instead.
     *
     * @generated from field: string error = 6 [deprecated = true];
     * @deprecated
     */
    error: string;

    /**
     * @generated from oneof cerbos.audit.v1.DecisionLogEntry.method
     */
    method:
      | {
          /**
           * @generated from field: cerbos.audit.v1.DecisionLogEntry.CheckResources check_resources = 7;
           */
          value: DecisionLogEntry_CheckResourcesValid;
          case: "checkResources";
        }
      | {
          /**
           * @generated from field: cerbos.audit.v1.DecisionLogEntry.PlanResources plan_resources = 8;
           */
          value: DecisionLogEntry_PlanResourcesValid;
          case: "planResources";
        }
      | { case: undefined; value?: undefined };

    /**
     * @generated from field: map<string, cerbos.audit.v1.MetaValues> metadata = 15;
     */
    metadata: { [key: string]: MetaValuesValid };

    /**
     * @generated from field: cerbos.audit.v1.AuditTrail audit_trail = 16;
     */
    auditTrail?: AuditTrailValid;

    /**
     * @generated from field: bool oversized = 17;
     */
    oversized: boolean;

    /**
     * @generated from field: cerbos.audit.v1.PolicySource policy_source = 18;
     */
    policySource?: PolicySourceValid;
  };

/**
 * Describes the message cerbos.audit.v1.DecisionLogEntry.
 * Use `create(DecisionLogEntrySchema)` to create a new message.
 */
export const DecisionLogEntrySchema: GenMessage<
  DecisionLogEntry,
  { jsonType: DecisionLogEntryJson; validType: DecisionLogEntryValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 1);

/**
 * @generated from message cerbos.audit.v1.DecisionLogEntry.CheckResources
 */
export type DecisionLogEntry_CheckResources =
  Message<"cerbos.audit.v1.DecisionLogEntry.CheckResources"> & {
    /**
     * @generated from field: repeated cerbos.engine.v1.CheckInput inputs = 1;
     */
    inputs: CheckInput[];

    /**
     * @generated from field: repeated cerbos.engine.v1.CheckOutput outputs = 2;
     */
    outputs: CheckOutput[];

    /**
     * @generated from field: string error = 3;
     */
    error: string;
  };

/**
 * @generated from message cerbos.audit.v1.DecisionLogEntry.CheckResources
 */
export type DecisionLogEntry_CheckResourcesJson = {
  /**
   * @generated from field: repeated cerbos.engine.v1.CheckInput inputs = 1;
   */
  inputs?: CheckInputJson[];

  /**
   * @generated from field: repeated cerbos.engine.v1.CheckOutput outputs = 2;
   */
  outputs?: CheckOutputJson[];

  /**
   * @generated from field: string error = 3;
   */
  error?: string;
};

/**
 * @generated from message cerbos.audit.v1.DecisionLogEntry.CheckResources
 */
export type DecisionLogEntry_CheckResourcesValid =
  Message<"cerbos.audit.v1.DecisionLogEntry.CheckResources"> & {
    /**
     * @generated from field: repeated cerbos.engine.v1.CheckInput inputs = 1;
     */
    inputs: CheckInputValid[];

    /**
     * @generated from field: repeated cerbos.engine.v1.CheckOutput outputs = 2;
     */
    outputs: CheckOutputValid[];

    /**
     * @generated from field: string error = 3;
     */
    error: string;
  };

/**
 * Describes the message cerbos.audit.v1.DecisionLogEntry.CheckResources.
 * Use `create(DecisionLogEntry_CheckResourcesSchema)` to create a new message.
 */
export const DecisionLogEntry_CheckResourcesSchema: GenMessage<
  DecisionLogEntry_CheckResources,
  {
    jsonType: DecisionLogEntry_CheckResourcesJson;
    validType: DecisionLogEntry_CheckResourcesValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 1, 0);

/**
 * @generated from message cerbos.audit.v1.DecisionLogEntry.PlanResources
 */
export type DecisionLogEntry_PlanResources =
  Message<"cerbos.audit.v1.DecisionLogEntry.PlanResources"> & {
    /**
     * @generated from field: cerbos.engine.v1.PlanResourcesInput input = 1;
     */
    input?: PlanResourcesInput;

    /**
     * @generated from field: cerbos.engine.v1.PlanResourcesOutput output = 2;
     */
    output?: PlanResourcesOutput;

    /**
     * @generated from field: string error = 3;
     */
    error: string;
  };

/**
 * @generated from message cerbos.audit.v1.DecisionLogEntry.PlanResources
 */
export type DecisionLogEntry_PlanResourcesJson = {
  /**
   * @generated from field: cerbos.engine.v1.PlanResourcesInput input = 1;
   */
  input?: PlanResourcesInputJson;

  /**
   * @generated from field: cerbos.engine.v1.PlanResourcesOutput output = 2;
   */
  output?: PlanResourcesOutputJson;

  /**
   * @generated from field: string error = 3;
   */
  error?: string;
};

/**
 * @generated from message cerbos.audit.v1.DecisionLogEntry.PlanResources
 */
export type DecisionLogEntry_PlanResourcesValid =
  Message<"cerbos.audit.v1.DecisionLogEntry.PlanResources"> & {
    /**
     * @generated from field: cerbos.engine.v1.PlanResourcesInput input = 1;
     */
    input?: PlanResourcesInputValid;

    /**
     * @generated from field: cerbos.engine.v1.PlanResourcesOutput output = 2;
     */
    output?: PlanResourcesOutputValid;

    /**
     * @generated from field: string error = 3;
     */
    error: string;
  };

/**
 * Describes the message cerbos.audit.v1.DecisionLogEntry.PlanResources.
 * Use `create(DecisionLogEntry_PlanResourcesSchema)` to create a new message.
 */
export const DecisionLogEntry_PlanResourcesSchema: GenMessage<
  DecisionLogEntry_PlanResources,
  {
    jsonType: DecisionLogEntry_PlanResourcesJson;
    validType: DecisionLogEntry_PlanResourcesValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 1, 1);

/**
 * @generated from message cerbos.audit.v1.MetaValues
 */
export type MetaValues = Message<"cerbos.audit.v1.MetaValues"> & {
  /**
   * @generated from field: repeated string values = 1;
   */
  values: string[];
};

/**
 * @generated from message cerbos.audit.v1.MetaValues
 */
export type MetaValuesJson = {
  /**
   * @generated from field: repeated string values = 1;
   */
  values?: string[];
};

export type MetaValuesValid = MetaValues;

/**
 * Describes the message cerbos.audit.v1.MetaValues.
 * Use `create(MetaValuesSchema)` to create a new message.
 */
export const MetaValuesSchema: GenMessage<
  MetaValues,
  { jsonType: MetaValuesJson; validType: MetaValuesValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 2);

/**
 * @generated from message cerbos.audit.v1.Peer
 */
export type Peer = Message<"cerbos.audit.v1.Peer"> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * @generated from field: string auth_info = 2;
   */
  authInfo: string;

  /**
   * @generated from field: string user_agent = 3;
   */
  userAgent: string;

  /**
   * @generated from field: string forwarded_for = 4;
   */
  forwardedFor: string;
};

/**
 * @generated from message cerbos.audit.v1.Peer
 */
export type PeerJson = {
  /**
   * @generated from field: string address = 1;
   */
  address?: string;

  /**
   * @generated from field: string auth_info = 2;
   */
  authInfo?: string;

  /**
   * @generated from field: string user_agent = 3;
   */
  userAgent?: string;

  /**
   * @generated from field: string forwarded_for = 4;
   */
  forwardedFor?: string;
};

export type PeerValid = Peer;

/**
 * Describes the message cerbos.audit.v1.Peer.
 * Use `create(PeerSchema)` to create a new message.
 */
export const PeerSchema: GenMessage<
  Peer,
  { jsonType: PeerJson; validType: PeerValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 3);

/**
 * @generated from message cerbos.audit.v1.AuditTrail
 */
export type AuditTrail = Message<"cerbos.audit.v1.AuditTrail"> & {
  /**
   * @generated from field: map<string, cerbos.policy.v1.SourceAttributes> effective_policies = 1;
   */
  effectivePolicies: { [key: string]: SourceAttributes };
};

/**
 * @generated from message cerbos.audit.v1.AuditTrail
 */
export type AuditTrailJson = {
  /**
   * @generated from field: map<string, cerbos.policy.v1.SourceAttributes> effective_policies = 1;
   */
  effectivePolicies?: { [key: string]: SourceAttributesJson };
};

export type AuditTrailValid = AuditTrail;

/**
 * Describes the message cerbos.audit.v1.AuditTrail.
 * Use `create(AuditTrailSchema)` to create a new message.
 */
export const AuditTrailSchema: GenMessage<
  AuditTrail,
  { jsonType: AuditTrailJson; validType: AuditTrailValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 4);

/**
 * @generated from message cerbos.audit.v1.PolicySource
 */
export type PolicySource = Message<"cerbos.audit.v1.PolicySource"> & {
  /**
   * @generated from oneof cerbos.audit.v1.PolicySource.source
   */
  source:
    | {
        /**
         * @generated from field: cerbos.audit.v1.PolicySource.Blob blob = 1;
         */
        value: PolicySource_Blob;
        case: "blob";
      }
    | {
        /**
         * @generated from field: cerbos.audit.v1.PolicySource.Database database = 2;
         */
        value: PolicySource_Database;
        case: "database";
      }
    | {
        /**
         * @generated from field: cerbos.audit.v1.PolicySource.Disk disk = 3;
         */
        value: PolicySource_Disk;
        case: "disk";
      }
    | {
        /**
         * @generated from field: cerbos.audit.v1.PolicySource.Git git = 4;
         */
        value: PolicySource_Git;
        case: "git";
      }
    | {
        /**
         * @generated from field: cerbos.audit.v1.PolicySource.Hub hub = 5;
         */
        value: PolicySource_Hub;
        case: "hub";
      }
    | {
        /**
         * @generated from field: cerbos.audit.v1.PolicySource.EmbeddedPDP embedded_pdp = 6;
         */
        value: PolicySource_EmbeddedPDP;
        case: "embeddedPdp";
      }
    | { case: undefined; value?: undefined };
};

/**
 * @generated from message cerbos.audit.v1.PolicySource
 */
export type PolicySourceJson = {
  /**
   * @generated from field: cerbos.audit.v1.PolicySource.Blob blob = 1;
   */
  blob?: PolicySource_BlobJson;

  /**
   * @generated from field: cerbos.audit.v1.PolicySource.Database database = 2;
   */
  database?: PolicySource_DatabaseJson;

  /**
   * @generated from field: cerbos.audit.v1.PolicySource.Disk disk = 3;
   */
  disk?: PolicySource_DiskJson;

  /**
   * @generated from field: cerbos.audit.v1.PolicySource.Git git = 4;
   */
  git?: PolicySource_GitJson;

  /**
   * @generated from field: cerbos.audit.v1.PolicySource.Hub hub = 5;
   */
  hub?: PolicySource_HubJson;

  /**
   * @generated from field: cerbos.audit.v1.PolicySource.EmbeddedPDP embedded_pdp = 6;
   */
  embeddedPdp?: PolicySource_EmbeddedPDPJson;
};

export type PolicySourceValid = PolicySource;

/**
 * Describes the message cerbos.audit.v1.PolicySource.
 * Use `create(PolicySourceSchema)` to create a new message.
 */
export const PolicySourceSchema: GenMessage<
  PolicySource,
  { jsonType: PolicySourceJson; validType: PolicySourceValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 5);

/**
 * @generated from message cerbos.audit.v1.PolicySource.Blob
 */
export type PolicySource_Blob = Message<"cerbos.audit.v1.PolicySource.Blob"> & {
  /**
   * @generated from field: string bucket_url = 1;
   */
  bucketUrl: string;

  /**
   * @generated from field: string prefix = 2;
   */
  prefix: string;
};

/**
 * @generated from message cerbos.audit.v1.PolicySource.Blob
 */
export type PolicySource_BlobJson = {
  /**
   * @generated from field: string bucket_url = 1;
   */
  bucketUrl?: string;

  /**
   * @generated from field: string prefix = 2;
   */
  prefix?: string;
};

export type PolicySource_BlobValid = PolicySource_Blob;

/**
 * Describes the message cerbos.audit.v1.PolicySource.Blob.
 * Use `create(PolicySource_BlobSchema)` to create a new message.
 */
export const PolicySource_BlobSchema: GenMessage<
  PolicySource_Blob,
  { jsonType: PolicySource_BlobJson; validType: PolicySource_BlobValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 5, 0);

/**
 * @generated from message cerbos.audit.v1.PolicySource.Database
 */
export type PolicySource_Database =
  Message<"cerbos.audit.v1.PolicySource.Database"> & {
    /**
     * @generated from field: cerbos.audit.v1.PolicySource.Database.Driver driver = 1;
     */
    driver: PolicySource_Database_Driver;
  };

/**
 * @generated from message cerbos.audit.v1.PolicySource.Database
 */
export type PolicySource_DatabaseJson = {
  /**
   * @generated from field: cerbos.audit.v1.PolicySource.Database.Driver driver = 1;
   */
  driver?: PolicySource_Database_DriverJson;
};

export type PolicySource_DatabaseValid = PolicySource_Database;

/**
 * Describes the message cerbos.audit.v1.PolicySource.Database.
 * Use `create(PolicySource_DatabaseSchema)` to create a new message.
 */
export const PolicySource_DatabaseSchema: GenMessage<
  PolicySource_Database,
  { jsonType: PolicySource_DatabaseJson; validType: PolicySource_DatabaseValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 5, 1);

/**
 * @generated from enum cerbos.audit.v1.PolicySource.Database.Driver
 */
export enum PolicySource_Database_Driver {
  /**
   * @generated from enum value: DRIVER_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: DRIVER_MYSQL = 1;
   */
  MYSQL = 1,

  /**
   * @generated from enum value: DRIVER_POSTGRES = 2;
   */
  POSTGRES = 2,

  /**
   * @generated from enum value: DRIVER_SQLITE3 = 3;
   */
  SQLITE3 = 3,
}

/**
 * @generated from enum cerbos.audit.v1.PolicySource.Database.Driver
 */
export type PolicySource_Database_DriverJson =
  | "DRIVER_UNSPECIFIED"
  | "DRIVER_MYSQL"
  | "DRIVER_POSTGRES"
  | "DRIVER_SQLITE3";

/**
 * Describes the enum cerbos.audit.v1.PolicySource.Database.Driver.
 */
export const PolicySource_Database_DriverSchema: GenEnum<
  PolicySource_Database_Driver,
  PolicySource_Database_DriverJson
> = /*@__PURE__*/ enumDesc(file_cerbos_audit_v1_audit, 5, 1, 0);

/**
 * @generated from message cerbos.audit.v1.PolicySource.Disk
 */
export type PolicySource_Disk = Message<"cerbos.audit.v1.PolicySource.Disk"> & {
  /**
   * @generated from field: string directory = 1;
   */
  directory: string;
};

/**
 * @generated from message cerbos.audit.v1.PolicySource.Disk
 */
export type PolicySource_DiskJson = {
  /**
   * @generated from field: string directory = 1;
   */
  directory?: string;
};

export type PolicySource_DiskValid = PolicySource_Disk;

/**
 * Describes the message cerbos.audit.v1.PolicySource.Disk.
 * Use `create(PolicySource_DiskSchema)` to create a new message.
 */
export const PolicySource_DiskSchema: GenMessage<
  PolicySource_Disk,
  { jsonType: PolicySource_DiskJson; validType: PolicySource_DiskValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 5, 2);

/**
 * @generated from message cerbos.audit.v1.PolicySource.EmbeddedPDP
 */
export type PolicySource_EmbeddedPDP =
  Message<"cerbos.audit.v1.PolicySource.EmbeddedPDP"> & {
    /**
     * @generated from field: string url = 1;
     */
    url: string;

    /**
     * @generated from field: string commit_hash = 2;
     */
    commitHash: string;

    /**
     * @generated from field: google.protobuf.Timestamp built_at = 3;
     */
    builtAt?: Timestamp;
  };

/**
 * @generated from message cerbos.audit.v1.PolicySource.EmbeddedPDP
 */
export type PolicySource_EmbeddedPDPJson = {
  /**
   * @generated from field: string url = 1;
   */
  url?: string;

  /**
   * @generated from field: string commit_hash = 2;
   */
  commitHash?: string;

  /**
   * @generated from field: google.protobuf.Timestamp built_at = 3;
   */
  builtAt?: TimestampJson;
};

export type PolicySource_EmbeddedPDPValid = PolicySource_EmbeddedPDP;

/**
 * Describes the message cerbos.audit.v1.PolicySource.EmbeddedPDP.
 * Use `create(PolicySource_EmbeddedPDPSchema)` to create a new message.
 */
export const PolicySource_EmbeddedPDPSchema: GenMessage<
  PolicySource_EmbeddedPDP,
  {
    jsonType: PolicySource_EmbeddedPDPJson;
    validType: PolicySource_EmbeddedPDPValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 5, 3);

/**
 * @generated from message cerbos.audit.v1.PolicySource.Git
 */
export type PolicySource_Git = Message<"cerbos.audit.v1.PolicySource.Git"> & {
  /**
   * @generated from field: string repository_url = 1;
   */
  repositoryUrl: string;

  /**
   * @generated from field: string branch = 2;
   */
  branch: string;

  /**
   * @generated from field: string subdirectory = 3;
   */
  subdirectory: string;
};

/**
 * @generated from message cerbos.audit.v1.PolicySource.Git
 */
export type PolicySource_GitJson = {
  /**
   * @generated from field: string repository_url = 1;
   */
  repositoryUrl?: string;

  /**
   * @generated from field: string branch = 2;
   */
  branch?: string;

  /**
   * @generated from field: string subdirectory = 3;
   */
  subdirectory?: string;
};

export type PolicySource_GitValid = PolicySource_Git;

/**
 * Describes the message cerbos.audit.v1.PolicySource.Git.
 * Use `create(PolicySource_GitSchema)` to create a new message.
 */
export const PolicySource_GitSchema: GenMessage<
  PolicySource_Git,
  { jsonType: PolicySource_GitJson; validType: PolicySource_GitValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 5, 4);

/**
 * @generated from message cerbos.audit.v1.PolicySource.Hub
 */
export type PolicySource_Hub = Message<"cerbos.audit.v1.PolicySource.Hub"> & {
  /**
   * @generated from oneof cerbos.audit.v1.PolicySource.Hub.source
   */
  source:
    | {
        /**
         * @generated from field: string label = 1;
         */
        value: string;
        case: "label";
      }
    | {
        /**
         * @generated from field: string deployment_id = 2;
         */
        value: string;
        case: "deploymentId";
      }
    | {
        /**
         * @generated from field: string playground_id = 3;
         */
        value: string;
        case: "playgroundId";
      }
    | {
        /**
         * @generated from field: cerbos.audit.v1.PolicySource.Hub.LocalBundle local_bundle = 4;
         */
        value: PolicySource_Hub_LocalBundle;
        case: "localBundle";
      }
    | {
        /**
         * @generated from field: cerbos.audit.v1.PolicySource.Hub.EmbeddedBundle embedded_bundle = 5;
         */
        value: PolicySource_Hub_EmbeddedBundle;
        case: "embeddedBundle";
      }
    | { case: undefined; value?: undefined };
};

/**
 * @generated from message cerbos.audit.v1.PolicySource.Hub
 */
export type PolicySource_HubJson = {
  /**
   * @generated from field: string label = 1;
   */
  label?: string;

  /**
   * @generated from field: string deployment_id = 2;
   */
  deploymentId?: string;

  /**
   * @generated from field: string playground_id = 3;
   */
  playgroundId?: string;

  /**
   * @generated from field: cerbos.audit.v1.PolicySource.Hub.LocalBundle local_bundle = 4;
   */
  localBundle?: PolicySource_Hub_LocalBundleJson;

  /**
   * @generated from field: cerbos.audit.v1.PolicySource.Hub.EmbeddedBundle embedded_bundle = 5;
   */
  embeddedBundle?: PolicySource_Hub_EmbeddedBundleJson;
};

export type PolicySource_HubValid = PolicySource_Hub;

/**
 * Describes the message cerbos.audit.v1.PolicySource.Hub.
 * Use `create(PolicySource_HubSchema)` to create a new message.
 */
export const PolicySource_HubSchema: GenMessage<
  PolicySource_Hub,
  { jsonType: PolicySource_HubJson; validType: PolicySource_HubValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 5, 5);

/**
 * @generated from message cerbos.audit.v1.PolicySource.Hub.EmbeddedBundle
 */
export type PolicySource_Hub_EmbeddedBundle =
  Message<"cerbos.audit.v1.PolicySource.Hub.EmbeddedBundle"> & {
    /**
     * @generated from field: string rule_id = 1;
     */
    ruleId: string;

    /**
     * @generated from field: repeated string scopes = 2;
     */
    scopes: string[];
  };

/**
 * @generated from message cerbos.audit.v1.PolicySource.Hub.EmbeddedBundle
 */
export type PolicySource_Hub_EmbeddedBundleJson = {
  /**
   * @generated from field: string rule_id = 1;
   */
  ruleId?: string;

  /**
   * @generated from field: repeated string scopes = 2;
   */
  scopes?: string[];
};

export type PolicySource_Hub_EmbeddedBundleValid =
  PolicySource_Hub_EmbeddedBundle;

/**
 * Describes the message cerbos.audit.v1.PolicySource.Hub.EmbeddedBundle.
 * Use `create(PolicySource_Hub_EmbeddedBundleSchema)` to create a new message.
 */
export const PolicySource_Hub_EmbeddedBundleSchema: GenMessage<
  PolicySource_Hub_EmbeddedBundle,
  {
    jsonType: PolicySource_Hub_EmbeddedBundleJson;
    validType: PolicySource_Hub_EmbeddedBundleValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 5, 5, 0);

/**
 * @generated from message cerbos.audit.v1.PolicySource.Hub.LocalBundle
 */
export type PolicySource_Hub_LocalBundle =
  Message<"cerbos.audit.v1.PolicySource.Hub.LocalBundle"> & {
    /**
     * @generated from field: string path = 1;
     */
    path: string;
  };

/**
 * @generated from message cerbos.audit.v1.PolicySource.Hub.LocalBundle
 */
export type PolicySource_Hub_LocalBundleJson = {
  /**
   * @generated from field: string path = 1;
   */
  path?: string;
};

export type PolicySource_Hub_LocalBundleValid = PolicySource_Hub_LocalBundle;

/**
 * Describes the message cerbos.audit.v1.PolicySource.Hub.LocalBundle.
 * Use `create(PolicySource_Hub_LocalBundleSchema)` to create a new message.
 */
export const PolicySource_Hub_LocalBundleSchema: GenMessage<
  PolicySource_Hub_LocalBundle,
  {
    jsonType: PolicySource_Hub_LocalBundleJson;
    validType: PolicySource_Hub_LocalBundleValid;
  }
> = /*@__PURE__*/ messageDesc(file_cerbos_audit_v1_audit, 5, 5, 1);
