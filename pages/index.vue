<template>
  <section class="text-center py-20 px-4 bg-white dark:bg-neutral-900 transition duration-300">
    <h1 class="text-5xl font-extrabold mb-6 text-gray-900 dark:text-white animate-fade-in">
      Ассалому алайкум, я Eldor 👋
    </h1>

    <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in delay-200">
      Фронтенд-разработчик с опытом работы с Vue, React, Nuxt, Vite и Telegram-ботами.
Специализируюсь на создании современных, адаптивных и производительных интерфейсов.
    </p>

    <div class="flex justify-center gap-6 animate-fade-in delay-300">
      <NuxtLink
        to="/projects"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow transition-all duration-200"
      >
        Посмотреть проекты
      </NuxtLink>

      <NuxtLink
        to="/contact"
        class="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 dark:hover:bg-neutral-800 transition-all duration-200"
      >
        Написать мне
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Главная | Eldor Portfolio',
  meta: [
    { name: 'description', content: 'Портфолио Eldor: Vue/Nuxt, фронтенд, UI' }
  ]
})
</script>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.6s ease forwards;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
</style>


