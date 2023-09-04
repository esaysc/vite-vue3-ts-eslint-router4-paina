<!--
 * @Author: 落笔藏锋 xyswsjh@163.com
 * @Date: 2023-06-16 09:08:25
 * @LastEditors: 落笔藏锋 xyswsjh@163.com
 * @LastEditTime: 2023-09-04 16:22:14
 * @FilePath: \cy-vite-vue\src\components\contents\BottomContent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted } from "vue";
let date = new Date();
</script>

<template>
  <div class="container">
    <!-- <a href="https://beian.miit.gov.cn/" target="_blank">
      您的备案号</a> -->
    <p style="width: 100%">Copyright © 2023-{{ date }}</p>
    <a href="https://beian.miit.gov.cn/" target="_blank" style="width: 100%">
      蜀ICP备2023011663号</a
    >
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
}
a {
  font-size: 16px;
}
a:link {
  color: rgb(147, 147, 199);
  text-decoration: none;
}
a:active {
  color: rgb(210, 132, 132);
}
a:visited {
  color: rgb(200, 132, 200);
  text-decoration: none;
}
a:hover {
  color: rgb(91, 202, 174);
  text-decoration: underline;
}
</style>
