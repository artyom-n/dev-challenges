<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="search-wrapper">
          <Search v-model:title="searchWord" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-3">
        <div>
          <Checkbox v-model:input="fullTime" label="Full time" />
          <Location v-model:title="locationWord" label="LOCATION" />
          <div>
            <div class="radio-wrapper">
              <input
                type="radio"
                id="all"
                value=""
                v-model="radioWord"
                checked="checked"
                class="radio-button"
              />
              <label for="all" class="radio-text">All</label><br />
            </div>
            <div class="radio-wrapper">
              <input
                type="radio"
                id="london"
                value="London"
                v-model="radioWord"
                class="radio-button"
              />
              <label for="london" class="radio-text">London</label><br />
            </div>
            <div class="radio-wrapper">
              <input
                type="radio"
                id="amsterdam"
                value="Amsterdam"
                v-model="radioWord"
                class="radio-button"
              />
              <label for="amsterdam" class="radio-text">Amsterdam</label><br />
            </div>
            <div class="radio-wrapper">
              <input
                type="radio"
                id="newyork"
                value="NY"
                v-model="radioWord"
                class="radio-button"
              />
              <label for="newyork" class="radio-text">New York</label><br />
            </div>
            <div class="radio-wrapper">
              <input
                type="radio"
                id="berlin"
                value="Berlin"
                v-model="radioWord"
                class="radio-button"
              />
              <label for="berlin" class="radio-text">Berlin</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-9">
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
import Search from '../components/search/search.vue';
import Card from '../components/card/card.vue';
import Checkbox from '../components/checkbox/checkbox.vue';
import Location from '../components/location/location.vue';

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
    Search,
    Card,
    Checkbox,
    Location,
  },
  data(): Data {
    return {
      searchWord: '',
      locationWord: '',
      radioWord: '',
      fullTime: false,
      jobs: [],
    };
  },
  computed: {
    filteredJobs(): Job[] {
      let fullTimeWord = '';
      if (this.fullTime) {
        fullTimeWord = 'Full Time';
      }

      console.log('checked fulltime', this.fullTime);

      const searchedJobs = this.jobs.filter(
        (item) => item.company.toLowerCase().includes(this.searchWord)
          || item.location.toLowerCase().includes(this.searchWord)
          || item.title.toLowerCase().includes(this.searchWord)
          || item.description.toLowerCase().includes(this.searchWord),
      );
      const locationJobs = searchedJobs
        .filter((item) => item.location.toLowerCase().includes(this.locationWord.toLowerCase()));

      const radioJobs = locationJobs.filter((item) => item.location.includes(this.radioWord));

      const fullTimeJobs = radioJobs.filter((item) => item.type.includes(fullTimeWord));
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
