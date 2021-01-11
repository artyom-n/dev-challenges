<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-xs-9">
          <router-link class="link"
            :to="{ name: 'About', params: { id: jobPost.id } }">
           <div class="card">
            <div class="row bottom-xs">
              <div class="col-xs-2">
                <div class="image-wrapper">
                  <img
                    :src='jobPost.company_logo'
                    alt="" height="90" width="90"
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
                  <div class="icon-loc-wrapper">
                    <font-awesome-icon icon="globe-americas" class="globe-americas"/>
                  <div>{{ jobPost.location }}</div>
                  </div>
                  <div class="icon-time-wrapper">
                    <font-awesome-icon icon="clock" class="clock"/>
                    <div>{{ jobPost.created_at }}</div>
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
});
export default Card;
</script>
