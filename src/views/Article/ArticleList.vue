<!-- ParentComponent.vue -->
<template>
  <div>
    <h1>Articles</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="'/article/' + article.id">{{ article.title }}</router-link>
      </li>
    </ul>
    <router-link to="/new">Create New Article</router-link>
  </div>
  <div>
    <!-- 确保只有在 selectedArticleId 有值时才渲染子组件 -->
    <ArticleDetail v-if="selectedArticleId !== null" :article-id="selectedArticleId" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAllArticles } from '@/apis/article/article.js';
import ArticleDetail from "@/views/Article/ArticleDetail.vue";

const articles = ref([]);
const selectedArticleId = ref(null); // 用于存储选中的文章ID

onMounted(async () => {
  try {
    const response = await getAllArticles();
    articles.value = response.data;
    if (articles.value.length > 0) {
      selectedArticleId.value = articles.value[0].id; // 默认选中第一篇文章的ID
      console.log('selectedArticleId:', selectedArticleId.value)
    }
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
});
</script>
