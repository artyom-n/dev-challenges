<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-xs-3">
          <router-link to="/">Back to search</router-link>
          <h2>Job {{ $route.params.id }}</h2>
          <h5>HOW TO APPLY</h5>
          <p>
            Please email a copy of your resume and online portfolio to wes@kasisto.com & CC
            eric@kasisto.com
          </p>
        </div>
        <div class="col-xs-9">
          <div v-if="loading" class="loading">
            <h1>Loading...</h1>
          </div>
          <div v-if="job" class="card-about">
            <div class="row bottom-xs">
              <div class="col-xs-2">
                <div class="image-wrapper">
                  <img
                    :src="job.company_logo"
                    alt=""
                    height="90"
                    width="90"
                    class="image"
                  />
                </div>
              </div>
              <div class="col-xs-7">
                <div class="vacancy">
                  <h6>{{ job['company'] }}</h6>
                  <h3>{{ job['title'] }}</h3>
                  <h4>{{ job['type'] }}</h4>
                </div>
              </div>
              <div class="col-xs-3">
                <div class="city-days">
                  <span>{{ job['location'] }}</span>
                  <span>{{ job['created_at'] }}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p v-for="paragraph in convertedText" :key="paragraph" class="description">
                {{ paragraph }}
              </p>
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
  currentId: string;
  description: string;
};
const About = defineComponent({
  name: 'About',
  data(): Data {
    return {
      job: [],
      loading: false,
      description: '',
      // currentId: this.$route.params.id,
    };
  },
  computed: {
    convertedText(): string[] {
      const text = this.description.split(/<.>/g);
      const newText = text.map((item) => item
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, '')
        .replace(/<[^>]+?>/g, '')
        .replace(/\s+/g, ' ')
        .replace(/ /g, ' ')
        .replace(/>/g, ' '));
      console.log(newText);
      return newText;
    },
  },
  methods: {},
  mounted() {
    this.loading = true;
    fetch('https://raw.githubusercontent.com/mart-j/jobs/main/positions.json')
      .then((response) => response.json())
      .then((data) => {
        const index = data.findIndex((item) => item.id === this.$route.params.id);
        this.job = data[index];
        this.description = data[index].description;
        this.loading = false;
        console.log('array of jobs', data);
        console.log('current job object', data[index]);
        console.log('description', this.job.description);
      })
      .catch((err) => console.log(err.message));
  },
});
export default About;
</script>
