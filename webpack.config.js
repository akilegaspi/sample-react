const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html',
        inject: 'body'
      });

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
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
          }
        ]
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sauceapp.bundle.js'
      },
      plugins: [
        new ExtractTextPlugin('./src/css/bootstrap.min.css'),
        HtmlWebpackPluginConfig
      ]
    };


module.exports = webpackConfig;
