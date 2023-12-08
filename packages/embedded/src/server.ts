import type {
  JWT,
  Value,
  _RPC,
  _Request,
  _Response,
  _Service,
} from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";

import { CheckResourcesRequest } from "./protobuf/cerbos/request/v1/request";
import { CheckResourcesResponse } from "./protobuf/cerbos/response/v1/response";
import { Slice } from "./slice";
import type { DecodeJWTPayload, DecodedJWTPayload } from "./types/external";
import type { Exports, RPCs } from "./types/internal";

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

export class Server {
  private readonly exports: Exports;

  public constructor(
    { instance }: WebAssembly.WebAssemblyInstantiatedSource,
    private readonly decodeJWTPayload: DecodeJWTPayload,
    globals: Record<string, Value> | undefined,
  ) {
    this.exports = instance.exports as Exports;

    if (globals) {
      this.setGlobals(globals);
    }
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
        `${rpc} is not yet implemented in embedded policy decision points`,
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

  private setGlobals(globals: Record<string, Value>): void {
    const globalsSlice = Slice.ofJSON(this.exports, globals);

    try {
      this.exports.set_globals(globalsSlice.offset, globalsSlice.length);
    } finally {
      globalsSlice.deallocate();
    }
  }

  private call(method: keyof RPCs, { offset, length }: Slice): Slice {
    return Slice.from(this.exports, this.exports[method](offset, length));
  }
}
