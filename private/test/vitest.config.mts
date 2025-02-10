import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    clearMocks: true,
    exclude: ["lib"],
    setupFiles: "src/setup.ts",
    testTimeout: 20000,
  },
});
