<script setup>
import { reactive, onMounted } from 'vue';
import {getHotAPI} from '@/apis/hotSearch.js';

// 使用 reactive 来创建响应式数据
const state = reactive({
  baiduList: [],
  weiboList: [],
  zhihuList: [],
  csdnList: [],
  toutiaoList: [],
});

// 使用 onMounted 代替 created 钩子函数
onMounted(() => {
  getHotAPI("baidu").then(res => {
    state.baiduList = res.data.data;
  });
  // 重复的 API 调用可以封装成函数，避免代码重复
  const fetchData = (source) => {
    getHotAPI(source).then(res => {
      state[source + 'List'] = res.data.data;
    });
  };
  fetchData("weibo");
  fetchData("zhihu");
  fetchData("csdn");
  fetchData("toutiao");
});
</script>

<template>
  <!-- 你的模板内容 -->
</template>

<style scoped lang="scss">
/* 你的样式 */
</style>
