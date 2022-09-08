# @cerbos/lite

[![npm](https://img.shields.io/npm/v/@cerbos/lite?style=flat-square)](https://www.npmjs.com/package/@cerbos/lite)

Client library for interacting with WebAssembly Cerbos policy bundles from server-side Node.js and browser-based applications.

## Prerequisites

- Node.js 14+

  Note that for Node.js 14.x you'll need to pass the `--experimental-wasm-bigint` V8 flag to `node` as a command-line argument (not in the `NODE_OPTIONS` environment variable).

## Installation

```console
$ npm install @cerbos/lite
```

or

```console
$ yarn add @cerbos/lite
```

## Example usage

```typescript
import { Lite } from "@cerbos/lite";

const cerbos = new Lite(fetch("/policies.wasm"));

await cerbos.isAllowed({
  principal: { id: "user@example.com", roles: ["USER"] },
  resource: { kind: "document", id: "1" },
  action: "view",
}); // => true
```

For more details, [see the `Lite` class documentation](../../docs/lite.lite.md).

## Further reading

- [API reference](../../docs/lite.md)
- [Cerbos documentation](https://docs.cerbos.dev)

## Get help

- [Join the Cerbos community on Slack](http://go.cerbos.io/slack)
- [Email us at help@cerbos.dev](mailto:help@cerbos.dev)
