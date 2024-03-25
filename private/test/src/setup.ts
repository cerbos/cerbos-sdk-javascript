import { Module } from "module";

import type * as interval from "../../../packages/embedded/src/interval";

const loader = Module as unknown as {
  _load: (request: string, parent: { id: string }, isMain: boolean) => unknown;
};

const load = loader._load;

loader._load = (request, parent, isMain): unknown => {
  if (
    request === "./interval" &&
    parent.id.endsWith("/packages/embedded/lib/loader.js")
  ) {
    return {
      constrainAutoUpdateInterval: (interval) => interval ?? 100,
    } satisfies typeof interval;
  }

  return load(request, parent, isMain);
};
