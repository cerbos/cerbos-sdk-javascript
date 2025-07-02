# @cerbos/hub

[![npm](https://img.shields.io/npm/v/@cerbos/hub?style=flat-square)](https://www.npmjs.com/package/@cerbos/hub)

Client library for interacting with [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) from server-side Node.js applications.

## Prerequisites

- Node.js 20+

## Installation

```console
$ npm install @cerbos/hub
```

## Example usage

### Interacting with policy stores

```typescript
import { readFile } from "node:fs/promises";

import { credentialsFromEnv, StoresClient } from "@cerbos/hub";

const stores = new StoresClient({ credentials: credentialsFromEnv() });

const { newStoreVersion } = await stores.modifyFiles({
  storeId: "MWPKEMFX3CK1",
  operations: [
    {
      addOrUpdate: {
        path: "policy.yaml",
        contents: await readFile("path/to/policy.yaml"),
      },
    },
  ],
});
```

For more details, [see the `StoresClient` class documentation](../../docs/hub.storesclient.md).

## Further reading

- [API reference](../../docs/hub.md)
- [Cerbos Hub documentation](https://docs.cerbos.dev/cerbos-hub/)

## Get help

- [Join the Cerbos community on Slack](http://go.cerbos.io/slack)
- [Email us at help@cerbos.dev](mailto:help@cerbos.dev)
