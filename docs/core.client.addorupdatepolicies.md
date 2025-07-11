<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [Client](./core.client.md) &gt; [addOrUpdatePolicies](./core.client.addorupdatepolicies.md)

## Client.addOrUpdatePolicies() method

Add policies, or update existing policies.

**Signature:**

```typescript
addOrUpdatePolicies(request: AddOrUpdatePoliciesRequest, options?: RequestOptions): Promise<void>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

request


</td><td>

[AddOrUpdatePoliciesRequest](./core.addorupdatepoliciesrequest.md)


</td><td>


</td></tr>
<tr><td>

options


</td><td>

[RequestOptions](./core.requestoptions.md)


</td><td>

_(Optional)_


</td></tr>
</tbody></table>


**Returns:**

Promise&lt;void&gt;

## Remarks

Requires

- the client to be configured with [Options.adminCredentials](./core.options.admincredentials.md)<!-- -->,

- the Cerbos policy decision point server to be configured with the [admin API](https://docs.cerbos.dev/cerbos/latest/api/admin_api) enabled, and

- a dynamic [storage backend](https://docs.cerbos.dev/cerbos/latest/configuration/storage)<!-- -->.

## Example 1

Create a policy in code:

```typescript
await cerbos.addOrUpdatePolicies({
  policies: [{
    resourcePolicy: {
      resource: "document",
      version: "1",
      rules: [{
        actions: ["*"],
        effect: Effect.ALLOW,
        roles: ["ADMIN"],
      }],
    },
  }],
});
```

## Example 2

Load a policy from a YAML or JSON file with [readPolicy()](./files.readpolicy.md)<!-- -->:

```typescript
import { readPolicy } from "@cerbos/files";

await cerbos.addOrUpdatePolicies({
  policies: [await readPolicy("path/to/policy.yaml")],
});
```

## Example 3

Load policies and schemas from a directory with [readDirectory()](./files.readdirectory.md)<!-- -->:

```typescript
import { readDirectory } from "@cerbos/files";

const { policies, schemas } = await readDirectory("path/to/directory");

await cerbos.addOrUpdateSchemas({ schemas });
await cerbos.addOrUpdatePolicies({ policies });
```

