import type {
  DescMessage,
  DescMethodServerStreaming,
  DescMethodUnary,
  MessageShape,
  MessageValidType,
} from "@bufbuild/protobuf";

import { NotOK } from "./errors.js";
import { Status } from "./types/external.js";

/** @internal */
export class AbortHandler {
  public constructor(public readonly signal: AbortSignal | undefined) {}

  public throwIfAborted(): void {
    if (this.signal?.aborted) {
      throw this.error();
    }
  }

  public onAbort(listener: (error: NotOK) => void): void {
    this.signal?.addEventListener(
      "abort",
      () => {
        listener(this.error());
      },
      { once: true },
    );
  }

  public error(): NotOK {
    const reason = this.signal?.reason as unknown;

    return new NotOK(
      Status.CANCELLED,
      reason instanceof Error ? `Aborted: ${reason.message}` : "Aborted",
      { cause: reason },
    );
  }
}

/** @internal */
export interface Transport {
  unary<I extends DescMessage, O extends DescMessage>(
    method: DescMethodUnary<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
    abortHandler: AbortHandler,
  ): Promise<MessageShape<O>>;

  serverStream<I extends DescMessage, O extends DescMessage>(
    method: DescMethodServerStreaming<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
    abortHandler: AbortHandler,
  ): AsyncGenerator<MessageShape<O>, void, undefined>;
}

/** @internal */
export type Instrumenter = (transport: Transport) => Transport;

const instrumenters = new Set<Instrumenter>();

/** @internal */
export function addInstrumenter(instrumenter: Instrumenter): void {
  instrumenters.add(instrumenter);
}

/** @internal */
export function removeInstrumenter(instrumenter: Instrumenter): void {
  instrumenters.delete(instrumenter);
}

/** @internal */
export function instrument(transport: Transport): Transport {
  for (const instrumenter of instrumenters) {
    transport = instrumenter(transport);
  }

  return transport;
}
