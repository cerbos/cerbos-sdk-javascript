# Cerbos Node SDK

[Cerbos](https://cerbos.dev) helps you super-charge your authorization implementation by writing context-aware access control policies for your application resources. Author access rules using an intuitive YAML configuration language, use your Git-ops infrastructure to test and deploy them and, make simple API requests to the Cerbos PDP to evaluate the policies and make dynamic access decisions.

The Cerbos JavaScript client library - sometimes known as an SDK - makes it easy to interact with the Cerbos PDP from your server-side JavaScript applications.

## Contents

- [Requirements](#requirements)
- [Usage](#usage)
- [Configuration](#configuration)
- [Documentation](#documentation)

## Requirements

To use the Cerbos JavaScript client library, you'll need:

- Node.js v12 (LTS) or later.
- An instance of the Cerbos PDP needs to be running and accessible by your application. See our [Getting Started](https://docs.cerbos.dev/cerbos/quickstart.html) guide for details.

**Note:** You can only use the library in server-side JavaScript applications developed in Node.js. It won't work in frontend applications that run in your users' browsers.

## Usage

```js
import Cerbos from "cerbos-sdk-node";

const cerbos = new Cerbos({
  hostname: "http://localhost:9090", // The Cerbos PDP instance
});

const result = await cerbos.check({
  actions: ["view", "edit"],
  resource: {
    policyVersion: "default", // optional
    kind: "resourceKind",
    instances: {
      resourceId1: {
        attr: {
          // optional user defined attributes used in policies
          someAttribute: true,
        },
      },
    },
  },
  principal: {
    id: "userId1",
    policyVersion: "default", // optional
    roles: ["USER"], // from your authentication provider
    attr: {
      // optional user defined attributes used in policies
      somePrincipalAttribute: true,
    },
  },
});

const canView = result.isAuthorized("resourceId1", "view"); // boolean
const canEdit = result.isAuthorized("resourceId1", "edit"); // boolean
```

### TypeScript

The Cerbos JavaScript client library is written in TypeScript and comes with types.

## Configuration

A number of configuration options are avaliable when creating the Cerbos SDK instance:

### Hostname (required)

The hostname to the Cerbos PDP instance must be defined when creating the Cerbos instance.

### Timeouts

It is possible to define a timeout value for all calls to the Cerbos instance. This is defined in

### Logging

You can turn on debug logging if you want to check what endpoints are being called and with what arguments.

```js
const cerbos = new Cerbos({
  hostname: "http://localhost:9090", // The Cerbos PDP instance
  logLevel: "debug",
  timeout: 5000, // timeout in ms
});
```

## Documentation

You can learn more about the Cerbos in our [documentation](https://docs.cerbos.dev).
