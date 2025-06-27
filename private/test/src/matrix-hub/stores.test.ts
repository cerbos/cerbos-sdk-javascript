import { readFile } from "fs/promises";
import { resolve } from "path";

import { describe, expect, it } from "vitest";

import type { File } from "@cerbos/hub";
import { Credentials, StoresClient } from "@cerbos/hub";

const baseUrl = process.env["CERBOS_HUB_API_ENDPOINT"];

describe.runIf(baseUrl)("StoresClient", () => {
  it("round-trips files", async () => {
    const storeId = process.env["CERBOS_HUB_STORE_ID"];
    if (!storeId) {
      throw new Error("Missing CERBOS_HUB_STORE_ID");
    }

    const client = new StoresClient({
      credentials: Credentials.fromEnv(
        {
          CERBOS_HUB_CLIENT_ID: process.env["CERBOS_HUB_STORES_CLIENT_ID"],
          CERBOS_HUB_CLIENT_SECRET:
            process.env["CERBOS_HUB_STORES_CLIENT_SECRET"],
        },
        { baseUrl },
      ),
      baseUrl,
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

    const { newStoreVersion: replaceFilesStoreVersion, ignoredFiles } =
      await client.replaceFiles({
        storeId,
        contents: {
          files: [a, b, hidden],
        },
        allowUnchanged: true,
      });

    expect(replaceFilesStoreVersion).toBeGreaterThan(0n);
    expect(ignoredFiles).toEqual([".hidden.yaml"]);

    const { storeVersion: listFilesStoreVersion, files: paths } =
      await client.listFiles({
        storeId,
        filter: { path: { equals: "a.yaml" } },
      });

    expect(listFilesStoreVersion).toEqual(replaceFilesStoreVersion);
    expect(paths).toEqual(["a.yaml"]);

    const { storeVersion: getFilesStoreVersion, files } = await client.getFiles(
      {
        storeId,
        files: paths,
      },
    );

    expect(getFilesStoreVersion).toEqual(replaceFilesStoreVersion);
    expect(files).toEqual([a]);

    const { newStoreVersion: modifyFilesStoreVersion } =
      await client.modifyFiles({
        storeId,
        condition: { storeVersionMustEqual: replaceFilesStoreVersion },
        operations: [
          { addOrUpdate: a },
          { addOrUpdate: schema },
          { delete: b.path },
        ],
      });

    expect(modifyFilesStoreVersion).toEqual(replaceFilesStoreVersion + 1n);
  });
});
