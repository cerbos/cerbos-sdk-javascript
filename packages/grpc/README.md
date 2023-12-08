# @cerbos/grpc

[![npm](https://img.shields.io/npm/v/@cerbos/grpc?style=flat-square)](https://www.npmjs.com/package/@cerbos/grpc)

Client library for interacting with the Cerbos policy decision point service over gRPC from server-side Node.js applications.

## Prerequisites

- Cerbos 0.16+
- Node.js 18+

## Installation

```console
$ npm install @cerbos/grpc
```

## Example usage

```typescript
import { GRPC } from "@cerbos/grpc";

const cerbos = new GRPC("localhost:3593", { tls: false });

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

For more details, [see the `GRPC` class documentation](../../docs/grpc.grpc.md).

## Further reading

- [API reference](../../docs/grpc.md)
- [Cerbos documentation](https://docs.cerbos.dev)

## Get help

- [Join the Cerbos community on Slack](http://go.cerbos.io/slack)
- [Email us at help@cerbos.dev](mailto:help@cerbos.dev)
