export default {
    clearMocks: true,
    collectCoverageFrom: [
        'src/**.ts'
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
        'src/main.ts'
    ],
    coverageProvider: 'v8',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json'
        }
    },
    preset: 'ts-jest',
    roots: [
        '<rootDir>/src',
        '<rootDir>/test'
    ],

    'setupFilesAfterEnv': [
        './jest.setup.js'
    ],
    testEnvironment: 'node',
    testRegex: '\.(test|spec){1}\\.ts?$',
    verbose: true
};
