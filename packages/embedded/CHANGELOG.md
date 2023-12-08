## [Unreleased]

No notable changes.

## [0.6.0] - 2023-12-08

### Changed

- Renamed package from `@cerbos/lite` to `@cerbos/embedded`, and client class from `Lite` to `Embedded` ([#755](https://github.com/cerbos/cerbos-sdk-javascript/pull/755))

## [0.5.0-beta] - 2023-10-02

### Changed

- Use `attr` for principal and resource attributes ([#694](https://github.com/cerbos/cerbos-sdk-javascript/pull/694))

  This makes the API consistent with policy expressions.
  `attributes` is still supported for backwards compatibility, but is now deprecated.

### Removed

- Support for Node.js 16, which is now [end-of-life](https://github.com/nodejs/release#end-of-life-releases) ([#669](https://github.com/cerbos/cerbos-sdk-javascript/pull/669))

## [0.4.1-beta] - 2023-08-16

### Changed

- Bump dependency on [@cerbos/core] to 0.13.0 ([#645](https://github.com/cerbos/cerbos-sdk-javascript/pull/645))

## [0.4.0-beta] - 2023-08-01

### Added

- Support for [globals](https://docs.cerbos.dev/cerbos/latest/configuration/engine.html#globals) ([#619](https://github.com/cerbos/cerbos-sdk-javascript/pull/619))

## [0.3.1-alpha] - 2023-07-18

### Removed

- Unused generated code ([#606](https://github.com/cerbos/cerbos-sdk-javascript/pull/606))

## [0.3.0-alpha] - 2023-06-07

### Removed

- Support for Node.js 14, which is now [end-of-life](https://github.com/nodejs/release#end-of-life-releases) ([#521](https://github.com/cerbos/cerbos-sdk-javascript/pull/521))

## [0.2.2-alpha] - 2023-04-18

### Changed

- Bump dependency on [@cerbos/core] to 0.10.0 ([#506](https://github.com/cerbos/cerbos-sdk-javascript/pull/506))

## [0.2.1-alpha] - 2023-03-23

### Removed

- Unused generated code ([#480](https://github.com/cerbos/cerbos-sdk-javascript/pull/480))

## [0.2.0-alpha] - 2023-02-15

### Added

- [OpenTelemetry](https://opentelemetry.io) support ([#438](https://github.com/cerbos/cerbos-sdk-javascript/pull/438))

## [0.1.1-alpha] - 2022-11-24

### Changed

- Document principal and resource `attributes` fields in examples ([#358](https://github.com/cerbos/cerbos-sdk-javascript/pull/358))

## [0.1.0-alpha] - 2022-09-08

### Added

- Lite client for interacting with a WebAssembly Cerbos policy bundle ([#249](https://github.com/cerbos/cerbos-sdk-javascript/pull/249))

[unreleased]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/embedded@0.6.0...HEAD
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
