import { execa } from "execa";
import { z } from "zod";

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
