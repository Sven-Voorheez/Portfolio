<template>
  <div 
  class="min-h-screen flex flex-col 
    bg-gradient-to-r from-gray-400 to-gray-700 
    transition-colors duration-300">


    <Navbar />

    <main class="flex-1 p-4">
      <slot />
    </main>

    <footer class="text-center p-4 text-gray-900 z-50">
      © Eldor — {{ new Date().getFullYear() }}
    </footer>
  </div>
</template>

<script setup>
import Navbar from '~/components/AppNavbar.vue'
</script>
