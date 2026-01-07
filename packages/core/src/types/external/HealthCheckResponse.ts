import type { ServiceStatus } from "./ServiceStatus.js";

/**
 * The outcome of checking the health of a service provided by the policy decision point server.
 *
 * @public
 */
export interface HealthCheckResponse {
  /**
   * The status of the specified service.
   */
  status: ServiceStatus;
}
