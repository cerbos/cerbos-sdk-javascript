import type {
  DescMessage,
  DescMethod,
  DescMethodServerStreaming,
  DescMethodUnary,
  Message,
  MessageShape,
  MessageValidType,
} from "@bufbuild/protobuf";
import { createValidator } from "@bufbuild/protovalidate";

import type {
  CheckResourcesRequestValid,
  PlanResourcesRequestValid,
} from "@cerbos/api/cerbos/request/v1/request_pb";
import { CerbosService as cerbos } from "@cerbos/api/cerbos/svc/v1/svc_pb";
import type { HealthCheckRequestValid } from "@cerbos/api/grpc/health/v1/health_pb";
import { Health as health } from "@cerbos/api/grpc/health/v1/health_pb";
import { NotOK, Status } from "@cerbos/core";
import type { Transport as CoreTransport } from "@cerbos/core/~internal";
import { methodName } from "@cerbos/core/~internal";

import type { Server } from "./server.js";

export class Transport implements CoreTransport {
  private readonly validator = createValidator({ failFast: true });

  public constructor(private readonly server: Server) {}

  public async unary<I extends DescMessage, O extends DescMessage>(
    method: DescMethodUnary<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
  ): Promise<MessageShape<O>> {
    this.validate(method.input, request as MessageShape<I>);

    function response(message: Message): MessageShape<O> {
      return message as MessageShape<O>;
    }

    switch (methodName(method)) {
      case methodName(cerbos.method.checkResources):
        return response(
          await this.server.checkResources(
            request as CheckResourcesRequestValid,
            headers,
          ),
        );

      case methodName(cerbos.method.planResources):
        return response(
          await this.server.planResources(
            request as PlanResourcesRequestValid,
            headers,
          ),
        );

      case methodName(cerbos.method.serverInfo):
        return response(await this.server.serverInfo());

      case methodName(health.method.check):
        return response(
          await this.server.healthCheck(request as HealthCheckRequestValid),
        );

      default:
        notImplemented(method);
    }
  }

  public serverStream<I extends DescMessage, O extends DescMessage>(
    method: DescMethodServerStreaming<I, O>,
  ): never {
    notImplemented(method);
  }

  private validate<T extends DescMessage>(
    schema: T,
    message: MessageShape<T>,
  ): void {
    const result = this.validator.validate(schema, message);

    switch (result.kind) {
      case "valid":
        return;

      case "invalid":
        throw new NotOK(
          Status.INVALID_ARGUMENT,
          `validation error: ${result.violations.map((violation) => `\n- ${violation.toString()}`).join("")}`,
          { cause: result.error },
        );
    }
  }
}

function notImplemented(method: DescMethod): never {
  throw new NotOK(
    Status.UNIMPLEMENTED,
    `${methodName(method)} is not implemented in embedded policy decision points`,
  );
}
