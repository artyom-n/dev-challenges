<template>
  <div class="container">
    <!-- <div class="row">
      <div class="col-xs-12">
        <div class="search-wrapper">
          <Search />
        </div>
      </div>
    </div> -->
    <div class="row">
      <div class="col-xs-12">
        <div class="search-wrapper">
          <form v-on:submit.prevent="searchJobs()">
            <input
              type="search"
              v-model="searchWord"
              placeholder="Title, companies, expertise or benefits"
            />
            <button>Add</button>
          </form>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2">
        <div>
          <Location />
          <input type="checkbox" id="fullTime" v-model="fullTime" />
          <label for="fullTime">Full time</label>
          <input
            type="search"
            v-model="locationWord"
            placeholder="City, state, zip code or country"
          />
          <input type="radio" id="all" value="" v-model="radioWord" checked="checked" />
          <label for="all">All</label><br />
          <input type="radio" id="london" value="London" v-model="radioWord" />
          <label for="london">London</label><br />
          <input type="radio" id="amsterdam" value="Amsterdam" v-model="radioWord" />
          <label for="amsterdam">Amsterdam</label><br />
          <input type="radio" id="newyork" value="NY" v-model="radioWord" />
          <label for="newyork">New York</label><br />
          <input type="radio" id="berlin" value="Berlin" v-model="radioWord" />
          <label for="berlin">Berlin</label>
        </div>
      </div>
      <div class="col-xs-6">
        <div v-for="job in filteredJobs" :key="job.id">
            <Card :jobPost="job" />
        </div>
      </div>
    </div>
  </div>
</template>
<style src="../app.scss" lang="scss" scoped></style>
<script lang="ts">
// import axios from 'axios';
import { defineComponent } from 'vue';
// import Search from '../components/search/search.vue';
import Location from '../components/location/location.vue';
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
  searchWord: string;
  locationWord: string;
  radioWord: string;
  fullTime: boolean;
  jobs: Job[];
};
const Home = defineComponent({
  name: 'Home',
  components: {
    // Search,
    Card,
    Location,
  },
  data(): Data {
    return {
      searchWord: '',
      locationWord: '',
      radioWord: '',
      fullTime: true,
      jobs: [],
    };
  },
  computed: {
    filteredJobs(): Job[] {
      let fullTimeWord = '';
      if (this.fullTime) {
        fullTimeWord = 'Full Time';
      }
      const searchedJobs = this.jobs.filter(
        (item) => item.company.toLowerCase().includes(this.searchWord)
          || item.location.toLowerCase().includes(this.searchWord)
          || item.title.toLowerCase().includes(this.searchWord)
          || item.description.toLowerCase().includes(this.searchWord),
      );
      const locationJobs = searchedJobs
        .filter((item) => item.location.toLowerCase().includes(this.locationWord.toLowerCase()));
      const radioJobs = locationJobs.filter((item) => item.location.includes(this.radioWord));
      const fullTimeJobs = radioJobs.filter((item) => item.type === fullTimeWord);
      return fullTimeJobs;
    },
  },
  mounted() {
    // const accessPoint = 'https://cors-anywhere.herokuapp.com';
    // const url = 'https://jobs.github.com/positions.json';
    fetch('https://raw.githubusercontent.com/mart-j/jobs/main/positions.json')
      .then((response) => response.json())
      .then((data) => {
        this.jobs = data;
      })
      .catch((err) => console.log(err.message));
  },
});
export default Home;
</script>
