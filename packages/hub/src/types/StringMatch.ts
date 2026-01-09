/**
 * Filter to match a string.
 */
export type StringMatch =
  | StringMatchEquals
  | StringMatchContains
  | StringMatchIn;

/**
 * Filter to match a string exactly.
 */
export interface StringMatchEquals {
  /**
   * The string to match.
   */
  equals: string;
}

/**
 * Type guard to check if a {@link StringMatch} is a {@link StringMatchEquals}.
 */
export function stringMatchIsStringMatchEquals(
  match: StringMatch,
): match is StringMatchEquals {
  return "equals" in match;
}

/**
 * Filter to match a string by a substring.
 */
export interface StringMatchContains {
  /**
   * The substring to match.
   */
  contains: string;
}

/**
 * Type guard to check if a {@link StringMatch} is a {@link StringMatchContains}.
 */
export function stringMatchIsStringMatchContains(
  match: StringMatch,
): match is StringMatchContains {
  return "like" in match;
}

/**
 * Filter to match a string from a list.
 */
export interface StringMatchIn {
  /**
   * The strings to match.
   */
  in: string[];
}

/**
 * Type guard to check if a {@link StringMatch} is a {@link StringMatchIn}.
 */
export function stringMatchIsStringMatchIn(
  match: StringMatch,
): match is StringMatchIn {
  return "in" in match;
}
