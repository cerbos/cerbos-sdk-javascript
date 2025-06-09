import type { DescMessage, Message } from "@bufbuild/protobuf";
import type { GenMessage } from "@bufbuild/protobuf/codegenv2";

// Adapted from https://github.com/bufbuild/protobuf-es/blob/v2.5.2/packages/protobuf/src/types.ts#L90-L93
export type MessageInitShape<Desc extends DescMessage> =
  Desc extends GenMessage<infer RuntimeShape>
    ? MessageInit<RuntimeShape>
    : never;

// Adapted from https://github.com/bufbuild/protobuf-es/blob/v2.5.2/packages/protobuf/src/types.ts#L189-L193
export type MessageInit<T extends Message> = {
  [P in Exclude<keyof T, keyof Message>]: FieldInit<T[P]>;
};

// Adapted from https://github.com/bufbuild/protobuf-es/blob/v2.5.2/packages/protobuf/src/types.ts#L196-L204
type FieldInit<F> = F extends
  | Date
  | Uint8Array
  | bigint
  | boolean
  | string
  | number
  ? F
  : F extends (infer T)[]
    ? FieldInit<T>[]
    : F extends readonly (infer T)[]
      ? readonly FieldInit<T>[]
      : F extends Message
        ? MessageInit<F>
        : F extends OneofMessage<infer C, infer V>
          ? { case: C; value: MessageInit<V> }
          : F extends MapWithMessage<infer V>
            ? Record<string | number, MessageInit<V>>
            : F;

// Adapted from https://github.com/bufbuild/protobuf-es/blob/v2.5.2/packages/protobuf/src/types.ts#L210-L213
interface OneofMessage<K extends string, M extends Message> {
  case: K;
  value: M;
}

// Adapted from https://github.com/bufbuild/protobuf-es/blob/v2.5.2/packages/protobuf/src/types.ts#L206-L208
type MapWithMessage<V extends Message> = Record<string | number, V>;
