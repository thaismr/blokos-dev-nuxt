<template>
  <section class="projects-section">
    <ul class="projects-main-list">
      <li v-for="(project, i) in projects" :key="i">
        <ProjectItem :content="project" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      projects: [
        {
          title: 'Ayvu - Language Learning App',
          stack: ['Django', 'Python', 'Vanilla JS'],
          paragraphs: [
            {
              text: 'Ayvu is a gamified language learning platform currently under development.',
            },
          ],
          image: '/img/ayvu-screen.png',
          githubslug: 'ayvuapp',
        },
        {
          title: 'Glitch - Misteries Niche Social App',
          stack: ['Reactjs', 'Apollo', 'GraphQL'],
          paragraphs: [
            {
              text: 'Glitch is a niche social app for discussing misteries and alternative topics.',
            },
            {
              text: 'Currently unmantained.',
            },
          ],
          image: '/img/glitch-screen.png',
          githubslug: 'glitch',
        },
        {
          title: 'Levo em Casa',
          stack: ['Django', 'Postgresql'],
          paragraphs: [
            {
              text:
                'Levo em casa is a marketplace for small stores and professionals to list products available for delivery, ' +
                'motivated by social distancing during the pandemics.',
            },
            {
              text: 'Development paused due to the emergence of time-concurrent projects.',
            },
          ],
          image: '/img/levoemcasa-screen.png',
          githubslug: 'levoemcasa-heroku',
        },
        {
          title: '2D Game - Coffee Shop',
          stack: ['Unity3d', 'C#'],
          paragraphs: [
            {
              text: 'Class project submitted during graduation course at Universidade Lusofona - ULHT.',
            },
            {
              text:
                'Project developed partnering with a school for kids with hearing disabilities. ' +
                'During planning phase, one of the needs expressed by the partners was that the students found it was a chalenge to ' +
                'learn how to use cash.',
            },
            {
              text: 'Integrated with the project was an external console built with a 3d printer and Arduino components.',
            },
          ],
          image: '/img/jacob-screen.png',
          githubslug: 'cafe-2d-game-csharp',
        },
        {
          title: '3D Game - Tutankhamon',
          stack: ['Unity3d', 'C#'],
          paragraphs: [
            {
              text: 'Class project submitted during graduation course at Universidade Lusofona - ULHT.',
            },
            {
              text: '3D Game Prototype using Unity Engine (C#).',
            },
            {
              text: 'Features include: Game menu, Inventory system, Crafting items from materials, Puzzle system.',
            },
          ],
          image: '/img/tutankhamon-screen.png',
          githubslug: 'tutankhamon-game-csharp',
        },
        {
          title: '3D Game - Terra Nova',
          stack: ['Unity3d', 'C#'],
          paragraphs: [
            {
              text: 'Class project submitted during graduation course at Universidade Lusofona - ULHT.',
            },
            {
              text: '3D Game system with dialogues, missions, game artifacts, game events, all manageable from Unity Editor.',
            },
            {
              text: 'Features also include: Preloading multiple scenes, saving progress to file, player inventory, basic farming.',
            },
          ],
          image: '/img/terranova-screen.png',
          githubslug: '3D-Game-System-Csharp',
        },
      ],
    }
  },
}
</script>

<style scoped>
section.projects-section {
  margin: 1rem auto;
  max-width: 900px;
}

.projects-main-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
