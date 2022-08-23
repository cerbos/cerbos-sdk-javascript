import type { AuxData } from "./AuxData";
import type { Principal } from "./Principal";
import type { ResourceCheck } from "./ResourceCheck";

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
  auxData?: AuxData;

  /**
   * Include {@link CheckResourcesResultMetadata | additional metadata} in the results?
   *
   * @defaultValue `false`
   */
  includeMetadata?: boolean;

  /**
   * An identifier for tracing the request.
   *
   * @defaultValue A randomly-generated UUID.
   */
  requestId?: string;
}
