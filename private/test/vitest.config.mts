import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: "src/setup.ts",
    testTimeout: 20000,
  },
});
