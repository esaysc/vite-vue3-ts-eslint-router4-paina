<!--
 * @Author: 落笔藏锋 xyswsjh@163.com
 * @Date: 2023-09-04 11:30:25
 * @LastEditors: 落笔藏锋 xyswsjh@163.com
 * @LastEditTime: 2023-09-04 16:31:12
 * @FilePath: \vite-vue3-ts-eslint-router4-paina\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import BottomContentVue from "@/components/content/BottomContent.vue";
</script>

<template>
  <router-view></router-view>
  <BottomContentVue class="bottom-content-vue"></BottomContentVue>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
