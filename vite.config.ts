/*
 * @Author: 落笔藏锋 xyswsjh@163.com
 * @Date: 2022-12-02 14:50:50
 * @LastEditors: 落笔藏锋 xyswsjh@163.com
 * @LastEditTime: 2023-09-04 15:19:04
 * @FilePath: \cy-vite-vue\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import axios from 'axios'
import { resolve } from 'path'
import path from 'path' // 需要安装的插件 npm install @types/node --save-dev  
// https://vitejs.dev/config/  
import { prismjsPlugin } from 'vite-plugin-prismjs'
vue.prototype.$http = axios // Axios绑定在Vue上面
// const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  base: './', //默认为/ 绝对路径 ./ 相对路径 （配置文件的根目录）
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源的重复引入
          if(id.includes(path.resolve(__dirname, '/src/store/index.ts'))){
            return 'vendor';
          }
        }
      }
    }
  },
  publicDir: 'public',
  plugins: [
    vue(),
    prismjsPlugin({
      languages: ['json', 'js'],
      //  languages: 'all',
      plugins: ['line-numbers'], //配置显示行号插件
      theme: 'solarizedlight', //主题名称
      css: true,
    }),
  ],
  // 代理访问
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8049', // 开发时 使用的后端服务地址
        // target: 'https://43.136.179.5:8049', // 发布时 使用的后端服务地址
        // target: 'https://www.gmcy.club:8049',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // pathRewrite:{
        //   '^/api':''
        // }
      },
    },
  },

  // 起个别名，在引用资源时，可以用‘@/资源路径’直接访问
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      //define global scss variable
      scss: {
        additionalData: `@import "@/assets/style/sass/variables.scss";`,
      },
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve(
            'src/assets/style/less/variables.less'
          )}";`,
        },
        javascriptEnabled: true,
        // 全局变量使用：@primary-color
      },
    },
  },
})
