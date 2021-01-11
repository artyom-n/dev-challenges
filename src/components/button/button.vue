<template>
  <button @click="$emit('onClick')">
    {{ label }}
  </button>
</template>

<style src="./button.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';

const Component = defineComponent({
  props: {
    label: String,
  },
});
export default Component;
</script>
