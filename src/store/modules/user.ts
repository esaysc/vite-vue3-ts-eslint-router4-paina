/*
 * @Author: 落笔藏锋 xyswsjh@163.com
 * @Date: 2022-12-10 16:14:25
 * @LastEditors: 落笔藏锋 xyswsjh@163.com
 * @LastEditTime: 2023-09-02 10:26:42
 * @FilePath: \cy-vite-vue\src\store\modules\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia' // pinia
import { reactive } from 'vue'
import { http } from '@/utils/request'
import type { Universal, Result } from '@/types' // 返回类型自定义

export const useUserStore = defineStore('user', {
  state: () => ({
    user: reactive({}) as Universal,
    result:{} as Result, // 响应的数据
  }),
  getters: {},
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
      temp = temp.data
      // console.log('temp => ', temp)
      // 清空之前存在的信息
      if (this.user) {
        this.user = {}
      }
      // 存储当前获取的信息
      for (let key in temp) {
        this.user[key] = temp[key]
      }
    },
    // 获取用户详细信息 (通过用户名)
    async userFindByUsername(data: any) {
      await http('POST', '/user/find/username', data).then(
        (res: any) => {
          this.setResult(res)
        })
    },
    // 获取用户详细信息 (通过用户ID)
    async userFindByUserId(data: any) {
      await http('POST', '/user/find/userId', data).then(
        (res: any) => {
          this.setResult(res)
        })
    },
    // 保存用户修改信息
    async saveUser(data: any) {
      await http('POST', '/user/save', data).then(
        (res: any) => {
          this.setResult(res)
        })
    },
  },
  persist: {
    storage: sessionStorage,
    paths: ['user', 'info'],
  },
})

