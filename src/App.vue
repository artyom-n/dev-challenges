<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <h1 class="app">test</h1>
  </div>
  <Header/>
  <Search/>
  <Card/>
  <router-view/>
</template>

<style src="./app.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/header/header.vue';
import Search from './components/search/search.vue';
import Card from './components/card/card.vue';

const App = defineComponent({
  components: {
    Header,
    Search,
    Card,
  },
});

export default App;
</script>
