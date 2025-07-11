<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [Client](./core.client.md) &gt; [planResources](./core.client.planresources.md)

## Client.planResources() method

Produce a query plan that can be used to obtain a list of resources on which a principal is allowed to perform a particular action.

**Signature:**

```typescript
planResources(request: PlanResourcesRequest, options?: RequestOptions): Promise<PlanResourcesResponse>;
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

[PlanResourcesRequest](./core.planresourcesrequest.md)


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

Promise&lt;[PlanResourcesResponse](./core.planresourcesresponse.md)<!-- -->&gt;

## Example


```typescript
const plan = await cerbos.planResources({
  principal: {
    id: "user@example.com",
    roles: ["USER"],
    attr: { tier: "PREMIUM" },
  },
  resource: { kind: "document" },
  action: "view",
});
```

