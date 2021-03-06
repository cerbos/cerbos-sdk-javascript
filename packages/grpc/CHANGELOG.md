## [Unreleased]

No notable changes.

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

[unreleased]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.6.0...HEAD
[0.6.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.5.2...@cerbos/grpc@0.6.0
[0.5.2]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.5.1...@cerbos/grpc@0.5.2
[0.5.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.5.0...@cerbos/grpc@0.5.1
[0.5.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/138ce112e6b775902ddd3791faa8a763dad8614f...@cerbos/grpc@0.5.0
