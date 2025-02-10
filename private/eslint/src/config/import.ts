import importPlugin from "eslint-plugin-import";

import { defineConfig } from "../config.js";

export const importConfig = defineConfig(
  importPlugin.flatConfigs.typescript,
  {
    plugins: { import: importPlugin },
    settings: {
      "import/internal-regex": "^@cerbos/",
    },
    rules: {
      "import/consistent-type-specifier-style": ["warn", "prefer-top-level"],
      "import/export": "warn",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
      "import/no-extraneous-dependencies": [
        "warn",
        {
          devDependencies: ["private/**", "eslint.config.mjs"],
          optionalDependencies: false,
          peerDependencies: true,
          includeTypes: true,
        },
      ],
      "import/no-named-as-default": "warn",
      "import/order": [
        "warn",
        {
          alphabetize: {
            order: "asc",
            orderImportKind: "asc",
            caseInsensitive: true,
          },
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
  {
    files: ["**/*.ts"],
    ignores: [
      "**/*.d.ts",
      "packages/ui-app/src/routes.ts",
      "**/.storybook/main.ts",
      "**/knip.config.ts",
      "**/tailwind.config.ts",
      "**/vite.config.ts",
      "**/vitest.workspace.ts",
    ],
    rules: {
      "import/no-default-export": "warn",
    },
  },
  {
    files: ["**/*.tsx"],
    ignores: ["**/routes/*/route.tsx"],
    rules: {
      // Components should use default exports for compatibility with `React.lazy`
      "import/prefer-default-export": ["warn", { target: "any" }],
    },
  },
);
