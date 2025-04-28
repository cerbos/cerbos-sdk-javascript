import type { PlanResourcesRequestBase } from "./PlanResourcesRequestBase";

/**
 * Input to {@link @cerbos/core#Client.planResources}.
 *
 * @public
 */
export interface PlanResourcesRequestWithAction
  extends PlanResourcesRequestBase {
  /**
   * The action for which to plan.
   *
   * @deprecated Use {@link PlanResourcesRequestWithActions.actions | actions} instead.
   */
  action: string;
}
