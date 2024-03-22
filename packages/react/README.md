# @cerbos/react

[![npm](https://img.shields.io/npm/v/@cerbos/react?style=flat-square)](https://www.npmjs.com/package/@cerbos/react)

A collection of React hooks for interacting with the Cerbos policy decision point service.

## Prerequisites

- Cerbos 0.16+

## Installation

```console
$ npm install @cerbos/react
```

## Example usage

First initialize a Cerbos client and provide it down the tree by using CerbosProvider

```typescript
import { Embedded as Cerbos } from "@cerbos/embedded";
import { CerbosProvider } from "@cerbos/react";

// Initialize the Cerbos client using any of the client libraries
// that fit the needs of your application. In this example we are
// using the client from `@cerbos/embedded`.
const client = new Cerbos();

function MyApp({ children }) {
  const user = useUser();
  return (
    <CerbosProvider
      client={client}
      principal={
        user
          ? {  // the user is authenticated
              id: user.id,
              roles: user.roles,
            }
          : {  // the user is not authenticated
              id: "###ANONYMOUS_USER###", // Define an arbitrary ID for anonymous users.
              roles: ["anonymous"], // Pass a role that represents an anonymous user, at least one is required.
            }
      }
    >
      {children}
    </CerbosProvider>
  );
}
```

For more details, [see the `CerbosProvider` component documentation](../../docs/react.cerbosprovider.md).

Then consume the client as you need, using one of the provided hooks

```typescript
import { useCerbos } from "@cerbos/react";

function SomeComponent() {
    const cerbos = useCerbos();

    ...
    ...
}
```

## Further reading

- [API reference](../../docs/react.md)
- [Cerbos documentation](https://docs.cerbos.dev)

## Get help

- [Join the Cerbos community on Slack](http://go.cerbos.io/slack)
- [Email us at help@cerbos.dev](mailto:help@cerbos.dev)
