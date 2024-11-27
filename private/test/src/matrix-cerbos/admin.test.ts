import { readdirSync } from "fs";
import { resolve } from "path";

import { UnsecuredJWT } from "jose";
import { compare as semverCompare, lte as semverLte } from "semver";
import { beforeAll, describe, expect, it } from "vitest";

import type {
  AccessLogEntry,
  AuxData,
  CheckResourcesRequest,
  Client,
  DecisionLogEntry,
  DecodedAuxData,
  DerivedRoles,
  InspectPoliciesResponse,
  ListAccessLogEntriesRequest,
  ListDecisionLogEntriesRequest,
  OutputResult,
  Peer,
  PlanResourcesRequest,
  Principal,
  ValidationError,
} from "@cerbos/core";
import {
  Effect,
  InspectedAttributeKind,
  InspectedConstantKind,
  InspectedDerivedRoleKind,
  InspectedVariableKind,
  PlanExpression,
  PlanExpressionValue,
  PlanExpressionVariable,
  PlanKind,
  Status,
  ValidationErrorSource,
} from "@cerbos/core";
import { readPolicy, readSchema } from "@cerbos/files";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";

import {
  describeIfCerbosVersionIsAtLeast,
  grpcUserAgent,
  httpUserAgent,
  retry,
} from "../helpers";
import type { CerbosService, Ports } from "../servers";
import {
  adminCredentials,
  cerbosVersion,
  cerbosVersionIsAtLeast,
  ports as serverPorts,
  tls,
} from "../servers";

const policiesDirectory = resolve(__dirname, "../../servers/policies");

const policiesVersion = readdirSync(policiesDirectory)
  .sort((a, b) => semverCompare(`${b}.0`, `${a}.0`))
  .find((version) => semverLte(`${version}.0-prelease`, cerbosVersion));

if (!policiesVersion) {
  throw new Error(
    `Couldn't determine policies version for Cerbos version ${cerbosVersion}`,
  );
}

