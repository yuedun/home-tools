const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js',
		path: __dirname
	},
	mode: "development",
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					js: 'babel-loader'
				}
			}
		}
			, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}
			, {
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}
			, {
			test: /\.(png|jpg|gif)$/,
			use: [
				{
					loader: 'file-loader',
					options: {}
				}
			]
		}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		contentBase: './'
	},
	devtool: 'inline-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'//'"development"'//'"production"'//需要带单双引号
			}
		}),
		new VueLoaderPlugin(),
	]
};