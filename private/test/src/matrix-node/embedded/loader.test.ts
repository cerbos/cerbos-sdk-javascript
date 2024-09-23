import { createReadStream, readFileSync } from "fs";
import { readFile } from "fs/promises";
import { createServer } from "http";
import type { AddressInfo } from "net";
import { Readable } from "stream";
import { setTimeout } from "timers/promises";

import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from "vitest";

import type { BundleMetadata, Options, Source } from "@cerbos/embedded";
import { AutoUpdatingLoader, LoadError, Loader } from "@cerbos/embedded";

import { bundleFilePath as bundleFilePathForCommit } from "../../helpers";

interface Bundle {
  etag: string;
  metadata: BundleMetadata;
}

const first: Bundle = {
  etag: '"9017f17ef4224dc634cf33b25201d463"',
  metadata: {
    builtAt: new Date(Date.UTC(2024, 2, 25, 11, 45, 14)),
    commit: "68337848cb3f987627da7381653d82c6d4e368a5",
    policies: [
      "cerbos.resource.document.v1",
      "cerbos.resource.document.v1/test",
    ],
  },
};

const second: Bundle = {
  etag: '"26d5b714d3790b596e18b36af406f57b"',
  metadata: {
    builtAt: new Date(Date.UTC(2024, 3, 11, 11, 16, 12)),
    commit: "38612c14bd01c7a832b5c1a04a83d9b103e25478",
    policies: [
      "cerbos.resource.document.v1",
      "cerbos.resource.document.v1/test",
    ],
  },
};

describe("loaders", () => {
  const server = new DummyServer();

  beforeAll(async () => {
    await server.start();
  });

  afterAll(async () => {
    await server.stop();
  });

  beforeEach(() => {
    server.reset();
  });

  describe("Loader", () => {
    test.each<[type: string, source: () => Source]>([
      ["string", (): string => server.url],
      ["URL", (): URL => new URL(server.url)],
      ["ArrayBuffer", (): ArrayBuffer => readFileSync(bundleFilePath(first))],
      [
        "Promise<ArrayBuffer>",
        async (): Promise<ArrayBuffer> => await readFile(bundleFilePath(first)),
      ],
      [
        "Response",
        (): Response =>
          new Response(
            Readable.toWeb(
              createReadStream(bundleFilePath(first)),
            ) as ReadableStream,
            {
              status: 200,
              headers: { "Content-Type": "application/wasm" },
            },
          ),
      ],
      [
        "Promise<Response>",
        async (): Promise<Response> => await fetch(server.url),
      ],
      [
        "WebAssembly.Module",
        (): WebAssembly.Module =>
          new WebAssembly.Module(readFileSync(bundleFilePath(first))),
      ],
      [
        "Promise<WebAssembly.Module>",
        async (): Promise<WebAssembly.Module> =>
          await WebAssembly.compile(await readFile(bundleFilePath(first))),
      ],
    ])("%s", async (_, source) => {
      const callbacks = new Callbacks();
      const loader = new Loader(source(), callbacks);

      const active = await loader.active();
      expect(active).toEqual(first.metadata);
      expect(await callbacks.next()).toBe(active);
    });

    test("rejected promise", async () => {
      const cause = new Error("💥");

      const callbacks = new Callbacks();
      const loader = new Loader(Promise.reject(cause), callbacks);

      const error = await rejection(loader.active());
      expectLoadError(error, cause);
      expect(await callbacks.next()).toBe(error);
    });

    test("unsuccessful response", async () => {
      server.error = true;
      const callbacks = new Callbacks();
      const loader = new Loader(server.url, callbacks);

      const error = await rejection(loader.active());
      expectLoadError(error, server.errorMessage);
      expect(await callbacks.next()).toBe(error);
    });
  });

  describe("AutoUpdatingLoader", () => {
    test("activateOnLoad: true", async () => {
      const callbacks = new Callbacks();
      const loader = new AutoUpdatingLoader(server.url, callbacks);

      const loadedFirst = await callbacks.next();
      expect(loadedFirst).toEqual(first.metadata);
      expect(await loader.active()).toBe(loadedFirst);
      expect(loader.pending).toBeUndefined();

      server.bundle = second;

      const loadedSecond = await callbacks.next();
      expect(loadedSecond).toEqual(second.metadata);
      expect(await loader.active()).toBe(loadedSecond);
      expect(loader.pending).toBeUndefined();

      expect(await callbacks.next()).toBeUndefined();
      expect(await loader.active()).toBe(loadedSecond);
      expect(loader.pending).toBeUndefined();

      server.error = true;

      expectLoadError(await callbacks.next(), server.errorMessage);
      expect(await loader.active()).toBe(loadedSecond);
      expect(loader.pending).toBeUndefined();
    });

    test("activateOnLoad: false", async () => {
      const callbacks = new Callbacks();
      const loader = new AutoUpdatingLoader(server.url, {
        activateOnLoad: false,
        ...callbacks,
      });

      const loadedFirst = await callbacks.next();
      expect(loadedFirst).toEqual(first.metadata);
      expect(await loader.active()).toBe(loadedFirst);
      expect(loader.pending).toBeUndefined();

      server.bundle = second;

      const loadedSecond = await callbacks.next();
      expect(loadedSecond).toEqual(second.metadata);
      expect(await loader.active()).toBe(loadedFirst);
      expect(loader.pending).toBe(loadedSecond);

      expect(await callbacks.next()).toBeUndefined();
      expect(await loader.active()).toBe(loadedFirst);
      expect(loader.pending).toBe(loadedSecond);

      loader.activate();

      expect(await loader.active()).toBe(loadedSecond);
      expect(loader.pending).toBeUndefined();

      expect(await callbacks.next()).toBeUndefined();
      expect(await loader.active()).toBe(loadedSecond);
      expect(loader.pending).toBeUndefined();

      server.error = true;

      expectLoadError(await callbacks.next(), server.errorMessage);
      expect(await loader.active()).toBe(loadedSecond);
      expect(loader.pending).toBeUndefined();
    });

    test("stop", async () => {
      const callbacks = new Callbacks();
      const loader = new AutoUpdatingLoader(server.url, callbacks);

      const loaded = await callbacks.next();
      expect(loaded).toEqual(first.metadata);
      expect(await loader.active()).toBe(loaded);

      server.bundle = second;
      loader.stop();

      expect(await callbacks.next()).toBeUndefined();
      expect(await loader.active()).toBe(loaded);
    });
  });
});

