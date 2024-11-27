import type { InspectedAttributeKind } from "./InspectedAttributeKind";

/**
 * Details of an attribute referenced by a policy.
 *
 * @public
 */
export interface InspectedAttribute {
  /**
   * Kind of the attribute.
   */
  kind: InspectedAttributeKind;

  /**
   * Name of the attribute.
   */
  name: string;
}
