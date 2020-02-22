import { onMounted, onBeforeUnmount, computed, SetupContext } from '@vue/composition-api'

const useMobileViewport = (ctx: SetupContext) => {
  const handleResize = () => {
    ctx.root.$store.commit('viewport/setViewport', {
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  const isMobile = computed(() => ctx.root.$store.getters['viewport/isMobile'])

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

export default useMobileViewport
