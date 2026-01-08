import type { InspectedAttributeKind } from "./InspectedAttributeKind.js";

/**
 * Details of an attribute referenced by a policy.
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
