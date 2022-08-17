import type { PlanExpression } from "./PlanExpression";
import type { PlanExpressionValue } from "./PlanExpressionValue";
import type { PlanExpressionVariable } from "./PlanExpressionVariable";

/**
 * An abstract syntax tree node representing an operand to an expression.
 *
 * @public
 */
export type PlanExpressionOperand =
  | PlanExpression
  | PlanExpressionValue
  | PlanExpressionVariable;
