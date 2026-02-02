import type { DescMessage, MessageShape } from "@bufbuild/protobuf";

import type { StatusNotOK } from "../types/external.js";
import { Status } from "../types/external.js";

import { NotOK } from "./external.js";
import { setErrorNameAndStack } from "./internal.js";
import type { ErrorRegistry } from "./registry.js";

/** @internal */
export interface ErrorDetails<T> {
  typeUrl: string;
  value: T;
}

/** @internal */
export abstract class AbstractErrorResponse<Details> extends Error {
  public readonly code: StatusNotOK;

  public constructor(code: number, message: string) {
    super(message);
    setErrorNameAndStack(this);

    this.code = isStatus(code) && code !== Status.OK ? code : Status.UNKNOWN;
  }

  public toNotOK(registry: ErrorRegistry | undefined): NotOK {
    if (registry) {
      try {
        for (const { typeUrl, value } of this.details()) {
          const converter = registry.get(typeUrl);
          if (!converter) {
            continue;
          }

          try {
            return converter.convert(
              this.code,
              this.message,
              this.parseDetails(converter.schema, value),
            );
          } catch {
            continue;
          }
        }
      } catch {
        // Ignore failure to parse details
      }
    }

    return new NotOK(this.code, this.message);
  }

  protected abstract details(): Generator<
    ErrorDetails<Details>,
    void,
    undefined
  >;

  protected abstract parseDetails<T extends DescMessage>(
    schema: T,
    details: Details,
  ): MessageShape<T>;
}

function isStatus(code: number): code is Status {
  return code in Status;
}
