<template>
  <section>
    <div class="comtainer container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <div class="logo-wrapper">
            <router-link class="logo-link" to="/">
              <span class="logo-github">
                Github
                <span class="logo-jobs">
                  Jobs
                </span>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="./header.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';

const Header = defineComponent({});

export default Header;
</script>
