import type { JWT, _RPC, _Request, _Response, _Service } from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";

import type {
  BundleMetadata,
  DecodeJWTPayload,
  DecodedJWTPayload,
  Options,
  Source,
} from "./loader";
import { CheckResourcesRequest } from "./protobuf/cerbos/request/v1/request";
import { CheckResourcesResponse } from "./protobuf/cerbos/response/v1/response";
import type { Allocator } from "./slice";
import { Slice } from "./slice";

type RPC = (offset: number, length: number) => bigint;

interface RPCs {
  check: RPC;
}

interface Exports extends WebAssembly.Exports, Allocator, RPCs {
  metadata: () => bigint;
  set_globals: (offset: number, length: number) => void;
}

interface Implementation<Service extends _Service, RPC extends _RPC<Service>> {
  method: keyof RPCs;
  transformRequest: (
    request: _Request<Service, RPC>,
    decodeJWTPayload: DecodeJWTPayload,
  ) => Promise<unknown>;
  transformResponse: (response: unknown) => _Response<Service, RPC>;
}

type Services = {
  [Service in _Service]: {
    [RPC in _RPC<Service>]: Implementation<Service, RPC> | undefined;
  };
};

const services: Services = {
  admin: {
    addOrUpdatePolicy: undefined,
    addOrUpdateSchema: undefined,
    deleteSchema: undefined,
    disablePolicy: undefined,
    enablePolicy: undefined,
    getPolicy: undefined,
    getSchema: undefined,
    listPolicies: undefined,
    listSchemas: undefined,
    reloadStore: undefined,
  },
  cerbos: {
    checkResources: {
      method: "check",
      transformRequest: async (request, decodeJWTPayload) => {
        const transformedRequest = CheckResourcesRequest.toJSON(request) as {
          auxData?: {
            jwt?: unknown;
          };
        };

        if (transformedRequest.auxData?.jwt) {
          const jwt = transformedRequest.auxData.jwt as JWT;
          if (!jwt.keySetId) {
            delete jwt.keySetId;
          }

          (transformedRequest.auxData as { jwt: DecodedJWTPayload }).jwt =
            await decodeJWTPayload(jwt);
        }

        return transformedRequest;
      },
      transformResponse: (response) =>
        CheckResourcesResponse.fromJSON(response),
    },
    planResources: undefined,
    serverInfo: undefined,
  },
};

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
        ? source.headers.get("ETag") ?? undefined
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

  public async perform<Service extends _Service, RPC extends _RPC<Service>>(
    service: Service,
    rpc: RPC,
    request: _Request<Service, RPC>,
  ): Promise<_Response<Service, RPC>> {
    const implementation = services[service][rpc] as
      | Implementation<typeof service, typeof rpc>
      | undefined; // https://github.com/microsoft/TypeScript/issues/30581;

    if (!implementation) {
      throw new NotOK(
        Status.UNIMPLEMENTED,
        `${rpc} is not implemented in embedded policy decision points`,
      );
    }

    const { method, transformRequest, transformResponse } = implementation;

    const requestSlice = Slice.ofJSON(
      this.exports,
      await transformRequest(request, this.decodeJWTPayload),
    );

    let responseSlice: Slice;
    try {
      responseSlice = this.call(method, requestSlice);
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
      return transformResponse(JSON.parse(responseText));
    } catch (_) {
      throw NotOK.fromJSON(responseText);
    }
  }

  private call(method: keyof RPCs, { offset, length }: Slice): Slice {
    return Slice.from(this.exports, this.exports[method](offset, length));
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
