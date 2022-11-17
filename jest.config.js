module.exports = {
  //preset: 'ts-jest',
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.*.(css|scss)$": "identity-obj-proxy",
  },
  moduleDirectories: ["node_modules", "<rootDir>"],
};
