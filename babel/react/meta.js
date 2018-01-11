module.exports = {
    task: api => {
        api.pkg.merge({
            devDependencies: {
                'babel-core': '^6.24.1',
                'babel-plugin-transform-decorators-legacy': '^1.3.4',
                'babel-plugin-transform-remove-console': '^6.8.5',
                'babel-plugin-transform-runtime': '^6.23.0',
                'babel-preset-env': '^1.4.0',
                'babel-preset-react': '^6.24.1',
                'babel-preset-react-optimize': '^1.0.1',
                'babel-preset-stage-0': '^6.24.1',
            },
            dependencies: {
                'babel-runtime': '^6.26.0',
            },
        })
    },
}
