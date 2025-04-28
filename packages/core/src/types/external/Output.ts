import type { OutputExpressions } from "./OutputExpressions";

/**
 * {@link https://docs.cerbos.dev/cerbos/latest/policies/outputs | User-defined output} to be produced when evaluating a policy rule.
 *
 * @public
 */
export interface Output {
  /**
   * A {@link https://docs.cerbos.dev/cerbos/latest/policies/conditions | Common Expression Language} expression to evaluate when the policy rule is fully activated
   * (action, roles, and derived roles match, and condition is met).
   *
   * @deprecated Use {@link Output.when | when} instead.
   */
  expr?: string | undefined;

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/conditions | Common Expression Language} expressions to evaluate.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.33.
   */
  when?: OutputExpressions | undefined;
}
