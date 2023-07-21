/**
 * Load Cerbos policies from YAML or JSON files.
 *
 * @packageDocumentation
 */

import { opendir, readFile } from "fs/promises";
import { basename, extname, join, resolve, sep } from "path";

import type { Policy, SchemaInput } from "@cerbos/core";
import {
  _policyFromProtobuf,
  policyIsDerivedRoles,
  policyIsExportVariables,
  policyIsPrincipalPolicy,
  policyIsResourcePolicy,
} from "@cerbos/core";
import { parse } from "yaml";

import { Policy as PolicyProtobuf } from "./protobuf/cerbos/policy/v1/policy";

/**
 * {@inheritDoc @cerbos/core#SchemaInput}
 *
 * @public
 */
export interface Schema extends SchemaInput {
  /**
   * {@inheritDoc @cerbos/core#SchemaInput.definition}
   */
  definition: string;
}

/**
 * Parse a policy from a YAML- or JSON-encoded string.
 *
 * @param contents - the YAML- or JSON-encoded policy definition.
 *
 * @public
 */
export function parsePolicy(contents: string): Policy {
  return _policyFromProtobuf(PolicyProtobuf.fromJSON(parse(contents)));
}

/**
 * Read a policy from a YAML or JSON file.
 *
 * @param path - the path to the policy file.
 *
 * @public
 */
export async function readPolicy(path: string): Promise<Policy> {
  return parsePolicy(await readFile(path, { encoding: "utf8" }));
}

/**
 * Options for {@link readSchema}.
 *
 * @public
 */
export interface ReadSchemaOptions {
  /**
   * Unique ID for the schema, to be used to reference the schema from policies and from other schemas.
   *
   * @defaultValue (inferred from the schema file path)
   *
   * @remarks
   * If the schema is nested under a directory called `_schemas`, the default ID will be the file path
   * relative to the `_schemas` directory. Otherwise, the default ID will be the file's basename.
   */
  id?: string | undefined;
}

/**
 * Read a schema from a JSON file.
 *
 * @param path - the path to the schema file.
 * @param options - additional settings.
 *
 * @public
 */
export async function readSchema(
  path: string,
  options: ReadSchemaOptions = {},
): Promise<Schema> {
  return {
    id: options.id ?? schemaIdFromPath(path),
    definition: await readFile(path, { encoding: "utf8" }),
  };
}

function schemaIdFromPath(path: string): string {
  const absolutePath = resolve(path);
  const segments = absolutePath.split(sep);

  while (segments.length > 1) {
    const segment = segments.shift();
    if (segment === "_schemas") {
      return segments.join("/");
    }
  }

  return basename(absolutePath);
}

/**
 * The contents of a directory, returned by {@link readDirectory}.
 *
 * @public
 */
export interface DirectoryContents {
  /**
   * The policies found in the directory.
   */
  policies: Policy[];

  /**
   * The schemas found in the directory's `_schemas` subdirectory.
   */
  schemas: Schema[];
}

type DirectoryType = keyof DirectoryContents;

type PendingDirectoryContents = {
  [T in DirectoryType]: Promise<DirectoryContents[T][number]>[];
};

const fileHandlers = {
  policies: {
    extensions: new Set([".json", ".yaml", ".yml"]),
    add(path: string, { policies }: PendingDirectoryContents): void {
      policies.push(readPolicy(path));
    },
  },
  schemas: {
    extensions: new Set([".json"]),
    add(path: string, { schemas }: PendingDirectoryContents): void {
      schemas.push(readSchema(path));
    },
  },
};

/**
 * Read the policy and schema files in a directory and its subdirectories.
 *
 * @param path - the path to the directory.
 *
 * @remarks
 * This function looks for policies and schemas stored in the
 * {@link https://docs.cerbos.dev/cerbos/latest/policies/best_practices.html#_policy_repository_layout | standard Cerbos directory layout}.
 *
 * @public
 */
export async function readDirectory(path: string): Promise<DirectoryContents> {
  const pending: PendingDirectoryContents = {
    policies: [],
    schemas: [],
  };

  await walk(path, ".", "policies", pending);

  return {
    policies: (await Promise.all(pending.policies)).sort(comparePolicies),
    schemas: (await Promise.all(pending.schemas)).sort(compareSchemas),
  };
}

async function walk(
  root: string,
  subdir: string,
  type: DirectoryType,
  pending: PendingDirectoryContents,
): Promise<void> {
  const subdirs: Promise<void>[] = [];

  for await (const entry of await opendir(join(root, subdir))) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const path = join(subdir, entry.name);

    if (entry.isDirectory()) {
      if (path === "_schemas") {
        subdirs.push(walk(root, path, "schemas", pending));
      } else if (!(type === "policies" && entry.name === "testdata")) {
        subdirs.push(walk(root, path, type, pending));
      }
    } else {
      const handler = fileHandlers[type];
      if (handler.extensions.has(extname(entry.name))) {
        handler.add(join(root, path), pending);
      }
    }
  }

  await Promise.all(subdirs);
}

function comparePolicies(a: Policy, b: Policy): number {
  return compareStrings(policySortKey(a), policySortKey(b));
}

function policySortKey(policy: Policy): string {
  let segments: [number, ...string[]];

  if (policyIsExportVariables(policy)) {
    segments = [0, policy.exportVariables.name];
  } else if (policyIsDerivedRoles(policy)) {
    segments = [1, policy.derivedRoles.name];
  } else if (policyIsResourcePolicy(policy)) {
    const { resource, version, scope } = policy.resourcePolicy;
    segments = [2, resource, version, scope ?? ""];
  } else if (policyIsPrincipalPolicy(policy)) {
    const { principal, version, scope } = policy.principalPolicy;
    segments = [3, principal, version, scope ?? ""];
  } else {
    throw new Error("Unexpected policy type");
  }

  return segments.join("\0");
}

function compareSchemas(a: Schema, b: Schema): number {
  return compareStrings(a.id, b.id);
}

function compareStrings(a: string, b: string): number {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}
