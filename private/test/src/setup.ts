import "@ungap/with-resolvers";

import { Module } from "module";

import type * as embeddedV1Interval from "../../../packages/embedded/src/interval";
import type * as embeddedV2Interval from "../../../packages/embedded-client/src/interval";

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
    } satisfies typeof embeddedV1Interval;
  }

  if (
    request === "./interval" &&
    parent.id.endsWith("/packages/embedded-client/lib/loader.js")
  ) {
    return {
      defaultInterval: 0.1,
      minimumInterval: 0.1,
    } satisfies typeof embeddedV2Interval;
  }

  return load(request, parent, isMain);
};
