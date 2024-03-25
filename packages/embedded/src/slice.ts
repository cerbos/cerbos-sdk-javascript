export interface Allocator {
  memory: WebAssembly.Memory;
  allocate: (length: number) => bigint;
  deallocate: (offset: number, length: number) => void;
}

const utf8Decoder = new TextDecoder("utf-8", { fatal: true });
const utf8Encoder = new TextEncoder();

export class Slice {
  public static from(allocator: Allocator, offsetAndLength: bigint): Slice {
    return new Slice(
      allocator,
      Number(offsetAndLength >> BigInt(32)),
      Number(offsetAndLength & BigInt(0xffffffff)),
    );
  }

  public static ofJSON(allocator: Allocator, data: unknown): Slice {
    const bytes = utf8Encoder.encode(JSON.stringify(data));

    const slice = new Slice(
      allocator,
      Number(allocator.allocate(bytes.length)),
      bytes.length,
    );

    try {
      slice.copy(bytes);
      return slice;
    } catch (error) {
      slice.deallocate();
      throw error;
    }
  }

  public readonly deallocate: () => void;
  private readonly bytes: Uint8Array;

  private constructor(
    { memory, deallocate }: Allocator,
    public readonly offset: number,
    public readonly length: number,
  ) {
    this.deallocate = (): void => {
      deallocate(offset, length);
    };

    this.bytes = new Uint8Array(memory.buffer, offset, length);
  }

  public text(): string {
    return utf8Decoder.decode(this.bytes);
  }

  private copy(bytes: Uint8Array): void {
    this.bytes.set(bytes);
  }
}
