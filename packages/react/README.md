# @cerbos/react

[![npm](https://img.shields.io/npm/v/@cerbos/react?style=flat-square)](https://www.npmjs.com/package/@cerbos/react)

A collection of React hooks for interacting with the Cerbos policy decision point service.

## Prerequisites

- Cerbos 0.16+

## Installation

```console
$ npm install @cerbos/react
```

## Example usage

/////TODO////

```typescript
import { HTTP } from "@cerbos/http";

const cerbos = new HTTP("http://localhost:3592");

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

For more details, [see the `HTTP` class documentation](../../docs/http.http.md).

## Further reading

- [API reference](../../docs/react.md)
- [Cerbos documentation](https://docs.cerbos.dev)

## Get help

- [Join the Cerbos community on Slack](http://go.cerbos.io/slack)
- [Email us at help@cerbos.dev](mailto:help@cerbos.dev)
