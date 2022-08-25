<template>
  <div class="projects-main-list">
    <ProjectItem :content="content" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      content: {
        title: 'Ayvu - Language Learning App',
        paragraphs: [
          {
            text: 'Ayvu is a gamified language learning platform currently under development.',
          },
        ],
        image: '/img/ayvu-screen.png',
        githubslug: 'ayvuapp',
      },
    }
  },
}
</script>

<style scoped>
.projects-main-list {
  margin: 1rem;
}
</style>
