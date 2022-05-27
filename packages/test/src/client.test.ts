import "./fetch-polyfill";

import { readFileSync } from "fs";
import { resolve } from "path";
import { createSecureContext } from "tls";

import {
  CheckResourcesResponse,
  CheckResourcesResult,
  Client,
  Effect,
  ValidationErrorSource,
} from "@cerbos/core";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";
import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
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
      client: (): Client =>
        new GRPC(`localhost:${ports.grpc.plaintext}`, { tls: false }),
    },
    {
      type: "gRPC | TCP | TLS",
      client: (): Client =>
        new GRPC(`localhost:${ports.grpc.tls}`, {
          tls: createSecureContext({
            ca: readPEM("server.root.crt"),
          }),
        }),
    },
    {
      type: "gRPC | TCP | mTLS",
      client: (): Client =>
        new GRPC(`localhost:${ports.grpc.mtls}`, {
          tls: createSecureContext({
            ca: readPEM("server.root.crt"),
            cert: readPEM("client.crt"),
            key: readPEM("client.key"),
          }),
        }),
    },
    {
      type: "HTTP",
      client: (): Client => new HTTP(`http://localhost:${ports.http}`),
    },
  ];

  if (process.platform === "linux") {
    cases.push({
      type: "gRPC | Unix socket | plaintext",
      client: (): Client =>
        new GRPC(`unix:${resolve(__dirname, "../servers/tmp/socket/cerbos")}`, {
          tls: false,
        }),
    });
  }

  describe.each(cases)("$type", ({ client: factory }: typeof cases[number]) => {
    let client: Client;

    beforeAll(() => {
      client = factory();
    });

    afterAll(() => {
      if (client instanceof GRPC) {
        client.close();
      }
    });

    describe("checkResources", () => {
      it("checks a principal's permissions on a set of resources", async () => {
        const response = await client.checkResources({
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
    });

    describe("serverInfo", () => {
      it("returns information about the server", async () => {
        const result = await client.serverInfo();

        expect(result).toEqual({
          buildDate: expect.stringMatching(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/
          ) as unknown,
          commit: expect.stringMatching(/^[0-9a-f]{40}$/) as unknown,
          version: cerbosVersion,
        });
      });
    });
  });
});
