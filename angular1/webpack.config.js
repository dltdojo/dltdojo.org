var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    ddjbtc: './src/ddjbtc.js',
    ddjltc: './src/ddjltc.js',
    ddjeth: './src/ddjeth.js',
    ddjxrp: './src/ddjxrp.js',
    ddjdoge: './src/ddjdoge.js',
    ddjdash: './src/ddjdash.js',
    ddjanchor: './src/ddjanchor.js',
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'build/')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
    ]
  },

  plugins: [
  ],

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};