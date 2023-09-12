## [Unreleased]

### Removed

- Support for Node.js 16, which is now [end-of-life](https://github.com/nodejs/release#end-of-life-releases) ([#669](https://github.com/cerbos/cerbos-sdk-javascript/pull/669))

## [0.14.0] - 2023-08-16

### Added

- Support for OpenTelemetry span context propagation ([#638](https://github.com/cerbos/cerbos-sdk-javascript/pull/638))

  Requires a policy decision point server running Cerbos 0.30+, and [@cerbos/opentelemetry] 0.3+.

### Removed

- Dependency on [abab](https://github.com/jsdom/abab), which is no longer necessary since dropping support for Node.js 14. The `btoa` global function is [supported in Node.js 16+ and all modern browsers](https://developer.mozilla.org/en-US/docs/Web/API/btoa#browser_compatibility).

## [0.13.0] - 2023-07-18

### Added

- Support for filtering [`Client.listPolicies`](../../docs/core.client.listpolicies.md) results by policy name, scope, and version ([#568](https://github.com/cerbos/cerbos-sdk-javascript/pull/568))

  Requires a policy decision point server running Cerbos 0.29+.

- Support for [exporting and importing variable sets](https://docs.cerbos.dev/cerbos/latest/policies/variables.html) in policies ([#598](https://github.com/cerbos/cerbos-sdk-javascript/pull/598))

  Requires a policy decision point server running Cerbos 0.29+.

## [0.12.0] - 2023-06-07

### Added

- Support for user-defined policy rule outputs ([#542](https://github.com/cerbos/cerbos-sdk-javascript/pull/542), [#543](https://github.com/cerbos/cerbos-sdk-javascript/pull/543), [#551](https://github.com/cerbos/cerbos-sdk-javascript/pull/551))

  Requires a policy decision point server running Cerbos 0.27+.

### Changed

- Bump dependency on [qs](https://github.com/ljharb/qs) to 6.11.2 ([#530](https://github.com/cerbos/cerbos-sdk-javascript/pull/530))

### Removed

- Support for Node.js 14, which is now [end-of-life](https://github.com/nodejs/release#end-of-life-releases) ([#521](https://github.com/cerbos/cerbos-sdk-javascript/pull/521))

## [0.11.0] - 2023-04-18

### Added

- [`includeDisabled`](../../docs/core.listpoliciesrequest.includedisabled.md) option to [`Client.listPolicies`](../../docs/core.client.listpolicies.md) method to include disabled policies in the list ([#475](https://github.com/cerbos/cerbos-sdk-javascript/pull/475))

  Requires a policy decision point server running Cerbos 0.26+.

- [`Client.enablePolicy`](../../docs/core.client.enablepolicy.md) and [`Client.enablePolicies`](../../docs/core.client.enablepolicies.md) methods to enable policies ([#475](https://github.com/cerbos/cerbos-sdk-javascript/pull/475))

  Requires a policy decision point server running Cerbos 0.26+.

### Changed

- Space-separate the `User-Agent` header for `node-fetch` compatibility ([#505](https://github.com/cerbos/cerbos-sdk-javascript/pull/505))

## [0.10.1] - 2023-03-23

### Removed

- Unused generated code ([#480](https://github.com/cerbos/cerbos-sdk-javascript/pull/480))

## [0.10.0] - 2023-03-21

### Added

- [`headers`](../../docs/http.options.headers.md) option to add headers to every request ([#471](https://github.com/cerbos/cerbos-sdk-javascript/pull/471))

### Changed

- Bump dependency on [qs](https://github.com/ljharb/qs) to 6.11.1 ([#459](https://github.com/cerbos/cerbos-sdk-javascript/pull/459))

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

### Changed

- Use [`NotOK.fromJSON`](../../docs/core.notok.fromjson.md) factory method to parse JSON-serialized unsucessful responses ([#249](https://github.com/cerbos/cerbos-sdk-javascript/pull/249))

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

- Separate HTTP client for browser-based applications ([#73](https://github.com/cerbos/cerbos-sdk-javascript/pull/73))

[unreleased]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.14.0...HEAD
[0.14.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.13.0...@cerbos/http@0.14.0
[0.13.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.12.0...@cerbos/http@0.13.0
[0.12.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.11.0...@cerbos/http@0.12.0
[0.11.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.10.1...@cerbos/http@0.11.0
[0.10.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.10.0...@cerbos/http@0.10.1
[0.10.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.9.0...@cerbos/http@0.10.0
[0.9.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.8.1...@cerbos/http@0.9.0
[0.8.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.8.0...@cerbos/http@0.8.1
[0.8.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.7.1...@cerbos/http@0.8.0
[0.7.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.7.0...@cerbos/http@0.7.1
[0.7.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.6.0...@cerbos/http@0.7.0
[0.6.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.5.1...@cerbos/http@0.6.0
[0.5.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.5.0...@cerbos/http@0.5.1
[0.5.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/138ce112e6b775902ddd3791faa8a763dad8614f...@cerbos/http@0.5.0
