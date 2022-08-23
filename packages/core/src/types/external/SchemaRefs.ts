import type { SchemaRef } from "./SchemaRef";

/**
 * References to schemas to be used to validate principal and resource attributes.
 *
 * @public
 */
export interface SchemaRefs {
  /**
   * Reference to a schema to be used to validate principal attributes.
   */
  principalSchema?: SchemaRef | undefined;

  /**
   * Reference to a schema to be used to validate resource attributes.
   */
  resourceSchema?: SchemaRef | undefined;
}
