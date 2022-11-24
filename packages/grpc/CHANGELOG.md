## [Unreleased]

### Changed

- Bump dependency on [@grpc/grpc-js](https://github.com/grpc/grpc-node) to 1.7.3 ([#254](https://github.com/cerbos/cerbos-sdk-javascript/pull/254), [#273](https://github.com/cerbos/cerbos-sdk-javascript/pull/273), [#298](https://github.com/cerbos/cerbos-sdk-javascript/pull/298), [#323](https://github.com/cerbos/cerbos-sdk-javascript/pull/323))
- Document principal and resource `attributes` fields in examples ([#358](https://github.com/cerbos/cerbos-sdk-javascript/pull/358))

## [0.8.0] - 2022-09-08

### Changed

- Bump dependency on [@cerbos/core](../core/README.md) to 0.8.0 ([#250](https://github.com/cerbos/cerbos-sdk-javascript/pull/250))

## [0.7.1] - 2022-09-06

### Changed

- Bump dependency on [@grpc/grpc-js](https://github.com/grpc/grpc-node) to 1.6.12 ([#231](https://github.com/cerbos/cerbos-sdk-javascript/pull/231), [#242](https://github.com/cerbos/cerbos-sdk-javascript/pull/242))
- Bump dependency on [uuid](https://github.com/uuidjs/uuid) to 9.0.0 ([#245](https://github.com/cerbos/cerbos-sdk-javascript/pull/245))

## [0.7.0] - 2022-08-24

### Added

- Support for the [admin API](https://docs.cerbos.dev/cerbos/latest/api/admin_api.html) ([#209](https://github.com/cerbos/cerbos-sdk-javascript/pull/209))

### Changed

- Bump dependency on [@grpc/grpc-js](https://github.com/grpc/grpc-node) to 1.6.10 ([#169](https://github.com/cerbos/cerbos-sdk-javascript/pull/169), [#200](https://github.com/cerbos/cerbos-sdk-javascript/pull/200))

## [0.6.0] - 2022-07-01

### Added

- Support for schema validation in `Client#planResources` ([#123](https://github.com/cerbos/cerbos-sdk-javascript/pull/123))

  Requires Cerbos 0.19+.
  `PlanResourcesResponse#validationErrors` will always return an empty array if the client is connected to an earlier version of Cerbos.

## [0.5.2] - 2022-06-09

### Changed

- Make README links relative to file to fix broken links on npmjs.com ([#103](https://github.com/cerbos/cerbos-sdk-javascript/pull/103))

## [0.5.1] - 2022-06-07

### Added

- Explicit dependency on [long](https://www.npmjs.com/package/long) ([#100](https://github.com/cerbos/cerbos-sdk-javascript/pull/100))

## [0.5.0] - 2022-06-07

### Added

- Separate gRPC client for server-side Node.js applications ([#73](https://github.com/cerbos/cerbos-sdk-javascript/pull/73))

[unreleased]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.8.0...HEAD
[0.8.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.7.1...@cerbos/grpc@0.8.0
[0.7.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.7.0...@cerbos/grpc@0.7.1
[0.7.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.6.0...@cerbos/grpc@0.7.0
[0.6.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.5.2...@cerbos/grpc@0.6.0
[0.5.2]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.5.1...@cerbos/grpc@0.5.2
[0.5.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.5.0...@cerbos/grpc@0.5.1
[0.5.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/138ce112e6b775902ddd3791faa8a763dad8614f...@cerbos/grpc@0.5.0
