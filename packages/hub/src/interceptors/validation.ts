import type { DescMessage, MessageShape } from "@bufbuild/protobuf";
import { createValidator } from "@bufbuild/protovalidate";

import { NotOK, Status } from "@cerbos/core";

import { createInterceptor } from "./interceptor";

const validator = createValidator();

function validateRequest<Desc extends DescMessage>(
  schema: Desc,
  message: MessageShape<Desc>,
): void {
  const { kind, error } = validator.validate(schema, message);
  if (kind === "invalid") {
    throw new NotOK(Status.INVALID_ARGUMENT, "Invalid request", {
      cause: error,
    });
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
