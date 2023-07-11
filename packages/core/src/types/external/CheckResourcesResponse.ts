import type { CheckResourcesResult } from "./CheckResourcesResult";
import type { ResourceSearch } from "./ResourceSearch";
import type { ValidationError } from "./ValidationError";

/**
 * The outcome of checking a principal's permissions on a set of resources.
 *
 * @public
 */
export class CheckResourcesResponse {
  /**
   * The identifier for tracing the request.
   */
  public requestId: string;

  /**
   * The outcomes of the permission checks for each resource.
   */
  public results: CheckResourcesResult[];

  public constructor({
    requestId,
    results,
  }: Pick<CheckResourcesResponse, "requestId" | "results">) {
    this.requestId = requestId;
    this.results = results;
  }

  /**
   * Check if the policy decision was that all input actions should be allowed for a resource.
   *
   * @param resource - the resource search criteria.
   * @returns `undefined` if the resource is not present in the results.
   */
  public allAllowed(resource: ResourceSearch): boolean | undefined {
    return this.findResult(resource)?.allAllowed();
  }

  /**
   * List the actions that should be allowed for a resource.
   *
   * @param resource - the resource search criteria.
   * @returns `undefined` if the resource is not present in the results.
   */
  public allowedActions(resource: ResourceSearch): string[] | undefined {
    return this.findResult(resource)?.allowedActions();
  }

  /**
   * Check if the policy decision was that an action should be allowed for a resource.
   *
   * @param check - the resource search criteria and action to check.
   * @returns `undefined` if the resource or action is not present in the results.
   */
  public isAllowed(check: {
    resource: ResourceSearch;
    action: string;
  }): boolean | undefined {
    return this.findResult(check.resource)?.isAllowed(check.action);
  }

  /**
   * Find an item from {@link CheckResourcesResponse.results | results} by resource.
   *
   * @param resource - the resource search criteria.
   * @returns `undefined` if the resource is not present in the results.
   */
  public findResult(
    resource: ResourceSearch,
  ): CheckResourcesResult | undefined {
    const { kind, id, policyVersion, scope } = resource;

    return this.results.find(
      ({ resource }) =>
        resource.kind === kind &&
        resource.id === id &&
        (policyVersion === undefined ||
          resource.policyVersion === policyVersion) &&
        (scope === undefined || resource.scope === scope),
    );
  }

  /**
   * Unique schema validation errors for the principal or resource attributes.
   */
  public get validationErrors(): ValidationError[] {
    const unique: Record<string, ValidationError> = {};

    this.results.forEach(({ validationErrors }) => {
      validationErrors.forEach((validationError) => {
        const { path, message, source } = validationError;
        unique[`${path}:${message}:${source}`] = validationError;
      });
    });

    return Object.values(unique);
  }
}
