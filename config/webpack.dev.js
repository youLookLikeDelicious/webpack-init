const merge   = require('webpack-merge')
const common  = require('./webpack.common.js')
const webpack = require('webpack')
module.exports = merge(common, {
  mode: 'development',
  devServer: {
	  hot: true
  },
  plugins: [
	  new webpack.HotModuleReplacementPlugin()
  ]
})