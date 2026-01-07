import type { MatchAll } from "./MatchAll.js";
import type { MatchAny } from "./MatchAny.js";
import type { MatchExpr } from "./MatchExpr.js";
import type { MatchNone } from "./MatchNone.js";

/**
 * Expressions to evaluate in a condition.
 *
 * @public
 */
export type Match = MatchAll | MatchAny | MatchNone | MatchExpr;

/**
 * Type guard to check if a {@link Match} is a {@link MatchAll}.
 *
 * @public
 */
export function matchIsMatchAll(match: Match): match is MatchAll {
  return "all" in match;
}

/**
 * Type guard to check if a {@link Match} is a {@link MatchAny}.
 *
 * @public
 */
export function matchIsMatchAny(match: Match): match is MatchAny {
  return "any" in match;
}

/**
 * Type guard to check if a {@link Match} is a {@link MatchNone}.
 *
 * @public
 */
export function matchIsMatchNone(match: Match): match is MatchNone {
  return "none" in match;
}

/**
 * Type guard to check if a {@link Match} is a {@link MatchExpr}.
 *
 * @public
 */
export function matchIsMatchExpr(match: Match): match is MatchExpr {
  return "expr" in match;
}
