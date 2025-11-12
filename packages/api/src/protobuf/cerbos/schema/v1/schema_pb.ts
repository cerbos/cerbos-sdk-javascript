// Copyright 2021-2025 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

// @generated from file cerbos/schema/v1/schema.proto (package cerbos.schema.v1, syntax proto3)
/* eslint-disable */

import type {
  GenEnum,
  GenFile,
  GenMessage,
} from "@bufbuild/protobuf/codegenv2";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_buf_validate_validate } from "../../../buf/validate/validate_pb";
import { file_google_api_field_behavior } from "../../../google/api/field_behavior_pb";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cerbos/schema/v1/schema.proto.
 */
export const file_cerbos_schema_v1_schema: GenFile =
  /*@__PURE__*/
  fileDesc(
    "Ch1jZXJib3Mvc2NoZW1hL3YxL3NjaGVtYS5wcm90bxIQY2VyYm9zLnNjaGVtYS52MSK3AQoPVmFsaWRhdGlvbkVycm9yEgwKBHBhdGgYASABKAkSDwoHbWVzc2FnZRgCIAEoCRI4CgZzb3VyY2UYAyABKA4yKC5jZXJib3Muc2NoZW1hLnYxLlZhbGlkYXRpb25FcnJvci5Tb3VyY2UiSwoGU291cmNlEhYKElNPVVJDRV9VTlNQRUNJRklFRBAAEhQKEFNPVVJDRV9QUklOQ0lQQUwQARITCg9TT1VSQ0VfUkVTT1VSQ0UQAiK/AQoGU2NoZW1hElMKAmlkGAEgASgJQkeSQTQyIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgc2NoZW1hShAicHJpbmNpcGFsLmpzb24i4EECukgKyAEBcgUQARj/ARJgCgpkZWZpbml0aW9uGAIgASgMQkySQTwyFkpTT04gc2NoZW1hIGRlZmluaXRpb25KInsidHlwZSI6Im9iamVjdCIsICJwcm9wZXJ0aWVzIjp7fX3gQQK6SAfIAQF6AhAKQm8KGGRldi5jZXJib3MuYXBpLnYxLnNjaGVtYVo8Z2l0aHViLmNvbS9jZXJib3MvY2VyYm9zL2FwaS9nZW5wYi9jZXJib3Mvc2NoZW1hL3YxO3NjaGVtYXYxqgIUQ2VyYm9zLkFwaS5WMS5TY2hlbWFiBnByb3RvMw",
    [
      file_buf_validate_validate,
      file_google_api_field_behavior,
      file_protoc_gen_openapiv2_options_annotations,
    ],
  );

/**
 * @generated from message cerbos.schema.v1.ValidationError
 */
export type ValidationError = Message<"cerbos.schema.v1.ValidationError"> & {
  /**
   * @generated from field: string path = 1;
   */
  path: string;

  /**
   * @generated from field: string message = 2;
   */
  message: string;

  /**
   * @generated from field: cerbos.schema.v1.ValidationError.Source source = 3;
   */
  source: ValidationError_Source;
};

/**
 * @generated from message cerbos.schema.v1.ValidationError
 */
export type ValidationErrorJson = {
  /**
   * @generated from field: string path = 1;
   */
  path?: string;

  /**
   * @generated from field: string message = 2;
   */
  message?: string;

  /**
   * @generated from field: cerbos.schema.v1.ValidationError.Source source = 3;
   */
  source?: ValidationError_SourceJson;
};

export type ValidationErrorValid = ValidationError;

/**
 * Describes the message cerbos.schema.v1.ValidationError.
 * Use `create(ValidationErrorSchema)` to create a new message.
 */
export const ValidationErrorSchema: GenMessage<
  ValidationError,
  { jsonType: ValidationErrorJson; validType: ValidationErrorValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_schema_v1_schema, 0);

/**
 * @generated from enum cerbos.schema.v1.ValidationError.Source
 */
export enum ValidationError_Source {
  /**
   * @generated from enum value: SOURCE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: SOURCE_PRINCIPAL = 1;
   */
  PRINCIPAL = 1,

  /**
   * @generated from enum value: SOURCE_RESOURCE = 2;
   */
  RESOURCE = 2,
}

/**
 * @generated from enum cerbos.schema.v1.ValidationError.Source
 */
export type ValidationError_SourceJson =
  | "SOURCE_UNSPECIFIED"
  | "SOURCE_PRINCIPAL"
  | "SOURCE_RESOURCE";

/**
 * Describes the enum cerbos.schema.v1.ValidationError.Source.
 */
export const ValidationError_SourceSchema: GenEnum<
  ValidationError_Source,
  ValidationError_SourceJson
> = /*@__PURE__*/ enumDesc(file_cerbos_schema_v1_schema, 0, 0);

/**
 * @generated from message cerbos.schema.v1.Schema
 */
export type Schema = Message<"cerbos.schema.v1.Schema"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: bytes definition = 2;
   */
  definition: Uint8Array;
};

/**
 * @generated from message cerbos.schema.v1.Schema
 */
export type SchemaJson = {
  /**
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * @generated from field: bytes definition = 2;
   */
  definition?: string;
};

/**
 * @generated from message cerbos.schema.v1.Schema
 */
export type SchemaValid = Message<"cerbos.schema.v1.Schema"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: bytes definition = 2;
   */
  definition: Uint8Array;
};

/**
 * Describes the message cerbos.schema.v1.Schema.
 * Use `create(SchemaSchema)` to create a new message.
 */
export const SchemaSchema: GenMessage<
  Schema,
  { jsonType: SchemaJson; validType: SchemaValid }
> = /*@__PURE__*/ messageDesc(file_cerbos_schema_v1_schema, 1);
