/**
 * Filter to match a string.
 *
 * @public
 */
export type StringMatch =
  | StringMatchEquals
  | StringMatchContains
  | StringMatchIn;

/**
 * Filter to match a string exactly.
 *
 * @public
 */
export interface StringMatchEquals {
  /**
   * The string to match.
   */
  equals: string;
}

/**
 * Type guard to check if a {@link StringMatch} is a {@link StringMatchEquals}.
 *
 * @public
 */
export function stringMatchIsStringMatchEquals(
  match: StringMatch,
): match is StringMatchEquals {
  return "equals" in match;
}

/**
 * Filter to match a string by a substring.
 *
 * @public
 */
export interface StringMatchContains {
  /**
   * The substring to match.
   */
  contains: string;
}

/**
 * Type guard to check if a {@link StringMatch} is a {@link StringMatchContains}.
 *
 * @public
 */
export function stringMatchIsStringMatchContains(
  match: StringMatch,
): match is StringMatchContains {
  return "like" in match;
}

/**
 * Filter to match a string from a list.
 *
 * @public
 */
export interface StringMatchIn {
  /**
   * The strings to match.
   */
  in: string[];
}

/**
 * Type guard to check if a {@link StringMatch} is a {@link StringMatchIn}.
 *
 * @public
 */
export function stringMatchIsStringMatchIn(
  match: StringMatch,
): match is StringMatchIn {
  return "in" in match;
}
