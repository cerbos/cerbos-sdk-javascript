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
import type { _Transport } from "@cerbos/core";
import { NotOK, Status, _methodName } from "@cerbos/core";

import type { Bundle } from "./bundle";

export class Transport implements _Transport {
  public constructor(private readonly bundle: () => Promise<Bundle>) {}
  public async unary<I extends DescMessage, O extends DescMessage>(
    method: DescMethodUnary<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
  ): Promise<MessageShape<O>> {
    if (_methodName(method) === _methodName(cerbos.method.checkResources)) {
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
    `${_methodName(method)} is not implemented in embedded policy decision points`,
  );
}
