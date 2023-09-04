/*
 * @Author: 落笔藏锋 xyswsjh@163.com
 * @Date: 2023-02-24 09:55:04
 * @LastEditors: 落笔藏锋 xyswsjh@163.com
 * @LastEditTime: 2023-09-04 15:50:39
 * @FilePath: \cy-vite-vue\src\store\modules\cosStore.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia' // pinia
export const useCosStore = defineStore('cos', {
  state: () => ({
    imgUrl: '', //
    // urlList: reactive([]) as Universal,
    urlList: [] as string[],
  }),
  getters: {
    //通过getters对状态state进行获取
    // getImgUrl(): string {
    //   return this.imgUrl
    // },
  },
  actions: {
    getUrl(): string {
      console.log('this.imgUrl', this.imgUrl)
      return this.imgUrl
    },
    setUrl(imgUrl: any) {
      this.imgUrl = imgUrl
      this.urlList.push(imgUrl)
    },
    pushUrl(imgUrl: any) {
      this.urlList.push(imgUrl)
    },
  },
  persist: {
    storage: sessionStorage,
    paths: ['imgUrl', 'urlList'],
  },
})

