<template>
  <section class="text-center py-20 px-4 bg-white dark:bg-neutral-900 transition duration-300">
    <h1 class="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white animate-fade-in">
      Ассалому алайкум, я <span class="text-blue-600 dark:text-blue-400">Eldor</span> 😎
    </h1>

    <p class="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in delay-200 max-w-xl mx-auto">
      Фронтенд-разработчик: Vue, Nuxt, React, Telegram-боты.  
      Создаю адаптивные и быстрые интерфейсы.
    </p>

    <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fade-in delay-300">
      <NuxtLink
        to="/projects"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md transition duration-200 text-sm sm:text-base"
      >
        Посмотреть проекты
      </NuxtLink>

      <NuxtLink
        to="/contact"
        class="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 dark:hover:bg-neutral-800 transition duration-200 text-sm sm:text-base"
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


