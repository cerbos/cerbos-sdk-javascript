import { join } from "path";

import { execa } from "execa";
import { z } from "zod";

import { read, write } from "./files.js";

const packageSchema = z.object({
  name: z.string(),
  version: z.string(),
  path: z.string(),
});

export type Package = z.infer<typeof packageSchema>;

const packagesSchema = z.array(packageSchema);

export async function listPackages(): Promise<Package[]> {
  const { stdout } = await execa("pnpm", [
    "--filter=./packages/*",
    "list",
    "--depth=-1",
    "--json",
  ]);

  return packagesSchema.parse(JSON.parse(stdout));
}

export interface PackageJson {
  version: string;
  peerDependencies?: Record<string, string>;
  dependencies?: Record<string, string>;
}

export async function readPackageJson({ path }: Package): Promise<PackageJson> {
  return JSON.parse(await read(join(path, "package.json"))) as PackageJson;
}

export async function writePackageJson(
  { path }: Package,
  manifest: PackageJson,
): Promise<void> {
  await write(join(path, "package.json"), JSON.stringify(manifest, null, 2));
}
