import "./fetch-polyfill";

import { readFileSync } from "fs";
import { resolve } from "path";
import { createSecureContext } from "tls";

import {
  AdminCredentials,
  CheckResourcesRequest,
  CheckResourcesResponse,
  CheckResourcesResult,
  Client,
  DerivedRoles,
  Effect,
  NotOK,
  Options,
  PlanExpression,
  PlanExpressionValue,
  PlanExpressionVariable,
  PlanKind,
  PlanResourcesRequest,
  Policy,
  Status,
  ValidationErrorSource,
  ValidationFailed,
  ValidationFailedCallback,
} from "@cerbos/core";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";
import { afterAll, beforeAll, describe, expect, it, jest } from "@jest/globals";
import { UnsecuredJWT } from "jose";
import YAML from "yaml";

import {
  Ports,
  cerbosVersion,
  cerbosVersionIsAtLeast,
  ports as serverPorts,
} from "./servers";

const readPEM = (filename: string): string =>
  readFileSync(resolve(__dirname, "../servers/tmp/certificates", filename), {
    encoding: "utf-8",
  });

describe("Client", () => {
  let ports: Ports;

  beforeAll(async () => {
    ports = await serverPorts();
  });

  describe("cerbos", () => {
    const cases = [
      {
        type: "gRPC | TCP | plaintext",
        client: (options: Options = {}): Client =>
          new GRPC(`localhost:${ports.grpc.plaintext}`, {
            tls: false,
            ...options,
          }),
      },
      {
        type: "gRPC | TCP | TLS",
        client: (options: Options = {}): Client =>
          new GRPC(`localhost:${ports.grpc.tls}`, {
            tls: createSecureContext({
              ca: readPEM("server.root.crt"),
            }),
            ...options,
          }),
      },
      {
        type: "gRPC | TCP | mTLS",
        client: (options: Options = {}): Client =>
          new GRPC(`localhost:${ports.grpc.mtls}`, {
            tls: createSecureContext({
              ca: readPEM("server.root.crt"),
              cert: readPEM("client.crt"),
              key: readPEM("client.key"),
            }),
            ...options,
          }),
      },
      {
        type: "HTTP",
        client: (options: Options = {}): Client =>
          new HTTP(`http://localhost:${ports.http.plaintext}`, options),
      },
    ];

    if (process.platform === "linux") {
      cases.push({
        type: "gRPC | Unix socket | plaintext",
        client: (options: Options = {}): Client =>
          new GRPC(
            `unix:${resolve(__dirname, "../servers/tmp/socket/cerbos")}`,
            {
              tls: false,
              ...options,
            }
          ),
      });
    }

    describe.each(cases)(
      "$type",
      ({ client: factory }: typeof cases[number]) => {
        let clients: {
          default: Client;
          throwOnValidationError: Client;
          callbackOnValidationError: Client;
        };

        const validationFailed = jest.fn<ValidationFailedCallback>();

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

        describe("checkResource", () => {
          it("checks a principal's permissions on a resource", async () => {
            const result = await clients.default.checkResource({
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
            const response = await clients.default.checkResources(request);

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
                  }),
                ],
              })
            );
          });

          describe("when configured to throw on validation error", () => {
            it("throws on validation error", async () => {
              await expect(
                clients.throwOnValidationError.checkResources(request)
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
                ])
              );
            });
          });

          describe("when configured with a callback on validation error", () => {
            it("throws on validation error", async () => {
              await clients.callbackOnValidationError.checkResources(request);

              expect(validationFailed).toBeCalledWith([
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

        describe("planResources", () => {
          const request: PlanResourcesRequest = {
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
              policyVersion: "1",
              scope: "test",
              attributes: {},
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
              requestId: "42",
              kind: PlanKind.CONDITIONAL,
              condition: new PlanExpression("eq", [
                new PlanExpressionVariable("request.resource.attr.owner"),
                new PlanExpressionValue("me@example.com"),
              ]),
              validationErrors: cerbosVersionIsAtLeast("0.19.0-prerelease")
                ? [
                    {
                      path: "/country/alpha2",
                      message: "does not match pattern '[A-Z]{2}'",
                      source: ValidationErrorSource.PRINCIPAL,
                    },
                  ]
                : [],
              metadata: {
                conditionString: cerbosVersionIsAtLeast("0.18.0")
                  ? '(eq request.resource.attr.owner "me@example.com")'
                  : '(request.resource.attr.owner == "me@example.com")',
                matchedScope: "test",
              },
            });
          });

          if (cerbosVersionIsAtLeast("0.19.0-prerelease")) {
            describe("when configured to throw on validation error", () => {
              it("throws on validation error", async () => {
                await expect(
                  clients.throwOnValidationError.planResources(request)
                ).rejects.toThrow(
                  new ValidationFailed([
                    {
                      path: "/country/alpha2",
                      message: "does not match pattern '[A-Z]{2}'",
                      source: ValidationErrorSource.PRINCIPAL,
                    },
                  ])
                );
              });
            });

            describe("when configured with a callback on validation error", () => {
              it("throws on validation error", async () => {
                await clients.callbackOnValidationError.planResources(request);

                expect(validationFailed).toBeCalledWith([
                  {
                    path: "/country/alpha2",
                    message: "does not match pattern '[A-Z]{2}'",
                    source: ValidationErrorSource.PRINCIPAL,
                  },
                ]);
              });
            });
          }
        });

        describe("serverInfo", () => {
          it("returns information about the server", async () => {
            const result = await clients.default.serverInfo();

            expect(result).toEqual({
              buildDate: expect.stringMatching(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/
              ) as unknown,
              commit: expect.stringMatching(/^[0-9a-f]{40}$/) as unknown,
              version: cerbosVersion,
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
            })
          ).rejects.toThrow(
            new NotOK(
              Status.INVALID_ARGUMENT,
              "invalid CheckResourcesRequest.Principal: embedded message failed validation | caused by: invalid Principal.Id: value length must be at least 1 runes"
            )
          );
        });
      }
    );
  });

  describe("admin", () => {
    const adminCredentials: AdminCredentials = {
      username: "cerbos",
      password: "cerbosAdmin",
    };

    const ca = readPEM("server.root.crt");

    const cases = [
      {
        type: "gRPC",
        client: (port: keyof typeof ports["grpc"]): Client =>
          new GRPC(`localhost:${ports.grpc[port]}`, {
            adminCredentials,
            tls: createSecureContext({ ca }),
          }),
      },
      {
        type: "HTTP",
        client: (port: keyof typeof ports["http"]): Client =>
          new HTTP(`https://localhost:${ports.http[port]}`, {
            adminCredentials,
          }),
      },
    ];

    describe.each(cases)("$type", ({ client: factory }) => {
      let mutable: Client;
      let reloadable: Client;

      beforeAll(() => {
        mutable = factory("mutable");
        reloadable = factory("tls");
      });

      describe("addOrUpdatePolicies / listPolicies / getPolicy", () => {
        const inlinePolicy: DerivedRoles = {
          derivedRoles: {
            name: "owner",
            definitions: [
              {
                name: "OWNER",
                parentRoles: ["USER"],
                condition: {
                  match: {
                    expr: "request.resource.attr.owner == request.principal.id",
                  },
                },
              },
            ],
          },
        };

        const policyFromFile = YAML.parse(
          readFileSync(
            resolve(__dirname, "../servers/policies/document.yaml"),
            {
              encoding: "utf-8",
            }
          )
        ) as Policy;

        it.each([
          {
            source: "defined inline",
            id: "derived_roles.owner",
            policy: inlinePolicy,
          },
          {
            source: "parsed from YAML",
            id: "resource.document.v1",
            policy: policyFromFile,
          },
        ])("round-trips a policy $source", async ({ id, policy }) => {
          await mutable.addOrUpdatePolicies({
            policies: [policy],
          });

          const { ids } = await mutable.listPolicies();
          expect(ids).toContain(id);

          const roundTrippedPolicy = await mutable.getPolicy(id);
          expect(roundTrippedPolicy).toMatchObject({ ...policy });
        });
      });

      describe("addOrUpdateSchema / listSchemas / getSchema / deleteSchema", () => {
        it.each([
          {
            source: "defined inline",
            input: {
              type: "object",
            },
          },
          {
            source: "from a string",
            input: `{ "type": "object" }`,
          },
          {
            source: "from a buffer",
            input: Buffer.from(`{ "type": "object" }`),
          },
        ])("round-trips a schema $source", async ({ input }) => {
          const id = "object";
          await mutable.addOrUpdateSchemas({
            schemas: [
              {
                id,
                definition: input,
              },
            ],
          });

          const { ids } = await mutable.listSchemas();
          expect(ids).toContain(id);

          const schema = await mutable.getSchema(id);
          expect(schema?.id).toEqual(id);
          expect(schema?.definition.toObject()).toEqual({
            type: "object",
          });

          await mutable.deleteSchema(id);
          const { ids: remainingIds } = await mutable.listSchemas();
          expect(remainingIds).not.toContain(id);
        });
      });

      describe("reloadStore", () => {
        it("reloads the store", async () => {
          await expect(
            reloadable.reloadStore({ wait: true })
          ).resolves.toBeUndefined();
        });
      });
    });
  });
});
