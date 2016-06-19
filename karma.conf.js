var path = require('path');

module.exports = function(config) {
    config.set({
        basePath: process.cwd(),

        frameworks: ['mocha', 'sinon'],

        files: [
            'src/**/*.test.js'
        ],

        exclude: [
        ],

        preprocessors: {
            'src/**/*.js': ['webpack']
        },

        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel'
                    },
                    {
                        test: /\.json$/,
                        loader: 'json'
                    }
                ]
            },
            externals: {
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,
                'react/addons': true
            }
        },

        webpackServer: {
            noInfo: true
        },

        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-sinon',
            'karma-phantomjs-launcher'
        ],

        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity
    })
}