<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="首页" name="first">关于我</el-tab-pane>
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
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
