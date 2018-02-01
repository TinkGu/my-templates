// npm 包但是提供给 web 使用

module.exports = {
    task: api => {
        api.pkg.merge({
            scripts: {
                test: 'jest test --no-cache',
            },
            devDependencies: {
                'babel-jest': '^22.0.4',
                jest: '^22.0.4',
            },
        })
    },
}
