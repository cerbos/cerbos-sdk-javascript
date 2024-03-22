import { readdirSync } from "fs";
import { resolve } from "path";
import { createSecureContext } from "tls";

import type { Client, DerivedRoles } from "@cerbos/core";
import { readPolicy, readSchema } from "@cerbos/files";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";
import { compare as semverCompare, lte as semverLte } from "semver";
import { beforeAll, describe, expect, it } from "vitest";

import type { CerbosService, Ports } from "../servers";
import {
  adminCredentials,
  ca,
  cerbosVersion,
  cerbosVersionIsAtLeast,
  ports as serverPorts,
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
            tls: createSecureContext({ ca }),
          }),
      },
      {
        type: "HTTP",
        client: (service: CerbosService): Client =>
          new HTTP(`https://localhost:${ports[service].http}`, {
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
