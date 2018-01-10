module.exports = {
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Project name',
        },
        description: {
            type: 'string',
            required: false,
            message: 'Project description',
            default: 'A Vue.js project',
        },
        author: {
            type: 'string',
            message: 'Author',
        },
        lint: {
            type: 'confirm',
            message: 'Use ESLint to lint your code?',
        },
        lintConfig: {
            when: 'lint',
            type: 'list',
            message: 'Pick an ESLint preset',
            choices: [
                {
                    name: 'Standard (https://github.com/standard/standard)',
                    value: 'standard',
                    short: 'Standard',
                },
                {
                    name: 'Airbnb (https://github.com/airbnb/javascript)',
                    value: 'airbnb',
                    short: 'Airbnb',
                },
                {
                    name: 'none (configure it yourself)',
                    value: 'none',
                    short: 'none',
                },
            ],
        },
        runner: {
            when: 'unit',
            type: 'list',
            message: 'Pick a test runner',
            choices: [
                {
                    name: 'Jest',
                    value: 'jest',
                    short: 'jest',
                },
                {
                    name: 'Karma and Mocha',
                    value: 'karma',
                    short: 'karma',
                },
                {
                    name: 'none (configure it yourself)',
                    value: 'noTest',
                    short: 'noTest',
                },
            ],
        },
    },
    filters: {
        '.eslintrc.js': 'lint',
        '.eslintignore': 'lint',
        'config/test.env.js': 'unit || e2e',
        'build/webpack.test.conf.js': "unit && runner === 'karma'",
        'test/unit/**/*': 'unit',
        'test/unit/index.js': "unit && runner === 'karma'",
        'test/unit/jest.conf.js': "unit && runner === 'jest'",
        'test/unit/karma.conf.js': "unit && runner === 'karma'",
        'test/unit/specs/index.js': "unit && runner === 'karma'",
        'test/unit/setup.js': "unit && runner === 'jest'",
        'test/e2e/**/*': 'e2e',
        'src/router/**/*': 'router',
    },
}
