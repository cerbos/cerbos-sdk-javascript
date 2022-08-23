import type { Matches } from "./Matches";

/**
 * A set of expressions to evaluate in a condition that must all be false.
 *
 * @public
 */
export interface MatchNone {
  /**
   * The expressions that must all be false.
   */
  none: Matches;
}
