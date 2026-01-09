# @cerbos/files

[![npm](https://img.shields.io/npm/v/@cerbos/files?style=flat-square)](https://www.npmjs.com/package/@cerbos/files)

Load Cerbos policies from YAML or JSON files.

## Prerequisites

- Node.js 20+

## Installation

```console
$ npm install @cerbos/files
```

## Example usage

```typescript
import { readDirectory, readPolicy, readSchema } from "@cerbos/files";

const policy = await readPolicy("path/to/policy.yaml");
// => { apiVersion: "api.cerbos.dev/v1", ... }

const schema = await readSchema("_schemas/path/to/schema.json");
// => { id: "path/to/schema.json", definition: "..." }

const { policies, schemas } = await readDirectory("path/to/directory");
// => { policies: [...], schemas: [...] }
```

For more details, [see the package documentation](https://cerbos.github.io/cerbos-sdk-javascript/modules/_cerbos_files.html).

## CommonJS support

This package is ESM-only, but may be `require`d from CommonJS modules in Node.js versions 20.19.5+, 22.15+, and 24+.

## Further reading

- [API reference](https://cerbos.github.io/cerbos-sdk-javascript/modules/_cerbos_files.html)
- [Cerbos documentation](https://docs.cerbos.dev)

## Get help

- [Join the Cerbos community on Slack](http://go.cerbos.io/slack)
- [Email us at help@cerbos.dev](mailto:help@cerbos.dev)
