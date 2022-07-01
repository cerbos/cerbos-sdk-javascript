## [Unreleased]

No notable changes.

## [0.6.0] - 2022-07-01

### Added

- Support for schema validation in `Client#planResources` ([#123](https://github.com/cerbos/cerbos-sdk-javascript/pull/123))

  Requires Cerbos 0.19+.
  `PlanResourcesResponse#validationErrors` will always return an empty array if the client is connected to an earlier version of Cerbos.

## [0.5.1] - 2022-06-09

### Changed

- Make README links relative to file to fix broken links on npmjs.com ([#103](https://github.com/cerbos/cerbos-sdk-javascript/pull/103))

## [0.5.0] - 2022-06-07

### Added

- Common types for gRPC and HTTP clients ([#73](https://github.com/cerbos/cerbos-sdk-javascript/pull/73))

[unreleased]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.6.0...HEAD
[0.6.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.5.1...@cerbos/core@0.6.0
[0.5.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.5.0...@cerbos/core@0.5.1
[0.5.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/138ce112e6b775902ddd3791faa8a763dad8614f...@cerbos/core@0.5.0
