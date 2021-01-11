<template>
  <section>
    <Header />
    <div class="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
    <footer class="about-footer">Your name @ DevChallenges.io</footer>
  </section>
</template>

<style src="./app.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/header/header.vue';

const App = defineComponent({
  components: {
    Header,
  },
});
export default App;
</script>
