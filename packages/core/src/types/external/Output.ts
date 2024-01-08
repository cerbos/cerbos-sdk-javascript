/**
 * User-defined output to be produced when evaluating a policy rule.
 *
 * @public
 */
export interface Output {
  /**
   * A {@link https://docs.cerbos.dev/cerbos/latest/policies/conditions | Common Expression Language} expression to evaluate.
   */
  expr: string;
}
