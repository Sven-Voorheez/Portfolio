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
  { id: '1', title: 'Demon Slayer Site', description: 'Сайт на React + Vite с Bootstrap', link: 'https://demon-slayer-zeta.vercel.app/' },
  { id: '2', title: 'Weather App', description: 'Погода на Vue + Vite. Температура и ощущение.', link: 'https://weather-project-kohl.vercel.app' },
  { id: '3', title: 'IT Solution', description: 'Современная верстка на Vue + Tailwind.', link: 'https://it-solution-xi.vercel.app' },
  { id: '4', title: 'Резюме-сайт', description: 'Верстка резюме на HTML/CSS.', link: 'https://sven-voorheez.github.io/Resume/' },
  { id: '5', title: 'Магазин одежды', description: 'Магазин одежды на HTML/CSS.', link: 'https://sven-voorheez.github.io/Clothing-Store/' },
  { id: '6', title: 'Магазин обуви', description: 'Магазин обуви на HTML/CSS.', link: 'https://sven-voorheez.github.io/Project-Shoe-Store/' }

]
</script>

