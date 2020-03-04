<template>
  <div class="wrapper">
    <Header :bg-index="4" title="Contact" half />
    <container class="container">
      Contact
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
