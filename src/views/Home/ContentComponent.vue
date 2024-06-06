<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="首页" name="first">
      <a href="https://blog.csdn.net/weixin_50503886?spm=1000.2115.3001.5343" target="_blank">关于我</a>
    </el-tab-pane>
    <el-tab-pane label="文章归档" name="second">Config</el-tab-pane>
    <el-tab-pane label="说说" name="third">Role</el-tab-pane>
    <el-tab-pane label="网址导航" name="fourth">Task</el-tab-pane>
    <el-tab-pane label="热搜" name="five">Task</el-tab-pane>
    <el-tab-pane label="留言版" name="six">Task</el-tab-pane>
    <el-tab-pane label="友情连接" name="seven">
      <a href="https://blog.csdn.net/weixin_50503886?spm=1000.2115.3001.5343" target="_blank">博客链接</a>
    </el-tab-pane>
    <el-tab-pane label="关于本站" name="eight">Task</el-tab-pane>
  </el-tabs>
  <div class="search-container">
    <input type="text" class="search-input" placeholder="Search...">
    <button class="search-button">🔍</button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style>
.demo-tabs {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}
.search-input {
  width: 200px;
  padding: 32px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
  float: right;
  transition: border-color 0.3s;
}
.search-button {
  padding: 8px 12px;
  border: 1px solid #007BFF;
  border-left: none;
  border-radius: 0 4px 4px 0;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}
.search-button:hover {
  background-color: #0056b3;
}
</style>
