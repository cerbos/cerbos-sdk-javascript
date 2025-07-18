<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/hub](./hub.md) &gt; [ReplaceFilesRequest](./hub.replacefilesrequest.md) &gt; [allowUnchanged](./hub.replacefilesrequest.allowunchanged.md)

## ReplaceFilesRequest.allowUnchanged property

Allow replacements that do not change the state of the store.

**Signature:**

```typescript
allowUnchanged?: boolean;
```

## Remarks

If `false` (the default), an [OperationDiscarded](./hub.operationdiscarded.md) error will be thrown if the contents match those of the store. If `true`<!-- -->, no error will be thrown and the current store version will be returned.

