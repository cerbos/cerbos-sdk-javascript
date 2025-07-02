import { readFile } from "fs/promises";
import { resolve } from "path";

import Zip from "adm-zip";
import { describe, expect, it } from "vitest";

import type { File } from "@cerbos/hub";
import {
  OperationDiscarded,
  StoresClient,
  credentialsFromEnv,
} from "@cerbos/hub";

const baseUrl = process.env["CERBOS_HUB_API_ENDPOINT"];

describe.runIf(baseUrl)("StoresClient", () => {
  it("round-trips files", async () => {
    const storeId = process.env["CERBOS_HUB_STORE_ID"];
    if (!storeId) {
      throw new Error("Missing CERBOS_HUB_STORE_ID");
    }

    const client = new StoresClient({
      baseUrl,
      credentials: credentialsFromEnv({
        CERBOS_HUB_CLIENT_ID: process.env["CERBOS_HUB_STORES_CLIENT_ID"],
        CERBOS_HUB_CLIENT_SECRET:
          process.env["CERBOS_HUB_STORES_CLIENT_SECRET"],
      }),
    });

    const [a, b, hidden, schema] = (await Promise.all(
      ["a.yaml", "b.json", ".hidden.yaml", "_schemas/a.json"].map<
        Promise<File>
      >(async (path) => ({
        path,
        contents: new Uint8Array(
          (await readFile(resolve(__dirname, "../../files", path))).buffer,
        ),
      })),
    )) as [File, File, File, File];

    let currentStoreVersion: bigint;
    let newStoreVersion: bigint;
    let ignoredFiles: string[];
    let changed: boolean;

    ({ newStoreVersion: currentStoreVersion, ignoredFiles } =
      await client.replaceFiles({
        storeId,
        contents: {
          files: [a, b, hidden],
        },
        allowUnchanged: true,
      }));

    expect(currentStoreVersion).toBeGreaterThan(0n);
    expect(ignoredFiles).toEqual([hidden.path]);

    ({ newStoreVersion, ignoredFiles, changed } = await client.replaceFiles({
      storeId,
      contents: {
        files: [a, b, hidden],
      },
      allowUnchanged: true,
    }));

    expect(newStoreVersion).toEqual(currentStoreVersion);
    expect(ignoredFiles).toEqual([hidden.path]);
    expect(changed).toBe(false);

    try {
      await client.replaceFiles({
        storeId,
        contents: {
          files: [a, b, hidden],
        },
      });

      expect.unreachable();
    } catch (error) {
      expect(error).toBeInstanceOf(OperationDiscarded);
      expect(error).toMatchObject({
        currentStoreVersion: currentStoreVersion,
        ignoredFiles,
      });
    }

    const { storeVersion: listFilesStoreVersion, files: paths } =
      await client.listFiles({
        storeId,
        filter: { path: { equals: a.path } },
      });

    expect(listFilesStoreVersion).toEqual(currentStoreVersion);
    expect(paths).toEqual([a.path]);

    const { storeVersion: getFilesStoreVersion, files } = await client.getFiles(
      {
        storeId,
        files: paths,
      },
    );

    expect(getFilesStoreVersion).toEqual(currentStoreVersion);
    expect(files).toEqual([a]);

    ({ newStoreVersion, changed } = await client.modifyFiles({
      storeId,
      condition: { storeVersionMustEqual: currentStoreVersion },
      operations: [
        { addOrUpdate: a },
        { addOrUpdate: schema },
        { delete: b.path },
      ],
    }));

    expect(newStoreVersion).toEqual(currentStoreVersion + 1n);
    expect(changed).toBe(true);

    currentStoreVersion = newStoreVersion;

    ({ newStoreVersion, changed } = await client.modifyFiles({
      storeId,
      operations: [{ delete: b.path }],
      allowUnchanged: true,
    }));

    expect(newStoreVersion).toEqual(currentStoreVersion);
    expect(changed).toBe(false);

    try {
      await client.modifyFiles({
        storeId,
        operations: [{ delete: b.path }],
      });

      expect.unreachable();
    } catch (error) {
      expect(error).toBeInstanceOf(OperationDiscarded);
      expect(error).toMatchObject({
        currentStoreVersion: currentStoreVersion,
        ignoredFiles: [],
      });
    }

    const zip = new Zip();
    for (const { path, contents } of [a, b, hidden]) {
      zip.addFile(path, Buffer.from(contents));
    }

    ({ newStoreVersion, ignoredFiles, changed } = await client.replaceFiles({
      storeId,
      contents: {
        zipped: zip.toBuffer(),
      },
    }));

    expect(newStoreVersion).toEqual(currentStoreVersion + 1n);
    expect(ignoredFiles).toEqual([hidden.path]);
    expect(changed).toBe(true);
  });
});
