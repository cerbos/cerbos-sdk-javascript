import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";

export const importConfig = defineConfig(
  importPlugin.flatConfigs.typescript,
  {
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
    ignores: ["**/*.config.*"],
    rules: {
      "import/no-default-export": "warn",
    },
  },
);
