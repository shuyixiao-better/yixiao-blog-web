<template>
  <header>
    <ContentComponent />
  </header>
</template>

<script>
import ContentComponent from '@/views/Home/ContentComponent.vue';

export default {
  name: 'App',
  components: {
    ContentComponent
  }
}
</script>
