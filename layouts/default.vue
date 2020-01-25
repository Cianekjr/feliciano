<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { createComponent, ref, onMounted, onBeforeUnmount } from '@vue/composition-api'
import Header from '~/components/Header.vue'
import { viewportStore } from '~/store'

export default createComponent({
  components: {
    Header
  },
  setup () {
    const handleResize = () => {
      viewportStore.setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    const isMobileViewport = ref(false)
    onMounted(() => {
      window.addEventListener('resize', handleResize)
      handleResize()
    })
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      isMobileViewport, handleResize
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
  color: #fff;
}

ul, li {
  list-style-type: none;
}
</style>
