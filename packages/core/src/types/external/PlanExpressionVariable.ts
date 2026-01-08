/**
 * An abstract syntax tree node representing a variable whose value was unknown when producing the query plan.
 */
export class PlanExpressionVariable {
  /** @internal */
  public constructor(
    /**
     * The name of the variable.
     */
    public name: string,
  ) {}
}
