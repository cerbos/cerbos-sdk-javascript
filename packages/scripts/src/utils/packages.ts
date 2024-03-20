import { execa } from "execa";
import { z } from "zod";

const publicPackageSchema = z.object({
  private: z.literal(false),
  name: z.string(),
  version: z.string(),
  path: z.string(),
});

export type PublicPackage = z.infer<typeof publicPackageSchema>;

const privatePackageSchema = z.object({
  private: z.literal(true),
  path: z.string(),
});

export type PrivatePackage = z.infer<typeof privatePackageSchema>;

const packageSchema = z.discriminatedUnion("private", [
  publicPackageSchema,
  privatePackageSchema,
]);

export type Package = z.infer<typeof packageSchema>;

const packagesSchema = z.array(packageSchema);

export function isPublic(pkg: Package): pkg is PublicPackage {
  return !pkg.private;
}

export function isPrivate(pkg: Package): pkg is PrivatePackage {
  return pkg.private;
}

export async function listPackages(): Promise<Package[]> {
  const { stdout } = await execa("pnpm", [
    "--recursive",
    "list",
    "--depth=-1",
    "--json",
  ]);

  return packagesSchema.parse(JSON.parse(stdout));
}
