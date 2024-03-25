import { readFile } from "fs/promises";

import { UnsecuredJWT } from "jose";
import { describe, expect, it } from "vitest";

import type { CheckResourcesRequest } from "@cerbos/core";
import {
  CheckResourcesResponse,
  CheckResourcesResult,
  Effect,
} from "@cerbos/core";
import type { DecodedJWTPayload } from "@cerbos/embedded";
import { Embedded } from "@cerbos/embedded";

import { bundleFilePath } from "../../helpers";

describe("Embedded", () => {
  describe("cerbos", () => {
    const client = new Embedded(readFile(bundleFilePath()), {
      decodeJWTPayload: ({ token }): DecodedJWTPayload =>
        UnsecuredJWT.decode(token).payload as DecodedJWTPayload,
      globals: {
        allow_deletion: true,
      },
    });

    describe("checkResource", () => {
      it("checks a principal's permissions on a resource", async () => {
        const result = await client.checkResource({
          principal: {
            id: "me@example.com",
            policyVersion: "1",
            scope: "test",
            roles: ["USER"],
            attr: {
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
            attr: {
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
              effectiveDerivedRoles: ["OWNER"],
            },
            outputs: [
              {
                source: "resource.document.v1#delete",
                value: "delete_allowed:me@example.com",
              },
            ],
          }),
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
          attr: {
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
              attr: {
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
              attr: {
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
              attr: {
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
                  effectiveDerivedRoles: ["OWNER"],
                },
                outputs: [
                  {
                    source: "resource.document.v1#delete",
                    value: "delete_allowed:me@example.com",
                  },
                ],
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
                outputs: [
                  {
                    source: "resource.document.v1#delete",
                    value: "delete_allowed:me@example.com",
                  },
                ],
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
                outputs: [
                  {
                    source: "resource.document.v1#delete",
                    value: "delete_allowed:me@example.com",
                  },
                ],
              }),
            ],
          }),
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
              attr: {
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
              attr: {
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

    describe("withPrincipal", () => {
      describe("checkResource", () => {
        it("checks a principal's permissions on a resource", async () => {
          const result = await client
            .withPrincipal({
              id: "me@example.com",
              policyVersion: "1",
              scope: "test",
              roles: ["USER"],
              attr: {
                country: {
                  alpha2: "",
                  alpha3: "NZL",
                },
              },
            })
            .checkResource({
              resource: {
                kind: "document",
                id: "mine",
                policyVersion: "1",
                scope: "test",
                attr: {
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
                effectiveDerivedRoles: ["OWNER"],
              },
              outputs: [
                {
                  source: "resource.document.v1#delete",
                  value: "delete_allowed:me@example.com",
                },
              ],
            }),
          );
        });

        it("uses the principal's JWT", async () => {
          const result = await client
            .withPrincipal(
              {
                id: "me@example.com",
                policyVersion: "1",
                scope: "test",
                roles: ["USER"],
                attr: {
                  country: {
                    alpha2: "",
                    alpha3: "NZL",
                  },
                },
              },
              {
                jwt: {
                  token: new UnsecuredJWT({ delete: true }).encode(),
                },
              },
            )
            .checkResource({
              resource: {
                kind: "document",
                id: "mine",
                policyVersion: "1",
                scope: "test",
                attr: {
                  owner: "me@example.com",
                },
              },
              actions: ["view", "edit", "delete"],
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
                effectiveDerivedRoles: ["OWNER"],
              },
              outputs: [
                {
                  source: "resource.document.v1#delete",
                  value: "delete_allowed:me@example.com",
                },
              ],
            }),
          );
        });

        it("allows the principal's JWT to be overridden", async () => {
          const result = await client
            .withPrincipal(
              {
                id: "me@example.com",
                policyVersion: "1",
                scope: "test",
                roles: ["USER"],
                attr: {
                  country: {
                    alpha2: "",
                    alpha3: "NZL",
                  },
                },
              },
              {
                jwt: {
                  token: new UnsecuredJWT({ delete: false }).encode(),
                },
              },
            )
            .checkResource({
              resource: {
                kind: "document",
                id: "mine",
                policyVersion: "1",
                scope: "test",
                attr: {
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
                effectiveDerivedRoles: ["OWNER"],
              },
              outputs: [
                {
                  source: "resource.document.v1#delete",
                  value: "delete_allowed:me@example.com",
                },
              ],
            }),
          );
        });

        it("works without a JWT", async () => {
          const result = await client
            .withPrincipal({
              id: "me@example.com",
              policyVersion: "1",
              scope: "test",
              roles: ["USER"],
              attr: {
                country: {
                  alpha2: "",
                  alpha3: "NZL",
                },
              },
            })
            .checkResource({
              resource: {
                kind: "document",
                id: "mine",
                policyVersion: "1",
                scope: "test",
                attr: {
                  owner: "me@example.com",
                },
              },
              actions: ["view", "edit", "delete"],
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
                delete: Effect.DENY,
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
                effectiveDerivedRoles: ["OWNER"],
              },
              outputs: [],
            }),
          );
        });
      });

      describe("checkResources", () => {
        it("checks a principal's permissions on a set of resources", async () => {
          const response = await client
            .withPrincipal({
              id: "me@example.com",
              policyVersion: "1",
              scope: "test",
              roles: ["USER"],
              attr: {
                country: {
                  alpha2: "",
                  alpha3: "NZL",
                },
              },
            })
            .checkResources({
              resources: [
                {
                  resource: {
                    kind: "document",
                    id: "mine",
                    policyVersion: "1",
                    scope: "test",
                    attr: {
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
                    attr: {
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
                    attr: {
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
            });

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
                    effectiveDerivedRoles: ["OWNER"],
                  },
                  outputs: [
                    {
                      source: "resource.document.v1#delete",
                      value: "delete_allowed:me@example.com",
                    },
                  ],
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
                  outputs: [
                    {
                      source: "resource.document.v1#delete",
                      value: "delete_allowed:me@example.com",
                    },
                  ],
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
                  outputs: [
                    {
                      source: "resource.document.v1#delete",
                      value: "delete_allowed:me@example.com",
                    },
                  ],
                }),
              ],
            }),
          );
        });

        it("uses the principal's JWT", async () => {
          const response = await client
            .withPrincipal(
              {
                id: "me@example.com",
                policyVersion: "1",
                scope: "test",
                roles: ["USER"],
                attr: {
                  country: {
                    alpha2: "",
                    alpha3: "NZL",
                  },
                },
              },
              {
                jwt: {
                  token: new UnsecuredJWT({ delete: true }).encode(),
                },
              },
            )
            .checkResources({
              resources: [
                {
                  resource: {
                    kind: "document",
                    id: "mine",
                    policyVersion: "1",
                    scope: "test",
                    attr: {
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
                    attr: {
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
                    attr: {
                      owner: 123,
                    },
                  },
                  actions: ["view", "edit", "delete"],
                },
              ],
              includeMetadata: true,
              requestId: "42",
            });

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
                    effectiveDerivedRoles: ["OWNER"],
                  },
                  outputs: [
                    {
                      source: "resource.document.v1#delete",
                      value: "delete_allowed:me@example.com",
                    },
                  ],
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
                  outputs: [
                    {
                      source: "resource.document.v1#delete",
                      value: "delete_allowed:me@example.com",
                    },
                  ],
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
                  outputs: [
                    {
                      source: "resource.document.v1#delete",
                      value: "delete_allowed:me@example.com",
                    },
                  ],
                }),
              ],
            }),
          );
        });

        it("allows the principal's JWT to be overridden", async () => {
          const response = await client
            .withPrincipal(
              {
                id: "me@example.com",
                policyVersion: "1",
                scope: "test",
                roles: ["USER"],
                attr: {
                  country: {
                    alpha2: "",
                    alpha3: "NZL",
                  },
                },
              },
              {
                jwt: {
                  token: new UnsecuredJWT({ delete: false }).encode(),
                },
              },
            )
            .checkResources({
              resources: [
                {
                  resource: {
                    kind: "document",
                    id: "mine",
                    policyVersion: "1",
                    scope: "test",
                    attr: {
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
                    attr: {
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
                    attr: {
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
            });

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
                    effectiveDerivedRoles: ["OWNER"],
                  },
                  outputs: [
                    {
                      source: "resource.document.v1#delete",
                      value: "delete_allowed:me@example.com",
                    },
                  ],
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
                  outputs: [
                    {
                      source: "resource.document.v1#delete",
                      value: "delete_allowed:me@example.com",
                    },
                  ],
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
                  outputs: [
                    {
                      source: "resource.document.v1#delete",
                      value: "delete_allowed:me@example.com",
                    },
                  ],
                }),
              ],
            }),
          );
        });

        it("works without a JWT", async () => {
          const response = await client
            .withPrincipal({
              id: "me@example.com",
              policyVersion: "1",
              scope: "test",
              roles: ["USER"],
              attr: {
                country: {
                  alpha2: "",
                  alpha3: "NZL",
                },
              },
            })
            .checkResources({
              resources: [
                {
                  resource: {
                    kind: "document",
                    id: "mine",
                    policyVersion: "1",
                    scope: "test",
                    attr: {
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
                    attr: {
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
                    attr: {
                      owner: 123,
                    },
                  },
                  actions: ["view", "edit", "delete"],
                },
              ],
              includeMetadata: true,
              requestId: "42",
            });

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
                    delete: Effect.DENY,
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
                    effectiveDerivedRoles: ["OWNER"],
                  },
                  outputs: [],
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
                    delete: Effect.DENY,
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
                  outputs: [],
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
                    delete: Effect.DENY,
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
                  outputs: [],
                }),
              ],
            }),
          );
        });
      });

      describe("isAllowed", () => {
        it("checks if a principal is allowed to perform an action on a resource", async () => {
          const allowed = await client
            .withPrincipal({
              id: "me@example.com",
              policyVersion: "1",
              scope: "test",
              roles: ["USER"],
              attr: {
                country: {
                  alpha2: "",
                  alpha3: "NZL",
                },
              },
            })
            .isAllowed({
              resource: {
                kind: "document",
                id: "mine",
                policyVersion: "1",
                scope: "test",
                attr: {
                  owner: "me@example.com",
                },
              },
              action: "delete",
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

        it("uses the principal's JWT", async () => {
          const allowed = await client
            .withPrincipal(
              {
                id: "me@example.com",
                policyVersion: "1",
                scope: "test",
                roles: ["USER"],
                attr: {
                  country: {
                    alpha2: "",
                    alpha3: "NZL",
                  },
                },
              },
              {
                jwt: {
                  token: new UnsecuredJWT({ delete: true }).encode(),
                },
              },
            )
            .isAllowed({
              resource: {
                kind: "document",
                id: "mine",
                policyVersion: "1",
                scope: "test",
                attr: {
                  owner: "me@example.com",
                },
              },
              action: "delete",
              includeMetadata: true,
              requestId: "42",
            });

          expect(allowed).toBe(true);
        });

        it("allows the principal's JWT to be overridden", async () => {
          const allowed = await client
            .withPrincipal(
              {
                id: "me@example.com",
                policyVersion: "1",
                scope: "test",
                roles: ["USER"],
                attr: {
                  country: {
                    alpha2: "",
                    alpha3: "NZL",
                  },
                },
              },
              {
                jwt: {
                  token: new UnsecuredJWT({ delete: false }).encode(),
                },
              },
            )
            .isAllowed({
              resource: {
                kind: "document",
                id: "mine",
                policyVersion: "1",
                scope: "test",
                attr: {
                  owner: "me@example.com",
                },
              },
              action: "delete",
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

        it("works without a JWT", async () => {
          const allowed = await client
            .withPrincipal({
              id: "me@example.com",
              policyVersion: "1",
              scope: "test",
              roles: ["USER"],
              attr: {
                country: {
                  alpha2: "",
                  alpha3: "NZL",
                },
              },
            })
            .isAllowed({
              resource: {
                kind: "document",
                id: "mine",
                policyVersion: "1",
                scope: "test",
                attr: {
                  owner: "me@example.com",
                },
              },
              action: "delete",
              includeMetadata: true,
              requestId: "42",
            });

          expect(allowed).toBe(false);
        });
      });
    });
  });
});
