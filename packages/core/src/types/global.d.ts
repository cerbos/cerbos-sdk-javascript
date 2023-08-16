// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/66392

import type {
  TextDecoder as TextDecoderConstructor,
  TextEncoder as TextEncoderConstructor,
} from "util";

declare global {
  const TextDecoder: typeof TextDecoderConstructor;
  const TextEncoder: typeof TextEncoderConstructor;
}
