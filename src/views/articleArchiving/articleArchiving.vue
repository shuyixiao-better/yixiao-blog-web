<template>
  <div>
    <ArticleList />
  </div>
  <div class="articleDetail">
    <ArticleDetail/>
  </div>
</template>


<script setup>
import ArticleList from '@/views/Article/ArticleList.vue';
import ArticleDetail from "@/views/Article/ArticleDetail.vue";

</script>

<style scoped lang="scss">

.articleDetail{
  padding: 0 20px;
}

</style>
