/* eslint-disable vitest/no-standalone-expect */

import { setTimeout } from "timers/promises";

import type { Message } from "@bufbuild/protobuf";
import { Code, ConnectError } from "@connectrpc/connect";
import type { Mock } from "vitest";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vitest,
} from "vitest";

import type {
  Bundle as BundleMessage,
  Bundle_Metadata as BundleMetadataMessage,
} from "@cerbos/api/cerbos/cloud/epdp/v2/epdp_pb";
import { NotOK, Status } from "@cerbos/core";
import { PolicyLoader } from "@cerbos/embedded-client";
import type { Server as EmbeddedServer } from "@cerbos/embedded-server";

import { Server as HubServer } from "../../hub/server";

type BundleMetadata = Omit<BundleMetadataMessage, keyof Message>;
type Bundle = Omit<BundleMessage, keyof Message | "metadata"> & {
  metadata: BundleMetadata;
};

const bundle1: Bundle = {
  metadata: {
    bundleId: "NUP7SEQDLTPEQFTU",
    ruleRevision: 42n,
  },
  contents: new Uint8Array([0x01]),
};

const bundle2: Bundle = {
  metadata: {
    bundleId: "EX5DMXN016TDJPM8",
    ruleRevision: 42n,
  },
  contents: new Uint8Array([0x02]),
};

const bundle3: Bundle = {
  metadata: {
    bundleId: "EX5DMXN016TDJPM8",
    ruleRevision: 43n,
  },
  contents: new Uint8Array([0x03]),
};

