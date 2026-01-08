import type { JWT } from "./JWT.js";

/**
 * Auxiliary data sources that can be referenced in policy conditions.
 */
export interface AuxData {
  /**
   * A JSON Web Token (JWT) to use as an auxiliary data source.
   */
  jwt?: JWT | undefined;
}
