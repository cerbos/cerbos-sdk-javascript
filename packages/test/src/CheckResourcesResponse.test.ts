import { CheckResourcesResponse } from "@cerbos/core";
import { describe, expect, it } from "@jest/globals";
import { v4 as uuidv4 } from "uuid";

import { buildResult, buildResultsForResources, shuffle } from "./helpers";

describe("CheckResourcesResponse", () => {
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
