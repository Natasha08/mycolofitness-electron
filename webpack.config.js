const path = require('path');
var webpack = require('webpack');
var debug = process.env.Node_ENV !== "production";
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // devtool: debug ? "inline-sourcemap": null,
    entry: path.join(__dirname, 'src', 'app.js'),
    output: {
        path: __dirname + '/src',
        filename: "bundle.js"
    } ,

    plugins: [
      new webpack.ProvidePlugin({
        'React': 'react',
        'ReactDom': 'react-dom',
        'Redux': 'redux'
      })
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'transform-react-jsx']
                }
            }
        ]
    },

    resolve: {
      root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'src/lib'), path.resolve(__dirname, 'node_modules')]
    }
};
