<template>
  <div class="location-wrapper">
    <p class="location-text">{{ label }}</p>
    <div class="location-search">
      <font-awesome-icon icon="globe-americas" class="globe-americas" />
      <input
        type="search"
        class="input"
        :value="title"
        placeholder="City, state, zip code or country"
        @input="$emit('update:title', $event.target.value)"
      />
    </div>
  </div>
</template>

<style src="./location.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const Component = defineComponent({
  props: {
    title: {
      type: String,
    },
    label: String,
  },
  components: {
    FontAwesomeIcon,
  },
});

export default Component;
</script>
