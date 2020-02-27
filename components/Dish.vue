<template>
  <div class="dish">
    {{ props.dish.name }}
  </div>
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
  setup (props) {
    return { props }
  }
})
</script>

<style scoped lang="scss">
  .dish {
    border: 1px solid black;
  }
</style>
