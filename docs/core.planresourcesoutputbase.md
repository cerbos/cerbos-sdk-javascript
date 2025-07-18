<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [PlanResourcesOutputBase](./core.planresourcesoutputbase.md)

## PlanResourcesOutputBase interface

Common fields between different [PlanResourcesOutput](./core.planresourcesoutput.md) types.

**Signature:**

```typescript
export interface PlanResourcesOutputBase 
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

[action](./core.planresourcesoutputbase.action.md)


</td><td>


</td><td>

string


</td><td>

The action for which the plan was made.


</td></tr>
<tr><td>

[actions](./core.planresourcesoutputbase.actions.md)


</td><td>


</td><td>

string\[\]


</td><td>

The actions for which the plan was made.


</td></tr>
<tr><td>

[policyVersion](./core.planresourcesoutputbase.policyversion.md)


</td><td>


</td><td>

string


</td><td>

The version of the policy that was used to make the plan.


</td></tr>
<tr><td>

[requestId](./core.planresourcesoutputbase.requestid.md)


</td><td>


</td><td>

string


</td><td>

An identifier for tracing the request.


</td></tr>
<tr><td>

[scope](./core.planresourcesoutputbase.scope.md)


</td><td>


</td><td>

string


</td><td>

The [scope](https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies.html) of the policy that was used to make the plan.


</td></tr>
<tr><td>

[validationErrors](./core.planresourcesoutputbase.validationerrors.md)


</td><td>


</td><td>

[ValidationError](./core.validationerror.md)<!-- -->\[\]


</td><td>

Any schema validation errors for the principal or resource attributes.


</td></tr>
</tbody></table>

