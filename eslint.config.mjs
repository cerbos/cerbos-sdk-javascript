import eslint from "@eslint/js";
import vitestPlugin from "@vitest/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tsdocPlugin from "eslint-plugin-tsdoc";
import typescriptPlugin from "typescript-eslint";

export default typescriptPlugin.config(
  {
    ignores: [
      "packages/*/lib/**",
      "packages/*/src/protobuf/**",
      "private/*/src/protobuf/**",
    ],
  },
  eslint.configs.recommended,
  ...typescriptPlugin.configs.strictTypeChecked,
  ...typescriptPlugin.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.typescript,
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/internal-regex": "^@cerbos/",
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/explicit-member-accessibility": "warn",
      "@typescript-eslint/no-confusing-void-expression": "warn",
      "@typescript-eslint/no-require-imports": [
        "warn",
        { allow: ["/package\\.json$"] },
      ],
      "@typescript-eslint/no-unnecessary-condition": [
        "warn",
        { allowConstantLoopConditions: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/prefer-enum-initializers": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/promise-function-async": "warn",
      "@typescript-eslint/restrict-template-expressions": [
        "warn",
        { allowNumber: true },
      ],
      "@typescript-eslint/return-await": ["warn", "always"],
      curly: "warn",
      "func-style": ["warn", "declaration"],
      "import/consistent-type-specifier-style": ["warn", "prefer-top-level"],
      "import/export": "warn",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
      "import/no-extraneous-dependencies": [
        "warn",
        {
          devDependencies: ["private/**", "eslint.config.mjs"],
          optionalDependencies: false,
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
      "no-console": "warn",
      "no-constant-condition": ["warn", { checkLoops: false }],
      quotes: ["warn", "double", { avoidEscape: true }],
      "sort-imports": ["warn", { ignoreDeclarationSort: true }],
    },
  },
  {
    files: ["**/*.ts"],
    plugins: {
      tsdoc: tsdocPlugin,
    },
    rules: {
      "tsdoc/syntax": "warn",
    },
  },
  {
    files: ["packages/react/**"],
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
  {
    files: ["private/scripts/**"],
    rules: {
      "no-console": "off",
    },
  },
  {
    files: ["**/*.test.ts", "private/test/src/helpers.ts"],
    ...vitestPlugin.configs.recommended,
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "vitest/expect-expect": ["warn", { assertFunctionNames: ["expect*"] }],
    },
  },
);
