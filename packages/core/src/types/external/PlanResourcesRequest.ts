import type { PlanResourcesRequestWithAction } from "./PlanResourcesRequestWithAction";
import type { PlanResourcesRequestWithActions } from "./PlanResourcesRequestWithActions";

/**
 * Input to {@link @cerbos/core#Client.planResources}.
 *
 * @public
 */
export type PlanResourcesRequest =
  | PlanResourcesRequestWithAction
  | PlanResourcesRequestWithActions;
