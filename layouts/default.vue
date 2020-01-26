<template>
  <div>
    <InfoBar v-if="!isMobile" />
    <Header />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { createComponent, onMounted, onBeforeUnmount, computed } from '@vue/composition-api'
import Header from '~/components/Header.vue'
import InfoBar from '~/components/InfoBar.vue'
import { viewportStore } from '~/store'

export default createComponent({
  components: {
    Header,
    InfoBar
  },
  setup () {
    const handleResize = () => {
      viewportStore.setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    const isMobile = computed(() => viewportStore.isMobile)

    onMounted(() => {
      window.addEventListener('resize', handleResize)
      handleResize()
    })
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      isMobile
    }
  }
})
</script>

<style>
html {
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 10px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  min-height: 100%;
}

body {
  min-height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
}

a {
  display: block;
  text-decoration: none;
  color: inherit;
}

ul, li {
  list-style-type: none;
}
</style>
