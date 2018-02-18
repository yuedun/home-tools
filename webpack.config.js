const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js',
		path: __dirname
	},
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
	devServer: {//webpack-dev-server配置
		historyApiFallback: true,//不跳转
		noInfo: true,
		inline: true//实时刷新
	},
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'//'"development"'//'"production"'//需要带单双引号
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};