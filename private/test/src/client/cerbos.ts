import { UnsecuredJWT } from "jose";
import { afterAll, beforeAll, describe, expect, it, vitest } from "vitest";

import type {
  CheckResourcesRequest,
  Client,
  HealthCheckResponse,
  Options,
  OutputResult,
  PlanResourcesRequest,
  PlanResourcesResponse,
  ServerInfo,
  ValidationError,
  ValidationFailedCallback,
} from "@cerbos/core";
import {
  CheckResourcesResponse,
  CheckResourcesResult,
  Effect,
  NotOK,
  PlanExpression,
  PlanExpressionValue,
  PlanExpressionVariable,
  PlanKind,
  Service,
  ServiceStatus,
  Status,
  ValidationErrorSource,
  ValidationFailed,
} from "@cerbos/core";
import { GRPC } from "@cerbos/grpc";

import {
  callIdMatcher,
  describeIfVersionIsAtLeast,
  invalidArgumentDetails,
  versionDependentCallIdMatcher,
} from "../helpers";
import {
  cerbosVersion as defaultCerbosVersion,
  versionIsAtLeast,
} from "../servers";

export interface CerbosServiceClientTestCase {
  type: string;
  client: (options?: Pick<Options, "onValidationError">) => Client;
  adminServiceEnabled: boolean;
  cerbosVersion?: string;
}

