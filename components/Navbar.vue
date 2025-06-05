<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <nav class="bg-gray-900 text-white px-6 py-4 flex flex-wrap gap-6 justify-center shadow-md">
    <NuxtLink
      to="/"
      class="relative pb-1 transition hover:text-blue-400"
      :class="{ 'text-blue-500 font-semibold border-b-2 border-blue-500': route.path === '/' }"
    >
      Главная
    </NuxtLink>

    <NuxtLink
      to="/about"
      class="relative pb-1 transition hover:text-blue-400"
      :class="{ 'text-blue-500 font-semibold border-b-2 border-blue-500': route.path === '/about' }"
    >
      Обо мне
    </NuxtLink>

    <NuxtLink
      to="/projects"
      class="relative pb-1 transition hover:text-blue-400"
      :class="{ 'text-blue-500 font-semibold border-b-2 border-blue-500': route.path === '/projects' }"
    >
      Проекты
    </NuxtLink>

    <NuxtLink
      to="/contact"
      class="relative pb-1 transition hover:text-blue-400"
      :class="{ 'text-blue-500 font-semibold border-b-2 border-blue-500': route.path === '/contact' }"
    >
      Контакты
    </NuxtLink>
  </nav>
</template>

