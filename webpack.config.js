var webpack = require('webpack');
var webpackProvidePlugin = new webpack.ProvidePlugin({
    '$': 'jquery',
    'jQuery': 'jquery'
});

var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js/',
        __dirname + '/app/index.js'
    ],
    externals: {
        'jquery': 'jQuery'
    },
    devServer: {
        inline: true,
        contentBase: './app',
        port: 8010
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [ HTMLWebpackPluginConfig, webpackProvidePlugin ]
};