describe("Client", () => {
  let ports: Ports;

  beforeAll(async () => {
    ports = await serverPorts();
  });

  describe("admin", () => {
    const cases = [
      {
        type: "gRPC",
        client: (service: CerbosService): Client =>
          new GRPC(`localhost:${ports[service].grpc}`, {
            adminCredentials,
            tls: tls(),
          }),
        expectedUserAgent: grpcUserAgent,
      },
      {
        type: "HTTP",
        client: (service: CerbosService): Client =>
          new HTTP(`https://localhost:${ports[service].http}`, {
            adminCredentials,
          }),
        expectedUserAgent: httpUserAgent,
      },
    ];

    describe.each(cases)("$type", ({ client: factory, expectedUserAgent }) => {
      let mutable: Client;
      let reloadable: Client;

      beforeAll(() => {
        mutable = factory("mutable");
        reloadable = factory("tls");
      });

      // Prior to 0.33.0, the minimum flushInterval for audit logs was 5s, which makes this painfully slow.
      describeIfCerbosVersionIsAtLeast("0.33.0")("audit logs", () => {
        const headers: HeadersInit = {
          Foo: "bar",
          "X-Forwarded-For": "1.1.1.1, 2.2.2.2, 3.3.3.3",
        };

        const principal = {
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
        } satisfies Principal;

        const principalValidationError = {
          path: "/country/alpha2",
          message: "does not match pattern '[A-Z]{2}'",
          source: ValidationErrorSource.PRINCIPAL,
        } satisfies ValidationError;

        const decodedAuxData = {
          jwt: { delete: true },
        } satisfies DecodedAuxData;

        const auxData = {
          jwt: {
            token: new UnsecuredJWT(decodedAuxData.jwt).encode(),
          },
        } satisfies AuxData;

        const expectedMetadata: Record<string, string[]> = {
          foo: ["bar"],
        };

        const expectedPeer: Peer = {
          address: expect.stringMatching(/^\d{1,3}(?:\.\d{1,3}){3}:\d{1,5}$/),
          authInfo: "",
          forwardedFor: expect.stringContaining("1.1.1.1, 2.2.2.2, 3.3.3.3"),
          userAgent: expectedUserAgent,
        };

        interface AuditLogTestCase {
          expectedAccessLogEntry: AccessLogEntry;
          expectedDecisionLogEntry: DecisionLogEntry;
        }

        async function checkResources(): Promise<AuditLogTestCase> {
          const request = {
            principal,
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
            auxData,
            includeMetadata: true,
            requestId: "check-resources",
          } satisfies CheckResourcesRequest;

          const response = await reloadable.checkResources(request, {
            headers,
          });

          const outputs: OutputResult[] = [
            {
              source: "resource.document.v1#delete",
              value: "delete_allowed:me@example.com",
            },
          ];

          return {
            expectedAccessLogEntry: {
              callId: response.cerbosCallId,
              timestamp: expect.any(Date),
              peer: expectedPeer,
              metadata: expectedMetadata,
              method: "/cerbos.svc.v1.CerbosService/CheckResources",
              statusCode: Status.OK,
            },
            expectedDecisionLogEntry: {
              callId: response.cerbosCallId,
              timestamp: expect.any(Date),
              peer: expectedPeer,
              metadata: expectedMetadata,
              auditTrail: {
                effectivePolicies: {
                  "resource.document.v1": {
                    driver: "disk",
                    source: "document.yaml",
                  },
                  "resource.document.v1/test": {
                    driver: "disk",
                    source: "test/document.yaml",
                  },
                },
              },
              method: {
                name: "CheckResources",
                inputs: request.resources.map(({ resource, actions }) => ({
                  requestId: request.requestId,
                  principal,
                  resource,
                  actions,
                  auxData: decodedAuxData,
                })),
                outputs: [
                  {
                    requestId: request.requestId,
                    resourceId: "mine",
                    actions: {
                      view: {
                        effect: Effect.ALLOW,
                        policy: "resource.document.v1/test",
                        scope: "test",
                      },
                      edit: {
                        effect: Effect.ALLOW,
                        policy: "resource.document.v1/test",
                        scope: "test",
                      },
                      delete: {
                        effect: Effect.ALLOW,
                        policy: "resource.document.v1/test",
                        scope: "",
                      },
                    },
                    effectiveDerivedRoles: ["OWNER"],
                    validationErrors: [principalValidationError],
                    outputs,
                  },
                  {
                    requestId: request.requestId,
                    resourceId: "theirs",
                    actions: {
                      view: {
                        effect: Effect.ALLOW,
                        policy: "resource.document.v1/test",
                        scope: "test",
                      },
                      edit: {
                        effect: Effect.DENY,
                        policy: "resource.document.v1/test",
                        scope: "",
                      },
                      delete: {
                        effect: Effect.ALLOW,
                        policy: "resource.document.v1/test",
                        scope: "",
                      },
                    },
                    effectiveDerivedRoles: [],
                    validationErrors: [principalValidationError],
                    outputs,
                  },
                  {
                    requestId: request.requestId,
                    resourceId: "invalid",
                    actions: {
                      view: {
                        effect: Effect.ALLOW,
                        policy: "resource.document.v1/test",
                        scope: "test",
                      },
                      edit: {
                        effect: Effect.DENY,
                        policy: "resource.document.v1/test",
                        scope: "",
                      },
                      delete: {
                        effect: Effect.ALLOW,
                        policy: "resource.document.v1/test",
                        scope: "",
                      },
                    },
                    effectiveDerivedRoles: [],
                    validationErrors: [
                      principalValidationError,
                      {
                        path: "/owner",
                        message: "expected string, but got number",
                        source: ValidationErrorSource.RESOURCE,
                      },
                    ],
                    outputs,
                  },
                ],
                error: undefined,
              },
            },
          };
        }

        async function planResourcesUnconditional(): Promise<AuditLogTestCase> {
          const request = {
            principal,
            resource: {
              kind: "document",
              policyVersion: "1",
              scope: "test",
              attr: {
                owner: "me@example.com",
              },
            },
            action: "edit",
            auxData,
            includeMetadata: true,
            requestId: "plan-resources-unconditional",
          } satisfies PlanResourcesRequest;

          const response = await reloadable.planResources(request, {
            headers,
          });

          return {
            expectedAccessLogEntry: {
              callId: response.cerbosCallId,
              timestamp: expect.any(Date),
              peer: expectedPeer,
              metadata: expectedMetadata,
              method: "/cerbos.svc.v1.CerbosService/PlanResources",
              statusCode: Status.OK,
            },
            expectedDecisionLogEntry: {
              callId: response.cerbosCallId,
              timestamp: expect.any(Date),
              peer: expectedPeer,
              metadata: expectedMetadata,
              auditTrail: {
                effectivePolicies: {
                  "resource.document.v1": {
                    driver: "disk",
                    source: "document.yaml",
                  },
                  "resource.document.v1/test": {
                    driver: "disk",
                    source: "test/document.yaml",
                  },
                },
              },
              method: {
                name: "PlanResources",
                input: {
                  requestId: request.requestId,
                  principal,
                  resource: request.resource,
                  action: request.action,
                  auxData: decodedAuxData,
                },
                output: {
                  requestId: request.requestId,
                  action: request.action,
                  policyVersion: "1",
                  scope: "test",
                  validationErrors: [principalValidationError],
                  kind: PlanKind.ALWAYS_ALLOWED,
                },
                error: undefined,
              },
            },
          };
        }

        async function planResourcesConditional(): Promise<AuditLogTestCase> {
          const request = {
            principal,
            resource: {
              kind: "document",
              policyVersion: "1",
              scope: "test",
              attr: {},
            },
            action: "edit",
            auxData,
            includeMetadata: true,
            requestId: "plan-resources-unconditional",
          } satisfies PlanResourcesRequest;

          const response = await reloadable.planResources(request, {
            headers,
          });

          return {
            expectedAccessLogEntry: {
              callId: response.cerbosCallId,
              timestamp: expect.any(Date),
              peer: expectedPeer,
              metadata: expectedMetadata,
              method: "/cerbos.svc.v1.CerbosService/PlanResources",
              statusCode: Status.OK,
            },
            expectedDecisionLogEntry: {
              callId: response.cerbosCallId,
              timestamp: expect.any(Date),
              peer: expectedPeer,
              metadata: expectedMetadata,
              auditTrail: {
                effectivePolicies: {
                  "resource.document.v1": {
                    driver: "disk",
                    source: "document.yaml",
                  },
                  "resource.document.v1/test": {
                    driver: "disk",
                    source: "test/document.yaml",
                  },
                },
              },
              method: {
                name: "PlanResources",
                input: {
                  requestId: request.requestId,
                  principal,
                  resource: request.resource,
                  action: request.action,
                  auxData: decodedAuxData,
                },
                output: {
                  requestId: request.requestId,
                  action: request.action,
                  policyVersion: "1",
                  scope: "test",
                  validationErrors: [principalValidationError],
                  kind: PlanKind.CONDITIONAL,
                  condition: new PlanExpression("eq", [
                    new PlanExpressionVariable("request.resource.attr.owner"),
                    new PlanExpressionValue("me@example.com"),
                  ]),
                  conditionString:
                    '(eq request.resource.attr.owner "me@example.com")',
                },
                error: undefined,
              },
            },
          };
        }

        describe.each([
          ["checkResources", checkResources],
          ["planResources (unconditional)", planResourcesUnconditional],
          ["planResources (conditional)", planResourcesConditional],
        ])("%s", (_, testCaseFactory) => {
          let testCase: AuditLogTestCase;
          let sent: Date;
          let received: Date;
          let found = false;

          async function retryUntilFound(
            fn: () => Promise<void>,
          ): Promise<void> {
            await retry({ attempts: found ? 1 : 10, delay: 250 }, fn);
            found = true;
          }

          beforeAll(async () => {
            sent = new Date();
            testCase = await testCaseFactory();
            received = new Date();
          });

          describe("getAccessLogEntry", () => {
            it("looks up an access log entry by call ID", async () => {
              await retryUntilFound(async () => {
                const entry = await reloadable.getAccessLogEntry(
                  testCase.expectedAccessLogEntry.callId,
                );

                expect(entry).toEqual(testCase.expectedAccessLogEntry);
              });
            });
          });

          describe("getDecisionLogEntry", () => {
            it("looks up an decision log entry by call ID", async () => {
              await retryUntilFound(async () => {
                const entry = await reloadable.getDecisionLogEntry(
                  testCase.expectedDecisionLogEntry.callId,
                );

                expect(entry).toEqual(testCase.expectedDecisionLogEntry);
              });
            });
          });

          describe("listAccessLogEntries", () => {
            async function expectListAccessLogEntries(
              request: ListAccessLogEntriesRequest,
            ): Promise<void> {
              await retryUntilFound(async () => {
                const expected = testCase.expectedAccessLogEntry;

                for await (const entry of reloadable.listAccessLogEntries(
                  request,
                )) {
                  if (entry.callId === expected.callId) {
                    expect(entry).toEqual(expected);
                    return;
                  }
                }

                throw new Error(
                  `Access log entry with call ID ${expected.callId} not listed`,
                );
              });
            }

            describe("between", () => {
              it("returns entries between timestamps", async () => {
                await expectListAccessLogEntries({
                  filter: { start: sent, end: received },
                });
              });
            });

            describe("since", () => {
              it("returns entries within a duration", async () => {
                await expectListAccessLogEntries({
                  filter: { since: 5 + (Date.now() - sent.getTime()) / 1000 },
                });
              });
            });

            describe("tail", () => {
              it("returns the last N entries", async () => {
                await expectListAccessLogEntries({
                  filter: { tail: 100 },
                });
              });
            });
          });

          describe("listDecisionLogEntries", () => {
            async function expectListDecisionLogEntries(
              request: ListDecisionLogEntriesRequest,
            ): Promise<void> {
              await retryUntilFound(async () => {
                const expected = testCase.expectedDecisionLogEntry;

                for await (const entry of reloadable.listDecisionLogEntries(
                  request,
                )) {
                  if (entry.callId === expected.callId) {
                    expect(entry).toEqual(expected);
                    return;
                  }
                }

                throw new Error(
                  `Decision log entry with call ID ${expected.callId} not listed`,
                );
              });
            }

            describe("between", () => {
              it("returns entries between timestamps", async () => {
                await expectListDecisionLogEntries({
                  filter: { start: sent, end: received },
                });
              });
            });

            describe("since", () => {
              it("returns entries within a duration", async () => {
                await expectListDecisionLogEntries({
                  filter: { since: 5 + (Date.now() - sent.getTime()) / 1000 },
                });
              });
            });

            describe("tail", () => {
              it("returns the last N entries", async () => {
                await expectListDecisionLogEntries({
                  filter: { tail: 100 },
                });
              });
            });
          });
        });
      });

      describe("addOrUpdatePolicies / listPolicies / getPolicy / disablePolicy", () => {
        it.each([
          {
            source: "defined inline",
            id: "derived_roles.owner",
            policy: {
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
            } satisfies DerivedRoles,
          },
          {
            source: "parsed from YAML",
            id: "resource.document.v1",
            policy: readPolicy(
              `${policiesDirectory}/${policiesVersion}/document.yaml`,
            ),
          },
        ])("round-trips a policy $source", async ({ id, policy }) => {
          await mutable.addOrUpdatePolicies({
            policies: [await policy],
          });

          const { ids } = await mutable.listPolicies();
          expect(ids).toContain(id);

          const roundTrippedPolicy = await mutable.getPolicy(id);
          expect(roundTrippedPolicy).toMatchObject({
            ...(await policy),
            metadata: {
              storeIdentifer: id,
              storeIdentifier: id,
            },
          });

          if (cerbosVersionIsAtLeast("0.25.0")) {
            const disabled = await mutable.disablePolicy(id);
            expect(disabled).toBe(true);

            const { ids: remainingIds } = await mutable.listPolicies();
            expect(remainingIds).not.toContain(id);

            if (cerbosVersionIsAtLeast("0.26.0")) {
              const { ids: disabledIds } = await mutable.listPolicies({
                includeDisabled: true,
              });
              expect(disabledIds).toContain(id);

              const enabled = await mutable.enablePolicy(id);
              expect(enabled).toBe(true);

              const { ids: enabledIds } = await mutable.listPolicies();
              expect(enabledIds).toContain(id);
            }
          }
        });
      });

      describe("addOrUpdateSchema / listSchemas / getSchema / deleteSchema", () => {
        const definition = {
          $schema: "https://json-schema.org/draft/2020-12/schema",
          type: "object",
          properties: {
            owner: { type: "string" },
          },
        };

        it.each([
          {
            source: "defined inline",
            schema: {
              id: "inline",
              definition,
            },
          },
          {
            source: "from a string",
            schema: {
              id: "string",
              definition: JSON.stringify(definition),
            },
          },
          {
            source: "from a buffer",
            schema: {
              id: "buffer",
              definition: Buffer.from(JSON.stringify(definition)),
            },
          },
          {
            source: "from a file",
            schema: readSchema(
              `${policiesDirectory}/${policiesVersion}/_schemas/document.json`,
              { id: "file" },
            ),
          },
        ])("round-trips a schema $source", async ({ schema }) => {
          const { id } = await schema;
          await mutable.addOrUpdateSchemas({
            schemas: [await schema],
          });

          const { ids } = await mutable.listSchemas();
          expect(ids).toContain(id);

          const roundTrippedSchema = await mutable.getSchema(id);
          expect(roundTrippedSchema?.id).toEqual(id);
          expect(roundTrippedSchema?.definition.toObject()).toEqual(definition);

          const deleted = await mutable.deleteSchema(id);
          expect(deleted).toBe(cerbosVersionIsAtLeast("0.25.0"));

          const { ids: remainingIds } = await mutable.listSchemas();
          expect(remainingIds).not.toContain(id);
        });
      });

      describeIfCerbosVersionIsAtLeast("0.35.0")("inspectPolicies", () => {
        it("returns policy details", async () => {
          const { policies } = await reloadable.inspectPolicies();

          if (cerbosVersion === "0.37.0") {
            for (const policy of Object.values(policies)) {
              policy.variables.sort((a, b) => a.name.localeCompare(b.name));
            }
          }

          expect(policies).toEqual(expectedInspectedPolicies());
        });
      });

      describe("reloadStore", () => {
        it("reloads the store", async () => {
          await expect(
            reloadable.reloadStore({ wait: true }),
          ).resolves.toBeUndefined();
        });
      });
    });
  });
});

