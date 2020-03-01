<template>
  <div class="wrapper">
    <Header :bg-index="1" title="Blog" half />
    <container class="container">
      <ArticlesWall />
      <PageSwitcher />
    </container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import container from '~/layouts/container.vue'
import Header from '~/components/Header.vue'
import ArticlesWall from '~/components/ArticlesWall.vue'
import PageSwitcher from '~/components/PageSwitcher.vue'

export default defineComponent({
  components: {
    container,
    Header,
    ArticlesWall,
    PageSwitcher
  }
})
</script>

<style scoped lang="scss">
  .wrapper {
    background-color: #fafafa;
  }

  .container {
    padding: 12rem 1rem;
    display: grid;
    row-gap: 8rem;
    justify-items: center;
  }
</style>
