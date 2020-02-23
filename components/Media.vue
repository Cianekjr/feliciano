<template>
  <ul class="list">
    <li v-for="item in media" :key="item.id">
      <a :href="item.link" class="item-link">
        <img :src="`icons/${item.icon}`" :alt="item.name" class="icon">
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Media } from '~/models/definitions'

export default defineComponent({
  setup () {
    const media: Media[] = [
      {
        id: 0,
        name: 'Twitter',
        link: 'https://www.twitter.com/',
        icon: 'twitter.svg'
      },
      {
        id: 1,
        name: 'Facebook',
        link: 'https://www.facebook.com/',
        icon: 'facebook.svg'
      },
      {
        id: 2,
        name: 'Instagram',
        link: 'https://www.instagram.com/',
        icon: 'instagram.svg'
      }
    ]
    return { media }
  }
})
</script>

<style scoped lang="scss">
  .list {
    display: grid;
    grid-auto-flow: column dense;
    width: min-content;
    column-gap: 1rem;
  }

  .item-link {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, .05);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 60%;
    height: 60%;
  }
</style>
