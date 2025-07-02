const encoder = new TextEncoder();

/**
 * Encode a string to a UTF-8 byte sequence.
 *
 * @public
 */
export function stringToBytes(input: string): Uint8Array {
  return encoder.encode(input);
}

const decoder = new TextDecoder("utf8", { fatal: true });

/**
 * Decode a string from a UTF-8 byte sequence.
 *
 * @public
 */
export function bytesToString(input: Uint8Array): string {
  return decoder.decode(input);
}
