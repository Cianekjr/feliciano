<template>
  <header :class="[props.bgIndex && bgImage, props.half && 'half']" class="wrapper">
    <div class="overlay">
      <h2 class="title">
        {{ props.title }}
      </h2>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    bgIndex: {
      type: Number,
      default: 1
    },
    half: Boolean,
    title: String
  },
  setup (props) {
    const bgImage = `bg${props.bgIndex}`
    return { props, bgImage }
  }
})
</script>

<style scoped lang="scss">
  .wrapper {
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;

    &.bg1 {
      background-image: url('~assets/images/bg_1.jpg');
    }

    &.bg2 {
      background-image: url('~assets/images/bg_2.jpg');
    }

    &.bg3 {
      background-image: url('~assets/images/bg_3.jpg');
    }

    &.bg4 {
      background-image: url('~assets/images/bg_4.jpg');
    }

    &.bg5 {
      background-image: url('~assets/images/bg_5.jpg');
    }

    &.half {
      height: 50vh;
    }
  }

  .overlay {
    background-color: rgba(0, 0, 0, .7);
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .title {
    margin-bottom: 5rem;
    font-size: 4rem;
    color: #fff;
  }

  @media (min-width: 420px) {
    .title {
      font-size: 5rem;
    }
  }
</style>
