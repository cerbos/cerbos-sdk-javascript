<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [Client](./core.client.md) &gt; [planResources](./core.client.planresources.md)

## Client.planResources() method

Produce a query plan that can be used to obtain a list of resources on which a principal is allowed to perform a particular action.

<b>Signature:</b>

```typescript
planResources(request: PlanResourcesRequest): Promise<PlanResourcesResponse>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [PlanResourcesRequest](./core.planresourcesrequest.md) |  |

<b>Returns:</b>

Promise&lt;[PlanResourcesResponse](./core.planresourcesresponse.md)<!-- -->&gt;

## Example


```typescript
const plan = await cerbos.planResources({
  principal: { id: "user@example.com", roles: ["USER"] },
  resource: { kind: "document" },
});
```

