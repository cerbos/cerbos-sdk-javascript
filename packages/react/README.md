# @cerbos/react

[![npm](https://img.shields.io/npm/v/@cerbos/react?style=flat-square)](https://www.npmjs.com/package/@cerbos/react)

A collection of React hooks for interacting with Cerbos policy decision points.

## Prerequisites

- Cerbos 0.16+
- React 16.13+

## Installation

```console
$ npm install @cerbos/react
```

## Example usage

First, create an [HTTP](../http/README.md) or [embedded](../embedded/README.md) Cerbos client, and provide it to your application's components using [`CerbosProvider`](https://cerbos.github.io/cerbos-sdk-javascript/functions/_cerbos_react.CerbosProvider.html):

```typescript
import { Embedded as Cerbos } from "@cerbos/embedded";
// or, import { HTTP as Cerbos } from "@cerbos/http";
import { CerbosProvider } from "@cerbos/react";

const client = new Cerbos();

function MyApp({ children }) {
  const user = useYourAuthenticationLogic(...);

  return (
    <CerbosProvider
      client={client}
      principal={
        user
          ? {
              id: user.id,
              roles: user.roles,
            }
          : {
              // Define an arbitrary ID for unauthenticated users.
              id: "###ANONYMOUS_USER###",
              // Define a role that represents unauthenticated users (at least one is required).
              roles: ["anonymous"],
            }
      }
    >
      {children}
    </CerbosProvider>
  );
}
```

Then, use the client to perform permission checks in your components, using one of the provided hooks:

- [`useCerbos`](https://cerbos.github.io/cerbos-sdk-javascript/functions/_cerbos_react.useCerbos.html)
- [`useCheckResource`](https://cerbos.github.io/cerbos-sdk-javascript/functions/_cerbos_react.useCheckResource.html)
- [`useCheckResources`](https://cerbos.github.io/cerbos-sdk-javascript/functions/_cerbos_react.useCheckResources.html)
- [`useIsAllowed`](https://cerbos.github.io/cerbos-sdk-javascript/functions/_cerbos_react.useIsAllowed.html)

```typescript
import { useIsAllowed } from "@cerbos/react";

function SomeComponent() {
  const check = useIsAllowed({
    resource: {
      kind: "document",
      id: "1",
      attr: { owner: "user@example.com" },
    },
    action: "view",
  });

  if (check.isLoading) {
    // show spinner
    return "Loading...";
  }

  if (check.error) {
    // handle error
    return "Error...";
  }

  return <div>{check.data && <button>a button document 1</button>}</div>;
```

## CommonJS support

This package is ESM-only, but may be `require`d from CommonJS modules in Node.js versions 20.19.5+, 22.15+, and 24+.

## Further reading

- [API reference](https://cerbos.github.io/cerbos-sdk-javascript/modules/_cerbos_react.html)
- [Cerbos documentation](https://docs.cerbos.dev)

## Get help

- [Join the Cerbos community on Slack](http://go.cerbos.io/slack)
- [Email us at help@cerbos.dev](mailto:help@cerbos.dev)
