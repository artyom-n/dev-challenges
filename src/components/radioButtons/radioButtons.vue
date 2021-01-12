<template>
  <label>
    <input
    type="radio"
    :value="label"
    :name="name"
    v-model="radioButtonValue"
    @change="$emit('change', $event.target.checked)"
    />
    <span>{{label}}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Component = defineComponent({
  props: {
    name: String,
    label: String,
  },
});
export default Component;
</script>
