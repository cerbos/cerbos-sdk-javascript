## [Unreleased]

### Added

- Support for user-defined policy rule outputs ([#542](https://github.com/cerbos/cerbos-sdk-javascript/pull/542))

  Requires a policy decision point server running Cerbos 0.27+.

### Removed

- Support for Node.js 14, which is now [end-of-life](https://github.com/nodejs/release#end-of-life-releases) ([#521](https://github.com/cerbos/cerbos-sdk-javascript/pull/521))

## [0.10.0] - 2023-04-18

### Added

- [`includeDisabled`](../../docs/core.listpoliciesrequest.includedisabled.md) option to [`Client.listPolicies`](../../docs/core.client.listpolicies.md) method to include disabled policies in the list ([#475](https://github.com/cerbos/cerbos-sdk-javascript/pull/475))

  Requires a policy decision point server running Cerbos 0.26+.

- [`Client.enablePolicy`](../../docs/core.client.enablepolicy.md) and [`Client.enablePolicies`](../../docs/core.client.enablepolicies.md) methods to enable policies ([#475](https://github.com/cerbos/cerbos-sdk-javascript/pull/475))

  Requires a policy decision point server running Cerbos 0.26+.

### Changed

- Bump dependency on [@grpc/grpc-js](https://github.com/grpc/grpc-node) to 1.8.14 ([#485](https://github.com/cerbos/cerbos-sdk-javascript/pull/485), [#502](https://github.com/cerbos/cerbos-sdk-javascript/pull/502))

## [0.9.2] - 2023-03-23

### Removed

- Unused generated code ([#480](https://github.com/cerbos/cerbos-sdk-javascript/pull/480))

## [0.9.1] - 2023-03-21

### Changed

- Bump dependency on [@grpc/grpc-js](https://github.com/grpc/grpc-node) to 1.8.12 ([#449](https://github.com/cerbos/cerbos-sdk-javascript/pull/449), [#452](https://github.com/cerbos/cerbos-sdk-javascript/pull/452), [#460](https://github.com/cerbos/cerbos-sdk-javascript/pull/460))

## [0.9.0] - 2023-02-15

### Added

- [`Client.disablePolicy`](../../docs/core.client.disablepolicy.md) and [`Client.disablePolicies`](../../docs/core.client.disablepolicies.md) methods to disable policies ([#429](https://github.com/cerbos/cerbos-sdk-javascript/pull/429))

  Requires a policy decision point server running Cerbos 0.25+.

- [OpenTelemetry](https://opentelemetry.io) support ([#438](https://github.com/cerbos/cerbos-sdk-javascript/pull/438))

### Changed

- Bump dependency on [@grpc/grpc-js](https://github.com/grpc/grpc-node) to 1.8.8 ([#419](https://github.com/cerbos/cerbos-sdk-javascript/pull/419), [#442](https://github.com/cerbos/cerbos-sdk-javascript/pull/442))
- [`Client.deleteSchema`](../../docs/core.client.deleteschema.md) and [`Client.deleteSchemas`](../../docs/core.client.deleteschemas.md) now return whether schemas were deleted ([#429](https://github.com/cerbos/cerbos-sdk-javascript/pull/429))

  Requires a policy decision point server running Cerbos 0.25+.

- [`Policy.metadata.storeIdentifer`](../../docs/core.policymetadata.storeidentifer.md) is now deprecated, replaced by [`Policy.metadata.storeIdentifier`](../../docs/core.policymetadata.storeidentifier.md) ([#439](https://github.com/cerbos/cerbos-sdk-javascript/pull/439))

## [0.8.2] - 2023-01-27

### Changed

- Bump dependency on [@grpc/grpc-js](https://github.com/grpc/grpc-node) to 1.8.5 ([#372](https://github.com/cerbos/cerbos-sdk-javascript/pull/372), [#391](https://github.com/cerbos/cerbos-sdk-javascript/pull/391), [#404](https://github.com/cerbos/cerbos-sdk-javascript/pull/404), [#407](https://github.com/cerbos/cerbos-sdk-javascript/pull/407), [#415](https://github.com/cerbos/cerbos-sdk-javascript/pull/415))

## [0.8.1] - 2022-11-24

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

- Support for schema validation in [`Client.planResources`](../../docs/core.client.planresources.md) ([#123](https://github.com/cerbos/cerbos-sdk-javascript/pull/123))

  Requires a policy decision point server running Cerbos 0.19+.
  [`PlanResourcesResponse.validationErrors`](../../docs/core.planresourcesresponsebase.validationerrors.md) will always be an empty array if the client is connected to an earlier version of Cerbos.

## [0.5.2] - 2022-06-09

### Changed

- Make README links relative to file to fix broken links on npmjs.com ([#103](https://github.com/cerbos/cerbos-sdk-javascript/pull/103))

## [0.5.1] - 2022-06-07

### Added

- Explicit dependency on [long](https://www.npmjs.com/package/long) ([#100](https://github.com/cerbos/cerbos-sdk-javascript/pull/100))

## [0.5.0] - 2022-06-07

### Added

- Separate gRPC client for server-side Node.js applications ([#73](https://github.com/cerbos/cerbos-sdk-javascript/pull/73))

[unreleased]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.10.0...HEAD
[0.10.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.9.2...@cerbos/grpc@0.10.0
[0.9.2]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.9.1...@cerbos/grpc@0.9.2
[0.9.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.9.0...@cerbos/grpc@0.9.1
[0.9.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.8.2...@cerbos/grpc@0.9.0
[0.8.2]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.8.1...@cerbos/grpc@0.8.2
[0.8.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.8.0...@cerbos/grpc@0.8.1
[0.8.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.7.1...@cerbos/grpc@0.8.0
[0.7.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.7.0...@cerbos/grpc@0.7.1
[0.7.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.6.0...@cerbos/grpc@0.7.0
[0.6.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.5.2...@cerbos/grpc@0.6.0
[0.5.2]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.5.1...@cerbos/grpc@0.5.2
[0.5.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/grpc@0.5.0...@cerbos/grpc@0.5.1
[0.5.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/138ce112e6b775902ddd3791faa8a763dad8614f...@cerbos/grpc@0.5.0
