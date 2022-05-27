import {
  CheckResourcesResponse,
  CheckResourcesResultResource,
  Effect,
  ResourceQuery,
} from "@cerbos/core";
import { describe, expect, it } from "@jest/globals";
import { v4 as uuidv4 } from "uuid";

import { buildResult, buildResultsForResources, shuffle } from "./helpers";

describe("CheckResourcesResponse", () => {
  describe("#allAllowed", () => {
    const resource: CheckResourcesResultResource = {
      kind: "document",
      id: "found",
      policyVersion: "default",
      scope: "",
    };

    describe("when the resource is found", () => {
      const query: ResourceQuery = {
        kind: "document",
        id: "found",
      };

      describe("when all actions are allowed", () => {
        const response = new CheckResourcesResponse({
          requestId: uuidv4(),
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
          expect(response.allAllowed(query)).toBe(true);
        });
      });

      describe("when some actions are denied", () => {
        const response = new CheckResourcesResponse({
          requestId: uuidv4(),
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
          expect(response.allAllowed(query)).toBe(false);
        });
      });
    });

    describe("when the resource is not found", () => {
      const response = new CheckResourcesResponse({
        requestId: uuidv4(),
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
          response.allAllowed({ kind: "document", id: "not_found" })
        ).toBeUndefined();
      });
    });
  });

  describe("#allowedActions", () => {
    const response = new CheckResourcesResponse({
      requestId: uuidv4(),
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
          response.allowedActions({ kind: "document", id: "found" })
        ).toEqual(["allowed"]);
      });
    });

    describe("when the resource is not found", () => {
      it("returns undefined", () => {
        expect(
          response.allowedActions({ kind: "document", id: "not_found" })
        ).toBeUndefined();
      });
    });
  });

  describe("#isAllowed", () => {
    const response = new CheckResourcesResponse({
      requestId: uuidv4(),
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
      const query: ResourceQuery = {
        kind: "document",
        id: "found",
      };

      describe("when the action is allowed", () => {
        it("returns true", () => {
          expect(
            response.isAllowed({ resource: query, action: "allowed" })
          ).toBe(true);
        });
      });

      describe("when the action is denied", () => {
        it("returns false", () => {
          expect(
            response.isAllowed({ resource: query, action: "denied" })
          ).toBe(false);
        });
      });

      describe("when the action is not present", () => {
        it("returns undefined", () => {
          expect(
            response.isAllowed({ resource: query, action: "unknown" })
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
          })
        ).toBeUndefined();
      });
    });
  });

  describe("#findResult", () => {
    const response = new CheckResourcesResponse({
      requestId: uuidv4(),
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
      const query = {
        kind: "document",
        id: "kind_and_id",
      };

      it("finds a matching result", () => {
        expect(response.findResult(query)).toEqual(
          buildResult({
            resource: { ...query, policyVersion: "default", scope: "" },
          })
        );
      });
    });

    describe("with kind, id, and policy version", () => {
      const query = {
        kind: "document",
        id: "policy_version",
        policyVersion: "1",
      };

      it("finds a matching result", () => {
        expect(response.findResult(query)).toEqual(
          buildResult({ resource: { ...query, scope: "" } })
        );
      });
    });

    describe("with kind, id, and scope", () => {
      const query = {
        kind: "document",
        id: "scope",
        scope: "alpha",
      };

      it("finds a matching result", () => {
        expect(response.findResult(query)).toEqual(
          buildResult({ resource: { ...query, policyVersion: "default" } })
        );
      });
    });

    describe("with kind, id, policy version, and scope", () => {
      const query = {
        kind: "document",
        id: "policy_version_and_scope",
        policyVersion: "1",
        scope: "alpha",
      };

      it("finds a matching result", () => {
        expect(response.findResult(query)).toEqual(
          buildResult({ resource: query })
        );
      });
    });

    describe("without a match", () => {
      it("returns undefined", () => {
        expect(
          response.findResult({ kind: "unknown", id: "missing" })
        ).toBeUndefined();
      });
    });
  });
});
