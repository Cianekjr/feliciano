<template>
  <input
    v-model="message"
    class="input"
    :type="props.type"
    :name="props.name"
    :placeholder="props.placeholder"
    :required="props.required"
  >
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    store: {
      type: String,
      required: true
    },
    commit: {
      type: String,
      required: true
    },
    placeholder: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  setup (props, ctx) {
    const message = computed({
      get () {
        return ctx.root.$store.getters[`${props.store}/${props.name}`]
      },
      set (value) {
        ctx.root.$store.commit(`${props.store}/${props.commit}`, value)
      }
    })
    return { props, message }
  }
})
</script>

<style scoped lang="scss">
  .input {
    width: 100%;
    border-radius: .2rem;
    background-color: rgba(255, 255, 255, .1);
    color: rgba(255, 255, 255, .7);
    height: 5.2rem;
    font-size: 1.6rem;
    line-height: 1.5;
    text-align: center;
    font-family: inherit;
    font-weight: inherit;
    padding: .6rem 1.2rem;
  }
</style>
