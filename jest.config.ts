export default {
  displayName: 'ts-api-template',
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  // preset: '../../jest.preset.js',
  // globalSetup: '<rootDir>/src/support/global-setup.ts',
  // globalTeardown: '<rootDir>/src/support/global-teardown.ts',
  // setupFiles: ['<rootDir>/src/support/test-setup.ts'],
  // testEnvironment: 'node',
  // transform: {
  //   '^.+\\.[tj]s$': [
  //     'ts-jest',
  //     {
  //       tsconfig: '<rootDir>/../tsconfig.spec.json',
  //     },
  //   ],
  // },
  // moduleFileExtensions: ['ts', 'js', 'html'],
  // coverageDirectory: '../../coverage/api-e2e',
};
