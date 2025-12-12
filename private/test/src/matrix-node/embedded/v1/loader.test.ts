import { createReadStream, readFileSync } from "fs";
import { readFile } from "fs/promises";
import { createServer } from "http";
import type { AddressInfo } from "net";
import { Readable } from "stream";
import { setTimeout } from "timers/promises";

import { beforeAll, beforeEach, describe, expect, test } from "vitest";

import type { BundleMetadata, Options, Source } from "@cerbos/embedded";
import { AutoUpdatingLoader, LoadError, Loader } from "@cerbos/embedded";

import type { EmbeddedBundle } from "../../../helpers";
import {
  oldEmbeddedBundle as first,
  newEmbeddedBundle as second,
} from "../../../helpers";

describe("loaders", () => {
  const server = new DummyServer();

  beforeAll(async () => {
    await server.start();
  });

  beforeEach(() => {
    server.reset();
  });

  describe("Loader", () => {
    test.each<[type: string, source: () => Source, url?: () => string]>([
      ["string", (): string => server.url, (): string => server.url],
      ["URL", (): URL => new URL(server.url), (): string => server.url],
      ["ArrayBuffer", (): ArrayBuffer => readFileSync(first.path).buffer],
      [
        "Promise<ArrayBuffer>",
        async (): Promise<ArrayBuffer> => (await readFile(first.path)).buffer,
      ],
      [
        "Response",
        (): Response =>
          new Response(
            Readable.toWeb(createReadStream(first.path)) as ReadableStream,
            {
              status: 200,
              headers: { "Content-Type": "application/wasm" },
            },
          ),
      ],
      [
        "Promise<Response>",
        async (): Promise<Response> => await fetch(server.url),
        (): string => `${server.url}bundle/${first.metadata.commit}.wasm`,
      ],
      [
        "WebAssembly.Module",
        (): WebAssembly.Module =>
          new WebAssembly.Module(readFileSync(first.path)),
      ],
      [
        "Promise<WebAssembly.Module>",
        async (): Promise<WebAssembly.Module> =>
          await WebAssembly.compile((await readFile(first.path)).buffer),
      ],
    ])("%s", async (_, source, url) => {
      const callbacks = new Callbacks();
      const loader = new Loader(source(), callbacks);

      const active = await loader.active();
      expect(active).toEqual({
        ...first.metadata,
        url: url?.(),
      });

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

      let updateSignal = loader["~updateSignal"];
      const loadedFirst = await callbacks.next();
      expect(loadedFirst).toEqual({ ...first.metadata, url: server.url });
      expect(await loader.active()).toBe(loadedFirst);
      expect(loader.pending).toBeUndefined();
      expect(loader["~updateSignal"]).toBe(updateSignal);

      server.bundle = second;

      const loadedSecond = await callbacks.next();
      expect(loadedSecond).toEqual({ ...second.metadata, url: server.url });
      expect(await loader.active()).toBe(loadedSecond);
      expect(loader.pending).toBeUndefined();
      expect(loader["~updateSignal"]).not.toEqual(updateSignal);
      updateSignal = loader["~updateSignal"];

      expect(await callbacks.next()).toBeUndefined();
      expect(await loader.active()).toBe(loadedSecond);
      expect(loader.pending).toBeUndefined();
      expect(loader["~updateSignal"]).toBe(updateSignal);

      server.error = true;

      expectLoadError(await callbacks.next(), server.errorMessage);
      expect(await loader.active()).toBe(loadedSecond);
      expect(loader.pending).toBeUndefined();
      expect(loader["~updateSignal"]).toBe(updateSignal);
    });

    test("activateOnLoad: false", async () => {
      const callbacks = new Callbacks();
      const loader = new AutoUpdatingLoader(server.url, {
        activateOnLoad: false,
        onError: callbacks.onError,
        onLoad: callbacks.onLoad,
      });

      let updateSignal = loader["~updateSignal"];
      const loadedFirst = await callbacks.next();
      expect(loadedFirst).toEqual({ ...first.metadata, url: server.url });
      expect(await loader.active()).toBe(loadedFirst);
      expect(loader.pending).toBeUndefined();
      expect(loader["~updateSignal"]).toBe(updateSignal);

      server.bundle = second;

      const loadedSecond = await callbacks.next();
      expect(loadedSecond).toEqual({ ...second.metadata, url: server.url });
      expect(await loader.active()).toBe(loadedFirst);
      expect(loader.pending).toBe(loadedSecond);
      expect(loader["~updateSignal"]).toBe(updateSignal);

      expect(await callbacks.next()).toBeUndefined();
      expect(await loader.active()).toBe(loadedFirst);
      expect(loader.pending).toBe(loadedSecond);
      expect(loader["~updateSignal"]).toBe(updateSignal);

      loader.activate();

      expect(await loader.active()).toBe(loadedSecond);
      expect(loader.pending).toBeUndefined();
      expect(loader["~updateSignal"]).not.toEqual(updateSignal);
      updateSignal = loader["~updateSignal"];

      expect(await callbacks.next()).toBeUndefined();
      expect(await loader.active()).toBe(loadedSecond);
      expect(loader.pending).toBeUndefined();
      expect(loader["~updateSignal"]).toBe(updateSignal);

      server.error = true;

      expectLoadError(await callbacks.next(), server.errorMessage);
      expect(await loader.active()).toBe(loadedSecond);
      expect(loader.pending).toBeUndefined();
      expect(loader["~updateSignal"]).toBe(updateSignal);
    });

    test("stop", async () => {
      const callbacks = new Callbacks();
      const loader = new AutoUpdatingLoader(server.url, callbacks);

      const updateSignal = loader["~updateSignal"];
      const loaded = await callbacks.next();
      expect(loaded).toEqual({ ...first.metadata, url: server.url });
      expect(await loader.active()).toBe(loaded);
      expect(loader["~updateSignal"]).toBe(updateSignal);

      server.bundle = second;
      loader.stop();

      expect(await callbacks.next()).toBeUndefined();
      expect(await loader.active()).toBe(loaded);
      expect(loader["~updateSignal"]).toBe(updateSignal);
    });
  });
});

function bundleUrlPath({ metadata: { commit } }: EmbeddedBundle): string {
  return `/bundle/${commit}.wasm`;
}

class DummyServer {
  public bundle!: EmbeddedBundle;
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

        createReadStream(this.bundle.path).pipe(response);

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
    return `http://localhost:${port}/`;
  }

  public get errorMessage(): string {
    return `Failed to download from ${this.url}: HTTP 500`;
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
      expect(this.calls).toHaveLength(1); // eslint-disable-line vitest/no-standalone-expect
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
