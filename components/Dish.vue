<template>
  <li class="dish" :class="props.reverse && 'reverse'">
    <img src="../static/images/breakfast-2.jpg" class="image" :alt="props.dish.name">
    <div class="description">
      <h3 class="name">
        {{ props.dish.name }}
      </h3>
      <span class="price">${{ props.dish.price }}</span>
      <p class="ingredients">
        {{ props.dish.ingredients }}
      </p>
      <nuxt-link to="#" class="link">
        Order now
      </nuxt-link>
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
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    return { props }
  }
})
</script>

<style scoped lang="scss">
  .dish {
    display: flex;
    flex-direction: column;
  }

  .image {
    display: block;
    max-height: 20rem;
    overflow: hidden;
    object-fit: cover;
    width: 100%;
  }

  .description {
    display: grid;
    align-items: center;
    gap: 1rem;
    grid-template-columns: 4fr 1fr;
    border: 1px solid #e6e6e6;
    padding: 3rem 2rem;
    color: #333;
    line-height: 1.5;
  }

  .name {
    font-size: 2rem;
    font-weight: 600;
  }

  .price {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    color: #c8a97e;
  }

  .ingredients {
    grid-column: span 2;
    font-size: 1.7rem;
  }

  .link {
    display: block;
    border: 1px solid #c8a97e;
    background-color: #c8a97e;
    color: #fff;
    font-size: 1.6rem;
    padding: .6rem 1.2rem;
    width: max-content;
    height: min-content;
    border-radius: .2rem;

    &:hover {
      color: #c8a97e;
      background-color: transparent;
    }
  }

  @media (min-width: 640px) {
    .dish {
      flex-direction: row;
      min-height: 20rem;

      &.reverse {
        flex-direction: row-reverse;
      }
    }

    .image {
      max-height: 100%;
      width: 50%;
    }

    .description {
      width: 50%;
    }
  }
</style>
