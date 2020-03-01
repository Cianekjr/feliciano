<template>
  <section class="wrapper">
    <Article v-for="article in articles" :key="article.id" :article="article" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from '@vue/composition-api'
import { Article as ArticleInterface } from '~/models/definitions'
import Article from '~/components/Article.vue'

export default defineComponent({
  components: {
    Article
  },
  setup (props, ctx: SetupContext) {
    const { $store } = ctx?.root
    const articles: any = computed((): ArticleInterface[] => $store.getters['articles/articles'])
    return {
      articles
    }
  }
})
</script>

<style scoped lang="scss">
  .wrapper {
    display: grid;
    gap: 3rem;
  }

  @media (min-width: 640px) {
    .wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
