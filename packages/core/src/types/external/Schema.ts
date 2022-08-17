import type { SchemaDefinition } from "./SchemaDefinition";

/**
 * A JSON schema used to validate principal or resource attributes.
 *
 * @public
 */
export interface Schema {
  /**
   * Unique ID for the schema, used to reference the schema from policies and from other schemas.
   */
  id: string;

  /**
   * Definition of the schema.
   */
  definition: SchemaDefinition;
}
