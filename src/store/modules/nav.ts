/*
 * @Author: 落笔藏锋 xyswsjh@163.com
 * @Date: 2023-02-24 20:49:08
 * @LastEditors: 落笔藏锋 xyswsjh@163.com
 * @LastEditTime: 2023-08-31 10:57:46
 * @FilePath: \cy-vite-vue\src\store\modules\store.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia' // pinia
// 总仓库 存放公共数据
export const useNavStore = defineStore('nav', {
  state: () => ({
    menuIndex: '1', // 当前菜单 索引
  }),
  getters: {
    //通过getters对状态state进行获取
  },
  actions: {
    setMenuIndex(menuIndex: string) {
      this.menuIndex = menuIndex
    },
  },
  persist: {
    storage: sessionStorage,
    paths: ['menuIndex'],
  },
})

