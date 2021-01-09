<template>
  <Header/>
  <Search/>
  <Card/>
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
