const webpack = require('webpack')
const path = require('path')
const webpackMerge = require('webpack-merge')
const basicConfig = require('./webpack.common')

console.log('is dev')
module.exports = webpackMerge(basicConfig, {
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        hot: true,
        inline: true,
        host: 'localhost',
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
				test: /\.less$/,
				use: [
					'style-loader',
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
                            sourceMap: true
                        }
                    }
				],
			},
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})