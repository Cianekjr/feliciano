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
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'
import Nav from '~/components/Nav.vue'
import InfoBar from '~/components/InfoBar.vue'
import Footer from '~/components/Footer.vue'
import useScrollOffset from '~/hooks/useScrollOffset'
import useMobileViewport from '~/hooks/useMobileViewport'

export default defineComponent({
  components: {
    Nav,
    InfoBar,
    Footer
  },
  setup (_: any, ctx: SetupContext) {
    const { isMobile } = useMobileViewport(ctx)
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
    z-index: 20;
  }

  .fixed {
    position: fixed;
  }
</style>
