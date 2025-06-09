import type { Value } from "@cerbos/core";

export interface Uploader {
  name?: string | undefined;
  metadata?: Record<string, Value> | undefined;
}
