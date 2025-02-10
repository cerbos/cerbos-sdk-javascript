import reactHooksPlugin from "eslint-plugin-react-hooks";

import { defineConfig } from "../config.js";

export const reactHooksConfig = defineConfig({
  plugins: { "react-hooks": reactHooksPlugin },
  files: ["packages/react/**"],
  rules: reactHooksPlugin.configs.recommended.rules,
});
