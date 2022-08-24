<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [Client](./core.client.md) &gt; [addOrUpdatePolicies](./core.client.addorupdatepolicies.md)

## Client.addOrUpdatePolicies() method

Add policies, or update existing policies.

<b>Signature:</b>

```typescript
addOrUpdatePolicies(request: AddOrUpdatePoliciesRequest): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [AddOrUpdatePoliciesRequest](./core.addorupdatepoliciesrequest.md) |  |

<b>Returns:</b>

Promise&lt;void&gt;

## Remarks

Requires

- the client to be configured with [Options.adminCredentials](./core.options.admincredentials.md)<!-- -->,

- the Cerbos policy decision point server to be configured with the [admin API](https://docs.cerbos.dev/cerbos/latest/api/admin_api.html) enabled, and

- a dynamic [storage backend](https://docs.cerbos.dev/cerbos/latest/configuration/storage.html)<!-- -->.

## Example


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
