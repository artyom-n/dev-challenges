<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <Header />
          <router-view />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <footer class="footer">A & A @ DevChallenges.io</footer>
        </div>
      </div>
    </div>
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
