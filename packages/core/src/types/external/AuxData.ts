import type { JWT } from "./JWT.js";

/**
 * Auxiliary data sources that can be referenced in policy conditions.
 */
export type AuxData = AuxDataWithoutJWT | AuxDataWithJWT | AuxDataWithJWTs;

/**
 * Auxiliary data without a JSON Web Token (JWT).
 */
export interface AuxDataWithoutJWT {
  /**
   * Allow explicitly setting `jwt` to `undefined` for backwards compatibility.
   */
  jwt?: undefined;
}

/**
 * Auxiliary data with a single JSON Web Token (JWT).
 */
export interface AuxDataWithJWT {
  /**
   * A JSON Web Token (JWT) to use as an auxiliary data source.
   */
  jwt: JWT;
}

/**
 * Type guard to check if an {@link AuxData} is an {@link AuxDataWithJWT}.
 */
export function auxDataHasJWT(auxData: AuxData): auxData is AuxDataWithJWT {
  return "jwt" in auxData && !!auxData.jwt;
}

/**
 * Auxiliary data with multiple JSON Web Tokens (JWTs).
 */
export interface AuxDataWithJWTs {
  /**
   * Named JSON Web Tokens (JWTs) to use as auxiliary data sources.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.55.
   */
  jwts: Record<string, JWT>;
}

/**
 * Type guard to check if an {@link AuxData} is an {@link AuxDataWithJWTs}.
 */
export function auxDataHasJWTs(auxData: AuxData): auxData is AuxDataWithJWTs {
  return "jwts" in auxData;
}
