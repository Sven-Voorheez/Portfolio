<template>
  <section class="max-w-xl mx-auto py-20 px-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-md text-center">
    <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Связаться со мной</h1>

    <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
      Для связи вы можете написать мне в Telegram или на почту.
    </p>

    <div class="space-y-4">
      <a
        href="https://t.me/elyador"
        target="_blank"
        class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
      >
        Написать в Telegram
      </a>

      <a
        href="mailto:eldorrasulmuhamedov@gmail.com"
        class="block text-blue-600 hover:underline mt-2"
      >
        eldorrasulmuhamedov@gmail.com
      </a>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Контакты | Eldor Portfolio',
  meta: [
    { name: 'description', content: 'Контактная информация Eldor — Telegram и Email.' }
  ]
})
</script>
