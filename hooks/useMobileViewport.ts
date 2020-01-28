import { onMounted, onBeforeUnmount, computed } from '@vue/composition-api'
import { viewportStore } from '~/store'

const useMobileViewport = () => {
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

export default useMobileViewport
