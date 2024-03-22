export function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) {
    return true;
  }

  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  ) {
    // one of them is a primitive or null, so if they weren't strictly equal above, then they aren't equal
    return false;
  }

  // they are both non-null objects (arrays are objects too)

  if (Array.isArray(a)) {
    if (!Array.isArray(b)) {
      return false;
    }

    // they are both arrays

    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  // they are both objects - ignore more complex types like Map, Symbol, Date etc...

  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) {
    return false;
  }

  for (const key of keys) {
    const valueA = (a as Record<string, unknown>)[key];
    const valueB = (b as Record<string, unknown>)[key];

    if (!deepEqual(valueA, valueB)) {
      return false;
    }
  }

  return true;
}
