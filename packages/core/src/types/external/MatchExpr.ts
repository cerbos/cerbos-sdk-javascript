/**
 * A single expression to evaluate in a condition.
 *
 * @public
 */
export interface MatchExpr {
  /**
   * A {@link https://docs.cerbos.dev/cerbos/latest/policies/conditions.html | Common Expression Language} expression to evaluate.
   */
  expr: string;
}
