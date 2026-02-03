import { createServer as createHTTPServer } from "http";
import type { AddressInfo } from "net";

import { Server as GRPCServer, ServerCredentials } from "@grpc/grpc-js";
import { beforeAll, beforeEach, describe, expect, test } from "vitest";

import type { AccessLogEntry, Client } from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";

import {
  ListAuditLogEntriesResponse,
  ServerInfoResponse,
} from "../protobuf/cerbos/response/v1/response.js";
import type {
  CerbosAdminServiceServer as AdminServiceServer,
  CerbosServiceServer,
} from "../protobuf/cerbos/svc/v1/svc.js";
import {
  CerbosAdminServiceService as AdminService,
  CerbosServiceService as CerbosService,
} from "../protobuf/cerbos/svc/v1/svc.js";

const dummyUnaryResponse: ServerInfoResponse = {
  version: "test",
  commit: "",
  buildDate: "",
};

const dummyServerStreamResponse = {
  entry: {
    $case: "accessLogEntry",
    accessLogEntry: {
      callId: "01HXVAJQTJHBHDZ3SMP1GH9E1Y",
      timestamp: new Date(),
      peer: {
        address: "1.2.3.4:5678",
        authInfo: "",
        forwardedFor: "1.1.1.1, 2.2.2.2",
        userAgent: "test/9000",
      },
      metadata: {},
      method: "cerbos.svc.v1.CerbosService/ServerInfo",
      statusCode: Status.OK,
      oversized: false,
      policySource: undefined,
      requestContext: undefined,
    },
  },
} satisfies ListAuditLogEntriesResponse;

describe("aborting requests", () => {
  describe.each([
    ["gRPC", new DummyGRPCServer()],
    ["HTTP", new DummyHTTPServer()],
  ])("%s", (_, dummyServer) => {
    let client: Client;

    beforeAll(async () => {
      client = await dummyServer.start();
    });

    beforeEach(() => {
      dummyServer.reset();
    });

    describe("unary", () => {
      test("before sending the request", async () => {
        const controller = new AbortController();
        const reason = new Error("Don't even");
        controller.abort(reason);

        const response = client.serverInfo({
          signal: controller.signal,
        });

        await expect(response).rejects.toMatchObject({
          constructor: NotOK,
          code: Status.CANCELLED,
          details: "Aborted: Don't even",
          cause: reason,
        });

        expect(await dummyServer.request).toEqual("pending");
      });

      test("while in flight", async () => {
        const controller = new AbortController();
        const reason = new Error("Never mind");

        const response = client.serverInfo({
          signal: controller.signal,
        });

        await dummyServer.received;

        controller.abort(reason);

        await expect(response).rejects.toMatchObject({
          constructor: NotOK,
          code: Status.CANCELLED,
          details: "Aborted: Never mind",
          cause: reason,
        });

        expect(await dummyServer.request).toEqual("cancelled");
      });

      test("after completion", async () => {
        const controller = new AbortController();

        const response = await client.serverInfo({
          signal: controller.signal,
        });

        controller.abort(new Error("Too late"));

        expect(response).toEqual(dummyUnaryResponse);
        expect(await dummyServer.request).toEqual("completed");
      });
    });

    describe("serverStream", () => {
      test("before sending the request", async () => {
        const controller = new AbortController();
        const reason = new Error("Don't even");
        controller.abort(reason);

        const stream = client.listAccessLogEntries(
          { filter: { tail: 10 } },
          { signal: controller.signal },
        );

        await expect(stream.next()).rejects.toMatchObject({
          constructor: NotOK,
          code: Status.CANCELLED,
          details: "Aborted: Don't even",
          cause: reason,
        });

        expect(await dummyServer.request).toEqual("pending");
      });

      test("while in flight", async () => {
        const controller = new AbortController();
        const reason = new Error("Never mind");

        const stream = client.listAccessLogEntries(
          { filter: { tail: 10 } },
          { signal: controller.signal },
        );

        expect(await stream.next()).toEqual({
          done: false,
          value: dummyServerStreamResponse.entry.accessLogEntry,
        } satisfies IteratorResult<AccessLogEntry, void>);

        controller.abort(reason);

        await expect(stream.next()).rejects.toMatchObject({
          constructor: NotOK,
          code: Status.CANCELLED,
          details: "Aborted: Never mind",
          cause: reason,
        });

        expect(await dummyServer.request).toEqual("cancelled");
      });

      test("after completion", async () => {
        const controller = new AbortController();

        for await (const response of client.listAccessLogEntries(
          { filter: { tail: 10 } },
          { signal: controller.signal },
        )) {
          expect(response).toEqual(
            dummyServerStreamResponse.entry.accessLogEntry,
          );
        }

        controller.abort(new Error("Too late"));

        expect(await dummyServer.request).toEqual("completed");
      });

      test("automatically after stopping consuming the stream", async () => {
        const controller = new AbortController();

        for await (const response of client.listAccessLogEntries(
          { filter: { tail: 10 } },
          { signal: controller.signal },
        )) {
          expect(response).toEqual(
            dummyServerStreamResponse.entry.accessLogEntry,
          );

          break;
        }

        expect(await dummyServer.request).toEqual("cancelled");
      });
    });
  });
});

