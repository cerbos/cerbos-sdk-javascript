import { _isObject } from "./_isObject";

const utf8Decoder = new TextDecoder("utf-8", { fatal: true });

/**
 * Definition of a JSON schema used to validate principal or resource attributes.
 *
 * @public
 */
export class SchemaDefinition {
  public constructor(
    /**
     * The UTF-8 bytes of the JSON-serialized schema definition.
     */
    public readonly bytes: Uint8Array,
  ) {}

  /**
   * The parsed schema definition.
   */
  public toObject(): Record<string, unknown> {
    const object = JSON.parse(this.toString()) as unknown;

    if (!_isObject(object)) {
      throw new Error("Schema definition is not an object");
    }

    return object;
  }

  /**
   * The JSON-serialized schema definition.
   */
  public toString(): string {
    return utf8Decoder.decode(this.bytes);
  }
}
