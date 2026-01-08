import { defineConfig } from "eslint/config";

import { eslintConfig } from "./config/eslint.js";
import { importConfig } from "./config/import.js";
import { reactHooksConfig } from "./config/react-hooks.js";
import { stylisticConfig } from "./config/stylistic.js";
import { typescriptConfig } from "./config/typescript.js";
import { vitestConfig } from "./config/vitest.js";

export const config = defineConfig(
  {
    ignores: [
      "docs/**",
      "packages/*/lib/**",
      "packages/*/src/protobuf/**",
      "private/*/lib/**",
      "private/*/src/protobuf/**",
    ],
  },
  ...eslintConfig,
  ...typescriptConfig,
  ...importConfig,
  ...reactHooksConfig,
  ...stylisticConfig,
  ...vitestConfig,
);
