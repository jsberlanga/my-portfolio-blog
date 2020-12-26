module.exports = {
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testRegex: '(spec|test)\\.[t]s?(x)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageReporters: ['text', 'html'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  // moduleNameMapper: {
  //   '@juliosoto/components/(.*)': '<rootDir>/packages/components/$1',
  // },
};
