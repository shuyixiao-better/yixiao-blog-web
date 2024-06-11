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
    <div v-for="petal in petals" :key="petal.left" :style="{ width: petal.size + 'px', left: petal.left + 'px', animationDelay: petal.delay + 's', animationDuration: petal.duration + 's' }">
      <Petal />
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ContentComponent from '@/views/Home/ContentComponent.vue';
import Petal from '@/style/Petal.vue';
import { getTokenInfoStore } from '@/stores/getTokenInfoStore.js'

const TokenInfoStore = getTokenInfoStore()
const { getTokenInfo } = TokenInfoStore

const petals = ref([]);

function generatePetals(count) {
  for (let i = 0; i < count; i++) {
    petals.value.push({
      size: Math.random() * 20 + 20,
      left: Math.random() * window.innerWidth,
      delay: Math.random() * 10,
      duration: Math.random() * 5 + 5
    });
  }
}

onMounted(() => {
  generatePetals(20);
});
// 在组件挂载时调用 getTokenInfo
onMounted(async () => {
  await getTokenInfo()
})
</script>

<style scoped lang="scss">
#app {
  position: relative;
  overflow: hidden;
  height: 100vh;
  background: linear-gradient(to bottom, #87ceeb, #f0e68c);
}
</style>
