## [Unreleased]

### Added

- [`Client.withPrincipal`](../../docs/core.client.withprincipal.md) method to create a client instance with a pre-specified principal ([#868](https://github.com/cerbos/cerbos-sdk-javascript/pull/868), [#877](https://github.com/cerbos/cerbos-sdk-javascript/pull/877))

### Changed

- Publish package from GitHub Actions and [generate provenance statement](https://docs.npmjs.com/generating-provenance-statements) ([#852](https://github.com/cerbos/cerbos-sdk-javascript/pull/852))

- Prevent importing package internals ([#867](https://github.com/cerbos/cerbos-sdk-javascript/pull/867))

## [0.16.0] - 2024-02-29

### Added

- [`Output.when`](../../docs/core.output.when.md) to define [conditional policy rule outputs](https://docs.cerbos.dev/cerbos/latest/policies/outputs) using the Admin API ([#829](https://github.com/cerbos/cerbos-sdk-javascript/pull/829))

  Requires a policy decision point server running Cerbos 0.33+.

## [0.15.0] - 2024-01-11

### Added

- [`headers`](../../docs/core.options.headers.md) and [`userAgent`](../../docs/core.options.useragent.md) options to `Client` constructor, and [`headers`](../../docs/core.requestoptions.headers.md) option to all methods ([#776](https://github.com/cerbos/cerbos-sdk-javascript/pull/776))

## [0.14.0] - 2023-10-02

### Changed

- Use `attr` for principal and resource attributes ([#694](https://github.com/cerbos/cerbos-sdk-javascript/pull/694))

  This makes the API consistent with policy expressions.
  `attributes` is still supported for backwards compatibility, but is now deprecated.

- Bump dependency on [uuid] to 9.0.1 ([#672](https://github.com/cerbos/cerbos-sdk-javascript/pull/672))

### Removed

- Support for Node.js 16, which is now [end-of-life][nodejs-eol] ([#669](https://github.com/cerbos/cerbos-sdk-javascript/pull/669))

## [0.13.0] - 2023-08-16

### Added

- Support for OpenTelemetry span context propagation ([#638](https://github.com/cerbos/cerbos-sdk-javascript/pull/638))

  Requires a policy decision point server running Cerbos 0.30+, and [@cerbos/opentelemetry](../opentelemetry/README.md) 0.3+.

## [0.12.0] - 2023-07-18

### Added

- Support for filtering [`Client.listPolicies`](../../docs/core.client.listpolicies.md) results by policy name, scope, and version ([#568](https://github.com/cerbos/cerbos-sdk-javascript/pull/568))

  Requires a policy decision point server running Cerbos 0.29+.

- Support for [exporting and importing variable sets](https://docs.cerbos.dev/cerbos/latest/policies/variables) in policies ([#598](https://github.com/cerbos/cerbos-sdk-javascript/pull/598))

  Requires a policy decision point server running Cerbos 0.29+.

## [0.11.0] - 2023-06-07

### Added

- Support for user-defined policy rule outputs ([#542](https://github.com/cerbos/cerbos-sdk-javascript/pull/542), [#543](https://github.com/cerbos/cerbos-sdk-javascript/pull/543), [#551](https://github.com/cerbos/cerbos-sdk-javascript/pull/551))

  Requires a policy decision point server running Cerbos 0.27+.

### Removed

- Support for Node.js 14, which is now [end-of-life][nodejs-eol] ([#521](https://github.com/cerbos/cerbos-sdk-javascript/pull/521))

## [0.10.0] - 2023-04-18

### Added

- [`includeDisabled`](../../docs/core.listpoliciesrequest.includedisabled.md) option to [`Client.listPolicies`](../../docs/core.client.listpolicies.md) method to include disabled policies in the list ([#475](https://github.com/cerbos/cerbos-sdk-javascript/pull/475))

  Requires a policy decision point server running Cerbos 0.26+.

- [`Client.enablePolicy`](../../docs/core.client.enablepolicy.md) and [`Client.enablePolicies`](../../docs/core.client.enablepolicies.md) methods to enable policies ([#475](https://github.com/cerbos/cerbos-sdk-javascript/pull/475))

  Requires a policy decision point server running Cerbos 0.26+.

## [0.9.1] - 2023-03-23

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

- Bump dependency on [uuid] to 9.0.0 ([#245](https://github.com/cerbos/cerbos-sdk-javascript/pull/245))

## [0.7.0] - 2022-08-24

### Added

- Support for the [admin API](https://docs.cerbos.dev/cerbos/latest/api/admin_api) ([#209](https://github.com/cerbos/cerbos-sdk-javascript/pull/209))

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

[unreleased]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.16.0...HEAD
[0.16.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.15.0...@cerbos/core@0.16.0
[0.15.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.14.0...@cerbos/core@0.15.0
[0.14.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.13.0...@cerbos/core@0.14.0
[0.13.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.12.0...@cerbos/core@0.13.0
[0.12.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.11.0...@cerbos/core@0.12.0
[0.11.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.10.0...@cerbos/core@0.11.0
[0.10.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.9.1...@cerbos/core@0.10.0
[0.9.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.9.0...@cerbos/core@0.9.1
[0.9.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.8.1...@cerbos/core@0.9.0
[0.8.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.8.0...@cerbos/core@0.8.1
[0.8.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.7.1...@cerbos/core@0.8.0
[0.7.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.7.0...@cerbos/core@0.7.1
[0.7.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.6.0...@cerbos/core@0.7.0
[0.6.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.5.1...@cerbos/core@0.6.0
[0.5.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/core@0.5.0...@cerbos/core@0.5.1
[0.5.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/138ce112e6b775902ddd3791faa8a763dad8614f...@cerbos/core@0.5.0
[nodejs-eol]: https://github.com/nodejs/release#end-of-life-releases
[uuid]: https://github.com/uuidjs/uuid
