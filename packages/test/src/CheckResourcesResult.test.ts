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

  describe("#allowedActions", () => {
    const result = buildResult({
      actions: {
        yes: Effect.ALLOW,
        no: Effect.DENY,
        yup: Effect.ALLOW,
        nah: Effect.DENY,
        yeah: Effect.ALLOW,
      },
    });

    it("returns a list of allowed actions", () => {
      expect(result.allowedActions()).toEqual(["yes", "yup", "yeah"]);
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

  describe("#output", () => {
    const result = buildResult({
      outputs: [{ source: "resource.document.v1/scope#rule", value: 42 }],
    });

    describe("when the output is found", () => {
      it("returns the value", () => {
        expect(result.output("resource.document.v1/scope#rule")).toEqual(42);
      });
    });

    describe("when the output is not found", () => {
      it("returns undefined", () => {
        expect(result.output("resource.wat.v1/scope#rule")).toBeUndefined();
      });
    });
  });
});
