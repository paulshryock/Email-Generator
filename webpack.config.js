const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	
	name: process.env.NODE_ENV == 'production' ? 'production' : 'development',
	mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',

	entry: {
		'app': './src/_assets/js/app.js',
		'development': './src/_assets/js/development.js',
	},

	output: {
		path: __dirname + '/src',
		filename: './js/[name].js',
	},

	module: {
		rules: [
			{
				test: /\.js/,
				loader: 'babel-loader',
				include: __dirname + '/src/_assets/js'
			 },
			{
				test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
				use: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
				],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: './fonts'
					}
				}]
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin(
			{
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: "./css/[name].css",
				chunkFilename: "./css/[id].css"
			}
		)
	],

};