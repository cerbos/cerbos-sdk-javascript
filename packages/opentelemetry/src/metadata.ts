// eslint-disable-next-line @typescript-eslint/no-var-requires -- Can't import package.json because it is outside of the project's rootDir
export const { name, version } = require("../package.json") as {
  name: string;
  version: string;
};
