<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full relative">
    <div class="p-5 w-full fixed bg-[#31525B] py-5 top-0 border-b shadow z-50">
      <nav class="flex text-white text-2xl">
        <RouterLink to="/" class="hover:scale-110 duration-500">TodoList</RouterLink>
        <p>｜</p>
        <RouterLink to="/mealtime" class="hover:scale-110 duration-500">MealTime</RouterLink>
        <p>｜</p>
        <RouterLink to="/codereview" class="hover:scale-110 duration-500">CodeReview</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
