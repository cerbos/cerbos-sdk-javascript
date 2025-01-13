import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    clearMocks: true,
    setupFiles: "src/setup.ts",
    testTimeout: 20000,
  },
});
