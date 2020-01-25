<template>
  <header class="header">
    <h1 class="header__title">
      Feliciano
    </h1>
    <button @click="handleMenuShow" class="header__button">
      Menu
    </button>
    <nav v-if="showMenu" class="header__nav">
      <nuxt-link to="/">
        Home
      </nuxt-link>
      <nuxt-link to="/about">
        About
      </nuxt-link>
      <nuxt-link to="/menu">
        Menu
      </nuxt-link>
      <nuxt-link to="/stories">
        Stories
      </nuxt-link>
      <nuxt-link to="/contact">
        Contact
      </nuxt-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'

export default createComponent({
  setup () {
    const showMenu = ref(false)
    const handleMenuShow = () => {
      showMenu.value = !showMenu.value
    }
    return {
      showMenu, handleMenuShow
    }
  }
})
</script>

<style lang="scss">
.header {
  color: red;
  &__title {
    color: blue;
    font-size: 30px;
  }
}
</style>
