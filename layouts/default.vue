<template>
  <div class="min-h-screen flex flex-col 
    bg-gradient-to-r from-blue-50 to-purple-50 
    dark:from-gray-400 dark:to-gray-700 
    transition-colors duration-300">

    <Navbar />

    <main class="flex-1 p-4">
      <slot />
    </main>

    <footer class="text-center p-4 text-gray-500">
      © Eldor — {{ new Date().getFullYear() }}
    </footer>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
</script>


