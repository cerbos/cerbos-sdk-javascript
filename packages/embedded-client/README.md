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

With [Vite](https://vite.dev/guide/features#webassembly):

```typescript
import { fileURLToPath } from "node:url";
import { Embedded } from "@cerbos/embedded-client";
import wasm from "@cerbos/embedded-server/server.wasm?init";

const cerbos = new Embedded({
  policies: { ruleId: "B5LU9EVYN1MD" },
  wasm,
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

For more details, [see the `Embedded` class documentation](https://cerbos.github.io/cerbos-sdk-javascript/classes/_cerbos_embedded-client.Embedded.html).

## CommonJS support

This package is ESM-only, but may be `require`d from CommonJS modules in Node.js versions 20.19.5+, 22.15+, and 24+.

## Further reading

- [API reference](https://cerbos.github.io/cerbos-sdk-javascript/modules/_cerbos_embedded-client.html)
- [Cerbos documentation](https://docs.cerbos.dev)
- [Cerbos Hub documentation](https://docs.cerbos.dev/cerbos-hub/)

## Get help

- [Join the Cerbos community on Slack](https://go.cerbos.io/slack)
- [Email us at help@cerbos.dev](mailto:help@cerbos.dev)
