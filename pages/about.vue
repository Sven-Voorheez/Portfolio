<template>
  <section class="max-w-3xl mx-auto py-16 px-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-md transition duration-300">
    <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
      Обо мне
    </h1>

    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
      Привет! Меня зовут <span class="font-semibold text-blue-600 dark:text-blue-400">Элдор</span>, мне 20 лет. Я фронтенд-разработчик с упором на современные технологии.
    </p>

    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
      Мой стек: <span class="font-medium text-green-600 dark:text-green-400">Vue</span>, <span class="font-medium text-indigo-600 dark:text-indigo-400">Nuxt</span>, 
      <span class="text-yellow-500">Vite</span>, <span class="text-blue-500">React</span>, а также классика — <span class="text-pink-500">HTML</span>, <span class="text-purple-500">CSS</span> и <span class="text-gray-800 dark:text-gray-100">JavaScript</span>.
    </p>

    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
      Умею подключать и использовать <span class="text-cyan-600">Bootstrap</span>, Tailwind, адаптирую под мобильные устройства и работаю с компонентным подходом.
    </p>

    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
      Также создаю <span class="font-medium text-rose-600">Telegram-ботов</span> — от простых уведомлений до автоматизированных систем с API, N8N и AI.
    </p>

    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      Люблю чистый код, минимализм и автоматизацию. Всегда открыт к новым знаниям и стремлюсь к росту в каждой задаче.
    </p>
  </section>
</template>

<script setup>
useHead({
  title: 'Обо мне | Eldor Portfolio',
  meta: [
    { name: 'description', content: 'Узнайте больше о фронтенд-разработчике Элдоре — Vue, Nuxt, React, Telegram-боты и современные веб-технологии.' }
  ]
})
</script>



