# @cerbos/http

[![npm](https://img.shields.io/npm/v/@cerbos/http?style=flat-square)](https://www.npmjs.com/package/@cerbos/http)

Client library for interacting with the Cerbos policy decision point over HTTP.

This is primarily intended for use in browsers, and requires `fetch` to be available globally.
If you're targeting [old browsers](https://caniuse.com/fetch), you'll need to apply [a polyfill](https://www.npmjs.com/package/whatwg-fetch).

You can use it in server-side Node.js applications, but the [gRPC client](../grpc/README.md) might be more appropriate.

- For Node.js up to 17.4, you'll need [a polyfill](https://www.npmjs.com/package/cross-fetch) to make `fetch` happen.
- From Node.js 17.5, you can instead enable the [`--experimental-fetch`](https://nodejs.org/dist/latest-v17.x/docs/api/cli.html#--experimental-fetch) option at the command line or via `NODE_OPTIONS`.
- From Node.js 18 onwards `fetch` is available without any additional configuration.

## Prerequisites

- Cerbos 0.16+
- Node.js 14+
- `fetch`

## Installation

```console
$ npm install @cerbos/http
```

or

```console
$ yarn add @cerbos/http
```

## Example usage

```typescript
import { HTTP } from "@cerbos/http";

const cerbos = new HTTP("http://localhost:3592");

await cerbos.isAllowed({
  principal: {
    id: "user@example.com",
    roles: ["USER"],
    attributes: { tier: "PREMIUM" },
  },
  resource: {
    kind: "document",
    id: "1",
    attributes: { owner: "user@example.com" },
  },
  action: "view",
}); // => true
```

For more details, [see the `HTTP` class documentation](../../docs/http.http.md).

## Further reading

- [API reference](../../docs/http.md)
- [Cerbos documentation](https://docs.cerbos.dev)

## Get help

- [Join the Cerbos community on Slack](http://go.cerbos.io/slack)
- [Email us at help@cerbos.dev](mailto:help@cerbos.dev)
