import type { Value } from "./Value";

/**
 * An abstract syntax tree node representing a constant value.
 *
 * @public
 */
export class PlanExpressionValue {
  public constructor(
    /**
     * The constant value.
     */
    public value: Value,
  ) {}
}
