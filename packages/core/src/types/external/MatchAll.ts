import type { Matches } from "./Matches.js";

/**
 * A set of expressions to evaluate in a condition that must all be true.
 *
 * @public
 */
export interface MatchAll {
  /**
   * The expressions that must all be true.
   */
  all: Matches;
}
