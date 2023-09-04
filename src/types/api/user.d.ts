/*
 * @Author: 落笔藏锋 xyswsjh@163.com
 * @Date: 2022-12-10 17:07:15
 * @LastEditors: 落笔藏锋 xyswsjh@163.com
 * @LastEditTime: 2023-08-30 11:18:28
 * @FilePath: \cy-vite-vue\src\types\api\user.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 用户类型接口
export interface User {
  userId: number
  username: string
  nickname: string
  email: string
  gender: number
  birth: Date
  avatar: string
  cover: string
  headline: string
}

export type UserList = UniversalList
