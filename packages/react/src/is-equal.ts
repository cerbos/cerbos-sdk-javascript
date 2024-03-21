export function isEqual<T1, T2>(
  a: T1 | undefined | null,
  b: T2 | undefined | null,
): boolean {
  if (typeof a !== typeof b) {
    return false;
  }

  // they are of the same type
  if (typeof a !== "object" || typeof b !== "object") {
    // they are both primitives
    return a === b;
  }

  // ignore more complex types like Map, Symbol, Date etc...

  // they are both objects
  if (a === null || b === null) {
    // one of them is null
    return a === b;
  }

  // they are both non null objects (arrays are objects too)
  const entriesA = Object.entries(a);
  const entriesB = Object.entries(b);

  if (entriesA.length !== entriesB.length) {
    return false;
  }

  for (const [key, valueA] of entriesA) {
    // @ts-expect-error -- typescript complains that b can be an array and string cannot be used to index it but that's fine because we are checking for equality
    const valueB = b[key] as unknown;
    if (!isEqual(valueA, valueB)) {
      return false;
    }
  }

  return true;
}
