/*
 * @Author: 落笔藏锋 xyswsjh@163.com
 * @Date: 2023-09-04 11:30:25
 * @LastEditors: 落笔藏锋 xyswsjh@163.com
 * @LastEditTime: 2023-09-04 16:24:27
 * @FilePath: \vite-vue3-ts-eslint-router4-paina\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// main.ts
import { createApp } from 'vue'
import App from './App.vue'


// ---------------- 样式 -----------------
import 'normalize.css'
import './assets/styles/css/global.css' // 全局样式

// element
import ElementPlus from 'element-plus' // 引入ElementPlus组件
import 'element-plus/dist/index.css' // 引入ElementPlus组件样式

// router
import { router } from './router' // 启动路由

// import { setupStore } from './store' // 设置pinia仓库
import { createPinia } from 'pinia' // pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // pinia 持久化插件 npm i pinia-plugin-persistedstate
const store = createPinia() // 创建pinia仓库
store.use(({ store }) => {
  const initialState = JSON.parse(JSON.stringify(store.$state)) // 初始状态为深拷贝的原始状态对象
  // 创建重置函数
  store.$reset = () => {
    store.$state = JSON.parse(JSON.stringify(initialState))
  }
})
store.use(piniaPluginPersistedstate) // 使用持久化插件


// import $ from 'jquery'
const app = createApp(App)
// setupStore(app)
app.use(store)
// app.use($)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