function bundleFilePath({ metadata: { commit } }: Bundle): string {
  return bundleFilePathForCommit(commit);
}

function bundleUrlPath({ metadata: { commit } }: Bundle): string {
  return `/bundle/${commit}.wasm`;
}

class DummyServer {
  public bundle!: Bundle;
  public error!: boolean;

  private readonly server = createServer((request, response) => {
    switch (request.url) {
      case "/":
        if (this.error) {
          response.writeHead(500).end("💥");
        } else if (request.headers["if-none-match"] === this.bundle.etag) {
          response.writeHead(304).end();
        } else {
          response
            .setHeader("Location", bundleUrlPath(this.bundle))
            .writeHead(302)
            .end("Moved");
        }

        break;

      case bundleUrlPath(this.bundle):
        response
          .setHeader("Content-Type", "application/wasm")
          .setHeader("ETag", this.bundle.etag)
          .writeHead(200);

        createReadStream(bundleFilePath(this.bundle)).pipe(response);

        break;

      default:
        response.writeHead(404).end("Not found");
    }
  });

  public constructor() {
    this.reset();
  }

  public get url(): string {
    const { port } = this.server.address() as AddressInfo;
    return `http://localhost:${port}`;
  }

  public get errorMessage(): string {
    return `Failed to download from ${this.url}/: HTTP 500`;
  }

  public async start(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.server.on("error", reject);

      this.server.listen(0, "localhost", () => {
        resolve();
        this.server.off("error", reject);
      });
    });
  }

  public async stop(): Promise<void> {
    await new Promise<void>((resolve) => {
      this.server.closeIdleConnections();
      this.server.close(() => {
        resolve();
      });
    });
  }

  public reset(): void {
    this.bundle = first;
    this.error = false;
  }
}

class Callbacks implements Pick<Required<Options>, "onLoad" | "onError"> {
  private calls!: (BundleMetadata | LoadError)[];
  private called!: Promise<void>;
  private resolveCalled!: () => void;

  public constructor() {
    this.clear();
  }

  public async next(): Promise<BundleMetadata | LoadError | undefined> {
    const abortController = new AbortController();

    await Promise.race([
      this.called,
      setTimeout(250, { signal: abortController.signal }),
    ]);

    abortController.abort();

    if (this.calls.length > 0) {
      expect(this.calls).toHaveLength(1);
    }

    const call = this.calls[0];

    this.clear();

    return call;
  }

  public readonly onLoad = (metadata: BundleMetadata): void => {
    this.onCall(metadata);
  };

  public readonly onError = (error: LoadError): void => {
    this.onCall(error);
  };

  private onCall(call: BundleMetadata | LoadError): void {
    this.calls.push(call);
    this.resolveCalled();
  }

  private clear(): void {
    this.calls = [];
    this.called = new Promise((resolve) => {
      this.resolveCalled = resolve;
    });
  }
}

function expectLoadError(error: unknown, expectedCause: string | Error): void {
  expect(error).toBeInstanceOf(LoadError);
  const { message, cause } = error as LoadError;

  const expectedMessagePrefix =
    "Failed to load embedded policy decision point bundle: ";

  if (expectedCause instanceof Error) {
    expect(message).toEqual(expectedMessagePrefix + expectedCause.message);
    expect(cause).toBe(expectedCause);
  } else {
    expect(message).toEqual(expectedMessagePrefix + expectedCause);
    expect(cause).toMatchObject({
      constructor: Error,
      message: expectedCause,
    });
  }
}

async function rejection(promise: Promise<unknown>): Promise<unknown> {
  try {
    await promise;
    expect.unreachable("Expected promise to reject, but it resolved");
  } catch (error) {
    return error;
  }
}
