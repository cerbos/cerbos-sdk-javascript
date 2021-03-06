<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [PlanResourcesRequest](./core.planresourcesrequest.md)

## PlanResourcesRequest interface

Input to [Client.planResources()](./core.client.planresources.md)<!-- -->.

<b>Signature:</b>

```typescript
export interface PlanResourcesRequest 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [action](./core.planresourcesrequest.action.md) |  | string | The action for which to plan. |
|  [auxData?](./core.planresourcesrequest.auxdata.md) |  | [AuxData](./core.auxdata.md) | <i>(Optional)</i> Auxiliary data. |
|  [includeMetadata?](./core.planresourcesrequest.includemetadata.md) |  | boolean | <i>(Optional)</i> Include [additional metadata](./core.planresourcesmetadata.md) in the plan? |
|  [principal](./core.planresourcesrequest.principal.md) |  | [Principal](./core.principal.md) | The principal for whom to plan. |
|  [requestId?](./core.planresourcesrequest.requestid.md) |  | string | <i>(Optional)</i> |
|  [resource](./core.planresourcesrequest.resource.md) |  | [ResourceQuery](./core.resourcequery.md) | Partial details of the resources for which to plan. |

