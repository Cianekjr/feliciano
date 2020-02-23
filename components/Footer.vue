<template>
  <footer class="footer">
    <container class="container">
      <section class="section">
        <h2 class="title">
          Feliciano
        </h2>
        <p class="paragraph">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
        <Media />
      </section>
      <section class="section">
        <h2 class="title">
          Open Hours
        </h2>
        <OpenHours />
      </section>
      <section class="section">
        <h2 class="title">
          Instagram
        </h2>
        <Gallery />
      </section>
      <section class="section">
        <h2 class="title">
          Newsletter
        </h2>
        <p class="paragraph">
          Far far away, behind the word mountains, far from the countries.
        </p>
        <Newsletter />
      </section>
      <section class="section copyright">
        <p>Copyright ©2020 | This template is made by Colorlib</p>
      </section>
    </container>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import container from '~/layouts/container.vue'
import OpenHours from '~/components/OpenHours.vue'
import Newsletter from '~/components/Newsletter.vue'
import Media from '~/components/Media.vue'
import Gallery from '~/components/Gallery.vue'

export default defineComponent({
  components: {
    container,
    OpenHours,
    Newsletter,
    Media,
    Gallery
  }
})
</script>

<style scoped lang="scss">
  .footer {
    padding: 8rem 0;
    background-color: #141313;
  }

  .section {
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2.4rem;
    font-size: 1.4rem;
    line-height: 2;
    color: rgba(255, 255, 255, .7);
  }

  .title {
    font-size: 1.8rem;
    margin-bottom: 4rem;
    color: #fff;
  }

  .copyright {
    margin-top: 4rem;
  }

  .paragraph {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }

    .copyright {
      text-align: center;
      grid-column-start: span 2;
    }

    .paragraph {
      margin-bottom: 1.6rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      grid-template-columns: repeat(4, 1fr);
    }

    .copyright {
      text-align: center;
      grid-column-start: span 4;
    }
  }
</style>
