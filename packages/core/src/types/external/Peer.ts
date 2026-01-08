/**
 * Details of the client who made a request to the policy decision point server.
 */
export interface Peer {
  /**
   * The remote address from which the request was sent.
   */
  address: string;

  /**
   * The type of credentials used by the client.
   */
  authInfo: string;

  /**
   * The `User-Agent` header sent by the client.
   */
  userAgent: string;

  /**
   * The `X-Forwarded-For` header sent by the client.
   */
  forwardedFor: string;
}
