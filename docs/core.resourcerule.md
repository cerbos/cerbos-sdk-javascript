<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [ResourceRule](./core.resourcerule.md)

## ResourceRule interface

A rule for actions that can be performed on a given resource.

<b>Signature:</b>

```typescript
export interface ResourceRule 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [actions](./core.resourcerule.actions.md) |  | string\[\] | The actions to which the rule applies. |
|  [condition?](./core.resourcerule.condition.md) |  | [Condition](./core.condition.md) \| undefined | <i>(Optional)</i> The condition that must be met for the rule to apply. |
|  [derivedRoles?](./core.resourcerule.derivedroles.md) |  | string\[\] | <i>(Optional)</i> Derived roles to which the rule applies. |
|  [effect](./core.resourcerule.effect.md) |  | [Effect](./core.effect.md) | The effect of the rule. |
|  [name?](./core.resourcerule.name.md) |  | string | <i>(Optional)</i> A descriptive name for the rule. |
|  [roles?](./core.resourcerule.roles.md) |  | string\[\] | <i>(Optional)</i> Static roles to which the rule applies. |
