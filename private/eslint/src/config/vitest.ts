import vitestPlugin from "@vitest/eslint-plugin";

import { defineConfig } from "../config.js";

export const vitestConfig = defineConfig({
  files: ["**/*.test.ts"],
  extends: [vitestPlugin.configs.recommended],
  settings: {
    vitest: {
      typecheck: true,
    },
  },
  rules: {
    "vitest/expect-expect": ["warn", { assertFunctionNames: ["expect*"] }],
  },
});
