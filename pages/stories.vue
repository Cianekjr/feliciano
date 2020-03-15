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
import { computed, defineComponent, onServerPrefetch, SetupContext, watch } from '@vue/composition-api'
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
  },
  setup (props: any, ctx: SetupContext) {
    const { $store, $axios, $route } = ctx?.root
    const ARTICLES_LIMIT = 6

    onServerPrefetch(() => {
      const page = $route.query.page || '1'
      return $store.dispatch('articles/getArticles', {
        $axios,
        limit: ARTICLES_LIMIT,
        offset: (Number(page) - 1) * ARTICLES_LIMIT
      })
    })

    const activePage = computed(() => ctx.root.$route.query.page || '1')

    watch(activePage, (page: any) => {
      $store.dispatch('articles/getArticles', {
        $axios,
        limit: ARTICLES_LIMIT,
        offset: (Number(page) - 1) * ARTICLES_LIMIT
      })
    })
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
