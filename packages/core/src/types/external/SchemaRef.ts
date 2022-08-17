/**
 * Reference to a schema to be used to validate principal or resource attributes.
 *
 * @public
 */
export interface SchemaRef {
  /**
   * ID of the schema.
   */
  ref: string;

  /**
   * Options for ignoring schema validation.
   */
  ignoreWhen?:
    | {
        /**
         * Actions for which schema validation should be ignored.
         */
        actions: string[];
      }
    | undefined;
}
