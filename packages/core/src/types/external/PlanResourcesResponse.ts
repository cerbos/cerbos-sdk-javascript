import { PlanKind } from "./PlanKind";
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

/**
 * Type guard to check if a {@link PlanResourcesResponse} is a {@link PlanResourcesConditionalResponse}.
 *
 * @public
 */
export function planResourcesResponseIsConditional(
  output: PlanResourcesResponse,
): output is PlanResourcesConditionalResponse {
  return output.kind === PlanKind.CONDITIONAL;
}

/**
 * Type guard to check if a {@link PlanResourcesResponse} is a {@link PlanResourcesUnconditionalResponse}.
 *
 * @public
 */
export function planResourcesResponseIsUnconditional(
  output: PlanResourcesResponse,
): output is PlanResourcesUnconditionalResponse {
  return output.kind !== PlanKind.CONDITIONAL;
}
