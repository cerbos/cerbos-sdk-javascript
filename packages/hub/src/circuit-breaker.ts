import { Code, ConnectError } from "@connectrpc/connect";

import { Status } from "@cerbos/core";

import { errorCode } from "./errors/internal.js";

const failureRateThreshold = 0.6;
const volumeThreshold = 5;
const resetAfter = 60 * 1e3;
const window = 15 * 1e3;
const buckets = 30;

const closed = Symbol("closed");
const halfOpen = Symbol("halfOpen");

type State = typeof closed | typeof halfOpen | number;

const cancelled = new ConnectError("Too many failures", Code.Canceled);

const ignoredStatuses = new Set([
  Status.ABORTED,
  Status.ALREADY_EXISTS,
  Status.CANCELLED,
  Status.DEADLINE_EXCEEDED,
  Status.FAILED_PRECONDITION,
]);

export class CircuitBreaker<Args extends unknown[], Return> {
  private state: State = closed;
  private readonly stats = new Stats();

  public constructor(
    private readonly action: (...args: Args) => Promise<Return>,
  ) {
    const interval = setInterval(() => {
      this.stats.rotate();
    }, window / buckets);

    if (typeof interval.unref === "function") {
      interval.unref();
    }
  }

  public async call(...args: Args): Promise<Return> {
    switch (this.state) {
      case closed:
        break;

      case halfOpen:
        throw cancelled;

      default: // open
        if (performance.now() >= this.state) {
          this.halfOpen();
        } else {
          throw cancelled;
        }
    }

    let outcome: Outcome = success;
    try {
      return await this.action(...args);
    } catch (error) {
      if (!ignoredStatuses.has(errorCode(error))) {
        outcome = failure;
      }

      throw error;
    } finally {
      this.record(outcome);
    }
  }

  private record(outcome: Outcome): void {
    this.stats.record(outcome);

    if (outcome === success) {
      if (this.state === halfOpen) {
        this.close();
      }
    } else {
      if (this.state === halfOpen || this.stats.tripped) {
        this.open();
      }
    }
  }

  private close(): void {
    this.state = closed;
  }

  private halfOpen(): void {
    this.state = halfOpen;
  }

  private open(): void {
    this.state = performance.now() + resetAfter;
  }
}

const success = Symbol("success");
const failure = Symbol("failure");
type Outcome = typeof success | typeof failure;
type Bucket = Record<Outcome, number>;

class Stats {
  private readonly buckets: Bucket[];
  private bucketIndex = 0;
  private [success] = 0;
  private [failure] = 0;

  public constructor() {
    this.buckets = Array.from({ length: buckets }, () => ({
      [success]: 0,
      [failure]: 0,
    }));
  }

  public record(outcome: Outcome): void {
    this.bucket[outcome]++;
    this[outcome]++;
  }

  public rotate(): void {
    this.bucketIndex = (this.bucketIndex + 1) % this.buckets.length;
    const bucket = this.bucket;
    this[success] -= bucket[success];
    bucket[success] = 0;
    this[failure] -= bucket[failure];
    bucket[failure] = 0;
  }

  public get tripped(): boolean {
    const volume = this[success] + this[failure];

    return (
      volume >= volumeThreshold &&
      this[failure] / volume >= failureRateThreshold
    );
  }

  private get bucket(): Bucket {
    return this.buckets[this.bucketIndex]!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  }
}
