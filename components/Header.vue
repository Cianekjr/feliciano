<template>
  <header class="wrapper">
    <div class="overlay" />
  </header>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
  .wrapper {
    background-image: url("../assets/images/bg_1.jpg");
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .overlay {
    background-color: rgba(0, 0, 0, .7);
    width: 100%;
    height: 100%;
  }
</style>
