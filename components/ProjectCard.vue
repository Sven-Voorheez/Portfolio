<template>
  <div
    class="rounded-xl bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 p-5"
  >
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h2>
    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>

    <a
      :href="project.link"
      target="_blank"
      class="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-medium hover:scale-105 hover:brightness-110 transition"
    >
      Перейти к проекту →
    </a>
  </div>
</template>

<script setup>
defineProps(['project'])
</script>


