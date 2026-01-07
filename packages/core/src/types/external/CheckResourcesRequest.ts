import type { AuxData } from "./AuxData.js";
import type { Principal } from "./Principal.js";
import type { ResourceCheck } from "./ResourceCheck.js";

/**
 * Input to {@link @cerbos/core#Client.checkResources}.
 *
 * @public
 */
export interface CheckResourcesRequest {
  /**
   * The principal to check.
   */
  principal: Principal;

  /**
   * The resources and actions to check.
   */
  resources: ResourceCheck[];

  /**
   * Auxiliary data.
   *
   * @defaultValue `{}`
   */
  auxData?: AuxData | undefined;

  /**
   * Include {@link CheckResourcesResultMetadata | additional metadata} in the results?
   *
   * @defaultValue `false`
   */
  includeMetadata?: boolean | undefined;

  /**
   * An identifier for tracing the request.
   *
   * @defaultValue A randomly-generated UUID.
   */
  requestId?: string | undefined;
}
