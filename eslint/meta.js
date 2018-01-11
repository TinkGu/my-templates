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
        },
        webpackConfig: {
            when: 'withWebpack',
            type: 'string',
            message: 'where is your webpack config file?',
            default: 'webpack.config.js',
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
        }
    },
}
