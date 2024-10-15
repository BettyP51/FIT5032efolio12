<template>
  <div class="main-container">
    <header v-if="showHeader">
      <Bheader />
    </header>
    <main class="main-box">
      <!-- <LibraryRegistrationForm /> -->
      <!-- <JSONLab /> -->
      <router-view></router-view> 
    </main>
  </div>
</template>

<script>
import Bheader from './components/Bheader.vue';
import CountBookAPI from './views/CountBookAPI.vue'; 

export default {
  name: 'App',
  components: {
    Bheader,
    CountBookAPI,
  },
  computed: {
    showHeader() {
      return this.$route.name !== 'CountBookAPI'; 
    },
  },
};
</script>

<style scoped>
/*
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
*/
</style>
