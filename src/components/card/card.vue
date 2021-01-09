<template>
  <section>
    <div class="container">
      <div class="row end-xs">
        <div class="col-xs-8">
          <div class="card">
            <div class="row bottom-xs">
              <div class="col-xs-2">
                <div class="image-wrapper">
                  <img src="https://picsum.photos/90/90" alt="" />
                </div>
              </div>
              <div class="col-xs-7">
                <div class="vacancy">
                  <h6>{{ jobPost.company }}</h6>
                  <h4>{{ jobPost.type }}</h4>
                </div>
              </div>
              <div class="col-xs-3">
                <div class="city-days">
                  <span>{{ jobPost.location }}</span>
                  <span>{{ jobPost.created_at }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style src="./card.scss" lang="scss" scoped></style>
<script lang="ts">
import { defineComponent } from 'vue';

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
});
export default Card;
</script>
