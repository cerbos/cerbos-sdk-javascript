export type StringMatch = StringMatchEquals | StringMatchLike | StringMatchIn;

export interface StringMatchEquals {
  equals: string;
}

export function stringMatchIsStringMatchEquals(
  match: StringMatch,
): match is StringMatchEquals {
  return "equals" in match;
}

export interface StringMatchLike {
  like: string;
}

export function stringMatchIsStringMatchLike(
  match: StringMatch,
): match is StringMatchLike {
  return "like" in match;
}

export interface StringMatchIn {
  in: string[];
}

export function stringMatchIsStringMatchIn(
  match: StringMatch,
): match is StringMatchIn {
  return "in" in match;
}
