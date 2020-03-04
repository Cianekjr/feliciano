<template>
  <div class="wrapper">
    <Header :bg-index="2" title="About" half />
    <container class="container">
      About
    </container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import container from '~/layouts/container.vue'
import Header from '~/components/Header.vue'

export default defineComponent({
  components: {
    container,
    Header
  }
})
</script>

<style>

</style>
