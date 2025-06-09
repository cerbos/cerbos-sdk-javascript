import type { DescMessage, MessageShape } from "@bufbuild/protobuf";
import { createValidator } from "@bufbuild/protovalidate";
import { Code, ConnectError } from "@connectrpc/connect";

import { createInterceptor } from "./interceptor";

const validator = createValidator();

function validateRequest<Desc extends DescMessage>(
  schema: Desc,
  message: MessageShape<Desc>,
): void {
  const { kind, error } = validator.validate(schema, message);
  if (kind === "invalid") {
    throw new ConnectError(
      "Invalid request",
      Code.InvalidArgument,
      undefined,
      undefined,
      error,
    );
  }
}

export const validationInterceptor = createInterceptor(
  async (request, next) => {
    if (!request.stream) {
      validateRequest(request.method.input, request.message);
    }

    return await next(request);
  },
);
