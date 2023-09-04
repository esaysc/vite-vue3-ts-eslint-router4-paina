/*
 * @Author: 落笔藏锋 xyswsjh@163.com
 * @Date: 2022-12-08 17:58:34
 * @LastEditors: 落笔藏锋 xyswsjh@163.com
 * @LastEditTime: 2023-08-31 10:38:37
 * @FilePath: \cy-vite-vue\src\store\counter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// stores/counter.js  在pinia中，getters和state中不能使用相同的名字，但是vuex中可以使用相同的名字
import { defineStore } from 'pinia'
import jwt_decode from 'jwt-decode' //解析token

//存储token 和 解析token 的用户
export const useJwtStore = defineStore('jwt', {
  state: () => {
    //管理俩个状态 即token是否存在(解析后的数据是否与当前用户一致) 以及解析的token里面所包含的数据
    return { isAuthenticated: false, jwt: {
      sub: null,
      iat: 0,
      exp: 0
    } }
  },
  getters: {
    //通过getters对状态state进行获取
    getAuthenticated: (state) => state.isAuthenticated,
    getJwt: (state) => state.jwt,
    overdue: (state) => {
      if((state.jwt.exp-state.jwt.iat)<0){
        return false
      }
    }
  },
  actions: {
    setAuth(token:string,username:string) {
      const decoded:any = jwt_decode(token);
      console.log('decoded => ', decoded)
      //修改当前登录的状态
      if(decoded.sub == username){
        this.isAuthenticated = true
        this.setUser(decoded)
      }else{
        this.isAuthenticated = false
      }
    },
    setUser(jwt: any) {
      //解析的用户
      if (jwt) {
        this.jwt = jwt
      } else {
        console.log('没有解析token')
      }
    },
  },
  persist: true,
})
