import { readFileSync } from "fs";

import { describe } from "vitest";

import type { DecisionLogEntry } from "@cerbos/core";
import { Embedded } from "@cerbos/embedded";

import { testHeaders } from "../../../client/headers";
import { embeddedV1UserAgent, newEmbeddedBundle } from "../../../helpers";

describe("Client", () => {
  const bundle = readFileSync(newEmbeddedBundle.path);

  const decisionLogEntries = new Map<string, DecisionLogEntry>();

  function onDecision(entry: DecisionLogEntry): void {
    decisionLogEntries.set(entry.callId, entry);
  }

  function getDecisionLogEntry(callId: string): DecisionLogEntry {
    const entry = decisionLogEntries.get(callId);

    if (!entry) {
      throw new Error(`Decision log entry with call ID ${callId} not found`);
    }

    return entry;
  }

  testHeaders({
    type: "embedded | v1",
    client: (options) =>
      new Embedded(bundle, {
        ...options,
        onDecision,
      }),
    defaultUserAgent: embeddedV1UserAgent,
    getDecisionLogEntry,
  });
});
