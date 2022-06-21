import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  resetMocks: true,
  testEnvironment: "node",
};

export default config;
