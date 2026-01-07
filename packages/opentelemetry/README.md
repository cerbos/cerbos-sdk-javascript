# @cerbos/opentelemetry

[![npm](https://img.shields.io/npm/v/@cerbos/opentelemetry?style=flat-square)](https://www.npmjs.com/package/@cerbos/opentelemetry)

[OpenTelemetry](https://opentelemetry.io) instrumentation for the [gRPC](../grpc/README.md) and [HTTP](../http/README.md) client libraries.

## Prerequisites

- Node.js 20+

## Installation

```console
$ npm install @cerbos/opentelemetry
```

## Example usage

Register [`CerbosInstrumentation`](../../docs/opentelemetry.cerbosinstrumentation.md) with your other [OpenTelemetry instrumentation](https://opentelemetry.io/docs/instrumentation/js/instrumentation/):

```typescript
import { CerbosInstrumentation } from "@cerbos/opentelemetry";
import { registerInstrumentations } from "@opentelemetry/instrumentation";

registerInstrumentations({
  instrumentations: [...yourOtherInstrumentations, new CerbosInstrumentation()],
});
```

## CommonJS support

This package is ESM-only, but may be `require`d from CommonJS modules in Node.js versions 20.19.5+, 22.15+, and 24+.

## Further reading

- [API reference](../../docs/opentelemetry.md)
- [Cerbos documentation](https://docs.cerbos.dev)

## Get help

- [Join the Cerbos community on Slack](http://go.cerbos.io/slack)
- [Email us at help@cerbos.dev](mailto:help@cerbos.dev)
