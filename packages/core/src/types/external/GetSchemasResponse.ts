import type { Schema } from "./Schema.js";

/**
 * Fetched schemas.
 *
 * @public
 */
export interface GetSchemasResponse {
  schemas: Schema[];
}
