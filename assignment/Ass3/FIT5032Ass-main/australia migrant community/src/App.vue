<script setup>
import BHeader from './components/BHeader.vue';
import { store } from './store'; 
</script>

<template>
  <div class="app-background">
    <header>
      <BHeader />
    </header>

    <nav>
      <ul>
      </ul>
    </nav>

    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.app-background {
  background-color: #f7faff;
  min-height: 100vh; 
  padding: 20px; 
  box-sizing: border-box;
}

.main-box {
  background-color: #f7faff; 
  border-radius: 8px; 
  padding: 20px;
  margin: 20px auto; 
  max-width: 1200px;
}

nav ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
}

nav ul li {
  font-size: 1.2rem;
}

nav ul li a {
  text-decoration: none;
  color: #275fda;
}

nav ul li a:hover {
  text-decoration: underline;
}

h1 {
  color: #275fda;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  color: #333;
}
</style>
