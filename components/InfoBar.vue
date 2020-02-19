<template>
  <section class="wrapper">
    <container class="container">
      <a
        href="tel:+ 1235 2355 98"
      >
        + 1235 2355 98
      </a>
      <a
        href="mailto:youremail@email.com"
      >
        youremail@email.com
      </a>
      <span>
        Open hours: Monday - Sunday <time datetime="PT13H">8:00AM - 9:00PM</time>
      </span>
    </container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import container from '~/layouts/container.vue'

export default defineComponent({
  components: {
    container
  }
})
</script>

<style scoped lang="scss">
  .wrapper {
    background-color: rgba(255, 255, 255, .05);
    color: rgba(255, 255, 255, .5);
    font-size: 1.4rem;
    line-height: 2;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: space-between;
    padding: 4px 1rem;
  }
</style>
