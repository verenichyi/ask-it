const path = require('path');
const {HotModuleReplacementPlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		styles: './src/styles/index.scss',
		app: './src/js/index.js'
	},
	output: {
		publicPath: '/',
	},
	devServer: {
		static: path.join(__dirname, 'dist'),
		historyApiFallback: true,
		port: 4000,
		open: true,
		hot: true,
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[hash][ext]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[hash][ext]',
				},
			},
			{
				test: /\.(svg)$/,
				type: 'asset/resource',
				generator: {
					filename: 'icons/[hash][ext]',
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		new HotModuleReplacementPlugin(),
	],
};
