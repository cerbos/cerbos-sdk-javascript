import type { MatchAll } from "./MatchAll";
import type { MatchAny } from "./MatchAny";
import type { MatchExpr } from "./MatchExpr";
import type { MatchNone } from "./MatchNone";

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
export const matchIsMatchAll = (match: Match): match is MatchAll =>
  "all" in match;

/**
 * Type guard to check if a {@link Match} is a {@link MatchAny}.
 *
 * @public
 */
export const matchIsMatchAny = (match: Match): match is MatchAny =>
  "any" in match;

/**
 * Type guard to check if a {@link Match} is a {@link MatchNone}.
 *
 * @public
 */
export const matchIsMatchNone = (match: Match): match is MatchNone =>
  "none" in match;

/**
 * Type guard to check if a {@link Match} is a {@link MatchExpr}.
 *
 * @public
 */
export const matchIsMatchExpr = (match: Match): match is MatchExpr =>
  "expr" in match;
