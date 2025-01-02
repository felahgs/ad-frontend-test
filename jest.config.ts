import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "babel",
  coverageReporters: ["json", "lcov", "clover", "text", "text-summary"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],

  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coveragePathIgnorePatterns: [
    "/\\index.ts",
    "\\.css$|\\.scss$|\\.sass$",
    "\\.json$",
    "types\\.ts$",
    "\\.types\\.ts$",
    "\\.stories\\.tsx$",
  ],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};

export default createJestConfig(config);