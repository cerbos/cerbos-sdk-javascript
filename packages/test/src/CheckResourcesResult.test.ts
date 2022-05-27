import { Effect } from "@cerbos/core";
import { describe, expect, it } from "@jest/globals";

import { buildResult } from "./helpers";

describe("CheckResourcesResult", () => {
  describe("#allAllowed", () => {
    describe("when all actions are allowed", () => {
      const result = buildResult({
        actions: {
          yes: Effect.ALLOW,
          yup: Effect.ALLOW,
          yeah: Effect.ALLOW,
        },
      });

      it("returns true", () => {
        expect(result.allAllowed()).toBe(true);
      });
    });

    describe("when some actions are denied", () => {
      const result = buildResult({
        actions: {
          yes: Effect.ALLOW,
          no: Effect.DENY,
          yup: Effect.ALLOW,
          yeah: Effect.ALLOW,
        },
      });

      it("returns false", () => {
        expect(result.allAllowed()).toBe(false);
      });
    });
  });

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
