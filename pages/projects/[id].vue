<template>
  <section class="max-w-3xl mx-auto py-10 px-4">
    <h1 class="text-3xl font-bold mb-4">{{ project.title }}</h1>
    <p class="text-gray-600 mb-4">{{ project.description }}</p>
    <a :href="project.link" target="_blank" class="text-blue-600 hover:underline">
  Перейти к проекту →
</a>

  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const projects = [
  { id: '1', title: 'Demon Slayer Site', description: 'React + anime style', link: 'https://demon-slayer-zeta.vercel.app/' },
  { id: '2', title: 'Weather App', description: 'Прогноз погоды на Vue', link: 'https://weather-one-rust.vercel.app/' },
  { id: '3', title: 'IT Solution', description: 'Современная верстка Vue + Tailwind', link: 'https://it-solution-y10amcflt-sven-voorheez.vercel.app/' },
  { id: '4', title: 'Резюме-сайт', description: 'Детализированная HTML-верстка', link: 'https://sven-voorheez.github.io/Resume/' },
  { id: '5', title: 'Магазин одежды', description: 'HTML/CSS магазин', link: 'https://sven-voorheez.github.io/Clothing-Store/' },
  { id: '6', title: 'Магазин обуви', description: 'Project Shoe Store', link: 'https://sven-voorheez.github.io/Project-Shoe-Store/' }
]

const project = projects.find(p => p.id === route.params.id)

useHead({
  title: `${project.title} | Eldor Portfolio`,
  meta: [{ name: 'description', content: project.description }]
})
</script>
