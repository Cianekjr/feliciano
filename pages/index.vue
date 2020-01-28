<template>
  <div class="container">
    <Header />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Header from '~/components/Header.vue'

export default createComponent({
  components: {
    Header
  },
  setup () {
    return {

    }
  }
})
</script>

<style>

</style>
