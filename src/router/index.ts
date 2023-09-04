/*
 * @Author: 落笔藏锋 xyswsjh@163.com
 * @Date: 2023-09-04 11:53:18
 * @LastEditors: 落笔藏锋 xyswsjh@163.com
 * @LastEditTime: 2023-09-04 16:29:27
 * @FilePath: \vite-vue3-ts-eslint-router4-paina\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'

//通过懒加载引入组件
const Home = () => import('@/views/basic/Home.vue') // 主页
const Login = () => import('@/views/basic/Login.vue') // 登录页
const Register = () => import('../views/basic/Register.vue') // 注册页
const Test = () => import('../views/others/Test.vue')  // 特殊页

const Special = () => import('../views/others/Special.vue')  // 特殊页
const Entrance = () => import('../views/Entrance.vue')  // 入口页（普通页面的入口）

const Cos = () => import('../views/others/Cos.vue')  // 存储桶



//映射关系
const routes = [
  {
    path: '/',
    redirect: '/login',
    // redirect: '/cos',
  },
  {
    // 前台页面
    path: '/entrance',
    name: 'Entrance',
    component: Entrance,
    children: [
      {
        // 当 / 匹配成功
        // 将被渲染到 cy 的 <router-view> 内部
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/special',
        name: 'Special',
        component: Special,
      },
      {
        path: '/test',
        name: 'Test',
        component: Test,
      }
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/cos',
    name: 'Cos',
    component: Cos,
  },
]

export const router = createRouter({
  //将实例暴露出去
  history: createWebHistory(), //设置路由模式
  routes,
})

// 白名单--不需要 token 就可以直接访问的页面 /login /register /404
const whiteList = ['/login', '/register', '/404', '/500']
// 路由导航守卫
// from 来自哪
// to 要去哪
// next() 是一个函数 必须使用
// 使用: next() 直接放行  // next('/路径名') 跳转到指定页面
router.beforeEach((to, from) => {
  console.log('页面跳转', '从', from.path, '到', to.path)
  // 获取本地存储 token
  const token = sessionStorage.getItem('token')
  // 是否有 token ？
  if (token) {
    // 有 token
    // 是否去登录页 ？
    if (to.path === '/login') {
      // 去登录页
      return '/home' // 回首页
    } else {
      // 不去登录页
      console.log('放行')
      return true // 放行
    }
  } else {
    // 没有 token
    // 是否去白名单 ？
    if (whiteList.includes(to.path)) {
      // 去白名单
      return true // 放行
    } else {
      // 不去白名单
      return '/login' // 去登录页
    }
  }
})
