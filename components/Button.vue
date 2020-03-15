<template>
  <button
    class="button"
    :type="props.type"
    :disabled="props.disabled"
    :name="props.name"
    :class="props.reverse && 'reverse'"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean
    },
    name: {
      type: String,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  setup (props: any) {
    return { props }
  }
})
</script>

<style scoped lang="scss">
  .button {
    width: 100%;
    height: 5.2rem;
    background-color: #c8a97e;
    border: 1px solid #c8a97e;
    border-radius: .2rem;
    font-size: 1.6rem;
    color: #fff;
    padding: .6rem 1.6rem;
    font-family: inherit;
    font-weight: inherit;
    cursor: pointer;

    &.reverse {
      background-color: #fff;
      color: #c8a97e;
    }
  }
</style>
