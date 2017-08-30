const path = require('path'),
      webpack = require('webpack'),
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
            test: /\.ext\.js$/,
            loader: 'script-loader'
          },
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
            test: /\.(jpe?g|png)$/,
            loader: 'file-loader?name=/img/[name].[ext]'
          },
          {
            test: /\.svg|\.otf|\.ttf|\.woff?|\.eot$/,
            loader: 'url-loader?limit=100000'
          }
        ]
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sauceapp.bundle.js'
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
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
