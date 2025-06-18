const encoder = new TextEncoder();

export function stringToBytes(input: string): Uint8Array {
  return encoder.encode(input);
}

const decoder = new TextDecoder("utf8", { fatal: true });

export function bytesToString(input: Uint8Array): string {
  return decoder.decode(input);
}
