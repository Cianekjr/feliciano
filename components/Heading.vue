<template>
  <div class="wrapper" :class="{ secondary: props.secondary }">
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
    },
    secondary: {
      type: Boolean,
      default: false
    }
  },
  setup (props: any) {
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

  .wrapper.secondary {
    .heading {
      margin-bottom: 3rem;
      font-size: 6rem;
    }

    .subheading {
      color: #fff;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 2.5rem;
    }
  }

  @media (min-width: 420px) {
    .heading {
      font-size: 10rem;
      margin-bottom: -5rem;
    }

    .subheading {
      font-size: 5rem;
    }

    .wrapper.secondary {
      .heading {
        font-size: 7rem;
      }

      .subheading {
        font-size: 3rem;
      }
    }
  }

  @media (min-width: 768px) {
    .wrapper.secondary {
      .heading {
        font-size: 8rem;
      }

      .subheading {
        font-size: 6rem;
      }
    }
  }
</style>
