import { readFile } from "fs/promises";
import { resolve } from "path";

import { describe } from "vitest";

import type { DecisionLogEntry } from "@cerbos/core";
import { Embedded } from "@cerbos/embedded-client";

import { testHeaders } from "../../client/headers.js";
import { embeddedUserAgent, readEmbeddedServerWASM } from "../../helpers.js";

describe.todo("Client", () => {
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
    type: "embedded",
    client: (options) =>
      new Embedded({
        ...options,
        policies: readFile(
          resolve(__dirname, "../../../bundles/PS2MX9855QURB3Y8.crrt"),
        ),
        wasm: readEmbeddedServerWASM(),
        onDecision,
      }),
    defaultUserAgent: embeddedUserAgent,
    getDecisionLogEntry,
  });
});
