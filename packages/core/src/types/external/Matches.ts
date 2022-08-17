import type { Match } from "./Match";

/**
 * A set of expressions to evaluate in a boolean match.
 *
 * @public
 */
export interface Matches {
  /**
   * The expressions to evaluate.
   */
  of: Match[];
}
