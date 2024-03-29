<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/grpc](./grpc.md) &gt; [GRPC](./grpc.grpc.md) &gt; [(constructor)](./grpc.grpc._constructor_.md)

## GRPC.(constructor)

Create a client for interacting with the Cerbos policy decision point (PDP) server over gRPC.

**Signature:**

```typescript
constructor(target: string, options: Options);
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

target


</td><td>

string


</td><td>

Cerbos PDP server address (`"host"`<!-- -->, `"host:port"`<!-- -->, or `"unix:/path/to/socket"`<!-- -->).


</td></tr>
<tr><td>

options


</td><td>

[Options](./grpc.options.md)


</td><td>

additional client settings.


</td></tr>
</tbody></table>

## Example 1

Connect via TCP with no encryption:

```typescript
const cerbos = new GRPC("localhost:3593", { tls: false });
```

## Example 2

Connect via a Unix socket with no encryption:

```typescript
const cerbos = new GRPC("unix:/var/run/cerbos.grpc.sock", { tls: false });
```

## Example 3

Connect to the hosted demo PDP to experiment [in the playground](https://play.cerbos.dev)<!-- -->:

```typescript
const cerbos = new GRPC("demo-pdp.cerbos.cloud", { tls: true, playgroundInstance: "gE623b0180QlsG5a4QIN6UOZ6f3iSFW2" });
```

