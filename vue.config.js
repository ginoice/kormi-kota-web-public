const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
      new webpack.ProvidePlugin({
          process: 'process/browser',
      })
    ]
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/themes/themes.scss";
          @import "@/assets/themes/break-pointes.scss";
        `
      }
    }
  },

})
