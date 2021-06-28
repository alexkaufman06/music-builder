export default {
    clearMocks: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json'
        }
    },
    preset: 'ts-jest',
    roots: [
        "<rootDir>/src",
        "<rootDir>/test"
    ],

    "setupFilesAfterEnv": [
        './jest.setup.js'
    ],
    testEnvironment: "node",
    testRegex: "\.(test|spec){1}\\.ts?$",
};
