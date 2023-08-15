import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  resetMocks: true,
  testEnvironment: "node",
  testTimeout: 20000,
};

export default config;
