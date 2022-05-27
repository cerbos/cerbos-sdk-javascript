import { Effect } from "@cerbos/core";
import { describe, expect, it } from "@jest/globals";

import { buildResult } from "./helpers";

describe("CheckResourcesResult", () => {
  describe("#isAllowed", () => {
    const result = buildResult({
      actions: {
        yes: Effect.ALLOW,
        no: Effect.DENY,
      },
    });

    describe("when the action is allowed", () => {
      it("returns true", () => {
        expect(result.isAllowed("yes")).toBe(true);
      });
    });

    describe("when the action is denied", () => {
      it("returns false", () => {
        expect(result.isAllowed("no")).toBe(false);
      });
    });

    describe("when the action is not present", () => {
      it("returns undefined", () => {
        expect(result.isAllowed("unknown")).toBeUndefined();
      });
    });
  });
});
