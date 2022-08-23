import type { Resource } from "./Resource";

/**
 * A {@link Resource} and list of actions on which to check a principal's permissions.
 *
 * @public
 */
export interface ResourceCheck {
  /**
   * The resource to check.
   */
  resource: Resource;

  /**
   * The actions to check.
   */
  actions: string[];
}
