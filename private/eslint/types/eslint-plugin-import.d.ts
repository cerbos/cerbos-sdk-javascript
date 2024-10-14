declare module "eslint-plugin-import" {
  import type { TSESLint } from "@typescript-eslint/utils";

  declare const flatConfigs: {
    typescript: TSESLint.FlatConfig.Config;
  };

  declare const rules: TSESLint.FlatConfig.Plugin["rules"];
}
