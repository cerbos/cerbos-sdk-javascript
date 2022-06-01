import { status as Status } from "@grpc/grpc-js";

import { ValidationError } from "./types";

export { Status };

export class NotOK extends Error {
  public constructor(
    public readonly code: Exclude<Status, Status.OK>,
    public readonly details: string
  ) {
    super(`gRPC error ${code} (${Status[code]}): ${details}`);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationFailed extends Error {
  public constructor(public readonly validationErrors: ValidationError[]) {
    super("Input failed schema validation");
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
