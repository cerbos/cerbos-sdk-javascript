import type { AuxData } from "./AuxData";
import type { Principal } from "./Principal";
import type { ResourceQuery } from "./ResourceQuery";

/**
 * Common fields for inputs to {@link @cerbos/core#Client.planResources}.
 *
 * @public
 */
export interface PlanResourcesRequestBase {
  /**
   * The principal for whom to plan.
   */
  principal: Principal;

  /**
   * Partial details of the resources for which to plan.
   */
  resource: ResourceQuery;

  /**
   * Auxiliary data.
   *
   * @defaultValue `{}`
   */
  auxData?: AuxData | undefined;

  /**
   * Include {@link PlanResourcesMetadata | additional metadata} in the plan?
   *
   * @defaultValue `false`
   */
  includeMetadata?: boolean | undefined;

  /**
   * The identifier for tracing the request.
   *
   * @defaultValue A randomly-generated UUID.
   */
  requestId?: string | undefined;
}
