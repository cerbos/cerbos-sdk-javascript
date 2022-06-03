import "./fetch-polyfill";

import { readFileSync } from "fs";
import { resolve } from "path";
import { createSecureContext } from "tls";

import {
  CheckResourcesRequest,
  CheckResourcesResponse,
  CheckResourcesResult,
  Client,
  Effect,
  NotOK,
  Options,
  PlanExpression,
  PlanExpressionValue,
  PlanExpressionVariable,
  PlanKind,
  Status,
  ValidationErrorSource,
  ValidationFailed,
  ValidationFailedCallback,
} from "@cerbos/core";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";
import { afterAll, beforeAll, describe, expect, it, jest } from "@jest/globals";
import { UnsecuredJWT } from "jose";

import { Ports, cerbosVersion, ports as serverPorts } from "./servers";

const readPEM = (filename: string): string =>
  readFileSync(resolve(__dirname, "../servers/tmp/certificates", filename), {
    encoding: "utf-8",
  });

describe("client", () => {
  let ports: Ports;

  beforeAll(async () => {
    ports = await serverPorts();
  });

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
        new HTTP(`http://localhost:${ports.http}`, options),
    },
  ];

  if (process.platform === "linux") {
    cases.push({
      type: "gRPC | Unix socket | plaintext",
      client: (options: Options = {}): Client =>
        new GRPC(`unix:${resolve(__dirname, "../servers/tmp/socket/cerbos")}`, {
          tls: false,
          ...options,
        }),
    });
  }

  describe.each(cases)("$type", ({ client: factory }: typeof cases[number]) => {
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
              country: "NZ",
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
            country: "NZ",
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
                  view: Effect.DENY,
                  edit: Effect.DENY,
                  delete: Effect.DENY,
                },
                validationErrors: [
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
                      matchedScope: "",
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
              country: "NZ",
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
      it("returns a query plan for resources", async () => {
        const response = await clients.default.planResources({
          principal: {
            id: "me@example.com",
            policyVersion: "1",
            scope: "test",
            roles: ["USER"],
            attributes: {
              country: "NZ",
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
        });

        expect(response).toEqual({
          requestId: "42",
          kind: PlanKind.CONDITIONAL,
          condition: new PlanExpression("eq", [
            new PlanExpressionVariable("request.resource.attr.owner"),
            new PlanExpressionValue("me@example.com"),
          ]),
          metadata: {
            conditionString:
              '(request.resource.attr.owner == "me@example.com")',
            matchedScope: "test",
          },
        });
      });
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
  });
});
