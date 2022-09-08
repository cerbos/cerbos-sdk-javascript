export type RPC = (offset: number, length: number) => bigint;

export interface RPCs {
  check: RPC;
}

export type Exports = WebAssembly.Exports &
  RPCs & {
    memory: WebAssembly.Memory;
    allocate: (length: number) => bigint;
    deallocate: (offset: number, length: number) => void;
  };
