// npm 包但是提供给 web 使用

module.exports = {
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'package name',
        },
    },
    task: api => {
        const renderData = api.metalsmith.metadata()
        const name = renderData.name

        api.pkg.merge({
            main: 'lib/index.js',
            module: 'es/index.js',
            scripts: {
                clean: 'rimraf lib dist es',
                'build:cjs': 'cross-env NODE_ENV=cjs babel src --out-dir lib',
                'build:es':
                    'cross-env BABEL_ENV=es NODE_ENV=es babel src --out-dir es',
                'build:umd':
                    `cross-env BABEL_ENV=es NODE_ENV=development rollup -c -o dist/${name}.js`,
                'build:umd:min':
                    `cross-env BABEL_ENV=es NODE_ENV=production rollup -c -o dist/${name}.min.js`,
                build:
                    'npm run clean && npm run build:cjs && npm run build:es && npm run build:umd && npm run build:umd:min',
            },
            files: ['dist', 'lib', 'es', 'README.md', 'LICENSE'],
            devDependencies: {
                'babel-cli': '^6.26.0',
                'babel-core': '^6.26.0',
                'babel-eslint': '^8.0.3',
                'babel-plugin-external-helpers': '^6.22.0',
                'babel-plugin-transform-object-rest-spread': '^6.26.0',
                'babel-plugin-transform-runtime': '^6.23.0',
                'babel-preset-env': '^1.6.1',
                'babel-register': '^6.26.0',
                'cross-env': '^5.1.1',
                eslint: '^4.0.0',
                'eslint-config-airbnb-base': '^12.1.0',
                'eslint-config-loose-airbnb': '^1.0.0',
                'eslint-plugin-import': '^2.8.0',
                rimraf: '^2.6.2',
                rollup: '^0.51.8',
                'rollup-plugin-babel': '^3.0.2',
                'rollup-plugin-commonjs': '^8.2.6',
                'rollup-plugin-node-resolve': '^3.0.0',
                'rollup-plugin-replace': '^2.0.0',
                'rollup-plugin-uglify': '^2.0.1',
            },
            npmName: name,
            npmFileMap: [
                {
                    basePath: '/dist/',
                    files: ['*.js'],
                },
            ],
            dependencies: {
                'babel-runtime': '^6.26.0',
            },
        })
    },
}
