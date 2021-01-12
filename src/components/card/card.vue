<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-xs-9">
          <router-link class="link" :to="{ name: 'About', params: { id: jobPost.id } }">
            <div class="card">
              <div class="row bottom-xs">
                <div class="col-xs-2">
                  <div class="image-wrapper">
                    <img
                      v-if="jobPost.company_logo"
                      :src="jobPost.company_logo"
                      :alt="jobPost.company"
                      class="image"
                    />
                    <img
                      v-else
                      src="@/assets/not_found_logo.png"
                      :alt="jobPost.company"
                      class="image"
                    />
                  </div>
                </div>
                <div class="col-xs-6">
                  <div class="vacancy">
                    <div class="company">{{ jobPost.company }}</div>
                    <div class="developer">{{ jobPost.title }}</div>
                    <div class="fulltime">{{ jobPost.type }}</div>
                  </div>
                </div>
                <div class="col-xs-4">
                  <div class="city-days">
                    <div class="container">
                      <div class="row middle-xs">
                        <div class="col-xs-6">
                          <div class="icon-loc-wrapper">
                            <font-awesome-icon icon="globe-americas" class="globe-americas" />
                            <div>{{ jobPost.location }}</div>
                          </div>
                        </div>
                        <div class="col-xs-6">
                          <div class="icon-time-wrapper">
                            <font-awesome-icon icon="clock" class="clock" />
                            <div>{{ getDateFormat(jobPost.created_at) }} days ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<style src="./card.scss" lang="scss" scoped></style>
<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const Card = defineComponent({
  /* eslint-disable @typescript-eslint/camelcase */
  props: {
    jobPost: {
      id: String,
      type: String,
      url: String,
      created_at: String,
      company: String,
      company_url: String,
      location: String,
      title: String,
      description: String,
      how_to_apply: String,
      company_logo: String,
    },
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
});
export default Card;
</script>
