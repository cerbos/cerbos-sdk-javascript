// https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/60038

import type {
  TextDecoder as TextDecoderConstructor,
  TextEncoder as TextEncoderConstructor,
} from "util";

declare global {
  const TextDecoder: typeof TextDecoderConstructor;
  const TextEncoder: typeof TextEncoderConstructor;
}
