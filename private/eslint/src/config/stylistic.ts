import stylisticPlugin from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";

export const stylisticConfig = defineConfig(
  stylisticPlugin.configs["disable-legacy"],
  {
    plugins: { stylistic: stylisticPlugin },
    rules: {
      "stylistic/jsx-curly-brace-presence": [
        "warn",
        {
          props: "never",
          children: "never",
          propElementValues: "always",
        },
      ],
      "stylistic/lines-between-class-members": [
        "warn",
        "always",
        { exceptAfterSingleLine: true },
      ],
      "stylistic/padding-line-between-statements": [
        "warn",
        {
          blankLine: "always",
          prev: [
            "block-like",
            "case",
            "default",
            "interface",
            "multiline-const",
            "multiline-expression",
            "multiline-let",
          ],
          next: "*",
        },
      ],
      "stylistic/quotes": ["warn", "double", { avoidEscape: true }],
    },
  },
);
