import ExtractTextPlugin from 'extract-text-webpack-plugin'; // 为了单独打包css

import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
	entry: './src/index.tsx',
	// 配置模块如何解析
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.less'], // 用于指明程序自动补全识别哪些后缀
		alias: {} // 创建 import 或 require 的别名，来确保模块引入变得更简
	},
	// 不打包的文件，使import _ from 'lodash'这句代码，在本身不引入lodash的情况下，能够在各个环境都能解释执行。
	externals: {
		'react': 'window.React',
		'react-dom': 'window.ReactDOM'
	},
	module: {
		rules: [
			{
				test: /\.(ts(x?)|js(x?))$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'less-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			template: './html/index.html',
			favicon: './html/favicon.ico'
		})
	]
};
