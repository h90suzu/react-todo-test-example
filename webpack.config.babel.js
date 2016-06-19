import path from 'path';
import webpack from 'webpack';

export default {
    context: process.cwd(),

    entry: {
        app: './src/app.js',
    },

    output: {
        publicPath: '/js/',
        filename: '[name].js',
    },

    resolve: {
        extensions: [
            '',
            '.js',
        ],
    },

    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
        ],
    },

};
