module.exports = {
  transform: {
    "^.+\\.tsx?$": "<rootDir>/src/tests/jest-preprocess.js",
  },
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/tests/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
  },
  setupFiles: [`<rootDir>/src/tests/loadershim.js`],
  setupFilesAfterEnv: [`<rootDir>/src/tests/setupTests.ts`],
  resetMocks: true,
  testEnvironment: "jsdom",
};
