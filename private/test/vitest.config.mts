import { readFile } from "fs/promises";

import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    {
      name: "override-embedded-loader-intervals",
      async load(id): Promise<string | undefined> {
        const overrides = {
          "embedded/lib/interval.js": [/60_000|10_000/g, "100"],
          "embedded-client/lib/interval.js": [/60|10/g, "0.1"],
        } as const;

        for (const [path, [search, replace]] of Object.entries(overrides)) {
          if (id.endsWith(`/packages/${path}`)) {
            const contents = await readFile(id, { encoding: "utf8" });
            return contents.replaceAll(search, replace);
          }
        }

        return undefined;
      },
    },
  ],
  test: {
    clearMocks: true,
    exclude: ["lib"],
    setupFiles: "src/setup.ts",
    testTimeout: 20000,
  },
});
