module.exports = {
    extends: ['airbnb-base', 'prettier', 'plugin:jest/recommended'],
    env: {
        node: true
    },
    rules: {
        'prettier/prettier': ['error'],
        'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        curly: ['error', 'all'],
        'jest/expect-expect': ['error'],
        'no-param-reassign': ['error', {props: false}]
    },
    plugins: ['prettier']
};
