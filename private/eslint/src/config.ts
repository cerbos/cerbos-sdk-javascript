import type {
  ConfigArray,
  InfiniteDepthConfigWithExtends,
} from "typescript-eslint";
import { config } from "typescript-eslint";

export function defineConfig(
  ...configs: InfiniteDepthConfigWithExtends[]
): ConfigArray {
  return config(...configs);
}
