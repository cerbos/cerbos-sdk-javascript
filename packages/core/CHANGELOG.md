## [Unreleased]

### Removed

- Unused generated code ([#480](https://github.com/cerbos/cerbos-sdk-javascript/pull/480))

## [0.9.0] - 2023-02-15

### Added

- [`Client.disablePolicy`](../../docs/core.client.disablepolicy.md) and [`Client.disablePolicies`](../../docs/core.client.disablepolicies.md) methods to disable policies ([#429](https://github.com/cerbos/cerbos-sdk-javascript/pull/429))

  Requires a policy decision point server running Cerbos 0.25+.

- [OpenTelemetry](https://opentelemetry.io) support ([#438](https://github.com/cerbos/cerbos-sdk-javascript/pull/438))

### Changed

- [`Client.deleteSchema`](../../docs/core.client.deleteschema.md) and [`Client.deleteSchemas`](../../docs/core.client.deleteschemas.md) now return whether schemas were deleted ([#429](https://github.com/cerbos/cerbos-sdk-javascript/pull/429))

  Requires a policy decision point server running Cerbos 0.25+.

- [`Policy.metadata.storeIdentifer`](../../docs/core.policymetadata.storeidentifer.md) is now deprecated, replaced by [`Policy.metadata.storeIdentifier`](../../docs/core.policymetadata.storeidentifier.md) ([#439](https://github.com/cerbos/cerbos-sdk-javascript/pull/439))

## [0.8.1] - 2022-11-24

### Changed

- Document principal and resource `attributes` fields in examples ([#358](https://github.com/cerbos/cerbos-sdk-javascript/pull/358))

## [0.8.0] - 2022-09-08

### Added

- [`NotOK.fromJSON`](../../docs/core.notok.fromjson.md) factory method to parse JSON-serialized unsucessful responses ([#249](https://github.com/cerbos/cerbos-sdk-javascript/pull/249))

## [0.7.1] - 2022-09-06

### Changed

- Bump dependency on [uuid](https://github.com/uuidjs/uuid) to 9.0.0 ([#245](https://github.com/cerbos/cerbos-sdk-javascript/pull/245))

## [0.7.0] - 2022-08-24

### Added

- Support for the [admin API](https://docs.cerbos.dev/cerbos/latest/api/admin_api.html) ([#209](https://github.com/cerbos/cerbos-sdk-javascript/pull/209))

## [0.6.0] - 2022-07-01

### Added

- Support for schema validation in [`Client.planResources`](../../docs/core.client.planresources.md) ([#123](https://github.com/cerbos/cerbos-sdk-javascript/pull/123))

  Requires a policy decision point server running Cerbos 0.19+.
  [`PlanResourcesResponse.validationErrors`](../../docs/core.planresourcesresponsebase.validationerrors.md) will always be an empty array if the client is connected to an earlier version of Cerbos.

## [0.5.1] - 2022-06-09

### Changed

- Make README links relative to file to fix broken links on npmjs.com ([#103](https://github.com/cerbos/cerbos-sdk-javascript/pull/103))

## [0.5.0] - 2022-06-07

### Added

- Common types for gRPC and HTTP clients ([#73](https://github.com/cerbos/cerbos-sdk-javascript/pull/73))

[unreleased]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.9.0...HEAD
[0.9.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.8.1...@cerbos/core@0.9.0
[0.8.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.8.0...@cerbos/core@0.8.1
[0.8.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.7.1...@cerbos/core@0.8.0
[0.7.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.7.0...@cerbos/core@0.7.1
[0.7.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.6.0...@cerbos/core@0.7.0
[0.6.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.5.1...@cerbos/core@0.6.0
[0.5.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.5.0...@cerbos/core@0.5.1
[0.5.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/138ce112e6b775902ddd3791faa8a763dad8614f...@cerbos/core@0.5.0
