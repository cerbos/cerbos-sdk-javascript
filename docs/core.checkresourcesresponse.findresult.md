<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [CheckResourcesResponse](./core.checkresourcesresponse.md) &gt; [findResult](./core.checkresourcesresponse.findresult.md)

## CheckResourcesResponse.findResult() method

Find an item from [results](./core.checkresourcesresponse.results.md) by resource.

**Signature:**

```typescript
findResult(resource: ResourceSearch): CheckResourcesResult | undefined;
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

[CheckResourcesResult](./core.checkresourcesresult.md) \| undefined

`undefined` if the resource is not present in the results.

