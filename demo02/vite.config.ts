import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import myPlugin from './my-plugin';
import globalVars from './my-plugin/globar-var';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    // myPlugin({
    //   themeStyleDir: './src/styles/themes/', // 指定less样式变量文件所在的目录
    //   themes: ['default', 'red'], // 指定需要处理哪些主题样式
    // })
    // globalVars({
    //   varsFile: './src/styles/vars.less',
    // })
  ],
  css: {
    preprocessorOptions: {
      less: {
        globalVars: {
          hack: `true; @import (reference) "${path.resolve('src/styles/vars.less')}";`
        },
        javascriptEnabled: true
      }
    }
  }
})

// hack: true; @import (reference) 'src/styles/vars.less'; 


// app.less

// div { background-color: @color }