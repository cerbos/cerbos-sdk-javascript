import type { Exports } from "./types/internal";

export class Slice {
  private readonly memory: WebAssembly.Memory;
  private readonly _deallocate: Exports["deallocate"];

  private constructor(
    { memory, deallocate }: Exports,
    public readonly offset: number,
    public readonly length: number
  ) {
    this.memory = memory;
    this._deallocate = deallocate;
  }

  public static allocate(exports: Exports, length: number): Slice {
    return new Slice(exports, Number(exports.allocate(length)), length);
  }

  public static from(exports: Exports, offsetAndLength: bigint): Slice {
    return new Slice(
      exports,
      Number(offsetAndLength >> BigInt(32)),
      Number(offsetAndLength & BigInt(0xffffffff))
    );
  }

  public bytes(): Uint8Array {
    return new Uint8Array(this.memory.buffer, this.offset, this.length);
  }

  public copy(bytes: Uint8Array): void {
    new Uint8Array(this.memory.buffer, this.offset, this.length).set(bytes);
  }

  public deallocate(): void {
    this._deallocate(this.offset, this.length);
  }

  public text(): string {
    return new TextDecoder("utf-8").decode(this.bytes());
  }
}
