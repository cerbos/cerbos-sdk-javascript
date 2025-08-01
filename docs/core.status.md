<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [Status](./core.status.md)

## Status enum

Status codes returned by the Cerbos policy decision point server.

**Signature:**

```typescript
export declare enum Status 
```

## Enumeration Members

<table><thead><tr><th>

Member


</th><th>

Value


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

ABORTED


</td><td>

`10`


</td><td>

The operation was aborted.


</td></tr>
<tr><td>

ALREADY\_EXISTS


</td><td>

`6`


</td><td>

The entity that the client attempted to create already exists.


</td></tr>
<tr><td>

CANCELLED


</td><td>

`1`


</td><td>

The operation was cancelled.


</td></tr>
<tr><td>

DATA\_LOSS


</td><td>

`15`


</td><td>

The operation resulted in unrecoverable data loss or corruption.


</td></tr>
<tr><td>

DEADLINE\_EXCEEDED


</td><td>

`4`


</td><td>

The operation timed out.


</td></tr>
<tr><td>

FAILED\_PRECONDITION


</td><td>

`9`


</td><td>

The operation was rejected because the system is not in a state required for the operation's execution.


</td></tr>
<tr><td>

INTERNAL


</td><td>

`13`


</td><td>

The operation failed due to an internal error.


</td></tr>
<tr><td>

INVALID\_ARGUMENT


</td><td>

`3`


</td><td>

The operation was rejected because an argument was invalid.


</td></tr>
<tr><td>

NOT\_FOUND


</td><td>

`5`


</td><td>

The requested entity was not found.


</td></tr>
<tr><td>

OK


</td><td>

`0`


</td><td>

The operation completed successfully.


</td></tr>
<tr><td>

OUT\_OF\_RANGE


</td><td>

`11`


</td><td>

The operation was attempted past the valid range.


</td></tr>
<tr><td>

PERMISSION\_DENIED


</td><td>

`7`


</td><td>

The caller does not have permission to execute the specified operation.


</td></tr>
<tr><td>

RESOURCE\_EXHAUSTED


</td><td>

`8`


</td><td>

The operation failed because a resource has been exhausted.


</td></tr>
<tr><td>

UNAUTHENTICATED


</td><td>

`16`


</td><td>

The operation was rejected because it did not have valid authentication credentials.


</td></tr>
<tr><td>

UNAVAILABLE


</td><td>

`14`


</td><td>

The operation failed because the service is unavailable.


</td></tr>
<tr><td>

UNIMPLEMENTED


</td><td>

`12`


</td><td>

The operation is not supported.


</td></tr>
<tr><td>

UNKNOWN


</td><td>

`2`


</td><td>

An unknown error occurred.


</td></tr>
</tbody></table>

