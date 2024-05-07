<script setup>
import { onMounted, ref } from 'vue';

const animationContainer = ref(null);
const triggerPosition = 200;

function handleScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > triggerPosition) {
    animationContainer.value.style.opacity = '1';
    animationContainer.value.classList.add('fixed');
  } else {
    animationContainer.value.classList.remove('fixed');
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

</script>

<template>
  <div class="DisneyCharacter">
    <div ref="animationContainer" id="lottie-animation" class="animation-container"></div>
  </div>
</template>

<style scoped>
.animation-container {
  width: 100px;
  height: 100px;
  background: url('@/assets/img/animation.gif') center center no-repeat;
  background-size: contain;
  opacity: 0;
  transition: opacity 0.5s ease; 
  cursor: pointer;
}

.fixed {
  position: fixed;
  right: 100px;
}
</style>
