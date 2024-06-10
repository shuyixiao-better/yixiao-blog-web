<template>
  <div class="petal" :style="style"></div>
</template>

<script>
export default {
  name: 'Petal',
  props: {
    size: {
      type: Number,
      default: 30
    },
    left: {
      type: Number,
      default: 0
    },
    delay: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 10
    }
  },
  computed: {
    style() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        left: `${this.left}px`,
        animationDelay: `${this.delay}s`,
        animationDuration: `${this.duration}s`
      };
    }
  }
};
</script>

<style scoped>
.petal {
  position: absolute;
  top: -100px;
  background: url('/img/peach-flower.png') no-repeat center/contain;
  animation: fall linear infinite;
}

@keyframes fall {
  to {
    transform: translateY(100vh) rotate(360deg);
  }
}
</style>
