import type { Matches } from "./Matches.js";

/**
 * A set of expressions to evaluate in a condition, at least one of which must be true.
 */
export interface MatchAny {
  /**
   * The expressions, at least one of which must be true.
   */
  any: Matches;
}
