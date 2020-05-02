<template>
  <div class="container">
    <HeaderCarousel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import HeaderCarousel from '~/components/HeaderCarousel.vue'

export default defineComponent({
  components: {
    HeaderCarousel
  },
  setup () {
    return {

    }
  }
})
</script>

<style scoped lang="scss">

</style>
