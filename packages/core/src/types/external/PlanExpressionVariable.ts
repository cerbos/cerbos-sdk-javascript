/**
 * An abstract syntax tree node representing a variable whose value was unknown when producing the query plan.
 *
 * @public
 */
export class PlanExpressionVariable {
  public constructor(
    /**
     * The name of the variable.
     */
    public name: string,
  ) {}
}
