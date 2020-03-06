<template>
  <div>
    <container class="container">
      <Heading heading="Services" subheading="Catering Services" />
      <ul class="list">
        <li v-for="item in data" :key="item.id" class="item">
          <h3 class="title">
            {{ item.title }}
          </h3>
          <p class="description">
            {{ item.description }}
          </p>
        </li>
      </ul>
    </container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Heading from '~/components/Heading.vue'
import container from '~/layouts/container.vue'

export default defineComponent({
  components: {
    Heading,
    container
  },
  setup () {
    const data = [
      {
        id: 0,
        title: 'Birthday Party',
        description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
      },
      {
        id: 1,
        title: 'Business Meetings',
        description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
      },
      {
        id: 2,
        title: 'Wedding Party',
        description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
      }
    ]
    return {
      data
    }
  }
})
</script>

<style scoped lang="scss">
  .container {
    padding: 6rem 1rem 10rem;
  }

  .list {
    display: grid;
    gap: 4rem;
    padding: 3rem 0;
  }

  .item {
    display: grid;
    gap: 2rem;
    text-align: center;
  }

  .title {
    font-size: 2.4rem;
    font-weight: 500;
    color: #000;
    line-height: 1.2;
  }

  .description {
    font-size: 1.7rem;
    line-height: 2;
    color: #666;
  }
  @media (min-width: 840px) {
    .list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
