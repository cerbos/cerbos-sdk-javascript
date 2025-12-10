# @cerbos/embedded-client

[![npm](https://img.shields.io/npm/v/@cerbos/embedded-client?style=flat-square)](https://www.npmjs.com/package/@cerbos/embedded-client)

Client library for interacting with embedded Cerbos policy decision points (PDPs) from server-side Node.js and browser-based applications.
Policy bundles are loaded from [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) and executed by a WebAssembly module ([@cerbos/embedded-server](https://www.npmjs.com/package/@cerbos/embedded-server)).

## Prerequisites

- Node.js 20+
- A [Cerbos Hub](https://hub.cerbos.cloud) account

## Installation

```console
$ npm install @cerbos/embedded-client
```

## Example usage

```typescript
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { Embedded } from "@cerbos/embedded-client";

const cerbos = new Embedded({
  policies: { ruleId: "B5LU9EVYN1MD" },
  wasm: readFile(
    fileURLToPath(import.meta.resolve("@cerbos/embedded-server/wasm")),
  ),
});

await cerbos.isAllowed({
  principal: {
    id: "user@example.com",
    roles: ["USER"],
    attr: { tier: "PREMIUM" },
  },
  resource: {
    kind: "document",
    id: "1",
    attr: { owner: "user@example.com" },
  },
  action: "view",
}); // => true
```

For more details, [see the `Embedded` class documentation](../../docs/embedded-client.embedded.md).

## Further reading

- [API reference](../../docs/embedded.md)
- [Cerbos documentation](https://docs.cerbos.dev)
- [Cerbos Hub documentation](https://docs.cerbos.dev/cerbos-hub/)

## Get help

- [Join the Cerbos community on Slack](http://go.cerbos.io/slack)
- [Email us at help@cerbos.dev](mailto:help@cerbos.dev)
