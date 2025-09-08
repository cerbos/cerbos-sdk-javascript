import { defineConfig } from "eslint/config";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export const reactHooksConfig = defineConfig({
  plugins: { "react-hooks": reactHooksPlugin },
  files: ["packages/react/**"],
  rules: reactHooksPlugin.configs.recommended.rules,
});
