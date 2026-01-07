import type { Value } from "./Value.js";

/**
 * User-defined output from a policy rule evaluation.
 *
 * @public
 */
export interface OutputResult {
  /**
   * The identifier of the policy rule that produced the output.
   */
  source: string;

  /**
   * The result of evaluating the output expression.
   */
  value: Value | undefined;
}
