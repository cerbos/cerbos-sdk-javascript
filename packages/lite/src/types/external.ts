import type { JWT, Value } from "@cerbos/core";

/**
 * The decoded payload of a JWT, containing the claims.
 *
 * @public
 */
export type DecodedJWTPayload = Record<string, Value>;

/**
 * A function to verify and decode a JWT, returning its payload.
 *
 * @example
 * Using {@link https://www.npmjs.com/package/jose | jose}:
 *
 * ```typescript
 * import type { DecodeJWTPayload, DecodedJWTPayload } from "@cerbos/lite";
 * import { JWTVerifyGetKey, createRemoteJWKSet, jwtVerify } from "jose";
 *
 * interface KeySet {
 *   issuer: string;
 *   jwks: JWTVerifyGetKey;
 * }
 *
 * const keySets: Record<string, KeySet> = {
 *   auth0: {
 *     issuer: "https://example.auth0.com/",
 *     jwks: createRemoteJWKSet(
 *       new URL("https://example.auth0.com/.well-known/jwks.json")
 *     ),
 *   },
 *   okta: {
 *     issuer: "https://example.okta.com/oauth2/default",
 *     jwks: createRemoteJWKSet(
 *       new URL("https://example.okta.com/oauth2/default/v1/keys")
 *     ),
 *   },
 * };
 *
 * const decodeJWTPayload: DecodeJWTPayload = async ({ token, keySetId }) => {
 *   if (!keySetId) {
 *     throw new Error("Missing key set ID");
 *   }
 *
 *   const keySet = keySets[keySetId];
 *
 *   if (!keySet) {
 *     throw new Error(`Unknown key set ID "${keySetId}"`);
 *   }
 *
 *   const { issuer, jwks } = keySet;
 *
 *   const { payload } = await jwtVerify(token, jwks, {
 *     issuer,
 *     audience: "https://example.com/",
 *   });
 *
 *   return payload as DecodedJWTPayload;
 * };
 * ```
 *
 * @public
 */
export type DecodeJWTPayload = (
  jwt: JWT,
) => DecodedJWTPayload | Promise<DecodedJWTPayload>;
