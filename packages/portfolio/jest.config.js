module.exports = {
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/utils/test/setupTests.ts'],
  testRegex: '(spec|test)\\.[t]s?(x)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: ['src/**/*.tsx', '!<rootDir>/node_modules/'],
  coverageThreshold: {
    global: {
      functions: 75,
      lines: 75,
      statements: 75,
      branches: 75,
    },
  },
  coverageReporters: ['text', 'html'],
  snapshotSerializers: ['jest-emotion'],
  moduleNameMapper: {
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
  },
};
