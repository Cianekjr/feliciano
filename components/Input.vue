<template>
  <label
    class="label"
    :class="tag"
  >
    {{ props.label }}
    <textarea
      v-if="tag === 'textarea'"
      v-model="message"
      class="base-input"
      :class="theme"
      v-bind="attrs"
    />
    <input
      v-else
      v-model="message"
      class="base-input"
      :class="theme"
      v-bind="attrs"
    >
  </label>
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext } from '@vue/composition-api'

export default defineComponent({
  props: {
    store: {
      type: String,
      required: true
    },
    commit: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: 'black'
    },
    tag: {
      type: String,
      default: 'input'
    },
    label: {
      type: String
    }
  },
  setup (props: any, ctx: SetupContext) {
    const { $store } = ctx?.root
    const { attrs } = ctx

    const message = computed({
      get () {
        return $store.getters[`${props.store}/${attrs.name}`]
      },
      set (value: String) {
        $store.commit(`${props.store}/${props.commit}`, value)
      }
    })
    return { props, message, attrs }
  }
})
</script>

<style scoped lang="scss">
  .label {
    width: 100%;
    display: block;
    font-size: 1.7rem;
    line-height: 2;
    margin-bottom: .5rem;
    font-weight: 600;
    color: #000;

    &.textarea .base-input {
      height: 15.6rem;
    }
  }

  .base-input {
    height: 5.2rem;
    width: 100%;
    border-radius: .2rem;
    background-color: rgba(255, 255, 255, .1);
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: inherit;
    font-weight: 500;
    padding: .6rem 1.2rem;
    transition: border-color .4s ease;

    &.black {
      border: 1px solid rgba(0, 0, 0, .1);
      color: rgba(255, 255, 255, .7);
      text-align: center;

      &::placeholder {
        color: #bbb;
      }

      &:focus, &:active {
        border-color: #ccc;
      }
    }

    &.white {
      border: 1px solid rgba(0, 0, 0, .1);
      color: #000;
      text-align: left;

      &::placeholder {
        color: #000;
      }

      &:focus, &:active {
        border-color: #000;
      }
    }
  }
</style>
