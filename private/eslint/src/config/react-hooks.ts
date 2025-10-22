import { defineConfig } from "eslint/config";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export const reactHooksConfig = defineConfig({
  files: ["packages/react/**"],
  // @ts-expect-error -- https://github.com/facebook/react/issues/34801
  extends: [reactHooksPlugin.configs.flat.recommended],
});
