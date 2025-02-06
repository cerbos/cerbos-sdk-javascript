/**
 * The status of a service provided by the policy decision point server.
 *
 * @public
 */
export enum ServiceStatus {
  /**
   * The server is up and serving requests for the specified service.
   */
  SERVING = "SERVING",

  /**
   * The server is shutting down.
   */
  NOT_SERVING = "NOT_SERVING",

  /**
   * The service is disabled in the server configuration.
   */
  DISABLED = "DISABLED",
}
