<template>
  <section>
    <div class="container">
        <div class="row">
            <div class="col-xs-2">
                <div class="location">
                    <form action="">
                        <input type="checkbox" id="fulltime">
                        <label for="fulltime"> Full time</label><br>
                        <input type="input" placeholder="City, state, zip code or country"><br>
                        <input type="radio" id="london" name="loc" checked="checked">
                        <label for="london">London</label><br>
                        <input type="radio" id="amsterdam" name="loc">
                        <label for="amsterdam">Amsterdam</label><br>
                        <input type="radio" id="newyork" name="loc">
                        <label for="newyork">New York</label><br>
                        <input type="radio" id="berlin" name="loc">
                        <label for="berlin">Berlin</label>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<style src="./location.scss" lang="scss" scoped></style>

<script lang="ts">

import { defineComponent } from 'vue';

const Location = defineComponent({

});
export default Location;
</script>
