<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [Client](./core.client.md)

## Client class

Base implementation of a client for interacting with the Cerbos policy decision point server.

**Signature:**

```typescript
export declare abstract class Client 
```

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Client` class.

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[addOrUpdatePolicies(request, options)](./core.client.addorupdatepolicies.md)


</td><td>


</td><td>

Add policies, or update existing policies.


</td></tr>
<tr><td>

[addOrUpdateSchemas(request, options)](./core.client.addorupdateschemas.md)


</td><td>


</td><td>

Add schemas to be used for validating principal or resource attributes, or update existing schemas.


</td></tr>
<tr><td>

[checkHealth(request, options)](./core.client.checkhealth.md)


</td><td>


</td><td>

Checks the health of services provided by the policy decision point server.


</td></tr>
<tr><td>

[checkResource(request, options)](./core.client.checkresource.md)


</td><td>


</td><td>

Check a principal's permissions on a resource.


</td></tr>
<tr><td>

[checkResources(request, options)](./core.client.checkresources.md)


</td><td>


</td><td>

Check a principal's permissions on a set of resources.


</td></tr>
<tr><td>

[deleteSchema(id, options)](./core.client.deleteschema.md)


</td><td>


</td><td>

Delete a schema.


</td></tr>
<tr><td>

[deleteSchemas(request, options)](./core.client.deleteschemas.md)


</td><td>


</td><td>

Delete multiple schemas.


</td></tr>
<tr><td>

[disablePolicies(request, options)](./core.client.disablepolicies.md)


</td><td>


</td><td>

Disable multiple policies.


</td></tr>
<tr><td>

[disablePolicy(id, options)](./core.client.disablepolicy.md)


</td><td>


</td><td>

Disable a policy.


</td></tr>
<tr><td>

[enablePolicies(request, options)](./core.client.enablepolicies.md)


</td><td>


</td><td>

Enable multiple policies.


</td></tr>
<tr><td>

[enablePolicy(id, options)](./core.client.enablepolicy.md)


</td><td>


</td><td>

Enable a policy.


</td></tr>
<tr><td>

[getAccessLogEntry(callId, options)](./core.client.getaccesslogentry.md)


</td><td>


</td><td>

Fetch an access log entry by call ID from the policy decision point server's audit log.


</td></tr>
<tr><td>

[getDecisionLogEntry(callId, options)](./core.client.getdecisionlogentry.md)


</td><td>


</td><td>

Fetch a decision log entry by call ID from the policy decision point server's audit log.


</td></tr>
<tr><td>

[getPolicies(request, options)](./core.client.getpolicies.md)


</td><td>


</td><td>

Fetch multiple policies by ID.


</td></tr>
<tr><td>

[getPolicy(id, options)](./core.client.getpolicy.md)


</td><td>


</td><td>

Fetch a policy by ID.


</td></tr>
<tr><td>

[getSchema(id, options)](./core.client.getschema.md)


</td><td>


</td><td>

Fetch a schema by ID.


</td></tr>
<tr><td>

[getSchemas(request, options)](./core.client.getschemas.md)


</td><td>


</td><td>

Fetch multiple schemas by ID.


</td></tr>
<tr><td>

[inspectPolicies(request, options)](./core.client.inspectpolicies.md)


</td><td>


</td><td>

Inspect policies in the store.


</td></tr>
<tr><td>

[isAllowed(request, options)](./core.client.isallowed.md)


</td><td>


</td><td>

Check if a principal is allowed to perform an action on a resource.


</td></tr>
<tr><td>

[listAccessLogEntries(request, options)](./core.client.listaccesslogentries.md)


</td><td>


</td><td>

List access log entries from the policy decision point server's audit log.


</td></tr>
<tr><td>

[listDecisionLogEntries(request, options)](./core.client.listdecisionlogentries.md)


</td><td>


</td><td>

List decision log entries from the policy decision point server's audit log.


</td></tr>
<tr><td>

[listPolicies(request, options)](./core.client.listpolicies.md)


</td><td>


</td><td>

List policies.


</td></tr>
<tr><td>

[listSchemas(options)](./core.client.listschemas.md)


</td><td>


</td><td>

List schemas.


</td></tr>
<tr><td>

[planResources(request, options)](./core.client.planresources.md)


</td><td>


</td><td>

Produce a query plan that can be used to obtain a list of resources on which a principal is allowed to perform a particular action.


</td></tr>
<tr><td>

[reloadStore(request, options)](./core.client.reloadstore.md)


</td><td>


</td><td>

Reload the store.


</td></tr>
<tr><td>

[serverInfo(options)](./core.client.serverinfo.md)


</td><td>


</td><td>

Retrieve information about the Cerbos policy decision point server.


</td></tr>
<tr><td>

[withPrincipal(principal, auxData)](./core.client.withprincipal.md)


</td><td>


</td><td>

Create a client instance with a pre-specified principal.


</td></tr>
</tbody></table>

