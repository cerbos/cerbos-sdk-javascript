import type { PlanResourcesRequestBase } from "./PlanResourcesRequestBase";

/**
 * Input to {@link @cerbos/core#Client.planResources}.
 *
 * @public
 */
export interface PlanResourcesRequestWithActions
  extends PlanResourcesRequestBase {
  /**
   * The actions for which to plan.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.44.
   */
  actions: string[];
}
