const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

let srcDir = path.resolve(__dirname, 'src'),
    distDir = path.resolve(__dirname, 'dist'),
    webpackConfig = {
      context: srcDir,
      entry: './app.js',
      module: {
        loaders : [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
          },
          {
            test: /\.jsx$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
          },
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
              use: 'css-loader'
            })
          },
          {
            test: /\.jpg|\.png|\.svg|\.otf|\.ttf|\.woff?|\.eot$/,
            loader: 'url-loader?limit=100000'
          }
        ]
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sauceapp.bundle.js'
      },
      plugins: [
        new ExtractTextPlugin({
          filename: 'style.css',
          allChunks: true
        }),
        new HtmlWebpackPlugin({
          template: 'index.html',
          filename: 'index.html',
          inject: 'body'
        })
      ]
    };


module.exports = webpackConfig;
