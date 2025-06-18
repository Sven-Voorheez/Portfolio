<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)
</script>

<template>
  <nav class="sticky top-0 z-50 bg-gray-900 text-white px-6 py-4 shadow-md">
   
    <div class="flex items-center justify-end">
      

      <button class="md:hidden focus:outline-none" @click="isOpen = true">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Десктоп-меню -->
    <div class="hidden md:flex justify-center gap-6 mt-4">
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
    </div>

    <!-- Мобильное меню (слайд справа) -->
    <Transition name="slide">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/45 bg-opacity-50 z-50 md:hidden"
        @click.self="isOpen = false"
      >
        <div class="absolute top-0 right-0 w-64 h-full bg-gray-900 p-6 flex flex-col gap-6 shadow-xl animate-slide-in">
          <button class="self-end text-white" @click="isOpen = false">
            ✕
          </button>

          <NuxtLink
            to="/"
            class="text-white text-lg hover:text-blue-400 transition"
            :class="{ 'text-blue-500 font-semibold': route.path === '/' }"
            @click="isOpen = false"
          >
            Главная
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="text-white text-lg hover:text-blue-400 transition"
            :class="{ 'text-blue-500 font-semibold': route.path === '/about' }"
            @click="isOpen = false"
          >
            Обо мне
          </NuxtLink>

          <NuxtLink
            to="/projects"
            class="text-white text-lg hover:text-blue-400 transition"
            :class="{ 'text-blue-500 font-semibold': route.path === '/projects' }"
            @click="isOpen = false"
          >
            Проекты
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="text-white text-lg hover:text-blue-400 transition"
            :class="{ 'text-blue-500 font-semibold': route.path === '/contact' }"
            @click="isOpen = false"
          >
            Контакты
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
@keyframes slide-in {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.animate-slide-in {
  animation: slide-in 0.3s ease-out forwards;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>



