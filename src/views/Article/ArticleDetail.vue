<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p v-html="article.content"></p>
    <router-link :to="'/edit/' + article.id">Edit</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getArticleById } from '@/apis/article/article.js';
import { defineProps } from 'vue';

const props = defineProps({
  articleId: {
    type: Number,
    required: true
  }
});

const article = ref({});

onMounted(async () => {
  try {
    const response = await getArticleById(props.articleId); // 使用 articleId 获取文章详情
    article.value = response.data;
    console.log('article.value', article.value);
  } catch (error) {
    console.error('Error fetching article:', error);
  }
});
</script>
