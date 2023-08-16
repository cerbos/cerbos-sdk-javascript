// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/66386

import type { performance as _performance } from "perf_hooks";

declare global {
  const performance: typeof _performance;
}
