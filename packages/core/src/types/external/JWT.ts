/**
 * A JSON Web Token to use as an auxiliary data source, which will be verified against the Cerbos policy decision point (PDP) server's {@link https://docs.cerbos.dev/cerbos/latest/configuration/auxdata#_jwt | configured JSON Web Key Sets (JWKS)} unless verification is disabled on the server.
 *
 * @public
 */
export interface JWT {
  /**
   * The encoded JWT.
   */
  token: string;

  /**
   * The ID of the JWKS to be used by the PDP server to verify the JWT.
   *
   * @remarks
   * Optional if the PDP server only has one JWKS configured or verification disabled.
   */
  keySetId?: string;
}
