<template>
  <div class="checkbox-wrapper">
    <input
      type="checkbox"
      id="fullTime"
      class="checkbox-box"
      :value="input"
      @change="$emit('update:input', $event.target.checked)"
    />
    <label for="fullTime" class="checbox-text">{{label}}</label>
  </div>
</template>

<style src="./checkbox.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';

const Component = defineComponent({
  props: {
    input: {
      type: String,
    },
    label: String,
  },
});
export default Component;
</script>
