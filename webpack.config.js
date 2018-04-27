const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/')
	},
	devtool: "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			template: 'src/index.html'
		})
	],
	module: {
		rules: [
			{
				test:/\.s?css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			},
			{
				test:/\.(jpeg|jpg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: './img'
						}
					} 
				]
			}
		]
	}
};