import type { Matches } from "./Matches";

/**
 * A set of expressions to evaluate in a condition, at least one of which must be true.
 *
 * @public
 */
export interface MatchAny {
  /**
   * The expressions, at least one of which must be true.
   */
  any: Matches;
}
