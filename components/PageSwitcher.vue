<template>
  <ul class="wrapper">
    <li class="item">
      <LinkButton
        reverse
        :to="{ path: 'stories', query: { page: Number(activePage) - 1 }}"
        class="switch-button"
        :disabled="Number(activePage) === 1"
      >
        <img src="~assets/icons/arrow-left.svg" alt="Arrow left" class="arrow">
      </LinkButton>
    </li>
    <li v-for="n in pages" :key="n" class="item">
      <LinkButton
        reverse
        :to="{ path: 'stories', query: { page: n }}"
        class="switch-button"
        :active="Number(activePage) === n"
      >
        {{ n }}
      </LinkButton>
    </li>
    <li class="item">
      <LinkButton
        reverse
        :to="{ path: 'stories', query: { page: Number(activePage) + 1 }}"
        class="switch-button"
        :disabled="Number(activePage) === Number(pages)"
      >
        <img src="~assets/icons/arrow-right.svg" alt="Arrow right" class="arrow">
      </LinkButton>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, SetupContext, computed } from '@vue/composition-api'
import LinkButton from '~/components/LinkButton.vue'

export default defineComponent({
  components: {
    LinkButton
  },
  setup (props, ctx: SetupContext) {
    const { $store, $axios, $router } = ctx?.root
    const ARTICLES_LIMIT = 6

    const pages = computed(() => $store.getters['articles/pages'])

    const activePage = computed(() => {
      const page = ctx.root.$route.query.page

      if (!page) {
        $router.push({ query: { page: '1' } })
      } else {
        $store.dispatch('articles/getArticles', {
          $axios,
          limit: ARTICLES_LIMIT,
          offset: (Number(page) - 1) * ARTICLES_LIMIT
        })
      }
      return page
    })

    return {
      pages, activePage
    }
  }
})
</script>

<style scoped lang="scss">
  .wrapper {
    display: grid;
    grid-auto-flow: column;
    column-gap: .6rem;
    width: max-content;
  }

  .switch-button {
    width: 4rem;
    height: 4rem;
    padding: 0;
    border-radius: .5rem;
  }

  .arrow {
    height: 50%;
  }
</style>
