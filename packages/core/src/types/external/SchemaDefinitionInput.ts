import type { SchemaDefinition } from "./SchemaDefinition.js";

/**
 * Definition of a JSON schema used to validate principal or resource attributes.
 */
export type SchemaDefinitionInput =
  | string
  | Uint8Array
  | Record<string, unknown>
  | SchemaDefinition;
