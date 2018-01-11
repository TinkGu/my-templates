module.exports = {
    root: true,
    {{#if_eq preset "loose-airbnb-react"}}
    extends: ['airbnb', 'loose-airbnb-react'],
    {{/if_eq}}
    {{#if_eq preset "loose-airbnb"}}
    extends: ['airbnb-base', 'loose-airbnb'],
    {{/if_eq}}
    {{#if_eq preset "airbnb"}}
    extends: ['airbnb'],
    {{/if_eq}}
    {{#if_eq preset "airbnb-base"}}
    extends: ['airbnb-base'],
    {{/if_eq}}
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true,
        webextensions: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 7,
        ecmaFeatures: {
            classes: true,
            modules: true
        }
    },
    {{> webpack_js }}
    rules: {
        semi: ['warn', 'never'],
        indent: [
            1,
            4,
            {
                SwitchCase: 1
            }
        ],
        'import/no-extraneous-dependencies': ['error', {
            'devDependencies': [
                'build/**',
                'postcss.config.js'
            ]
        }],
        'function-paren-newline': 0,
        {{#withReact}}
        'jsx-a11y/click-events-have-key-events': 0,
        'react/prop-types': 0,
        {{/withReact}}
    }
}
