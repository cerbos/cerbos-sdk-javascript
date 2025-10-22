import vitestPlugin from "@vitest/eslint-plugin";
import { defineConfig } from "eslint/config";

export const vitestConfig = defineConfig({
  files: ["**/*.test.ts"],
  // @ts-expect-error -- https://github.com/vitest-dev/eslint-plugin-vitest/issues/761
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
