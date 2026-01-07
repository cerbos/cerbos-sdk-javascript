import type { SchemaInput } from "./SchemaInput.js";

/**
 * Input to {@link @cerbos/core#Client.addOrUpdateSchemas}.
 *
 * @public
 */
export interface AddOrUpdateSchemasRequest {
  /**
   * A set of schemas to add or update.
   */
  schemas: SchemaInput[];
}
