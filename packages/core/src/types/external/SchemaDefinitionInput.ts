import type { SchemaDefinition } from "./SchemaDefinition";

/**
 * Definition of a JSON schema used to validate principal or resource attributes.
 *
 * @public
 */
export type SchemaDefinitionInput =
  | string
  | Uint8Array
  | Record<string, unknown>
  | SchemaDefinition;
