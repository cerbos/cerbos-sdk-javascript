import { describe, expect, it } from "vitest";

import type {
  CheckResourcesResultResource,
  ResourceSearch,
} from "@cerbos/core";
import { CheckResourcesResponse, Effect } from "@cerbos/core";

import { buildResult, buildResultsForResources, shuffle } from "../helpers.js";

describe("CheckResourcesResponse", () => {
  describe("#allAllowed", () => {
    const resource: CheckResourcesResultResource = {
      kind: "document",
      id: "found",
      policyVersion: "default",
      scope: "",
    };

    describe("when the resource is found", () => {
      const search: ResourceSearch = {
        kind: "document",
        id: "found",
      };

      describe("when all actions are allowed", () => {
        const response = new CheckResourcesResponse({
          cerbosCallId: "01HXGVCW7GFFKYSYEW3TVHVDVY",
          requestId: "fb39aa60-120e-44da-a312-a2381718c1be",
          results: [
            buildResult({
              resource,
              actions: {
                allowed: Effect.ALLOW,
                also_allowed: Effect.ALLOW,
              },
            }),
          ],
        });

        it("returns true", () => {
          expect(response.allAllowed(search)).toBe(true);
        });
      });

      describe("when some actions are denied", () => {
        const response = new CheckResourcesResponse({
          cerbosCallId: "01HXGVF7Q3MF12D2DRZ7HEKTAP",
          requestId: "eda6ee1d-982c-4d47-b5f0-118f48eec2f1",
          results: [
            buildResult({
              resource,
              actions: {
                allowed: Effect.ALLOW,
                denied: Effect.DENY,
              },
            }),
          ],
        });

        it("returns false", () => {
          expect(response.allAllowed(search)).toBe(false);
        });
      });
    });

    describe("when the resource is not found", () => {
      const response = new CheckResourcesResponse({
        cerbosCallId: "01HXGVFP7V099DA6DF6YJD1B6N",
        requestId: "6f954ec6-4eb4-45ad-9cb6-f5462b02d99d",
        results: [
          buildResult({
            resource,
            actions: {
              allowed: Effect.ALLOW,
              also_allowed: Effect.ALLOW,
            },
          }),
        ],
      });

      it("returns undefined", () => {
        expect(
          response.allAllowed({ kind: "document", id: "not_found" }),
        ).toBeUndefined();
      });
    });
  });

  describe("#allowedActions", () => {
    const response = new CheckResourcesResponse({
      cerbosCallId: "01HXGVG1VC283AXJB08VPMNJ02",
      requestId: "9d2434c6-4ac0-4088-8ed9-9ed217c43c1d",
      results: [
        buildResult({
          resource: {
            kind: "document",
            id: "found",
            policyVersion: "default",
            scope: "",
          },
          actions: {
            allowed: Effect.ALLOW,
            denied: Effect.DENY,
          },
        }),
      ],
    });

    describe("when the resource is found", () => {
      it("returns a list of allowed actions", () => {
        expect(
          response.allowedActions({ kind: "document", id: "found" }),
        ).toEqual(["allowed"]);
      });
    });

    describe("when the resource is not found", () => {
      it("returns undefined", () => {
        expect(
          response.allowedActions({ kind: "document", id: "not_found" }),
        ).toBeUndefined();
      });
    });
  });

  describe("#isAllowed", () => {
    const response = new CheckResourcesResponse({
      cerbosCallId: "01HXGVGCE4282S36DQM0BSMSVR",
      requestId: "cf702390-0dfc-4de0-b272-4a2de1c56684",
      results: [
        buildResult({
          resource: {
            kind: "document",
            id: "found",
            policyVersion: "default",
            scope: "",
          },
          actions: {
            allowed: Effect.ALLOW,
            denied: Effect.DENY,
          },
        }),
      ],
    });

    describe("when the resource is found", () => {
      const search: ResourceSearch = {
        kind: "document",
        id: "found",
      };

      describe("when the action is allowed", () => {
        it("returns true", () => {
          expect(
            response.isAllowed({ resource: search, action: "allowed" }),
          ).toBe(true);
        });
      });

      describe("when the action is denied", () => {
        it("returns false", () => {
          expect(
            response.isAllowed({ resource: search, action: "denied" }),
          ).toBe(false);
        });
      });

      describe("when the action is not present", () => {
        it("returns undefined", () => {
          expect(
            response.isAllowed({ resource: search, action: "unknown" }),
          ).toBeUndefined();
        });
      });
    });

    describe("when the resource is not found", () => {
      it("returns undefined", () => {
        expect(
          response.isAllowed({
            resource: { kind: "document", id: "not_found" },
            action: "any",
          }),
        ).toBeUndefined();
      });
    });
  });

  describe("#findResult", () => {
    const response = new CheckResourcesResponse({
      cerbosCallId: "01HXGVGRG1K8GB63893WKVVG4K",
      requestId: "316efdc4-7cc6-44d6-a1a2-e70c1ceb6ca3",
      results: shuffle([
        ...buildResultsForResources({
          id: "kind_and_id",
          policyVersions: ["default"],
          scopes: [""],
        }),
        ...buildResultsForResources({
          id: "policy_version",
          policyVersions: ["1", "2"],
          scopes: [""],
        }),
        ...buildResultsForResources({
          id: "scope",
          policyVersions: ["default"],
          scopes: ["alpha", "beta"],
        }),
        ...buildResultsForResources({
          id: "policy_version_and_scope",
          policyVersions: ["1", "2"],
          scopes: ["alpha", "beta"],
        }),
      ]),
    });

    describe("with kind and id", () => {
      const search = {
        kind: "document",
        id: "kind_and_id",
      };

      it("finds a matching result", () => {
        expect(response.findResult(search)).toEqual(
          buildResult({
            resource: { ...search, policyVersion: "default", scope: "" },
          }),
        );
      });
    });

    describe("with kind, id, and policy version", () => {
      const search = {
        kind: "document",
        id: "policy_version",
        policyVersion: "1",
      };

      it("finds a matching result", () => {
        expect(response.findResult(search)).toEqual(
          buildResult({ resource: { ...search, scope: "" } }),
        );
      });
    });

    describe("with kind, id, and scope", () => {
      const search = {
        kind: "document",
        id: "scope",
        scope: "alpha",
      };

      it("finds a matching result", () => {
        expect(response.findResult(search)).toEqual(
          buildResult({ resource: { ...search, policyVersion: "default" } }),
        );
      });
    });

    describe("with kind, id, policy version, and scope", () => {
      const search = {
        kind: "document",
        id: "policy_version_and_scope",
        policyVersion: "1",
        scope: "alpha",
      };

      it("finds a matching result", () => {
        expect(response.findResult(search)).toEqual(
          buildResult({ resource: search }),
        );
      });
    });

    describe("without a match", () => {
      it("returns undefined", () => {
        expect(
          response.findResult({ kind: "unknown", id: "missing" }),
        ).toBeUndefined();
      });
    });
  });
});
