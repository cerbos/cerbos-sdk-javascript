import { readFile } from "fs/promises";
import { resolve } from "path";

import { UnsecuredJWT } from "jose";
import { afterAll, beforeAll, describe, expect, it, vitest } from "vitest";

import type {
  PolicySource as AuditPolicySource,
  AuxData,
  Client,
  DecisionLogEntry,
  DecodedAuxData,
  OutputResult,
  Principal,
  RequestContext,
  Resource,
  ResourceQuery,
  ValidationError,
} from "@cerbos/core";
import {
  Effect,
  PlanExpression,
  PlanExpressionValue,
  PlanExpressionVariable,
  PlanKind,
  ValidationErrorSource,
} from "@cerbos/core";
import type {
  DecodedJWTPayload,
  Options,
  PolicySource,
} from "@cerbos/embedded-client";
import { Embedded, SchemaEnforcement } from "@cerbos/embedded-client";
import { metadata } from "@cerbos/embedded-server";
import { credentialsFromEnv } from "@cerbos/hub";

import { testCerbosServiceClient } from "../../../client/cerbos.js";
import {
  callIdPattern,
  embeddedV2UserAgent,
  readEmbeddedServerWASM,
} from "../../../helpers.js";

describe("Embedded", () => {
  const onDecision = vitest.fn<Exclude<Options["onDecision"], undefined>>();

  interface TestCase {
    source: string;
    client: (options?: Partial<Options>) => Client;
    bundleId: string;
    storeId: string;
    policySource: AuditPolicySource;
  }

  function buildTestCases(): TestCase[] {
    function client(
      policies: PolicySource,
      options?: Partial<Options>,
    ): Client {
      return new Embedded({
        policies,
        wasm: readEmbeddedServerWASM(),
        decodeJWTPayload: ({ token }): DecodedJWTPayload =>
          UnsecuredJWT.decode(token).payload as DecodedJWTPayload,
        globals: {
          allow_deletion: true,
        },
        onDecision,
        schemaEnforcement: SchemaEnforcement.WARN,
        ...options,
      });
    }

    const localBundleId = "PS2MX9855QURB3Y8";

    const testCases: TestCase[] = [
      {
        source: "local",
        client: (options) =>
          client(
            readFile(
              resolve(__dirname, `../../../../bundles/${localBundleId}.crrt`),
            ),
            options,
          ),
        bundleId: localBundleId,
        storeId: "NKFD70XLV8I5",
        policySource: { kind: "hub", localBundle: { path: "" } },
      },
    ];

    const baseUrl = process.env["CERBOS_HUB_API_ENDPOINT"];

    if (baseUrl) {
      const ruleId = env("CERBOS_HUB_EPDP_RULE_ID");
      const storeId = env("CERBOS_HUB_EPDP_STORE_ID");

      const credentials = credentialsFromEnv({
        CERBOS_HUB_CLIENT_ID: process.env["CERBOS_HUB_EPDP_CLIENT_ID"],
        CERBOS_HUB_CLIENT_SECRET: process.env["CERBOS_HUB_EPDP_CLIENT_SECRET"],
      });

      const scopes = ["test"];

      testCases.push({
        source: "remote",
        client: (options) =>
          client(
            {
              ruleId,
              scopes,
              baseUrl,
              credentials,
              interval: 0,
            },
            options,
          ),
        bundleId: expect.stringMatching(/^[A-Z0-9]{16}$/),
        storeId,
        policySource: {
          kind: "hub",
          embeddedBundle: { ruleId, scopes },
        },
      });
    }

    return testCases;
  }

  describe.each(buildTestCases())(
    "$source",
    ({ client: factory, bundleId, storeId, policySource }) => {
      testCerbosServiceClient({
        type: "client",
        client: factory,
        adminServiceEnabled: false,
        cerbosVersion: metadata.cerbosVersion,
      });

      describe("decision logging", () => {
        let client: Client;

        const now = new Date();

        const requestContext = {
          annotations: {
            baz: {
              qux: 999,
            },
          },
        } satisfies RequestContext;

        const expected = {
          timestamp: now,
          metadata: {
            foo: ["Bar"],
          },
          oversized: false,
          auditTrail: {
            effectivePolicies: {
              "resource.document.v1": {
                bundle_id: bundleId,
                driver: "hub",
                source: `${storeId}/document.yaml`,
              },
              "resource.document.v1/test": {
                bundle_id: bundleId,
                driver: "hub",
                source: `${storeId}/test/document.yaml`,
              },
            },
          },
          peer: {
            address: "",
            authInfo: "",
            forwardedFor: "",
            userAgent: `test/9000 ${embeddedV2UserAgent}`,
          },
          policySource,
          requestContext,
        } satisfies Omit<DecisionLogEntry, "callId" | "method">;

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

        const requestId = "42";

        const validationErrors = [
          {
            path: "/country/alpha2",
            message: "does not match pattern '[A-Z]{2}'",
            source: ValidationErrorSource.PRINCIPAL,
          },
        ] satisfies ValidationError[];

        const auxData = {
          jwt: {
            token: new UnsecuredJWT({ delete: true }).encode(),
          },
        } satisfies AuxData;

        const decodedAuxData = {
          jwt: { delete: true },
        } satisfies DecodedAuxData;

        beforeAll(() => {
          client = factory({
            headers: { Foo: "Bar" },
            userAgent: "test/9000",
          });

          vitest.useFakeTimers();
          vitest.setSystemTime(now);
        });

        afterAll(() => {
          vitest.useRealTimers();
        });

        describe("checkResources", () => {
          it("logs decisions", async () => {
            const mine = {
              kind: "document",
              id: "mine",
              policyVersion: "1",
              scope: "test",
              attr: {
                owner: "me@example.com",
              },
            } satisfies Resource;

            const theirs = {
              kind: "document",
              id: "theirs",
              policyVersion: "1",
              scope: "test",
              attr: {
                owner: "them@example.com",
              },
            } satisfies Resource;

            const invalid = {
              kind: "document",
              id: "invalid",
              policyVersion: "1",
              scope: "test",
              attr: {
                owner: 123,
              },
            } satisfies Resource;

            const actions = ["view", "edit", "delete"];

            const { cerbosCallId: callId } = await client.checkResources({
              principal,
              resources: [
                {
                  resource: mine,
                  actions,
                },
                {
                  resource: theirs,
                  actions,
                },
                {
                  resource: invalid,
                  actions,
                },
              ],
              auxData,
              requestId,
              requestContext,
            });

            const outputs = [
              {
                action: "delete",
                source: "resource.document.v1#delete",
                value: "delete_allowed:me@example.com",
              },
            ] satisfies OutputResult[];

            expect(callId).toMatch(callIdPattern);

            expect(onDecision).toHaveBeenCalledExactlyOnceWith({
              ...expected,
              callId,
              method: {
                name: "CheckResources",
                inputs: [
                  {
                    principal,
                    resource: mine,
                    actions,
                    auxData: decodedAuxData,
                    requestId,
                  },
                  {
                    principal,
                    resource: theirs,
                    actions,
                    auxData: decodedAuxData,
                    requestId,
                  },
                  {
                    principal,
                    resource: invalid,
                    actions,
                    auxData: decodedAuxData,
                    requestId,
                  },
                ],
                outputs: [
                  {
                    resourceId: mine.id,
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
                    outputs,
                    validationErrors,
                    effectiveDerivedRoles: ["OWNER"],
                    requestId,
                  },
                  {
                    resourceId: theirs.id,
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
                    outputs,
                    validationErrors,
                    effectiveDerivedRoles: [],
                    requestId,
                  },
                  {
                    resourceId: invalid.id,
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
                    outputs,
                    validationErrors: [
                      ...validationErrors,
                      {
                        path: "/owner",
                        message: "expected string, but got number",
                        source: ValidationErrorSource.RESOURCE,
                      },
                    ],
                    effectiveDerivedRoles: [],
                    requestId,
                  },
                ],
                error: undefined,
              },
            } satisfies DecisionLogEntry);
          });
        });

        describe("planResources", () => {
          it("logs decisions", async () => {
            const resource = {
              kind: "document",
              policyVersion: "1",
              scope: "test",
              attr: {},
            } satisfies ResourceQuery;

            const { cerbosCallId: callId } = await client.planResources({
              principal,
              resource,
              actions: ["edit"],
              auxData: {
                jwt: {
                  token: new UnsecuredJWT({ delete: true }).encode(),
                },
              },
              includeMetadata: true,
              requestId,
              requestContext,
            });

            expect(callId).toMatch(callIdPattern);

            expect(onDecision).toHaveBeenCalledExactlyOnceWith({
              ...expected,
              callId,
              method: {
                name: "PlanResources",
                input: {
                  principal,
                  resource,
                  action: "edit",
                  actions: ["edit"],
                  auxData: decodedAuxData,
                  requestId,
                },
                output: {
                  policyVersion: resource.policyVersion,
                  scope: resource.scope,
                  action: "edit",
                  actions: ["edit"],
                  kind: PlanKind.CONDITIONAL,
                  condition: new PlanExpression("eq", [
                    new PlanExpressionVariable("request.resource.attr.owner"),
                    new PlanExpressionValue("me@example.com"),
                  ]),
                  conditionString:
                    '(eq request.resource.attr.owner "me@example.com")',
                  validationErrors,
                  requestId,
                },
                error: undefined,
              },
            } satisfies DecisionLogEntry);
          });
        });
      });

      describe("default policy version", () => {
        let client: Client;

        const principal = {
          id: "me@example.com",
          scope: "test",
          roles: ["USER"],
          attr: {
            country: {
              alpha2: "",
              alpha3: "NZL",
            },
          },
        } satisfies Principal;

        const resource = {
          kind: "document",
          id: "mine",
          scope: "test",
          attr: {
            owner: "me@example.com",
          },
        } satisfies Resource;

        beforeAll(() => {
          client = factory({ defaultPolicyVersion: "1" });
        });

        it("applies to requests without a policy version", async () => {
          const result = await client.checkResource({
            principal,
            resource,
            actions: ["view"],
            includeMetadata: true,
          });

          expect(result.metadata?.actions["view"]?.matchedPolicy).toEqual(
            "resource.document.v1/test",
          );
        });
      });

      describe("default scope", () => {
        let client: Client;

        const principal = {
          id: "me@example.com",
          policyVersion: "1",
          roles: ["USER"],
          attr: {
            country: {
              alpha2: "",
              alpha3: "NZL",
            },
          },
        } satisfies Principal;

        const resource = {
          kind: "document",
          id: "mine",
          policyVersion: "1",
          attr: {
            owner: "me@example.com",
          },
        } satisfies Resource;

        beforeAll(() => {
          client = factory({ defaultScope: "test" });
        });

        it("applies to requests without a scope", async () => {
          const result = await client.checkResource({
            principal,
            resource,
            actions: ["view"],
            includeMetadata: true,
          });

          expect(result.metadata?.actions["view"]?.matchedPolicy).toEqual(
            "resource.document.v1/test",
          );
        });
      });
    },
  );
});

function env(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}
