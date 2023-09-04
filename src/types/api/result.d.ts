/*
 * @Author: 落笔藏锋 xyswsjh@163.com
 * @Date: 2023-08-29 16:33:58
 * @LastEditors: 落笔藏锋 xyswsjh@163.com
 * @LastEditTime: 2023-08-30 11:26:56
 * @FilePath: \cy-vite-vue\src\types\api\result.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { User } from "./user"

interface Result {
  code: number, // 登录信息 200 为成功
  logoutCode: number, // 登出信息 200 为成功
  registerCode: number,  // 注册信息 200 为成功
  message: string, // 返回信息
  success: boolean // 成功
}