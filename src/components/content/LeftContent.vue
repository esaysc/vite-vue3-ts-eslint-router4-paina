<!-- 左侧边显示区域 用于存放热门信息（或排名） -->
<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted } from 'vue'
const posts = ref([
{
    id:1,
    content:"位于甘孜的5A级风景区稻城亚丁",
    author:"胡初一",
    hot_date: "6月 14日",
  },
  {
    id:2,
    content:"位于甘孜的5A级风景区稻城亚丁",
    author:"胡初一",
    hot_date: "6月 14日",
  },
  {
    id:3,
    content:"位于甘孜的5A级风景区稻城亚丁",
    author:"胡初一",
    hot_date: "6月 14日",
  },
  {
    id:4,
    content:"位于甘孜的5A级风景区稻城亚丁",
    author:"胡初一",
    hot_date: "6月 14日",
  }
])

const props = defineProps(['id','content','author','date'])

</script>

<template>
      <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>热门</span>
        <!-- <el-button class="button" text>Operation button</el-button> -->
      </div>
    </template>
    <div v-for="post in posts" :key="post.id" class="text item card" >
        <h2>{{ post.id }}</h2>
        <div>{{ post.content }} </div>
        <div>{{ post.author }}</div>
        <div>{{ post.hot_date }}</div>
    </div>
  </el-card>
  
  
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 200-2px;
}
.card h2 {
  background-color: aqua;
  margin-left: 5px;
}
.card{
  background-color: rgb(158, 170, 26);

}

</style>

