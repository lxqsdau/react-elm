/**
 * webpack4开发指南
 * 使用4需要安装webpack-cli
 * 入口点默认是src/index.js
 * 执行webpack打包，默认输出文件是dist/main.js
 * 4分生产模式和开发模式，体现在package.json webpack --mode development/production。生产模式打包后是压缩的，开发环境打包不压缩
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	// 配置模块如何解析
	resolve: {
		extensions: ['.js', '.less'], // 用于指明程序自动补全识别哪些后缀
		alias: {
			'pages': path.resolve(__dirname, 'src/pages'),
			'components': path.resolve(__dirname, 'src/components'),
			'app': path.resolve(__dirname, 'src/app')
		} // 创建 import 或 require 的别名，来确保模块引入变得更简
	},
	// 不打包的文件，使import _ from 'lodash'这句代码，在本身不引入lodash的情况下，能够在各个环境都能解释执行。
	externals: {
		'react': 'window.React',
		'react-dom': 'window.ReactDOM'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.less$/,
				exclude: /node_modules/, // webpack loader的执行顺序是从右到左
				use: ['style-loader', 'css-loader', 'less-loader'] // css-loader: 加载.css文件，通过require的方式来引入css
				// style-loader:使用<style>将css-loader内部样式注入到我们的HTML页面
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './html/index.html',
			favicon: './html/favicon.ico'
		})
	],
	optimization: {},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://cangdu.org:8001/',
				changeOrigin: true,
				pathRewrite: { '^/api': '' } // http://localhost:8080/api/v1/cities?type=guess
			}
		}
	}
};

/**
 * HtmlWebpackPlugin 自动生成index.html，并引用打包的文件
 * 配置项
 * title 设置html的title标签
 * filename html的文件名，默认为 index.html
 * template 可指定模板文件来生成html文件，此时会选择模板的title值，即使模板文件未设置title，但会以指定的filename为文件名
 * inject 注入选项，有四个选项值 true, body, head, false。默认true script标签位于body底部
 * favicon 给生成的 html 文件生成一个 favicon。属性值为 favicon 文件所在的路径名。
 * ... https://segmentfault.com/a/1190000007294861
 */
