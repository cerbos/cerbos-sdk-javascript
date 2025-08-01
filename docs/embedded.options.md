<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/embedded](./embedded.md) &gt; [Options](./embedded.options.md)

## Options interface

Options for creating a new [Embedded](./embedded.embedded.md) client or [Loader](./embedded.loader.md)<!-- -->.

**Signature:**

```typescript
export interface Options extends Pick<CoreOptions, "headers" | "userAgent"> 
```
**Extends:** Pick&lt;[CoreOptions](./core.options.md)<!-- -->, "headers" \| "userAgent"&gt;

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

[decodeJWTPayload?](./embedded.options.decodejwtpayload.md)


</td><td>


</td><td>

[DecodeJWTPayload](./embedded.decodejwtpayload.md) \| undefined


</td><td>

_(Optional)_ A function to verify and decode JWTs passed as auxiliary data, returning the JWT payload.


</td></tr>
<tr><td>

[defaultPolicyVersion?](./embedded.options.defaultpolicyversion.md)


</td><td>


</td><td>

string \| undefined


</td><td>

_(Optional)_ [Default policy version](https://docs.cerbos.dev/cerbos/latest/configuration/engine#default_policy_version) to apply to requests that do not specify one.


</td></tr>
<tr><td>

[globals?](./embedded.options.globals.md)


</td><td>


</td><td>

Record&lt;string, [Value](./core.value.md)<!-- -->&gt; \| undefined


</td><td>

_(Optional)_ [Global variables](https://docs.cerbos.dev/cerbos/latest/configuration/engine#globals) to pass environment-specific information to policy conditions.


</td></tr>
<tr><td>

[lenientScopeSearch?](./embedded.options.lenientscopesearch.md)


</td><td>


</td><td>

boolean \| undefined


</td><td>

_(Optional)_ Enable [lenient scope search](https://docs.cerbos.dev/cerbos/latest/configuration/engine#lenient_scopes)<!-- -->?

By default, when a request specifies a scope of `a.b.c` then a policy must exist with that exact scope. If lenient scope search is enabled, then the policy decision point will fall back to trying scopes `a.b`<!-- -->, `a`<!-- -->, and `""` if a policy with scope `a.b.c` does not exist.


</td></tr>
<tr><td>

[now?](./embedded.options.now.md)


</td><td>


</td><td>

(() =&gt; Date \| number) \| undefined


</td><td>

_(Optional)_ A function returning the current time, to be used when evaluating policy conditions.


</td></tr>
<tr><td>

[onDecision?](./embedded.options.ondecision.md)


</td><td>


</td><td>

((entry: [DecisionLogEntry](./core.decisionlogentry.md)<!-- -->) =&gt; void \| Promise&lt;void&gt;) \| undefined


</td><td>

_(Optional)_ A callback to invoke when a decision is made by the embedded policy decision point.


</td></tr>
<tr><td>

[onError?](./embedded.options.onerror.md)


</td><td>


</td><td>

((error: [LoadError](./embedded.loaderror.md)<!-- -->) =&gt; void \| Promise&lt;void&gt;) \| undefined


</td><td>

_(Optional)_ A callback to invoke when the embedded policy decision point bundle has failed to load.


</td></tr>
<tr><td>

[onLoad?](./embedded.options.onload.md)


</td><td>


</td><td>

((metadata: [BundleMetadata](./embedded.bundlemetadata.md)<!-- -->) =&gt; void \| Promise&lt;void&gt;) \| undefined


</td><td>

_(Optional)_ A callback to invoke when the embedded policy decision point bundle has been loaded.


</td></tr>
</tbody></table>

