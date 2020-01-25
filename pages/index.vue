<template>
  <div class="container">
    <div>
      <h1 class="title">
        feliciano
      </h1>
      <h2 class="subtitle">
        Restaurant and catering website.
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'

export default createComponent({
  setup () {
    const message = ref('This is a message')

    return {
      message
    }
  }
})
</script>

<style>

</style>
