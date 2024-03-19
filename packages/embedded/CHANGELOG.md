## [Unreleased]

### Added

- [`Client.withPrincipal`](../../docs/core.client.withprincipal.md) method to create a client instance with a pre-specified principal ([#868](https://github.com/cerbos/cerbos-sdk-javascript/pull/868), [#877](https://github.com/cerbos/cerbos-sdk-javascript/pull/877))

### Changed

- Publish package from GitHub Actions and [generate provenance statement](https://docs.npmjs.com/generating-provenance-statements) ([#852](https://github.com/cerbos/cerbos-sdk-javascript/pull/852))

- Prevent importing package internals ([#867](https://github.com/cerbos/cerbos-sdk-javascript/pull/867))

## [0.6.3] - 2024-02-29

### Changed

- Bump dependency on [@cerbos/core] to 0.16.0 ([#835](https://github.com/cerbos/cerbos-sdk-javascript/pull/835))

## [0.6.2] - 2024-02-26

### Changed

- Allow promises of binary data in [Source](../../docs/embedded.source.md) type ([#824](https://github.com/cerbos/cerbos-sdk-javascript/pull/824))

## [0.6.1] - 2024-01-11

### Changed

- Bump dependency on [@cerbos/core] to 0.15.0 ([#781](https://github.com/cerbos/cerbos-sdk-javascript/pull/781))

## [0.6.0] - 2023-12-08

### Changed

- Renamed package from `@cerbos/lite` to `@cerbos/embedded`, and client class from `Lite` to `Embedded` ([#755](https://github.com/cerbos/cerbos-sdk-javascript/pull/755))

## [0.5.0-beta] - 2023-10-02

### Changed

- Use `attr` for principal and resource attributes ([#694](https://github.com/cerbos/cerbos-sdk-javascript/pull/694))

  This makes the API consistent with policy expressions.
  `attributes` is still supported for backwards compatibility, but is now deprecated.

- Bump dependency on [@cerbos/core] to 0.14.0 ([#695](https://github.com/cerbos/cerbos-sdk-javascript/pull/695))

### Removed

- Support for Node.js 16, which is now [end-of-life][nodejs-eol] ([#669](https://github.com/cerbos/cerbos-sdk-javascript/pull/669))

## [0.4.1-beta] - 2023-08-16

### Changed

- Bump dependency on [@cerbos/core] to 0.13.0 ([#645](https://github.com/cerbos/cerbos-sdk-javascript/pull/645))

## [0.4.0-beta] - 2023-08-01

### Added

- Support for [globals](https://docs.cerbos.dev/cerbos/latest/configuration/engine#globals) ([#619](https://github.com/cerbos/cerbos-sdk-javascript/pull/619))

## [0.3.1-alpha] - 2023-07-18

### Changed

- Bump dependency on [@cerbos/core] to 0.12.0 ([#599](https://github.com/cerbos/cerbos-sdk-javascript/pull/599))

### Removed

- Unused generated code ([#606](https://github.com/cerbos/cerbos-sdk-javascript/pull/606))

## [0.3.0-alpha] - 2023-06-07

### Changed

- Bump dependency on [@cerbos/core] to 0.11.0 ([#550](https://github.com/cerbos/cerbos-sdk-javascript/pull/550))

### Removed

- Support for Node.js 14, which is now [end-of-life][nodejs-eol] ([#521](https://github.com/cerbos/cerbos-sdk-javascript/pull/521))

## [0.2.2-alpha] - 2023-04-18

### Changed

- Bump dependency on [@cerbos/core] to 0.10.0 ([#506](https://github.com/cerbos/cerbos-sdk-javascript/pull/506))

## [0.2.1-alpha] - 2023-03-23

### Changed

- Bump dependency on [@cerbos/core] to 0.9.1 ([#481](https://github.com/cerbos/cerbos-sdk-javascript/pull/481))

### Removed

- Unused generated code ([#480](https://github.com/cerbos/cerbos-sdk-javascript/pull/480))

## [0.2.0-alpha] - 2023-02-15

### Added

- [OpenTelemetry](https://opentelemetry.io) support ([#438](https://github.com/cerbos/cerbos-sdk-javascript/pull/438))

### Changed

- Bump dependency on [@cerbos/core] to 0.9.0 ([#481](https://github.com/cerbos/cerbos-sdk-javascript/pull/446))

## [0.1.1-alpha] - 2022-11-24

### Changed

- Document principal and resource `attributes` fields in examples ([#358](https://github.com/cerbos/cerbos-sdk-javascript/pull/358))

- Bump dependency on [@cerbos/core] to 0.8.1 ([#359](https://github.com/cerbos/cerbos-sdk-javascript/pull/359))

## [0.1.0-alpha] - 2022-09-08

### Added

- Lite client for interacting with a WebAssembly Cerbos policy bundle ([#249](https://github.com/cerbos/cerbos-sdk-javascript/pull/249))

[unreleased]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/embedded@0.6.3...HEAD
[0.6.3]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/embedded@0.6.2...@cerbos/embedded@0.6.3
[0.6.2]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/embedded@0.6.1...@cerbos/embedded@0.6.2
[0.6.1]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/embedded@0.6.0...@cerbos/embedded@0.6.1
[0.6.0]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/lite@0.5.0-beta...@cerbos/embedded@0.6.0
[0.5.0-beta]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/lite@0.4.1-beta...@cerbos/lite@0.5.0-beta
[0.4.1-beta]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/lite@0.4.0-beta...@cerbos/lite@0.4.1-beta
[0.4.0-beta]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/lite@0.3.1-alpha...@cerbos/lite@0.4.0-beta
[0.3.1-alpha]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/lite@0.3.0-alpha...@cerbos/lite@0.3.1-alpha
[0.3.0-alpha]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/lite@0.2.2-alpha...@cerbos/lite@0.3.0-alpha
[0.2.2-alpha]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/lite@0.2.1-alpha...@cerbos/lite@0.2.2-alpha
[0.2.1-alpha]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/lite@0.2.0-alpha...@cerbos/lite@0.2.1-alpha
[0.2.0-alpha]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/lite@0.1.1-alpha...@cerbos/lite@0.2.0-alpha
[0.1.1-alpha]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/lite@0.1.0-alpha...@cerbos/lite@0.1.1-alpha
[0.1.0-alpha]: https://github.com/cerbos/cerbos-sdk-javascript/compare/a3dcb572e0eeff4c4d86c9cc66c1d0c7e59c4853...@cerbos/lite@0.1.0-alpha
[@cerbos/core]: ../core/README.md
[nodejs-eol]: https://github.com/nodejs/release#end-of-life-releases
