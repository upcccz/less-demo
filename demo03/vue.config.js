const path = require('path')

module.exports = {
  configureWebpack: {
    resolveLoader: {
      modules: ['node_modules','./my-loader/'],
    },
  },
  chainWebpack: config => {
    config.module
      .rule('less')
      .oneOf('vue')
      .test(/\.less$/)
      .use('my-less-loader')
        .loader('my-less-loader')
        .options({
          themeStyleDir: '/src/styles/themes/', // 指定less样式变量文件所在的目录
          themes: ['default', 'red'], // 指定需要处理哪些主题样式  
        })
        .after('less-loader')
  },
  // css: {
  //   loaderOptions: {
  //     less: {
  //       globalVars: {
  //         hack: `true; @import (reference) "${path.resolve('src/styles/vars.less')}";`
  //       }
  //     }
  //   }
  // },
}