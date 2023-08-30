<script setup lang="ts"></script>

<template>
  <div class="flex justify-center gap-1 mt-20 h-[100vh]">
    <p class="text-5xl">Loading</p>
    <div class="flex gap-1">
      <span class="loading1 text-5xl">.</span>
      <span class="loading2 text-5xl">.</span>
      <span class="loading3 text-5xl">.</span>
    </div>
  </div>
</template>

<style scoped>
.loading1 {
  animation: loading1 2s linear infinite;
}
.loading2 {
  animation: loading1 2s linear infinite;
  animation-delay: 0.5s;
}
.loading3 {
  animation: loading1 2s linear infinite;
  animation-delay: 1s;
}
@keyframes loading1 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes loading2 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes loading3 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
