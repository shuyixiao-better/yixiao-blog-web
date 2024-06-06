<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane name="first">
      <template #label>
        <div class="custom-tabs-label">
          <el-icon :size="26"><HomeIcon /></el-icon>
          <span>首页</span>
        </div>
      </template>
      <a href="https://blog.csdn.net/weixin_50503886?spm=1000.2115.3001.5343" target="_blank">关于我</a>
    </el-tab-pane>
    <el-tab-pane label="文章归档" name="second">
      <template #label>
        <div class="custom-tabs-label">
          <el-icon :size="26"><ArticleArchiveIcon /></el-icon>
          <span>文章归档</span>
        </div>
      </template>
      Config
    </el-tab-pane>
    <el-tab-pane label="说说" name="third">
      <template #label>
        <div class="custom-tabs-label">
          <el-icon :size="26"><TalkAboutIcon /></el-icon>
          <span>说说</span>
        </div>
      </template>
      Role
    </el-tab-pane>
    <el-tab-pane label="网址导航" name="fourth">
      <template #label>
        <div class="custom-tabs-label">
          <el-icon :size="26"><UrlNavigationIcon /></el-icon>
          <span>网址导航</span>
        </div>
      </template>
      Task
    </el-tab-pane>
    <el-tab-pane label="热搜" name="five">
      <template #label>
        <div class="custom-tabs-label">
          <el-icon :size="26"><HotSearchIcon /></el-icon>
          <span>热搜</span>
        </div>
      </template>
      Task
    </el-tab-pane>
    <el-tab-pane label="留言版" name="six">
      <template #label>
        <div class="custom-tabs-label">
          <el-icon :size="26"><NoticeBoardIcon /></el-icon>
          <span>留言版</span>
        </div>
      </template>
      Task
    </el-tab-pane>
    <el-tab-pane label="友情连接" name="seven">
      <template #label>
        <div class="custom-tabs-label">
          <el-icon :size="26"><LinkIcon /></el-icon>
          <span>友情连接</span>
        </div>
      </template>
      <a href="https://blog.csdn.net/weixin_50503886?spm=1000.2115.3001.5343" target="_blank">博客链接</a>
    </el-tab-pane>
    <el-tab-pane label="关于本站" name="eight">
      <template #label>
        <div class="custom-tabs-label">
          <el-icon :size="26"><AboutTheSiteIcon /></el-icon>
          <span>关于本站</span>
        </div>
      </template>
      Task
    </el-tab-pane>
  </el-tabs>
  <div class="search-container">
    <input type="text" class="search-input" placeholder="Search...">
    <button class="search-button">🔍</button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import HomeIcon from "@/assets/icon/HomeIcon.vue";
import ArticleArchiveIcon from "@/assets/icon/ArticleArchiveIcon.vue";
import TalkAboutIcon from "@/assets/icon/TalkAboutIcon.vue";
import UrlNavigationIcon from "@/assets/icon/UrlNavigationIcon.vue";
import HotSearchIcon from "@/assets/icon/HotSearchIcon.vue";
import NoticeBoardIcon from "@/assets/icon/NoticeBoardIcon.vue";
import LinkIcon from "@/assets/icon/LinkIcon.vue";
import AboutTheSiteIcon from "@/assets/icon/AboutTheSiteIcon.vue";

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
