# Cerbos JavaScript SDK

[Cerbos](https://cerbos.dev) helps you super-charge your authorization implementation by writing context-aware access control policies for your application resources.
Author access rules using an intuitive YAML configuration language, use your Git-ops infrastructure to test and deploy them, and make simple API requests to the Cerbos policy decision point (PDP) server to evaluate the policies and make dynamic access decisions.

The Cerbos JavaScript SDK makes it easy to interact with the Cerbos PDP from your Node.js and browser-based applications.

## Packages

For server-side Node.js applications, the [@cerbos/grpc](/packages/grpc/README.md) library provides a client ([`GRPC`](/docs/grpc.grpc.md)) for interacting with the Cerbos PDP over gRPC.

For browser-based applications, the [@cerbos/http](/packages/http/README.md) library provides a client ([`HTTP`](/docs/http.http.md)) for interacting with the Cerbos PDP over HTTP.

Both clients extend the base [`Client`](/docs/core.client.md) class from [@cerbos/core](/packages/core/README.md), so they can be used interchangeably in isomorphic applications.

To instrument the clients with [OpenTelemetry](http://opentelemetry.io), use the [@cerbos/opentelemetry](/packages/opentelemetry/README.md) library.

## Further reading

- [API reference](/docs/index.md)
- [Cerbos documentation](https://docs.cerbos.dev)

## Get help

- [Join the Cerbos community on Slack](http://go.cerbos.io/slack)
- [Email us at help@cerbos.dev](mailto:help@cerbos.dev)
