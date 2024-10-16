<template>
  <div class="main-container">
    <BHeader v-if="showHeader">
      <BHeader />
    </BHeader>
    <main class="main-box">
      <!-- <LibraryRegistrationForm /> -->
      <!-- <JSONLab /> -->
      <router-view></router-view> 
    </main>
  </div>
</template>

<script>
import BHeader from './components/BHeader.vue';
import CountBookAPI from './views/CountBookAPI.vue'; 

export default {
  name: 'App',
  components: {
    BHeader,
    // eslint-disable-next-line vue/no-unused-components
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
