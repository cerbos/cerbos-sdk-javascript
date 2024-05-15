import type { Value } from "./Value";

/**
 * Auxiliary data after decoding the JSON Web Token.
 *
 * @public
 */
export interface DecodedAuxData {
  /**
   * Claims read from a JSON Web Token (JWT).
   */
  jwt: Record<string, Value>;
}
