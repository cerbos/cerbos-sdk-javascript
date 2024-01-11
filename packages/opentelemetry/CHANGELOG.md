## [Unreleased]

No notable changes.

## [0.4.2] - 2024-01-11

### Changed

- Bump dependency on [@cerbos/core] to 0.15.0 ([#781](https://github.com/cerbos/cerbos-sdk-javascript/pull/781))

- Bump dependencies on [@opentelemetry/instrumentation] to 0.46.0 and [@opentelemetry/semantic-conventions] to 1.19.0 ([#771](https://github.com/cerbos/cerbos-sdk-javascript/pull/771))

## [0.4.1] - 2023-12-08

### Changed

- Bump dependencies on [@opentelemetry/api] to 1.7.0, [@opentelemetry/instrumentation] to 0.45.1, and [@opentelemetry/semantic-conventions] to 1.18.1 ([#710](https://github.com/cerbos/cerbos-sdk-javascript/pull/710), [#740](https://github.com/cerbos/cerbos-sdk-javascript/pull/740))

## [0.4.0] - 2023-10-02

### Changed

- Bump dependency on [@cerbos/core] to 0.14.0 ([#695](https://github.com/cerbos/cerbos-sdk-javascript/pull/695))

- Bump dependencies on [@opentelemetry/api] to 1.6.0, [@opentelemetry/instrumentation] to 0.43.0, and [@opentelemetry/semantic-conventions] to 1.17.0 ([#670](https://github.com/cerbos/cerbos-sdk-javascript/pull/670))

### Removed

- Support for Node.js 16, which is now [end-of-life][nodejs-eol] ([#669](https://github.com/cerbos/cerbos-sdk-javascript/pull/669))

## [0.3.0] - 2023-08-16

### Added

- Span context propagation ([#638](https://github.com/cerbos/cerbos-sdk-javascript/pull/638))

  Requires a policy decision point server running Cerbos 0.30+, and [@cerbos/grpc] 0.13+ or [@cerbos/http] 0.14+.

- `rpc.client.duration` metric ([#644](https://github.com/cerbos/cerbos-sdk-javascript/pull/644))

### Changed

- Bump dependency on [@cerbos/core] to 0.13.0 ([#645](https://github.com/cerbos/cerbos-sdk-javascript/pull/645))

- Bump dependencies on [@opentelemetry/instrumentation] to 0.41.2 and [@opentelemetry/semantic-conventions] to 1.15.2 ([#614](https://github.com/cerbos/cerbos-sdk-javascript/pull/614), [#635](https://github.com/cerbos/cerbos-sdk-javascript/pull/635))

## [0.2.1] - 2023-07-18

### Changed

- Bump dependency on [@cerbos/core] to 0.12.0 ([#599](https://github.com/cerbos/cerbos-sdk-javascript/pull/599))

- Bump dependencies on [@opentelemetry/instrumentation] to 0.41.0 and [@opentelemetry/semantic-conventions] to 1.15.0 ([#557](https://github.com/cerbos/cerbos-sdk-javascript/pull/557), [#590](https://github.com/cerbos/cerbos-sdk-javascript/pull/590))

## [0.2.0] - 2023-06-07

### Changed

- Bump dependency on [@cerbos/core] to 0.11.0 ([#550](https://github.com/cerbos/cerbos-sdk-javascript/pull/550))

- Bump dependencies on [@opentelemetry/instrumentation] to 0.39.1 and [@opentelemetry/semantic-conventions] to 1.13.0 ([#525](https://github.com/cerbos/cerbos-sdk-javascript/pull/525))

### Removed

- Support for Node.js 14, which is now [end-of-life][nodejs-eol] ([#521](https://github.com/cerbos/cerbos-sdk-javascript/pull/521))

## [0.1.3] - 2023-04-18

### Changed

- Bump dependency on [@cerbos/core] to 0.10.0 ([#506](https://github.com/cerbos/cerbos-sdk-javascript/pull/506))

- Bump dependencies on [@opentelemetry/instrumentation] to 0.38.0 and [@opentelemetry/semantic-conventions] to 1.12.0 ([#493](https://github.com/cerbos/cerbos-sdk-javascript/pull/493), [#503](https://github.com/cerbos/cerbos-sdk-javascript/pull/503))

## [0.1.2] - 2023-03-23

- Bump dependency on [@cerbos/core] to 0.9.1 ([#481](https://github.com/cerbos/cerbos-sdk-javascript/pull/481))

## [0.1.1] - 2023-03-21

### Changed

- Bump dependencies on [@opentelemetry/api] to 1.4.1, [@opentelemetry/instrumentation] to 0.36.1, and [@opentelemetry/semantic-conventions] to 1.10.1 ([#464](https://github.com/cerbos/cerbos-sdk-javascript/pull/464), [#473](https://github.com/cerbos/cerbos-sdk-javascript/pull/473))

## [0.1.0] - 2023-02-15

### Added

- [OpenTelemetry](https://opentelemetry.io) instrumentation for the [@cerbos/grpc] and [@cerbos/http] client libraries ([#438](https://github.com/cerbos/cerbos-sdk-javascript/pull/438))

[unreleased]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/opentelemetry@0.4.2...HEAD
[0.4.2]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/opentelemetry@0.4.1...@cerbos/opentelemetry@0.4.2
[0.4.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/opentelemetry@0.4.0...@cerbos/opentelemetry@0.4.1
[0.4.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/opentelemetry@0.3.0...@cerbos/opentelemetry@0.4.0
[0.3.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/opentelemetry@0.2.1...@cerbos/opentelemetry@0.3.0
[0.2.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/opentelemetry@0.2.0...@cerbos/opentelemetry@0.2.1
[0.2.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/opentelemetry@0.1.3...@cerbos/opentelemetry@0.2.0
[0.1.3]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/opentelemetry@0.1.2...@cerbos/opentelemetry@0.1.3
[0.1.2]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/opentelemetry@0.1.1...@cerbos/opentelemetry@0.1.2
[0.1.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/opentelemetry@0.1.0...@cerbos/opentelemetry@0.1.1
[0.1.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/a3dcb572e0eeff4c4d86c9cc66c1d0c7e59c4853...@cerbos/opentelemetry@0.1.0
[@cerbos/core]: ../core/README.md
[@cerbos/grpc]: ../grpc/README.md
[@cerbos/http]: ../http/README.md
[@opentelemetry/api]: https://github.com/open-telemetry/opentelemetry-js/tree/main/api
[@opentelemetry/instrumentation]: https://github.com/open-telemetry/opentelemetry-js/tree/main/experimental/packages/opentelemetry-instrumentation
[@opentelemetry/semantic-conventions]: https://github.com/open-telemetry/opentelemetry-js/tree/main/packages/opentelemetry-semantic-conventions
[nodejs-eol]: https://github.com/nodejs/release#end-of-life-releases
