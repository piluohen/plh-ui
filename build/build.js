const { resolve, getComponentEntries } = require('./utils')

module.exports = {
  outputDir: resolve('publish'),
  configureWebpack: {
    entry: {
      ...getComponentEntries('packages')
    },
    output: {
      filename: '[name]/index.js',
      libraryTarget: 'commonjs2',
      libraryExport: 'default',
      library: 'plh-ui'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'plh-ui': resolve('packages/index.js')
      }
    }
  },
  css: {
    sourceMap: true,
    extract: {
      filename: '[name]/style.css'
    }
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('html')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')

    config.module
      .rule('fonts')
      .use('url-loader')
      .tap(option => {
        option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
        return option
      })
  }
}
