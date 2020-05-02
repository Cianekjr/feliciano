<template>
  <li class="dish">
    <img :src="require(`../assets/images/${props.dish.img}`)" class="image" :alt="props.dish.name">
    <div class="description">
      <h3 class="name">
        {{ props.dish.name }}
      </h3>
      <p class="ingredients">
        {{ props.dish.ingredients }}
      </p>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
  setup (props: any) {
    return { props }
  }
})
</script>

<style scoped lang="scss">
  .dish {
    display: grid;
    grid-auto-flow: row;
    justify-items: center;
    text-align: center;
    row-gap: 2rem;
  }

  .image {
    width: 14rem;
    height: 14rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .name {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.5;
    color: #333;
  }

  .ingredients {
    font-size: 1.4rem;
    line-height: 2;
    color: #666;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    .image {
      width: 9rem;
      height: 9rem;
    }

    .name {
      color: #fff;
    }

    .ingredients {
      color: rgba(255, 255, 255, .8);
    }
  }

  @media (min-width: 1280px) {
    .image {
      width: 12rem;
      height: 12rem;
    }
  }
</style>
