import type { PlanExpressionOperand } from "./PlanExpressionOperand";

/**
 * An abstract syntax tree node representing an expression to evaluate.
 *
 * @public
 */
export class PlanExpression {
  public constructor(
    /**
     * The operator to invoke.
     */
    public operator: string,

    /**
     * The operands on which to invoke the operator.
     */
    public operands: PlanExpressionOperand[],
  ) {}
}
