<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/grpc](./grpc.md) &gt; [GRPC](./grpc.grpc.md) &gt; [close](./grpc.grpc.close.md)

## GRPC.close() method

Disconnect from the Cerbos policy decision point server and clean up resources.

**Signature:**

```typescript
close(): void;
```

**Returns:**

void

## Remarks

It is safe to call `close` more than once.

Any interactions with the server after calling `close` will throw an error.

