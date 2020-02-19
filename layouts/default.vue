<template>
  <div class="app">
    <div class="header">
      <InfoBar v-if="!isMobile" />
      <Nav />
    </div>
    <transition name="slide">
      <Nav v-show="isScrolled" is-fixed class="header fixed" />
    </transition>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Nav from '~/components/Nav.vue'
import InfoBar from '~/components/InfoBar.vue'
import useScrollOffset from '~/hooks/useScrollOffset'
import useMobileViewport from '~/hooks/useMobileViewport'

export default defineComponent({
  components: {
    Nav,
    InfoBar
  },
  setup () {
    const { isMobile } = useMobileViewport()
    const { isScrolled } = useScrollOffset()

    return {
      isScrolled,
      isMobile
    }
  }
})
</script>

<style scoped lang="scss">
  .app {
    position: relative;
  }

  .header {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .fixed {
    position: fixed;
  }
</style>
