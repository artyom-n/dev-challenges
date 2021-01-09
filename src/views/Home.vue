<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <div class="search-wrapper">
        <Search />
      </div>
    </div>
  </div>
</div>
  <div>
    <div>
      <div v-for="job in jobs" :key="job.id">
        <Card :jobPost="job"/>
      </div>
    </div>
  </div>
</template>

<style src="../app.scss" lang="scss" scoped></style>

<script lang="ts">
// import axios from 'axios';
import { defineComponent } from 'vue';
import Search from '../components/search/search.vue';
import Card from '../components/card/card.vue';

type Job = {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;
};

type Data = {
  jobs: Job[];
};

const Home = defineComponent({
  name: 'Home',
  components: {
    Search,
    Card,
  },
  data(): Data {
    return {
      jobs: [],
    };
  },
  mounted() {
    // const accessPoint = 'https://cors-anywhere.herokuapp.com';
    // const url = 'https://jobs.github.com/positions.json';

    fetch('https://raw.githubusercontent.com/mart-j/jobs/main/positions.json')
      .then((response) => response.json())
      .then((data) => {
        this.jobs = data;
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  },
});
export default Home;
</script>
