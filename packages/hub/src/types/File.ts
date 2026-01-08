/**
 * A file in a store.
 */
export interface File {
  /**
   * The path of the file.
   */
  path: string;

  /**
   * The contents of the file.
   *
   * @remarks
   * Use {@link bytesToString} and {@link stringToBytes} to convert the contents to or from a string, and
   * {@link @cerbos/files!parsePolicy | parsePolicy} and {@link @cerbos/files!serializePolicy | serializePolicy} to programmatically manipulate policies.
   */
  contents: Uint8Array;
}
