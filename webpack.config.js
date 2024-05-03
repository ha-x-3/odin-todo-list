const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const express = require('express');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Todo List',
			template: 'src/index.html',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		// publicPath: '/odin-todo-list/', // <--production path
		publicPath: '/', // <--development path
	},
	externals: {
		express: 'express',
	},
	optimization: {
		runtimeChunk: 'single',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
};

const app = express();

const compiler = webpack(module.exports);

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// Use the middleware functions from webpack
app.use(
	webpackDevMiddleware(compiler, {
		publicPath: module.exports.output.publicPath,
	})
);

app.use(webpackHotMiddleware(compiler));

// Start the Express server outside devServer config
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
