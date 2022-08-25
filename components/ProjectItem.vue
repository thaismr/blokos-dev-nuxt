<template>
  <div class="project-item-container">
    <h3>{{ content.title }}</h3>
    <div :style="customContainerStyle">
      <figure>
        <span class="badge">Django</span>
        <span class="badge">Python</span>
        <span class="badge">Vanilla JS</span>
      </figure>
    </div>
    <div class="project-item-content">
      <p v-for="(pg, i) in content.paragraphs" :key="i">
        {{ pg.text }}
      </p>
      <p>
        <a :href="`http://github.com/thaismr/${content.githubslug}`">
          See on GitHub
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      customContainerStyle: {
        width: '100%',
        height: '100%',
        'font-size': '0.5rem',
        'margin-right': '- 200px',
        'background-image': `url(${this.content.image})`,
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
        'content-overflow': 'hidden',
      },
    }
  },
}
</script>

<style scoped>
.project-item-container {
  padding: 0;
  max-width: 400px;
  margin: 1rem auto;
  font-size: 0.95rem;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 2px 8px #ddd;
}

figure {
  margin: 0;
  height: 0;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%;
}

.project-item-content {
  height: 100%;
  padding: 2rem 5%;
}

h3 {
  display: block;
  color: #603acf;
  font-weight: bold;
  text-align: center;
  padding: 2rem;
  margin-bottom: 0;
  text-transform: uppercase;
  border-bottom: 1px solid #eee;
}

p {
  text-align: left;
  margin: 1rem 0.5rem;
}

span.badge {
  color: #fff;
  margin: 0.25rem;
  padding: 3px 5px;
  border-radius: 5px;
  font-size: 0.875rem;
  display: inline-block;
  background-color: #603acf;
  box-shadow: 0 2px 8px #603acf;
}
</style>
