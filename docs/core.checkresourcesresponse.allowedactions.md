<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [CheckResourcesResponse](./core.checkresourcesresponse.md) &gt; [allowedActions](./core.checkresourcesresponse.allowedactions.md)

## CheckResourcesResponse.allowedActions() method

List the actions that should be allowed for a resource.

**Signature:**

```typescript
allowedActions(resource: ResourceSearch): string[] | undefined;
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

resource


</td><td>

[ResourceSearch](./core.resourcesearch.md)


</td><td>

the resource search criteria.


</td></tr>
</tbody></table>


**Returns:**

string\[\] \| undefined

`undefined` if the resource is not present in the results.

