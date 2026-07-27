import { fileURLToPath } from "url";

import { defineConfig } from "eslint/config";
import { flatConfigs as importPresets } from "eslint-plugin-import-x";

const noExtraneousDependencies = {
  devDependencies: false,
  optionalDependencies: false,
  peerDependencies: true,
  includeTypes: true,
};

export const importConfig = defineConfig(
  importPresets.recommended,
  importPresets.typescript,
  {
    settings: {
      "import-x/internal-regex": "^@cerbos/",
    },
    rules: {
      "import-x/consistent-type-specifier-style": ["warn", "prefer-top-level"],
      "import-x/export": "warn",
      "import-x/newline-after-import": "warn",
      "import-x/no-duplicates": "warn",
      "import-x/no-extraneous-dependencies": [
        "warn",
        {
          ...noExtraneousDependencies,
          devDependencies: ["private/**", "eslint.config.mjs"],
        },
      ],
      "import-x/no-named-as-default": "warn",
      "import-x/order": [
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
      "import-x/no-default-export": "warn",
    },
  },
  {
    files: ["packages/hub/**"],
    rules: {
      "import-x/no-extraneous-dependencies": [
        "warn",
        {
          ...noExtraneousDependencies,
          packageDir: fileURLToPath(
            import.meta.resolve("../../../../packages/hub"),
          ),
        },
      ],
    },
  },
);
