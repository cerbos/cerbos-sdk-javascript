import { readdirSync } from "fs";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { fileURLToPath } from "url";

import { format } from "prettier";

import coreOverrides from "../packages/core/package.overrides.json" assert { type: "json" };

const absolutePath = (relativePathFromProjectRoot: string): string =>
  resolve(fileURLToPath(import.meta.url), "../..", relativePathFromProjectRoot);

const packages = (): string[] =>
  readdirSync(absolutePath("packages"), {
    withFileTypes: true,
  })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

const read = async (path: string): Promise<string> =>
  readFile(path, { encoding: "utf-8" });

const readJSON = async (path: string): Promise<Record<string, unknown>> => {
  const contents: unknown = JSON.parse(await read(path));

  if (!isObject(contents)) {
    throw new Error(`Expected ${path} to contain a JSON object`);
  }

  return contents;
};

const isObject = (value: unknown): value is Record<string, unknown> =>
  !!value && Object.getPrototypeOf(value) === Object.prototype;

const write = async (path: string, contents: string): Promise<void> =>
  writeFile(path, contents, { encoding: "utf-8" });

const merge = (
  first: Record<string, unknown>,
  ...rest: Record<string, unknown>[]
): Record<string, unknown> => {
  const result: Record<string, unknown> = { ...first };

  rest.forEach((object) => {
    Object.entries(object).forEach(([key, value]) => {
      const existing = result[key];
      if (isObject(existing) && isObject(value)) {
        result[key] = merge(existing, value);
      } else {
        result[key] = value;
      }
    });
  });

  return result;
};

const packageJSON = async (packageName: string): Promise<string> => {
  const dependencyOnCore =
    packageName === "core"
      ? {}
      : { dependencies: { "@cerbos/core": `^${coreOverrides.version}` } };

  const packageContents = merge(
    await readJSON(absolutePath("scripts/boilerplate/package.json")),
    await readJSON(
      absolutePath(`packages/${packageName}/package.overrides.json`)
    ),
    dependencyOnCore,
    {
      $schema: undefined,
      name: `@cerbos/${packageName}`,
      repository: {
        directory: `packages/${packageName}`,
      },
    }
  );

  return format(JSON.stringify(packageContents), {
    filepath: "package.json",
    parser: "json-stringify",
  });
};

const files: Record<string, (packageName: string) => Promise<string>> = {
  "LICENSE.txt": async () => read(absolutePath("LICENSE.txt")),
  "package.json": packageJSON,
  "tsconfig.json": async () =>
    read(absolutePath("scripts/boilerplate/tsconfig.json")),
};

await Promise.all(
  packages().flatMap<Promise<void>>((packageName) =>
    Object.entries(files).map<Promise<void>>(async ([filename, contents]) => {
      const path = `packages/${packageName}/${filename}`;
      await write(absolutePath(path), await contents(packageName));
      console.info(path);
    })
  )
);
