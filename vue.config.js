module.exports = {
  chainWebpack: config => {
    config
      // 添加环境变量
      .plugin('define')
      .tap(([env]) => {
        env['process.env'] = {
          ...env['process.env'],
          ENV: `"${process.env.ENV}"`
        }
        return [env]
      })
      .end()
  }
}
