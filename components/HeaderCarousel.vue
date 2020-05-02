<template>
  <VueSlickCarousel
    ref="carousel"
    class="carousel"
    v-bind="slickOptions"
  >
    <section v-for="n in 5" :key="n" class="card">
      <div class="content" :style="`background-image: url(${require(`../assets/images/bg-${n}.jpg`)})`">
        <div class="overlay">
          <Heading heading="Feliciano" :subheading="subheadings[n - 1]" secondary />
        </div>
      </div>
    </section>
    <template #prevArrow>
      <button ref="arrowLeft" class="arrow arrow-prev">
        <img :src="require(`../assets/icons/arrow.svg`)" alt="Previous card">
      </button>
    </template>
    <template #nextArrow>
      <button ref="arrowRight" class="arrow arrow-next">
        <img :src="require(`../assets/icons/arrow.svg`)" alt="Next card">
      </button>
    </template>
  </VueSlickCarousel>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from '@vue/composition-api'
import Heading from '~/components/Heading.vue'

export default defineComponent({
  components: {
    Heading
  },
  setup () {
    const carousel = ref<any>()
    const slickOptions = {
      lazyLoad: 'ondemand',
      arrows: true,
      dots: false,
      fade: true,
      slidesToShow: 1,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      pauseOnFocus: true
    }

    const subheadings = [
      'Welcome',
      'Best restaurant',
      'Delicious specialties',
      'Nutritious & tasty',
      'Visit us'
    ]

    const handleMouseEnter = () => {
      carousel.value.$el.classList.add('hovered')
    }

    const handleMouseLeave = () => {
      carousel.value.$el.classList.remove('hovered')
    }

    onMounted(() => {
      if (carousel.value) {
        carousel.value.$el.addEventListener('mouseenter', handleMouseEnter)
        carousel.value.$el.addEventListener('mouseleave', handleMouseLeave)
      }
    })

    onBeforeUnmount(() => {
      if (carousel.value) {
        carousel.value.$el.removeEventListener('mouseenter', handleMouseEnter)
        carousel.value.$el.removeEventListener('mouseleave', handleMouseLeave)
      }
    })

    return {
      slickOptions, subheadings, carousel
    }
  }
})
</script>

<style scoped lang="scss">
  .carousel {
    cursor: grab;
    overflow: hidden;
    position: relative;
  }

  .card {
    height: 100vh;
  }

  .content {
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    position: absolute;
    z-index: 10;
    font-size: 5rem;
    width: 4rem;
    height: 4rem;
    top: 50%;
    padding: 1rem;
    transition: transform .5s ease-in-out;

    &::before {
      content: none;
    }
  }

  .arrow-prev {
    transform: rotateY(180deg) translateX(0, -50%);
    right: 100%;
    left: auto;
  }

  .arrow-next {
    transform: translate(0, -50%);
    left: 100%;
  }

  .hovered {
    .arrow-prev {
      transform: rotateY(180deg) translate(-100%, -50%);
    }

    .arrow-next {
      transform: translate(-100%, -50%);
    }
  }

  @media (min-width: 1024px) {
    .arrow {
      width: 8rem;
      height: 8rem;
      padding: 2rem;
    }
  }
</style>
