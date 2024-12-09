<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [InspectedVariable](./core.inspectedvariable.md)

## InspectedVariable interface

Details of a [variable](https://docs.cerbos.dev/cerbos/latest/policies/variables#variables) referenced by a policy.

**Signature:**

```typescript
export interface InspectedVariable 
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

[definition](./core.inspectedvariable.definition.md)


</td><td>


</td><td>

string \| undefined


</td><td>

Definition of the variable, if known.


</td></tr>
<tr><td>

[kind](./core.inspectedvariable.kind.md)


</td><td>


</td><td>

[InspectedVariableKind](./core.inspectedvariablekind.md)


</td><td>

Kind of the variable.


</td></tr>
<tr><td>

[name](./core.inspectedvariable.name.md)


</td><td>


</td><td>

string


</td><td>

Name of the variable.


</td></tr>
<tr><td>

[source](./core.inspectedvariable.source.md)


</td><td>


</td><td>

string \| undefined


</td><td>

Source of the variable, if it was imported.


</td></tr>
<tr><td>

[used](./core.inspectedvariable.used.md)


</td><td>


</td><td>

boolean


</td><td>

Whether the variable is used in a policy condition.


</td></tr>
</tbody></table>