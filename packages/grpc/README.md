# @cerbos/grpc

[![npm](https://img.shields.io/npm/v/@cerbos/grpc?style=flat-square)](https://www.npmjs.com/package/@cerbos/grpc)

Client library for interacting with the Cerbos policy decision point over gRPC from server-side Node.js applications.

## Prerequisites

- Cerbos 0.16+
- Node.js 14+

## Installation

```console
$ npm install @cerbos/grpc
```

or

```console
$ yarn add @cerbos/grpc
```

## Example usage

```typescript
import { GRPC } from "@cerbos/grpc";

const cerbos = new GRPC("localhost:3593", { tls: false });

await cerbos.isAllowed({
  principal: { id: "user@example.com", roles: ["USER"] },
  resource: { kind: "document", id: "1" },
  action: "view",
}); // => true
```

For more details, [see the `GRPC` class documentation](/docs/grpc.grpc.md).

## Further reading

- [API reference](/docs/grpc.md)
- [Cerbos documentation](https://docs.cerbos.dev)
