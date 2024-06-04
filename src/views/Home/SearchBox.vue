<template>
  <div class="searchBox">
    <div class="search_ico" @click="$emit('openSearch')">
      <i class="iconfont icon-search"></i> 搜索文章...
      <span>Ctrl+K</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
};
</script>

<style scoped>
.searchBox {
  /* 样式定义 */
}
.search_ico {
  cursor: pointer;
}
</style>
