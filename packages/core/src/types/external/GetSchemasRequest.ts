/**
 * Input to {@link Client.getSchemas}.
 */
export interface GetSchemasRequest {
  /**
   * IDs of schemas to fetch.
   *
   * @remarks
   * Available schema IDs can be listed with {@link Client.listSchemas}.
   */
  ids: string[];
}
