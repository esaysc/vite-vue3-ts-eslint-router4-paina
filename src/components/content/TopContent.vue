<!--
 * @Author: 落笔藏锋 xyswsjh@163.com
 * @Date: 2022-12-02 20:03:03
 * @LastEditors: 落笔藏锋 xyswsjh@163.com
 * @LastEditTime: 2023-09-02 11:37:12
 * @FilePath: \cy-vite-vue\src\components\contents\TopContent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- 顶部导航栏 -->
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <!--导航栏-->

    <el-menu-item index="0" @click="jump('home')"> LOGO </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="jump('home')"> 主页 </el-menu-item>
    <el-menu-item index="2" @click="jump('test')"> 测试 </el-menu-item>
    <!-- <el-menu-item index="4" @click="jump('login')">
        登录
    </el-menu-item> -->
    <!-- 导航栏菜单 -->
    <el-sub-menu index="3">
      <template #title>3</template>
      <el-menu-item index="11" @click="jump('#')">11</el-menu-item>
      <el-menu-item index="22" @click="jump('#')">22</el-menu-item>
      <el-menu-item index="33" @click="jump('#')">33</el-menu-item>

      <el-menu-item index="2-4" @click="todoLogout">登出</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useUserStore, useLoginStore, useNavStore } from "@/store";
// ------------------------------ 初始化仓库数据 --------------------------------
// 通过登录仓库获取用户基本信息 用以 请求用户详细信息
const loginStore = useLoginStore();
// 登出方法
const { logout } = loginStore;
// 用户id
const { userId, result } = loginStore;

// 通过用户仓库 调用请求用户详细信息
const userStore = useUserStore();
const { user } = userStore;

// 获取仓库中的导航栏索引
const { setMenuIndex } = useNavStore();
const { menuIndex } = toRefs(useNavStore());
// -----------------变量区-----------------

let index: string;
const activeIndex = ref(menuIndex);

// -----------------方法区-----------------

const handleSelect = (key: string, keyPath: string[]) => {
  index = key;
  console.log(key, keyPath);
  setMenuIndex(key);
};

// ----------------------- 路由 ---------------------
const router = useRouter();
// jump函数 跳转到指定路由
const jump = (e: String) => {
  if (index == "11") {
    const { userFindByUserId, saveUser } = userStore;
    const toRequestInfo = () => {
      // 用户名参数 json格式
      const params = {
        userId: userId,
      };
      console.log("params", params);

      // 发送请求
      userFindByUserId(params);
    };
    // toRequestInfo();
  }
  if (index == "22") {
    const result = "/" + e;
    router.push({
      path: result,
      query: { toNum: 1 },
    });
  } else {
    console.log("e", e);
    const result = "/" + e;
    router.push(result);
  }
};
const todoLogout = () => {
  logout(user).then(() => {
    if (result.logoutCode) {
      router.push({
        path: "/login",
      });
      localStorage.clear();
      sessionStorage.clear();
    }
  });
};
</script>

<style>
/* .flex-grow {
  flex-grow: 1;
} */
.flex-grow {
  flex-grow: 1;
}
@media only screen and (max-width: 760px) {
  .flex-grow {
    flex-grow: 1;
  }
  li {
    width: auto;
    font-size: 16px;
    padding: 5px !important;
  }
}
</style>
@/store/modules/NavStore @/store/modules/nav @/store/modules/login-store
@/store/modules/nav-store @/store/modules/user-store @/store/modules/user
@/store/modules/login
