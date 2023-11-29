/** @type {import("jest").Config} */
const config = {
  preset: "ts-jest",
  resetMocks: true,
  testEnvironment: "node",
  testTimeout: 20000,
};

module.exports = config;
