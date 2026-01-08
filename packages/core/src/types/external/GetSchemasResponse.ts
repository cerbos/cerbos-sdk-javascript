import type { Schema } from "./Schema.js";

/**
 * Fetched schemas.
 */
export interface GetSchemasResponse {
  /**
   * The schemas fetched from the policy decision point server.
   */
  schemas: Schema[];
}
