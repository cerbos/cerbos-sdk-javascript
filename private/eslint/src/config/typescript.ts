import { defineConfig } from "eslint/config";
import typescriptPlugin from "typescript-eslint";

export const typescriptConfig = defineConfig(
  ...typescriptPlugin.configs.strictTypeChecked,
  ...typescriptPlugin.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/class-literal-property-style": "off",
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
    },
  },
  {
    files: [
      "**/*.test.ts",
      "private/test/src/client/*.ts",
      "private/test/src/helpers.ts",
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
    },
  },
);
