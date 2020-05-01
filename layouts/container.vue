<template>
  <div class="capsule" :class="{ 'no-space': props.noSpace }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    noSpace: {
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
  .capsule {
    max-width: 380px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .capsule.no-space {
    max-width: 1140px;
    padding: 0;
  }

  @media (min-width: 420px) {
    .capsule:not(.no-space) {
      max-width: 400px;
    }
  }

  @media (min-width: 480px) {
    .capsule:not(.no-space) {
      max-width: 420px;
    }
  }

  @media (min-width: 520px) {
    .capsule:not(.no-space) {
      max-width: 480px;
    }
  }

  @media (min-width: 620px) {
    .capsule:not(.no-space) {
      max-width: 580px;
    }
  }

  @media (min-width: 760px) {
    .capsule:not(.no-space) {
      max-width: 700px;
    }
  }

  @media (min-width: 900px) {
    .capsule:not(.no-space) {
      max-width: 800px;
    }
  }

  @media (min-width: 1050px) {
    .capsule:not(.no-space) {
      max-width: 900px;
    }
  }

  @media (min-width: 1240px) {
    .capsule:not(.no-space) {
      max-width: 1040px;
    }
  }

  @media (min-width: 1360px) {
    .capsule:not(.no-space) {
      max-width: 1140px;
    }
  }
</style>
