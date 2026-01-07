import type {
  DescMessage,
  DescMethod,
  DescMethodServerStreaming,
  DescMethodUnary,
  MessageShape,
  MessageValidType,
} from "@bufbuild/protobuf";

import type { CheckResourcesRequest } from "@cerbos/api/cerbos/request/v1/request_pb";
import { CerbosService as cerbos } from "@cerbos/api/cerbos/svc/v1/svc_pb";
import { NotOK, Status } from "@cerbos/core";
import type { Transport as CoreTransport } from "@cerbos/core/~internal";
import { methodName } from "@cerbos/core/~internal";

import type { Bundle } from "./bundle.js";

export class Transport implements CoreTransport {
  public constructor(private readonly bundle: () => Promise<Bundle>) {}
  public async unary<I extends DescMessage, O extends DescMessage>(
    method: DescMethodUnary<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
  ): Promise<MessageShape<O>> {
    if (methodName(method) === methodName(cerbos.method.checkResources)) {
      const bundle = await this.bundle();

      return (await bundle.checkResources(
        request as CheckResourcesRequest,
        headers,
      )) as unknown as MessageShape<O>;
    }

    notImplemented(method);
  }

  public serverStream<I extends DescMessage, O extends DescMessage>(
    method: DescMethodServerStreaming<I, O>,
  ): never {
    notImplemented(method);
  }
}

function notImplemented(method: DescMethod): never {
  throw new NotOK(
    Status.UNIMPLEMENTED,
    `${methodName(method)} is not implemented in embedded policy decision points`,
  );
}
