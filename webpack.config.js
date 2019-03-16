const webpack = require("webpack");
var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   module: {
      rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
			}
		},
		{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			}
		]
    },
	plugins: [
	   new HtmlWebPackPlugin({ 
		  filename: 'index.html',
		  template: './public/index.html',
		   favicon: './public/favicon.ico'
		}),
	]
};