<template>
  <div class="wrapper">
    <Header :bg-index="2" title="About" half />
    <Services class="services" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import Header from '~/components/Header.vue'
import Services from '~/components/Services.vue'

export default defineComponent({
  components: {
    Header,
    Services
  }
})
</script>

<style>
  .services {
    background-color: #fafafa;
  }
</style>
