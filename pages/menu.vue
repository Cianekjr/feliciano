<template>
  <div class="wrapper">
    <Header :bg-index="3" title="Specialties" half />
    <container class="container">
      <TabsMenu />
    </container>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import container from '~/layouts/container.vue'
import Header from '~/components/Header.vue'
import TabsMenu from '~/components/TabsMenu.vue'

export default createComponent({
  components: {
    container,
    Header,
    TabsMenu
  },
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
  .container {
    padding: 12rem 1rem;
  }
</style>
