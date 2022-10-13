module.exports = {
    testEnvironment: 'node',
    coverageThreshold: {
        './*.js': {
            branches: 75,
            functions: 75,
            lines: 75,
            statements: 75
        }
    }
};
