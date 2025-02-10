import type { Client, MethodDefinition } from "@grpc/grpc-js";
import { Metadata } from "@grpc/grpc-js";

import type {
  _AbortHandler,
  _Method,
  _MethodKind,
  _Request,
  _Response,
  _Service,
  _Transport,
} from "@cerbos/core";
import { NotOK, Status, _isObject } from "@cerbos/core";

import {
  CerbosAdminServiceService as adminService,
  CerbosServiceService as cerbosService,
} from "./protobuf/cerbos/svc/v1/svc";
import { HealthService as healthService } from "./protobuf/grpc/health/v1/health";

type Endpoint<
  Service extends _Service,
  MethodKind extends _MethodKind,
  Method extends _Method<Service, MethodKind>,
> = MethodDefinition<
  _Request<Service, MethodKind, Method>,
  _Response<Service, MethodKind, Method>
>;

type Services = {
  [Service in _Service]: {
    [MethodKind in _MethodKind]: {
      [Method in _Method<Service, MethodKind>]: Endpoint<
        Service,
        MethodKind,
        Method
      >;
    };
  }[_MethodKind];
};

const services: Services = {
  admin: adminService,
  cerbos: cerbosService,
  health: healthService,
};

export class Transport implements _Transport {
  public constructor(private readonly client: Client) {}

  public async unary<
    Service extends _Service,
    Method extends _Method<Service, "unary">,
  >(
    service: Service,
    method: Method,
    request: _Request<Service, "unary", Method>,
    headers: Headers,
    abortHandler: _AbortHandler,
  ): Promise<_Response<Service, "unary", Method>> {
    const { path, requestSerialize, responseDeserialize } = services[service][
      method
    ] as Endpoint<Service, "unary", Method>; // https://github.com/microsoft/TypeScript/issues/30581

    return await new Promise((resolve, reject) => {
      abortHandler.throwIfAborted();

      const call = this.client.makeUnaryRequest(
        path,
        requestSerialize,
        responseDeserialize,
        request,
        metadata(headers),
        (error, response) => {
          if (error) {
            reject(
              new NotOK(
                (error.code || Status.UNKNOWN) as NotOK["code"],
                error.details,
              ),
            );
          } else if (!response) {
            reject(new NotOK(Status.UNKNOWN, "No response received"));
          } else {
            resolve(response);
          }
        },
      );

      abortHandler.onAbort((error) => {
        reject(error);
        call.cancel();
      });
    });
  }

  public async *serverStream<
    Service extends _Service,
    Method extends _Method<Service, "serverStream">,
  >(
    service: Service,
    method: Method,
    request: _Request<Service, "serverStream", Method>,
    headers: Headers,
    abortHandler: _AbortHandler,
  ): AsyncGenerator<
    _Response<Service, "serverStream", Method>,
    void,
    undefined
  > {
    const { path, requestSerialize, responseDeserialize } = services[service][
      method
    ] as Endpoint<Service, "serverStream", Method>; // https://github.com/microsoft/TypeScript/issues/30581

    abortHandler.throwIfAborted();

    try {
      const stream = this.client.makeServerStreamRequest(
        path,
        requestSerialize,
        responseDeserialize,
        request,
        metadata(headers),
      );

      abortHandler.onAbort(() => {
        stream.cancel();
      });

      for await (const response of stream) {
        yield response;
      }
    } catch (error) {
      abortHandler.throwIfAborted();

      if (_isObject(error)) {
        const { code, details } = error;
        if (typeof code === "number" && typeof details === "string") {
          throw new NotOK(code in Status ? code : Status.UNKNOWN, details);
        }
      }

      throw new NotOK(
        Status.UNKNOWN,
        error instanceof Error
          ? `Error reading stream: ${error.message}`
          : "Error reading stream",
        { cause: error },
      );
    }
  }
}

function metadata(headers: Headers): Metadata {
  const metadata = new Metadata();
  for (const [name, value] of headers) {
    metadata.set(name, value);
  }

  return metadata;
}
