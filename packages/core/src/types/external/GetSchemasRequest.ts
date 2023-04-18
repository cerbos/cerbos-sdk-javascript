/**
 * Input to {@link @cerbos/core#Client.getSchemas}.
 *
 * @public
 */
export interface GetSchemasRequest {
  /**
   * IDs of schemas to fetch.
   *
   * @remarks
   * Available schema IDs can be listed with {@link @cerbos/core#Client.listSchemas}.
   */
  ids: string[];
}
