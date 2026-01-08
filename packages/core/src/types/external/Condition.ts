import type { Match } from "./Match.js";

/**
 * A set of expressions that must evaluate to true for a rule to take effect.
 */
export interface Condition {
  /**
   * The expressions to evaluate.
   */
  match: Match;
}
