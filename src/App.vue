<template>
  <Petal
      v-for="(petal, index) in petals"
      :key="index"
      :size="petal.size"
      :left="petal.left"
      :delay="petal.delay"
      :duration="petal.duration"
  />
  <header>
    <ContentComponent />
  </header>
</template>

<script>
import ContentComponent from '@/views/Home/ContentComponent.vue';
import Petal from '@/style/Petal.vue'

export default {
  name: 'App',
  components: {
    ContentComponent,
    Petal
  },
  data() {
    return {
      petals: []
    };
  },
  created() {
    this.generatePetals(20);
  },
  methods: {
    generatePetals(count) {
      for (let i = 0; i < count; i++) {
        this.petals.push({
          size: Math.random() * 20 + 20,
          left: Math.random() * window.innerWidth,
          delay: Math.random() * 10,
          duration: Math.random() * 5 + 5
        });
      }
    }
  }
}
</script>

<style scoped lang="scss">
#app {
  position: relative;
  overflow: hidden;
  height: 100vh;
  background: linear-gradient(to bottom, #87ceeb, #f0e68c);
}
</style>
