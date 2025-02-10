declare module "@stylistic/eslint-plugin" {
  import type { TSESLint } from "@typescript-eslint/utils";

  const configs: {
    "disable-legacy": TSESLint.FlatConfig.Config;
  };

  const rules: TSESLint.FlatConfig.Plugin["rules"];
}
