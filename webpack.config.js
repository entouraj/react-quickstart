var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/js');
var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {

  devtool: 'inline-sourcemap',
  entry:['babel-polyfill', APP_DIR + '/App.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions:['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react','es2015','stage-0'],
              plugins: ['transform-class-properties','transform-decorators-legacy']
            }
          }
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  //plugins: [
  //  new webpack.NoEmitOnErrorsPlugin(),
  //  new webpack.optimize.UglifyJsPlugin ({
  //    mangle: false, sourcemap: false, minimize: false, comments: false, warnings: false, compress: {
  //      warnings: false, drop_console: true, drop_debugger: true, pure_funcs: ['console.error', 'console.info']
  //    }
  //  }),
  //  new webpack.DefinePlugin({
  //      'process.env': {
  //        'NODE_ENV': JSON.stringify('production')
  //       }
  //  }),
  //  new webpack.optimize.AggressiveMergingPlugin(),//Merge Chunks
  // ]
};

module.exports = config;
