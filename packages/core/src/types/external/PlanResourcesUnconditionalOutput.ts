import type { PlanKind } from "./PlanKind";
import type { PlanResourcesOutputBase } from "./PlanResourcesOutputBase";

/**
 * A query plan for when the specified action is always allowed or denied for the principal on resources matching the input.
 *
 * @public
 */
export interface PlanResourcesUnconditionalOutput
  extends PlanResourcesOutputBase {
  /**
   * The type of plan.
   */
  kind: PlanKind.ALWAYS_ALLOWED | PlanKind.ALWAYS_DENIED;
}