export function testCerbosServiceClient(
  ...cases: CerbosServiceClientTestCase[]
): void {
  describe.each(cases)(
    "$type",
    ({
      client: factory,
      adminServiceEnabled,
      cerbosVersion = defaultCerbosVersion,
    }) => {
      let clients: {
        default: Client;
        throwOnValidationError: Client;
        callbackOnValidationError: Client;
      };

      const validationFailed = vitest.fn<ValidationFailedCallback>();

      beforeAll(() => {
        clients = {
          default: factory(),
          throwOnValidationError: factory({
            onValidationError: "throw",
          }),
          callbackOnValidationError: factory({
            onValidationError: validationFailed,
          }),
        };
      });

      afterAll(() => {
        Object.values(clients).forEach((client) => {
          if (client instanceof GRPC) {
            client.close();
          }
        });
      });

      describe("checkHealth", () => {
        it("checks the Cerbos service health", async () => {
          const result = await clients.default.checkHealth();

          expect(result).toEqual({
            status: ServiceStatus.SERVING,
          } satisfies HealthCheckResponse);
        });

        it("checks the admin service health", async () => {
          const result = await clients.default.checkHealth({
            service: Service.ADMIN,
          });

          expect(result).toEqual({
            status: adminServiceEnabled
              ? ServiceStatus.SERVING
              : ServiceStatus.DISABLED,
          } satisfies HealthCheckResponse);
        });
      });

      describe("checkResource", () => {
        it("checks a principal's permissions on a resource", async () => {
          const result = await clients.default.checkResource({
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

          const outputs: OutputResult[] = versionIsAtLeast(
            "0.27.0",
            cerbosVersion,
          )
            ? [
                {
                  source: "resource.document.v1#delete",
                  value: "delete_allowed:me@example.com",
                },
              ]
            : [];

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
              validationErrors: [
                {
                  path: "/country/alpha2",
                  message: "does not match pattern '[A-Z]{2}'",
                  source: ValidationErrorSource.PRINCIPAL,
                },
              ],
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
              outputs,
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

        describe.each([true, false])(
          "with includeMetadata: %s",
          (includeMetadata) => {
            it("checks a principal's permissions on a set of resources", async () => {
              const response = await clients.default.checkResources({
                ...request,
                includeMetadata,
              });

              const outputs: OutputResult[] = versionIsAtLeast(
                "0.27.0",
                cerbosVersion,
              )
                ? [
                    {
                      source: "resource.document.v1#delete",
                      value: "delete_allowed:me@example.com",
                    },
                  ]
                : [];

              expect(response).toEqual(
                new CheckResourcesResponse({
                  cerbosCallId: versionDependentCallIdMatcher(cerbosVersion),
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
                      validationErrors: [
                        {
                          path: "/country/alpha2",
                          message: "does not match pattern '[A-Z]{2}'",
                          source: ValidationErrorSource.PRINCIPAL,
                        },
                      ],
                      metadata: includeMetadata
                        ? {
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
                          }
                        : undefined,
                      outputs,
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
                      validationErrors: [
                        {
                          path: "/country/alpha2",
                          message: "does not match pattern '[A-Z]{2}'",
                          source: ValidationErrorSource.PRINCIPAL,
                        },
                      ],
                      metadata: includeMetadata
                        ? {
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
                          }
                        : undefined,
                      outputs,
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
                      validationErrors: [
                        {
                          path: "/country/alpha2",
                          message: "does not match pattern '[A-Z]{2}'",
                          source: ValidationErrorSource.PRINCIPAL,
                        },
                        {
                          path: "/owner",
                          message: "expected string, but got number",
                          source: ValidationErrorSource.RESOURCE,
                        },
                      ],
                      metadata: includeMetadata
                        ? {
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
                          }
                        : undefined,
                      outputs,
                    }),
                  ],
                }),
              );
            });
          },
        );

        describe("when configured to throw on validation error", () => {
          it("throws on validation error", async () => {
            await expect(
              clients.throwOnValidationError.checkResources(request),
            ).rejects.toThrow(
              new ValidationFailed([
                {
                  path: "/country/alpha2",
                  message: "does not match pattern '[A-Z]{2}'",
                  source: ValidationErrorSource.PRINCIPAL,
                },
                {
                  path: "/owner",
                  message: "expected string, but got number",
                  source: ValidationErrorSource.RESOURCE,
                },
              ]),
            );
          });
        });

        describe("when configured with a callback on validation error", () => {
          it("throws on validation error", async () => {
            await clients.callbackOnValidationError.checkResources(request);

            expect(validationFailed).toHaveBeenCalledWith([
              {
                path: "/country/alpha2",
                message: "does not match pattern '[A-Z]{2}'",
                source: ValidationErrorSource.PRINCIPAL,
              },
              {
                path: "/owner",
                message: "expected string, but got number",
                source: ValidationErrorSource.RESOURCE,
              },
            ]);
          });
        });
      });

      describe("isAllowed", () => {
        it("checks if a principal is allowed to perform an action on a resource", async () => {
          const allowed = await clients.default.isAllowed({
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

      describe("planResources", () => {
        describe("with action", () => {
          const request: PlanResourcesRequest = {
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
              policyVersion: "1",
              scope: "test",
              attr: {},
            },
            action: "edit",
            auxData: {
              jwt: {
                token: new UnsecuredJWT({ delete: true }).encode(),
              },
            },
            includeMetadata: true,
            requestId: "42",
          };

          it("returns a query plan for resources", async () => {
            const response = await clients.default.planResources(request);

            expect(response).toEqual({
              cerbosCallId: versionDependentCallIdMatcher(cerbosVersion),
              requestId: "42",
              kind: PlanKind.CONDITIONAL,
              condition: new PlanExpression("eq", [
                new PlanExpressionVariable("request.resource.attr.owner"),
                new PlanExpressionValue("me@example.com"),
              ]),
              validationErrors: versionIsAtLeast("0.19.0", cerbosVersion)
                ? [
                    {
                      path: "/country/alpha2",
                      message: "does not match pattern '[A-Z]{2}'",
                      source: ValidationErrorSource.PRINCIPAL,
                    },
                  ]
                : [],
              metadata: {
                conditionString: versionIsAtLeast("0.18.0", cerbosVersion)
                  ? '(eq request.resource.attr.owner "me@example.com")'
                  : '(request.resource.attr.owner == "me@example.com")',
                matchedScope: "test",
                matchedScopes: {},
              },
            } satisfies PlanResourcesResponse);
          });

          describeIfVersionIsAtLeast("0.19.0", cerbosVersion)(
            "when configured to throw on validation error",
            () => {
              it("throws on validation error", async () => {
                await expect(
                  clients.throwOnValidationError.planResources(request),
                ).rejects.toThrow(
                  new ValidationFailed([
                    {
                      path: "/country/alpha2",
                      message: "does not match pattern '[A-Z]{2}'",
                      source: ValidationErrorSource.PRINCIPAL,
                    } satisfies ValidationError,
                  ]),
                );
              });
            },
          );

          describeIfVersionIsAtLeast("0.19.0", cerbosVersion)(
            "when configured with a callback on validation error",
            () => {
              it("calls the callback on validation error", async () => {
                await clients.callbackOnValidationError.planResources(request);

                expect(validationFailed).toHaveBeenCalledWith([
                  {
                    path: "/country/alpha2",
                    message: "does not match pattern '[A-Z]{2}'",
                    source: ValidationErrorSource.PRINCIPAL,
                  } satisfies ValidationError,
                ]);
              });
            },
          );
        });

        describeIfVersionIsAtLeast("0.44.0", cerbosVersion)(
          "with actions",
          () => {
            const request: PlanResourcesRequest = {
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
                policyVersion: "1",
                scope: "test",
                attr: {},
              },
              actions: ["edit"],
              auxData: {
                jwt: {
                  token: new UnsecuredJWT({ delete: true }).encode(),
                },
              },
              includeMetadata: true,
              requestId: "42",
            };

            it("returns a query plan for resources", async () => {
              const response = await clients.default.planResources(request);

              expect(response).toEqual({
                cerbosCallId: callIdMatcher,
                requestId: "42",
                kind: PlanKind.CONDITIONAL,
                condition: new PlanExpression("eq", [
                  new PlanExpressionVariable("request.resource.attr.owner"),
                  new PlanExpressionValue("me@example.com"),
                ]),
                validationErrors: [
                  {
                    path: "/country/alpha2",
                    message: "does not match pattern '[A-Z]{2}'",
                    source: ValidationErrorSource.PRINCIPAL,
                  },
                ],
                metadata: {
                  conditionString:
                    '(eq request.resource.attr.owner "me@example.com")',
                  matchedScope: "",
                  matchedScopes: {
                    edit: "test",
                  },
                },
              } satisfies PlanResourcesResponse);
            });

            describe("when configured to throw on validation error", () => {
              it("throws on validation error", async () => {
                await expect(
                  clients.throwOnValidationError.planResources(request),
                ).rejects.toThrow(
                  new ValidationFailed([
                    {
                      path: "/country/alpha2",
                      message: "does not match pattern '[A-Z]{2}'",
                      source: ValidationErrorSource.PRINCIPAL,
                    } satisfies ValidationError,
                  ]),
                );
              });
            });

            describe("when configured with a callback on validation error", () => {
              it("calls the callback on validation error", async () => {
                await clients.callbackOnValidationError.planResources(request);

                expect(validationFailed).toHaveBeenCalledWith([
                  {
                    path: "/country/alpha2",
                    message: "does not match pattern '[A-Z]{2}'",
                    source: ValidationErrorSource.PRINCIPAL,
                  } satisfies ValidationError,
                ]);
              });
            });
          },
        );
      });

      describe("serverInfo", () => {
        it("returns information about the server", async () => {
          const result = await clients.default.serverInfo();

          expect(result).toEqual({
            buildDate: expect.stringMatching(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
            ),
            commit: expect.stringMatching(/^[0-9a-f]{40}$/),
            version: cerbosVersion,
          } satisfies ServerInfo);
        });
      });

      describe("withPrincipal", () => {
        describe("checkResource", () => {
          it("checks a principal's permissions on a resource", async () => {
            const result = await clients.default
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

            const outputs: OutputResult[] = versionIsAtLeast(
              "0.27.0",
              cerbosVersion,
            )
              ? [
                  {
                    source: "resource.document.v1#delete",
                    value: "delete_allowed:me@example.com",
                  },
                ]
              : [];

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
                validationErrors: [
                  {
                    path: "/country/alpha2",
                    message: "does not match pattern '[A-Z]{2}'",
                    source: ValidationErrorSource.PRINCIPAL,
                  },
                ],
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
                outputs,
              }),
            );
          });

          it("uses the principal's JWT", async () => {
            const result = await clients.default
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

            const outputs: OutputResult[] = versionIsAtLeast(
              "0.27.0",
              cerbosVersion,
            )
              ? [
                  {
                    source: "resource.document.v1#delete",
                    value: "delete_allowed:me@example.com",
                  },
                ]
              : [];

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
                validationErrors: [
                  {
                    path: "/country/alpha2",
                    message: "does not match pattern '[A-Z]{2}'",
                    source: ValidationErrorSource.PRINCIPAL,
                  },
                ],
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
                outputs,
              }),
            );
          });

          it("allows the principal's JWT to be overridden", async () => {
            const result = await clients.default
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

            const outputs: OutputResult[] = versionIsAtLeast(
              "0.27.0",
              cerbosVersion,
            )
              ? [
                  {
                    source: "resource.document.v1#delete",
                    value: "delete_allowed:me@example.com",
                  },
                ]
              : [];

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
                validationErrors: [
                  {
                    path: "/country/alpha2",
                    message: "does not match pattern '[A-Z]{2}'",
                    source: ValidationErrorSource.PRINCIPAL,
                  },
                ],
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
                outputs,
              }),
            );
          });

          it("works without a JWT", async () => {
            const result = await clients.default
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

            const outputs: OutputResult[] =
              cerbosVersion === "0.27.0"
                ? [
                    {
                      source: "resource.document.v1#delete",
                      value: "delete_allowed:me@example.com",
                    },
                  ]
                : [];

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
                validationErrors: [
                  {
                    path: "/country/alpha2",
                    message: "does not match pattern '[A-Z]{2}'",
                    source: ValidationErrorSource.PRINCIPAL,
                  },
                ],
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
                outputs,
              }),
            );
          });
        });

        describe("checkResources", () => {
          it("checks a principal's permissions on a set of resources", async () => {
            const response = await clients.default
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

            const outputs: OutputResult[] = versionIsAtLeast(
              "0.27.0",
              cerbosVersion,
            )
              ? [
                  {
                    source: "resource.document.v1#delete",
                    value: "delete_allowed:me@example.com",
                  },
                ]
              : [];

            expect(response).toEqual(
              new CheckResourcesResponse({
                cerbosCallId: versionDependentCallIdMatcher(cerbosVersion),
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
                    validationErrors: [
                      {
                        path: "/country/alpha2",
                        message: "does not match pattern '[A-Z]{2}'",
                        source: ValidationErrorSource.PRINCIPAL,
                      },
                    ],
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
                    outputs,
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
                    validationErrors: [
                      {
                        path: "/country/alpha2",
                        message: "does not match pattern '[A-Z]{2}'",
                        source: ValidationErrorSource.PRINCIPAL,
                      },
                    ],
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
                    outputs,
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
                    validationErrors: [
                      {
                        path: "/country/alpha2",
                        message: "does not match pattern '[A-Z]{2}'",
                        source: ValidationErrorSource.PRINCIPAL,
                      },
                      {
                        path: "/owner",
                        message: "expected string, but got number",
                        source: ValidationErrorSource.RESOURCE,
                      },
                    ],
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
                    outputs,
                  }),
                ],
              }),
            );
          });

          it("uses the principal's JWT", async () => {
            const response = await clients.default
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

            const outputs: OutputResult[] = versionIsAtLeast(
              "0.27.0",
              cerbosVersion,
            )
              ? [
                  {
                    source: "resource.document.v1#delete",
                    value: "delete_allowed:me@example.com",
                  },
                ]
              : [];

            expect(response).toEqual(
              new CheckResourcesResponse({
                cerbosCallId: versionDependentCallIdMatcher(cerbosVersion),
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
                    validationErrors: [
                      {
                        path: "/country/alpha2",
                        message: "does not match pattern '[A-Z]{2}'",
                        source: ValidationErrorSource.PRINCIPAL,
                      },
                    ],
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
                    outputs,
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
                    validationErrors: [
                      {
                        path: "/country/alpha2",
                        message: "does not match pattern '[A-Z]{2}'",
                        source: ValidationErrorSource.PRINCIPAL,
                      },
                    ],
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
                    outputs,
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
                    validationErrors: [
                      {
                        path: "/country/alpha2",
                        message: "does not match pattern '[A-Z]{2}'",
                        source: ValidationErrorSource.PRINCIPAL,
                      },
                      {
                        path: "/owner",
                        message: "expected string, but got number",
                        source: ValidationErrorSource.RESOURCE,
                      },
                    ],
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
                    outputs,
                  }),
                ],
              }),
            );
          });

          it("allows the principal's JWT to be overridden", async () => {
            const response = await clients.default
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

            const outputs: OutputResult[] = versionIsAtLeast(
              "0.27.0",
              cerbosVersion,
            )
              ? [
                  {
                    source: "resource.document.v1#delete",
                    value: "delete_allowed:me@example.com",
                  },
                ]
              : [];

            expect(response).toEqual(
              new CheckResourcesResponse({
                cerbosCallId: versionDependentCallIdMatcher(cerbosVersion),
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
                    validationErrors: [
                      {
                        path: "/country/alpha2",
                        message: "does not match pattern '[A-Z]{2}'",
                        source: ValidationErrorSource.PRINCIPAL,
                      },
                    ],
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
                    outputs,
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
                    validationErrors: [
                      {
                        path: "/country/alpha2",
                        message: "does not match pattern '[A-Z]{2}'",
                        source: ValidationErrorSource.PRINCIPAL,
                      },
                    ],
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
                    outputs,
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
                    validationErrors: [
                      {
                        path: "/country/alpha2",
                        message: "does not match pattern '[A-Z]{2}'",
                        source: ValidationErrorSource.PRINCIPAL,
                      },
                      {
                        path: "/owner",
                        message: "expected string, but got number",
                        source: ValidationErrorSource.RESOURCE,
                      },
                    ],
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
                    outputs,
                  }),
                ],
              }),
            );
          });

          it("works without a JWT", async () => {
            const response = await clients.default
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

            const outputs: OutputResult[] =
              cerbosVersion === "0.27.0"
                ? [
                    {
                      source: "resource.document.v1#delete",
                      value: "delete_allowed:me@example.com",
                    },
                  ]
                : [];

            expect(response).toEqual(
              new CheckResourcesResponse({
                cerbosCallId: versionDependentCallIdMatcher(cerbosVersion),
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
                    validationErrors: [
                      {
                        path: "/country/alpha2",
                        message: "does not match pattern '[A-Z]{2}'",
                        source: ValidationErrorSource.PRINCIPAL,
                      },
                    ],
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
                    outputs,
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
                    validationErrors: [
                      {
                        path: "/country/alpha2",
                        message: "does not match pattern '[A-Z]{2}'",
                        source: ValidationErrorSource.PRINCIPAL,
                      },
                    ],
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
                    outputs,
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
                    validationErrors: [
                      {
                        path: "/country/alpha2",
                        message: "does not match pattern '[A-Z]{2}'",
                        source: ValidationErrorSource.PRINCIPAL,
                      },
                      {
                        path: "/owner",
                        message: "expected string, but got number",
                        source: ValidationErrorSource.RESOURCE,
                      },
                    ],
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
                    outputs,
                  }),
                ],
              }),
            );
          });
        });

        describe("isAllowed", () => {
          it("checks if a principal is allowed to perform an action on a resource", async () => {
            const allowed = await clients.default
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
            const allowed = await clients.default
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
            const allowed = await clients.default
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
            const allowed = await clients.default
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

      it("handles errors", async () => {
        await expect(
          clients.default.checkResources({
            principal: {
              id: "",
              roles: [],
            },
            resources: [],
          }),
        ).rejects.toMatchObject({
          constructor: NotOK,
          code: Status.INVALID_ARGUMENT,
          details: invalidArgumentDetails(cerbosVersion),
        });
      });
    },
  );
}
