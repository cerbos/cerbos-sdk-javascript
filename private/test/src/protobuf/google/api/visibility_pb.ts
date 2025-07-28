// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated from file google/api/visibility.proto (package google.api, syntax proto3)
/* eslint-disable */

import type {
  GenExtension,
  GenFile,
  GenMessage,
} from "@bufbuild/protobuf/codegenv2";
import { extDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import type { ServiceOptions } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_descriptor } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/api/visibility.proto.
 */
export const file_google_api_visibility: GenFile =
  /*@__PURE__*/
  fileDesc(
    "Chtnb29nbGUvYXBpL3Zpc2liaWxpdHkucHJvdG8SCmdvb2dsZS5hcGkiNwoOVmlzaWJpbGl0eVJ1bGUSEAoIc2VsZWN0b3IYASABKAkSEwoLcmVzdHJpY3Rpb24YAiABKAk6ZQoOYXBpX3Zpc2liaWxpdHkSHy5nb29nbGUucHJvdG9idWYuU2VydmljZU9wdGlvbnMYr8q8IiABKAsyGi5nb29nbGUuYXBpLlZpc2liaWxpdHlSdWxlUg1hcGlWaXNpYmlsaXR5QmsKDmNvbS5nb29nbGUuYXBpQg9WaXNpYmlsaXR5UHJvdG9QAVo/Z29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hcGkvdmlzaWJpbGl0eTt2aXNpYmlsaXR5ogIER0FQSWIGcHJvdG8z",
    [file_google_protobuf_descriptor],
  );

/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 *
 * @generated from message google.api.VisibilityRule
 */
export type VisibilityRule = Message<"google.api.VisibilityRule"> & {
  /**
   * Selects methods, messages, fields, enums, etc. to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   *
   * @generated from field: string selector = 1;
   */
  selector: string;

  /**
   * A comma-separated list of visibility labels that apply to the `selector`.
   * Any of the listed labels can be used to grant the visibility.
   *
   * If a rule has multiple labels, removing one of the labels but not all of
   * them can break clients.
   *
   * Example:
   *
   *     visibility:
   *       rules:
   *       - selector: google.calendar.Calendar.EnhancedSearch
   *         restriction: INTERNAL, PREVIEW
   *
   * Removing INTERNAL from this restriction will break clients that rely on
   * this method and only had access to it through INTERNAL.
   *
   * @generated from field: string restriction = 2;
   */
  restriction: string;
};

export type VisibilityRuleValid = VisibilityRule;

/**
 * Describes the message google.api.VisibilityRule.
 * Use `create(VisibilityRuleSchema)` to create a new message.
 */
export const VisibilityRuleSchema: GenMessage<
  VisibilityRule,
  { validType: VisibilityRuleValid }
> = /*@__PURE__*/ messageDesc(file_google_api_visibility, 0);

/**
 * See `VisibilityRule`.
 *
 * @generated from extension: google.api.VisibilityRule api_visibility = 72295727;
 */
export const api_visibility: GenExtension<ServiceOptions, VisibilityRule> =
  /*@__PURE__*/
  extDesc(file_google_api_visibility, 0);
