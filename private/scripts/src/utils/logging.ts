export function abort(message: string): never {
  console.error(`\x1b[31m${message}\x1b[0m`);
  process.exit(1);
}
