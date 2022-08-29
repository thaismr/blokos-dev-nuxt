<template>
  <div class="project-item-container">
    <h3>{{ content.title }}</h3>
    <div :style="customContainerStyle">
      <figure>
        <span v-for="(item, i) in content.stack" :key="i" class="badge">
          {{ item }}
        </span>
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
  margin: 0.5rem;
  max-width: 400px;
  font-size: 0.95rem;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 2px 8px #ddd;
}

figure {
  margin: 0;
  height: 0;
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%;
}

.project-item-content {
  height: 100%;
  padding: 2rem 5%;
}

h3 {
  padding: 2rem 1rem;
  display: block;
  margin-bottom: 0;
  font-weight: bold;
  text-align: center;
  color: #603acf;
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
