<template>
  <div class="container">
    <Header />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Header from '~/components/Header.vue'

export default defineComponent({
  components: {
    Header
  },
  setup () {
    return {

    }
  }
})
</script>

<style scoped lang="scss">

</style>
