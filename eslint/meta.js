module.exports = {
    prompts: {
        preset: {
            type: 'list',
            message: 'Pick an ESLint preset',
            choices: [
                {
                    name: 'loose-airbnb',
                    value: 'loose-airbnb',
                },
                {
                    name: 'loose-airbnb-react',
                    value: 'loose-airbnb-react',
                },
                {
                    name: 'airbnb-base',
                    value: 'airbnb-base',
                },
                {
                    name: 'aibnb',
                    value: 'airbnb',
                },
            ],
        },
        withWebpack: {
            type: 'confirm',
            message: 'expose webpack to eslint?',
            default: false,
        },
        webpackConfig: {
            when: 'withWebpack',
            type: 'string',
            message: 'where is your webpack config file?',
            default: 'webpack.config.js',
        },
    },
    task: {
        afterAsk: api => {
            const renderData = api.metalsmith.metadata()
            const withReact = ['loose-airbnb-react', 'airbnb']
            if (withReact.includes(renderData.preset)) {
                api.extraRenderData.merge({
                    withReact: true,
                })
            }
        },
        complete: api => {
            const renderData = api.metalsmith.metadata()
            const pkgs = [
                'babel-core',
                'babel-eslint',
                'eslint',
                'eslint-plugin-import',
            ]
            if (renderData.withWebpack) {
                pkgs.push('eslint-import-resolver-webpack')
            }
            const reactPkgs = ['eslint-plugin-jsx-a11y', 'eslint-plugin-react']
            const preset2pkg = {
                'loose-airbnb': [
                    'eslint-config-airbnb-base',
                    'eslint-config-loose-airbnb',
                ],
                'loose-airbnb-react': [
                    'eslint-config-airbnb',
                    'eslint-config-loose-airbnb-react',
                ].concat(reactPkgs),
                'airbnb-base': [
                    'eslint-config-airbnb-base',
                ],
                'airbnb': [
                    'eslint-config-airbnb',
                ].concat(reactPkgs)
            }
            const finalPkgs = pkgs.concat(preset2pkg[renderData.preset])
            api.installDev(finalPkgs)
        }
    }
}
