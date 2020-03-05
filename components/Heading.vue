<template>
  <div class="wrapper">
    <h2 class="heading">
      {{ props.heading }}
    </h2>
    <p class="subheading">
      {{ props.subheading }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    heading: {
      type: String,
      required: true
    },
    subheading: {
      type: String,
      required: true
    }
  },
  setup (props) {
    return {
      props
    }
  }
})
</script>

<style scoped lang="scss">
  .wrapper {
    text-align: center;
    padding: 1rem 0;
  }

  .heading {
    font-size: 8rem;
    font-weight: 400;
    line-height: 1;
    color: #c8a97e;
    font-family: Great Vibes, cursive;
    margin-bottom: -4rem;
  }

  .subheading {
    font-size: 4rem;
    line-height: 1.2;
    font-weight: 900;
    color: #333;
  }

  @media (min-width: 420px) {
    .heading {
      font-size: 10rem;
      margin-bottom: -5rem;
    }

    .subheading {
      font-size: 5rem;
    }
  }
</style>
