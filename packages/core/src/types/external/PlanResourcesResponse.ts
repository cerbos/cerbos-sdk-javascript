import type { PlanResourcesConditionalResponse } from "./PlanResourcesConditionalResponse";
import type { PlanResourcesUnconditionalResponse } from "./PlanResourcesUnconditionalResponse";

/**
 * A query plan that can be used to obtain a list of resources on which a principal is allowed to perform a particular action.
 *
 * @public
 */
export type PlanResourcesResponse =
  | PlanResourcesConditionalResponse
  | PlanResourcesUnconditionalResponse;
