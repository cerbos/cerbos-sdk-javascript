import type { PlanExpressionOperand } from "./PlanExpressionOperand";
import type { PlanKind } from "./PlanKind";
import type { PlanResourcesOutputBase } from "./PlanResourcesOutputBase";

/**
 * A query plan for when the specified action is conditionally allowed for the principal on resources matching the input.
 *
 * @public
 */
export interface PlanResourcesConditionalOutput
  extends PlanResourcesOutputBase {
  /**
   * The type of plan.
   */
  kind: PlanKind.CONDITIONAL;

  /**
   * The root node of the query condition abstract syntax tree.
   */
  condition: PlanExpressionOperand;

  /**
   * The query condition abstract syntax tree rendered as a human-readable string.
   */
  conditionString: string;
}
