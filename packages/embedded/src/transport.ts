import type {
  _Method,
  _Request,
  _Response,
  _Service,
  _Transport,
} from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";

import type { Bundle } from "./bundle";
import type { CheckResourcesRequest } from "./protobuf/cerbos/request/v1/request";

export class Transport implements _Transport {
  public constructor(private readonly bundle: () => Promise<Bundle>) {}

  public async unary<
    Service extends _Service,
    Method extends _Method<Service, "unary">,
  >(
    service: Service,
    method: Method,
    request: _Request<Service, "unary", Method>,
    headers: Headers,
  ): Promise<_Response<Service, "unary", Method>> {
    if (service === "cerbos" && method === "checkResources") {
      const bundle = await this.bundle();

      return (await bundle.checkResources(
        request as CheckResourcesRequest,
        headers,
      )) as _Response<Service, "unary", Method>;
    }

    notImplemented(method);
  }

  public serverStream<Service extends _Service>(
    _: Service,
    method: _Method<Service, "serverStream">,
  ): never {
    notImplemented(method);
  }
}

function notImplemented(method: string): never {
  throw new NotOK(
    Status.UNIMPLEMENTED,
    `${method} is not implemented in embedded policy decision points`,
  );
}