describe("PolicyLoader", () => {
  describe.each([true, false])("authenticated: %s", (authenticated) => {
    describe.each([
      {
        description: "automatic activation",
        activateOnLoad: true,
      },
      {
        description: "manual activation",
        activateOnLoad: false,
        interval: 0.15,
      },
      {
        description: "no updates",
        interval: 0,
      },
    ])("$description", ({ activateOnLoad, interval }) => {
      const hubServer = new HubServer();

      beforeAll(async () => {
        await hubServer.start();
      });

      beforeEach(() => {
        if (authenticated) {
          hubServer.expectIssueAccessToken(() => ({
            accessToken: "let-me-in",
            expiresIn: { seconds: 60n * 60n },
          }));
        }
      });

      afterEach(() => {
        hubServer.reset();
      });

      it("loads policies", async () => {
        const test = new LoaderTest();

        expectGetBundle(undefined, bundle1);

        await Promise.all([test.start(0), test.start(1)]);
        test.expectLoaded(bundle1, 0, 1);
        test.reset();

        await test.start(2);
        test.expectNotLoaded(0, 1);
        test.expectLoaded(bundle1, 2);

        if (interval !== 0) {
          await test.nextUpdate(bundle1.metadata, "notModified");
          await test.nextUpdate(bundle1.metadata, bundle2);
          await test.nextUpdate(bundle2.metadata, "error");
          await test.nextUpdate(bundle2.metadata, bundle3);
          test.loader.stop();
        }

        await test.finish();
      });

      it("throws if initial load fails", async () => {
        const test = new LoaderTest();

        expectGetBundle(undefined, "error");
        const results = await Promise.allSettled([
          test.start(0),
          test.start(1),
        ]);

        for (const result of results) {
          if (result.status !== "rejected") {
            expect.fail("initial load succeeded");
          }

          expectNotOK(result.reason);
        }

        try {
          await test.start(2);
          expect.unreachable();
        } catch (error) {
          expectNotOK(error);
        }

        test.expectNotLoaded();
        await test.finish();
      });

      function expectGetBundle(
        ifModifiedSince: BundleMetadata | undefined,
        result: Bundle | "notModified" | "error",
      ): void {
        hubServer.expectGetBundle(
          authenticated ? "let-me-in" : null,
          {
            ruleId: "B5LU9EVYN1MD",
            scopes: ["test"],
            ifModifiedSince,
          },
          () => {
            switch (result) {
              case "notModified":
                return { result: { case: "notModified", value: {} } };

              case "error":
                throw new ConnectError("down", Code.Unavailable);

              default:
                return { result: { case: "bundle", value: result } };
            }
          },
        );
      }

      type EmbeddedServerIndex = 0 | 1 | 2;

      class LoaderTest {
        public readonly loader: PolicyLoader;

        private update: PromiseWithResolvers<NotOK | undefined> | undefined;
        private unexpectedUpdate = false;
        private readonly loadRuleTable = [
          mockLoadRuleTable(),
          mockLoadRuleTable(),
          mockLoadRuleTable(),
        ] as const;

        public constructor() {
          this.loader = new PolicyLoader({
            ruleId: "B5LU9EVYN1MD",
            scopes: ["test"],
            activateOnLoad,
            interval,
            onUpdate: (error): void => {
              if (this.update) {
                this.update.resolve(error);
                this.update = undefined;
              } else {
                this.unexpectedUpdate = true;
              }
            },
            baseUrl: hubServer.baseUrl,
            credentials: authenticated ? hubServer.credentials : undefined,
          });
        }

        public async start(index: EmbeddedServerIndex): Promise<void> {
          await this.loader["~start"]({
            loadRuleTable: this.loadRuleTable[index],
          } as unknown as EmbeddedServer);
        }

        public async finish(): Promise<void> {
          await setTimeout(200);
          this.reset();
        }

        public expectLoaded(
          { contents }: Bundle,
          ...indexes: EmbeddedServerIndex[]
        ): void {
          for (const loadRuleTable of this.loadRuleTables(indexes)) {
            expect(loadRuleTable).toHaveBeenCalledExactlyOnceWith(contents);
          }
        }

        public expectNotLoaded(...indexes: EmbeddedServerIndex[]): void {
          for (const loadRuleTable of this.loadRuleTables(indexes)) {
            expect(loadRuleTable).not.toHaveBeenCalled();
          }
        }

        private loadRuleTables(
          indexes: EmbeddedServerIndex[],
        ): readonly Mock<LoadRuleTable>[] {
          return indexes.length > 0
            ? indexes.map((index) => this.loadRuleTable[index])
            : this.loadRuleTable;
        }

        public async nextUpdate(
          ifModifiedSince: BundleMetadata,
          result: Bundle | "notModified" | "error",
        ): Promise<void> {
          this.reset();
          const updateSignal = this.loader["~updateSignal"];

          const expectNotLoaded = (): void => {
            this.expectNotLoaded();
            expect(this.loader["~updateSignal"]).toBe(updateSignal);
          };

          expectGetBundle(ifModifiedSince, result);
          this.update = Promise.withResolvers();
          const error = await this.update.promise;

          switch (result) {
            case "notModified":
              expect(error).toBeUndefined();
              expectNotLoaded();
              break;

            case "error":
              expectNotOK(error);
              expectNotLoaded();
              break;

            default:
              expect(error).toBeUndefined();

              if (!activateOnLoad) {
                expectNotLoaded();
                this.loader.activate();
              }

              this.expectLoaded(result);
              expect(this.loader["~updateSignal"]).not.toEqual(updateSignal);
          }
        }

        public reset(): void {
          hubServer.reset();

          if (this.unexpectedUpdate) {
            expect.fail("onUpdate called unexpectedly");
          }

          for (const loadRuleTable of this.loadRuleTable) {
            loadRuleTable.mockClear();
          }
        }
      }
    });
  });
});

function expectNotOK(error: unknown): void {
  expect(error).toBeInstanceOf(NotOK);
  expect(error).toMatchObject({ code: Status.UNAVAILABLE, details: "down" });
}

type LoadRuleTable = EmbeddedServer["loadRuleTable"];

function mockLoadRuleTable(): Mock<LoadRuleTable> {
  return vitest.fn();
}
