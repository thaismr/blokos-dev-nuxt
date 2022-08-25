<template>
  <section>
    <div class="hero-container">
      <h2>Welcome to Blokos!</h2>
      <p>
        Here you can keep track of some of my main projects and their status.
      </p>
      <button class="hero-detail">See projects</button>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  width: 90%;
  height: 40vh;
  margin: 0 auto;
  padding: 2rem 0;
  max-width: 800px;
  text-align: center;
}

button.hero-detail {
  color: #333;
  padding: 1rem 2rem;
  margin: 2rem auto;
  width: fit-content;
  text-align: center;
  font-size: 0.95rem;
  font-weight: bold;
  border-radius: 10px;
  background-color: #59e629;
  border: 2px solid #eee;
  box-shadow: 0 2px 8px #ddd;
}

.hero-detail:hover {
  cursor: pointer;
  text-decoration: underline;
  background-color: #59ee29;
}

h2 {
  margin: 1rem;
}

p {
  font-size: 1rem;
  padding: 1rem 1.5rem;
}
</style>
