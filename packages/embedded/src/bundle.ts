import type { DecodedAuxData, JWT } from "@cerbos/core";
import { NotOK } from "@cerbos/core";

import type {
  BundleMetadata,
  DecodeJWTPayload,
  Options,
  Source,
} from "./loader";
import type { DecisionLogger } from "./logger";
import { Metadata as BundleMetadataProtobuf } from "./protobuf/cerbos/cloud/epdp/v1/epdp";
import { CheckResourcesRequest } from "./protobuf/cerbos/request/v1/request";
import { CheckResourcesResponse } from "./protobuf/cerbos/response/v1/response";
import { cancelBody } from "./response";
import type { Allocator } from "./slice";
import { Slice } from "./slice";

interface Exports extends WebAssembly.Exports, Allocator {
  check: (offset: number, length: number) => bigint;
  metadata: () => bigint;
  set_default_policy_version: (offset: number, length: number) => void;
  set_globals: (offset: number, length: number) => void;
  set_lenient_scope_search: (value: number) => void;
}

export class Bundle {
  public static async from(
    source: Source,
    url: string | undefined,
    logger: DecisionLogger | undefined,
    userAgent: string,
    {
      decodeJWTPayload = cannotDecodeJWTPayload,
      defaultPolicyVersion,
      globals,
      lenientScopeSearch,
      now = Date.now,
    }: Options,
  ): Promise<Bundle> {
    if (typeof source === "string" || source instanceof URL) {
      source = await download(source, userAgent);
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

    if (defaultPolicyVersion) {
      const slice = Slice.ofString(exports, defaultPolicyVersion);
      exports.set_default_policy_version(slice.offset, slice.length);
    }

    if (globals) {
      const slice = Slice.ofJSON(exports, globals);

      try {
        exports.set_globals(slice.offset, slice.length);
      } finally {
        slice.deallocate();
      }
    }

    if (lenientScopeSearch) {
      exports.set_lenient_scope_search(1);
    }

    if (!url && source instanceof Response && source.url) {
      url = source.url;
    }

    return new Bundle(etag, exports, decodeJWTPayload, logger, url);
  }

  private _metadata: BundleMetadata | undefined;

  private constructor(
    public readonly etag: string | undefined,
    private readonly exports: Exports,
    private readonly decodeJWTPayload: DecodeJWTPayload,
    private readonly logger: DecisionLogger | undefined,
    private readonly url: string | undefined,
  ) {}

  public get metadata(): BundleMetadata {
    if (!this._metadata) {
      const {
        commitHash,
        version,
        buildTimestamp,
        policies,
        sourceAttributes,
      } = BundleMetadataProtobuf.fromJSON(
        JSON.parse(Slice.from(this.exports, this.exports.metadata()).text()),
      );

      this._metadata = {
        url: this.url,
        commit: commitHash || version,
        builtAt: new Date(buildTimestamp * 1000),
        policies,
        sourceAttributes: Object.fromEntries(
          Object.entries(sourceAttributes).map(([id, { attributes }]) => [
            id,
            attributes,
          ]),
        ),
      };
    }

    return this._metadata;
  }

  public async checkResources(
    request: CheckResourcesRequest,
    headers: Headers,
  ): Promise<CheckResourcesResponse> {
    let response: CheckResourcesResponse | undefined = undefined;
    let auxData: DecodedAuxData | undefined = undefined;
    let error: unknown = undefined;

    try {
      const requestJSON = CheckResourcesRequest.toJSON(request) as {
        auxData?: { jwt?: unknown };
      };

      if (requestJSON.auxData?.jwt) {
        const jwt = requestJSON.auxData.jwt as JWT;
        if (!jwt.keySetId) {
          delete jwt.keySetId;
        }

        auxData = { jwt: await this.decodeJWTPayload(jwt) };
        requestJSON.auxData = auxData;
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
        response = CheckResourcesResponse.fromJSON(JSON.parse(responseText));
      } catch {
        throw NotOK.fromJSON(responseText);
      }

      return response;
    } catch (caught) {
      error = caught;
      throw caught;
    } finally {
      if (this.logger) {
        await this.logger.logCheckResources(
          request,
          auxData,
          headers,
          response,
          this.metadata,
          error,
        );
      }

      if (response && !request.includeMeta) {
        for (const result of response.results) {
          result.meta = undefined;
        }
      }
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
  userAgent: string,
  request?: RequestInit,
): Promise<Response> {
  const headers = new Headers(request?.headers);
  headers.set("User-Agent", userAgent);

  try {
    return await fetch(url, { ...request, headers });
  } catch (error) {
    const message = `Failed to download from ${url.toString()}`;
    throw new Error(
      error instanceof Error ? `${message}: ${error.message}` : message,
      { cause: error },
    );
  }
}

async function instantiate(
  source: ArrayBufferView | ArrayBuffer | Response | WebAssembly.Module,
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

function instantiated(
  result: WebAssembly.Instance | WebAssembly.WebAssemblyInstantiatedSource,
): Exports {
  const { exports } =
    result instanceof WebAssembly.Instance ? result : result.instance;

  return exports as Exports;
}
