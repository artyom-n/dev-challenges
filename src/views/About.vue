<template>
  <section>
    <div class="container container-fluid">
      <div class="row">
        <div class="col-xs-12 col-md-4">
          <router-link to="/" class="back-link">
          <font-awesome-icon icon="long-arrow-alt-left" class="back-link__icon"/>
          <span class="back-link__text">Back to search</span>
          </router-link>
          <p class="apply-heading">HOW TO APPLY</p>
          <p class="apply-text" v-html=job.how_to_apply></p>
        </div>
        <div class="col-xs-12 col-md-8">
          <div v-if="loading" class="loading">
            <p>Loading...</p>
          </div>
          <div v-if="job" class="card">
            <div class="row">
            <div class="col-xs-12">
              <div class="title-type-wrapper">
                <div class="title">{{ job['title'] }}</div>
                <div class="type">{{ job['type'] }}</div>
              </div>
              <div class="icon-time-wrapper">
                <font-awesome-icon icon="clock" class="clock"/>
                <div>{{ getDateFormat(job['created_at']) }} days ago</div>
              </div>
            </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-md-7">
                <div class="logo-company-wrapper">
                  <div class="image-wrapper">
                    <img
                      v-if="job.company_logo"
                      :src='job.company_logo'
                      :alt='job.company'
                      class="image"
                    />
                    <img
                      v-else
                      src="@/assets/not_found_logo.png"
                      :alt="job.company"
                      class="image"
                    />
                  </div>
                  <div class="company-location-wrapper">
                    <div class="company">{{ job['company'] }}</div>
                    <div class="icon-city-wrapper">
                      <font-awesome-icon icon="globe-americas" class="globe-americas"/>
                      <div class="location">{{ job['location'] }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p class="description" v-html=job.description></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style src="../app.scss" lang="scss" scoped></style>
<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
  job: Job;
  loading: boolean;
  description: string;
};
const About = defineComponent({
  name: 'About',
  data(): Data {
    return {
      /* eslint-disable @typescript-eslint/camelcase */
      job: {
        id: '',
        type: '',
        url: '',
        created_at: '',
        company: '',
        company_url: '',
        location: '',
        title: '',
        description: '',
        how_to_apply: '',
        company_logo: '',
      },
      loading: false,
      description: '',
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    getDateFormat(date: string) {
      const jobDate = new Date(date);

      const today = new Date();

      const difference = today.getTime() - jobDate.getTime();

      return Math.floor(difference / (1000 * 3600 * 24));
    },
  },
  mounted() {
    this.loading = true;

    fetch('https://raw.githubusercontent.com/mart-j/jobs/main/positions.json')
      .then((response) => response.json())
      .then((data) => {
        const index = data.findIndex((item: Job) => item.id === this.$route.params.id);

        this.job = data[index];

        this.loading = false;
      })
      .catch((err) => console.log(err.message));
  },
});
export default About;
</script>
