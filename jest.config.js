module.exports = {
  rootDir: ['<rootDir>'],
  projects: ['<rootDir>/packages/*/jest.config.js'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testRegex: '(spec|test)\\.[t]s?(x)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
