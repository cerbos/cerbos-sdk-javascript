import type { PlanExpressionOperand } from "./PlanExpressionOperand.js";

/**
 * An abstract syntax tree node representing an expression to evaluate.
 */
export class PlanExpression {
  /** @internal */
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
