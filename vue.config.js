module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: './',
  chainWebpack (config) {
    config.plugin('html').tap(args => {
      args[0].title = '無疑農'
      return args
    })
  }
}
