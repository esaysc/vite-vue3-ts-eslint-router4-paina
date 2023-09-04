<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, onUnmounted } from "vue";
import TopContentVue from "@/components/content/TopContent.vue";
</script>

<template>
  <div class="container">
    <!-- 固定菜单栏 -->

    <el-affix :offset="0">
      <TopContentVue class="top-content-vue"></TopContentVue>
    </el-affix>

    <!--声明路由占位符标签-->
    <router-view> </router-view>
    <!--     
    <BottomContentVue class="bottom-content-vue"></BottomContentVue> -->
  </div>
</template>

<style scoped lang="scss"></style>
