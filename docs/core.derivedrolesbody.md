<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [DerivedRolesBody](./core.derivedrolesbody.md)

## DerivedRolesBody interface

A set of [derived roles](https://docs.cerbos.dev/cerbos/latest/policies/derived_roles) to augment static RBAC roles with contextual data to provide more fine-grained control at runtime.

**Signature:**

```typescript
export interface DerivedRolesBody 
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

[constants?](./core.derivedrolesbody.constants.md)


</td><td>


</td><td>

[Constants](./core.constants.md) \| undefined


</td><td>

_(Optional)_ [Constants](https://docs.cerbos.dev/cerbos/latest/policies/variables#constants) defined for use in conditions.


</td></tr>
<tr><td>

[definitions](./core.derivedrolesbody.definitions.md)


</td><td>


</td><td>

[DerivedRoleDefinition](./core.derivedroledefinition.md)<!-- -->\[\]


</td><td>

The definitions of the derived roles.


</td></tr>
<tr><td>

[name](./core.derivedrolesbody.name.md)


</td><td>


</td><td>

string


</td><td>

The name to use when importing the set of derived roles.


</td></tr>
<tr><td>

[variables?](./core.derivedrolesbody.variables.md)


</td><td>


</td><td>

[Variables](./core.variables.md) \| undefined


</td><td>

_(Optional)_ [Variables](https://docs.cerbos.dev/cerbos/latest/policies/variables#variables) defined for use in conditions.


</td></tr>
</tbody></table>

