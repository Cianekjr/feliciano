<template>
  <div class="wrapper">
    <Header :bg-index="2" title="About" half />
    <container class="container">
      <Heading heading="Services" subheading="Catering Services" />
    </container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import container from '~/layouts/container.vue'
import Header from '~/components/Header.vue'
import Heading from '~/components/Heading.vue'

export default defineComponent({
  components: {
    container,
    Header,
    Heading
  }
})
</script>

<style>

</style>
