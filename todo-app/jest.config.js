module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  coverageDirectory: "./coverage",
  collectCoverage: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "foundation_ui/Button": "<rootDir>/__mocks__/foundation_ui__Button.tsx",
    "foundation_ui/Checkbox": "<rootDir>/__mocks__/foundation_ui__Checkbox.tsx",
    "foundation_ui/RadioButton":
      "<rootDir>/__mocks__/foundation_ui__RadioButton.tsx",
    "foundation_ui/TextBox": "<rootDir>/__mocks__/foundation_ui__TextBox.tsx",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  automock: false,
  resetMocks: false,
};
