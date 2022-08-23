import type { JWT } from "./JWT";

/**
 * Auxiliary data sources that can be referenced in policy conditions.
 *
 * @public
 */
export interface AuxData {
  /**
   * A JSON Web Token (JWT) to use as an auxiliary data source.
   */
  jwt?: JWT;
}
