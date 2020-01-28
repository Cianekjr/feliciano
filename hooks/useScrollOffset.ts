import { onMounted, onBeforeUnmount, ref } from '@vue/composition-api'

const useScrollOffset = () => {
  const isScrolled = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.pageYOffset > 0.75 * window.innerHeight
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isScrolled
  }
}

export default useScrollOffset
