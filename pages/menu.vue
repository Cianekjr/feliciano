<template>
  <div class="wrapper">
    <Header :bg-index="3" title="Specialties" half />
    <container class="container">
      <TabsMenu class="menu" />
      <MenuDishes />
    </container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import container from '~/layouts/container.vue'
import Header from '~/components/Header.vue'
import TabsMenu from '~/components/TabsMenu.vue'
import MenuDishes from '~/components/MenuDishes.vue'

export default defineComponent({
  components: {
    container,
    Header,
    TabsMenu,
    MenuDishes
  }
})
</script>

<style scoped lang="scss">
  .container {
    padding: 12rem 1rem;
  }

  .menu {
    margin-bottom: 4rem;
  }
</style>
