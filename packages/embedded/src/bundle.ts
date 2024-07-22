import type { JWT } from "@cerbos/core";
import { NotOK } from "@cerbos/core";

import type {
  BundleMetadata,
  DecodeJWTPayload,
  DecodedJWTPayload,
  Options,
  Source,
} from "./loader";
import { CheckResourcesRequest } from "./protobuf/cerbos/request/v1/request";
import { CheckResourcesResponse } from "./protobuf/cerbos/response/v1/response";
import { cancelBody } from "./response";
import type { Allocator } from "./slice";
import { Slice } from "./slice";

interface Exports extends WebAssembly.Exports, Allocator {
  check: (offset: number, length: number) => bigint;
  metadata: () => bigint;
  set_globals: (offset: number, length: number) => void;
}

export class Bundle {
  public static async from(
    source: Source,
    {
      decodeJWTPayload = cannotDecodeJWTPayload,
      globals,
      now = Date.now,
    }: Options,
  ): Promise<Bundle> {
    if (typeof source === "string" || source instanceof URL) {
      source = await download(source);
    } else {
      source = await source;
    }

    const etag =
      source instanceof Response
        ? (source.headers.get("ETag") ?? undefined)
        : undefined;

    const exports = await instantiate(source, {
      env: {
        now: () => secondsSinceUnixEpoch(now()),
      },
    });

    if (globals) {
      const globalsSlice = Slice.ofJSON(exports, globals);

      try {
        exports.set_globals(globalsSlice.offset, globalsSlice.length);
      } finally {
        globalsSlice.deallocate();
      }
    }

    return new Bundle(etag, exports, decodeJWTPayload);
  }

  private _metadata: BundleMetadata | undefined;

  private constructor(
    public readonly etag: string | undefined,
    private readonly exports: Exports,
    private readonly decodeJWTPayload: DecodeJWTPayload,
  ) {}

  public get metadata(): BundleMetadata {
    if (!this._metadata) {
      const { version, buildTimestamp, policies } = JSON.parse(
        Slice.from(this.exports, this.exports.metadata()).text(),
      ) as { version: string; buildTimestamp: number; policies: string[] };

      this._metadata = {
        commit: version,
        builtAt: new Date(buildTimestamp * 1000),
        policies,
      };
    }

    return this._metadata;
  }

  public async checkResources(
    request: CheckResourcesRequest,
  ): Promise<CheckResourcesResponse> {
    const requestJSON = CheckResourcesRequest.toJSON(request) as {
      auxData?: { jwt?: unknown };
    };

    if (requestJSON.auxData?.jwt) {
      const jwt = requestJSON.auxData.jwt as JWT;
      if (!jwt.keySetId) {
        delete jwt.keySetId;
      }

      (requestJSON.auxData as { jwt: DecodedJWTPayload }).jwt =
        await this.decodeJWTPayload(jwt);
    }

    const requestSlice = Slice.ofJSON(this.exports, requestJSON);

    let responseSlice: Slice;
    try {
      responseSlice = Slice.from(
        this.exports,
        this.exports.check(requestSlice.offset, requestSlice.length),
      );
    } finally {
      requestSlice.deallocate();
    }

    let responseText: string;
    try {
      responseText = responseSlice.text();
    } finally {
      responseSlice.deallocate();
    }

    try {
      return CheckResourcesResponse.fromJSON(JSON.parse(responseText));
    } catch (_) {
      throw NotOK.fromJSON(responseText);
    }
  }
}

function cannotDecodeJWTPayload(): never {
  throw new Error(
    "To decode JWTs from auxiliary data, you must provide a `decodeJWTPayload` function",
  );
}

function secondsSinceUnixEpoch(date: Date | number): bigint {
  const millisecondsSinceUnixEpoch =
    date instanceof Date ? date.getTime() : date;

  return BigInt(Math.floor(millisecondsSinceUnixEpoch / 1000));
}

export async function download(
  url: string | URL,
  request?: RequestInit,
): Promise<Response> {
  try {
    return await fetch(url, request);
  } catch (error) {
    const message = `Failed to download from ${url.toString()}`;
    throw new Error(
      error instanceof Error ? `${message}: ${error.message}` : message,
      { cause: error },
    );
  }
}

async function instantiate(
  source: ArrayBufferView | ArrayBuffer | Response,
  imports: WebAssembly.Imports,
): Promise<Exports> {
  if (source instanceof Response) {
    return await instantiateStreaming(source, imports);
  }

  return instantiated(await WebAssembly.instantiate(source, imports));
}

async function instantiateStreaming(
  response: Response,
  imports: WebAssembly.Imports,
): Promise<Exports> {
  if (!response.ok) {
    cancelBody(response);
    throw new Error(
      `Failed to download from ${response.url}: HTTP ${response.status}`,
    );
  }

  return instantiated(
    await WebAssembly.instantiateStreaming(response, imports),
  );
}

function instantiated({
  instance: { exports },
}: WebAssembly.WebAssemblyInstantiatedSource): Exports {
  return exports as Exports;
}
