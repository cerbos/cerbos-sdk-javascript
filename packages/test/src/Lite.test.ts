import "./fetch-polyfill";

import { readFileSync } from "fs";
import { resolve } from "path";

import type { CheckResourcesRequest } from "@cerbos/core";
import {
  CheckResourcesResponse,
  CheckResourcesResult,
  Effect,
} from "@cerbos/core";
import type { DecodedJWTPayload } from "@cerbos/lite";
import { Lite } from "@cerbos/lite";
import { describe, expect, it } from "@jest/globals";
import { UnsecuredJWT } from "jose";

describe("Lite", () => {
  describe("cerbos", () => {
    const client = new Lite(
      readFileSync(resolve(__dirname, "../servers/policies.wasm")),
      {
        decodeJWTPayload: ({ token }): DecodedJWTPayload =>
          UnsecuredJWT.decode(token).payload as DecodedJWTPayload,
      }
    );

    describe("checkResource", () => {
      it("checks a principal's permissions on a resource", async () => {
        const result = await client.checkResource({
          principal: {
            id: "me@example.com",
            policyVersion: "1",
            scope: "test",
            roles: ["USER"],
            attributes: {
              country: {
                alpha2: "",
                alpha3: "NZL",
              },
            },
          },
          resource: {
            kind: "document",
            id: "mine",
            policyVersion: "1",
            scope: "test",
            attributes: {
              owner: "me@example.com",
            },
          },
          actions: ["view", "edit", "delete"],
          auxData: {
            jwt: {
              token: new UnsecuredJWT({ delete: true }).encode(),
            },
          },
          includeMetadata: true,
          requestId: "42",
        });

        expect(result).toEqual(
          new CheckResourcesResult({
            resource: {
              kind: "document",
              id: "mine",
              policyVersion: "1",
              scope: "test",
            },
            actions: {
              view: Effect.ALLOW,
              edit: Effect.ALLOW,
              delete: Effect.ALLOW,
            },
            validationErrors: [],
            metadata: {
              actions: {
                view: {
                  matchedPolicy: "resource.document.v1/test",
                  matchedScope: "test",
                },
                edit: {
                  matchedPolicy: "resource.document.v1/test",
                  matchedScope: "test",
                },
                delete: {
                  matchedPolicy: "resource.document.v1/test",
                  matchedScope: "",
                },
              },
              effectiveDerivedRoles: [],
            },
          })
        );
      });
    });

    describe("checkResources", () => {
      const request: CheckResourcesRequest = {
        principal: {
          id: "me@example.com",
          policyVersion: "1",
          scope: "test",
          roles: ["USER"],
          attributes: {
            country: {
              alpha2: "",
              alpha3: "NZL",
            },
          },
        },
        resources: [
          {
            resource: {
              kind: "document",
              id: "mine",
              policyVersion: "1",
              scope: "test",
              attributes: {
                owner: "me@example.com",
              },
            },
            actions: ["view", "edit", "delete"],
          },
          {
            resource: {
              kind: "document",
              id: "theirs",
              policyVersion: "1",
              scope: "test",
              attributes: {
                owner: "them@example.com",
              },
            },
            actions: ["view", "edit", "delete"],
          },
          {
            resource: {
              kind: "document",
              id: "invalid",
              policyVersion: "1",
              scope: "test",
              attributes: {
                owner: 123,
              },
            },
            actions: ["view", "edit", "delete"],
          },
        ],
        auxData: {
          jwt: {
            token: new UnsecuredJWT({ delete: true }).encode(),
          },
        },
        includeMetadata: true,
        requestId: "42",
      };

      it("checks a principal's permissions on a set of resources", async () => {
        const response = await client.checkResources(request);

        expect(response).toEqual(
          new CheckResourcesResponse({
            requestId: "42",
            results: [
              new CheckResourcesResult({
                resource: {
                  kind: "document",
                  id: "mine",
                  policyVersion: "1",
                  scope: "test",
                },
                actions: {
                  view: Effect.ALLOW,
                  edit: Effect.ALLOW,
                  delete: Effect.ALLOW,
                },
                validationErrors: [],
                metadata: {
                  actions: {
                    view: {
                      matchedPolicy: "resource.document.v1/test",
                      matchedScope: "test",
                    },
                    edit: {
                      matchedPolicy: "resource.document.v1/test",
                      matchedScope: "test",
                    },
                    delete: {
                      matchedPolicy: "resource.document.v1/test",
                      matchedScope: "",
                    },
                  },
                  effectiveDerivedRoles: [],
                },
              }),
              new CheckResourcesResult({
                resource: {
                  kind: "document",
                  id: "theirs",
                  policyVersion: "1",
                  scope: "test",
                },
                actions: {
                  view: Effect.ALLOW,
                  edit: Effect.DENY,
                  delete: Effect.ALLOW,
                },
                validationErrors: [],
                metadata: {
                  actions: {
                    view: {
                      matchedPolicy: "resource.document.v1/test",
                      matchedScope: "test",
                    },
                    edit: {
                      matchedPolicy: "resource.document.v1/test",
                      matchedScope: "",
                    },
                    delete: {
                      matchedPolicy: "resource.document.v1/test",
                      matchedScope: "",
                    },
                  },
                  effectiveDerivedRoles: [],
                },
              }),
              new CheckResourcesResult({
                resource: {
                  kind: "document",
                  id: "invalid",
                  policyVersion: "1",
                  scope: "test",
                },
                actions: {
                  view: Effect.ALLOW,
                  edit: Effect.DENY,
                  delete: Effect.ALLOW,
                },
                validationErrors: [],
                metadata: {
                  actions: {
                    view: {
                      matchedPolicy: "resource.document.v1/test",
                      matchedScope: "test",
                    },
                    edit: {
                      matchedPolicy: "resource.document.v1/test",
                      matchedScope: "",
                    },
                    delete: {
                      matchedPolicy: "resource.document.v1/test",
                      matchedScope: "",
                    },
                  },
                  effectiveDerivedRoles: [],
                },
              }),
            ],
          })
        );
      });

      describe("isAllowed", () => {
        it("checks if a principal is allowed to perform an action on a resource", async () => {
          const allowed = await client.isAllowed({
            principal: {
              id: "me@example.com",
              policyVersion: "1",
              scope: "test",
              roles: ["USER"],
              attributes: {
                country: {
                  alpha2: "",
                  alpha3: "NZL",
                },
              },
            },
            resource: {
              kind: "document",
              id: "mine",
              policyVersion: "1",
              scope: "test",
              attributes: {
                owner: "me@example.com",
              },
            },
            action: "edit",
            auxData: {
              jwt: {
                token: new UnsecuredJWT({ delete: true }).encode(),
              },
            },
            includeMetadata: true,
            requestId: "42",
          });

          expect(allowed).toBe(true);
        });
      });
    });
  });
});
