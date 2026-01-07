import type { Service } from "./Service.js";

/**
 * Input to {@link @cerbos/core#Client.checkHealth}.
 *
 * @public
 */
export interface HealthCheckRequest {
  /**
   * The identifier of the service to check.
   *
   * @defaultValue `Service.CERBOS`
   */
  service?: Service | undefined;
}
