import type { Value } from "./Value.js";

/**
 * User-defined output from a policy rule evaluation.
 */
export interface OutputResult {
  /**
   * The name of the action that was being evaluated when the output was produced.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.51.
   */
  action: string;

  /**
   * The identifier of the policy rule that produced the output.
   */
  source: string;

  /**
   * The result of evaluating the output expression.
   */
  value: Value | undefined;
}
