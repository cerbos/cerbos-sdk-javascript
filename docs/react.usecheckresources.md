<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/react](./react.md) &gt; [useCheckResources](./react.usecheckresources.md)

## useCheckResources() function

Check the principal's permissions on a set of resources.

**Signature:**

```typescript
export declare function useCheckResources(request: Omit<CheckResourcesRequest, "principal">, options?: Omit<RequestOptions, "signal">): AsyncResult<CheckResourcesResponse>;
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

Omit&lt;[CheckResourcesRequest](./core.checkresourcesrequest.md)<!-- -->, "principal"&gt;


</td><td>


</td></tr>
<tr><td>

options


</td><td>

Omit&lt;[RequestOptions](./core.requestoptions.md)<!-- -->, "signal"&gt;


</td><td>

_(Optional)_


</td></tr>
</tbody></table>


**Returns:**

[AsyncResult](./react.asyncresult.md)<!-- -->&lt;[CheckResourcesResponse](./core.checkresourcesresponse.md)<!-- -->&gt;

## Example


```typescript
import { useCheckResources } from "@cerbos/react";

function SomeComponent() {
  const check = useCheckResources({
    resources: [
      {
        resource: {
          kind: "document",
          id: "1",
          attr: { owner: "user@example.com" },
        },
        actions: ["view", "edit"],
      },
      {
        resource: {
          kind: "document",
          id: "2",
          attr: { owner: "another-user@example.com" },
        },
        actions: ["view", "edit"],
      },
    ],
  });

  if (check.isLoading) {
    // show spinner
    return "Loading...";
  }

  if (check.error) {
    // handle error
    return "Error...";
  }

  return (
    <div>
      {check.data.allAllowed({
        kind: "document",
        id: "1",
      }) && <button>a button document 1</button>}
      {check.data.allAllowed({
        kind: "document",
        id: "2",
      }) && <button>a button document 2</button>}
      {check.data.isAllowed({
        resource: { kind: "document", id: "1" },
        action: "edit",
      }) && <button>another button for document 1</button>}
      {check.data.isAllowed({
        resource: { kind: "document", id: "2" },
        action: "edit",
      }) && <button>another button for document 2</button>}
    </div>
  );
}
```

