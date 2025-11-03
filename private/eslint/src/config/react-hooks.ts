import { defineConfig } from "eslint/config";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export const reactHooksConfig = defineConfig({
  files: ["packages/react/**"],
  extends: [reactHooksPlugin.configs.flat.recommended],
});
