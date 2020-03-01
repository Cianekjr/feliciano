<template>
  <nuxt-link
    class="link"
    :class="[props.reverse && 'reverse', props.active && 'active', props.disabled && 'disabled']"
    :to="props.to"
  >
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
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
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c8a97e;
    border: 1px solid #c8a97e;
    border-radius: .2rem;
    font-size: 1.6rem;
    color: #fff;
    padding: .6rem 1.6rem;
    font-family: inherit;
    font-weight: inherit;
    width: max-content;
    height: min-content;
    transition: background-color .3s ease, color .3s ease;

    &:hover {
      color: #c09d6c;
      background-color: transparent;
    }

    &.active {
      color: #c8a97e;
      background-color: transparent;
    }

    &.disabled {
      pointer-events: none;
      cursor: default;
      filter: grayscale(100%);
      background-color: rgba(0, 0, 0, .1);
    }

    &.reverse {
      background-color: transparent;
      color: #c8a97e;

      &:hover {
        color: #fff;
        background-color: #c09d6c;
      }

      &.active {
        color: #fff;
        background-color: #c8a97e;
      }

      &.disabled {
        pointer-events: none;
        cursor: default;
        filter: grayscale(100%);
        background-color: rgba(0, 0, 0, .1);
      }
    }
  }
</style>
