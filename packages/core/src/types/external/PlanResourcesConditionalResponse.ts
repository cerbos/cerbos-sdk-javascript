import type { PlanExpressionOperand } from "./PlanExpressionOperand";
import type { PlanKind } from "./PlanKind";
import type { PlanResourcesResponseBase } from "./PlanResourcesResponseBase";

/**
 * A query plan for when the specified action is conditionally allowed for the principal on resources matching the input.
 *
 * @public
 */
export interface PlanResourcesConditionalResponse
  extends PlanResourcesResponseBase {
  /**
   * The type of plan.
   */
  kind: PlanKind.CONDITIONAL;

  /**
   * The root node of the query condition abstract syntax tree.
   */
  condition: PlanExpressionOperand;
}
