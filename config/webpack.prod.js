const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpackMerge = require('webpack-merge')
const basicConfig = require('./webpack.common')

module.exports = webpackMerge(basicConfig, {
    devtool: 'none',
    stats: 'errors-only',
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: {
                                'primary-color': '#4C73C6',
                                'link-color': '#4C73C6',
                                'border-radius-base': '2px',
                            },
                            javascriptEnabled: true,
                        }

                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name]_[contenthash:8].css',
            chunkFilename: 'css/[id].[contenthash:8].css'
        }),
        new FriendlyErrorsWebpackPlugin()
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    safe: true,
                }
            }),
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    // test: /[\\/]node_modules[\\/]/,
                    test: path.join(__dirname, '../node_modules'),
                    name: 'vendor',
                    chunks: 'all',
                }
            },
        },
    }
})