function expectedInspectedPolicies(): InspectPoliciesResponse["policies"] {
  if (cerbosVersionIsAtLeast("0.40.0")) {
    return {
      "derived_roles.owner": {
        id: "owner.yaml",
        actions: [],
        attributes: [
          {
            kind: InspectedAttributeKind.RESOURCE,
            name: "owner",
          },
        ],
        constants: [],
        derivedRoles: [
          {
            kind: InspectedDerivedRoleKind.EXPORTED,
            name: "OWNER",
            source: "derived_roles.owner",
          },
        ],
        variables: [],
      },
      "resource.document.v1": {
        id: "document.yaml",
        actions: ["delete"],
        attributes: [],
        constants: [
          {
            kind: InspectedConstantKind.LOCAL,
            name: "output",
            value: "delete_allowed:%s",
            source: "resource.document.v1",
            used: true,
          },
        ],
        derivedRoles: [],
        variables: [
          {
            kind: InspectedVariableKind.LOCAL,
            name: "allow_deletion",
            definition: "globals.allow_deletion && request.aux_data.jwt.delete",
            source: "resource.document.v1",
            used: true,
          },
        ],
      },
      "resource.document.v1/test": {
        id: "test/document.yaml",
        actions: ["edit", "view"],
        attributes: [],
        constants: [],
        derivedRoles: [
          {
            kind: InspectedDerivedRoleKind.IMPORTED,
            name: "OWNER",
            source: "derived_roles.owner",
          },
        ],
        variables: [],
      },
    };
  }

  if (cerbosVersionIsAtLeast("0.38.0")) {
    return {
      "derived_roles.owner": {
        id: "owner.yaml",
        actions: [],
        attributes: [
          {
            kind: InspectedAttributeKind.RESOURCE,
            name: "owner",
          },
        ],
        constants: [],
        derivedRoles: [
          {
            kind: InspectedDerivedRoleKind.EXPORTED,
            name: "OWNER",
            source: "derived_roles.owner",
          },
        ],
        variables: [],
      },
      "resource.document.v1": {
        id: "document.yaml",
        actions: ["delete"],
        attributes: [],
        constants: [],
        derivedRoles: [],
        variables: [
          {
            kind: InspectedVariableKind.LOCAL,
            name: "allow_deletion",
            definition: "globals.allow_deletion && request.aux_data.jwt.delete",
            source: "resource.document.v1",
            used: true,
          },
          {
            kind: InspectedVariableKind.LOCAL,
            name: "output",
            definition: '"delete_allowed"',
            source: "resource.document.v1",
            used: false,
          },
        ],
      },
      "resource.document.v1/test": {
        id: "test/document.yaml",
        actions: ["edit", "view"],
        attributes: [],
        constants: [],
        derivedRoles: [
          {
            kind: InspectedDerivedRoleKind.IMPORTED,
            name: "OWNER",
            source: "derived_roles.owner",
          },
        ],
        variables: [],
      },
    };
  }

  if (cerbosVersionIsAtLeast("0.37.0")) {
    return {
      "derived_roles.owner": {
        id: "owner.yaml",
        actions: [],
        attributes: [],
        constants: [],
        derivedRoles: [
          {
            kind: InspectedDerivedRoleKind.EXPORTED,
            name: "OWNER",
            source: "derived_roles.owner",
          },
        ],
        variables: [],
      },
      "resource.document.v1": {
        id: "document.yaml",
        actions: ["delete"],
        attributes: [],
        constants: [],
        derivedRoles: [],
        variables: [
          {
            kind: InspectedVariableKind.LOCAL,
            name: "allow_deletion",
            definition: "globals.allow_deletion && request.aux_data.jwt.delete",
            source: "resource.document.v1",
            used: true,
          },
          {
            kind: InspectedVariableKind.LOCAL,
            name: "output",
            definition: '"delete_allowed"',
            source: "resource.document.v1",
            used: false,
          },
        ],
      },
      "resource.document.v1/test": {
        id: "test/document.yaml",
        actions: ["edit", "view"],
        attributes: [],
        constants: [],
        derivedRoles: [
          {
            kind: InspectedDerivedRoleKind.IMPORTED,
            name: "OWNER",
            source: "derived_roles.owner",
          },
        ],
        variables: [],
      },
    };
  }

  return {
    "resource.document.v1": {
      id: "",
      actions: ["delete"],
      attributes: [],
      constants: [],
      derivedRoles: [],
      variables: [],
    },
    "resource.document.v1/test": {
      id: "",
      actions: ["edit", "view"],
      attributes: [],
      constants: [],
      derivedRoles: [],
      variables: [],
    },
  };
}
