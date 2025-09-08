import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";

export const eslintConfig = defineConfig(
  eslint.configs.recommended,
  {
    rules: {
      curly: "warn",
      eqeqeq: "warn",
      "func-style": ["warn", "declaration"],
      "no-console": "warn",
      "no-constant-condition": ["warn", { checkLoops: false }],
      "no-fallthrough": ["warn", { allowEmptyCase: true }],
      "no-template-curly-in-string": "warn",
      "sort-imports": ["warn", { ignoreDeclarationSort: true }],
    },
  },
  {
    files: ["private/scripts/**"],
    rules: {
      "no-console": "off",
    },
  },
);
