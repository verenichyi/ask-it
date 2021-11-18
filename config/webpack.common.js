const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		styles: path.resolve(__dirname, '../src/styles/index.scss'),
		index: path.resolve(__dirname, '../src/index.html'),
		app: path.resolve(__dirname, '../src/js/index.js'),
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use:
					[
						'style-loader',
						'css-loader',
						"sass-loader"
					]
			},
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			},
			{
				test: /\.(png|svg|jp?g|gif|ico)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				type: 'asset/resource',
			}

		]
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx'
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html'),
		}),
	]
};