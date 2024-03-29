<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [PlanResourcesRequest](./core.planresourcesrequest.md)

## PlanResourcesRequest interface

Input to [Client.planResources()](./core.client.planresources.md)<!-- -->.

**Signature:**

```typescript
export interface PlanResourcesRequest 
```

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[action](./core.planresourcesrequest.action.md)


</td><td>


</td><td>

string


</td><td>

The action for which to plan.


</td></tr>
<tr><td>

[auxData?](./core.planresourcesrequest.auxdata.md)


</td><td>


</td><td>

[AuxData](./core.auxdata.md) \| undefined


</td><td>

_(Optional)_ Auxiliary data.


</td></tr>
<tr><td>

[includeMetadata?](./core.planresourcesrequest.includemetadata.md)


</td><td>


</td><td>

boolean \| undefined


</td><td>

_(Optional)_ Include [additional metadata](./core.planresourcesmetadata.md) in the plan?


</td></tr>
<tr><td>

[principal](./core.planresourcesrequest.principal.md)


</td><td>


</td><td>

[Principal](./core.principal.md)


</td><td>

The principal for whom to plan.


</td></tr>
<tr><td>

[requestId?](./core.planresourcesrequest.requestid.md)


</td><td>


</td><td>

string \| undefined


</td><td>

_(Optional)_ The identifier for tracing the request.


</td></tr>
<tr><td>

[resource](./core.planresourcesrequest.resource.md)


</td><td>


</td><td>

[ResourceQuery](./core.resourcequery.md)


</td><td>

Partial details of the resources for which to plan.


</td></tr>
</tbody></table>