abstract class DummyServer {
  public request!: Promise<"cancelled" | "completed"> | "pending";
  public received!: Promise<boolean>;

  private onReceive = (): void => {
    this.received = Promise.resolve(true);
  };

  private onReset = (): void => {
    this.received = Promise.resolve(false);
  };

  public constructor() {
    this.reset();
  }

  public reset(): void {
    this.onReset();

    this.request = "pending";

    this.received = new Promise((resolve) => {
      this.onReceive = (): void => {
        resolve(true);
      };

      this.onReset = (): void => {
        resolve(false);
      };
    });
  }

  public abstract start(): Promise<Client>;

  public abstract stop(): Promise<void>;

  protected handleUnary(cancelled: () => boolean, respond: () => void): void {
    this.request = new Promise((resolve) => {
      setTimeout(() => {
        if (cancelled()) {
          resolve("cancelled");
        } else {
          respond();
          resolve("completed");
        }
      }, 50);
    });

    this.onReceive();
  }

  protected handleServerStream(
    cancelled: () => boolean,
    respond: (first: boolean) => void,
  ): void {
    this.request = new Promise((resolve) => {
      let responses = 0;
      const timeout = setTimeout(() => {
        if (cancelled()) {
          resolve("cancelled");
        } else {
          responses++;
          respond(responses === 1);
          if (responses === 2) {
            resolve("completed");
          } else {
            timeout.refresh();
          }
        }
      }, 50);
    });

    this.onReceive();
  }
}

class DummyGRPCServer extends DummyServer {
  private readonly server = new GRPCServer();

  public override async start(): Promise<Client> {
    this.server.addService(AdminService, {
      listAuditLogEntries: (call): void => {
        this.handleServerStream(
          () => call.cancelled,
          (first) => {
            call.write(dummyServerStreamResponse);
            if (!first) {
              call.end();
            }
          },
        );
      },
    } satisfies Pick<AdminServiceServer, "listAuditLogEntries">);

    this.server.addService(CerbosService, {
      serverInfo: (call, callback): void => {
        this.handleUnary(
          () => call.cancelled,
          () => {
            callback(null, dummyUnaryResponse);
          },
        );
      },
    } satisfies Pick<CerbosServiceServer, "serverInfo">);

    return await new Promise((resolve, reject) => {
      this.server.bindAsync(
        "localhost:0",
        ServerCredentials.createInsecure(),
        (error, port) => {
          if (error) {
            reject(error);
          } else {
            resolve(new GRPC(`localhost:${port}`, { tls: false }));
          }
        },
      );
    });
  }

  public override async stop(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.server.tryShutdown((error) => {
        if (error) {
          try {
            this.server.forceShutdown();
          } catch (error) {
            reject(error); // eslint-disable-line @typescript-eslint/prefer-promise-reject-errors
          }
        }

        resolve();
      });
    });
  }
}

class DummyHTTPServer extends DummyServer {
  private readonly server = createHTTPServer((request, response) => {
    if (request.url === "/api/server_info") {
      this.handleUnary(
        () => request.destroyed,
        () => {
          response
            .writeHead(200)
            .end(JSON.stringify(ServerInfoResponse.toJSON(dummyUnaryResponse)));
        },
      );
    } else {
      this.handleServerStream(
        () => request.destroyed,
        (first) => {
          if (first) {
            response.writeHead(200);
          }

          response.write(
            JSON.stringify({
              result: ListAuditLogEntriesResponse.toJSON(
                dummyServerStreamResponse,
              ),
            }) + "\n",
          );

          if (!first) {
            response.end();
          }
        },
      );
    }
  });

  public override async start(): Promise<Client> {
    return await new Promise((resolve, reject) => {
      this.server.on("error", reject);

      this.server.listen(0, "localhost", () => {
        const { port } = this.server.address() as AddressInfo;
        resolve(new HTTP(`http://localhost:${port}`));
        this.server.off("error", reject);
      });
    });
  }

  public override async stop(): Promise<void> {
    await new Promise<void>((resolve) => {
      this.server.close(() => {
        resolve();
      });
    });
  }
}
