import type { Match } from "./Match";

/**
 * A set of expressions that must evaluate to true for a rule to take effect.
 *
 * @public
 */
export interface Condition {
  /**
   * The expressions to evaluate.
   */
  match: Match;
}
