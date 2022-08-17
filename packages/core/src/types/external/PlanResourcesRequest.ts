import type { AuxData } from "./AuxData";
import type { Principal } from "./Principal";
import type { ResourceQuery } from "./ResourceQuery";

/**
 * Input to {@link @cerbos/core#Client.planResources}.
 *
 * @public
 */
export interface PlanResourcesRequest {
  /**
   * The principal for whom to plan.
   */
  principal: Principal;

  /**
   * Partial details of the resources for which to plan.
   */
  resource: ResourceQuery;

  /**
   * The action for which to plan.
   */
  action: string;

  /**
   * Auxiliary data.
   *
   * @defaultValue `{}`
   */
  auxData?: AuxData;

  /**
   * Include {@link PlanResourcesMetadata | additional metadata} in the plan?
   *
   * @defaultValue `false`
   */
  includeMetadata?: boolean;

  /**
   * @defaultValue A randomly-generated UUID.
   */
  requestId?: string;
}
