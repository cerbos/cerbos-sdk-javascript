import { createServer as createHTTPServer } from "http";
import type { AddressInfo } from "net";

import type { Client } from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";
import { Server as GRPCServer, ServerCredentials } from "@grpc/grpc-js";
import { beforeAll, beforeEach, describe, expect, test } from "vitest";

import type { ServerInfoResponse } from "../protobuf/cerbos/response/v1/response";
import type { CerbosServiceServer } from "../protobuf/cerbos/svc/v1/svc";
import { CerbosServiceService as CerbosService } from "../protobuf/cerbos/svc/v1/svc";

const dummyResponse: ServerInfoResponse = {
  version: "test",
  commit: "",
  buildDate: "",
};

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

    test("before sending the request", async () => {
      const controller = new AbortController();
      const reason = new Error("Don't even");
      controller.abort(reason);

      const response = client.serverInfo({
        signal: controller.signal,
      });

      try {
        await response;
        throw new Error("expected an error to be thrown");
      } catch (error) {
        expect(error).toMatchObject({
          constructor: NotOK,
          code: Status.CANCELLED,
          cause: reason,
        });
      }

      expect(dummyServer.request).toEqual("pending");
    });

    test("while in flight", async () => {
      const controller = new AbortController();
      const reason = new Error("Never mind");

      const response = client.serverInfo({
        signal: controller.signal,
      });

      await dummyServer.received;

      controller.abort(reason);

      try {
        await response;
        throw new Error("expected an error to be thrown");
      } catch (error) {
        expect(error).toMatchObject({
          constructor: NotOK,
          code: Status.CANCELLED,
          cause: reason,
        });
      }

      expect(await dummyServer.request).toEqual("cancelled");
    });

    test("after completion", async () => {
      const controller = new AbortController();

      const response = await client.serverInfo({
        signal: controller.signal,
      });

      controller.abort(new Error("Too late"));

      expect(response).toEqual(dummyResponse);
      expect(await dummyServer.request).toEqual("completed");
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

  protected handle(cancelled: () => boolean, respond: () => void): void {
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
}

class DummyGRPCServer extends DummyServer {
  private readonly server = new GRPCServer();

  public override async start(): Promise<Client> {
    this.server.addService(CerbosService, {
      serverInfo: (call, callback): void => {
        this.handle(
          () => call.cancelled,
          () => {
            callback(null, dummyResponse);
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
    this.handle(
      () => request.destroyed,
      () => {
        response.writeHead(200).end(JSON.stringify(dummyResponse));
      },
    );
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
