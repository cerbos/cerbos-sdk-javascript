## [Unreleased]

### Changed

- Publish package from GitHub Actions and [generate provenance statement](https://docs.npmjs.com/generating-provenance-statements) ([#852](https://github.com/cerbos/cerbos-sdk-javascript/pull/852))

## [0.17.0] - 2024-02-29

### Added

- [`Output.when`](../../docs/core.output.when.md) to define [conditional policy rule outputs](https://docs.cerbos.dev/cerbos/latest/policies/outputs) using the Admin API ([#829](https://github.com/cerbos/cerbos-sdk-javascript/pull/829))

  Requires a policy decision point server running Cerbos 0.33+.

### Changed

- Bump dependency on [@cerbos/core] to 0.16.0 ([#835](https://github.com/cerbos/cerbos-sdk-javascript/pull/835))

## [0.16.0] - 2024-01-11

### Added

- [`userAgent`](../../docs/core.options.useragent.md) option to `HTTP` constructor, and [`headers`](../../docs/core.requestoptions.headers.md) option to all methods ([#776](https://github.com/cerbos/cerbos-sdk-javascript/pull/776))

  Note that if you were previously setting the `User-Agent` header via the `headers` option, you'll now need to do so using the dedicated `userAgent` option.

### Changed

- Bump dependency on [@cerbos/core] to 0.15.0 ([#781](https://github.com/cerbos/cerbos-sdk-javascript/pull/781))

## [0.15.0] - 2023-10-02

### Changed

- Use `attr` for principal and resource attributes ([#694](https://github.com/cerbos/cerbos-sdk-javascript/pull/694))

  This makes the API consistent with policy expressions.
  `attributes` is still supported for backwards compatibility, but is now deprecated.

- Bump dependency on [@cerbos/core] to 0.14.0 ([#695](https://github.com/cerbos/cerbos-sdk-javascript/pull/695))

### Removed

- Support for Node.js 16, which is now [end-of-life][nodejs-eol] ([#669](https://github.com/cerbos/cerbos-sdk-javascript/pull/669))

## [0.14.0] - 2023-08-16

### Added

- Support for OpenTelemetry span context propagation ([#638](https://github.com/cerbos/cerbos-sdk-javascript/pull/638))

  Requires a policy decision point server running Cerbos 0.30+, and [@cerbos/opentelemetry] 0.3+.

### Changed

- Bump dependency on [@cerbos/core] to 0.13.0 ([#645](https://github.com/cerbos/cerbos-sdk-javascript/pull/645))

### Removed

- Dependency on [abab](https://github.com/jsdom/abab), which is no longer necessary since dropping support for Node.js 14. The `btoa` global function is [supported in Node.js 16+ and all modern browsers](https://developer.mozilla.org/en-US/docs/Web/API/btoa#browser_compatibility).

## [0.13.0] - 2023-07-18

### Added

- Support for filtering [`Client.listPolicies`](../../docs/core.client.listpolicies.md) results by policy name, scope, and version ([#568](https://github.com/cerbos/cerbos-sdk-javascript/pull/568))

  Requires a policy decision point server running Cerbos 0.29+.

- Support for [exporting and importing variable sets](https://docs.cerbos.dev/cerbos/latest/policies/variables) in policies ([#598](https://github.com/cerbos/cerbos-sdk-javascript/pull/598))

  Requires a policy decision point server running Cerbos 0.29+.

### Changed

- Bump dependency on [@cerbos/core] to 0.12.0 ([#599](https://github.com/cerbos/cerbos-sdk-javascript/pull/599))

## [0.12.0] - 2023-06-07

### Added

- Support for user-defined policy rule outputs ([#542](https://github.com/cerbos/cerbos-sdk-javascript/pull/542), [#543](https://github.com/cerbos/cerbos-sdk-javascript/pull/543), [#551](https://github.com/cerbos/cerbos-sdk-javascript/pull/551))

  Requires a policy decision point server running Cerbos 0.27+.

### Changed

- Bump dependency on [@cerbos/core] to 0.11.0 ([#550](https://github.com/cerbos/cerbos-sdk-javascript/pull/550))

- Bump dependency on [qs] to 6.11.2 ([#530](https://github.com/cerbos/cerbos-sdk-javascript/pull/530))

### Removed

- Support for Node.js 14, which is now [end-of-life][nodejs-eol] ([#521](https://github.com/cerbos/cerbos-sdk-javascript/pull/521))

## [0.11.0] - 2023-04-18

### Added

- [`includeDisabled`](../../docs/core.listpoliciesrequest.includedisabled.md) option to [`Client.listPolicies`](../../docs/core.client.listpolicies.md) method to include disabled policies in the list ([#475](https://github.com/cerbos/cerbos-sdk-javascript/pull/475))

  Requires a policy decision point server running Cerbos 0.26+.

- [`Client.enablePolicy`](../../docs/core.client.enablepolicy.md) and [`Client.enablePolicies`](../../docs/core.client.enablepolicies.md) methods to enable policies ([#475](https://github.com/cerbos/cerbos-sdk-javascript/pull/475))

  Requires a policy decision point server running Cerbos 0.26+.

### Changed

- Bump dependency on [@cerbos/core] to 0.10.0 ([#506](https://github.com/cerbos/cerbos-sdk-javascript/pull/506))

- Space-separate the `User-Agent` header for `node-fetch` compatibility ([#505](https://github.com/cerbos/cerbos-sdk-javascript/pull/505))

## [0.10.1] - 2023-03-23

### Changed

- Bump dependency on [@cerbos/core] to 0.9.1 ([#481](https://github.com/cerbos/cerbos-sdk-javascript/pull/481))

### Removed

- Unused generated code ([#480](https://github.com/cerbos/cerbos-sdk-javascript/pull/480))

## [0.10.0] - 2023-03-21

### Added

- [`headers`](../../docs/http.options.headers.md) option to add headers to every request ([#471](https://github.com/cerbos/cerbos-sdk-javascript/pull/471))

### Changed

- Bump dependency on [qs] to 6.11.1 ([#459](https://github.com/cerbos/cerbos-sdk-javascript/pull/459))

## [0.9.0] - 2023-02-15

### Added

- [`Client.disablePolicy`](../../docs/core.client.disablepolicy.md) and [`Client.disablePolicies`](../../docs/core.client.disablepolicies.md) methods to disable policies ([#429](https://github.com/cerbos/cerbos-sdk-javascript/pull/429))

  Requires a policy decision point server running Cerbos 0.25+.

- [OpenTelemetry](https://opentelemetry.io) support ([#438](https://github.com/cerbos/cerbos-sdk-javascript/pull/438))

### Changed

- [`Client.deleteSchema`](../../docs/core.client.deleteschema.md) and [`Client.deleteSchemas`](../../docs/core.client.deleteschemas.md) now return whether schemas were deleted ([#429](https://github.com/cerbos/cerbos-sdk-javascript/pull/429))

  Requires a policy decision point server running Cerbos 0.25+.

- [`Policy.metadata.storeIdentifer`](../../docs/core.policymetadata.storeidentifer.md) is now deprecated, replaced by [`Policy.metadata.storeIdentifier`](../../docs/core.policymetadata.storeidentifier.md) ([#439](https://github.com/cerbos/cerbos-sdk-javascript/pull/439))

- Bump dependency on [@cerbos/core] to 0.9.0 ([#481](https://github.com/cerbos/cerbos-sdk-javascript/pull/446))

## [0.8.1] - 2022-11-24

### Changed

- Document principal and resource `attributes` fields in examples ([#358](https://github.com/cerbos/cerbos-sdk-javascript/pull/358))

- Bump dependency on [@cerbos/core] to 0.8.1 ([#359](https://github.com/cerbos/cerbos-sdk-javascript/pull/359))

## [0.8.0] - 2022-09-08

### Changed

- Use [`NotOK.fromJSON`](../../docs/core.notok.fromjson.md) factory method to parse JSON-serialized unsucessful responses ([#249](https://github.com/cerbos/cerbos-sdk-javascript/pull/249))

- Bump dependency on [@cerbos/core] to 0.8.0 ([#250](https://github.com/cerbos/cerbos-sdk-javascript/pull/250))

## [0.7.1] - 2022-09-06

### Changed

- Bump dependency on [@cerbos/core] to 0.7.1 ([#246](https://github.com/cerbos/cerbos-sdk-javascript/pull/246))

## [0.7.0] - 2022-08-24

### Added

- Support for the [admin API](https://docs.cerbos.dev/cerbos/latest/api/admin_api) ([#209](https://github.com/cerbos/cerbos-sdk-javascript/pull/209))

### Changed

- Bump dependency on [@cerbos/core] to 0.7.0 ([#221](https://github.com/cerbos/cerbos-sdk-javascript/pull/221))

## [0.6.0] - 2022-07-01

### Added

- Support for schema validation in [`Client.planResources`](../../docs/core.client.planresources.md) ([#123](https://github.com/cerbos/cerbos-sdk-javascript/pull/123))

  Requires a policy decision point server running Cerbos 0.19+.
  [`PlanResourcesResponse.validationErrors`](../../docs/core.planresourcesresponsebase.validationerrors.md) will always be an empty array if the client is connected to an earlier version of Cerbos.

### Changed

- Bump dependency on [@cerbos/core] to 0.6.0 ([#136](https://github.com/cerbos/cerbos-sdk-javascript/pull/136))

## [0.5.1] - 2022-06-09

### Changed

- Make README links relative to file to fix broken links on npmjs.com ([#103](https://github.com/cerbos/cerbos-sdk-javascript/pull/103))

- Bump dependency on [@cerbos/core] to 0.5.1 ([#104](https://github.com/cerbos/cerbos-sdk-javascript/pull/104))

## [0.5.0] - 2022-06-07

### Added

- Separate HTTP client for browser-based applications ([#73](https://github.com/cerbos/cerbos-sdk-javascript/pull/73))

[unreleased]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.17.0...HEAD
[0.17.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.16.0...@cerbos/http@0.17.0
[0.16.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.15.0...@cerbos/http@0.16.0
[0.15.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/http@0.14.0...@cerbos/http@0.15.0
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
[@cerbos/core]: ../core/README.md
[@cerbos/opentelemetry]: ../opentelemetry/README.md
[nodejs-eol]: https://github.com/nodejs/release#end-of-life-releases
[qs]: https://github.com/ljharb/qs
