// jest.config.js
module.exports = {
    testEnvironment: "node", // or "jsdom" if you're testing in a browser environment
    roots: ["<rootDir>/tests"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov"],
    coveragePathIgnorePatterns: ["/node_modules/"], // Exclude node_modules from coverage
  };
  