const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, '../src/index.js'),
	output: {
		path: path.join(__dirname, '../dist'),
		filename: "[name].js",
		chunkFilename: '[name].js'
	},
	module: {
		rules: [{
				test: /\.(js|jsx)?$/,
				include: [
					path.resolve(__dirname, '../src')
				],
				exclude: [
					path.resolve(__dirname, '../node_modules')
				],
				loader: 'babel-loader',
				query: {
					presets: [
						["@babel/env", {
							"targets": {
								"browsers": "last 2 chrome versions"
							}
						}]
					]
				}
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192,
						name: './images/[name]_[hash:8].[ext]'
					}
				}]
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'yc admin',
			template: "src/index.ejs",
			filename: "index.html",
			inject: true,
			minify: {
			  html5: true,
			  collapseWhitespace: true,
			  preserveLineBreaks: false,
			  minifyCSS: true,
			  minifyJS: true,
			  removeComments: false,
			}
		  }),
		new CleanWebpackPlugin()
	],
	resolve: {
		extensions: ['.json', '.js', '.jsx'],
		alias: {
			'@': path.resolve(__dirname, '../src')
		}
	},

};