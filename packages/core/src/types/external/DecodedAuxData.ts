import type { Value } from "./Value.js";

/**
 * Auxiliary data after decoding JSON Web Tokens (JWTs).
 */
export type DecodedAuxData = DecodedAuxDataWithJWT | DecodedAuxDataWithJWTs;

/**
 * Auxiliary data after decoding a single JSON Web Token (JWT).
 */
export interface DecodedAuxDataWithJWT {
  /**
   * Claims read from a JSON Web Token (JWT).
   */
  jwt: Record<string, Value>;
}

/**
 * Type guard to check if an {@link DecodedAuxData} is an {@link DecodedAuxDataWithJWT}.
 */
export function decodedAuxDataHasJWT(
  auxData: DecodedAuxData,
): auxData is DecodedAuxDataWithJWT {
  return "jwt" in auxData;
}

/**
 * Auxiliary data after decoding multiple named JSON Web Tokens (JWTs).
 */
export interface DecodedAuxDataWithJWTs {
  /**
   * Claims read from named JSON Web Tokens (JWTs).
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.55.
   */
  jwts: Record<string, Record<string, Value>>;
}

/**
 * Type guard to check if an {@link DecodedAuxData} is an {@link DecodedAuxDataWithJWTs}.
 */
export function decodedAuxDataHasJWTs(
  auxData: DecodedAuxData,
): auxData is DecodedAuxDataWithJWTs {
  return "jwts" in auxData;
}
