<template>
  <section class="max-w-4xl mx-auto py-10 px-4">
    <h1 class="text-3xl font-bold mb-6">Мои проекты</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '~/components/ProjectCard.vue'

useHead({
  title: 'Проекты | Eldor Portfolio'
})

const projects = [
  { id: '1', title: 'Demon Slayer Site', description: 'React + anime style', link: 'https://demon-slayer-zeta.vercel.app/' },
  { id: '2', title: 'Weather App', description: 'Прогноз погоды на Vue', link: 'https://weather-one-rust.vercel.app/' },
  { id: '3', title: 'IT Solution', description: 'Современная верстка Vue + Tailwind', link: 'https://it-solution-y10amcflt-sven-voorheez.vercel.app/' },
  { id: '4', title: 'Резюме-сайт', description: 'Детализированная HTML-верстка', link: 'https://sven-voorheez.github.io/Resume/' },
  { id: '5', title: 'Магазин одежды', description: 'HTML/CSS магазин', link: 'https://sven-voorheez.github.io/Clothing-Store/' },
  { id: '6', title: 'Магазин обуви', description: 'Project Shoe Store', link: 'https://sven-voorheez.github.io/Project-Shoe-Store/' }
]
</script>

