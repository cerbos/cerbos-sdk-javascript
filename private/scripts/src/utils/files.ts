import { readFile, writeFile } from "fs/promises";

import { format } from "prettier";

export async function read(path: string): Promise<string> {
  return await readFile(path, { encoding: "utf8" });
}

export async function write(path: string, contents: string): Promise<void> {
  await writeFile(path, await format(contents, { filepath: path }));
}
