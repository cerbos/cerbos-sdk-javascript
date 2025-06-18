import type { Code } from "@connectrpc/connect";
import { ConnectError } from "@connectrpc/connect";

import type { Status } from "@cerbos/core";
import { NotOK } from "@cerbos/core";

export function createNotOK(error: unknown): NotOK {
  if (error instanceof NotOK) {
    return error;
  }

  const { code, rawMessage, cause } = ConnectError.from(error);
  return new NotOK(connectCodeToStatus(code), rawMessage, { cause });
}

function connectCodeToStatus(code: Code): Exclude<Status, Status.OK> {
  return code as number as Exclude<Status, Status.OK>;
}
