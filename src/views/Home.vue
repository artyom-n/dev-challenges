<template>
  <div>
    <Header />
    <Search />
    <Card />
  </div>
</template>
<script>
import Header from '../components/header/header.vue';
import Search from '../components/search/search.vue';
import Card from '../components/card/card.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Search,
    Card,
  },
};
</script>
