import type { Principal as External } from "@cerbos/core";
// @ts-expect-error - shouldn't be able to import from the package internals
import type { Principal as Internal } from "@cerbos/core/lib/types/external";
import { expectTypeOf, test } from "vitest";

test("should be able to import from the package entrypoint", () => {
  expectTypeOf<External>().not.toBeAny();
});

test("shouldn't be able to import from the package internals", () => {
  expectTypeOf<Internal>().toBeAny();
});
