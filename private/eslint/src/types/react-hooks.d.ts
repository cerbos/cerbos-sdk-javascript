declare module "eslint-plugin-react-hooks" {
  import type { TSESLint } from "@typescript-eslint/utils";

  declare const configs: {
    recommended: {
      rules: TSESLint.ClassicConfig.RulesRecord;
    };
  };

  declare const rules: TSESLint.FlatConfig.Plugin["rules"];
}
