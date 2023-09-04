/*
 * @Author: 落笔藏锋 xyswsjh@163.com
 * @Date: 2022-12-09 15:45:10
 * @LastEditors: 落笔藏锋 xyswsjh@163.com
 * @LastEditTime: 2023-09-04 16:09:50
 * @FilePath: \cy-vite-vue\src\store\modules\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia' // pinia
import type { Universal, Result } from '@/types' // 返回类型自定义

import { reactive } from 'vue'
import jwt_decode from 'jwt-decode' //解析token
import { useJwtStore } from '@/store' // 自定义的token判断仓库
import { http } from '@/utils/network/request'
import { id } from 'element-plus/es/locale'
// 判断登录和注册信息 以及接收响应数据
// 方案一 使用基本类型存储 响应的数据 
// const useLoginStore = defineStore('login', {
//   state: () => ({
//     code: 0, // 登录信息 200 为成功
//     logoutCode: 0, // 登出信息 200 为成功
//     registerCode: 0,
//     user: reactive({}) as Universal, // 用户信息
//     categoryList: [] as CategoryList, //
//     registerInfo: reactive({}) as Universal, // 注册信息
//   }),
//   getters: {
//     //通过getters对状态state进行获取
//     isLogout: (state) => state.logoutCode == 200,
//     isLogin: (state) => state.code == 200,
//   },
//   actions: {
//     setCode(code: number) {
//       this.code = code
//     },
//     setRegisterCode(registerCode: number) {
//       this.registerCode = registerCode
//     },
//     setLogoutCode(code: number) {
//       this.logoutCode = code
//     },
//     setuser(temp: any) {
//       // 清空之前存在的信息
//       if (this.user) {
//         this.user = {}
//       }
//       // 存储当前获取的信息
//       for (let key in temp) {
//         this.user[key] = temp[key]
//       }
//     },
//     setCategoryList() {},
//     setRegisterInfo(temp: any) {
//       if (this.registerInfo) {
//         this.registerInfo = reactive({}) as Universal
//       }
//       this.registerInfo = temp
//     },
//     //  登录请求
//     async login(data: any) {
//       await http('POST', '/login', data).then((res: any) => {
//         const temp = res.data
//         this.setuser(temp)
//         // 存储token
//         const token = temp.data.token
//         sessionStorage.setItem('token', token)
//         localStorage.setItem('token', token)
//         // 更新用户是否验证
//         if (token) {
//           authStore.setAuth(true)
//           console.log('设置')
//         }
//         // 解析token
//         const decode = jwt_decode(temp.data.token)
//         console.log('decode', decode) //decode是一个对象
//         authStore.setuser(decode)
//         this.setCode(temp.code)
//       })
//     },
//     // 注册请求
//     async register(data: any) {
//       await http('POST', '/login/register', data).then((res: any) => {
//         const temp = res.data
//         this.setRegisterInfo(temp)
//         console.log('temp', temp)
//         this.setRegisterCode(temp.code)
//       })
//     },
//     // 登出请求
//     async logout(data: any) {
//       await http('POST', '/logout', data).then((res: any) => {
//         console.log('登出结果:', res.data)
//         this.setLogoutCode(res.data.code)
//       })
//     },
//     // 更新用户信息
//     updateuser(temp: any) {
//       this.setuser(temp)
//     },
//   },
//   persist: {
//     storage: sessionStorage,
//     paths: ['code', 'logoutCode', 'user', 'categoryList', 'registerInfo'],
//   },
// })
// 方案二 使用自定义类型存储 响应的数据 
export const useLoginStore = defineStore('login', {
  state: () => ({
    userId: 0, // 用户id
    username: "",
    result:{} as Result, // 响应的数据
  }),
  getters: {
    //通过getters对状态state进行获取
    isLogout: (state) => state.result.logoutCode == 200,
    isLogin: (state) => state.result.code == 200,
  },
  actions: {
    setResult(temp:any){
      // this.code = temp.code
      let result:Result = {
        code: temp.code,
        logoutCode: temp.code,
        registerCode: temp.code,
        message: temp.message,
        success: temp.success
      }
      this.result = result
      this.userId = temp.data.userId
      this.username = temp.data.username
      console.log('userId => ', this.userId)
      console.log('username => ', this.username)

    },
    //  登录请求
    async login(data: any) {
      await http('POST', '/login', data).then((res: any) => {
        const temp = res.data
        console.log('登录返回信息 => ', temp)

        // 存储token
        const token = temp.data.token
        if(token){
          sessionStorage.setItem('token', token)
          localStorage.setItem('token', token)
        }
        const jwtStore = useJwtStore()
        // 更新用户是否验证
        if (token) {
          jwtStore.setAuth(token,temp.data.username)
          console.log('token => ' + token)
        }
        // 解析token
        const decode = jwt_decode(temp.data.token)
        console.log('decode', decode) //decode是一个对象
        jwtStore.setUser(decode)
        this.setResult(temp)
      })
    },
    // 注册请求
    async register(data: any) {
      await http('POST', '/login/register', data).then((res: any) => {
        const temp = res.data
        console.log('temp', temp)
        this.setResult(temp)
      })
    },
    // 登出请求
    async logout(data: any) {
      await http('POST', '/logout', data).then((res: any) => {
        const temp = res.data
        console.log('登出结果:', temp)
        this.setResult(temp)
      })
    }
  },
  persist: {
    storage: sessionStorage,
    paths: ['userId','result'],
  },
})

