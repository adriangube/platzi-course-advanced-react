const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin')

const path = require('path');

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://res.cloudinary.com'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cloudinary'
          }
        },
        {
          urlPattern: new RegExp('https://images.unsplash.com'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-unsplash'
          }
        }
      ]
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram',
      shortName: 'Petgram',
      description: 'Con Petgram puedes encontrar fotos de animales fomésticos muy fácilmente',
      theme_color: '#8d01ff',
      background_color: '#ffffff',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  }
}
