<template>
  <container v-if="reviews.length" class="container">
    <Heading heading="Testimony" subheading="Happy Customer" />
    <VueSlickCarousel
      class="carousel"
      v-bind="slickOptions"
    >
      <section v-for="review in reviews" :key="review.id" class="card">
        <div class="content">
          <img class="photo" :src="require(`../assets/images/${review.img}`)" :alt="`${review.name} - ${review.position}`">
          <p class="about">
            {{ review.about }}
          </p>
          <h3 class="name">
            {{ review.name }}
          </h3>
          <h4 class="position">
            {{ review.position }}
          </h4>
        </div>
      </section>
    </VueSlickCarousel>
  </container>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onServerPrefetch, SetupContext, ref } from '@vue/composition-api'
import container from '~/layouts/container.vue'
import Heading from '~/components/Heading.vue'
import { Review } from '~/models/definitions'

export default defineComponent({
  components: {
    container,
    Heading
  },
  setup (_: any, ctx: SetupContext) {
    const { $store, $axios } = ctx?.root
    onServerPrefetch(() => {
      return $store.dispatch('reviews/getReviews', {
        $axios
      })
    })

    const slickOptions = ref({
      dots: true,
      slidesToShow: 3,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnDotsHover: true,
      pauseOnHover: true,
      pauseOnFocus: true,
      responsive: []
    })

    const slickResposive = [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 624,
        settings: {
          slidesToShow: 1
        }
      }
    ]

    onMounted(() => {
      $store.dispatch('reviews/getReviews', {
        $axios
      })
      // we need to add responsive on mounted (client side)
      // instead there would be missmatching between dom and v-dom
      slickOptions.value.responsive = slickResposive
    })

    const reviews: any = computed((): Review[] => $store.getters['reviews/reviews'])

    return {
      reviews, slickOptions
    }
  }
})
</script>

<style scoped lang="scss">
  .container {
    padding: 6rem 1rem 10rem;
  }

  .carousel {
    margin-top: 5rem;
    cursor: grab;
  }

  .content {
    margin: 0 20px;
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 2rem;
    font-weight: 400;
    text-align: center;
    padding-bottom: 5rem;
  }

  .photo {
    height: 13rem;
    width: 13rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  .about {
    font-size: 1.7rem;
    line-height: 2;
    color: #666;
  }

  .name {
    font-size: 2.2rem;
  }

  .position {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: .2rem;
    color: #666;
  }
</style>
