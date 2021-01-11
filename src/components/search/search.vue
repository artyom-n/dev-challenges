<template>
  <div class="search">
    <font-awesome-icon icon="suitcase" class="suitcase"/>
    <input
      type="search"
      class="input"
      :value="title"
      placeholder="Title, companies, expertise or benefits"
      @input="$emit('update:title', $event.target.value)"
    />
    <Button label="Search" />
  </div>
</template>

<style src="./search.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Button from '../button/button.vue';

const Search = defineComponent({
  props: {
    title: {
      type: String,
    },
  },
  components: {
    Button,
    FontAwesomeIcon,
  },
});

export default Search;
</script>
