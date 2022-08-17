import type { SchemaDefinitionInput } from "./SchemaDefinitionInput";

/**
 * A JSON schema to be used to validate principal or resource attributes.
 *
 * @public
 */
export interface SchemaInput {
  /**
   * Unique ID for the schema, to be used to reference the schema from policies and from other schemas.
   */
  id: string;

  /**
   * Definition of the schema.
   */
  definition: SchemaDefinitionInput;
}
