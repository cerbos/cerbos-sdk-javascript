import type { PlanKind } from "./PlanKind";
import type { PlanResourcesResponseBase } from "./PlanResourcesResponseBase";

/**
 * A query plan for when the specified action is always allowed or denied for the principal on resources matching the input.
 *
 * @public
 */
export interface PlanResourcesUnconditionalResponse
  extends PlanResourcesResponseBase {
  /**
   * The type of plan.
   */
  kind: PlanKind.ALWAYS_ALLOWED | PlanKind.ALWAYS_DENIED;
}
