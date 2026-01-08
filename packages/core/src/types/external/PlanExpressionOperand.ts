import type { PlanExpression } from "./PlanExpression.js";
import type { PlanExpressionValue } from "./PlanExpressionValue.js";
import type { PlanExpressionVariable } from "./PlanExpressionVariable.js";

/**
 * An abstract syntax tree node representing an operand to an expression.
 */
export type PlanExpressionOperand =
  | PlanExpression
  | PlanExpressionValue
  | PlanExpressionVariable;
