import type { Value } from "@cerbos/core";

export type ChangeOrigin = ChangeOriginGit | ChangeOriginInternal;

export interface ChangeOriginGit {
  from: "git";
  repo?: string | undefined;
  ref?: string | undefined;
  hash?: string | undefined;
  message?: string | undefined;
  committer?: string | undefined;
  commitDate?: Date | undefined;
  author?: string | undefined;
  authorDate?: Date | undefined;
}

export function changeOriginIsChangeOriginGit(
  origin: ChangeOrigin,
): origin is ChangeOriginGit {
  return origin.from === "git";
}

export interface ChangeOriginInternal {
  from: "internal";
  source?: string | undefined;
  metadata?: Record<string, Value> | undefined;
}

export function changeOriginIsChangeOriginInternal(
  origin: ChangeOrigin,
): origin is ChangeOriginInternal {
  return origin.from === "internal";
}
