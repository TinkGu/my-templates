{{#withWebpack}}
settings: {
    'import/resolver': {
        webpack: {
            config: {{ webpackConfig }}
        }
    }
},
{{/withWebpack}}
