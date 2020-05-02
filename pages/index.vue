<template>
  <main>
    <div class="container">
      <HeaderCarousel />
      <DishesGroup class="dishes" />
    </div>
    <Services class="services" />
    <ReservationSection />
    <CustomersCarousel />
    <container class="blog">
      <Heading heading="Blog" subheading="Recent Posts" />
      <ArticlesWall />
    </container>
  </main>
</template>

<script lang="ts">
import { defineComponent, onServerPrefetch, SetupContext } from '@vue/composition-api'
import HeaderCarousel from '~/components/HeaderCarousel.vue'
import DishesGroup from '~/components/DishesGroup.vue'
import Services from '~/components/Services.vue'
import ReservationSection from '~/components/ReservationSection.vue'
import CustomersCarousel from '~/components/CustomersCarousel.vue'
import ArticlesWall from '~/components/ArticlesWall.vue'
import container from '~/layouts/container.vue'
import Heading from '~/components/Heading.vue'

export default defineComponent({
  components: {
    HeaderCarousel,
    DishesGroup,
    Services,
    ReservationSection,
    CustomersCarousel,
    ArticlesWall,
    container,
    Heading
  },
  setup (props: any, ctx: SetupContext) {
    const { $store, $axios } = ctx?.root
    const ARTICLES_LIMIT = 3

    onServerPrefetch(() => {
      return $store.dispatch('articles/getArticles', {
        $axios,
        limit: ARTICLES_LIMIT,
        offset: 0
      })
    })

    $store.dispatch('articles/getArticles', {
      $axios,
      limit: ARTICLES_LIMIT,
      offset: 0
    })
  }
})
</script>

<style scoped lang="scss">
  .services {
    background-color: #fafafa;
  }

  .blog {
    padding: 1rem 0 7rem;
    display: grid;
    row-gap: 5rem;
  }

  @media (min-width: 768px) {
    .container {
      position: relative;
    }

    .dishes {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
</style>
