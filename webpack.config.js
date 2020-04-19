const path = require('path')
const assets = './assets/'

module.exports = {
	mode: 'development',
	entry: [assets + 'scripts/main.ts', assets + 'styles/app.scss'],
	output: {
		// filename: 'js/app.[contenthash].js',
		filename: 'js/app.js',
		path: path.resolve(__dirname, 'public')
	},
	optimization: {
		minimize: false
	},
	module: {
		rules: [
		{ 
			test: /\.scss$/, 
			use: [
			{
				loader : 'file-loader' ,
				options: {
					name: 'css/app.css'
				}
			},
			{ loader : 'extract-loader' },
			{ loader : 'css-loader' },
			{ loader : 'sass-loader' }
      // { loader : 'postcss-loader' },
      ]
    },
    {
    	test: /\.(js|ts)$/,
    	use: [
    	{
    		loader: 'babel-loader',
    		options: {
    			presets: ["@babel/preset-env", "@babel/preset-typescript"]
    		}
    	}
    	]
    }
  ]
  }
}
