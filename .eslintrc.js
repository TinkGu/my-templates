module.exports = {
    extends: ['plugin:vue-libs/recommended'],
    env: {
        mocha: true,
        node: true,
    },
    rules: {
        indent: [
            1,
            4,
            {
                SwitchCase: 1
            }
        ],
        'comma-dangle': 0,
    },
}
