<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [ResourceRule](./core.resourcerule.md)

## ResourceRule interface

A rule for actions that can be performed on a given resource.

**Signature:**

```typescript
export interface ResourceRule 
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

[actions](./core.resourcerule.actions.md)


</td><td>


</td><td>

string\[\]


</td><td>

The actions to which the rule applies.


</td></tr>
<tr><td>

[condition?](./core.resourcerule.condition.md)


</td><td>


</td><td>

[Condition](./core.condition.md) \| undefined


</td><td>

_(Optional)_ The condition that must be met for the rule to apply.


</td></tr>
<tr><td>

[derivedRoles?](./core.resourcerule.derivedroles.md)


</td><td>


</td><td>

string\[\] \| undefined


</td><td>

_(Optional)_ Derived roles to which the rule applies.


</td></tr>
<tr><td>

[effect](./core.resourcerule.effect.md)


</td><td>


</td><td>

[Effect](./core.effect.md)


</td><td>

The effect of the rule.


</td></tr>
<tr><td>

[name?](./core.resourcerule.name.md)


</td><td>


</td><td>

string \| undefined


</td><td>

_(Optional)_ A descriptive name for the rule.


</td></tr>
<tr><td>

[output?](./core.resourcerule.output.md)


</td><td>


</td><td>

[Output](./core.output.md) \| undefined


</td><td>

_(Optional)_ User-defined output to be produced when evaluating the rule.


</td></tr>
<tr><td>

[roles?](./core.resourcerule.roles.md)


</td><td>


</td><td>

string\[\] \| undefined


</td><td>

_(Optional)_ Static roles to which the rule applies.


</td></tr>
</tbody></table>

